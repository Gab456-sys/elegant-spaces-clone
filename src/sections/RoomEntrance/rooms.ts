export type RoomEntranceData = {
  slug: string;
  images: {
    /**
     * FOTO DELLA SOGLIA. Va scattata dal corridoio, in piedi sulla porta,
     * inquadrando lo stipite. Viene tagliata a metà via clip-path e le due
     * ante si aprono: se la foto non ha una simmetria centrale credibile
     * l'effetto non regge. È l'unica immagine che vale la pena rifare apposta.
     */
    doorway?: string;
    /** La camera, full bleed. Zooma per tutta la durata: serve alta risoluzione. */
    room: string;
    /** Dettaglio ravvicinato: bagno, poltrona, scrittoio. */
    detail: string;
    /** Elemento in primo piano ritagliato (letto). */
    foreground?: string;
  };
  foregroundFit?: { width: number; grow: number; bottom: number; lift: number };
};

/**
 * NOTA: le immagini qui sotto sono quelle già presenti nel progetto (Unsplash).
 * Sono segnaposto. In particolare `doorway` non è una vera foto di soglia:
 * finché non la sostituisci, l'apertura delle ante funziona ma non "legge"
 * come una porta.
 */
export const roomEntrances: Record<string, RoomEntranceData> = {
  family: {
    slug: "family",
    images: {
      room: "/img/room.png",
      detail: "/img/detail.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 34, grow: 30, bottom: 1, lift: 9 },
  },

  comfort: {
    slug: "comfort",
    images: {
      room: "/img/room.png",
      detail: "/img/detail.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 34, grow: 30, bottom: 1, lift: 9 },
  },

  basic: {
    slug: "basic",
    images: {
      room: "/img/room.png",
      detail: "/img/detail.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 34, grow: 30, bottom: 1, lift: 9 },
  },
};
