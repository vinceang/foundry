# Fàire — handoff

**Built:** 2026-08-07 · **Series:** **Vigil (new)** · **Project:** `sites/faire`
**Live:** https://rubha-na-faire.vercel.app

The principal keeper's house at Rubha na Fàire, Wester Ross. Manned 1857–1988,
automated since, let by the week.

**Thesis:** *you sleep in the house of a light that no longer needs anyone, and
it still crosses the ceiling every twenty seconds.*

Sources of truth: [`sites/faire/DESIGN.md`](../sites/faire/DESIGN.md) and the
new [`docs/vigil-taste-profile.md`](vigil-taste-profile.md).

## The doctrine call — a fifth register

The backlog flagged this build as the one that would force the question, and it
did. It guessed "a Vesper," written before Vesper existed. Now it does, and it
is demonstrably wrong:

> **Vesper's subjects are built on not being seen. A lighthouse exists in order
> to be seen.** Same darkness, opposite purpose.

Nocturne is nearer and still wrong: Nocturne is *a lamp in a room* — an artifact
held in reverence against a void, the darkness a material. This is *a lamp in a
world*: outside, often miles off, falling on weather rather than on an object,
vast where Nocturne is scarce, vigilance rather than reverence. Building it as a
Nocturne would have produced lamp-on-void artifact plates of a landscape
subject, which the new profile now names as this register's specific failure
mode.

**Vigil** closes the naming family: Vespers and Vigils are the two night
offices, evening and the deep of night.

## Signature — "An Solas"

The skill bans time-of-day signatures and names exactly one exception, *a
lighthouse's timed character*. This spends that permission on **identification
and geometry, never atmosphere.**

- **The character**, running at true speed with the period drawn to scale in
  seconds. Then four neighbouring lights, three of which share the same twenty
  seconds — so only counting separates them. That is the site's best fact and
  it is self-evident rather than asserted.
- **The range**, over the curve of the earth, from `2.08 × (√H + √h)`.

**The arithmetic corrected the design document.** The draft claimed the earth
hides the light at 19.9 M from a kayak; it is 15.1 M, and 19.9 is the cottage
window. The better fact: it takes a **ship's bridge at 30 m** before the lamp
rather than the earth is the limit, so the published 24 M is correct and is not
about you. A fifth eye height was added so that branch is reachable at all.

## Interactive points

Thirteen records — **nine tower pins and four rooms** — all through one native
`<dialog>` per commitment 10. Verified programmatically: every record opens with
content, Enter opens from a focused pin, focus enters, Escape closes, focus
returns to the exact pin, `aria-expanded` toggles both ways, no JS errors.

## Traps hit

1. **A drawing can be wrong in a way only arithmetic finds.** The range section
   used a *chord* to the sea curve where the sight line must be a **tangent**,
   and a drop constant without refraction (0.2692) while the 2.08 in the range
   formula already contains it. The picture disagreed with the numbers printed
   beside it. Rebuilt with y measured downward from the eye and k = 0.2301;
   the lamp now lands on the sight line within 0.17 m at every eye height.
2. **The SVG 11px trap, handled two ways in one build.** The range labels are
   *hidden* below 860px (they collide at any usable size and the readouts carry
   the numbers); the timeline's five second-labels are *grown* to 40px (there is
   room, and the scale is the point). The right answer depends on the drawing.
3. **Astro whitespace collapse**, again, in an interpolated count line
   (`2flashes`). `{" "}` is still the only fix.
4. **`<name>.vercel.app` collisions keep happening** — `faire` returned **402**
   (taken, account suspended). The pre-deploy check added after Traccia caught
   it before anything was recorded. Shipped as `rubha-na-faire`.
5. The content filter refused six prompts across the batch. Re-framing beat
   dropping every time — Mòrag moved from the gallery into the lantern and the
   replacement is the better photograph.

## Content note

Scottish Gaelic used correctly and glossed on first use (*fàire, solas, tùr,
taigh, muir, daoine*), and real light-keeping vocabulary throughout
(character, eclipse, period, elevation, nominal and geographic range,
astragals, murette, mercury bath). No tartan, no whisky, no "loneliest place in
Britain", no shipwreck drama.
