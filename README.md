# Foundry

Three award-caliber websites, built as separate showcases of range — deliberately **not** a matched set. Different palettes, different type, different energy. If any two start to look related, one of them is wrong.

| Site | What it is | Lives in |
|------|-----------|----------|
| Ecommerce | (concept TBD) | [`sites/ecommerce`](sites/ecommerce) |
| SaaS landing | (concept TBD) | [`sites/saas`](sites/saas) |
| Event | (concept TBD) | [`sites/event`](sites/event) |

Each site is **fully self-contained** — its own stack, its own assets, its own `package.json`. They never import from each other. That separation is the point: it's what keeps three distinct identities from collapsing into one house style.

## Why no shared design system

The value of this collection is range. A shared token set / component library would pull the three toward a single look — the exact "generic template" failure to avoid. The only thing shared here is **build tooling**, never design.

## tools/

Non-design engineering scaffolds, shared across all three sites.

- **`gen-image.mjs`** — generates real imagery via OpenAI gpt-image. Key read from `~/.config/site-assets/openai.key` (outside the repo).
  ```
  node tools/gen-image.mjs --prompt "..." --out sites/ecommerce/public/hero.png --size 1536x1024 --quality high
  ```
- **`shot.mjs`** — screenshots a live render for the design critique loop (headless Chrome, no deps).
  ```
  node tools/shot.mjs http://localhost:5173 shots/pass1.png 1440 900
  ```

## Deploy

One repo → three independent Vercel projects, each with its **Root Directory** set to a `sites/*` folder. Each gets its own framework detection, env vars, and domain. Optional per-project "Ignored Build Step" (`git diff --quiet HEAD^ HEAD -- sites/<name>`) skips rebuilds when that folder didn't change.
