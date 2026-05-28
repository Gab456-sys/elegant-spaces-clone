import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border text-foreground" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="serif text-2xl md:text-3xl tracking-tight">
          HB_<span className="italic">A</span>
        </a>
        <nav className="flex items-center gap-6 md:gap-8">
          <button className="eyebrow hover:opacity-70 transition-opacity">Menu</button>
          <button
            aria-label="Search"
            className="h-9 w-9 rounded-full border border-current flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <Search className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
