import { useEffect, useState } from "react";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";

type HeaderTheme = "light" | "dark";

export const Header = () => {
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 28;
      setIsScrolled((currentScrolled) =>
        currentScrolled === nextScrolled ? currentScrolled : nextScrolled,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]"),
    );

    if (!sections.length) return;

    const getActiveSection = () => {
      const headerLine = 120;

      return (
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= headerLine && rect.bottom > headerLine;
        }) || sections[0]
      );
    };

    const updateHeaderTheme = () => {
      const activeSection = getActiveSection();
      const nextTheme =
        activeSection.dataset.headerTheme === "dark" ? "dark" : "light";

      setHeaderTheme((currentTheme) =>
        currentTheme === nextTheme ? currentTheme : nextTheme,
      );
    };

    updateHeaderTheme();

    const observer = new IntersectionObserver(
      () => {
        updateHeaderTheme();
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-120px 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  const showFullDesktopNav = !isScrolled || isDesktopMenuOpen;
  const headerTextClass =
    headerTheme === "dark" ? "md:text-stone-950" : "md:text-stone-50";

  return (
    <header
      className={`header-shell hidden md:fixed md:inset-x-0 md:top-0 md:z-[1000] md:flex md:justify-center md:bg-transparent md:transition-[padding,color] md:duration-300 md:ease-out ${headerTextClass} ${
        isScrolled ? "md:py-5" : "md:py-[32.8889px]"
      }`}
    >
      <div className="md:relative md:w-full md:px-6 lg:md:px-8 text-inherit">
        <div className="md:relative md:flex md:items-center md:justify-center text-inherit">
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 text-inherit">
            <HeaderLogo />
          </div>

          <div
            className={`md:transition-all md:duration-300 md:ease-out ${
              showFullDesktopNav
                ? "md:opacity-100 md:translate-y-0 md:pointer-events-auto"
                : "md:opacity-0 md:-translate-y-2 md:pointer-events-none"
            }`}
          >
            <DesktopNavigation />
          </div>

          <div className="hidden md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex md:items-center md:gap-6 text-inherit">
            <button
              type="button"
              onClick={() => setIsDesktopMenuOpen((current) => !current)}
              aria-expanded={isDesktopMenuOpen}
              aria-label={isDesktopMenuOpen ? "Chiudi menu" : "Apri menu"}
              className={`header-nav-link md:inline-flex md:items-center md:justify-center md:text-xs md:tracking-[1.2px] md:leading-[15px] md:uppercase md:whitespace-nowrap md:transition-all md:duration-300 text-inherit ${
                isScrolled
                  ? "md:opacity-100 md:pointer-events-auto"
                  : "md:opacity-0 md:pointer-events-none"
              }`}
            >
              {isDesktopMenuOpen ? "Close" : "Menu"}
            </button>

            <a
              href="#contatti"
              aria-label="Ricerca"
              className="header-nav-link hidden md:inline-flex md:items-center md:justify-center md:text-xs md:tracking-[1.2px] md:leading-[15px] md:uppercase md:whitespace-nowrap text-inherit"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="block h-[24px] w-[24px] text-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 16L20 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
