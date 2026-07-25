# LARÈS — Design source of truth

*Locked at the opening design session. The site's source of truth; the build
follows this, not the reverse.*

## The one-line brief

**A refuge above the tree line, where the weather decides the day.**

## Identity

**Name:** Larès — Ladin for the larch, the one tree that climbs highest before
the mountain gives way to rock. The hut is built of it.
**Series:** Aubade (the morning voice — thin, bright, high-altitude daylight).
**Place:** A stone-and-larch refuge at 2,410 metres on the Gherdëina side of
the Sella massif, in the Dolomites of South Tyrol. Ladin country: the valley
below speaks a Rhaeto-Romance older than either Italian or German.
**Proposition:** The mountain is the host. Larès only keeps you warm, fed, and
high while the weather writes the day.

Larès is not an architectural composition (that is Aresta, on the ocean edge)
and not a collected domestic house (that is Lagar do Sol, among the olives).
Its warmth is **shelter** — hearth, wool, larch, hot broth, a dry pair of boots
by a door — earned against thin cold air and fast weather. Where Aresta gives
the guest a way to *see* space, Larès gives the guest a way to *survive and
love* a height.

## The refuge

A working alpine refuge, not a hotel. One long larch-and-drystone building set
into the slope on the last shelf before the scree, its south wall a run of
small deep-set windows against the cold. Rebuilt in 1962 on the footprint of a
shepherd's *baita*; run by a guardian family across three generations. Twelve
beds, a stube (the panelled larch dining room around one masonry stove), a
drying room for boots and shells, a kitchen that turns out one fixed dinner a
night.

**Governing fact:** altitude and weather, not tier, decide everything — which
beds are warm, whether the terrace is open, what the kitchen sends up, whether
you can climb at all. The building bends to the sky.

## Rooms by altitude and weather — the house system

The refuge offers *places to be*, ranked by height on the mountain and read
against the day's forecast. There are three, from the valley station up:

| Place | Altitude | In fair weather | In hard weather |
|---|---:|---|---|
| **La Stüa** — the stube | 2,410 m | Long table, terrace doors open to the Sella | The whole house draws in around the stove |
| **Ël Tabià** — the loft beds | 2,410 m | Larch bunks under the eaves, window on the peaks | Wool doubled, shutters closed, warm from the flue below |
| **Jëuf de Sela** — the pass camp | 2,680 m | Guided dawn start for the Sella pass and via ferrata | Closed — the mountain keeps it |

The signature interaction (below) drives this table live from a chosen sky.

## Binding palette

Named from the refuge, not abstract. Aubade-bright: the ground is high snow
light, not beige.

| Token | Value | Role |
|---|---:|---|
| Snow light | `#eef1f2` | Page ground — thin bright high-altitude daylight |
| Glacier haze | `#dbe1e2` | Cool secondary ground, shaded snow, rules |
| Larch pith | `#d9c4a3` | Warm larch field — the timber in sun |
| Weathered larch | `#a8825a` | Joinery, active details, grounded warm controls |
| Loden wool | `#5c6b5a` | The guardian's felted wool; muted structural accent |
| Ember | `#b4562b` | The stove's one warm note — tiny glints only, never a fill |
| Slate | `#232a2c` | Dolomite rock; primary type, frames, contrast |

Snow light and glacier haze are one thing — mountain daylight — in sun and in
shade. Slate is verified for body contrast on every light ground. Ember is the
hearth: it appears only where heat is meant (the active weather state, a
threshold glint), never as a broad surface. **No blue accent added** — the sky
lives in photography; loden carries the cool note in UI.

## Type

- **Fraunces (opsz + soft/wonky axes)** — the house voice. A warm high-contrast
  old-style serif with a hand-cut feel; carries the name, the statements, the
  place descriptions, and the guardian's italic aside. Not shared with Lagar do
  Sol (Bona Nova) or Aresta (Newsreader).
- **Space Grotesk** — the working voice. Altitudes, forecasts, temperatures,
  times, room facts, forms, and wayfinding. A quiet grotesque with just enough
  mechanical edge to read as instrument data at 2,400 m. Not Aresta's Archivo,
  not Lagar's Manrope.

