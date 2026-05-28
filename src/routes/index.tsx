import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { Expertise } from "@/components/site/Expertise";
import { Perspectives } from "@/components/site/Perspectives";
import { LeadershipTeam } from "@/components/site/LeadershipTeam";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HBA — Design that gives form to emotion" },
      { name: "description", content: "HBA is a global hospitality interior design collective shaping unforgettable spaces for the world's most iconic brands." },
      { property: "og:title", content: "HBA — Design that gives form to emotion" },
      { property: "og:description", content: "A multidisciplinary creative collective with 1,500 professionals across 29 offices." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
      <Expertise />
      <Perspectives />
      <CollectiveExcellence />
      <LeadershipTeam />
      <Footer />
    </main>
}
