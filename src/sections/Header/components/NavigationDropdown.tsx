export type NavigationDropdownItem = {
  label: string;
  href: string;
  className: string;
};

export type NavigationDropdownGroup = {
  label: string;
  href: string;
  className: string;
  linkClassName: string;
  submenuClassName?: string;
  items?: NavigationDropdownItem[];
};

export type NavigationDropdownProps = {
  rootClassName: string;
  topLinkClassName: string;
  label: string;
  menuClassName: string;
  groups: NavigationDropdownGroup[];
};

export const NavigationDropdown = (props: NavigationDropdownProps) => {
  return (
    <li
      className={`box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline px-0 md:min-h-[auto] md:min-w-[auto] md:px-3 ${props.rootClassName}`}
    >
      <a
        href="#"
        className={`box-border caret-transparent outline-[3px] no-underline md:text-stone-50 ${props.topLinkClassName}`}
      >
        {props.label}
      </a>
      <ul
        className={`box-border caret-transparent font-light max-h-0 outline-[3px] pointer-events-none static no-underline invisible overflow-hidden pl-0 left-auto top-auto font-beausite_slick md:max-h-none md:absolute md:overflow-visible md:left-3 md:top-[88.1111px] ${props.menuClassName}`}
      >
        {props.groups.map((group) => (
          <li
            key={`${group.label}-${group.className}`}
            className={group.className}
          >
            <a href={group.href} className={group.linkClassName}>
              {group.label}
            </a>
            {group.items && group.submenuClassName ? (
              <ul className={group.submenuClassName}>
                {group.items.map((item) => (
                  <li
                    key={`${item.label}-${item.href}`}
                    className={item.className}
                  >
                    <a
                      href={item.href}
                      className={
                        item.className ===
                        "box-border caret-transparent text-2xl tracking-[0.48px] leading-[33px] opacity-100 outline-[3px] no-underline transform-none w-[202px] md:text-[25.1111px] md:tracking-[0.502222px] md:leading-[39.6667px] md:opacity-0 md:translate-y-5"
                          ? "box-border caret-transparent block text-2xl tracking-[0.48px] leading-[33px] outline-[3px] no-underline md:text-[25.1111px] md:tracking-[0.502222px] md:leading-[39.6667px]"
                          : "box-border caret-transparent block text-2xl tracking-[0.48px] leading-[33px] outline-[3px] no-underline md:text-[25.1111px] md:tracking-[0.502222px] md:leading-[39.6667px]"
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </li>
  );
};
