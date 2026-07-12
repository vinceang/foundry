#!/usr/bin/env node
// Foundry full-page screenshot — playwright-core driving the installed Chrome.
// Scrolls the page first (so IntersectionObserver reveals fire), waits for
// fonts/images, then captures a full-page PNG.
//
// Usage:
//   node tools/shot-full.mjs <url> <out.png> [width] [height]
//   node tools/shot-full.mjs http://localhost:4321 shots/full.png 1440 900

import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const [url, out = 'shot-full.png', width = '1440', height = '900'] = process.argv.slice(2);
if (!url) {
  console.error('Usage: node tools/shot-full.mjs <url> <out.png> [width] [height]');
  process.exit(1);
}

mkdirSync(dirname(resolve(out)), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: +width, height: +height } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);

// walk down the page so scroll-triggered reveals fire, then return to top.
// Kill smooth-scrolling first or the walk never actually reaches the bottom.
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 140));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
});
await page.waitForTimeout(1800); // let reveal transitions settle

await page.screenshot({ path: resolve(out), fullPage: true });
await browser.close();
console.log(`wrote ${out} (full page @ ${width}px wide)`);
