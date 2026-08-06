// 包 — the wrap.
//
// The house's model of a parcel. Everything on this page — the drawing, the
// readouts, the verdict and the order line — is computed from here, so the
// picture and the price can never disagree.
//
// Units are the house's own. Conversions, once:
export const SUN = 3.03; // cm in one 寸
export const MONME_G = 3.75; // grams in one 匁
export const MONME_YEN = 1400; // yen to one 匁 of silver, Osaka reckoning

export const cmToSun = (cm) => cm / SUN;
export const gToMonme = (g) => g / MONME_G;

// The cloths the house stocks, in their trade sizes.
export const CLOTHS = [
  { key: "futano", ja: "二幅", romaji: "futano", cm: 68, yen: 14000 },
  { key: "mino", ja: "三幅", romaji: "mino", cm: 105, yen: 19000 },
  { key: "yono", ja: "四幅", romaji: "yono", cm: 130, yen: 26000 },
];

// The knots. Each takes a different allowance out of the cloth, which is the
// whole reason a knot is a decision and not a detail.
export const KNOTS = [
  {
    key: "ma",
    ja: "真結び",
    romaji: "ma-musubi",
    gloss: "the square knot",
    allowanceCm: 24, // 八寸
    allowanceSun: 8,
    note: "One knot, flat on top. Takes the least cloth and comes undone in one pull.",
  },
  {
    key: "futatsu",
    ja: "二つ結び",
    romaji: "futatsu-musubi",
    gloss: "two knots",
    allowanceCm: 36, // 十二寸
    allowanceSun: 12,
    note: "Opposite corners tied twice. Nothing shifts inside. Wants four sun more cloth.",
  },
  {
    key: "katakake",
    ja: "肩掛け",
    romaji: "kata-kake",
    gloss: "slung at the shoulder",
    allowanceCm: 60, // 二十寸
    allowanceSun: 20,
    note: "Long tails, carried across the body, both hands free. Costs the most cloth of the three.",
  },
];

