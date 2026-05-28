import { useEffect, useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { expertiseFilters, regionFilters } from "./data";

type Props = {
  open: boolean;
  onClose: () => void;
  selectedExpertise: string[];
  selectedRegion: string[];
  query: string;
  onToggleExpertise: (v: string) => void;
  onToggleRegion: (v: string) => void;
  onQuery: (v: string) => void;
  onClear: () => void;
};

export function FilterPanel({
  open, onClose, selectedExpertise, selectedRegion, query,
  onToggleExpertise, onToggleRegion, onQuery, onClear,
}: Props) {
  const [openGroup, setOpenGroup] = useState<"expertise" | "region" | null>("expertise");

  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  return (
    <div
      className={`grid transition-all duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="border-y border-foreground/15 py-10 md:py-14">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <FilterGroup
                label="Expertise"
                open={openGroup === "expertise"}
                onClick={() => setOpenGroup((v) => (v === "expertise" ? null : "expertise"))}
              >
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pt-4">
                  {expertiseFilters.map((f) => (
                    <li key={f}>
                      <Checkbox
                        label={f}
                        checked={selectedExpertise.includes(f)}
                        onChange={() => onToggleExpertise(f)}
                      />
                    </li>
                  ))}
                </ul>
              </FilterGroup>
            </div>
            <div className="md:col-span-4">
              <FilterGroup
                label="Region"
                open={openGroup === "region"}
                onClick={() => setOpenGroup((v) => (v === "region" ? null : "region"))}
              >
                <ul className="space-y-2 pt-4">
                  {regionFilters.map((f) => (
                    <li key={f}>
                      <Checkbox
                        label={f}
                        checked={selectedRegion.includes(f)}
                        onChange={() => onToggleRegion(f)}
                      />
                    </li>
                  ))}
                </ul>
              </FilterGroup>
            </div>
            <div className="md:col-span-3">
              <p className="eyebrow text-muted-foreground mb-4">Project</p>
              <div className="flex items-center gap-2 border-b border-foreground/30 pb-2">
                <Search className="h-3.5 w-3.5 text-foreground/60" strokeWidth={1.4} />
                <input
                  value={query}
                  onChange={(e) => onQuery(e.target.value)}
                  placeholder="Search projects"
                  className="bg-transparent w-full text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
              <div className="flex gap-6 mt-10">
                <button onClick={onClear} className="eyebrow text-muted-foreground hover:text-foreground transition-colors">
                  Clear
                </button>
                <button onClick={onClose} className="eyebrow hover:opacity-60 transition-opacity">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  label, open, onClick, children,
}: { label: string; open: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div>
      <button onClick={onClick} className="w-full flex items-center justify-between text-left group">
        <span className="eyebrow text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
        {open ? <Minus className="h-3.5 w-3.5" strokeWidth={1.4} /> : <Plus className="h-3.5 w-3.5" strokeWidth={1.4} />}
      </button>
      <div className={`grid transition-all duration-400 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group text-sm">
      <span
        className={`h-3.5 w-3.5 border flex items-center justify-center transition-colors ${
          checked ? "bg-foreground border-foreground" : "border-foreground/40 group-hover:border-foreground"
        }`}
      >
        {checked && <span className="h-1.5 w-1.5 bg-background" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className={`transition-colors ${checked ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"}`}>
        {label}
      </span>
    </label>
  );
}
