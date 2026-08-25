import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const FamilySuitePage = () => (
  <>
    <RoomEntrance
      room={roomEntrances.family}
      titleContent={
        <>
          <span>FAMILY</span>
          <span>SUITE</span>
        </>
      }
      introContent={<>Due ambienti al primo piano, la luce del mattino sul parquet e lo spazio per non pestarsi i piedi in quattro.</>}
      tagsContent={
        <>
          <span>4 ospiti</span>
          <span>80 € a notte</span>
          <span>Bagno privato</span>
        </>
      }
    />
    <SuiteTemplate title="FAMILY SUITE" showHero={false} />
  </>
);
