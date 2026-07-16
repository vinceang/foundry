# Shokunin — Design Language

The style guide for **Shokunin – Bespoke Samurai Ateliers**. Everything built
under this brand must pass one test: *does it feel like a private armory at
night, seen by the light of a single lamp?* If a screen could belong to a
normal store, it is wrong.

This document is binding for future pages (cart/petition flow, atelier pages,
archive years, editorial). Tokens live in `src/styles/global.css`; this file
explains the intent behind them so new work extends the brand instead of
diluting it.

---

## 1. Brand foundation

### Positioning

Shokunin is **not a shop**. It is a commission house — three master ateliers,
twelve works a year, released by petition. Every design decision flows from
three consequences of that fiction:

| Fact of the world | Design consequence |
|---|---|
| Twelve works a year, no more | Scarcity is content. Show what is *sealed*, not just what is for sale. Never paginate, never grid-dump products. |
| Works are museum-grade artifacts | Presentation is curatorial: one work at a time, generous darkness around it, provenance and craft record instead of marketing bullets. |
| Acquisition is by petition | The user asks; the house grants. CTAs are invitations to correspond ("Petition to acquire", "Request an audience") — never urgency ("Buy now", "Only 2 left!", timers, discounts). |

### Vocabulary of the world

Use these words consistently; they are the brand's API:

- **The Register** — the annual ledger of works. Never "catalog", "shop", "collection page".
- **Work** + roman numeral (`Work IV of XII`) — never "product", "item", "SKU".
- **Petition** — the act of asking to acquire. Never "order", "checkout", "add to cart".
- **Audience** — a meeting with the masters. Never "consultation", "sales call".
- **Sealed / Unsealed** — availability states. Never "out of stock / in stock", "coming soon".
- **Dossier** — a work's detail page. **Craft record** — its long-form notes. **Investiture** — delivery.
- Statuses: `Open to petition` · `Under petition` · `Sealed`.

### Naming works

Every work has: a poetic Japanese name (romaji, macrons kept — *Gesshō*),
its kanji (月照), a one-line reading ("moonlight on still water"), and a
register numeral. Names come from nature and weather, never from aggression
("Skullsplitter" is the opposite of this brand).

---

## 2. Color

The world is lacquer seen by lamplight. **Darkness is the ground; gold is the
light; silk is the voice.**

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--void` | `#0a0705` | Deepest ground: footer, doctrine, between-chapters |
| `--urushi` | `#120d0a` | Default page ground (black-brown lacquer, *not* neutral black) |
| `--urushi-2/3` | `#1a130e` / `#241a13` | Raised lacquer surfaces, cards |
| `--roiro` | `#1d140f` | Polished black-lacquer room, warm where lamplight collects. Doctrine only on the home page; never a general alternate background. |
| `--nashiji` | Kin-tinted SVG particulate at 8.5% alpha | Pear-skin lacquer speckle on raised panels. Always paired with `--urushi-2/3`; never a chapter ground or image overlay. |
| `--kon` / `--kon-2` | `#131c26` / `#1b2733` | Indigo depth panels — one chapter per page, no more |
| `--kin` | `#c2a061` | Smoked gold: labels, marks, primary buttons |
| `--kin-bright` | `#e6cd93` | Gold at full lamplight: hovers, active states, glints |
| `--kin-deep` | `#8f7440` | Gold in shadow; selection background |
| `--kin-faint` | `rgba(194,160,97,.38)` | Hairline gold: frames, dormant marks |
| `--silk` | `#e9dfcb` | Primary text |
| `--silk-dim` | `#9c9080` | Body copy, secondary text |
| `--silk-faint` | `rgba(233,223,203,.42)` | Whisper text: legal, sealed rows |
| `--line` / `--line-soft` | gold/silk at ~0.2/0.1 alpha | Rules and borders |

### Rules

1. **Gold is light, not paint.** It appears where light would strike: labels,
   edges, marks, one primary button per view. If a screen is >5% gold by
   area, it has become jewelry — pull back.
2. **Kon indigo is atmosphere, not variety.** At most one indigo chapter per
   page (ateliers, provenance). It reads as "night air outside the lamp".
3. **Roiro is the house under lamplight.** It lifts the home Doctrine one
   step above void so material hierarchy reads before texture. Do not repeat
   it elsewhere on the home page or use it as a generic warm section.
4. **Text sits on darkness, never on gold** except inside the primary button
   (`#14100a` on `--kin`).
