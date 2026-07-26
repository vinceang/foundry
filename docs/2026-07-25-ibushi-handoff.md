# Ibushi 燻 — build handoff

**Started** 2026-07-25 · **Status:** in progress · **Site:** `sites/ibushi`
**Series:** Aubade · **Subject:** a builder of traditional Japanese villager
houses (minka), Hida, Gifu — supplied by Vince, not from the backlog queue.

This doc is written **live** so the build can be resumed in a fresh session
without losing the reasoning. `sites/ibushi/DESIGN.md` is the source of truth
for the world; this file records process state, decisions already spent, and
exactly what remains.

---

## Resume instructions (read this first if you are picking the build up cold)

1. Read `sites/ibushi/DESIGN.md` end to end. It was written before any
   component and every choice below flows from it.
2. Read `.claude/skills/foundry-site/SKILL.md` (Phases 4–6 are what remain)
   and `.claude/skills/foundry-site/references/asset-pipeline.md`.
3. Read `docs/aubade-taste-profile.md` — the imagery recipe and the
   anti-pattern list are binding and are the acceptance criteria.
4. Pick up at **"What remains"** below.

## The decisions already spent (do not relitigate these)

| Decision | Choice | Why |
|---|---|---|
| Name | **Ibushi** 燻 — "to smoke-cure" | Names the thesis; the idiom *ibushi-gin* ("smoked silver") = unshowy quality, which is the brand voice |
| Thesis | **A minka is cured by the smoke of being lived in** | Irori smoke soot-lacquers the frame, kills insects, dries the thatch. Habitation is literally structural. Belongs to no other site |
| Series | **Aubade** | Native hour is a cold mountain breakfast — fire lit, low sun through shoji. Kaji and Shokunin already hold Japan at night; a minka in chiaroscuro would misrepresent how these houses are used |
| Place | **Hida, Gifu** | Load-bearing: all four typologies are honestly reachable from one workshop — nōka (Hida basin), gasshō (Shirakawa-gō over the pass), machiya (Takayama's Sanmachi quarter), gyoka (Noto coast). Also the real home of the *Hida no Takumi* carpenters |
| Signature | **Sumitsuke 墨付け — the ink line** | A live SVG section + plan that redraws from typology / bays in ken / site exposure / doma ratio / ken module, and carries the spec into the commission. Spatial-structural + configurable — the two axes the collection is thinnest on |
| Explicitly rejected | any time-of-day / sun-position device | The Aubade profile now bans it by default; Lagar do Sol, Aresta, Dar el Warda and Larès have spent it four times |
| Explicitly rejected | naming the site after the *sumitsubo* ink pot | It would have made the thesis "a house is a drawn line before it is a building" — a near-verbatim restatement of Veta's "one line down the blank decides the board." Kept *sumitsuke* as the configurator's name only |
| Order model | **Both paths** (commitment 7) | A house is far above $5,000 → structured commission brief. The bench's small work (susutake poles, jizaikagi, chōna-finished boards, kaya bundles) is under it → a real order form with quantities in yen |
| Type | **Faustina** (Latin) + **Zen Antique** (Japanese) + **IBM Plex Sans JP** (working) | Kaji owns Shippori Mincho + Newsreader; Shokunin owns Zen Old Mincho — both barred. All three chosen faces verified live on Google Fonts (HTTP 200) and unused by any sibling |
| Palette | washi / tsuchikabe / kaya / sugi / koke / okibi / susu | Contrast computed, not eyeballed: susu-on-washi **15.2:1**, muted sugi-deep **7.9:1**, okibi **5.1:1**, koke **5.5:1** |
| The okibi rule | **Primary buttons are susu, never ember** | An ember CTA on cream lands squarely on the profile's "cream + terracotta CTA by reflex" instant-fail. Ember is restricted to the live ink stroke, the irori mark, and focus rings — ~3% of any frame |
| Page count | **11 routes**, not the usual single page | Vince asked for detail pages explicitly. Most siblings are 1 page; Schwarzwald (3) is the multi-page precedent |

## Image generator — Higgsfield unavailable, gpt-image is the path

`claude mcp list` reports `claude.ai Higgsfield ✔ Connected`, but **no
`mcp__higgsfield__*` tools reach the session's tool registry** — `ToolSearch`
for `+higgsfield` returns nothing. The toolset appears to be fixed at session
start, so reconnecting mid-session does not surface it. Vince re-checked and
then directed the build to proceed without it.

**If you are resuming in a fresh session and Higgsfield tools are present,**
it is the better generator for these particular shots (atmospheric
photographic stills — smoke off a ridge, interiors lit through paper) per
`references/asset-pipeline.md`. Regenerate the exterior/interior plates
through `soul_2` and keep gpt-image for the graphic plates (`sumitsubo`,
`ishiba-date`, `kigumi`). Everything else in the build is generator-agnostic.

The imagery phase is **fully separable** from the rest of the build — the
pages are constructed so plates drop into `public/images/` at the end. Losing
Higgsfield never blocked structural progress.

## Conventions

- Astro **7.1.3**, self-contained (`sites/ibushi/package.json`, own lockfile).
  Copied `astro.config.mjs` / `tsconfig.json` conventions from `sites/veta`.
- `?nofx` implemented in `src/layouts/Layout.astro`: sets `.nofx` instead of
  `.fx`, skips the IntersectionObserver, marks every `.rise` as `seen`, and
  flips `loading="lazy"` to `eager`. Reduced-motion takes the same branch.
- Raw generated PNGs → `sites/ibushi/assets-src/` (now gitignored repo-wide
  via a new `sites/*/assets-src/` rule added to `.gitignore`).
- Ship optimized JPEGs from `public/images/`, ≤500KB each.
- `rm` is deny-listed in this repo — move rejected assets aside.

## What is done

- [x] Phase 0 — doctrine read (README, foundry-series, aubade taste profile,
      Veta's DESIGN.md as the most recent Aubade sibling)
- [x] Phase 1 — subject accepted from Vince; four typologies confirmed real
      and correctly distinguished
- [x] Phase 2 — `sites/ibushi/DESIGN.md` written in full before any component
- [x] Phase 3 (partial) — package.json / astro.config / tsconfig / install;
      `src/styles/global.css` (token system, snapped-line rules, motion
      classes); `src/layouts/Layout.astro` (masthead, nav, footer, `?nofx`)

## What remains

- [ ] **Phase 3 finish** — favicon, the 11 route stubs
- [ ] **Phase 5a — the signature, built and critiqued FIRST**: parametric
      house model in `src/lib/house.js`, shared by the server render (JS-off
      default) and the client redraw. Section + plan + tatami grid + hearth
      from one model. Spec block in ken / shaku / sun / tsubo / jō
- [ ] **Phase 5b** — `/`, `/houses` + four typology pages, `/frame`,
      `/rooms` (incl. the irori seat-hierarchy interaction), `/workshop`,
      `/munafuda`, `/commission` (both forms)
- [ ] **Phase 4 — imagery**, ~22 finals, one constant art-direction phrase,
      shot list already written in DESIGN.md. Human presence required
- [ ] **Critique loop** — ≥3 passes per major section via `tools/shot-full.mjs`
      and `tools/shot-clip.mjs` against `http://localhost:4321/?nofx`
- [ ] **Floors** — JS-off, contrast, keyboard, reduced-motion, ≤500KB, 390px
- [ ] **Phase 6 — ship**: build clean, README table + `docs/foundry-series.md`
      + backlog entry, commit in house style (`Ibushi: what changed`), push,
      `vercel link --yes` then `vercel deploy --prod --yes`, screenshot the
      production URL to verify

## Anatomy coverage (Vince's brief, plus what was added)

Vince supplied: irori, jizaikagi, doma, yuka, tatami, shoji/fusuma, tokonoma.
*(His note listed "hi-nawa 火縄" alongside jizaikagi; hi-nawa is a slow-match
fire cord, not the pot hook — the site uses **jizaikagi 自在鉤** only, which
is the correct term for the adjustable hook, including its carved fish
counterweight.)*

Added, because the house does not explain itself without them:
**structure** — kigumi (nail-less joinery), ishiba-date (posts set loose on
stones so the house rides an earthquake), daikokubashira (the great central
pillar), magari-bari (naturally curved beams), munagi + muneage + munafuda
(ridgepole, topping-out, and the ridge tag recording who built it);
**envelope** — kayabuki thatch, kayaba (the reserved thatch grassland), neso
withe lashings, yui (a village re-thatching one roof in a day), yakisugi
charred cedar, amado storm shutters, engawa;
**rooms** — agarikamachi (the step where shoes come off), kamado, ranma
(carved transoms), zashiki, tōriniwa and hibukuro (the machiya's earth
corridor and smoke-well), tsushi-nikai, kōshi lattice, tsuboniwa;
**the thesis made physical** — susu (soot) and susutake (bamboo blackened by
a century of hearth smoke, harvested at re-thatch);
**the social fact** — the four named seats around the irori (yokoza, kakaza,
kyakuza, kijiri) and who sat in each. This became the site's second,
smaller interaction because it proves the argument better than any adjective:
the fire organised the family.
