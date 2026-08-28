import { useLanguage } from "@/lib/i18n/LanguageContext";

export const FooterSocial = () => {
  const { t } = useLanguage();
  return (
    <div
      data-reveal-order={4}
      className="reveal reveal-editorial border-b-stone-50/20 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline w-auto py-9 border-b md:border-b-stone-50 md:min-h-[auto] md:min-w-[auto] md:w-[40.125%] md:py-0 md:border-b-0"
    >
      <h5 className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
        {t("footerSec.follow")}
      </h5>
      <div className="box-border caret-transparent flex flex-wrap outline-[3px] gap-y-1.5 no-underline md:gap-y-[8.22222px]">
        {["Instagram", "Pinterest"].map((label) => (
          <a
            key={label}
            href="#"
            className="box-border caret-transparent block text-xs tracking-[1.2px] leading-[15px] min-h-[auto] min-w-[33.333%] outline-[3px] no-underline uppercase transition-colors duration-200 hover:text-stone-50/80"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};
