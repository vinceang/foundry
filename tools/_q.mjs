import { chromium } from 'playwright-core';
const b = await chromium.launch({ channel:'chrome', headless:true });
const p = await b.newPage({ viewport:{width:+(process.argv[3]||1440), height:900} });
await p.goto(process.argv[2], { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
const r = await p.evaluate(()=>{
  const o=[];
  document.querySelectorAll('.plate, .plate__cap, .plate__cap b, .plate__cap i, .plate__cap .p').forEach(e=>{
    const c=e.getBoundingClientRect(); const s=getComputedStyle(e);
    o.push({cls:e.className, x:+c.x.toFixed(1), y:+(c.y+scrollY).toFixed(1), w:+c.width.toFixed(1), h:+c.height.toFixed(1), pad:s.padding, fs:s.fontSize, lh:s.lineHeight, mt:s.marginTop, col:s.color, txt:(e.textContent||'').trim().slice(0,20)});
  });
  return o.slice(0,8);
});
console.log(JSON.stringify(r,null,1));
await b.close();
