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
          regionClassName="min-h-[auto] min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "/la-villa", label: t("footerSec.link.villa") },
            { href: "/#suite", label: t("footerSec.link.suite") },
            { href: "/consigli", label: t("footerSec.link.tips") },
            { href: "/contatti", label: t("footerSec.link.contact") },
          ]}
        />
        <FooterRegion
          regionName={t("footerSec.region.contact")}
          regionClassName="hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "/contatti", label: t("footerSec.link.email") },
            { href: "/contatti", label: t("footerSec.link.phone") },
            { href: "/contatti", label: t("footerSec.link.directions") },
          ]}
        />
        <FooterRegion
          regionName={t("footerSec.region.contact")}
          regionClassName="list-item min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0 md:w-[9.5%]"
          links={[
            { href: "/contatti", label: t("footerSec.link.email") },
            { href: "/contatti", label: t("footerSec.link.phone") },
          ]}
        />
      </ul>
    </nav>
  );
};
