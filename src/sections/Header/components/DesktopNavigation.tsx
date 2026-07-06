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

        <li className="md:relative md:px-3 md:group">
          <a
            href="/suite"
            className="header-nav-link md:inline-flex md:items-center md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Suite
          </a>
          <ul className="invisible pointer-events-none opacity-0 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 md:mt-4 md:min-w-[200px] md:list-none md:m-0 md:p-3 md:bg-stone-50 md:text-stone-900 md:shadow-lg md:transition-opacity md:duration-200 md:group-hover:visible md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
            <li>
              <a
                href="/suite/family"
                className="md:block md:whitespace-nowrap md:px-3 md:py-2 md:text-xs md:tracking-[1.2px] md:uppercase md:no-underline md:text-stone-900 hover:md:bg-stone-100"
              >
                Family Suite
              </a>
            </li>
            <li>
              <a
                href="/suite/comfort"
                className="md:block md:whitespace-nowrap md:px-3 md:py-2 md:text-xs md:tracking-[1.2px] md:uppercase md:no-underline md:text-stone-900 hover:md:bg-stone-100"
              >
                Comfort Suite
              </a>
            </li>
            <li>
              <a
                href="/suite/basic"
                className="md:block md:whitespace-nowrap md:px-3 md:py-2 md:text-xs md:tracking-[1.2px] md:uppercase md:no-underline md:text-stone-900 hover:md:bg-stone-100"
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
