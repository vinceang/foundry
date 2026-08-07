// An Tùr — nine points into the instrument.
//
// Each opens a dialog per commitment 10: not a bigger picture, but the record.
// Every entry carries the trade's name, the Gaelic, the plain English, its
// real numbers, and what a keeper actually did with it at two in the morning —
// because that last field is the one that makes the enlargement worth opening.

export const TOWER = [
  {
    key: "aileadair",
    no: 1,
    ga: "An t-àileadair",
    trade: "Ventilator and cowl",
    en: "The chimney of the lantern",
    specs: [
      ["Draught", "One paraffin burner used 4.5 litres a night"],
      ["Function", "Carries off heat and combustion products"],
      ["Weathervane", "The cowl turns with the wind so it never back-draughts"],
    ],
    line: "A lantern is a stove with a lens in it. Before electricity the burner ate oxygen and made soot, and if the cowl jammed the panes blackened in a night. The first job of every watch was to look up at it.",
  },
  {
    key: "astragail",
    no: 2,
    ga: "Na h-astragail",
    trade: "Astragals",
    en: "The glazing bars",
    specs: [
      ["Set", "Diagonally, not vertically"],
      ["Panes", "Curved storm glass, 12 mm"],
      ["Why", "A diagonal bar can never hide the beam from one bearing"],
    ],
    line: "Vertical bars would throw a permanent dark stripe out to sea on a fixed bearing, and a ship on that bearing would lose the light entirely. Set diagonally, the shadow sweeps and no bearing is ever blind. It is the most consequential detail on the tower and almost nobody notices it.",
  },
  {
    key: "lionsa",
    no: 3,
    ga: "An lionsa",
    trade: "First-order dioptric optic",
    en: "The lens",
    specs: [
      ["Focal distance", "920 mm"],
      ["Height", "2.6 m"],
      ["Panels", "Two, giving the group of two"],
      ["Made", "Barbier & Fenestre, Paris, 1901"],
    ],
    line: "It is not a lens so much as a building made of glass rings, each ground to bend light from one lamp into a flat sheet. The two panels are why the character is Fl(2): the flashes are not the lamp blinking — the lamp never blinks. It is the glass going past.",
  },
  {
    key: "lampa",
    no: 4,
    ga: "An lampa",
    trade: "Burner, then lamp",
    en: "The light itself",
    specs: [
      ["1857", "Argand oil, ten wicks"],
      ["1904", "Paraffin vapour, incandescent mantle"],
      ["1961", "Electric, 1 500 W"],
      ["Now", "250 W metal halide, on a changer"],
    ],
    line: "The lamp has been replaced four times and the glass around it never has. The changer holds a spare and swaps it in under a minute if the first fails — which is most of the reason nobody has to live here any more.",
  },
  {
    key: "amar",
    no: 5,
    ga: "An t-amar airgid-beò",
    trade: "Mercury bath",
    en: "What the optic floats on",
    specs: [
      ["Mercury", "250 kg"],
      ["Load", "The whole optic, about 3 tonnes"],
      ["Friction", "Low enough to turn it by hand with one finger"],
    ],
    line: "Three tonnes of glass and brass floating on a shallow trough of mercury. You could set the whole thing turning with one finger, and it is the reason a falling weight was enough to drive it. Also the reason the room is ventilated and nobody eats in it.",
  },
  {
    key: "gailearaidh",
    no: 6,
    ga: "An gailearaidh",
    trade: "Gallery",
    en: "The walkway outside",
    specs: [
      ["Height", "34 m above the rock"],
      ["Rail", "Wrought iron, 1857, original"],
      ["Job", "Cleaning the outside of the panes"],
    ],
    line: "Salt films the glass in a fortnight and dulls the light long before anyone at sea notices. Keepers went out there in whatever the weather was, on a rail their great-grandfathers had installed, because the alternative was a light that quietly stopped being 24 miles.",
  },
  {
    key: "seomar",
    no: 7,
    ga: "An seòmar-frithealaidh",
    trade: "Service room",
    en: "The room below the lantern",
    specs: [
      ["Contents", "Spare mantles, wicks, cotton waste, the log"],
      ["Also", "A chair, and a kettle that was not allowed"],
    ],
    line: "The last warm room before the lantern, and where the log was written up. Every entry in 131 years was made standing at that shelf: the hour, the weather, the visibility, and whether the light burned clean.",
  },
  {
    key: "gleoc",
    no: 8,
    ga: "An gleoc",
    trade: "Clockwork and weight tube",
    en: "What turned the light",
    specs: [
      ["Drive", "A falling weight in a tube down the tower"],
      ["Rewind", "Every 30 minutes, all night"],
      ["Drop", "18 m"],
    ],
    line: "The whole character — two flashes every twenty seconds — was produced by a weight falling slowly down the middle of the tower, exactly like a longcase clock. It had to be wound back up every half hour, all night, every night, by a man who had to stay awake to do it. That is what a watch actually was.",
  },
  {
    key: "staidhre",
    no: 9,
    ga: "An staidhre",
    trade: "Spiral stair",
    en: "Ninety-six steps",
    specs: [
      ["Steps", "96"],
      ["Material", "Granite, cantilevered into the wall"],
      ["Wear", "Deepest on the outer third"],
    ],
    line: "Ninety-six steps, climbed at least twice a watch and often ten times. They are worn on the outer third rather than the middle, because a man carrying oil in one hand keeps his weight to the wall side. You can still see it, and you will feel where to walk within a day of arriving.",
  },
];

