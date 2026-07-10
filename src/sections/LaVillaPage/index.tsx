import { SectionCta } from "@/components/SectionCta";

const spaces = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    label: "AREA COMUNE",
    caption: "Un salotto luminoso dove rallentare tra un impegno e l'altro.",
  },
  {
    src: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?auto=format&fit=crop&w=1400&q=80",
    label: "TERRAZZA E GIARDINO",
    caption: "Spazi all'aperto immersi nel verde toscano.",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
    label: "SALA COLAZIONE",
    caption: "Colazione italiana e continentale servita ogni mattina.",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    label: "INGRESSO",
    caption: "Un'accoglienza discreta, curata in ogni dettaglio.",
  },
];

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

const services = [
  { icon: <IconWifi />, label: "Wi-Fi gratuito", desc: "Connessione veloce in tutte le camere e nelle aree comuni." },
  { icon: <IconAC />, label: "Aria condizionata", desc: "Comfort climatico in ogni stagione dell'anno." },
  { icon: <IconBreakfast />, label: "Colazione italiana", desc: "Prodotti dolci e salati, ogni mattina dalle 08:00 alle 10:00." },
  { icon: <IconParking />, label: "Parcheggio privato 24h", desc: "Posti auto riservati, sempre accessibili giorno e notte." },
  { icon: <IconLuggage />, label: "Custodia bagagli", desc: "Deposito gratuito prima del check-in e dopo il check-out." },
  { icon: <IconPet />, label: "Animali su richiesta", desc: "Accogliamo piccoli amici a quattro zampe, previa conferma." },
  { icon: <IconCrib />, label: "Culla disponibile", desc: "Su richiesta forniamo culla o lettino per i più piccoli." },
];

export const LaVillaPage = () => {
  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      {/* HERO */}
      <section
        data-header-theme="light"
        className="relative isolate flex min-h-[92svh] w-full items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2200&q=80"
          alt="Villa Sesto immersa nella luce toscana"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-20 pt-40 text-stone-50 md:px-10 md:pb-28 md:pt-48 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.28em] text-stone-100/90">
            Benvenuti
          </p>
          <h1
            data-reveal-order={1}
            className="reveal reveal-editorial m-0 mt-4 max-w-[14ch] font-beausite_classic text-[56px] leading-[0.95] tracking-[-0.02em] sm:text-[76px] md:text-[104px] lg:text-[128px]"
          >
            La Villa
          </h1>
          <p
            data-reveal-order={2}
            className="reveal reveal-editorial mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-stone-100/95 md:text-[20px]"
          >
            Un rifugio di ospitalità dove luce, quiete e cura del dettaglio
            accompagnano ogni soggiorno.
          </p>
        </div>
      </section>

      {/* LA STRUTTURA */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f6f2eb]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-x-14 md:px-10 md:py-28 lg:px-16">
          <figure className="reveal-crop md:col-span-5">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
                alt="Facciata della villa immersa nel verde"
                className="reveal-media-inner block h-[60svh] w-full object-cover md:h-[78svh]"
              />
            </div>
          </figure>
          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              La nostra storia
            </p>
            <h2
              data-reveal-order={1}
              className="reveal reveal-editorial m-0 mt-5 max-w-[14ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]"
            >
              Ospitalità autentica a Sesto Fiorentino
            </h2>
            <p
              data-reveal-order={2}
              className="reveal reveal-editorial m-0 mt-8 max-w-[52ch] text-[17px] leading-[1.6] text-stone-800/95 md:text-[19px]"
            >
              Villa Sesto nasce dal desiderio di offrire un'accoglienza sincera,
              a pochi minuti da Firenze ma lontano dal suo ritmo. Una casa dove
              gli spazi comuni invitano a fermarsi, le camere respirano quiete
              e il territorio circostante diventa parte del soggiorno.
            </p>
            <p
              data-reveal-order={3}
              className="reveal reveal-editorial m-0 mt-6 max-w-[52ch] text-[17px] leading-[1.6] text-stone-800/95 md:text-[19px]"
            >
              La nostra filosofia è semplice: cura del dettaglio, tempo dedicato
              a ogni ospite, un'atmosfera familiare che accompagna ogni
              momento della giornata.
            </p>
          </div>
        </div>
      </section>

      {/* I NOSTRI SPAZI */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f5f1ea]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial mb-14 md:mb-20 md:text-center">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              I nostri spazi
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              Ambienti pensati per stare bene
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

      {/* SERVIZI INCLUSI */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial mb-14 md:mb-20 md:text-center">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              Servizi inclusi
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              Tutto ciò di cui hai bisogno
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
            Continua a scoprire
          </p>
          <h2 className="reveal reveal-editorial m-0 max-w-[18ch] font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[60px]">
            Le nostre suite ti aspettano
          </h2>
          <SectionCta href="/#suite" label="Scopri le suite" />
        </div>
      </section>
    </main>
  );
};
