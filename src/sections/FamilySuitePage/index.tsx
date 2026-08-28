import { RoomEntryIntro } from "@/components/RoomEntryIntro";
import { getRoomIntro } from "@/data/roomIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const FamilySuitePage = () => {
  const { language } = useLanguage();
  return (
    <>
      <RoomEntryIntro {...getRoomIntro("family", language)} />
      <div id="dettagli" />
      <SuiteTemplate title="FAMILY SUITE" showHero={false} />
    </>
  );
};
