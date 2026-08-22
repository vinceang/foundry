# BENT — handoff, 2026-08-21

A wooden roller coaster works in Northumberland County, Pennsylvania. Built in
one session against the new `docs/foundry-standard.md`. **Complete and passing
every floor. Not deployed.** Three `wow-check` rounds; two findings still open.

Source of truth: [`sites/bent/DESIGN.md`](../sites/bent/DESIGN.md). Read it
before touching anything — it states the light, the ground, the accent rule,
the signature, and the Never list, and it records why each was chosen.

## Status

| | |
|---|---|
| Build | `npm --prefix sites/bent run build` passes clean |
| Floors | all green (see below) |
| `wow-check` | 3 rounds; verdicts NOT YET → NOT YET → NOT YET |
| Deployed | **no** — never pushed to Vercel |
| Committed | yes, local only, not pushed |
| Imagery spend | $1.35 across 9 generations |

Dev server was left running on **http://localhost:4340** (`npx astro dev --port 4340`
from `sites/bent`). Restart it if it is gone.

## What it is

**The name.** A *bent* is the A-frame section that is the structural unit of a
wooden coaster — real timber-framing vocabulary, four hundred years old. It also
describes the track: nine layers of pine laminated and bent by hand.

**The spine.** Wooden coasters mostly are not demolished, they are *retracked* —
steel rail laid on the original wooden structure. The skeleton lives, the craft
does not. And a coaster kept wooden is a Ship of Theseus: track is replaced board
by board for decades.

> **The ride is not the wood. The ride is the replacing.**

**The light.** First light, before the park opens — the only hour the ride reads
as a *building*. Argued from the subject, not from a series. This is the first
site built with no series assignment at all.

**The palette rule that everything turns on.** Ground is weathered silver-grey.
The single accent, `--fresh #c98a3c`, is fresh-cut pine — because on a real
coaster the only gold in frame is *wood that was replaced recently*. The accent
marks where the craft last touched the ride. It is not a brand colour.

## The signature — "The Sway"

A wooden coaster's structure is **designed to deflect** under a loaded train and
return. Built rigid it would tear itself apart. The visitor drags a train across
one bent and can drive it out of an acceptable band **in both directions**:

- **Below 1.5″** — too stiff, the joints take the shock and split. *This is the
  surprising failure and it is the point of the whole thing.*
- **Above 4.5″** — too loose, the train fights the track and will valley.

Empty train on new timber reaches the first; full train on fifty-year timber
reaches the second.

**Code:** `sites/bent/src/sway.mjs` holds the model and geometry;
`src/client.mjs` drives it; the SVG is server-rendered in `src/pages/index.astro`
so a JS-off visitor gets a real drawing (34 paths) rather than an empty box.

**Physics model** (simplified but honest, all in `sway.mjs`):
`deflection = (train lb / 10,000) × timber compliance × influence(train position)`.
Compliance rises with age because bolt holes oval and joints take a set; the crew
answers it by sistering and re-bolting.

**Two things to know before editing it:**

1. **The lean is drawn ×30 and the drawing says so.** True scale is ~0.95px per
   real inch, at which a three-inch lean is invisible. `EXAGGERATION` is in
   `sway.mjs`. If you change it, change the caption.
2. **`shearMatrix` and `trackShift` must agree in sign.** They did not, originally
   — the bent's top sheared +59.8px while the track shifted −59.8px, so the
   structure tore apart by 120px and the train was never over the bent it was
   loading. The whole thesis rendered as a broken drawing. Verify numerically
   after any geometry change: at 4.6″ both must return **+131.1px**.

**The gold is wired to the Timber control.** `SISTERS` in `sway.mjs` supplies the
sistered members; `#sway-svg[data-timber]` reveals them. New build = no gold at
all; 20 years = 2 members; 50 years = 6. Changing the control visibly changes
where the craft last touched the ride. This is the best idea in the build.

## Money

Two paths, and the split is real:

- **A ride is a commission** — multi-million, 22 months, a letter not a form.
- **Salvage is an order form** — sections of retired laminated track with
  provenance, $280–$3,400. Under the $5,000 line, so it gets a proper structured
  form, and it carries the homage: the thing you can buy is the thing that was
  replaced.

The form sends an order request by mailto and never touches a card.

## Imagery

Generated through **Bench Studio**, not gpt-image. See
`.claude/skills/foundry-site/references/asset-pipeline.md`.

```bash
bash sites/bent/gen-assets.sh    # 6 plates, one constant art-direction phrase
bash sites/bent/optimize.sh      # JPEG 1536 + 800, ≤500KB, luma check
```

Six plates: `hero`, `bent`, `laminate`, `walk`, `timber`, `salvage`. All above the
**65 luma floor** (daylight register). `assets-src/` is gitignored; only `public/`
ships.

**Three imagery lessons from this build:**

1. Never write "museum specimen presentation" in a prompt — it produced a legible
   brass plaque, and *no text in images* is an instant fail.
