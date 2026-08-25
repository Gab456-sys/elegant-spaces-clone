import { Link, useParams } from "react-router-dom";

type RoomContent = {
  slug: string;
  name: string;
  size: string;
  occupancy: string;
  view: string;
  amenities: { title: string; text: string }[];
  rates: { season: string; price: string; minStay: string }[];
  fromPrice: string;
};

const AMENITIES = [
  {
    title: "Letto matrimoniale 160",
    text: "Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.",
  },
  {
    title: "Bagno con doccia",
    text: "Bagno interno alla camera, doccia walk-in, set cortesia e phon.",
  },
  {
    title: "Colazione servita",
    text: "Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.",
  },
  {
    title: "Wi-Fi e smart TV",
    text: "Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.",
  },
  {
    title: "Parcheggio interno",
    text: "Posto auto riservato nel cortile, senza costi aggiuntivi.",
  },
  {
    title: "Aria condizionata",
    text: "Climatizzazione autonoma in camera, con regolazione indipendente.",
  },
];

const RATES = [
  { season: "Bassa stagione — nov / mar", price: "da 89 €", minStay: "1 notte" },
  { season: "Media stagione — apr / giu, set / ott", price: "da 109 €", minStay: "2 notti" },
  { season: "Alta stagione — lug / ago", price: "da 129 €", minStay: "2 notti" },
];

const ROOMS: Record<string, RoomContent> = {
  family: {
    slug: "family",
    name: "Family Suite",
    size: "26 m²",
    occupancy: "4+1 ospiti",
    view: "Vista giardino",
    amenities: AMENITIES,
    rates: RATES,
    fromPrice: "da 129 €",
  },
  comfort: {
    slug: "comfort",
    name: "Comfort Suite",
    size: "20 m²",
    occupancy: "2+1 ospiti",
    view: "Vista cortile",
    amenities: AMENITIES,
    rates: RATES,
    fromPrice: "da 109 €",
  },
  basic: {
    slug: "basic",
    name: "Camera Glicine",
    size: "18 m²",
    occupancy: "2+1 ospiti",
    view: "Vista giardino",
    amenities: AMENITIES,
    rates: RATES,
    fromPrice: "da 89 €",
  },
};

export const CameraScrollPage = () => {
  const { slug } = useParams();
  const room = ROOMS[slug ?? "basic"] ?? ROOMS.basic;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.occupancy.startsWith("4") ? 5 : 3,
      unitCode: "C62",
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: Number(room.size.replace(/\D/g, "")),
      unitCode: "MTK",
    },
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.title,
      value: true,
    })),
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=80",
  };

  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <iframe
        src={`/camera/index.html?room=${room.slug}`}
        title={`${room.name} — ingresso`}
        className="relative z-0 block h-[100svh] w-full border-0"
        loading="lazy"
      />

      <section
        id="dotazioni"
        className="border-t border-stone-300/70 bg-[#f5f1ea]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
            Dotazioni
          </p>
          <h2 className="mt-5 max-w-[18ch] font-beausite_classic text-[38px] leading-[1.05] tracking-[-0.02em] text-stone-900 md:text-[64px]">
            {room.name} — tutto quello che trovi in camera
          </h2>
          <ul className="mt-12 grid list-none grid-cols-1 gap-px border border-stone-300/70 bg-stone-300/70 p-0 md:grid-cols-3">
            {room.amenities.map((item) => (
              <li key={item.title} className="bg-[#f6f2eb] p-8">
                <h3 className="m-0 font-beausite_classic text-[22px] tracking-[-0.02em] text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="prezzi"
        className="border-t border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
            Tariffe
          </p>
          <h2 className="mt-5 font-beausite_classic text-[38px] leading-[1.05] tracking-[-0.02em] text-stone-900 md:text-[56px]">
            Prezzi e condizioni
          </h2>
          <div className="mt-12 border-t border-stone-300/70">
            {room.rates.map((rate) => (
              <div
                key={rate.season}
                className="grid grid-cols-1 gap-2 border-b border-stone-300/70 py-6 md:grid-cols-3 md:items-baseline"
              >
                <span className="text-[10px] uppercase tracking-[0.24em] text-stone-600">
                  {rate.season}
                </span>
                <span className="font-beausite_classic text-[28px] tracking-[-0.02em] text-stone-900">
                  {rate.price}
                </span>
                <span className="text-[13px] text-stone-600">
                  Minimo {rate.minStay}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-[14px] leading-relaxed text-stone-600">
            Cancellazione gratuita fino a 7 giorni prima dell'arrivo. Dopo tale
            termine viene addebitata la prima notte. Tassa di soggiorno esclusa,
            da saldare in struttura.
          </p>
        </div>
      </section>

      <section
        id="prenota"
        className="border-t border-stone-300/70 bg-[#f5f1ea] pb-28 md:pb-28"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
            Prenota
          </p>
          <h2 className="mt-5 font-beausite_classic text-[38px] leading-[1.05] tracking-[-0.02em] text-stone-900 md:text-[56px]">
            Verifica la disponibilità
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-stone-600">
            Scrivici le date del soggiorno: verifichiamo la disponibilità reale
            di {room.name} e ti confermiamo la tariffa migliore senza
            intermediari.
          </p>
          <Link
            to="/contatti"
            className="mt-10 inline-flex min-h-[50px] items-center justify-center border border-stone-900 px-8 text-[10px] uppercase tracking-[0.2em] text-stone-900 no-underline transition-colors hover:bg-stone-900 hover:text-[#f8f5ef]"
          >
            Richiedi disponibilità
          </Link>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-stone-300/70 bg-[#f6f2eb] px-5 py-3 md:hidden">
        <span className="font-beausite_classic text-[20px] tracking-[-0.02em] text-stone-900">
          {room.fromPrice}
        </span>
        <Link
          to="/contatti"
          className="inline-flex min-h-[42px] items-center justify-center border border-stone-900 px-6 text-[10px] uppercase tracking-[0.2em] text-stone-900 no-underline"
        >
          Prenota
        </Link>
      </div>
    </main>
  );
};
