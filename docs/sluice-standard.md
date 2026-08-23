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

- **A generated frame sequence** — N stills of the same scene in N states.
  **Do not attempt this.** Image models cannot hold registration across frames:
  the pond changes shape, the pot moves, the light jumps. You would need every
  frame identical but for one variable, which is the one thing generation cannot
  promise. It also scales badly — a smooth scrub wants dozens of frames at
  ≤500KB each.
- **A scrubbed video** — one clip, `currentTime` driven by scroll. Workable for
  short continuous motion, but generated clips run about five seconds and cannot
  carry a three-week transformation coherently. Reserve it for real footage of a
  real continuous action.
- **Procedural — SVG, canvas, or WebGL driven by data.** This is the default.
  Sharp at any size, exact at every scroll position, trivially reversible, tiny,
  and its reduced-motion fallback is just the static end state. The two best
  instruments already in the collection — BENT's Sway and Malmfuru's Årringene —
  are both this, and neither uses a generated asset for the moving part.

So the split for every Sluice build: **the instrument is drawn from numbers, the
world around it is photographed.** Generate the establishing plates, the
material close-ups and the human presence through Bench as usual. Do not
generate the moving part.

A corollary worth stating, because it will be tempting: if the instrument can
only be built by generating assets, the signature is probably a video wearing a
scrollbar, and the subject needs a different one.

## 4. Slowness is part of the pattern

An instrument the visitor cannot follow is decoration with extra steps.

The most common failure in this phase is motion that resolves faster than a
person can read it. Tune every scrubbed sequence so a normal scroll — not a
deliberate slow drag — lets the visitor see the state change and understand what
changed. When in doubt, halve the rate.

Corollary: **one instrument per site, given room.** Two competing scrubbed
sequences cancel, the same way two signatures cancel.

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
