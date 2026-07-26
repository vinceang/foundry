/* IBUSHI — the ink drawing.
 *
 * Section above, plan below, both at one honest drafting scale chosen to fit
 * the sheet (1:50 … 1:300) and printed in the corner with a graphic scale bar,
 * the way a real drawing states it. Everything is snapped susu ink on washi;
 * the only colour is okibi where a fire actually is.
 *
 * The section is cut A–A through the raised floor — the informative cut —
 * and A–A is marked on the plan, because a section taken through the doma
 * would show an empty earth floor and tell you nothing.
 */

import { fitScale, SHAKU, TOP_RESERVE, BOT_RESERVE } from "./house.js";

const VB = { w: 1000, h: 1180, pad: 34 };
const GAP = 3.6;

const n = (v) => Math.round(v * 100) / 100;

/* --- machiya puts its earth floor down one side, not across the front --- */
export function domaShape(h) {
  if (h.t.key === "machiya") {
    return { kind: "strip", w: Math.max(h.kenM, h.W * h.domaRatio) };
  }
  return { kind: "band", d: h.D * h.domaRatio };
}

export function renderDrawing(h, opts = {}) {
  const { n: scaleN, k } = fitScale(h);
  const live = opts.live === true;

  const hw = h.W / 2;
  const oh = h.overhang;
  const tan = Math.tan(h.theta);
  const eaveTipY = -(h.eaveH - oh * tan);
  const yukaY = -0.45; // the raised floor sits ~1.5 shaku above the earth

  // world → sheet
  const cx = VB.w / 2;
  const top = -(h.ridgeH + TOP_RESERVE);
  const bot = GAP + h.D + BOT_RESERVE;
  const cy = VB.h / 2 - ((top + bot) / 2) * k;
  const X = (wx) => n(cx + wx * k);
  const Y = (wy) => n(cy + wy * k);

  const o = [];
  const push = (s) => o.push(s);

  /* ================= SECTION ============================================ */

  push(`<g class="d-section">`);

  // --- roof -------------------------------------------------------------
  const roofOuter = `${X(-hw - oh)},${Y(eaveTipY)} ${X(0)},${Y(-h.ridgeH)} ${X(hw + oh)},${Y(eaveTipY)}`;

  if (h.thatch > 0) {
    const drop = h.thatch / Math.cos(h.theta);
    const roofInner = `${X(hw + oh)},${Y(eaveTipY + drop)} ${X(0)},${Y(-h.ridgeH + drop)} ${X(-hw - oh)},${Y(eaveTipY + drop)}`;
    push(`<polygon class="d-thatch" points="${roofOuter} ${roofInner}"/>`);
    push(`<polyline class="d-ink d-ink-heavy" points="${roofOuter}"/>`);
    push(`<polyline class="d-ink" points="${roofInner}"/>`);

    // combed thatch — short strokes down the slope, the direction it is laid
    const combs = [];
    for (let i = 1; i <= 13; i++) {
      const f = i / 14;
      const px = hw + oh - f * (hw + oh);
      const py = eaveTipY - f * (h.ridgeH + eaveTipY);
      const ux = Math.cos(h.theta) * 0.16;
      const uy = Math.sin(h.theta) * 0.16;
      combs.push(`M${X(px)},${Y(py + drop * 0.42)} l${n(-ux * k)},${n(-uy * k)}`);
      combs.push(`M${X(-px)},${Y(py + drop * 0.42)} l${n(ux * k)},${n(-uy * k)}`);
    }
    push(`<path class="d-comb" d="${combs.join(" ")}"/>`);
  } else {
    // kawara tile — a thin plane with the tile roll ticked along it
    const drop = 0.16 / Math.cos(h.theta);
    const roofInner = `${X(hw + oh)},${Y(eaveTipY + drop)} ${X(0)},${Y(-h.ridgeH + drop)} ${X(-hw - oh)},${Y(eaveTipY + drop)}`;
    push(`<polygon class="d-tile" points="${roofOuter} ${roofInner}"/>`);
    push(`<polyline class="d-ink d-ink-heavy" points="${roofOuter}"/>`);
    push(`<polyline class="d-ink" points="${roofInner}"/>`);
    const ticks = [];
    for (let i = 1; i <= 9; i++) {
      const f = i / 10;
      const px = (hw + oh) * f;
      const py = eaveTipY - (1 - f) * 0 - f * 0; // along the slope
      const yy = eaveTipY + (h.ridgeH + eaveTipY) * (f - 1) * -1;
      ticks.push(`M${X(px)},${Y(yy)} l0,${n(0.14 * k)}`);
      ticks.push(`M${X(-px)},${Y(yy)} l0,${n(0.14 * k)}`);
    }
    push(`<path class="d-comb" d="${ticks.join(" ")}"/>`);
  }

  // ridge weighting — stones laid along the ridge against a gale
  if (h.weighted) {
    const st = [];
    for (let i = -2; i <= 2; i++) {
      st.push(
        `<ellipse class="d-stone" cx="${X(i * 0.42)}" cy="${Y(-h.ridgeH - 0.12)}" rx="${n(0.17 * k)}" ry="${n(0.11 * k)}"/>`
      );
    }
    push(st.join(""));
  }

  // --- attic floors inside the roof void --------------------------------
  const atticFractions =
    h.t.attics === 3 ? [0.18, 0.44, 0.7] : h.t.attics === 1 ? [0.26] : [];
  for (const f of atticFractions) {
    const ay = -(h.eaveH + (h.ridgeH - h.eaveH) * f);
    const halfAt = (h.ridgeH + ay) / tan;
    if (halfAt < 0.4) continue;
    push(
      `<line class="d-ink d-attic" x1="${X(-halfAt)}" y1="${Y(ay)}" x2="${X(halfAt)}" y2="${Y(ay)}"/>`
    );
    // the neso-lashed cross-ties that make the roof a truss
    push(
      `<line class="d-hair" x1="${X(-halfAt)}" y1="${Y(ay)}" x2="${X(halfAt * 0.12)}" y2="${Y(ay - 0.5)}"/>`
    );
    push(
      `<line class="d-hair" x1="${X(halfAt)}" y1="${Y(ay)}" x2="${X(-halfAt * 0.12)}" y2="${Y(ay - 0.5)}"/>`
    );
  }

  // --- frame ------------------------------------------------------------
  const postXs = [];
  for (let i = 0; i <= h.widthKen; i++) postXs.push(-hw + i * h.kenM);
  const postW = 0.15;
  const stoneTop = -0.24;

  // the tie beam / keta the rafters land on
  push(
    `<rect class="d-timber" x="${X(-hw)}" y="${Y(-h.eaveH - 0.16)}" width="${n(h.W * k)}" height="${n(0.32 * k)}"/>`
  );

  // a second floor for the machiya's low tsushi-nikai
  if (h.t.floors === 2) {
    push(
      `<line class="d-ink d-ink-heavy" x1="${X(-hw)}" y1="${Y(-2.75)}" x2="${X(hw)}" y2="${Y(-2.75)}"/>`
    );
  }

  for (const px of postXs) {
    const isCentre = Math.abs(px) < 0.01 && h.widthKen % 2 === 0;
    push(
      `<rect class="d-timber${isCentre ? " d-daikoku" : ""}" x="${X(px - postW / 2)}" y="${Y(-h.eaveH)}" width="${n(postW * k * (isCentre ? 1.7 : 1))}" height="${n((h.eaveH + stoneTop) * k)}" transform="${isCentre ? `translate(${n(-postW * k * 0.35)},0)` : ""}"/>`
    );
    // ishiba-date — the post is not fastened. It stands on a stone.
    push(
      `<path class="d-stone" d="M${X(px - 0.3)},${Y(0)} L${X(px - 0.21)},${Y(stoneTop)} L${X(px + 0.21)},${Y(stoneTop)} L${X(px + 0.3)},${Y(0)} Z"/>`
    );
  }

  // --- floors -----------------------------------------------------------
  push(
    `<line class="d-ink d-ink-heavy" x1="${X(-hw)}" y1="${Y(yukaY)}" x2="${X(hw)}" y2="${Y(yukaY)}"/>`
  );

  // ground line + earth hatch
  push(
    `<line class="d-ink d-ink-heavy" x1="${X(-hw - oh - 0.7)}" y1="${Y(0)}" x2="${X(hw + oh + 0.7)}" y2="${Y(0)}"/>`
  );
  const hatch = [];
  const gx0 = -hw - oh - 0.7;
  const gx1 = hw + oh + 0.7;
  for (let x = gx0; x <= gx1; x += 0.34) {
    hatch.push(`M${X(x)},${Y(0)} l${n(-0.2 * k)},${n(0.2 * k)}`);
  }
  push(`<path class="d-hatch" d="${hatch.join(" ")}"/>`);

  /* --- the fire, and the smoke that cures the frame -------------------- */
  const iroriX = -hw * 0.34;
  const iroriW = 0.9;
  push(
    `<rect class="d-irori" x="${X(iroriX - iroriW / 2)}" y="${Y(yukaY)}" width="${n(iroriW * k)}" height="${n(0.45 * k)}"/>`
  );
  push(
    `<line class="d-ink" x1="${X(iroriX - iroriW / 2)}" y1="${Y(yukaY)}" x2="${X(iroriX + iroriW / 2)}" y2="${Y(yukaY)}"/>`
  );
  // jizaikagi — the adjustable hook down from the beam, with its kettle
  push(
    `<line class="d-ink" x1="${X(iroriX)}" y1="${Y(-h.eaveH + 0.16)}" x2="${X(iroriX)}" y2="${Y(-1.15)}"/>`
  );
  push(
    `<path class="d-timber" d="M${X(iroriX - 0.28)},${Y(-1.15)} h${n(0.56 * k)} v${n(0.34 * k)} h${n(-0.56 * k)} Z"/>`
  );
  // the smoke. It is not exhaust — it is the preservative.
  const smoke = [];
  let sy = yukaY - 0.1;
  let sx = iroriX;
  const smokeTop = -h.ridgeH + (h.thatch > 0 ? h.thatch * 1.1 : 0.3);
  smoke.push(`M${X(sx)},${Y(sy)}`);
  let amp = 0.1;
  while (sy > smokeTop) {
    const step = Math.max(0.35, (h.ridgeH - h.eaveH) / 7);
    sy -= step;
    const drift = (iroriX < 0 ? 1 : -1) * amp;
    sx += drift * 0.7 - iroriX * 0.06;
    amp = Math.min(amp * 1.45, 0.5);
    smoke.push(`Q${X(sx + drift)},${Y(sy + step / 2)} ${X(sx)},${Y(Math.max(sy, smokeTop))}`);
  }
  push(`<path class="d-smoke" d="${smoke.join(" ")}"/>`);

  /* --- dimensions ------------------------------------------------------ */
  const dimY = 1.15;
  push(
    `<g class="d-dim">
      <line x1="${X(-hw)}" y1="${Y(dimY)}" x2="${X(hw)}" y2="${Y(dimY)}"/>
      <line x1="${X(-hw)}" y1="${Y(dimY - 0.22)}" x2="${X(-hw)}" y2="${Y(dimY + 0.22)}"/>
      <line x1="${X(hw)}" y1="${Y(dimY - 0.22)}" x2="${X(hw)}" y2="${Y(dimY + 0.22)}"/>
      <text class="d-label" x="${X(0)}" y="${Y(dimY) - 8}" text-anchor="middle">${h.widthKen} 間 · ${n(h.W)} m</text>
    </g>`
  );
  const dimX = hw + oh + 1.35;
  push(
    `<g class="d-dim">
      <line x1="${X(dimX)}" y1="${Y(0)}" x2="${X(dimX)}" y2="${Y(-h.ridgeH)}"/>
      <line x1="${X(dimX - 0.22)}" y1="${Y(0)}" x2="${X(dimX + 0.22)}" y2="${Y(0)}"/>
      <line x1="${X(dimX - 0.22)}" y1="${Y(-h.ridgeH)}" x2="${X(dimX + 0.22)}" y2="${Y(-h.ridgeH)}"/>
      <text class="d-label" x="${X(dimX) + 9}" y="${Y(-h.ridgeH / 2)}" text-anchor="start">${n(h.ridgeH / SHAKU)} 尺</text>
    </g>`
  );
  // The kōbai triangle, marked under the right slope the way a carpenter marks
  // it: ten of run against the rise. Floating text near the roof collided with
  // the ridge dimension on a steep gasshō; a triangle cannot.
  {
    const f = 0.58;
    const px = (hw + oh) * f;
    const py = -h.ridgeH + f * (eaveTipY + h.ridgeH);
    const L = Math.min(1.15, (hw + oh) * 0.28);
    const rise = L * tan;
    push(
      `<g class="d-kobai">
        <path d="M${X(px)},${Y(py + 0.18)} L${X(px + L)},${Y(py + 0.18)} L${X(px + L)},${Y(py + 0.18 + rise)} Z"/>
        <text class="d-label" x="${X(px + L / 2)}" y="${Y(py + 0.18) - 7}" text-anchor="middle">10</text>
        <text class="d-label" x="${X(px + L) + 7}" y="${Y(py + 0.18 + rise / 2)}" text-anchor="start">${n(h.kobai)}</text>
      </g>`
    );
  }

  push(
    `<text class="d-title" x="${X(-hw - oh - 0.7)}" y="${Y(-h.ridgeH) - 13}">A—A 断面 · SECTION</text>`
  );
  push(`</g>`);

  /* ================= PLAN ============================================== */

  push(`<g class="d-plan">`);
  const py0 = GAP;

  // projection lines — the plan is dropped from the section, not drawn beside it
  const proj = [];
  for (let i = 0; i <= h.widthKen; i++) {
    const gx = -hw + i * h.kenM;
    proj.push(`M${X(gx)},${Y(0.35)} L${X(gx)},${Y(py0 - 0.5)}`);
  }
  push(`<path class="d-proj" d="${proj.join(" ")}"/>`);
  const py1 = GAP + h.D;
  const doma = domaShape(h);

  // engawa — the veranda strip, where the house has one
  if (h.t.key !== "machiya") {
    push(
      `<rect class="d-engawa" x="${X(hw)}" y="${Y(py0 + (doma.kind === "band" ? doma.d : 0))}" width="${n(0.85 * k)}" height="${n((h.D - (doma.kind === "band" ? doma.d : 0)) * k)}"/>`
    );
  }

  // the earth floor
  if (doma.kind === "band") {
    push(
      `<rect class="d-doma" x="${X(-hw)}" y="${Y(py0)}" width="${n(h.W * k)}" height="${n(doma.d * k)}"/>`
    );
  } else {
    push(
      `<rect class="d-doma" x="${X(-hw)}" y="${Y(py0)}" width="${n(doma.w * k)}" height="${n(h.D * k)}"/>`
    );
  }

  // name the earth floor on the plan — it is the room people misread
  if (doma.kind === "band") {
    push(
      `<text class="d-note d-doma-l" x="${X(0)}" y="${Y(py0 + doma.d / 2)}" text-anchor="middle">土間</text>`
    );
  } else {
    push(
      `<text class="d-note d-doma-l" x="${X(-hw + doma.w / 2)}" y="${Y(py0 + h.D * 0.22)}" text-anchor="middle" transform="rotate(-90 ${X(-hw + doma.w / 2)} ${Y(py0 + h.D * 0.22)})">通り庭</text>`
    );
  }

  // the ken grid — the house is a module before it is a shape
  const grid = [];
  for (let i = 0; i <= h.widthKen; i++) {
    const gx = -hw + i * h.kenM;
    grid.push(`M${X(gx)},${Y(py0)} L${X(gx)},${Y(py1)}`);
  }
  for (let j = 0; j <= h.depthKen; j++) {
    const gy = py0 + j * h.kenM;
    grid.push(`M${X(-hw)},${Y(gy)} L${X(hw)},${Y(gy)}`);
  }
  push(`<path class="d-grid" d="${grid.join(" ")}"/>`);

  // tatami in the rear bays — the zashiki
  const matBays = Math.min(2, h.depthKen - 1);
  if (matBays > 0 && h.widthKen >= 2) {
    const mats = [];
    for (let j = 0; j < matBays; j++) {
      const by = py1 - (j + 1) * h.kenM;
      for (let i = 0; i < h.widthKen; i++) {
        const bx = -hw + i * h.kenM;
        const horiz = (i + j) % 2 === 0;
        if (horiz) {
          mats.push(
            `M${X(bx)},${Y(by + h.kenM / 2)} L${X(bx + h.kenM)},${Y(by + h.kenM / 2)}`
          );
        } else {
          mats.push(`M${X(bx + h.kenM / 2)},${Y(by)} L${X(bx + h.kenM / 2)},${Y(by + h.kenM)}`);
        }
      }
    }
    push(`<path class="d-tatami" d="${mats.join(" ")}"/>`);
    // tokonoma — the alcove, always on the rear wall of the zashiki
    push(
      `<rect class="d-toko" x="${X(hw - h.kenM)}" y="${Y(py1 - 0.42)}" width="${n(h.kenM * k)}" height="${n(0.42 * k)}"/>`
    );
    push(
      `<text class="d-note" x="${X(hw - h.kenM / 2)}" y="${Y(py1 - 0.62)}" text-anchor="middle">床の間</text>`
    );
  }

  // the machiya's courtyard — light and air down the eel's bed
  if (h.t.key === "machiya" && h.depthKen >= 9) {
    const cyy = py0 + h.D * 0.55;
    push(
      `<rect class="d-tsubo" x="${X(-hw + doma.w)}" y="${Y(cyy)}" width="${n(Math.min(h.kenM * 1.5, h.W - doma.w) * k)}" height="${n(h.kenM * k)}"/>`
    );
    push(
      `<text class="d-note" x="${X(-hw + doma.w + Math.min(h.kenM * 1.5, h.W - doma.w) / 2)}" y="${Y(cyy + h.kenM / 2)}" text-anchor="middle">坪庭</text>`
    );
  }

  // the outer wall
  push(
    `<rect class="d-ink d-ink-heavy d-wall" x="${X(-hw)}" y="${Y(py0)}" width="${n(h.W * k)}" height="${n(h.D * k)}"/>`
  );

  // agarikamachi — the step where the shoes come off
  if (doma.kind === "band") {
    push(
      `<line class="d-kamachi" x1="${X(-hw)}" y1="${Y(py0 + doma.d)}" x2="${X(hw)}" y2="${Y(py0 + doma.d)}"/>`
    );
  } else {
    push(
      `<line class="d-kamachi" x1="${X(-hw + doma.w)}" y1="${Y(py0)}" x2="${X(-hw + doma.w)}" y2="${Y(py1)}"/>`
    );
  }

  // posts on the grid
  const dots = [];
  for (let i = 0; i <= h.widthKen; i++) {
    for (let j = 0; j <= h.depthKen; j++) {
      dots.push(
        `<circle class="d-post" cx="${X(-hw + i * h.kenM)}" cy="${Y(py0 + j * h.kenM)}" r="${n(0.09 * k)}"/>`
      );
    }
  }
  push(dots.join(""));

  // the irori, in the yuka, and the great pillar beside the threshold
  const iy =
    doma.kind === "band"
      ? py0 + doma.d + (h.D - doma.d) * 0.32
      : py0 + h.D * 0.34;
  const ix = doma.kind === "band" ? iroriX : -hw + doma.w + (h.W - doma.w) * 0.45;
  push(
    `<rect class="d-irori-plan" x="${X(ix - 0.45)}" y="${Y(iy - 0.45)}" width="${n(0.9 * k)}" height="${n(0.9 * k)}"/>`
  );

  const dkX = doma.kind === "band" ? 0 : -hw + doma.w;
  const dkY = doma.kind === "band" ? py0 + Math.round(doma.d / h.kenM) * h.kenM : py0 + h.kenM * 2;
  push(
    `<circle class="d-daikoku-plan" cx="${X(dkX)}" cy="${Y(dkY)}" r="${n(0.19 * k)}"/>`
  );

  // A–A, cut through the raised floor
  const aaY = iy;
  push(
    `<g class="d-cut">
      <line x1="${X(-hw - 0.9)}" y1="${Y(aaY)}" x2="${X(hw + 0.9)}" y2="${Y(aaY)}"/>
      <text class="d-label" x="${X(-hw - 1.0)}" y="${Y(aaY) + 4}" text-anchor="end">A</text>
      <text class="d-label" x="${X(hw + 1.0)}" y="${Y(aaY) + 4}" text-anchor="start">A</text>
    </g>`
  );

  // depth dimension
  const pdX = -hw - (h.t.key === "machiya" ? 1.0 : oh + 1.05);
  push(
    `<g class="d-dim">
      <line x1="${X(pdX)}" y1="${Y(py0)}" x2="${X(pdX)}" y2="${Y(py1)}"/>
      <line x1="${X(pdX - 0.22)}" y1="${Y(py0)}" x2="${X(pdX + 0.22)}" y2="${Y(py0)}"/>
      <line x1="${X(pdX - 0.22)}" y1="${Y(py1)}" x2="${X(pdX + 0.22)}" y2="${Y(py1)}"/>
      <text class="d-label" x="${X(pdX) - 9}" y="${Y((py0 + py1) / 2)}" text-anchor="end">${h.depthKen} 間</text>
    </g>`
  );

  push(`<text class="d-title" x="${X(-hw)}" y="${Y(py0) - 14}">平面 · PLAN</text>`);
  push(`</g>`);

  /* ================= SHEET FURNITURE =================================== */

  const barKen = h.widthKen >= 5 ? 5 : 2;
  const barLen = barKen * h.kenM * k;
  const bx0 = VB.pad + 4;
  const by = VB.h - VB.pad + 6;
  push(
    `<g class="d-scalebar">
      <line x1="${n(bx0)}" y1="${n(by)}" x2="${n(bx0 + barLen)}" y2="${n(by)}"/>
      <line x1="${n(bx0)}" y1="${n(by - 5)}" x2="${n(bx0)}" y2="${n(by + 5)}"/>
      <line x1="${n(bx0 + barLen / 2)}" y1="${n(by - 3)}" x2="${n(bx0 + barLen / 2)}" y2="${n(by + 3)}"/>
      <line x1="${n(bx0 + barLen)}" y1="${n(by - 5)}" x2="${n(bx0 + barLen)}" y2="${n(by + 5)}"/>
      <text class="d-label" x="${n(bx0 + barLen + 10)}" y="${n(by + 4)}">${barKen} 間 · ${n(barKen * h.kenM)} m</text>
    </g>`
  );
  push(
    `<text class="d-scale" x="${n(VB.w - VB.pad)}" y="${n(by + 4)}" text-anchor="end">1:${scaleN}</text>`
  );

  const title = `${h.t.label} ${h.t.jp} · ${h.widthKen}×${h.depthKen} 間 · ${h.mod.label}`;
  return `<svg class="drawing${live ? " is-live" : ""}" viewBox="0 0 ${VB.w} ${VB.h}" role="img" aria-label="${escapeAttr(drawingAlt(h))}" xmlns="http://www.w3.org/2000/svg">
  <title>${escapeAttr(title)}</title>
  ${o.join("\n  ")}
</svg>`;
}

