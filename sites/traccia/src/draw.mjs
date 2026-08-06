// The drawing of the frame — a builder's side elevation, to scale.
//
// One function, used by Astro at build time so the page is complete with JS
// off, and by the browser to redraw on every change. The scale is FIXED: a
// small frame is drawn small, because that is information.
import { TOE_R, CRANK, deg } from "./frame.mjs";

export const VB_W = 1180;
export const VB_H = 690;
const K = 0.55; // px per mm
const OX = 486; // the bottom bracket sits here, always
const OY = 430;

const n = (v) => Math.round(v * 100) / 100;
const X = (x) => n(OX + x * K);
const Y = (y) => n(OY - y * K);

const line = (a, b, cls, w) =>
  `<line x1="${X(a.x)}" y1="${Y(a.y)}" x2="${X(b.x)}" y2="${Y(b.y)}" class="${cls}" stroke-width="${w}"/>`;

export function drawFrame(f, verdict) {
  const o = [];
  const r = f.R * K;
  const tyreW = f.road.tyre * K;

  // ── the ground
  o.push(`<line x1="40" y1="${Y(f.groundY)}" x2="${VB_W - 40}" y2="${Y(f.groundY)}" class="d-ground"/>`);

  // ── the wheels
  for (const a of [f.rearAxle, f.frontAxle]) {
    o.push(`<circle cx="${X(a.x)}" cy="${Y(a.y)}" r="${n(r - tyreW / 2)}" class="d-tyre" stroke-width="${n(tyreW)}"/>`);
    o.push(`<circle cx="${X(a.x)}" cy="${Y(a.y)}" r="${n(r - tyreW)}" class="d-rim"/>`);
    o.push(`<circle cx="${X(a.x)}" cy="${Y(a.y)}" r="3" class="d-hub"/>`);
  }

  // ── the steering axis, run to the ground, so the trail can be seen at all.
  // It is the one quantity on a bicycle that nobody can point at.
  const axisGroundX = f.frontAxle.x + f.trail;
  o.push(
    `<line x1="${X(f.headTop.x)}" y1="${Y(f.headTop.y)}" x2="${X(axisGroundX)}" y2="${Y(f.groundY)}" class="d-axis"/>`
  );

  // ── the toe's arc about the bottom bracket, and the crank that swings it
  o.push(
    `<path d="M ${X(0)} ${Y(-TOE_R)} A ${n(TOE_R * K)} ${n(TOE_R * K)} 0 0 1 ${X(TOE_R)} ${Y(0)}" class="d-toe ${verdict.state}"/>`
  );
  o.push(line({ x: 0, y: 0 }, { x: CRANK, y: 0 }, "d-crank", 5));
  o.push(`<circle cx="${X(CRANK)}" cy="${Y(0)}" r="4" class="d-hub"/>`);
  o.push(`<circle cx="${X(TOE_R)}" cy="${Y(0)}" r="3.5" class="d-toe-pt ${verdict.state}"/>`);

  // ── the frame
  o.push(line(f.bb, f.seatTop, "d-tube", 14));
  o.push(line(f.bb, f.headBot, "d-tube", 15));
  o.push(line(f.seatTop, f.headTop, "d-tube", 13));
  o.push(line(f.headTop, f.headBot, "d-tube", 18));
  o.push(line(f.bb, f.rearAxle, "d-tube", 9));
  o.push(line(f.seatTop, f.rearAxle, "d-tube", 8));
  o.push(line(f.headBot, f.frontAxle, "d-tube", 10));
  const post = { x: f.seatTop.x - 62 * Math.cos((f.sa * Math.PI) / 180), y: f.seatTop.y + 62 * Math.sin((f.sa * Math.PI) / 180) };
  o.push(line(f.seatTop, post, "d-post", 8));
  o.push(`<circle cx="${X(0)}" cy="${Y(0)}" r="9" class="d-bb"/>`);

  // ── the conflict, drawn at pedal height where it actually happens
  const tyreRearAtPedal = f.frontCentre - Math.sqrt(Math.max(0, f.R ** 2 - f.road.bbDrop ** 2));
  const gapMid = (TOE_R + tyreRearAtPedal) / 2;
  const labelY = Y(0) - 22;
  o.push(
    `<g class="d-overlap ${verdict.state}">` +
      `<line x1="${X(TOE_R)}" y1="${Y(0) - 11}" x2="${X(TOE_R)}" y2="${Y(0) + 11}" class="d-gap-tick"/>` +
      `<line x1="${X(tyreRearAtPedal)}" y1="${Y(0) - 11}" x2="${X(tyreRearAtPedal)}" y2="${Y(0) + 11}" class="d-gap-tick"/>` +
      `<line x1="${X(TOE_R)}" y1="${Y(0)}" x2="${X(tyreRearAtPedal)}" y2="${Y(0)}" class="d-gap"/>` +
      `<text x="${X(gapMid)}" y="${labelY}" class="d-t big ${verdict.state}" text-anchor="middle">${
        f.toeGap < 0 ? `− ${Math.abs(Math.round(f.toeGap))} mm` : `+ ${Math.round(f.toeGap)} mm`
      }</text>` +
    `</g>`
  );

  // ── dimensions, all of them clear of the frame: the two long ones below the
  // ground line, stack and reach inside the empty main triangle.
  const gY = Y(f.groundY);
  o.push(dimPx(X(f.frontAxle.x), X(axisGroundX), gY + 34, `avancorsa ${Math.round(f.trail)} mm`, "accent"));
  o.push(dimPx(X(f.rearAxle.x), X(f.frontAxle.x), gY + 74, `passo ${Math.round(f.wheelbase)}`));

  o.push(
    `<g class="d-dim">` +
      `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(f.stack)}" class="d-dim-l"/>` +
      `<line x1="${X(0)}" y1="${Y(f.stack)}" x2="${X(f.reachMm)}" y2="${Y(f.stack)}" class="d-dim-l"/>` +
      `<text x="${X(0) + 10}" y="${Y(f.stack * 0.55)}" class="d-t">stack ${Math.round(f.stack)}</text>` +
      `<text x="${X(f.reachMm * 0.55)}" y="${Y(f.stack) + 20}" class="d-t" text-anchor="middle">reach ${Math.round(f.reachMm)}</text>` +
    `</g>`
  );

  // the two angles, written off the ends of the tubes they belong to
  o.push(`<text x="${X(f.headTop.x) + 30}" y="${Y(f.headTop.y) - 4}" class="d-t">sterzo ${deg(f.ha)}</text>`);
  o.push(`<text x="${X(f.seatTop.x) - 14}" y="${Y(f.seatTop.y) - 12}" class="d-t" text-anchor="end">piantone ${deg(f.sa)}</text>`);

  return o.join("");
}

