#!/usr/bin/env node
// Foundry image generator — OpenAI gpt-image wrapper.
// Reads the API key from ~/.config/site-assets/openai.key (never committed).
//
// Usage:
//   node tools/gen-image.mjs --prompt "..." --out sites/ecommerce/public/hero.png \
//        [--size 1024x1024|1536x1024|1024x1536] [--quality high|medium|low] [--model gpt-image-1]
//
// Model defaults to gpt-image-1; override with --model gpt-image-2 (or IMAGE_MODEL env)
// once we confirm your account exposes it.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, resolve } from 'node:path';

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : def;
};

const prompt = arg('prompt');
const out = arg('out');
if (!prompt || !out) {
  console.error('Usage: node tools/gen-image.mjs --prompt "..." --out path/file.png [--size 1024x1024] [--quality high] [--model gpt-image-1]');
  process.exit(1);
}
const size = arg('size', '1024x1024');
const quality = arg('quality', 'high');
const model = arg('model', process.env.IMAGE_MODEL || 'gpt-image-1');

const keyPath = resolve(homedir(), '.config/site-assets/openai.key');
let apiKey;
try {
  apiKey = (await readFile(keyPath, 'utf8')).trim();
} catch {
  console.error(`No API key at ${keyPath}\n  create it:  printf 'YOUR_KEY' > ${keyPath} && chmod 600 ${keyPath}`);
  process.exit(1);
}

const res = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ model, prompt, size, quality, n: 1 }),
});

if (!res.ok) {
  console.error(`OpenAI error ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const json = await res.json();
const b64 = json.data?.[0]?.b64_json;
if (!b64) {
  console.error('No image in response:', JSON.stringify(json).slice(0, 600));
  process.exit(1);
}

await mkdir(dirname(resolve(out)), { recursive: true });
await writeFile(resolve(out), Buffer.from(b64, 'base64'));
if (json.usage) console.log('usage:', JSON.stringify(json.usage));
console.log(`wrote ${out}  (${model}, ${size}, ${quality})`);