Avoid uppercase-everything, extreme-contrast Didones, tiny low-contrast body.

## Grid

Not Aresta's facade module. Larès reads as a **contour field**: an asymmetric
editorial spread where content sits at altitudes on the page, and a single
thin hairline may cross a section like a contour line where measure is needed —
never as decoration. Edges are exact; softness comes from wool, larch grain,
and light, not rounded UI. Corners stay square except the weather control,
whose pill is earned by its toggle interaction.

## Signature interaction — the day the weather writes

The one bold spend, built and critiqued first. In **Rooms by altitude and
weather**, the guest chooses today's sky from a small row of conditions —
**Bluebird · Cloud sea · Föhn · Storm** — and the whole house rewrites itself:

- The **altitude column** relights: each place keeps its own photograph (the
  place is the place), but a weather wash keyed to the sky repaints it —
  warm on föhn, bright on bluebird, cold slate on storm — and its open/closed
  state and offered condition change to the chosen sky.
- A small **elevation profile** (the mountain in section, valley station →
  refuge → pass) redraws: a snow line, a cloud-sea band, or a storm cap moves
  to the correct height; the three places sit on the profile at their real
  altitudes and light up or grey out.
- The **facts** change: temperature at the refuge, wind, freezing level, and
  the kitchen's line for that weather ("Storm: barley broth and the stove all
  day").
- The guardian's **aside** in italic changes with the sky.

Bluebird opens the pass and the terrace; Storm closes Jëuf de Sela and draws
the house around the stove. The interaction teaches the mountain — it does not
decorate booking. It works without JS (all four states present, the current
one shown) and respects reduced motion (states cross-fade at most).

Nothing else competes with it. Other motion behaves like weather: a slow drift
of cloud in the hero, shadow crossing larch — settling into stillness,
reduced-motion safe.

## Page arc

`The refuge → The day the weather writes → Larch & stone → The stube → One dinner → The guardians → The walk up → Book a bed`

One long page. The hero is the refuge on its shelf under a fast Dolomite sky,
copy set in the open snow-light negative space beside it — never in a floating
card.

## How the site takes a booking — order matches the price

A bed in a refuge is a real, modest, structured transaction — half-board runs
well under €5,000 — so Larès gives a proper **booking enquiry form**, not the
precious "write to us" letter. In the house's own type and palette:

- **Dates** — arrival / nights (the season is short; the form states it).
- **Beds** — number of guests (the loft holds twelve).
- **Place** — La Stüa day-guest, Ël Tabià bed & half-board, or Jëuf de Sela
  guided pass start (the room-by-altitude choice carries into the form).
- **Contact** — name, email, a note for the guardian (dietary, arrival time,
  climbing plans).

It hands off by `mailto:` to the guardian — a real enquiry, never a card
number or payment. On-brand copy: "The guardian answers by evening." A
half-board rate and the season dates are stated plainly beside the form so the
gesture matches the price.

## Copy voice

Plain, exact, mountain-guardian. Name the altitude, the temperature, the wind,
the dish, the hour of the dawn start. Warmth is in shelter offered, not
adjectives. No "escape," no "curated," no "unforgettable." The guardian speaks
once per section in Fraunces italic.

## Floors

Complete with JS off; visible focus states; body contrast tested on every
ground; full keyboard paths incl. the weather control and the booking form;
reduced-motion gets the finished static composition; images ≤500KB; a real
mobile pass — a smaller lamp, not a lesser brand. Mobile keeps the elevation
profile and the weather row; the altitude column stacks.

## Never

Aresta's facade module, bay rules, compass EAST/SOUTH/WEST, mineral-plaster
palette, or Archivo/Newsreader; Lagar's guest-day rail, olive palette, Iberian
tile, or Bona Nova/Manrope; generic beige hotel cards; glassmorphism; rounded
floating panels; alpine kitsch (edelweiss, cuckoo, gingham, faux-chalet);
terracotta by reflex; a murky under-lit plate (this world is snow-bright);
Ladin words used as costume rather than real place vocabulary.
