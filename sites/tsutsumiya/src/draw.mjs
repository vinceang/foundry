// The drawing of the wrap. One function, used by Astro at build time so the
// page is complete with JS off, and by the browser to redraw on every change.
import { CLOTHS, cmToSun } from "./wrap.mjs";

export const K = 3.7; // px per cm
export const VB_W = 620;
const CX = 310;
const TOP = 56; // the cloth's top edge is fixed; the box grows downward

// The cloth's size is the drawing's size. A 二幅 cloth should not sit marooned
// in a box built for a 四幅 one, and a box should not reserve a band of empty
// board for rows that are not drawn.
function geom(b) {
  const maxCm = CLOTHS[CLOTHS.length - 1].cm;
  const S = (b.cloth ? b.cloth.cm : maxCm) * K;
  const cy = TOP + S / 2;
  const rows = (b.carried.length ? 1 : 0) + (b.separate.length ? 1 : 0);
  return { maxCm, S, cy, y1: TOP + S, rowTop: TOP + S + 78, rows };
}

export function viewBox(b) {
  const { rowTop, rows } = geom(b);
  return `0 0 ${VB_W} ${Math.round(rowTop + rows * 44 + 16)}`;
}

const n = (v) => Math.round(v * 100) / 100;
const pts = (a) => a.map(([x, y]) => `${n(x)},${n(y)}`).join(" ");

