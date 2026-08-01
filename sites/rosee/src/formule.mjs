/* ROSÉE — the formula model.
 *
 * Turns a perfume + a bottle size into the ACTUAL RAW PLANT MATTER behind it:
 * blossoms, flowers, fruits, grams of rhizome. Imported by index.astro to bake
 * the default into the HTML (complete with JavaScript off) and by the client
 * script to recompute live. Both run this same code.
 *
 * The yields below are the ordinary published figures for Grasse materials.
 * They are the reason the numbers on this page are absurd without being
 * exaggerated.
 */

export const MATIERES = {
  jasmin: {
    label: "Jasmin grandiflorum",
    origin: "Plascassier — our own plots",
    /* ~8,000 blossoms to a kilo of flowers; ~700 kg of flowers to a kilo of
       absolute. That is ~5,600 blossoms for a single gram. */
    perGram: 5600,
    unit: "blossoms",
    unitOne: "blossom",
    massEach: 0.125,
    kind: "field",
  },
  rose: {
    label: "Rose centifolia",
    origin: "Le Bar-sur-Loup — a neighbour's field",
    /* ~800 kg of flowers to a kilo of absolute, at ~3 g a flower. */
    perGram: 260,
    unit: "roses",
    unitOne: "rose",
    massEach: 3,
    kind: "field",
  },
  neroli: {
    label: "Fleur d'oranger",
    origin: "Vallauris",
    perGram: 3300,
    unit: "blossoms",
    unitOne: "blossom",
    massEach: 0.3,
    kind: "field",
  },
  bergamote: {
    label: "Bergamote",
    origin: "Reggio di Calabria",
    /* ~200 kg of fruit to a kilo of expressed oil, at ~120 g a fruit. */
    perGram: 1.7,
    unit: "fruits",
    unitOne: "fruit",
    massEach: 120,
    kind: "field",
  },
  iris: {
    label: "Iris pallida",
    origin: "Chiusi, Tuscany",
    /* ~500 g of rhizome — dried and aged three years before it is any use. */
    perGram: 500,
    unit: "g of rhizome, aged three years",
    unitOne: "g of rhizome, aged three years",
    kind: "field",
    grams: true,
  },
  lavande: {
    label: "Lavande fine",
    origin: "Sault, Vaucluse",
    perGram: 130,
    unit: "g of flowering tops",
    unitOne: "g of flowering tops",
    kind: "field",
    grams: true,
  },
  cistus: {
    label: "Ciste labdanum",
    origin: "Andalusia",
    perGram: 70,
    unit: "g of gum",
    unitOne: "g of gum",
    kind: "field",
    grams: true,
  },
  patchouli: {
    label: "Patchouli",
    origin: "Sulawesi",
    perGram: 50,
    unit: "g of dried leaf",
    unitOne: "g of dried leaf",
    kind: "field",
    grams: true,
  },
  romarin: {
    label: "Romarin",
    origin: "the hillside behind the workshop",
    perGram: 100,
    unit: "g of flowering tops",
    unitOne: "g of flowering tops",
    kind: "field",
    grams: true,
  },
  muscs: {
    label: "Muscs et bois",
    origin: "made in a laboratory, and we would rather say so",
    perGram: 0,
    unit: "",
    kind: "synthetic",
  },
};

/* Formulas as percentages of the concentrate. They sum to 100. */
export const PARFUMS = {
  plascassier: {
    label: "Plascassier",
    gloss: "the jasmine",
    line: "Jasmine picked in our own plots, with bergamot over it and orris underneath. The one that smells of the field it came from.",
    tete: "Bergamote, fleur d'oranger",
    coeur: "Jasmin grandiflorum",
    fond: "Iris, muscs, bois",
    formule: { bergamote: 14, neroli: 6, jasmin: 8, rose: 3, iris: 2, muscs: 67 },
  },
  mai: {
    label: "Mai",
    gloss: "the rose",
    line: "Rose de mai from one field, picked across about twenty mornings in May, which is the entire window there is.",
    tete: "Bergamote",
    coeur: "Rose centifolia",
    fond: "Patchouli, muscs",
    formule: { bergamote: 10, rose: 12, jasmin: 2, patchouli: 6, muscs: 70 },
  },
  restanque: {
    label: "Restanque",
    gloss: "the dry terrace",
    line: "Lavender, rosemary and labdanum — the hillside itself rather than anything grown for perfume. The least floral thing we make.",
    tete: "Bergamote, romarin",
    coeur: "Lavande fine",
    fond: "Ciste labdanum, muscs",
    formule: { bergamote: 8, romarin: 6, lavande: 14, cistus: 8, jasmin: 1, muscs: 63 },
  },
};

/* Formats. `conc` is the proportion of perfume concentrate in the liquid —
   an extrait really is nearly twice an eau de parfum. */
