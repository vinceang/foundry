# Ibushi 燻 — build handoff

**Started** 2026-07-25 · **Shipped** 2026-07-26 · **Live:** https://ibushi.vercel.app
**Site:** `sites/ibushi`
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

## What was built

Eleven routes, against the collection's usual single page:

`/` · `/houses` · `/houses/{noka,gyoka,machiya,gassho}` · `/frame` · `/rooms` ·
`/sumitsuke` · `/workshop` · `/munafuda` · `/commission`

### The signature — Sumitsuke 墨付け

`src/lib/house.js` holds the parametric model; `src/lib/draw.js` renders section
and plan from it. The same module is imported by the Astro page (server render,
the JS-off default) and by the client script, so the static sheet and the live
one cannot drift.

Five controls — typology, bays across, bays back, site exposure, doma ratio,
ken module — feed one model driving one SVG. Section, plan, tatami grid, hearth
and smoke all move in a single redraw. Derived and printed in the craft's units:
tsubo, jō, kōbai in sun with the degree, ridge in shaku, roof area, post count,
principal span.

The drawing picks a **real drafting scale** (1:30 … 1:300, whichever largest
still fits the sheet) and prints it with a graphic scale bar — so a nōka draws
at 1:100 and a fourteen-ken machiya drops to 1:200, exactly as a drawing would.

Deep links work: `/sumitsuke?typology=gassho&w=5&d=10&exposure=snow` — each
house page opens the configurator preloaded. "Snap this line" GETs the whole
configuration into `/commission`, which writes it out as a specification.

### Critique passes on the signature (four)

1. Spec block collapsed after the client repaint — the JS wrote **unscoped**
   HTML, so Astro's scoped `.tb-row` grid stopped matching. Title-block CSS
   moved to `drawing.css` (global). *This is the trap to remember: any markup
   the client rewrites via innerHTML must not depend on scoped styles.*
2. Coarse scale steps left the house small in its sheet → finer scale ladder.
3. `ō` rendering as a detached macron ("NoKa", "Gassho¯zukuri") — **IBM Plex
   Sans JP lacks U+014D in the subset Google serves.** Fixed by putting the
   Latin `IBM Plex Sans` ahead of the JP family; JP now only takes kana/kanji.
4. Three labels fighting for 52px between section and plan; a steep gasshō
   pushed its own title off the sheet. Fixed with GAP 2.2→3.6, explicit
   TOP/BOT_RESERVE, projection lines tying plan to section, and the pitch
   callout redrawn as a **kōbai triangle** (ten of run against the rise) which
   cannot collide the way floating text did.

### Imagery — 22 plates

`assets-src/batch.mjs` (one constant art-direction phrase + a shared exposure
directive + a shared negative) and `assets-src/optimise.mjs`.

**The lesson worth keeping:** gpt-image underexposes this subject badly. The
first four plates came back at mean luma 42–46 — Nocturne territory, and the
exact failure the skill warns has been rejected before. Two fixes, both needed:

