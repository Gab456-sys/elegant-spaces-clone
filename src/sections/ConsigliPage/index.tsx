import { SectionCta } from "@/components/SectionCta";

type Place = {
  src: string;
  name: string;
  desc: string;
  meta: string;
};

const sesto: Place[] = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    name: "Museo Richard-Ginori",
    desc: "La storica manifattura della porcellana toscana, tra archivi e capolavori del design ceramico.",
    meta: "12 min a piedi",
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
    name: "Centro storico di Sesto Fiorentino",
    desc: "Piazze raccolte, botteghe artigiane e caffè storici a due passi dalla villa.",
    meta: "8 min a piedi",
  },
  {
    src: "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=1400&q=80",
    name: "Parco di Villa Montalvo",
    desc: "Un giardino storico dove passeggiare tra alberi secolari e viste sulla piana fiorentina.",
    meta: "15 min a piedi",
  },
];

const firenze: Place[] = [
  {
    src: "https://images.unsplash.com/photo-1543429257-1eb020c33380?auto=format&fit=crop&w=1400&q=80",
    name: "Uffizi e Piazza della Signoria",
    desc: "Il cuore rinascimentale di Firenze, tra collezioni imperdibili e statue all'aperto.",
    meta: "30 min in treno + a piedi",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80",
    name: "Duomo e Battistero",
    desc: "La cupola del Brunelleschi e il Battistero di San Giovanni, simboli della città.",
    meta: "25 min in treno + a piedi",
  },
  {
    src: "https://images.unsplash.com/photo-1512564797609-3ea1ee1eab13?auto=format&fit=crop&w=1400&q=80",
    name: "Oltrarno e artigianato locale",
    desc: "Botteghe storiche, atelier e trattorie autentiche sull'altra sponda dell'Arno.",
    meta: "35 min in treno + a piedi",
  },
];

const dintorni: Place[] = [
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=80",
    name: "Fiesole",
    desc: "Un balcone sopra Firenze, tra rovine etrusche, romane e uno dei panorami più celebri della Toscana.",
    meta: "25 min in auto",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
    name: "Mugello e colline",
    desc: "Strade tranquille, borghi medievali e piccoli agriturismi immersi nel verde.",
    meta: "40 min in auto",
  },
  {
    src: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1400&q=80",
    name: "Mercati e prodotti tipici",
    desc: "Olio, vino e formaggi toscani nei mercati settimanali della zona.",
    meta: "10–30 min in auto",
  },
];

const PlaceGrid = ({
  eyebrow,
  title,
  places,
  bg,
}: {
  eyebrow: string;
  title: string;
  places: Place[];
  bg: string;
}) => (
  <section
    data-header-theme="dark"
    className={`border-b border-stone-300/70 ${bg}`}
  >
    <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="reveal reveal-editorial mb-14 md:mb-20">
        <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
          {eyebrow}
        </p>
        <h2 className="m-0 mt-5 max-w-[22ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {places.map((place, index) => (
          <article
            key={place.name}
            data-reveal-order={index}
            className="reveal-crop"
          >
            <div className="overflow-hidden">
              <img
                src={place.src}
                alt={place.name}
                className="reveal-media-inner block h-[52svh] w-full object-cover md:h-[46svh]"
              />
            </div>
            <div className="reveal reveal-editorial mt-5">
              <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
                {place.meta}
              </p>
              <h3 className="m-0 mt-2 font-beausite_classic text-[26px] leading-[1.05] tracking-[-0.01em] text-stone-900 md:text-[30px]">
                {place.name}
              </h3>
              <p className="m-0 mt-3 text-[15px] leading-[1.55] text-stone-800/90">
                {place.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const ConsigliPage = () => {
  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      {/* HERO */}
      <section
        data-header-theme="light"
        className="relative isolate flex min-h-[92svh] w-full items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1499602250831-6b0a55a24df2?auto=format&fit=crop&w=2200&q=80"
          alt="Colline toscane e cipressi al tramonto"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-20 pt-40 text-stone-50 md:px-10 md:pb-28 md:pt-48 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.28em] text-stone-100/90">
            Esperienze
          </p>
          <h1
            data-reveal-order={1}
            className="reveal reveal-editorial m-0 mt-4 max-w-[16ch] font-beausite_classic text-[52px] leading-[0.95] tracking-[-0.02em] sm:text-[70px] md:text-[96px] lg:text-[118px]"
          >
            I Nostri Consigli
          </h1>
          <p
            data-reveal-order={2}
            className="reveal reveal-editorial mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-stone-100/95 md:text-[20px]"
          >
            Tutto ciò che vale la pena scoprire nei dintorni, selezionato per
            voi.
          </p>
        </div>
      </section>

      <PlaceGrid
        eyebrow="Da non perdere"
        title="Sesto Fiorentino"
        places={sesto}
        bg="bg-[#f6f2eb]"
      />
      <PlaceGrid
        eyebrow="A 30 minuti da voi"
        title="Firenze"
        places={firenze}
        bg="bg-[#f5f1ea]"
      />
      <PlaceGrid
        eyebrow="Nei dintorni"
        title="Esperienze in Toscana"
        places={dintorni}
        bg="bg-[#ece5da]"
      />

      {/* CTA */}
      <section className="bg-[#f6f2eb]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center gap-8 px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
            Pronto a partire
          </p>
          <h2 className="reveal reveal-editorial m-0 max-w-[18ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[60px]">
            Prenota il tuo soggiorno a Villa Sesto
          </h2>
          <SectionCta href="/contatti" label="Prenota il tuo soggiorno" />
        </div>
      </section>
    </main>
  );
};
