export type SectionImageProps = {
  containerClassName: string;
  figureClassName: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
};

export const SectionImage = (props: SectionImageProps) => {
  return (
    <div className={props.containerClassName}>
      <figure className={props.figureClassName}>
        <div
          data-reveal-order={0}
          className="reveal-crop box-border caret-transparent outline-[3px] no-underline overflow-hidden"
        >
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="reveal-media-inner box-border caret-transparent max-w-full outline-[3px] no-underline"
          />
        </div>
        <figcaption className="reveal box-border caret-transparent gap-x-6 flex text-xs tracking-[1.2px] leading-[15px] max-w-full outline-[3px] no-underline uppercase mt-2.5 md:gap-x-[32.8889px] md:mt-[15.5556px]">
          {props.caption}
        </figcaption>
      </figure>
    </div>
  );
};
