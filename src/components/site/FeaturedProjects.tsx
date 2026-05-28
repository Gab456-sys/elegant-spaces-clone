import { projects } from "./data";

export function FeaturedProjects() {
  return (
    <section className="bg-dark text-white">
      {projects.map((p) => (
        <article
          key={p.title}
          className="relative h-screen w-full overflow-hidden flex flex-col justify-end"
        >
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-6xl">
            <h3 className="serif text-white leading-[1.02] mb-8" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}>
              {p.title}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 eyebrow mb-8 text-white/85">
              <span className="text-[color:var(--gold)]">{p.studio}</span>
              <span className="opacity-50">|</span>
              <span>{p.type}</span>
              <span className="opacity-50">|</span>
              <span className="text-[color:var(--gold)]">{p.location}</span>
              <span className="opacity-50">|</span>
              <span>{p.year}</span>
            </div>
            <button className="pill text-white"><span>View Project</span></button>
          </div>
        </article>
      ))}
    </section>
  );
}
