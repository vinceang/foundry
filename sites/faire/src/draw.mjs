// The drawings. Used by Astro at build time so the page is complete with JS
// off, and by the browser to redraw. A rhythmic light must render LIT in its
// static state — an unlit lamp is a broken page, not a quiet one.
import { STATION, segments, isLit, reach, geographicRange } from "./light.mjs";

const n = (v) => Math.round(v * 100) / 100;

/* ── An comharra: the period, drawn to true scale ─────────────────────── */

export const TL_W = 1000;
export const TL_H = 104;

export function drawPeriod(light, tNow = 0.1) {
  const pad = 8;
  const w = TL_W - pad * 2;
  const x = (t) => pad + (t / light.period) * w;
  const o = [];

  o.push(`<rect x="${pad}" y="26" width="${n(w)}" height="46" class="tl-bed"/>`);
  for (const s of segments(light)) {
    o.push(
      `<rect x="${n(x(s.from))}" y="26" width="${n(Math.max(2, x(s.to) - x(s.from)))}" height="46" class="tl-seg ${s.on ? "on" : "off"}"/>`
    );
  }
  // second ticks, so the period is countable rather than decorative
  for (let s = 0; s <= light.period; s++) {
    const major = s % 5 === 0;
    o.push(`<line x1="${n(x(s))}" y1="72" x2="${n(x(s))}" y2="${major ? 84 : 78}" class="tl-tick"/>`);
    if (major) o.push(`<text x="${n(x(s))}" y="99" class="tl-t" text-anchor="middle">${s}</text>`);
  }
  o.push(
    `<line id="tl-head" x1="${n(x(tNow))}" y1="18" x2="${n(x(tNow))}" y2="78" class="tl-head"/>`
  );
  return o.join("");
}

/* ── An t-astar: the range, over the curve of the earth ───────────────────

   Measured DOWNWARD from the observer's eye, which is the only frame in which
   this stays honest:

     sea(d)   = h + k·d²        the sea falling away below the eye
     sight(d) = 2·k·dh·d        the sight line, TANGENT to that curve at the
                                horizon dh — not a chord to it

   k = 0.2301 m per (nautical mile)², which is the drop WITH standard
   refraction. That matters: the 2.08 in the range formula already contains the
   refraction correction, so using the un-refracted 0.2692 would draw a picture
   that disagreed with the arithmetic printed beside it. The two now agree —
   the light sits exactly on the sight line at the geographic range, which is
   what "geographic range" means. */

export const RG_W = 1000;
export const RG_H = 430;
const RG_X0 = 78;
const RG_X1 = RG_W - 52;
const RG_MAXD = 30; // nautical miles across the drawing
const RG_MAXH = 230; // metres of drop shown
const RG_Y0 = 96; // the observer's eye sits on this line
const K = 0.2301;

const rx = (d) => RG_X0 + (d / RG_MAXD) * (RG_X1 - RG_X0);
/** metres below the eye → y */
const ry = (m) => RG_Y0 + (m / RG_MAXH) * (RG_H - RG_Y0 - 72);

