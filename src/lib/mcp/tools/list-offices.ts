import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offices } from "@/components/site/data";

export default defineTool({
  name: "list_offices",
  title: "List studios & offices",
  description: "List HBA studio offices grouped by region.",
  inputSchema: {
    region: z.string().optional().describe("Optional region name (e.g. 'EUROPE') to return offices for only that region."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ region }) => {
    if (region) {
      const key = Object.keys(offices).find((k) => k.toLowerCase() === region.toLowerCase());
      const cities = key ? offices[key] : [];
      return {
        content: [{ type: "text", text: JSON.stringify({ region: key ?? region, cities }, null, 2) }],
        structuredContent: { region: key ?? region, cities },
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(offices, null, 2) }],
      structuredContent: { offices },
    };
  },
});
