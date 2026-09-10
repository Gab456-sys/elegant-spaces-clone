import { FooterRegion } from "@/sections/Footer/components/FooterRegion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
            { href: "/", label: t("footerSec.link.home") },
            { href: "/la-villa", label: t("footerSec.link.villa") },
            { href: "/consigli", label: t("footerSec.link.tips") },
            { href: "/contatti", label: t("footerSec.link.contact") },
          ]}
        />
        <FooterRegion
          regionName={t("footerSec.region.rooms")}
          regionClassName="min-h-[auto] min-w-[auto] md:flex-[2] md:w-auto md:text-right md:items-end"
          links={[
            { href: "/suite/family", label: t("nav.suite.family") },
            { href: "/suite/comfort", label: t("nav.suite.comfort") },
            { href: "/suite/basic", label: t("nav.suite.basic") },
          ]}
        />
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
