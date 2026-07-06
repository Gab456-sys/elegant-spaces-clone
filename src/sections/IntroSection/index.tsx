import { SectionImage } from "@/components/SectionImage";
import { SectionCta } from "@/components/SectionCta";

export const IntroSection = () => {
  return (
    <section
      id="la-villa"
      data-intro-section="true"
      data-header-theme="dark"
      className="bg-stone-100 box-border caret-transparent text-gray-900 outline-[3px] relative no-underline z-[2] py-[60px] md:py-[93.3333px]"
    >
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto px-6 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:w-6/12">
            <div className="box-border caret-transparent shrink-0 outline-[3px] no-underline w-full mb-6 md:w-[66.6667%] md:mb-0">
              <h2
                data-intro-title="true"
                data-reveal-order={1}
                className="reveal reveal-editorial box-border caret-transparent text-4xl font-light leading-10 outline-[3px] no-underline mb-6 font-beausite_slick md:text-[44.8889px] md:leading-[48.8889px]"
              >
                La Villa
              </h2>
            </div>

            <SectionImage
              containerClassName="box-border caret-transparent hidden shrink-0 outline-[3px] no-underline w-full md:block md:w-[58.3333%]"
              figureClassName="box-border caret-transparent outline-[3px] no-underline mt-[60px] md:mt-[93.3333px]"
              imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/OneOnly-Portonovi-Chenot-Spa.png"
              imageAlt="Luxurious resort spa interior with arched golden doorways and marble walls. A person in a white robe walks through the opulent, serene hallway."
              caption="Villa Sesto"
            />
          </div>

          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:w-[41.6667%]">
            <div
              data-intro-content="true"
              className="box-border caret-transparent block outline-[3px] no-underline md:flex"
            >
              <div className="box-border caret-transparent shrink-0 min-h-0 min-w-[calc(16.6667%_+_30px)] outline-[3px] no-underline w-full mt-[5px] pr-[30px] md:min-h-[auto] md:w-auto">
                <h5
                  data-intro-eyebrow="true"
                  data-reveal-order={0}
                  className="reveal reveal-editorial-tight box-border caret-transparent text-xs tracking-[1.2px] leading-[15px] outline-[3px] no-underline uppercase mb-3"
                >
                  Benvenuti
                </h5>
              </div>

              <div className="box-border caret-transparent basis-[0%] grow shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
                <h3
                  data-intro-copy="true"
                  data-reveal-order={2}
                  className="reveal reveal-editorial box-border caret-transparent shrink-0 text-xl font-light leading-6 outline-[3px] no-underline w-full mb-5 font-beausite_slick md:text-[25.5556px] md:leading-[31.7778px] md:mb-[22.2222px]"
                >
                  Villa Sesto è un rifugio di ospitalità dove luce, quiete e
                  cura del dettaglio accompagnano ogni soggiorno. Un luogo
                  pensato per rallentare, respirare e vivere il territorio con
                  autenticità.
                </h3>

                <div data-intro-cta="true">
                  <SectionCta
                    href="#contatti"
                    label="Scopri la villa"
                    revealOrder={3}
                  />
                </div>
              </div>
            </div>

            <SectionImage
              containerClassName="box-border caret-transparent outline-[3px] no-underline"
              figureClassName="box-border caret-transparent outline-[3px] no-underline mt-9 md:mt-[186.667px]"
              imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/04-Chedi-Xinchang-1536x864.jpg"
              imageAlt="Rooftop terrace at dusk with soft lighting, framed by a modern building on the left and a cozy seating area on the right. Surrounded by a forested mountain backdrop."
              caption="Atmosfere di Villa Sesto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