5. **Forbidden:** red/vermilion in any form (it belongs to the sibling brand
   Kaji), pure `#000`/`#fff`, saturated accent colors, gradients as
   decoration (gradients exist only as photographic shade/vignette).

---

## 3. Typography

Three voices, strict casting:

| Face | Token | Role | Rules |
|---|---|---|---|
| **Marcellus** | `--display` | Display: names of works, headings, numerals, prices | Always regular weight. Tracking `.04–.1em`. Uppercase only for the wordmark and hero. Sizes via clamp, up to ~138px (hero) / 78px (dossier name). |
| **Manrope** | `--body` | Body & labels | Body at 300, 16px/1.7. Labels: 10.5px, weight 600, tracking `.3–.42em`, uppercase, usually `--kin`. |
| **Zen Old Mincho** | `--kanji` | Kanji accents only | Never sets Latin text. Used for: work kanji, vertical rails, the giant watermark glyph, seals. |

### Hierarchy recipe

Every chapter opens the same way — this cadence *is* the brand's rhythm:

```
LABEL IN GOLD TRACKED CAPS        ← .label (the whisper)
Large Marcellus statement          ← .display (the voice)
Manrope body in --silk-dim         ← the explanation
```

Numbers that matter (prices, counts, register numerals) are Marcellus, one
size up from their context. Prices always full-width yen: `¥18,400,000` —
never abbreviated ("¥18.4M" is a stock ticker, not a register entry).

### Kanji usage

Kanji is ornament with meaning — every glyph used must be real and correct
(職人, 月照, 銘鑑, 証). Kanji never carries information silk text doesn't
also carry; it is `aria-hidden` decoration or paired with romaji.

---

## 4. Space, layout, structure

- **Rhythm:** 8px scale (`--s1…--s9`, 8→192px). Chapters separated by
  `--s9`-class padding. When in doubt, add darkness — emptiness is the
  luxury signal.
- **Gutter:** `--gutter: clamp(20px, 5vw, 96px)`. Content max-width 1280px
  (880px for reading columns).
- **The frame:** every page carries the fixed corner fittings (`.hud-frame`)
  inset by `--frame` — the lacquer-box corners. They are the game-UI signal;
  do not remove, do not add more chrome around them.
- **Asymmetry:** work rows alternate media side and column ratio
  (5:6 / 7:4 / 4:7). Never a uniform card grid — a grid says inventory;
  alternation says curation.
- **The diamond (◇, 45°-rotated square)** is the house geometric mark: brand
  seal, chapter-rail dots, provenance nodes, hotspot rings, register seal.
  It is the only ornament shape. No circles-as-decoration, no rounded
  corners anywhere (`border-radius: 0` implicitly everywhere except the
  cursor ring).
- **Hishimon is the interior wall textile.** `.hishimon` repeats the house
  diamond as a kin-thread lattice on a 96px field: lines never exceed 3%
  alpha, while the crossing glints may reach 12% because they read as metal
  catching lamplight. A vertical mask lets the lattice arrive and recede
  with the chapter's light. It belongs only where the house speaks in its
  own voice: the Doctrine, the Commission rite, and dossier Craft record.
  Never place it on Register imagery, the kon Atelier/Provenance chapter,
  the hero, or a nashiji panel. The diamond is house identity here, not a
  borrowed wallpaper motif.
- **The sealed ledger is raised lacquer, not loose paper.** Its enclosing
  panel uses `--urushi-2` with `--nashiji`; hairline-separated rows remain
  ledger-like, while the material surface makes the annual register feel
  handled and kept. Nashiji does not extend to the surrounding chapter.

### Page anatomy (home)

`Hero (full svh) → Doctrine (roiro + hishimon + watermark kanji) → The Register (works,
alternating) → Sealed ledger → Ateliers (kon) → Commission rite → Footer`.
New pages follow the same arc: *arrive in darkness → doctrine → material →
invitation*.

The Ateliers chapter contains two asymmetric spreads. The first introduces
the three lineages with documentary photography on the left; the second
reverses the cadence, placing the material record on the left and a close
craft image on the right at the 960px breakpoint. The text must explain what
the image proves — named materials, durations, and hand process — rather than
serve as a generic image caption. On smaller screens both spreads become
text-led vertical chapters.

---

## 5. Imagery

The photography is the brand's largest surface. One recipe, no exceptions:

- **One subject, one warm light.** A single tungsten-warm key light (shaft
  from above, or low raking side light). Everything else falls to black.
- **Background is void.** No environments, no lifestyle, no context — except
  the atelier documentary shots (hands, tools, lantern), which keep the same
  one-lamp rule and never show faces.
