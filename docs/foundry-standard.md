# The Foundry standard

**Two phases share this standard.** Foundry takes subjects whose value is an
**object** — a house, a board, a plate. Sluice, the second phase, takes subjects
whose value is **duration** — a process, a route, a shift, a cycle — and adds one
defining constraint: scroll is a controller, never a trigger. See
`sluice-standard.md`, which overrides this file only where it says so. If a
subject would survive losing the passage of time, it is a Foundry site.

One house standard for every site in the collection. It replaces the five
time-of-day taste profiles as the thing you read before building.

Foundry makes complete fictional brands, not landing pages. Every project needs
a believable world, a material system, a precise vocabulary, art-directed
imagery, and one interaction that could belong only to that subject.

**Light is a parameter, not a category.** A forge is dark. A hotel is bright. A
lighthouse works at dusk. Decide the hour from the subject, write it into the
site's `DESIGN.md`, and move on. You do not need to justify it against a
register, join a series, or invent a new one. The old series names survive as
tags in `foundry.json` and on the showcase; they no longer govern a build.

---

## The ten commitments

Everything else is derivable from these.

1. **A specific world before a visual style.** Place, subject, audience, and
   vocabulary are decided before components.
2. **Materials are structural.** Color and texture are named as substances from
   the world — lacquer, limewash, iron, linen, basalt, paper — never generic
   design tokens applied for variety. The ground is a material. Never pure
   `#000`, never generic white.
3. **One accent behaves as light.** A single accent appears only where light
   would strike: labels, hairlines, marks, one primary button per view. Past
   roughly 5% of the frame it has become jewelry. There is no second accent.
4. **Photography is evidence.** Images prove atmosphere, craft, habitation, or
   use. Never interchangeable lifestyle filler.
5. **Copy proves instead of claiming.** Specific nouns, acts, provenance, times,
   and ingredients replace empty adjectives. No "premium", "luxury",
   "curated", "unforgettable", no urgency, no social proof. Admitting a flaw
   formally, once, makes every other claim credible.
6. **One memorable interaction.** Each project spends its boldness in one
   subject-specific place and keeps everything else quiet.
7. **Independent identities.** Sites share engineering tools and critique
   methods — never a universal palette or component library.
8. **The order matches the price.** Commission-by-correspondence ("write to us",
   no form) is for the truly bespoke and high-value. If a product, or any real
   variant of it, might sell under $5,000, the site gives a proper on-brand
   order form instead. A workshop may do both. The form takes an order request;
   it never captures a card or processes a payment. Design it in **all** its
   states — see Forms below.
9. **A device earns its place by encoding something true.** Labels, numbers,
   rules, eyebrows, dividers and marks are structure, and structure is
   information. If a device could be deleted without losing information, delete
   it. This applies hardest to whatever the collection has started reaching for
   automatically.
10. **A plate is a specimen, and a specimen can be examined.** Wherever a site
    shows imagery small, that image opens into a larger one carrying the record
    the small form had no room for — true name, measurements in the world's own
    units, provenance, what it was tested against. If there is nothing to say
    beyond "here it is larger", it did not need to open.

    Non-negotiable: the trigger is a real link to the full image, so a JS-off
    visitor still reaches it; the enlargement is a native `<dialog>`; the
    backdrop closes it; reduced motion gets no transition; and the dialog is the
    site's own room, never generic lightbox chrome.

## The rule of 8

Every spacing value is a multiple of 8. 4px is reserved for tight internal
adjustment. Working scale 4, 8, 16, 24, 32, 40, 48, 64, extended by 8s to
chapter scale (128, 192).

Larger gaps between groups than within them. More space above a heading than
below it. When in doubt, add emptiness.

This is structure, not style — like the contrast ratios and the 11px floor. A
dark site and a bright site sit on the same grid and look nothing alike.

## Parameterize per project

The standard deliberately does not make these choices for you. Decide each one
from the subject and record the answers in the site's `DESIGN.md`.

| Axis | What to decide |
|---|---|
| **The light** | What hour does this world actually live at? Dark, bright, twilight, overcast — argued from the subject, not from a category |
| Ground material | The named substance the page is made of |
| The accent | One only, and where light would strike it |
| Structural counterweight | What gives the ground its shape (ink, iron, dark oak, lampblack) |
| Display face | Regular weight only, tracked slightly wide |
| Body / label face | A quiet grotesque or humanist sans |
| Signature geometry | Pick ONE shape; it is the only ornament |
| Cultural motif | Optional; must be real and correct, never costume |
| World vocabulary | Name your domain's nouns and use them everywhere |
| Opening move | How a chapter announces itself — see below |
| Signature interaction | The one bold thing |

## The fingerprint gate

