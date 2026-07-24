// Malmfuru — the world's data. All numbers must stay consistent with the
// fact table in DESIGN.md §1.

export const meta = {
  title: 'Malmfuru — laftehus fra Numedal, since 1791',
  description:
    'A family workshop of log builders at Nore i Numedal, Norway. Eight generations, one notch, three houses a year — hewn in malmfuru, raised by hand.',
};

export const nav = {
  brandAria: 'Malmfuru — to the beginning',
  timber: 'The timber',
  rings: 'Årringene',
  tun: 'The tun',
  setning: 'Setning',
  cta: 'Write to Nore',
};

/** Daylight-line bands, keyed by day length at Nore (see DESIGN.md §5). */
export const daylight = {
  place: 'Nore',
  noscript: 'Nore i Numedal, 60° north.',
  bands: {
    felling: 'the felling light', // under 7 h
    hewing: 'the hewing light', // 7–16 h
    raising: 'the raising light', // over 16 h
  },
};

export interface House {
  slug: string;
  name: string;
  reading: string;
  hb: string; // husbok number
  status: 'Open to tinging' | 'Promised' | 'Raised';
  statusNote: string;
  plate: string;
  ratio: string; // CSS aspect-ratio of the plate box
  body: string;
  facts: [string, string][];
}

export const houses: House[] = [
  {
    slug: 'skavlen',
    name: 'Skavlen',
    reading: 'the cornice the wind builds on a ridge',
    hb: 'HB 384',
    status: 'Open to tinging',
    statusNote: 'timber felled, drying at Nore',
    plate: '/plates/hus-skavlen.jpg',
    ratio: '2 / 3',
    body:
      'A one-room-deep mountain house of forty-one logs, drawn for a shoulder of ridge above the tree line. Its timber was felled in January 2021 and stands in the drying sheds now; the walls can rise in the summer after next. The tinging is open: where Skavlen stands, and which way its window faces, is still the owner’s to decide.',
    facts: [
      ['Logs', 'Forty-one, numbered'],
      ['Felled', 'January 2021'],
      ['Walls rise', 'Summer 2028'],
      ['Axe-hours', 'About four thousand'],
    ],
  },
  {
    slug: 'vindstille',
    name: 'Vindstille',
    reading: 'dead calm — smoke goes straight up',
    hb: 'HB 383',
    status: 'Promised',
    statusNote: 'under roof, autumn 2026',
    plate: '/plates/hus-vindstille.jpg',
    ratio: '2 / 3',
    body:
      'A lakeside house of fifty-six logs, promised to a family from Kongsberg. Its nov corners were closed this spring; the sod roof goes on before the first frost. It will spend its first seven winters settling toward the water, as every house of ours does, and we will come back to ease its doors.',
    facts: [
      ['Logs', 'Fifty-six, numbered'],
      ['Felled', 'January 2019'],
      ['Under roof', 'Autumn 2026'],
      ['Axe-hours', 'About six thousand'],
    ],
  },
  {
    slug: 'blaatimen',
    name: 'Blåtimen',
    reading: 'the blue hour, when snow holds the last light',
    hb: 'HB 379',
    status: 'Raised',
    statusNote: 'stands above Dagali since 2024',
    plate: '/plates/hus-blaatimen.jpg',
    ratio: '2 / 3',
    body:
      'Raised in eleven days in the summer of 2024 on a mountain shoulder above Dagali, from logs felled the January the owner first wrote to us. Sixty-two logs, each one’s felling winter recorded in its husbok. Its first setning winters are behind it; the doors were eased this spring, and the house is done sinking.',
    facts: [
      ['Logs', 'Sixty-two, numbered'],
      ['Felled', 'January 2017'],
      ['Raised', 'Summer 2024, eleven days'],
      ['Axe-hours', 'Six thousand eight hundred'],
    ],
  },
  {
    slug: 'soelvbu',
    name: 'Sølvbu',
    reading: 'the silver bothy — sun-greyed, never painted',
    hb: 'HB 121',
    status: 'Raised',
    statusNote: 'stands at Nore since 1932',
    plate: '/plates/hus-soelvbu.jpg',
    ratio: '2 / 3',
    body:
      'Knut IV’s last house, raised in 1932 and never painted: malmfuru left to the sun goes silver-grey and stops there. It stands a short walk from the workshop, in birches, and we keep it as our measure — when a tinging asks what our houses look like in a hundred years, we do not answer. We hand over the key and let Sølvbu do it.',
    facts: [
      ['Logs', 'Thirty-eight, numbered'],
      ['Felled', 'January 1925'],
      ['Raised', '1932, by Knut IV'],
      ['Painted', 'Never'],
    ],
  },
];