function dimPx(px1, px2, py, label, cls = "") {
  const mid = (px1 + px2) / 2;
  return (
    `<g class="d-dim ${cls}">` +
      `<line x1="${n(px1)}" y1="${n(py)}" x2="${n(px2)}" y2="${n(py)}" class="d-dim-l"/>` +
      `<line x1="${n(px1)}" y1="${n(py - 6)}" x2="${n(px1)}" y2="${n(py + 6)}" class="d-dim-l"/>` +
      `<line x1="${n(px2)}" y1="${n(py - 6)}" x2="${n(px2)}" y2="${n(py + 6)}" class="d-dim-l"/>` +
      `<text x="${n(mid)}" y="${n(py - 9)}" class="d-t ${cls}" text-anchor="middle">${label}</text>` +
    `</g>`
  );
}

export function frameLabel(f, v) {
  return (
    `A scale side elevation of the frame: seat tube ${f.st} millimetres, top tube ${f.tt}, ` +
    `head angle ${deg(f.ha)}, seat angle ${deg(f.sa)}, trail ${Math.round(f.trail)} millimetres, ` +
    `wheelbase ${Math.round(f.wheelbase)} millimetres, on ${f.road.tyre} millimetre tyres. ` +
    `Toe clearance: ${v.gloss}, ${Math.round(f.toeGap)} millimetres.`
  );
}
