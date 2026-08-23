# Sluice — the second phase of Foundry

*A sluice is a gate you open to control flow. You set it, the rate changes, you
can close it again. It is operated, it is reversible, and what it governs is
something moving over time. (Rhymes with juice.)*

Sluice is not a separate collection. It is Foundry's second phase: same repo,
same tools, same imagery pipeline, same Glass House, same registry. What changes
is the **subject rule** and the **grammar**.

**Everything in `foundry-standard.md` still applies unless this file overrides
it.** The floors, the rule of 8, the type cadence and its serif warning, the
imagery rules, the human-presence rules, the anti-patterns — all inherited. Read
that file first. This one is short on purpose; it only states the differences.

---

## 1. The subject rule

Foundry takes subjects whose value is an **object** — a house, a board, a plate,
a coat. Sluice takes subjects whose value is **duration**.

The test, and it is the same one the motion section of the standard already
uses: **does the thing take time, and is the taking of time the point?**

Qualifying shapes:

- **A process** — curing, drying, fermenting, firing, tempering, settling,
  smoking, ageing. The craft's argument is what happens between two dates.
- **A route** — a passage, a crossing, a delivery, a migration, a run. The
  argument is the going, not the arriving.
- **A shift** — a working day with a shape to it. A night watch, a tide cycle, a
  harvest, a firing.
- **A cycle** — a season, a rotation, a maintenance interval, a service life.

Disqualifying: anything whose whole case can be made by one photograph of the
finished thing. That subject belongs to Foundry, and putting it here produces a
Foundry site with animation stuck on, which is the failure this phase exists to
avoid.

Ask before committing: **if you removed the passage of time, would the subject
survive?** If yes, it is Foundry's.

## 2. The grammar rule

> **Scroll is a controller, never a trigger. Every state on the page is
> reversible and user-paced.**

This is the phase's single defining constraint, and it is a rule about what the
page *is*, not about how it is built.

A trigger fires once when a threshold is crossed and cannot be undone. A
controller maps scroll position continuously to state, so scrolling back returns
the page to exactly where it was. The visitor is operating the thing, not
watching it play.

### What this forbids

The forbids are the point. They are what stops a build drifting back to an
ordinary scrolling page halfway through.

- **Fade-up-on-scroll, in every form.** Fires once, cannot be reversed. This is
  the single most recognisable machine-made motion tell and it is banned outright
  here, not merely discouraged.
- **Any state the visitor cannot scroll back out of.** If going up does not undo
  it, it is a trigger.
- **Autoplaying sequences that ignore scroll position.** A video that runs on its
  own clock is a film, not an instrument.
- **Motion the visitor cannot outrun or slow.** They set the rate. Always.
- **A signature that only exists on the way down.** It must read identically
  scrubbing upward.

### What satisfies it

Anything that maps scroll position, pointer position or a control value
continuously to page state. `three.js`, GSAP ScrollTrigger with `scrub`, SVG
`stroke-dashoffset`, a scrubbed `<video>` currentTime, CSS scroll-driven
animations, or plain JS reading a progress variable. **The stack is a choice per
site, not a phase rule** — a library mandate would collapse the whole phase onto
one look, which is exactly the failure `foundry-fingerprints.md` exists to catch.

Default toolkit is **three.js + GSAP** because it is the most capable path, not
because it is required. Two of the best instruments in the collection — BENT's
Sway and Malmfuru's Årringene — use neither.

## 3. Never a blank page

A Sluice site must never degrade to nothing.

- **Anything transactional** — a commission, an order, a booking, a price — ships
  a **real static composition** underneath the operable layer. Fully designed,
  not a fallback. Someone with JS off must be able to read the argument and place
  the order.
- **Pure experiences that sell nothing** may drop the no-JS floor, but must still
  degrade to something **legible** — the argument in type and stills. An empty
  container is never acceptable at any tier.
- Reduced-motion gets the finished static composition, never a broken one. This
  is inherited from the standard and is not relaxed here.

Budget for this. It is close to a second design per site, and pretending
otherwise is how the fallback ends up being a blank div at 2am.

## 3b. What an instrument is made of

The collection's asset governance — `foundry-standard.md` § Imagery and the
`asset-pipeline.md` reference — covers stills and short loops. It does not cover
the thing this phase needs most, so this is the rule.

**Build the instrument procedurally. Photograph everything around it.**

An instrument is a continuous, reversible mapping from scroll position to state,
which means it needs to hold a coherent scene across every position the visitor
can land on. Three ways to get there, and only one of them works:

- **Independently generated stills, one per state.** **Do not attempt this.**
  Image models cannot hold registration across separate generations: the pond
  changes shape, the pot moves, the light jumps. You need every frame identical
  but for one variable, which is the one thing separate generations cannot
  promise.
