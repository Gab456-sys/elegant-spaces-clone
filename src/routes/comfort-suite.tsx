import { createFileRoute } from "@tanstack/react-router";
import { ComfortSuitePage } from "@/sections/ComfortSuitePage";

export const Route = createFileRoute("/comfort-suite")({
  head: () => ({
    meta: [
      { title: "Comfort Suite — Villa Sesto" },
      { name: "description", content: "Comfort Suite: eleganza e serenità in una suite pensata per due." },
      { property: "og:title", content: "Comfort Suite — Villa Sesto" },
      { property: "og:description", content: "Eleganza e serenità in una suite pensata per due." },
    ],
  }),
  component: ComfortSuitePage,
});
