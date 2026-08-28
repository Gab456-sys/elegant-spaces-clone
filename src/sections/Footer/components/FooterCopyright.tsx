import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const legalLinks = [
  { to: "/privacy-policy", key: "footerSec.privacy" },
  { to: "/cookie-policy", key: "footerSec.cookie" },
  { to: "/termini", key: "footerSec.terms" },
] as const;

const linkClassName =
  "box-border caret-transparent outline-[3px] text-center no-underline transition-colors duration-200 hover:text-stone-50/80 md:text-left";

const Divider = () => (
  <span className="box-border caret-transparent outline-[3px] text-center no-underline md:text-left">
    {"  |  "}
  </span>
);

export const FooterCopyright = () => {
  const { t } = useLanguage();

  const openCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("cookie-preferences:open"));
  };

  return (
    <div className="reveal box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3 pt-6 md:pt-[65.7778px]">
      <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] opacity-50 outline-[3px] text-center no-underline w-full ml-0 px-3 md:text-left md:w-[66.6667%] md:ml-[25%]">
        <p className="box-border caret-transparent text-xs tracking-[1.2px] outline-[3px] text-center no-underline uppercase mb-6 md:text-left md:mb-[32.8889px]">
          {t("footerSec.copyright")}{" "}
          <span className="box-border caret-transparent outline-[3px] text-center no-underline md:text-left">
            {t("footerSec.rights")}
          </span>
          {legalLinks.map((link) => (
            <span key={link.to}>
              <Divider />
              <Link to={link.to} className={linkClassName}>
                {t(link.key)}
              </Link>
            </span>
          ))}
          <Divider />
          <button
            type="button"
            onClick={openCookiePreferences}
            className={linkClassName}
          >
            {t("footerSec.cookiePrefs")}
          </button>
        </p>
      </div>
    </div>
  );
};
