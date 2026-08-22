# BENT — handoff, 2026-08-21

A wooden roller coaster works in Northumberland County, Pennsylvania. Built in
one session against the new `docs/foundry-standard.md`.

**Live: https://bent-ten.vercel.app** — deployed, registered, and verified with a
production screenshot. Three `wow-check` rounds, all acted on.

Source of truth: [`sites/bent/DESIGN.md`](../sites/bent/DESIGN.md). Read it
before touching anything — it states the light, the ground, the accent rule,
the signature, and the Never list, and it records why each was chosen.

## Status

| | |
|---|---|
| Build | `npm --prefix sites/bent run build` passes clean |
| Floors | all green (see below) |
| `wow-check` | 4 rounds; NOT YET ×3, then **CLOSE** — both CLOSE findings acted on |
| Deployed | **yes** — https://bent-ten.vercel.app, production verified |
| Registered | foundry.json, README table, backlog → Built |
| Video | hero loop, 6s, 1.0MB, desktop-only |
| Spend | $1.51 across 11 generations (10 images + 1 video at $0.0092) |

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

## What was closed after the third round

**The laminate chapter now draws the thesis.** Nine numbered, dated laminates
below the plate — three gold at 2026, three grey at 1998, three at 1983 — with a
key saying layers 1–6 have all been replaced at least once. It reads as a
countable fact rather than a sentence about one.

**The configurator apparatus is gone.** Train and Timber are no longer chips.
They are two cycling words in a sentence: *"Right now: a full train on
fifty-year timber."* Each is a `<button>` carrying its value as its label with an
`aria-label` stating what activating it does. The slider survives as the keyboard
path, labelled "Drag the train on the structure, or use this". Verified through
all three states: 3.1″ in band → 4.6″ too loose → 0.8″ too stiff.

**One bug found while verifying that.** The damped settle overshoots past plumb —
which a real bent does — but the readout was reporting the transient, so it
briefly showed **−0.5 in**. `paint()` now takes a separate `readout` argument:
the drawing shows the overshoot, the figures report the steady state.

## Round four — CLOSE, and what it caught

**A live contrast breach my own floor script could not see.** Three nav labels
measured **2.25–2.53:1** against open sky on the hero. The script compared
tokens to tokens; nothing compared text to the *image underneath it*. The header
scrim is now opaque enough at the top (.86 → .72 → 0 over 132px) that the band
is reliably dark whatever the plate does. Re-measured on live production:
worst label is now **8.88:1**.

**If you write a floor check, sample the rendered pixels.** A token-versus-token
contrast test will pass a page that is unreadable.

**The signature was the third-largest composition on its own page** — 632px wide
beside a 1440px photograph. It is now a **full-bleed `--iron` band**: the only
dark field between the hero and the footer, with the drawing, the band bar, the
figures and the sentence all inside it. That is also the last of the Traccia and
Banaag collision — both are drawing-left / spec-column-right on their page
ground; a full-bleed dark instrument panel is nobody else's shape.

Three colours inside that new dark field measured 5.84–6.61:1 and were lifted to
clear 7:1.

**Two smaller ones.** The laminate stack had 18px of gutter between 8px boards,
so it read as a bar chart rather than a cross-section — the rows are now flush
with a hairline. And the photo caption said the bottom *six* had been under
trains since the Reagan administration while the drawing eight pixels below
dated layers 4–6 to **1998**; the copy now says the bottom three.

## Still open

**1. Registration is close, not exact.** The drawn elevation sits on the
photographed bent and they broadly agree, but the drawn legs are narrower than
the photographed ones. Iterative: nudge `CENTRE`'s `halfTop`/`halfBase` in
`sway.mjs`, screenshot, repeat.

**2. The cycling switches** now carry a dotted rule and a small bent glyph to
separate them from links, but nobody has watched a first-time user find them.

**3. The live mobile signature has never been looked at** in its final form. The
dark band and the photo underlay are unconditional in CSS so they should be
correct, but no screenshot of the shipped mobile signature exists.

## Round five — the hero copy, reported by Vince

He screenshotted the hero **with the loop playing** and the copy was hard to
read. He was right, and the cause is worth writing down.