export const FORMATS = {
  "extrait-30": {
    label: "Extrait, 30 ml",
    short: "Extrait 30",
    ml: 30,
    conc: 0.24,
    price: 185,
    note: "The concentrate at nearly a quarter of the liquid. It moves less and lasts longer.",
  },
  "edp-50": {
    label: "Eau de parfum, 50 ml",
    short: "EDP 50",
    ml: 50,
    conc: 0.15,
    price: 140,
    note: "The ordinary bottle, and the one most people should start with.",
  },
  "edp-100": {
    label: "Eau de parfum, 100 ml",
    short: "EDP 100",
    ml: 100,
    conc: 0.15,
    price: 210,
    note: "Twice the liquid for half again the price, which is the only volume discount here.",
  },
  "recharge-100": {
    label: "Recharge, 100 ml",
    short: "Recharge 100",
    ml: 100,
    conc: 0.15,
    price: 150,
    note: "The same field, without the bottle. Yours stays on the shelf and we send the liquid.",
  },
};

export const DEFAULT_SPEC = { parfum: "plascassier", format: "edp-50" };

/* One mark in the counted field stands for this many flower heads, so the
   grid stays legible instead of trying to draw nine thousand flowers. The
   scale is FIXED across perfumes on purpose: seeing that Restanque's field is
   a fraction of Plascassier's is the whole point of drawing it. */
export const PER_MARK = 25;

/* The counted field is a FIXED frame that fills from the bottom, like a
   measuring vessel — so "how much of the frame does this bottle fill" is
   readable at a glance and comparable between perfumes. Capacity is sized to
   the largest bottle we sell (Plascassier 100 ml, 373 marks). */
export const GRID = { cols: 24, rows: 16, cell: 22 };

/* Lay the marks out bottom-up, left to right. Exported so the page can
   also draw the frame's full capacity as a ghost behind the filled marks. */
export function markPositions(n) {
  const pts = [];
  const cap = GRID.cols * GRID.rows;
  for (let i = 0; i < Math.min(n, cap); i++) {
    const row = Math.floor(i / GRID.cols);
    const col = i % GRID.cols;
    pts.push({
      x: col * GRID.cell + GRID.cell / 2,
      y: (GRID.rows - 1 - row) * GRID.cell + GRID.cell / 2,
    });
  }
  return pts;
}

const fmt = (n) => {
  if (n >= 100) return Math.round(n).toLocaleString("en-GB");
  if (n >= 10) return (Math.round(n * 10) / 10).toLocaleString("en-GB");
  return (Math.round(n * 100) / 100).toLocaleString("en-GB");
};

export function buildFormule(spec) {
  const s = { ...DEFAULT_SPEC, ...spec };
  const parfum = PARFUMS[s.parfum] || PARFUMS[DEFAULT_SPEC.parfum];
  const format = FORMATS[s.format] || FORMATS[DEFAULT_SPEC.format];

  /* grams of concentrate in the bottle (perfume oil ≈ 0.95 g/ml) */
  const concGrams = format.ml * format.conc * 0.95;

  const lines = [];
  let synthPct = 0;
  let jasminBlossoms = 0;

  for (const [key, pct] of Object.entries(parfum.formule)) {
    const m = MATIERES[key];
    if (!m) continue;
    const grams = (concGrams * pct) / 100;
    if (m.kind === "synthetic") {
      synthPct = pct;
      lines.push({
        key,
        label: m.label,
        origin: m.origin,
        pct,
        grams: Math.round(grams * 100) / 100,
        kind: "synthetic",
        qtyLabel: `${fmt(grams)} g, synthesised`,
      });
      continue;
    }
    const qty = grams * m.perGram;
    if (key === "jasmin") jasminBlossoms = qty;
    /* raw plant matter that had to be grown, picked, and carried */
    const massG = m.grams ? qty : qty * (m.massEach || 0);
    lines.push({
      key,
      label: m.label,
      origin: m.origin,
      pct,
      grams: Math.round(grams * 1000) / 1000,
      kind: "field",
      qty,
      massG,
      isFlower: !m.grams && m.unit.includes("blossom") === false ? m.unit === "roses" : !m.grams,
      qtyLabel: `${fmt(qty)} ${m.unit}`,
    });
  }

  lines.sort((a, b) => b.pct - a.pct);

  /* total flower heads of any kind — the headline number */
  const flowerKeys = ["jasmin", "rose", "neroli"];
  const totalFlowers = lines
    .filter((l) => flowerKeys.includes(l.key))
    .reduce((a, l) => a + (l.qty || 0), 0);

  const marks = Math.max(1, Math.round(totalFlowers / PER_MARK));

  /* total raw plant matter — the one number that compares all three, since
     Restanque is measured in grams of hillside rather than in flower heads */
  const totalPlantG = lines.reduce((a, l) => a + (l.massG || 0), 0);
  const plantLabel =
    totalPlantG >= 1000
      ? `${(Math.round(totalPlantG / 10) / 100).toFixed(2)} kg`
      : `${Math.round(totalPlantG)} g`;

  return {
    spec: s,
    parfum,
    format,
    concGrams: Math.round(concGrams * 10) / 10,
    lines,
    synthPct,
    fieldPct: 100 - synthPct,
    totalFlowers,
    totalFlowersLabel: fmt(totalFlowers),
    totalPlantG,
    plantLabel,
    markPts: markPositions(marks),
    jasminBlossoms,
    marks,
    price: format.price,
    priceLabel: `€${format.price}`,
    summary: `${parfum.label} · ${format.label} · €${format.price}`,
    /* the sentence the whole site exists to be able to write */
    headline: `${plantLabel} of raw plant matter, picked before the sun reached it.`,
  };
}
