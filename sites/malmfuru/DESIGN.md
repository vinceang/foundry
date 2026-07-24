# Malmfuru — Design Language

The style guide for **Malmfuru — laftehus fra Numedal**, a family workshop of
log builders at Nore, in the valley Norwegians call *middelalderdalen* — the
medieval valley. Everything built under this brand must pass one test: *does
it feel like standing in deep snow on a moonless January night, looking at a
house whose one lit window is the only warm thing in the valley?* If a
screen could belong to a cabin rental site, a timber-frame contractor, or the
sibling brands (Shokunin, Suntoku, Schwarzwald), it is wrong.

Tokens live in `src/styles/global.css`; this file explains the intent. The
register is Nocturne (see `docs/nocturne-taste-profile.md`); this document is
its parameterization for this house.

**Distinct-house note (Numedal has two log workshops in the collection).**
Malmfuru and Tyri both hew Norwegian log houses, but they are deliberately
different houses, not one skin twice — the same craft told at two hours.
Malmfuru is **Nocturne**: Nore, founded 1791, the Loftsgård family, a
moonless midwinter night with one lit window, the tree-ring *Årringene*
archive as signature, Forum for display. Tyri is **Pastorale**: Rollag,
founded 1911, a cold bright snow-light working day, the corner-joint *Novet*
that assembles as you scroll, Besley for display. They share only the real
trade words (*laft*, *nov*, the *tinging*) — as any two workshops in one
valley would — never a palette, family, century, signature, or type.

---

## 1. Brand foundation

### Positioning

Malmfuru is **not a builder's firm**. It is a workshop — one family, eight
generations, one notch, at Nore in Numedal. **Three houses leave the valley
each year.** Every design decision flows from three consequences of that
fiction:

| Fact of the world | Design consequence |
|---|---|
| Three houses a year, hewn by hand | Scarcity is content. The Tun shows what is promised and what already stands, never an inventory. No grids, no pagination. |
| A house is raised, not built | Presentation is curatorial: one house at a time, generous darkness around it, its husbok record instead of marketing bullets. |
| Commission is by letter (the tinging) | The visitor writes; the workshop answers. CTAs are invitations ("Write to Nore", "Ask after Skavlen") — never urgency. |

### Vocabulary of the world

Use these words consistently; they are the brand's API. Norwegian terms are
real and correct, glossed on first use — never costume.

