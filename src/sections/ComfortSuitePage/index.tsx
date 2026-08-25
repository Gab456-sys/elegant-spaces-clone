import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const ComfortSuitePage = () => (
  <>
    <RoomEntrance room={roomEntrances.comfort} />
    <SuiteTemplate title="COMFORT SUITE" showHero={false} />
  </>
);