2. Generated plates can ship a **baked-in pure-white border**. `bent.png` did.
   `optimize.sh` does not trim it; it was trimmed by hand. Check the corners.
3. The first hero read as an abandoned park at dusk — bare dirt, tire tracks, no
   crew. Regenerating with explicit morning light, green ground, and two distant
   carpenters took luma 74 → 101 and fixed the register. *The Never list forbids
   nostalgia; an empty lot is nostalgia.*

## Floors — all verified green

Script lives outside the repo; re-create it or check by hand. Verified: every
`<img>` has alt · nothing functional below 11px · every form control labelled ·
specimen dialog opens and Escape closes · plate enlargement has a real link
fallback · form error named, announced, `aria-invalid`, focus moved · signature
renders as real SVG with JS off · **nothing hidden with JS off**.

**The JS-off bug is worth remembering.** The reveal animation was opt-*out*
(`.rise { opacity: 0 }` + JS adds `.in`), so a visitor without JS got a hero, a
blank page, and a footer. It is now opt-*in*: content is visible by default and
JS adds `html.fx` only when motion is wanted. Check this on every new site.

## The `wow-check` rounds

The agent (`.claude/agents/wow-check.md`) was written this session and earned its
place immediately. What it caught, in order:

**Round 1** — the sign bug above (found by me only after it flagged the symptom);
a pure-white border baked into `bent.jpg`; `salvage.jpg` generated and never
referenced; the salvage section shipped as a **uniform card grid**, which is on
the Never list; the hero reading as abandoned.

**Round 2** — a **three-way presentation collision**. BENT, Traccia and Banaag all
wore the same device: pale panel, black line-drawn technical elevation, segmented
accent chips, mono readout row. Its fix was better than anything I had: *stop
drawing on a drafting board.* A frame builder and a jeepney shop cannot photograph
their subject mid-specification; a fifty-foot timber structure can be. Also caught
that the accent was on the **train** when DESIGN.md promises gold means new timber,
and that the `×30` honesty caption rendered at **4.3px on mobile**.

**Round 3** — confirmed *"the three-way collision is substantially broken — that is
not the problem any more."* New top finding: the line work was on the **wrong
photograph**. The hero is a three-quarter perspective from a road; an orthographic
elevation cannot register with it. Re-plated onto `bent.jpg` (square-on from below,
one bent, empty sky — orthographic by accident) and turned the frame portrait,
which also took the mobile signature from 342×213 to **342×425**.

## OPEN — pick these up next

**1. The laminate chapter tells the thesis instead of drawing it.** Nine layers is
a countable, datable fact sitting on the photographed cut end — top three laid last
spring, bottom six under trains since 1983. The page passes it by in prose.
*Number and date the nine laminates on the plate, with fresh-cut gold on the three
laid last spring and nothing else.* Obeys commitments 9 and 10 exactly; the
specimen `<dialog>` already exists as the room for the full record.

**2. The apparatus under the drawing is still configurator-shaped.** Chips plus a
readout row. Traccia and Banaag earn that shape because the panel *is* their order.
BENT's Sway is an argument wearing a spec sheet's clothes. *Demote Train and Timber
to inline text switches in the caption line* — "a **full** train on **fifty-year**
timber" — which reads as a sentence the crew would say.

**3. Registration is close, not exact.** The drawn elevation sits on the
photographed bent and they broadly agree, but the drawn legs are narrower than the
photographed ones. This is an iterative loop: draw, screenshot, nudge the
`halfTop`/`halfBase` constants in `sway.mjs`'s `CENTRE`.

**4. Never deployed.** No Vercel project, not in the README table, backlog entry
still under Building.

## Video — needs a Claude restart first

No video was made. The plan in DESIGN.md is a settle loop generated from the exact
still it layers over, so a dip-to-still masks the seam.

**The MCP was registered mid-session, so `mcp__bench-studio__*` was never available.**
After restarting Claude Code the tools load and the path is:

1. `upload_media` the finished still
2. `get_model_capabilities` on an `i2v` model — **pass the input in the exact field
   name it returns**, do not guess
3. `create_media` — a video call blocks for minutes; say so before starting one

`tools/gen-image-bench.mjs` is images only; video has no CLI path. **Bench cannot
upscale** — if a loop lands at 720p, that step stays on Higgsfield.

Rules that still hold: video only where CSS could not fake it, one per page,
desktop-only, lazy, ≤4MB.

## Conventions worth carrying to the next site

- `rm` is deny-listed here. Move rejected assets aside.
- Run `--dry-run` on `gen-image-bench.mjs` before paying for a batch — it prints
  the aspect ratio the model will actually use. `openai/gpt-image-2` has no 2:3.
- Check the signature against **all** built signatures before committing to it.
  `node -e` over `foundry.json` prints them in one line. Three ideas were already
  taken: Traccia owns *terrain writes the product*, Velum owns *the page is a
  flight*, Tyri owns *assembles as you scroll*.
- Checking the *thesis* against siblings is not enough. Check the **presentation**.
  That is what round 2 caught and what DESIGN.md missed.
