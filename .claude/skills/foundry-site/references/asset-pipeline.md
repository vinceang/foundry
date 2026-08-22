# Asset pipeline — model choice, exposure, and file handling

Hard-won conventions from the Shokunin (2026-07-12), Schwarzwald (2026-07-14/15),
and Aubade builds. Following these avoids relearning expensive lessons.

## Choosing the model

**Bench Studio is the default.** It runs locally, keeps the key in `~/.env`,
mirrors every plate to disk, and records the cost of each one.

```bash
node tools/gen-image-bench.mjs --prompt "..." \
  --out sites/<name>/assets-src/<shot>.png --size 1536x1024
```

Do not start its server; the tool starts it if it is down.

| | Bench (`tools/gen-image-bench.mjs`) | gpt-image (`tools/gen-image.mjs`) | Higgsfield MCP |
|---|---|---|---|
| Best at | Stills, atmosphere, interiors, product plates | Graphic compositions, tight palettes | Upscaling, video finishing |
| Aspect | **3:2 and 2:3 exact** | 4:3 / 3:4 only | n/a |
| Video | Yes — `i2v` lane, still uploaded as the start frame | No | Yes |
| Upscale | **No** | No | Yes |
| Cost | ~$0.15/plate, recorded | Untracked | Untracked |
| Key | `~/.env` | `~/.config/site-assets/openai.key` | account |

The aspect row is the one that bites. This repo cuts portrait plates to 2:3.
gpt-image cannot make 2:3 — it returns 3:4, and `object-fit: cover` then crops
crowns, pendulums and handles. Bench's default `fal-ai/nano-banana-pro` returns
true 2:3. Run `--dry-run` to see the ratio a model will actually use before
paying for a batch.

Bench generates at `--res 2K` by default (≈2528px on the long edge), so the
`-Z 1536` step in `optimize.sh` downscales into sharpness rather than
upscaling into mush.

If Bench is down, gpt-image is a proven fallback for stills — the Schwarzwald
plates came out palette-compliant on the first batch. Keep Higgsfield for
upscaling and video finishing, which Bench does not do.

## Art direction

- **One constant phrase per batch.** Keep a single art-direction phrase
  identical across every prompt in a site's batch (e.g. "generous warm key
  light fully modelling the subject, soft amber fill, near-black
  background, no text"). This is what makes a site's photography read as
  one photographer's work.
- **One human-presence shot per site, minimum.** The maker at the bench,
  hands mid-process, a profiled craftsman, or a quiet service moment —
  people are makers and hosts, never lifestyle models. For maker shots,
  keep the batch's constant phrase and add "a craftsman at work, face lit
  by the work itself."
- The standard's imagery recipe is binding: the palette *inside the
  frame* must match the site's tokens. Regenerate violations; never ship
  them, never fix them in CSS.
- No text in images, ever — generated signage/lettering is always wrong.

## The exposure floor (gpt-image especially)

"Pitch-black background, deep chiaroscuro" makes gpt-image underexpose —
Schwarzwald shipped two plates at mean luma ~7 that vanished into the dark
page. Instead:

- Prompt for **"generous warm key light fully modelling the subject + soft
  amber fill, near-black background"**.
- After generation, apply a gamma 0.8 midtone lift (PIL point LUT) before
  the JPEG pass. Mean luma ≥ 15 is the *floor*; target the **20–40 band**
  (check with a PIL histogram). Two builds have been rejected for shipping
  plates that were technically compliant but read murky — when in doubt,
  the richer, brighter take wins.
- **Never darken plates in CSS.**
- The gamma lift was a gpt-image remedy. Bench's `nano-banana-pro` has not
  needed it so far — the one Aubade test plate landed at mean luma 102 from the
  prompt alone. Measure first; only lift what actually reads dark.
- If a still has a settle video, apply the identical lift to the video
  (`ffmpeg -vf lutrgb='r=gammaval(0.8):g=gammaval(0.8):b=gammaval(0.8)'`)
  or the video-to-still dissolve pops.

## Aspect and crop

Generate portrait product plates at `--size 1024x1536` and match the CSS box to
2:3; landscape at `--size 1536x1024` against a 3:2 box. `object-fit: cover` on a
mismatched box crops crowns, pendulums, and handles — decide the crop at
generation time, not in CSS.

The flag is written in pixels for continuity with the old gpt-image scripts.
`gen-image-bench.mjs` converts it to whatever the chosen model actually accepts,
so the ratio survives even though the pixel numbers do not.

## Video

Only where CSS could not fake it (parallax, revealed geometry, light raking
a surface). Generate the loop from the exact still it layers over, so a
dip-to-still masks the loop seam.

Through Bench, that is the `i2v` lane over MCP: `upload_media` the finished
still, then `create_media` with an `i2v` model, passing the returned URL in the
field `get_model_capabilities` names for it. A video call blocks for minutes —
say so before starting one.

**Bench cannot upscale.** If a loop lands at 720p and needs more, that step
stays on Higgsfield (`upscale_video`, bytedance, aigc preset). One video per
page; desktop-only, lazy, ≤4MB — dark footage compresses brilliantly.

## Files

- Raw generated PNGs → `sites/<name>/assets-src/` (gitignored).
- Ship optimized JPEGs from `public/`: `sips -s format jpeg -s formatOptions 78`.
- Every shipped image ≤500KB (a standard floor).
- `rm` is deny-listed in this repo — move rejected assets aside instead.
