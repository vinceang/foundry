# Aresta

Foundry's second **Aubade** hotel: a polished contemporary property on the
cliff plateau above the Atlantic at Carrapateira, Costa Vicentina, shaped by
architecture, orientation, and light.

*Aresta* is Portuguese for the edge where two planes meet — the arris where
the plateau breaks into the sea cliff, repeated at room scale by every
90-centimetre window reveal.

## Status

The first design session (2026-07-17) locked the identity and built the full
single-page site: hero (the west wall at last light), the building, the
rooms-by-light orientation selector (the signature interaction), water, the
table, courts and materials, place, stay, and correspondence. The complete
14-image campaign was generated and shipped with responsive variants.

Source of truth: [`DESIGN.md`](DESIGN.md). Image register: [`ASSETS.md`](ASSETS.md).
Series doctrine: [`../../docs/2026-07-16-aubade-contemporary-hotel-brief.md`](../../docs/2026-07-16-aubade-contemporary-hotel-brief.md),
[`../../docs/aubade-taste-profile.md`](../../docs/aubade-taste-profile.md),
[`../../docs/foundry-series.md`](../../docs/foundry-series.md).

## Development

```sh
cd sites/aresta
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Append `?nofx` to the URL to disable entrance animations for screenshots
(`tools/shot-full.mjs` / `tools/shot-clip.mjs` from the repo root).

This folder becomes an independent Vercel project when the site is approved
for deployment.
