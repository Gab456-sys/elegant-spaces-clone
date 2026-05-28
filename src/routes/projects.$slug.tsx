import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { projects, leaders } from "@/components/site/data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — HBA` },
          { name: "description", content: loaderData.project.intro ?? `${loaderData.project.type} by HBA` },
          { property: "og:title", content: `${loaderData.project.title} — HBA` },
          { property: "og:description", content: loaderData.project.intro ?? "" },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="serif text-3xl">Project not found</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const gallery: string[] = project.gallery?.length ? project.gallery : [project.image];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % gallery.length);
  const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[88vh] w-full overflow-hidden bg-dark">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20 max-w-7xl mx-auto text-white">
          <p className="eyebrow text-white/80 mb-6">{project.studio}</p>
          <h1 className="serif font-light leading-[1.02]" style={{ fontSize: "clamp(2.4rem, 6vw, 5.4rem)" }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Metadata */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-foreground/15">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-5">Overview</p>
              <p className="serif text-3xl md:text-[2.4rem] leading-[1.25] font-light max-w-xl">
                {project.intro ?? "A considered design narrative shaped by site, climate and craft."}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <dl className="grid grid-cols-2 gap-y-8 gap-x-10">
                <Meta label="Type" value={project.type} />
                <Meta label="Location" value={project.location} />
                <Meta label="Studio" value={project.studio} />
                <Meta label="Year" value={project.year} />
                <Meta label="Expertise" value={project.expertise.join(", ")} />
                <Meta label="Region" value={project.region} />
              </dl>
              {project.body && (
                <p className="mt-10 text-base md:text-[17px] leading-[1.8] text-foreground/75 font-light max-w-xl">
                  {project.body}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-dark text-white py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <p className="eyebrow text-white/60">Gallery</p>
            <div className="flex items-center gap-6">
              <span className="eyebrow text-white/70">
                {String(idx + 1).padStart(2, "0")} <span className="opacity-50">/ {String(gallery.length).padStart(2, "0")}</span>
              </span>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-dark transition-colors duration-300">
                  <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} />
                </button>
                <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-dark transition-colors duration-300">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                style={{ opacity: i === idx ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="serif text-4xl md:text-6xl font-light">Project Team</h2>
          </div>
          <Carousel>
            {leaders.map((l) => (
              <div key={l.name} className="snap-start shrink-0 w-[80%] sm:w-[45%] lg:w-[30%]">
                <div className="overflow-hidden bg-muted mb-5">
                  <img src={l.image} alt={l.name} className="aspect-[3/4] w-full object-cover grayscale" />
                </div>
                <p className="eyebrow text-muted-foreground mb-2">{l.studio}</p>
                <h3 className="serif text-2xl font-light">{l.name}</h3>
                <p className="text-[13px] text-foreground/70 mt-1">{l.role}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Awards */}
      <section className="px-6 md:px-10 py-20 md:py-24 border-t border-foreground/15">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground mb-5">Awards & Accolades</p>
            <h2 className="serif text-4xl md:text-5xl font-light">Recognition</h2>
          </div>
          <ul className="md:col-span-8 md:col-start-5 divide-y divide-foreground/15">
            {[
              { year: "2025", title: "Gold Key Awards — Best Hotel Design" },
              { year: "2024", title: "AHEAD Global — Hotel of the Year" },
              { year: "2024", title: "Interior Design Best of Year Honoree" },
            ].map((a) => (
              <li key={a.title} className="flex items-baseline gap-8 py-6">
                <span className="eyebrow text-muted-foreground w-16 shrink-0">{a.year}</span>
                <span className="serif text-xl md:text-2xl font-light">{a.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="serif text-4xl md:text-6xl font-light">Related Projects</h2>
            <Link to="/projects" className="pill text-foreground"><span>All Projects</span></Link>
          </div>
          <Carousel>
            {related.map((p) => (
              <div key={p.slug} className="snap-start shrink-0 w-[80%] sm:w-[45%] lg:w-[30%]">
                <ProjectCard p={p} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-muted-foreground mb-2">{label}</dt>
      <dd className="serif text-lg md:text-xl font-light">{value}</dd>
    </div>
  );
}

function Carousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  return (
    <div>
      <div ref={ref} className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6">
        {children}
      </div>
      <div className="flex gap-2 mt-8">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} />
        </button>
        <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _useEffectShim = useEffect;
