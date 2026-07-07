import { createFileRoute } from "@tanstack/react-router";
import { BasicRoomPage } from "@/sections/BasicRoomPage";

export const Route = createFileRoute("/basic-room")({
  head: () => ({
    meta: [
      { title: "Basic Room — Villa Sesto" },
      { name: "description", content: "Basic Room: essenzialità e comfort a Villa Sesto." },
      { property: "og:title", content: "Basic Room — Villa Sesto" },
      { property: "og:description", content: "Essenzialità e comfort a Villa Sesto." },
    ],
  }),
  component: BasicRoomPage,
});