// The register. `l` is always the longest dimension, in centimetres.
// `carry` — "wrap" goes in the cloth; "hand" is carried openly and is not part
// of the parcel; "separate" cannot be moved by this house's cloth at all.
export const WARES = [
  {
    key: "hoshi",
    cant: "星",
    cantRomaji: "hoshi",
    cantGloss: "stars",
    ja: "車剣",
    name: "Shuriken, four-point — ten",
    l: 9, w: 9, h: 5, g: 480,
    yen: 42000,
    carry: "wrap",
    max: 6,
    unit: "set of ten",
    from: "banshu",
    line: "Cut from plate, filed square, hardened at the points only. Ten to a paper packet, packed flat.",
  },
  {
    key: "kugi",
    cant: "釘",
    cantRomaji: "kugi",
    cantGloss: "nails",
    ja: "棒手裏剣",
    name: "Bō-shuriken, spike — six",
    l: 18, w: 4, h: 3, g: 420,
    yen: 36000,
    carry: "wrap",
    max: 6,
    unit: "set of six",
    from: "banshu",
    line: "Six sun of round stock drawn to a point at one end and left blunt at the other. They roll; they are bedded in hemp.",
  },
  {
    key: "kote",
    cant: "小手",
    cantRomaji: "kote",
    cantGloss: "the small hand",
    ja: "苦無",
    name: "Kunai — the field tool",
    l: 30, w: 6, h: 2, g: 310,
    yen: 58000,
    carry: "wrap",
    max: 4,
    unit: "each",
    from: "banshu",
    line: "A trowel before it is anything else. Digs, pries, wedges, holds a rope. Ring pommel, cord-wrapped.",
  },
  {
    key: "tsume",
    cant: "爪",
    cantRomaji: "tsume",
    cantGloss: "claws",
    ja: "手鉤",
    name: "Tekagi, climbing claws — a pair",
    l: 16, w: 11, h: 5, g: 540,
    yen: 74000,
    carry: "wrap",
    max: 2,
    unit: "pair",
    from: "iga",
    line: "Four hooks to a band, leather over the palm. Sized to the hand; say the span across the knuckles.",
  },
  {
    key: "yonawa",
    cant: "夜縄",
    cantRomaji: "yonawa",
    cantGloss: "night rope",
    ja: "鉤縄",
    name: "Kaginawa — grapple and twelve ken of rope",
    l: 26, w: 26, h: 10, g: 2900,
    yen: 96000,
    carry: "wrap",
    max: 2,
    unit: "each",
    from: "iga",
    line: "Twenty-one metres of hemp, four-strand, spliced to a four-pronged hook. Hung with eighteen kan for a count of one hundred before it leaves.",
  },
  {
    key: "kuroshi",
    cant: "黒仕",
    cantRomaji: "kuroshi",
    cantGloss: "the black work",
    ja: "忍装束",
    name: "Shinobi shōzoku — jacket, trousers, hood, belt",
    l: 30, w: 22, h: 9, g: 1650,
    yen: 165000,
    carry: "wrap",
    max: 2,
    unit: "suit",
    from: "awa",
    line: "Kachi-iro from Tokushima, dipped eighteen times. Sashiko through the shoulders and knees. Reversible; the other face is the dull brown of a labourer.",
  },
  {
    key: "jika",
    cant: "地下",
    cantRomaji: "jika",
    cantGloss: "underfoot",
    ja: "足袋",
    name: "Tabi, split-toe — a pair",
    l: 26, w: 11, h: 9, g: 480,
    yen: 28000,
    carry: "wrap",
    max: 3,
    unit: "pair",
    from: "awa",
    line: "Sewn sole, twelve clasps, indigo over indigo. Give the length of the foot in sun and whether the toe runs wide.",
  },
  {
    key: "kiri",
    cant: "霧",
    cantRomaji: "kiri",
    cantGloss: "fog",
    ja: "目潰し",
    name: "Metsubushi — six packets",
    l: 12, w: 9, h: 4, g: 260,
    yen: 19000,
    carry: "wrap",
    max: 4,
    unit: "six packets",
    from: "awa",
    line: "Ash, ground shell and pepper in twisted washi. They keep two years dry and no time at all wet.",
  },
  {
    key: "iki",
    cant: "息",
    cantRomaji: "iki",
    cantGloss: "breath",
    ja: "吹き矢",
    name: "Fukiya — tube, lacquered case, twenty darts",
    l: 46, w: 7, h: 5, g: 690,
    yen: 88000,
    carry: "wrap",
    max: 2,
    unit: "each",
    from: "iga",
    line: "One shaku and five sun of bamboo, bored and lacquered inside so it takes no damp. The case passes for a pipe case, which is what it was.",
  },
  {
    key: "kama",
    cant: "鎌",
    cantRomaji: "kama",
    cantGloss: "the sickle",
    ja: "鎖鎌",
    name: "Kusarigama — sickle and three ken of chain",
    l: 42, w: 16, h: 8, g: 2400,
    yen: 240000,
    carry: "wrap",
    max: 1,
    unit: "each",
    from: "echizen",
    line: "A field sickle from Takefu, hafted long, with five and a half metres of forged chain and a weight. The sickle is a real sickle and is sold as one.",
  },
  {
    key: "tsue",
    cant: "杖",
    cantRomaji: "tsue",
    cantGloss: "the staff",
    ja: "仕込杖",
    name: "Shikomi-zue — the staff that is not one",
    l: 91, w: 4, h: 4, g: 1150,
    yen: 310000,
    carry: "hand",
    max: 1,
    unit: "each",
    from: "banshu",
    line: "Three shaku of oak, and what is inside it is between the buyer and the smith. It is not wrapped. It is carried in the hand, in the open, the way a staff is.",
  },
  {
    key: "tan",
    cant: "短",
    cantRomaji: "tan",
    cantGloss: "the short one",
    ja: "脇差",
    name: "Wakizashi — the short blade",
    l: 72, w: 8, h: 4, g: 1050,
    yen: 680000,
    carry: "wrap",
    max: 1,
    unit: "each",
    from: "banshu",
    line: "One shaku eight, mounted plain, no fittings that catch the light. Wrapped alone it reads as a bolt of cloth, which is the only reason this house will wrap it.",
  },
  {
    key: "cho",
    cant: "長",
    cantRomaji: "chō",
    cantGloss: "the long one",
    ja: "刀",
    name: "Katana — the long blade",
    l: 103, w: 9, h: 5, g: 1300,
    yen: 1480000,
    carry: "separate",
    max: 1,
    unit: "each",
    from: "banshu",
    line: "The house sells it and the house does not carry it. A long blade does not travel in cloth — it travels as a staff, or it travels in pieces, or it does not travel.",
  },
];

