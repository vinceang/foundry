// SALINE — la cascade.
//
// The instrument is drawn from numbers, per docs/sluice-standard.md §3b.
// Nothing here is generated imagery; every state is computed from scroll
// position, and every state is reachable from both directions.
//
// The five stages are the real pond sequence of a Guérande saline, with the
// salinity a paludier actually reads off a hydrometer in degrees Baumé.

export const STAGES = [
  {
    key: "vasiere",
    name: "La vasière",
    be: 3.5,
    depth: 40,
    day: 0,
    note: "The tide comes in on the spring flood and stops here. Forty centimetres of open sea, held.",
  },
  {
    key: "cobier",
    name: "Le cobier",
    be: 6,
    depth: 25,
    day: 4,
    note: "The first pan cut for evaporation. The water begins to lose height rather than travel.",
  },
  {
    key: "fares",
    name: "Les fares",
    be: 12,
    depth: 12,
    day: 11,
    note: "Winding channels that exist to slow the water down. Length is the only tool here.",
  },
  {
    key: "adernes",
    name: "Les adernes",
    be: 18,
    depth: 8,
    day: 17,
    note: "Holding basins. The paludier feeds the œillets from these, a few centimetres at a time.",
  },
  {
    key: "oeillet",
    name: "L'œillet",
    be: 25,
    depth: 3,
    day: 21,
    note: "Seventy square metres of blue clay under three centimetres of brine. Salt forms here, or nowhere.",
  },
];

// Salt begins to come out of solution at about 24 °Bé.
export const CRYSTAL_BE = 24;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * Map a progress value in [0,1] to a brine state.
 * Pure: same p always yields the same state, in either direction of travel.
 */
export function stateAt(p) {
  const t = clamp01(p) * (STAGES.length - 1);
  const i = Math.min(Math.floor(t), STAGES.length - 2);
  const f = t - i;
  const a = STAGES[i];
  const b = STAGES[i + 1];

  return {
    index: i,
    frac: f,
    // the nearer stage, for naming
    stage: f < 0.5 ? a : b,
    be: lerp(a.be, b.be, f),
    depth: lerp(a.depth, b.depth, f),
    day: lerp(a.day, b.day, f),
  };
}

/**
 * Water colour as a function of concentration.
 *
 * This is the site's whole colour argument: brine runs saumure-green while it
 * is weak and turns rose as it concentrates, because Dunaliella salina blooms
 * near saturation. The water goes pink immediately before it becomes salt, so
 * the accent is a reading, never a decoration.
 */
export function brineColour(be) {
  const t = clamp01((be - 3.5) / (CRYSTAL_BE - 3.5));
  // saumure #6f8478 -> fleur #c2705f
  const r = Math.round(lerp(0x6f, 0xc2, t));
  const g = Math.round(lerp(0x84, 0x70, t));
  const b = Math.round(lerp(0x78, 0x5f, t));
  return `rgb(${r} ${g} ${b})`;
}

/**
 * The concentration standing in each pan right now.
 *
 * Normally every pan holds brine at its own stage. Rain floods the whole
 * saline, and it costs the concentrated pans most: the œillet is three
 * centimetres deep, so a shower halves it, while the vasière is forty and
 * barely notices. That asymmetry is the entire reason a paludier watches the
 * sky, so the plan has to show it.
 */
export function panBe(i, raining) {
  const be = STAGES[i].be;
  if (!raining) return be;
  const depth = STAGES[i].depth;
  // shallow pans dilute hard, deep ones shrug it off
  const hit = 1 - Math.min(depth / STAGES[0].depth, 1) * 0.85;
  return Math.max(STAGES[0].be, be * (1 - 0.55 * hit));
}

/** How much crystal is showing, 0..1. Only past saturation. */
export function crystalAmount(be) {
  if (be < CRYSTAL_BE) return 0;
  return clamp01((be - CRYSTAL_BE) / (STAGES[STAGES.length - 1].be - CRYSTAL_BE));
}

/**
 * Rain. One shower floods the pan and knocks the brine back toward the
 * adernes, and the days it costs are the days that stage takes to recover.
 *
 * Reversible by construction: this returns a new state rather than mutating,
 * so clearing the weather restores the scroll-derived one exactly.
 */
export function withRain(state) {
  const adernes = STAGES[3];
  return {
    ...state,
    be: Math.min(state.be, adernes.be),
    depth: Math.max(state.depth, adernes.depth + 4),
    day: state.day + 6,
    rained: true,
  };
}

/**
 * The season's tally, by œillet. A saline is not one yield but sixty, and the
 * paludier knows which pans run heavy — the ones that hold heat, sit out of the
 * wind, or drain slowly. Buying from a named pan is not a gimmick here; it is
 * how the salt is actually recorded.
 */
export const OEILLETS = [
  { no: 7, name: "Le Grand Sept", gros: 1840, fleur: 41, note: "Holds the afternoon heat; the heaviest pan on the saline." },
  { no: 12, name: "La Croisée", gros: 1620, fleur: 38, note: "Cut at the crossing of two trémets. Even, reliable, unremarkable." },
  { no: 23, name: "Le Bas", gros: 1975, fleur: 29, note: "Drains slowest, so it works latest. Big on gros sel, thin on fleur." },
  { no: 31, name: "La Sèche", gros: 1210, fleur: 57, note: "Shallow and out of the wind. Half the salt, the best fleur we cut." },
  { no: 44, name: "Le Vent", gros: 1385, fleur: 22, note: "Exposed. A breeze ruins fleur, so this pan is raked for gros sel only." },
];

export const SALT = {
  gros: { label: "Gros sel", perKg: 3.4, min: 5, step: 5, unit: "kg" },
  fleur: { label: "Fleur de sel", perKg: 28, min: 1, step: 1, unit: "kg" },
};

export const fmt = {
  be: (v) => v.toFixed(1),
  depth: (v) => Math.round(v),
  day: (v) => Math.round(v),
};