- **Palette inside the frame** must match the tokens: lacquer black-browns,
  indigo silk, aged gold. If a prop introduces red, crop it or reshoot.
- **No text in images. No people** (except anonymous craftsman hands).

### Generation recipe (Higgsfield `soul_2`)

Keep one art-direction phrase constant across a batch:

> "…pitch-black background, single warm key light, deep chiaroscuro shadows,
> museum artifact presentation, ultra-premium, no text, no people."

Pipeline: raw PNGs → `assets-src/` (gitignored) → `sips` JPEG q≈78, longest
edge ≤2048 (≤1400 for detail shots) → `public/works/`. Target ≤500KB per
image.

### Motion imagery

Video is rare by policy — that is what makes it premium, and it must earn its
place: if the shot could be faked with a CSS transform on the still (a zoom,
a pan), use the still. Video exists for what only a camera can do — parallax,
revealed geometry, light raking across a surface.

Rules: **the camera may move as a visitor would** — a slow constant-speed
arc around the vitrine, or near-imperceptible drift; never a full turntable
revolution (that is product-configurator language), never handheld, never a
crash move. **The subject never moves.** Ambient life (dust, breathing
light) is welcome. Generated from the exact still it layers over
(start-frame = the still) so the loop can dip back to the image seamlessly;
desktop-only, lazy-loaded, `prefers-reduced-motion` and Save-Data respected.
One video per page, maximum. Compress before shipping (x264 crf ~24 — the
dark footage compresses extremely well; target ≤4MB).

---

## 6. Motion & interaction

**Physics:** one easing curve for everything — `cubic-bezier(.19,1,.22,1)`
(`--ease`), long durations (0.9–1.4s reveals, 2s+ fades). Nothing bounces,
nothing snaps. Light behaves like light: fades, breathes, glints.

