export const FooterContact = () => {
  return (
    <div
      data-reveal-order={3}
      className="reveal reveal-editorial border-b-stone-50/20 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline w-auto py-9 border-b md:border-b-stone-50 md:min-h-[auto] md:min-w-[auto] md:w-[18.625%] md:py-0 md:border-b-0"
    >
      <h5 className="box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] opacity-50 outline-[3px] no-underline uppercase mb-[13.7143px] md:mb-[18.7937px]">
        Contatti
      </h5>
      <a
        href="mailto:info@villasesto.it"
        className="box-border caret-transparent text-2xl font-light tracking-[0.48px] leading-[33px] outline-[3px] no-underline transition-colors duration-200 hover:text-stone-50/80 font-beausite_slick md:text-[25.1111px] md:tracking-[0.502222px]"
      >
        info@villasesto.it
      </a>
    </div>
  );
};
