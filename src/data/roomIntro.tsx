import { Bed, Bath, Coffee, Wifi, Car, PlusSquare, Tv } from "lucide-react";
import type { RoomEntryIntroProps } from "@/components/RoomEntryIntro";
import type { Language } from "@/lib/i18n/LanguageContext";

const icon = (Component: typeof Bed) => (
  <Component size={44} strokeWidth={1.25} color="#1b1512" />
);

const layers: RoomEntryIntroProps["layers"] = {
  interior: { src: "/img/room.png" },
  bed: { src: "/img/foreground-bed.png" },
  frame: { src: "/img/doorway.png" },
  door: { src: "/img/doorway.png" },
  detail: { src: "/img/detail.png" },
};

type Config = Omit<RoomEntryIntroProps, "layers">;

const CTA_HREF = "#dettagli";

const it: Record<string, Config> = {
  family: {
    roomName: "Family Suite",
    intro:
      "Due ambienti al primo piano, la luce del mattino sul parquet e lo spazio per non pestarsi i piedi in quattro.",
    tags: ["4 ospiti", "80 € a notte", "Bagno privato"],
    panelOne: {
      title: "Lo spazio comincia dal letto.",
      text: "Matrimoniale e letto singolo separati da una quinta in legno, così chi dorme prima non resta sveglio.",
      facts: [
        { value: "32 m²", label: "Superficie su due ambienti" },
        { value: "4", label: "Ospiti, letto aggiuntivo incluso" },
      ],
    },
    panelTwo: {
      title: "Tutto il resto è già incluso.",
      text: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
      ctaLabel: "Verifica disponibilità",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Riposo", title: "Matrimoniale + singolo", text: "Materassi in memory, biancheria in lino lavato, cambio ogni tre giorni.", icon: icon(Bed) },
      { kicker: "Privato", title: "Bagno con doccia", text: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.", icon: icon(Bath) },
      { kicker: "Inclusa", title: "Colazione servita", text: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.", icon: icon(Coffee) },
      { kicker: "Comfort", title: "Wi-Fi e smart TV", text: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.", icon: icon(Wifi) },
      { kicker: "Servizi", title: "Parcheggio interno", text: "Posto auto riservato nel cortile, senza costi aggiuntivi.", icon: icon(Car) },
    ],
  },
  comfort: {
    roomName: "Comfort Suite",
    intro:
      "Una stanza sul cortile interno, silenziosa anche d'agosto, con la poltrona buona sotto la finestra.",
    tags: ["2 ospiti", "50 € a notte", "Letto aggiuntivo"],
    panelOne: {
      title: "Lo spazio comincia dal letto.",
      text: "Matrimoniale da 160, testiera imbottita e due comodini veri: quelli su cui ci sta anche un libro.",
      facts: [
        { value: "22 m²", label: "Superficie con affaccio sul cortile" },
        { value: "2+1", label: "Ospiti, letto aggiuntivo su richiesta" },
      ],
    },
    panelTwo: {
      title: "Tutto il resto è già incluso.",
      text: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
      ctaLabel: "Verifica disponibilità",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Riposo", title: "Matrimoniale 160", text: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.", icon: icon(Bed) },
      { kicker: "Su richiesta", title: "Letto aggiuntivo", text: "Un terzo letto in camera senza rinunciare allo spazio di manovra.", icon: icon(PlusSquare) },
      { kicker: "Privato", title: "Bagno con doccia", text: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.", icon: icon(Bath) },
      { kicker: "Inclusa", title: "Colazione servita", text: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.", icon: icon(Coffee) },
      { kicker: "Servizi", title: "Parcheggio interno", text: "Posto auto riservato nel cortile, senza costi aggiuntivi.", icon: icon(Car) },
    ],
  },
  basic: {
    roomName: "Basic Room",
    intro:
      "Essenziale nel senso buono: quello che serve per dormire bene e uscire presto, senza pagare per il resto.",
    tags: ["2 ospiti", "40 € a notte", "Bagno privato"],
    panelOne: {
      title: "Lo spazio comincia dal letto.",
      text: "Matrimoniale da 140 sotto la finestra, un armadio capiente e nulla di superfluo in mezzo.",
      facts: [
        { value: "16 m²", label: "Superficie, secondo piano" },
        { value: "2", label: "Ospiti, bagno privato interno" },
      ],
    },
    panelTwo: {
      title: "Tutto il resto è già incluso.",
      text: "Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.",
      ctaLabel: "Verifica disponibilità",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Riposo", title: "Matrimoniale 140", text: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.", icon: icon(Bed) },
      { kicker: "Privato", title: "Bagno con doccia", text: "Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.", icon: icon(Bath) },
      { kicker: "Inclusa", title: "Colazione servita", text: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.", icon: icon(Coffee) },
      { kicker: "Comfort", title: "Wi-Fi e smart TV", text: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.", icon: icon(Tv) },
      { kicker: "Servizi", title: "Parcheggio interno", text: "Posto auto riservato nel cortile, senza costi aggiuntivi.", icon: icon(Car) },
    ],
  },
};

const en: Record<string, Config> = {
  family: {
    roomName: "Family Suite",
    intro:
      "Two rooms on the first floor, morning light across the parquet, and enough space for four without stepping on each other.",
    tags: ["4 guests", "€80 per night", "Private bathroom"],
    panelOne: {
      title: "The room begins at the bed.",
      text: "A double and a single divided by a wooden partition, so whoever turns in first actually sleeps.",
      facts: [
        { value: "32 m²", label: "Across two rooms" },
        { value: "4", label: "Guests, extra bed included" },
      ],
    },
    panelTwo: {
      title: "Everything else is included.",
      text: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      ctaLabel: "Check availability",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Sleep", title: "Double + single", text: "Memory foam mattresses, washed linen, changed every three days.", icon: icon(Bed) },
      { kicker: "Private", title: "Bathroom with shower", text: "En suite, walk-in shower, courtesy set and hairdryer.", icon: icon(Bath) },
      { kicker: "Included", title: "Breakfast served", text: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.", icon: icon(Coffee) },
      { kicker: "Comfort", title: "Wi-Fi and smart TV", text: "Dedicated fibre, smart TV with your own accounts, desk and USB sockets.", icon: icon(Wifi) },
      { kicker: "Services", title: "Private parking", text: "Reserved space in the courtyard, at no extra cost.", icon: icon(Car) },
    ],
  },
  comfort: {
    roomName: "Comfort Suite",
    intro:
      "A room over the inner courtyard, quiet even in August, with the good armchair under the window.",
    tags: ["2 guests", "€50 per night", "Extra bed available"],
    panelOne: {
      title: "The room begins at the bed.",
      text: "A 160 double, upholstered headboard and two proper nightstands — the kind a book fits on.",
      facts: [
        { value: "22 m²", label: "Facing the courtyard" },
        { value: "2+1", label: "Guests, extra bed on request" },
      ],
    },
    panelTwo: {
      title: "Everything else is included.",
      text: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      ctaLabel: "Check availability",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Sleep", title: "160 double bed", text: "Memory foam mattress, washed linen, changed every three days.", icon: icon(Bed) },
      { kicker: "On request", title: "Extra bed", text: "A third bed in the room without losing room to move.", icon: icon(PlusSquare) },
      { kicker: "Private", title: "Bathroom with shower", text: "En suite, walk-in shower, courtesy set and hairdryer.", icon: icon(Bath) },
      { kicker: "Included", title: "Breakfast served", text: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.", icon: icon(Coffee) },
      { kicker: "Services", title: "Private parking", text: "Reserved space in the courtyard, at no extra cost.", icon: icon(Car) },
    ],
  },
  basic: {
    roomName: "Basic Room",
    intro:
      "Essential in the good sense: what you need to sleep well and leave early, without paying for the rest.",
    tags: ["2 guests", "€40 per night", "Private bathroom"],
    panelOne: {
      title: "The room begins at the bed.",
      text: "A 140 double under the window, a roomy wardrobe, and nothing superfluous in between.",
      facts: [
        { value: "16 m²", label: "Second floor" },
        { value: "2", label: "Guests, en suite bathroom" },
      ],
    },
    panelTwo: {
      title: "Everything else is included.",
      text: "Breakfast, daily cleaning and courtyard parking. No surprises at checkout.",
      ctaLabel: "Check availability",
      ctaHref: CTA_HREF,
    },
    amenities: [
      { kicker: "Sleep", title: "140 double bed", text: "Memory foam mattress, washed linen, changed every three days.", icon: icon(Bed) },
      { kicker: "Private", title: "Bathroom with shower", text: "En suite, walk-in shower, courtesy set and hairdryer.", icon: icon(Bath) },
      { kicker: "Included", title: "Breakfast served", text: "Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.", icon: icon(Coffee) },
      { kicker: "Comfort", title: "Wi-Fi and smart TV", text: "Dedicated fibre, smart TV with your own accounts, desk and USB sockets.", icon: icon(Tv) },
      { kicker: "Services", title: "Private parking", text: "Reserved space in the courtyard, at no extra cost.", icon: icon(Car) },
    ],
  },
};

const byLanguage: Record<Language, Record<string, Config>> = { it, en };

export function getRoomIntro(
  slug: "family" | "comfort" | "basic",
  language: Language,
): RoomEntryIntroProps {
  return {
    ...byLanguage[language][slug],
    layers,
    scrollLength: 3700,
    scrollHint: language === "it" ? "Scorri" : "Scroll",
    skipLabel: language === "it" ? "Salta l'introduzione" : "Skip the intro",
  };
}
