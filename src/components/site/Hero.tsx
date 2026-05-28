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
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32">
        <h1
          className="serif text-white max-w-5xl leading-[1.02]"
          style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}
        >
          Design that gives <br className="hidden md:block" />
          form to <em className="italic">emotion</em>
        </h1>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-10 eyebrow text-white/80">
        {String(i + 1).padStart(2, "0")} <span className="opacity-60">/ {String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
