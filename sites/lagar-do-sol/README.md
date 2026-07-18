# Lagar do Sol

The first Foundry **Aubade**: an eighteen-room restored *monte* and olive press
between Estremoz and Vila Viçosa in Portugal's Alentejo.

**Live:** [lagar-do-sol.vercel.app](https://lagar-do-sol.vercel.app)

The site follows one day at the house—from the open gate at 07:20 to the long
table at 19:35. It is an editorial hospitality experience with a
correspondence-led stay request, not a simulated booking engine.

## Start here

- [`DESIGN.md`](DESIGN.md) — binding identity, tokens, layout, motion, and copy
  doctrine
- [`ASSETS.md`](ASSETS.md) — canonical photography and responsive-image register
- [`../../docs/2026-07-15-aubade-boutique-hotel-brief.md`](../../docs/2026-07-15-aubade-boutique-hotel-brief.md)
  — original project brief and concept history
- [`../../docs/aubade-hotel-one-photography-gpt.md`](../../docs/aubade-hotel-one-photography-gpt.md)
  — image-continuity and generation guide

## Development

```sh
cd sites/lagar-do-sol
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

The site is a self-contained Astro project. Source lives in `src/`, optimized
delivery images in `public/images/`, and full-resolution campaign originals in
`assets-src/`.

## Non-negotiables

- A particular Alentejo house, never a generic Mediterranean resort
- Daylight and the guest-day line are the signature system
- Rooms feel inherited rather than installed
- Azulejo is retained architecture, not an all-over theme
- Copy observes and hosts; it does not sell with luxury adjectives
- Lagar components and tokens are not a shared Aubade design system

## Deployment

Lagar do Sol is an independent Vercel project with this folder as its Root
Directory. Production deploys to
[lagar-do-sol.vercel.app](https://lagar-do-sol.vercel.app).
