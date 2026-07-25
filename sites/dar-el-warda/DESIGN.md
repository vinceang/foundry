# DAR EL WARDA — Design source of truth

*Third Aubade. A nine-room courtyard house in the Marrakech medina.*

## The one-line brief

**A house built around a square of sky, told by the sun crossing its court.**

## Identity

**Name:** Dar el Warda — *dar* is Arabic/Darija for house; *el warda* means
"the rose." A house named for the rosewater the host distils each spring, and
for the old damask rose climbing the north gallery. (A *dar* is a medina
courtyard house; a *riad* strictly names one with a planted, quartered garden
court. Dar el Warda's court is paved around a single fountain and four orange
trees — a *dar* with a *riad's* orange trees, and the copy is precise about it.)

**Series:** Aubade — the morning voice, warm daylight as material.
**Place:** A *derb* (a dead-end medina lane) off the Mouassine quarter,
Marrakech, Morocco. 31°37′ N.
**Proposition:** The house has no view but the sky; the day is the view.

Lagar do Sol is inland Alentejo; Aresta is the Portuguese ocean edge. Dar el
Warda is North African, inward-facing, and its light is thrown down a
lightwell rather than out to a horizon. Same doctrine, a third condition.

## The house

A restored eighteenth-century *dar* on two floors around a central *wast
ad-dar* — the open court, "the middle of the house." Nine rooms open inward
onto galleries; there is no exterior window of consequence. Everything the
house knows about the weather, it learns from the square of sky above the
court. A marble fountain, four bitter-orange trees, a *bhou* (a deep vaulted
alcove) on the ground floor, and a roof terrace (*stah*) over the medina.

**Governing fact:** the court is roughly 6 metres square and open to the sky.
The sun crosses it once a day, and every room is described by *when* the light
reaches it — the east gallery at breakfast, the fountain at noon, the west
wall in the late afternoon, the terrace at dusk. This is the sundial.

## Real vocabulary — used correctly, glossed once

- **dar** — a medina courtyard house.
- **riad** — a *dar* whose court holds a sunken quartered garden (from *riyad*,
  gardens). We are precise: this is a *dar*, its court paved, its garden the
  four orange trees.
- **wast ad-dar** — "the middle of the house": the open central court.
- **derb** — a dead-end residential lane in the medina.
- **zellige** — hand-cut glazed terracotta mosaic, chipped from fired tiles
  and set face-down into a bed. Not printed tile. Real, and named as such.
- **tadelakt** — polished lime plaster, burnished with a stone and sealed with
  black-soap, waterproof and soft-sheened. The bathrooms and the fountain.
- **bejmat** — unglazed terracotta floor brick, laid on the diagonal.
- **bhou** — a deep vaulted seating alcove open to the court.
- **stah** — the roof terrace.
- **mqarnas** (muqarnas) — the stalactite plasterwork in the cedar-and-plaster
  cornices; named, never faked as a CSS motif.

These are load-bearing, not costume. Each appears in copy with its meaning and
in photography as the real material. Zellige geometry is echoed *once* in a
restrained CSS threshold pattern — real zellige lives in the photographs.

## Tokens — materials of the house

| Material | Value | Role |
|---|---:|---|
| Lime wash | `#f3ead9` | Lightest ground — the court wall in full sun |
| Warm plaster | `#e7d8bf` | Default warm surface, gallery walls in light |
| Rosewater rose | `#c17e6c` | The damask-rose note; small warm emphasis, links |
| Saffron | `#b9781f` | Rare glint — a single spice-warm accent, hover/rule |
| Zellige green | `#33574a` | Deep glazed-tile green — interaction, structure |
| Bejmat clay | `#8f5236` | Terracotta floor tone; grounded fields, footer edge |
| Cedar ink | `#221a12` | Type, carved cedar, contrast — a warm near-black |

Cedar ink on lime wash is the body pairing, contrast-verified (>12:1). **No tan
on cream.** Saffron and rosewater are points, never fills. Zellige green is the
one cool structural note (the tilework and the interaction state); bejmat clay
grounds the evening/footer. This palette is deliberately unlike Lagar (olive +
chestnut) and Aresta (plaster + eucalyptus): a warmer, spice-and-glaze family.

## Type

- **Fraunces (opsz + soft axes)** — the house voice. A warm old-style serif
  with a slightly hand-cut feel that suits carved plaster and cedar; used for
  the wordmark, statements, room names, the host's italic aside. Not shared
  with Lagar (Bona Nova) or Aresta (Newsreader).
- **Inter Tight** — the working voice: hours, room facts, the sun clock
  readout, the enquiry form, navigation. Not shared with the siblings
  (Manrope / Archivo).

Avoid uppercase-everything, extreme-contrast Didones, script fonts, tiny
low-contrast body text.

## Signature interaction — the court as a sundial

The one bold spend, built and critiqued first. A section, **"The court in a
day,"** holds a single square frame of the *wast ad-dar*. Five hours are
selectable — **07:30, 10:00, 13:00, 16:30, 19:15** — and choosing an hour
changes together:

1. the **photograph** of the court at that hour (light entering from the
   correct side, east wall lit at breakfast → fountain at noon → west wall
   and terrace at dusk);
2. a **sun mark** travelling around a small square court-plan — a dot on the
   rim at the correct compass position for the hour, and a thrown shadow-wedge
   across the court from the opposite wall;
3. the **hour band** and what the house is doing then ("07:30 — the east
   gallery warms; bread and msemen are set in the *bhou*");
4. which **room or place** the light is on right then.

The sun mark moves around the *square* of the court (a riad's geometry), not a
horizon line (Aresta's wedge on an open plan) and not a vertical rail down the
page (Lagar's day-line). It teaches the house's inward light. Reduced-motion
gets the noon frame static and all five states reachable without animation;
JS-off shows all five hours stacked as an editorial sequence.

## Page arc

`The house → The court in a day → Rooms → The table → Hammam & terrace → The medina → Stay`

One long page. Hero: the court from the gallery, a square of morning sky
above, copy in the plaster negative space — never a floating card. "Stay" is
the enquiry form (see below), not a "write to us" letter.

## How the site takes an order — a real enquiry form

Nine rooms, a medina *dar*: a room night here sits well under the $5,000
commission-by-letter line, so **Stay** is a proper on-brand enquiry form, not
the precious "write to us" gesture. Fields: arrival + departure dates, guests,
room (a select of the actual rooms), name, email, and an optional note. It
hands off by **mailto** (structured subject + body) with a static-endpoint
swap noted in code — it never captures a card or processes payment. It obeys
the house type, palette, and hosting voice: labels in Inter Tight, the framing
line in Fraunces italic, the primary action in zellige green. Whole-house
booking is offered as a line, by correspondence, for that one genuinely
bespoke case.

## Rooms

Nine rooms, named for where they sit and what the light does — not tiers:

- **Nakhla** (palm) — east gallery, first sun, over the court.
- **Ward** (rose) — north gallery under the climbing damask rose.
- **Bahia** — the *bhou* suite off the court, vaulted, cool at noon.
- **Stah** — the terrace room, last light and the medina roofline.
- and five more sketched in copy; rooms are experiences, one at a time, in
  asymmetric editorial spreads — never a uniform booking-card grid.

## Layout & pattern

Desktop alternates large square/portrait photographic fields (the court is
square; honour it) with quiet plaster text surfaces. One restrained zellige
threshold pattern — an eight-point star geometry from real *zellige*, drawn in
CSS at 6–8% opacity — appears only at section thresholds and behind the sun
clock, never as wallpaper. Edges are crisp; softness comes from light and
plaster, not rounded UI. Mobile keeps the photographic sequence and the sun
clock (as a horizontal hour selector), and never collapses into a beige feed.

## Human presence — the act of hosting

At least one shot is the host: hands pouring mint tea in a high thin stream
into a glass, or the breakfast set in the *bhou* — the *evidence and act of
hosting*, a maker/host, never a lifestyle model. Copy names what is prepared:
"Mint tea is poured from a height at eleven; the rosewater is distilled here
each April."

## Copy voice

Warm and specific, a host's voice — warmer than Aresta, spicier and more
inward than Lagar. Name the hour, the material, the dish, the direction of the
light. No "escape," no "curated," no "oasis"/"hidden gem" riad clichés.

## Motion

Motion behaves like the sun crossing the court: the clock state changes, shade
moves across plaster, content settles once. No parallax, particles, bouncing,
or looping decoration. Reduced-motion safe.

## Accessibility & performance floors

Complete page with JS off (all five sun-hours legible, form usable via
mailto), visible focus, cedar-ink body contrast on every ground, full keyboard
paths (the hour selector is a radio/tab group), reduced-motion static
composition, images ≤500 KB, meaningful alt text, dedicated mobile pass.

## Never

Lagar's vertical day-rail or olive pots; Aresta's horizon wedge or ocean; a
*riad* label on a paved *dar*; costume "Moroccan" orientalism (lanterns as
decoration, camels, "Arabian nights"); printed faux-zellige wallpaper;
terracotta CTA by reflex; glassmorphism; rounded floating cards; blue-and-white
Iberian tile; script fonts; a copied Aubade component library.
