import { useLanguage } from "@/lib/i18n/LanguageContext";

type SuiteSlide = {
  src: string;
  alt: string;
  caption: string;
};

const suiteSlides: SuiteSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=80",
    alt: "Suite bedroom",
    caption: "SUITE BEDROOM",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    alt: "Living area",
    caption: "LIVING AREA",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1800&q=80",
    alt: "Bathroom",
    caption: "BATHROOM",
  },
];

export const SuiteTemplate = ({ title }: { title: string }) => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      <section
        data-header-theme="light"
        className="border-b border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-y-12 px-6 pb-14 pt-28 md:grid-cols-12 md:gap-y-16 md:px-10 md:pt-40 lg:px-16">
          <div className="reveal reveal-editorial md:col-span-12">
            <ul className="m-0 mb-6 hidden list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[10px] uppercase tracking-[0.24em] text-stone-700/90 md:flex md:justify-center">
              <li>{isEn ? "Studio / Horizon Atelier" : "Studio / Horizon Atelier"}</li>
              <li>{isEn ? "Category / Hospitality" : "Categoria / Ospitalità"}</li>
              <li>{isEn ? "Location / Tuscany" : "Luogo / Toscana"}</li>
              <li>{isEn ? "Year / 2026" : "Anno / 2026"}</li>
            </ul>
            <h1 className="m-0 font-beausite_classic text-[56px] leading-[0.9] tracking-[-0.03em] text-stone-900 sm:text-[72px] md:text-center md:text-[108px] lg:text-[138px]">
              {title}
            </h1>
          </div>

          <div className="reveal reveal-editorial md:col-span-3 md:row-start-2">
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[10px] uppercase tracking-[0.24em] text-stone-700/90 md:hidden">
              <li>Studio / Horizon Atelier</li>
              <li>{isEn ? "Category / Hospitality" : "Categoria / Ospitalità"}</li>
              <li>{isEn ? "Location / Tuscany" : "Luogo / Toscana"}</li>
              <li>{isEn ? "Year / 2026" : "Anno / 2026"}</li>
            </ul>
          </div>

          <figure className="reveal-crop md:col-span-10 md:col-start-2">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=2200&q=80"
                alt={title}
                className="reveal-media-inner block h-[52svh] w-full object-cover md:h-[72svh]"
              />
            </div>
          </figure>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f6f2eb]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-y-0 px-6 py-0 md:grid-cols-12 md:gap-x-10 md:px-10 lg:px-16">
          <figure className="reveal-crop order-2 md:order-1 md:col-span-5 md:self-stretch">
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1600&q=80"
                alt="Interior detail"
                className="reveal-media-inner block h-[56svh] w-full object-cover md:h-full md:min-h-[860px]"
              />
            </div>
          </figure>

          <div className="order-1 py-20 md:order-2 md:col-span-6 md:col-start-7 md:py-24">
            <div className="reveal reveal-editorial">
              <p className="m-0 max-w-[34ch] font-beausite_classic text-[27px] leading-[1.12] tracking-[-0.01em] text-stone-900 sm:text-[30px] md:text-[36px] lg:text-[40px]">
                {isEn
                  ? "Conceived as a tranquil residence above the landscape, the interior balances architectural rigor with a softer hospitality cadence."
                  : "Concepita come una residenza tranquilla sopra il paesaggio, gli interni bilanciano il rigore architettonico con una cadenza più morbida dell'ospitalità."}
              </p>
              <p className="m-0 mt-8 max-w-[42ch] text-[16px] leading-[1.55] tracking-[-0.005em] text-stone-900/95 sm:text-[17px] md:text-[19px] lg:text-[21px]">
                {isEn
                  ? "Layered stone, brushed oak and hand-finished plaster introduce a tactile calm that evolves through the day."
                  : "Pietra stratificata, rovere spazzolato e intonaco rifinito a mano introducono una calma tattile che evolve nel corso della giornata."}
              </p>
            </div>

            <dl className="reveal reveal-editorial-tight mt-14 border-t border-stone-300/80 md:mt-16">
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Client" : "Cliente"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Villa Sesto Hospitality Collection
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Location" : "Luogo"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  {isEn ? "Maremma, Tuscany, Italy" : "Maremma, Toscana, Italia"}
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Studio
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Horizon Atelier
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Expertise" : "Competenze"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  {isEn
                    ? "Interior Design, Styling, FF&E, Art Curation"
                    : "Interior Design, Styling, FF&E, Curatela artistica"}
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Completed" : "Completato"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  2026
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Sector" : "Settore"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  {isEn ? "Luxury Hospitality" : "Ospitalità di lusso"}
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Office Location" : "Sede dello studio"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  {isEn ? "Milan, Italy" : "Milano, Italia"}
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  {isEn ? "Photographer Credit" : "Crediti fotografici"}
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Luca Ferretti Studio
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="border-b border-stone-300/70 bg-[#f5f1ea]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-y-12 px-6 py-20 md:grid-cols-12 md:gap-y-14 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial md:col-span-12">
            <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600 md:text-center">
              {title}
            </p>
          </div>

          <div className="reveal reveal-editorial-tight md:col-span-12">
            <div className="mx-auto w-full max-w-[1120px]">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <figure className="col-span-12 m-0 overflow-hidden rounded-md bg-stone-200 md:col-span-8">
                  <div className="aspect-[4/3]">
                    <img
                      src={suiteSlides[0].src}
                      alt={suiteSlides[0].alt}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </figure>

                <div className="col-span-12 grid grid-cols-1 gap-4 md:col-span-4 md:gap-6">
                  <figure className="m-0 overflow-hidden rounded-md bg-stone-200">
                    <div className="aspect-[4/3]">
                      <img
                        src={suiteSlides[1].src}
                        alt={suiteSlides[1].alt}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  </figure>

                  <figure className="relative m-0 overflow-hidden rounded-md bg-stone-200">
                    <div className="aspect-[4/3]">
                      <img
                        src={suiteSlides[2].src}
                        alt={suiteSlides[2].alt}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm text-black transition-opacity duration-300 hover:opacity-90"
                    >
                      {isEn ? "View all photos" : "Vedi tutte le foto"}
                    </button>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="border-t border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto w-full max-w-[1680px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
            <figure className="reveal-crop order-2 m-0 md:order-1 md:col-span-5">
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
                  alt={isEn ? "Room interior" : "Interno camera"}
                  className="reveal-media-inner block h-[52svh] w-full object-cover md:h-full md:min-h-[640px]"
                />
              </div>
            </figure>

            <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
              <div className="reveal reveal-editorial mb-10 md:mb-12">
                <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
                  {isEn ? "Booking" : "Prenotazione"}
                </p>
                <h2 className="m-0 mt-5 max-w-[12ch] font-beausite_classic text-[42px] leading-[0.94] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:max-w-none md:text-[64px]">
                  {isEn ? "Reserve your stay" : "Prenota il tuo soggiorno"}
                </h2>
                <p className="m-0 mt-7 max-w-[42ch] text-[16px] leading-[1.55] tracking-[-0.004em] text-stone-800/95">
                  {isEn
                    ? "Select your dates and the number of guests to check your suite's availability. You'll receive a quick, personalized confirmation to plan your stay with complete peace of mind."
                    : "Seleziona le date e il numero di ospiti per verificare la disponibilità della tua suite. Riceverai una conferma rapida e personalizzata per pianificare il tuo soggiorno in completa tranquillità."}
                </p>
              </div>

              <div className="reveal reveal-editorial-tight">
                <div className="w-full border border-stone-300/75 bg-[#f6f2eb] p-5 md:p-6">
                  <div
                    id="suite-booking-embed"
                    data-provider="smoobu-or-lodgify"
                    data-context="suite-page"
                  >
                    <form className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                      <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                        {isEn ? "Arrival" : "Arrivo"}
                        <input
                          type="date"
                          className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] uppercase tracking-[0.03em] text-stone-900 outline-none transition-colors focus:border-stone-500"
                        />
                      </label>

                      <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                        {isEn ? "Departure" : "Partenza"}
                        <input
                          type="date"
                          className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] uppercase tracking-[0.03em] text-stone-900 outline-none transition-colors focus:border-stone-500"
                        />
                      </label>

                      <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600 md:col-span-2">
                        {isEn ? "Guests" : "Ospiti"}
                        <select className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] text-stone-900 outline-none transition-colors focus:border-stone-500">
                          <option>{isEn ? "2 guests" : "2 ospiti"}</option>
                          <option>{isEn ? "3 guests" : "3 ospiti"}</option>
                          <option>{isEn ? "4 guests" : "4 ospiti"}</option>
                        </select>
                      </label>

                      <button
                        type="button"
                        className="h-11 border border-stone-900 px-5 text-left text-[10px] uppercase tracking-[0.24em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-[#f8f5ef] md:col-span-2"
                      >
                        {isEn ? "Check availability" : "Verifica disponibilità"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
