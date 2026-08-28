import { useCallback, useEffect, useRef, type ReactNode } from "react";
import "./RoomEntryIntro.css";

export type RoomLayer = { src: string };

export type AmenityCard = {
  kicker: string;
  title: string;
  text: string;
  icon: ReactNode;
};

export type RoomFact = { value: string; label: string };

export interface RoomEntryIntroProps {
  roomName: string;
  intro: string;
  tags: string[];
  layers: {
    interior: RoomLayer;
    lightBloom?: RoomLayer;
    bed?: RoomLayer;
    jambLeft?: RoomLayer;
    jambRight?: RoomLayer;
    /** Fallback: unica immagine di soglia, tagliata a metà via clip-path. */
    frame?: RoomLayer;
    door: RoomLayer;
    detail: RoomLayer;
  };
  panelOne: { title: string; text: string; facts: [RoomFact, RoomFact] };
  panelTwo: { title: string; text: string; ctaLabel: string; ctaHref: string };
  amenities: AmenityCard[];
  scrollLength?: number;
  skipHref?: string;
  scrollHint?: string;
  skipLabel?: string;
}

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smoothstep = (e0: number, e1: number, v: number) => {
  const x = clamp((v - e0) / (e1 - e0));
  return x * x * (3 - 2 * x);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const segmentInOut = (s: number, a: number, b: number, c: number, d: number) => {
  const enter = smoothstep(a, b, s);
  const exit = smoothstep(c, d, s);
  return { enter, exit, active: enter * (1 - exit) };
};

export function RoomEntryIntro({
  roomName,
  intro,
  tags,
  layers,
  panelOne,
  panelTwo,
  amenities,
  scrollLength = 3700,
  skipHref = "#dettagli",
  scrollHint = "Scorri",
  skipLabel = "Salta l'introduzione",
}: RoomEntryIntroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const activeCardRef = useRef(amenities.length);
  const loadedRef = useRef(0);

  const mode: "layered" | "simple" =
    layers.jambLeft && layers.jambRight ? "layered" : "simple";
  const jambLeftSrc = layers.jambLeft?.src ?? layers.frame?.src ?? layers.door.src;
  const jambRightSrc = layers.jambRight?.src ?? layers.frame?.src ?? layers.door.src;

  const onLayerLoad = useCallback(() => {
    loadedRef.current += 1;
    if (loadedRef.current >= 3) stageRef.current?.classList.add("is-ready");
  }, []);

  const updateSlider = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const active = activeCardRef.current;
    sectionRef.current?.style.setProperty(
      "--cards-shift",
      `${-(cardWidth + gap) * active}px`,
    );
    cards.forEach((card) => {
      card.classList.toggle(
        "is-active",
        Number(card.dataset.cardIndex) === active,
      );
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const controls = controlsRef.current;
    if (!section || !track) return;

    const originalCount = amenities.length;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const k = scrollLength / 3700;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetScroll = 0;
    let smoothScroll = 0;
    let initialized = false;
    let rafPending = false;
    let rafId = 0;
    let disposed = false;

    const setVar = (name: string, value: string) =>
      section.style.setProperty(name, value);

    const getScrollDistance = () =>
      clamp(
        -section.getBoundingClientRect().top,
        0,
        section.offsetHeight - window.innerHeight,
      );

    const requestTick = () => {
      if (rafPending || disposed) return;
      rafPending = true;
      rafId = requestAnimationFrame(update);
    };

    function update() {
      rafPending = false;
      targetScroll = getScrollDistance();
      if (!initialized || reduceMotion.matches) {
        smoothScroll = targetScroll;
        initialized = true;
      } else {
        smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
      }
      if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

      mouseX = lerp(mouseX, targetMouseX, 0.12);
      mouseY = lerp(mouseY, targetMouseY, 0.12);

      const s = smoothScroll / k;
      const doorPass = segmentInOut(s, 560, 900, 1300, 1620);
      const roomPhase = segmentInOut(s, 1760, 2140, 2540, 2700);
      const progress = clamp(s / 2700);
      const introExit = smoothstep(90, 650, s);
      const cardsEnterRaw = smoothstep(2760, 3560, s);
      const cardsEnter = Math.pow(cardsEnterRaw, 1.55);
      const cardsControlsEnter = smoothstep(3360, 3660, s);
      const blurActive = clamp(doorPass.active + roomPhase.active);
      const detailOpacity = doorPass.active * (1 - roomPhase.enter);
      const jambDrift = Math.pow(doorPass.enter, 1.5);
      const panel1Opacity = doorPass.active * (1 - doorPass.exit);
      const panel2Opacity = roomPhase.active * (1 - roomPhase.exit);
      const backScale =
        0.76 + progress * 0.2 + doorPass.enter * 0.18 + roomPhase.enter * 0.16;
      const sharedHeroY = progress * -74;
      const sharedHeroScale = progress * 0.23;
      const cardsScreenTop =
        Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
      const cardsParentTop =
        window.innerHeight - (window.innerHeight - cardsScreenTop) / backScale;

      const mx = reduceMotion.matches ? 0 : mouseX;
      const my = reduceMotion.matches ? 0 : mouseY;
      setVar("--mx", mx.toFixed(4));
      setVar("--my", my.toFixed(4));

      setVar("--back-opacity", (1 - doorPass.active * 0.06).toFixed(4));
      setVar("--back-x", `${(mx * -12).toFixed(2)}px`);
      setVar("--back-y", `${(my * -4).toFixed(2)}px`);
      setVar("--back-scale", backScale.toFixed(4));
      setVar("--bloom-y", `${(10 + progress * 10).toFixed(3)}vh`);
      setVar("--bloom-scale", (0.78 + progress * 0.16).toFixed(4));
      setVar("--bed-y", `${(20 - progress * 8).toFixed(3)}vh`);
      setVar("--blur-px", `${(blurActive * 14).toFixed(2)}px`);
      setVar("--back-brightness", (1 - blurActive * 0.255).toFixed(4));
      setVar("--bed-blur-px", `${(doorPass.active * 14).toFixed(2)}px`);
      setVar(
        "--bed-brightness",
        (1 - doorPass.active * 0.255 - roomPhase.active * 0.06).toFixed(4),
      );
      setVar("--bed-saturation", (1 + roomPhase.active * 0.18).toFixed(4));
      setVar("--shade-opacity", "1");
      setVar("--shade-z", doorPass.active > 0.02 ? "2" : "0");
      setVar("--shade-top-alpha", (blurActive * 0.465).toFixed(4));
      setVar("--shade-mid-alpha", (blurActive * 0.42).toFixed(4));
      setVar("--shade-bottom-alpha", (blurActive * 0.51).toFixed(4));

      setVar("--title-y", `${(introExit * -210).toFixed(2)}px`);
      setVar("--title-scale", (1 - introExit * 0.08).toFixed(4));
      setVar("--title-opacity", (1 - introExit).toFixed(4));

      setVar("--door-x", `calc(-50% + ${(mx * 18).toFixed(2)}px)`);
      setVar(
        "--door-y",
        `${(my * 8 + sharedHeroY - doorPass.exit * 760).toFixed(2)}px`,
      );
      setVar("--door-bottom", `${(5 - doorPass.enter * 13).toFixed(3)}vh`);
      setVar("--door-width", `${(67.2 + doorPass.enter * 37.8).toFixed(3)}vw`);
      setVar("--door-scale", (1.02 + sharedHeroScale + doorPass.exit * 0.46).toFixed(4));

      setVar(
        "--jamb-left-x",
        `calc(-50% + ${(-jambDrift * 46).toFixed(3)}vw + ${(mx * 22).toFixed(2)}px)`,
      );
      setVar(
        "--jamb-left-y",
        `${(my * 10 + sharedHeroY - jambDrift * 180).toFixed(2)}px`,
      );
      setVar(
        "--jamb-left-scale",
        (1 + sharedHeroScale + doorPass.enter * 0.74).toFixed(4),
      );
      setVar(
        "--jamb-right-x",
        `calc(-50% + ${(jambDrift * 46).toFixed(3)}vw + ${(mx * 22).toFixed(2)}px)`,
      );
      setVar(
        "--jamb-right-y",
        `${(my * 10 + sharedHeroY - jambDrift * 180).toFixed(2)}px`,
      );
      setVar(
        "--jamb-right-scale",
        (1 + sharedHeroScale + doorPass.enter * 0.74).toFixed(4),
      );

      setVar("--detail-opacity", detailOpacity.toFixed(4));
      setVar("--detail-x", `calc(-50% + ${(mx * 10).toFixed(2)}px)`);
      setVar(
        "--detail-y",
        `calc(-50% + ${(my * 8 - doorPass.exit * 150).toFixed(2)}px)`,
      );
      setVar(
        "--detail-scale",
        (1.06 + doorPass.enter * 0.08 + doorPass.exit * 0.08).toFixed(4),
      );

      setVar("--intro-y", `${(introExit * 90).toFixed(2)}px`);
      setVar("--intro-opacity", (1 - introExit).toFixed(4));
      setVar("--panel1-opacity", panel1Opacity.toFixed(4));
      setVar(
        "--panel1-y",
        `calc(-50% + ${(-doorPass.exit * 86 + (1 - doorPass.enter) * 58).toFixed(2)}px)`,
      );
      setVar("--panel2-opacity", panel2Opacity.toFixed(4));
      setVar(
        "--panel2-y",
        `calc(-50% + ${(-roomPhase.exit * 86 + (1 - roomPhase.enter) * 58).toFixed(2)}px)`,
      );

      setVar("--cards-opacity", cardsEnter.toFixed(4));
      setVar("--cards-controls-opacity", cardsControlsEnter.toFixed(4));
      controls?.classList.toggle("is-ready", cardsControlsEnter > 0.98);
      setVar("--cards-visibility", cardsEnter > 0.01 ? "visible" : "hidden");
      setVar("--cards-y", "0px");
      setVar("--cards-enter-x", `${((1 - cardsEnter) * 420).toFixed(3)}vw`);
      setVar("--cards-scale", (1 / backScale).toFixed(4));
      setVar("--cards-top", `${cardsParentTop.toFixed(2)}px`);
      setVar("--cards-screen-top", `${cardsScreenTop.toFixed(2)}px`);

      if (
        Math.abs(smoothScroll - targetScroll) > 0.08 ||
        Math.abs(mouseX - targetMouseX) > 0.001 ||
        Math.abs(mouseY - targetMouseY) > 0.001
      ) {
        requestTick();
      }
    }

    // ---- slider -------------------------------------------------------
    const cardEls = () => Array.from(track.children) as HTMLElement[];

    const jump = (i: number) => {
      track.classList.add("is-jumping");
      activeCardRef.current = i;
      updateSlider();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => track.classList.remove("is-jumping")),
      );
    };
    const normalize = () => {
      const a = activeCardRef.current;
      if (a >= originalCount * 2) jump(a - originalCount);
      else if (a < originalCount) jump(a + originalCount);
    };
    const move = (dir: number) => {
      activeCardRef.current += dir;
      updateSlider();
    };
    const select = (card: HTMLElement) => {
      const idx = Number(card.dataset.cardIndex);
      if (Number.isFinite(idx)) activeCardRef.current = idx;
      updateSlider();
    };

    const onCardClick = (e: Event) => {
      const card = (e.currentTarget as HTMLElement);
      select(card);
    };
    const onCardKey = (e: Event) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter" || ke.key === " ") {
        ke.preventDefault();
        select(e.currentTarget as HTMLElement);
      }
    };

    cardEls().forEach((card) => {
      card.addEventListener("click", onCardClick);
      card.addEventListener("keydown", onCardKey);
    });
    track.addEventListener("transitionend", normalize);

    activeCardRef.current = originalCount;
    updateSlider();

    const onScroll = () => requestTick();
    const onResize = () => {
      updateSlider();
      requestTick();
    };
    const onPointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      requestTick();
    };
    const onPrev = () => move(-1);
    const onNext = () => move(1);

    const prevBtn = controls?.querySelector<HTMLButtonElement>(".rei-prev");
    const nextBtn = controls?.querySelector<HTMLButtonElement>(".rei-next");
    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    requestTick();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      prevBtn?.removeEventListener("click", onPrev);
      nextBtn?.removeEventListener("click", onNext);
      track.removeEventListener("transitionend", normalize);
      cardEls().forEach((card) => {
        card.removeEventListener("click", onCardClick);
        card.removeEventListener("keydown", onCardKey);
      });
    };
  }, [amenities.length, scrollLength, updateSlider]);

  const sets = [0, 1, 2];

  return (
    <section
      ref={sectionRef}
      className={`rei-scroll ${mode === "simple" ? "is-simple" : ""}`}
      style={{ ["--rei-length" as string]: `${scrollLength}px` }}
      aria-label={`Ingresso nella camera ${roomName}`}
    >
      <a className="rei-skip" href={skipHref}>
        {skipLabel}
      </a>
      <div className="rei-stage" ref={stageRef}>
        <div className="rei-world">
          <img
            className="rei-scene rei-interior"
            src={layers.interior.src}
            alt=""
            draggable={false}
            {...({ fetchpriority: "high" } as Record<string, string>)}
          />
          <div className="rei-back-stack">
            {layers.lightBloom ? (
              <img
                className="rei-scene rei-back rei-bloom"
                src={layers.lightBloom.src}
                alt=""
                draggable={false}
                loading="lazy"
              />
            ) : null}
            <section className="rei-amenities" aria-label="Dotazioni della camera">
              <div className="rei-amenities-track" ref={trackRef}>
                {sets.flatMap((setIndex) =>
                  amenities.map((a, i) => (
                    <article
                      key={`${setIndex}-${i}`}
                      className="rei-card"
                      tabIndex={0}
                      role="button"
                      data-card-index={setIndex * amenities.length + i}
                    >
                      <span className="rei-kicker">{a.kicker}</span>
                      <span className="rei-pin">{a.icon}</span>
                      <h3>{a.title}</h3>
                      <p>{a.text}</p>
                    </article>
                  )),
                )}
              </div>
            </section>
            {layers.bed ? (
              <img
                className="rei-scene rei-back rei-bed"
                src={layers.bed.src}
                alt=""
                draggable={false}
                loading="lazy"
              />
            ) : null}
          </div>

          <div
            className="rei-amenities-controls"
            ref={controlsRef}
            aria-label="Controlli slider"
          >
            <button type="button" className="rei-nav rei-prev" aria-label="Dotazione precedente">
              ←
            </button>
            <button type="button" className="rei-nav rei-next" aria-label="Dotazione successiva">
              →
            </button>
          </div>

          <h1 className="rei-title">{roomName}</h1>

          <img
            className="rei-scene rei-jamb rei-jamb-left"
            src={jambLeftSrc}
            alt=""
            draggable={false}
            {...({ fetchpriority: "high" } as Record<string, string>)}
          />
          <img
            className="rei-scene rei-jamb rei-jamb-right"
            src={jambRightSrc}
            alt=""
            draggable={false}
            {...({ fetchpriority: "high" } as Record<string, string>)}
            onLoad={onLayerLoad}
          />
          <img
            className="rei-scene rei-door"
            src={layers.door.src}
            alt=""
            draggable={false}
            {...({ fetchpriority: "high" } as Record<string, string>)}
            onLoad={onLayerLoad}
          />
          <img
            className="rei-scene rei-detail"
            src={layers.detail.src}
            alt=""
            draggable={false}
            loading="lazy"
          />
          <div className="rei-shade" />
        </div>

        <section className="rei-intro" aria-label="Descrizione della camera">
          <p>{intro}</p>
          <div className="rei-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="rei-panel rei-panel-one" aria-label={panelOne.title}>
          <h2>{panelOne.title}</h2>
          <p>{panelOne.text}</p>
          <dl className="rei-facts">
            {panelOne.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rei-panel rei-panel-two" aria-label={panelTwo.title}>
          <h2>{panelTwo.title}</h2>
          <p>{panelTwo.text}</p>
          <a className="rei-cta" href={panelTwo.ctaHref}>
            <span aria-hidden="true">↗</span>
            <span>{panelTwo.ctaLabel}</span>
          </a>
        </section>

        <div className="rei-hint">{scrollHint}</div>
      </div>
    </section>
  );
}

export default RoomEntryIntro;
