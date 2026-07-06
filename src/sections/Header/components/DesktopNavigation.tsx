export const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex md:w-full md:justify-center">
      <ul className="m-0 hidden list-none p-0 md:flex md:flex-nowrap md:items-center md:justify-center md:gap-10">
        <li className="md:px-3">
          <a
            href="/"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Home
          </a>
        </li>

        <li className="md:px-3">
          <a
            href="/#la-villa"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            La Villa
          </a>
        </li>

        <li className="group md:relative md:px-3">
          <span
            className="header-nav-link cursor-default md:inline-flex md:items-center md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Suite
          </span>
          <div className="pointer-events-none absolute left-1/2 top-full z-[1001] -translate-x-1/2 pt-3 opacity-0 -translate-y-2 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
            <ul className="m-0 flex w-max list-none flex-col items-center p-0 text-center text-inherit">
              <li>
                <a
                  href="/suite/family"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  Family Suite
                </a>
              </li>
              <li>
                <a
                  href="/suite/comfort"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  Comfort Suite
                </a>
              </li>
              <li>
                <a
                  href="/suite/basic"
                  className="header-nav-link block whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[1.2px] text-inherit"
                >
                  Basic Room
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
            I nostri consigli
          </a>
        </li>

        <li className="md:px-3">
          <a
            href="/#contatti"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
};
