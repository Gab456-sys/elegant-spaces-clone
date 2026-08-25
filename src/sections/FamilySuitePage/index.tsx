import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const FamilySuitePage = () => (
  <>
    <RoomEntrance room={roomEntrances.family} />
    <SuiteTemplate title="FAMILY SUITE" showHero={false} />
  </>
);
