export type RoomAmenity = {
  kicker: { it: string; en: string };
  title: { it: string; en: string };
  body: { it: string; en: string };
};

export type RoomEntranceData = {
  slug: string;
  /** Titolo display. Va bene fino a ~13 caratteri; oltre, usa titleBreak. */
  title: string;
  /** Se presente, il titolo va a capo qui (es. ["COMFORT", "SUITE"]). */
  titleLines?: string[];
  intro: { it: string; en: string };
  /** Le tre pill sotto l'intro. */
  tags: { it: string; en: string }[];
  /** Pannello 1, compare mentre la porta si apre. */
  panelBed: {
    heading: { it: string; en: string };
    body: { it: string; en: string };
    facts: { dt: string; dd: { it: string; en: string } }[];
  };
  /** Pannello 2, compare sul dettaglio ravvicinato. */
  panelServices: {
    heading: { it: string; en: string };
    body: { it: string; en: string };
  };
  amenities: RoomAmenity[];
  images: {
    /**
     * FOTO DELLA SOGLIA. Va scattata dal corridoio, in piedi sulla porta,
     * inquadrando lo stipite. Viene tagliata a metà via clip-path e le due
     * ante si aprono: se la foto non ha una simmetria centrale credibile
     * l'effetto non regge. È l'unica immagine che vale la pena rifare apposta.
     */
    doorway: string;
    /** La camera, full bleed. Zooma per tutta la durata: serve alta risoluzione. */
    room: string;
    /** Dettaglio ravvicinato: bagno, poltrona, scrittoio. */
    detail: string;
  };
};

