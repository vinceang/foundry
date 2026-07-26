// The Board's chart — real geography, computed at build time.
//
// Everything on the chart (coastline, cities, route arcs) goes through the one
// projection below, so the pieces cannot drift out of agreement with each
// other. Web Mercator over the band we actually fly: 100°W–150°E, equator to
// 72°N. Mercator because the alternative — stretching latitude by a constant —
// is only right at one parallel and visibly wrong everywhere else.

export const VIEW = { w: 800, h: 360 };

const LON0 = -100; // left edge
const LON1 = 150; // right edge
const LAT_TOP = 72; // top edge

const K = VIEW.w / (LON1 - LON0); // px per degree of longitude
const RAD = Math.PI / 180;

// Mercator's vertical coordinate, in "degrees of longitude" so it shares K.
const merc = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * RAD) / 2)) / RAD;

const Y0 = merc(LAT_TOP) * K; // shifts LAT_TOP to y = 0

export const project = (lat, lon) => [(lon - LON0) * K, Y0 - merc(lat) * K];

/** Great-circle path, sampled — the line an aircraft actually flies. */
export function greatCircle([lat1, lon1], [lat2, lon2], steps = 64) {
  const φ1 = lat1 * RAD, λ1 = lon1 * RAD, φ2 = lat2 * RAD, λ2 = lon2 * RAD;
  const d = 2 * Math.asin(Math.sqrt(
    Math.sin((φ2 - φ1) / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2
  ));
  if (!d) return [project(lat1, lon1)];

  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const f = i / steps;
    const a = Math.sin((1 - f) * d) / Math.sin(d);
    const b = Math.sin(f * d) / Math.sin(d);
    const x = a * Math.cos(φ1) * Math.cos(λ1) + b * Math.cos(φ2) * Math.cos(λ2);
    const y = a * Math.cos(φ1) * Math.sin(λ1) + b * Math.cos(φ2) * Math.sin(λ2);
    const z = a * Math.sin(φ1) + b * Math.sin(φ2);
    pts.push(project(
      Math.atan2(z, Math.hypot(x, y)) / RAD,
      Math.atan2(y, x) / RAD
    ));
  }
  return pts;
}

export const toPath = (pts) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");

/** Meridians and parallels on round numbers, so the grid means something. */
export function graticule() {
  const meridians = [];
  for (let lon = -90; lon <= LON1; lon += 30) {
    const [x] = project(0, lon);
    meridians.push({ x: +x.toFixed(1), lon });
  }
  const parallels = [];
  for (let lat = 15; lat <= 60; lat += 15) {
    const [, y] = project(lat, 0);
    parallels.push({ y: +y.toFixed(1), lat });
  }
  return { meridians, parallels };
}