export function drawWrap(b) {
  const cloth = b.cloth;
  const { maxCm, S, cy: CY, y1, rowTop } = geom(b);
  const x0 = CX - S / 2, y0 = TOP, x1 = CX + S / 2;

  // How far each corner falls short of the middle, drawn to scale.
  const gapCm = cloth ? 0 : Math.max(0, (b.needed - maxCm) / 2);
  const g = Math.min(gapCm * K, S / 2 - 10);
  const f = S / 2 - Math.max(0, g);
  const closed = b.L > 0 && g <= 0.001;

  const o = [];

  // The cloth, open on the board. The panel itself is the board.
  o.push(`<rect x="${n(x0)}" y="${n(y0)}" width="${n(S)}" height="${n(S)}" fill="var(--cloth)" stroke="var(--ai-bright)" stroke-width="1.5"/>`);
  o.push(`<rect x="${n(x0 + 7)}" y="${n(y0 + 7)}" width="${n(S - 14)}" height="${n(S - 14)}" fill="none" stroke="var(--ai)" stroke-width="1" opacity=".55"/>`);

  // The goods, laid out layer by layer. Drawn bright, because seeing them is
  // the entire reason this drawing exists.
  const goods = [];
  b.layers.forEach((layer, li) => {
    const off = -li * 4;
    layer.items.forEach((it) => {
      const w = it.ware;
      const lw = w.l * K, lh = w.w * K;
      const gx = CX - lw / 2 + off;
      const gy = CY - (b.W * K) / 2 + it.y * K + off;
      goods.push(
        `<g class="wrap-good" data-ware="${w.key}">` +
          `<rect x="${n(gx)}" y="${n(gy)}" width="${n(lw)}" height="${n(lh)}" fill="var(--good)" stroke="var(--good-edge)" stroke-width="1.5"/>` +
          `<line x1="${n(gx + 5)}" y1="${n(gy + lh / 2)}" x2="${n(gx + lw - 5)}" y2="${n(gy + lh / 2)}" stroke="var(--good-edge)" stroke-width="1" opacity=".45"/>` +
        `</g>`
      );
    });
  });
  if (b.L > 0) {
    goods.unshift(
      `<rect x="${n(CX - (b.L * K) / 2 - 5)}" y="${n(CY - (b.W * K) / 2 - 5)}" width="${n(b.L * K + 10)}" height="${n(b.W * K + 10)}" fill="var(--parcel)" stroke="var(--good-edge)" stroke-width="1" stroke-dasharray="3 4" opacity=".8"/>`
    );
  }
  o.push(`<g class="wrap-goods">${goods.join("")}</g>`);

  // The wrap caught in the middle of being made: the near and far corners are
  // already folded over the goods; the two that get tied are still open, with
  // their creases marked. Four closed corners read as a symmetrical X and say
  // nothing — this says which move comes next.
  if (b.L > 0 && f > 0) {
    const tri = (a, cls) =>
      `<polygon class="${cls}" points="${pts(a)}" stroke="var(--ai-bright)" stroke-width="1.25" stroke-linejoin="miter"/>`;
    const crease = (a, bb) =>
      `<line x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(bb[0])}" y2="${n(bb[1])}" stroke="var(--ai-bright)" stroke-width="1" stroke-dasharray="4 5" opacity=".8"/>`;
    o.push(
      `<g class="wrap-folds">` +
        tri([[x0, y0 + f], [x0 + f, y0], [x0 + f, y0 + f]], "f-tl") +
        tri([[x1, y1 - f], [x1 - f, y1], [x1 - f, y1 - f]], "f-br") +
        crease([x1 - f, y0], [x1, y0 + f]) +
        crease([x0, y1 - f], [x0 + f, y1]) +
      `</g>`
    );
  }

  // The knot, or the hole where the knot should have been.
  if (closed) {
    o.push(knot(CX, CY, b.knot.key));
  } else if (b.L > 0 && g > 0.001) {
    o.push(
      `<g class="wrap-short">` +
        `<rect x="${n(CX - g)}" y="${n(CY - g)}" width="${n(2 * g)}" height="${n(2 * g)}" fill="none" stroke="var(--shu)" stroke-width="2" stroke-dasharray="6 4"/>` +
        `<line x1="${n(CX - g)}" y1="${n(CY - g)}" x2="${n(CX + g)}" y2="${n(CY + g)}" stroke="var(--shu)" stroke-width="1" opacity=".6"/>` +
        `<line x1="${n(CX + g)}" y1="${n(CY - g)}" x2="${n(CX - g)}" y2="${n(CY + g)}" stroke="var(--shu)" stroke-width="1" opacity=".6"/>` +
      `</g>`
    );
  }

  // Dimensions, so the drawing is measurable rather than decorative.
  if (b.L > 0) {
    const pl = b.L * K, pw = b.W * K;
    const by = y1 + 20;
    o.push(
      `<g class="wrap-dim">` +
        `<line x1="${n(CX - pl / 2)}" y1="${n(by)}" x2="${n(CX + pl / 2)}" y2="${n(by)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(CX - pl / 2)}" y1="${n(by - 5)}" x2="${n(CX - pl / 2)}" y2="${n(by + 5)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(CX + pl / 2)}" y1="${n(by - 5)}" x2="${n(CX + pl / 2)}" y2="${n(by + 5)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(CX - pl / 2)}" y1="${n(CY + pw / 2)}" x2="${n(CX - pl / 2)}" y2="${n(by)}" stroke="var(--dim)" stroke-width="1" stroke-dasharray="2 4" opacity=".55"/>` +
        `<line x1="${n(CX + pl / 2)}" y1="${n(CY + pw / 2)}" x2="${n(CX + pl / 2)}" y2="${n(by)}" stroke="var(--dim)" stroke-width="1" stroke-dasharray="2 4" opacity=".55"/>` +
        `<text x="${n(CX)}" y="${n(by + 18)}" class="dim-t" text-anchor="middle">${cmToSun(b.L).toFixed(1)} × ${cmToSun(b.W).toFixed(1)} × ${cmToSun(b.H).toFixed(1)} 寸</text>` +
      `</g>`
    );
    const lx = x0 - 24;
    o.push(
      `<g class="wrap-dim">` +
        `<line x1="${n(lx)}" y1="${n(CY - pw / 2)}" x2="${n(lx)}" y2="${n(CY + pw / 2)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(lx - 5)}" y1="${n(CY - pw / 2)}" x2="${n(lx + 5)}" y2="${n(CY - pw / 2)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(lx - 5)}" y1="${n(CY + pw / 2)}" x2="${n(lx + 5)}" y2="${n(CY + pw / 2)}" stroke="var(--dim)" stroke-width="1"/>` +
        `<line x1="${n(lx)}" y1="${n(CY - pw / 2)}" x2="${n(CX - pl / 2)}" y2="${n(CY - pw / 2)}" stroke="var(--dim)" stroke-width="1" stroke-dasharray="2 4" opacity=".55"/>` +
        `<line x1="${n(lx)}" y1="${n(CY + pw / 2)}" x2="${n(CX - pl / 2)}" y2="${n(CY + pw / 2)}" stroke="var(--dim)" stroke-width="1" stroke-dasharray="2 4" opacity=".55"/>` +
        `<text x="${n(lx - 9)}" y="${n(CY + 4)}" class="dim-t" text-anchor="end">${cmToSun(b.W).toFixed(1)} 寸</text>` +
      `</g>`
    );
    o.push(
      `<g class="wrap-dim">` +
        `<text x="${n(x1)}" y="${n(y1 + 64)}" class="dim-t" text-anchor="end">${cloth ? `布 ${cloth.ja} · ${cloth.cm} cm square` : `布 ${Math.round(maxCm)} cm — the widest in the house, and short by ${Math.round(b.needed - maxCm)}`}</text>` +
      `</g>`
    );
  }

  // Everything that is not in the parcel, stacked below it, drawn at true
  // length — so "does not travel in cloth" is a measurement, not an opinion.
  let row = rowTop;
  if (b.carried.length) {
    const w = b.carried[0];
    const len = Math.min(w.l * K, VB_W - 80);
    o.push(
      `<g class="wrap-carried">` +
        `<text x="40" y="${n(row)}" class="dim-t">手持</text>` +
        `<rect x="40" y="${n(row + 8)}" width="${n(len)}" height="13" fill="var(--good)" stroke="var(--good-edge)" stroke-width="1.5"/>` +
        `<line x1="${n(40 + 28)}" y1="${n(row + 8)}" x2="${n(40 + 28)}" y2="${n(row + 21)}" stroke="var(--good-edge)" stroke-width="1"/>` +
      `</g>`
    );
    row += 44;
  }
  if (b.separate.length) {
    const w = b.separate[0];
    const len = Math.min(w.l * K, VB_W - 80);
    o.push(
      `<g class="wrap-refused">` +
        `<text x="40" y="${n(row)}" class="dim-t refused">別</text>` +
        `<rect x="40" y="${n(row + 8)}" width="${n(len)}" height="13" fill="none" stroke="var(--shu)" stroke-width="1.5" stroke-dasharray="7 4"/>` +
      `</g>`
    );
  }

  // One shaku, so everything above is measurable against something known.
  const shaku = 30.3 * K;
  o.push(
    `<g class="wrap-scale">` +
      `<line x1="40" y1="34" x2="${n(40 + shaku)}" y2="34" stroke="var(--dim)" stroke-width="1.5"/>` +
      `<line x1="40" y1="28" x2="40" y2="40" stroke="var(--dim)" stroke-width="1.5"/>` +
      `<line x1="${n(40 + shaku)}" y1="28" x2="${n(40 + shaku)}" y2="40" stroke="var(--dim)" stroke-width="1.5"/>` +
      `<text x="${n(44 + shaku)}" y="39" class="dim-t">一尺</text>` +
    `</g>`
  );

  return o.join("");
}