**Vocabulary** (reuse these; don't invent new effects per page):

- `.rv` — rise-and-fade reveal, staggered by `--d` (110ms steps)
- `.rv-line` — masked line reveal for display headings
- Letter-spacing expansion on hover for "open" links (`.35em → .5em`)
- Brightness lift on imagery hover (`filter: brightness(.92 → 1.05)`) —
  the lamp turned up, not a zoom
- Gold glow (`box-shadow` in `--kin` alpha) marks *active/live* things:
  chapter-rail current, hotspot rings
- Custom cursor: gold ring, fine pointers only, scales on interactive targets

**Restraint rules:** one ambient effect per viewport (dust motes OR video
breathing, never stacked with a third). Every animation must be motion
*toward stillness* — entrances settle, loops breathe; nothing loops busily.
All motion is progressive enhancement: the page is complete with JS off, and
`prefers-reduced-motion` gets the finished, static composition.

**The signature interaction** is inspection: pulsing diamond hotspots on the
artifact open annotation cards (`.spot` / `.spot-card` in the dossier).
Future interactive features should extend *inspection* (zoom, rotate,
material layers) — the collector's gesture — not gamification.

---

## 7. Components

| Component | Form | Notes |
|---|---|---|
| **Primary button** (`.btn-gold`) | Solid `--kin`, dark text, 15px/34px pad, tracked caps 11px | One per view. Hover → `--kin-bright`. |
| **Ghost button** (`.btn-ghost`) | 1px `--line` border, silk text | Secondary actions. Hover → gold border/text. |
| **Status chip** (`.work-status`) | 1px border, tracked caps 10.5px | Gold text when open, dimmed when pending. Never colored badges. |
| **Label** (`.label`) | 10.5px/600/.42em caps, gold | The universal eyebrow. `--dim` variant for metadata. |
| **Ledger row** (`.sealed-row`) | numeral · hint · date · ◇, hairline-separated | For anything list-like: sealed works, archives, correspondence. |
| **Spec sheet** (`.record-specs`) | Bordered panel, label-over-value rows | The "museum placard". |
| **Provenance timeline** (`.prov-line`) | Vertical hairline, diamond nodes | Stage / detail / date triplets. |
| **Register seal** (`.seal`) | Bordered diamond + kanji 証 + attestation line | Closes every dossier; the house's signature block. |
| **Chapter rail** (`.chapters`) | Fixed left diamonds, scroll-spy, **vertical** labels | Desktop >1320px only. Labels are set `writing-mode: vertical-rl` so the whole rail stays a ~26px column — see "Fixed chrome never touches content" below. |
| **Brand seal** | 職 in a bordered diamond | The favicon/avatar mark. |

### Fixed chrome never touches content

Decided 2026-07 after both fixed elements collided with body text in the wild:

1. **The header veils and withdraws.** Transparent only over the hero. Past
   ~40px of scroll it takes the *veil* (`.is-veiled`: `rgba(10,7,5,.88)` +
   12px backdrop blur + hairline bottom border, tightened padding) so text
   is never read through it. Scrolling **down** past ~240px it withdraws
   entirely (`.is-withdrawn`, translateY(-102%)); scrolling **up** it
   returns immediately, veiled. Rationale: while reading/descending, the
   reader needs nothing from the chrome — darkness is the luxury; the
   moment they scroll up they are looking for the way somewhere, so the
   nav meets them. (Same behavior as the kaji site; a 4px hysteresis
   prevents jitter.)
2. **Rail labels are vertical, outside the diamonds, reading bottom-to-top.**
   Horizontal labels grew rightward into the content column at common laptop
   widths. The label now sits *between the screen edge and the diamond
   column* — spine text — so the diamonds are the outermost boundary of the
   chrome and the content keeps the full gutter as breathing room (≥24px
   clearance at every width where the rail renders, >1320px). Orientation is
   **bottom-to-top** (`vertical-rl` + 180° rotation): the left-spine
   convention for rotated Latin. Top-to-bottom vertical writing is reserved
   for the upright kanji rails (tategaki); rotated Latin follows the Latin
   rule. Only one vertical label shows at a time (active yields to hover).

The generalized rule for future chrome (toasts, cart drawer, back-to-top):
**fixed elements live in the frame margins or on the veil — never bare over
content.** If a fixed element must cross the content column, it carries the
lacquer veil treatment.

Forms: `/petition/` is the house writing desk. It follows the correspondence
treatment shared by the sites at the interaction level — a dedicated letter
page, preselected matter from dossier CTAs, and a mail-client handoff — while
remaining materially Shokunin: a nashiji lacquer panel, underline-only fields,
tracked kin labels, and the diamond as select mark. A petition feels like
writing a letter, not filling a checkout: single-column, generous vertical
rhythm, no progress gamification. Dossier CTAs pass
`?matter=work-<slug>`; the home commission passes `?matter=commission`.

---

## 8. Copy voice

The house speaks like a quiet, absolutely confident curator.

- **Declarative, short, unhedged.** "We do not sell armor. We release it."
- **Material specificity is the poetry.** Never "high quality" — instead
  "eight grounds of black urushi, each cured nineteen days". Numbers, hours,
  generations, temperatures.
- **The house never begs.** No exclamation marks, no "don't miss", no social
  proof, no reviews. The strongest sales line the brand permits is a fact:
  "One commission a year is accepted."
- **Honesty as luxury:** flaws are documented, named, and dressed in gold
  (the kintsugi custom) — the brand admits imperfection formally, which
  makes every other claim credible.
- Sentence case everywhere except tracked-caps labels. Japanese terms in
  romaji with a gloss on first use ("kachi-iro, 'the color of victory'").

**Never:** discount language, urgency timers, "premium/luxury/exclusive"
as adjectives (the design must prove it; saying it cheapens it), emoji,
cosplay/battle-fantasy framing.

---

## 9. Floors (non-negotiable)

- **Accessibility:** visible `:focus-visible` (gold outline, 4px offset);
  all decoration `aria-hidden`; body text ≥ `--silk-dim` on `--urushi`
  (≈7:1); hotspots are real `<button>`s with labels and `aria-expanded`;
  full keyboard path incl. Escape to close cards.
- **Progressive enhancement:** complete page with JS off (`html.js` gates
  all hiding); `?nofx` disables entrance FX for the screenshot loop.
- **Performance:** images ≤500KB, video ≤6MB desktop-lazy, system-loaded
  Google fonts only (3 families max), no JS frameworks — the site is static
  Astro + vanilla script.
- **Mobile:** same darkness, same cadence. Chapter rail and cursor are
  desktop grace notes; mobile keeps hero shade legibility (deeper gradient),
  stacked work rows, full-width tap targets. Mobile is a smaller lamp, not
  a lesser brand.

## 10. Quick self-review

Before shipping anything new, check:

1. Could this screen belong to any other store? → make it more specific.
2. Is there red, a card grid, a circle, a rounded corner, urgency copy? → remove.
3. Is gold >5% of the frame? → dim it.
4. Does every animation settle into stillness? → fix the busy one.
5. Does it read as *released by a house* rather than *sold by a site*? → ship.
