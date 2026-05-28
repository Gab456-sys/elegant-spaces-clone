import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "./data";

export function Perspectives() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="bg-background text-foreground px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <h2 className="serif text-5xl md:text-7xl font-light">Perspectives</h2>
          <div className="flex items-center gap-5">
            <a href="#" className="pill text-foreground"><span>View All</span></a>
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} />
              </button>
              <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </div>

        <div ref={ref} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[40%] lg:w-[30%]">
              <div className="overflow-hidden mb-5 bg-muted">
                <img src={a.image} alt={a.title} className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.025]" />
              </div>
              <p className="eyebrow text-muted-foreground mb-3">{a.label}</p>
              <p className="text-[11.5px] text-muted-foreground mb-3 tracking-wide">{a.date}</p>
              <h3 className="serif text-xl md:text-2xl leading-snug font-light group-hover:opacity-70 transition-opacity">{a.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
