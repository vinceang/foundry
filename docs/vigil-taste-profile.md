# Vigil — a taste profile

Deep maritime night with one deliberate light in it. Darkness as the ground —
but an *exterior*, weather-bearing darkness rather than a room — and a light
that is distant, rhythmic, and doing a job. Distilled from the Fàire build
(August 2026), with the brand specifics parameterized out.

**Standalone use:** hand this file to any LLM as the aesthetic direction for a
Vigil project, alongside 1–3 reference images.

**Reach for it when** the subject's native hour is night, the subject is
*outdoors and large*, and the light in the frame exists **to be seen from far
away**: lighthouses, signal stations, harbour lights, night ferries, mountain
refuges showing a lamp, anything whose purpose is to be findable in the dark.

**Avoid it for** interiors lit by one lamp (Nocturne), things in transit that
succeed by *not* being seen (Vesper), and anything warm and hospitable
(Aubade).

---

## Why this is not Nocturne, and not Vesper

This is the argument the register has to survive, so it is written first.

| | Nocturne | **Vigil** |
|---|---|---|
| Where the light is | A lamp *in the room with you* | A light *out there*, often miles off |
| What it falls on | One artifact, held in reverence | The sea, the weather, the dark itself |
| The composition | Scarcity; a subject on a void | Vastness; a small lit thing in a large dark |
| The ground | A material — lacquer, ink, slate | **Weather** — sea haze, cloud, salt air |
| The feeling | Reverence, ceremony, luxury | **Vigilance.** Something is being kept. |
| The light's behaviour | Constant, raking, still | **Timed.** It appears, then it is gone. |

And against Vesper, the distinction is exact and unarguable: **Vesper's
subjects are built on not being seen. A Vigil subject exists in order to be
seen.** Same darkness, opposite purpose. A lighthouse that is discreet has
failed.

Nocturne is a lamp in a room. Vigil is a lamp in a world.

## The five commitments

1. **The dark is weather, not a backdrop.** The ground is a cold maritime
   near-black with sea in it — blue-green-black, never neutral, never `#000`
   (Fàire: `#0a1014`). Depth comes from haze, cloud and distance, layered like
   a night at sea. Emptiness is not a void to float a subject on; it is the
   space the light has to cross.
2. **One light, and it is doing something.** A single warm source — the beam,
   the lamp, the lit window. It is not an accent applied for taste; it is the
   subject's actual function, so it appears where the light would truly fall
   and nowhere else. If it exceeds ~5% of the frame it has become decoration.
   The cold is the world; the warm thing is the point of the world.
3. **The light keeps time, and the page may say so.** This is the one register
   permitted a temporal signature, because here rhythm is *information*: a
   light's character is how it is identified. The permission is narrow. A
   timed sequence that means something is Vigil; "watch the scene change
   through the day" is the tired axis and is still banned.
4. **Motion is a sweep and a swell.** Slow, periodic, physical: a beam passing,
   a sea lifting, cloud crossing. One easing, long durations, nothing that
   bounces or loops busily. Reduced motion gets the finished still — and
   a static frame of a rhythmic light must still read as *lit*, never as off.
5. **Copy proves in the trade's published record.** This is a world of
   documented facts — characters, elevations, ranges, positions, dates of
   establishment and automation. Use them exactly and let them carry the
   emotion. No romance about "the lonely sea," no weather-beaten cliché, no
   luxury adjectives.

## Parameterize per project

| Axis | Fàire's answer | Your options |
|---|---|---|
| The dark ground | Sea-black `#0a1014` | Any cold near-black with weather in it |
| The one light | Incandescent `#f2c46a` | Any warm lamp white, sodium, oil-flame amber |
| Cold counterpoint | Wet granite `#3a4650` | Any cold stone, iron, storm grey |
| The pale material | Lime harling `#e8e6df` | Whitewash, canvas, chart paper, salt |
| Display face | Young Serif | Any carved/weathered serif with stone weight |
| Working face | Barlow | Any quiet technical grotesque with real numerals |
| Signature geometry | The sector wedge | One real geometry of the subject's own light |
| Chapter opening | The List of Lights entry | See "The opening move" |

## The opening move

A per-site choice, made once and held. This register has an unusually good
native answer: **the subject's own published record.** Lights, signals and
stations are all catalogued in standard formats — the Admiralty List of
Lights, a station return, a log line. That is real information in the
domain's own typography, and it opens a chapter without a decorative label.

Otherwise: absorb the words into the display statement, run the mark in the
margin, open cold, or close with a colophon. What this register must not do is
set a tracked caps label above every heading — Nocturne's spent move, and in
a register whose subject publishes its own facts it would be a waste of a line.

## Structure

- **The rule of 8**, as everywhere: multiples of 8, 4px for tight internal
  adjustment, chapter-scale gaps of 128–192.
- **Give the dark room to be crossed.** Compositions run wide and let the lit
  thing sit small in a large field. This is the opposite of Nocturne's tight
  scarcity: there, emptiness frames an artifact; here, emptiness is distance.

## Forms and states

When the price puts a real order form on the site (`foundry-series.md`,
commitment 7), its natural model here is **the station's own paperwork** — a
booking return, a passage plan, a log entry.

| State | Vigil's answer |
|---|---|
| Rest | Ruled field on the dark ground; label always visible, never placeholder-only |
| Focus | The one light marks the active line |
| Filled | Working face at full contrast against the dark |
| Error | Named beside the field in plain words: what is wrong and what to do. Never red-only |
| Submitting | The action states it is working |
| Sent | Confirmation as a log entry — what was recorded, and when the reply comes |

## Floors

Complete page with JS off — **and a rhythmic light must render lit, not dark,
in its static state**; visible focus; body contrast ≥ 7:1 measured; no
functional text below 11px, SVG labels included (they scale with the viewBox);
keyboard paths including Escape out of any dialog; form errors announced;
images ≤500KB; mobile keeps the same darkness and distance. Exposure: the
subject is always **fully modelled** — the dark is where the light has not
reached, never an underexposed frame. Murky loses to rich every time.

## Anti-patterns — instant fails

Pure `#000` · a second warm accent · a light that never appears in its static
state · lens flare, god-rays and star filters · storm-and-solitude romance ·
"the loneliest place in Britain" copy · shipwreck drama · uniform card grids ·
rounded floating cards · a tracked label above every heading · functional text
below 11px · a form with no designed error state · treating the timing
permission (commitment 3) as licence for a light-over-the-day interaction.

## Process rider

Render → screenshot → name five concrete weaknesses → fix → repeat, at least
three passes. Then the test, in both directions:

1. **If a screen could belong to any coastal-holiday-let or landscape-print
   site, the work has not found its world.**
2. **If a screen could belong to another *Foundry* site — and the one to check
   against is Nocturne — it is also wrong.** The failure mode for this
   register is drifting into a lamp-on-void artifact page. If the darkness has
   stopped being weather and started being a backdrop, you are building a
   Nocturne with a sea photograph in it.
