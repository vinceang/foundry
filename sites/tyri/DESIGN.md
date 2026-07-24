# TYRI — Design source of truth

*Written 2026-07-24, before any component, in a `--dry-run` rehearsal of the
backlog's "Nordic log cabin maker" entry.*

## The one-line brief

**Houses cut in winter.**

## Identity

**Name:** Tyri — Norwegian for the resin-saturated heartwood of old pine,
the wood dense enough to burn as a torch. It is what the yard builds from
and what the palette's one warm note is named after.
**Series:** Pastorale — *proposed new register* (see the draft addition in
`docs/foundry-series.md`). The open-air voice: craft worked under the sky.
**Place:** Rollag, Numedal, Norway — the valley with the country's densest
stock of standing medieval log buildings. The lofts that survive there have
carried their own weight for six hundred years; the yard works in their
sightline.
**Founding:** the yard has hewn in Rollag since 1911; fourth generation.
**Proposition:** a log house whose only fastener is weight.

## The series argument (recorded because it was the hard call)

The backlog entry says "series decided at build time — argued from doctrine."
The argument:

- **Native hour.** Laft timber is felled in January and February, sap down,
  and hewn outdoors through the cold months. The world lives in the short
  winter workday: broad, diffuse, low-angle snow-light. Not a lamp at night.
- **Not Nocturne.** A snow yard is the brightest landscape on earth.
  Chiaroscuro here would be exactly the over-dark costume the skill warns
  about (the jet-charter failure). Craft ≠ dark.
- **Not Aubade.** The subject is a maker, not a host; the audience commissions
  an artifact (at house scale), it does not book a stay. And Aubade's light is
  warm Mediterranean morning; Numedal's is cold, blue, and low.
- **Therefore a new register**, per Phase 0: Pastorale. Its inversion of
  Nocturne is exact — Nocturne pulls warm light out of darkness; Pastorale
  pulls warm material out of cold light.

## Binding palette — materials from the world

| Token | Value | Role |
|---|---:|---|
| Snølys | `#eef1f0` | Page ground — overcast light on snow |
| Nysnø-skygge | `#c9d3d6` | Snow-shadow blue; quiet fields, figure grounds, placeholders |
| Vinterhimmel | `#5a6b75` | Slate winter sky; cool counterpoint, captions, form focus |
| Nyhogd furu | `#e3d2ae` | Fresh-hewn sapwood; panels and surfaces |
| Tyri | `#a8701f` | Resin heartwood amber — the ONE warm note: labels, hairlines, links, one primary action |
| Tjære | `#221a10` | Pine tar — ink, frames, structural dark |

**The tyri rule** (the register's version of Nocturne's metal): amber appears
only where the craft's warmth actually is — whisper labels, hairline rules,
link underlines, one button per view. If amber exceeds ~5% of a frame it has
become varnish; pull back. Cold ground, warm accent, never the reverse.
Body text is tjære on snølys (≈14:1, verified).

## Type

- **Besley (regular + medium only)** — the display voice. A Clarendon: slab
  brackets with the sturdiness of beam carpentry. Statements, numbers written
  out in full, chapter openings.
- **Schibsted Grotesk** — the working voice, and a Norwegian face. Body,
  facts, forms, and tracked-caps whisper labels (11px, 600, .32em, in tyri).

Neither face is used by any sibling site.

## Signature geometry

The **log end**: a circle crossed by one radial hairline (the drying check).
It is the only curve and the only ornament on the site — chapter marks,
list bullets, the favicon. Everything else is sawn square: zero
border-radius.

## Vocabulary — the domain's own nouns, navigation included

