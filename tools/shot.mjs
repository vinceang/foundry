#!/usr/bin/env node
// Foundry screenshot tool — captures a render for the /goal critique loop.
// Drives the installed Google Chrome in headless mode; no npm dependencies.
//
// Usage:
//   node tools/shot.mjs <url> <out.png> [width] [height]
//   node tools/shot.mjs http://localhost:5173 shots/pass1.png 1440 900
//
// Note: captures the viewport at the given size. Full-page (scrolled) capture
// needs Playwright — add it per-site if a review pass calls for it.

import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';

const [url, out = 'shot.png', width = '1440', height = '900'] = process.argv.slice(2);
if (!url) {
  console.error('Usage: node tools/shot.mjs <url> <out.png> [width] [height]');
  process.exit(1);
}

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
mkdirSync(dirname(resolve(out)), { recursive: true });

// Isolated throwaway profile — never touch the user's real Chrome state.
const profile = mkdtempSync(join(tmpdir(), 'foundry-shot-'));

const r = spawnSync(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${profile}`,
  `--window-size=${width},${height}`,
  `--screenshot=${resolve(out)}`,
  url,
], { stdio: 'inherit' });

rmSync(profile, { recursive: true, force: true });

if (r.status === 0) console.log(`wrote ${out}  (${width}x${height})`);
process.exit(r.status ?? 0);
