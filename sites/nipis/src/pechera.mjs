/* NIPIS — the pechera model.
 *
 * One parametric model of a barong's embroidered front panel. It is imported
 * by index.astro to BAKE the default panel into the HTML (so the page is
 * complete and correct with JavaScript off) and by the client script to
 * redraw it live. Both paths run this same code, so they cannot drift apart.
 *
 * Coordinate space: viewBox 0 0 400 560, a torso seen square-on.
 * Centre line x=200. The panel is symmetric about it.
 */

export const TELA = {
  jusi: {
    label: "Jusi",
    gloss: "the heavier sheer ground",
    /* opacity of the cloth layer — jusi is the least transparent */
    opacity: 0.88,
    /* sombrado is stitched on the REVERSE; it reads through the cloth, so a
       sheerer cloth shows more of it */
    sombrado: 0.34,
    warmth: "#ece1cd",
    mult: 1.0,
    note: "Woven of fine abacá and silk. The everyday cloth — it holds a press and forgives a long day.",
  },
  seda: {
    label: "Piña-seda",
    gloss: "piña wefted on silk",
    opacity: 0.72,
    sombrado: 0.54,
    warmth: "#f0e7d5",
    mult: 1.5,
    note: "Piña across a silk warp. Half the cost of pure piña and most of the light.",
  },
  liniwan: {
    label: "Piña liniwan",
    gloss: "the fine upper fibre grade",
    opacity: 0.52,
    sombrado: 0.78,
    warmth: "#f7f2e7",
    mult: 2.2,
    note: "The top grade, hand-knotted fibre by fibre. Forty metres a month, on a good month.",
  },
};

export const MOTIF = {
  sampaguita: { label: "Sampaguita", gloss: "the vine", rate: 1.5 },
  anahaw: { label: "Anahaw", gloss: "the fan", rate: 1.7 },
  espiga: { label: "Espiga", gloss: "the spike", rate: 1.0 },
  puro: { label: "Calado puro", gloss: "openwork alone", rate: 0.2 },
};

export const OKASYON = {
  "araw-araw": { label: "Araw-araw", gloss: "everyday", hw: 44, drop: 240 },
  kasal: { label: "Kasal", gloss: "a wedding", hw: 68, drop: 330 },
  panauhin: { label: "Panauhin", gloss: "a state occasion", hw: 78, drop: 430 },
};

export const DEFAULT_SPEC = {
  tela: "seda",
  motif: "sampaguita",
  okasyon: "kasal",
  calado: 3,
};

const CX = 200; // centre line
const TOP = 94; // where the burda begins, below the collar band
const PLACKET_HW = 15; // half-width of the button placket

const r2 = (n) => Math.round(n * 100) / 100;

/* ---------- motif generators ----------
   Each returns an array of path `d` strings for ONE side band, drawn in a
   local box from x0..x1 (outward from the placket) and y0..y1. The caller
   mirrors them for the other side. */

function sampaguita(x0, x1, y0, y1) {
  // a sinuous stem with five-petal flowers at intervals — the jasmine vine
  const paths = [];
  const w = x1 - x0;
  const midX = x0 + w * 0.5;
  const amp = Math.min(w * 0.3, 26);
  const step = 46;
  let d = `M ${r2(midX)} ${y0}`;
  for (let y = y0; y < y1 - step; y += step) {
    const dir = ((y - y0) / step) % 2 === 0 ? 1 : -1;
    d += ` Q ${r2(midX + amp * dir)} ${r2(y + step * 0.5)} ${r2(midX)} ${r2(y + step)}`;
  }
  paths.push(d);

  // flowers sit at each inflection, alternating sides
  for (let y = y0 + step * 0.5, i = 0; y < y1 - 12; y += step, i++) {
    const dir = i % 2 === 0 ? 1 : -1;
    const fx = midX + amp * dir * 0.92;
    const petals = [];
    for (let p = 0; p < 5; p++) {
      const a = (p / 5) * Math.PI * 2 - Math.PI / 2;
      const px = fx + Math.cos(a) * 6.2;
      const py = y + Math.sin(a) * 6.2;
      petals.push(
        `M ${r2(fx)} ${r2(y)} Q ${r2(fx + Math.cos(a - 0.5) * 8)} ${r2(y + Math.sin(a - 0.5) * 8)} ${r2(px)} ${r2(py)} Q ${r2(fx + Math.cos(a + 0.5) * 8)} ${r2(y + Math.sin(a + 0.5) * 8)} ${r2(fx)} ${r2(y)}`,
      );
    }
    paths.push(petals.join(" "));
    // a leaf off the stem, opposite the flower
    const lx = midX - amp * dir * 0.5;
    paths.push(
      `M ${r2(midX)} ${r2(y + 10)} Q ${r2(lx)} ${r2(y + 4)} ${r2(lx - 3 * dir)} ${r2(y + 18)} Q ${r2(midX - 2 * dir)} ${r2(y + 18)} ${r2(midX)} ${r2(y + 10)}`,
    );
  }
  return paths;
}

