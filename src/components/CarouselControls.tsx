export type CarouselControlsProps = {
  previousIconUrl: string;
  previousIconAlt: string;
  nextIconUrl: string;
  nextIconAlt: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  return (
    <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto]">
      <button
        type="button"
        aria-label="Previous slide"
        className="[align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal opacity-100 outline-0 static text-center transform-none w-auto z-auto rounded-none left-auto top-auto md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:h-[45px] md:justify-center md:left-[-308px] md:opacity-30 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:translate-y-[-100.0%] md:w-[45px] md:z-[1] md:[mask-position:0%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:top-[calc(100%_+_32.8889px)]"
      >
        <img
          src={props.previousIconUrl}
          alt={props.previousIconAlt}
          className="box-content caret-black h-auto outline-0 transform-none w-auto md:aspect-auto md:box-border md:caret-transparent md:h-[45px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[45px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:-scale-x-100"
        />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="[align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal outline-0 static text-center transform-none w-auto z-auto rounded-none top-auto inset-x-auto md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:h-[45px] md:justify-center md:left-[-296px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:translate-x-[100.0%] md:translate-y-[-100.0%] md:w-[45px] md:z-[1] md:[mask-position:0%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:right-4 md:top-[calc(100%_+_32.8889px)]"
      >
        <img
          src={props.nextIconUrl}
          alt={props.nextIconAlt}
          className="box-content caret-black h-auto outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:h-[45px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[45px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto]"
        />
      </button>
    </div>
  );
};
