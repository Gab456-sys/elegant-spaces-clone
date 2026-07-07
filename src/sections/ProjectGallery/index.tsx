import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type ProjectGalleryProps = {
  sectionId?: string;
  backgroundVariant?: string;
  title: string;
  metaPrimary?: string;
  metaSecondary?: string;
  metaLocation?: string;
  metaYear?: string;
  heroImages: ProjectGalleryImage[];
  galleryImages: ProjectGalleryImage[];
};

export const ProjectGallery = ({
  sectionId,
  title,
  metaPrimary,
  metaSecondary,
  metaLocation,
  metaYear,
  heroImages,
  galleryImages,
}: ProjectGalleryProps) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const overlay = overlayRef.current;
    const hero = heroRef.current;

    if (!section || !track || !overlay || !hero) {
      return;
    }

    const getCardWidth = () =>
      Math.min(Math.max(window.innerWidth * 0.62, 320), 900);

    const updateGallery = () => {
      const GAP = window.innerWidth >= 768 ? 96 : 48;
      const cardWidth = getCardWidth();

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(
        section.offsetHeight - viewportHeight,
        1,
      );
      const rawProgress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);

      const slideCount = Math.max(galleryImages.length, 1);
      const step = cardWidth + GAP;

      const startOffset = window.innerWidth + GAP;
      const lastCardCenteredOffset =
        (window.innerWidth - cardWidth) / 2 - (slideCount - 1) * step;

      const holdPhaseStart = 0.22;
      const holdPhaseEnd = 0.82;

      let moveProgress = 0;

      if (rawProgress <= holdPhaseStart) {
        moveProgress = 0;
      } else if (rawProgress >= holdPhaseEnd) {
        moveProgress = 1;
      } else {
        moveProgress =
          (rawProgress - holdPhaseStart) / (holdPhaseEnd - holdPhaseStart);
      }

      const currentTranslate =
        startOffset + (lastCardCenteredOffset - startOffset) * moveProgress;

      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;

      const overlayOpacity =
        rawProgress < holdPhaseStart
          ? 0.03 + rawProgress * 0.14
          : 0.08 + moveProgress * 0.12;

      overlay.style.opacity = `${Math.min(overlayOpacity, 0.2)}`;

      hero.style.opacity = "1";
      hero.style.transform = "scale(1)";
    };

    updateGallery();
    window.addEventListener("scroll", updateGallery, { passive: true });
    window.addEventListener("resize", updateGallery);

    return () => {
      window.removeEventListener("scroll", updateGallery);
      window.removeEventListener("resize", updateGallery);
    };
  }, [galleryImages.length]);

  const heroImage = heroImages[0];
  const isPrimaryExtraBed = Boolean(metaPrimary && /letto aggiuntivo|extra bed/i.test(metaPrimary));
  const isYearExtraBed = Boolean(metaYear && /letto aggiuntivo|extra bed/i.test(metaYear));
  const hasExtraBedLabel = isPrimaryExtraBed || isYearExtraBed;
  const extraBedValue = isPrimaryExtraBed
    ? metaPrimary
    : isYearExtraBed
      ? metaYear
      : undefined;

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className="relative"
      style={{ height: "540vh" }}
    >
      <div className="sticky top-0 h-screen w-full">
        <div className="relative h-screen w-full overflow-hidden">
          {heroImage ? (
            <img
              ref={heroRef}
              src={heroImage.src}
              alt={heroImage.alt}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{ opacity: 1, transform: "scale(1)" }}
            />
          ) : null}

          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-[0.04]"
          />

          <div className="absolute inset-0 z-[2] flex items-center justify-center">
            <div className="relative h-[64vh] w-screen overflow-visible md:h-[70vh]">
              <div
                ref={trackRef}
                className="absolute left-0 top-0 flex h-full will-change-transform"
                style={{
                  gap: "clamp(48px, 6vw, 96px)",
                  width: "max-content",
                  transform: "translate3d(118%, 0, 0)",
                }}
              >
                {galleryImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative h-full shrink-0 overflow-hidden"
                    style={{
                      width: "clamp(320px, 62vw, 900px)",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={sectionId ? `/projects/${sectionId}` : "#"}
            className="pointer-events-auto group absolute inset-x-0 bottom-0 z-[3] block px-6 pb-8 no-underline text-stone-50 md:px-[32.8889px] md:pb-10"
          >
            <div className="relative">
              {/* Default state: title + meta */}
              <div className="flex w-full items-end justify-between gap-6 transition-opacity duration-500 ease-out md:group-hover:opacity-0">
                <div>
                  <h2 className="font-beausite_slick text-[40px] font-light leading-none md:text-[64px]">
                    {title}
                  </h2>
                </div>

                <div className="hidden md:flex md:items-end md:gap-10 md:text-xs md:uppercase md:tracking-[1.2px]">
                  {metaPrimary && !isPrimaryExtraBed ? (
                    <span>{metaPrimary}</span>
                  ) : null}
                  {metaSecondary ? <span>{metaSecondary}</span> : null}
                  {metaLocation ? <span>{metaLocation}</span> : null}
                  {metaYear && !isYearExtraBed ? <span>{metaYear}</span> : null}
                  {hasExtraBedLabel && extraBedValue ? (
                    <span className="self-end text-right">{extraBedValue}</span>
                  ) : null}
                </div>
              </div>

              {/* Hover state: full-width "Scopri di più →" */}
              <div className="pointer-events-none absolute inset-0 hidden items-end opacity-0 transition-opacity duration-500 ease-out md:flex md:group-hover:opacity-100">
                <span className="inline-flex items-baseline gap-4 font-beausite_slick text-[40px] font-light leading-none md:text-[64px]">
                  {t("room.cta.discover")}
                  <span aria-hidden="true" className="text-[32px] md:text-[48px]">→</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
