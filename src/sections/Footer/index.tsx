import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterIntro } from "@/sections/Footer/components/FooterIntro";
import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer
      id="contatti"
      className="bg-gray-900 box-border caret-transparent text-stone-50 outline-[3px] relative no-underline z-[1] pt-24 md:pt-[131.556px]"
    >
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto px-6 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3">
          <FooterLogo />
        </div>
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -mx-3">
          <FooterIntro />
          <div className="box-border caret-transparent flex flex-col shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full ml-0 px-3 md:block md:w-9/12 md:ml-[8.33333%]">
            <FooterNavigation />
            <div className="box-border caret-transparent block flex-nowrap justify-normal min-h-[auto] min-w-[auto] order-1 outline-[3px] no-underline pt-0 md:flex md:flex-wrap md:justify-between md:min-h-0 md:min-w-0 md:order-2 md:pt-[65.7778px]">
              <FooterContact />
              <FooterSocial />
            </div>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
