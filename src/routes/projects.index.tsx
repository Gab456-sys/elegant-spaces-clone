import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProjectCard } from "@/components/site/ProjectCard";
import { FilterPanel } from "@/components/site/FilterPanel";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — HBA" },
      { name: "description", content: "Explore HBA's portfolio of hotels, resorts, residences and mixed-use projects worldwide." },
      { property: "og:title", content: "Projects — HBA" },
      { property: "og:description", content: "Hospitality, residential and mixed-use projects from HBA." },
    ],
  }),
  component: ProjectsPage,
});

const PAGE = 6;

function ProjectsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);

  const toggle = (list: string[], v: string) =>
    list.includes(v) ? list.filter((x) => x !== v) : [...list, v];

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const e = !selectedExpertise.length || selectedExpertise.some((x) => p.expertise.includes(x));
      const r = !selectedRegion.length || selectedRegion.includes(p.region);
      const q = !query.trim() || p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.location.toLowerCase().includes(query.toLowerCase());
      return e && r && q;
    });
  }, [selectedExpertise, selectedRegion, query]);

  const visible = filtered.slice(0, limit);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="eyebrow text-muted-foreground mb-8">Portfolio</p>
            <h1 className="serif text-6xl md:text-8xl font-light leading-[1.02] mb-10">Projects</h1>
            <p className="max-w-2xl text-base md:text-[17px] leading-[1.75] text-foreground/75 font-light">
              A selection of work from across our studios — hospitality, residential,
              resort and mixed-use projects shaped by craft, context and a quiet
              attention to detail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="w-full flex items-center justify-between py-6 border-t border-foreground/15 group"
          >
            <span className="eyebrow">Filter By</span>
            {filtersOpen
              ? <Minus className="h-4 w-4" strokeWidth={1.4} />
              : <Plus className="h-4 w-4" strokeWidth={1.4} />}
          </button>

          <FilterPanel
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            selectedExpertise={selectedExpertise}
            selectedRegion={selectedRegion}
            query={query}
            onToggleExpertise={(v) => setSelectedExpertise((l) => toggle(l, v))}
            onToggleRegion={(v) => setSelectedRegion((l) => toggle(l, v))}
            onQuery={setQuery}
            onClear={() => { setSelectedExpertise([]); setSelectedRegion([]); setQuery(""); }}
          />

          {!filtersOpen && <div className="border-b border-foreground/15" />}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <p className="eyebrow text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="serif text-2xl text-foreground/60 py-20 text-center font-light">
              No projects match your selection.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-16 md:gap-y-20">
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 60}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          )}

          {limit < filtered.length && (
            <div className="flex justify-center mt-20">
              <button onClick={() => setLimit((l) => l + PAGE)} className="pill text-foreground">
                <span>Load More</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