export function drawRange(r) {
  const o = [];
  const h = r.eye.h;
  const D = r.geo;
  const dh = r.horizon;
  const sea = (d) => h + K * d * d;
  const sight = (d) => 2 * K * dh * d;

  // the sea, curving away below the eye
  const pts = [];
  for (let d = 0; d <= RG_MAXD; d += 0.4) pts.push(`${n(rx(d))},${n(ry(sea(d)))}`);
  o.push(`<polygon points="${pts.join(" ")} ${n(rx(RG_MAXD))},${RG_H} ${n(rx(0))},${RG_H}" class="rg-water"/>`);
  o.push(`<polyline points="${pts.join(" ")}" class="rg-sea"/>`);

  // the sight line, tangent to the sea at the horizon
  o.push(
    `<line x1="${n(rx(0))}" y1="${n(ry(0))}" x2="${n(rx(RG_MAXD))}" y2="${n(ry(sight(RG_MAXD)))}" class="rg-sight"/>`
  );

  // the observer
  o.push(`<line x1="${n(rx(0))}" y1="${n(ry(0))}" x2="${n(rx(0))}" y2="${n(ry(sea(0)))}" class="rg-eye"/>`);
  o.push(`<circle cx="${n(rx(0))}" cy="${n(ry(0))}" r="4.5" class="rg-eye-pt"/>`);
  o.push(`<text x="${n(rx(0) - 12)}" y="${n(ry(0) + 4)}" class="rg-t" text-anchor="end">${h} m</text>`);

  // the horizon: where the sight line touches the sea
  o.push(`<circle cx="${n(rx(dh))}" cy="${n(ry(sea(dh)))}" r="3.5" class="rg-hz"/>`);
  o.push(
    `<line x1="${n(rx(dh))}" y1="${n(ry(sea(dh)))}" x2="${n(rx(dh))}" y2="${RG_H - 52}" class="rg-drop"/>` +
      `<text x="${n(rx(dh) + 7)}" y="${RG_H - 56}" class="rg-t">fàire · horizon ${dh.toFixed(1)} M</text>`
  );

  // the tower, standing exactly where the earth takes it away: its lamp lands
  // on the sight line, which is the whole definition of the geographic range
  const baseY = ry(sea(D));
  const topY = ry(sea(D) - STATION.elevation);
  o.push(`<line x1="${n(rx(D))}" y1="${n(baseY)}" x2="${n(rx(D))}" y2="${n(topY)}" class="rg-tower"/>`);
  o.push(`<circle cx="${n(rx(D))}" cy="${n(topY)}" r="5" class="rg-lamp"/>`);
  o.push(`<text x="${n(rx(D))}" y="${n(topY - 13)}" class="rg-t lit" text-anchor="middle">${STATION.elevation} m</text>`);

  // the two ranges, as a scale beneath
  const dimY = RG_H - 12;
  o.push(
    `<g class="rg-dim">` +
      `<line x1="${n(rx(0))}" y1="${n(dimY)}" x2="${n(rx(STATION.nominal))}" y2="${n(dimY)}" class="rg-nom"/>` +
      `<line x1="${n(rx(STATION.nominal))}" y1="${n(dimY - 5)}" x2="${n(rx(STATION.nominal))}" y2="${n(dimY + 5)}" class="rg-nom"/>` +
      `<text x="${n(rx(STATION.nominal) + 8)}" y="${n(dimY + 4)}" class="rg-t">an lampa ${STATION.nominal} M</text>` +
      `<line x1="${n(rx(0))}" y1="${n(dimY - 17)}" x2="${n(rx(D))}" y2="${n(dimY - 17)}" class="rg-geo ${r.limited ? "wins" : ""}"/>` +
      `<line x1="${n(rx(D))}" y1="${n(dimY - 22)}" x2="${n(rx(D))}" y2="${n(dimY - 12)}" class="rg-geo ${r.limited ? "wins" : ""}"/>` +
      `<text x="${n(rx(D) + 8)}" y="${n(dimY - 13)}" class="rg-t ${r.limited ? "lit" : ""}">an saoghal ${D.toFixed(1)} M</text>` +
    `</g>`
  );

  o.push(
    `<text x="${RG_X0}" y="30" class="rg-t dim">Vertical scale exaggerated about forty times. The sea really does fall ${Math.round(K * D * D)} m below your eye line in ${D.toFixed(0)} miles.</text>`
  );
  return o.join("");
}

/* ── An Tùr: the tower in section, with nine points ───────────────────── */

export const TW_W = 460;
export const TW_H = 800;
/** The drawing's real extent — the box is cropped to it so the tower fills
 *  its column instead of floating in a field of empty board. */
export const TW_VB = { x: 100, y: 30, w: 260, h: 730 };
export const TW_VIEWBOX = `${TW_VB.x} ${TW_VB.y} ${TW_VB.w} ${TW_VB.h}`;
export const pinPct = (k) => ({
  left: ((PINS[k][0] - TW_VB.x) / TW_VB.w) * 100,
  top: ((PINS[k][1] - TW_VB.y) / TW_VB.h) * 100,
});

/** Where each pin sits on the drawing. Keys match TOWER in tower.mjs. */
export const PINS = {
  aileadair: [230, 74],
  astragail: [312, 152],
  lionsa: [176, 186],
  lampa: [230, 208],
  amar: [230, 272],
  gailearaidh: [136, 330],
  seomar: [230, 404],
  gleoc: [202, 566],
  staidhre: [268, 640],
};

