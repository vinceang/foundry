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

`assets-src/cabin-cruise.png` is the rejected first take: a warm reading
lamp filled the frame, and the only warmth permitted in a Vesper frame is
the horizon. The shipped `cabin-cruise.jpg` derives from
`assets-src/cabin-cruise-2.png` — the retake with the light coming from the
window, not the lamp.

## Withheld by design

HB-JVL's tail plate is a stratus-toned CSS stand-in (`.plate-standin`),
per the dry-run shot list in `DESIGN.md`: remaining slots stand in as
plates, never gray boxes. The hero already shows the Global; the card can
wait for its own frame in a full production pass.
