# Handoff — three sites with real order flows (2026-08-01)

Three new Foundry sites, built in one session against a single brief: **each
one takes a real order**, in the spirit of commitment 7 ("the order matches the
price"). Two were named by Vince; the third was chosen from the backlog.

| Site | Series | Subject | Live |
|---|---|---|---|
| **Nipis** | Aubade | Bespoke barong Tagalog — Lumban, Laguna | https://nipis.vercel.app |
| **Barchetta** | Nocturne | Neapolitan sartoria — Chiaia, Naples | https://barchetta.vercel.app |
| **Rosée** | Aubade | Single-perfumer house — Plascassier, Grasse | https://rosee-omega.vercel.app |

## The third subject, and a stale backlog

Vince's third pick was the Murano glass furnace. It is **already built** —
Fornace alla Luna, `sites/alla-luna`, live. The Proposed section of the backlog
had also gone stale on the private jet charter (built twice, as Auriga and
Velum) and the Nordic log cabin maker (built twice, as Tyri and Malmfuru). All
three stale entries have now been removed from Proposed.

The substitute was the **niche fragrance atelier**, chosen because it is the
only entry in the queue whose product is a true catalogue rather than a
measurements-driven commission — which gave the batch one real cart alongside
two configurators.

## Three different order shapes, on purpose

The brief was "an e-commerce flow for small shops," and the three sites
deliberately answer it differently rather than shipping one form three times:

1. **Nipis — a configurator that prices itself.** Four controls (cloth, motif,
   occasion, calado density) draw the *pechera* and compute stitch hours, panel
   drop, wait in weeks, and price (₱9,800–₱119,100). "Simulan ang barong na
   ito" carries the spec into a four-fieldset commission form.
2. **Barchetta — a configurator that prices an absence.** Construction, canvas,
   shoulder and pick-stitch rebuild the coat's interior and compute finished
   weight, hand-hours, fittings, and price (€2,930–€4,700). Its best fact came
   out of the model: the *lined* coat is the cheapest and the *unlined* one the
   dearest, because removing the lining adds fourteen hours of hand-finishing.
3. **Rosée — an actual cart.** Five priced lines with quantity steppers and a
   live subtotal (€28–€210). This is the most straightforwardly retail thing in
   the collection.

None captures a card; all three hand off by `mailto` with
`enctype="text/plain"` as a legible order request.

## Two register calls worth keeping

Both went against what the backlog proposed, and both were argued from the
subject's native hour rather than from the category:

- **Barchetta is Nocturne, not Vesper.** Nothing in a sartoria is in transit.
  The subject is the coat's *interior* — canvas, haircloth, pick stitch — which
  only ever exists on a lit board in a dark room.
- **Rosée is Aubade, not Nocturne.** Jasmine is picked before sunrise because
  heat drives the oil off within the hour. Photographing a perfume house dark
  would document its advertising rather than its making, and would have
  produced the single most templated look in luxury.

Nipis's Aubade was forced rather than chosen: piña is *graded by holding it to
a window*, so a dark register would make the product illegible.

## Signature interactions — none of them time-of-day

Per the standing warning about time/light fatigue, all three interrogate the
subject on another axis, and all three are fused with the order:

- **Nipis, "Ang pechera"** — the panel drawn on a *translucent* ground, over
  the wearer's camisa de chino, so changing cloth grade visibly changes how
  much of the body reads through. Calado is cut out of the cloth with an SVG
  mask (threads drawn out in both directions); sombrado sits *under* the cloth
  because it is stitched on the reverse.
- **Barchetta, "L'interno"** — the coat held open, right front from outside and
  left front swung open to show its strata. The lining visibly closes over the
  canvas as the construction changes.
- **Rosée, "Ce qu'il y a dedans"** — deliberately *not* the scent pyramid. The
  page works backwards through real Grasse yields to the raw plant matter
  behind the chosen bottle, and fills a fixed frame with a five-petal glyph at
  25 flower heads a mark, with the frame's capacity ghosted behind it.

## Floors — two real failures found by measuring

Neither would have been caught by eye:

1. **JS-off was broken on Nipis.** `.rise` was `opacity: 0` by default and only
   revealed by script, so a visitor with JavaScript off got a blank page. The
   reveal is now gated behind an `html.js` class set by an inline head script,
   and the pattern was carried into both siblings from the start.
2. **Contrast failed on nine values across the three sites** when computed
   rather than eyeballed — captions and ledes on the *secondary* ground (which
   is always the darker one) and, on Barchetta, the coral accent as link text
   and as a button ground. Tokens were re-solved against the darker ground in
   each case. Every value now clears 7:1 for body/lede and 4.5:1 for
   captions/labels on **both** grounds.

A third bug was found by a scan rather than a screenshot: **Astro collapses the
whitespace between a word and an adjacent inline `<em>`/`<span>` when a line
break falls between them**, producing "beseen through", "iskiskis",
"Thecoffret", "against€210". A regex over the built `dist/index.html` of all
three sites now reports zero suspect joins — worth running on future builds.

## New tooling

- **`tools/shot-el.mjs`** — screenshots one element after driving the page
  (clicks, value sets). Used to *prove* each signature changes what it claims:
  Nipis's jusi vs liniwan sheerness, Barchetta's three constructions, Rosée's
  three fields.
- **`tools/shot-nojs.mjs`** — full-page capture with JavaScript disabled, which
  is what caught the Nipis floor failure.

Each site's `optimize.sh` also now enforces the ≤500KB cap by stepping quality
down, and carries a luma threshold tuned to *its own* register (Nipis 90 for
bright backlit Aubade, Barchetta 20 for Nocturne, Rosée 65 because its hour is
before sunrise). Inheriting a sibling's threshold flags correct plates.

## Imagery

31 finals across the three sites, all generated with `gpt-image-2` behind one
constant art-direction phrase per site, all ≤500KB, every one carrying at least
one human-presence shot (hands at the kiskis and Estrella at the frame; hands
basting and Ciro at the board; the picker's hands and Margaux at the organ).

Two of Barchetta's rail coats were re-generated rather than having their copy
rewritten: they were described as finished indigo and pale grey but illustrated
with a basted coat and a brown shoulder. The imagery proves the copy, so the
imagery was the thing to fix.
