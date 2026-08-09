/*
  BANAAG — the chalk, drawn.

  One function turns a hulma() result into the inside of the SVG. Astro renders
  it on the server and the browser re-renders it on every input, from the same
  source, so the drawing a visitor gets with JS off is the drawing they get
  with it on.
*/

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* A letrista fits the words to the board, so the board never overflows: the
   longer the route, the tighter he cuts it. */
function fit(text, size, max, perChar) {
  const w = text.length * size * perChar;
  return w > max ? Math.max(size * 0.42, (max / (text.length * perChar)) | 0) : size;
}

export function draw(P) {
  const p = P.parts;
  const t = P.spec.tubo.hex;
  const o = [];

  /* ---- ground: the shop floor line ---- */
  o.push(
    `<line class="chalk-ground" x1="${-180}" y1="${p.dimL.y - 260}" x2="${P.spec.length + 180}" y2="${p.dimL.y - 260}" />`
  );

  /* ---- wheels, behind the body ---- */
  for (const w of p.wheels) {
    o.push(
      `<circle class="chalk-fill" cx="${w.cx}" cy="${w.cy}" r="${w.r}" />` +
        `<circle class="chalk-thin" cx="${w.cx}" cy="${w.cy}" r="${w.hub}" />` +
        `<circle class="chalk-chrome" cx="${w.cx}" cy="${w.cy}" r="${Math.round(w.hub * 0.3)}" />`
    );
  }

  /* Everything the letrista puts on the side is clipped to the body, so a
     stripe can never run off the nose or through a wheel arch. */
  o.push(`<defs><clipPath id="hulma-clip"><path d="${p.body}" /></clipPath></defs>`);
  o.push(`<g clip-path="url(#hulma-clip)">`);

  /* ---- the flank panel: bare steel, or the letrista's hand on it ---- */
  const f = p.flank;
  if (P.spec.pinta.label === "Mural" && p.mural) {
    o.push(
      `<rect x="${f.x}" y="${f.y}" width="${f.w}" height="${f.h}" fill="rgba(163,177,182,0.10)" />` +
        `<rect x="${p.mural.x}" y="${p.mural.y}" width="${p.mural.w}" height="${p.mural.h}" ` +
        `fill="rgba(230,176,67,0.10)" stroke="${t}" stroke-width="4" />`
    );
  } else {
    o.push(`<rect x="${f.x}" y="${f.y}" width="${f.w}" height="${f.h}" fill="rgba(163,177,182,0.06)" />`);
  }
  for (const s of p.scroll) o.push(`<path class="chalk-hair" d="${s}" stroke="${t}" opacity="0.85" />`);
  for (const s of p.stripes) o.push(`<path class="chalk-gold" d="${s}" />`);

  /* the dedication, lettered across the flank where a jeepney carries it */
  if (P.spec.dedication) {
    const d = String(P.spec.dedication).toUpperCase();
    const size = fit(d, p.dedText.size, p.dedText.max, 0.52);
    o.push(
      `<text class="ded-text" x="${p.dedText.x}" y="${p.dedText.y}" font-size="${size}">${esc(d)}</text>`
    );
  }

  o.push(`</g>`); // end of the clip

  /* ---- the silhouette ---- */
  o.push(`<path class="chalk-body" d="${p.body}" />`);
  o.push(`<path class="chalk-hair" d="${p.arches}" />`);
  o.push(`<path class="chalk-thin" d="${p.entrance}" />`);
  o.push(`<path class="chalk-chrome" d="${p.step}" opacity="0.8" />`);
  o.push(`<path class="chalk-chrome" d="${p.estribo}" opacity="0.7" />`);

  /* ---- glazing ---- */
  for (const w of p.windows) {
    o.push(`<rect class="chalk-glass" x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" />`);
  }
  o.push(
    `<rect class="chalk-glass" x="${p.cabWin.x}" y="${p.cabWin.y}" width="${p.cabWin.w}" height="${p.cabWin.h}" />`
  );
  o.push(`<path class="chalk-thin" d="${p.cabDoor}" />`);
  o.push(`<path class="chalk-thin" d="${p.windshield}" />`);
  o.push(`<path class="chalk-hair" d="${p.barandilya}" />`);

  /* ---- karatula: the route board, and the buyer's own words on it ---- */
  const k = p.karatula;
  o.push(
    `<rect x="${k.x}" y="${k.y}" width="${k.w}" height="${k.h}" fill="var(--bakal)" />` +
      `<rect x="${k.x}" y="${k.y}" width="${k.w}" height="${k.h}" fill="none" stroke="var(--esmalte)" stroke-width="5" />`
  );
  const route = String(P.spec.route || "").toUpperCase();
  if (route) {
    const size = fit(route, p.karatulaText.size, p.karatulaText.max, 0.46);
    o.push(
      `<text class="karatula-text" x="${p.karatulaText.x}" y="${p.karatulaText.y}" font-size="${size}">${esc(route)}</text>`
    );
  }

  /* ---- kargahan ---- */
  for (const r of p.rack) o.push(`<path class="chalk-thin" d="${r}" />`);

  /* ---- ilaw: the only place the vehicle's own colour is allowed ---- */
  for (const v of p.valance) {
    o.push(
      `<line x1="${v.x1}" y1="${v.y}" x2="${v.x2}" y2="${v.y}" stroke="${t}" stroke-width="96" opacity="0.13" stroke-linecap="round" />` +
        `<line x1="${v.x1}" y1="${v.y}" x2="${v.x2}" y2="${v.y}" stroke="${t}" stroke-width="40" opacity="0.34" stroke-linecap="round" />` +
        `<line x1="${v.x1}" y1="${v.y}" x2="${v.x2}" y2="${v.y}" stroke="${t}" stroke-width="14" stroke-linecap="round" />`
    );
  }
  for (const r of p.rotorTicks) {
    o.push(
      `<circle cx="${r.x}" cy="${r.y}" r="${r.on ? 22 : 12}" fill="${t}" opacity="${r.on ? 1 : 0.3}" />`
    );
  }

  /* ---- sabit, mirror, kabayo ---- */
  for (const s of p.sabit) {
    o.push(`<line class="chalk-hair" x1="${s.x}" y1="${s.y1}" x2="${s.x}" y2="${s.y2}" stroke="var(--liwayway)" opacity="0.8" />`);
  }
  o.push(`<path class="chalk-chrome" d="${p.bumper}" opacity="0.9" />`);
  o.push(`<path class="chalk-chrome" d="${p.mirror}" opacity="0.85" />`);
  for (const h of p.horses) {
    o.push(`<g transform="${h}"><path d="${p.horsePath}" fill="var(--esmalte)" /></g>`);
  }
  if (p.bumperArt) o.push(`<path class="chalk-thin" d="${p.bumperArt}" stroke="var(--esmalte)" />`);

  /* ---- the dimensions: this site's only ornament ---- */
  const dl = p.dimL;
  o.push(
    `<path class="dimline" d="M ${dl.x1} ${dl.y - 60} L ${dl.x1} ${dl.y + 60} M ${dl.x1} ${dl.y} L ${dl.x2} ${dl.y} M ${dl.x2} ${dl.y - 60} L ${dl.x2} ${dl.y + 60}" />` +
      `<text class="dimtext" x="${dl.tx}" y="${dl.y - 60}" text-anchor="middle">${dl.label}</text>`
  );
  const dh = p.dimH;
  o.push(
    `<path class="dimline" d="M ${dh.x - 60} ${dh.y1} L ${dh.x + 60} ${dh.y1} M ${dh.x} ${dh.y1} L ${dh.x} ${dh.y2} M ${dh.x - 60} ${dh.y2} L ${dh.x + 60} ${dh.y2}" />` +
      `<text class="dimtext" x="${dh.x - 40}" y="${dh.ty}" text-anchor="middle" transform="rotate(-90 ${dh.x - 40} ${dh.ty})">${dh.label}</text>`
  );
  const dw = p.dimW;
  o.push(
    `<path class="dimline" d="M ${dw.x1} ${dw.y - 40} L ${dw.x1} ${dw.y + 40} M ${dw.x1} ${dw.y} L ${dw.x2} ${dw.y} M ${dw.x2} ${dw.y - 40} L ${dw.x2} ${dw.y + 40}" opacity="0.75" />` +
      `<text class="dimtext" x="${dw.tx}" y="${dw.y - 50}" text-anchor="middle" opacity="0.85">${dw.label}</text>`
  );

  return o.join("\n");
}
