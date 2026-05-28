import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { offices } from "./data";

const expertiseList = [
  "interiors","architecture","art","digital","f&b","graphics","landscape",
  "leisure","light","procurement","product","residential","resort","strategy",
];
const sectorsList = [
  "hospitality","heritage","mixed-use","residences","spa & wellness","transport","workplace",
];
const practiceList = ["About","Legacy","People","Perspectives","Careers","Contact"];
const specialistsList = ["Light Directions","Canvas","Illuminate","Studio HBA"];

type Section = "expertise" | "practice" | "studios" | "specialists" | null;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSection, setOpenSection] = useState<Section>("expertise");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggle = (s: Exclude<Section, null>) =>
    setOpenSection((cur) => (cur === s ? null : s));

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[9999] text-white"
        style={{
          background: menuOpen || scrolled ? "#091D1E" : "transparent",
          transition: "background 0.5s ease",
        }}
      >
        <div className="flex items-center justify-between px-[30px] py-[20px]">
          <a
            href="/"
            className="serif font-bold text-white leading-none"
            style={{ fontSize: "2.2rem" }}
          >
            HB_A
          </a>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-white text-[12px] uppercase cursor-pointer hover:opacity-70 transition-opacity"
              style={{ letterSpacing: "0.2em" }}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="px-[30px] pb-5 border-t border-white/10 pt-5">
            <input
              autoFocus
              type="text"
              placeholder="Search…"
              className="w-full bg-transparent text-white placeholder:text-white/40 serif text-2xl md:text-3xl outline-none border-b border-white/30 pb-3"
            />
          </div>
        )}
      </header>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#091D1E] text-white overflow-y-auto transition-all duration-[400ms] ease-out ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{ paddingTop: "90px" }}
      >
        <nav className="px-[30px] md:px-12 pb-20 max-w-6xl mx-auto">
          {/* PROJECTS direct link */}
          <MenuRow>
            <a href="#" className="serif lowercase text-white block w-full text-[1.4rem] md:text-[2rem]">
              projects
            </a>
          </MenuRow>

          {/* EXPERTISE accordion */}
          <Accordion
            label="expertise"
            open={openSection === "expertise"}
            onClick={() => toggle("expertise")}
          >
            <div className="grid md:grid-cols-2 gap-10 py-6">
              <ColumnList label="Expertise" items={expertiseList} />
              <ColumnList label="Sectors" items={sectorsList} />
            </div>
          </Accordion>

          {/* PRACTICE */}
          <Accordion
            label="practice"
            open={openSection === "practice"}
            onClick={() => toggle("practice")}
          >
            <ul className="py-6 space-y-3">
              {practiceList.map((p) => (
                <li key={p} className="serif lowercase text-xl md:text-2xl text-white/80 hover:text-white cursor-pointer">
                  {p.toLowerCase()}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* STUDIOS */}
          <Accordion
            label="studios"
            open={openSection === "studios"}
            onClick={() => toggle("studios")}
          >
            <div className="grid md:grid-cols-2 gap-10 py-6">
              {Object.entries(offices).map(([region, cities]) => (
                <div key={region}>
                  <p className="eyebrow text-white/50 mb-3">{region}</p>
                  <ul className="space-y-1.5">
                    {cities.map((c) => (
                      <li key={c} className="serif lowercase text-lg md:text-xl text-white/80 hover:text-white cursor-pointer">
                        {c.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>

          {/* SPECIALISTS */}
          <Accordion
            label="specialists"
            open={openSection === "specialists"}
            onClick={() => toggle("specialists")}
          >
            <ul className="py-6 space-y-3">
              {specialistsList.map((s) => (
                <li key={s} className="serif lowercase text-xl md:text-2xl text-white/80 hover:text-white cursor-pointer">
                  {s.toLowerCase()}
                </li>
              ))}
            </ul>
          </Accordion>
        </nav>
      </div>
    </>
  );
}

function MenuRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-white/15 py-6 flex items-center">
      {children}
    </div>
  );
}

function Accordion({
  label, open, onClick, children,
}: { label: string; open: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-white/15">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
      >
        <span className="serif lowercase text-white text-[1.4rem] md:text-[2rem]">{label}</span>
        <ChevronDown
          className={`h-5 w-5 text-white transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function ColumnList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow text-white/50 mb-4">{label}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="serif lowercase text-lg md:text-xl text-white/80 hover:text-white cursor-pointer">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
