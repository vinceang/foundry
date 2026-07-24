# Velum

Foundry's first **Vesper** — the dusk series: passage, altitude, discretion.
A private charter operation out of Genève Aéroport, est. 1987. Three tails,
no livery, no public number. *Velum* is Latin for veil and for sail, and the
name of the thin cloud that drapes a cumulus tower; it is also the
operating callsign.

The brief in one line: **a charter operation whose product is not being
seen.** There is no telephone number on the page, and the page says so.

## Status

The first design session (2026-07-24, dry run) locked the identity and
built the full single-page site as one flight — OFF BLOCKS (hero), CLIMB
(the operation), CRUISE (the three tails), DESCENT (last week's legs),
ON BLOCKS (the introduction). The signature interaction is the flight-plan
rail: a fixed mono instrument in the lower-left gutter whose phase readout,
flight level, and profile dot track scroll position. Four images shipped;
HB-JVL's plate is a deliberate CSS stand-in (see `ASSETS.md`).

Dry run: not committed, not deployed. No Vercel project exists yet.

Source of truth: [`DESIGN.md`](DESIGN.md). Image register: [`ASSETS.md`](ASSETS.md).
Series doctrine: [`../../docs/foundry-series.md`](../../docs/foundry-series.md)
(the Vespers section was added in this session).

## Development

```sh
cd sites/velum
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Append `?nofx` to the URL to disable entrance animations for screenshots
(`tools/shot-full.mjs` / `tools/shot-clip.mjs` from the repo root). With JS
off the flight-plan rail does not render and the page is complete without
it; with reduced motion the rail still tracks scroll — it is
instrumentation, not an animation.
