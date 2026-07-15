// Schwarzwald — bilingual content. EN and DE are each written natively;
// they correspond, they are not translations of each other. See DESIGN.md §8.

export type Locale = 'en' | 'de';

export interface Clock {
  slug: string;
  name: string;
  wv: string; // Werkverzeichnis number
  reading: Record<Locale, string>;
  wood: Record<Locale, string>;
  movement: Record<Locale, string>;
  hours: Record<Locale, string>;
  price: Record<Locale, string>;
  status: 'open' | 'promised';
  img?: string;
  imgAlt: Record<Locale, string>;
  /* dossier */
  felling: Record<Locale, string>;
  dimensions: string;
  call: Record<Locale, string>;
  record: Record<Locale, string[]>; // long-form paragraphs
  stages: { stage: Record<Locale, string>; date: Record<Locale, string> }[];
}

export const clocks: Clock[] = [
  {
    slug: 'mondlicht',
    name: 'Mondlicht',
    wv: 'WV 208',
    reading: {
      en: 'moonlight over the high forest',
      de: 'Mondlicht über dem Hochwald',
    },
    wood: {
      en: 'Linden, dark-waxed · walnut dial',
      de: 'Linde, dunkel gewachst · Zifferblatt aus Nussbaum',
    },
    movement: {
      en: 'Eight-day mechanical, brass',
      de: 'Achttagewerk, mechanisch, Messing',
    },
    hours: { en: '460 hours carved', de: '460 Stunden geschnitzt' },
    price: { en: '€ 14,800', de: '14.800 €' },
    status: 'open',
    imgAlt: {
      en: 'Carved cuckoo clock "Mondlicht" — an owl beneath a crescent moon, dark-waxed linden, lit by a single warm light',
      de: 'Geschnitzte Kuckucksuhr „Mondlicht" — eine Eule unter der Mondsichel, dunkel gewachste Linde, von einem warmen Licht beleuchtet',
    },
    felling: {
      en: 'Linden felled January 2013, waning moon, north slope above Schonach',
      de: 'Linde geschlagen im Januar 2013, abnehmender Mond, Nordhang über Schonach',
    },
    dimensions: '58 × 34 × 22 cm',
    call: {
      en: 'Two notes, a falling minor third, voiced low for a sleeping house',
      de: 'Zwei Töne, eine fallende kleine Terz, leise gestimmt für ein schlafendes Haus',
    },
    record: {
      en: [
        'The owl was drawn seven times before she was allowed into linden. She sits above the dial with her wings folded, and the crescent moon behind her is cut so shallow that it only appears when the room\'s light is low — a carving made for the hours it is named after.',
        'The case is waxed dark, never stained: eleven coats, each rubbed back by hand, so the year-rings of the wood still read under the finish. The dial is walnut from the same valley, and the hands were cut from a single offcut of the case.',
      ],
      de: [
        'Die Eule wurde sieben Mal gezeichnet, ehe sie in die Linde durfte. Sie sitzt über dem Zifferblatt mit angelegten Flügeln, und die Mondsichel hinter ihr ist so flach geschnitten, dass sie erst hervortritt, wenn das Licht im Zimmer niedrig wird — eine Schnitzerei für die Stunden, nach denen sie heißt.',
        'Das Gehäuse ist dunkel gewachst, nie gebeizt: elf Schichten, jede von Hand zurückgerieben, sodass die Jahresringe unter der Oberfläche lesbar bleiben. Das Zifferblatt ist Nussbaum aus demselben Tal, die Zeiger sind aus einem einzigen Abschnitt des Gehäuses geschnitten.',
      ],
    },
    stages: [
      { stage: { en: 'Drawn', de: 'Gezeichnet' }, date: { en: 'March 2024', de: 'März 2024' } },
      { stage: { en: 'Carved, 460 hours', de: 'Geschnitzt, 460 Stunden' }, date: { en: 'April 2024 — February 2025', de: 'April 2024 — Februar 2025' } },
      { stage: { en: 'Movement fitted and regulated', de: 'Werk eingesetzt und reguliert' }, date: { en: 'March 2025', de: 'März 2025' } },
      { stage: { en: 'Voiced', de: 'Gestimmt' }, date: { en: 'April 2025', de: 'April 2025' } },
      { stage: { en: 'Entered into the Werkverzeichnis', de: 'Ins Werkverzeichnis eingetragen' }, date: { en: 'May 2025', de: 'Mai 2025' } },
    ],
  },
  {
    slug: 'tannenruh',
    name: 'Tannenruh',
    wv: 'WV 211',
    reading: {
      en: 'the stillness of firs under snow',
      de: 'die Stille der Tannen unter Schnee',
    },
    wood: {
      en: 'Linden, natural · fir-bough relief',
      de: 'Linde, natur · Relief aus Tannenzweigen',
    },
    movement: {
      en: 'Eight-day mechanical, brass',
      de: 'Achttagewerk, mechanisch, Messing',
    },
    hours: { en: '640 hours carved', de: '640 Stunden geschnitzt' },
    price: { en: '€ 21,400', de: '21.400 €' },
    status: 'promised',
    imgAlt: {
      en: 'Carved cuckoo clock "Tannenruh" — deep relief of fir boughs in pale linden, single warm light against darkness',
      de: 'Geschnitzte Kuckucksuhr „Tannenruh" — tiefes Relief aus Tannenzweigen in heller Linde, ein warmes Licht in der Dunkelheit',
    },
    felling: {
      en: 'Linden felled January 2011, waning moon — the palest stem of that winter',
      de: 'Linde geschlagen im Januar 2011, abnehmender Mond — der hellste Stamm jenes Winters',
    },
    dimensions: '64 × 38 × 24 cm',
    call: {
      en: 'Two notes, a falling minor third, with a longer rest — snow slows everything',
      de: 'Zwei Töne, eine fallende kleine Terz, mit längerer Pause — Schnee verlangsamt alles',
    },
    record: {
      en: [
        'Tannenruh is carved from linden left unstained and unwaxed except for a single pass of cold-pressed oil: the snow in the relief is the wood itself. The boughs hang at the true angle of loaded fir — the carver worked from branches brought in from the January forest and kept on the bench until they thawed.',
        'It is the deepest relief the house has cut in this generation, six centimetres at the crown. Six hundred and forty hours. The dial is kept nearly bare so that nothing competes with the weight of the snow.',
      ],
      de: [
        'Tannenruh ist aus Linde geschnitzt, ungebeizt und ungewachst bis auf einen einzigen Auftrag kaltgepressten Öls: Der Schnee im Relief ist das Holz selbst. Die Zweige hängen im wahren Winkel beladener Tannen — der Schnitzer arbeitete nach Ästen aus dem Januarwald, die auf der Bank lagen, bis sie tauten.',
        'Es ist das tiefste Relief, das das Haus in dieser Generation geschnitten hat, sechs Zentimeter am Scheitel. Sechshundertvierzig Stunden. Das Zifferblatt bleibt beinahe kahl, damit nichts mit dem Gewicht des Schnees streitet.',
      ],
    },
    stages: [
      { stage: { en: 'Drawn', de: 'Gezeichnet' }, date: { en: 'September 2023', de: 'September 2023' } },
      { stage: { en: 'Carved, 640 hours', de: 'Geschnitzt, 640 Stunden' }, date: { en: 'October 2023 — January 2025', de: 'Oktober 2023 — Januar 2025' } },
      { stage: { en: 'Movement fitted and regulated', de: 'Werk eingesetzt und reguliert' }, date: { en: 'February 2025', de: 'Februar 2025' } },
      { stage: { en: 'Voiced', de: 'Gestimmt' }, date: { en: 'March 2025', de: 'März 2025' } },
      { stage: { en: 'Entered into the Werkverzeichnis · promised', de: 'Ins Werkverzeichnis eingetragen · versprochen' }, date: { en: 'April 2025', de: 'April 2025' } },
    ],
  },
  {
    slug: 'waldkauz',
    name: 'Waldkauz',
    wv: 'WV 216',
    reading: {
      en: 'the tawny owl keeps the third watch',
      de: 'der Waldkauz hält die dritte Wache',
    },
    wood: {
      en: 'Walnut case · linden carving',
      de: 'Gehäuse aus Nussbaum · Schnitzerei aus Linde',
    },
    movement: {
      en: 'Eight-day mechanical, brass, night silence',
      de: 'Achttagewerk, mechanisch, Messing, Nachtabschaltung',
    },
    hours: { en: '520 hours carved', de: '520 Stunden geschnitzt' },
    price: { en: '€ 19,600', de: '19.600 €' },
    status: 'open',
    imgAlt: {
      en: 'Carved cuckoo clock "Waldkauz" — a tawny owl perched over the dial, walnut and linden, chiaroscuro light',
      de: 'Geschnitzte Kuckucksuhr „Waldkauz" — ein Waldkauz über dem Zifferblatt, Nussbaum und Linde, im Helldunkel',
    },
    felling: {
      en: 'Walnut felled February 2009; linden January 2014 — both under a waning moon',
      de: 'Nussbaum geschlagen im Februar 2009; Linde im Januar 2014 — beide bei abnehmendem Mond',
    },
    dimensions: '61 × 36 × 23 cm',
    call: {
      en: 'Two notes, a falling minor third; after ten in the evening the clock keeps its silence',
      de: 'Zwei Töne, eine fallende kleine Terz; nach zehn Uhr abends schweigt die Uhr',
    },
    record: {
      en: [
        'The tawny owl keeps the third watch — the hours between midnight and three, when the forest is most awake. He is carved in pale linden against a walnut case, feather by feather, five hundred and twenty hours, his talons closed around the ridge of the roof as a living owl closes them in sleep.',
        'Waldkauz carries the house\'s night silence: a small brass lever stills the bellows after ten. It was built for a bedroom wall, and the movement is regulated a breath slower than the others — the seventh generation maintains the sixth\'s conviction that a bedroom clock should never hurry.',
      ],
      de: [
        'Der Waldkauz hält die dritte Wache — die Stunden zwischen Mitternacht und drei, in denen der Wald am wachsten ist. Er ist in heller Linde gegen ein Nussbaumgehäuse geschnitzt, Feder um Feder, fünfhundertzwanzig Stunden, die Fänge um den First geschlossen, wie ein lebender Kauz sie im Schlaf schließt.',
        'Waldkauz trägt die Nachtabschaltung des Hauses: ein kleiner Messinghebel stellt die Bälge nach zehn Uhr still. Er wurde für eine Schlafzimmerwand gebaut, und das Werk ist einen Atemzug langsamer reguliert als die anderen — die siebte Generation hält an der Überzeugung der sechsten fest, dass eine Schlafzimmeruhr nie eilen darf.',
      ],
    },
    stages: [
      { stage: { en: 'Drawn', de: 'Gezeichnet' }, date: { en: 'June 2024', de: 'Juni 2024' } },
      { stage: { en: 'Carved, 520 hours', de: 'Geschnitzt, 520 Stunden' }, date: { en: 'July 2024 — May 2025', de: 'Juli 2024 — Mai 2025' } },
      { stage: { en: 'Movement fitted and regulated', de: 'Werk eingesetzt und reguliert' }, date: { en: 'June 2025', de: 'Juni 2025' } },
      { stage: { en: 'Voiced', de: 'Gestimmt' }, date: { en: 'July 2025', de: 'Juli 2025' } },
      { stage: { en: 'Entered into the Werkverzeichnis', de: 'Ins Werkverzeichnis eingetragen' }, date: { en: 'August 2025', de: 'August 2025' } },
    ],
  },
  {
    slug: 'abendlaeuten',
    name: 'Abendläuten',
    wv: 'WV 219',
    reading: {
      en: 'evening bells across the valley',
      de: 'Abendläuten über dem Tal',
    },
    wood: {
      en: 'Linden, smoked · gilt-brass pendulum',
      de: 'Linde, geräuchert · Pendel aus vergoldetem Messing',
    },
    movement: {
      en: 'Eight-day mechanical, brass',
      de: 'Achttagewerk, mechanisch, Messing',
    },
    hours: { en: '780 hours carved', de: '780 Stunden geschnitzt' },
    price: { en: '€ 26,200', de: '26.200 €' },
    status: 'promised',
    imgAlt: {
      en: 'Carved cuckoo clock "Abendläuten" — smoked linden with a gilt-brass pendulum catching warm light',
      de: 'Geschnitzte Kuckucksuhr „Abendläuten" — geräucherte Linde, das vergoldete Messingpendel im warmen Licht',
    },
    felling: {
      en: 'Linden felled January 2008, waning moon — smoked over beech for four months',
      de: 'Linde geschlagen im Januar 2008, abnehmender Mond — vier Monate über Buche geräuchert',
    },
    dimensions: '72 × 41 × 26 cm',
    call: {
      en: 'Two notes, a falling minor third, answered by six small bells at the full hour',
      de: 'Zwei Töne, eine fallende kleine Terz, zur vollen Stunde beantwortet von sechs kleinen Glocken',
    },
    record: {
      en: [
        'Abendläuten remembers the sound of the valley at seven in the evening: the cuckoo calls, and six bells — cast for the house in Villingen, each tuned to the peal of a church within walking distance of Schonach — answer in order, near to far. Oak leaves and small bells are carved through nine hundred hours into linden smoked dark over beech.',
        'The pendulum is gilt brass, the only bright metal the house permits itself in this register, because it is the part that moves: light should ride on what is alive. It is the largest clock of the current Kabinett and the longest carving of the seventh generation\'s tenure.',
      ],
      de: [
        'Abendläuten erinnert den Klang des Tals um sieben Uhr abends: Der Kuckuck ruft, und sechs Glocken — für das Haus in Villingen gegossen, jede auf das Geläut einer Kirche in Gehweite von Schonach gestimmt — antworten der Reihe nach, von nah bis fern. Eichenlaub und kleine Glocken sind in neunhundert Stunden in über Buche dunkel geräucherte Linde geschnitten.',
        'Das Pendel ist vergoldetes Messing, das einzige helle Metall, das sich das Haus in diesem Register erlaubt, denn es ist der Teil, der sich bewegt: Licht soll auf dem reiten, was lebt. Es ist die größte Uhr des gegenwärtigen Kabinetts und die längste Schnitzarbeit in der Zeit der siebten Generation.',
      ],
    },
    stages: [
      { stage: { en: 'Drawn', de: 'Gezeichnet' }, date: { en: 'January 2023', de: 'Januar 2023' } },
      { stage: { en: 'Carved, 780 hours', de: 'Geschnitzt, 780 Stunden' }, date: { en: 'February 2023 — October 2024', de: 'Februar 2023 — Oktober 2024' } },
      { stage: { en: 'Bells cast and tuned, Villingen', de: 'Glocken gegossen und gestimmt, Villingen' }, date: { en: 'November 2024', de: 'November 2024' } },
      { stage: { en: 'Movement fitted and regulated', de: 'Werk eingesetzt und reguliert' }, date: { en: 'December 2024', de: 'Dezember 2024' } },
      { stage: { en: 'Voiced', de: 'Gestimmt' }, date: { en: 'January 2025', de: 'Januar 2025' } },
      { stage: { en: 'Entered into the Werkverzeichnis · promised', de: 'Ins Werkverzeichnis eingetragen · versprochen' }, date: { en: 'February 2025', de: 'Februar 2025' } },
    ],
  },
];

