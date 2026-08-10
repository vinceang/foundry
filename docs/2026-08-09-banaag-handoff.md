# Banaag — handoff

**Built:** 2026-08-09 · **Series:** **Vesper** · **Project:** `sites/banaag`
**Live:** https://banaag-hulmahan.vercel.app

A custom jeepney body shop on the MacArthur Highway at Barangay Sindalan, City
of San Fernando, Pampanga. Twenty-two men, one buck, nine to fourteen bodies a
year, 521 since 1978.

**Thesis:** *we build the body; you finish it every morning, before the sun.*

Source of truth: [`sites/banaag/DESIGN.md`](../sites/banaag/DESIGN.md).

## Two things this site adds to the collection

### 1. A Vesper whose subject is the lamp

The backlog pencilled Vesper and Vesper is right, but **half the register's
subject rule fails here and that is written into `foundry-series.md` rather
than smuggled.** Vesper's subjects are *things in transit; worlds built on not
being seen*. A jeepney is the purest ground-level case of the first half and a
flat contradiction of the second — it is decorated for exactly one purpose, so
that a commuter standing at a corner in the dark picks **this** unit and not
the one behind it.

The register holds because **the register is a decision about light**, and the
Philippine dispatch hour (04:30–05:20) is civil twilight exactly. What changes
is the *source*: Auriga and Velum take theirs from the horizon, Hurr from a
lantern at arm's length. Here **the vehicle is itself the light source** — the
valance tubes are lit, the stainless throws the sky back, and the chrome is
doing at 04:41 what it was bolted on to do. The afterglow is *behind* the
vehicle.

Palette consequence: two accents, one warm and one cool, with hard roles.
**Liwayway** `#e6b043` is the dawn band and does structure only. **Tubo**
`#5ed3b8` is the vehicle's own electricity and appears *only* where the jeepney
is powered — the valance in the drawing, the rotor strip. If Tubo shows up
where nothing is switched on, delete it.

### 2. Bespoke without luxury — the first site whose buyer is not rich

Twenty-two of the other sites sell scarcity to people with money, in a tone of
*restraint as privilege*. A jeepney operator finances the largest purchase of
his life after his house over three to five years. So:

- **Every price is published**, itemised, in pesos, and adds up while you
  change your mind — ₱698,800 to ₱1,551,400 for a body, ₱2,400 to ₱52,000 for
  fittings. These are the computed floor and ceiling of the model in
  `hulma.mjs`, not a rounded claim.
- **Terms are part of the product**: 30% deposit, the balance sa *hulugan* over
  24/36/48 months at **no interest**, printed beside the thing it must be
  compared against — a provincial unit takes ₱700–₱1,100 boundary a day.
- **The filter is passion, not money.** "Come with a picture in your head and
  we will build that. If you want the same body as everybody else, there are
  three shops in Guagua who will do it faster and cheaper, and we will tell you
  which ones."
- **Restraint is deference, not scarcity.** The page is austere because the
  vehicle is loud. All saturated colour lives inside the photographs and inside
  the buyer's own drawing.

## Signature — "Ang hulma" (the chalk)

A jeepney body is chalked out full size on the floor before a panel is cut, so
the configurator *is* the shop's first working document. A side elevation
redraws live:

- **Kapasidad** 14–22 *upuan* → `bays = cap/2 − 3`, so the **window bays
  multiply and the wheelbase stretches**. The vehicle changes proportion, not
  scale (4,900 → 8,030 mm overall).
- **Chassis** changes nose length, wheel diameter and the price floor.
- **Bubong / kabayo / ilaw / pinta** add the roof rack, the chrome stallion,
  the valance rows and rotor ticks, and the letrista's linework.
- **The two typed fields are the point.** The buyer's **route** appears
  hand-lettered on the drawn *karatula* and their **dedication** along the
  flank — the site's display face is a signage face precisely so this works.
  Nothing else in the collection puts the buyer's own words on the product.

The same panel is the build sheet and files the order, in **Buong katawan** or
**Pakabit lang** mode.

**One module, two runtimes** (the Hurr pattern, and it earned its keep again):
`src/lib/hulma.mjs` owns every coordinate and every peso, `src/lib/draw.mjs`
turns a result into SVG, and both the Astro frontmatter and the client script
import them. The drawing is finished before any JavaScript runs and the live
redraw cannot drift from the server's.

## What the critique loop caught (worth keeping)

- **The nose was broken and the horse was a blob.** The first silhouette let
  the front wheel arch cut straight through the hood line, and the visor
  segment doubled back on itself. Fix: one closed outline traversed
  counter-clockwise with the arches cut *into* the underside, the hood raised
  to 1 560 mm, and everything the letrista paints clipped to the body path so a
  stripe cannot run off the nose. The kabayo was rebuilt from overlapping
  filled primitives (all wound the same way, nonzero fill) because a single
  clever path kept punching holes at 50 px.
