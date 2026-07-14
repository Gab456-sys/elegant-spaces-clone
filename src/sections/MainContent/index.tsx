import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/IntroSection";
import { ProjectGallery } from "@/sections/ProjectGallery";
import { PracticeLinksSection } from "@/sections/PracticeLinksSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/lib/i18n/dictionaries/it";

type RoomData = {
  nameKey: TranslationKey;
  priceKey: TranslationKey;
  guestsKey: TranslationKey;
  noteKey: TranslationKey;
  detailHref: string;
  detailKey?: TranslationKey;
};

const roomsData: RoomData[] = [
  {
    nameKey: "room.family.name",
    priceKey: "room.family.price",
    guestsKey: "room.guests.4",
    noteKey: "room.avail.1",
    detailHref: "/suite/family",
  },
  {
    nameKey: "room.comfort.name",
    priceKey: "room.comfort.price",
    guestsKey: "room.guests.2",
    noteKey: "room.avail.3",
    detailHref: "/suite/comfort",
    detailKey: "room.extraBed",
  },
  {
    nameKey: "room.basic.name",
    priceKey: "room.basic.price",
    guestsKey: "room.guests.2",
    noteKey: "room.avail.1",
    detailHref: "/suite/basic",
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
  const { t } = useLanguage();

  return (
    <main className="box-border caret-transparent text-stone-50 outline-[3px] no-underline">
      <Hero />
      <IntroSection />

      {roomsData.map((room, index) => (
        <ProjectGallery
          key={`${room.nameKey}-${index}`}
          sectionId={roomSectionIds[index]}
          backgroundVariant="inset-0"
          title={t(room.nameKey)}
          metaPrimary={t(room.noteKey)}
          metaSecondary={t(room.priceKey)}
          metaLocation={t(room.guestsKey)}
          metaYear={room.detailKey ? t(room.detailKey) : undefined}
          detailHref={room.detailHref}
          heroImages={roomHeroImages.map((image) => ({ ...image }))}
          galleryImages={roomGalleryImages.map((image) => ({ ...image }))}
        />
      ))}

      <PracticeLinksSection />
    </main>
  );
};
