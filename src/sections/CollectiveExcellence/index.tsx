import { SectionCta } from "@/components/SectionCta";

export const CollectiveExcellence = () => {
  return (
    <section className="bg-stone-100 box-border caret-transparent text-gray-900 outline-[3px] relative no-underline z-[2] py-[60px] md:py-[93.3333px]">
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto px-6 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:w-[41.6667%]">
            <h2 className="reveal box-border caret-transparent text-4xl font-light leading-10 outline-[3px] no-underline mb-6 font-beausite_slick md:text-[44.8889px] md:leading-[48.8889px]">
              Collective excellence
            </h2>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full ml-0 px-3 md:w-[41.6667%] md:ml-[8.33333%]">
            <h3 className="reveal box-border caret-transparent shrink-0 text-xl font-light leading-6 outline-[3px] no-underline w-full mb-5 font-beausite_slick md:text-[25.5556px] md:leading-[31.7778px] md:mb-[22.2222px]">
              We are a collective of talented individuals with proven pedigree.
              Building on our expertise in hospitality and interiors, we now
              offer a broad range of services with the diversity of experience,
              skill and style to meet any design challenge.
            </h3>
            <SectionCta href="https://www.hba.com/people/" label="Our People" />
          </div>
        </div>
      </div>
    </section>
  );
};