export const SOURCES = {
  iga: { ja: "伊賀上野", romaji: "Iga-Ueno", region: "Iga, Mie" },
  banshu: { ja: "播州三木", romaji: "Banshū Miki", region: "Harima, Hyōgo" },
  echizen: { ja: "越前武生", romaji: "Echizen-Takefu", region: "Echizen, Fukui" },
  awa: { ja: "阿波徳島", romaji: "Awa Tokushima", region: "Awa, Tokushima" },
};

export const wareByKey = (k) => WARES.find((w) => w.key === k);
export const knotByKey = (k) => KNOTS.find((n) => n.key === k) || KNOTS[0];

const yenFmt = new Intl.NumberFormat("en-US");
export const yen = (n) => "¥" + yenFmt.format(Math.round(n));
export const monme = (n) => Math.round(n).toLocaleString("en-US") + " 匁";

/**
 * Lay the goods out on the board. Items go down longest first, side by side,
 * until the row is as wide as the longest thing in the parcel; then a new
 * layer starts on top. It is how the board is actually packed, and it is why
 * adding one small thing can cost a whole layer of height.
 */
export function pack(counts) {
  const items = [];
  for (const w of WARES) {
    const n = counts[w.key] | 0;
    if (n <= 0) continue;
    if (w.carry !== "wrap") continue;
    for (let i = 0; i < n; i++) items.push(w);
  }
  if (!items.length) return { layers: [], L: 0, W: 0, H: 0, items: [] };

  items.sort((a, b) => b.l - a.l);
  const L = items[0].l;
  const layers = [];
  for (const it of items) {
    let layer = layers.find((ly) => ly.w + it.w <= L + 0.001);
    if (!layer) {
      layer = { w: 0, h: 0, items: [] };
      layers.push(layer);
    }
    layer.items.push({ ware: it, x: layer.w, y: 0 });
    layer.w += it.w;
    layer.h = Math.max(layer.h, it.h);
  }
  const W = Math.max(...layers.map((ly) => ly.w));
  const H = layers.reduce((s, ly) => s + ly.h, 0);
  return { layers, L, W, H, items };
}

/**
 * The house rule, written on folio four and unchanged since:
 *
 *   布は荷の対角に、高さの二倍、結び代に八寸。
 *   The cloth is the parcel's diagonal, plus twice its height,
 *   plus the knot's allowance.
 */
export function clothNeeded(L, W, H, knot) {
  if (!L) return 0;
  const diag = Math.sqrt(L * L + W * W);
  return diag + 2 * H + knot.allowanceCm;
}

export function chooseCloth(needed) {
  return CLOTHS.find((c) => c.cm >= needed - 0.001) || null;
}

/**
 * 見え — what a passer-by takes the parcel for. This is the only question the
 * house is really asked, and the answer comes out of the silhouette.
 */