export function drawingAlt(h) {
  return `Orthographic section and plan of a ${h.t.label} (${h.t.gloss}), ${h.widthKen} by ${h.depthKen} ken on the ${h.mod.label} module. Roof pitch ${n(h.kobai)} sun, ridge ${n(h.ridgeH)} metres. The earth floor is ${Math.round(h.domaRatio * 100)} per cent of the ground plane; the sunken hearth sits in the raised floor with its smoke rising through the roof.`;
}

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* --- the profile mark ----------------------------------------------------
 * A compact elevation-only outline for indexes and navigation: the four
 * houses compared by the one thing that most distinguishes them, which is
 * the pitch of the roof. All four are drawn to a common scale so a 4.5-sun
 * machiya and a 17.3-sun gasshō read as the same argument at a glance.
 */
export function renderProfile(h, opts = {}) {
  const W = 220;
  const H = 150;
  const pad = 10;

  // one scale across every typology so the comparison is honest
  const k = (W - pad * 2) / 11.5;
  const hw = h.W / 2;
  const oh = h.overhang;
  const tan = Math.tan(h.theta);
  const eaveTipY = -(h.eaveH - oh * tan);

  const cx = W / 2;
  const gy = H - pad - 8;
  const X = (wx) => n(cx + wx * k);
  const Y = (wy) => n(gy + wy * k);

  const body = [];
  body.push(
    `<line class="p-ground" x1="${pad}" y1="${n(gy)}" x2="${n(W - pad)}" y2="${n(gy)}"/>`
  );
  body.push(
    `<rect class="p-wall" x="${X(-hw)}" y="${Y(-h.eaveH)}" width="${n(h.W * k)}" height="${n(h.eaveH * k)}"/>`
  );
  body.push(
    `<polygon class="p-roof" points="${X(-hw - oh)},${Y(eaveTipY)} ${X(0)},${Y(-h.ridgeH)} ${X(hw + oh)},${Y(eaveTipY)}"/>`
  );
  if (h.weighted) {
    body.push(
      `<line class="p-ridge" x1="${X(-0.7)}" y1="${Y(-h.ridgeH - 0.12)}" x2="${X(0.7)}" y2="${Y(-h.ridgeH - 0.12)}"/>`
    );
  }

  return `<svg class="profile" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeAttr(
    `${h.t.label}: roof pitch ${n(h.kobai)} sun, ${n(h.deg)} degrees, ridge ${n(h.ridgeH)} metres.`
  )}" xmlns="http://www.w3.org/2000/svg">${body.join("")}</svg>`;
}
