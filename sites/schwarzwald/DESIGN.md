# Schwarzwald — Design Language

The style guide for **Schwarzwald – Uhrenhaus im Schwarzwald**, a family house
of cuckoo clockmakers in Schonach, est. 1854. Everything built under this
brand must pass one test: *does it feel like a clockmaker's workshop deep in
the fir forest, at night, lit by one lantern — where a collector has been
received by appointment?* If a screen could belong to a souvenir shop, a
watch e-commerce site, or the sibling brands (Shokunin, Suntoku), it is wrong.

Tokens live in `src/styles/global.css`; this file explains the intent so new
work extends the brand instead of diluting it. The register is Nocturne
(vince-ui profile); this document is its parameterization for this house.

---

## 1. Brand foundation

### Positioning

Schwarzwald is **not a shop**. It is a house — one family, seven generations,
one workshop above the Schonach valley. **Eight clocks leave the house each
year.** Every design decision flows from three consequences of that fiction:

| Fact of the world | Design consequence |
|---|---|
| Eight clocks a year, no more | Scarcity is content. The Kabinett shows what is promised and what is already *in private hands*, not just what can be acquired. Never paginate, never grid-dump. |
| A clock is raised, not manufactured | Presentation is curatorial: one clock at a time, generous darkness around it, the carving record and provenance instead of marketing bullets. |
| Acquisition is by correspondence | The visitor writes; the house answers. CTAs are invitations ("Open a correspondence", "Request the dossier") — never urgency ("Buy now", stock counters, timers). |

### Vocabulary of the world

Use these words consistently; they are the brand's API. German terms are
real and correct, glossed on first use — never costume.

