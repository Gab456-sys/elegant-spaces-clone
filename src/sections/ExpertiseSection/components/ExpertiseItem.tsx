export type ExpertiseItemProps = {
  label: string;
  isExpanded: boolean;
  description?: string;
  href?: string;
  linkText?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const ExpertiseItem = (props: ExpertiseItemProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] relative no-underline pl-[92px] ${props.isExpanded ? "" : "opacity-30"}`}
    >
      <button className="appearance-none bg-transparent caret-transparent text-[42px] font-light leading-[44px] text-center no-underline p-0 font-beausite_slick md:text-[54.2222px] md:leading-[57.3333px]">
        {props.label}
      </button>
      {props.isExpanded && (
        <>
          {props.description && props.href && props.linkText && (
            <div className="box-border caret-transparent outline-[3px] static no-underline w-auto mt-6 right-auto top-auto md:absolute md:w-[41.6667%] md:mt-0 md:right-0 md:top-[32.8889px]">
              <p className="box-border caret-transparent text-sm tracking-[0.7px] leading-[19px] outline-[3px] no-underline mb-6">
                {props.description}
              </p>
              <a
                href={props.href}
                className="box-border caret-transparent inline-flex text-[11px] justify-self-start tracking-[1.1px] leading-[13px] outline-[3px] relative no-underline uppercase w-fit border border-gray-900 overflow-hidden pt-3 pb-2.5 px-5 rounded-[30px] border-solid hover:text-stone-100"
              >
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] relative no-underline z-[1]">
                  {props.linkText}
                </span>
                <span className="bg-gray-900 box-border caret-transparent block h-full outline-[3px] absolute no-underline w-full z-0 left-0 top-full"></span>
              </a>
            </div>
          )}
          {props.imageSrc && props.imageAlt && (
            <figure className="box-border caret-transparent block outline-[3px] no-underline my-6 md:hidden md:my-[32.8889px]">
              <img
                src={props.imageSrc}
                alt={props.imageAlt}
                className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
              />
            </figure>
          )}
        </>
      )}
    </div>
  );
};
