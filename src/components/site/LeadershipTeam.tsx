import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { leaders } from "./data";

export function LeadershipTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="bg-background text-foreground px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <h2 className="serif text-5xl md:text-7xl">Leadership team</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="h-11 w-11 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground hover:text-background transition">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} className="h-11 w-11 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground hover:text-background transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6">
          {leaders.map((l) => (
            <div key={l.name} className="snap-start shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%]">
              <div className="overflow-hidden mb-6 bg-muted">
                <img
                  src={l.image}
                  alt={l.name}
                  className="aspect-[3/4] w-full object-cover"
                  style={{ filter: "grayscale(1) contrast(1.05)" }}
                />
              </div>
              <p className="eyebrow text-muted-foreground mb-3">{l.studio}</p>
              <h3 className="serif text-3xl mb-1">{l.name}</h3>
              <p className="text-sm text-foreground/70">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
