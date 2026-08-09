# Hurr — handoff

**Built:** 2026-08-09 · **Series:** **Vesper** · **Project:** `sites/hurr`
**Live:** https://hurr-alain.vercel.app

الحر — falconry furniture in Al Jimi, Al Ain, at the foot of Jebel Hafeet.
Hoods, gloves, jesses, bells, blocks. Four benches.

**Thesis:** *a bird that could leave, and the four objects that ask it not to.*

Source of truth: [`sites/hurr/DESIGN.md`](../sites/hurr/DESIGN.md).

## The register call — Vesper, not the backlog's Nocturne

The backlog entry pencilled Nocturne on the usual reflex (leather + craft =
one lamp in a dark room). That is wrong here for a reason worth keeping:

> **Nocturne is an artifact held in reverence against a void. Falconry does
> not live indoors.** The bird is weighed at dawn and flown at dusk; the hunt
> is at last light; a hooded falcon waits through a darkness it cannot see.

And Vesper's own definition settles it — *its subjects are things in transit*.
A falcon flown free every day, which may not come back, is the purest case the
collection will ever have.

The point of difference from the two existing Vespers is deliberate. Auriga and
Velum are twilight **at altitude**: cold aluminium, a distant apricot horizon.
This is twilight **on the ground, in a desert** — leather, feather and brass,
with the warmth at arm's length (a lantern) rather than at the edge of the
world. Ember `#cb5f52` and Kabsa `#a8763f` deliberately avoid a third apricot;
Auriga (`#e8a26b`) and Velum (`#c9915d`) have spent that hue.

## Signature — "The burqu', cut to one bird"

The configurator-fused-with-the-order-form pattern, interpreted through the
craft rather than templated from Veta. A falcon's hood is genuinely bespoke —
a hood that does not fit is not a lesser object, it is a cruelty — so the
configurator is how this thing is actually ordered.

Species, head width, beak-to-crown, and eyas vs passage redraw the **three flat
pattern pieces of an Arab hood** the way a cutter would lay them: the block and
two side panels resize, the plume socket rides the crown, the braces lengthen,
a passage bird gets a deeper eye panel, a gyr a taller block. The same panel
takes the order.

**One module, two runtimes.** `src/lib/pattern.mjs` owns every coordinate and is
imported by both the Astro frontmatter and the client script, so the drawing is
finished before any JavaScript runs and the live re-cut cannot drift from the
server's. This was the fix for a real failure: geometry built in a `<script>`
with `createElementNS` gets none of Astro's scoped CSS and rendered as black
discs.

**The book gives the pattern back.** Section VI's ledger of past commissions was
a dead table with a hover colour that did nothing. Each row now carries a real
`<a href="#burqu">` that jumps to the configurator, and with JS on loads that
bird's species, measurements and temper into it. The copy already said the book
gives the pattern back; now it is literal.

## Things this build had to learn

- **SVG text scales with the viewBox.** The dimension labels were `font-size:
  12px` in a 920-unit box rendered at 671px — 8.8px on the page, under the 11px
  floor, and far worse on a phone. The grep-based floor check cannot see this.
  Both labels are now HTML positioned in per-cent of the frame; the drawing
  keeps only the lines.
- **A fixed viewBox clips at the extremes.** A gyr on a passage cut is much
  larger than a shaheen; the box is sized to the pieces, with symmetric gutters
  so the cut stays centred once the height label sits outside it.
- **`input[data-w]` matched the species radios**, which also carry `data-w`, so
  `Number("hurr")` made every derived figure NaN. Scoped to
  `input[type="range"][name="w"]`.
- **cm², not dm².** The divisor yields cm²; the label said dm² — 51.3 dm² is
  half a square metre of goat for one falcon hood.
- **Ember started at `#c2564a` = 4.19:1** and had no readable button label in
  either direction (3.51 bone / 4.19 zenith). Solved to `#cb5f52` = 4.70:1,
  which clears AA for labels *and* gives the button dark type at 4.70.
- **`outline: none` on `:focus`** removed the only focus cue on a field whose
  ember border is also its invalid state.
- **Six columns do not fit 390px.** The book is stacked entries by default and
  becomes a table at `min-width: 48rem` — mobile-first, `min-width` only.

## The form

`novalidate` plus our own check, so the failure path is the house's voice and
not a native browser bubble: per-field lines ("We need a name to write the
order against."), the count of what is missing, focus moved to the first
offender. Nothing is charged; the measurements are the order.

## Assets

Six plates, `nano_banana_pro` @2k, one constant art-direction phrase:

> *photographed at desert civil twilight, twenty minutes after sundown, the sky
> still luminous blue-violet with a low rose-ember band at the horizon; warm
> close lantern light on leather and feather; generously lit subject, never
> murky; large-format, fine grain*

All ≤160KB webp. `4-mangalah.png` came back a letterboxed composite with white
bands and a generated text tag; regenerated and cropped — no text in images,
ever. The bird is the subject's *reason*, never a trophy: no kills, no
dominance, no falconry-as-lifestyle.

Human presence: Saif at the bench under a lantern, saddle-stitching, dusk in
the open doorway behind him.

## Verified

- Production screenshot renders our page at https://hurr-alain.vercel.app
- Complete with JavaScript off, including the pattern at its default cut
- Reduced motion never adds `.fx` — the finished static composition
- `detect.mjs` exit 0 · 11px floor grep clean · every image ≤160KB
- Form walked at rest, focus, error and sent; error state screenshotted
