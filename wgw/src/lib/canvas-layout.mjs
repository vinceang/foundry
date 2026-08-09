/**
 * The order of the collection along the arc.
 *
 * The carousel loops, and that is not a trick: the axis is the day. Nocturne,
 * Aubade, Vesper, Pastorale, Vigil, and round again into Nocturne — night,
 * dawn, dusk, night. A cycle is the honest shape for it, and it means the seam
 * falls between Vigil and Nocturne where there is nothing to notice.
 *
 * Positions are computed in the browser from the scroll offset, so nothing
 * here needs retuning as the collection grows. This module only decides the
 * sequence, from the registry, with no human placing anything.
 */

/** Fixed order so the strip reads as a day rather than as a database. */
export const REGISTER_ORDER = ['nocturne', 'aubade', 'vesper', 'pastorale', 'vigil'];

/**
 * Sequence the collection around the light cycle.
 *
 * @param sites registry entries with { slug, series, shipped }
 * @returns sites in cycle order, each tagged with its index and register run
 */
export function cycleOrder(sites) {
  const buckets = new Map(REGISTER_ORDER.map((r) => [r, []]));

  for (const s of sites) {
    // An unrecognised register must still appear; park it at the end of the
    // cycle rather than dropping it off the strip.
    if (!buckets.has(s.series)) buckets.set(s.series, []);
    buckets.get(s.series).push(s);
  }

  const out = [];
  const runs = [];

  for (const [register, group] of buckets) {
    if (!group.length) continue;
    // Newest first inside a register, so a fresh build surfaces early.
    const ordered = [...group].sort((a, b) => (a.shipped < b.shipped ? 1 : -1));
    runs.push({ register, start: out.length, count: ordered.length });
    for (const s of ordered) out.push(s);
  }

  return { order: out, runs };
}
