import { chromium } from 'playwright-core';
const b = await chromium.launch({ channel:'chrome', headless:true });
const p = await b.newPage({ viewport:{width:1440, height:900} });
await p.goto(process.argv[2], { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
console.log(await p.evaluate(()=>{
  const el=document.querySelector('.plate');
  return el.outerHTML.slice(0,700);
}));
await b.close();
