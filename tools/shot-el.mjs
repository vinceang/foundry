#!/usr/bin/env node
// Foundry element screenshot with optional interaction — for verifying that a
// signature interaction actually CHANGES what it claims to change.
//
// Usage:
//   node tools/shot-el.mjs <url> <out.png> <selector> ['[{"click":"..."},{"set":"#r","value":"3"}]'] [width]
//
// Actions run in order before the shot:
//   {"click": "css"}            — click it
//   {"set": "css", "value": "…"} — set value + fire input & change
//   {"wait": 500}                — pause ms

import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const [url, out = 'shot-el.png', sel = 'body', actionsJSON = '[]', width = '1440'] =
  process.argv.slice(2);
if (!url) {
  console.error('Usage: node tools/shot-el.mjs <url> <out.png> <selector> [actionsJSON] [width]');
  process.exit(1);
}

mkdirSync(dirname(resolve(out)), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: +width, height: 1000 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);

for (const a of JSON.parse(actionsJSON)) {
  if (a.wait) { await page.waitForTimeout(a.wait); continue; }
  if (a.click) { await page.click(a.click); continue; }
  if (a.set) {
    await page.$eval(
      a.set,
      (el, v) => {
        el.value = v;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      },
      a.value,
    );
  }
}
await page.waitForTimeout(900);

const el = await page.$(sel);
if (!el) { console.error(`No element matched ${sel}`); process.exit(1); }
await el.screenshot({ path: resolve(out) });
console.log(`wrote ${out}  (${sel})`);
await browser.close();
