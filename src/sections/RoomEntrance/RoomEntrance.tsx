import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { RoomEntranceData } from "./rooms";
import "./roomEntrance.css";

/* ---------- helpers ---------- */

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

const smoothstep = (edge0: number, edge1: number, v: number) => {
  const x = clamp((v - edge0) / (edge1 - edge0));
  return x * x * (3 - 2 * x);
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const segment = (s: number, a: number, b: number, c: number, d: number) => {
  const enter = smoothstep(a, b, s);
  const exit = smoothstep(c, d, s);
  return { enter, exit, active: enter * (1 - exit) };
};

/** Lunghezza scrollabile della scena, in px. Deve combaciare con il CSS. */
const SCENE = 3400;

type Props = {
  room: RoomEntranceData;
  /** Contenuti iniziali espliciti, così restano modificabili dall'editor visivo. */
  titleContent: ReactNode;
  introContent: { it: ReactNode; en: ReactNode };
  tagsContent: { it: ReactNode; en: ReactNode };
  panelBedContent: {
    it: { heading: ReactNode; body: ReactNode; facts: { dt: ReactNode; dd: ReactNode }[] };
    en: { heading: ReactNode; body: ReactNode; facts: { dt: ReactNode; dd: ReactNode }[] };
  };
  panelServicesContent: {
    it: { heading: ReactNode; body: ReactNode; cta: ReactNode };
    en: { heading: ReactNode; body: ReactNode; cta: ReactNode };
  };
  amenitiesContent: {
    it: { kicker: ReactNode; title: ReactNode; body: ReactNode }[];
    en: { kicker: ReactNode; title: ReactNode; body: ReactNode }[];
  };
  /** Selettore del target della CTA. Default: il form di prenotazione. */
  ctaTarget?: string;
};

export const RoomEntrance = ({
  room,
  titleContent,
  introContent,
  tagsContent,
  panelBedContent,
  panelServicesContent,
  amenitiesContent,
  ctaTarget = "#suite-booking-embed",
}: Props) => {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "it";

  /* Calibrazione del primo piano, con i default del progetto. */
  const fgWidth = room.foregroundFit?.width ?? 64;
  const fgGrow = room.foregroundFit?.grow ?? 36;
  const fgBottom = room.foregroundFit?.bottom ?? 2;
  const fgLift = room.foregroundFit?.lift ?? 10;

  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const amenitiesRef = useRef<HTMLDivElement | null>(null);

  const currentAmenities = amenitiesContent[lang];
  /** Le card sono triplicate per il loop infinito; si parte dal set centrale. */
  const loopCards = useMemo(
    () => [...currentAmenities, ...currentAmenities, ...currentAmenities],
    [currentAmenities],
  );
  const originalCount = currentAmenities.length;
  /* ---------- slider a scorrimento continuo ---------- */

  /** Posizione renderizzata e posizione desiderata, in px (negativa = verso sinistra). */
  const posRef = useRef(0);
  const targetRef = useRef(0);
  const draggingRef = useRef(false);
  const draggedRef = useRef(false);

  const stepSize = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector(".re-card") as HTMLElement | null;
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  };


  /* ---------- motore ---------- */

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const amenities = amenitiesRef.current;
    if (!section || !stage || !track || !amenities) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let targetScroll = 0;
    let smoothScroll = 0;
    let targetMx = 0;
    let targetMy = 0;
    let mx = 0;
    let my = 0;
    let started = false;
    let pending = false;
    let frame = 0;

    const set = (name: string, value: string) => stage.style.setProperty(name, value);

    const scrollDistance = () =>
      clamp(-section.getBoundingClientRect().top, 0, section.offsetHeight - window.innerHeight);

    const update = () => {
      pending = false;
      targetScroll = scrollDistance();

      if (!started || reduce.matches) {
        smoothScroll = targetScroll;
        started = true;
      } else {
        smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
      }
      if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

      mx = reduce.matches ? 0 : lerp(mx, targetMx, 0.12);
      my = reduce.matches ? 0 : lerp(my, targetMy, 0.12);

      const s = smoothScroll;
      const progress = clamp(s / SCENE);

      const door = segment(s, 480, 1240, 1520, 1980);
      const detail = segment(s, 1840, 2360, 2680, 3000);
      const introExit = smoothstep(100, 720, s);
      const amEnter = Math.pow(smoothstep(2620, 3240, s), 1.4);
      const amControls = smoothstep(2960, 3300, s);
      const veil = clamp(door.active + detail.active);
      const doorDrift = Math.pow(door.enter, 1.5);

      set("--mx", mx.toFixed(4));
      set("--my", my.toFixed(4));

      /* La camera si avvicina per tutta la scena: è l'ingresso vero e proprio. */
      set("--room-scale", (1.02 + progress * 0.26 + door.enter * 0.1).toFixed(4));
      set("--room-x", `${(mx * -14).toFixed(2)}px`);
      set("--room-y", `${(my * -8 - progress * 30).toFixed(2)}px`);
      /*
        La profondità la fa la SFOCATURA, non il bianco: alzare il velo lava
        la scena e rende illeggibili i pannelli. Blur deciso, velo discreto.
      */
      set("--room-blur", `${(veil * 8).toFixed(2)}px`);
      set("--room-brightness", (1 + veil * 0.04).toFixed(4));

      set("--door-drift", doorDrift.toFixed(4));
      set("--door-opacity", (1 - door.exit).toFixed(4));
      set("--door-scale", (1 + door.enter * 0.5).toFixed(4));

      /*
        Tre velocità diverse = profondità. Il fondale scala di 0.26, il layer
        intermedio di 0.44, il primo piano ancora di più: è il differenziale,
        non il numero di immagini, a far leggere gli strati come sovrapposti.
      */
      set("--mid-scale", (1 + progress * 0.44 + door.enter * 0.12).toFixed(4));
      set("--mid-y", `${(my * 5 - progress * 46).toFixed(2)}px`);

      /*
        Primo piano scontornato: ancorato in basso mentre le ante si aprono,
        poi in uscita sale di -760px scalando +0.5 — passa SOPRA lo spettatore
        invece di allontanarsi.
      */
      set("--fg-bottom", `${(fgBottom - door.enter * fgLift).toFixed(2)}vh`);
      set("--fg-width", `${(fgWidth + door.enter * fgGrow).toFixed(2)}vw`);
      set("--fg-y", `${(my * 8 - progress * 40 - door.exit * 760).toFixed(2)}px`);
      set("--fg-scale", (1 + progress * 0.18 + door.exit * 0.5).toFixed(4));
      set("--fg-opacity", (1 - detail.enter * 0.85).toFixed(4));

      set("--detail-opacity", (detail.active * (1 - detail.exit)).toFixed(4));
      set("--detail-scale", (1.04 + detail.enter * 0.08).toFixed(4));

      set("--shade-top", (veil * 0.3).toFixed(4));
      set("--shade-mid", (veil * 0.26).toFixed(4));
      set("--shade-bottom", (veil * 0.34).toFixed(4));

      set("--title-y", `${(introExit * -180 + my * 6).toFixed(2)}px`);
      set("--title-scale", (1 - introExit * 0.06).toFixed(4));
      set("--title-opacity", (1 - introExit).toFixed(4));

      set("--intro-y", `${(introExit * 80).toFixed(2)}px`);
      set("--intro-opacity", (1 - introExit).toFixed(4));

      set("--panel-bed-opacity", (door.active * (1 - door.exit)).toFixed(4));
      set("--panel-bed-y", `${(-door.exit * 80 + (1 - door.enter) * 58).toFixed(2)}px`);
      set("--panel-svc-opacity", (detail.active * (1 - detail.exit)).toFixed(4));
      set("--panel-svc-y", `${(-detail.exit * 80 + (1 - detail.enter) * 58).toFixed(2)}px`);

      set("--am-opacity", amEnter.toFixed(4));
      set("--am-x", `${((1 - amEnter) * 60).toFixed(2)}vw`);
      set("--am-controls-opacity", amControls.toFixed(4));

      amenities.classList.toggle("is-ready", amEnter > 0.98);
      controls.classList.toggle("is-ready", amControls > 0.98);
      stage.classList.toggle("is-intro-active", introExit < 0.95);
      stage.classList.toggle("is-bed-panel-active", door.active > 0.05 && door.exit < 0.95);
      stage.classList.toggle("is-services-panel-active", detail.active > 0.05 && detail.exit < 0.95);

      const moving =
        Math.abs(smoothScroll - targetScroll) > 0.08 ||
        Math.abs(mx - targetMx) > 0.001 ||
        Math.abs(my - targetMy) > 0.001;
      if (moving) tick();
    };

    const tick = () => {
      if (pending) return;
      pending = true;
      frame = requestAnimationFrame(update);
    };

    const onPointerMove = (e: PointerEvent) => {
      targetMx = e.clientX / window.innerWidth - 0.5;
      targetMy = e.clientY / window.innerHeight - 0.5;
      tick();
    };

    const onResize = () => {
      tick();
    };

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    tick();

    /* ---- marquee continuo + trascinamento ---- */
    const SPEED = 26; // px al secondo
    let marqueeFrame = 0;
    let last = 0;
    let visible = false;
    let hover = false;
    let focused = false;

    const loopWidth = () => stepSize() * originalCount;

    const wrap = () => {
      const w = loopWidth();
      if (w <= 0) return;
      while (posRef.current <= -w) {
        posRef.current += w;
        targetRef.current += w;
      }
      while (posRef.current > 0) {
        posRef.current -= w;
        targetRef.current -= w;
      }
    };

    const render = () => {
      track.style.setProperty("--am-shift", `${posRef.current.toFixed(2)}px`);
    };

    const loop = (time: number) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
      last = time;

      const autoplay = visible && !hover && !focused && !draggingRef.current && !document.hidden;
      if (autoplay && !reduce.matches) targetRef.current -= SPEED * dt;

      posRef.current = draggingRef.current
        ? targetRef.current
        : lerp(posRef.current, targetRef.current, 0.16);

      wrap();
      render();
      marqueeFrame = requestAnimationFrame(loop);
    };

    marqueeFrame = requestAnimationFrame(loop);

    let dragId: number | null = null;
    let dragX = 0;

    const onDragStart = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      draggingRef.current = true;
      draggedRef.current = false;
      dragId = e.pointerId;
      dragX = e.clientX;
      targetRef.current = posRef.current;
      track.setPointerCapture(e.pointerId);
      track.classList.add("is-dragging");
    };

    const onDragMove = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== dragId) return;
      const dx = e.clientX - dragX;
      dragX = e.clientX;
      if (Math.abs(dx) > 1) draggedRef.current = true;
      targetRef.current += dx;
    };

    const onDragEnd = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== dragId) return;
      draggingRef.current = false;
      dragId = null;
      track.classList.remove("is-dragging");
      if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
      window.setTimeout(() => {
        draggedRef.current = false;
      }, 0);
    };

    const autoObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );

    const onAmEnter = () => {
      hover = true;
    };
    const onAmLeave = () => {
      hover = false;
    };
    const onAmFocusIn = () => {
      focused = true;
    };
    const onAmFocusOut = () => {
      focused = false;
    };

    autoObserver.observe(amenities);
    amenities.addEventListener("pointerenter", onAmEnter);
    amenities.addEventListener("pointerleave", onAmLeave);
    amenities.addEventListener("focusin", onAmFocusIn);
    amenities.addEventListener("focusout", onAmFocusOut);
    track.addEventListener("pointerdown", onDragStart);
    track.addEventListener("pointermove", onDragMove);
    track.addEventListener("pointerup", onDragEnd);
    track.addEventListener("pointercancel", onDragEnd);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(marqueeFrame);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      autoObserver.disconnect();
      amenities.removeEventListener("pointerenter", onAmEnter);
      amenities.removeEventListener("pointerleave", onAmLeave);
      amenities.removeEventListener("focusin", onAmFocusIn);
      amenities.removeEventListener("focusout", onAmFocusOut);
      track.removeEventListener("pointerdown", onDragStart);
      track.removeEventListener("pointermove", onDragMove);
      track.removeEventListener("pointerup", onDragEnd);
      track.removeEventListener("pointercancel", onDragEnd);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room.slug, originalCount, fgWidth, fgGrow, fgBottom, fgLift]);

  /* ---------- markup ---------- */

  const goToCta = () => {
    document.querySelector(ctaTarget)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section ref={sectionRef} className="re-scroll" data-header-theme="light">
      <div ref={stageRef} className="re-stage">
        <img
          className="re-layer re-room"
          src={room.images.room}
          alt={lang === "en" ? "Room" : "Camera"}
        />
        <img
          className="re-layer re-detail"
          src={room.images.detail}
          alt={lang === "en" ? "Room detail" : "Dettaglio camera"}
        />

        {room.images.mid && (
          <img className="re-layer re-mid" src={room.images.mid} alt="" aria-hidden="true" />
        )}

        {room.images.foreground && (
          <img
            className="re-layer re-foreground"
            src={room.images.foreground}
            alt=""
            aria-hidden="true"
          />
        )}

        <div
          className={`re-door re-door-left${room.images.doorway ? "" : " re-door--drawn"}`}
        >
          {room.images.doorway && <img src={room.images.doorway} alt="" />}
        </div>
        <div
          className={`re-door re-door-right${room.images.doorway ? "" : " re-door--drawn"}`}
        >
          {room.images.doorway && <img src={room.images.doorway} alt="" />}
        </div>

        <div className="re-layer re-shade" />

        <h1 className="re-title">{titleContent}</h1>

        <div className="re-intro">
          <p>{introContent[lang]}</p>
          <div className="re-tags">{tagsContent[lang]}</div>
        </div>

        <div className="re-panel re-panel-bed">
          <h2>{panelBedContent[lang].heading}</h2>
          <p>{panelBedContent[lang].body}</p>
          <dl className="re-facts">
            {panelBedContent[lang].facts.map((fact, i) => (
              <div key={i}>
                <dt>{fact.dt}</dt>
                <dd>{fact.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="re-panel re-panel-services">
          <h2>{panelServicesContent[lang].heading}</h2>
          <p>{panelServicesContent[lang].body}</p>
          <button type="button" className="re-cta" onClick={goToCta}>
            <span>↗</span>
            {panelServicesContent[lang].cta}
          </button>
        </div>

        <div ref={amenitiesRef} className="re-amenities">
          <div ref={trackRef} className="re-track">
            {loopCards.map((item, i) => (
              <article key={i} className="re-card">
                <span className="re-card-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div ref={controlsRef} className="re-controls">
          <button
            className="re-nav"
            type="button"
            onClick={() => nudge(-1)}
            aria-label={lang === "en" ? "Previous" : "Precedente"}
          >
            ←
          </button>
          <button
            className="re-nav"
            type="button"
            onClick={() => nudge(1)}

            aria-label={lang === "en" ? "Next" : "Successiva"}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
