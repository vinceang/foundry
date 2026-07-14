# VICENTE · LUTIER — Design System

Casa Vicente · classical & flamenco guitars, Cuesta de Gomérez 12, Granada, since 1932.
Master luthier **Cesar Vicente**; his sons **Leonardo** (rosettes/marquetry) and **Lorenzo** (sides/bending). The wordmark is Vince's own SVG (`assets/Vicente.svg` master; `public/vicente-mark.svg` is the `currentColor` version used inline).
This document is the aesthetic source of truth. Extend the site *from* it.

## The one-line brief

**A family workshop, not a boutique.** Warmth over austerity: where Suntoku is a museum vitrine and Shokunin a lacquered institution, Vicente is a room that smells of wood shavings and shellac. Everything should feel *touched by hand* — including the type.

## How this site stays distinct from its siblings (hard-won — respect it)

The identity went through three accent iterations because v1 read too close to Suntoku (same dark/cream/red-serif chord). Final chord, chosen by Vince:

| Lever | Suntoku | Shokunin | **Vicente** |
|---|---|---|---|
| Dark ground | ink/sumi (blue-black) | lacquer | **café-tobacco brown** |
| Accent | vermilion red | smoked gold | **Seville naranja #ff5600** |
| Display type | Shippori Mincho (upright) | Marcellus caps | **Averia Serif Libre (worn, hand-touched; italic-led)** |
| Labels | monospace | mono/caps | **NO monospace anywhere — letterspaced caps EB Garamond** |
| Image frames | rect gallery mats | rect | **Moorish horseshoe arches** |
| Section seam | drawn hamon wave | — | **drawn lacería zigzag (tile-border)** |
| Ghost layer | vertical CJK kanji | — | **giant italic Spanish words** (a mano, familia, Granada, Vicente) |

Never let an accent drift back toward red, and never introduce a monospace — those are the two levers that made it "another Suntoku."

## Tokens (in `src/styles/global.css` `:root`)

- **nogal** darks: `#1c110a` / `#261811` / `#332318` — brown, wood, never blue-black
- **marfil** lights: `#f1e9d6` / `#e7dcc2` (arch card mats) / `#f5efdf` (paper)
- **naranja**: `#ff5600` (pure — dark ground only, where it burns like an ember) · `#ff7433` (bright text-on-dark) · `#b23a00` (burnt — the ONLY orange allowed as text on ivory; pure ff5600 fails contrast there)
- **`--seed-garnet` `#9e2b3c`** — used in exactly ONE place: the footer seed dot. It is the pomegranate of Granada, the only red on the page. Do not use it elsewhere; do not delete it.
- Type: `--display` Averia Serif Libre (300/400/700 + italics; CSS weight 500 intentionally falls back to 400) · `--body` EB Garamond. Italic display is the house voice — headings lean italic, accent words always italic.
- `--arch: 999px 999px 0 0` — one radius rules every image frame (portraits, guitars, hero arch on luthier pages).

## Signature elements

- **Horseshoe arch frames** — people and product imagery on cards and mats. Product images `mix-blend-mode: multiply` onto `--marfil-2` mats. *Exception (Vince, 2026-07-13): luthier-page hero portraits run full-bleed in their column — the arch read timid at that scale.*
- **Lacería divider** — drawn-on-scroll double zigzag (naranja over ivory echo) at the process seam. One per page maximum.
- **La etiqueta composite** (`public/etiqueta.png`) — Vince's REAL wordmark composited in-browser onto a generated blank-label soundhole macro (multiply at .88; the photo's bright strings read over the ink naturally). Recipe in `docs` history / scratchpad `etiqueta-shot*.mjs`. **Never ask an image model to render the logo** — it will garble it; composite the SVG.
- **Language toggle** EN·ES — every page, both locales authored by hand in `src/i18n.ts` (Spanish is the house's first language; never machine-translate).
- **Guitar pages** (`/guitars/<slug>/`, `/es/guitarras/<slug>/`) — the inverse of the luthier pages: body on nogal left, the guitar on a full-bleed **marfil mat** right (`object-fit: contain` — the whole instrument or nothing; multiply hides the letterbox). Each guitar has a voice-quote like the luthiers, *la voz* narrative, and **la ficha** — specs as a page from the house book (letterspaced caps keys, hairline rows), never a data table. Lacería seam sits at the ficha; maker section links to his profile. Home cards link via `.card-link` stretched overlay — never turn card elements into anchors.
- Hero: Higgsfield macro-glide film (Seedance 2.0 from the approved still), poster fallback, reduced-motion safe.

## Asset recipes

- Guitars (catalog): gpt-image-2, portrait 1024×1536, warm aged-ivory seamless backdrop, **anatomy clause is mandatory**: *"long slender neck joining the body exactly at the twelfth fret, nineteen frets total, slotted headstock with three tuners per side, ONE single bridge with tie-block, six nylon strings."* Vince reads fret joins — an 11-fret join got a candidate rejected. Inspect every render before use.
- Portraits: warm window-light chiaroscuro, half-shadow, dark linen/canvas aprons, workshop bokeh with hanging guitars. Vince has face veto.
- Beware real-world names: one workshop render produced a legible "Manuel Reyes" poster (a real Granada luthier) — cropped out via `object-position: 30% center`. Check generated text in backgrounds.

## Voice

English warm and declarative with one poetic turn per section; Spanish is idiomatic Andalusian-flavored Castilian, formal *usted* in commerce copy. Real domain terms only: solera, varetaje/fan bracing, golpeador, goma laca, blanca/negra, alicatado. Prices in euros, Spanish formatting on /es/ (`12.800 €`).

## Revisit backlog (Vince: "I will revisit at some point for additional details")

1. Etiqueta composite: at full zoom, ink still slightly overrides string highlights — a string-aware overlay (pixel-sampled) was attempted and time-boxed; refine if the image gets used larger than ~700px.
2. La Blanca's arch mat reads slightly cooler than its siblings (its photo backdrop) — could regenerate or color-match.
3. Second insignia surface: the headstock logo composite was planned but not built.
4. Workshop image: consider regenerating without any legible poster text at all (currently crop-managed).
5. Possible portrait-orientation hero film variant for mobile (current 16:9 crops tight on 390px).
6. Commission form is a dead `#` link — real form/flow when the site grows details.