function knot(cx, cy, kind) {
  const g = [];
  const band = 31;   // half-length of each crossing band
  const w = 18;      // half-width

  // The two bands of the ma-musubi, seen from above.
  g.push(`<rect x="${cx - band * 2}" y="${cy - w}" width="${band * 4}" height="${w * 2}" fill="var(--knot)" stroke="var(--knot-edge)" stroke-width="1.25"/>`);
  g.push(`<rect x="${cx - w}" y="${cy - band * 2}" width="${w * 2}" height="${band * 4}" fill="var(--knot)" stroke="var(--knot-edge)" stroke-width="1.25"/>`);
  // The crossing itself, lit.
  g.push(`<rect x="${cx - w}" y="${cy - w}" width="${w * 2}" height="${w * 2}" fill="var(--knot-hi)" stroke="var(--knot-edge)" stroke-width="1.5"/>`);
  g.push(`<line x1="${cx - w}" y1="${cy - w}" x2="${cx + w}" y2="${cy + w}" stroke="var(--knot-edge)" stroke-width="1" opacity=".8"/>`);

  if (kind === "futatsu") {
    // A second knot on the other pair of corners.
    g.push(`<rect x="${cx - band * 2 - 16}" y="${cy - 9}" width="18" height="18" fill="var(--knot-hi)" stroke="var(--ai-bright)" stroke-width="1.25"/>`);
    g.push(`<rect x="${cx + band * 2 - 2}" y="${cy - 9}" width="18" height="18" fill="var(--knot-hi)" stroke="var(--ai-bright)" stroke-width="1.25"/>`);
  }
  if (kind === "katakake") {
    // The one curve permitted on this site: the tails, slung.
    g.push(`<path d="M ${cx - 20} ${cy - 10} C ${cx - 100} ${cy - 60}, ${cx - 128} ${cy - 130}, ${cx - 96} ${cy - 184}" fill="none" stroke="var(--knot)" stroke-width="14" stroke-linecap="butt"/>`);
    g.push(`<path d="M ${cx + 20} ${cy - 10} C ${cx + 100} ${cy - 60}, ${cx + 128} ${cy - 130}, ${cx + 96} ${cy - 184}" fill="none" stroke="var(--knot)" stroke-width="14" stroke-linecap="butt"/>`);
    g.push(`<path d="M ${cx - 20} ${cy - 10} C ${cx - 100} ${cy - 60}, ${cx - 128} ${cy - 130}, ${cx - 96} ${cy - 184}" fill="none" stroke="var(--ai-bright)" stroke-width="1" opacity=".7"/>`);
    g.push(`<path d="M ${cx + 20} ${cy - 10} C ${cx + 100} ${cy - 60}, ${cx + 128} ${cy - 130}, ${cx + 96} ${cy - 184}" fill="none" stroke="var(--ai-bright)" stroke-width="1" opacity=".7"/>`);
  }
  return `<g class="wrap-knot" data-knot="${kind}">${g.join("")}</g>`;
}

export function svgLabel(b) {
  if (!b.L && !b.carried.length && !b.separate.length) return "An empty wrapping cloth on the board.";
  const size = b.L
    ? `${cmToSun(b.L).toFixed(1)} by ${cmToSun(b.W).toFixed(1)} by ${cmToSun(b.H).toFixed(1)} sun`
    : "nothing wrapped";
  return `The wrapping board seen from above: a ${b.cloth ? b.cloth.romaji + " cloth, " + b.cloth.cm + " centimetres square" : "cloth that is not wide enough"}, the goods laid out measuring ${size}, folded with the ${b.knot.romaji}. The house reads it as ${b.mie.romaji} — ${b.mie.gloss}.`;
}


/** What the drawing can no longer say in 12px type, said in HTML instead. */
export function boardNotes(b) {
  const out = [`一尺 — the bar at the top left is one shaku, 30.3 cm.`];
  if (b.carried.length)
    out.push(`手持 — the ${b.carried[0].ja} is carried in the hand, in the open. It is not in the parcel and it is not under the cloth.`);
  if (b.separate.length)
    out.push(`別 — the ${b.separate[0].ja} is ${cmToSun(b.separate[0].l).toFixed(1)} sun long. No cloth in the house closes over it.`);
  return out;
}
