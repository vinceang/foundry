// Square specimen crops for the register's accession plates.
// Nine wares were shot square for the purpose; four reuse a chapter plate and
// need an explicit centre, because a naive centre-crop of a tall portrait
// lands on the lantern rather than on the ware.
export const CROPS = {
  // key: [source, centre-x fraction, centre-y fraction, size as fraction of min edge]
  hoshi:   ["w-hoshi.png",   0.50, 0.52, 0.58],
  kugi:    ["w-kugi.png",    0.50, 0.52, 0.62],
  kote:    ["w-kote.png",    0.50, 0.54, 0.62],
  kiri:    ["w-kiri.png",    0.50, 0.52, 0.60],
  iki:     ["w-iki.png",     0.50, 0.50, 0.62],
  kama:    ["w-kama.png",    0.50, 0.50, 0.60],
  tsue:    ["w-tsue.png",    0.50, 0.52, 0.62],
  tan:     ["w-tan.png",     0.50, 0.52, 0.60],
  katana:  ["w-katana.png",  0.50, 0.52, 0.60],
  // reused chapter plates — centres found by eye against the source frames
  tekagi:  ["tekagi.png",    0.44, 0.66, 0.70],
  nawa:    ["nawa.png",      0.52, 0.45, 0.74],
  shozoku: ["shozoku.png",   0.52, 0.56, 0.66],
  tabi:    ["tabi.png",      0.54, 0.62, 0.80],
};