// The Waldvogel line — seven masters since 1854, the eighth apprenticed.
export const generations = [
  { n: 'I.', name: 'Matthias Waldvogel', years: { en: '1854–1881', de: '1854–1881' } },
  { n: 'II.', name: 'Johann Waldvogel', years: { en: '1881–1907', de: '1881–1907' } },
  { n: 'III.', name: 'Albrecht Waldvogel', years: { en: '1907–1934', de: '1907–1934' } },
  { n: 'IV.', name: 'Frieda Waldvogel', years: { en: '1934–1961', de: '1934–1961' } },
  { n: 'V.', name: 'Georg Waldvogel', years: { en: '1961–1987', de: '1961–1987' } },
  { n: 'VI.', name: 'Lorenz Waldvogel', years: { en: '1987–2011', de: '1987–2011' } },
  { n: 'VII.', name: 'Elias Waldvogel', years: { en: '2011–', de: '2011–' } },
  { n: 'VIII.', name: 'Marta Waldvogel', years: { en: 'apprenticed 2019', de: 'in der Lehre seit 2019' } },
];

export const privateHands = [
  { wv: 'WV 199', name: 'Hirschruf', year: '2023', place: { en: 'Vienna', de: 'Wien' } },
  { wv: 'WV 190', name: 'Wintergang', year: '2019', place: { en: 'Kyoto', de: 'Kyōto' } },
  { wv: 'WV 183', name: 'Nachtwache', year: '2016', place: { en: 'New York', de: 'New York' } },
  { wv: 'WV 171', name: 'Erster Schnee', year: '2011', place: { en: 'Zurich', de: 'Zürich' } },
  { wv: 'WV 158', name: 'Stiller Grund', year: '2006', place: { en: 'Hamburg', de: 'Hamburg' } },
];

