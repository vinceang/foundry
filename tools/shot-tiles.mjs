#!/usr/bin/env node
// Capture portfolio tile frames from a live Foundry site: viewport shots at
// named scroll offsets, at the tile's own 1280x720 aspect, so the portfolio
// converter downscales instead of cropping.
//
// The whole page is walked once before anything is framed. Reveal animations
// and lazy images are keyed to intersection, so a shot taken by jumping
// straight to an offset catches the site mid-reveal — half-drawn colour bars
// over the photography, which is what the first pass of this produced.
//
//   node tools/shot-tiles.mjs <url> <outDir> <y1> <y2> <y3> <y4>
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const [url, outDir, ...ys] = process.argv.slice(2);
mkdirSync(resolve(outDir), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);

// Walk the whole page once so every reveal has fired before we frame anything.
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 120));
  }
});
await page.waitForTimeout(600);

for (const [i, y] of ys.entries()) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), +y);
  await page.waitForTimeout(2600);
  const out = resolve(outDir, `slot-${i + 1}.png`);
  await page.screenshot({ path: out });
  console.log(`  ✓ slot-${i + 1} @ y=${y}`);
}

await browser.close();