laft (the technique) · **nov** (the corner joint) · **medfar** (the long
groove hollowed so a log rides the one below) · **meddrag** (the scribe that
draws it) · kinning (flattening the log's faces) · tun (the yard) · malmfuru
(dense heartwood pine) · sperr (rafters) · torvtak (turf roof)

Navigation: **Skogen** (the forest) · **Tunet** (the yard) · **Novet** (the
corner) · **Husa** (the houses) · **Tinging** (commission).

## Page arc

`Skogen → Tunet → Novet → Husa → Tida (settling) → Folka → Tinging`

One line: *one pine becomes one house — the forest in winter, the yard where
it is hewn, the corner that locks without iron, the houses standing, the
settling years, the people, and how to commission one.*

## Signature interaction — Novet, the corner that assembles as you scroll

The one bold spend (bettering the backlog seed). A sticky stage holds a
drawn elevation of a laft corner: two walls crossing, six courses. As the
visitor scrolls through the chapter, logs arrive alternately from left and
right and **settle downward** into their notches, course by course, and the
captions step through the craft's own sequence: kinning → medfar → nov →
lock. The chapter ends on the fact the whole yard rests on: **"No nails. No
glue. No iron. The weight of the wall is the fastener."**

Scroll maps to assembly progress (scrub, not trigger), so the visitor can
raise and lower the wall at will. JS off / reduced motion / `?nofx`: the
corner stands fully assembled with all four captions listed — the finished
composition, never a broken one.

All other motion is settling weight: one easing
(`cubic-bezier(.19,1,.22,1)`), long durations, reveals that drop a few
pixels into place like a log seating. One ambient effect per viewport max.

## Imagery — the Pastorale recipe, first statement

**One recipe: cold diffuse daylight, snow ground, warm timber the only
warmth.** The subject fully lit by sky-light — generous and even, never
murky, never golden-hour grading. Blue lives in shadows only; amber lives in
wood only. People are makers at work, dressed for the cold, breath visible.

Constant batch phrase: *"overcast Nordic winter daylight, soft even cold
light, snow on the ground, pale white-grey sky, warm ochre pine timber the
only warm note, faint blue shadows, documentary architectural photography,
muted palette, no text."*

Dry-run shot list (6 finals):
1. `hero-tunet` — the yard: a half-raised log frame on stone footings, snow, spruce behind
2. `nov` — crossing log heads at a corner, axe-faceted, dusted with snow
3. `medfar` — material close-up: the hollowed underside, fresh chips, resin
4. `folka` — a lafter astride a log mid-swing with the broadaxe, breath visible
5. `hus-inne` — finished log room: pale window light, timber walls, wood stove
6. `hus` — a finished house standing in snow, low afternoon light

Placeholders for the rest: solid nysnø-skygge / nyhogd furu blocks at the
intended crop.

## Copy voice

Declarative, numeric, winter-specific. "Felled below minus five, January and
February." "A three-metre wall settles four centimetres in its first two
years — the doors are hung to expect it." Never "luxury," never urgency; the
one formal admission: a log house moves, and Tyri says so plainly.

## Build status (dry-run, completed 2026-07-24)

All 6 planned finals were generated and shipped (no CSS placeholders needed
for the built sections): `hero-tunet`, `nov`, `medfar`, `folka`, `hus-inne`,
`hus`. Optimized to `public/images/` as full (≤1536px) + `-800` variants,
all ≤500KB. The human-presence shot (`folka` — a lafter mid-swing, breath
visible) anchors the Folka chapter, per doctrine.

Exposure note (the taste correction this rerun exists for): Pastorale is a
*bright* register, so the asset-pipeline's Nocturne 20–40 luma band does NOT
apply — a snow yard should read at 120–170 mean luma. Measured means:
hero 135, nov 110, medfar 167, folka 150, hus 127, hus-inne 68 (dim interior,
still fully modelled, not murky). None were darkened in CSS.

Page built out to the full arc: hero → Skogen → Tunet → Novet (signature) →
Husa → Tida → Folka → Tinging. The Novet corner assembles course-by-course
on scroll (verified mid-scroll: 5/9 pieces seated at 40%); JS-off / `?nofx` /
reduced-motion all render the finished assembled corner with all four
captions. Floors verified: JS-off complete page, body contrast 15:1, all
images ≤500KB, dedicated mobile pass, focus-visible amber outline.

## Never

Chiaroscuro or a dark ground (that is Nocturne's lamp) · golden-hour /
"cozy cabin" orange grading · hygge-kitsch (candles, fairy lights, mugs) ·
lifestyle models · rounded corners · card grids of "models" (each house is
one commission, shown editorially) · Alpine/chalet costume — the vocabulary
is Norwegian laft, used correctly · tan-on-cream body text.
