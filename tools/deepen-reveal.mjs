#!/usr/bin/env node
// Deepen reveal coverage on a site that already has the canonical floor.
//
//   node tools/deepen-reveal.mjs <site> [--dry]
//
// Tags the structural elements every Foundry page has — section headings,
// figures, and body blocks — and applies the masked line reveal to display
// headings whose content is plain text (a heading containing nested markup is
// left alone; wrapping those needs judgement, not a regex).

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const site = process.argv[2];
const dry = process.argv.includes('--dry');
if (!site) { console.error('usage: deepen-reveal.mjs <site> [--dry]'); process.exit(1); }

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let added = 0, masked = 0;
const files = walk(`sites/${site}/src`).filter((f) => f.endsWith('.astro'));

const hasRv = (attrs) => /\brv\b/.test(attrs);

for (const f of files) {
  const orig = readFileSync(f, 'utf8');
  let t = orig;

  // ---- masked line reveal on plain-text display headings -----------------
  // Only h1/h2 whose inner content is text (optionally split by <br />).
  t = t.replace(
    /<(h[12])([^>]*class="[^"]*")([^>]*)>([^<]*(?:<br\s*\/?>[^<]*)*)<\/\1>/g,
    (m, tag, cls, rest, inner) => {
      if (hasRv(cls)) return m;
      const lines = inner.split(/<br\s*\/?>/).map((s) => s.trim()).filter(Boolean);
      if (lines.length === 0 || inner.length > 200) return m;
      masked++;
      added++;
      const spans = lines
        .map((l, i) => `<span class="rv-line"${i ? ` style="--d:${i}"` : ''}><span>${l}</span></span>`)
        .join('');
      const newCls = cls.replace(/class="([^"]*)"/, 'class="$1 rv"');
      return `<${tag}${newCls}${rest}>${spans}</${tag}>`;
    }
  );

  // ---- plain rv on the remaining structural elements ----------------------
  // headings without a class attribute at all. RegExp.$1 inside an arrow
  // callback is unreliable — it emitted malformed tags and broke four builds.
  t = t.replace(/<(h[23])>/g, (m, tag) => { added++; return `<${tag} class="rv">`; });
  // headings and figures that have a class but no rv
  t = t.replace(/<(h[23]|figure|table|blockquote)([^>]*?)class="([^"]*)"/g, (m, tag, pre, cls) => {
    if (hasRv(cls)) return m;
    added++;
    return `<${tag}${pre}class="${cls} rv"`;
  });

  if (t !== orig) {
    if (!dry) writeFileSync(f, t);
  }
}

console.log(`${site}${dry ? ' [dry]' : ''}: +${added} rv (${masked} masked headings)`);
