# Vesper — a taste profile

The apron at civil twilight: the sun down, the sky still luminous, the first
instrument lights coming on. Drafted 2026-07-24 for the third Foundry series,
alongside the Auriga dry-run. Structure follows the Nocturne and Aubade
profiles; this is a proposal until a Vesper ships.

**Reach for it when** the subject's native hour is dusk — departure and
arrival, watch-keeping, the passage between day and night: private aviation,
lighthouses, sleeper trains, observatories before the dome opens.
**Avoid it for** subjects that truly live under one lamp (Nocturne) or in
morning rooms (Aubade). The series is a decision about light, made by the
subject.

---

## The five commitments

1. **The sky is the ground, and it is still light.** The page ground is the
   blue-black of the zenith at civil twilight — a blue-hued near-dark, never
   pure black, never Nocturne's lacquer brown. The world below it darkens
   first; the page may deepen as it descends, but the top of any composition
   remembers the sky. A Vesper page darker than its own hour is the series'
   canonical failure (it has already been rejected once).
2. **Two lights, neither winning.** The afterglow — one warm horizon hue —
   and the instrument lights — small, purposeful, man-made points (a cabin
   window, a nav light, a lamp on a desk). Afterglow is the label-and-accent
   light; instrument light is where people are. If the warm hue floods more
   than a band of the frame, it has become sunset kitsch; pull back to the
   horizon.
3. **The hour is the luxury.** Twilight is short; the composition treats
   time the way Nocturne treats scarcity. Timestamps, hours, and light
   conditions are named precisely ("20:45 — civil twilight") and belong in
   the working voice. Generous darkness-above-the-horizon plays the role
   emptiness plays elsewhere.
4. **Motion is a glide.** One easing family, long constant-speed durations,
   entrances that descend and settle like a landing — never a bounce, flare,
   or loop that performs. One ambient effect per viewport. Reduced motion
   gets the finished still.
5. **Copy proves; it keeps its voice down.** Short declarative sentences,
   exact numbers, hours, and distances. In-between subjects tempt copy
   toward mystique — resist it the way Nocturne resists "luxury": discretion
   is demonstrated (what is withheld, and why), never announced.

## Parameterize per project

| Axis | Auriga's answer | Your options |
|---|---|---|
| Zenith ground | Blue-black `#0f141d` | Any blue-hued near-dark; never pure black |
| Afterglow hue | Apricot `#e8a26b` | Apricot, rose, ember; one only |
| Instrument light | Cabin lamp warm white | Lamp, lantern, beacon, gauge glow |
| Below-horizon dark | Tarmac `#182029` | Asphalt, slate sea, wet stone, steel |
| Working metal/grey | Airframe aluminum `#95a0ad` | Aluminum, zinc, pewter, gull grey |
| Display face | Instrument Serif | Any serif with instrument-panel elegance |
| Working face | Fragment Mono + Instrument Sans | A mono for the ops voice is natural here |
| Signature geometry | The great-circle arc | One line-form; it is the only ornament |
| World vocabulary | Tails / The Board / Protocol | The trade's own operational nouns |
| Chapter opening | Timestamp in the working voice | See "The opening move"; pick one and hold it site-wide |

## The opening move

How a chapter announces itself is a **per-site choice, made once and held
throughout that site** — not a house template. Consistency belongs inside a
site; across the collection it reads as one generator.

A structural device — a label, a timestamp, a rule, a mark — earns its
place only by encoding something true. If it could be deleted without
losing information, delete it.

Vesper has the strongest native alternative in the collection: **the
operational readout**. An hour, a condition, a distance, a field length
("20:45 — civil twilight", "893 m, grass") carries real information in the
working voice and opens a chapter without a decorative label. Reach for it
first. Otherwise: absorb the words into the display statement, run the mark
in the margin rail, open cold, or close with a colophon. What this register
must not do is set a tracked caps label above every heading — that is
Nocturne's spent move, borrowed as costume.

Record the site's answer in its `DESIGN.md` beside the signature
interaction.

## Imagery

One recipe: **a luminous sky over a darkened ground, instruments lit.** The
horizon band carries the warm light; the subject stands between the two.
The subject itself is always fully modelled — the exposure floors from the
asset pipeline apply unchanged (mean luma ≥15 floor, 20–40 target); dusk is
an hour, not an excuse for murk. Palette inside the frame matches the
tokens; no text in images.

People belong in the world as its keepers: crew, watch-standers, hosts of
the in-between hour — lit by their instruments and the last of the sky,
never silhouetted into anonymity, never lifestyle models. At least one
human-presence shot per site.

Constant-phrase template: *"…civil twilight, deep blue sky still luminous
overhead, low apricot afterglow at the horizon, subject fully modelled by
the remaining daylight and its own warm instrument lights, no text."*

## Forms and states

When the price puts a real order or enquiry form on the site (see
`foundry-series.md`, commitment 7), it takes the register's type, palette,
and voice — and it is designed in **all** its states. Vesper's natural
model is the operational form: a flight plan, a manifest, a filed request.

| State | Vesper's answer |
|---|---|
| Rest | Ruled field on the below-horizon dark; label always visible, never placeholder-only |
| Focus | The afterglow hue marks the active line — the same focus treatment as the rest of the site |
| Filled | Working voice, full contrast; the entry reads as a filed value |
| Error | Named beside the field in plain operational language: what is wrong, what to do. Never red-only, never "Invalid input" |
| Submitting | The action states it is working; discretion is not silence |
| Sent | Confirmation as a receipt — what was filed, what happens next, when |

Errors name the problem and the recovery. The form never loses what was
typed. Validation is real (`aria-invalid`, a live region for the result).

## Floors (non-negotiable)

Complete page with JS off; visible focus states in the afterglow hue; body
contrast ≥7:1; no functional text below 11px — tracked micro-labels
included; real buttons with ARIA; keyboard paths; form errors announced,
not just colored; images ≤500KB; reduced-motion gets the finished
composition; mobile keeps the same sky — a nearer horizon, not a lesser
one.

## Anti-patterns (instant fails)

Pure black grounds · Nocturne chiaroscuro borrowed as costume · full-frame
orange sunsets · lens flares · a second warm accent · silhouettes instead
of people · "exclusive/elite/bespoke" said instead of shown · uniform card
grids · rounded corners without a physical reason · busy or springy motion
· mystique copy ("if you know, you know") · a tracked label above every
heading as the automatic opener · functional text below 11px · a form with
no designed error state.

## Process rider

Same loop as the siblings: render → screenshot → five concrete weaknesses →
fix → repeat, ≥3 passes, geometry verified by measurement. Plus the Vesper
question every pass: **is anything on this page darker than its hour?** And
the Foundry test, in both directions:

1. **If a screen could belong to any other site, it is wrong.**
2. **If a screen could belong to another *Foundry* site, it is also
   wrong.** The sharper of the two, and the one the collection keeps
   failing — a device on every site distinguishes none of them.
