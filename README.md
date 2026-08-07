# Foundry

A collection of bespoke digital worlds built with reverence, restraint, and
material honesty. Foundry is not a template portfolio. Each site invents a
complete place, vocabulary, photographic language, and reason to exist.

The collection now works in **five qualities of light**:

| Series | Atmosphere | Subjects |
|---|---|---|
| **Nocturnes** | Darkness, ceremony, artifacts, craft under one lamp | Heritage ateliers and houses |
| **Aubades** | Daylight, hospitality, inhabited rooms, restorative warmth | Hotels, residences, and other places to dwell |
| **Vespers** | Civil twilight, passage, discretion, light from the horizon | Things in transit; worlds built on not being seen |
| **Pastorales** | Cold bright overcast, a craft worked outdoors in snow-light | Northern outdoor trades and makers |
| **Vigils** | Maritime night, weather as material, one distant timed light | Things that exist in order to be seen |

The two series share standards, not styling. Read
[`docs/foundry-series.md`](docs/foundry-series.md),
[`docs/nocturne-taste-profile.md`](docs/nocturne-taste-profile.md), and
[`docs/aubade-taste-profile.md`](docs/aubade-taste-profile.md).

> This repo's original brief was three unrelated categories (ecommerce/SaaS/event) proving generic range. It pivoted after Suntoku and Shokunin — see [`docs/2026-07-12-repositioning-luxury-ateliers.md`](docs/2026-07-12-repositioning-luxury-ateliers.md) for the full history, including the two concepts (Roster, SIGNAL) retired in the move.

| Site | Series | What it is | Culture / place | Project |
|------|--------|------------|-----------------|---------|
| Suntoku (寸徳) | Nocturne | Hand-forged kitchen knife atelier | Japan · Sakai | [`sites/kaji`](sites/kaji) |
| Shokunin | Nocturne | Bespoke samurai ateliers | Japan · Kaga, Seki, Wajima | [`sites/shokunin`](sites/shokunin) |
| Casa Vicente | Nocturne | Family-owned boutique guitar atelier | Spain · Andalusia | [`sites/vicente`](sites/vicente) |
| Schwarzwald | Nocturne | Cuckoo clock house, est. 1854 | Germany · Black Forest | [`sites/schwarzwald`](sites/schwarzwald) |
| [Lagar do Sol](https://lagar-do-sol.vercel.app) | Aubade | Residential, collected olive-estate hotel | Portugal · Alentejo, between Estremoz and Vila Viçosa | [`sites/lagar-do-sol`](sites/lagar-do-sol) · live |
| [Aresta](https://aresta-azure.vercel.app) | Aubade | Contemporary, architecture-led hotel | Portugal · Costa Vicentina, Carrapateira | [`sites/aresta`](sites/aresta) · live |
| [Fornace alla Luna](https://alla-luna.vercel.app) | Nocturne | Murano glass furnace, one goblet atelier | Italy · Venice, Murano | [`sites/alla-luna`](sites/alla-luna) · live |
| [Auriga](https://auriga-vincent-angs-projects.vercel.app) | Vesper | Discreet private-jet charter, placeless | Three quiet fields | [`sites/auriga`](sites/auriga) · live |
| [Velum](https://velum-vincent-angs-projects.vercel.app) | Vesper | Short-field private-jet charter, alpine access | Switzerland · Genève | [`sites/velum`](sites/velum) · live |
| [Tyri](https://tyri.vercel.app) | Pastorale | Hand-hewn log yard in snow-light | Norway · Rollag, Numedal | [`sites/tyri`](sites/tyri) · live |
| [Malmfuru](https://malmfuru.vercel.app) | Nocturne | Hand-hewn log houses on a midwinter night | Norway · Nore, Numedal | [`sites/malmfuru`](sites/malmfuru) · live |
| [Bottega Sant'Agata](https://santagata.vercel.app) | Nocturne | Single-maker violin bottega, est. 1911 | Italy · Cremona, Lombardy | [`sites/santagata`](sites/santagata) · live |
| [Dar el Warda](https://dar-el-warda.vercel.app) | Aubade | Nine-room riad, courtyard as a sundial | Morocco · Marrakech medina | [`sites/dar-el-warda`](sites/dar-el-warda) · live |
| [Larès](https://lares-vincent-angs-projects.vercel.app) | Aubade | Mountain refuge, rooms by altitude and weather | Italy · Dolomites, Val Gardena | [`sites/lares`](sites/lares) · live |
| [Veta](https://veta-vincent-angs-projects.vercel.app) | Aubade | Custom surfboard shaping bay | Mexico · Oaxacan coast | [`sites/veta`](sites/veta) · live |
| [Ibushi (燻)](https://ibushi.vercel.app) | Aubade | Akiya restoration — minka in four typologies | Japan · Hida, Gifu | [`sites/ibushi`](sites/ibushi) · live |
| [Nipis](https://nipis.vercel.app) | Aubade | Bespoke barong Tagalog — piña and jusi to commission | Philippines · Lumban, Laguna | [`sites/nipis`](sites/nipis) · live |
| [Barchetta](https://barchetta.vercel.app) | Nocturne | Neapolitan sartoria — the coat opened from the inside | Italy · Naples, Chiaia | [`sites/barchetta`](sites/barchetta) · live |
| [Rosée](https://rosee-omega.vercel.app) | Aubade | Single-perfumer house — the field behind the bottle | France · Plascassier, Grasse | [`sites/rosee`](sites/rosee) · live |
| [Traccia](https://traccia-telai.vercel.app) | Pastorale | Steel frame builder — the road writes the specification | Italy · Edolo, Val Camonica | [`sites/traccia`](sites/traccia) · live |
| Fàire | Vigil | Lighthouse keeper's house — a light that counts | Scotland · Rubha na Fàire, Wester Ross | [`sites/faire`](sites/faire) |
| [Tsutsumiya (包屋)](https://tsutsumiya.vercel.app) | Nocturne | Wrapping house — the cloth decides what you may take | Japan · Itachibori, Osaka | [`sites/tsutsumiya`](sites/tsutsumiya) · live |

Each site is **fully self-contained** — its own stack, its own assets, its own `package.json`. They never import from each other. That separation is the point: it's what keeps each craft's identity distinct rather than collapsing into one house style.

The current build sequence is documented in
[`docs/2026-07-15-aubade-boutique-hotel-brief.md`](docs/2026-07-15-aubade-boutique-hotel-brief.md)
and
[`docs/2026-07-16-aubade-contemporary-hotel-brief.md`](docs/2026-07-16-aubade-contemporary-hotel-brief.md).

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
- **`shot-el.mjs`** — screenshots one element *after driving the page*, for proving a signature interaction actually changes what it claims to.
  ```
  node tools/shot-el.mjs http://localhost:4321/ shots/a.png "#svg" '[{"click":"input[value=x]"}]' 1440
  ```
- **`shot-nojs.mjs`** — full-page capture with JavaScript disabled, for the "complete with JS off" floor.
  ```
  node tools/shot-nojs.mjs http://localhost:4321/ shots/nojs.png 1440
  ```

## Deploy

One repo → one independent Vercel project per site, each with its **Root Directory** set to a `sites/*` folder. Each gets its own framework detection, env vars, and domain. Optional per-project "Ignored Build Step" (`git diff --quiet HEAD^ HEAD -- sites/<name>`) skips rebuilds when that folder didn't change.
