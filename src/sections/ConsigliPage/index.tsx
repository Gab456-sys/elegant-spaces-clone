import { useEffect, useState } from "react";
import { SectionCta } from "@/components/SectionCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import heroTuscany from "@/assets/consigli/hero_tuscany.jpg";
import richardGinori from "@/assets/consigli/richard_ginori.jpg";
import sestoCentro from "@/assets/consigli/sesto_centro.jpg";
import villaMontalvo from "@/assets/consigli/villa_montalvo.jpg";
import uffiziSignoria from "@/assets/consigli/uffizi_signoria.jpg";
import duomoBattistero from "@/assets/consigli/duomo_battistero.jpg";
import oltrarno from "@/assets/consigli/oltrarno.jpg";
import fiesole from "@/assets/consigli/fiesole.jpg";
import mugello from "@/assets/consigli/mugello.jpg";
import mercati from "@/assets/consigli/mercati.jpg";

type Place = {
  src: string;
  name: string;
  desc: string;
  meta: string;
  long?: string;
  highlights?: string[];
};

const PlaceGrid = ({
  eyebrow,
  title,
  places,
  bg,
  onOpen,
  readMoreLabel,
}: {
  eyebrow: string;
  title: string;
  places: Place[];
  bg: string;
  onOpen: (place: Place) => void;
  readMoreLabel: string;
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
            <button
              type="button"
              onClick={() => onOpen(place)}
              className="group block w-full cursor-pointer text-left"
              aria-label={`${readMoreLabel}: ${place.name}`}
            >
              <div className="overflow-hidden">
                <img
                  src={place.src}
                  alt={place.name}
                  className="reveal-media-inner block h-[52svh] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04] md:h-[46svh]"
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
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-stone-900">
                  <span className="relative">
                    {readMoreLabel}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-stone-900 transition-transform duration-500 group-hover:scale-x-0" />
                  </span>
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PlaceModal = ({
  place,
  onClose,
  labels,
}: {
  place: Place | null;
  onClose: () => void;
  labels: { close: string; highlights: string; distance: string };
}) => {
  useEffect(() => {
    if (!place) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [place, onClose]);

  if (!place) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={place.name}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-300 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92svh] w-full max-w-[1200px] modal-open flex-col overflow-hidden bg-[#f5f1ea] shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          aria-label={labels.close}
          className="absolute right-3 top-3 z-30 flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center rounded-full border-0 bg-white/95 text-stone-900 shadow-xl transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-12 md:w-12"
        >
          <span aria-hidden className="pointer-events-none text-2xl leading-none md:text-3xl">×</span>
        </button>
        <div className="relative h-[38svh] w-full shrink-0 md:h-auto md:w-[55%]">
          <img
            src={place.src}
            alt={place.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
            {labels.distance}: {place.meta}
          </p>
          <h3 className="m-0 mt-3 font-beausite_classic text-[30px] leading-[1.05] tracking-[-0.01em] text-stone-900 md:text-[40px]">
            {place.name}
          </h3>
          <p className="m-0 mt-5 text-[15px] leading-[1.65] text-stone-800/90 md:text-[16px]">
            {place.long ?? place.desc}
          </p>
          {place.highlights && place.highlights.length > 0 && (
            <div className="mt-8 border-t border-stone-300/70 pt-6">
              <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
                {labels.highlights}
              </p>
              <ul className="mt-4 space-y-2">
                {place.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[14px] leading-[1.55] text-stone-800"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ConsigliPage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [active, setActive] = useState<Place | null>(null);

  const sesto: Place[] = [
    {
      src: richardGinori,
      name: "Museo Richard-Ginori",
      desc: isEn
        ? "The historic Tuscan porcelain manufactory, among archives and masterpieces of ceramic design."
        : "La storica manifattura della porcellana toscana, tra archivi e capolavori del design ceramico.",
      meta: isEn ? "12 min on foot" : "12 min a piedi",
      long: isEn
        ? "Founded in 1735, the Richard-Ginori Museum preserves nearly three centuries of Italian porcelain heritage. Its collection ranges from Baroque tableware to iconic 20th-century designs by Gio Ponti, offering a rare window into Tuscan craftsmanship and industrial art."
        : "Fondato nel 1735, il Museo Richard-Ginori custodisce quasi tre secoli di eccellenza della porcellana italiana. La collezione spazia dalle stoviglie barocche alle iconiche creazioni novecentesche di Gio Ponti, offrendo una rara finestra sull'artigianato toscano e sull'arte industriale.",
      highlights: isEn
        ? ["Historic Ginori archives", "Gio Ponti collection", "Guided tours available"]
        : ["Archivi storici Ginori", "Collezione Gio Ponti", "Visite guidate su prenotazione"],
    },
    {
      src: sestoCentro,
      name: isEn ? "Historic centre of Sesto Fiorentino" : "Centro storico di Sesto Fiorentino",
      desc: isEn
        ? "Quiet squares, artisan workshops and historic cafés, just steps from the property."
        : "Piazze raccolte, botteghe artigiane e caffè storici a due passi dalla struttura.",
      meta: isEn ? "8 min on foot" : "8 min a piedi",
      long: isEn
        ? "The old town of Sesto Fiorentino unfolds along elegant piazzas and narrow streets shaped by centuries of Florentine influence. Family-run trattorias, gelaterias and small artisan workshops make it perfect for a slow morning walk or an evening aperitivo."
        : "Il centro storico di Sesto Fiorentino si snoda tra piazze eleganti e vie strette plasmate da secoli di influenza fiorentina. Trattorie a conduzione familiare, gelaterie e piccole botteghe artigiane lo rendono perfetto per una passeggiata mattutina o un aperitivo serale.",
      highlights: isEn
        ? ["Weekly street market", "Historic cafés", "Local trattorias"]
        : ["Mercato settimanale", "Caffè storici", "Trattorie tipiche"],
    },
    {
      src: villaMontalvo,
      name: isEn ? "Villa Montalvo Park" : "Parco di Villa Montalvo",
      desc: isEn
        ? "A historic garden to walk through centuries-old trees with views over the Florentine plain."
        : "Un giardino storico dove passeggiare tra alberi secolari e viste sulla piana fiorentina.",
      meta: isEn ? "15 min on foot" : "15 min a piedi",
      long: isEn
        ? "Once a Medici hunting estate, the park surrounding Villa Montalvo is a peaceful expanse of Italian gardens, cedars and holm oaks. Winding paths open onto quiet clearings and long views over the Florentine plain — an ideal reset between city visits."
        : "Un tempo tenuta di caccia medicea, il parco che circonda Villa Montalvo è una distesa serena di giardini all'italiana, cedri e lecci. Sentieri sinuosi si aprono su radure silenziose e ampie vedute sulla piana fiorentina — perfetto per riprendere fiato tra una visita e l'altra.",
      highlights: isEn
        ? ["Italian formal gardens", "Panoramic viewpoints", "Free entry"]
        : ["Giardini all'italiana", "Punti panoramici", "Ingresso libero"],
    },
  ];

  const firenze: Place[] = [
    {
      src: uffiziSignoria,
      name: isEn ? "Uffizi and Piazza della Signoria" : "Uffizi e Piazza della Signoria",
      desc: isEn
        ? "The Renaissance heart of Florence, with unmissable collections and open-air statues."
        : "Il cuore rinascimentale di Firenze, tra collezioni imperdibili e statue all'aperto.",
      meta: isEn ? "30 min by train + on foot" : "30 min in treno + a piedi",
      long: isEn
        ? "The Uffizi Gallery holds one of the greatest collections of Renaissance art in the world — Botticelli, Leonardo, Michelangelo, Caravaggio. Just outside, Piazza della Signoria remains Florence's civic stage, framed by Palazzo Vecchio and the open-air sculptures of the Loggia dei Lanzi."
        : "La Galleria degli Uffizi custodisce una delle più grandi collezioni di arte rinascimentale al mondo — Botticelli, Leonardo, Michelangelo, Caravaggio. Fuori, Piazza della Signoria resta il palcoscenico civico di Firenze, incorniciata da Palazzo Vecchio e dalle sculture all'aperto della Loggia dei Lanzi.",
      highlights: isEn
        ? ["Book tickets in advance", "Loggia dei Lanzi (free)", "Palazzo Vecchio nearby"]
        : ["Biglietti da prenotare in anticipo", "Loggia dei Lanzi (gratuita)", "Palazzo Vecchio accanto"],
    },
    {
      src: duomoBattistero,
      name: isEn ? "Duomo and Baptistery" : "Duomo e Battistero",
      desc: isEn
        ? "Brunelleschi's dome and the Baptistery of San Giovanni, symbols of the city."
        : "La cupola del Brunelleschi e il Battistero di San Giovanni, simboli della città.",
      meta: isEn ? "25 min by train + on foot" : "25 min in treno + a piedi",
      long: isEn
        ? "Brunelleschi's dome still crowns Florence's skyline as one of the great feats of Renaissance engineering. Below, Santa Maria del Fiore, Giotto's Campanile and the octagonal Baptistery — with its bronze Gates of Paradise — form one of the most extraordinary architectural ensembles in Europe."
        : "La cupola del Brunelleschi domina ancora lo skyline di Firenze come una delle grandi imprese ingegneristiche del Rinascimento. Sotto, Santa Maria del Fiore, il Campanile di Giotto e il Battistero ottagonale — con le sue Porte del Paradiso in bronzo — formano uno degli insiemi architettonici più straordinari d'Europa.",
      highlights: isEn
        ? ["Climb the dome", "Baptistery mosaics", "Cathedral museum"]
        : ["Salita alla cupola", "Mosaici del Battistero", "Museo dell'Opera del Duomo"],
    },
    {
      src: oltrarno,
      name: isEn ? "Oltrarno and local craftsmanship" : "Oltrarno e artigianato locale",
      desc: isEn
        ? "Historic workshops, ateliers and authentic trattorias on the other bank of the Arno."
        : "Botteghe storiche, atelier e trattorie autentiche sull'altra sponda dell'Arno.",
      meta: isEn ? "35 min by train + on foot" : "35 min in treno + a piedi",
      long: isEn
        ? "Across the Arno, the Oltrarno keeps Florence's craft soul alive. Leather ateliers, gilders, bookbinders and framers still work behind unassuming doors in San Frediano and Santo Spirito, while the neighbourhood's trattorias and wine bars offer some of the city's most authentic evenings."
        : "Oltre l'Arno, l'Oltrarno custodisce l'anima artigiana di Firenze. Botteghe di pelle, doratori, legatori e corniciai lavorano ancora dietro portoni discreti a San Frediano e Santo Spirito, mentre trattorie e wine bar del quartiere regalano alcune delle serate più autentiche della città.",
      highlights: isEn
        ? ["Santo Spirito square", "Artisan workshops", "Sunset from Piazzale Michelangelo"]
        : ["Piazza Santo Spirito", "Botteghe artigiane", "Tramonto da Piazzale Michelangelo"],
    },
  ];

  const dintorni: Place[] = [
    {
      src: fiesole,
      name: "Fiesole",
      desc: isEn
        ? "A balcony above Florence, with Etruscan and Roman ruins and one of the most celebrated views in Tuscany."
        : "Un balcone sopra Firenze, tra rovine etrusche, romane e uno dei panorami più celebri della Toscana.",
      meta: isEn ? "25 min by car" : "25 min in auto",
      long: isEn
        ? "Perched in the hills north of Florence, Fiesole predates the city itself. The Roman theatre still hosts summer concerts, the archaeological area preserves Etruscan walls and thermal baths, and the terrace in front of San Francesco offers one of the most memorable views over Florence."
        : "Arroccata sulle colline a nord di Firenze, Fiesole è più antica della città stessa. Il teatro romano ospita ancora concerti estivi, l'area archeologica conserva mura etrusche e terme, e la terrazza di fronte a San Francesco regala una delle vedute più memorabili su Firenze.",
      highlights: isEn
        ? ["Roman theatre", "Etruscan walls", "Panoramic terrace"]
        : ["Teatro romano", "Mura etrusche", "Terrazza panoramica"],
    },
    {
      src: mugello,
      name: isEn ? "Mugello and hills" : "Mugello e colline",
      desc: isEn
        ? "Quiet roads, medieval villages and small farmhouses immersed in the countryside."
        : "Strade tranquille, borghi medievali e piccoli agriturismi immersi nel verde.",
      meta: isEn ? "40 min by car" : "40 min in auto",
      long: isEn
        ? "The Mugello valley, birthplace of the Medici, unfolds in gentle hills, chestnut woods and stone villages like Scarperia and Vicchio. It's ideal for slow driving days, farm-to-table lunches and visits to Romanesque parish churches away from the crowds."
        : "La valle del Mugello, culla dei Medici, si apre in colline dolci, boschi di castagni e borghi di pietra come Scarperia e Vicchio. Perfetta per giornate in auto senza fretta, pranzi in agriturismo e visite a pievi romaniche lontane dalla folla.",
      highlights: isEn
        ? ["Scarperia knife workshops", "Farm-to-table lunches", "Romanesque parish churches"]
        : ["Botteghe dei coltellinai di Scarperia", "Pranzi in agriturismo", "Pievi romaniche"],
    },
    {
      src: mercati,
      name: isEn ? "Markets and local produce" : "Mercati e prodotti tipici",
      desc: isEn
        ? "Tuscan oil, wine and cheeses at the weekly markets in the area."
        : "Olio, vino e formaggi toscani nei mercati settimanali della zona.",
      meta: isEn ? "10–30 min by car" : "10–30 min in auto",
      long: isEn
        ? "The weekly markets around Sesto and the Florentine countryside are the best way to meet Tuscan producers directly: extra-virgin olive oil from the surrounding hills, Chianti wines, pecorino cheeses, cured meats and seasonal vegetables. We're happy to point you to our favourite stalls."
        : "I mercati settimanali intorno a Sesto e nella campagna fiorentina sono il modo migliore per incontrare direttamente i produttori toscani: olio extravergine delle colline circostanti, vini del Chianti, pecorini, salumi e verdure di stagione. Su richiesta vi indichiamo i banchi che preferiamo.",
      highlights: isEn
        ? ["Extra-virgin olive oil", "Chianti wines", "Pecorino and salumi"]
        : ["Olio extravergine d'oliva", "Vini del Chianti", "Pecorino e salumi"],
    },
  ];

  const modalLabels = {
    close: isEn ? "Close" : "Chiudi",
    highlights: isEn ? "Highlights" : "Da non perdere",
    distance: isEn ? "Distance" : "Distanza",
  };
  const readMoreLabel = isEn ? "Discover more" : "Scopri di più";

  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      {/* HERO */}
      <section
        data-header-theme="light"
        className="relative isolate flex min-h-[92svh] w-full items-end overflow-hidden"
      >
        <img
          src={heroTuscany}
          alt="Tuscany"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-20 pt-40 text-stone-50 md:px-10 md:pb-28 md:pt-48 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.28em] text-stone-100/90">
            {isEn ? "Experiences" : "Esperienze"}
          </p>
          <h1
            data-reveal-order={1}
            className="reveal reveal-editorial m-0 mt-4 block max-w-[16ch] overflow-visible pb-6 pt-1 font-beausite_classic text-[52px] leading-[1.18] tracking-[-0.02em] sm:text-[70px] md:text-[96px] lg:text-[118px]"
          >
            {isEn ? "Our Tips" : "I Nostri Consigli"}
          </h1>
          <p
            data-reveal-order={2}
            className="reveal reveal-editorial mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-stone-100/95 md:text-[20px]"
          >
            {isEn
              ? "Everything worth discovering in the surroundings, selected for you."
              : "Tutto ciò che vale la pena scoprire nei dintorni, selezionato per voi."}
          </p>
        </div>
      </section>

      <PlaceGrid
        eyebrow={isEn ? "Not to be missed" : "Da non perdere"}
        title="Sesto Fiorentino"
        places={sesto}
        bg="bg-[#f6f2eb]"
        onOpen={setActive}
        readMoreLabel={readMoreLabel}
      />
      <PlaceGrid
        eyebrow={isEn ? "30 minutes away" : "A 30 minuti da voi"}
        title={isEn ? "Florence" : "Firenze"}
        places={firenze}
        bg="bg-[#f5f1ea]"
        onOpen={setActive}
        readMoreLabel={readMoreLabel}
      />
      <PlaceGrid
        eyebrow={isEn ? "Nearby" : "Nei dintorni"}
        title={isEn ? "Experiences in Tuscany" : "Esperienze in Toscana"}
        places={dintorni}
        bg="bg-[#ece5da]"
        onOpen={setActive}
        readMoreLabel={readMoreLabel}
      />

      {/* CTA */}
      <section className="bg-[#f6f2eb]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center gap-8 px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
            {isEn ? "Ready to go" : "Pronto a partire"}
          </p>
          <h2 className="reveal reveal-editorial m-0 max-w-[18ch] overflow-visible pb-2 font-beausite_classic text-[40px] leading-[1.02] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[60px]">
            {isEn ? "Book your stay at Villa Sesto" : "Prenota il tuo soggiorno a Villa Sesto"}
          </h2>
          <SectionCta href="/contatti" label={isEn ? "Book your stay" : "Prenota il tuo soggiorno"} />
        </div>
      </section>

      <PlaceModal place={active} onClose={() => setActive(null)} labels={modalLabels} />
    </main>
  );
};