**Before writing any markup, clear the gate in `docs/foundry-fingerprints.md`.**

It records six dimensions per site — grammar, opening move, chapter device,
signature move, close pattern, type and register. A new build must differ from
**every existing row on at least 4 of the 6**, checked against each row
individually, not averaged across the table.

This exists because the collection kept varying world and holding shape
constant. Twenty-five places, twenty-five crafts, three grammars. The gate is
the only mechanism here that runs *before* the build; everything else in this
file is a rule the build can drift past, and a critique after the fact is too
late to change what the page is.

If a planned build fails the gate, **change the plan, not the table.**

After shipping, append one row and say plainly what it shares with prior rows.
The shared columns are what the next build has to avoid.

## The signature interaction — and the light-over-time trap

Each site spends its boldness in exactly one place. Choose that axis by
surveying what the built sites already do (their `DESIGN.md` signatures) and
then going somewhere else.

The registry is the survey. Do not do it from memory.

**Light over time is a mannerism to avoid by default.** It was distinctive
once. The collection has now spent it four times over — Lagar do Sol's day
line, Aresta's orientation-and-light, Dar el Warda's sundial, Larès's
forecast-written day. A device that appears on every site stops reading as
atmosphere and starts reading as pretension. If the next site also "watches
the light move through the day", it is wrong on arrival.

Reach for time only when the subject makes it genuinely inevitable — a literal
sundial, a lighthouse's timed character — and even then find a fresher take.

Richer axes, all proven in the collection:

- **Material / process** — a goblet's glow cooling to glass; a maple plate's
  graduation mapped as contours; varnish building coat by coat.
- **Spatial / structural** — a corner joint assembling as you scroll; a flight
  profile flown down a rail.
- **Configurable / made-to-order** — the current favorite, and the highest form
  of this. The product redrawn live from the buyer's own inputs, with the order
  placed in the same act. Veta's "draw your board" is the exemplar. Reach for
  this whenever the product is made-to-order.
- **Provenance / archive** — a tree-ring record scrubbed from pith to bark; a
  ledger of what is on the bench, promised, and gone.

Interpret through the subject. Never paste the same animation onto every site,
and never default to the sun.

## Type cadence

Three voices, strict casting: a display face, a light body face, and
tracked-caps whisper labels (11px floor, 600 weight, `.3–.42em` tracking, set in
the accent).

**The serif display is a mannerism to avoid by default.** Surveyed across the
built collection: 23 of 25 sites set their display in a serif. One is a sans.
Fraunces alone carries five sites; EB Garamond and Faustina two each. Nobody ever
decided this — the standard never asked for a serif, and every site arrived at
one anyway, because a serif is what "crafted" reflexively looks like.

That is the same failure as light-over-time, and it is worse, because it is on
every page rather than in one section. A collection where every house speaks in
the same voice reads as one generator with a photo library.

Before setting the display face, survey what the built sites use and go
somewhere else. Faces that are barely spent here and belong to real registers:

- **Grotesques and neo-grotesques** — industrial trades, engineering, marine,
  anything with tolerances and specifications. banaag is currently the only site
  that took this road.
- **Condensed and compressed** — signage, shipping, transport, anything where
  the real-world lettering is squeezed by its surface.
- **Slabs and Egyptians** — timber, print, ironwork, presses, agriculture.
- **Geometric and constructivist** — anything twentieth-century, industrial
  design, radio, aviation.
- **Monospace as display** — instruments, measurement, logging, ledgers. A site
  whose signature is a readout has its display face sitting right there.
- **A vernacular face from the actual place** — the strongest answer when it
  exists, and the hardest to fake.

**Fraunces, EB Garamond and Faustina are spent.** Do not set a new site in one
without an argument that names why this subject specifically demands that face,
and write the argument in the site's `DESIGN.md`.

A serif is still correct when the subject is genuinely bookish, ecclesiastical,
editorial or old-world — Rosée, Schwarzwald and Hurr earn theirs. The rule is not
"no serifs". It is that the display face must be argued from the trade, the way
the palette already has to be.

Body copy runs 55–60ch. Numbers that matter — prices, counts, indices — render
in the display face, one size up, written out in full, never abbreviated.

## The opening move

How a chapter announces itself is a **per-site choice, made once and held
site-wide**. Consistency belongs inside a site; across the collection it reads
as one generator.

The whisper label above a display statement is one answer, and it is now well
spent across the collection. Alternatives:

- The label moves to the margin rail, vertical in the gutter.
- Absorbed into the display statement, so the heading carries its own weight.
- A measure carrying real information — a count, an hour, a number of winters.
  Never a decorative `01 / 02 / 03`.
- Cold open. The display statement, nothing above it.
- A colophon. The mark closes the chapter instead of announcing it.

## Structure

