# Fornace alla Luna — Design Language

The style guide for **Fornace alla Luna**, a one-furnace goblet atelier on
Murano, at the sign of the moon since 1861. Everything built under this brand
must pass one test: *does it feel like standing on a dark fondamenta at
midnight, looking through an open furnace door — one round mouth of fire in a
cold blue night, and a family that has blown goblets by that light for six
generations?* If a screen could belong to a glass souvenir shop, a stemware
e-commerce brand, or a sibling house (Shokunin, Schwarzwald, Suntoku,
Vicente), it is wrong.

Tokens live in `src/styles/global.css`; this file explains the intent. The
register is **Nocturne** — and the register comes from the subject, not the
bucket: a Murano furnace hall genuinely lives in darkness lit by one source.
The *composizione* melts through the night; the piazza blows from before
dawn; the room's only light is the furnace mouth. The furnace **is** the
Nocturne lamp.

---

## 1. Brand foundation

### Positioning

Alla Luna is **not a shop**. It is a furnace — one family, six masters, three
crucibles, and a fire that goes cold only once a year. The house blows
**goblets only**: no chandeliers, no figurines, no aquarium fish. Design
consequences:

| Fact of the world | Design consequence |
|---|---|
| Glass is made at night — the melt is charged at midnight, blown from before dawn | The page is the island at night; every chapter is lit by furnace light, not by lamps. Arrival is the furnace mouth itself. |
| A goblet is finished only when it has cooled — the tempera is part of the making | **Heat is the interface.** The page anneals as it is read: every chapter carries a falling temperature, and the signature interaction is a goblet cooling from furnace orange to cold clear glass as it enters the Archive. |
| Nine commissions a year; a service of twelve takes the piazza six weeks | Scarcity is content: the Archive shows what is in tempera, what is promised, what is already in private hands. Never a grid-dump, never pagination. |
| Acquisition is by letter | The visitor writes; the furnace answers. CTAs are invitations ("Write to the furnace"), never urgency. |

### Vocabulary of the world

These words are the brand's API. Venetian/Italian terms are real and correct,
glossed on first use — never costume.

- **La bocca** — the round working mouth of the furnace. The house's mark.
- **L'Archivio** — the collection of works. Never "shop", "products".
- **Modello** number (`Modello 214`) — every design's number in the house's
  *Libro dei Modelli*, the model book kept since 1861. Never "SKU".
- **Goblet names** — Venetian, from the lagoon night: *Plenilunio* (the full
  moon on the water), *Acqua Alta*, *Nebbia*, *Vespro*, *Marea*, *Sirena*.
  Each carries a one-line English reading. Never cute, never aggressive.
- **La piazza** — the crew: one maestro, two serventi, one garzone. The team
  around one master has been called a piazza on Murano for centuries.
- **Lo scagno** — the maestro's bench, with its long parallel arms.
- **La tempera** — the annealing oven and the overnight cooling; the chapter
  and the signature interaction take its name.
- **La composizione** — the batch (sand, soda, lime) charged at midnight.
- **El goto** — the workers' own glass, blown from the day's last gather;
  every member of the piazza drinks from one they blew themselves. (Real
  Murano tradition — *goto de fortuna*.)
- **La Commissione** — a commission. Acquisition begins with a letter:
  "Write to the furnace." Never "checkout", "order", "configurator".
- Statuses: `In tempera` · `Promesso` · `In private collection`. Never
  "in stock / sold out".
- **La sosta** — August, when the furnace goes cold and the crucibles are
  rebuilt. The one interval when the house does not answer.

### The family fiction

