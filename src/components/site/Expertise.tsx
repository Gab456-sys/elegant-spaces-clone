import { expertise, expertiseGrid } from "./data";
import { ArrowRight } from "lucide-react";

export function Expertise() {
  return (
    <section className="bg-background text-foreground px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <p className="eyebrow text-muted-foreground mb-6">Expertise</p>
            <h2 className="serif italic text-6xl md:text-8xl leading-none font-light">interiors</h2>
          </div>
          <div>
            <p className="text-base md:text-[17px] leading-[1.75] text-foreground/75 mb-8 max-w-lg font-light">
              An industry-defining hospitality interior design practice, shaping
              unforgettable spaces for the world's most iconic brands.
            </p>
            <a href="#" className="inline-flex items-center gap-3 eyebrow hover:gap-5 transition-all">
              View Interiors <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <ul className="flex flex-col items-center text-center my-20 md:my-28 gap-1">
          {expertise.map((e) => (
            <li
              key={e}
              className="serif italic text-3xl md:text-5xl text-foreground/20 hover:text-foreground transition-colors duration-500 cursor-default leading-[1.15] font-light"
            >
              {e}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {expertiseGrid.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
