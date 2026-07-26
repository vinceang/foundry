/* IBUSHI — the parametric minka model behind Sumitsuke 墨付け.
 *
 * One model drives one drawing. Section and plan are produced from the same
 * numbers so they move together in a single redraw, and the same module is
 * imported by the Astro page (server render — the JS-off default) and by the
 * client script (the live redraw). There is no second source of truth.
 *
 * Units are the carpenter's, not the metric system's:
 *   ken 間   = the structural bay. inakama 6.0 shaku, kyōma 6.5 shaku.
 *   shaku 尺 = 10/33 m ≈ 303 mm
 *   sun 寸   = 1/10 shaku ≈ 30.3 mm
 *   tsubo 坪 = 1 ken² ≈ 3.306 m²
 *   jō 畳    = one tatami = ½ tsubo
 *   kōbai 勾配 = roof pitch, stated as rise in sun per 10 sun of run.
 *               A 10-sun kōbai is 45°.
 */

export const SHAKU = 10 / 33; // 0.30303 m
export const TSUBO = 400 / 121; // 3.3058 m² — one ken² at 6 shaku

/* --- the four houses ---------------------------------------------------- */

export const TYPOLOGIES = {
  noka: {
    key: "noka",
    label: "Nōka",
    jp: "農家",
    gloss: "farmhouse",
    kobai: 10, // 45° — thatch sheds rain, not snow
    eaveH: 2.4,
    overhang: 0.95,
    roof: "kaya",
    thatch: 0.55,
    floors: 1,
    attics: 1,
    clad: "tsuchikabe",
    ken: { w: [3, 7, 4], d: [4, 10, 6] }, // [min, max, default]
    doma: 0.35,
    line: "The house of an agricultural household: one great room organised around the fire, and an earth floor big enough to work and to winter an animal in.",
  },
  gyoka: {
    key: "gyoka",
    label: "Gyoka",
    jp: "漁家",
    gloss: "fisherman's house",
    kobai: 8, // ~38.7° — low, to give the wind nothing to lift
    eaveH: 2.15,
    overhang: 0.6,
    roof: "kaya",
    thatch: 0.5,
    floors: 1,
    attics: 1,
    clad: "yakisugi",
    weighted: true,
    ken: { w: [3, 5, 3], d: [3, 7, 5] },
    doma: 0.45,
    line: "Built low and braced against salt wind: charred cedar to the weather, a shortened eave, and stones laid along the ridge to hold the roof down in a gale.",
  },
  machiya: {
    key: "machiya",
    label: "Machi-ya",
    jp: "町家",
    gloss: "townhouse",
    kobai: 4.5, // ~24.2° — kawara tile, not thatch
    eaveH: 5.4, // two storeys: ground plus a low tsushi-nikai
    overhang: 1.1,
    roof: "kawara",
    thatch: 0,
    floors: 2,
    attics: 0,
    clad: "koshi",
    ken: { w: [2, 4, 3], d: [8, 18, 12] },
    doma: 0.3,
    line: "Frontage was taxed, so the merchant built backwards: two or three ken to the street and twelve to the rear. Kyoto calls the plan unagi no nedoko — an eel's bed.",
  },
  gassho: {
    key: "gassho",
    label: "Gasshō-zukuri",
    jp: "合掌造り",
    gloss: "prayer-hands construction",
    kobai: 17.3, // 60° — sheds two metres of snow
    eaveH: 2.6,
    overhang: 0.8,
    roof: "kaya",
    thatch: 0.7,
    floors: 1,
    attics: 3,
    clad: "tsuchikabe",
    ken: { w: [4, 7, 5], d: [8, 14, 10] },
    doma: 0.3,
    line: "The roof is a separate structure lashed with neso withes and no nails, so it flexes rather than breaks. The floors inside it were silkworm floors — the roof paid for itself.",
  },
};

export const TYPOLOGY_ORDER = ["noka", "gyoka", "machiya", "gassho"];

/* --- where it stands ---------------------------------------------------- */