export const towerByKey = (k) => TOWER.find((t) => t.key === k);

/** The house. Same dialog component, so the rooms open the same way. */
export const ROOMS = [
  {
    key: "seomar-suidhe",
    no: 1,
    ga: "An seòmar-suidhe",
    trade: "Sitting room",
    en: "Facing the light",
    specs: [
      ["Window", "11 m above the sea"],
      ["Heat", "Open fire; coal and peat in the shed"],
      ["Faces", "West, at the tower"],
    ],
    line: "The reason the house is worth a week. The tower is 40 m away through the window and the beam goes over the roof, not through it — so what you see from the sofa is the sea lighting up twice, not the lamp.",
  },
  {
    key: "cidsin",
    no: 2,
    ga: "An cidsin",
    trade: "Kitchen",
    en: "The original range",
    specs: [
      ["Range", "Solid fuel, 1930s, still the only cooker"],
      ["Water", "Spring-fed, filtered, hard"],
      ["Nearest shop", "11 miles"],
    ],
    line: "The range takes about ninety minutes to come up to temperature, which is the single most important fact about staying here. People who arrive at seven and want dinner at eight have a bad first night and a good rest of the week.",
  },
  {
    key: "seomar-cadail",
    no: 3,
    ga: "An seòmar-cadail",
    trade: "The two bedrooms",
    en: "Sleeps four",
    specs: [
      ["Beds", "One double, two singles"],
      ["Walls", "600 mm, lime-plastered"],
      ["Curtains", "There are none, deliberately"],
    ],
    line: "There are no curtains in the west bedroom and we will not fit any. Every twenty seconds a band of light crosses the ceiling from the window to the door. Most people take two nights to stop noticing it and then miss it when they go home.",
  },
  {
    key: "sabhal",
    no: 4,
    ga: "An sabhal",
    trade: "The store",
    en: "Boots, oilskins, the drying room",
    specs: [
      ["Was", "The paraffin store, 1857–1961"],
      ["Now", "Drying room, always warm"],
      ["Floor", "Still stained; it always will be"],
    ],
    line: "The only room in the house that is heated whether you want it or not, because the pipe from the range runs through it. It smells faintly of paraffin after a hundred years and everyone comments on it by the second day.",
  },
];

export const roomByKey = (k) => ROOMS.find((r) => r.key === k);
