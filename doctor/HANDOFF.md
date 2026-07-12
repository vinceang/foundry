# Foundry — Session Handoff

**From:** Kaji build session (Claude Fable 5, ended 2026-07-12)
**To:** next session (should have Higgsfield MCP access — verify with ToolSearch before promising video)
**Repo:** `~/Documents/projects/foundry` · github.com/vinceang/foundry (public) · branch `main`, all work pushed through `6d7817c`

---

## What this project is

Four award-caliber showcase sites, one repo, deliberately distinct identities, **no shared design system** — only shared `tools/`. Deploy target: one Vercel project per site via Root Directory (not set up yet). Full brief ethos: real generated assets (no CSS stand-ins), ≥3 advanced techniques per site, iterate on screenshots ≥3 critique passes, start over if it reads generic.

| Site | Status | Stack | Energy |
|---|---|---|---|
| `sites/kaji` | **Built** — 3 critique passes + three-smiths feature | Astro | Hushed reverent craft: sumi/washi/vermilion |
| `sites/shokunin` | Built by **Vince's other session** — don't touch | Astro | Lacquer dark, smoked gold — deliberate diptych with Kaji |
| `sites/saas` | Empty. Concept locked: **Roster** — hire AI teammates in plain English; warm cream/ink/terracotta, humanist type, interactive "meet the teammates" hero, plain-English chat demo, generated agent portraits, animated permissions flow | Next.js planned | Warm human calm-premium |
| `sites/event` | Empty. Concept: **SIGNAL** — experimental music + light-art festival | Vite planned | Loud, maximal, immersive |

## Critical working agreements

1. **Two parallel Claude sessions share this checkout on `main`.** Protocol: stage ONLY your own paths (`git add sites/kaji ...` — never `git add -A`). The Shokunin session owns `sites/shokunin/**` and `shots/shokunin/**`. Coordinate `tools/` changes through Vince.
2. **Vince has face veto** on all generated portraits. Current smith portraits passed his review implicitly (not explicitly yet — if he asks to swap one, regenerate just that file, ~$0.06).
3. **Image budget:** $5 total via OpenAI key at `~/.config/site-assets/openai.key` (never commit; .gitignore blocks `*.key`). **~$1.20 spent.** Recipe: explore at medium (~$0.06/img), finalize heroes at high. `gpt-image-2` and `gpt-image-1` both work; gen tool defaults to gpt-image-1 (pass `--model gpt-image-2` to override).
4. Vince is a genuine Japanese-knife enthusiast — domain details in Kaji must stay authentic (steels: aogami/shirogami; finishes: kasumi/kurouchi/honyaki; regions: Sakai). He'll spot pastiche.

## Tools (repo `tools/`)

- `gen-image.mjs` — gpt-image wrapper. `node tools/gen-image.mjs --prompt "..." --out path.png --size 1536x1024 --quality medium`
- `shot.mjs` — quick viewport shot, headless Chrome, no deps (isolated throwaway profile)
- `shot-full.mjs` — full-page capture via playwright-core + installed Chrome; **scrolls with `behavior:'instant'` first** so IntersectionObserver reveals fire (page uses `scroll-behavior:smooth`, which silently breaks naive scroll walks)
- `shot-clip.mjs` — belongs to the Shokunin session

Gotchas learned the hard way:
- `npm create astro@latest sites/x` may ignore the path and scaffold into a random-named folder at cwd — verify where it landed.
- Playwright `waitUntil:'networkidle'` can hang against the Astro dev server (HMR websocket) — use `'load'` + fixed waits.
- Astro dev toolbar is disabled in `sites/kaji/astro.config.mjs` (`devToolbar:{enabled:false}`) so it doesn't contaminate screenshots.
- Dev servers: Kaji habitually on `:4321` (`cd sites/kaji && npm run dev -- --port 4321`), Shokunin session uses `:4326`. Stale unrelated servers may sit on `:5173/:5174` (other projects — ignore).

## Kaji — what exists (so you extend, not rebuild)

Single-page `src/pages/index.astro` + `src/pages/smith/[slug].astro` (3 static paths from `src/data/smiths.ts`), all styling in `src/styles/global.css` (design tokens at top). Sections: hero (cursor-follow ember light, mix-blend difference header at top only) → manifesto (washi) → lineage (forge photo + hanko seal) → **smiths** (3 chiaroscuro portrait cards → detail pages) → collection (3 knives, gallery-mat cards, multiply-blend seating, "Forged by" credits) → process (drawn-on-scroll SVG hamon divider + glow, ghosted kanji numerals 壱弐参肆伍) → craft/steel (macro + animated meter bars) → commission → footer (kanji watermark). Header: solid blurred bar past 60px scroll, hides on scroll-down/returns on scroll-up. Reveals: IntersectionObserver, progressive-enhancement safe, reduced-motion respected.

Personas: Naoki Munetsugu (宗次直樹, IX gen master, honyaki/gyuto), Rin Munetsugu (宗次凛, X gen heir, shirogami/santoku+petty), Goro Tanabe (田辺五郎, senior hand, kurouchi/nakiri+deba).

## Next steps, in Vince's priority order

1. **Kaji video hero via Higgsfield** (the reason for the fresh session). Vision: slow cinemagraph loop — the existing hero blade composition with drifting embers / breathing forge glow; OR a forge-fire loop for the lineage section. Requirements: `<video autoplay muted loop playsinline>` + poster fallback to `/hero-01.png`, `prefers-reduced-motion` swap to still, keep file small (a few MB, dimensions ~1920 wide). Consider Higgsfield image-to-video on `sites/kaji/public/hero-01.png` so the motion matches the approved still exactly. Vince's Higgsfield credits — confirm cost with him before generating batches.
2. **Deploy prep** — per-site Vercel projects (Root Directory), ignored-build-step `git diff --quiet HEAD^ HEAD -- sites/<name>`. Vercel CLI not installed (`npm i -g vercel`).
3. **Roster** (`sites/saas`) — biggest remaining build. Concept locked (see table); Vince authored it, treat with the same critique-pass rigor.
4. **SIGNAL** (`sites/event`) — last. Shokunin's theatrical staging may inform its drama; palettes/type must diverge hard from all three others.

## Memory

Persistent memory lives at `~/.claude/projects/-Users-vincentang-Documents-quest/memory/` — `foundry-showcase.md` (project state) and `loves-japanese-knives.md` (user context). Update `foundry-showcase.md` when major state changes (a new session may run from a different cwd and not see this memory dir — this handoff doc is the in-repo source of truth).
