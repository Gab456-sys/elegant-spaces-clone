import { useEffect, useState } from "react";
import { heroSlides } from "./data";

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark text-white">
      {heroSlides.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-24">
        <h1
          className="serif text-white max-w-5xl leading-[1.02] font-light"
          style={{ fontSize: "clamp(2.4rem, 6.2vw, 5.6rem)" }}
        >
          Design that gives <br className="hidden md:block" />
          form to <em className="italic font-light">emotion</em>
        </h1>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 z-10 eyebrow text-white/85 flex items-center gap-3">
        <span>{String(i + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-white/40" />
        <span className="opacity-60">{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