function anahaw(x0, x1, y0, y1) {
  // stacked fan-palm leaves — radiating ribs from a stem point
  const paths = [];
  const w = x1 - x0;
  const midX = x0 + w * 0.5;
  const step = 58;
  const R = Math.min(w * 0.46, 30);
  for (let y = y0 + step * 0.4; y < y1 - 8; y += step) {
    const ribs = 9;
    for (let i = 0; i < ribs; i++) {
      const a = -Math.PI * 0.86 + (i / (ribs - 1)) * Math.PI * 0.72;
      paths.push(
        `M ${r2(midX)} ${r2(y + R * 0.5)} L ${r2(midX + Math.cos(a) * R)} ${r2(y + R * 0.5 + Math.sin(a) * R)}`,
      );
    }
    // the scalloped outer edge of the fan
    let e = "";
    for (let i = 0; i < ribs; i++) {
      const a = -Math.PI * 0.86 + (i / (ribs - 1)) * Math.PI * 0.72;
      const px = midX + Math.cos(a) * R;
      const py = y + R * 0.5 + Math.sin(a) * R;
      e += i === 0 ? `M ${r2(px)} ${r2(py)}` : ` Q ${r2(midX + Math.cos(a - 0.06) * R * 1.12)} ${r2(y + R * 0.5 + Math.sin(a - 0.06) * R * 1.12)} ${r2(px)} ${r2(py)}`;
    }
    paths.push(e);
    paths.push(`M ${r2(midX)} ${r2(y + R * 0.5)} L ${r2(midX)} ${r2(y + R * 0.5 + 16)}`);
  }
  return paths;
}

function espiga(x0, x1, y0, y1) {
  // the wheat spike — a spine with paired chevron grains
  const paths = [];
  const w = x1 - x0;
  const midX = x0 + w * 0.5;
  const arm = Math.min(w * 0.34, 20);
  paths.push(`M ${r2(midX)} ${y0} L ${r2(midX)} ${r2(y1)}`);
  for (let y = y0 + 12; y < y1 - 6; y += 19) {
    paths.push(
      `M ${r2(midX - arm)} ${r2(y + 10)} Q ${r2(midX - arm * 0.4)} ${r2(y + 1)} ${r2(midX)} ${r2(y)} Q ${r2(midX + arm * 0.4)} ${r2(y + 1)} ${r2(midX + arm)} ${r2(y + 10)}`,
    );
  }
  return paths;
}

function puro(x0, x1, y0, y1) {
  // no figurative motif — only the framing rules that edge the openwork field
  const midX = x0 + (x1 - x0) * 0.5;
  return [
    `M ${r2(midX)} ${y0} L ${r2(midX)} ${r2(y1)}`,
  ];
}

const GEN = { sampaguita, anahaw, espiga, puro };

/* ---------- the model ---------- */

