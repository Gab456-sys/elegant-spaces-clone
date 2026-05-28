import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { articles } from "./data";

export function Perspectives() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="bg-background text-foreground px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <h2 className="serif text-5xl md:text-7xl">Perspectives</h2>
          <div className="flex items-center gap-6">
            <button className="pill pill-light text-foreground"><span>View All</span></button>
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} className="h-11 w-11 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground hover:text-background transition">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => scroll(1)} className="h-11 w-11 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground hover:text-background transition">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[42%] lg:w-[32%]">
              <div className="overflow-hidden mb-6">
                <img src={a.image} alt={a.title} className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="eyebrow text-muted-foreground mb-3">{a.label}</p>
              <p className="text-xs text-muted-foreground mb-3">{a.date}</p>
              <h3 className="serif text-2xl md:text-3xl leading-snug">{a.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