Historic Murano furnaces were known by their *insegna* — the sign over the
door (All'Insegna della Sirena, Al Moro). This furnace works at the sign of
the moon: glass melted by night, blown before dawn. All copy must stay
consistent with this table:

| Fact | Value |
|---|---|
| Founded | 1861, Fondamenta Serenella, Murano — the decade of the island's great revival |
| The family | Businello — masters: Zuane I. 1861–1889 · Piero II. 1889–1921 · Marco III. 1921–1953 · Zuane IV. 1953–1980 · Livio V. 1980–2012 · Alvise VI. 2012– · Elena, prima serventa, at the bench since 2016 |
| The furnace | Three crucibles (*crogioli*); charged at midnight; fusione at 1,120° |
| The fire | Goes cold once a year, in August (*la sosta*), for the rebuilding of the crucibles |
| The work | Goblets only. A service of twelve takes the piazza six weeks; nine commissions leave the fondamenta each year |
| The tempera | Overnight — from 480° to the morning air, no faster than the glass forgives |
| The piazza | One maestro, two serventi, one garzone |

---

## 2. Color

The world is Murano at night seen from the water: **the island is cold
blue-black; the furnace is the only light; glass is the voice.**

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--fondo` | `#06080b` | Deepest ground: footer approach, between-chapters void |
| `--canale` | `#0a0e13` | Default page ground — the night canal, blue-black with a lagoon cast. *Not* neutral black, *not* Schwarzwald's fir green, *not* Shokunin's brown |
| `--canale-2` / `--canale-3` | `#111620` / `#182029` | Raised surfaces, panels |
| `--fuoco` / `--fuoco-2` | `#170f08` / `#20150b` | Firebrick and soot — the ground of hot-shop chapters (the doctrine, La Piazza). At most two fuoco chapters per page, never adjacent |
| `--ambra` | `#d18d3f` | Molten amber — the light. Labels, hairlines, marks, one primary button per view |
| `--ambra-viva` | `#f5be74` | Amber at full heat: hovers, active, glints |
| `--ambra-fonda` | `#91602a` | Amber in shadow; selection background |
| `--ambra-faint` | `rgba(209,141,63,.34)` | Hairline amber: frame fittings, dormant marks |
| `--cristallo` | `#ede7db` | Primary text — the glass itself |
| `--cristallo-dim` | `#a9a094` | Body copy, secondary |
| `--cristallo-faint` | `rgba(237,231,219,.4)` | Whisper text |
| `--line` / `--line-soft` | ambra/cristallo at ~.2/.09 alpha | Rules and borders |

### Rules

1. **Amber is furnace light, not paint.** It appears where the fire would
   reach: labels, hairlines, the bocca mark, one primary button. If amber
   exceeds ~5% of the frame it has become jewelry; pull back. The one
   sanctioned large use is the signature interaction's glow — that amber
   *is the subject*, not decoration.
2. **The tonal journey is two motivated temperatures around the night.**
   Canale blue-black is the island (the default ground); fuoco brown is the
   inside of the hot shop (the chapters where the house speaks or works).
   The inversion of Schwarzwald: there the ground was warm wood and the
   cold was a visitor; here the ground is cold water and the warmth is the
   fire. Never invent a third temperature.
3. **Text sits on darkness, never on amber** except inside the primary
   button (`#140d06` on `--ambra`).
4. **Forbidden:** any green (Schwarzwald's), brown-lacquer grounds
   (Shokunin's), red as color, pure `#000`/`#fff`, saturated accents,
   decorative gradients. Gradients exist only as the blackbody glow of the
   signature interaction and photographic vignettes — heat, not decor.

---

## 3. Typography

Two voices only — this house is quieter than its siblings:

| Face | Token | Role | Rules |
|---|---|---|---|
| **Cardo** | `--display` | Display: goblet names, headings, temperatures, Modello numbers, prices. Italic for one-line readings. | Chosen for lineage: Cardo revives the Aldine roman Aldus Manutius printed *in Venice* in 1495 — Venetian type for a Venetian house. Regular weight, tracking `.02–.06em`. |
| **Mulish** | `--body` | Body & labels | Body at 300, 16px/1.7. Labels: 10.5px, 600, tracking `.3–.42em`, uppercase, usually `--ambra`. |

### Hierarchy recipe

Every chapter opens with the cadence:

```
LABEL IN AMBER TRACKED CAPS           ← .label (the whisper)
Large Cardo statement, one or two lines
Mulish body in --cristallo-dim, 55–60ch max
```

**Chapters are numbered in degrees, not numerals.** The folio of each chapter
is a temperature, falling monotonically down the page — 1,120° at the furnace
mouth, 20° on the fondamenta at dawn. The page itself anneals. Numbers that
matter (temperatures, Modello numbers, years) are Cardo, one size up, written
in full — `1,120°` never `1.1k`.

---

## 4. Space, layout, structure

- **Rhythm:** 8px scale (`--s1…--s9`, 8→192px). Chapters separated by
  `--s9`-class darkness. When in doubt, add emptiness.
- **Gutter:** `--gutter: clamp(20px, 5vw, 96px)`. Content max 1280px (880px
  reading columns).
- **The frame:** fixed hairline corner fittings in faint amber — the iron
  strapwork of a furnace door. The one piece of chrome; add no other.
- **Asymmetry:** Archive rows alternate media side and ratio. Never a
  uniform card grid.
- **The signature shape is the ring** — *la bocca*, the furnace mouth seen
  straight on; also the rim of a goblet from above. A thin amber circle,
  never filled. It is the *only* ornament: the house seal (a ring over the
  word LUNA), chapter-rail nodes, status marks, the cooling dial. No
  diamonds (Shokunin's), no gables (Schwarzwald's), no rounded corners on
  boxes — the ring is a mark, not a radius.
- **Zero border-radius** (cursor ring and bocca marks excepted — they are
  rings, not rounded boxes).

### Page anatomy (home)

`Hero (full svh, the gather at the bocca, Murano hour, 1,120°) →
The house (doctrine, fuoco, 1,040°) → La Piazza (the crew at the bench,
fuoco, 900°) → La Tempera (signature interaction, 480°) → L'Archivio
(alternating works, 60°) → El Goto + the admission (short strip) →
La Commissione (invitation, 20°) → Footer (the fondamenta at dawn)`.

Arc: *arrive at the fire → doctrine → the making → the cooling → the cold
clear work → the invitation.* The glass's journey is the page's journey.

### Fixed chrome never touches content

House rule inherited: header transparent over the hero; veiled (dark + blur +
hairline) once scrolled; withdraws on scroll-down, returns on scroll-up.
Rails live in the gutter, vertical text bottom-to-top.

---

## 5. The hour — the house's liveness

The site knows the time on Murano (Europe/Rome, client-side, progressive
enhancement). Once per page, small, in the hero:

> Murano, 02:14 — the composizione melts.

Bands: 00:00–05:00 *the composizione melts* · 05:00–13:00 *the piazza is at
the bench* · 13:00–20:00 *the tempera holds the day's work* · 20:00–24:00
*the crucibles are charged*. In August the line reads *la sosta — the furnace
is cold* (not implemented in the dry run; noted for the full build). With JS
off it reads "Fondamenta Serenella, Murano". Quiet: cristallo-dim, no
ticking, updated at most once a minute.

---

## 6. Imagery

One recipe: **one subject, one furnace light, cold void background.** The
light in every plate is warm and comes from one side — the fire — and the
darkness carries a faint cold lagoon-blue cast, so every photograph contains
the site's two temperatures. The subject is generously lit and fully
modelled; murky loses to rich every time (mean luma ≥15 floor, 20–40 target,
gamma 0.8 lift before the JPEG pass). Palette inside the frame must match
the tokens; no text in images.

**People belong at the bench.** The maestro on the scagno, face lit by the
glowing gather — the worker given the same light as the work. One human
chapter minimum (La Piazza). Never lifestyle models, never daylight.

Constant art-direction phrase (one per batch, identical across every prompt):

> "…near-black background with a faint cold lagoon-blue cast, generous warm
> furnace key light from one side fully modelling the subject — every detail
> clearly readable — soft amber fill so nothing is lost to shadow, glowing
> rim light, museum artifact presentation, ultra-premium, no text."

For the maker shot, add: *"a glassblower at work, face lit by the molten
glass itself."*

Plates: goblets generated portrait 1024×1536, CSS boxes 2:3 — the crop is
decided at generation, never by `object-fit`. Raw PNGs → `assets-src/`
(gitignored); shipped JPEGs ≤500KB from `public/plates/`.

Video (full run only): the one thing CSS cannot fake here is molten glass
moving — the gather turning on the pipe. One settle video max, generated
from the exact hero still, desktop-only, ≤4MB.

---

## 7. Motion & interaction

**Physics:** one easing — `cubic-bezier(.19,1,.22,1)` (`--ease`) — long
durations (0.9–1.4s reveals, 2s+ fades). Nothing bounces. Light behaves like
fire seen from across water: it swells, breathes, settles.

**Vocabulary:** `.rv` rise-and-fade (110ms stagger), letter-spacing expansion
on link hover, brightness lift on imagery hover (the door opened wider, not
a zoom), amber glow on active marks, custom cursor (thin amber ring — the
bocca — fine pointers only). One ambient effect per viewport.

### The signature interaction — La Tempera

**Heat as interface: a goblet enters the archive by cooling on screen.**

- The chapter shows one goblet plate. As the section crosses the viewport
  (scroll-driven, IntersectionObserver + rAF interpolation), a blackbody
  glow over the glass cools: furnace orange → ember amber → nothing. The
  glow is radial, brightest at the bowl, and its temperature drives an
  adjacent Cardo readout falling `1,120° → 480° → 20°` with the annealing
  hours beside it.
- When the readout reaches ambient, the piece's entry line appears —
  *Modello 214 · entered into the Archive* — set like a ledger row.
- The same physics threads the whole page: every chapter folio is a
  temperature on the falling curve, so the interaction is the page's
  structure, not a widget.
- JS off / reduced motion: the finished state — cold clear goblet, the full
  temperature scale printed statically, the ledger line present. Never a
  broken half-state.

Future interactivity extends the fire (raking ember light across cut
surfaces, the melt breathing in the hero) — never gamification, never a
configurator.

---

## 8. Copy voice

The house speaks like a sixth-generation maestro: quiet, exact, certain.

- **Declarative, short, unhedged.** "The glass is made at night."
- **Material specificity is the poetry.** Never "high quality" — instead
  "sand from Fontainebleau, soda, lime, and manganese against the green;
  charged at midnight, ready by five." Temperatures, hours, counts.
- **The house never begs.** No exclamation marks, no reviews, no urgency.
  The strongest line permitted is a fact: "Nine commissions leave the
  fondamenta each year."
- **Honesty as luxury — the admission, once, formally:** every goblet keeps
  the scar of the pontil under its foot, ground smooth but never erased;
  and within a service of twelve no two goblets agree closer than a breath.
  The hand is in the glass. This makes every other claim credible.
- Venetian terms in italics with a gloss on first use (*la bocca*, "the
  furnace mouth"). Sentence case everywhere except tracked-caps labels.

**Never:** discount language, urgency, "premium/luxury/exclusive" as
adjectives, emoji, gondola-kitsch framing, "Venetian charm", masks and
carnival costume, aquarium-glass tourist imagery.

---

## 9. Floors (non-negotiable)

- **Accessibility:** visible `:focus-visible` (amber outline, 4px offset);
  decoration `aria-hidden`; body text ≥7:1 on `--canale`; interactive marks
  are real `<button>`s with labels; full keyboard path; `lang="en"` with
  `lang="it"` spans on Italian terms.
- **Progressive enhancement:** complete page with JS off; `?nofx` disables
  entrance FX and forces eager images for the screenshot loop.
- **Performance:** images ≤500KB, Google Fonts only (2 families), no JS
  frameworks — static Astro + vanilla script.
- **Mobile:** same darkness, same cadence; rails and cursor are desktop
  grace notes; upper rhythm steps compress at ≤760px so chapters stay
  generous without empty screens.

## 10. Quick self-review

1. Could this screen belong to a stemware shop, a Venice tourist site, or a
   sibling house? → make it more Alla Luna.
2. Any green, diamond, gable, card grid, rounded box, urgency copy? → remove.
3. Amber >5% of the frame outside the signature glow? → dim it.
4. Does every animation cool into stillness? → fix the busy one.
5. Does the page anneal — does heat fall monotonically from bocca to
   fondamenta? → if a chapter breaks the curve, move it.
