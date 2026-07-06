export type GalleryImageGroupProps = {
  layoutVariant: string;
  innerVariant: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export const GalleryImageGroup = (props: GalleryImageGroupProps) => {
  const firstImage = props.images[0];
  const secondImage = props.images[1];

  return (
    <div
      className={`box-border caret-transparent outline-[3px] no-underline ${props.layoutVariant}`}
    >
      <div
        className={`box-border caret-transparent outline-[3px] no-underline ${props.innerVariant}`}
      >
        {secondImage ? (
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full ml-0 px-3 md:w-[83.3333%] md:ml-[8.33333%]">
            <div className="box-border caret-transparent outline-[3px] relative no-underline z-[2] my-[120px] md:my-[186.667px]">
              <figure className="box-border caret-transparent h-full outline-[3px] no-underline w-full">
                <div
                  data-reveal-order={0}
                  className="reveal-crop box-border caret-transparent h-full outline-[3px] no-underline overflow-hidden w-full"
                >
                  <img
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="reveal-media-inner box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
                  />
                </div>
              </figure>
            </div>
            <div className="box-border caret-transparent outline-[3px] relative no-underline z-[2] mb-[180px] md:mb-[280px]">
              <figure className="box-border caret-transparent h-full outline-[3px] no-underline w-full">
                <div
                  data-reveal-order={1}
                  className="reveal-crop box-border caret-transparent h-full outline-[3px] no-underline overflow-hidden w-full"
                >
                  <img
                    src={secondImage.src}
                    alt={secondImage.alt}
                    className="reveal-media-inner box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
                  />
                </div>
              </figure>
            </div>
          </div>
        ) : (
          <figure className="box-border caret-transparent h-full outline-[3px] no-underline w-full">
            <div
              data-reveal-order={0}
              className="reveal-crop box-border caret-transparent h-full outline-[3px] no-underline overflow-hidden w-full"
            >
              <img
                src={firstImage.src}
                alt={firstImage.alt}
                className="reveal-media-inner box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
              />
            </div>
          </figure>
        )}
      </div>
    </div>
  );
};
