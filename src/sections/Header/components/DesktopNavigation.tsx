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

        <li className="md:px-3">
          <a
            href="/suite"
            className="header-nav-link md:inline md:whitespace-nowrap md:text-xs md:leading-[15px] md:tracking-[1.2px] md:uppercase"
          >
            Suite
          </a>
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
