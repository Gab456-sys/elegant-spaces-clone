import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/components/site/data";

export default defineTool({
  name: "get_project",
  title: "Get project",
  description: "Fetch full details for a single HBA project by its slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Project slug, e.g. 'jumeirah-marsa-al-arab'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found with slug "${slug}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
