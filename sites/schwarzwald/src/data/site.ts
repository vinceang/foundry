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
        'One family, seven generations, eight cuckoo clocks a year. Carved in Schonach im Schwarzwald since 1854, released by correspondence.',
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
      body: 'Cuckoo clocks raised by one family for seven generations. Eight leave the house each year.',
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
        { n: 'VIII', t: 'Clocks leave the house each year' },
        { n: 'XI', t: 'Years the wood rests before carving' },
      ],
      watermark: 'Zeit',
    },
    kabinett: {
      folio: 'II.',
      label: 'Das Kabinett',
      display: 'Eight departures a year.',
      body:
        'The clocks currently in the house. Each carries its Werkverzeichnis number — the ledger the family has kept, without a missing entry, since 1854.',
      statusOpen: 'Open to correspondence',
      statusPromised: 'Promised',
      dossier: 'Request the dossier',
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
    footer: {
      blurb: 'Uhrenhaus im Schwarzwald. One family, seven generations. Eight clocks leave the house each year, by correspondence.',
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
        'Eine Familie, sieben Generationen, acht Kuckucksuhren im Jahr. Geschnitzt in Schonach im Schwarzwald seit 1854, vergeben auf Korrespondenz.',
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
      body: 'Kuckucksuhren aus der Hand einer Familie, in siebter Generation. Acht verlassen das Haus im Jahr.',
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
        { n: 'VIII', t: 'Uhren verlassen das Haus im Jahr' },
        { n: 'XI', t: 'Jahre ruht das Holz vor dem Schnitt' },
      ],
      watermark: 'Zeit',
    },
    kabinett: {
      folio: 'II.',
      label: 'Das Kabinett',
      display: 'Acht Abschiede im Jahr.',
      body:
        'Die Uhren, die derzeit im Haus stehen. Jede trägt ihre Nummer im Werkverzeichnis — dem Buch, das die Familie seit 1854 ohne eine fehlende Eintragung führt.',
      statusOpen: 'Offen für Korrespondenz',
      statusPromised: 'Versprochen',
      dossier: 'Dossier anfragen',
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
    footer: {
      blurb: 'Uhrenhaus im Schwarzwald. Eine Familie, sieben Generationen. Acht Uhren verlassen das Haus im Jahr, auf Korrespondenz.',
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
