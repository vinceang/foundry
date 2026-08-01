#!/usr/bin/env node
// Foundry no-JavaScript screenshot — verifies the "complete with JS off" floor.
// Usage: node tools/shot-nojs.mjs <url> <out.png> [width]
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
const [url, out = 'nojs.png', width = '1440'] = process.argv.slice(2);
mkdirSync(dirname(resolve(out)), { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({ javaScriptEnabled: false, viewport: { width: +width, height: 1000 } });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: resolve(out), fullPage: true });
console.log(`wrote ${out} (JS disabled)`);
await browser.close();
