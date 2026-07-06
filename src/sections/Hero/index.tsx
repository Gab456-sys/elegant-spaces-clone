import { HeroMedia } from "@/sections/Hero/components/HeroMedia";

export const Hero = () => {
  return (
    <section
      data-hero-section="true"
      data-header-theme="light"
      className="box-border caret-transparent h-[100svh] min-h-[100svh] md:h-screen md:min-h-screen outline-[3px] relative no-underline w-full z-[1] overflow-hidden"
    >
      <div
        data-hero-stage="true"
        className="box-border caret-transparent h-full w-full outline-[3px] relative no-underline"
      >
        <HeroMedia />
      </div>
    </section>
  );
};
