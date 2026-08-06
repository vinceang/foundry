// La traccia — the frame model.
//
// Every number on this page comes out of here: the drawing, the readouts, the
// price and the order line. The geometry is real framebuilding arithmetic, not
// a plausible-looking curve, which is why it can be argued with.
//
// Coordinates are frame-local millimetres with the bottom bracket at the
// origin, x forward, y up. Both axles sit at y = +bbDrop, so the ground line
// is at y = bbDrop − R.

export const RIM_R = 311; // mm, the radius of a 622 rim bed's tyre seat

/** The three roads. The road is an input, not a preference — it sets the
 *  tyre, the stays, the drop and, most of all, the fork. */
export const ROADS = [
  {
    key: "passo",
    it: "Passo",
    gloss: "alpine tarmac",
    tyre: 28,
    cs: 410,
    bbDrop: 72,
    offset: 45,
    haSmall: 72.0,
    haLarge: 73.5,
    price: 2850,
    line: "Long paved climbs and the descents off them. Quick without being nervous, because you will be on it for nine hours and two of those are downhill.",
    road: "Mortirolo, Gavia, Vivione.",
  },
  {
    key: "bianca",
    it: "Bianca",
    gloss: "the white roads",
    tyre: 38,
    cs: 430,
    bbDrop: 70,
    offset: 50,
    haSmall: 70.5,
    haLarge: 72.0,
    price: 3150,
    line: "Gravel and broken surface. Slacker, longer in the stays, and carrying enough trail that the front stays put when the surface does not.",
    road: "Valle delle Messi, the Mortirolo's gravel side.",
  },
  {
    key: "randonnee",
    it: "Randonnée",
    gloss: "distance, loaded",
    tyre: 32,
    cs: 425,
    bbDrop: 75,
    offset: 65,
    haSmall: 71.0,
    haLarge: 72.5,
    price: 3400,
    line: "Built low-trail for a front bag: the fork is raked far forward so a loaded front wheel still steers itself instead of flopping into the corner.",
    road: "Anywhere, for twenty hours at a time.",
  },
];

/** How far forward the rider wants to be. Three positions, not a slider,
 *  because this is a conversation the builder has and then decides. */
export const REACHES = [
  { key: "raccolto", it: "Raccolto", gloss: "compact", dTT: -12, line: "Shorter in the top tube. Climbing position, hands on the tops." },
  { key: "neutro", it: "Neutro", gloss: "neutral", dTT: 0, line: "The length he draws unless told otherwise." },
  { key: "disteso", it: "Disteso", gloss: "extended", dTT: 12, line: "Longer, lower at the front. For riders who already know they want it." },
];

/** Butted wall thicknesses, chosen by rider weight. The middle number is the
 *  thin part in the centre of the tube, which is where the weight is saved. */
export const GAUGES = [
  { max: 65, label: "0,7 – 0,4 – 0,7", extra: 0, price: 0, note: "The lightest set the shop will braze." },
  { max: 85, label: "0,8 – 0,5 – 0,8", extra: 90, price: 0, note: "The standard set. Most frames leave on this." },
  { max: 100, label: "0,9 – 0,6 – 0,9", extra: 180, price: 0, note: "Heavier walls through the down tube and the stays." },
  { max: 999, label: "1,0 – 0,7 – 1,0", extra: 280, price: 300, note: "Oversize tubing. Costs three hundred more and the tubes come from a different drawer." },
];

const rad = (d) => (d * Math.PI) / 180;
const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));

export const roadByKey = (k) => ROADS.find((r) => r.key === k) || ROADS[0];
export const reachByKey = (k) => REACHES.find((r) => r.key === k) || REACHES[1];
export const gaugeFor = (kg) => GAUGES.find((g) => kg <= g.max) || GAUGES[GAUGES.length - 1];

/** The toe's radius about the bottom bracket: crank arm, plus how far a shoe
 *  reaches past the pedal spindle. */
export const CRANK = 172.5;
export const TOE_PAST_SPINDLE = 90;
export const TOE_R = CRANK + TOE_PAST_SPINDLE;