**Every contrast check I had run used the still.** All my screenshots were
`?nofx` or caught the poster frame. Measured properly, the loop's bright decile
behind the text runs **0.615 → 0.762 across six seconds** — it drifts *into* the
failure. Cream on the worst frame was **1.10:1**. Invisible.

Worse: the poster itself measured **1.29:1** by the same method. The hero copy
had been marginal since the first build; the video only exposed it.

Two causes, two fixes:

1. **The loop shipped 19% brighter than the still it layers over.** An i2v model
   does not inherit the plate's grade. Regraded with
   `eq=gamma=0.80:brightness=-0.045:saturation=0.94`, which takes the worst frame
   to 0.573 — now slightly darker than the poster, which is right for the moving
   layer.
2. **The scrim was painting underneath the video.** `.hero__loop` sits at
   `z-index: 1` inside `.hero__img`; `.hero__img::after` had no z-index, so the
   gradient rendered *below* the loop and did nothing while it played. The scrim
   is now `z-index: 2` and `.hero__body` moved to 3.

The gradient was also reshaped to the measured bright decile rather than guessed
— it stays clear of the lift hill and sky in the top half and carries the lower
half dark enough that body copy clears its floor wherever it lands.

Verified on the composited page at the loop's brightest frame: **h1 15.65:1,
lede 12.52:1, foot meta 9.00:1** — all from 1.10:1. Still 15.81:1, mobile 8.77:1.

**Two method lessons, both the same shape as the nav breach in round four:**

- **Check contrast against every layer that can be behind the text**, including
  a video's later frames. A poster-only check is a check of the best case.
- **Sampling "the darkest pixels in the box" is not the ground behind the
  glyphs.** That method reported 12.38:1 for a hero that was visibly failing,
  because it was picking up dark timber elsewhere in the crop. Use a strip that
  contains both glyphs and real ground, or look at the picture.

**Then Vince said it read too dark, and he was right.** Worth knowing which lever
actually controls that: pulling the scrim back from .94 to .74 changed the
composite almost not at all (15.65 → 14.47) because in the text zone the
darkness was coming from the *graded video*, not the gradient. Giving most of
the grade back (gamma 0.93, brightness −0.012) opened the plate up properly.

The contrast that was lost there was bought back by lifting the hero's own foot
meta from `#c3bcae` to `#d8d1c4` — **raise the text, not the background.** The
tightest line ended up better than before the lightening (8.78 → 10.45) on a
visibly brighter plate.

Final, at the loop's brightest frame: h1 11.72:1, lede 12.81:1, foot meta
10.45:1. Still 14.77:1 / 10.67:1, mobile 8.57:1.

## Video — done, and how

`public/video/hero-loop.mp4` — 6s, 1280×720, **1.0MB**, generated through the
Bench MCP from the exact hero still it layers over, so the dip back to the image
has no seam.

The path, for the next one:

1. `upload_media` the finished still → returns a fal URL
2. `list_models` with `accepts: image, output: video` → read the **exact** input
   field name. It differs by model: LTX and Seedance want `image_url`, Kling wants
   `start_image_url`. Guessing costs a failed paid call.
3. `create_media` with `input_assets: [{url, field, media_type}]`
4. Compress before shipping. Raw was 4.03MB; `ffmpeg -crf 30 -preset slow -an`
   took it to 1.0MB. ffmpeg is at `tools/node_modules/ffmpeg-static/ffmpeg`.

`lightricks/ltx-2.5/image-to-video/fast` cost **$0.0092** for six seconds — video
here is cheaper than a single image plate.

Prompt lesson: say *"the structure itself is completely still and rigid — no
swaying, no camera shake"* explicitly. An i2v model will otherwise animate the
subject, and on this site a swaying structure would contradict the signature.

It is wired desktop-only (`max-width: 900px` hides it), never fetched until JS
decides to play it (`preload="none"`, `src` set in JS), paused when off screen,
and the still is the poster. **Verified in a headless browser: playing, 1280px,
and on mobile the `src` is never set at all.**

**Bench cannot upscale** — if a loop lands at 720p and needs more, that step stays
on Higgsfield.

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
