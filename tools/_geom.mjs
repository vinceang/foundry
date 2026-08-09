import { chromium } from 'playwright-core';
const width = +(process.argv[3] || 1440);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(process.argv[2] || 'http://localhost:4330/?nofx', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const data = await page.evaluate(() => {
  const out = [];
  const sel = 'section, h1, h2, h3, h4, p, figure, img, svg, ul, ol, li, button, input, select, label, a, table, .rail, header, footer, form, fieldset, div';
  document.querySelectorAll(sel).forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return;
    const cs = getComputedStyle(el);
    out.push({
      tag: el.tagName.toLowerCase(),
      cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 60) : '',
      id: el.id,
      x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height),
      fs: cs.fontSize, lh: cs.lineHeight, ff: cs.fontFamily.split(',')[0], fw: cs.fontWeight, ls: cs.letterSpacing,
      color: cs.color, bg: cs.backgroundColor,
      mt: cs.marginTop, mb: cs.marginBottom, pt: cs.paddingTop, pb: cs.paddingBottom,
      text: (el.children.length === 0 ? (el.textContent || '').trim().slice(0, 60) : ''),
    });
  });
  return { out, sh: document.documentElement.scrollWidth, ch: document.documentElement.clientWidth, bodyH: document.body.scrollHeight };
});
console.log(JSON.stringify(data));
await browser.close();
