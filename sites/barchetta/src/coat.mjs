/* BARCHETTA — the coat model.
 *
 * One parametric model of a jacket held open the way a tailor shows you one:
 * the right front from outside, the left front swung open to show its inside.
 * Imported by index.astro to BAKE the default coat into the HTML (complete
 * with JavaScript off) and by the client script to redraw it live. Both run
 * this same code, so they cannot drift apart.
 *
 * Coordinate space: viewBox 0 0 520 620. Centre front at x=260.
 */

export const COSTRUZIONE = {
  sfoderata: {
    label: "Sfoderata",
    gloss: "unlined",
    lining: null,
    hours: 14,
    grams: 0,
    fittings: 2,
    note: "No lining at all. Every internal seam has to be bound and finished by hand, which is why the lightest coat is the slowest one to make.",
  },
  mezza: {
    label: "Mezza fodera",
    gloss: "half-lined",
    lining: { y: 62, h: 268 },
    hours: 7,
    grams: 95,
    fittings: 3,
    note: "Lining across the shoulders and upper chest, where the coat has to slide over a shirt. Open below it.",
  },
  foderata: {
    label: "Foderata",
    gloss: "fully lined",
    lining: { y: 62, h: 438 },
    hours: 0,
    grams: 180,
    fittings: 3,
    note: "The whole interior closed in. Warmer, heavier, faster to finish — and the version that hides the most from you.",
  },
};

export const TELA = {
  intera: {
    label: "Tela intera",
    gloss: "full floating canvas",
    y1: 462,
    hours: 10,
    grams: 120,
    note: "Canvas floating loose against the cloth the whole length of the front. It takes the shape of a chest over years of wearing.",
  },
  mezza: {
    label: "Mezza tela",
    gloss: "half canvas",
    y1: 288,
    hours: 0,
    grams: 65,
    note: "Canvas to the chest only, below which the front is cloth alone. Lighter, and honest about it.",
  },
};

export const SPALLA = {
  camicia: {
    label: "Spalla a camicia",
    gloss: "the shirt shoulder",
    dy: 0,
    ripples: 7,
    roll: 0,
    hours: 6,
    note: "The sleeve head gathered into the armhole in fine ripples, exactly as a shirt sleeve is set. No padding whatsoever.",
  },
  mappina: {
    label: "Mappina",
    gloss: "literally, the rag",
    dy: 4,
    ripples: 4,
    roll: 0,
    hours: 8,
    note: "Softer still — the shoulder collapses onto the wearer's own. The name is not flattering and is used with affection.",
  },
  rollino: {
    label: "Con rollino",
    gloss: "with a small roll",
    dy: -3,
    ripples: 0,
    roll: 6,
    hours: 3,
    note: "A narrow roll of wadding lifts the sleeve head a few millimetres. The only version of this coat with anything in the shoulder at all.",
  },
};

export const IMPUNTURA = {
  nessuna: { label: "Nessuna", gloss: "no pick stitch", d: 0, hours: 0 },
  sei: { label: "6 mm", gloss: "close to the edge", d: 4.5, hours: 4 },
  dodici: { label: "12 mm", gloss: "set well in", d: 9, hours: 5 },
};

export const DEFAULT_SPEC = {
  costruzione: "sfoderata",
  tela: "intera",
  spalla: "camicia",
  impuntura: "sei",
};

const CF = 280; // centre front
const r2 = (n) => Math.round(n * 100) / 100;

/* The lapel edge, as a polyline: neck point → collar → notch → peak → break. */
const LAPEL = [
  [298, 55],
  [338, 88],
  [320, 108],
  [358, 134],
  [296, 250],
];

/* Offset the lapel edge inward (toward the body) by d, for the pick stitch.
   Crude normal-by-centroid, which is accurate enough at these distances and
   keeps the whole model dependency-free. */
function inset(points, d) {
  if (!d) return null;
  const cx = points.reduce((a, p) => a + p[0], 0) / points.length;
  const cy = points.reduce((a, p) => a + p[1], 0) / points.length;
  return points
    .map(([x, y], i) => {
      const vx = cx - x;
      const vy = cy - y;
      const m = Math.hypot(vx, vy) || 1;
      const px = x + (vx / m) * d;
      const py = y + (vy / m) * d;
      return `${i === 0 ? "M" : "L"} ${r2(px)} ${r2(py)}`;
    })
    .join(" ");
}

/* The gathered ripples of a shirt-shoulder sleeve head, along the armhole. */
function ripplePaths(n, dy) {
  if (!n) return [];
  const out = [];
  const x0 = 406;
  const x1 = 438;
  for (let i = 0; i < n; i++) {
    const t = i / Math.max(1, n - 1);
    const x = x0 + (x1 - x0) * t;
    const y = 86 + dy + t * 74;
    out.push(`M ${r2(x)} ${r2(y)} q 5 6 -1 12`);
  }
  return out;
}

/* Pad stitching over the haircloth chest piece — rows of small marks. */
function padStitches() {
  const out = [];
  for (let y = 112; y < 276; y += 15) {
    for (let x = 162; x < 256; x += 13) {
      out.push(`M ${x} ${r2(y)} l 4 6`);
    }
  }
  return out;
}

export function buildCoat(spec) {
  const s = { ...DEFAULT_SPEC, ...spec };
  const cos = COSTRUZIONE[s.costruzione] || COSTRUZIONE[DEFAULT_SPEC.costruzione];
  const tela = TELA[s.tela] || TELA[DEFAULT_SPEC.tela];
  const spalla = SPALLA[s.spalla] || SPALLA[DEFAULT_SPEC.spalla];
  const imp = IMPUNTURA[s.impuntura] || IMPUNTURA[DEFAULT_SPEC.impuntura];

  // ---- the numbers ----
  const hours = 38 + cos.hours + tela.hours + spalla.hours + imp.hours;
  const grams = 620 + cos.grams + tela.grams;
  const price = Math.round((800 + hours * 52) / 10) * 10;
  const weeks = Math.round(hours / 8) + 8;
  const fittings = cos.fittings;

  return {
    spec: s,
    cos,
    tela,
    spalla,
    imp,
    // the canvas region on the opened inside front
    canvas: { x: 146, y: 92, w: 124, y1: tela.y1, h: r2(tela.y1 - 92) },
    lining: cos.lining,
    ripples: ripplePaths(spalla.ripples, spalla.dy),
    pad: padStitches(),
    pick: inset(LAPEL, imp.d),
    pickFront: imp.d
      ? `M ${r2(CF + imp.d)} 252 L ${r2(CF + imp.d)} 496`
      : null,
    shoulderDy: spalla.dy,
    roll: spalla.roll,
    readout: {
      costruzione: cos.label,
      tela: tela.label,
      spalla: spalla.label,
      impuntura: imp.label,
      hours,
      grams,
      weeks,
      fittings,
      price,
      priceLabel: `€${price.toLocaleString("en-GB")}`,
    },
    summary: `${cos.label} · ${tela.label} · ${spalla.label} · impuntura ${imp.label} · ${grams} g finished · ~${hours} hours by hand · ${fittings} prove`,
  };
}
