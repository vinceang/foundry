---
name: glasshouse-nightly
description: >-
  Run one complete nightly cycle for the collection: scout a new subject
  somewhere in the world, build and ship the Foundry site, then register it in
  The Glass House so it appears on the light map and the collection carousel.
  Use it when the user asks for the nightly run, "do tonight's site", "run the
  nightly", "build one overnight", "run the pipeline", or invokes
  /glasshouse-nightly [hint]. It is designed to be triggered by hand now and by
  a schedule later, so it must complete or fail cleanly with nobody watching.
  Do NOT use it when the user names a specific subject and just wants it built
  — that is foundry-site on its own.
---

# Glass House nightly

One cycle: **scout → build → register**. At the end there is a new live site
in the world and a new node on the map, or a clear account of where it stopped.

Each stage is its own skill and each is independently runnable. Run them in
order, in the same session, so the build's context carries into registration.

## Before starting — check the run is affordable

An interrupted run is cheap; a run that dies halfway through image generation
wastes credits and leaves a half-built site.

```bash
git -C . status --short | head          # a dirty tree means a run is mid-flight
sed -n '/^## Building/,/^## /p' docs/foundry-backlog.md
```

Check the Higgsfield balance with the `balance` tool. **A site needs roughly
30–60 credits.** Below ~80, stop and report rather than starting — a build
that runs out of credits partway through is the worst outcome available.

If **Building** is not empty, a previous run did not finish. Do not start a
second one. Report what is stranded and stop.

## 1. Scout

Invoke `foundry-scout`. It surveys the registry and the backlog, applies the
distance rules, and writes one entry into the approved queue.

If the queue already holds approved entries, skip scouting and build the top
one — a human-approved subject outranks a machine-chosen one.

If scouting declines to choose because everything collides with the distance
rules, that is a legitimate outcome. Report it and stop.

## 2. Build

Invoke `foundry-site` with no subject: it takes the top approved entry, claims
it under **Building**, invents the world, generates imagery, builds, critiques
through screenshot passes and deploys to a verified live Vercel URL.

This is the long stage. Do not shorten it — the screenshot critique passes and
the signature interaction are what make the collection worth showing.

## 3. Register

Invoke `glasshouse-register` with the new slug. It derives the registry entry
from the site's own DESIGN.md and assets, writes it through
`tools/registry-add.mjs`, rebuilds `wgw` and redeploys, then verifies the case
study and the site's own URL both return 200.

## 4. Commit

The whole cycle is one commit on `main`:

```bash
git add sites/<slug> foundry.json README.md docs/
git commit   # subject, place, register, live URL, and the signature in the body
git push origin main
```

Do not commit `wgw/dist`, `wgw/.vercel`, or anything under `wgw/src/data` that
`npm run sync` regenerates — `.gitignore` already covers these; do not add
force-added exceptions.

## If it fails

Say where it stopped and leave the repo in a state a human can pick up:

- **Scout declined** — nothing written. Fine. Report why.
- **Build failed before deploy** — leave the entry under **Building** and say
  so. Do not roll back the site folder; the next session can continue it.
- **Deploy failed** — `foundry-site` records this in `docs/vercel-failures.md`.
  Do not register a site that has no verified live URL.
- **Register failed validation** — the site is live but not on the map. Report
  the exact field the writer rejected. This is recoverable by running
  `glasshouse-register <slug>` alone.

Never report success for a site whose live URL you have not fetched and seen
return 200.

## Reporting

One paragraph, then the facts: subject and place, the register and why, the
signature interaction, the live URL, the case-study URL, credits spent, and
the collection's new size and spread. If the run declined to build, say what
it considered and why none of it cleared the bar.
