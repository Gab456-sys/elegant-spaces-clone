import { defineTool } from "@lovable.dev/mcp-js";
import { expertiseFilters, regionFilters } from "@/components/site/data";

export default defineTool({
  name: "list_filters",
  title: "List available filters",
  description: "Return the available expertise disciplines and regions used to filter projects.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { expertise: expertiseFilters, regions: regionFilters };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