export function drawTower() {
  const o = [];
  const cx = 230;

  // cowl and ventilator
  o.push(`<path d="M ${cx - 26} 96 L ${cx - 16} 68 L ${cx + 16} 68 L ${cx + 26} 96 Z" class="tw-metal"/>`);
  o.push(`<line x1="${cx}" y1="68" x2="${cx}" y2="52" class="tw-line"/>`);
  o.push(`<circle cx="${cx}" cy="48" r="5" class="tw-metal"/>`);

  // the lantern: glazing with diagonal astragals, clipped to the glass
  o.push(
    `<defs><clipPath id="lant"><rect x="${cx - 86}" y="96" width="172" height="146"/></clipPath></defs>`
  );
  o.push(`<rect x="${cx - 86}" y="96" width="172" height="146" class="tw-glass"/>`);
  o.push(`<g clip-path="url(#lant)">`);
  for (let i = -4; i <= 4; i++) {
    o.push(`<line x1="${cx + i * 30 - 30}" y1="96" x2="${cx + i * 30 + 30}" y2="242" class="tw-astragal"/>`);
  }
  o.push(`</g>`);
  o.push(`<rect x="${cx - 86}" y="96" width="172" height="146" class="tw-glass-frame"/>`);

  // the optic: concentric prism rings around the lamp
  for (const rr of [58, 46, 34]) {
    o.push(`<ellipse cx="${cx}" cy="186" rx="${rr}" ry="${rr * 0.62}" class="tw-optic"/>`);
  }
  o.push(`<circle cx="${cx}" cy="186" r="9" class="tw-lamp"/>`);
  o.push(`<line x1="${cx - 74}" y1="186" x2="${cx - 104}" y2="186" class="tw-beam"/>`);
  o.push(`<line x1="${cx + 74}" y1="186" x2="${cx + 104}" y2="186" class="tw-beam"/>`);

  // the pedestal and the mercury bath
  o.push(`<rect x="${cx - 44}" y="242" width="88" height="14" class="tw-metal"/>`);
  o.push(`<rect x="${cx - 32}" y="256" width="64" height="26" class="tw-bath"/>`);
  o.push(`<line x1="${cx - 32}" y1="266" x2="${cx + 32}" y2="266" class="tw-merc"/>`);

  // gallery and murette
  o.push(`<rect x="${cx - 104}" y="282" width="208" height="12" class="tw-stone"/>`);
  o.push(`<line x1="${cx - 104}" y1="318" x2="${cx - 104}" y2="294" class="tw-rail"/>`);
  o.push(`<line x1="${cx + 104}" y1="318" x2="${cx + 104}" y2="294" class="tw-rail"/>`);
  o.push(`<line x1="${cx - 104}" y1="318" x2="${cx + 104}" y2="318" class="tw-rail"/>`);
  o.push(`<rect x="${cx - 92}" y="294" width="184" height="46" class="tw-stone"/>`);

  // the shaft, tapering, with a break so the lantern can be drawn large
  o.push(`<path d="M ${cx - 78} 340 L ${cx + 78} 340 L ${cx + 84} 452 L ${cx - 84} 452 Z" class="tw-stone"/>`);
  o.push(`<path d="M ${cx - 86} 484 L ${cx + 86} 484 L ${cx + 104} 700 L ${cx - 104} 700 Z" class="tw-stone"/>`);
  // the break line — the shaft is shortened, and the drawing says so
  o.push(
    `<path d="M ${cx - 85} 452 L ${cx - 40} 466 L ${cx + 20} 442 L ${cx + 85} 458" class="tw-break"/>` +
      `<path d="M ${cx - 85} 478 L ${cx - 40} 492 L ${cx + 20} 468 L ${cx + 85} 484" class="tw-break"/>`
  );

  // the service room floor, the weight tube, the stair
  o.push(`<line x1="${cx - 80}" y1="378" x2="${cx + 80}" y2="378" class="tw-line"/>`);
  o.push(`<line x1="${cx - 80}" y1="430" x2="${cx + 80}" y2="430" class="tw-line"/>`);
  o.push(`<rect x="${cx - 14}" y="484" width="28" height="216" class="tw-tube"/>`);
  for (let y = 502; y < 700; y += 26) {
    o.push(`<line x1="${cx + 22}" y1="${y}" x2="${cx + 84}" y2="${y - 9}" class="tw-step"/>`);
  }

  // base and door
  o.push(`<rect x="${cx - 116}" y="700" width="232" height="46" class="tw-stone"/>`);
  o.push(`<path d="M ${cx - 22} 746 L ${cx - 22} 716 Q ${cx} 700 ${cx + 22} 716 L ${cx + 22} 746 Z" class="tw-door"/>`);
  o.push(`<line x1="108" y1="746" x2="352" y2="746" class="tw-ground"/>`);

  return o.join("");
}

export function periodLabel(light) {
  return `${light.name}, character ${light.character}: ${light.flashes} flash${light.flashes > 1 ? "es" : ""} every ${light.period} seconds, drawn to true scale.`;
}

export function rangeLabel(r) {
  return (
    `A section over the curve of the earth. From an eye height of ${r.eye.h} metres the horizon is ` +
    `${r.horizon.toFixed(1)} nautical miles off, and a light ${STATION.elevation} metres high goes under it at ` +
    `${r.geo.toFixed(1)} miles. The lamp itself is bright enough for ${STATION.nominal} miles.`
  );
}
