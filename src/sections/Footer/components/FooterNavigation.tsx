import { FooterRegion } from "@/sections/Footer/components/FooterRegion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Link } from "react-router-dom";

export const FooterNavigation = () => {
  const { t } = useLanguage();
  return (
    <nav
      data-reveal-order={2}
      className="reveal reveal-editorial-tight box-border caret-transparent min-h-[auto] min-w-[auto] order-2 outline-[3px] no-underline pt-9 md:min-h-0 md:min-w-0 md:order-1 md:pt-0"
    >
      <ul className="border-b-stone-50 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent flex flex-wrap justify-between list-none outline-[3px] relative no-underline pl-0 border-b-0 md:border-b-stone-50/20 md:flex-nowrap md:border-b">
        <FooterRegion
          regionName={t("footerSec.region.villa")}
          regionClassName="min-h-[auto] min-w-[auto] md:flex-[3] md:w-auto"
          links={[
            { href: "/la-villa", label: t("footerSec.link.villa") },
            { href: "/#suite", label: t("footerSec.link.suite") },
            { href: "/consigli", label: t("footerSec.link.tips") },
            { href: "/contatti", label: t("footerSec.link.contact") },
          ]}
        />
        <li className="border-b-stone-50/20 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] outline-[3px] relative no-underline w-full mb-9 pt-6 pb-9 border-b md:border-b-0 md:mb-0 md:pt-0 md:pb-[65.7778px] md:flex-[2] flex flex-col items-start md:items-end md:justify-center md:text-right">
          <span className="box-border caret-transparent block opacity-50 outline-[3px] pointer-events-none no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
            {t("footerSec.cta.label")}
          </span>
          <p className="font-beausite_slick font-light text-2xl tracking-[0.48px] leading-[33px] md:text-[25.1111px] md:tracking-[0.502222px] max-w-[320px] md:ml-auto">
            {t("footerSec.cta.title")}
          </p>
          <Link
            to="/contatti"
            className="mt-6 inline-block border border-stone-50/60 rounded-full px-7 py-3 text-sm tracking-[1.5px] uppercase transition-colors duration-200 hover:bg-stone-50 hover:text-stone-900"
          >
            {t("suite.booking.cta")}
          </Link>
        </li>
        <FooterRegion
          regionName={t("footerSec.region.contact")}
          regionClassName="min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
          links={[
            { href: "/contatti", label: t("footerSec.link.email") },
            { href: "/contatti", label: t("footerSec.link.phone") },
          ]}
        />
      </ul>
    </nav>
  );
};
