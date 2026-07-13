# Foundry

A collection of bespoke, ultra-refined **heritage-craft atelier** sites — each one an ancestral family business, in a culture and craft Vince genuinely loves, built with the same reverence, restraint, and material honesty. Not a range-of-categories portfolio; a range of *cultures and crafts*, all in one register: quiet luxury, real domain authenticity, no pastiche. Distinctiveness comes from palette, type, and imagery drawn from the specific craft and place — not from breaking the register.

> This repo's original brief was three unrelated categories (ecommerce/SaaS/event) proving generic range. It pivoted after Suntoku and Shokunin — see [`docs/2026-07-12-repositioning-luxury-ateliers.md`](docs/2026-07-12-repositioning-luxury-ateliers.md) for the full history, including the two concepts (Roster, SIGNAL) retired in the move.

| Site | What it is | Culture / craft | Lives in |
|------|-----------|------------------|----------|
| Suntoku (寸徳) | Hand-forged kitchen knife atelier — sumi ink, washi paper, vermilion, Shippori Mincho; ships to suntoku.com | Japan · Sakai | [`sites/kaji`](sites/kaji) |
| Shokunin | Bespoke samurai ateliers — lacquer dark, smoked gold, Marcellus/Manrope | Japan | [`sites/shokunin`](sites/shokunin) |
| Vicente *(Lutier)* | Family-owned boutique guitar atelier, the Vicente family — planned EN/ES language switching | Spain · Andalusia (Córdoba) | [`sites/vicente`](sites/vicente) — not started |
| *(name TBD)* | Cuckoo clock house — planned EN/DE language switching | Germany · Black Forest / Bavaria | [`sites/schwarzwald`](sites/schwarzwald) — not started |

Each site is **fully self-contained** — its own stack, its own assets, its own `package.json`. They never import from each other. That separation is the point: it's what keeps each craft's identity distinct rather than collapsing into one house style.

## Why no shared design system

Even within one register, a shared token set / component library would pull every site toward the same look — the "generic template" failure the original brief warned against, just relocated. Each atelier's palette, type, and imagery come from its own culture and craft. The only thing shared here is **build tooling**, never design.

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