- An explicit `EXPOSURE` clause in every prompt ("metered for the shadows,
  nothing crushed to black, high-key"), which moved most shots into band.
- An **adaptive gamma lift** in the optimiser: it measures each plate, solves
  for the gamma that lands it in its band (exteriors 90–150, interiors 70–120),
  and applies it before the JPEG pass. Per-image, not a blanket value — a lift
  applied to an already-good plate only washes it out.

`machiya-toriniwa` came back at 29 raw, too dark to rescue by lift, and was
regenerated rather than pushed further. Final: all 22 in band, all ≤500KB
(largest 368KB), shipped as full + `-800` variants.

Rejected plates are in `assets-src/rejected/` (moved, not deleted — `rm` is
deny-listed).

## Floors verified

- **JS off:** the signature renders fully drawn with the spec printed and all
  five control groups as real radios/ranges; the form still submits the chosen
  spec by GET. Both commission forms are native `mailto` with `text/plain`.
- **Contrast** computed, not eyeballed: susu-on-washi 15.2:1, muted 7.9:1,
  okibi 5.1:1, koke 5.5:1.
- **Keyboard:** segmented controls are real radios; the four irori seats are
  real buttons with `aria-pressed`.
- **Reduced motion / `?nofx`:** finished static composition, eager images.
- **Mobile:** 390px pass — the sheet stacks rather than shrinking.
- `npm run build` clean, 12 pages.

## Ship

- Committed `9d57000` (in-progress snapshot, pushed by Vince mid-build) and
  `c93b850`; both on `origin/main`.
- `vercel link` + `vercel deploy --prod` → aliased **https://ibushi.vercel.app**.
- Production verified by screenshot and by asserting the drawing, plan grid,
  spec rows and kōbai triangle are all present in the served HTML. All nine
  top-level routes return 200 in production.
- README table, `docs/foundry-series.md`, and the backlog all updated.

## The akiya reposition — 2026-07-26, after ship

Vince asked whether Ibushi could position as craftsmen who restore *akiya*
(Japan's abandoned houses) and are selective about which. It could, because
the site was already arguing it: *"an empty one is a structural emergency and
not merely a sad thing"*, and the page already closed on *"will the fire be
lit?"* The reposition names an antagonist the thesis had always implied.

Shipped:

- **Homepage reframed.** New hero `hero-akiya` — a house standing empty, cold
  ridge, snow unbroken. New `akiya` section carrying the figures, and
  `hero-smoke` **promoted** (not retired — Vince asked explicitly that no
  existing imagery be lost) to run full-bleed lower down as *the other end of
  the work*. The page now opens on a cold house and closes that section on a
  lit one.
- **New route `/mitate`** — the appraisal. Four tests published in full, each
  written so it can fail, with what it fails on. Plus a "what we decline"
  section and a fixed-fee schedule (¥180,000 in Hida, credited against the
  work). This is where "selective" becomes a standard instead of a pose.
- **Three plates added**, none replaced: `hero-akiya`, `mitate` (the tōryō
  reading a daikokubashira in an abandoned house), `declined` (a house past
  saving, photographed plainly).
- **DESIGN.md** carries the sourced figures and the two rules that keep this
  from becoming a trend explainer.

**Higgsfield was available this session** and the video finally exists:
`public/video/first-smoke.mp4`, 112KB for 5s. `kling3_0_turbo`, with
`hero-akiya.jpg` imported by public URL (`media_import_url`) as `start_image`,
so frame one *is* the hero still and the fade-in is invisible. Note it
suggested an "IN THE DARK" preset — declined via `declined_preset_id`, since
that is exactly the chiaroscuro DESIGN.md bans.

**It plays once and holds; it does not loop.** Looping back to a cold ridge
would argue the opposite of the page. Under `.nofx` / reduced motion the video
is never even fetched (`preload="none"`, verified `readyState === 0`) and the
still stands alone.

### A copy bug the reposition surfaced

The hero read *"There is no chimney"* directly above a plate showing a ridge
vent with smoke coming out of it. Minka have no **flue from the hearth** — the
smoke goes up through the open frame — but ridge smoke-vents are real. Copy
now says "no flue", which is true *and* uncontradicted by the picture. Fixed
rather than regenerating the plate.

### Optimiser: a second trigger

`optimise.mjs` lifted on `mean < band floor` alone, which is blind to a
high-contrast frame. `yuka` came in at mean 72 against a floor of 70 — nominally
in band — with **43%** of the frame below luma 25, where its siblings run
7–20%. A wall of sunlit shoji was carrying the average while half the plate sat
crushed. There is now a `SHADOW_MAX = 0.25` second trigger. It changed exactly
one plate; every other solve reproduced identically.

## If you pick this up again

- The exterior and interior plates would still benefit from `soul_2` if you
  want to A/B them — but gpt-image-2 is now the house default for stills (see
  the Auriga notes), so this is optional rather than owed.
- The obvious next film is the counterpart to `first-smoke`: the tōryō's ink
  line being snapped, for `/sumitsuke`.
- The four typology pages share one route, `houses/[slug].astro`, driven by
  `src/data/houses.js`. Adding a fifth typology means adding it to
  `TYPOLOGIES` in `lib/house.js` *and* to `HOUSE_PAGES`.
- No video was made. One loop over the hero (smoke rising off the ridge) is the
  obvious candidate if Higgsfield returns.
