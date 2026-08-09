#!/usr/bin/env node
/**
 * The five registers, as token sets — generated, not hand-written.
 *
 * The collection sorts its subjects by the quality of light they live in. The
 * showcase can therefore be re-lit into any of them, which is the only honest
 * way to demonstrate the claim on the page where it is made.
 *
 * Two of the five are light grounds, so the whole interface inverts. That is
 * exactly where contrast quietly dies, and this project has failed that check
 * before by eyeballing it. So every text pair is measured here and the script
 * refuses to emit CSS if any of them misses WCAG AA. A register that cannot be
 * read is not a register.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(resolve(here, '..'), 'src', 'styles', 'registers.css');

/* ---------------------------------------------------------------- colour */

const srgb = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};

const lum = (hex) => {
  const [r, g, b] = srgb(hex).map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

/* -------------------------------------------------------------- registers */

const registers = [
  {
    id: 'nocturne',
    mapOcean: '#0d0b10',
    mapLand: '#1c1822',
    mapTerm: '#e8b0a2',
    name: 'Nocturne',
    atmosphere: 'Darkness, ceremony, one lamp',
    scheme: 'dark',
    ground: '#08070a',
    ground2: '#100e12',
    ground3: '#191620',
    rule: '#332e3d',
    ruleSoft: '#1c1922',
    ink: '#f2ece4',
    ink2: '#c2b9ad',
    ink3: '#968d81',
    accent: '#d1503f',
    accentInk: '#0a0810',
    display: "'Instrument Serif'",
    text: "'Newsreader Variable'",
    data: "'IBM Plex Mono'",
    displayWeight: 400,
    tracking: '-0.02em',
    dataCase: 'uppercase',
  },
  {
    id: 'aubade',
    mapOcean: '#e6dcc6',
    mapLand: '#d5c8ab',
    mapTerm: '#7a3d0c',
    name: 'Aubade',
    atmosphere: 'Daylight, hospitality, inhabited rooms',
    scheme: 'light',
    ground: '#f5f0e5',
    ground2: '#ece5d6',
    ground3: '#e0d7c4',
    rule: '#c4b89f',
    ruleSoft: '#dbd1bd',
    ink: '#211c14',
    ink2: '#463d2f',
    ink3: '#5f5647',
    accent: '#8a4a12',
    accentInk: '#f8f4ea',
    display: "'Fraunces Variable'",
    text: "'Fraunces Variable'",
    data: "'Fraunces Variable'",
    displayWeight: 500,
    tracking: '-0.025em',
    dataCase: 'uppercase',
  },
  {
    id: 'vesper',
    mapOcean: '#0e131c',
    mapLand: '#1c2431',
    mapTerm: '#f0b98a',
    name: 'Vesper',
    atmosphere: 'Civil twilight, passage, discretion',
    scheme: 'dark',
    ground: '#0b0f16',
    ground2: '#121824',
    ground3: '#1a2230',
    rule: '#2d374a',
    ruleSoft: '#1d2532',
    ink: '#e8ebf1',
    ink2: '#b4bcc9',
    ink3: '#8d97a6',
    accent: '#e8a26b',
    accentInk: '#0b0f16',
    display: "'Instrument Sans Variable'",
    text: "'Instrument Sans Variable'",
    data: "'IBM Plex Mono'",
    displayWeight: 500,
    tracking: '-0.04em',
    dataCase: 'uppercase',
  },
  {
    id: 'pastorale',
    mapOcean: '#e2e8ea',
    mapLand: '#ccd5d9',
    mapTerm: '#7a3f22',
    name: 'Pastorale',
    atmosphere: 'Cold bright overcast, snow-light',
    scheme: 'light',
    ground: '#eff2f3',
    ground2: '#e4e9eb',
    ground3: '#d5dde0',
    rule: '#b3bfc4',
    ruleSoft: '#d2dadd',
    ink: '#14181a',
    ink2: '#394347',
    ink3: '#525e64',
    accent: '#8a4a2a',
    accentInk: '#f2f5f6',
    display: "'Bricolage Grotesque Variable'",
    text: "'Bricolage Grotesque Variable'",
    data: "'Bricolage Grotesque Variable'",
    displayWeight: 600,
    tracking: '-0.03em',
    dataCase: 'uppercase',
  },
  {
    id: 'vigil',
    mapOcean: '#080f16',
    mapLand: '#152029',
    mapTerm: '#f2c46a',
    name: 'Vigil',
    atmosphere: 'Maritime night, weather, one timed light',
    scheme: 'dark',
    ground: '#05090d',
    ground2: '#0b1219',
    ground3: '#121c25',
    rule: '#25323e',
    ruleSoft: '#18222c',
    ink: '#eaedea',
    ink2: '#aeb9c0',
    ink3: '#84909a',
    accent: '#f2c46a',
    accentInk: '#05090d',
    display: "'Gabarito Variable'",
    text: "'Instrument Sans Variable'",
    data: "'IBM Plex Mono'",
    displayWeight: 700,
    tracking: '-0.035em',
    dataCase: 'uppercase',
  },
];

/* ------------------------------------------------------------------ gate */

// Every pair here renders real text somewhere, so every pair must clear AA
// for normal text. --ink-3 is the dimmest thing allowed to carry words; the
// old --ink-4 was 3.27:1 and is gone rather than demoted.
const AA_NORMAL = 4.5;
const AA_LARGE = 3.0;

const failures = [];
const report = [];

for (const r of registers) {
  const checks = [
    ['ink', 'ground', r.ink, r.ground, AA_NORMAL],
    ['ink', 'ground-2', r.ink, r.ground2, AA_NORMAL],
    ['ink-2', 'ground', r.ink2, r.ground, AA_NORMAL],
    ['ink-2', 'ground-2', r.ink2, r.ground2, AA_NORMAL],
    ['ink-3', 'ground', r.ink3, r.ground, AA_NORMAL],
    ['ink-3', 'ground-2', r.ink3, r.ground2, AA_NORMAL],
    ['ink-3', 'ground-3', r.ink3, r.ground3, AA_NORMAL],
    ['accent', 'ground', r.accent, r.ground, AA_NORMAL],
    ['accent', 'ground-2', r.accent, r.ground2, AA_NORMAL],
    // The accent is also a filled button/chip ground carrying accent-ink.
    ['accent-ink', 'accent', r.accentInk, r.accent, AA_NORMAL],
    // Hairlines are not text; they only need to be perceivable.
    ['rule', 'ground', r.rule, r.ground, 1.4],
  ];

  for (const [fg, bg, a, b, min] of checks) {
    const v = ratio(a, b);
    const ok = v >= min;
    if (!ok) failures.push(`${r.id}: ${fg} ${a} on ${bg} ${b} = ${v.toFixed(2)}:1 (needs ${min})`);
    report.push(`  ${ok ? '·' : '✗'} ${r.id.padEnd(10)} ${fg.padEnd(10)} on ${bg.padEnd(9)} ${v.toFixed(2)}:1`);
  }
}

console.log(report.join('\n'));

if (failures.length) {
  console.error(
    `\n  ✗ ${failures.length} register colour pair(s) below WCAG AA:\n    ` +
      failures.join('\n    ') +
      '\n\n    Refusing to emit registers.css. Fix the palette, do not lower the gate.\n'
  );
  process.exit(1);
}

/* ------------------------------------------------------------------ emit */

const block = (r) => `
:root[data-register='${r.id}'] {
  color-scheme: ${r.scheme};

  --ground: ${r.ground};
  --ground-2: ${r.ground2};
  --ground-3: ${r.ground3};
  --rule: ${r.rule};
  --rule-soft: ${r.ruleSoft};

  --ink: ${r.ink};
  --ink-2: ${r.ink2};
  --ink-3: ${r.ink3};

  --accent: ${r.accent};
  --accent-ink: ${r.accentInk};

  --display: ${r.display}, ${r.scheme === 'light' ? 'Georgia, serif' : 'Georgia, serif'};
  --sans: ${r.text}, system-ui, -apple-system, sans-serif;
  --mono: ${r.data}, ui-monospace, 'SF Mono', Menlo, monospace;

  /* The map: on a dark ground the lit hemisphere is painted as a lift; on a
     light ground that reads as nothing, so the night is painted as a wash
     instead and the day polygon is left alone. */
  --map-ocean: ${r.mapOcean};
  --map-land: ${r.mapLand};
  --map-lit-op: ${r.scheme === 'dark' ? '0.1' : '0'};
  --map-night-op: ${r.scheme === 'dark' ? '0' : '0.17'};
  --map-term: ${r.mapTerm};

  --display-weight: ${r.displayWeight};
  --display-tracking: ${r.tracking};
  --data-case: ${r.dataCase};
}
`;

const css = `/*
  The five registers — GENERATED by scripts/registers.mjs. Do not edit.

  Each block re-lights the whole interface into one of the collection's
  qualities of light. Two are light grounds, so everything inverts; every
  text pair below has been measured against WCAG AA before emission.

  Run: npm run sync
*/
${registers.map(block).join('')}
/* Data the switcher needs, so the list lives in one place. */
:root {
  --register-count: ${registers.length};
}
`;

writeFileSync(OUT, css);

const meta = registers.map(({ id, name, atmosphere, scheme, accent }) => ({
  id, name, atmosphere, scheme, accent,
}));
writeFileSync(
  join(resolve(here, '..'), 'src', 'data', 'registers.json'),
  JSON.stringify(meta, null, 2) + '\n'
);

console.log(`\n  ✓ ${registers.length} registers emitted — all pairs clear WCAG AA`);
