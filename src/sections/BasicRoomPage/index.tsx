import { RoomEntryIntro } from "@/components/RoomEntryIntro";
import { getRoomIntro } from "@/data/roomIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const BasicRoomPage = () => {
  const { language } = useLanguage();
  return (
    <>
      <RoomEntryIntro {...getRoomIntro("basic", language)} />
      <div id="dettagli" />
      <SuiteTemplate title="BASIC ROOM" showHero={false} />
    </>
  );
};
