import { SectionCta } from "@/components/SectionCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const IconWifi = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M2 8.5a15 15 0 0 1 20 0" strokeLinecap="round" />
    <path d="M5 12a11 11 0 0 1 14 0" strokeLinecap="round" />
    <path d="M8 15.5a6.5 6.5 0 0 1 8 0" strokeLinecap="round" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);
const IconAC = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3v18M3 12h18M5 5l14 14M19 5 5 19" strokeLinecap="round" />
  </svg>
);
const IconBreakfast = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 10h13a3 3 0 0 1 0 6h-1M4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5H4Z" />
    <path d="M7 6c0-1 1-1 1-2M11 6c0-1 1-1 1-2" strokeLinecap="round" />
  </svg>
);
const IconParking = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M10 17V8h3a2.5 2.5 0 0 1 0 5h-3" strokeLinecap="round" />
  </svg>
);
const IconLuggage = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="5" y="7" width="14" height="13" rx="2" />
    <path d="M9 7V4h6v3M9 11v6M15 11v6" strokeLinecap="round" />
  </svg>
);
const IconPet = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="6" cy="10" r="1.6" /><circle cx="10" cy="6" r="1.6" />
    <circle cx="14" cy="6" r="1.6" /><circle cx="18" cy="10" r="1.6" />
    <path d="M8 17c0-3 2-5 4-5s4 2 4 5a2.5 2.5 0 0 1-2.5 2.5c-1 0-1.5-.5-1.5-.5s-.5.5-1.5.5A2.5 2.5 0 0 1 8 17Z" />
  </svg>
);
const IconCrib = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 8v12M20 8v12M4 12h16M6 20h12" strokeLinecap="round" />
    <path d="M4 8c2-4 14-4 16 0" strokeLinecap="round" />
  </svg>
);

