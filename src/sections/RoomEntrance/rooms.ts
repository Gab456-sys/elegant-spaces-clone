/**
 * Solo le immagini. TUTTI i testi vivono nelle pagine camera
 * (FamilySuitePage, ComfortSuitePage, BasicRoomPage) come props ReactNode,
 * così restano modificabili dall'editor visivo di Lovable.
 * Non rimettere testi qui: creerebbe due fonti di verità e vincerebbero
 * comunque le props, con l'effetto di far sembrare le modifiche ignorate.
 */
export type RoomEntranceData = {
  slug: string;
  images: {
    /**
     * FOTO DELLA SOGLIA — opzionale, e da usare solo se ce l'hai davvero:
     * scura, stretta, chiusa (uno stipite, un corridoio, un'anta di legno),
     * scattata frontalmente e simmetrica rispetto al centro.
     *
     * Se manca, le ante vengono DISEGNATE in CSS: due pannelli scuri con
     * venatura e bordo smussato. Quasi sempre è la scelta giusta, perché
     * l'ingresso lo racconta il contrasto buio→luce, non il realismo del
     * legno. Una foto d'interni chiara qui produce l'effetto peggiore:
     * la camera che si spacca in due invece di una porta che si apre.
     */
    doorway?: string;
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
  /**
   * Calibrazione del layer scontornato. Ogni ritaglio ha inquadratura sua:
   * questi quattro numeri servono a farlo sedere bene senza toccare il motore.
   * Prima di intervenire qui, però, ritaglia il PNG STRETTO sul soggetto:
   * i margini trasparenti sono la causa più frequente di un primo piano
   * fuori posto o di dimensione sbagliata.
   */
  foregroundFit?: {
    /** Larghezza a porta chiusa, in vw. Default 64. Alza se il soggetto è piccolo. */
    width?: number;
    /** Quanti vw guadagna mentre le ante si aprono. Default 36. */
    grow?: number;
    /** Distanza dal fondo a porta chiusa, in vh. Default 2. Negativo = sborda sotto. */
    bottom?: number;
    /** Di quanti vh scende mentre ci si avvicina. Default 10. */
    lift?: number;
  };
};

const u = (id: string, w = 2200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
void u;

export const roomEntrances: Record<string, RoomEntranceData> = {
  family: {
    slug: "family",
    images: {
      doorway: "/img/doorway.png",
      room: "/img/room.png",
      detail: "/img/detail-armchair.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 62, grow: 34, bottom: -2, lift: 9 },
  },
  comfort: {
    slug: "comfort",
    images: {
      doorway: "/img/doorway.png",
      room: "/img/room.png",
      detail: "/img/detail-armchair.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 62, grow: 34, bottom: -2, lift: 9 },
  },
  basic: {
    slug: "basic",
    images: {
      doorway: "/img/doorway.png",
      room: "/img/room.png",
      detail: "/img/detail-armchair.png",
      foreground: "/img/foreground-bed.png",
    },
    foregroundFit: { width: 62, grow: 34, bottom: -2, lift: 9 },
  },
};
