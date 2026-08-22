---
name: foundry-imagery
description: >-
  Generate, regenerate, or extend the art-directed imagery of a Foundry site
  that already exists, using the local Bench Studio generator. Use for "generate
  assets for <site>", "regenerate the hero", "this plate is too dark", "add a
  shot of X", "the palette is wrong on that image", "make a video loop for
  <site>", "reshoot the batch", or /foundry-imagery <site>. Covers the whole
  path: shot list, art-direction phrase, generation, exposure check, optimize,
  ship. Do NOT use for a brand-new site — that is foundry-site, which runs its
  own imagery phase. Do NOT use for screenshots or critique passes — those are
  the shot-*.mjs tools.
---

# Foundry imagery

Imagery for a site that is already built. A new site goes through
`foundry-site` instead — it owns its own imagery phase.

Generation runs through **Bench Studio**, Vince's local studio. The key stays in
`~/.env`, every plate is mirrored to his Mac, and every generation is costed.

## The generator

```bash
node tools/gen-image-bench.mjs --prompt "..." --out sites/<site>/assets-src/<name>.png --size 1536x1024
```

Flags: `--size` (`1536x1024` landscape, `1024x1536` portrait), `--model`,
`--res` (`1K`/`2K`/`4K`, default `2K`), `--dry-run`.

Default model is `fal-ai/nano-banana-pro` — it is the one image model that hits
**3:2 and 2:3 exactly**, which is what this repo's CSS boxes are cut to. About
$0.15 a plate, ~30s.

Do **not** start the Bench server. The tool starts it if it is down.

`--size` is pixels only by habit. The tool reads the model's real options and
picks the nearest ratio. Run `--dry-run` first if you switch models — it prints
what it will actually ask for. `openai/gpt-image-2` has no 2:3, so a portrait
plate silently becomes 3:4 and the CSS box crops it. That is the trap.

`tools/gen-image.mjs` (direct OpenAI, key in `~/.config/site-assets/openai.key`)
still works and is the fallback if Bench is broken.

## The pipeline

```
sites/<site>/gen-assets.sh   batch script, one constant art-direction phrase
        ↓                     writes PNG
sites/<site>/assets-src/     raw, gitignored
        ↓                     sips → JPEG 1536 + 800, ≤500KB, luma check
sites/<site>/public/images/  <name>.jpg + <name>-800.jpg — these ship
```

Never write straight into `public/images/`. Never hand-edit a shipped JPEG.

`sites/rosee/` is the cleanest example of both scripts. Copy its shape.

## Order of work

### 1. Read the site, then the standard

Read the site's own `DESIGN.md` — it names the light, the ground material, the
accent, and the signature. That is the art direction. Then read the Imagery
section of `docs/foundry-standard.md` for the binding rules.

Do not go looking for a series or a taste profile. Those are retired; the
per-site `DESIGN.md` is the source of truth for how a site is lit.

The palette *inside the frame* must match the site's tokens. A violation gets
regenerated — never shipped, never corrected in CSS.

### 2. Write one art-direction phrase for the whole batch

One phrase, identical in every prompt in the batch. This is the single
highest-leverage rule in this repo — it is what makes a site's photography read
as one photographer's work.

Keep it in a shell variable so it cannot drift:

```bash
AD="clear cool Provencal dawn light just before sunrise, dew still on everything, soft generous natural light with long low shadows, documentary craft photography, shallow depth of field, no text, no logos, no signage, no lettering"
g() { node tools/gen-image-bench.mjs --prompt "$2" --out "sites/rosee/assets-src/$1.png" --size "$3"; }

g hero-cueillette "A picker's hands lifting white jasmine into a wicker basket. $AD" 1536x1024
g orgue          "A perfumer's organ, tiered shelves of small glass bottles. $AD" 1536x1024
```

Always end the phrase with **no text, no logos, no signage, no lettering**.
Generated lettering is always wrong.

### 3. Generously lit beats atmospherically dark

Vince has rejected builds for shipping murky plates. A dark register is a
compositional choice — the subject itself is always fully modelled in light, and
darkness is what surrounds it. Murky loses to rich every time.

Ask for "generous key light fully modelling the subject, soft fill, near-black
background" rather than "pitch black, deep chiaroscuro".

### 4. Put a person in it

At least one human-presence shot per site. Hands mid-process, a maker at the
bench, a quiet service moment. A world nobody inhabits reads as a rendering.

People here are makers and hosts, never lifestyle models.

### 5. Check exposure before optimizing

Mean luma floors, by the site's own light:

| The site's light | Floor | Note |
|---|---|---|
| Dark — lamp, night, twilight | 15 | target the 20–45 band |
| Bright — daylight, overcast | 65 | below this is a defect, not a mood |

`sites/rosee/optimize.sh` runs this check at the end. Read its output. Anything
flagged `TOO DARK` gets regenerated, not brightened in CSS.

### 6. Optimize and ship

```bash
bash sites/<site>/optimize.sh
```

Every shipped image ≤500KB. Both `<name>.jpg` and `<name>-800.jpg` must exist.

## Budget

At most **6 generated finals** per site — hero, the chapter plates, one material
close-up, one human moment. More than that and the site reads as a stock library.

Each plate is real money. Generate once and look at it. Do not loop, do not
batch-retry a whole set because one shot missed. Regenerate the specific plate
that failed.

## Video

Bench does image→video (`i2v` lane) and text→video (`t2v`). Through MCP:
`mcp__bench-studio__create_media` with an `i2v` model and the still uploaded via
`upload_media`. Generate the loop from the exact still it layers over so a
dip-to-still masks the seam.

Rules from the standard still hold: video only where CSS could not fake it
(parallax, revealed geometry, light raking a surface), one per page,
desktop-only, lazy, ≤4MB.

**Bench cannot upscale.** It has no `upscale_video`. If a loop comes out at 720p
and needs 1080p, that step stays on Higgsfield.

## House rules

- `rm` is deny-listed in this repo. Move a rejected asset aside; do not delete it.
- `assets-src/` is gitignored. Only `public/` ships.
- Implement/keep `?nofx` working — the critique loop needs eager image loading.
