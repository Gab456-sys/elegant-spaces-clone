type SuiteSlide = {
  src: string;
  alt: string;
  caption: string;
};

const suiteSlides: SuiteSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=80",
    alt: "Luxury bedroom interior with sculpted headboard and warm natural daylight.",
    caption: "SUITE BEDROOM",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    alt: "Refined living area with calm neutral tones and curated furniture.",
    caption: "LIVING AREA",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1800&q=80",
    alt: "Elegant bathroom with stone finishes and minimal premium fixtures.",
    caption: "BATHROOM",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-3d0f2d4e7ce0?auto=format&fit=crop&w=1800&q=80",
    alt: "Private suite terrace with lounge seating and open horizon view.",
    caption: "TERRACE",
  },
  {
    src: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1800&q=80",
    alt: "Architectural detail of textured wall, fabric and soft ambient light.",
    caption: "DETAIL",
  },
];

export const BasicRoomPage = () => {
  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      <section
        data-header-theme="light"
        className="border-b border-stone-300/70 bg-[#ece5da]"
      >
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-y-12 px-6 pb-14 pt-28 md:grid-cols-12 md:gap-y-16 md:px-10 md:pt-40 lg:px-16">
          <div className="reveal reveal-editorial md:col-span-12">
            <ul className="m-0 mb-6 hidden list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[10px] uppercase tracking-[0.24em] text-stone-700/90 md:flex md:justify-center">
              <li>Studio / Horizon Atelier</li>
              <li>Category / Hospitality</li>
              <li>Location / Tuscany</li>
              <li>Year / 2026</li>
            </ul>
            <h1 className="m-0 font-beausite_classic text-[56px] leading-[0.9] tracking-[-0.03em] text-stone-900 sm:text-[72px] md:text-center md:text-[108px] lg:text-[138px]">
              BASIC ROOM
            </h1>
          </div>

          <div className="reveal reveal-editorial md:col-span-3 md:row-start-2">
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[10px] uppercase tracking-[0.24em] text-stone-700/90 md:hidden">
              <li>Studio / Horizon Atelier</li>
              <li>Category / Hospitality</li>
              <li>Location / Tuscany</li>
              <li>Year / 2026</li>
            </ul>
          </div>

          <figure className="reveal-crop md:col-span-10 md:col-start-2">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=2200&q=80"
                alt="Cinematic suite view with warm light, textured walls and tailored furniture."
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
                alt="Editorial interior corner with bespoke shelving, warm accents and tailored seating."
                className="reveal-media-inner block h-[56svh] w-full object-cover md:h-full md:min-h-[860px]"
              />
            </div>
          </figure>

          <div className="order-1 py-20 md:order-2 md:col-span-6 md:col-start-7 md:py-24">
            <div className="reveal reveal-editorial">
              <p className="m-0 max-w-[34ch] font-beausite_classic text-[27px] leading-[1.12] tracking-[-0.01em] text-stone-900 sm:text-[30px] md:text-[36px] lg:text-[40px]">
                Conceived as a tranquil residence above the landscape, the
                interior balances architectural rigor with a softer hospitality
                cadence.
              </p>
              <p className="m-0 mt-8 max-w-[42ch] text-[16px] leading-[1.55] tracking-[-0.005em] text-stone-900/95 sm:text-[17px] md:text-[19px] lg:text-[21px]">
                Layered stone, brushed oak and hand-finished plaster introduce a
                tactile calm that evolves through the day.
              </p>
            </div>

            <dl className="reveal reveal-editorial-tight mt-14 border-t border-stone-300/80 md:mt-16">
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Client
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Villa Sesto Hospitality Collection
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Location
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Maremma, Toscana, Italia
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
                  Expertise
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Interior Design, Styling, FF&amp;E, Art Curation
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Completed
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  2026
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Sector
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Luxury Hospitality
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Office Location
                </dt>
                <dd className="m-0 pt-1 text-[18px] leading-[1.28] tracking-[-0.004em] text-stone-900 md:pt-0 md:text-[22px]">
                  Milano, Italia
                </dd>
              </div>
              <div className="grid grid-cols-1 border-b border-stone-300/80 py-4 md:grid-cols-[1fr_1.25fr] md:gap-x-10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-600">
                  Photographer Credit
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
              BASIC ROOM
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
                      View all photos
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
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-y-14 px-6 py-20 md:grid-cols-12 md:gap-x-10 md:gap-y-0 md:px-10 md:py-28 lg:px-16">
          <div className="reveal reveal-editorial md:col-span-4">
            <p className="m-0 text-[10px] uppercase tracking-[0.24em] text-stone-600">
              Booking
            </p>
            <h2 className="m-0 mt-5 max-w-[10ch] font-beausite_classic text-[42px] leading-[0.94] tracking-[-0.02em] text-stone-900 sm:text-[52px] md:text-[64px]">
              Reserve your stay
            </h2>
            <p className="m-0 mt-7 max-w-[34ch] text-[16px] leading-[1.55] tracking-[-0.004em] text-stone-800/95">
              Select dates and guests to check current availability with a
              streamlined booking flow designed to stay visually consistent with
              this editorial hospitality page.
            </p>

            <ul className="m-0 mt-10 list-none border-t border-stone-300/80 p-0">
              <li className="border-b border-stone-300/80 py-4">
                <p className="m-0 text-[15px] leading-[1.35] text-stone-900">
                  Family Suite — 80 euro a notte — 4 ospiti
                </p>
              </li>
              <li className="border-b border-stone-300/80 py-4">
                <p className="m-0 text-[15px] leading-[1.35] text-stone-900">
                  Comfort Suite — 50 euro a notte — 2 ospiti — 1 letto
                  aggiuntivo disponibile
                </p>
              </li>
              <li className="border-b border-stone-300/80 py-4">
                <p className="m-0 text-[15px] leading-[1.35] text-stone-900">
                  Basic Room — 40 euro a notte — 2 ospiti
                </p>
              </li>
            </ul>
          </div>

          <div className="reveal reveal-editorial-tight md:col-span-7 md:col-start-6 md:self-stretch">
            <div className="flex h-full w-full flex-col border border-stone-300/75 bg-[#f6f2eb] p-6 md:p-7 lg:p-8">
              <div
                id="suite-booking-embed"
                data-provider="smoobu-or-lodgify"
                data-context="suite-page"
                className="min-h-[252px] flex-1"
              >
                <form className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                    Arrivo
                    <input
                      type="date"
                      className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] uppercase tracking-[0.03em] text-stone-900 outline-none transition-colors focus:border-stone-500"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                    Partenza
                    <input
                      type="date"
                      className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] uppercase tracking-[0.03em] text-stone-900 outline-none transition-colors focus:border-stone-500"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-600 md:col-span-2">
                    Ospiti
                    <select className="h-11 border border-stone-300/80 bg-[#f8f5ef] px-3 text-[14px] text-stone-900 outline-none transition-colors focus:border-stone-500">
                      <option>2 ospiti</option>
                      <option>3 ospiti</option>
                      <option>4 ospiti</option>
                    </select>
                  </label>

                  <button
                    type="button"
                    className="h-11 border border-stone-900 px-5 text-left text-[10px] uppercase tracking-[0.24em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-[#f8f5ef] md:col-span-2"
                  >
                    Verifica disponibilità
                  </button>
                </form>
                {/* Replace this fallback with Smoobu/Lodgify iframe or script mount when available. */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
