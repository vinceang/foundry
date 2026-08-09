import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/**
 * The Foundry catalog, as a headless content store.
 *
 * Source of truth is repo-root `foundry.json`; `scripts/sync.mjs` derives the
 * loader-shaped file this reads. The schema below is the contract a scheduled,
 * unattended site build must satisfy in order to register itself — if a new
 * entry is missing coordinates, a palette, or a signature, the build fails here
 * with a named field rather than shipping a broken node onto the map.
 */

const hex = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/, 'must be a #rrggbb hex colour');

const place = z.object({
  label: z.string().min(1),
  country: z.string().min(1),
  lat: z.number().min(-90).max(90),
  lon: z.number().min(-180).max(180),
});

const sites = defineCollection({
  loader: file('./src/data/foundry-sites.json', {
    parser: (text) => {
      const rows = JSON.parse(text);
      return Object.fromEntries(rows.map((r: { slug: string }) => [r.slug, r]));
    },
  }),
  schema: z.object({
    slug: z.string().min(1),
    name: z.string().min(1),
    nativeName: z.string().optional(),
    series: z.enum(['nocturne', 'aubade', 'vesper', 'pastorale', 'vigil']),
    what: z.string().min(1),
    tagline: z.string().min(1),
    place,
    /** Extra pins for a subject that lives in more than one town. */
    satellites: z
      .array(z.object({ label: z.string(), lat: z.number(), lon: z.number() }))
      .optional(),
    url: z.string().url(),
    hero: z.string().min(1),
    video: z.string().optional(),
    palette: z.object({ ground: hex, light: hex, accent: hex }),
    signature: z.string().min(1),
    shipped: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
    /** Derived by sync.mjs — not hand-authored. */
    blur: z.string().startsWith('data:image/'),
    aspect: z.number().positive(),
  }),
});

export const collections = { sites };