/** The ring archive — the doorway log: felled Jan 2019, 228 rings (1791–2019). */
export interface Ring {
  year: number;
  /** 0..1 — position from pith to bark, for the overlay marker. */
  t: number;
  title: string;
  body: string;
}

export const rings: Ring[] = [
  {
    year: 1791,
    t: 0.02,
    title: 'The pith',
    body:
      'The seed takes in a burnt clearing above Nore — the same winter Halvor Loftsgård raises the workshop’s first loft. Tree and workshop are the same age.',
  },
  {
    year: 1823,
    t: 0.14,
    title: 'Torstein II takes the axe',
    body: 'The second master. The tree is thirty-two rings around; a sapling still, standing in his felling rights.',
  },
  {
    year: 1858,
    t: 0.29,
    title: 'Halvor III takes the axe',
    body: 'He re-roofs the church barn at Uvdal and cuts the six-sided nov the house still uses.',
  },
  {
    year: 1889,
    t: 0.43,
    title: 'The first husbok',
    body:
      'Knut IV numbers every log of a house shipped in pieces down the valley, and writes the first house book. Three hundred and eighty-four houses stand in it now.',
  },
  {
    year: 1904,
    t: 0.5,
    title: 'A thin ring',
    body: 'A cold, sunless summer. The ring is a hair’s width — malmfuru is made of years like this one.',
  },
  {
    year: 1921,
    t: 0.57,
    title: 'Margit V takes the axe',
    body: 'The fifth master, the first woman in the book. She holds the workshop through the hardest decades.',
  },
  {
    year: 1943,
    t: 0.66,
    title: 'Five thin rings',
    body: 'The war years. The workshop raises nothing and repairs much; the tree keeps its own record of the cold.',
  },
  {
    year: 1953,
    t: 0.7,
    title: 'Olav VI takes the axe',
    body: 'He plants the drying sheds’ shelter pines and blazes trees his grandchildren will fell.',
  },
  {
    year: 1984,
    t: 0.83,
    title: 'Torgeir VII takes the axe',
    body: 'The seventh master. He begins the seventh-winter visits — the workshop returns to every house to ease its doors when the setning is done.',
  },
  {
    year: 2012,
    t: 0.94,
    title: 'Embret VIII takes the axe',
    body: 'The eighth and current master. Sigrid, the ninth, apprentices in 2021.',
  },
  {
    year: 2019,
    t: 1,
    title: 'The felling',
    body:
      'Cut in the second week of January, in the still cold, at two hundred and twenty-eight rings. The cross-cut hangs in the workshop doorway; you pass under it on the way to the benches.',
  },
];

export const footer = {
  blurb:
    'Malmfuru is the Loftsgård family’s workshop at Nore i Numedal. Eight generations, one notch, three houses a year.',
  houseTitle: 'The workshop',
  houseLinks: [
    { href: '#tun', t: 'The tun' },
    { href: '#timber', t: 'The timber' },
    { href: '#ringer', t: 'Årringene' },
    { href: '#setning', t: 'Setning & the husbok' },
  ],
  visitTitle: 'The valley',
  visitLines: ['Nore i Numedal, Norway', 'Visits by appointment, September–March', 'The workshop keeps the felling weeks to itself'],
  corrTitle: 'The tinging',
  corrMail: 'post@malmfuru.no',
  corrLine: 'Answered within a week, by the master’s hand',
  legal: '© Loftsgård laftebruk, Nore i Numedal · since 1791',
  legalNote: 'Three houses leave this valley each year.',
};
