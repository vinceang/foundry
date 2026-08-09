import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import meta from '../../data/foundry-meta.json';

/**
 * The catalog, served as data.
 *
 * The registry is the content store for the collection; this is its read API,
 * so the map, the roster and anything built later all consume the same source
 * rather than drifting into three hand-maintained lists.
 */
export const GET: APIRoute = async ({ site }) => {
  const entries = await getCollection('sites');

  const body = {
    studio: {
      name: meta.studio.name,
      collection: meta.studio.collection,
      url: String(site),
      place: meta.studio.place,
    },
    updated: meta.updated,
    count: entries.length,
    series: meta.series,
    sites: entries.map(({ data: s }) => ({
      slug: s.slug,
      name: s.name,
      nativeName: s.nativeName ?? null,
      series: s.series,
      what: s.what,
      tagline: s.tagline,
      place: s.place,
      satellites: s.satellites ?? [],
      signature: s.signature,
      shipped: s.shipped,
      palette: s.palette,
      live: s.url,
      page: `${site}work/${s.slug}`,
      image: `${site}collection/${s.slug}-1600.webp`,
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=600, s-maxage=3600',
      'access-control-allow-origin': '*',
    },
  });
};
