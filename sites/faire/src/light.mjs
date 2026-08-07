// An Solas — the light.
//
// Two real systems, and every number on the page comes out of them:
//
//   1. The CHARACTER. A light is identified by its rhythm, not by its
//      appearance, so the sequence below is the light's actual identity and
//      is written in the Admiralty's own notation.
//   2. The RANGE. How far a light is seen is geometry, not brightness:
//      the earth gets in the way first.

/** The station, as it would be printed in the Admiralty List of Lights. */
export const STATION = {
  no: "A 4126",
  name: "Rubha na Fàire",
  lat: "57°52′.4 N",
  lon: "5°48′.7 W",
  character: "Fl(2) W 20s",
  elevation: 39, // metres above MHWS
  nominal: 24, // nautical miles
  established: 1857,
  automated: 1988,
  steps: 96,
};

/**
 * The lights you can see from this headland on a clear night, each with its
 * real character. Four of them share a 20-second period, which is the whole
 * point: at that distance you cannot tell them apart by looking, only by
 * counting.
 *
 * `seq` is the true sequence in seconds: [on, off, on, off, …]. It must sum
 * to `period`.
 */
export const LIGHTS = [
  {
    key: "faire",
    name: "Rubha na Fàire",
    character: "Fl(2) W 20s",
    period: 20,
    seq: [0.3, 2.7, 0.3, 16.7],
    flashes: 2,
    bearing: "—",
    dist: "—",
    note: "Ours. Two flashes, then sixteen and a half seconds of nothing — the long eclipse is what you actually learn to feel.",
    ours: true,
  },
  {
    key: "ardnamurchan",
    name: "Ardnamurchan",
    character: "Fl W 20s",
    period: 20,
    seq: [0.4, 19.6],
    flashes: 1,
    bearing: "196°",
    dist: "41 M",
    note: "The same twenty seconds and a single flash. From a boat it is the same brightness and the same colour as ours. Only the count separates them.",
  },
  {
    key: "eileanglas",
    name: "Eilean Glas",
    character: "Fl(3) W 20s",
    period: 20,
    seq: [0.3, 2.2, 0.3, 2.2, 0.3, 14.7],
    flashes: 3,
    bearing: "268°",
    dist: "33 M",
    note: "Three flashes in the same period. Miscount once in poor visibility and you have put yourself on the wrong side of the Minch.",
  },
  {
    key: "rubhareidh",
    name: "Rubha Reidh",
    character: "Fl(4) W 15s",
    period: 15,
    seq: [0.3, 1.7, 0.3, 1.7, 0.3, 1.7, 0.3, 8.7],
    flashes: 4,
    bearing: "021°",
    dist: "9 M",
    note: "Four flashes and a shorter period. The nearest light to us, and the easiest to be certain of.",
  },
];

export const lightByKey = (k) => LIGHTS.find((l) => l.key === k) || LIGHTS[0];

/** Is the light on at time t (seconds into the period)? */
export function isLit(light, t) {
  let acc = 0;
  const tt = ((t % light.period) + light.period) % light.period;
  for (let i = 0; i < light.seq.length; i++) {
    acc += light.seq[i];
    if (tt < acc) return i % 2 === 0;
  }
  return false;
}

/** The period as [{on, from, to}] so the timeline can be drawn to true scale. */
export function segments(light) {
  const out = [];
  let acc = 0;
  light.seq.forEach((d, i) => {
    out.push({ on: i % 2 === 0, from: acc, to: acc + d, dur: d });
    acc += d;
  });
  return out;
}

/* ── An t-astar — how far it reaches ─────────────────────────────────────
   Geographic range in nautical miles = 2.08 × (√H + √h), H the height of the
   light and h the height of your eye, both in metres. It is the distance at
   which the earth's curvature puts the light under the horizon — and below
   about 20 miles it, not the lamp, is what decides whether you see anything. */

export const EYES = [
  { key: "kayak", it: "Anns a' chaidhaig", en: "In a kayak", h: 1, note: "Your eye is a metre off the water. The earth is the whole problem." },
  { key: "cockpit", it: "Ann an cockpit", en: "A yacht cockpit", h: 2, note: "Standing at the wheel of a thirty-footer." },
  { key: "wheelhouse", it: "An taigh-cuibhle", en: "A fishing boat wheelhouse", h: 5, note: "Five metres up, and it buys you nearly two more miles." },
  { key: "uinneag", it: "An uinneag", en: "The cottage window", h: 11, note: "The sitting-room window is eleven metres above the water, which is why you can see further from the sofa than from most boats." },
  { key: "drochaid", it: "Drochaid luinge", en: "A ship's bridge", h: 30, note: "Thirty metres up on a coaster's bridge. The only eye height from which this light reaches its published range." },
];

export const eyeByKey = (k) => EYES.find((e) => e.key === k) || EYES[1];

export const geographicRange = (H, h) => 2.08 * (Math.sqrt(H) + Math.sqrt(h));
/** How far the light's own top is visible before it dips — the horizon from your eye. */
export const horizonFrom = (h) => 2.08 * Math.sqrt(h);

export function reach(eye) {
  const geo = geographicRange(STATION.elevation, eye.h);
  const nominal = STATION.nominal;
  const limited = geo < nominal;
  return {
    eye,
    geo,
    nominal,
    limited,
    // what actually decides it
    effective: Math.min(geo, nominal),
    horizon: horizonFrom(eye.h),
    shortfall: nominal - geo,
  };
}

export function reachVerdict(r) {
  if (!r.limited) {
    return {
      state: "lamp",
      it: "Cuingealaichte leis an lampa",
      en: "limited by the lamp",
      say: `From ${r.eye.en.toLowerCase()} the earth would let you see it at ${r.geo.toFixed(1)} M, but the lamp gives out at ${r.nominal} M. The published figure is the one that matters to you.`,
    };
  }
  return {
    state: "earth",
    it: "Cuingealaichte leis an t-saoghal",
    en: "limited by the earth",
    say: `The lamp is bright enough for ${r.nominal} M. From ${r.eye.en.toLowerCase()} the earth hides it at ${r.geo.toFixed(1)} M — ${r.shortfall.toFixed(1)} miles short of the published range. What you see first is the loom of it on the cloud, not the light.`,
  };
}

/* ── the letting ─────────────────────────────────────────────────────── */

export const SEASONS = [
  { key: "geamhradh", ga: "Geamhradh", en: "Winter", months: "November – February", price: 1150, dark: "17 hours of darkness at the solstice" },
  { key: "earrach", ga: "Earrach / Foghar", en: "Spring and autumn", months: "March – May, September – October", price: 1390, dark: "11 hours of darkness at the equinox" },
  { key: "samhradh", ga: "Samhradh", en: "Summer", months: "June – August", price: 1690, dark: "4 hours of darkness at midsummer, and it never gets fully black" },
];

export const seasonByKey = (k) => SEASONS.find((s) => s.key === k) || SEASONS[0];
export const gbp = (n) => "£" + n.toLocaleString("en-GB");
