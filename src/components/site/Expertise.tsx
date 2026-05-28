import { expertise, expertiseGrid } from "./data";
import { ArrowRight } from "lucide-react";

export function Expertise() {
  return (
    <section className="bg-background text-foreground px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="serif italic text-6xl md:text-8xl leading-none">interiors</h2>
          </div>
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-10 max-w-lg">
              An industry-defining hospitality interior design practice, shaping unforgettable spaces
              for the world's most iconic brands.
            </p>
            <button className="inline-flex items-center gap-3 eyebrow hover:gap-5 transition-all">
              View Interiors <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ul className="flex flex-col items-center text-center my-24 md:my-32 gap-1">
          {expertise.map((e) => (
            <li
              key={e}
              className="serif italic text-3xl md:text-6xl text-foreground/25 hover:text-foreground transition-colors cursor-default leading-[1.1]"
            >
              {e}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {expertiseGrid.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`w-full object-cover ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
