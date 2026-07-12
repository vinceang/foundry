# Foundry

Four award-caliber websites, built as separate showcases of range — deliberately **not** a matched set. Different palettes, different type, different energy. Shokunin and Kaji share an ancestry (Japanese craft, built by two parallel sessions) and are kept as a deliberate diptych — same reverence, different materials, type, and mechanics. The other two go somewhere else entirely.

| Site | What it is | Lives in |
|------|-----------|----------|
| Shokunin | Bespoke samurai ateliers — lacquer dark, smoked gold, Marcellus/Manrope | [`sites/shokunin`](sites/shokunin) |
| Suntoku (寸徳) | Hand-forged kitchen knife atelier — sumi ink, washi paper, vermilion, Shippori Mincho; ships to suntoku.com | [`sites/kaji`](sites/kaji) |
| Roster (SaaS) | Hire AI teammates in plain English — warm, human, calm-premium (in planning) | [`sites/saas`](sites/saas) |
| SIGNAL (Event) | Experimental music + light-art festival — loud, maximal (concept TBD) | [`sites/event`](sites/event) |

Each site is **fully self-contained** — its own stack, its own assets, its own `package.json`. They never import from each other. That separation is the point: it's what keeps distinct identities from collapsing into one house style.

## Why no shared design system

The value of this collection is range. A shared token set / component library would pull the three toward a single look — the exact "generic template" failure to avoid. The only thing shared here is **build tooling**, never design.

## tools/

Non-design engineering scaffolds, shared across all sites.

- **`gen-image.mjs`** — generates real imagery via OpenAI gpt-image. Key read from `~/.config/site-assets/openai.key` (outside the repo).
  ```
  node tools/gen-image.mjs --prompt "..." --out sites/kaji/public/hero.png --size 1536x1024 --quality high
  ```
- **`shot.mjs`** — screenshots a live render for the design critique loop (headless Chrome, no deps).
  ```
  node tools/shot.mjs http://localhost:5173 shots/pass1.png 1440 900
  ```
- **`shot-full.mjs`** — full-page (scrolled) capture via playwright-core + installed Chrome; scrolls first so reveal animations fire.
  ```
  node tools/shot-full.mjs http://localhost:4321/?nofx shots/full.png 1440
  ```
- **`shot-clip.mjs`** — full-resolution horizontal band of a page (section-by-section review).
  ```
  node tools/shot-clip.mjs http://localhost:4321/?nofx shots/sec.png 1800 900 1440
  ```

## Deploy

One repo → one independent Vercel project per site, each with its **Root Directory** set to a `sites/*` folder. Each gets its own framework detection, env vars, and domain. Optional per-project "Ignored Build Step" (`git diff --quiet HEAD^ HEAD -- sites/<name>`) skips rebuilds when that folder didn't change.
