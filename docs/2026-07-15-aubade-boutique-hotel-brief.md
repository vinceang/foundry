# Brief — Lagar do Sol: residential and collected

*Intent set 2026-07-15; paired direction locked 2026-07-16; name and first build locked 2026-07-17.*

This captures the concept that became **Lagar do Sol**. Its place,
photographic system, and first implementation are now locked. It is the
project-specific companion to
[`aubade-taste-profile.md`](aubade-taste-profile.md).

## The intent

Create the first project in Foundry’s daylight series: a small house hotel
with the same rigor and elegance as the Nocturnes, but serene, airy, warm, and
bright. This is the **residential and collected** expression of Aubade. Its
soft contrast, tactile materials, and type should feel inherited and inhabited
rather than styled for a trend: cream, black, wood, botanicals, linen, plaster,
ceramic, and an old-style serif voice.

The site must feel like an experience of a particular house, not a light-theme
conversion of Shokunin and not a generic hotel booking template.

## Locked world

Design toward **Lagar do Sol, an 18-room restored Alentejo _monte_ on an olive
estate between Estremoz and Vila Viçosa, Portugal**. Its seventeenth-century
olive press is now the dining room; the house has grown around it.

The *monte* is the old farmhouse and domestic heart; the surrounding
*herdade* is the working rural estate. The setting brings whitewashed walls,
olive and cork groves, pale limestone and local marble, long horizons, shaded
courtyards, dry summer grasses, and an unhurried culture of the table. It must
feel Portuguese and specifically Alentejano without becoming a picturesque
theme hotel.

Audience: a design-aware guest choosing a restorative two- or three-night
stay. The site’s single job:

> Make someone feel what morning there is like—then invite them to stay.

## The house should feel inhabited

Potential evidence:

- Limewashed rooms with dark window frames and oak joinery
- Linen, woven rugs, handmade ceramics, aged brass, and pale stone
- Olive or bay branches cut from the grounds
- Breakfast prepared from the garden and nearby farms: bread, local olive oil,
  fruit, cheese, herbs, and coffee
- A small kitchen, bath ritual, shaded courtyard, reading room, or orchard
- Keys collected at a wooden desk; arrival by name rather than kiosk
- Whitewashed thresholds, restrained azulejo, and cool local stone used as
  architecture rather than decoration

The guest may be implied by preparation and use. Do not fill the image set with
posed models.

## Canonical visual anchors

These generated interiors are the binding reference set. They establish one
coherent property and should guide—not limit—the remaining art direction:

- [`living.jpg`](references/aubade-hotel-one/living.jpg) — the emotional thesis;
  inhabited, residential, and connected to the bedroom
- [`bed-king.jpg`](references/aubade-hotel-one/bed-king.jpg) — primary suite
- [`bed-2-queen.jpg`](references/aubade-hotel-one/bed-2-queen.jpg) — secondary
  room category and practical hospitality
- [`bath.jpg`](references/aubade-hotel-one/bath.jpg) — the material chapter:
  stone, water, linen, brass
- [`kitchenette-dining.jpg`](references/aubade-hotel-one/kitchenette-dining.jpg)
  — the residential-stay proposition

The images point toward an all-suite or residential hotel. Preserve the useful
premise: **the rooms live like apartments; the house hosts like a hotel.** If
the final concept becomes a conventional boutique hotel, keep the kitchenette
as a special suite category rather than the property-wide norm.

Future images should introduce controlled irregularity—a turned page, shifted
chair, breakfast remnants, less repeated art and botanicals—so the house feels
prepared and inhabited rather than rendered as a furniture collection.

## Page thesis and anatomy

The hero should place the brand statement in real architectural negative
space—an open wall, curtain field, or wash of morning light—without a dark
readability overlay.

Working page arc:

`Morning arrival → The house → Rooms → The table → Garden / place → The day → Stay / availability → Correspondence`