- **Laft** — the corner joinery that carries the whole house; **the nov** — the joint itself. The house cuts the **Nore-nov**, six-sided, axes only.
- **Malmfuru** — "ore-pine": slow-grown pine with a high share of resin-dense heartwood, the timber of the stave churches. The workshop is named for its material.
- **Medrag** — the scribed groove along each log's underside, cut so it rides the log below without a gap.
- **Husmose** — moss gathered in August, laid dry in the medrag. No foam, no sealant.
- **Setning** — the settling: a new wall sinks about two centimetres for every metre of its height across its first seven winters. Named, measured, built for — the house's formal admission (§8).
- **The Tun** — the courtyard of works (a *tun* is the yard a Norwegian farm's buildings stand around). Never "portfolio", "projects", "gallery".
- **The husbok** — the house book: every log numbered, its felling winter and forest recorded. Houses carry husbok numbers (`HB 384`). Never "certificate", "warranty", "spec sheet".
- **The tinging** — a commission, from the old verb *å tinge*, to bespeak. The tinging page is the writing desk: four fields; submitting composes a letter in the guest's own mail client — the workshop never holds a form submission. `?hus=<slug>` preselects the matter.
- Statuses: `Open to tinging` · `Promised` · `Raised`. Never "available / sold".
- **The seventh-winter visit** — the workshop returns in a house's seventh winter to ease its doors after the setning has finished.

### The family fiction

Founded 1791 at Nore. Eight generations of the **Loftsgård** family; the
current master is the eighth. All numbers used in copy must stay consistent
with this table:

| Fact | Value |
|---|---|
| Founded | 1791, Nore i Numedal |
| The family | Loftsgård — masters: Halvor I. 1791–1823 · Torstein II. 1823–1858 · Halvor III. 1858–1889 · Knut IV. 1889–1921 · Margit V. 1921–1953 · Olav VI. 1953–1984 · Torgeir VII. 1984–2012 · Embret VIII. 2012– · Sigrid IX., apprenticed 2021 |
| Houses per year | Three |
| The timber | Malmfuru, 140–230 years old, blazed (*blinka*) seven winters before felling |
| Felling | The two coldest weeks of January, when the sap stands still |
| Drying | Seven years, air-dried under open sheds at Nore |
| The notch | The Nore-nov — six faces, cut with axes only; no saw touches the joint |
| Axe-hours per house | Between four and seven thousand |
| The husbok | Kept since 1889 by Knut IV; 384 houses stand in the book |
| Setning | ~2 cm per metre of wall height, over the first seven winters |
| The doorway log | The pine cross-cut in the workshop doorway: felled January 2019, 228 rings — a seedling in 1791, the winter Halvor raised his first loft |

---

## 2. Color

The world is the *mørketid* — the dark season — seen from outside: iron-blue
night, snow, and one warm window. **Darkness is winter night; copper is the
light; wool is the voice.**

The temperature logic deliberately inverts Schwarzwald's: there the ground is
warm (fir forest) and the one cold chapter is the winter outside the window.
Here the ground is **cold** — the guest stands in the night — and the one
warm chapter is the inside of the house. Light is something you walk toward.

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--void` | `#06080b` | Deepest ground: footer, between-chapters |
| `--natt` | `#0b0e13` | Default page ground (iron-blue winter night — *not* neutral black, *not* Schwarzwald's green, *not* Shokunin's brown) |
| `--natt-2` / `--natt-3` | `#12161d` / `#191f28` | Raised surfaces, panels |
| `--aare` | `#180f07` | Hearth-brown (the *årestue*, the open-hearth room) — strictly **one chapter per page**: the chapter where the guest is inside the house (the craft chapter). Also the footer's last warmth. It must never become a second ground. |
| `--tjaere` | `#100c08` | Tar-black timber (*tjærebredd*, tar-coated) — the fill of the card family only: spec placards, the husbok card, the writing desk. Always laid with `--grain` (a copper-tinted noise tile): hewn wood has tooth. Never a chapter ground. |
| `--kopar` | `#c07a4d` | Aged copper: labels, hairlines, marks, one primary button |
| `--kopar-bright` | `#edaa79` | Copper at full firelight: hovers, active, glints |
| `--kopar-deep` | `#8a5230` | Copper in shadow; selection background |
| `--kopar-faint` | `rgba(192,122,77,.36)` | Hairline copper: frame fittings, dormant marks |
| `--ull` | `#e9e5db` | Primary text (undyed wool) |
| `--ull-dim` | `#a49c8f` | Body copy, secondary |
| `--ull-faint` | `rgba(233,229,219,.4)` | Whisper text |
| `--line` / `--line-soft` | copper/wool at ~.2/.09 alpha | Rules and borders |

### Rules

1. **Copper is light, not paint.** It appears where firelight would catch
   metal or resin: labels, hairlines, the lit window, one primary button per
   view. >5% of the frame in copper = jewelry; pull back.
2. **Hearth brown is the inside of the house** — one chapter per page, the
   chapter where the craft happens. The page's tonal journey is *night →
   night → hearth → night*: the guest approaches, is let in once, and steps
   back out into the dark. Never two warm chapters, never adjacent to the
   footer's warm settle.
3. **Text sits on darkness, never on copper** except inside the primary
   button (`#120b06` on `--kopar`).
4. **Forbidden:** brass-yellow (Schwarzwald's), gold (Shokunin's), fir-green
   grounds, red as color, pure `#000`/`#fff`, saturated accents, decorative
   gradients (gradients exist only as photographic shade or the footer's
   settle into the hearth).

---

## 3. Typography

Two voices only — the workshop owns few tools and keeps them sharp:

| Face | Token | Role | Rules |
|---|---|---|---|
| **Forum** | `--display` | Display: house names, headings, numerals, the ring years. | Single weight (400), tracked slightly wide. Chosen for its lapidary, incised quality — letters that look cut rather than drawn, without costume. No italic exists; emphasis is done with size and copper, never slant. |
| **Schibsted Grotesk** | `--body` | Body & labels | A Norwegian face (Schibsted, Oslo). Body 400, 15.5px/1.7, in `--ull-dim`. Labels: 10.5px, 600, tracking `.3–.42em`, uppercase, usually copper. |

There is deliberately no third face and no blackletter/rune accent — runes
would be costume. The house's ornament budget is spent on the nov mark and
the ring figure.

### Hierarchy recipe

```
LABEL IN COPPER TRACKED CAPS          ← .label (the whisper)
Large Forum statement                  ← .display (the voice)
Schibsted Grotesk body in --ull-dim    ← the explanation, 55–60ch max
```

Chapters are numbered in Forum with the husbok's own convention: `I` `II`
`III` … Numbers that matter (rings, winters, axe-hours) are Forum, one size
up, written out where prose allows ("two hundred and twenty-eight rings").

---

## 4. Space, layout, structure

- **Rhythm:** 8px scale (`--s1…--s9`, 8→192px). Chapters separated by
  `--s9`-class darkness. When in doubt, add emptiness. Mobile compresses the
  upper steps (≤760px: 40/56/64/72).
- **Gutter:** `--gutter: clamp(20px, 5vw, 96px)`. Content max 1280px (880px
  reading columns).
- **The frame:** fixed hairline corner fittings in faint copper — but cut as
  **nov corners**: each fitting is two short overlapping bars, a log-end
  crossing a log-end. The one piece of chrome; add no other.
- **The signature shape is the nov cross** — two bars lapped at right
  angles, the corner joint seen head-on. It is the *only* ornament: brand
  seal, chapter marks, list bullets, status marks. No circles-as-decoration
  (the ring figure is the licensed exception — it is the tree's own
  geometry, material rather than emblem, the same distinction that admits
  wood grain on cards). No gables (Schwarzwald's), no diamonds (Shokunin's).
- **Asymmetry:** Tun rows alternate media side and ratio. Never a uniform
  card grid.
- **Zero border-radius** (cursor ring excepted).

### Page anatomy (home)

`Hero (full svh, the house as the only lamp, the daylight line) → I. The
workshop (doctrine) → II. The timber (malmfuru, felling, drying) → III.
Årringene (the ring archive — signature interaction) → IV. The nov (hearth
chapter, inside the house) → V. The Tun (works, alternating) → VI. Setning &
the husbok (the admission) → VII. The tinging (invitation) → Footer.`
Every page: *arrive in the dark → walk toward the light → be let in →
step back out with the letter in hand.*

### Fixed chrome never touches content

House rule inherited from the series: header transparent over the hero;
veiled (dark + blur + hairline) once scrolled; withdraws on scroll-down,
returns on scroll-up.

---

## 5. The daylight line — the house's signature liveness

At 60° north the length of the day is the workshop's real calendar — felling,
hewing, and raising are all planned around it. The site knows the daylight at
Nore (computed client-side from the date, lat 60.1°N): it appears once per
page, small, in the hero:

> Nore, 14:42 — five hours, twelve minutes of daylight today.

With JS off it reads "Nore i Numedal, 60° north." Quiet: wool-dim text, no
ticking, updated at most once a minute. This is the private-destination
signal — the workshop is a real place under a real sky. Bands by day length:
under 7h *the felling light* · 7–16h *the hewing light* · over 16h *the
raising light*.

---

## 6. The signature interaction — Årringene

The pine cross-cut hanging in the workshop doorway was felled in January
2019 with 228 rings: it germinated in 1791, the winter Halvor Loftsgård
raised his first loft. **The tree and the workshop are the same age**, so
the log is the house's timeline.

The chapter renders the cross-section as a figure (the plate photograph with
a drawn ring overlay). A native `<input type="range">` — the scribe — moves
from the pith (1791) outward (2019); each stop is a recorded ring: a master
taking up the axe, the first husbok, the five thin war rings, the felling.
Keyboard access is free (it is a real range input); the current entry is
announced via `aria-live`. With JS off, the full ring record is a visible
static list. Never gamified: no autoplay, no score, one figure.

---

## 7. Imagery

One recipe: **moonless winter night, one warm amber light, every hewn
surface fully modelled.** The page supplies the darkness; the plate supplies
the timber. Palette inside the frame must match the tokens — iron-blue
night, snow, honey-and-silver pine, copper-amber glow. No text in images, no
people (hands and faces are not yet sanctioned; the family appears through
its work).

**The hewability test:** every surface must be something an axe actually
leaves — facets, scribe lines, readable grain, gravity-true log courses.
If a wall reads as milled dowels, kit-cabin roundwood, or fondant, it is
regenerated. The fiction's credibility rests on material honesty: a person
who has hewn a log must find nothing in the photograph the workshop could
not have cut.

**The lighting floor** (inherited from Schwarzwald's hard lesson): drama
comes from the direction and warmth of light, never underexposure. Mean
luminance ≥ 15; finish a well-modelled plate with a gamma midtone lift if
needed; never rescue an unmodelled one, never re-darken in CSS.

### Generation recipe (gpt-image, `tools/gen-image.mjs`)

Constant art-direction phrase per batch:

> "photographed on a moonless Nordic winter night, deep blue-black
> darkness, generous warm amber lantern light that fully models every hewn
> surface — axe facets and pine grain clearly readable, soft warm fill so
> nothing is lost to shadow, rich chiaroscuro, snow catching the glow,
> ultra-premium museum-grade photography, no text, no people."

Subjects: the lit house in snow, the nov corner, the broad axe and
shavings, ring cross-sections, drying stacks, the hearth room, the four Tun
houses. Pipeline: raw PNGs → `assets-src/` (gitignored) → `sips` JPEG q≈78,
longest edge ≤2048 → `public/plates/`. Target ≤500KB. Portrait plates at
1024×1536 with the CSS box at 2:3.

---

## 8. Copy voice

The workshop speaks like an eighth-generation master: quiet, exact, certain.

- **Declarative, short, unhedged.** "We do not build cabins. We raise
  houses."
- **Material specificity is the poetry.** Never "quality craftsmanship" —
  instead "malmfuru blazed seven winters before it is felled, cut in the
  two coldest weeks of January, dried seven years under our sheds."
- **The workshop never begs.** No exclamation marks, no testimonials, no
  "book now". The strongest line permitted is a fact: "Three houses leave
  this valley each year."
- **Honesty as luxury — the setning admission.** A log house sinks: about
  two centimetres for every metre of wall, across its first seven winters.
  The admission is formal, named, and answered by craft (doors and windows
  built to ride the settling; the seventh-winter visit). Documented once,
  with dignity — it makes every other claim credible.
- Norwegian terms italic with a gloss on first use (*medrag*, "the scribed
  underside groove"). Sentence case everywhere except tracked-caps labels.
- **Never:** "cabin" for the houses (they are houses; "log cabin maker" is
  the outside world's phrase, permitted only in metadata), "rustic",
  "cozy/hygge" (costume, and Danish besides), discount or urgency language,
  "premium/luxury/exclusive" as adjectives, emoji, troll-and-viking kitsch.

---

## 9. Floors (non-negotiable)

- **Accessibility:** visible `:focus-visible` (copper outline, 4px offset);
  decoration `aria-hidden`; body text ≥7:1 on `--natt`; the ring scribe is
  a native range input with a real label and `aria-live` output; full
  keyboard path.
- **Progressive enhancement:** complete page with JS off; `?nofx` disables
  entrance FX for the screenshot loop.
- **Performance:** images ≤500KB, no videos yet (a settle video of firelight
  is budgeted for a future pass), Google Fonts only (2 families), no JS
  frameworks — static Astro + vanilla script.
- **Mobile-first:** same darkness, same cadence; rails and cursor are
  desktop grace notes; a smaller window in the same night, not a lesser
  house.

## 10. Quick self-review

1. Could this screen belong to a cabin-rental site, a timber contractor, or
   Schwarzwald? → make it more Malmfuru.
2. Any brass-yellow, warm ground outside the hearth chapter, card grid,
   rounded corner, gable, diamond, urgency copy? → remove.
3. Copper >5% of the frame? → dim it.
4. Does every animation settle into stillness? → fix the busy one.
5. Does it read as *a workshop receiving a letter* rather than *a site
   converting a user*? → ship.
