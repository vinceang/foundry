#!/usr/bin/env node
// Foundry filmstrip — samples frames across a scroll or an interaction so a
// screenshot critic can judge motion. A still cannot see a signature that moves;
// this is what you hand it instead.
//
// Unlike shot-full.mjs this waits for `load` rather than `networkidle`, because
// a page with continuous motion never goes idle and networkidle simply times out.
//
// Usage:
//   node tools/shot-strip.mjs <url> <outPrefix> [options]
//
//   --mode scroll|action     what to sample across          (default: scroll)
//   --frames N               how many frames                (default: 6)
//   --width N                viewport width                 (default: 1440)
//   --height N               viewport height                (default: 900)
//   --at y1,y2,...           scroll mode: explicit offsets, overrides --frames
//   --actions '<json>'       action mode: steps to run, one frame after each
//   --settle N               ms to wait before each frame    (default: 450)
//
// Action steps (same vocabulary as shot-el.mjs, plus wait/scroll):
//   {"click":"css"}  {"hover":"css"}  {"set":"css","value":"…"}
//   {"scroll": 1200}  {"wait": 800}
//
// Examples:
//   node tools/shot-strip.mjs http://localhost:4321 shots/strip-home
//   node tools/shot-strip.mjs http://localhost:4321 shots/strip-ring \
//     --mode action --actions '[{"scroll":3600},{"hover":".ring"},{"set":"#year","value":"1889"},{"wait":600}]'

import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const argv = process.argv.slice(2);
const [url, outPrefix] = argv;
if (!url || !outPrefix) {
  console.error('Usage: node tools/shot-strip.mjs <url> <outPrefix> [--mode scroll|action] [--frames N] [--at y1,y2] [--actions JSON] [--width N] [--height N] [--settle N]');
  process.exit(1);
}

const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : argv[i + 1];
};

const mode = flag('mode', 'scroll');
const frames = +flag('frames', 6);
const width = +flag('width', 1440);
const height = +flag('height', 900);
const settle = +flag('settle', 450);
const at = flag('at', null);
const actionsRaw = flag('actions', null);

mkdirSync(dirname(resolve(outPrefix)), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width, height } });

await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(2500);
await page.evaluate(() => document.fonts.ready);

// Walk the page once so scroll-triggered reveals have fired before we sample.
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.8;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 320));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(900);

const pageHeight = await page.evaluate(() => document.body.scrollHeight);
console.log(`page height: ${pageHeight}px  ·  viewport ${width}×${height}  ·  mode ${mode}`);

const shoot = async (label, i) => {
  const out = `${outPrefix}-${String(i).padStart(2, '0')}.png`;
  await page.waitForTimeout(settle);
  await page.screenshot({ path: out });
  console.log(`  frame ${String(i).padStart(2, '0')}  ${label}  →  ${out}`);
};

if (mode === 'action') {
  if (!actionsRaw) {
    console.error('--mode action requires --actions with a JSON array of steps');
    process.exit(1);
  }
  const steps = JSON.parse(actionsRaw);
  let i = 1;
  await shoot('initial', i++);
  for (const step of steps) {
    if (step.click)  await page.click(step.click);
    if (step.hover)  await page.hover(step.hover);
    if (step.scroll !== undefined) await page.evaluate(y => window.scrollTo(0, y), step.scroll);
    if (step.wait)   await page.waitForTimeout(step.wait);
    if (step.set) {
      await page.evaluate(({ sel, value }) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.value = value;
        el.dispatchEvent(new Event('input',  { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, { sel: step.set, value: step.value });
    }
    await shoot(JSON.stringify(step), i++);
  }
} else {
  // scroll mode — explicit offsets, or evenly spaced down the page
  const offsets = at
    ? at.split(',').map(Number)
    : Array.from({ length: frames }, (_, k) =>
        Math.round((pageHeight - height) * (k / Math.max(1, frames - 1))));
  let i = 1;
  for (const y of offsets) {
    await page.evaluate(v => window.scrollTo(0, v), y);
    await shoot(`y=${y}`, i++);
  }
}

await browser.close();
console.log('done. hand the frames to wow-check in order.');