export function reading(L, W, H, cloth, weightG, hasSeparate) {
  if (hasSeparate) {
    return {
      key: "toranu",
      ja: "通らぬ",
      romaji: "tōranu",
      gloss: "it does not pass",
      pass: false,
      say: "A long blade does not travel in cloth. It travels as a staff, or it travels in pieces, or it does not travel. Take it off the sheet and we will speak about it separately.",
    };
  }
  if (!L) {
    return {
      key: "kara",
      ja: "空",
      romaji: "kara",
      gloss: "empty",
      pass: false,
      say: "Nothing on the cloth yet. The register is on the left.",
    };
  }
  if (!cloth) {
    return {
      key: "toranu",
      ja: "通らぬ",
      romaji: "tōranu",
      gloss: "it does not pass",
      pass: false,
      say: "No cloth in the house is wide enough for this. Take something off, or take a lighter knot, or send it as two parcels on two nights.",
    };
  }
  if (L > 80) {
    return {
      key: "toranu",
      ja: "通らぬ",
      romaji: "tōranu",
      gloss: "it does not pass",
      pass: false,
      say: "Longer than two shaku and a half, and no fold hides the ends. Send it as two parcels, or take the length in the open as a staff.",
    };
  }
  if (L >= 45 && W <= 22 && H <= 12) {
    return {
      key: "tanmono",
      ja: "反物",
      romaji: "tanmono",
      gloss: "a bolt of cloth",
      pass: true,
      say: "Long, flat and light: the shape of a bolt of cloth leaving a cloth merchant. Nobody in Itachibori looks twice.",
    };
  }
  if (L <= 40 && W <= 34 && H <= 20) {
    return {
      key: "kusuribako",
      ja: "薬箱",
      romaji: "kusuribako",
      gloss: "a medicine chest",
      pass: true,
      say: "Square, compact, carried at the side in one hand. It reads as a physician's chest, and physicians walk at every hour.",
    };
  }
  const heavy = weightG > 6000;
  return {
    key: "ni",
    ja: "荷",
    romaji: "ni",
    gloss: "a porter's load",
    pass: true,
    say: heavy
      ? "It passes, but it is over a kan and a half and it wants a pole and a second pair of hands. That is two people who know, instead of one."
      : "It passes as an ordinary load. Bulkier than we would like — it is remembered, even if it is not questioned.",
  };
}

/** One call: everything the page needs, from the counts and the knot. */
export function build(counts, knotKey) {
  const knot = knotByKey(knotKey);
  const { layers, L, W, H, items } = pack(counts);

  const carried = WARES.filter((w) => w.carry === "hand" && (counts[w.key] | 0) > 0);
  const separate = WARES.filter((w) => w.carry === "separate" && (counts[w.key] | 0) > 0);

  const needed = clothNeeded(L, W, H, knot);
  const cloth = L ? chooseCloth(needed) : null;
  const shortfall = cloth ? 0 : Math.max(0, needed - CLOTHS[CLOTHS.length - 1].cm);

  const weightG =
    items.reduce((s, it) => s + it.g, 0) +
    carried.reduce((s, w) => s + w.g * (counts[w.key] | 0), 0);

  const goodsYen = WARES.reduce((s, w) => s + w.yen * (counts[w.key] | 0), 0);
  const clothYen = cloth ? cloth.yen : 0;
  const totalYen = goodsYen + clothYen;

  const mie = reading(L, W, H, cloth, weightG, separate.length > 0);

  return {
    knot, layers, L, W, H, items, carried, separate,
    needed, cloth, shortfall, weightG,
    goodsYen, clothYen, totalYen,
    monme: totalYen / MONME_YEN,
    mie,
    count: items.length + carried.length + separate.length,
  };
}

/** The parcel written as one line of the ledger — the order carries this. */
export function ledgerLine(counts, knotKey) {
  const b = build(counts, knotKey);
  const parts = WARES.filter((w) => (counts[w.key] | 0) > 0).map(
    (w) => `${w.cant}${w.ja !== w.cant ? `(${w.ja})` : ""} ×${counts[w.key]}`
  );
  if (!parts.length) return "—";
  return (
    parts.join(" ・ ") +
    ` ／ 結び ${b.knot.ja}` +
    (b.cloth ? ` ／ 布 ${b.cloth.ja}` : " ／ 布 —") +
    ` ／ 見え ${b.mie.ja}`
  );
}

export const DEFAULT_COUNTS = { hoshi: 1, kote: 1, yonawa: 1, jika: 1 };
export const DEFAULT_KNOT = "ma";
