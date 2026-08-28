import { legalData } from "@/sections/Footer/components/legalData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Separator = () => (
  <span className="box-border caret-transparent opacity-50 outline-[3px] no-underline">
    {" / "}
  </span>
);

export const FooterLegal = () => {
  const { t } = useLanguage();

  return (
    <div
      data-reveal-order={4}
      className="reveal reveal-editorial box-border caret-transparent outline-[3px] no-underline pt-12 md:pt-[65.7778px]"
    >
      <div className="box-border caret-transparent outline-[3px] no-underline border-t border-stone-50/20 pt-9 md:pt-[32.8889px]">
        <h5 className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
          {t("footerSec.legal.title")}
        </h5>
        <p className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase">
          <span className="box-border caret-transparent outline-[3px] no-underline">
            {legalData.businessName}
          </span>
          <Separator />
          <span className="box-border caret-transparent outline-[3px] no-underline">
            {legalData.address}
          </span>
          <Separator />
          <span className="box-border caret-transparent outline-[3px] no-underline">
            {t("footerSec.legal.vat")} {legalData.vat}
          </span>
          <Separator />
          <span className="box-border caret-transparent outline-[3px] no-underline">
            {t("footerSec.legal.cin")} {legalData.cin}
          </span>
          {legalData.cir ? (
            <>
              <Separator />
              <span className="box-border caret-transparent outline-[3px] no-underline">
                {t("footerSec.legal.cir")} {legalData.cir}
              </span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};
