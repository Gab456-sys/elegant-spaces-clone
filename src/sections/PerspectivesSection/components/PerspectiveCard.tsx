export type PerspectiveCardProps = {
  ariaLabel: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  title: string;
};

export const PerspectiveCard = (props: PerspectiveCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="reveal box-border caret-transparent shrink-0 list-none min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full mr-6 md:w-[calc(33.3333%_-_10.963px)] md:mr-[16.4444px]"
    >
      <a
        href={props.href}
        className="box-border caret-transparent block outline-[3px] no-underline"
      >
        <figure className="aspect-[8_/_11] bg-gray-900/10 box-border caret-transparent outline-[3px] relative no-underline w-full overflow-hidden">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="reveal-media box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline align-bottom w-full"
          />
        </figure>
        <div className="box-border caret-transparent gap-x-6 flex justify-between outline-[3px] gap-y-6 no-underline mt-4 mb-2 md:gap-x-[32.8889px] md:gap-y-[32.8889px] md:mt-[21.9259px] md:mb-[10.963px]">
          <h5 className="reveal box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis uppercase text-nowrap overflow-hidden">
            {props.category}
          </h5>
          <h5 className="reveal box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] min-h-[auto] min-w-[auto] opacity-40 outline-[3px] no-underline text-ellipsis uppercase text-nowrap overflow-hidden">
            {props.date}
          </h5>
        </div>
        <h4 className="reveal box-border caret-transparent text-2xl font-light leading-[30px] outline-[3px] no-underline pr-0 font-beausite_slick md:pr-[49.3333px]">
          {props.title}
        </h4>
      </a>
    </div>
  );
};
