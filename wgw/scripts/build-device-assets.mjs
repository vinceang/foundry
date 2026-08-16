#!/usr/bin/env node
/**
 * Derive the /responsive page's device plates.
 *
 * The masters in assets-src/responsive/ are 3D renders of suntoku.vercel.app,
 * one per device, produced by the device-mockup MCP server. Each was captured
 * at its device's own native viewport, so the phone really is showing the
 * mobile layout rather than a shrunk desktop one — that fact is the whole
 * argument of the page, and it would be lost if these were one screenshot
 * scaled three ways.
 *
 * Alpha is preserved: the plates sit directly on the register's ground, which
 * changes colour with the quality of light, so a baked-in background would be
 * wrong in four registers out of five.
 *
 * Widths are per-device rather than uniform. A phone plate is never displayed
 * as wide as a laptop plate, so giving them a common ladder would ship pixels
 * nothing can use.
 *
 * Re-run with `node scripts/build-device-assets.mjs`. Not wired into `sync`:
 * these masters change when the mockups are regenerated, which is a deliberate
 * act, not something a scheduled build should redo.
 */
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const wgw = resolve(here, '..');

const SRC = join(wgw, 'assets-src', 'responsive');
const OUT = join(wgw, 'public', 'responsive');

/** Displayed width caps, largest first. The 2x column is for dense screens. */
const PLATES = {
  laptop: [1600, 900],
  tablet: [1100, 640],
  phone: [760, 440],
};

if (!existsSync(SRC)) {
  console.error(`Missing ${SRC}. The device masters have to exist before they can be derived.`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

const found = readdirSync(SRC).filter((f) => f.endsWith('.png'));
let wrote = 0;

for (const [name, widths] of Object.entries(PLATES)) {
  const src = join(SRC, `${name}.png`);
  if (!found.includes(`${name}.png`)) {
    console.error(`Missing master: assets-src/responsive/${name}.png`);
    process.exit(1);
  }

  for (const w of widths) {
    const dest = join(OUT, `${name}-${w}.webp`);
    const info = await sharp(src)
      // The renderer frames each device inside a fixed canvas, which leaves a
      // different amount of transparent air around each one. Left in, that air
      // becomes layout: a CSS width would be sizing an empty box, the declared
      // aspect ratio would not describe the device, and the three plates would
      // refuse to sit on a common baseline. Trim to the alpha bounding box so
      // the image is the device and nothing else.
      .trim({ threshold: 1 })
      .resize({ width: w, withoutEnlargement: true })
      // Alpha survives; effort 6 buys a few percent for a one-off build cost.
      .webp({ quality: 82, alphaQuality: 90, effort: 6 })
      .toFile(dest);
    console.log(`  ${name}-${w}.webp  ${(info.size / 1024).toFixed(0)}KB  ${info.width}x${info.height}`);
    wrote++;
  }
}

console.log(`\n${wrote} plates derived into public/responsive/`);
