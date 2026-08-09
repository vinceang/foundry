/*
  BANAAG — ang hulma
  ------------------------------------------------------------------
  The shop's first working document, as geometry.

  A jeepney body is chalked out full size on the floor before a panel is cut,
  and the chalk answers four questions in order: what chassis is under it, how
  many people sit in it, what shape the roof is, and what gets bolted on. This
  module is that chalk. Everything is in millimetres, measured from the rear
  bumper face (x) and up from the ground line (y), because that is how a body
  layout is dimensioned.

  Both the server render and the live drawing import this file, so the page a
  visitor gets with JS off can never disagree with the one they get with it on.
*/

/* ---------------------------------------------------------------- catalogue */

export const CHASSIS = {
  surplus: { label: "Surplus rebuild", note: "reconditioned donor, the shop's own rebuild", nose: 1040, wheel: 355, base: 640000 },
  "4be1": { label: "Isuzu 4BE1", note: "3.6 four, the route standard", nose: 1120, wheel: 380, base: 780000 },
  "4d34": { label: "Mitsubishi 4D34", note: "3.9 four, for the long provincial runs", nose: 1200, wheel: 405, base: 890000 },
  "4hf1": { label: "Isuzu 4HF1", note: "4.3 four, for 20 upuan and above", nose: 1300, wheel: 430, base: 935000 },
};

export const CAPACITY = [14, 16, 18, 20, 22];

export const ROOF = {
  patag: { label: "Patag", en: "flat", roof: 2360, rack: false, price: 0 },
  hubog: { label: "Hubog", en: "crowned", roof: 2440, rack: false, price: 34000 },
  kargahan: { label: "Kargahan", en: "crowned, with roof rack", roof: 2440, rack: true, price: 82000 },
};

export const KABAYO = {
  wala: { label: "Wala", en: "none", horses: 0, bumper: false, price: 0 },
  isa: { label: "Isa", en: "one stallion", horses: 1, bumper: false, price: 9500 },
  pares: { label: "Pares", en: "a pair", horses: 2, bumper: false, price: 16000 },
  buo: { label: "Buo", en: "stallion and bumper sculpture", horses: 1, bumper: true, price: 38000 },
};

export const ILAW = {
  wala: { label: "Wala", en: "no valance", rows: 0, rotor: false, price: 0 },
  isahan: { label: "Isahan", en: "single row", rows: 1, rotor: false, price: 26000 },
  doble: { label: "Dobleng linya", en: "double row", rows: 2, rotor: false, price: 41000 },
  rotor: { label: "May rotor", en: "double row on a hand-cut rotor", rows: 2, rotor: true, price: 68000 },
};

/* The letrista's four hands. A mural is a painted panel; the other three are
   linework, which is most of what this trade actually is. */
export const PINTA = {
  hubad: { label: "Hubad", en: "bare steel, no paint", price: 0 },
  guhit: { label: "Guhit", en: "pinstripe", price: 18000 },
  eskrol: { label: "Eskrol", en: "scrollwork", price: 46000 },
  mural: { label: "Mural", en: "painted panel", price: 112000 },
};

export const TUBO = {
  aqua: { label: "Aqua", hex: "#5ed3b8" },
  rosas: { label: "Rosas", hex: "#ef7fa8" },
  berde: { label: "Berde", hex: "#7fdd63" },
  asul: { label: "Asul", hex: "#5aa8ef" },
  ginto: { label: "Ginto", hex: "#f0c463" },
};

/* Fittings, for the Kabit lang sheet. Every one of these is under $1,000 —
   which is why this site gets a real order form and not a letter. */
export const KABIT = [
  { id: "sabit", label: "Sabit", en: "windshield hangings, set", price: 2400 },
  { id: "barandilya", label: "Barandilya", en: "grab rail set, chromed", price: 7800 },
  { id: "kabayo1", label: "Kabayo", en: "one chrome stallion", price: 9500 },
  { id: "karatula", label: "Karatula", en: "signboard set, hand-lettered", price: 14000 },
  { id: "estribo", label: "Estribo", en: "running boards, pair, chromed", price: 18500 },
  { id: "salamin", label: "Salamin", en: "mirrored ceiling panel kit", price: 21000 },
  { id: "bumper", label: "Bumper", en: "bumper sculpture, formed and chromed", price: 24000 },
  { id: "tubo", label: "Tubo", en: "light valance, single row, fitted", price: 26000 },
  { id: "rotor", label: "Rotor", en: "sequencer drum, cut and filed by hand", price: 42000 },
  { id: "loob", label: "Buong loob", en: "full interior — panels, rails, upholstery", price: 52000 },
];

