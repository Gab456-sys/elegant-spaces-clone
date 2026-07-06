export type PracticeLinkProps = {
  href: string;
  label: string;
  revealOrder?: number;
};

export const PracticeLink = (props: PracticeLinkProps) => {
  return (
    <div
      data-reveal-order={props.revealOrder}
      className="reveal reveal-editorial box-border caret-transparent opacity-50 outline-[3px] no-underline w-fit transition-opacity duration-500 hover:opacity-100"
    >
      <a
        href={props.href}
        className="box-border caret-transparent inline-block text-4xl font-light leading-10 outline-[3px] no-underline mb-2 font-beausite_slick md:text-[44.8889px] md:leading-[48.8889px] md:mb-[10.2222px]"
      >
        {props.label}
      </a>
    </div>
  );
};