export function buildPechera(spec) {
  const s = { ...DEFAULT_SPEC, ...spec };
  const tela = TELA[s.tela] || TELA[DEFAULT_SPEC.tela];
  const motif = MOTIF[s.motif] || MOTIF[DEFAULT_SPEC.motif];
  const ok = OKASYON[s.okasyon] || OKASYON[DEFAULT_SPEC.okasyon];
  const calado = Math.max(0, Math.min(5, Number(s.calado)));

  const y0 = TOP;
  const y1 = TOP + ok.drop;
  const x0 = CX + PLACKET_HW + 4; // the band starts just outside the placket
  const x1 = x0 + ok.hw;

  // right-hand band, then mirrored for the left
  const bandPaths = GEN[s.motif] ? GEN[s.motif](x0, x1, y0, y1) : GEN.sampaguita(x0, x1, y0, y1);

  // calado openwork. Threads are DRAWN OUT of the woven ground in both
  // directions and the survivors whipped into a lattice — so this is not a
  // grid of dots. It is a set of removed threads (thin lines) with a wider
  // opening where two removals cross. Both are true holes: they mask the
  // cloth away, so whatever is behind the barong reads through them.
  const holes = [];
  const caladoLines = [];
  let caladoWidth = 0;
  if (calado > 0) {
    const pitch = 25 - calado * 2.6;      // denser work as the density climbs
    const size = 1.6 + calado * 0.8;      // the opening at each crossing
    caladoWidth = r2(0.35 + calado * 0.16); // how wide a removed thread reads
    const midX = x0 + (x1 - x0) * 0.5;
    const clear = 7.5; // the motif's own spine stays solid ground

    for (let y = y0 + pitch * 0.5; y < y1 - 2; y += pitch) {
      caladoLines.push(`M ${r2(x0)} ${r2(y)} L ${r2(midX - clear)} ${r2(y)}`);
      caladoLines.push(`M ${r2(midX + clear)} ${r2(y)} L ${r2(x1)} ${r2(y)}`);
    }
    for (let x = x0 + pitch * 0.5; x < x1 - 2; x += pitch) {
      if (Math.abs(x - midX) < clear) continue;
      caladoLines.push(`M ${r2(x)} ${r2(y0)} L ${r2(x)} ${r2(y1)}`);
    }
    // the wider opening where two drawn threads cross
    for (let y = y0 + pitch * 0.5; y < y1 - 2; y += pitch) {
      for (let x = x0 + pitch * 0.5; x < x1 - 2; x += pitch) {
        if (Math.abs(x - midX) < clear) continue;
        holes.push({ x: r2(x - size / 2), y: r2(y - size / 2), w: r2(size), h: r2(size) });
      }
    }
  }

  // the framing rules that edge every pechera, whatever the motif
  const rules = [
    `M ${r2(x0 - 3)} ${y0} L ${r2(x0 - 3)} ${r2(y1)}`,
    `M ${r2(x1 + 3)} ${y0} L ${r2(x1 + 3)} ${r2(y1)}`,
    `M ${r2(x0 - 3)} ${r2(y1)} L ${r2(x1 + 3)} ${r2(y1)}`,
  ];

  // ---- the readout ----
  const areaK = (ok.hw * ok.drop * 2) / 1000; // both bands, in thousands of px²
  const hours = Math.round(areaK * (motif.rate + calado * 0.3));
  const priceP = Math.round(((9000 + hours * 210) * tela.mult) / 100) * 100;
  const priceUSD = Math.round((priceP / 58.5) / 5) * 5;
  const weeks = Math.round(hours / 16) + 4;
  const dropCm = Math.round((ok.drop / 560) * 76);

  return {
    spec: { ...s, calado },
    tela,
    motif,
    okasyon: ok,
    geom: { x0, x1, y0, y1 },
    bandPaths,
    rules,
    holes,
    caladoLines,
    caladoWidth,
    cloth: { opacity: tela.opacity, fill: tela.warmth, sombrado: tela.sombrado },
    readout: {
      tela: tela.label,
      motif: motif.label,
      okasyon: ok.label,
      calado,
      dropCm,
      hours,
      weeks,
      priceP,
      priceUSD,
      priceLabel: `₱${priceP.toLocaleString("en-PH")}`,
      usdLabel: `about $${priceUSD.toLocaleString("en-US")}`,
    },
    /* the single line the order form carries */
    summary: `${tela.label} · ${motif.label} · ${ok.label} · calado ${calado}/5 · panel drop ${dropCm} cm · ~${hours} hours at the needle`,
  };
}

/* Mirror a right-band path string across the centre line. Used for the left
   band so both sides are generated from one set of paths. */
export const MIRROR = `translate(${CX * 2}, 0) scale(-1, 1)`;
