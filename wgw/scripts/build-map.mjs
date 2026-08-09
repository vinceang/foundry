#!/usr/bin/env node
/**
 * Project the world once, at build time.
 *
 * Land outlines come from Natural Earth (110m, via world-atlas) and are
 * projected with d3-geo. The browser then projects the terminator and the
 * site nodes with our own Equal Earth implementation in src/lib/geo.mjs.
 * Two implementations of the same projection is exactly the kind of thing
 * that drifts silently, so this script refuses to emit anything unless the
 * two agree to well under a pixel across a dense global sample.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { geoEqualEarth, geoPath, geoGraticule10 } from 'd3-geo';
import { feature } from 'topojson-client';
import { makeProjector, EE_BOUNDS } from '../src/lib/geo.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const wgw = resolve(here, '..');
const DATA = join(wgw, 'src', 'data');

const WIDTH = 1000;
const PAD = 0;

// Fit the globe, then read back the height the projection actually needs.
const topo = JSON.parse(
  readFileSync(join(wgw, 'node_modules', 'world-atlas', 'land-110m.json'), 'utf8')
);
const land = feature(topo, topo.objects.land);

const HEIGHT = Math.round((WIDTH * EE_BOUNDS.yMax) / EE_BOUNDS.xMax);

const projection = geoEqualEarth().fitExtent(
  [
    [PAD, PAD],
    [WIDTH - PAD, HEIGHT - PAD],
  ],
  { type: 'Sphere' }
);

const path = geoPath(projection);

// --- cross-check the two implementations ---------------------------------
const mine = makeProjector(WIDTH, HEIGHT, PAD);
let worst = 0;
let worstAt = null;
for (let lat = -85; lat <= 85; lat += 2.5) {
  for (let lon = -180; lon <= 180; lon += 5) {
    const [ax, ay] = projection([lon, lat]);
    const [bx, by] = mine(lon, lat);
    const d = Math.hypot(ax - bx, ay - by);
    if (d > worst) {
      worst = d;
      worstAt = { lon, lat, d3: [ax, ay], ours: [bx, by] };
    }
  }
}
if (worst > 0.01) {
  console.error(
    `\n  ✗ projection mismatch: our Equal Earth and d3-geo disagree by ${worst.toFixed(4)}px\n` +
      `    worst at ${JSON.stringify(worstAt)}\n` +
      `    the terminator would not line up with the land — refusing to build.\n`
  );
  process.exit(1);
}

// --- emit ----------------------------------------------------------------
const round = (d) => d.replace(/-?\d+\.\d+/g, (m) => (+m).toFixed(1));

const out = {
  width: WIDTH,
  height: HEIGHT,
  land: round(path(land)),
  graticule: round(path(geoGraticule10())),
  sphere: round(path({ type: 'Sphere' })),
};

mkdirSync(DATA, { recursive: true });
writeFileSync(join(DATA, 'map.json'), JSON.stringify(out) + '\n');

const kb = (s) => (s.length / 1024).toFixed(1);
console.log(
  `  ✓ world projected — ${WIDTH}×${HEIGHT} Equal Earth ` +
    `(land ${kb(out.land)}kb, graticule ${kb(out.graticule)}kb)`
);
console.log(`    projection agreement with d3-geo: ${worst.toExponential(2)}px worst case`);
