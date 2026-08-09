#!/usr/bin/env node
/**
 * Sync the Foundry registry into this site.
 *
 * The registry at repo-root `foundry.json` is the single source of truth — the
 * headless content store for the whole collection. A scheduled build appends
 * one entry there and nothing else: this script derives everything downstream.
 *
 *   1. splits the registry into loader-shaped JSON under src/data/
 *   2. derives each site's hero image out of its own public/ folder into
 *      public/collection/<slug>-{1600,800}.webp
 *   3. fails loudly on anything missing, so an unattended registration that
 *      forgot a field breaks the build instead of shipping a broken map node.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..');
const wgw = resolve(here, '..');

const REGISTRY = join(root, 'foundry.json');
const DATA = join(wgw, 'src', 'data');
const OUT = join(wgw, 'public', 'collection');

const WIDTHS = [1600, 800];

const fail = (msg) => {
  console.error(`\n  ✗ registry sync failed\n    ${msg}\n`);
  process.exit(1);
};

if (!existsSync(REGISTRY)) fail(`no registry at ${REGISTRY}`);

let registry;
try {
  registry = JSON.parse(readFileSync(REGISTRY, 'utf8'));
} catch (e) {
  fail(`registry is not valid JSON — ${e.message}`);
}

const { sites, series, studio } = registry;
if (!Array.isArray(sites) || !sites.length) fail('registry has no sites[]');
if (!Array.isArray(series) || !series.length) fail('registry has no series[]');
if (!studio) fail('registry has no studio{}');

const seriesIds = new Set(series.map((s) => s.id));
const seen = new Set();
const problems = [];

for (const s of sites) {
  const at = s.slug || '(entry with no slug)';
  if (!s.slug) problems.push('an entry has no slug');
  if (seen.has(s.slug)) problems.push(`${at}: duplicate slug`);
  seen.add(s.slug);

  for (const key of ['name', 'what', 'tagline', 'signature', 'shipped', 'hero', 'url']) {
    if (!s[key]) problems.push(`${at}: missing "${key}"`);
  }
  if (!seriesIds.has(s.series)) problems.push(`${at}: unknown series "${s.series}"`);

  const p = s.place || {};
  if (typeof p.lat !== 'number' || p.lat < -90 || p.lat > 90) problems.push(`${at}: place.lat must be a number in [-90, 90] — the map cannot place it otherwise`);
  if (typeof p.lon !== 'number' || p.lon < -180 || p.lon > 180) problems.push(`${at}: place.lon must be a number in [-180, 180]`);
  if (!p.label) problems.push(`${at}: missing place.label`);
  if (!p.country) problems.push(`${at}: missing place.country`);

  const pal = s.palette || {};
  for (const key of ['ground', 'light', 'accent']) {
    if (!/^#[0-9a-f]{6}$/i.test(pal[key] || '')) problems.push(`${at}: palette.${key} must be a #rrggbb hex`);
  }

  if (s.hero) {
    const src = join(root, 'sites', s.slug, 'public', s.hero);
    if (!existsSync(src)) problems.push(`${at}: hero not found at sites/${s.slug}/public/${s.hero}`);
    else s.__heroSrc = src;
  }
}

if (problems.length) fail(problems.join('\n    '));

mkdirSync(DATA, { recursive: true });
mkdirSync(OUT, { recursive: true });

// --- derive imagery -------------------------------------------------------
let built = 0;
let reused = 0;

for (const s of sites) {
  const src = s.__heroSrc;
  const srcTime = statSync(src).mtimeMs;

  for (const w of WIDTHS) {
    const dest = join(OUT, `${s.slug}-${w}.webp`);
    if (existsSync(dest) && statSync(dest).mtimeMs >= srcTime) {
      reused++;
      continue;
    }
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: w > 1000 ? 80 : 74, effort: 5 })
      .toFile(dest);
    built++;
  }

  // A tiny inline placeholder so cards never flash an empty box.
  const buf = await sharp(src).resize({ width: 16 }).webp({ quality: 40 }).toBuffer();
  s.blur = `data:image/webp;base64,${buf.toString('base64')}`;

  const meta = await sharp(src).metadata();
  s.aspect = +(meta.width / meta.height).toFixed(4);

  delete s.__heroSrc;
}

// --- write loader-shaped data --------------------------------------------
const order = { nocturne: 0, aubade: 1, vesper: 2, pastorale: 3, vigil: 4 };
sites.sort((a, b) => (a.shipped < b.shipped ? -1 : a.shipped > b.shipped ? 1 : order[a.series] - order[b.series]));

writeFileSync(join(DATA, 'foundry-sites.json'), JSON.stringify(sites, null, 2) + '\n');
writeFileSync(
  join(DATA, 'foundry-meta.json'),
  JSON.stringify({ studio, series, count: sites.length, updated: new Date().toISOString().slice(0, 10) }, null, 2) + '\n'
);

const counts = series.map((x) => `${x.name} ${sites.filter((s) => s.series === x.id).length}`).join(' · ');
console.log(`  ✓ registry synced — ${sites.length} sites (${counts})`);
console.log(`    imagery: ${built} derived, ${reused} already current`);
