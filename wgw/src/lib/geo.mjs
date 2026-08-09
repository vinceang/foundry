/**
 * One projection, shared by the build and the browser.
 *
 * The land outlines are projected at build time; the terminator and the
 * site nodes are projected in the browser, every minute, against real solar
 * position. If those two used different implementations they would drift
 * apart by a few pixels and the whole conceit — that a node sits exactly on
 * the boundary between night and morning — would quietly be a lie. So both
 * call the functions in this file, and the build asserts they agree with
 * d3-geo to sub-pixel tolerance before it will emit anything.
 *
 * Projection: Equal Earth (Šavrič, Patterson & Jenny, 2018). Equal-area, so
 * no country is flattered by latitude, and the northern sites — Numedal,
 * Wester Ross — keep their true size instead of being inflated by Mercator.
 */

const A1 = 1.340264;
const A2 = -0.081106;
const A3 = 0.000893;
const A4 = 0.003796;
const SQRT3 = Math.sqrt(3);
const RAD = Math.PI / 180;

/** Equal Earth forward projection. Returns unit-scale [x, y], y down. */
export function equalEarth(lonDeg, latDeg) {
  const lam = lonDeg * RAD;
  const phi = latDeg * RAD;
  const theta = Math.asin((SQRT3 / 2) * Math.sin(phi));
  const t2 = theta * theta;
  const t6 = t2 * t2 * t2;
  const t8 = t6 * t2;
  const dydt = A1 + 3 * A2 * t2 + 7 * A3 * t6 + 9 * A4 * t8;
  const x = (2 * SQRT3 * lam * Math.cos(theta)) / (3 * dydt);
  const y = A1 * theta + A2 * theta * t2 + A3 * theta * t6 + A4 * theta * t8;
  return [x, -y];
}

/** Unit-space bounds of the whole globe, used to fit the viewBox. */
export const EE_BOUNDS = (() => {
  const [xMax] = equalEarth(180, 0);
  const [, yTop] = equalEarth(0, 90);
  return { xMax, yMax: -yTop };
})();

/**
 * Build a projector that maps lon/lat into a viewBox of `width` × `height`,
 * with the globe fitted and centred. Identical maths on both sides.
 */
export function makeProjector(width, height, padding = 0) {
  const w = width - padding * 2;
  const h = height - padding * 2;
  const scale = Math.min(w / (EE_BOUNDS.xMax * 2), h / (EE_BOUNDS.yMax * 2));
  const cx = width / 2;
  const cy = height / 2;
  return function project(lonDeg, latDeg) {
    const [x, y] = equalEarth(lonDeg, latDeg);
    return [cx + x * scale, cy + y * scale];
  };
}

/* ------------------------------------------------------------------ sun */

/**
 * Subsolar point — the one place on Earth where the sun is straight up.
 * Low-precision NOAA solar position; good to well under a degree, which is
 * far finer than a 1000px-wide map can render.
 */
export function subsolarPoint(date = new Date()) {
  const n = date.getTime() / 86400000 + 2440587.5 - 2451545.0; // days from J2000
  const L = (280.46 + 0.9856474 * n) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360) * RAD;
  const lambda = (L + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * RAD;
  const eps = (23.439 - 0.0000004 * n) * RAD;

  const dec = Math.asin(Math.sin(eps) * Math.sin(lambda)) / RAD;
  let ra = Math.atan2(Math.cos(eps) * Math.sin(lambda), Math.cos(lambda)) / RAD;
  const gmst = (18.697374558 + 24.06570982441908 * n) % 24;
  let lon = ra - gmst * 15;
  lon = ((((lon + 180) % 360) + 360) % 360) - 180;
  return { lat: dec, lon };
}

/** Solar altitude in degrees at a place, for a moment. */
export function solarAltitude(latDeg, lonDeg, sun) {
  const phi = latDeg * RAD;
  const dec = sun.lat * RAD;
  const H = (lonDeg - sun.lon) * RAD;
  return (
    Math.asin(
      Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H)
    ) / RAD
  );
}

/**
 * The latitude at which the sun sits at a given altitude, for one longitude.
 * Solving sin(alt) = sinφ·sinδ + cosφ·cosδ·cosH for φ gives a clean closed
 * form, which means the terminator can be walked longitude by longitude as an
 * open curve — no spherical polygon clipping, and nothing to wrap wrongly at
 * the antimeridian.
 */
export function terminatorLatitude(lonDeg, sun, altDeg = 0) {
  const d = sun.lat * RAD;
  const H = (lonDeg - sun.lon) * RAD;

  // sin(alt) = sinφ·sinδ + cosφ·(cosδ·cosH)  is  A·sinφ + B·cosφ = k,
  // which collapses to R·sin(φ + ψ) = k. Solving in that form stays stable
  // through the equinoxes, where a tan(δ) formulation blows up.
  const A = Math.sin(d);
  const B = Math.cos(d) * Math.cos(H);
  const R = Math.hypot(A, B);
  const k = Math.sin(altDeg * RAD);

  if (R < 1e-12) return null;
  if (Math.abs(k) > R) return null; // sun never reaches this altitude here

  const ratio = k / R;
  const psi = Math.atan2(B, A);
  const asin = Math.asin(ratio);

  // R·sin(φ+ψ) = k has two families of solutions. Only one of them is a real
  // latitude; take both, wrap by full turns (a half turn would flip the sine
  // and silently give the wrong hemisphere), and keep what survives.
  const TWO_PI = Math.PI * 2;
  const wrap = (x) => {
    let v = x % TWO_PI;
    if (v > Math.PI) v -= TWO_PI;
    if (v < -Math.PI) v += TWO_PI;
    return v;
  };

  let best = null;
  let bestErr = Infinity;
  for (const cand of [wrap(asin - psi), wrap(Math.PI - asin - psi)]) {
    if (Math.abs(cand) > Math.PI / 2 + 1e-9) continue;
    const phi = Math.max(-90, Math.min(90, cand / RAD));
    const err = Math.abs(solarAltitude(phi, lonDeg, sun) - altDeg);
    if (err < bestErr) {
      bestErr = err;
      best = phi;
    }
  }
  return best;
}

/** Which hemisphere is dark: +1 means night lies north of the terminator. */
export function nightIsNorth(sun) {
  return sun.lat < 0 ? 1 : -1;
}

/**
 * Points along the great circle between two places.
 *
 * Used to draw the flight the camera takes between one site and the next.
 * Spherical interpolation, so the path is the real shortest route over the
 * globe rather than a straight line on a flat plate — which is the whole
 * reason it is worth drawing at all.
 */
export function greatCircle(a, b, steps = 64) {
  const φ1 = a.lat * RAD;
  const λ1 = a.lon * RAD;
  const φ2 = b.lat * RAD;
  const λ2 = b.lon * RAD;

  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((φ2 - φ1) / 2) ** 2 +
          Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2
      )
    );

  // Coincident points have no arc to draw.
  if (!isFinite(d) || d < 1e-9) return [[a.lon, a.lat]];

  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const f = i / steps;
    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    pts.push([Math.atan2(y, x) / RAD, Math.atan2(z, Math.hypot(x, y)) / RAD]);
  }
  return pts;
}
