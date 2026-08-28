import { legalData } from "@/sections/Footer/components/legalData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const contactLinkClassName =
  "box-border caret-transparent block text-2xl font-light tracking-[0.48px] leading-[33px] outline-[3px] no-underline break-words transition-colors duration-200 hover:text-stone-50/80 font-beausite_slick md:text-[22px] md:tracking-[0.44px]";

export const FooterContact = () => {
  const { t } = useLanguage();
  return (
    <div
      data-reveal-order={3}
      className="reveal reveal-editorial border-b-stone-50/20 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline w-auto py-9 border-b md:border-b-stone-50 md:min-h-[auto] md:min-w-[auto] md:w-[30%] md:py-0 md:border-b-0"
    >
      <h5 className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
        {t("footerSec.contact")}
      </h5>
      <a
        href={`mailto:${legalData.email}`}
        className={contactLinkClassName}
      >
        {legalData.email}
      </a>
      <a
        href={`tel:${legalData.phoneHref}`}
        className={contactLinkClassName}
      >
        {legalData.phone}
      </a>
      <p className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mt-[13.7143px] md:mt-[18.7937px]">
        {t("footerSec.checkin")}
      </p>
    </div>
  );
};
