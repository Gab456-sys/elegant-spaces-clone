import { Link } from "@tanstack/react-router";
import { projects } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FeaturedProjects() {
  const { t } = useLanguage();
  return (
    <section className="bg-dark text-white">
      {projects.slice(0, 4).map((p) => (
        <article
          key={p.slug}
          className="relative h-screen w-full overflow-hidden flex flex-col justify-end"
        >
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-20 max-w-6xl">
            <h3
              className="serif text-white leading-[1.04] mb-7 font-light"
              style={{ fontSize: "clamp(2rem, 4.6vw, 4.2rem)" }}
            >
              {p.title}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2 eyebrow mb-8 text-white/85">
              <span className="text-[color:var(--gold)]">{p.studio}</span>
              <span className="opacity-40">/</span>
              <span>{p.type}</span>
              <span className="opacity-40">/</span>
              <span className="text-[color:var(--gold)]">{p.location}</span>
              <span className="opacity-40">/</span>
              <span>{p.year}</span>
            </div>
            <Link to="/projects/$slug" params={{ slug: p.slug }} className="pill text-white">
              <span>{t("projects.cta")}</span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
