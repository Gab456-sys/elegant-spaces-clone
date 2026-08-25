import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const BasicRoomPage = () => (
  <>
    <RoomEntrance room={roomEntrances.basic} />
    <SuiteTemplate title="BASIC ROOM" showHero={false} />
  </>
);
