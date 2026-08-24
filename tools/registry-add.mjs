#!/usr/bin/env node
/**
 * Add one site to the Foundry registry.
 *
 * `foundry.json` is the content store for the whole collection — the map, the
 * carousel, the case studies and the JSON API all derive from it. A nightly
 * unattended build has to write to it, and an agent hand-editing JSON at 2am
 * is precisely where that goes wrong: a trailing comma, a duplicated slug, a
 * latitude typed as a string.
 *
 * So the write goes through here instead. Every field is checked before the
 * file is touched, and nothing is written unless all of them pass.
 *
 *   node tools/registry-add.mjs entry.json
 *   cat entry.json | node tools/registry-add.mjs -
 *   node tools/registry-add.mjs entry.json --dry-run
 *
 * PUBLISHING the showcase after a write. `cd wgw && vercel deploy --prebuilt`
 * does NOT work, whatever it says elsewhere: the wintergardenweb project has
 * Root Directory `wgw`, so from inside wgw/ the CLI looks for wgw/wgw and
 * fails. Deploy from the REPO ROOT, pointed at that project:
 *
 *   cd wgw && npm run build && cd ..
 *   WGW="VERCEL_ORG_ID=$(node -p "require('./wgw/.vercel/project.json').orgId") \
 *        VERCEL_PROJECT_ID=$(node -p "require('./wgw/.vercel/project.json').projectId")"
 *   env $WGW vercel build --prod --yes
 *   env $WGW vercel deploy --prebuilt --prod --yes
 *
 * Then put `.vercel/project.json` back. `vercel build` rewrites it to whatever
 * project it just built, so the repo root ends up linked to wintergardenweb
 * instead of foundry, and the next deploy from here goes to the wrong project.
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const REGISTRY = join(root, 'foundry.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const source = args.find((a) => a !== '--dry-run');

if (!source) {
  console.error('usage: node tools/registry-add.mjs <entry.json|-> [--dry-run]');
  process.exit(1);
}

const die = (msg) => {
  console.error(`\n  ✗ registry not modified\n    ${msg}\n`);
  process.exit(1);
};

/* ------------------------------------------------------------------ read */

let raw;
try {
  raw = source === '-' ? readFileSync(0, 'utf8') : readFileSync(source, 'utf8');
} catch (e) {
  die(`could not read the entry — ${e.message}`);
}

let entry;
try {
  entry = JSON.parse(raw);
} catch (e) {
  die(`the entry is not valid JSON — ${e.message}`);
}

const registry = JSON.parse(readFileSync(REGISTRY, 'utf8'));
const seriesIds = new Set(registry.series.map((s) => s.id));

/* -------------------------------------------------------------- validate */

const problems = [];
const need = (k) => {
  if (!entry[k] || typeof entry[k] !== 'string' || !entry[k].trim()) {
    problems.push(`missing "${k}"`);
  }
};

['slug', 'name', 'what', 'tagline', 'signature', 'shipped', 'hero', 'url'].forEach(need);

if (entry.slug && registry.sites.some((s) => s.slug === entry.slug)) {
  problems.push(`slug "${entry.slug}" is already in the registry`);
}

if (!seriesIds.has(entry.series)) {
  problems.push(`series "${entry.series}" is not one of: ${[...seriesIds].join(', ')}`);
}

const p = entry.place || {};
if (typeof p.lat !== 'number' || p.lat < -90 || p.lat > 90) {
  problems.push('place.lat must be a number between -90 and 90');
}
if (typeof p.lon !== 'number' || p.lon < -180 || p.lon > 180) {
  problems.push('place.lon must be a number between -180 and 180');
}
if (!p.label) problems.push('missing place.label');
if (!p.country) problems.push('missing place.country');

// Null island means somebody left a coordinate unfilled.
if (p.lat === 0 && p.lon === 0) {
  problems.push('place is at 0,0 — that is the Gulf of Guinea, not a real location');
}

// Two sites at the same point would sit on top of each other on the map.
const clash = registry.sites.find(
  (s) => Math.abs(s.place.lat - p.lat) < 0.01 && Math.abs(s.place.lon - p.lon) < 0.01
);
if (clash) problems.push(`coordinates are identical to ${clash.name} (${clash.place.label})`);

const pal = entry.palette || {};
for (const k of ['ground', 'light', 'accent']) {
  if (!/^#[0-9a-f]{6}$/i.test(pal[k] || '')) problems.push(`palette.${k} must be a #rrggbb hex`);
}

if (entry.shipped && !/^\d{4}-\d{2}-\d{2}$/.test(entry.shipped)) {
  problems.push('shipped must be YYYY-MM-DD');
}

if (entry.url && !/^https:\/\//.test(entry.url)) problems.push('url must be https');

if (entry.hero && entry.slug) {
  const heroPath = join(root, 'sites', entry.slug, 'public', entry.hero);
  if (!existsSync(heroPath)) {
    problems.push(`hero not found at sites/${entry.slug}/public/${entry.hero}`);
  }
}

if (entry.video && entry.slug) {
  const v = join(root, 'sites', entry.slug, 'public', entry.video);
  if (!existsSync(v)) problems.push(`video not found at sites/${entry.slug}/public/${entry.video}`);
}

if (problems.length) die(problems.join('\n    '));

/* ----------------------------------------------------------------- write */

// Keep only the fields the schema knows about, in a stable order.
const clean = {
  slug: entry.slug,
  name: entry.name,
  ...(entry.nativeName ? { nativeName: entry.nativeName } : {}),
  series: entry.series,
  what: entry.what,
  tagline: entry.tagline,
  place: {
    label: p.label,
    country: p.country,
    lat: p.lat,
    lon: p.lon,
  },
  ...(Array.isArray(entry.satellites) && entry.satellites.length
    ? { satellites: entry.satellites }
    : {}),
  url: entry.url,
  hero: entry.hero,
  ...(entry.video ? { video: entry.video } : {}),
  palette: { ground: pal.ground, light: pal.light, accent: pal.accent },
  signature: entry.signature,
  shipped: entry.shipped,
};

if (dryRun) {
  console.log('  ✓ entry is valid — not written (--dry-run)\n');
  console.log(JSON.stringify(clean, null, 2));
  process.exit(0);
}

copyFileSync(REGISTRY, REGISTRY + '.bak');
registry.sites.push(clean);
writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');

const byCountry = new Set(registry.sites.map((s) => s.place.country)).size;
console.log(`  ✓ ${clean.name} added — ${registry.sites.length} sites across ${byCountry} countries`);
console.log(`    previous registry saved to foundry.json.bak`);
console.log('');
console.log('    next, in order:');
console.log('      1. register it in the portfolio — the add-foundry-site skill');
console.log('      2. publish the showcase — see PUBLISHING at the top of this file');
