# SALINE — Design source of truth

*Written 2026-08-23, before any component. A paludier's saline in the marais
salants of Guérande, Brittany. The first site of the **Sluice** phase: the value
of the subject is duration, and scroll is a controller.*

Governed by `docs/foundry-standard.md` and, where it overrides,
`docs/sluice-standard.md`. Cleared against `docs/foundry-fingerprints.md` before
markup — see "Fingerprint" at the end.

## The one-line brief

Seawater walks a clay maze for three weeks and comes out as salt; a paludier
does not make it, he governs the rate at which it happens.

## Identity

**Saline de Kervalet** — one working *saline* on the marais salants of
Guérande, Loire-Atlantique. Sixty *œillets* cut into blue clay, worked by hand
by the Le Gall family since 1743. No pumps. No heat. No machinery of any kind:
the only energy in the system is the tide that fills it and the sun that empties
it.

The claim the site is built to make: **this is a landscape that is also a
machine**, and its operator's whole skill is timing.

## The light — decided once, then not thought about again

**High summer, hard midday, glare off standing water.** The harvest runs late
June to mid-September and the salt only forms on hot, still, rainless
afternoons. There is no night in this subject and no reason to invent one.

Recorded deliberately: the collection is too dark, and 23 of 25 built sites lean
warm or nocturnal. This site is **bright, high-key, and slightly overexposed at
the edges** — the way open water at noon actually reads. Whites clip. Shadows
are short, blue, and few.

Not a day-arc. The hour does not move on this site; the *water* moves.

## Binding palette — materials from the world

| Token | Value | Role |
|---|---:|---|
| Glare | `#f4f4f0` | Page ground — bleached clay path at noon |
| Argile | `#d9d3c6` | Dried clay bank; secondary fields, panels |
| Vase | `#8f8a7c` | The blue-grey clay floor of a pan, wet |
| Saumure | `#6f8478` | Low-concentration brine — the green of the first ponds |
| Fleur | `#c2705f` | **The accent.** The rose the water turns at high concentration |
| Sel | `#fcfbf8` | Salt white — heaps, crystal, the one true near-white |
| Encre | `#22201c` | Ink — body text, structure, hairlines |

**The fleur rule.** The rose accent is not decoration and is not a brand colour.
In the marsh, water turns rose only when *Dunaliella salina* blooms at high
salinity — which is to say, **the water goes pink immediately before it becomes
salt.** So on this site the accent means one thing and only that: *concentration
approaching crystallisation.* It appears in the cascade as the brine
concentrates, on the one primary action, and nowhere else. If rose exceeds ~5%
of any frame it has stopped meaning anything. Encre on glare is ≈14:1; verify
every pairing before shipping.

## Type — explicitly not a serif

23 of 25 built sites set their display in a serif and Fraunces, EB Garamond and
Faustina are spent (see `foundry-standard.md` § Type cadence). A saline is a
survey grid full of numbers; the type is cast for that, not for "craft".

- **Bricolage Grotesque** (variable, `opsz` + `wdth`) — the display voice. A
  grotesque with a slightly irregular hand, which suits pans cut by eye into
  clay rather than surveyed. Set wide and large at chapter openings, narrow in
  tight columns. No sibling uses it.
- **IBM Plex Sans** — the working voice. Body copy, 55–60ch measure.
- **IBM Plex Mono** — every measurement on the site: degrees Baumé, pan numbers,
  kilos, days elapsed, depths in centimetres. The mono is not styling; it is how
  a saline records itself, and it carries the whisper labels (11px floor, 600,
  `.32em`, in vase).

Plex Sans and Plex Mono are one family, so the apparatus reads as one hand and
the display stands apart from it. Neither is used by a sibling.

## The opening move — a measure, never a label

Each chapter opens with **the actual salinity at that stage**, set in Plex Mono
at display size, with the pond's name beneath it:

```
3.5 °Bé          →      12 °Bé          →      25 °Bé
LA VASIÈRE              LES ADERNES             L'ŒILLET
```

Deliberately **not** a tracked-caps whisper label above a heading — that device
is spent across the collection and carries no information. This one carries the
reader's position in the process *and* the subject's own unit. It is the same
number the paludier reads off a hydrometer.

## Vocabulary — the marsh's own nouns, navigation included