- Fixed chrome never touches content. Headers go transparent over the hero, take
  a veil once scrolled, withdraw on scroll-down, return on scroll-up.
- Margin rails use vertical text (bottom-to-top for rotated Latin) and stay
  entirely inside the gutter.
- Zero border-radius. The signature shape is the only ornament.
- One subject at a time, generous space around it, alternating asymmetric
  compositions. A uniform card grid says inventory; alternation says curation.
- Empty states are ceremonial, not apologetic.

## Motion

### The reveal floor — binding, and previously undocumented

**Every site ships the house reveal before anything else is designed.** `.rv`
and `.rv-line`: opacity and translate on entry via one `IntersectionObserver`,
siblings staggered with `--d`, and a masked line reveal for display headings
where each line rises from behind its own edge. Copy it from
`sites/schwarzwald/src/styles/global.css` — the richest implementation — and note
that it must be **visible by default**, with only `html.js` hiding anything, so
a failed script can never blank a page.

This section exists because the standard never wrote it down and the convention
died. Measured across the collection by build date:

| Built | Sites | Reveal elements |
|---|---|---|
| 12–15 Jul | kaji, vicente, schwarzwald, shokunin | 46, 58, **74**, 60 |
| 18–24 Jul | aresta, lagar-do-sol, alla-luna, santagata, veta, tyri, dar-el-warda, lares | 7–47, uneven |
| 26 Jul | **ibushi** | **0** — the first zero |
| 1–21 Aug | barchetta, nipis, rosee, traccia, tsutsumiya, faire, banaag, hurr, bent | **all 0** |

It was carried by copying from a sibling, so once builds began copying from
recent siblings rather than from Schwarzwald it decayed one generation at a time
and then stopped entirely. Nothing in this file ever required it.

Note what the August zeros have in common: every one is a configurator site.
Those builds spent the whole motion budget on the signature interaction and never
laid the floor — treating motion as an *alternative* to the signature rather
than the ground it stands on.

**Motion is the floor, not the ceiling.** The reveal goes in first; the signature
is crafted on top of it. A site without the reveal is unfinished no matter how
good its signature is.

### Ambient motion

One easing curve for everything (`cubic-bezier(.19,1,.22,1)`-class), long
durations (0.9–2.2s). Entrances settle. Loops breathe. Nothing bounces, snaps,
sparkles, or performs for attention.

One ambient effect per viewport, maximum. All motion is progressive
enhancement, and reduced-motion gets the finished static composition — never a
broken one.

### Ambient motion vs. signature motion

These are different things and the standard treats them differently.

**Ambient motion** is the settling and breathing above. It is atmosphere. It
should be barely noticed, and the rules above are the whole of it.

**Signature motion** is when the site's one bold move *is* the motion — the
thing a still frame cannot show. It is a candidate for the signature axis, not a
decoration laid over one.

**When signature motion is the honest choice: when the craft's value is
duration.** If what the workshop sells involves time passing — settling, curing,
drying, fermenting, firing, tempering, growing, the tide — then a static page is
arguing the case in prose while refusing to show it. That is the test. If the
subject has no duration in it, do not reach for motion; a still composition is
the honest answer and the collection has many good ones.

Three patterns, all proven or half-built here. Pick by subject, never by turn:

- **The instrument.** A physical artifact the reader scrubs, drags or steps
  through, and it discloses a record as they move. Malmfuru's *Årringene* — 228
  rings, 228 years, pith to bark — is the exemplar. Reach for it when the craft
  *keeps* a record.
- **The configurator.** Inputs redraw the product live, and the order is placed
  in the same act. Veta's "draw your board". Reach for it when the product is
  made to order. (See the signature-interaction section above; this is the same
  axis, named here as motion.)
- **The process.** One transformation the craft performs, shown across its real
  duration rather than described. Reach for it when the making itself is the
  thing worth watching.

Two disciplines, or signature motion decays into the ambient kind:

1. **One nameable move per site.** If you cannot say what it is in a sentence,
   there isn't one — there is just animation.
2. **Write down what does not animate.** Put the sentence in the site's
   `DESIGN.md`. That line is what stops fade-up-on-scroll creeping back across
   every section, which is the single most recognisable machine-made motion tell.

**Frequency.** Signature motion joins the pool of signature axes surveyed in the
section above — it is not a requirement and not a rotation. It should turn up
more often than it has, because the collection has reached for light and
composition far more readily than for movement. Survey the siblings, and when the
subject has duration in it, prefer the moving answer.

**Reviewing it.** A screenshot cannot judge motion, and a static capture of a
site whose signature moves will show the no-JS fallback and read as a hole. Shoot
a filmstrip — `node tools/shot-strip.mjs <url> <outPrefix>`, or
`--mode action` with the interaction steps — and review the frames in order. A
signature that only exists in the live page is a signature nobody reviewed.

