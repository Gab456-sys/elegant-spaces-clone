import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const IconTrain = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 10h14M9 20l-2 2M15 20l2 2" strokeLinecap="round" />
    <circle cx="9" cy="14" r="1" fill="currentColor" />
    <circle cx="15" cy="14" r="1" fill="currentColor" />
  </svg>
);
const IconCar = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 15v-2l2-5h12l2 5v2" />
    <path d="M4 15h16v3H4z" />
    <circle cx="8" cy="18" r="1.4" fill="currentColor" />
    <circle cx="16" cy="18" r="1.4" fill="currentColor" />
  </svg>
);
const IconPlane = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M2 14l20-8-6 15-3-6-6-3-5 2z" strokeLinejoin="round" />
  </svg>
);

export const ContattiPage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrival: "",
    departure: "",
    message: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      {/* HERO */}
      <section
        data-header-theme="light"
        className="relative isolate flex min-h-[80svh] w-full items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80"
          alt="Villa Sesto"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        <div className="mx-auto w-full max-w-[1680px] px-6 pb-20 pt-40 text-stone-50 md:px-10 md:pb-28 md:pt-48 lg:px-16">
          <p className="reveal reveal-editorial-tight m-0 text-[11px] uppercase tracking-[0.28em] text-stone-100/90">
            {isEn ? "We are here" : "Siamo qui"}
          </p>
          <h1
            data-reveal-order={1}
            className="reveal reveal-editorial m-0 mt-4 max-w-[14ch] font-beausite_classic text-[56px] leading-[0.95] tracking-[-0.02em] sm:text-[76px] md:text-[104px] lg:text-[128px]"
          >
            {isEn ? "Contact" : "Contatti"}
          </h1>
          <p
            data-reveal-order={2}
            className="reveal reveal-editorial mt-8 max-w-[52ch] text-[17px] leading-[1.55] text-stone-100/95 md:text-[20px]"
          >
            {isEn
              ? "Write or call us for any information. We'll be happy to reply."
              : "Scrivici o chiamaci per qualsiasi informazione. Risponderemo con piacere."}
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f6f2eb]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-14 px-6 py-20 md:grid-cols-2 md:gap-x-16 md:px-10 md:py-28 lg:px-16">
          {/* FORM */}
          <div className="reveal reveal-editorial">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "Write to us" : "Scrivici"}
            </p>
            <h2 className="m-0 mt-5 max-w-[14ch] font-beausite_classic text-[36px] leading-[1] tracking-[-0.02em] text-stone-900 sm:text-[44px] md:text-[52px]">
              {isEn ? "Request information" : "Richiedi informazioni"}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600 md:col-span-2">
                {isEn ? "Full name" : "Nome completo"}
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="h-11 border-b border-stone-400/70 bg-transparent px-0 text-[15px] text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-11 border-b border-stone-400/70 bg-transparent px-0 text-[15px] text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600">
                {isEn ? "Phone (optional)" : "Telefono (opzionale)"}
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="h-11 border-b border-stone-400/70 bg-transparent px-0 text-[15px] text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600">
                {isEn ? "Arrival date" : "Data di arrivo"}
                <input
                  type="date"
                  name="arrival"
                  value={form.arrival}
                  onChange={handleChange}
                  className="h-11 border-b border-stone-400/70 bg-transparent px-0 text-[15px] uppercase text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600">
                {isEn ? "Departure date" : "Data di partenza"}
                <input
                  type="date"
                  name="departure"
                  value={form.departure}
                  onChange={handleChange}
                  className="h-11 border-b border-stone-400/70 bg-transparent px-0 text-[15px] uppercase text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-600 md:col-span-2">
                {isEn ? "Message" : "Messaggio"}
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="resize-none border-b border-stone-400/70 bg-transparent px-0 py-3 text-[15px] leading-[1.5] text-stone-900 outline-none transition-colors focus:border-stone-900"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group relative inline-flex w-fit items-center overflow-hidden rounded-[30px] border border-stone-900 px-5 pb-2.5 pt-3 text-[11px] uppercase tracking-[1.1px] leading-[13px] transition-colors duration-500 hover:text-stone-100"
                >
                  <span className="relative z-[1]">
                    {isEn ? "Send request" : "Invia richiesta"}
                  </span>
                  <span className="absolute left-0 top-full z-0 h-full w-full bg-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:-translate-y-full" />
                </button>
              </div>
            </form>
          </div>

          {/* INFO */}
          <div className="reveal reveal-editorial md:pl-10">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "The property" : "La struttura"}
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[36px] leading-[1] tracking-[-0.02em] text-stone-900 sm:text-[44px] md:text-[52px]">
              Villa Sesto
            </h2>
            <dl className="mt-10 border-t border-stone-300/80">
              <div className="border-b border-stone-300/80 py-5">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-stone-600">
                  {isEn ? "Address" : "Indirizzo"}
                </dt>
                <dd className="m-0 mt-2 text-[16px] leading-[1.5] text-stone-900">
                  Viale Giulio Cesare 21, Sesto Fiorentino (FI)
                  <br />
                  <a
                    href="https://maps.google.com/?q=Viale+Giulio+Cesare+21+Sesto+Fiorentino"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[11px] uppercase tracking-[0.22em] text-stone-700 underline underline-offset-4 transition-colors hover:text-stone-900"
                  >
                    {isEn ? "Open in Google Maps" : "Apri in Google Maps"}
                  </a>
                </dd>
              </div>
              <div className="border-b border-stone-300/80 py-5">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-stone-600">
                  Email
                </dt>
                <dd className="m-0 mt-2 text-[16px] leading-[1.5] text-stone-900">
                  <a
                    href="mailto:info@villasesto.it"
                    className="transition-colors hover:text-stone-600"
                  >
                    info@villasesto.it
                  </a>
                </dd>
              </div>
              <div className="border-b border-stone-300/80 py-5">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-stone-600">
                  Check-in
                </dt>
                <dd className="m-0 mt-2 text-[16px] leading-[1.5] text-stone-900">
                  14:00 – 19:00
                </dd>
              </div>
              <div className="border-b border-stone-300/80 py-5">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-stone-600">
                  Check-out
                </dt>
                <dd className="m-0 mt-2 text-[16px] leading-[1.5] text-stone-900">
                  {isEn ? "By 10:30" : "Entro le 10:30"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* HOW TO REACH */}
      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial mb-14 md:mb-20 md:text-center">
            <p className="m-0 text-[11px] uppercase tracking-[0.24em] text-stone-600">
              {isEn ? "How to reach us" : "Come arrivare"}
            </p>
            <h2 className="m-0 mt-5 font-beausite_classic text-[40px] leading-[0.98] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              {isEn ? "Minutes away from everything" : "A pochi minuti da tutto"}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: <IconTrain />,
                title: isEn ? "By train" : "In treno",
                text: isEn
                  ? "Zambra station, 8 minutes on foot from the property."
                  : "Stazione Zambra, 8 minuti a piedi dalla struttura.",
              },
              {
                icon: <IconCar />,
                title: isEn ? "By car" : "In auto",
                text: isEn
                  ? "No ZTL. Free private 24h parking reserved for guests."
                  : "Nessuna ZTL. Parcheggio privato gratuito 24h riservato agli ospiti.",
              },
              {
                icon: <IconPlane />,
                title: isEn ? "By plane" : "In aereo",
                text: isEn
                  ? "Florence Vespucci Airport, 10 minutes by taxi or car."
                  : "Aeroporto di Firenze Vespucci, 10 minuti in taxi o auto.",
              },
            ].map((block, index) => (
              <div
                key={block.title}
                data-reveal-order={index}
                className="reveal reveal-editorial border-t border-stone-400/50 pt-6"
              >
                <div className="text-stone-900">{block.icon}</div>
                <p className="m-0 mt-5 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-900">
                  {block.title}
                </p>
                <p className="m-0 mt-3 text-[15px] leading-[1.55] text-stone-800/90">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
