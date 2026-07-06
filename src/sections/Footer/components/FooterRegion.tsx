export type FooterRegionLink = {
  href: string;
  label: string;
};

export type FooterRegionProps = {
  regionName: string;
  regionClassName: string;
  links: FooterRegionLink[];
};

export const FooterRegion = (props: FooterRegionProps) => {
  return (
    <li
      className={`border-b-stone-50/20 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] outline-[3px] relative no-underline w-6/12 mb-9 pt-6 pb-9 border-b md:border-b-stone-50 md:mb-0 md:pt-0 md:pb-[65.7778px] md:border-b-0 ${props.regionClassName}`}
    >
      <span className="box-border caret-transparent block opacity-50 outline-[3px] pointer-events-none no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
        {props.regionName}
      </span>
      <ul className="box-border caret-transparent font-light outline-[3px] no-underline pl-0 font-beausite_slick">
        {props.links.map((link) => (
          <li
            key={`${link.href}-${link.label}`}
            className="box-border caret-transparent text-2xl tracking-[0.48px] leading-[33px] outline-[3px] no-underline w-full md:text-[25.1111px] md:tracking-[0.502222px]"
          >
            <a
              href={link.href}
              className="box-border caret-transparent block text-2xl tracking-[0.48px] outline-[3px] no-underline transition-colors duration-200 hover:text-stone-50/80 md:text-[25.1111px] md:tracking-[0.502222px]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
