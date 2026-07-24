# Bottega Sant'Agata — Design Language

The style guide for **Bottega Sant'Agata**, a single-maker violin bottega in
Cremona, on the Contrada Sant'Agata since 1911. Everything built under this
brand must pass one test: *does it feel like standing in a Cremonese workshop
after dark — one bench lamp, a spruce plate half-carved, and a maker who will
make eleven violins this year and no more?* If a screen could belong to Casa
Vicente (the Andalusian guitar house), to Fornace alla Luna (the Murano
furnace), or to a music-shop e-commerce brand, it is wrong.

Tokens live in `src/styles/global.css`; this file explains the intent. The
register is **Nocturne** — and it comes from the subject, not the bucket. A
Cremonese bench genuinely lives at night: the maker works late by one lamp,
the varnish is judged under a single warm light, and the wood's figure only
speaks when the light rakes across it. The **bench lamp is the Nocturne lamp**.

---

## How this site stays distinct from its Nocturne siblings (hard-won — respect it)

Two siblings sit dangerously close and must never be echoed:

| Lever | Casa Vicente (guitars) | Fornace alla Luna (Murano) | **Sant'Agata (violins)** |
|---|---|---|---|
| Instrument / world | Andalusian flamenco guitar | Murano glass goblet | **Cremonese classical violin** |
| City | Granada, Spain | Murano, Venice | **Cremona, Lombardy** |
| Dark ground | café-tobacco brown | cold lagoon blue-black | **pece — pitch-black walnut-brown `#0c0908`** |
| The light | Seville naranja `#ff5600` | furnace amber `#d18d3f` (orange) | **vernice — antique red-gold varnish `#c8964a` (redder, older, quieter)** |
| Display type | Averia Serif Libre (worn italic) | Cardo (Aldine roman) | **Fraunces (old-style, ink-trapped, lapidary)** |
| Body/labels | EB Garamond | Mulish | **Hanken Grotesk** |
| Signature shape | Moorish horseshoe arch | the ring (la bocca) | **the f-hole ( f-foro)** — the violin's sound hole |
| Signature interaction | (none — commission stub) | heat cooling a goblet | **the graduation map — arching thickness as a live contour field** |
| Cool second hue | — | (blue is the ground) | **abete — a cold spruce blue-grey `#1a2226`, one chapter only** |
| Order model | commission stub | letter only | **BOTH: violins by letter · bench goods by a real order form** |

The two levers that would make this "another furnace": drifting the vernice
gold toward orange (it must stay red-gold, older and dimmer than alla-luna's
`#d18d3f`), or grounding on blue-black (that is alla-luna's canale — ours is a
warm pitch-brown). And the lever that would make it "another Vicente": any
arch frame, any naranja, any Spanish. Sant'Agata speaks Italian and Cremonese.

---

## 1. Brand foundation

### Positioning

Sant'Agata is **not a shop for violins** — the instruments are not sold, they
are *commissioned*. One maker, **Tobia Ferraboschi**, third of his name at the
bench, works alone with one apprentice. He completes **eleven instruments a
year** and accepts them by letter. Design consequences:

| Fact of the world | Design consequence |
|---|---|
| One maker, eleven violins a year | Scarcity is content. The register shows what is *on the bench*, what is *promised*, what is *voiced and gone*. Never a grid of products, never pagination. |
| A violin is bespoke, and above €40,000 | Acquisition is **by letter** — "Write to the bench". No cart, no price-to-basket. |
| The bench also sells its own bows, cases, rosin, strings, shoulder rests — all well under €5,000 | These get **a real order form** — *Il banco* ("the counter"). Structured fields, a clear primary action, a mailto/endpoint handoff. On-brand, never a generic checkout. This split is the site's whole reason to exist. |
| Arching is graduated to tenths of a millimetre | **The graduation map is the signature.** A plate's thickness is revealed as a live contour field — the maker's most private knowledge, shown. |

