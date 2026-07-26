# Velum — image register

The dry-run batch was generated 2026-07-24 with `tools/gen-image.mjs` using
one constant art-direction phrase: civil twilight, deep blue-black sky with
a thin apricot band low on the horizon, cold aluminum reflections, wet dark
tarmac, no text, no lettering, no people. The no-lettering rule is doctrine
and brand at once — the aircraft carry no livery. Raw PNGs stay in
`assets-src/` (not shipped); graded JPEGs ship from `public/images/`.

## Shipped batch

| Asset | Role |
|---|---|
| `hero-apron` | Hero — the Global alone on the wet north apron, civil twilight |
| `cabin-cruise` | Interlude — cabin at FL450, dusk band in the window |
| `tail-falcon` | Tails — HB-JLA, the Falcon 8X airframe in last light |
| `pc24-gravel` | Tails — HB-VSK, the PC-24 on the Samedan gravel, alps going dark |
| `tail-global` | Tails — HB-JVL, the Global 6500 nose and dark flight deck |

`assets-src/cabin-cruise.png` is the rejected first take: a warm reading
lamp filled the frame, and the only warmth permitted in a Vesper frame is
the horizon. The shipped `cabin-cruise.jpg` derives from
`assets-src/cabin-cruise-2.png` — the retake with the light coming from the
window, not the lamp.

## HB-JVL, shot 2026-07-26

The last stand-in (`.plate-standin`, a stratus-toned CSS field reading
"plate to follow") is gone; the Global has its own frame. Generated with
`tools/gen-image.mjs --model gpt-image-2`, not Higgsfield — see the Auriga
notes for why. Framed on the nose and darkened flight deck so the card does
not repeat the hero's wide front quarter.

Two takes were thrown away first, and the reason is worth keeping: asking
for "civil twilight" alone produces a *sunset* — a broad hot orange filling
the lower third, orange pooling on the tarmac, and a red-dominant frame.
Against the shipped batch that is measurably out of register:

| | mean luma | hot orange | balance |
|---|---:|---:|---|
| shipped siblings | 32–51 | 0.4–1.0% | blue-dominant |
| first takes | 66 | 4.7–6.6% | **red**-dominant |
| `tail-global` | 41 | 0.7% | blue-dominant |

("hot orange" = pixels where R−B > 60 and luma > 60.) The fix was to say
what the band may *not* do: night-adjacent, twenty minutes after the sun,
the apricot no thicker than a tenth of the frame, no glow, no pooling, and
the frame's dominant colour cold blue. Check a new plate against the table
above before shipping it — the eye forgives a warm frame in isolation and
sees it instantly next to its siblings.
