import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import listOfficesTool from "./tools/list-offices";
import listFiltersTool from "./tools/list-filters";

export default defineMcp({
  name: "hba-mcp",
  title: "HBA — Design Studio",
  version: "0.1.0",
  instructions:
    "Tools for exploring the HBA design studio site: browse projects, look up a project by slug, list studio offices by region, and discover available filter values.",
  tools: [listProjectsTool, getProjectTool, listOfficesTool, listFiltersTool],
});
