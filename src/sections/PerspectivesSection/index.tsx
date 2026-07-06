import { CarouselControls } from "@/components/CarouselControls";
import { PerspectiveCard } from "@/sections/PerspectivesSection/components/PerspectiveCard";

export const PerspectivesSection = () => {
  return (
    <section className="bg-stone-100 box-border caret-transparent text-gray-900 outline-[3px] relative no-underline z-[2] py-[60px] md:py-[93.3333px]">
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mx-auto pl-6 pr-0 md:px-[32.8889px]">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline -ml-3 mr-0 md:-mr-3">
          <div className="items-start box-border caret-transparent shrink-0 justify-between max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full pl-3 pr-6 md:w-3/12 md:pr-[16.4444px]">
            <h2 className="reveal box-border caret-transparent text-4xl font-light leading-10 outline-[3px] no-underline mb-6 font-beausite_slick md:text-[44.8889px] md:leading-[48.8889px]">
              Perspectives
            </h2>
            <a
              href="https://www.hba.com/perspectives/"
              className="reveal box-border caret-transparent inline-flex text-[11px] justify-self-start tracking-[1.1px] leading-[13px] outline-[3px] relative no-underline uppercase w-fit border border-gray-900 overflow-hidden pt-3 pb-2.5 px-5 rounded-[30px] border-solid hover:text-stone-100"
            >
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] relative no-underline z-[1]">
                View All
              </span>
              <span className="bg-gray-900 box-border caret-transparent block h-full outline-[3px] absolute no-underline w-full z-0 left-0 top-full"></span>
            </a>
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
                  <PerspectiveCard
                    ariaLabel="1 of 23"
                    href="https://hba.com/hba-retains-1-ranking-interior-designs-2026-top-100-giants-hospitality-list/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Interior-Design_HBA-100-Giants_March-2026.jpg"
                    imageAlt="Interior-Design_HBA-100-Giants_March-2026-1"
                    category="Awards & Accolades"
                    date="23.03.26"
                    title="HBA retains #1 ranking – Interior Design’s 2026 Top 100 Giants Hospitality List"
                  />
                  <PerspectiveCard
                    ariaLabel="2 of 23"
                    href="https://hba.com/hba-featured-in-forbes-americas-top-hospitality-architects-designers-2026/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Forbes-America-Top-Hospitality-Architects-Designers-2026-Perspectives-1-864x1536.jpg"
                    imageAlt=""
                    category="Awards & Accolades"
                    date="15.12.25"
                    title="HBA listed on Forbes’ America’s Top Hospitality Architects & Designers 2026"
                  />
                  <PerspectiveCard
                    ariaLabel="3 of 23"
                    href="https://hba.com/fairmont-breakers-long-beach-a-2025-gold-key-finalist/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-01-HBA-Gold-Key-Awards-2025-Fairmont-Breakers-Long-Beach-USA-Story-new.jpg"
                    imageAlt=""
                    category="Awards & Accolades"
                    date="23.01.26"
                    title="Fairmont Breakers Long Beach named 2025 Gold Key Awards Finalist"
                  />
                  <PerspectiveCard
                    ariaLabel="4 of 23"
                    href="https://hba.com/sofitel-new-york-designed-by-hba-san-francisco-shortlisted-in-ahead-awards-americas-2026/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Sofitel-New-York-USA-Ahead-Americas-2026-Perspective-864x1536.jpg"
                    imageAlt="Elegant hotel interior showcasing a stylish suite entry with modern art, plush chair, decorative console table, and soft lighting. Text reads “Ahead Americas Finalist.”"
                    category="Awards & Accolades"
                    date="03.06.26"
                    title="Sofitel New York shortlisted in the AHEAD Awards Americas 2026"
                  />
                  <PerspectiveCard
                    ariaLabel="5 of 23"
                    href="https://hba.com/hba-appoints-four-new-partners-across-three-continents/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Partners_Persepective_2-864x1536.jpg"
                    imageAlt="HBA newly appointed partners in 2026 (all men) are shown in a 2x2 grid. They are dressed in smart-casual outfits, exuding professionalism and confidence. Neutral backgrounds enhance their focus."
                    category="Press Release"
                    date="21.05.26"
                    title="HBA appoints four new partners across three continents, reinforcing the firm’s global leadership in hospitality and lifestyle design"
                  />
                  <PerspectiveCard
                    ariaLabel="6 of 23"
                    href="https://hba.com/christin-castillo-principal-at-hba-bali-hba-jakarta-speaks-at-the-2026-edition-of-iffina-powered-by-imm-cologne/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-HBA-Portrait-Christin-Castillo.jpg"
                    imageAlt="HBA-Portrait-Christin-Castillo"
                    category="Events"
                    date="29.04.26"
                    title="Christin Castillo, Principal at HBA Bali & HBA Jakarta, speaks at the 2026 edition of IFFINA +, powered by imm cologne"
                  />
                  <PerspectiveCard
                    ariaLabel="7 of 23"
                    href="https://hba.com/conde-nast-traveler-milan-design-week/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Giorgetti_AM_DanteBini_Modena_2026_005_HR-1024x1536.jpg"
                    imageAlt=""
                    category="Media"
                    date="18.04.26"
                    title="KUMIKI collection by Giorgetti, as featured in Condé Nast Traveler’s Milan Design Week round-up"
                  />
                  <PerspectiveCard
                    ariaLabel="8 of 23"
                    href="https://hba.com/wallpaper-spotlights-kumiki-hbas-second-design-collaboration-for-giorgetti/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Giorgetti_AM_DanteBini_Modena_2026_004_HR-1536x1229.jpg"
                    imageAlt="Modern living room with beige Giorgetti Kumiki armchairs, a marble coffee table, and a view of a lush garden through large windows, creating a serene ambiance."
                    category="Media"
                    date="17.04.26"
                    title="Wallpaper* spotlights KUMIKI, HBA’s second design collaboration for Giorgetti"
                  />
                  <PerspectiveCard
                    ariaLabel="9 of 23"
                    href="https://hba.com/construction-week-property-architects-hall-of-fame-recognises-alejandra-de-cordoba-estepa/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/01-HBA-Alejandra-de-Cordoba-Estepa-Portrait--864x1536.jpg"
                    imageAlt=""
                    category="Awards & Accolades"
                    date="16.04.26"
                    title="Alejandra de Cordoba Estepa, Principal of Architecture EMEA, recognised in 2026 Architects’ Hall of Fame"
                  />
                  <PerspectiveCard
                    ariaLabel="10 of 23"
                    href="https://hba.com/light-in-the-spotlight-gerard-lee-partner-at-light-directions-on-what-hospitality-design-needs-today/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/People-Gerard-Lee-By-Sayher-Heffernan.jpg"
                    imageAlt=""
                    category="Insights"
                    date="15.04.26"
                    title="Archibuild Magazine profiles Gerard Lee, Partner at Light Directions, on what hospitality design needs today"
                  />
                  <PerspectiveCard
                    ariaLabel="11 of 23"
                    href="https://hba.com/hba-named-finalist-in-design-et-al-20th-anniversary-accolade-awards-design/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-OneOnly-Portonovi-Herceg-Novi-864x1536.jpg"
                    imageAlt=""
                    category="Awards & Accolades"
                    date="10.04.26"
                    title="HBA named Finalist in design et al 20th Anniversary Accolade Awards Design"
                  />
                  <PerspectiveCard
                    ariaLabel="12 of 23"
                    href="https://hba.com/chris-godfrey-co-ceo-at-hba-delivers-a-keynote-at-interior-design-forum-2026-in-shanghai/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Portrait-Chris-Godfrey-By-Sayher-Heffernan-0003-1-Copy_medium.jpg"
                    imageAlt=""
                    category="Events"
                    date="31.03.26"
                    title="Chris Godfrey, Co-CEO at HBA delivers a keynote at Interior Design Forum 2026 in Shanghai"
                  />
                  <PerspectiveCard
                    ariaLabel="13 of 23"
                    href="https://hba.com/hba-residential-shares-how-wellness-is-redefining-ultra-luxury-residential-design-in-miami/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-residential-robbreport.jpg"
                    imageAlt="Perspectives-residential-robbreport"
                    category="Media"
                    date="31.03.26"
                    title="HBA Residential shares how wellness is redefining ultra-luxury residential design in Miami"
                  />
                  <PerspectiveCard
                    ariaLabel="14 of 23"
                    href="https://hba.com/hba-and-hyundaiec-set-a-new-standard-for-luxury-residential-apgujeong-district-3-seoul/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/1-HBA-Hyundai-Apgujeong-Seoul-Korea-1536x1099.png"
                    imageAlt="Modern high-rise apartment with large windows overlooking the Han River in Seoul and the city skyline at sunset. Lush park on the riverbank, clear blue sky. Calm and serene."
                    category="Media"
                    date="19.03.26"
                    title="HBA and Hyundai E&amp;C set a new standard for luxury residential in Apgujeong District 3, Seoul"
                  />
                  <PerspectiveCard
                    ariaLabel="15 of 23"
                    href="https://hba.com/a-conversation-with-katie-earl-on-the-delmore-designing-a-masterpiece/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA_Set1_HR-30-scaled-e1772038407995-1190x1536.jpg"
                    imageAlt=""
                    category="Media"
                    date="11.03.26"
                    title="A conversation with Katie Earl on The Delmore: designing a masterpiece"
                  />
                  <PerspectiveCard
                    ariaLabel="16 of 23"
                    href="https://hba.com/joris-angevaare-partner-at-studiohba-speaks-at-ahice-global-hotel-industry-conferences-south-east-asia-2026/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Portrait-Joris-Angevaare-By-Sayher-Heffernan-0002-scaled-e1758149492965-1138x1536.jpeg"
                    imageAlt="Joris-Angevaare"
                    category="Events"
                    date="10.03.26"
                    title="Joris Angevaare, Partner at Studio HBA, speaks at AHICE Global Hotel Industry Conferences South East Asia 2026"
                  />
                  <PerspectiveCard
                    ariaLabel="17 of 23"
                    href="https://hba.com/lesha-fernando-associate-at-hba-dubai-on-good-hospitality-design-responsible-leadership-and-enduring-legacy/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/perspectives-01-HBA-Lesha-Fernando-Portrait.jpg"
                    imageAlt="perspectives-01-HBA-Lesha-Fernando"
                    category="Media"
                    date="03.03.26"
                    title="Lesha Fernando, Associate at HBA Dubai, on good hospitality design, responsible leadership, and enduring legacy"
                  />
                  <PerspectiveCard
                    ariaLabel="18 of 23"
                    href="https://hba.com/mathew-lui-partner-at-hba-hong-kong-recognised-in-home-journals-top-50-2026/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-Portrait-Mathew-Lui-By-Sayher-Heffernan-0002-2-1024x1536.jpg"
                    imageAlt=""
                    category="Media"
                    date="16.02.26"
                    title="Mathew Lui, Partner at HBA Hong Kong, recognised in Home Journal’s Top 50 2026"
                  />
                  <PerspectiveCard
                    ariaLabel="19 of 23"
                    href="https://hba.com/prime-resi-showcases-oceanfront-interiors-at-hba-residentials-the-delmore/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/03-HBA-The-Delmore-Residences-Miami-USA-new.jpg"
                    imageAlt="HBA-The-Delmore-Residences-Miami-USA"
                    category="Media"
                    date="05.02.26"
                    title="Prime Resi showcases oceanfront interiors at HBA Residential’s The Delmore"
                  />
                  <PerspectiveCard
                    ariaLabel="20 of 23"
                    href="https://hba.com/hba-americas-leo-bertacchinis-perspective-branded-living-a-global-shift-in-how-we-design-aspire-and-belong/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/HBA-The-Delmore-Residences-Miami-USA.jpg"
                    imageAlt="View from below of a futuristic building featuring a transparent rooftop pool with a swimmer. Framed by white structures and palm trees, under a clear blue sky."
                    category="Insights"
                    date="16.01.26"
                    title="Branded Living: a global shift in how we design, aspire and belong"
                  />
                  <PerspectiveCard
                    ariaLabel="21 of 23"
                    href="https://hba.com/sleeper-magazine-showcases-hba-san-franciscos-lart-decoratif-inspired-vision-for-sofitel-new-york/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-20260105-01-HBA-Sofitel-New-York-Penthouse-Living-Room-1536x1024.jpg"
                    imageAlt="HBA-Sofitel-New-York-Penthouse-Living-Room"
                    category="Media"
                    date="05.01.26"
                    title="Sleeper Magazine spotlights Art Deco interiors at Sofitel New York"
                  />
                  <PerspectiveCard
                    ariaLabel="22 of 23"
                    href="https://hba.com/co-ceo-chris-godfrey-on-hba-bringing-global-hospitality-design-to-south-koreas-high-end-housing/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-01-HBA-Portrait-Chris-Godfrey-new.jpg"
                    imageAlt="Perspectives-01-HBA-Portrait-Chris-Godfrey"
                    category="Media"
                    date="25.12.25"
                    title="Co-CEO Chris Godfrey on HBA bringing global hospitality design to South Korea’s high-end housing"
                  />
                  <PerspectiveCard
                    ariaLabel="23 of 23"
                    href="https://hba.com/hba-partner-and-president-of-the-middle-east-ksa-andrew-moore-on-adapting-hotel-designs-for-branded-residences/"
                    imageSrc="https://c.animaapp.com/mq6uygebb47riI/assets/Perspectives-Andrew-Moore.jpg"
                    imageAlt="Perspectives-Andrew-Moore"
                    category="Media"
                    date="23.12.25"
                    title="HBA Partner and President, Middle East &amp; KSA, Andrew Moore on adapting hotel designs for branded residences"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-900/20 box-border caret-transparent h-px outline-[3px] absolute no-underline w-[calc(100%_-_24px)] left-3 bottom-0">
              <div className="bg-gray-900 box-border caret-transparent h-full outline-[3px] no-underline w-[4.34783%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