export const EXPOSURES = {
  inland: {
    key: "inland",
    label: "Inland valley",
    jp: "里",
    dKobai: 0,
    dThatch: 0,
    dEave: 0,
    note: "Rain and a normal winter. The roof is pitched to shed water.",
  },
  snow: {
    key: "snow",
    label: "Heavy snow",
    jp: "豪雪",
    dKobai: 2.5,
    dThatch: 0.15,
    dEave: 0.25,
    note: "Two metres and more. The pitch steepens, the thatch thickens, and the eave is lifted clear of the pack.",
  },
  coastal: {
    key: "coastal",
    label: "Coastal",
    jp: "海際",
    dKobai: -1.5,
    dThatch: 0.05,
    dEave: -0.15,
    clad: "yakisugi",
    weighted: true,
    note: "Salt wind. The pitch drops, the eave shortens, the cladding is charred, and the ridge is weighted with stone.",
  },
};

export const EXPOSURE_ORDER = ["inland", "snow", "coastal"];

/* --- the regional module ------------------------------------------------ */

export const MODULES = {
  inakama: {
    key: "inakama",
    label: "Inakama",
    jp: "田舎間",
    shaku: 6.0,
    note: "The country bay — six shaku. The post spacing is set first and the mats are cut to fit it.",
  },
  kyoma: {
    key: "kyoma",
    label: "Kyōma",
    jp: "京間",
    shaku: 6.5,
    note: "The Kyoto bay — six and a half shaku. The mat is the standard and the posts are set around it.",
  },
};

export const MODULE_ORDER = ["inakama", "kyoma"];

export const CLADDING = {
  tsuchikabe: { label: "Earth plaster over a bamboo lath", jp: "土壁" },
  yakisugi: { label: "Charred cedar board", jp: "焼杉" },
  koshi: { label: "Cedar lattice and earth plaster", jp: "格子" },
};

/* --- defaults ----------------------------------------------------------- */

export const DEFAULTS = {
  typology: "noka",
  widthKen: 4,
  depthKen: 6,
  exposure: "inland",
  module: "inakama",
  domaRatio: 0.35,
};

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const round = (v, n = 0) => {
  const f = 10 ** n;
  return Math.round(v * f) / f;
};

/* --- the model ---------------------------------------------------------- */

export function computeHouse(input = {}) {
  const raw = { ...DEFAULTS, ...input };
  const t = TYPOLOGIES[raw.typology] ?? TYPOLOGIES.noka;
  const ex = EXPOSURES[raw.exposure] ?? EXPOSURES.inland;
  const mod = MODULES[raw.module] ?? MODULES.inakama;

  const widthKen = clamp(Math.round(raw.widthKen), t.ken.w[0], t.ken.w[1]);
  const depthKen = clamp(Math.round(raw.depthKen), t.ken.d[0], t.ken.d[1]);
  const domaRatio = clamp(raw.domaRatio, 0.15, 0.6);

  const kenM = mod.shaku * SHAKU;

  // Geometry ------------------------------------------------------------
  const W = widthKen * kenM;
  const D = depthKen * kenM;
  const kobai = Math.max(3, t.kobai + ex.dKobai);
  const theta = Math.atan(kobai / 10);
  const eaveH = t.eaveH + ex.dEave;
  const overhang = Math.max(0.4, t.overhang + (ex.key === "coastal" ? -0.25 : 0));
  const thatch = t.thatch > 0 ? t.thatch + ex.dThatch : 0;
  const ridgeH = eaveH + (W / 2) * Math.tan(theta);

  // Areas ---------------------------------------------------------------
  const footprint = W * D;
  const tsubo = footprint / TSUBO;
  const domaArea = footprint * domaRatio;
  const yukaArea = footprint - domaArea;
  const jo = yukaArea / (TSUBO / 2);

  const slope = (W / 2 + overhang) / Math.cos(theta);
  const roofArea = 2 * slope * (D + 2 * overhang);

  // Frame ---------------------------------------------------------------
  const posts = (widthKen + 1) * (depthKen + 1);
  const clad = ex.clad ?? t.clad;
  const weighted = Boolean(ex.weighted || t.weighted);

  return {
    input: { ...raw, widthKen, depthKen, domaRatio },
    t,
    ex,
    mod,
    widthKen,
    depthKen,
    domaRatio,
    kenM,
    W,
    D,
    kobai,
    theta,
    deg: (theta * 180) / Math.PI,
    eaveH,
    overhang,
    thatch,
    ridgeH,
    footprint,
    tsubo,
    domaArea,
    yukaArea,
    jo,
    roofArea,
    posts,
    clad,
    weighted,
  };
}

