import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/IntroSection";
import { ProjectGallery } from "@/sections/ProjectGallery";
import { PracticeLinksSection } from "@/sections/PracticeLinksSection";

type RoomData = {
  nome: string;
  prezzo: string;
  ospiti: string;
  note: string;
  dettaglio?: string;
};

const roomsData: RoomData[] = [
  {
    nome: "Family Suite",
    prezzo: "80 euro a notte",
    ospiti: "4 ospiti",
    note: "1 camera disponibile",
  },
  {
    nome: "Comfort Suite",
    prezzo: "50 euro a notte",
    ospiti: "2 ospiti",
    note: "3 camere disponibili",
    dettaglio: "1 letto aggiuntivo disponibile",
  },
  {
    nome: "Basic Room",
    prezzo: "40 euro a notte",
    ospiti: "2 ospiti",
    note: "1 camera disponibile",
  },
];

const roomSectionIds = ["family-suite", "comfort-suite", "basic-room"] as const;

const roomHeroImages = [
  {
    src: "https://c.animaapp.com/mq6uygebb47riI/assets/Careers-Jumeirah_Marsa-Al-Arab-HBA-Dubai-new.jpg",
    alt: "Outdoor seating area with beige and orange furniture, wooden chairs, and small round tables on a sunny patio. Steps lead to a potted plant and greenery.",
  },
];

const roomGalleryImages = [
  {
    src: "https://c.animaapp.com/mq6uygebb47riI/assets/Jumeirah-Marsa-Al-Arab-24-2048x1365.jpg",
    alt: "Luxurious hotel room with a king-sized bed, elegant decor, and large windows offering a stunning city view. Warm tones and plush seating create a cozy, sophisticated ambiance.",
  },
  {
    src: "https://c.animaapp.com/mq6uygebb47riI/assets/Jumeirah-Marsa-Al-Arab-14-2048x1269.jpg",
    alt: "Luxurious suite balcony with chic furniture overlooks the sea, featuring a view of the iconic sail-shaped hotel. The scene is serene and inviting at sunset.",
  },
];

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent text-stone-50 outline-[3px] no-underline">
      <Hero />
      <IntroSection />

      {roomsData.map((room, index) => (
        <ProjectGallery
          key={`${room.nome}-${index}`}
          sectionId={roomSectionIds[index]}
          backgroundVariant="inset-0"
          title={room.nome}
          metaPrimary={room.note}
          metaSecondary={room.prezzo}
          metaLocation={room.ospiti}
          metaYear={room.dettaglio}
          heroImages={roomHeroImages.map((image) => ({ ...image }))}
          galleryImages={roomGalleryImages.map((image) => ({ ...image }))}
        />
      ))}

      <PracticeLinksSection />
    </main>
  );
};
