# Pastorale — a taste profile

A craft worked in the open, under a cold northern sky: overcast snow-light as
the ground, fresh-hewn wood and winter blue carrying the color, and the
conviction that a bright register can be as reverent as a dark one. Distilled
from the Tyri build (July 2026), with the brand specifics parameterized out.

**Standalone use:** hand this file to any LLM as the aesthetic direction for
a Pastorale project, alongside 1–3 reference images. This is a mood and
decision layer, not a component library.

**Reach for it when** the subject is a craft or maker whose native hour is
daylight but whose world is *cold* — northern trades worked outdoors: log
building, boat yards, stonework, forestry, high-latitude making. It is the
open-air counterpart to Nocturne's single lamp.

**Avoid it for** subjects that live indoors under one light (Nocturne), warm
Mediterranean hospitality (Aubade), or anything needing spectacle and speed.

---

## The inversion

Pastorale's relationship to Nocturne is exact and opposite:

| Nocturne | Pastorale |
|---|---|
| Warm light pulled out of darkness | Cold light lying flat over everything |
| One lamp; the subject emerges from black | Overcast sky; the subject stands in full snow-light |
| Darkness is the material | Snow-light is the material |
| One warm metal is the accent | One warm wood-note is the accent |
| Interior, ceremonial | Exterior, worked, weather-true |

It is *not* Aubade. Aubade is warm morning hospitality indoors; Pastorale is
a cold bright working day outdoors. Different warmth, different purpose.

## The five commitments

1. **Snow-light is a material, not white.** The ground is overcast light on
   snow — a cool near-white with a blue in it (Tyri: `#eef1f0`), never pure
   `#fff`. Depth comes from snow-shadow blues and a slate winter sky, layered
   like weather.
2. **One wood-note behaves as warmth.** A single warm accent — resin
   heartwood amber, fresh pine, tar-brown — appears only where the craft's
   own warmth would: labels, hairlines, links, one primary action. If the
   warm note exceeds ~5% of the frame it becomes decoration; pull back. The
   cold is the ground; the one warm thing is the wood.
3. **The work is shown in weather.** Compositions are outdoor, worked,
   gravity-true: hewn faces dusted with snow, breath in the air, real
   material under real overcast. No studio void, no lamp — the sky is the
   light. One craft act or artifact at a time, asymmetric, never a grid.
4. **Motion moves like cold air and settling timber.** Slow, low-energy,
   settling into stillness; nothing bounces. Snow does not fall busily; a
   joint seats once. Reduced motion gets the finished still composition.
5. **Copy proves in the trade's real words.** Declarative, short, unhedged;
   material and process specificity is the poetry (winters, ring counts,
   hours under the axe). The regional craft vocabulary is real and correct,
   glossed on first use, never costume. No luxury adjectives, no urgency.

## Parameterize per project

| Axis | Tyri's answer | Your options |
|---|---|---|
| Snow-light ground | Overcast `#eef1f0` | Any cool near-white with weather in it |
| The warm note | Resin amber `#a8701f` | Fresh pine, tar-brown, oxblood, ochre |
| Cold counterpoint | Slate winter sky `#5a6b75` | Any cold blue/grey |
| Structural dark | Pine tar `#221a10` | Any near-black with a cold or resinous cast |
| Display face | Besley (slab Clarendon) | Any sturdy slab/Clarendon with worked weight |
| Working face | Schibsted Grotesk | Any quiet grotesque, ideally regional |
| Signature geometry | The corner joint (nov) | One real structural detail of the craft |
| Chapter opening | Ring count / winters as a measure | See "The opening move"; pick one and hold it site-wide |

## The opening move

How a chapter announces itself is a **per-site choice, made once and held
throughout that site** — not a house template. Consistency belongs inside a
site; across the collection it reads as one generator.

A structural device — a label, a measure, a rule, a mark — earns its place
only by encoding something true. If it could be deleted without losing
information, delete it.

Pastorale's copy doctrine already supplies the best answer: **the trade's
own measure**. Winters seasoned, ring counts, hours under the axe, a
diameter at the butt. It is real information in the craft's real words, and
it opens a chapter without a decorative label. Otherwise: absorb the words
into the display statement, run the mark in the margin, open cold, or close
with a colophon. What this register must not do is set a tracked caps label
above every heading — that is Nocturne's spent move, and in flat snow-light
it has no lamp to justify it.

Record the site's answer in its `DESIGN.md` beside the signature
interaction.

## Structure

- **The rule of 8.** Every spacing value is a multiple of 8; 4px is reserved
  for tight internal adjustment. Working scale 4, 8, 16, 24, 32, 40, 48, 64,
  extended by 8s for chapter-scale gaps. Larger gaps between groups than
  within them, and more space above a heading than below it. A trade that
  measures its timber measures its margins.
- Snow-light needs room to lie flat. One craft act at a time, asymmetric,
  with the cold ground carrying the space between.

## Forms and states

When the price puts a real order form on the site (see
`foundry-series.md`, commitment 7), it takes the register's type, palette,
and voice — and it is designed in **all** its states. Pastorale's natural
model is the yard's own paperwork: an order docket, a cutting list.

| State | Pastorale's answer |
|---|---|
| Rest | Ruled field on the snow-light ground; label always visible, never placeholder-only |
| Focus | The wood-note marks the active line — the same focus treatment as the rest of the site |
| Filled | Working face, full contrast against the cool ground |
| Error | Named beside the field in the trade's plain words: what is wrong, what to do. Never red-only, never "Invalid input" |
| Submitting | The action states it is working |
| Sent | Confirmation as a docket — what was ordered, what happens next, when |

Errors name the problem and the recovery. The form never loses what was
typed. Validation is real (`aria-invalid`, a live region for the result).

## Floors

Contrast verified on snow-light (dark ink on the cool ground, never pale
wood-on-white); complete page with JS off; visible focus; no functional
text below 11px — tracked micro-labels included; keyboard paths; form
errors announced, not just colored; reduced-motion support; responsive
images; mobile keeps the same cold light and cadence. Exposure runs
*bright* — the Nocturne 20–40 luma band does not apply; a snow register
legitimately sits far higher, and the failure to guard against is a murky
plate, never a bright one.

## Anti-patterns — instant fails

Pure white ground · warm-morning Aubade cream · a second warm accent ·
studio-void product shots (that is Nocturne) · uniform card grids · rounded
floating cards · fake snow sparkle · costume use of regional craft terms ·
urgency copy · luxury adjectives · motion without a physical cause · a
tracked label above every heading as the automatic opener · functional text
below 11px · a form with no designed error state.

## Process rider

Render → screenshot → name five concrete weaknesses → fix → repeat, at least
three passes. Review in bright and dim conditions, desktop and phone. Then
the test, in both directions:

1. **If a screen could belong to a cabin-rental site or any tasteful maker
   template, the work has not yet found its world.**
2. **If a screen could belong to another *Foundry* site, it is also
   wrong.** The sharper of the two, and the one the collection keeps
   failing — a device on every site distinguishes none of them.
