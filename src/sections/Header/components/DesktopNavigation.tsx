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
          <a
            href="/suite"
            className="header-nav-link md:inline-flex md:items-center md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Suite
          </a>
          <ul className="invisible pointer-events-none opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto md:absolute md:left-1/2 md:top-full md:z-[1001] md:-translate-x-1/2 md:pt-4 md:min-w-[200px] md:list-none md:m-0 md:p-0 md:transition-opacity md:duration-200">
            <li className="md:bg-stone-50 md:shadow-lg">
              <a
                href="/suite/family"
                className="md:block md:whitespace-nowrap md:px-4 md:py-3 md:text-xs md:tracking-[1.2px] md:uppercase md:text-stone-900 md:hover:bg-stone-100"
              >
                Family Suite
              </a>
            </li>
            <li className="md:bg-stone-50 md:shadow-lg">
              <a
                href="/suite/comfort"
                className="md:block md:whitespace-nowrap md:px-4 md:py-3 md:text-xs md:tracking-[1.2px] md:uppercase md:text-stone-900 md:hover:bg-stone-100"
              >
                Comfort Suite
              </a>
            </li>
            <li className="md:bg-stone-50 md:shadow-lg">
              <a
                href="/suite/basic"
                className="md:block md:whitespace-nowrap md:px-4 md:py-3 md:text-xs md:tracking-[1.2px] md:uppercase md:text-stone-900 md:hover:bg-stone-100"
              >
                Basic Room
              </a>
            </li>
          </ul>
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
