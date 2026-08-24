#!/usr/bin/env node
// Read a built site the way a registrar needs to read it: every section with
// its y offset and height, plus the whole page as text.
//
// Both halves exist for the same reason. Choosing a portfolio tile means
// choosing a scroll offset, and guessing offsets by eye costs a screenshot
// round-trip each time. Writing a case study means quoting the site's own
// words rather than inventing near-misses of them.
//
//   node tools/probe-sections.mjs <url>
import { chromium } from 'playwright-core';

const url = process.argv[2];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo({ top: y, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 100));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
});
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('section, header, main > *, footer').forEach((el) => {
    const r = el.getBoundingClientRect();
    const h = el.querySelector('h1, h2, h3');
    out.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || '',
      cls: (el.className || '').toString().slice(0, 50),
      y: Math.round(r.top + window.scrollY),
      h: Math.round(r.height),
      heading: (h?.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
    });
  });
  return { docHeight: document.body.scrollHeight, sections: out, title: document.title };
});
console.log(JSON.stringify(info, null, 1));
console.log('=== TEXT ===');
console.log((await page.evaluate(() => document.body.innerText)).replace(/\n{3,}/g, '\n\n'));
await browser.close();
