export type Hotspot = {
  x: number; // percent
  y: number; // percent
  title: string;
  note: string;
};

export type Work = {
  slug: string;
  no: string;          // register numeral
  name: string;
  kanji: string;
  reading: string;     // romaji + meaning
  category: string;
  atelier: string;
  atelierNote: string;
  year: string;
  price: string;
  status: 'Open to petition' | 'Under petition' | 'Sealed';
  image: string;
  imageAlt: string;
  portrait: boolean;
  lede: string;
  body: string[];
  specs: { k: string; v: string }[];
  provenance: { stage: string; detail: string; when: string }[];
  provenanceImage: { src: string; alt: string; caption: string };
  hotspots: Hotspot[];
};

export const works: Work[] = [
  {
    slug: 'gessho',
    no: 'IV',
    name: 'Gesshō',
    kanji: '月照',
    reading: 'gesshō — moonlight on still water',
    category: 'Kabuto · war helmet',
    atelier: 'House Mizuno, Kaga',
    atelierNote: 'Sixteenth generation of armorers',
    year: '2026',
    price: '¥18,400,000',
    status: 'Open to petition',
    image: '/works/gessho.jpg',
    imageAlt: 'Lacquered kabuto helmet with a gold crescent-moon crest, lit by a single warm light against darkness',
    portrait: true,
    lede: 'A sixty-two-plate russet iron bowl, raised and lacquered over eleven months, crowned with a crescent of hammered gold. Made to be worn once, and kept for three hundred years.',
    body: [
      'The bowl is raised from sixty-two individual iron plates, each hand-forged, riveted and filed until the seams read as a single curve. House Mizuno lacquers in the old Kaga manner: eight grounds of black urushi, each cured in a cedar chamber for nineteen days before the next is laid.',
      'The maedate crest is not cast. It is a single sheet of copper, hammered over horn forms and fired with gold in the mercury-free kaga-mekki method the house has guarded since the seventeenth century. Under candlelight it does not glitter — it glows.',
      'The silk lacing is dyed with fermented indigo to the depth called kachi-iro, "the color of victory," and will darken, not fade, as it ages.',
    ],
    specs: [
      { k: 'Construction', v: '62-plate suji-bachi, russet iron' },
      { k: 'Lacquer', v: 'Eight grounds, kuro-urushi, Wajima-cured' },
      { k: 'Crest', v: 'Hammered copper, kaga-mekki gold' },
      { k: 'Lacing', v: 'Kachi-iro indigo silk, hand-braided' },
      { k: 'Weight', v: '2.61 kg' },
      { k: 'Documentation', v: 'Sealed register entry, atelier deed, maker’s oath' },
    ],
    provenance: [
      { stage: 'Forged', detail: 'Sixty-two plates raised by Mizuno Takeharu', when: 'March — June 2025' },
      { stage: 'Lacquered', detail: 'Eight grounds laid and cured, Wajima chamber', when: 'June 2025 — February 2026' },
      { stage: 'Laced', detail: 'Kachi-iro silk, 340 hours of braiding', when: 'February — April 2026' },
      { stage: 'Sealed', detail: 'Entered into the Register as Work IV of XII', when: 'April 2026' },
    ],
    provenanceImage: {
      src: '/works/gessho-urushi.jpg',
      alt: 'Mizuno Takeharu applying the final lacquer finish to the Gesshō kabuto at a dark workshop bench',
      caption: 'Final lacquer inspection · Gesshō at the House Mizuno bench · Kaga',
    },
    hotspots: [
      { x: 50, y: 22, title: 'Maedate crest', note: 'A single copper sheet, hammered over horn forms and fired with gold. No two crescents from the house share a curve.' },
      { x: 38, y: 52, title: 'Sixty-two plates', note: 'The seams are filed until the bowl reads as one curve. Run a thumb across it blind and you will count nothing.' },
      { x: 62, y: 78, title: 'Kachi-iro lacing', note: 'Indigo fermented to "the color of victory." It darkens with decades; it does not fade.' },
    ],
  },
  {
    slug: 'samidare',
    no: 'VII',
    name: 'Samidare',
    kanji: '五月雨',
    reading: 'samidare — the long rains of early summer',
    category: 'Katana · long blade',
    atelier: 'Kanemoto Forge, Seki',
    atelierNote: 'Twenty-sixth generation of swordsmiths',
    year: '2026',
    price: '¥31,000,000',
    status: 'Under petition',
    image: '/works/samidare.jpg',
    imageAlt: 'Katana resting on a black lacquer stand, its temper line caught in low warm light',
    portrait: false,
    lede: 'Folded from tamahagane smelted in a single three-day burn, its temper line falls like rain seen through lantern light. The twenty-sixth Kanemoto considers it the finest blade of his tenure.',
    body: [
      'The steel began as iron sand from the Hii river, smelted in a clay tatara over three sleepless days. Of the two tonnes of tamahagane the burn produced, the smith kept eleven kilograms — the rest did not meet the house standard.',
      'The blade was folded thirteen times, yielding roughly eight thousand layers, then clay-coated and quenched in water the smith warms to the temperature of a March river. The hamon that resulted is a suguha broken by soft descending strokes — the smith’s named pattern, "samidare," rain that falls without wind.',
      'Polish took ninety days across two artisans of the Hon’ami line. The blade is mounted in plain black lacquer, deliberately silent, so that nothing competes with the steel.',
    ],
    specs: [
      { k: 'Steel', v: 'Tamahagane, single tatara burn, Hii river sand' },
      { k: 'Nagasa', v: '73.6 cm' },
      { k: 'Hamon', v: 'Suguha with samidare strokes' },
      { k: 'Polish', v: 'Hon’ami line, 90 days' },
      { k: 'Koshirae', v: 'Kuro-urushi saya, gold menuki' },
      { k: 'Documentation', v: 'NBTHK-attested papers, forge record, register deed' },
    ],
    provenance: [
      { stage: 'Smelted', detail: 'Three-day tatara burn, eleven kilograms kept', when: 'November 2024' },
      { stage: 'Forged', detail: 'Thirteen folds, clay-coated, water-quenched', when: 'January — May 2025' },
      { stage: 'Polished', detail: 'Ninety days, two artisans of the Hon’ami line', when: 'June — September 2025' },
      { stage: 'Sealed', detail: 'Entered into the Register as Work VII of XII', when: 'January 2026' },
    ],
    provenanceImage: {
      src: '/works/maker-kanemoto.jpg',
      alt: 'The twenty-sixth Kanemoto inspecting the polished Samidare blade by a single warm lantern',
      caption: 'The twenty-sixth Kanemoto · swordsmith, Kanemoto Forge · Seki',
    },
    hotspots: [
      { x: 55, y: 38, title: 'Samidare hamon', note: 'A straight temper line broken by soft descending strokes — rain that falls without wind. Visible only when the blade is moved against light.' },
      { x: 24, y: 52, title: 'Gold menuki', note: 'Cast and chased by the forge’s metalworker. Positioned to sit under the middle fingers, felt more than seen.' },
      { x: 80, y: 44, title: 'Kissaki', note: 'The point geometry is finished by the smith alone. It is the signature no one else may touch.' },
    ],
  },
  {
    slug: 'kuronami',
    no: 'IX',
    name: 'Kuronami',
    kanji: '黒波',
    reading: 'kuronami — the black wave',
    category: 'Sōmen · full war mask',
    atelier: 'Shirakawa Studio, Wajima',
    atelierNote: 'Urushi masters, eleventh generation',
    year: '2026',
    price: '¥9,700,000',
    status: 'Open to petition',
    image: '/works/kuronami.jpg',
    imageAlt: 'Lifelike russet-lacquered full face mask with gold repair beads above the left brow, mounted in darkness',
    portrait: true,
    lede: 'A full sōmen of russet lacquered iron, its left brow carrying beads of gold — not decoration, but an honest repair in the kintsugi manner, marking the single flaw the studio chose to keep.',
    body: [
      'The mask is raised from one plate of russet iron and chased to the studio’s severe standard: fierce at ten paces, serene at two. Sōmen are the rarest of war masks — the full face, ears and all, worked until the iron reads as flesh. The interior is lacquered in matte black so it disappears against the wearer’s shadow.',
      'During the final curing a run of hairline stress marks opened above the left brow. The studio’s custom in such cases is absolute: the flaw is not hidden. Each mark was stabilized and dressed in a bead of gold lacquer, entered into the record, and the work was renamed for it — the black wave, broken once.',
      'The horsehair mustache is set strand by strand into lacquer while it cures, a full week of work in a room kept at the humidity of a sea cave.',
    ],
    specs: [
      { k: 'Construction', v: 'Single-plate russet iron sōmen, chased' },
      { k: 'Repair', v: 'Gold urushi beads, documented, named' },
      { k: 'Interior', v: 'Black urushi, matte-cured' },
      { k: 'Mustache', v: 'Horsehair, set strand by strand' },
      { k: 'Weight', v: '840 g' },
      { k: 'Documentation', v: 'Register deed, repair record, studio oath' },
    ],
    provenance: [
      { stage: 'Raised', detail: 'Single plate, chased by Shirakawa Iori', when: 'August — October 2025' },
      { stage: 'Broken', detail: 'Hairlines opened in final curing; kept', when: 'December 2025' },
      { stage: 'Dressed', detail: 'Gold urushi beads laid over nine days', when: 'January 2026' },
      { stage: 'Sealed', detail: 'Entered into the Register as Work IX of XII', when: 'February 2026' },
    ],
    provenanceImage: {
      src: '/works/maker-shirakawa.jpg',
      alt: 'Shirakawa Iori applying black urushi to a curved armor plate in the Wajima studio',
      caption: 'Shirakawa Iori · eleventh keeper, Shirakawa Studio · Wajima',
    },
    hotspots: [
      { x: 38, y: 30, title: 'The gold beads', note: 'Stress marks opened in the final cure. The studio’s custom is absolute: the flaw is kept, dressed in gold, and named.' },
      { x: 56, y: 52, title: 'Chased expression', note: 'Fierce at ten paces, serene at two. The studio adjusts the brow and mouth by fractions of a millimetre until both readings hold.' },
      { x: 50, y: 82, title: 'Yodare-kake', note: 'The throat guard’s indigo lacing matches the kachi-iro standard of the house armories.' },
    ],
  },
  {
    slug: 'musubi',
    no: 'X',
    name: 'Musubi',
    kanji: '結び',
    reading: 'musubi — the binding that holds',
    category: 'Ō-yoroi · full armor',
    atelier: 'House Mizuno, Kaga',
    atelierNote: 'Sixteenth generation of armorers',
    year: '2026',
    price: '¥42,800,000',
    status: 'Open to petition',
    image: '/works/musubi.jpg',
    imageAlt: 'Black-lacquered ō-yoroi shoulder plates bound with warm brown silk knots and edged in aged gold',
    portrait: true,
    lede: 'A complete ō-yoroi built around the cord that holds it: black-lacquered hon-kozane drawn together in chestnut-brown silk, row after row, until separate plates move as one body.',
    body: [
      'Musubi begins with hon-kozane: hundreds of narrow iron and nerigawa scales, pierced to a shared pattern, overlapped, and lacquered until each row sheds water without losing its flex. The plates are deliberately quiet. Their work is to disappear beneath the rhythm of the cord.',
      'The odoshi is braided for this armor alone. Chestnut-brown silk is sorted by twist and sheen before a single length reaches the bench, then drawn through each scale at a tension judged by hand. Too loose and the rows chatter; too tight and the armor cannot follow the body. The correct pull leaves every crossing even while the whole suit still breathes.',
      'At the shoulder, one muted red tie records the joining of the final two assemblies. It is not an accent applied afterward, but the last structural knot—and the only moment the hand of the house is allowed to remain visible.',
    ],
    specs: [
      { k: 'Construction', v: 'Hon-kozane ō-yoroi, iron and lacquered nerigawa' },
      { k: 'Lacing', v: 'Kuri-iro silk, kebiki-odoshi' },
      { k: 'Finish', v: 'Kuro-urushi, eight cured grounds' },
      { k: 'Fittings', v: 'Hammered copper, aged-gold finish' },
      { k: 'Weight', v: '28.4 kg' },
      { k: 'Documentation', v: 'Register deed, lacing map, house oath' },
    ],
    provenance: [
      { stage: 'Scaled', detail: 'Iron and nerigawa hon-kozane pierced and matched', when: 'January — March 2025' },
      { stage: 'Lacquered', detail: 'Eight black grounds laid, cured, and burnished', when: 'April — September 2025' },
      { stage: 'Braided', detail: 'Kuri-iro silk drawn and tensioned row by row', when: 'October 2025 — May 2026' },
      { stage: 'Sealed', detail: 'Entered into the Register as Work X of XII', when: 'June 2026' },
    ],
    provenanceImage: {
      src: '/works/maker-mizuno.jpg',
      alt: 'A House Mizuno armorer drawing silk cord through the lacquered scales of Musubi at a dark workshop bench',
      caption: 'Kuri-iro lacing drawn through Musubi · House Mizuno bench · Kaga',
    },
    hotspots: [
      { x: 70, y: 44, title: 'Kebiki-odoshi', note: 'Silk drawn at an even hand tension, its compact knots holding every lacquered row without stiffening the whole.' },
      { x: 53, y: 61, title: 'Hon-kozane', note: 'Overlapping iron and nerigawa scales lacquered separately, then bound into a flexible defensive skin.' },
      { x: 84, y: 22, title: 'Aged-gold kanamono', note: 'A hand-worked fitting closes the shoulder assembly; its quiet wear is kept rather than polished away.' },
    ],
  },
];

// The sealed remainder of the year — shown as locked ledger rows.
export const sealedWorks = [
  { no: 'XI', hint: 'Tantō · short blade', unseal: 'Unsealed November 2026' },
  { no: 'XII', hint: 'Reserved for commission', unseal: 'By appointment only' },
];
