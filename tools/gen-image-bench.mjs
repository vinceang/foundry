#!/usr/bin/env node
// Foundry image generator — Bench Studio wrapper.
//
// Drop-in replacement for tools/gen-image.mjs. Same flags, same output
// contract (writes one file to --out), so an existing gen-assets.sh only
// needs its `node tools/gen-image.mjs` swapped for this path.
//
// Differences from the gpt-image wrapper:
//   - routes through the local Bench server, so the key stays in ~/.env,
//     every generation is mirrored locally, and the cost is recorded
//   - 37 fal routes instead of one model
//   - --size is honoured by picking the model's nearest real aspect ratio
//     rather than being passed through as pixels
//
// Usage:
//   node tools/gen-image-bench.mjs --prompt "..." --out sites/x/assets-src/hero.png \
//        [--size 1536x1024] [--model fal-ai/nano-banana-pro] [--res 1K|2K|4K] [--dry-run]

import { writeFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';

const BENCH = process.env.BENCH_URL || 'http://localhost:8787';
const BENCH_HOME = process.env.BENCH_HOME || '/Users/vincentang/projects/bench-studio-public';

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : def;
};
const flag = (name) => process.argv.includes(`--${name}`);

const prompt = arg('prompt');
const out = arg('out');
if (!prompt || !out) {
  console.error('Usage: node tools/gen-image-bench.mjs --prompt "..." --out path/file.png [--size 1536x1024] [--model fal-ai/nano-banana-pro] [--res 2K]');
  process.exit(1);
}
const size = arg('size', '1536x1024');
const model = arg('model', process.env.BENCH_MODEL || 'fal-ai/nano-banana-pro');
const wantRes = arg('res', '2K');

// ---------------------------------------------------------------- bench up

async function benchUp() {
  try {
    const r = await fetch(`${BENCH}/api/health`, { signal: AbortSignal.timeout(1000) });
    if (r.ok) return true;
  } catch {}
  return false;
}

async function ensureBench() {
  if (await benchUp()) return;
  const entry = resolve(BENCH_HOME, 'server/server.mjs');
  if (!existsSync(entry)) {
    console.error(`Bench not running and not found at ${entry}. Set BENCH_HOME.`);
    process.exit(1);
  }
  const child = spawn(process.execPath, [entry], {
    cwd: BENCH_HOME, env: process.env, detached: true, stdio: 'ignore',
  });
  child.unref();
  for (let i = 0; i < 40; i++) {
    if (await benchUp()) return;
    await new Promise((r) => setTimeout(r, 250));
  }
  console.error('Bench did not come up. Check FAL_KEY in ~/.env.');
  process.exit(1);
}

// ------------------------------------------------------------ size mapping

// Foundry writes sizes as pixels (a gpt-image habit). fal models take either a
// named aspect enum or a named size enum. Translate rather than guess: ask the
// model what it accepts, then pick the closest real option to the ratio asked
// for. A silent 4:3 when the CSS box is 2:3 is the crop bug this avoids.
const RATIO = { '21:9': 21 / 9, '16:9': 16 / 9, '3:2': 1.5, '4:3': 4 / 3, '5:4': 1.25, '1:1': 1, '4:5': 0.8, '3:4': 0.75, '2:3': 2 / 3, '9:16': 9 / 16 };
const NAMED = { square_hd: 1, square: 1, portrait_4_3: 0.75, portrait_16_9: 9 / 16, landscape_4_3: 4 / 3, landscape_16_9: 16 / 9 };

function sizeParams(params, wanted) {
  const m = /^(\d+)x(\d+)$/.exec(wanted);
  const ratio = m ? Number(m[1]) / Number(m[2]) : (RATIO[wanted] ?? 1.5);
  const out = {};

  const nearest = (table, options) => options
    .filter((o) => table[o] !== undefined)
    .sort((a, b) => Math.abs(table[a] - ratio) - Math.abs(table[b] - ratio))[0];

  if (params.aspect_ratio?.enum) {
    const pick = nearest(RATIO, params.aspect_ratio.enum);
    if (pick) out.aspect_ratio = pick;
  } else if (params.image_size?.enum) {
    const pick = nearest(NAMED, params.image_size.enum);
    if (pick) out.image_size = pick;
  }

  // Foundry's optimize.sh scales the long edge to 1536. Generating at 1K and
  // scaling up loses detail, so ask for 2K where the model offers it.
  if (params.resolution?.enum?.includes(wantRes)) out.resolution = wantRes;
  // assets-src is globbed as *.png by optimize.sh.
  if (params.output_format?.enum?.includes('png')) out.output_format = 'png';

  return out;
}

// ------------------------------------------------------------------- run

await ensureBench();

const catalog = await (await fetch(`${BENCH}/api/models`)).json();
const entry = catalog.models.find((x) => x.id === model);
if (!entry) {
  const near = catalog.models.filter((x) => x.kind === 'image').map((x) => x.id).slice(0, 12);
  console.error(`Unknown model ${model}. Image models include:\n  ${near.join('\n  ')}`);
  process.exit(1);
}

const params = sizeParams(entry.params || {}, size);

if (flag('dry-run')) {
  console.log(`[dry-run] ${model} ${JSON.stringify(params)} -> ${out}`);
  console.log(`[dry-run] prompt: ${prompt.slice(0, 160)}...`);
  process.exit(0);
}

const res = await fetch(`${BENCH}/api/generate`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ modelId: model, prompt, params, format: 'none' }),
});
if (!res.ok) {
  console.error(`Bench error ${res.status}: ${(await res.text()).slice(0, 400)}`);
  process.exit(1);
}

// /api/generate streams newline-delimited JSON; the last useful line is
// phase:"done" carrying the ledger row.
let buf = '';
let done = null;
let failed = null;
for await (const chunk of res.body) {
  buf += Buffer.from(chunk).toString();
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (!line) continue;
    let msg;
    try { msg = JSON.parse(line); } catch { continue; }
    if (msg.phase === 'queued') process.stderr.write(`  queued ${msg.request_id}\n`);
    if (msg.phase === 'done') done = msg;
    if (msg.phase === 'error') failed = msg.error;
  }
}

if (failed) { console.error(`generation failed: ${JSON.stringify(failed).slice(0, 400)}`); process.exit(1); }
if (!done) { console.error('generation ended without a result'); process.exit(1); }

const asset = done.ledger?.outputs?.[0];
if (!asset) { console.error('no output asset in result'); process.exit(1); }

await mkdir(dirname(resolve(out)), { recursive: true });
if (asset.local_path && existsSync(asset.local_path)) {
  await copyFile(asset.local_path, resolve(out));
} else {
  const src = asset.remote_url || asset.url;
  if (!src) { console.error('no local or remote asset url'); process.exit(1); }
  await writeFile(resolve(out), Buffer.from(await (await fetch(src)).arrayBuffer()));
}

const cost = done.ledger?.cost;
console.log(`wrote ${out}  (${model}, ${JSON.stringify(params)}${cost != null ? `, $${Number(cost).toFixed(4)}` : ''})`);