export function build({ altezza, cavallo, allungo, strada, peso }) {
  const road = roadByKey(strada);
  const reach = reachByKey(allungo);
  const gauge = gaugeFor(peso);

  // Seat tube from the inseam, top tube from the height. Two numbers, because
  // the same 178 cm rider can need two different seat tubes.
  const st = Math.round(cavallo * 6.5);
  const tt = Math.round(altezza * 3.15 + reach.dTT);

  // Angles run with size: small frames steeper at the seat and slacker at the
  // head, which is the only lever there is against toe overlap.
  const t = (st - 460) / 160;
  const sa = lerp(74.5, 73.0, t);
  const ha = lerp(road.haSmall, road.haLarge, t);
  const ht = Math.round(st * 0.26 + 25);

  const R = RIM_R + road.tyre * 0.95;
  const trail = (R * Math.cos(rad(ha)) - road.offset) / Math.sin(rad(ha));

  // Lay the frame out.
  const bb = { x: 0, y: 0 };
  const seatTop = { x: -st * Math.cos(rad(sa)), y: st * Math.sin(rad(sa)) };
  const headTop = { x: seatTop.x + tt, y: seatTop.y };
  const headBot = {
    x: headTop.x + ht * Math.cos(rad(ha)),
    y: headTop.y - ht * Math.sin(rad(ha)),
  };

  const groundY = road.bbDrop - R;
  const rearAxle = { x: -Math.sqrt(road.cs ** 2 - road.bbDrop ** 2), y: road.bbDrop };

  // Where the steering axis meets the ground, then back off by the trail —
  // the contact patch trails behind the axis, which is the whole point of it.
  const L = (headTop.y - groundY) / Math.sin(rad(ha));
  const axisGroundX = headTop.x + L * Math.cos(rad(ha));
  const frontAxle = { x: axisGroundX - trail, y: road.bbDrop };

  const wheelbase = frontAxle.x - rearAxle.x;
  const frontCentre = frontAxle.x;
  const stack = headTop.y;
  const reachMm = headTop.x;

  // Toe overlap: the tyre's rearmost point at pedal height against the arc the
  // toe sweeps. Negative clearance is overlap, and it is common.
  const tyreHalfChord = Math.sqrt(Math.max(0, R ** 2 - road.bbDrop ** 2));
  const toeGap = frontCentre - tyreHalfChord - TOE_R;

  const weight = Math.round(1450 + (st - 460) * 1.1 + gauge.extra + (road.key === "bianca" ? 120 : road.key === "randonnee" ? 160 : 0));
  const price = road.price + gauge.price;

  return {
    road, gauge,
    st, tt, sa, ha, ht, R, trail,
    bb, seatTop, headTop, headBot, rearAxle, frontAxle, groundY,
    wheelbase, frontCentre, stack, reachMm, reachOpt: reach,
    toeGap, weight, price,
    overlap: toeGap < 0,
  };
}

/** What the house says about the overlap. There is no geometry that removes it
 *  for free, so the honest thing is to name the three prices. */
export function overlapVerdict(f) {
  if (f.toeGap >= 12) {
    return {
      state: "clear",
      it: "Nessuna sovrapposizione",
      gloss: "no toe overlap",
      say: `${Math.round(f.toeGap)} mm between your toe and the tyre at full lock. Nothing to decide.`,
    };
  }
  if (f.toeGap >= 0) {
    return {
      state: "marginal",
      it: "Al limite",
      gloss: "on the edge",
      say: `${Math.round(f.toeGap)} mm. Clear on paper and not clear in winter overshoes. Say what you ride in and he will draw it either way.`,
    };
  }
  return {
    state: "overlap",
    it: "Sovrapposizione",
    gloss: "toe overlap",
    say: `Your toe crosses the tyre by ${Math.abs(Math.round(f.toeGap))} mm on a slow full-lock turn. It costs something to remove and nothing to live with, which is why most riders live with it.`,
  };
}

/** The three answers, priced in what each one actually costs you. */
export const OVERLAP_ANSWERS = [
  {
    it: "Aprire l'angolo",
    gloss: "slacken the head angle",
    cost: "The front wheel goes further out, the overlap goes away, and the steering slows. On a frame this size that is a real change in how it turns, not a detail.",
  },
  {
    it: "Gomma più stretta",
    gloss: "a narrower tyre",
    cost: "Buys back a few millimetres and gives up the surface you chose the frame for. It is the answer that undoes the specification.",
  },
  {
    it: "Tenerla",
    gloss: "live with it",
    cost: "It only ever touches below walking pace, turning hard. Every rider his size has it, including him. This is what he recommends.",
  },
];

export const eur = (n) => "€" + n.toLocaleString("de-DE");
export const deg = (d) => {
  const whole = Math.floor(d);
  const mins = Math.round((d - whole) * 60);
  return `${whole}°${String(mins).padStart(2, "0")}′`;
};

export const DEFAULTS = {
  altezza: 178,
  cavallo: 84,
  allungo: "neutro",
  strada: "passo",
  peso: 74,
};

/** The specification as one line, which is what the order carries. */
export function specLine(inp) {
  const f = build(inp);
  return [
    `${f.road.it}`,
    `h ${inp.altezza} / cav ${inp.cavallo}`,
    `${f.reachOpt.it.toLowerCase()}`,
    `piantone ${f.st}`,
    `orizzontale ${f.tt}`,
    `sterzo ${deg(f.ha)}`,
    `avancorsa ${Math.round(f.trail)} mm`,
    `passo ${Math.round(f.wheelbase)} mm`,
    `tubi ${f.gauge.label}`,
  ].join(" · ");
}
