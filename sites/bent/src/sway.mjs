/* THE SWAY — BENT's signature.
 *
 * The claim: a wooden coaster's structure is designed to move. Under a loaded
 * train a tall bent deflects laterally and returns. Built rigid, it would
 * destroy itself, because there would be nowhere for the energy to go.
 *
 * The conflict that cannot be designed away: there is a band. Below it the
 * joints take the shock and split. Above it the train fights the track. The
 * visitor can drive the bent out of the band in BOTH directions, and going
 * too stiff is the surprising failure.
 */

export const BAND = { lo: 1.5, hi: 4.5 };          // inches at the top chord
export const SCALE_MAX = 6;                        // the band bar's full scale

/* Train weight over one bent, in pounds. A PTC-style three-car train. */
export const TRAINS = {
  empty: { label: "Empty", say: "an empty", lb: 9800 },
  half:  { label: "Half",  say: "a half-full", lb: 14600 },
  full:  { label: "Full",  say: "a full", lb: 19400 },
};

/* Lateral compliance, inches per 10,000 lb. Older timber has bedded in: the
 * bolt holes have ovalled slightly and the joints have taken a set. The crew
 * answers it by sistering and re-bolting, which is most of the spring work. */
export const TIMBER = {
  new: { label: "New build", say: "new", years: 0,  c: 0.85 },
  mid: { label: "20 years",  say: "twenty-year", years: 20, c: 1.45 },
  old: { label: "50 years",  say: "fifty-year", years: 50, c: 2.35 },
};

export function peakDeflection(trainKey, timberKey) {
  return (TRAINS[trainKey].lb / 10000) * TIMBER[timberKey].c;
}

export function returnTime(timberKey) {
  return 0.6 + TIMBER[timberKey].c * 0.55;
}

/* How much of the train's weight this bent is carrying, by where the train is.
 * 0 = train off at the end, 1 = train centred over this bent. */
export function influence(t) {
  const d = (t - 0.5) / 0.17;
  return Math.exp(-d * d);
}

export function verdict(inches) {
  if (inches < BAND.lo) return { state: "stiff", text: "Too stiff — the joints take the shock and split" };
  if (inches > BAND.hi) return { state: "loose", text: "Too loose — the train fights the track" };
  return { state: "held", text: "In the band — the structure is taking it" };
}

/* ------------------------------------------------------------ geometry */

export const VIEW = { w: 660, h: 820, base: 742 };
export const EXAGGERATION = 30;
/* True scale is ~0.95 px per real inch, at which a 3-inch lean is invisible.
 * Engineering elevations exaggerate deflection and label the factor; so do we. */
export const PX_PER_INCH = 0.95 * EXAGGERATION;

/* The track crests over the centre bent, so the train climbs, crosses the
 * bent at the top of the hill, and runs away down the other side. */
export function trackY(x) {
  return 132 - 34 * Math.sin((Math.PI * x) / VIEW.w);
}

/* How much the track itself is carried over at x, given the centre bent has
 * gone over by `inches`. The track is bolted to the bent: if the bent's top
 * moves, the track moves with it, tapering off toward the neighbours. A track
 * that stayed rigid while the bent leant out from under it would be a lie. */
export function trackShift(x, inches) {
  const d = (x - 330) / 150;
  return inches * PX_PER_INCH * Math.exp(-d * d);
}

export function trackPath(inches = 0) {
  const pt = (x) => `${(x + trackShift(x, inches)).toFixed(1)} ${trackY(x).toFixed(1)}`;
  let d = `M ${pt(0)}`;
  for (let x = 15; x <= VIEW.w; x += 15) d += ` L ${pt(x)}`;
  return d;
}

