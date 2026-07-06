import { FooterRegion } from "@/sections/Footer/components/FooterRegion";

export const FooterNavigation = () => {
  return (
    <nav
      data-reveal-order={2}
      className="reveal reveal-editorial-tight box-border caret-transparent min-h-[auto] min-w-[auto] order-2 outline-[3px] no-underline pt-9 md:min-h-0 md:min-w-0 md:order-1 md:pt-0"
    >
      <ul className="border-b-stone-50 border-l-stone-50 border-r-stone-50 border-t-stone-50 box-border caret-transparent flex flex-wrap justify-between list-none outline-[3px] relative no-underline pl-0 border-b-0 md:border-b-stone-50/20 md:flex-nowrap md:border-b">
        <FooterRegion
          regionName="Villa Sesto"
          regionClassName="min-h-[auto] min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "#la-villa", label: "La Villa" },
            { href: "#suite", label: "Suite" },
            { href: "#consigli", label: "I nostri consigli" },
            { href: "#contatti", label: "Contatti" },
          ]}
        />
        <FooterRegion
          regionName="Soggiorno"
          regionClassName="min-h-[auto] min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "#contatti", label: "Disponibilità" },
            { href: "#contatti", label: "Check-in / Check-out" },
            { href: "#contatti", label: "Servizi inclusi" },
          ]}
        />
        <FooterRegion
          regionName="Esperienze"
          regionClassName="min-h-[auto] min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "#consigli", label: "Itinerari" },
            { href: "#consigli", label: "Ristoranti" },
            { href: "#consigli", label: "Benessere" },
          ]}
        />
        <FooterRegion
          regionName="Contatti"
          regionClassName="hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] md:w-[22.625%]"
          links={[
            { href: "#contatti", label: "Email" },
            { href: "#contatti", label: "Telefono" },
            { href: "#contatti", label: "Come arrivare" },
          ]}
        />
        <FooterRegion
          regionName="Contatti"
          regionClassName="list-item min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0 md:w-[9.5%]"
          links={[
            { href: "#contatti", label: "Email" },
            { href: "#contatti", label: "Telefono" },
          ]}
        />
      </ul>
    </nav>
  );
};
