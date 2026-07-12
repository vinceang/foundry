# Handoff — Shokunin build session, 2026-07-12

State of the world for the next session. The site is **complete, deployed,
and healthy**; this documents where everything lives and what's still open.

## What exists

**Shokunin – Bespoke Samurai Ateliers** (`sites/shokunin`) — a cinematic
ecommerce showcase: a private commission house releasing twelve works of
samurai armor/blade a year, acquired by petition. Astro 7, static, zero
frameworks, vanilla JS.

- **Live (production):** https://shokunin-topaz.vercel.app
- Pages: home (`/`) + three dossiers (`/works/gessho/`, `/works/samidare/`,
  `/works/kuronami/`)
- Content model: `src/data/works.ts` (works + sealed ledger; adding a work =
  adding an entry, the dossier route is generated)

## Authority documents (read before changing anything)

1. `sites/shokunin/DESIGN.md` — **the binding style guide.** Brand vocabulary,
   color/type rules, imagery recipe, motion rules ("fixed chrome never
   touches content", "video must do what CSS cannot"), copy voice, floors.
2. `sites/shokunin/AGENTS.md` — dev-server usage + identity separation rules
   vs kaji (no red, no paper, no mono).
3. Root `README.md` — repo philosophy: sites never share design, only tooling.

## Running & reviewing

```bash
cd sites/shokunin && npx astro dev        # session used port 4326
```

- `?nofx` on any URL disables entrance animations + forces eager images
  (screenshot loop). `?nofx&scroll=N` jumps to offset N.
- Full-page capture: `node tools/shot-full.mjs <url> <out.png> 1440 900`
- Band capture: `node tools/shot-clip.mjs <url> <out.png> <y> 1000 1440`
- Both **must run from repo root** (they resolve `tools/node_modules`).
- Review artifacts live in `shots/shokunin/` (only finals are committed).

## Deploy

- Vercel project **`shokunin`** (org `vincent-angs-projects`), linked from
  `sites/shokunin/.vercel/` (gitignored). Deploys are **CLI-manual**:
  ```bash
  cd sites/shokunin && vercel deploy --prod --yes
  ```
- ⚠️ **No git integration yet** — pushing to GitHub does NOT deploy. If
  wanted: connect the project to the repo in the Vercel dashboard, set Root
  Directory `sites/shokunin`, and add the Ignored Build Step from README.

## Asset pipeline (Higgsfield MCP)

Images `soul_2`, one constant art-direction phrase (see DESIGN.md §5).
Raw PNGs in `sites/shokunin/assets-src/` (gitignored); shipped JPEGs via
`sips` q78 in `public/works/`. Video: start_image = the exact still it
layers over → 1080p `upscale_video` (bytedance/aigc) → x264 crf24 via
`tools/node_modules` ffmpeg-static.

**Reusable job IDs** (pass as `medias[].value` for edits/derivatives):

| Asset | Job ID |
|---|---|
| Hero still (o-yoroi, 16:9) | `76733878-1d44-4571-965b-7867ad9a57eb` |
| Gesshō kabuto (3:4) | `87ebdf65-bc95-4f24-97db-ba2c45c3de3f` |
| Samidare katana (16:9) | `1172e1e5-417c-4d39-87d7-1b72a21a2a1e` |
| Kuronami sōmen (3:4) | `db08aabe-13cd-4812-a945-d3c847b769ee` |
| Lacing macro (4:3) | `65f66ab2-e6f6-4d70-ac39-add75feddacc` |
| Atelier hands (4:3) | `feeb64ba-5571-4c85-a7ed-baed2914c642` |
| Hero arc video, 10s 720p | `e2ef59f3-9317-467c-860e-e04db4a240fd` |
| Hero arc upscaled 1080p | `574f180d-8747-4e55-b053-d1b328ee6bb8` |

## Session log (what was decided and why)

Full rationale is in DESIGN.md; the short version:

- 4 critique passes on the initial build (grid bugs, palette violations,
  fold problems, uncanny renders, payload cuts).
- Header: veils (lacquer + blur) once scrolled, withdraws on scroll-down,
  returns on scroll-up.
- Chapter rail: vertical labels **outside** the diamond column, reading
  bottom-to-top (left-spine convention); rail >1320px only.
- Hero video v2: replaced push-in with a 10s constant-speed orbital arc
  (visitor-around-a-vitrine). Loop seam masked by dip-to-still. 2.3MB.

## Open threads (in rough priority order)

1. **Vercel git integration** (see Deploy above) — currently manual.
2. **Petition flow** — the "letter, not checkout" form. DESIGN.md §7 already
   specifies the treatment. Today all CTAs are `mailto:register@shokunin.example`.
3. **Atelier pages** — the three houses are one home-page chapter; each could
   carry a dossier-grade page.
4. **Sealed-work reveal** — Works X–XII unseal Oct/Nov 2026 in the fiction;
   a reveal treatment would be a strong addition.
5. **Foundry siblings** — `sites/saas` and `sites/event` are empty scaffolds;
   `sites/kaji` (knife atelier) is complete. Each new site must be visually
   unrelated (repo rule).

## Quirks worth knowing

- `rm` is deny-listed in this repo's permissions — move files aside instead.
- The Higgsfield MCP connection drops occasionally; re-load tools via
  ToolSearch after it reconnects.
- Kaji's dev server may also be running; Shokunin used port 4326 this session.
- A cross-session memory exists at the Claude project level
  (`foundry-asset-pipeline`) covering the asset conventions.
