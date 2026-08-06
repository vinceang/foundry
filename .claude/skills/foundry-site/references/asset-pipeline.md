# Asset pipeline — model choice, exposure, and file handling

Hard-won conventions from the Shokunin (2026-07-12), Schwarzwald (2026-07-14/15),
and Aubade builds. Following these avoids relearning expensive lessons.

## Choosing the model

Two generators are available. Choose per shot, not per site:

| | Higgsfield MCP (`soul_2`) | gpt-image (`tools/gen-image.mjs`) |
|---|---|---|
| Best at | Photographic stills, atmosphere, interiors, video loops | Product plates, controlled palettes, graphic compositions |
| Video | Yes — pass a completed image `job_id` as `start_image` | No |
| Reliability | Connection drops occasionally | Stable (key in `~/.config/site-assets/openai.key`) |

If Higgsfield is down, gpt-image is a proven fallback for everything — the
Schwarzwald plates came out palette-compliant on the first batch. Re-load
Higgsfield tools via ToolSearch when it reconnects.

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
- The taste profile's imagery recipe is binding: the palette *inside the
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
- If a still has a settle video, apply the identical lift to the video
  (`ffmpeg -vf lutrgb='r=gammaval(0.8):g=gammaval(0.8):b=gammaval(0.8)'`)
  or the video-to-still dissolve pops.

## Aspect and crop

Generate portrait product plates at 1024x1536 and match the CSS box to 2:3.
`object-fit: cover` on a mismatched box crops crowns, pendulums, and
handles — decide the crop at generation time, not in CSS.

## Video

Only where CSS could not fake it (parallax, revealed geometry, light raking
a surface). Generate the loop from the exact still it layers over
(`start_image` = the still's job_id) so a dip-to-still masks the loop seam.
Upscale 720p output via `upscale_video` (bytedance, aigc preset). One video
per page; desktop-only, lazy, ≤4MB — dark footage compresses brilliantly.

## Files

- Raw generated PNGs → `sites/<name>/assets-src/` (gitignored).
- Ship optimized JPEGs from `public/`: `sips -s format jpeg -s formatOptions 78`.
- Every shipped image ≤500KB (a taste-profile floor).
- `rm` is deny-listed in this repo — move rejected assets aside instead.