Rooms are introduced as editorial chapters. A compact comparison or booking
surface may follow only after desire and orientation have been established.

## Signature interaction — the guest’s day

Use the passage of daylight as the project’s one memorable interaction. A
small vertical sun line may act as navigation and temporal structure:

```text
07:20  Arrival
09:10  The rooms
12:40  The table
16:15  The garden
19:30  Your stay
```

As the page moves, light may warm, shadows may cross plaster, and curtains or
leaves may move almost imperceptibly. The effect must come from photographs,
video, or physically credible CSS—not decorative gradients. The site ends at
lamplight, completing a day rather than returning to the Nocturne void.

## Initial design calibration

- Palette: milk glass, limewash, warm oak, olive leaf, aged brass, lampblack
- Display/body voice: old-style serif; begin testing with Libre Caslon
- Utility voice: quiet grotesque; Manrope is a candidate
- Geometry: joinery lines, room thresholds, window proportions; no inherited
  Nocturne diamonds, frames, seals, or rails
- Texture: tactile but restrained; plaster, linen, wood grain, woven fiber
- Photography: soft directional daylight with dark elements for structure

## Azulejo and CSS pattern system

Use an **Iberian geometric vocabulary**, not a generalized “Moorish resort”
look. Real azulejo may appear sparingly in the property: a courtyard fountain,
stair risers, a breakfast alcove, or an old floor retained during restoration.
It should carry age, scale, and architectural purpose.

The interface uses a quiet CSS pattern family derived from one simplified
eight-point tile geometry:

- Draw it with CSS gradients, masks, or a small inline SVG; do not ship a large
  raster wallpaper.
- Use warm plaster as the field and olive, ochre, clay, or lampblack lines at
  roughly 5–8% visual opacity.
- Let scale and crop change through the guest’s day; do not introduce unrelated
  motifs for every section.
- Use it behind short editorial transitions, on a threshold between chapters,
  or as a narrow booking/detail border—never behind long body copy.
- Keep blue-and-white tile as a possible physical detail, not the site-wide
  palette. The digital system remains chalk, sand, olive, faded ochre, clay,
  and ink.
- Patterns remain still. The project’s motion budget belongs to moving light,
  leaves, curtains, and the guest-day line.

The pattern is supporting architecture. **The passage of daylight remains the
signature interaction.**

## Copy voice

Warm, observant, and specific. The house notices what the guest will notice.

Prefer:

- “Coffee begins in the kitchen at seven.”
- “The west rooms hold the last light.”
- “Twelve rooms face the olive garden; six look toward the hills.”

Avoid:

- “Escape the ordinary.”
- “Curated luxury.”
- “An unforgettable experience.”
- “Your perfect getaway awaits.”

## Decisions intentionally left open

- Detailed taxonomy and rates for all eighteen rooms
- Whether the correspondence-led stay request becomes a real booking service
- Restaurant and bath-program scope beyond the first editorial build
- Portuguese localization
- Shared Aubade code packages—extract nothing before a second project proves
  the need

## Image campaign status

The first campaign is complete: exterior arrival, host’s desk, breakfast,
courtyard, fountain, estate, pool, human hospitality, late-afternoon table,
rooms, bath, and residential-suite evidence. Originals and their assigned page
roles live in [`../sites/lagar-do-sol/ASSETS.md`](../sites/lagar-do-sol/ASSETS.md).

Use [`aubade-hotel-one-photography-gpt.md`](aubade-hotel-one-photography-gpt.md)
as the continuity bible and prompt kit for generating this set.

## Implementation

The self-contained Astro site lives in
[`../sites/lagar-do-sol`](../sites/lagar-do-sol). Its source of truth is
[`../sites/lagar-do-sol/DESIGN.md`](../sites/lagar-do-sol/DESIGN.md). The first
build follows a complete guest day and ends in a correspondence-led stay
request; it deliberately does not pretend to complete a booking transaction.
