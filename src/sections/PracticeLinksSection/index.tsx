import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/lib/i18n/dictionaries/it";

const faqKeys: Array<{ q: TranslationKey; a: TranslationKey }> = Array.from(
  { length: 15 },
  (_, i) => ({
    q: `faq.q${i + 1}` as TranslationKey,
    a: `faq.a${i + 1}` as TranslationKey,
  }),
);



export const PracticeLinksSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section
      id="faq"
      className="relative z-[2] overflow-hidden border-b border-stone-300/35 bg-stone-100 text-gray-900"
    >
      <div className="absolute inset-0 z-[1] overflow-hidden" aria-label="Villa Sesto vista esterna">
        <div
          className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(0,0,0,0.68) 0%,rgba(0,0,0,0.42) 52%,rgba(0,0,0,0.28) 100%), url('https://c.animaapp.com/mq6uygebb47riI/assets/HBA-home-seo-img.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto w-full px-6 py-20 text-stone-50 md:px-[32.8889px] md:py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 md:grid-cols-12 md:gap-10 lg:gap-14">
          <header className="md:col-span-4">
            <div className="text-center md:sticky md:top-24 md:text-left">
              <p className="mb-5 text-[11px] uppercase tracking-[1.6px] text-stone-300">
                {t("faq.eyebrow")}
              </p>

              <h2 className="mx-auto mb-7 max-w-[11ch] font-beausite_slick text-[40px] font-light leading-[0.98] md:mx-0 md:text-[64px]">
                {t("faq.title")}
              </h2>

              <p className="mx-auto max-w-[34ch] text-[15px] leading-7 text-stone-200 md:mx-0 md:text-base">
                {t("faq.intro")}
              </p>

            </div>
          </header>

          <div className="md:col-span-8">
            <ol className="border-y border-stone-50/30">
              {faqKeys.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <li
                    key={faq.q}
                    className="border-b border-stone-50/25 last:border-b-0"
                    data-reveal-order={index + 1}
                  >
                    <div className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-stone-50/[0.03]">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left md:gap-8 md:py-7"
                        aria-expanded={isOpen}
                      >
                        <div className="flex min-w-0 items-start gap-4 md:gap-6">
                          <span className="pt-1 text-[10px] uppercase tracking-[1.2px] text-stone-300 md:text-[11px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-beausite_classic text-[19px] leading-[1.25] text-stone-50 md:text-[24px]">
                            {t(faq.q)}
                          </h3>
                        </div>

                        <span
                          aria-hidden="true"
                          className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center text-stone-300"
                        >
                          <span className="relative block h-3.5 w-3.5">
                            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                            <span
                              className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isOpen ? "scale-y-0" : "scale-y-100"
                              }`}
                            />
                          </span>
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen
                            ? "[grid-template-rows:1fr]"
                            : "[grid-template-rows:0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`w-full pb-7 pl-[1.65rem] pr-2 text-[15px] leading-7 text-stone-200 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:pb-8 md:pl-[2.15rem] md:pr-4 md:text-base ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            {t(faq.a)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
