#!/usr/bin/env node
// Migrate a Foundry site onto the canonical reveal floor.
//
//   node tools/migrate-reveal.mjs <site> [--dry]
//
// Three dialects grew up independently and none was documented:
//   .rv      html.js .rv     -> .in      stagger --d   (schwarzwald, shokunin)
//   .reveal  html.js .reveal -> .is-in   stagger --i   (kaji, vicente)
//   .rise    .fx .rise       -> .seen    stagger none  (bent, ibushi)
//
// This unifies on `.rv` with the `.fx` gate, which is the only one that also
// honours ?nofx — the screenshot pipeline depends on that.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const site = process.argv[2];
const dry = process.argv.includes('--dry');
if (!site) { console.error('usage: migrate-reveal.mjs <site> [--dry]'); process.exit(1); }

const ROOT = `sites/${site}/src`;
const CANON = readFileSync('tools/reveal-canon.css', 'utf8');

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const files = walk(ROOT);
const log = [];
let touched = 0;

const save = (p, before, after, note) => {
  if (before === after) return;
  if (!dry) writeFileSync(p, after);
  touched++;
  log.push(`  ${p.replace(ROOT + '/', '')} — ${note}`);
};

// ---- 1. detect the dialect -------------------------------------------------
const all = files.map((f) => readFileSync(f, 'utf8')).join('\n');
const dialect = /class="[^"]*\brv\b/.test(all) ? 'rv'
  : /class="[^"]*\breveal\b/.test(all) ? 'reveal'
  : /class="[^"]*\brise\b/.test(all) ? 'rise' : 'none';
log.push(`dialect: ${dialect}`);

// ---- 2. the stylesheet: drop the old block, append the canon ---------------
const cssFiles = files.filter((f) => f.endsWith('.css'));
const mainCss = cssFiles.find((f) => /global\.css$/.test(f)) || cssFiles[0];
if (mainCss) {
  let css = readFileSync(mainCss, 'utf8');
  const orig = css;
  // Strip prior reveal rules. Selector-aware: the match must start at a line
  // boundary and swallow the WHOLE selector list, prefixes included, or a
  // leading `html`/`.fx ` is left orphaned and the stylesheet stops parsing.
  css = css.replace(
    /(?<=^|\n)[^\n{}]*\.(?:rv|reveal|rise)\b[^{}]*\{[^{}]*\}[ \t]*\n?/g, '');
  // then any @media wrapper left holding nothing
  css = css.replace(/@media[^{]*\{\s*\}[ \t]*\n?/g, '');
  // and comments that introduced a block that is now gone
  css = css.replace(/\/\*[^*]*(?:reveal|rise|revealed)[^*]*\*\/[ \t]*\n(?=\n|\/\*)/gi, '');
  css = css.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n\n' + CANON;
  save(mainCss, orig, css, 'canonical reveal CSS');
}

// ---- 3. markup + scripts --------------------------------------------------
const rename = {
  reveal: [[/class="([^"]*?)\breveal\b/g, 'class="$1rv'], [/--i:/g, '--d:'],
           [/\.reveal\b/g, '.rv'], [/["']reveal["']/g, '"rv"'],
           [/\bis-in\b/g, 'in'], [/html\.js /g, '.fx ']],
  // `seen` must only be renamed where it is a CLASS, never a bare identifier:
  // a blanket \bseen\b turned `const seen = new IntersectionObserver` into
  // `const in =`, and `in` is a reserved word.
  rise:   [[/class="([^"]*?)\brise\b/g, 'class="$1rv'],
           [/\.rise\b/g, '.rv'], [/(["'])rise\1/g, '"rv"'],
           [/\.seen\b/g, '.in'],
           [/(classList\.(?:add|remove|toggle|contains)\()(["'])seen\2/g, '$1"in"']],
  rv:     [[/html\.js \.rv/g, '.fx .rv'], [/html\.js \.rv-line/g, '.fx .rv-line']],
  none:   [],
}[dialect];

for (const f of files) {
  if (f.endsWith('.css')) continue;
  let t = readFileSync(f, 'utf8');
  const orig = t;
  for (const [re, to] of rename) t = t.replace(re, to);
  save(f, orig, t, 'renamed to rv/in');
}

// ---- 4. the gate + observer ------------------------------------------------
const GATE = `      const r = document.documentElement;
      if (location.search.includes("nofx")) r.classList.add("nofx");
      else if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
        r.classList.add("fx");`;

// The gate must run in <head>, before paint, or revealed elements flash in
// already visible. The OBSERVER must not: in <head> the DOM does not exist yet
// and querySelectorAll finds nothing, which silently leaves every .rv element
// hidden forever. It is wrapped so it runs after parse wherever it is placed.
const OBS = `      addEventListener("DOMContentLoaded", () => {
      const rvIO = new IntersectionObserver(
        (es) => {
          for (const e of es)
            if (e.isIntersecting) {
              e.target.classList.add("in");
              rvIO.unobserve(e.target);
            }
        },
        { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
      );
      document.querySelectorAll(".rv, .rv-line").forEach((el) => rvIO.observe(el));
      });`;

const hosts = files.filter((f) => /\/(pages|layouts)\/[^/]+\.astro$/.test(f));
for (const f of hosts) {
  let t = readFileSync(f, 'utf8');
  const orig = t;
  const hasGate = /classList\.add\("fx"\)|classList\.add\('fx'\)/.test(t);
  const hasObs = /querySelectorAll\("\.rv, \.rv-line"\)|querySelectorAll\('\.rv, \.rv-line'\)/.test(t);
  if (!hasGate || !hasObs) {
    const add = [!hasGate ? GATE : '', !hasObs ? OBS : ''].filter(Boolean).join('\n\n');
    // put it in the first inline script if there is one, else create one
    if (/<script is:inline>/.test(t)) {
      t = t.replace('<script is:inline>', `<script is:inline>\n${add}\n`);
    } else {
      t = t.replace('</body>', `    <script is:inline>\n${add}\n    </script>\n  </body>`);
    }
    save(f, orig, t, `${!hasGate ? 'gate ' : ''}${!hasObs ? 'observer' : ''}`.trim());
  }
}

console.log(`\n${site}${dry ? ' [dry]' : ''}`);
log.forEach((l) => console.log(l));
console.log(`  ${touched} file(s) ${dry ? 'would change' : 'changed'}`);