export const KARATULA_PRICE = 14000;
export const UPUAN_PRICE = 3200; // per seat, upholstered
export const BAY_PRICE = 58000; // per window bay past the fourth

/* ------------------------------------------------------------------ metrics */

const PITCH = 620; // one window bay — wider than tall, as they really are
const REAR = 520; // rear entrance and step
const CAB = 940; // driver's door
const LEAN = 300; // windshield lean
const VISOR = 110; // the roof's overhang past the screen
const BUMP = 190;
const PILLAR = 80;

const H_SILL = 760;
const H_WINSILL = 1460;
const H_WINTOP = 2000;
const H_HOOD = 1560;
const H_COWL = 1680;
const H_ESTRIBO = 560;
const KARATULA_H = 300;
const RACK_H = 380;

const GY = 3200; // the ground line, in svg units
const PAD = 380;
const BELOW = 640; // room under the ground line for the length dimension

const y = (mm) => GY - mm;
const n = (v) => Math.round(v * 10) / 10;

export function bays(capacity) {
  return capacity / 2 - 3; // 14 → 4 bays, 22 → 8
}

/* ------------------------------------------------------------------ the horse

   The kabayo, drawn rather than photographed, because it has to sit on a
   drawing the buyer is changing. Normalised into a 100 × 100 box (y down) and
   transformed onto the hood. A rearing stallion: hind legs planted, neck
   arched hard over, both forelegs off the ground. */
const HORSE = [
  // barrel and hindquarter — overlapping masses, all wound the same way so a
  // nonzero fill unions them instead of punching holes
  "M 22 50 A 18 15 0 1 1 58 50 A 18 15 0 1 1 22 50 Z",
  "M 12 46 A 15 15 0 1 1 42 46 A 15 15 0 1 1 12 46 Z",
  "M 45 53 A 13 13 0 1 1 71 53 A 13 13 0 1 1 45 53 Z",
  // the tail, thrown back off the rump
  "M 18 34 L 27 38 L 17 70 L 8 80 Z",
  // the neck, arching hard over
  "M 45 46 L 62 9 L 77 14 L 61 55 Z",
  // the head: poll, face, muzzle
  "M 61 12 L 71 2 L 93 14 L 95 23 L 86 26 L 68 19 Z",
  // hind legs, planted
  "M 13 44 L 23 44 L 27 100 L 17 100 Z",
  "M 28 52 L 38 52 L 40 100 L 31 100 Z",
  // forelegs, folded and off the ground
  "M 55 52 L 64 47 L 82 57 L 77 65 Z",
  "M 82 57 L 79 66 L 65 76 L 60 69 Z",
  "M 50 60 L 59 56 L 71 79 L 63 83 Z",
  "M 71 79 L 68 87 L 55 97 L 49 90 Z",
].join(" ");

function horseAt(cx, groundMM, hMM, flip) {
  const s = hMM / 100;
  const w = 100 * s;
  const tx = cx - w / 2;
  const ty = y(groundMM) - hMM;
  return flip
    ? `translate(${n(tx + w)} ${n(ty)}) scale(${n(-s)} ${n(s)})`
    : `translate(${n(tx)} ${n(ty)}) scale(${n(s)})`;
}

/* -------------------------------------------------------------------- hulma */