**paludier** (the salt worker) · **saline** (one worker's set of pans) ·
**vasière** (the first reservoir, holds the tide) · **cobier** · **fares** (the
winding channels where the water slows) · **adernes** (holding basins, the last
stop before salt) · **œillet** ("little eye" — the crystallising pan, ~70 m²) ·
**ladure** (the clay platform beside the œillet where salt is heaped) ·
**trémet** (the clay walkway between pans) · **las** (the long wooden rake) ·
**lousse** (the flat skimmer for fleur de sel) · **mulon** (the salt heap) ·
**salorge** (the salt barn) · **gros sel** · **fleur de sel** · **°Bé** (degrees
Baumé, the salinity the whole craft is read in)

Navigation: **La saline** · **La cascade** (signature) · **Le sel** ·
**Le las** · **Les paludiers** · **La récolte** (order).

## Page arc

`Hero → La saline (the grid, from above) → La cascade (signature) → Le sel
(gros sel vs fleur de sel) → Le las (the tool, unchanged) → Les paludiers
(the family) → La récolte (order the season)`

One line: *a marsh drawn as a machine; the water walked through it under your
own hand; the two salts it makes and where in the pan each forms; the one tool
that governs it; the people bent over it all summer; and the season's harvest
by the kilo.*

## The signature interaction — "La cascade"

**Scroll is the water.** Scroll position maps continuously to a position in the
pond sequence, and the brine's state is computed from it at every point:

| Stage | Salinity | Depth | Days elapsed | Water reads |
|---|---:|---:|---:|---|
| Vasière | 3.5 °Bé | 40 cm | 0 | saumure green, opaque |
| Cobier | 6 °Bé | 25 cm | 4 | green, clearing |
| Fares | 12 °Bé | 12 cm | 11 | pale, warming |
| Adernes | 18 °Bé | 8 cm | 17 | rose beginning |
| Œillet | 25 °Bé | **3 cm** | 21 | full rose, then white |

Drawn in **SVG from these numbers** — per `sluice-standard.md` § 3b, the
instrument is procedural and only the world around it is photographed. The plan
view of the pans is real geometry; the fill colour, the depth in section, the
°Bé readout and the day counter all interpolate from scroll position.

**It is a controller, not a trigger.** Scrub back and the brine dilutes, the
rose drains out, the day counter runs down. Every state is reachable from both
directions and reads identically either way.

**Two things it teaches that a caption cannot:**

1. **The water gets shallower as it gets stronger** — 40 cm down to 3 cm. The
   last pan is a puddle. That is why one afternoon of sun finishes it and one
   shower ruins it, and you feel it as the section thins under your hand.
2. **The rose is a warning, not a decoration.** By the time the water is pink,
   salt is hours away.

**The weather control.** Beside the readout, a two-state control: `SOLEIL` /
`PLUIE`. Putting rain into the season floods the œillet, drops the salinity
back toward the adernes value, and resets the day counter by the number of days
that stage takes to recover. The visitor is allowed to ruin three weeks of work
in one click, and then undo it. That is the argument of the whole site made
operable.

**Rate.** Tuned so a normal scroll takes ~6 seconds to cross the cascade, not
1.5. Per `sluice-standard.md` § 4 — an instrument nobody can follow is
decoration. When in doubt, halve it.

**Fallback (never a blank page).** With JS off or reduced-motion set, the
cascade renders as the finished static composition: all five pans drawn at their
real colours side by side, the table above printed in full, every number
present. The argument survives completely; only the hand on it is lost.

## How the site takes an order — a real form

Gros sel sells for a few euros a kilo. A "write to us" letter would be absurd
and the standard says so: under $5,000, give it a proper order form.

**La récolte** takes: salt type (*gros sel* / *fleur de sel*), quantity in kg,
the **œillet number** it came from (a real choice — pans yield differently and
the site shows the season's tally per pan), delivery details, and a note. It is
a mailto/static-endpoint enquiry; **no card capture**. Set in the site's own
type, on argile, with the fleur accent on one primary action only.

Every state designed: rest, focus, error, submitting, sent. The error state gets
screenshotted before ship.

## Imagery — the Saline recipe

**Constant art-direction phrase, every prompt in the batch:** *"high summer
midday on the Guérande salt marshes, hard clear light, bleached clay and
standing water, documentary photography, no haze, natural colour"*.

Shot list:

1. **Hero** — the pan grid from above, low altitude, hard noon light, water at
   three different concentrations reading green / pale / rose across the frame.
2. **La saline** — a trémet walkway running to the horizon between full pans.
3. **Le sel, gros** — grey coarse salt heaped wet on the ladure, rake marks.
4. **Le sel, fleur** — the fine crust on still water, shot raking so the crystal
   lattice catches.
5. **Le las** — the wooden rake resting across a pan edge, clay and grain.
6. **Les paludiers ×3** — a woman skimming fleur de sel with a lousse, close
   enough to read her face; two workers heaping a mulon, mid-lift; a portrait at
   the end of a shift, sunburnt, squinting, salt on the forearms.

**People throughout, with faces** (`foundry-standard.md` § Imagery, revised):
three of eight plates carry people and one is a real portrait. A world nobody
inhabits reads as a rendering, and one distant figure mid-craft is the
mannerism the standard now names.

Generated through Bench (`tools/gen-image-bench.mjs`). The cascade is **not**
generated.

## Floors (binding)

Complete page with JS off · visible focus states · encre-on-glare body contrast
verified by measurement · nothing functional under 11px including the mono
labels · full keyboard path through the cascade (arrow keys step the stages) ·
reduced-motion gets the finished static cascade · images ≤500KB · dedicated
mobile pass, where the cascade becomes a vertical section rather than a
squeezed plan.

## Fingerprint — cleared before markup

| # | Dimension | This site |
|---|---|---|
| 0 | Phase | `sluice` |
| 1 | Grammar | **Cascade** — material is pushed through a sequence and transformed. New to the collection. |
| 2 | Opening | A salinity measure in °Bé at display size, pond name beneath |
| 3 | Chapter device | Named pond + its real concentration |
| 4 | Signature | La cascade — scroll walks the brine, weather resets it |
| 5 | Close | Order by weight from a named œillet, with per-pan yields |
| 6 | Type + register | **Sans display** (Bricolage Grotesque) · bright high-summer noon |

Differs from every existing row on ≥4 of 6. Closest neighbour is **veta**
(single-object study, order form, Fraunces, daylight) — differs on 1, 2, 3, 4
and 6, so five of six. No existing row is a cascade, none opens on a measure in
a trade unit, and only banaag has a sans display.

## Never

A day-arc or light-over-time signature. A tracked-caps label above a heading.
A serif display. One distant figure standing in for human presence. A generated
frame sequence for the cascade. Fade-up-on-scroll anywhere. Rose used as
decoration. A "write to us" close.