## Imagery

One recipe per site, held across the whole batch: **one subject, one light
direction, one ground.**

- **Generously lit beats atmospherically dark.** The subject is always fully
  modelled in light. Darkness is where the light stops, never an underexposed
  frame. Murky loses to rich every time — builds have been rejected for this.
- Mean luma floors: **15** for a dark register (target the 20–45 band), **65**
  for a daylight one. Measure it; do not eyeball it.
- The palette *inside the frame* must match the site's tokens. Regenerate
  violations. Never correct them in CSS.
- **No text in images, ever.** Generated lettering is always wrong.
- **People throughout, not one token shot.** The maker at the bench, hands
  mid-process, a quiet service moment, someone carrying, measuring, waiting,
  deciding. People are makers and hosts, never lifestyle models. A world nobody
  inhabits reads as a rendering.

  One shot was the old floor and it became the target — every site shipping
  exactly one figure, always at a respectful distance, always mid-craft. That is
  its own mannerism, and it is a quiet cause of blandness across the collection:
  a page of immaculate objects with a single person visiting it.

  There is no cap. Faces are allowed and often better than the back of a head —
  a face carries attention and stakes, and hands alone read as stock after the
  second frame. Vary the distance: one close enough to read an expression, one
  that gives the work its scale, one where the person is incidental to a larger
  frame. Ask what the craft actually looks like when someone is doing it all day,
  and photograph that, rather than clearing the count.

  The one real restriction stands: people are here because they make the thing or
  keep it. Nobody is posed enjoying a lifestyle.
- One constant art-direction phrase across every prompt in a batch. This is the
  single highest-leverage rule — it is what makes a site's photography read as
  one photographer's work.

Generation runs through Bench Studio. See the `foundry-imagery` skill and
`.claude/skills/foundry-site/references/asset-pipeline.md`.

**Video must earn its place.** If CSS could fake it (zoom, pan), use the still.
Video exists for parallax, revealed geometry, light raking a surface. The camera
moves as a visitor would — slow constant-speed arc, never a turntable, never
handheld. Generate from the exact still it layers over so the loop dips back to
the image seamlessly. One video per page; desktop-only, lazy, ≤4MB.

## Forms and states

The form is part of the world, not an exception to it. It takes the site's type,
palette and voice, and it is designed in **all** its states:

| State | What it does |
|---|---|
| Rest | Hairline field on the ground; label always visible, never placeholder-only |
| Focus | The accent brightens — the same focus treatment as the rest of the site |
| Filled | Body face, full contrast; the entry reads as a written line |
| Error | Named beside the field in the world's voice: what is wrong and what to do. Never red-only, never "Invalid input" |
| Submitting | The action states it is working; nothing spins decoratively |
| Sent | A ceremonial confirmation — what was received, what happens next, when |

The form never loses what was typed. Validation is real (`aria-invalid`, a live
region for the result). A commission lost to a silent failure is the one
unforgivable interaction here.

## Floors — non-negotiable

Complete page with JS off · visible focus states · body contrast ≥7:1 measured ·
no functional text below 11px, SVG labels included · real buttons with ARIA for
interactive marks · keyboard paths including Escape out of any dialog · form
errors announced, not just colored · images ≤500KB · mobile keeps the same
character at a smaller scale — a smaller lamp, not a lesser brand.

## Anti-patterns — instant fails

Pure `#000` or generic white · a second accent color · uniform card grids ·
rounded floating cards · bouncy or springy motion · urgency copy, badges,
timers · "luxury" said instead of shown · decorative gradients · stock-photo
lifestyle imagery · costume use of a culture's motifs · more than one ambient
effect per viewport · a tracked label above every heading as the automatic
opener · functional text below 11px · a form with no designed error state · a
site darker than its subject's world actually is.

## Process rider

The document is half; the loop is the other half.

Work in critique passes: render → screenshot → find five concrete weaknesses →
fix → repeat, at least three passes. Verify geometry with measurements, not
eyeballs. Regenerate any asset that violates the palette rather than shipping it.

Then apply the test relentlessly, in both directions:

1. **If a screen could belong to any other site, it is wrong.**
2. **If a screen could belong to another *Foundry* site, it is also wrong.**

The second is the sharper one and the one the collection keeps failing. A device
on every site distinguishes none of them.

---

## Historical

The five time-of-day profiles — `nocturne-`, `aubade-`, `vesper-`,
`pastorale-`, `vigil-taste-profile.md` — and `foundry-series.md` remain in
`docs/` for the record and for their palette calibrations. Existing sites were
built against them and their handoff docs reference them.

They are no longer read before a build. This file is.