/* One bent: two raking legs, ledgers, X-bracing, bolt plates. */
export function bent(cx, halfTop, halfBase, levelCount = 4) {
  const top = trackY(cx) + 3;
  const base = VIEW.base;
  const legX = (side, y) => {
    const t = (y - top) / (base - top);
    return cx + side * (halfTop + (halfBase - halfTop) * t);
  };
  const levels = Array.from({ length: levelCount + 1 }, (_, i) => top + ((base - top) * i) / levelCount);

  const legs = [-1, 1].map((s) => `M ${legX(s, top).toFixed(1)} ${top.toFixed(1)} L ${legX(s, base).toFixed(1)} ${base}`);
  const ledgers = levels.map((y) => `M ${legX(-1, y).toFixed(1)} ${y.toFixed(1)} L ${legX(1, y).toFixed(1)} ${y.toFixed(1)}`);
  const braces = [];
  for (let i = 0; i < levels.length - 1; i++) {
    const a = levels[i], b = levels[i + 1];
    braces.push(`M ${legX(-1, a).toFixed(1)} ${a.toFixed(1)} L ${legX(1, b).toFixed(1)} ${b.toFixed(1)}`);
    braces.push(`M ${legX(1, a).toFixed(1)} ${a.toFixed(1)} L ${legX(-1, b).toFixed(1)} ${b.toFixed(1)}`);
  }
  const bolts = [];
  for (const y of levels) for (const s of [-1, 1]) bolts.push({ x: +legX(s, y).toFixed(1), y: +y.toFixed(1) });
  return { legs, ledgers, braces, bolts, top, base, cx };
}

/* The centre bent is the subject. The others stand behind it, faint, so the
 * one bent reads as part of a structure rather than as a lone pylon. */
/* One bent, square-on, filling the frame. The flanking ghosts carried no
 * argument and cost the subject half its height. */
export const CENTRE = bent(330, 74, 236, 5);
export const GHOSTS = [];

/* Shear: zero at the footer, full at the top chord — which is how a bent
 * actually goes over, not a rigid tilt. */
export function shearMatrix(inches) {
  const span = VIEW.base - CENTRE.top;
  const c = -(inches * PX_PER_INCH) / span;
  return `matrix(1,0,${c.toFixed(5)},1,${(-c * VIEW.base).toFixed(3)},0)`;
}

/* Where the train sits for a given position t (0..1) and how it is rotated to
 * sit on the track. */
export function trainAt(t, inches = 0) {
  const x0 = 40 + t * (VIEW.w - 80);
  const x = x0 + trackShift(x0, inches);
  const y = trackY(x0);
  const dx = 8;
  const slope = (trackY(Math.min(VIEW.w, x0 + dx)) - trackY(Math.max(0, x0 - dx))) / (2 * dx);
  return { x, y, deg: (Math.atan(slope) * 180) / Math.PI };
}

/* Members the crew has sistered and re-bolted. This is what the accent is FOR:
 * fresh cut marks where the craft has recently touched the ride. Older timber
 * has had more of it done, so the gold appears as the bent ages — the control
 * changes the mechanism, not just a number. */
export function sisters(b) {
  const at = (frac) => b.top + (b.base - b.top) * frac;
  const legX = (side, y) => {
    const t = (y - b.top) / (b.base - b.top);
    return b.cx + side * (74 + (236 - 74) * t);
  };
  const seg = (side, f0, f1) => {
    const y0 = at(f0), y1 = at(f1);
    const o = side * 7;
    return `M ${(legX(side, y0) + o).toFixed(1)} ${y0.toFixed(1)} L ${(legX(side, y1) + o).toFixed(1)} ${y1.toFixed(1)}`;
  };
  const ledger = (f) => {
    const y = at(f) + 6;
    return `M ${legX(-1, y).toFixed(1)} ${y.toFixed(1)} L ${legX(1, y).toFixed(1)} ${y.toFixed(1)}`;
  };
  return {
    mid: [seg(-1, 0.5, 1), ledger(0.75)],
    old: [seg(1, 0.5, 1), seg(-1, 0.0, 0.5), ledger(0.5), ledger(0.25)],
  };
}
export const SISTERS = sisters(CENTRE);
