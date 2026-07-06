import { ExpertiseItem } from "@/sections/ExpertiseSection/components/ExpertiseItem";

export const ExpertiseSection = () => {
  return (
    <section className="bg-stone-100 box-border caret-transparent text-gray-900 min-h-0 outline-[3px] relative no-underline z-[2] pb-[60px] md:min-h-[1000px] md:pb-[93.3333px]">
      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full mx-auto px-6 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3">
            <img
              src="https://c.animaapp.com/mq6uygebb47riI/assets/icon-7.svg"
              alt="Icon"
              className="box-border caret-transparent inline outline-[3px] no-underline w-[135px]"
            />
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-3 md:w-[58.3333%]">
            <ExpertiseItem
              label="interiors"
              isExpanded={true}
              description="An industry-defining hospitality interior design practice, shaping unforgettable spaces for the world's most iconic brands"
              href="https://hba.com/expertise/interiors/"
              linkText="View interiors"
              imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Conrad-Jiuzhaigou_HBA-Singapore-1265x1536.jpg"
              imageAlt="Luxurious hotel lobby with high wooden ceilings, plush seating, and warm lighting. A large, textured wall art centerpiece adds elegance. Cozy and inviting."
            />
            <ExpertiseItem label="architecture" isExpanded={false} />
            <ExpertiseItem label="art" isExpanded={false} />
            <ExpertiseItem label="digital" isExpanded={false} />
            <ExpertiseItem label="f&b" isExpanded={false} />
            <ExpertiseItem label="graphics" isExpanded={false} />
            <ExpertiseItem label="landscape" isExpanded={false} />
            <ExpertiseItem label="leisure" isExpanded={false} />
            <ExpertiseItem label="light" isExpanded={false} />
            <ExpertiseItem label="procurement" isExpanded={false} />
            <ExpertiseItem label="product" isExpanded={false} />
            <ExpertiseItem label="residential" isExpanded={false} />
            <ExpertiseItem label="resort" isExpanded={false} />
            <ExpertiseItem label="strategy" isExpanded={false} />
            <figure className="box-border caret-transparent hidden h-[815px] outline-[3px] absolute no-underline w-[calc(33.3333%_-_24px)] mb-6 right-6 top-[65px] md:block md:h-[748.333px] md:w-[calc(33.3333%_-_32.8889px)] md:mb-[32.8889px] md:right-[32.8889px]">
              <img
                src="https://c.animaapp.com/mq6uygebb47riI/assets/Conrad-Jiuzhaigou_HBA-Singapore-1265x1536.jpg"
                alt="Luxurious hotel lobby with high wooden ceilings, plush seating, and warm lighting. A large, textured wall art centerpiece adds elegance. Cozy and inviting."
                className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
