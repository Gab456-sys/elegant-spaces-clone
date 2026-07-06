import { useLanguage } from "@/lib/i18n/LanguageContext";

export const FooterIntro = () => {
  const { t } = useLanguage();
  return (
    <div
      data-reveal-order={1}
      className="reveal reveal-editorial box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:w-[16.6667%]"
    >
      <p className="box-border caret-transparent text-sm tracking-[0.7px] leading-[19px] outline-[3px] no-underline mb-6">
        {t("footerSec.intro")}
        <br className="box-border caret-transparent outline-[3px] no-underline" />
        <br className="box-border caret-transparent outline-[3px] no-underline" />
        {t("footerSec.intro2")}
      </p>
    </div>
  );
};