/* --- the spec block ----------------------------------------------------- */

export function specRows(h) {
  const rows = [
    ["Footprint", `${h.widthKen} × ${h.depthKen} ken`, `${round(h.W, 2)} × ${round(h.D, 2)} m`],
    ["Area", `${round(h.tsubo, 1)} tsubo`, `${round(h.footprint, 1)} m²`],
    ["Raised floor", `${round(h.jo, 1)} jō`, `${round(h.yukaArea, 1)} m²`],
    ["Earth floor", `${round(h.domaArea / TSUBO, 1)} tsubo`, `${round(h.domaArea, 1)} m²`],
    ["Kōbai", `${round(h.kobai, 1)} sun`, `${round(h.deg, 1)}°`],
    ["Ridge height", `${round(h.ridgeH / SHAKU, 1)} shaku`, `${round(h.ridgeH, 2)} m`],
    ["Principal span", `${h.widthKen} ken`, `${round(h.W, 2)} m`],
    ["Roof area", `${round(h.roofArea, 0)} m²`, `${round(h.roofArea / TSUBO, 1)} tsubo`],
  ];

  if (h.thatch > 0) {
    rows.push([
      "Thatch depth",
      `${round(h.thatch / (SHAKU / 10), 0)} sun`,
      `${round(h.thatch * 1000, 0)} mm`,
    ]);
  } else {
    rows.push(["Roof covering", "Kawara tile", "—"]);
  }

  rows.push(["Posts on stones", `${h.posts}`, "ishiba-date"]);
  rows.push(["Bay module", h.mod.label, `${h.mod.shaku} shaku · ${round(h.kenM, 3)} m`]);
  rows.push(["Cladding", CLADDING[h.clad].label, CLADDING[h.clad].jp]);

  return rows;
}

/** A single line summarising the configuration, for the commission handoff. */
export function specSummary(h) {
  const bits = [
    `${h.t.label} (${h.t.jp})`,
    `${h.widthKen} × ${h.depthKen} ken on the ${h.mod.label} module`,
    `${round(h.tsubo, 1)} tsubo`,
    `${round(h.jo, 1)} jō raised floor`,
    `doma ${Math.round(h.domaRatio * 100)}% of the ground plane`,
    `${round(h.kobai, 1)}-sun kōbai (${round(h.deg, 1)}°)`,
    `ridge ${round(h.ridgeH / SHAKU, 1)} shaku`,
    `${h.ex.label.toLowerCase()} site`,
    h.thatch > 0 ? `kaya thatch ${round(h.thatch * 1000, 0)} mm` : "kawara tile",
    CLADDING[h.clad].label.toLowerCase(),
    h.weighted ? "ridge weighted with stone" : null,
  ].filter(Boolean);
  return bits.join(" · ");
}

/* --- drafting scale ----------------------------------------------------- */

const SCALES = [30, 40, 50, 60, 75, 80, 100, 120, 150, 200, 250, 300];
const VB = { w: 1000, h: 1180, pad: 34 };
const GAP = 3.6; // metres of paper between section and plan
export const TOP_RESERVE = 1.0;
export const BOT_RESERVE = 1.0;
const BASE = 5000; // svg units per metre at 1:1000 → px/m = BASE / N

/** Choose the largest standard drawing scale that still fits the sheet. */
export function fitScale(h) {
  // reserve paper above the ridge for the section title and below the plan
  // for the scale bar, or a steep gasshō pushes its own title off the sheet
  const worldW = Math.max(h.W + 2 * h.overhang, h.W) + 1.4;
  const worldH = TOP_RESERVE + h.ridgeH + GAP + h.D + BOT_RESERVE;
  const availW = VB.w - VB.pad * 2;
  const availH = VB.h - VB.pad * 2;
  for (const n of SCALES) {
    const k = BASE / n;
    if (worldW * k <= availW && worldH * k <= availH) return { n, k, worldW, worldH };
  }
  const n = SCALES[SCALES.length - 1];
  return { n, k: BASE / n, worldW, worldH };
}