const u = (id: string, w = 2200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/**
 * NOTA: le immagini qui sotto sono quelle già presenti nel progetto (Unsplash).
 * Sono segnaposto. In particolare `doorway` non è una vera foto di soglia:
 * finché non la sostituisci, l'apertura delle ante funziona ma non "legge"
 * come una porta.
 */
export const roomEntrances: Record<string, RoomEntranceData> = {
  family: {
    slug: "family",
    title: "FAMILY SUITE",
    titleLines: ["FAMILY", "SUITE"],
    intro: {
      it: "Due ambienti al primo piano, la luce del mattino sul parquet e lo spazio per non pestarsi i piedi in quattro.",
      en: "Two rooms on the first floor, morning light across the parquet, and enough space for four without stepping on each other.",
    },
    tags: [
      { it: "4 ospiti", en: "4 guests" },
      { it: "80 € a notte", en: "€80 per night" },
      { it: "Bagno privato", en: "Private bathroom" },
    ],
    panelBed: {
      heading: {
        it: "Lo spazio comincia dal letto.",
        en: "The room begins at the bed.",
      },
      body: {
        it: "Matrimoniale e letto singolo separati da una quinta in legno, così chi dorme prima non resta sveglio.",
        en: "A double and a single divided by a wooden partition, so whoever turns in first actually sleeps.",
      },
      facts: [
        { dt: "32 m²", dd: { it: "Superficie su due ambienti", en: "Across two rooms" } },
        { dt: "4", dd: { it: "Ospiti, letto aggiuntivo incluso", en: "Guests, extra bed included" } },
      ],
    },
    panelServices: {
      heading: { it: "Tutto il resto è già incluso.", en: "Everything else is included." },
      body: {
        it: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
        en: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      },
    },
    amenities: [
      {
        kicker: { it: "Riposo", en: "Sleep" },
        title: { it: "Matrimoniale + singolo", en: "Double + single" },
        body: {
          it: "Materassi in memory, biancheria in lino lavato, cambio ogni tre giorni.",
          en: "Memory foam mattresses, washed linen, changed every three days.",
        },
      },
      {
        kicker: { it: "Privato", en: "Private" },
        title: { it: "Bagno con doccia", en: "Bathroom with shower" },
        body: {
          it: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.",
          en: "En suite, walk-in shower, courtesy set and hairdryer.",
        },
      },
      {
        kicker: { it: "Inclusa", en: "Included" },
        title: { it: "Colazione servita", en: "Breakfast served" },
        body: {
          it: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.",
          en: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.",
        },
      },
      {
        kicker: { it: "Comfort", en: "Comfort" },
        title: { it: "Wi-Fi e smart TV", en: "Wi-Fi and smart TV" },
        body: {
          it: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.",
          en: "Dedicated fibre, smart TV with your own accounts, desk and USB sockets.",
        },
      },
      {
        kicker: { it: "Servizi", en: "Services" },
        title: { it: "Parcheggio interno", en: "Private parking" },
        body: {
          it: "Posto auto riservato nel cortile, senza costi aggiuntivi.",
          en: "Reserved space in the courtyard, at no extra cost.",
        },
      },
    ],
    images: {
      doorway: u("photo-1617104551722-3b2d51366400"),
      room: u("photo-1631049307264-da0ec9d70304", 2400),
      detail: u("photo-1616047006789-b7af5afb8c20", 1800),
    },
  },

  comfort: {
    slug: "comfort",
    title: "COMFORT SUITE",
    titleLines: ["COMFORT", "SUITE"],
    intro: {
      it: "Una stanza sul cortile interno, silenziosa anche d'agosto, con la poltrona buona sotto la finestra.",
      en: "A room over the inner courtyard, quiet even in August, with the good armchair under the window.",
    },
    tags: [
      { it: "2 ospiti", en: "2 guests" },
      { it: "50 € a notte", en: "€50 per night" },
      { it: "Letto aggiuntivo", en: "Extra bed available" },
    ],
    panelBed: {
      heading: { it: "Lo spazio comincia dal letto.", en: "The room begins at the bed." },
      body: {
        it: "Matrimoniale da 160, testiera imbottita e due comodini veri: quelli su cui ci sta anche un libro.",
        en: "A 160 double, upholstered headboard and two proper nightstands — the kind a book fits on.",
      },
      facts: [
        { dt: "22 m²", dd: { it: "Superficie con affaccio sul cortile", en: "Facing the courtyard" } },
        { dt: "2+1", dd: { it: "Ospiti, letto aggiuntivo su richiesta", en: "Guests, extra bed on request" } },
      ],
    },
    panelServices: {
      heading: { it: "Tutto il resto è già incluso.", en: "Everything else is included." },
      body: {
        it: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
        en: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      },
    },
    amenities: [
      {
        kicker: { it: "Riposo", en: "Sleep" },
        title: { it: "Matrimoniale 160", en: "160 double bed" },
        body: {
          it: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.",
          en: "Memory foam mattress, washed linen, changed every three days.",
        },
      },
      {
        kicker: { it: "Su richiesta", en: "On request" },
        title: { it: "Letto aggiuntivo", en: "Extra bed" },
        body: {
          it: "Un terzo letto in camera senza rinunciare allo spazio di manovra.",
          en: "A third bed in the room without losing room to move.",
        },
      },
      {
        kicker: { it: "Privato", en: "Private" },
        title: { it: "Bagno con doccia", en: "Bathroom with shower" },
        body: {
          it: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.",
          en: "En suite, walk-in shower, courtesy set and hairdryer.",
        },
      },
      {
        kicker: { it: "Inclusa", en: "Included" },
        title: { it: "Colazione servita", en: "Breakfast served" },
        body: {
          it: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.",
          en: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.",
        },
      },
      {
        kicker: { it: "Servizi", en: "Services" },
        title: { it: "Parcheggio interno", en: "Private parking" },
        body: {
          it: "Posto auto riservato nel cortile, senza costi aggiuntivi.",
          en: "Reserved space in the courtyard, at no extra cost.",
        },
      },
    ],
    images: {
      doorway: u("photo-1590490360182-c33d57733427"),
      room: u("photo-1600607687939-ce8a6c25118c", 2400),
      detail: u("photo-1620626011761-996317b8d101", 1800),
    },
  },

  basic: {
    slug: "basic",
    title: "BASIC ROOM",
    titleLines: ["BASIC", "ROOM"],
    intro: {
      it: "Essenziale nel senso buono: quello che serve per dormire bene e uscire presto, senza pagare per il resto.",
      en: "Essential in the good sense: what you need to sleep well and leave early, without paying for the rest.",
    },
    tags: [
      { it: "2 ospiti", en: "2 guests" },
      { it: "40 € a notte", en: "€40 per night" },
      { it: "Bagno privato", en: "Private bathroom" },
    ],
    panelBed: {
      heading: { it: "Lo spazio comincia dal letto.", en: "The room begins at the bed." },
      body: {
        it: "Matrimoniale da 140 sotto la finestra, un armadio capiente e nulla di superfluo in mezzo.",
        en: "A 140 double under the window, a roomy wardrobe, and nothing superfluous in between.",
      },
      facts: [
        { dt: "16 m²", dd: { it: "Superficie, secondo piano", en: "Second floor" } },
        { dt: "2", dd: { it: "Ospiti, bagno privato interno", en: "Guests, en suite bathroom" } },
      ],
    },
    panelServices: {
      heading: { it: "Tutto il resto è già incluso.", en: "Everything else is included." },
      body: {
        it: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
        en: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      },
    },
    amenities: [
      {
        kicker: { it: "Riposo", en: "Sleep" },
        title: { it: "Matrimoniale 140", en: "140 double bed" },
        body: {
          it: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.",
          en: "Memory foam mattress, washed linen, changed every three days.",
        },
      },
      {
        kicker: { it: "Privato", en: "Private" },
        title: { it: "Bagno con doccia", en: "Bathroom with shower" },
        body: {
          it: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.",
          en: "En suite, walk-in shower, courtesy set and hairdryer.",
        },
      },
      {
        kicker: { it: "Inclusa", en: "Included" },
        title: { it: "Colazione servita", en: "Breakfast served" },
        body: {
          it: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.",
          en: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.",
        },
      },
      {
        kicker: { it: "Comfort", en: "Comfort" },
        title: { it: "Wi-Fi e smart TV", en: "Wi-Fi and smart TV" },
        body: {
          it: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.",
          en: "Dedicated fibre, smart TV with your own accounts, desk and USB sockets.",
        },
      },
      {
        kicker: { it: "Servizi", en: "Services" },
        title: { it: "Parcheggio interno", en: "Private parking" },
        body: {
          it: "Posto auto riservato nel cortile, senza costi aggiuntivi.",
          en: "Reserved space in the courtyard, at no extra cost.",
        },
      },
    ],
    images: {
      doorway: u("photo-1616594039964-3d0f2d4e7ce0"),
      room: u("photo-1616047006789-b7af5afb8c20", 2400),
      detail: u("photo-1620626011761-996317b8d101", 1800),
    },
  },
};
