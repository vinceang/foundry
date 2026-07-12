#!/usr/bin/env node
// Foundry clipped screenshot — captures a horizontal band of the page at
// full resolution (for section-by-section design review).
//
// Usage:
//   node tools/shot-clip.mjs <url> <out.png> <yOffset> [height] [width]
//   node tools/shot-clip.mjs http://localhost:4321/?nofx shots/sec2.png 1800 900 1440

import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const [url, out = 'shot-clip.png', yOff = '0', height = '900', width = '1440'] = process.argv.slice(2);
if (!url) {
  console.error('Usage: node tools/shot-clip.mjs <url> <out.png> <yOffset> [height] [width]');
  process.exit(1);
}

mkdirSync(dirname(resolve(out)), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: +width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
});
await page.waitForTimeout(1200);

await page.screenshot({
  path: resolve(out),
  fullPage: true,
  clip: { x: 0, y: +yOff, width: +width, height: +height },
});
await browser.close();
console.log(`wrote ${out} (y=${yOff}, ${width}x${height})`);
