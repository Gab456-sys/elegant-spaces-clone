import { createFileRoute } from "@tanstack/react-router";
import { FamilySuitePage } from "@/sections/FamilySuitePage";

export const Route = createFileRoute("/family-suite")({
  head: () => ({
    meta: [
      { title: "Family Suite — Villa Sesto" },
      { name: "description", content: "Family Suite: spazio, luce e comfort per un soggiorno in famiglia a Villa Sesto." },
      { property: "og:title", content: "Family Suite — Villa Sesto" },
      { property: "og:description", content: "Spazio, luce e comfort per un soggiorno in famiglia." },
    ],
  }),
  component: FamilySuitePage,
});