export const LaVillaPage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const spaces = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      label: isEn ? "COMMON AREA" : "AREA COMUNE",
      caption: isEn
        ? "A luminous lounge where you can slow down between engagements."
        : "Un salotto luminoso dove rallentare tra un impegno e l'altro.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Villa_gamberaia_01.JPG",
      label: isEn ? "TERRACE AND GARDEN" : "TERRAZZA E GIARDINO",
      caption: isEn
        ? "Outdoor spaces immersed in the Tuscan greenery."
        : "Spazi all'aperto immersi nel verde toscano.",
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
      label: isEn ? "BREAKFAST ROOM" : "SALA COLAZIONE",
      caption: isEn
        ? "Italian and continental breakfast served every morning."
        : "Colazione italiana e continentale servita ogni mattina.",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      label: isEn ? "ENTRANCE" : "INGRESSO",
      caption: isEn
        ? "A discreet welcome, cared for in every detail."
        : "Un'accoglienza discreta, curata in ogni dettaglio.",
    },
  ];

  const services = [
    {
      icon: <IconWifi />,
      label: isEn ? "Free Wi-Fi" : "Wi-Fi gratuito",
      desc: isEn
        ? "Fast connection in all rooms and common areas."
        : "Connessione veloce in tutte le camere e nelle aree comuni.",
    },
    {
      icon: <IconAC />,
      label: isEn ? "Air conditioning" : "Aria condizionata",
      desc: isEn
        ? "Climate comfort in every season of the year."
        : "Comfort climatico in ogni stagione dell'anno.",
    },
    {
      icon: <IconBreakfast />,
      label: isEn ? "Italian breakfast" : "Colazione italiana",
      desc: isEn
        ? "Sweet and savoury items, every morning from 8:00 to 10:00."
        : "Prodotti dolci e salati, ogni mattina dalle 08:00 alle 10:00.",
    },
    {
      icon: <IconParking />,
      label: isEn ? "Private 24h parking" : "Parcheggio privato 24h",
      desc: isEn
        ? "Reserved parking spots, accessible day and night."
        : "Posti auto riservati, sempre accessibili giorno e notte.",
    },
    {
      icon: <IconLuggage />,
      label: isEn ? "Luggage storage" : "Custodia bagagli",
      desc: isEn
        ? "Free storage before check-in and after check-out."
        : "Deposito gratuito prima del check-in e dopo il check-out.",
    },
    {
      icon: <IconPet />,
      label: isEn ? "Pets on request" : "Animali su richiesta",
      desc: isEn
        ? "We welcome small pets, subject to confirmation."
        : "Accogliamo piccoli amici a quattro zampe, previa conferma.",
    },
    {
      icon: <IconCrib />,
      label: isEn ? "Cot available" : "Culla disponibile",
      desc: isEn
        ? "On request we provide a cot or small bed for the little ones."
        : "Su richiesta forniamo culla o lettino per i più piccoli.",
    },
  ];

  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      {/* HERO */}
      <section
        data-header-theme="light"
        className="relative isolate flex min-h-[92svh] w-full items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2200&q=80"
          alt="Villa Sesto"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-20 pt-40 text-stone-50 md:px-10 md:pb-28 md:pt-48 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.28em] text-stone-100/90">
            {isEn ? "Welcome" : "Benvenuti"}
          </p>
          <h1
            data-reveal-order={1}
            className="reveal reveal-editorial m-0 mt-4 max-w-[14ch] font-beausite_classic text-[56px] leading-[0.95] tracking-[-0.02em] sm:text-[76px] md:text-[104px] lg:text-[128px]"
          >
            {isEn ? "The Property" : "La Struttura"}
          </h1>
          <p
            data-reveal-order={2}
            className="reveal reveal-editorial mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-stone-100/95 md:text-[20px]"
          >
            {isEn
              ? "A haven of hospitality where light, quiet and attention to detail accompany every stay."
              : "Un rifugio di ospitalità dove luce, quiete e cura del dettaglio accompagnano ogni soggiorno."}
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f6f2eb]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-x-14 md:px-10 md:py-28 lg:px-16">
          <figure className="reveal-crop h-full md:col-span-5">
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
                alt="Villa Sesto"
                className="reveal-media-inner block h-[60svh] w-full object-cover md:h-full md:min-h-[78svh]"
              />
            </div>
          </figure>
          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "Our story" : "La nostra storia"}
            </p>
            <h2
              data-reveal-order={1}
              className="reveal reveal-editorial m-0 mt-5 max-w-[14ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]"
            >
              {isEn
                ? "Authentic hospitality in Sesto Fiorentino"
                : "Ospitalità autentica a Sesto Fiorentino"}
            </h2>
            <p
              data-reveal-order={2}
              className="reveal reveal-editorial m-0 mt-8 max-w-[52ch] text-[17px] leading-[1.6] text-stone-800/95 md:text-[19px]"
            >
              {isEn
                ? "Villa Sesto was born from the desire to offer a sincere welcome, just minutes from Florence yet far from its pace. A home where common areas invite you to pause, rooms breathe quiet, and the surrounding land becomes part of the stay."
                : "Villa Sesto nasce dal desiderio di offrire un'accoglienza sincera, a pochi minuti da Firenze ma lontano dal suo ritmo. Una casa dove gli spazi comuni invitano a fermarsi, le camere respirano quiete e il territorio circostante diventa parte del soggiorno."}
            </p>
            <p
              data-reveal-order={3}
              className="reveal reveal-editorial m-0 mt-6 max-w-[52ch] text-[17px] leading-[1.6] text-stone-800/95 md:text-[19px]"
            >
              {isEn
                ? "Our philosophy is simple: care for detail, time dedicated to every guest, and a familiar atmosphere that accompanies every moment of the day."
                : "La nostra filosofia è semplice: cura del dettaglio, tempo dedicato a ogni ospite, un'atmosfera familiare che accompagna ogni momento della giornata."}
            </p>
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f5f1ea]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial mb-14 md:mb-20 md:text-center">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "Our spaces" : "I nostri spazi"}
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              {isEn ? "Spaces designed for wellbeing" : "Ambienti pensati per stare bene"}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {spaces.map((space, index) => (
              <figure
                key={space.label}
                data-reveal-order={index}
                className="reveal-crop m-0"
              >
                <div className="overflow-hidden">
                  <img
                    src={space.src}
                    alt={space.label}
                    className="reveal-media-inner block h-[46svh] w-full object-cover md:h-[42svh]"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
                    {space.label}
                  </p>
                  <p className="m-0 mt-2 text-[15px] leading-[1.5] text-stone-800/95">
                    {space.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial mb-14 md:mb-20 md:text-center">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "Included services" : "Servizi inclusi"}
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              {isEn ? "Everything you need" : "Tutto ciò di cui hai bisogno"}
            </h2>
          </div>
          <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-10 p-0 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={service.label}
                data-reveal-order={index}
                className="reveal reveal-editorial border-t border-stone-400/50 pt-6"
              >
                <div className="text-stone-900">{service.icon}</div>
                <p className="m-0 mt-5 text-[11px] uppercase tracking-[0.22em] text-stone-900">
                  {service.label}
                </p>
                <p className="m-0 mt-3 text-[15px] leading-[1.55] text-stone-800/90">
                  {service.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f2eb]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center gap-8 px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
            {isEn ? "Keep exploring" : "Continua a scoprire"}
          </p>
          <h2 className="reveal reveal-editorial m-0 max-w-[18ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[60px]">
            {isEn ? "Our suites are waiting for you" : "Le nostre suite ti aspettano"}
          </h2>
          <SectionCta href="/#suite" label={isEn ? "Discover the suites" : "Scopri le suite"} />
        </div>
      </section>
    </main>
  );
};
