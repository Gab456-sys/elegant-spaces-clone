export const FooterCopyright = () => {
  return (
    <div className="reveal box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3 pt-6 md:pt-[197.333px]">
      <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] opacity-50 outline-[3px] text-center no-underline w-full ml-0 px-3 md:text-left md:w-[66.6667%] md:ml-[25%]">
        <p className="box-border caret-transparent text-xs tracking-[1.2px] outline-[3px] text-center no-underline uppercase mb-6 md:text-left md:mb-[32.8889px]">
          Copyright © 2026 Villa Sesto.{" "}
          <span className="box-border caret-transparent outline-[3px] text-center no-underline md:text-left">
            All Rights Reserved
          </span>
          <span className="box-border caret-transparent outline-[3px] text-center no-underline md:text-left">
            {" "}
              |  {" "}
          </span>
          <a
            href="#"
            className="box-border caret-transparent outline-[3px] text-center no-underline transition-colors duration-200 hover:text-stone-50/80 md:text-left"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};
