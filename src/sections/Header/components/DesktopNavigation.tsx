import { useLanguage } from "@/lib/i18n/LanguageContext";

export const DesktopNavigation = () => {
  const { t, language, toggle } = useLanguage();
  return (
    <nav className="hidden md:flex md:w-full md:justify-center">
      <ul className="m-0 hidden list-none p-0 md:flex md:flex-nowrap md:items-center md:justify-center md:gap-10">
        <li className="md:px-3">
          <a
            href="/"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            {t("nav.home")}
          </a>
        </li>

        <li className="md:px-3">
          <a
            href="/#la-villa"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            {t("nav.villa")}
          </a>
        </li>

        <li className="group md:relative md:px-3">
          <span
            className="header-nav-link cursor-default md:inline-flex md:items-center md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            {t("nav.suite")}
          </span>
          <div className="pointer-events-none absolute left-1/2 top-full z-[1001] -translate-x-1/2 pt-3 opacity-0 -translate-y-2 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
            <ul className="m-0 flex w-max list-none flex-col items-center p-0 text-center text-inherit">
              <li>
                <a
                  href="/suite/family"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  {t("nav.suite.family")}
                </a>
              </li>
              <li>
                <a
                  href="/suite/comfort"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  {t("nav.suite.comfort")}
                </a>
              </li>
              <li>
                <a
                  href="/suite/basic"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  {t("nav.suite.basic")}
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="md:px-3">
          <a
            href="/#faq"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            {t("nav.tips")}
          </a>
        </li>

        <li className="md:px-3">
          <a
            href="/#contatti"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            {t("nav.contact")}
          </a>
        </li>

        <li className="md:px-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t("nav.language")}
            aria-pressed={language === "en"}
            className="header-nav-link md:inline-flex md:items-center md:justify-center md:gap-1.5 md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            <span className={language === "it" ? "opacity-100" : "opacity-40"}>IT</span>
            <span className="opacity-40">·</span>
            <span className={language === "en" ? "opacity-100" : "opacity-40"}>EN</span>
          </button>
        </li>

        <li className="md:px-3">
          <a
            href="#contatti"
            aria-label="Ricerca"
            className="header-nav-link md:inline-flex md:items-center md:justify-center md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="block h-[18px] w-[18px] text-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
