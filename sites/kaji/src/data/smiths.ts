// The three smiths of Munetsugu Hamono — single source of truth for the
// home "smiths" section, the /smith/[slug] pages, and product credits.

export interface Work {
  img: string;
  jp: string;
  en: string;
  spec: string;
  price: string;
}

export interface Smith {
  slug: string;
  nameEn: string;
  nameJp: string;
  role: string;
  roleJp: string;
  generation: string;
  specialty: string;
  steel: string;
  portrait: string;
  quote: string;
  quoteJp: string;
  bio: string[];
  facts: { label: string; value: string }[];
  works: Work[];
}

export const smiths: Smith[] = [
  {
    slug: "naoki",
    nameEn: "Naoki Munetsugu",
    nameJp: "宗次直樹",
    role: "Master smith",
    roleJp: "刀匠",
    generation: "IX generation",
    specialty: "Honyaki & gyuto",
    steel: "Aogami #2",
    portrait: "/smith-naoki.png",
    quote: "The steel does not forgive, and it does not forget. Neither do I.",
    quoteJp: "鋼は許さず、忘れず。",
    bio: [
      "Naoki took his first hammer blow at nine and his father's forge at forty-one. Between the two lay eleven years as an unpaid apprentice — sweeping, sorting charcoal, and watching — before he was permitted to quench a single blade.",
      "He works alone at the fire before dawn, when the light of the steel is easiest to read. His honyaki blades — forged from a single piece of steel, water-quenched, the most demanding discipline in the craft — number fewer than twenty a year. Most are spoken for years in advance.",
    ],
    facts: [
      { label: "At the forge since", value: "1974" },
      { label: "Blades per year", value: "~120" },
      { label: "Discipline", value: "Honyaki, water quench" },
    ],
    works: [
      { img: "/gyuto.png", jp: "牛刀", en: "Gyuto · 240mm", spec: "Aogami #2 · Kasumi · 63 HRC", price: "¥68,000" },
      { img: "/work-naoki-kiritsuke.png", jp: "切付", en: "Kiritsuke · 270mm", spec: "Shirogami #1 · Honyaki · 64 HRC", price: "¥240,000" },
    ],
  },
  {
    slug: "rin",
    nameEn: "Rin Munetsugu",
    nameJp: "宗次凛",
    role: "Tenth-generation heir",
    roleJp: "十代目",
    generation: "X generation",
    specialty: "Shirogami & fine work",
    steel: "Shirogami #1",
    portrait: "/smith-rin.png",
    quote: "My father reads the fire. I listen to the stone. The blade needs both of us.",
    quoteJp: "父は火を読み、私は石を聴く。",
    bio: [
      "Rin ground her first bevel at twelve, against her mother's wishes and with her grandfather's quiet blessing. She spent four years in Sakai's polishing houses before returning to the family fire — the first woman in nine generations to sign the Munetsugu mei.",
      "Her blades are known for edges taken further than the house has ever taken them — shirogami sharpened past a single micron, finishes that read like still water. Chefs who cook with her petty knives tend not to lend them out.",
    ],
    facts: [
      { label: "At the forge since", value: "2013" },
      { label: "Blades per year", value: "~140" },
      { label: "Discipline", value: "Togi, fine edge geometry" },
    ],
    works: [
      { img: "/santoku.png", jp: "三徳", en: "Santoku · 180mm", spec: "Shirogami #1 · Kasumi · 62 HRC", price: "¥54,000" },
      { img: "/work-rin-petty.png", jp: "ペティ", en: "Petty · 135mm", spec: "Shirogami #1 · Migaki · 63 HRC", price: "¥38,000" },
    ],
  },
  {
    slug: "goro",
    nameEn: "Goro Tanabe",
    nameJp: "田辺五郎",
    role: "Senior hand",
    roleJp: "老師",
    generation: "44 years at this fire",
    specialty: "Kurouchi & rustic finishes",
    steel: "Shirogami #2",
    portrait: "/smith-goro.png",
    quote: "A perfect finish hides the fire. I leave the fire where you can see it.",
    quoteJp: "完璧な仕上げは火を隠す。儂は火を残す。",
    bio: [
      "Goro came to the forge at thirty-one, a farm-tool smith whose village smithy had closed, and never left. He apprenticed under the eighth-generation master — Naoki's father — and taught Naoki himself how to listen to the charcoal.",
      "He forges the house's kurouchi work: blades that keep their black forge scale, unpolished and unapologetic. They are the least expensive knives the atelier makes and, by his measure, the most honest. His nakiri is the knife the smiths themselves cook with.",
    ],
    facts: [
      { label: "At the forge since", value: "1982" },
      { label: "Blades per year", value: "~90" },
      { label: "Discipline", value: "Kurouchi, tsuchime" },
    ],
    works: [
      { img: "/nakiri.png", jp: "菜切", en: "Nakiri · 165mm", spec: "Shirogami #2 · Kurouchi · 61 HRC", price: "¥49,000" },
      { img: "/work-goro-deba.png", jp: "出刃", en: "Deba · 165mm", spec: "Shirogami #2 · Kurouchi · 62 HRC", price: "¥58,000" },
    ],
  },
];

export const smithBySlug = (slug: string) => smiths.find((s) => s.slug === slug);
