import { useEffect, useState } from "react";
import { Search, Menu as MenuIcon } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] text-white transition-[background-color,border-color,backdrop-filter] duration-[400ms] ease-out ${
        scrolled
          ? "bg-[rgba(9,29,30,0.95)] backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-[72px] md:h-[78px]">
        <a
          href="/"
          className="serif font-bold tracking-tight text-[2rem] md:text-[2.5rem] leading-none text-white"
        >
          HB_A
        </a>
        <nav className="flex items-center gap-4 md:gap-6">
          <button className="eyebrow text-[13px] text-white/90 hover:opacity-70 transition-opacity cursor-pointer hidden md:inline-block">
            Menu
          </button>
          <button
            aria-label="Menu"
            className="md:hidden text-white/90 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Search"
            className="h-9 w-9 rounded-full border border-white/90 text-white/90 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
          >
            <Search className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </nav>
      </div>
    </header>
  );
}