- **A mobile bug that clipped the form off the screen.** The drawing's
  `min-inline-size: 56rem` propagated out through the grid column — grid items
  default to `min-width: auto` — and `body { overflow-x: hidden }` then clipped
  every control unreachable. `.hulma__grid > * { min-inline-size: 0 }`, and the
  scroll belongs to the frame alone.
- **The hero crop lost the man with the rag on mobile**, which is the entire
  argument. A shorter box gives a wider crop; the position walks back to him.
- **The rotor strip was ten dead boxes with motion off.** The cut pattern is
  now real state (`data-on`), so it carries information before anything
  animates.
- **The rotor chapter had the mechanism backwards.** See below.

## What the world audit caught (the expensive ones)

1. **The PUV Modernization Programme was missing.** A site set in 2026 that
   sells traditional bodies on pre-Euro-4 surplus engines and never mentions
   that they cannot be plated as new franchises is fiction in the bad way. The
   shop now says it before it takes any money, and asks about the paper before
   the picture: most of what leaves the gate is a **rebody** for a unit that
   already holds a line. This is a *stronger* anti-luxury argument than the one
   it replaced.
2. **The rotor was described backwards.** A San Fernando rotor is a **steel
   barrel**, and the barrel is the conductor: each bulb's wire ends in a
   **hairpin** riding on bare steel, and the wireman lays **tape** to break the
   contact. One hairpin is one bulb; one strip is one interval of *darkness*.
   So the pattern is never written on — it is **cut as silence**. Correct fact
   and better sentence in the same move.
3. **Kapampangan.** San Fernando's floor language is not Tagalog. The surnames
   and towns already were Kapampangan; the voice was Manila. Translating the
   site would be costume, so it *acknowledges* instead: the floor argues in
   Kapampangan and the sheet is written in Tagalog, because that is the
   language a franchise application is in. Tagalog carries `lang="tl"`.
4. **`hulmahan` was invented.** The trade's word for a body shop is
   **karosera**. `hulma` for the wooden buck is correct and stays.
5. **Numbers that disagreed with each other**: the rotor priced two ways
   (₱68,000 in the option vs ₱42,000 in the chapter — now ₱83,000 = double row
   plus a ₱42,000 rotor); 162 bodies since 1978 against 9–14 a year (now 521);
   a hardcoded "third in the queue" against a computed slot; duplicate `Presyo`
   rows in two dialogs; a thin space and a comma inside one currency line.
6. **Fifteen Tagalog corrections**, including `kinamay` → `sulat-kamay` (it
   means *handled*, not hand-lettered), `sikat ng araw` → `pagsikat`, `hulog` →
   `hulugan`, `bawat panig` → `bawat gilid`, and `Kabit lang` → `Pakabit lang`,
   which in colloquial Tagalog otherwise reads as *just a mistress*.

## Conventions

- **Opening move: the chalk dimension in the margin.** Chapters open cold — no
  label above the heading — with one measured fact in the left rail between two
  end ticks, the way a body layout is annotated. Seven shipped, each a fact the
  chapter would lose. Deliberately **not** Hurr's inline dot-separated readout;
  the register had already spent that.
- **Signature geometry: the dimension line** — a hairline with a perpendicular
  tick at each end. Section rules are dimension lines. Zero border-radius
  except where the vehicle is round.
- **Type:** Big Shoulders Display (a civic signage face — the buyer's route is
  set in it on the drawn board) + Public Sans (a franchise application's
  temperature). The collection's first site with no serif at all.
- **Assets:** eight `nano_banana_pro` plates at 2k on one constant
  art-direction phrase, mean luma 47–105 (no lift needed), shipped as WebP,
  all ≤ 415 KB. Raw PNGs in `assets-src/` (gitignored).
- **Deploy:** `banaag.vercel.app` was already taken by a stranger's app, so
  this shipped as **`banaag-hulmahan`**. Checked with a `curl` before linking,
  per the Traccia lesson.

## Verification

- `npm --prefix sites/banaag run build` clean.
- Anti-pattern detector: **0 findings**. The em-dash advisory remains and is
  waived — the count is dominated by route separators (`San Fernando — Sto.
  Tomas`, which is literally how a signboard is written) and gloss dashes, not
  prose cadence.
- 11px floor: clean, including the SVG text, which is why
  `.hulma__frame svg` carries `min-inline-size: 56rem` and scrolls on a phone.
- JS-off: complete, including the server-rendered drawing and all six plates.
- Production screenshotted at `shots/prod-hero.png`, `shots/prod-sig.png`,
  `shots/prod-draw.png`.

## Left for later

Two of the three critique agents (visual design, and the accessibility/floors
audit) were cut off by a session limit before reporting. The floors were
verified by hand — JS-off, 11px, contrast solved against the second ground,
keyboard paths, reduced motion, image weights — but **a full accessibility
pass on the `<dialog>` enlargements and the form's error/sent states has not
been independently reviewed.** That is the first thing to run against this site.
