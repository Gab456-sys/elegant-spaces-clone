export const heroSlides = [
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80",
];

export type Project = {
  slug: string;
  title: string;
  studio: string;
  type: string;
  location: string;
  region: string;
  expertise: string[];
  year: string;
  image: string;
  gallery?: string[];
  intro?: string;
  body?: string;
};

export const projects: Project[] = [
  {
    slug: "jumeirah-marsa-al-arab",
    title: "Jumeirah Marsa Al Arab",
    studio: "HBA Dubai & Light Directions",
    type: "Hotel & Branded Residences",
    location: "Dubai",
    region: "Middle East",
    expertise: ["Interiors", "Light", "Residential"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
    ],
    intro:
      "An icon on the Dubai shoreline, Marsa Al Arab reframes the language of arrival, sea-edge living, and quiet hospitality at the highest register.",
    body:
      "Conceived as a contemporary chapter in the Jumeirah heritage, the property weaves materiality, light and choreographed views into a single architectural narrative. Every threshold opens onto another stage in a slow, considered procession.",
  },
  {
    slug: "avenue-road-residences",
    title: "Avenue Road Residences",
    studio: "HBA Residential",
    type: "Residence",
    location: "London",
    region: "Europe",
    expertise: ["Residential", "Interiors"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1920&q=80",
    ],
    intro:
      "A measured restoration in St John's Wood, balancing Georgian proportion with contemporary craft.",
    body:
      "The interior is detailed in soft plaster, oak, bronze and travertine — a quiet palette designed to let London light do the talking.",
  },
  {
    slug: "the-delmore-miami",
    title: "The Delmore Residences",
    studio: "HBA Residential",
    type: "Residence",
    location: "Miami",
    region: "North America",
    expertise: ["Residential"],
    year: "In Progress",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80",
    ],
  },
  {
    slug: "one-and-only-portonovi",
    title: "One&Only Portonovi",
    studio: "HBA Singapore",
    type: "Resort",
    location: "Herceg Novi, Montenegro",
    region: "Europe",
    expertise: ["Resort", "Interiors"],
    year: "2021",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&q=80",
    ],
  },
  {
    slug: "fairmont-breakers-long-beach",
    title: "Fairmont Breakers Long Beach",
    studio: "HBA Los Angeles",
    type: "Hotel",
    location: "Long Beach, USA",
    region: "North America",
    expertise: ["Interiors", "Heritage"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&q=80",
  },
  {
    slug: "rosewood-shanghai",
    title: "Rosewood Shanghai",
    studio: "HBA Shanghai",
    type: "Hotel",
    location: "Shanghai",
    region: "East Asia",
    expertise: ["Interiors", "Art"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80",
  },
  {
    slug: "raffles-the-red-sea",
    title: "Raffles The Red Sea",
    studio: "HBA Dubai",
    type: "Resort",
    location: "Saudi Arabia",
    region: "Middle East",
    expertise: ["Resort", "Interiors"],
    year: "In Progress",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
  },
  {
    slug: "aman-tokyo-suite",
    title: "Aman Tokyo Suite",
    studio: "HBA Tokyo",
    type: "Hotel",
    location: "Tokyo",
    region: "East Asia",
    expertise: ["Interiors"],
    year: "2022",
    image: "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1920&q=80",
  },
];

export const expertise = [
  "architecture","art","digital","f&b","graphics","landscape","leisure",
  "light","procurement","product","residential","resort","strategy",
];

export const expertiseGrid = [
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1200&q=80",
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
];

export const articles = [
  {
    label: "Awards & Accolades",
    date: "23.03.26",
    title: "HBA retains #1 ranking — Interior Design's 2026 Top 100 Giants Hospitality List",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
  },
  {
    label: "Awards & Accolades",
    date: "15.12.25",
    title: "HBA listed on Forbes' America's Top Hospitality Architects & Designers 2026",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
  {
    label: "Awards & Accolades",
    date: "23.01.26",
    title: "Fairmont Breakers Long Beach named 2025 Gold Key Awards Finalist",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80",
  },
];

export const leaders = [
  { name: "Ian Carr", role: "Partner & Co-CEO", studio: "HBA | Singapore",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80" },
  { name: "Chris Godfrey", role: "Partner & Co-CEO", studio: "HBA | Singapore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=80" },
  { name: "Meghann Day", role: "Partner & President, The Americas", studio: "HBA | New York",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80" },
];

export const offices: Record<string, string[]> = {
  "NORTH AMERICA": ["Atlanta","Los Angeles","Miami","New York","San Francisco"],
  "LATIN AMERICA": ["Mexico City","São Paulo"],
  "MIDDLE EAST": ["Dubai","Riyadh"],
  "EUROPE": ["Istanbul","London","Madrid"],
  "EAST ASIA": ["Beijing","Guangzhou","Hong Kong","Seoul","Shanghai","Shenzhen","Tokyo"],
  "SOUTHEAST ASIA": ["Bali","Bangkok","Clark","HCMC","Jakarta","Kuala Lumpur","Manila","Singapore"],
  "SOUTH ASIA": ["Mumbai","New Delhi"],
};

export const expertiseFilters = [
  "Interiors","Architecture","Art","Digital","F&B","Graphics","Landscape",
  "Leisure","Light","Procurement","Product","Residential","Resort","Strategy","Heritage",
];

export const regionFilters = [
  "North America","Latin America","Middle East","Europe","East Asia","Southeast Asia","South Asia",
];