export function hulma(spec) {
  const ch = CHASSIS[spec.chassis] ?? CHASSIS["4be1"];
  const roofOpt = ROOF[spec.bubong] ?? ROOF.patag;
  const kab = KABAYO[spec.kabayo] ?? KABAYO.wala;
  const ilaw = ILAW[spec.ilaw] ?? ILAW.wala;
  const pinta = PINTA[spec.pinta] ?? PINTA.hubad;
  const tubo = TUBO[spec.tubo] ?? TUBO.aqua;
  const cap = CAPACITY.includes(spec.upuan) ? spec.upuan : 18;

  const nb = bays(cap);
  const H_ROOF = roofOpt.roof;

  /* x landmarks, rear (0) to front */
  const xBody = REAR;
  const xBodyEnd = xBody + nb * PITCH;
  const xCabEnd = xBodyEnd + CAB;
  const xCowl = xCabEnd + LEAN;
  const xNose = xCowl + ch.nose;
  const L = xNose + BUMP;

  const axleR = xBody + nb * PITCH * 0.32;
  const axleF = xCowl + ch.nose * 0.42;

  const topMM = H_ROOF + KARATULA_H + (roofOpt.rack ? RACK_H - KARATULA_H : 0);
  const vbTop = Math.max(topMM, H_ROOF + KARATULA_H);

  const vb = `${-PAD} ${n(y(vbTop) - PAD)} ${n(L + PAD * 2)} ${n(vbTop + PAD + BELOW)}`;

  /* ---- the silhouette ------------------------------------------------
     One closed outline, traversed counter-clockwise from the rear bottom:
     along the underside (arching up over each wheel, so the arches are cut
     into the body rather than drawn on top of it), up the front, back along
     the roof, down the rear face. Everything painted on the flank is clipped
     to this path, which is why nothing can spill past the nose. */
  const rA = ch.wheel + 70; // arch radius
  const body =
    `M 0 ${y(H_SILL)} ` +
    `L ${n(axleR - rA)} ${y(H_SILL)} ` +
    `A ${n(rA)} ${n(rA)} 0 0 1 ${n(axleR + rA)} ${y(H_SILL)} ` +
    `L ${n(axleF - rA)} ${y(H_SILL)} ` +
    `A ${n(rA)} ${n(rA)} 0 0 1 ${n(axleF + rA)} ${y(H_SILL)} ` +
    `L ${n(xNose - 70)} ${y(H_SILL)} ` +
    `L ${n(xNose - 70)} ${y(640)} ` + // the front valance drops below the fender
    `L ${n(xNose)} ${y(640)} ` +
    `L ${n(xNose)} ${y(H_HOOD - 320)} ` + // grille face
    `Q ${n(xNose)} ${y(H_HOOD)} ${n(xNose - 170)} ${y(H_HOOD)} ` + // nose radius
    `L ${n(xCowl)} ${y(H_COWL)} ` + // hood back to the cowl
    `L ${n(xCabEnd + VISOR)} ${y(H_ROOF)} ` + // windshield, up to the roof's visor
    `L 0 ${y(H_ROOF)} Z`;

  /* rear entrance: the back 520 mm is an opening, not a panel */
  const entrance =
    `M ${xBody} ${y(H_ROOF - 140)} L ${xBody} ${y(H_SILL)} ` +
    `M 110 ${y(H_ROOF - 140)} L 110 ${y(H_SILL)} ` +
    `M 110 ${y(H_ROOF - 140)} L ${xBody} ${y(H_ROOF - 140)}`;
  const step = `M 60 ${y(430)} L ${n(xBody - 30)} ${y(430)} L ${n(xBody - 30)} ${y(360)} L 60 ${y(360)} Z`;

  /* ---- windows: one opening per bay, plus the driver's door ---- */
  const windows = [];
  for (let i = 0; i < nb; i++) {
    const x0 = xBody + i * PITCH + PILLAR / 2;
    const w = PITCH - PILLAR;
    windows.push({ x: n(x0), y: n(y(H_WINTOP)), w: n(w), h: n(H_WINTOP - H_WINSILL) });
  }
  const cabWin = {
    x: n(xBodyEnd + 110),
    y: n(y(H_WINTOP)),
    w: n(CAB - 200),
    h: n(H_WINTOP - H_WINSILL + 90),
  };
  const cabDoor =
    `M ${n(xBodyEnd + 40)} ${y(H_SILL)} L ${n(xBodyEnd + 40)} ${y(H_ROOF - 60)} ` +
    `L ${n(xCabEnd - 40)} ${y(H_ROOF - 60)} L ${n(xCabEnd - 40)} ${y(H_SILL)}`;

  /* the windshield's own frame, and the sabit hanging behind it */
  const windshield = `M ${n(xCabEnd + 40)} ${y(H_ROOF - 70)} L ${n(xCowl - 30)} ${y(H_COWL + 60)}`;

  /* ---- wheels ---- */
  const wheels = [
    { cx: n(axleR), cy: n(y(ch.wheel)), r: ch.wheel, hub: n(ch.wheel * 0.42) },
    { cx: n(axleF), cy: n(y(ch.wheel)), r: ch.wheel, hub: n(ch.wheel * 0.42) },
  ];
  const arches = wheels
    .map((w) => {
      const r = w.r + 170; // outside the cut, so it reads as the chrome flare
      return `M ${n(w.cx - r)} ${y(H_SILL)} A ${n(r)} ${n(r * 0.82)} 0 0 1 ${n(w.cx + r)} ${y(H_SILL)}`;
    })
    .join(" ");

  /* ---- estribo: the running board a passenger steps on ---- */
  const estribo =
    `M ${n(xBody - 70)} ${y(H_SILL)} L ${n(xBody - 70)} ${y(H_ESTRIBO)} ` +
    `L ${n(xCabEnd - 40)} ${y(H_ESTRIBO)} L ${n(xCabEnd - 40)} ${y(H_ESTRIBO - 80)} ` +
    `L ${n(xBody - 150)} ${y(H_ESTRIBO - 80)} L ${n(xBody - 150)} ${y(H_SILL)} Z`;

  /* ---- karatula: the route board along the roof edge ---- */
  const kx = 160;
  const kw = xBodyEnd - kx;
  const karatula = { x: n(kx), y: n(y(H_ROOF + KARATULA_H)), w: n(kw), h: KARATULA_H };
  const karatulaText = {
    x: n(kx + kw / 2),
    y: n(y(H_ROOF + 86)),
    size: 196,
    max: n(kw - 120),
  };

  /* ---- kargahan: the roof rack, stanchions behind the board ---- */
  const rack = [];
  if (roofOpt.rack) {
    const rTop = y(H_ROOF + RACK_H);
    rack.push(`M ${n(kx)} ${n(rTop)} L ${n(xCabEnd - 60)} ${n(rTop)}`);
    for (let i = 0; i <= 5; i++) {
      const sx = kx + ((xCabEnd - 60 - kx) * i) / 5;
      rack.push(`M ${n(sx)} ${n(rTop)} L ${n(sx)} ${y(H_ROOF)}`);
    }
  }

  /* ---- ilaw: the valance. This is the only place Tubo is allowed. ---- */
  const valance = [];
  for (let r = 0; r < ilaw.rows; r++) {
    const vy = y(H_ROOF - 130 - r * 150);
    valance.push({ x1: n(xBody - 40), x2: n(xCabEnd - 60), y: n(vy) });
  }
  const rotorTicks = [];
  if (ilaw.rotor) {
    const y0 = y(H_ROOF - 130);
    for (let i = 0; i < nb * 3; i++) {
      const tx = xBody + 40 + (i * (xCabEnd - 120 - xBody)) / (nb * 3);
      rotorTicks.push({ x: n(tx), y: n(y0), on: i % 3 === 0 });
    }
  }

  /* ---- pinta: the letrista's hand on the flank panel ---- */
  const px0 = xBody + 60;
  const px1 = xCabEnd - 60;
  const pmid = (H_SILL + H_WINSILL) / 2;
  const flank = { x: n(px0), y: n(y(H_WINSILL)), w: n(px1 - px0), h: n(H_WINSILL - H_SILL) };
  const stripes = [];
  const scroll = [];
  if (spec.pinta === "guhit" || spec.pinta === "eskrol") {
    for (const off of [-190, -150, 150, 190]) {
      stripes.push(`M ${n(px0)} ${y(pmid + off)} L ${n(px1)} ${y(pmid + off)}`);
    }
  }
  if (spec.pinta === "eskrol" || spec.pinta === "mural") {
    // scrollwork: a run of opposed C-curls, the letrista's filler
    const step2 = 460;
    for (let sx = px0 + 80; sx < px1 - 200; sx += step2) {
      scroll.push(
        `M ${n(sx)} ${y(pmid + 120)} C ${n(sx + 90)} ${y(pmid + 230)} ${n(sx + 200)} ${y(pmid + 180)} ${n(sx + 190)} ${y(pmid + 60)} ` +
          `C ${n(sx + 184)} ${y(pmid - 30)} ${n(sx + 260)} ${y(pmid - 60)} ${n(sx + 330)} ${y(pmid + 10)}`
      );
    }
  }
  const mural =
    spec.pinta === "mural"
      ? {
          x: n(px0 + 40),
          y: n(y(H_WINSILL - 60)),
          w: n(px1 - px0 - 80),
          h: n(H_WINSILL - H_SILL - 140),
        }
      : null;

  const dedText = {
    x: n((px0 + px1) / 2),
    y: n(y(pmid - 60)),
    size: 168,
    max: n(px1 - px0 - 160),
  };

  /* ---- kabayo on the hood, mirror on the cab, sabit in the screen ---- */
  const horses = [];
  const hx = xNose - 420;
  if (kab.horses === 1) horses.push(horseAt(hx, H_HOOD + 10, 430, false));
  if (kab.horses === 2) {
    horses.push(horseAt(hx - 170, H_HOOD + 10, 400, false));
    horses.push(horseAt(hx + 190, H_HOOD + 5, 330, false));
  }
  const bumper =
    `M ${n(xNose - 170)} ${y(780)} L ${n(L)} ${y(780)} ` +
    `L ${n(L)} ${y(480)} L ${n(xNose - 170)} ${y(480)} Z`;

  const bumperArt = kab.bumper
    ? `M ${n(xNose - 60)} ${y(560)} C ${n(xNose + 20)} ${y(640)} ${n(L - 20)} ${y(600)} ${n(L)} ${y(500)} ` +
      `C ${n(L - 30)} ${y(430)} ${n(xNose + 30)} ${y(400)} ${n(xNose - 60)} ${y(450)}`
    : null;

  const mirror =
    `M ${n(xCabEnd - 20)} ${y(H_WINTOP - 40)} L ${n(xCabEnd + 150)} ${y(H_WINTOP + 60)} ` +
    `M ${n(xCabEnd + 130)} ${y(H_WINTOP + 160)} L ${n(xCabEnd + 210)} ${y(H_WINTOP + 130)} ` +
    `L ${n(xCabEnd + 180)} ${y(H_WINTOP + 10)} L ${n(xCabEnd + 100)} ${y(H_WINTOP + 40)} Z`;

  const sabit = [];
  for (let i = 0; i < 5; i++) {
    const sx = xCabEnd + 70 + i * 34;
    sabit.push({ x: n(sx), y1: n(y(H_ROOF - 150)), y2: n(y(H_ROOF - 150 - 130 - (i % 3) * 45)) });
  }

  const barandilya = `M ${n(xBody + 40)} ${y(H_WINSILL + 90)} L ${n(xBodyEnd - 20)} ${y(H_WINSILL + 90)}`;

  /* ---- dimensions: the site's only ornament ---- */
  const dimL = {
    y: n(y(-260)),
    x1: 0,
    x2: n(L),
    label: `${L.toLocaleString("en-US").replace(",", " ")} mm`,
    tx: n(L / 2),
  };
  const dimH = {
    x: n(-230),
    y1: n(y(H_ROOF + KARATULA_H)),
    y2: n(y(0)),
    label: `${(H_ROOF + KARATULA_H).toLocaleString("en-US").replace(",", " ")} mm`,
    ty: n(y((H_ROOF + KARATULA_H) / 2)),
  };
  const dimW = {
    y: n(y(H_ROOF + KARATULA_H + 170)),
    x1: n(xBody),
    x2: n(xBody + PITCH),
    label: `${PITCH} mm`,
    tx: n(xBody + PITCH / 2),
  };

  /* ------------------------------------------------------------- the money */
  const extraBays = Math.max(0, nb - 4);
  const lines = [
    { k: "Katawan sa " + ch.label, v: ch.base },
    { k: `${extraBays} dagdag na bintana`, v: extraBays * BAY_PRICE, hide: extraBays === 0 },
    { k: `Bubong — ${roofOpt.label.toLowerCase()}`, v: roofOpt.price, hide: roofOpt.price === 0 },
    { k: `Upuan — ${cap} × ₱${UPUAN_PRICE.toLocaleString("en-US")}`, v: cap * UPUAN_PRICE },
    { k: "Karatula, kinamay", v: KARATULA_PRICE },
    { k: `Kabayo — ${kab.label.toLowerCase()}`, v: kab.price, hide: kab.price === 0 },
    { k: `Ilaw — ${ilaw.label.toLowerCase()}`, v: ilaw.price, hide: ilaw.price === 0 },
    { k: `Pinta — ${pinta.label.toLowerCase()}`, v: pinta.price, hide: pinta.price === 0 },
  ].filter((l) => !l.hide);

  const total = lines.reduce((a, b) => a + b.v, 0);
  const deposit = Math.round(total * 0.3);
  const financed = total - deposit;
  const terms = [24, 36, 48].map((m) => ({ m, monthly: Math.round(financed / m / 100) * 100 }));

  /* nine to fourteen bodies a year, so the queue is months long and honest */
  const slotWeeks = 6 + nb + (pinta.price > 40000 ? 4 : 0) + (ilaw.rotor ? 2 : 0);

  return {
    vb,
    spec: {
      chassis: ch,
      cap,
      bays: nb,
      roof: roofOpt,
      kabayo: kab,
      ilaw,
      pinta,
      tubo,
      length: L,
      height: H_ROOF + KARATULA_H,
      wheelbase: Math.round(axleF - axleR),
      route: spec.route,
      dedication: spec.dedication,
    },
    money: { lines, total, deposit, financed, terms, slotWeeks },
    parts: {
      body,
      entrance,
      step,
      windows,
      cabWin,
      cabDoor,
      windshield,
      wheels,
      arches,
      estribo,
      karatula,
      karatulaText,
      rack,
      valance,
      rotorTicks,
      flank,
      stripes,
      scroll,
      mural,
      dedText,
      horses,
      bumperArt,
      mirror,
      bumper,
      sabit,
      barandilya,
      dimL,
      dimH,
      dimW,
      horsePath: HORSE,
    },
  };
}

export const peso = (v) => "₱" + Math.round(v).toLocaleString("en-US");
