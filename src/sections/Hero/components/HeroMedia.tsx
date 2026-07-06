import { useState } from "react";

export const HeroMedia = () => {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <div
      role="region"
      data-hero-media="true"
      className="box-border caret-transparent h-full outline-[3px] absolute no-underline w-full z-0 left-0 top-0 bg-stone-950"
    >
      <div className="box-border caret-transparent h-full outline-[3px] relative no-underline z-0 overflow-hidden bg-stone-950">
        <div
          role="presentation"
          className="box-border caret-transparent flex h-full outline-[3px] no-underline"
        >
          <div
            role="group"
            aria-label="1 of 1"
            className="box-border caret-transparent h-full shrink-0 list-none min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full z-[1]"
          >
            <div
              data-hero-emblem="true"
              className="box-border caret-transparent outline-[3px] absolute no-underline transform-none z-[3] pt-6 pb-[68px] px-6 left-0 bottom-9 md:translate-y-[50.0%] md:pt-[32.8889px] md:pb-[85.7778px] md:px-[32.8889px] md:bottom-2/4"
            >
              <img
                src="https://c.animaapp.com/mq6uygebb47riI/assets/icon-6.svg"
                alt="Icon"
                className="box-border caret-transparent inline h-auto opacity-0 outline-[3px] no-underline w-full md:h-[265px] md:w-[672px]"
              />
            </div>

            <figure
              data-hero-figure="true"
              className="box-border caret-transparent h-full outline-[3px] no-underline w-full after:accent-auto after:bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.4)_100%)] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[1] after:border-separate after:left-0 after:top-0 after:font-beausite_classic"
            >
              <div
                data-hero-media-inner="true"
                className="box-border caret-transparent h-full outline-[3px] no-underline overflow-hidden w-full"
              >
                {hasVideoError ? (
                  <img
                    src="https://c.animaapp.com/mq6uygebb47riI/assets/Careers-Jumeirah_Marsa-Al-Arab-HBA-Dubai-new.jpg"
                    alt="Villa Sesto vista esterna"
                    className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full"
                  />
                ) : (
                  <video
                    src="https://player.vimeo.com/progressive_redirect/playback/1135264675/rendition/1080p/file.mp4?loc=external&signature=6b4870519153433bcce1d871cc466f90a4e367e78bd6f9ba9ece253426bd0ac9"
                    poster="https://c.animaapp.com/mq6uygebb47riI/assets/Careers-Jumeirah_Marsa-Al-Arab-HBA-Dubai-new.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => setHasVideoError(true)}
                    className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline align-baseline w-full bg-stone-950"
                  />
                )}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
