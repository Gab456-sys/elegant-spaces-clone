import { useLanguage } from "@/lib/i18n/LanguageContext";
import { legalData } from "@/sections/Footer/components/legalData";

export type LegalPageProps = {
  eyebrow: string;
  title: string;
  body: string[];
};

export const LegalPage = ({ eyebrow, title, body }: LegalPageProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f6efe6] text-[#1b1512] box-border caret-transparent min-h-screen outline-[3px] no-underline pt-32 pb-24 md:pt-[180px] md:pb-[131.556px]">
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto px-6 md:px-[32.8889px] max-w-4xl">
        <div className="box-border caret-transparent outline-[3px] no-underline mb-8 md:mb-[32.8889px]">
          <p className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mb-4">
            {eyebrow}
          </p>
          <h1 className="box-border caret-transparent text-4xl md:text-6xl font-light tracking-[-0.5px] leading-[1.1] outline-[3px] no-underline font-beausite_slick">
            {title}
          </h1>
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline space-y-6 md:space-y-[26px]">
          {body.map((paragraph, index) => (
            <p
              key={index}
              className="box-border caret-transparent text-base md:text-lg font-light tracking-[0.2px] leading-[1.7] outline-[3px] no-underline"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-16 pt-8 border-t border-[#1b1512]/15">
          <p className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase">
            {legalData.businessName} / {legalData.address} /{" "}
            {t("footerSec.legal.vat")} {legalData.vat} /{" "}
            {t("footerSec.legal.cin")} {legalData.cin}
          </p>
        </div>
      </div>
    </section>
  );
};
