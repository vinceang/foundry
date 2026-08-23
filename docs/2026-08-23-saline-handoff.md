# Saline de Kervalet — handoff

**Built** 2026-08-23 · [`sites/saline`](../sites/saline) ·
<https://saline-kervalet.vercel.app>

The first **Sluice** site. Subject: a working saline on the marais salants of
Guérande, Loire-Atlantique. Seawater is walked through a cascade of clay ponds
over about three weeks, climbing from 3.5 to 25 °Bé, and comes out as gros sel
and fleur de sel. No pumps, no heat, no machinery.

Governed by [`foundry-standard.md`](foundry-standard.md) and, where it
overrides, [`sluice-standard.md`](sluice-standard.md). The site's own source of
truth is [`sites/saline/DESIGN.md`](../sites/saline/DESIGN.md).

## Why this subject opened the phase

The Sluice screening test is *if you removed the passage of time, would the
subject survive?* Here it plainly does not: there is no salt without three
weeks of evaporation, and the paludier's entire skill is timing rather than
making. It also answered two standing complaints at once — the collection was
too dark, and it was 23-of-25 serif. This site is bright noon and a sans.

## The signature — *la cascade*

Scroll position maps continuously to the state of one parcel of brine.

| Stage | °Bé | Depth | Day |
|---|---:|---:|---:|
| Vasière | 3.5 | 40 cm | 0 |
| Cobier | 6 | 25 cm | 4 |
| Fares | 12 | 12 cm | 11 |
| Adernes | 18 | 8 cm | 17 |
| Œillet | 25 | **3 cm** | 21 |

Everything derives from one pure function in
[`src/cascade.mjs`](../sites/saline/src/cascade.mjs), so a given scroll position
always yields the same state and the instrument reads identically scrubbed
either way. Arrow keys step the stages.

**What it teaches that a caption cannot:** the water gets *shallower* as it gets
stronger — 40 cm at the tide gate, 3 cm in the pan where salt forms. That is why
one still afternoon finishes a harvest and one shower undoes three weeks, and
you feel it as the section drains under your hand.

**The weather control.** `SOLEIL` / `PLUIE`. Rain floods the saline and costs
the concentrated pans most, because the œillet is three centimetres deep and the
vasière is forty — `panBe()` models that asymmetry, which is the whole reason a
paludier watches the sky. The visitor can ruin three weeks of work and undo it.

**Drawn from numbers, not generated.** Per `sluice-standard.md` § 3b: the
instrument is SVG driven by data, and only the world around it is photographed.
A generated frame sequence cannot hold registration across states, and its
reduced-motion fallback would be nothing.

## Never a blank page

The site has a commission, so it ships a real static composition: with JS off,
the cascade renders as all five pans at their true colours plus the full table
of every number, and the whole page — chapters, yields, order form — is present
and legible. The script hides the static block only once the instrument is live.

## Palette and the fleur rule

| Token | Value | Role |
|---|---:|---|
| Glare | `#f4f4f0` | page ground |
| Argile | `#d9d3c6` | dried clay bank |
| Vase | `#8f8a7c` | wet clay floor |
| Saumure | `#6f8478` | weak brine |
| **Fleur** | `#c2705f` | **the accent** |
| Fleur deep | `#a85643` | white type on the accent only |
| Sel | `#fcfbf8` | salt white |
| Encre | `#22201c` | ink |

The rose accent is a *reading*, not a brand colour: in the marsh, water turns
pink when *Dunaliella salina* blooms near saturation, so the water goes rose
immediately before it becomes salt. It appears in the cascade as concentration
climbs, on one primary action, and nowhere else.

`--fleur-deep` exists for one measured reason: `sel` on `fleur` is 3.51:1 and
fails. On the deeper cut it is 4.98:1. Body text is 14.75:1.

## Type

**Bricolage Grotesque** display, **IBM Plex Sans** body, **IBM Plex Mono** for
every measurement. Explicitly not a serif — see `foundry-standard.md` § Type
cadence. A saline records itself in numbers, so the mono is not styling.

**Opening move:** the actual salinity at that stage, in mono at display size,
with the pond name beneath. Not a tracked-caps label above a heading — that
device is spent, and the sibling test caught it when the hero eyebrow drifted
back to `PLACE · PLACE · SINCE YEAR`, which is nearly Malmfuru's opener verbatim.

## Imagery

Eight plates through Bench (`fal-ai/nano-banana-pro`, 2K, $1.20 total).
Batch script: [`sites/saline/gen-assets.sh`](../sites/saline/gen-assets.sh).

Constant art-direction phrase across every prompt: *"high summer midday on the
marais salants of Guerande in Brittany, hard clear overhead sunlight, bleached
pale clay banks and shallow standing water, documentary photography, natural
colour, crisp and generously lit, no haze, no text."*

Three plates carry people and every one shows a face — a woman drawing fleur off
the surface with a lousse, two workers heaping a mulon mid-lift, and an
end-of-shift portrait with dried salt on the forearms. That is the revised
human-presence rule, not one distant figure.

Exposure floor is **110 luma** for this site rather than the usual 65, because
it is the collection's bright outlier and a murky plate here is a defect, not a
mood. All eight land 149–224. Largest shipped file 480KB.

## Review

Two `sluice-check` passes, both **CLOSE**, both acted on rather than overridden.

Round one: rain did not touch the plan, so the most dramatic act on the page
read as a bar sliding; the plan and section were sized inversely to their
information; the payoff frame was off-screen at the moment it arrived; the hero
was a header; the eyebrow was the banned device.

Round two found the sharpest thing in the build: *the state you would remember
was the one you reach by breaking the site, not the one you reach by finishing
it.* The cause was mechanical — `crystalAmount` drove a crust 14% of the pan
tall onto a 7.5% brine band, so white swallowed the rose exactly when the rose
was the argument. The crust now rides the waterline and is drawn broken.

## Gotchas for the next session

- **`shot-strip.mjs` must be run from the repo root** — it resolves
  `playwright-core` from `tools/node_modules`.
- **Never sample this site's frames evenly.** The cascade is sticky and the hero
  plate is 88vh, so offsets shift whenever either changes. Compute the section's
  own offset first; evenly spaced frames straddled BENT's signature and missed
  it entirely.
- The client script imports from `../cascade.mjs`. A missing import there fails
  silently in screenshots and only shows in the console — `SALT` was omitted
  once and killed the entire order form while the page still looked fine.