- **A scrubbed clip, or a frame sequence extracted from one.** **This is a real
  option and the ban above does not cover it.** A single clip holds registration
  by construction — it is one continuous shot, so nothing drifts between frames.
  Drive `currentTime` from scroll, or extract frames and swap them, which is what
  product pages that feel like 3D are usually doing. It buys photoreal,
  continuous, reversible motion with no WebGL and no 3D pipeline.

  Its real constraints, so they are not a surprise: generated clips run about
  five seconds, so a long transformation needs either several clips or a slow
  camera move rather than a fast one; scrubbing a compressed clip seeks badly
  unless it is encoded with dense keyframes, so encode for scrubbing or extract
  frames; and the whole thing is desktop-only, lazy, and still bound by the
  video budget in `foundry-standard.md`. Frame sequences must be small enough
  that the set, not each file, is the budget.
- **Procedural — SVG, canvas, or WebGL driven by data.** Still the right answer
  whenever the instrument is showing *numbers*.
  Sharp at any size, exact at every scroll position, trivially reversible, tiny,
  and its reduced-motion fallback is just the static end state. The two best
  instruments already in the collection — BENT's Sway and Malmfuru's Årringene —
  are both this, and neither uses a generated asset for the moving part.

**Choose by what the instrument is arguing.** If it is arguing a *quantity* —
a salinity, a tension, a temperature — draw it from numbers; a photograph cannot
show 25 °Bé. If it is arguing a *transformation you would recognise on sight* —
a pot gaining ash, a wheel pulling true, a landscape crossing a season — a
scrubbed clip is the stronger tool and will read as far more alive than any
diagram of it.

Nothing stops a site doing both: a photoreal scrub carrying the world, with a
procedural readout laid over it carrying the numbers. That combination is
probably the best version of this phase and no site has built it yet.

## 4. Activity density — the page must never sit still

The first Sluice build failed here, so this rule is written from a specific
failure rather than from theory.

Saline pinned one composition for 460vh of scroll and changed one bar and one
number inside it. Every individual state was correct and reversible, and it
still read as **stuck**: the wheel spins, the page does not travel, and roughly
92vh of scrolling buys one stage. An earlier draft of this file made it worse by
telling builds to halve the rate and to run *one instrument per site, given
room*. Together those produce a frozen screen with a single slow needle on it.

The replacement rule:

> **Something is always entering, moving, or resolving.** At any scroll position
> the visitor should be able to point at more than one thing that is changing.

Concretely, in rough order of leverage:

- **Do not pin unless the pin earns it.** A sticky frame removes all positional
  feedback — the one signal that tells a person their input is working. Prefer a
  composition that travels with the page and transforms as it goes. If you do
  pin, pin briefly and release.
- **Move several things at once.** The subject, its readout, its locator and its
  ground can all respond to the same value. One element changing while four sit
  still is a chart.
- **Spend less scroll per state.** If a stage costs most of a viewport, the
  instrument is too slow to feel operable. Budget roughly a third of a viewport
  per meaningful change and tune from there.
- **Let something travel.** A parcel, a playhead, a level, a marker — a thing
  with a position that visibly crosses the frame gives the eye continuous motion
  even when the underlying data steps.

The old rule was not entirely wrong: a sequence that resolves faster than a
person can read is also a failure. But that is a tuning problem at the end, not
a design principle at the start. **Reach for density first and slow down only
what turns out to be illegible.**

## 5. The signature move

Every Sluice site needs one bespoke interaction that exists on that site alone.
The three patterns from the standard's motion section are the starting points —
**the instrument**, **the configurator**, **the process** — but a pattern is not
a signature. The specific thing you built is.

**The test:** describe the move to somebody who has seen the other sites. If they
cannot tell it apart from something the collection already does, it is not a
signature move. A relabelled readout is not a signature move. A hairline meter
with new terminal values is not a signature move.

## 6. The gate and the review

**Before writing markup**, clear `docs/foundry-fingerprints.md`. Sluice rows sit
in the same table as Foundry rows with the phase noted, because the two phases
share tools, taste and a showcase — and are therefore fully capable of colliding
with each other.

**Review requires a filmstrip.** A still cannot judge an instrument, and a static
capture of a Sluice site shows the fallback, which will read as a hole in the
page. Shoot with `node tools/shot-strip.mjs <url> <outPrefix> --mode action` and
step through the interaction. Shoot the signature deliberately at its own
offset — never rely on evenly spaced frames, which will straddle it and miss it.

Sluice has its own critic, forked from the Foundry `wow-check`. Its question 3 is
not the sibling test but: **does the thing you operate reward operating it?** A
page that moves and teaches you nothing is worse than a still one.

---

## What Sluice is not

- Not Foundry with animation added. If the subject would survive losing time, it
  is a Foundry site and belongs in the other phase.
- Not a WebGL showcase. The stack is per-site and the rule is about control, not
  rendering.
- Not an excuse to drop the floors. Contrast, focus states, the 11px label floor,
  keyboard paths and reduced-motion all still apply, and are harder here, which
  is the cost of the phase.