### Vocabulary of the world

The brand's API. Cremonese/Italian terms are real and correct, glossed on
first use — never costume.

- **La bottega** — the workshop; the whole house.
- **Il banco** — literally "the bench/counter"; here, the accessories counter
  where bows, cases, rosin, and strings are ordered. (The order-form section.)
- **Il registro** — the register of instruments made and in progress. Never
  "shop", "catalogue", "products".
- **Modello** — a violin's model in the house's line (after the Cremonese
  masters the maker follows): *del Gesù*, *Amatise*, *Stradivari 1715 "Cremonese"*.
- **Instrument names** — after Cremonese light and the Po valley: *Nebbia*
  (the river fog), *Vespro* (evening), *Torrazzo* (the great bell-tower),
  *Bruma*, *Contrada*. Each with a one-line English reading.
- **La graduazione** — the graduation, the arching thicknesses of the plates.
  The signature chapter takes its name.
- **La vernice** — the oil varnish, the amber-red glaze of Cremona; twenty
  coats, a summer of drying. Also the name of the site's one metal.
- **Il tavolo armonico / il fondo** — the soundboard (spruce, *abete rosso*)
  and the back (maple, *acero*).
- **Il ricciolo** — the scroll, the volute carved at the peg-box.
- **Le effe** — the f-holes; the house mark is one of them (*l'effe*).
- Statuses: `Al banco` (on the bench) · `Promesso` (promised) · `Intonato`
  (voiced and gone). Never "in stock / sold out".
- **La stagionatura** — the seasoning; the wood rests for decades before it
  is worked. Cremonese makers still buy Val di Fiemme spruce felled in winter.

### The maker fiction

Historic Cremonese shops were known by their contrada (street) and their sign.
This bench works on the Contrada Sant'Agata, under the patron saint of the
quarter. All copy stays consistent with this table:

| Fact | Value |
|---|---|
| Founded | 1911, Contrada Sant'Agata, Cremona — the century of Cremona's revival after the great masters |
| The maker | Ferraboschi — Achille I. 1911–1949 · Guido II. 1949–1988 · **Tobia III. 1988–**, with one apprentice, Marta, at the bench since 2019 |
| The line | Eleven instruments a year; violins, with the rare viola or cello by long petition |
| The wood | Spruce (*abete rosso*) from Val di Fiemme, felled in winter and seasoned twenty years; maple (*acero*) from Bosnia for the back and scroll |
| The varnish | Oil varnish over a mineral ground; the recipe is the maker's own — twenty coats, a summer of drying, judged only by lamplight |
| The graduation | Arching worked to a tenth of a millimetre; the plate is tap-tuned by ear, thinned until it *speaks* |

---

## 2. Color

The world is a Cremonese bench at night: **the room is pitch-brown dark; the
varnish is the one light; the spruce is the voice.**

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--pece` | `#080605` | Deepest ground: footer approach, between-chapters void ("pece" = pitch) |
| `--legno` | `#0c0908` | Default page ground — pitch-brown walnut dark, warm. *Not* neutral black, *not* alla-luna's blue canale, *not* Vicente's café-brown (lighter/redder) |
| `--legno-2` / `--legno-3` | `#141010` / `#1d1613` | Raised surfaces, cards, panels |
| `--abete` | `#141b1f` | Cold spruce blue-grey — the one cool chapter (the graduation, where the plate is measured, not varnished). At most one abete chapter per page |
| `--vernice` | `#c8964a` | Antique red-gold varnish — the light. Labels, hairlines, marks, one primary button per view. Redder & older than alla-luna's amber |
| `--vernice-viva` | `#e9c079` | Varnish at full lamplight: hovers, active, glints |
| `--vernice-fonda` | `#8a6531` | Varnish in shadow; selection background |
| `--vernice-faint` | `rgba(200,150,74,.32)` | Hairline varnish: frame fittings, dormant marks |
| `--avorio` | `#ece3d2` | Primary text — the ivory of the ebony nut, aged spruce |
| `--avorio-dim` | `#a89e8d` | Body copy, secondary |
| `--avorio-faint` | `rgba(236,227,210,.42)` | Whisper text |
| `--line` / `--line-soft` | vernice/avorio at ~.2/.09 alpha | Rules and borders |

### Rules

1. **Varnish is lamplight, not paint.** It appears where the bench lamp would
   catch: labels, hairlines, the effe mark, the contour lines of the
   graduation map, one primary button. If varnish exceeds ~5% of the frame it
   has become jewelry; pull back. The one sanctioned large use is the
   graduation map's contour field — those lines *are* the subject.
2. **One cool step, motivated.** Abete blue-grey appears in exactly one
   chapter — La Graduazione — because that is where the plate is measured with
   a caliper under cold north light, not judged under the warm varnish lamp.
   It is the inversion inside the page: everywhere else warm, there cold.
   Never a third temperature.
3. **Text sits on darkness, never on varnish** except inside the primary
   button (`#120c05` on `--vernice`).
4. **Forbidden:** any orange leaning toward alla-luna's `#d18d3f`, any blue
   ground (alla-luna's), any naranja or Spanish reference (Vicente's), pure
   `#000`/`#fff`, saturated accents, decorative gradients. Gradients exist
   only as the graduation map's contour shading and photographic vignettes.

---

## 3. Typography

Two voices — the bench is quiet:

| Face | Token | Role | Rules |
|---|---|---|---|
| **Fraunces** | `--display` | Display: instrument names, headings, measurements, years, prices. Italic for one-line readings and Italian terms. | Old-style with real ink-traps and lapidary contrast — the carved dignity of a violin scroll. Regular weight (opsz high for headings), tracking `.005–.02em`. Distinct from Vicente's worn Averia and alla-luna's Aldine Cardo. |
| **Hanken Grotesk** | `--body` | Body & labels | Body at 300, 16px/1.7. Labels: 10.5px, 600, tracking `.3–.42em`, uppercase, usually `--vernice`. A humanist grotesque, quieter than Manrope, warmer than Inter. |

### Hierarchy recipe

Every chapter opens with the cadence:

```
LABEL IN VARNISH TRACKED CAPS            ← .label (the whisper)
Large Fraunces statement, one or two lines
Hanken body in --avorio-dim, 55–60ch max
```

Numbers that matter (thicknesses, coats, years, prices) are Fraunces, one size
up, written in full — `2.6 mm` never `2.6`; `€48,000` never abbreviated.
Millimetre thicknesses are the house's poetry; they appear as folios.

### The folio — thickness, not temperature

alla-luna folios each chapter in a falling temperature. **Ours folios in
millimetres** — a plate's thickness at that station, from the thick 4.2 mm
centre of the back to the 2.3 mm edge of the belly. It is the maker's private
scale, printed faint in the gutter. Distinct on purpose.

---

## 4. Space, layout, structure

- **Rhythm:** 8px scale (`--s1…--s9`, 8→192px). Chapters separated by
  `--s9`-class darkness. When in doubt, add emptiness.
- **Gutter:** `--gutter: clamp(20px, 5vw, 96px)`. Content max 1280px (880px
  reading columns).
- **The frame:** fixed hairline corner fittings in faint varnish — the purfling
  channel that runs inside the edge of every plate. The one piece of chrome.
- **Asymmetry:** register rows alternate media side and ratio. Never a uniform
  card grid.
- **The signature shape is the effe (f-hole).** A single f-hole curve drawn as
  a hairline — the house seal (an effe beside the word), chapter-rail nodes,
  status marks, the graduation-map key. It is the *only* ornament: no rings
  (alla-luna's), no arches (Vicente's), no diamonds (Shokunin's), no rounded
  boxes. The effe is a drawn glyph, never a radius.
- **Zero border-radius** (cursor ring excepted — it is a pointer, not a box).

### Page anatomy (home)

`Hero (full svh, a violin in the white on the bench, lamplit, 4.2 mm) →
La bottega (doctrine, since 1911, 3.8 mm) → Il maestro (the maker at the
bench, one human chapter, 3.4 mm) → La Graduazione (signature interaction,
abete cool, 2.9 mm) → Il Registro (instruments, alternating, 2.6 mm) →
Il banco (the accessories order form, 2.3 mm) → La Commissione (the letter,
warm, 2.5 mm) → Footer (the contrada)`.

Arc: *arrive at the bench → the house → the maker → the making → the work →
the counter (order) → the letter (commission).* The two order paths — the
counter's form and the letter — are deliberately adjacent so the split reads.

### Fixed chrome never touches content

House rule inherited: header transparent over the hero; veiled (dark + blur +
hairline) once scrolled; withdraws on scroll-down, returns on scroll-up.

---

## 5. The signature interaction — La Graduazione

**The graduation map: a violin plate's arching thickness revealed as a live
contour field.** This is knowledge no shop shows — the maker's tap-tuned
thicknesses, the difference between a plate that speaks and one that chokes.

- The chapter shows one plate (the maple back) as a contour map: nested
  hairline curves in varnish, like a topographic survey, each ring a
  thickness band from the thick 4.2 mm centre to the 2.3 mm edge.
- **A caliper reads the plate.** As the section crosses the viewport
  (scroll-driven, IntersectionObserver + rAF), a thin cross-hair traces a
  path from centre to edge; a Fraunces readout counts the thickness *down*
  `4.2 → 3.1 → 2.3 mm` as the point moves outward, and the contour band it is
  crossing lights in varnish. The rings fill in one at a time, thick to thin —
  the plate being graduated.
- When the readout reaches the edge (2.3 mm), the plate's line appears:
  *Fondo in acero · graduato a mano · Modello del Gesù* — set like a ledger row.
- The chapter's ground is **abete** (cold), because this is measurement under
  north light, not varnishing under the lamp — the one cool inversion.
- JS off / reduced motion: the finished state — every contour ring drawn, the
  full thickness scale printed, the caliper at the edge, the ledger line
  present. Never a broken half-state.

It could belong to no other subject: only a carved, graduated wooden plate has
a thickness field, and only a luthier reads it. Not a ring cooling, not a room
by light — a plate being thinned until it speaks.

Future interactivity extends *the plate* (tap-tone frequency, the varnish
building coat by coat) — never gamification, never a configurator.

---

## 6. Imagery

One recipe: **one subject, one warm bench-lamp light, pitch-brown void.** The
light in every plate is warm and comes from one side — the lamp — raking
across the wood so the figure (the flame of the maple, the grain of the
spruce) reads. The subject is generously lit and fully modelled; murky loses
to rich (mean luma ≥15 floor, 20–40 target, gamma 0.8 lift before the JPEG
pass). Palette inside the frame matches the tokens; no text in images.

**People belong at the bench.** The maestro bent over a plate, gouge in hand,
face lit by the work — the maker given the same lamp as the instrument. One
human chapter minimum (Il maestro). Never lifestyle models, never daylight.

Constant art-direction phrase (one per batch, identical across every prompt):

> "…pitch-brown near-black background, one generous warm bench-lamp key light
> from one side fully modelling the subject — every detail of the wood grain
> clearly readable — soft amber fill so nothing is lost to shadow, raking
> light revealing the flamed maple figure, museum artifact presentation,
> ultra-premium, no text."

For the maker shot, add: *"a violin maker at his bench, face lit by the work
under the lamp, a gouge in hand."*

Plates: violins/scrolls generated portrait 1024×1536, CSS boxes 2:3 — crop
decided at generation, never by `object-fit`. The graduation map is a drawn
SVG, not a photograph (it must be exact). Raw PNGs → `assets-src/`
(gitignored); shipped JPEGs ≤500KB from `public/plates/`.

Shot list (six finals): (1) hero — a violin in the white (unvarnished) on the
bench, lamplit; (2) the maestro at the bench (human); (3) the scroll / volute
macro (material close-up); (4) an f-hole / soundboard macro; (5) a finished
varnished violin for the register; (6) the banco — a bow and rosin cake, for
the order-form section. The graduation map is drawn, not generated.

---

## 7. Motion & interaction

**Physics:** one easing — `cubic-bezier(.19,1,.22,1)` (`--ease`) — long
durations (0.9–1.4s reveals, 2s+ fades). Nothing bounces. Motion behaves like
a gouge stroke or a bow drawn slow: it settles, never snaps.

**Vocabulary:** `.rv` rise-and-fade (110ms stagger), letter-spacing expansion
on link hover, brightness lift on imagery hover (the lamp turned up, not a
zoom), varnish glow on active marks, custom cursor (thin varnish ring — fine
pointers only). One ambient effect per viewport. The graduation caliper is the
one scroll-driven effect; it lives in its own chapter.

---

## 8. Copy voice

The house speaks like a third-generation maker: quiet, exact, certain, with a
craftsman's dry patience.

- **Declarative, short, unhedged.** "Eleven violins leave the bench each year."
- **Material specificity is the poetry.** Never "high quality" — instead
  "spruce felled in winter and seasoned twenty years; the belly thinned to
  2.6 millimetres at the edge until it answered." Thicknesses, coats, years.
- **The house never begs.** No exclamation marks, no reviews, no urgency. The
  strongest line permitted is a fact.
- **Honesty as luxury — the admission, once, formally:** no two plates are
  worked to the same thickness, because no two pieces of wood are the same
  weight; the maker follows the wood, not a drawing, and a violin that
  measures identically to another would sound worse. The hand is in the
  arching. This makes every other claim credible.
- Italian terms in italics with a gloss on first use (*la vernice*, "the
  varnish"). Sentence case except tracked-caps labels. Prices in euros,
  Italian formatting (`48.000 €`) is avoided in favour of `€48,000` for an
  English-first audience — kept consistent.

**Never:** discount language, urgency, "premium/luxury/exclusive" as
adjectives, emoji, Stradivari name-dropping as marketing, "the Cremonese
secret", tourist-Italy kitsch. And **never any guitar, flamenco, Spanish, or
Andalusian reference** — that is the other house.

---

## 9. Floors (non-negotiable)

- **Accessibility:** visible `:focus-visible` (varnish outline, 4px offset);
  decoration `aria-hidden`; body text ≥7:1 on `--legno`; interactive marks are
  real `<button>`s / inputs with labels; full keyboard path; `lang="en"` with
  `lang="it"` spans on Italian terms.
- **The order form (Il banco):** real `<form>` with labelled fields, a clear
  primary submit, keyboard-navigable, error-tolerant; hands off via `mailto:`
  (assembling a structured order into the mail body) — never captures a card,
  never processes a payment. Works with JS off (native mailto form submission).
- **Progressive enhancement:** complete page with JS off; `?nofx` disables
  entrance FX and forces eager images for the screenshot loop.
- **Performance:** images ≤500KB, Google Fonts only (2 families), no JS
  frameworks — static Astro + vanilla script.
- **Mobile:** same darkness, same cadence; rails and cursor are desktop grace
  notes; the graduation map and order form both reflow to one column.

## 10. Quick self-review

1. Could this screen belong to Casa Vicente, Fornace alla Luna, or a music
   shop? → make it more Sant'Agata.
2. Any orange-amber, blue ground, arch, naranja, Spanish, card grid, rounded
   box, urgency copy? → remove.
3. Varnish >5% of the frame outside the graduation map? → dim it.
4. Does every animation settle into stillness like a gouge stroke? → fix it.
5. Do the two order paths — the counter's form and the letter — both read, and
   read as clearly different? → if not, sharpen the split.
