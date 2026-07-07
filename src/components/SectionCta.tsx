export type SectionCtaProps = {
  href: string;
  label: string;
  revealOrder?: number;
  revealDelay?: number;
};

export const SectionCta = (props: SectionCtaProps) => {
  return (
    <a
      href={props.href}
      data-reveal-order={props.revealOrder}
      data-reveal-delay={props.revealDelay}
      className="reveal reveal-editorial-tight group antialiased box-border caret-transparent inline-flex text-[11px] justify-self-start tracking-[1.1px] leading-[13px] outline-[3px] relative no-underline uppercase w-fit border border-gray-900 overflow-hidden pt-3 pb-2.5 px-5 rounded-[30px] border-solid transition-colors duration-500 hover:text-stone-100"
    >
      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] relative no-underline z-[1] [transform:translateZ(0)] [-webkit-font-smoothing:antialiased]">
        {props.label}
      </span>
      <span className="bg-gray-900 box-border caret-transparent block h-full outline-[3px] absolute no-underline w-full z-0 left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:-translate-y-full [backface-visibility:hidden]"></span>
    </a>
  );
};
