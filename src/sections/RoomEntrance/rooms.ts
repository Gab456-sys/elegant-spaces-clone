/**
 * Solo le immagini. TUTTI i testi vivono nelle pagine camera
 * (FamilySuitePage, ComfortSuitePage, BasicRoomPage) come props ReactNode,
 * così restano modificabili dall'editor visivo di Lovable.
 * Non rimettere testi qui: creerebbe due fonti di verità e vincerebbero
 * comunque le props, con l'effetto di far sembrare le modifiche ignorate.
 */
import foregroundTest from "@/assets/foreground-test.png";

export type RoomEntranceData = {
  slug: string;
  images: {
    /**
     * FOTO DELLA SOGLIA. Scattata dal corridoio, in piedi sulla porta,
     * inquadrando lo stipite. Viene tagliata a metà e le due ante si aprono:
     * senza una simmetria centrale credibile l'effetto non legge.
     * Deve essere DIVERSA da `room`, altrimenti le ante rivelano ciò che
     * già mostrano.
     */
    doorway: string;
    /** La camera, full bleed. Zooma fino a ~1.38: serve almeno 2400px. */
    room: string;
    /** Dettaglio ravvicinato: bagno, poltrona, scrittoio. */
    detail: string;
    /**
     * PNG SCONTORNATO, sfondo trasparente: il letto (o la testiera, o la
     * poltrona) frontale, leggermente dal basso. Resta in primo piano
     * mentre le ante si aprono, poi passa sopra lo spettatore.
     * È il layer che dà profondità: senza, l'apertura rivela una foto piatta.
     */
    foreground?: string;
  };
};

const u = (id: string, w = 2200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Segnaposto Unsplash: da sostituire con le foto reali delle camere. */
export const roomEntrances: Record<string, RoomEntranceData> = {
  family: {
    slug: "family",
    images: {
      doorway: u("photo-1617104551722-3b2d51366400"),
      room: u("photo-1631049307264-da0ec9d70304", 2400),
      detail: u("photo-1616047006789-b7af5afb8c20", 1800),
      foreground: foregroundTest,
    },
  },
  comfort: {
    slug: "comfort",
    images: {
      doorway: u("photo-1590490360182-c33d57733427"),
      room: u("photo-1600607687939-ce8a6c25118c", 2400),
      detail: u("photo-1620626011761-996317b8d101", 1800),
      foreground: foregroundTest,
    },
  },
  basic: {
    slug: "basic",
    images: {
      doorway: u("photo-1616594039964-3d0f2d4e7ce0"),
      room: u("photo-1616047006789-b7af5afb8c20", 2400),
      detail: u("photo-1620626011761-996317b8d101", 1800),
      foreground: foregroundTest,
    },
  },
};
