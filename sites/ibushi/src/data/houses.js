/* The four houses, written out. Everything here is real: the typologies, the
 * places, the pitches, the reasons. What is invented is Ibushi's own record of
 * having worked on them. */

export const HOUSE_PAGES = {
  noka: {
    thesis: "One room around a fire, and an earth floor you could work in.",
    place: "The Hida basin — Furukawa, Kamioka, and the valleys above them",
    img: "noka-ext",
    alt: "A traditional farmhouse in a Hida valley: a long low building under a very deep hipped-gable thatched roof, pale earth-plaster walls with dark timber posts, terraced rice fields in front and cedar-forested mountains behind.",
    lede: "The default house of rural Japan, and the one the other three are variations on. A nōka is organised entirely around two things: the earth floor where the work happened, and the fire the family sat around when it stopped.",
    body: [
      {
        h: "The plan is a working plan",
        p: [
          "A nōka of any size divides into a doma and a raised floor, and the ratio between them tells you what the household actually did. A silk-raising house needs less earth floor and more storey; a rice household needs a doma big enough to thresh in. In the Hida basin the common arrangement is the yomadori — four rooms in a two-by-two block on the raised side, with the doma running across the front.",
          "The four rooms are not equal. The one nearest the doma, with the irori in it, is the room the family lives in. Behind it are the zashiki, the formal room with the tokonoma, and the sleeping rooms. Depth equals privacy, and the fusuma between them come out entirely when the house needs to be one hall.",
        ],
      },
      {
        h: "The roof is hipped, and that is a compromise",
        p: [
          "Most Hida nōka carry an irimoya roof — hipped at the bottom, gabled at the top. The gable gives the attic a vent for the hearth smoke to leave by; the hips shed weather off the corners where a pure gable would let it in. A 10-sun kōbai, about forty-five degrees, is the working figure: steep enough to shed rain fast, shallow enough that a thatcher can stand on it.",
          "Under the thatch the frame is not fastened to the roof. The kaya sits on a lattice of bamboo and pole, tied, and can be stripped and replaced without touching a joint of the structure below it. A roof is a consumable. The house is not.",
        ],
      },
      {
        h: "What we do to them",
        p: [
          "Most of our nōka work is revival: a house that has stood empty for fifteen or twenty years, with the fire out. The order is almost always the same — get the roof watertight, get a fire lit, then take a year to find out what the frame has actually lost before cutting anything.",
          "The commonest failure is not the thatch. It is the sill and the bottom of the posts on the north and west sides, where snow lies against the wall all winter. That is repaired by scarfing in new timber at the foot of the post — a nemaki-tsugi — with the house jacked and standing.",
        ],
      },
    ],
    facts: [
      ["Typical size", "4 × 6 ken · 24 tsubo"],
      ["Kōbai", "10 sun · 45°"],
      ["Roof", "Kaya thatch, irimoya (hipped-gable)"],
      ["Thatch depth", "18 sun · 550 mm"],
      ["Re-thatch cycle", "30 – 40 years, smoked"],
      ["Walls", "Earth plaster over bamboo lath"],
    ],
  },

  gyoka: {
    thesis: "Built low, because the wind is the enemy and not the cold.",
    place: "The Noto shore and the Sea of Japan coast, two hours over the pass",
    img: "gyoka-ext",
    alt: "A fisherman's house on a cold Japanese coast: a low building clad in charred black cedar boards, low-pitched thatched roof weighted along the ridge with rows of grey stones, nets and floats on a rack outside.",
    lede: "A fishing household's house is a nōka that has been argued with by the sea. Everything that sticks up gets taken by the wind, everything that faces the weather gets eaten by salt, and the answers to both are visible from the road.",
    body: [
      {
        h: "The roof is held down, not just held up",
        p: [
          "A steep roof on an exposed shore is a sail. Coastal houses drop the pitch — 8 sun and under, well below the inland figure — and shorten the eave, because a deep overhang in a gale becomes a lever trying to lift the roof off the wall plate.",
          "Then the ridge is weighted. Rows of rounded beach stones are laid along the mune, and along the exposed slope, to hold the thatch against uplift. It is the plainest engineering on any Japanese building and it is entirely effective.",
        ],
      },
      {
        h: "The cladding is burnt on purpose",
        p: [
          "Yakisugi 焼杉 is cedar board charred on one face until a layer of carbon forms, then cooled and brushed. The char is not decorative. It is a sacrificial surface that salt spray, insects, and fungus do not attack, and it buys a coastal wall fifty or eighty years where bare cedar would give twenty.",
          "It is also why a gyoka reads black at the wall and gold at the roof — a division you will not see inland, and one of the fastest ways to place a Japanese house by looking at it.",
        ],
      },
      {
        h: "The doma is bigger, and it is wet",
        p: [
          "A fishing household brings its work indoors more than a farming one: nets to mend and dry, lines to coil, gear to store out of the salt. The earth floor runs to nearly half the plan, and there is usually a loft over part of it for net storage, reached by a fixed ladder.",
          "The irori sits closer to the doma edge than in a nōka, because the fire is doing double duty — heating the family and drying the gear.",
        ],
      },
    ],
    facts: [
      ["Typical size", "3 × 5 ken · 15 tsubo"],
      ["Kōbai", "8 sun · 38.7° — deliberately low"],
      ["Roof", "Kaya thatch, ridge weighted with stone"],
      ["Cladding", "Yakisugi — charred cedar board"],
      ["Eave", "Shortened, to deny the wind a lever"],
      ["Doma", "Up to 45% of the plan, with a net loft"],
    ],
  },

  machiya: {
    thesis: "Frontage was taxed, so the merchant built backwards.",
    place: "The Sanmachi quarter of Takayama, forty minutes south",
    img: "machiya-ext",
    alt: "A traditional merchant townhouse street front: narrow frontage of dark cedar vertical lattice, deep overhanging eaves with grey ceramic tiles, a low second storey with slatted windows, wet stone street in early morning.",
    lede: "The townhouse is the only one of the four shaped by a tax rather than by weather. Street frontage was assessed, so a merchant bought two or three ken of it and ran twelve or eighteen ken back. Kyoto's name for the result is unagi no nedoko — an eel's bed.",
    body: [
      {
        h: "The corridor is the house",
        p: [
          "A machiya has no hallway; it has a tōriniwa 通り庭 — an earth-floored corridor running the full depth of the building from the street door to the store at the back. Everything opens off it. Goods come down it, water comes down it, and the family crosses it a hundred times a day.",
          "Over the kitchen end of the tōriniwa the ceiling simply stops. A hibukuro 火袋 — a 'fire bag' — opens the full height of the building to the roof, with a vent at the top. It takes the smoke and heat of the kamado out of a deep plan that has no other way to breathe, and it drops a shaft of daylight onto the darkest part of the floor.",
        ],
      },
      {
        h: "A lattice you can read",
        p: [
          "The street face is kōshi 格子 — vertical cedar lattice. The spacing and profile were not free choices: a sake merchant's lattice, a thread merchant's lattice, and a rice dealer's lattice were different, and a customer knew the trade before reading a sign, which is useful in a town where most people could not.",
          "Above it sits the tsushi-nikai, a half-storey with small slatted windows. In castle towns the second storey was kept low so that no merchant looked down on a passing lord. The restriction outlived the reason and became the look.",
        ],
      },
      {
        h: "Light comes from the middle",
        p: [
          "A building three ken wide and fourteen deep has one street face and one back wall and no other way to get daylight or air into the centre. The answer is the tsuboniwa 坪庭 — a courtyard garden of a few square metres cut out of the middle of the plan, often with one stone, one lantern, and moss.",
          "It is a piece of climate engineering wearing a garden's clothes. Cool air sits in the shaded courtyard, and as the tōriniwa heats the courtyard draws it through — the deepest rooms get a through-draught in a plan that should have none.",
        ],
      },
    ],
    facts: [
      ["Typical size", "3 × 12 ken · 36 tsubo"],
      ["Kōbai", "4.5 sun · 24.2° — tile, not thatch"],
      ["Roof", "Kawara tile, deep eaves"],
      ["Street face", "Kōshi lattice, trade-specific"],
      ["Second storey", "Tsushi-nikai — a low half-floor"],
      ["Ventilation", "Hibukuro smoke-well + tsuboniwa courtyard"],
    ],
  },

  gassho: {
    thesis: "A roof steep enough to shed two metres of snow, tied so it can bend.",
    place: "Shirakawa-gō and Gokayama, over the pass",
    img: "gassho-ext",
    alt: "A gasshō-zukuri farmhouse in deep snow: an enormous steeply pitched thatched gable roof at about sixty degrees, three storeys tall, with small windows in the triangular gable end.",
    lede: "Gasshō-zukuri means 'built like hands in prayer', and the name is a description of the gable: two enormous rafter planes leaning against each other at around sixty degrees. It is the most extreme minka and the one that most obviously earns its shape.",
    body: [
      {
        h: "The pitch is a snow calculation",
        p: [
          "Shirakawa-gō takes two metres of snow and more. At forty-five degrees that load stays on the roof; at sixty it slides. The roof is pitched past the angle of repose of wet snow and then kept smooth, so it sheds itself before the weight can reach the frame.",
          "The gable ends are oriented almost universally north–south along the valley. That gives both roof planes even sun through the day so the snow melts off at the same rate on both sides, and it presents the narrow gable to the valley wind rather than the broad slope.",
        ],
      },
      {
        h: "No nails, so it can move",
        p: [
          "The roof structure is a separate thing from the house below it — a triangular truss of raw pine and chestnut, lashed together with straw rope and neso ねそ, withes of witch-hazel soaked and twisted. Not one metal fastener.",
          "This is not primitivism, it is engineering. A rigid nailed joint under wind and snow load concentrates stress and eventually splits the timber. A lashed joint has give: the whole roof deforms slightly, distributes the load, and springs back. The lashings are re-tensioned at re-thatch.",
        ],
      },
      {
        h: "The roof was the business",
        p: [
          "That vast triangular void is not attic. It is three or four working floors of slatted decking, and they were used for sericulture — raising silkworms. Warm air and smoke from the irori rise straight into it, which is exactly the environment silkworms need, and the smoke keeps the pests off both the worms and the frame.",
          "So the household heated the house, cured the timber, dried the thatch, and ran a second industry, all from one fire. That is why these houses are as large as they are: the roof paid for itself.",
        ],
      },
      {
        h: "Yui — forty people and one day",
        p: [
          "A gasshō roof holds something on the order of ten thousand bundles of kaya, and it needs re-thatching roughly every thirty to forty years — one slope at a time. No household could do it alone, and none was expected to.",
          "Yui 結い is the mutual-aid system that did it: the village turned out, stripped and re-laid one slope in a single day, and the household fed everyone. The obligation was recorded and returned when it was someone else's turn. It is the reason these villages survived as villages, and we still work to it — we bring the scaffold, the grading, and the ridge, and the village brings the hands.",
        ],
      },
    ],
    facts: [
      ["Typical size", "5 × 10 ken · 50 tsubo"],
      ["Kōbai", "17.3 sun · 60°"],
      ["Storeys", "1 living + 3 silkworm floors in the roof"],
      ["Roof", "Kaya thatch, 23 sun deep"],
      ["Fastenings", "None — straw rope and neso withes"],
      ["Re-thatch", "One slope in a day, by yui"],
    ],
  },
};
