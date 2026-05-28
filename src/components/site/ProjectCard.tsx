import { Link } from "@tanstack/react-router";
import type { Project } from "./data";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group block"
    >
      <div className="overflow-hidden mb-5 bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>
      <p className="eyebrow text-muted-foreground mb-2">{p.type}</p>
      <h3 className="serif text-2xl md:text-[1.7rem] leading-[1.15] mb-2 group-hover:opacity-70 transition-opacity">
        {p.title}
      </h3>
      <p className="text-[12.5px] text-muted-foreground tracking-wide">
        {p.location} · {p.year}
      </p>
    </Link>
  );
}
