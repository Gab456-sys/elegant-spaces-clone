import { RoomEntryIntro } from "@/components/RoomEntryIntro";
import { getRoomIntro } from "@/data/roomIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const ComfortSuitePage = () => {
  const { language } = useLanguage();
  return (
    <>
      <RoomEntryIntro {...getRoomIntro("comfort", language)} />
      <div id="dettagli" />
      <SuiteTemplate title="COMFORT SUITE" showHero={false} />
    </>
  );
};