// UI strings per locale. Keys are structural; values are native copy.
export const ui = {
  en: {
    htmlLang: 'en',
    altPath: '/de/',
    altLabel: 'DE',
    selfLabel: 'EN',
    meta: {
      title: 'Schwarzwald — Uhrenhaus im Schwarzwald, est. 1854',
      description:
        'One family, seven generations, twelve cuckoo clocks a year. Carved in Schonach im Schwarzwald since 1854, released by correspondence.',
    },
    nav: {
      kabinett: 'Kabinett',
      familie: 'Familie',
      werkstatt: 'Werkstatt',
      urkunde: 'Urkunde',
      cta: 'Correspondence',
      brandAria: 'Schwarzwald — home',
    },
    hero: {
      label: 'Uhrenhaus · Schonach im Schwarzwald · seit 1854',
      line1: 'The forest',
      line2: 'keeps time.',
      body: 'Cuckoo clocks raised by one family for seven generations. Twelve leave the house each year — one for each hour of the dial.',
      cta1: 'Enter the Kabinett',
      cta2: 'Open a correspondence',
      timeFallback: 'Schonach im Schwarzwald',
      timeBands: ['the workshop sleeps', 'the benches are occupied', 'the lantern is lit'],
      timePlace: 'Schonach',
    },
    doctrine: {
      folio: 'I.',
      label: 'The house',
      display: 'We do not manufacture clocks. We raise them.',
      body:
        'A cuckoo clock is a small house for time. Ours are carved from linden felled in the waning January moon — Mondholz, "moon wood" — and air-dried for eleven years under the roof of this house before an iron touches it. The movement is brass, mechanical, eight days to a winding. The call is two notes, a falling minor third, made by twin bellows and two fir whistles, as it has been made here since 1854.',
      facts: [
        { n: 'MDCCCLIV', t: 'Founded in Schonach' },
        { n: 'VII', t: 'Generations of one family' },
        { n: 'XII', t: 'Clocks leave the house each year' },
        { n: 'XI', t: 'Years the wood rests before carving' },
      ],
      watermark: 'Zeit',
    },
    kabinett: {
      folio: 'II.',
      label: 'Das Kabinett',
      display: 'Twelve departures a year.',
      body:
        'The clocks currently in the house. Each carries its Werkverzeichnis number — the ledger the family has kept, without a missing entry, since 1854.',
      statusOpen: 'Open to correspondence',
      statusPromised: 'Promised',
      dossier: 'Open the dossier',
      woodLabel: 'Wood',
      movementLabel: 'Movement',
      hoursLabel: 'Carving',
      plateForthcoming: 'Plate forthcoming',
    },
    hands: {
      folio: 'III.',
      label: 'In private hands',
      display: 'The ledger does not close.',
      body:
        'Every clock since 1854 stands in the Werkverzeichnis. Owners may write for the record of their clock — its wood, its felling winter, its hours — at any time. These left the house most recently.',
    },
    familie: {
      folio: 'IV.',
      label: 'Die Familie',
      display: 'Seven generations of one name.',
      body:
        'Since 1854 the Werkverzeichnis has been signed Waldvogel. Matthias carved the first case; Frieda, the fourth, kept the benches working through two wars; Elias, the seventh, signs it today. His daughter Marta, the eighth, already cuts her own fir boughs. No clock leaves this house that a Waldvogel has not held.',
      masterName: 'Elias Waldvogel',
      masterCaption: 'Seventh generation. Master of the house since 2011.',
      masterAlt: 'Portrait of Elias Waldvogel, seventh-generation master clockmaker, at his bench by lantern light',
      handsCaption: 'The chisel is taught before the fountain pen.',
      handsAlt: 'An old clockmaker\'s weathered hands guiding a child\'s hands over a linden carving, one chisel held together, by candlelight',
      apprName: 'Marta Waldvogel',
      apprCaption: 'Eighth generation. Apprenticed to her father since 2019.',
      apprAlt: 'Portrait of Marta Waldvogel, eighth-generation apprentice, examining a small brass movement by lantern light',
      ledgerLabel: 'The masters of the house',
    },
    werkstatt: {
      folio: 'V.',
      label: 'Die Werkstatt',
      display: 'Between three hundred and nine hundred hours.',
      body:
        'A carving begins on paper, then in linden, with chisels ground in this workshop and a mallet worn to the shape of one hand. The relief is cut with the grain of the year-rings, so the shadow falls as it would on a living bough. Nothing is sanded that can be finished by the blade.',
      noteLabel: 'An honest note',
      note:
        'Linden moves. In a first dry winter a hairline may open along the crown of the carving; we cut the relief so that it closes again by spring. This is wood, and it is alive.',
      plateAlt: 'A carver\'s hands guiding a chisel across a linden relief of fir boughs, shavings on the dark bench, lit by one warm light',
      link: 'The craft, at length',
    },
    urkunde: {
      folio: 'VI.',
      label: 'Die Urkunde',
      display: 'No clock leaves without its papers.',
      body:
        'Each clock carries the VdS certificate of the Verein die Schwarzwalduhr — mechanical movement, every essential part made in the Black Forest — and the house\'s own attestation: the wood, its felling winter, the hours of carving, and the master\'s signature.',
      link: 'Why authenticity matters',
    },
    auftrag: {
      folio: 'VII.',
      label: 'Der Auftrag',
      display: 'Commission a clock that does not yet exist.',
      body:
        'A bespoke clock begins with a correspondence and, if the house accepts, an audience — in Schonach or by letter. The carving record is sent monthly. When the clock is ready, a clockmaker of the house travels to hang it, start it, and hear the first call in its own room. We call this the investiture.',
      cta: 'Open a correspondence',
      aside: 'The house accepts three commissions a year.',
    },
    urkundePage: {
      title: 'Die Urkunde — Why authenticity matters · Schwarzwald',
      description:
        'What the VdS certificate means, why mechanical construction matters, why Black Forest origin matters, and what a collector should ask of any cuckoo clock.',
      label: 'Die Urkunde',
      display: 'Why authenticity matters.',
      intro:
        'Most cuckoo clocks sold today are souvenirs. They are not wrong; they are simply not this. This page explains what the papers of this house attest, and what a collector should ask of any clock, wherever it is bought.',
      sections: [
        {
          folio: 'I.',
          head: 'The VdS certificate',
          body: [
            'The Verein die Schwarzwalduhr — the Black Forest Clock Association — certifies one thing, strictly: that a clock is mechanical, and that every essential part of it was made in the Black Forest. No electronics, no imported movement, no carving cast in resin. The certificate exists because the region\'s name is borrowed far more often than it is earned.',
            'Every clock of this house carries the VdS seal. It is the floor beneath our own Urkunde, not the ceiling.',
          ],
        },
        {
          folio: 'II.',
          head: 'Why mechanical matters',
          body: [
            'A battery clock is finished the day it is made. A mechanical clock is only begun: its brass movement asks to be wound, regulated, cleaned, and passed on — and answers with a working life measured in generations. Our movements run eight days to a winding, and every part of them can be made again by hand, which is the true meaning of repairable.',
            'The winding is not a chore. It is the one minute a week in which the clock belongs entirely to you.',
          ],
        },
        {
          folio: 'III.',
          head: 'Why the Black Forest matters',
          body: [
            'The cuckoo clock was not invented as a product; it grew out of winters. Farm families on these slopes carved through the snowed-in months, and by 1850 the school at Furtwangen had given the craft its classical form — the Bahnhäusle, the little house — in the same decade this workshop was founded. The linden that carves cleanest grows on these hills; the craft, the wood, and the weather are one thing.',
            'A cuckoo clock made elsewhere may be a fine object. It is a picture of a clock, the way a print is a picture of a painting.',
          ],
        },
        {
          folio: 'IV.',
          head: 'What this house adds',
          body: [
            'The VdS seal certifies the region. The Urkunde of this house certifies the clock: which stem the wood came from and the winter it was felled, the hours of carving, the caster of the bells where there are bells, and the signature of the master who let it leave. Behind the Urkunde stands the Werkverzeichnis — the ledger kept without a missing entry since 1854. Owners may write for the record of their clock at any time, and their heirs after them.',
          ],
        },
        {
          folio: 'V.',
          head: 'For the collector',
          body: [
            'Whatever house you buy from, ask four things. Is the movement mechanical, and who made it? Does it carry the VdS seal? Is the carving cut from wood, or cast and stained to look like it? And will the maker put the answers in writing, signed? A clock that passes these questions will outlive its first owner. That is the entire point of one.',
          ],
        },
      ],
      close: 'Every dossier in the Kabinett states these papers plainly.',
      closeCta: 'Enter the Kabinett',
    },
    dossier: {
      back: 'The Kabinett',
      recordLabel: 'The craft record',
      specFelling: 'The wood',
      specDimensions: 'Dimensions',
      specMovement: 'Movement',
      specCall: 'The call',
      specHours: 'Carving',
      specPrice: 'Price',
      provenanceLabel: 'Provenance',
      papersLabel: 'Its papers',
      papers:
        'This clock carries the VdS certificate of the Verein die Schwarzwalduhr and the house\'s Urkunde: the wood, its felling winter, the hours of carving, and the signature of Elias Waldvogel.',
      inviteOpen: 'Open to correspondence.',
      inviteOpenBody: 'Write to the house. Replies within three days.',
      invitePromised: 'This clock is promised.',
      invitePromisedBody: 'The Werkverzeichnis does not reopen. The house accepts correspondence for the departures of next year.',
      cta: 'Open a correspondence',
      seal: 'Entered into the Werkverzeichnis of the house, Schonach im Schwarzwald.',
    },
    footer: {
      blurb: 'Uhrenhaus im Schwarzwald. One family, seven generations. Twelve clocks leave the house each year, by correspondence.',
      houseTitle: 'The house',
      houseLinks: [
        { href: '#kabinett', t: 'Das Kabinett' },
        { href: '#werkstatt', t: 'Die Werkstatt' },
        { href: '#urkunde', t: 'Die Urkunde' },
        { href: '#auftrag', t: 'Der Auftrag' },
      ],
      audiencesTitle: 'Audiences',
      audiences: ['Schonach — by appointment', 'The house receives twelve guests a year'],
      corrTitle: 'Correspondence',
      corrLines: ['schreiben@schwarzwald.example', 'Replies within three days'],
      legal: '© 2026 Uhrenhaus Schwarzwald. A fictional house, presented as a design study.',
      legalNote: 'Der Wald hält die Zeit.',
    },
  },
  de: {
    htmlLang: 'de',
    altPath: '/',
    altLabel: 'EN',
    selfLabel: 'DE',
    meta: {
      title: 'Schwarzwald — Uhrenhaus im Schwarzwald, seit 1854',
      description:
        'Eine Familie, sieben Generationen, zwölf Kuckucksuhren im Jahr. Geschnitzt in Schonach im Schwarzwald seit 1854, vergeben auf Korrespondenz.',
    },
    nav: {
      kabinett: 'Kabinett',
      familie: 'Familie',
      werkstatt: 'Werkstatt',
      urkunde: 'Urkunde',
      cta: 'Korrespondenz',
      brandAria: 'Schwarzwald — Startseite',
    },
    hero: {
      label: 'Uhrenhaus · Schonach im Schwarzwald · seit 1854',
      line1: 'Der Wald',
      line2: 'hält die Zeit.',
      body: 'Kuckucksuhren aus der Hand einer Familie, in siebter Generation. Zwölf verlassen das Haus im Jahr — eine für jede Stunde des Zifferblatts.',
      cta1: 'Ins Kabinett',
      cta2: 'Korrespondenz beginnen',
      timeFallback: 'Schonach im Schwarzwald',
      timeBands: ['die Werkstatt schläft', 'an den Bänken wird gearbeitet', 'die Laterne brennt'],
      timePlace: 'Schonach',
    },
    doctrine: {
      folio: 'I.',
      label: 'Das Haus',
      display: 'Wir fertigen keine Uhren. Wir ziehen sie auf.',
      body:
        'Eine Kuckucksuhr ist ein kleines Haus für die Zeit. Unsere werden aus Linde geschnitzt, geschlagen bei abnehmendem Januarmond — Mondholz — und elf Jahre unter dem Dach dieses Hauses getrocknet, ehe ein Eisen sie berührt. Das Werk ist mechanisch, aus Messing, acht Tage je Aufzug. Der Ruf sind zwei Töne, eine fallende kleine Terz, aus zwei Blasebälgen und zwei Tannenpfeifen — so wie seit 1854.',
      facts: [
        { n: 'MDCCCLIV', t: 'Gegründet in Schonach' },
        { n: 'VII', t: 'Generationen einer Familie' },
        { n: 'XII', t: 'Uhren verlassen das Haus im Jahr' },
        { n: 'XI', t: 'Jahre ruht das Holz vor dem Schnitt' },
      ],
      watermark: 'Zeit',
    },
    kabinett: {
      folio: 'II.',
      label: 'Das Kabinett',
      display: 'Zwölf Abschiede im Jahr.',
      body:
        'Die Uhren, die derzeit im Haus stehen. Jede trägt ihre Nummer im Werkverzeichnis — dem Buch, das die Familie seit 1854 ohne eine fehlende Eintragung führt.',
      statusOpen: 'Offen für Korrespondenz',
      statusPromised: 'Versprochen',
      dossier: 'Dossier öffnen',
      woodLabel: 'Holz',
      movementLabel: 'Werk',
      hoursLabel: 'Schnitzarbeit',
      plateForthcoming: 'Tafel folgt',
    },
    hands: {
      folio: 'III.',
      label: 'In privater Hand',
      display: 'Das Verzeichnis schließt nicht.',
      body:
        'Jede Uhr seit 1854 steht im Werkverzeichnis. Eigentümer können jederzeit um den Eintrag ihrer Uhr schreiben — ihr Holz, ihren Schlagwinter, ihre Stunden. Diese verließen das Haus zuletzt.',
    },
    familie: {
      folio: 'IV.',
      label: 'Die Familie',
      display: 'Sieben Generationen, ein Name.',
      body:
        'Seit 1854 trägt das Werkverzeichnis die Unterschrift Waldvogel. Matthias schnitzte das erste Gehäuse; Frieda, die vierte, hielt die Bänke durch zwei Kriege am Werk; Elias, der siebte, unterschreibt heute. Seine Tochter Marta, die achte, schneidet bereits ihre eigenen Tannenzweige. Keine Uhr verlässt dieses Haus, die kein Waldvogel gehalten hat.',
      masterName: 'Elias Waldvogel',
      masterCaption: 'Siebte Generation. Meister des Hauses seit 2011.',
      masterAlt: 'Porträt von Elias Waldvogel, Uhrmachermeister in siebter Generation, an seiner Werkbank im Laternenlicht',
      handsCaption: 'Das Eisen wird vor dem Füllfederhalter gelehrt.',
      handsAlt: 'Die verwitterten Hände eines alten Uhrmachers führen die Hände eines Kindes über eine Lindenschnitzerei, ein gemeinsam gehaltenes Eisen, bei Kerzenlicht',
      apprName: 'Marta Waldvogel',
      apprCaption: 'Achte Generation. In der Lehre bei ihrem Vater seit 2019.',
      apprAlt: 'Porträt von Marta Waldvogel, Lehrling in achter Generation, ein kleines Messingwerk im Laternenlicht prüfend',
      ledgerLabel: 'Die Meister des Hauses',
    },
    werkstatt: {
      folio: 'V.',
      label: 'Die Werkstatt',
      display: 'Zwischen dreihundert und neunhundert Stunden.',
      body:
        'Eine Schnitzerei beginnt auf Papier, dann in der Linde, mit Eisen, die in dieser Werkstatt geschliffen werden, und einem Klüpfel, den eine Hand geformt hat. Das Relief wird mit den Jahresringen geschnitten, damit der Schatten fällt wie auf einem lebenden Ast. Nichts wird geschliffen, was die Klinge vollenden kann.',
      noteLabel: 'Eine ehrliche Anmerkung',
      note:
        'Linde arbeitet. Im ersten trockenen Winter kann sich am Scheitel der Schnitzerei ein Haarriss öffnen; wir schneiden das Relief so, dass er sich zum Frühjahr wieder schließt. Das ist Holz, und es lebt.',
      plateAlt: 'Die Hände eines Schnitzers führen das Eisen über ein Lindenrelief aus Tannenzweigen, Späne auf der dunklen Werkbank, ein warmes Licht',
      link: 'Das Handwerk, ausführlich',
    },
    urkunde: {
      folio: 'VI.',
      label: 'Die Urkunde',
      display: 'Keine Uhr verlässt das Haus ohne ihre Papiere.',
      body:
        'Jede Uhr trägt das VdS-Zertifikat des Vereins die Schwarzwalduhr — mechanisches Werk, alle wesentlichen Teile aus dem Schwarzwald — und die Urkunde des Hauses: das Holz, sein Schlagwinter, die Stunden der Schnitzarbeit und die Unterschrift des Meisters.',
      link: 'Warum Echtheit zählt',
    },
    auftrag: {
      folio: 'VII.',
      label: 'Der Auftrag',
      display: 'Geben Sie eine Uhr in Auftrag, die es noch nicht gibt.',
      body:
        'Eine Auftragsuhr beginnt mit einer Korrespondenz und, wenn das Haus annimmt, mit einer Audienz — in Schonach oder brieflich. Der Schnitzbericht geht Ihnen monatlich zu. Ist die Uhr vollendet, reist ein Uhrmacher des Hauses, um sie zu hängen, aufzuziehen und den ersten Ruf in ihrem Zimmer zu hören. Wir nennen das die Investitur.',
      cta: 'Korrespondenz beginnen',
      aside: 'Das Haus nimmt drei Aufträge im Jahr an.',
    },
    urkundePage: {
      title: 'Die Urkunde — Warum Echtheit zählt · Schwarzwald',
      description:
        'Was das VdS-Zertifikat bedeutet, warum ein mechanisches Werk zählt, warum die Herkunft aus dem Schwarzwald zählt — und was ein Sammler von jeder Kuckucksuhr verlangen sollte.',
      label: 'Die Urkunde',
      display: 'Warum Echtheit zählt.',
      intro:
        'Die meisten Kuckucksuhren, die heute verkauft werden, sind Andenken. Sie sind nicht falsch; sie sind nur nicht dies. Diese Seite erklärt, was die Papiere dieses Hauses bezeugen — und was ein Sammler von jeder Uhr verlangen sollte, wo immer er sie kauft.',
      sections: [
        {
          folio: 'I.',
          head: 'Das VdS-Zertifikat',
          body: [
            'Der Verein die Schwarzwalduhr zertifiziert eine Sache, streng: dass eine Uhr mechanisch ist und dass jedes wesentliche Teil im Schwarzwald gefertigt wurde. Keine Elektronik, kein importiertes Werk, keine in Harz gegossene Schnitzerei. Das Zertifikat existiert, weil der Name der Region weit öfter geliehen als verdient wird.',
            'Jede Uhr dieses Hauses trägt das VdS-Siegel. Es ist der Boden unter unserer eigenen Urkunde, nicht die Decke.',
          ],
        },
        {
          folio: 'II.',
          head: 'Warum ein mechanisches Werk zählt',
          body: [
            'Eine Batterieuhr ist fertig an dem Tag, an dem sie gebaut wird. Eine mechanische Uhr fängt erst an: Ihr Messingwerk will aufgezogen, reguliert, gereinigt und weitergegeben werden — und antwortet mit einem Arbeitsleben, das in Generationen gemessen wird. Unsere Werke laufen acht Tage je Aufzug, und jedes ihrer Teile kann von Hand neu gefertigt werden. Das ist die wahre Bedeutung von reparierbar.',
            'Das Aufziehen ist keine Pflicht. Es ist die eine Minute in der Woche, in der die Uhr ganz Ihnen gehört.',
          ],
        },
        {
          folio: 'III.',
          head: 'Warum der Schwarzwald zählt',
          body: [
            'Die Kuckucksuhr wurde nicht als Produkt erfunden; sie ist aus Wintern gewachsen. Bauernfamilien an diesen Hängen schnitzten durch die eingeschneiten Monate, und um 1850 gab die Schule in Furtwangen dem Handwerk seine klassische Form — das Bahnhäusle —, im selben Jahrzehnt, in dem diese Werkstatt gegründet wurde. Die Linde, die sich am reinsten schneidet, wächst auf diesen Höhen; das Handwerk, das Holz und das Wetter sind ein und dasselbe.',
            'Eine anderswo gebaute Kuckucksuhr mag ein feines Objekt sein. Sie ist das Bild einer Uhr, wie ein Druck das Bild eines Gemäldes ist.',
          ],
        },
        {
          folio: 'IV.',
          head: 'Was dieses Haus hinzufügt',
          body: [
            'Das VdS-Siegel bezeugt die Region. Die Urkunde dieses Hauses bezeugt die Uhr: aus welchem Stamm das Holz kam und in welchem Winter er geschlagen wurde, die Stunden der Schnitzarbeit, den Gießer der Glocken, wo Glocken sind, und die Unterschrift des Meisters, der sie gehen ließ. Hinter der Urkunde steht das Werkverzeichnis — das Buch, das seit 1854 ohne eine fehlende Eintragung geführt wird. Eigentümer können jederzeit um den Eintrag ihrer Uhr schreiben, und ihre Erben nach ihnen.',
          ],
        },
        {
          folio: 'V.',
          head: 'Für den Sammler',
          body: [
            'Von welchem Haus Sie auch kaufen — fragen Sie vier Dinge. Ist das Werk mechanisch, und wer hat es gebaut? Trägt die Uhr das VdS-Siegel? Ist die Schnitzerei aus Holz geschnitten oder gegossen und auf Holz gebeizt? Und legt der Hersteller die Antworten schriftlich vor, unterschrieben? Eine Uhr, die diese Fragen besteht, wird ihren ersten Eigentümer überleben. Das ist der ganze Sinn einer solchen Uhr.',
          ],
        },
      ],
      close: 'Jedes Dossier im Kabinett nennt diese Papiere ausdrücklich.',
      closeCta: 'Ins Kabinett',
    },
    dossier: {
      back: 'Das Kabinett',
      recordLabel: 'Der Werkbericht',
      specFelling: 'Das Holz',
      specDimensions: 'Maße',
      specMovement: 'Werk',
      specCall: 'Der Ruf',
      specHours: 'Schnitzarbeit',
      specPrice: 'Preis',
      provenanceLabel: 'Provenienz',
      papersLabel: 'Ihre Papiere',
      papers:
        'Diese Uhr trägt das VdS-Zertifikat des Vereins die Schwarzwalduhr und die Urkunde des Hauses: das Holz, sein Schlagwinter, die Stunden der Schnitzarbeit und die Unterschrift von Elias Waldvogel.',
      inviteOpen: 'Offen für Korrespondenz.',
      inviteOpenBody: 'Schreiben Sie dem Haus. Antwort binnen drei Tagen.',
      invitePromised: 'Diese Uhr ist versprochen.',
      invitePromisedBody: 'Das Werkverzeichnis öffnet sich nicht erneut. Das Haus nimmt Korrespondenz für die Abschiede des nächsten Jahres an.',
      cta: 'Korrespondenz beginnen',
      seal: 'Eingetragen ins Werkverzeichnis des Hauses, Schonach im Schwarzwald.',
    },
    footer: {
      blurb: 'Uhrenhaus im Schwarzwald. Eine Familie, sieben Generationen. Zwölf Uhren verlassen das Haus im Jahr, auf Korrespondenz.',
      houseTitle: 'Das Haus',
      houseLinks: [
        { href: '#kabinett', t: 'Das Kabinett' },
        { href: '#werkstatt', t: 'Die Werkstatt' },
        { href: '#urkunde', t: 'Die Urkunde' },
        { href: '#auftrag', t: 'Der Auftrag' },
      ],
      audiencesTitle: 'Audienzen',
      audiences: ['Schonach — nach Vereinbarung', 'Das Haus empfängt zwölf Gäste im Jahr'],
      corrTitle: 'Korrespondenz',
      corrLines: ['schreiben@schwarzwald.example', 'Antwort binnen drei Tagen'],
      legal: '© 2026 Uhrenhaus Schwarzwald. Ein fiktives Haus, vorgestellt als Designstudie.',
      legalNote: 'Der Wald hält die Zeit.',
    },
  },
} as const;
