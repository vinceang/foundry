/**
 * The flat pattern of a three-piece Arab hood.
 *
 * Shared by the page's frontmatter and its client script so the drawing is
 * server-rendered at the default measurements and then re-cut live. Without
 * this the signature was an empty box with JavaScript off, which fails the
 * register's floor: the page must be complete before any script runs.
 *
 * All geometry is derived from two real measurements — across the head, and
 * beak to crown — plus the species' block ratio and whether the bird was
 * taken from the nest or caught wild.
 */

export const K = 6.4; // px per mm at the drawn scale
const PAD = 46;
const TOP = 62;
const GAP = 26;
const GUTTER = 100; // room for the height label, both sides so it stays centred

export const SPECIES = [
  { id: "hurr", label: "Hurr", en: "Saker", block: 1.0, w: 46, h: 38 },
  { id: "shaheen", label: "Shaheen", en: "Peregrine", block: 0.94, w: 42, h: 35 },
  { id: "gyr", label: "Gyr", en: "Gyrfalcon", block: 1.12, w: 51, h: 43 },
  { id: "hybrid", label: "Gyr-hurr", en: "Hybrid", block: 1.06, w: 49, h: 41 },
];

/** Hood size, the way a maker numbers them: off the head width. */
export const sizeOf = (w) => Math.max(1, Math.min(7, Math.round((w - 34) / 2.6)));

export function pattern({ w, h, blockScale = 1, passage = false }) {
  const panelW = w * 0.95 * K;
  const panelH = h * 1.15 * K;
  const blockW = w * 0.5 * K;
  const blockH = h * 1.5 * K * blockScale;

  // Size the canvas to the pieces rather than hoping they fit: a gyr on a
  // passage cut is far larger than a shaheen, and a fixed viewBox clipped the
  // dimension lines at the top of the range.
  const halfSpan = blockW / 2 + GAP + panelW;
  const lowest = Math.max(TOP + 24 + panelH, TOP + blockH + 18);
  // Symmetric gutters: the height label sits outside the pieces on the right,
  // and an asymmetric box made the whole cut look off-centre in its frame.
  const vbW = Math.round((halfSpan + PAD + GUTTER) * 2);
  const vbH = Math.round(lowest + 96);
  const CX = vbW / 2;

  const bx = CX - blockW / 2;
  const block =
    `M${bx} ${TOP + 16} Q${CX} ${TOP - 10} ${bx + blockW} ${TOP + 16}` +
    ` L${bx + blockW} ${TOP + blockH} Q${CX} ${TOP + blockH + 18} ${bx} ${TOP + blockH} Z`;

  const panel = (dir) => {
    const x0 = CX + dir * (blockW / 2 + GAP);
    const x1 = x0 + dir * panelW;
    const y0 = TOP + 24;
    const y1 = y0 + panelH;
    return (
      `M${x0} ${y0} Q${x0 + dir * panelW * 0.55} ${y0 - 22} ${x1} ${y0 + panelH * 0.3}` +
      ` L${x1} ${y1 - panelH * 0.18} Q${x0 + dir * panelW * 0.5} ${y1 + 20} ${x0} ${y1} Z`
    );
  };

  // The eye panel is deeper on a wild-caught bird, which sees more.
  const eyeR = passage ? 0.42 : 0.3;
  const eye = (dir) => {
    const cx = CX + dir * (blockW / 2 + GAP + panelW * 0.52);
    const cy = TOP + 24 + panelH * 0.46;
    const rx = panelW * 0.26;
    const ry = panelH * eyeR * 0.5;
    return `M${cx - rx} ${cy} Q${cx} ${cy - ry * 1.6} ${cx + rx} ${cy} Q${cx} ${cy + ry * 1.6} ${cx - rx} ${cy} Z`;
  };

  // The braces — the two straps that close the hood behind the head.
  const by = TOP + 24 + panelH * 0.82;
  const reach = passage ? 30 : 20;
  const lx = CX - halfSpan;
  const rx2 = CX + halfSpan;
  const brace = `M${lx} ${by} h${-reach} M${rx2} ${by} h${reach}`;

  const dimY = lowest + 42;
  const dimX = rx2 + 34;

  const leather = Math.round((panelW * panelH * 2 + blockW * blockH) / (K * K * 100));

  return {
    vb: `0 0 ${vbW} ${vbH}`,
    block,
    left: panel(-1),
    right: panel(1),
    eyeL: eye(-1),
    eyeR: eye(1),
    brace,
    socket: { cx: CX, cy: TOP + 18 },
    // Labels are placed in per-cent of the frame, not in user units: SVG text
    // scales with the viewBox, so a 12px label rendered at 0.73 scale lands at
    // 8.8px and breaks the 11px floor on desktop — and far worse on a phone.
    // The lines stay in the drawing; the type is HTML at a real size.
    dimW: {
      x1: lx, x2: rx2, y: dimY,
      pctX: (CX / vbW) * 100,
      pctY: ((dimY + 16) / vbH) * 100,
      label: `${w} mm across the head`,
    },
    dimH: {
      x: dimX, y1: TOP + 16, y2: TOP + blockH,
      pctX: ((dimX + 8) / vbW) * 100,
      pctY: ((TOP + blockH / 2) / vbH) * 100,
      label: `${h} mm`,
    },
    spec: {
      size: sizeOf(w),
      block: `${Math.round(h * 1.5 * blockScale)} mm`,
      eye: passage ? "deep" : "shallow",
      leather: `${leather} cm²`,
      plume: passage ? "heron, trimmed" : "heron, natural",
      price: 900 + sizeOf(w) * 110 + (passage ? 140 : 0) + (blockScale > 1.05 ? 180 : 0),
    },
  };
}
