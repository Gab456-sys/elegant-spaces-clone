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
      introContent={{
        it: <>Due ambienti al primo piano, la luce del mattino sul parquet e lo spazio per non pestarsi i piedi in quattro.</>,
        en: <>Two rooms on the first floor, morning light across the parquet, and enough space for four without stepping on each other.</>,
      }}
      tagsContent={{
        it: <><span>4 ospiti</span><span>80 € a notte</span><span>Bagno privato</span></>,
        en: <><span>4 guests</span><span>€80 per night</span><span>Private bathroom</span></>,
      }}
    />
    <SuiteTemplate title="FAMILY SUITE" showHero={false} />
  </>
);
