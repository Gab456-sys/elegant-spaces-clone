import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";
import { MobileOverlay } from "@/components/MobileOverlay";
import { HiddenAssets } from "@/components/HiddenAssets";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { FamilySuitePage } from "@/sections/FamilySuitePage";
import { ComfortSuitePage } from "@/sections/ComfortSuitePage";
import { BasicRoomPage } from "@/sections/BasicRoomPage";
import { LaVillaPage } from "@/sections/LaVillaPage";
import { ConsigliPage } from "@/sections/ConsigliPage";
import { ContattiPage } from "@/sections/ContattiPage";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const AppShell = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const heroMedia = document.querySelector<HTMLElement>(
      "[data-hero-media-inner='true']",
    );
    const heroEmblem = document.querySelector<HTMLElement>(
      "[data-hero-emblem='true']",
    );
    const introEyebrow = document.querySelector<HTMLElement>(
      "[data-intro-eyebrow='true']",
    );
    const introTitle = document.querySelector<HTMLElement>(
      "[data-intro-title='true']",
    );
    const introCopy = document.querySelector<HTMLElement>(
      "[data-intro-copy='true']",
    );
    const introCta = document.querySelector<HTMLElement>(
      "[data-intro-cta='true']",
    );

    const introTargets = [
      heroMedia,
      heroEmblem,
      introEyebrow,
      introTitle,
      introCopy,
      introCta,
    ].filter(Boolean) as HTMLElement[];

    if (!introTargets.length) {
      return;
    }

    if (heroMedia) {
      heroMedia.style.opacity = "0";
      heroMedia.style.transform = "scale(1.08)";
      heroMedia.style.transition =
        "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
      heroMedia.style.willChange = "transform, opacity";
    }

    if (heroEmblem) {
      heroEmblem.style.opacity = "0";
      heroEmblem.style.transform = "translate3d(0, 24px, 0)";
      heroEmblem.style.transition =
        "transform 1.05s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
      heroEmblem.style.willChange = "transform, opacity";
    }

    [introEyebrow, introTitle, introCopy, introCta].forEach((element) => {
      if (!element) {
        return;
      }

      element.style.opacity = "0";
      element.style.transform = "translate3d(0, 26px, 0)";
      element.style.transition =
        "transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)";
      element.style.willChange = "transform, opacity";
    });

    const runIntro = window.setTimeout(() => {
      if (heroMedia) {
        heroMedia.style.opacity = "1";
        heroMedia.style.transform = "scale(1)";
      }

      window.setTimeout(() => {
        if (heroEmblem) {
          heroEmblem.style.opacity = "1";
          heroEmblem.style.transform = "translate3d(0, 0, 0)";
        }
      }, 180);

      window.setTimeout(() => {
        if (introEyebrow) {
          introEyebrow.style.opacity = "1";
          introEyebrow.style.transform = "translate3d(0, 0, 0)";
        }
      }, 260);

      window.setTimeout(() => {
        if (introTitle) {
          introTitle.style.opacity = "1";
          introTitle.style.transform = "translate3d(0, 0, 0)";
        }
      }, 380);

      window.setTimeout(() => {
        if (introCopy) {
          introCopy.style.opacity = "1";
          introCopy.style.transform = "translate3d(0, 0, 0)";
        }
      }, 520);

      window.setTimeout(() => {
        if (introCta) {
          introCta.style.opacity = "1";
          introCta.style.transform = "translate3d(0, 0, 0)";
        }
      }, 660);
    }, 80);

    return () => {
      window.clearTimeout(runIntro);

      introTargets.forEach((element) => {
        element.style.willChange = "";
      });
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const revealSelector = ".reveal, .reveal-media, .reveal-crop";
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    if (!revealElements.length) {
      return;
    }

    const getStaggerDelay = (element: HTMLElement) => {
      const explicitDelay = Number(element.dataset.revealDelay);

      if (!Number.isNaN(explicitDelay) && explicitDelay >= 0) {
        return explicitDelay;
      }

      const explicitOrder = Number(element.dataset.revealOrder);

      if (!Number.isNaN(explicitOrder) && explicitOrder >= 0) {
        return Math.min(explicitOrder * 120, 720);
      }

      const parent = element.parentElement;

      if (!parent) {
        return 0;
      }

      const siblings = Array.from(parent.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement &&
          (child.classList.contains("reveal") ||
            child.classList.contains("reveal-media") ||
            child.classList.contains("reveal-crop")),
      );

      const siblingIndex = siblings.indexOf(element);

      if (siblings.length > 1 && siblingIndex > 0) {
        return Math.min(siblingIndex * 110, 550);
      }

      return 0;
    };

    revealElements.forEach((element) => {
      element.style.setProperty(
        "--reveal-delay",
        `${getStaggerDelay(element)}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="accent-auto bg-transparent box-border caret-transparent text-gray-900 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-beausite_classic min-h-screen w-full md:bg-stone-100 md:text-stone-50">
      <Header />
      <MobileMenuButton
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((currentState) => !currentState)}
      />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/suite" element={<Navigate to="/suite/family" replace />} />
        <Route path="/suite/family" element={<FamilySuitePage />} />
        <Route path="/suite/comfort" element={<ComfortSuitePage />} />
        <Route path="/suite/basic" element={<BasicRoomPage />} />
        <Route
          path="/family-suite"
          element={<Navigate to="/suite/family" replace />}
        />
        <Route
          path="/comfort-suite"
          element={<Navigate to="/suite/comfort" replace />}
        />
        <Route
          path="/basic-room"
          element={<Navigate to="/suite/basic" replace />}
        />
        <Route path="/la-villa" element={<LaVillaPage />} />
        <Route path="/consigli" element={<ConsigliPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="*" element={<MainContent />} />
      </Routes>

      <Footer />
      <MobileOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HiddenAssets
        variant="image"
        containerVariant="hidden"
        imageUrl="https://c.animaapp.com/mq6uygebb47riI/assets/hba_wechat.jpg"
        imageAlt="WeChat QR Code"
        text=""
      />
      <HiddenAssets
        variant="text"
        containerVariant=""
        imageUrl=""
        imageAlt=""
        text="Notifications"
      />
      <HiddenAssets
        variant="empty"
        containerVariant="h-px absolute w-px overflow-hidden -m-px"
        imageUrl=""
        imageAlt=""
        text=""
      />
      <HiddenAssets
        variant="empty"
        containerVariant="h-px absolute w-px overflow-hidden -m-px"
        imageUrl=""
        imageAlt=""
        text=""
      />
      <HiddenAssets
        variant="iframe"
        containerVariant=""
        imageUrl=""
        imageAlt=""
        text=""
      />
    </div>
  );
};

export const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
};