- **The Kabinett** — the collection of current works. Never "shop", "catalog", "products".
- **Werkverzeichnis number** (`WV 208`) — every clock's catalogue-raisonné number, like a Köchel number. Never "SKU", "model no."
- **Clock names** — German, from the forest and its hours: *Mondlicht*, *Tannenruh*, *Erster Schnee*, *Waldkauz*, *Abendläuten*, *Nachtwache*. Each carries a one-line English reading ("moonlight over the high forest"). Never aggressive, never cute.
- **The Werkstatt** — the workshop / craftsmanship chapter.
- **The Auftrag** — a bespoke commission. Never "custom order", "configurator".
- **The Urkunde** — the certificate of authenticity (the real **VdS certificate** — Verein die Schwarzwalduhr — plus the house's own attestation). Never "warranty", "guarantee badge".
- **Correspondence / Audience** — how acquisition begins. Never "checkout", "cart", "consultation call".
- Statuses: `Open to correspondence` · `Promised` · `In private hands`. Never "in stock / sold out".
- **Investiture** — the day the clock is hung and started in the collector's home (the house sends a clockmaker).

### The family fiction

Founded 1854 in Schonach, the decade the Bahnhäusle form was born out of the
Furtwangen school's 1850 competition. Seven generations; the current master
is the seventh. The house fells its own linden and walnut on moon-phase
tradition (*Mondholz*), air-dries it eleven years, cuts its movements
mechanically, and accepts eight departures a year. All numbers used in copy
must stay consistent with this table:

| Fact | Value |
|---|---|
| Founded | 1854, Schonach im Schwarzwald |
| The family | Waldvogel ("forest bird") — masters: Matthias I. 1854–1881 · Johann II. 1881–1907 · Albrecht III. 1907–1934 · Frieda IV. 1934–1961 · Georg V. 1961–1987 · Lorenz VI. 1987–2011 · Elias VII. 2011– · Marta VIII., apprenticed 2019 |
| Generations | Seven |
| Clocks per year | Eight |
| Wood drying | Eleven years, air-dried in the attic of the house |
| Movement | Eight-day mechanical, brass, cut in the Black Forest |
| Carving time | Between 300 and 900 hours per clock |
| The call | Two notes, a falling minor third — twin bellows, fir whistles |

---

## 2. Color

The world is the fir forest at night, seen from a lantern-lit workshop.
**Darkness is fir-green-black; brass is the light; linen is the voice.**

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--void` | `#080b08` | Deepest ground: footer, doctrine, between-chapters |
| `--wald` | `#0e130e` | Default page ground (fir-black-green — *not* neutral black, *not* Shokunin's brown) |
| `--wald-2/3` | `#151c14` / `#1d261b` | Raised timber surfaces, panels |
| `--nacht` / `--nacht-2` | `#101720` / `#17212e` | Winter-night blue — one chapter per page, no more |
| `--stube` | `#171309` | Lamplit-timber brown (the *Stube*, the farmhouse parlor) — the ground of the chapters where the house speaks in its own voice, and the footer hearth |
| `--kirsche` | `#1d1009` | Cherry wood (*Kirschbaum*, the clock-cabinet timber) — the fill of the card family only: `.specs` placards, the Urkunde card, the papers card. Never a chapter ground, never larger than a card |
| `--messing` | `#c68e4e` | Aged brass: labels, hairlines, marks, one primary button |
| `--messing-bright` | `#eec489` | Brass at full lantern light: hovers, active, glints |
| `--messing-deep` | `#8f6335` | Brass in shadow; selection background |
| `--messing-faint` | `rgba(198,142,78,.38)` | Hairline brass: frame fittings, dormant marks |
| `--leinen` | `#eae4d3` | Primary text (linen) |
| `--leinen-dim` | `#a2988a` | Body copy, secondary |
| `--leinen-faint` | `rgba(234,228,211,.42)` | Whisper text: legal, ledger rows |
| `--line` / `--line-soft` | brass/linen at ~.2/.1 alpha | Rules and borders |

### Rules

1. **Brass is light, not paint.** It appears where lantern light would catch
   metal: labels, edges, the pendulum, one primary button per view. >5% of
   the frame in brass = jewelry; pull back.
2. **Nacht blue is the winter air outside the window** — strictly one
   chapter per page, and always the provenance/Urkunde register: the chapter
   about clocks that have *left* the house. On the home page that is
   "In private hands" (moved there 2026-07-15 — the Werkstatt held nacht
   at first, but the workshop is *inside* the house; the ledger of departed
   clocks is what stands at the window). It must never become a second
   accent.
2a. **Stube brown is the lamplight inside the house** (added 2026-07-15, to
   break the dark monotone without breaking the register). It grounds the
   chapters where the house itself speaks or works: "The house" doctrine
   and the Werkstatt on the home page, the craft record on a dossier —
   at most two stube chapters per page, never adjacent, never beside the
   nacht chapter. The page's tonal journey is *three motivated
   temperatures*: fir-green (the forest, the default), stube (inside the
   house), nacht (the winter night outside the window) — warm and cold
   alternating around the green. Every chapter ground must be one of these
   or void; never invent a fourth. One sanctioned use outside chapters:
   the site footer, which settles from void into stube on every page —
   the guest leaves past the hearth. (The card family — `.specs`, the
   Urkunde card, the papers card — is filled with kirsche, cherry wood;
   see the token table.)
3. **Text sits on darkness, never on brass** except inside the primary
   button (`#120e08` on `--messing`).
4. **Forbidden:** red in any form, vermilion (Kaji's), Shokunin's brown
   lacquer range, pure `#000`/`#fff`, saturated accents, decorative
   gradients (gradients exist only as photographic shade/vignette).
   Kirsche (`#1d1009`) is not an exception to the red rule: it is a wood
   brown whose warmth leans red, sanctioned only as the card family's
   timber. If a tone reads as *color* rather than *material*, it is red,
   and it is out.

---

## 3. Typography

Three voices, strict casting:

| Face | Token | Role | Rules |
|---|---|---|---|
| **EB Garamond** | `--display` | Display: clock names, headings, numerals, prices. Italic for the one-line readings. | Regular weight for display; italic only for readings and quotations. Tracking `.02–.08em`. The face is chosen for its lineage — the 1592 Egenolff–Berner specimen, Frankfurt — German printing, not a fashion serif. |
| **Hanken Grotesk** | `--body` | Body & labels | Body at 300, 16px/1.7. Labels: 10.5px, weight 600, tracking `.3–.42em`, uppercase, usually `--messing`. |
| **Grenze Gotisch** | `--fraktur` | Blackletter accents only | Never sets running text, never carries information the linen text doesn't also carry. Used for: the giant watermark words (*Zeit*, *Wald*), the house seal initial, chapter folios. Real German words only, correctly spelled — ornament with meaning, never costume. `aria-hidden` always. |

### Hierarchy recipe

Every chapter opens the same way — the cadence is the brand's rhythm:

```
LABEL IN BRASS TRACKED CAPS          ← .label (the whisper)
Large EB Garamond statement           ← .display (the voice)
Hanken Grotesk body in --leinen-dim   ← the explanation, 55–60ch max
```

Chapters are numbered in **Roman numerals** (I. II. III.) set in EB Garamond
— the dial's own numbering. Numbers that matter (prices, WV numbers, hours)
are EB Garamond, one size up. Prices written in full: `€ 14,800` (EN) /
`14.800 €` (DE) — never abbreviated.

---

## 4. Space, layout, structure

- **Rhythm:** 8px scale (`--s1…--s9`, 8→192px). Chapters separated by
  `--s9`-class darkness. When in doubt, add emptiness.
- **Gutter:** `--gutter: clamp(20px, 5vw, 96px)`. Content max 1280px
  (880px reading columns).
- **The frame:** fixed hairline corner fittings (`.hud-frame`) in faint
  brass — the lantern-lit brass corners of a clock case. The one piece of
  game-UI chrome; add no other.
- **Asymmetry:** Kabinett rows alternate media side and ratio. Never a
  uniform card grid.
- **The signature shape is the gable** — a steep isosceles triangle, the
  Bahnhäusle roof and the fir tree in one mark. It is the *only* ornament:
  brand seal (gable over the letter S), chapter-rail nodes, timeline nodes,
  ledger marks, hotspot rings. No circles-as-decoration, no rounded corners
  anywhere, no diamonds (Shokunin's).
- **Zero border-radius** (cursor ring excepted).

### Page anatomy (home)

`Hero (full svh, clock in void, Schonach time) → Doctrine (stube + Fraktur
watermark) → The Kabinett (alternating works) → In private hands (ledger,
nacht) → Die Familie → The Werkstatt (stube) → The Urkunde strip → The
Auftrag (correspondence) → Footer`. Every page: *arrive in darkness → doctrine → material → invitation*.

### Fixed chrome never touches content

Inherited house rule: header transparent over the hero; veiled
(dark + blur + hairline) once scrolled; withdraws on scroll-down, returns on
scroll-up. Rails live in the gutter, vertical text bottom-to-top. Any fixed
element crossing content carries the veil.

---

## 5. The hour — the house's signature liveness

The site knows the time in Schonach (Europe/Berlin, client-side, progressive
enhancement). It appears once per page, small, in the hero or header:

> Schonach, 21:47 — the workshop sleeps.

Bands: before 06:00 *the workshop sleeps* · 06:00–18:00 *the benches are
occupied* · 18:00–22:00 *the lantern is lit* · after 22:00 *the workshop
sleeps*. (DE equivalents in the data file.) With JS off it reads
"Schonach im Schwarzwald". This is the private-destination signal — the
house is a real place with a real hour — and it must stay quiet: linen-dim
text, no ticking animation, updated at most once a minute.

---

## 6. Imagery

One recipe: **one subject, one warm lantern light raised close, void
background.** Chiaroscuro — but chiaroscuro means *modelled by light*, not
*swallowed by dark*. Palette inside the frame must match the tokens —
fir-dark greens, walnut and linden browns *as the object's own material*,
brass glints. No text in images.

**The lighting floor (amended 2026-07-15).** The first Kabinett batch
over-obeyed "pitch-black": *Abendläuten* and *Mondlicht* shipped with a mean
luminance under 9 and effectively vanished into the page ground. The page
already supplies the darkness — the plate must supply the clock. Rule: the
lantern is *raised to the work*, every carved detail readable, drama carried
by the direction and warmth of the light, never by underexposure.
Measurable floor: a plate's mean luminance ≥ 15 (the plates that read well
sit at 15–22). The pipeline that hits it: generate with the revised phrase
below, then finish with a **gamma 0.8 midtone lift** before the JPEG pass —
finishing a well-modelled plate is legitimate; rescuing an unmodelled one is
not (if the carving isn't lit in the raw generation, regenerate). Never
re-darken in CSS (no `brightness()` under 1 on plates). A settle video must
receive the *same* lift as its still (ffmpeg `lutrgb gammaval(0.8)`) or the
dissolve pops.

**Faces (amended 2026-07-14, by the owner's direction):** the house shows
its people. Portraits are sanctioned in the Familie chapter and anywhere
the craft is shown in action — under the same one-lantern rule: Rembrandt
chiaroscuro, quiet dignity, the sitter lit as the clocks are lit. Never
stock-photo energy (no smiling at camera, no posed teamwork), never
daylight, never a busy workshop background. Portraits are of *named members
of the family fiction* — every face belongs to someone in the
Werkverzeichnis. Generation note: reference images of environments hijack
soul_2's prompt enhancer (it describes the reference's daylight clutter
instead of following art direction) — describe people in text and keep one
fixed physical description per person across shots.

### Generation recipe (Higgsfield `soul_2`)

Constant art-direction phrase per batch (revised 2026-07-15 — the earlier
"pitch-black … deep chiaroscuro shadows" phrase produced underexposed
plates):

> "…near-black background with a faint fir-green cast, generous warm
> lantern key light from the upper left that fully models the carving —
> every detail clearly readable — with a soft amber fill so no part of the
> subject is lost to shadow; rich dramatic chiaroscuro, glowing edges,
> brass glints, museum artifact presentation, ultra-premium, no text, no
> people."

Subjects: ornate carved cuckoo clocks (linden, walnut, dark-stained), brass
movements and pendulums, carving hands with chisels, wood shavings, the
bellows and whistles, fir branches with snow (Urkunde chapter). Pipeline:
raw PNGs → `assets-src/` (gitignored) → `sips` JPEG q≈78, longest edge
≤2048 → `public/plates/`. Target ≤500KB.

### Motion imagery

Video is rare by policy. It exists for what only a camera can do — light
raking across relief carving, the pendulum's slow beat, a shaving curling
off the chisel. Camera moves as a visitor would; the subject never moves
(the pendulum and the chisel's cut are the licensed exceptions). Generated
from the exact still it layers over, desktop-only, JS-gated, ≤4MB.

**The settle pattern (2026-07-14):** videos do not loop. A video plays
*once* over its start-frame still, then dissolves back into the photograph
— one breath of life, then stillness. This retires the loop-seam problem
and is truer to the register than any loop. Up to two settle videos per
page (hero on load, one chapter on scroll-into-view) provided they are
never in the same viewport; reduced-motion, Save-Data, and mobile never
fetch a byte (`preload="none"`, src assigned only after all gates pass).

---

## 7. Motion & interaction

**Physics:** one easing curve — `cubic-bezier(.19,1,.22,1)` (`--ease`) —
long durations (0.9–1.4s reveals, 2s+ fades). Nothing bounces or snaps.
Light behaves like lantern light: fades, breathes, glints.

**Vocabulary** (reuse; don't invent per page): `.rv` rise-and-fade
(110ms stagger), `.rv-line` masked line reveal, letter-spacing expansion on
hover for open links, brightness lift on imagery hover (the lantern raised,
not a zoom), brass glow for active/live marks, custom cursor (brass ring,
fine pointers only).

**Restraint:** one ambient effect per viewport. All motion is progressive
enhancement; reduced-motion gets the finished, static composition.

**The signature interaction is inspection** — gable-marked hotspots on the
clock open annotation cards (carving depth, movement, bellows). Future
interactivity extends inspection (the collector's loupe): material layers,
relief raking light — never gamification, never a configurator.

---

## 8. Copy voice

The house speaks like a seventh-generation master: quiet, exact, certain.

- **Declarative, short, unhedged.** "We do not manufacture clocks. We raise
  them."
- **Material specificity is the poetry.** Never "high quality" — instead
  "linden felled in the waning January moon, air-dried eleven years under
  the roof of this house". Hours, generations, temperatures, intervals
  ("the call is two notes, a falling minor third").
- **The house never begs.** No exclamation marks, no social proof, no
  reviews, no "don't miss". The strongest line permitted is a fact:
  "Eight clocks leave this house each year."
- **Honesty as luxury:** one formal admission — linden moves; a hairline
  may open along the crown in a first dry winter, and the relief is cut so
  it closes again. Documented, named, dignified. This makes every other
  claim credible.
- German terms in italics with a gloss on first use (*Mondholz*, "moon
  wood"). Sentence case everywhere except tracked-caps labels.
- **i18n is native, not translated.** DE copy is written as German, with
  its own rhythm and formality (Sie-form); EN is written as English. Never
  machine-translation cadence. Prices and dates follow each locale's
  convention.

**Never:** discount language, urgency, "premium/luxury/exclusive" as
adjectives, emoji, tourist-kitsch framing (no lederhosen, no oompah, no
"Bavarian charm"), cuckoo puns.

---

## 9. Floors (non-negotiable)

- **Accessibility:** visible `:focus-visible` (brass outline, 4px offset);
  decoration `aria-hidden`; body text ≥7:1 on `--wald`; hotspots are real
  `<button>`s with labels and `aria-expanded`; full keyboard path incl.
  Escape; `lang` attributes correct per page (`de` pages set `lang="de"`).
- **Progressive enhancement:** complete page with JS off; `?nofx` disables
  entrance FX for the screenshot loop.
- **Performance:** images ≤500KB, one lazy desktop video max, Google Fonts
  only (3 families), no JS frameworks — static Astro + vanilla script.
- **Mobile-first:** same darkness, same cadence; rails and cursor are
  desktop grace notes; full-width tap targets; a smaller lantern, not a
  lesser house.
- **i18n:** every page exists at `/` (EN) and `/de/` (DE); the switch in
  the header maps the *same page* across locales; `hreflang` pairs in head.

## 10. Quick self-review

1. Could this screen belong to a watch shop, a souvenir store, or Shokunin? → make it more Schwarzwald.
2. Any red, card grid, circle, rounded corner, diamond, urgency copy? → remove.
3. Brass >5% of the frame? → dim it.
4. Does every animation settle into stillness? → fix the busy one.
5. Does it read as *a house receiving a guest* rather than *a site converting a user*? → ship.
