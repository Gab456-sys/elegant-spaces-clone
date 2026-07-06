import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/components/site/data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List HBA projects with optional filtering by region, expertise discipline, or free-text query on title, studio, or location.",
  inputSchema: {
    region: z.string().optional().describe("Filter by region, e.g. 'Europe', 'Middle East'."),
    expertise: z.string().optional().describe("Filter by expertise discipline, e.g. 'Interiors', 'Resort'."),
    query: z.string().optional().describe("Case-insensitive substring match against title, studio, and location."),
    limit: z.number().int().min(1).max(100).optional().describe("Maximum number of results (default 50)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ region, expertise, query, limit }) => {
    const q = query?.trim().toLowerCase();
    const results = projects
      .filter((p) => !region || p.region.toLowerCase() === region.toLowerCase())
      .filter(
        (p) =>
          !expertise ||
          p.expertise.some((e) => e.toLowerCase() === expertise.toLowerCase()),
      )
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.studio.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q),
      )
      .slice(0, limit ?? 50)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        studio: p.studio,
        type: p.type,
        location: p.location,
        region: p.region,
        expertise: p.expertise,
        year: p.year,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { projects: results, count: results.length },
    };
  },
});
