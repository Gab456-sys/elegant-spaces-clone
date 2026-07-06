import { CarouselControls } from "@/components/CarouselControls";
import { LeadershipCard } from "@/sections/LeadershipSection/components/LeadershipCard";

export const LeadershipSection = () => {
  return (
    <section className="bg-stone-100 box-border caret-transparent text-gray-900 outline-[3px] relative no-underline z-[2] py-[60px] md:py-[93.3333px]">
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto pl-6 pr-0 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -ml-3 mr-0 md:-mr-3">
          <div className="items-start box-border caret-transparent shrink-0 justify-between max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full pl-3 pr-6 md:w-3/12 md:pr-[16.4444px]">
            <h2 className="reveal box-border caret-transparent text-4xl font-light leading-10 outline-[3px] no-underline mb-6 font-beausite_slick md:text-[44.8889px] md:leading-[48.8889px]">
              Leadership team
            </h2>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full mt-6 pl-3 pr-0 pb-6 md:w-9/12 md:mt-0 md:pr-3 md:pb-[32.8889px]">
            <div
              role="region"
              className="box-border caret-transparent outline-[3px] relative no-underline"
            >
              <CarouselControls
                previousIconUrl="https://c.animaapp.com/mq6uygebb47riI/assets/icon-8.svg"
                previousIconAlt="Icon"
                nextIconUrl="https://c.animaapp.com/mq6uygebb47riI/assets/icon-9.svg"
                nextIconAlt="Icon"
              />
              <div className="box-border caret-transparent outline-[3px] relative no-underline z-0 overflow-hidden pr-24 md:pr-[65.7778px]">
                <div
                  role="presentation"
                  className="box-border caret-transparent flex h-full outline-[3px] no-underline"
                >
                  <LeadershipCard
                    ariaLabel="1 of 4"
                    href="https://hba.com/people/ian-carr/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Portrait-Ian-Carr-By-Sayher-Heffernan-0006-1-1024x1536.jpeg"
                    imageAlt=""
                    studio="HBA"
                    location="Singapore"
                    name="Ian Carr"
                    title="Partner &amp; Co-CEO"
                  />
                  <LeadershipCard
                    ariaLabel="2 of 4"
                    href="https://hba.com/people/chris-godfrey/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Portrait-Chris-Godfrey-By-Sayher-Heffernan-0002-1024x1536.jpeg"
                    imageAlt="Chris Godfrey"
                    studio="HBA"
                    location="Singapore"
                    name="Chris Godfrey"
                    title="Partner & Co-CEO"
                  />
                  <LeadershipCard
                    ariaLabel="3 of 4"
                    href="https://hba.com/people/meghann-day/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Meghann-Day_2025-Photo_crop-1024x1536.jpg"
                    imageAlt=""
                    studio="HBA"
                    location="San Francisco"
                    name="Meghann Day"
                    title="Partner & President The Americas"
                  />
                  <LeadershipCard
                    ariaLabel="4 of 4"
                    href="https://hba.com/people/andrew-moore/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Andrew-Moore.jpg"
                    imageAlt="HBA-Andrew-Moore-Partner-&-President-Middle-East-&-KSA"
                    studio="HBA"
                    location="Dubai"
                    name="Andrew Moore"
                    title="Partner & President Middle East & KSA"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-900/20 box-border caret-transparent h-px outline-[3px] absolute no-underline w-[calc(100%_-_24px)] left-3 bottom-0">
              <div className="bg-gray-900 box-border caret-transparent h-full outline-[3px] no-underline w-3/12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
