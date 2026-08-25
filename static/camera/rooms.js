/* Dati camere — un solo motore, contenuti intercambiabili. */
const U = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w || 1800}&q=80`;

const AMENITIES = [
  {
    aria: "Apri scheda Letto",
    kicker: "Riposo",
    title: "Letto matrimoniale 160",
    text: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.",
    pin: "icon1",
  },
  {
    aria: "Apri scheda Bagno",
    kicker: "Privato",
    title: "Bagno con doccia",
    text: "Bagno interno alla camera, doccia walk-in, set cortesia e phon.",
    pin: "icon2",
  },
  {
    aria: "Apri scheda Colazione",
    kicker: "Inclusa",
    title: "Colazione servita",
    text: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.",
    pin: "icon3",
  },
  {
    aria: "Apri scheda Connettività",
    kicker: "Comfort",
    title: "Wi-Fi e smart TV",
    text: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.",
    pin: "icon1",
  },
  {
    aria: "Apri scheda Parcheggio",
    kicker: "Servizi",
    title: "Parcheggio interno",
    text: "Posto auto riservato nel cortile, senza costi aggiuntivi.",
    pin: "icon2",
  },
];

const BASE_LAYERS = {
  back: U("photo-1631049307264-da0ec9d70304"),
  lightwash: U("photo-1505692952047-1a78307da8f2", 1400),
  furniture: U("photo-1600607687939-ce8a6c25118c"),
  doorLeft: U("photo-1600585154340-be6161a56a0c"),
  doorRight: U("photo-1600585154340-be6161a56a0c"),
  bed: U("photo-1616594039964-3d0f2d4e7ce0"),
  detail: U("photo-1620626011761-996317b8d101"),
};

const ROOMS = {
  family: {
    slug: "family",
    name: "FAMILY",
    intro:
      "Si entra in una stanza al primo piano: la luce del mattino sul parquet e il silenzio del cortile interno.",
    tags: ["Vista giardino", "Bagno privato", "26 m²"],
    layers: BASE_LAYERS,
    facts: [
      { dt: "26 m²", dd: "Superficie con affaccio sul giardino" },
      { dt: "4+1", dd: "Ospiti, con letto aggiunto su richiesta" },
    ],
    amenities: AMENITIES,
    bookingUrl: "/contatti",
  },
  comfort: {
    slug: "comfort",
    name: "COMFORT",
    intro:
      "Una stanza raccolta affacciata sul cortile, con la luce che entra bassa e calda fino a metà pomeriggio.",
    tags: ["Vista cortile", "Bagno privato", "20 m²"],
    layers: BASE_LAYERS,
    facts: [
      { dt: "20 m²", dd: "Superficie con affaccio sul cortile" },
      { dt: "2+1", dd: "Ospiti, con letto aggiunto su richiesta" },
    ],
    amenities: AMENITIES,
    bookingUrl: "/contatti",
  },
  basic: {
    slug: "basic",
    name: "GLICINE",
    intro:
      "Una stanza essenziale al primo piano: legno, lino chiaro e la finestra sul glicine del cortile.",
    tags: ["Vista giardino", "Bagno privato", "18 m²"],
    layers: BASE_LAYERS,
    facts: [
      { dt: "18 m²", dd: "Superficie con affaccio sul giardino" },
      { dt: "2+1", dd: "Ospiti, con letto aggiunto su richiesta" },
    ],
    amenities: AMENITIES,
    bookingUrl: "/contatti",
  },
};

window.ROOMS = ROOMS;
