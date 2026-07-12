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
    category: 'Menpō · war mask',
    atelier: 'Shirakawa Studio, Wajima',
    atelierNote: 'Urushi masters, eleventh generation',
    year: '2026',
    price: '¥9,700,000',
    status: 'Open to petition',
    image: '/works/kuronami.jpg',
    imageAlt: 'Russet-lacquered samurai half-mask with gold repair lines along one cheek, mounted in darkness',
    portrait: true,
    lede: 'A russet iron half-mask whose left cheek carries a seam of gold — not decoration, but an honest repair in the kintsugi manner, marking the single flaw the studio chose to keep.',
    body: [
      'The mask is raised from one plate of russet iron, its expression cut and chased to the studio’s severe standard: fierce at ten paces, serene at two. The interior is lacquered in vermilion-free black so it disappears against the wearer’s shadow.',
      'During the final curing a hairline stress mark opened along the left cheek. The studio’s custom in such cases is absolute: the flaw is not hidden. It was stabilized and dressed in gold lacquer, entered into the record, and the work was renamed for it — the black wave, broken once.',
      'The horsehair mustache is set strand by strand into lacquer while it cures, a full week of work in a room kept at the humidity of a sea cave.',
    ],
    specs: [
      { k: 'Construction', v: 'Single-plate russet iron, chased' },
      { k: 'Repair', v: 'Gold urushi seam, documented, named' },
      { k: 'Interior', v: 'Black urushi, matte-cured' },
      { k: 'Mustache', v: 'Horsehair, set strand by strand' },
      { k: 'Weight', v: '640 g' },
      { k: 'Documentation', v: 'Register deed, repair record, studio oath' },
    ],
    provenance: [
      { stage: 'Raised', detail: 'Single plate, chased by Shirakawa Iori', when: 'August — October 2025' },
      { stage: 'Broken', detail: 'Hairline opened in final curing; kept', when: 'December 2025' },
      { stage: 'Dressed', detail: 'Gold urushi seam laid over nine days', when: 'January 2026' },
      { stage: 'Sealed', detail: 'Entered into the Register as Work IX of XII', when: 'February 2026' },
    ],
    hotspots: [
      { x: 36, y: 55, title: 'The gold seam', note: 'A stress mark opened in the final cure. The studio’s custom is absolute: the flaw is kept, dressed in gold, and named.' },
      { x: 60, y: 40, title: 'Chased expression', note: 'Fierce at ten paces, serene at two. The studio adjusts the brow line by fractions of a millimetre until both readings hold.' },
      { x: 52, y: 72, title: 'Yodare-kake', note: 'The throat guard’s indigo lacing matches the kachi-iro standard of the house armories.' },
    ],
  },
];

// The sealed remainder of the year — shown as locked ledger rows.
export const sealedWorks = [
  { no: 'X', hint: 'Ō-yoroi · full armor', unseal: 'Unsealed October 2026' },
  { no: 'XI', hint: 'Tantō · short blade', unseal: 'Unsealed November 2026' },
  { no: 'XII', hint: 'Reserved for commission', unseal: 'By appointment only' },
];
