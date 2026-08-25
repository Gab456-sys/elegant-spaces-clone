import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const ComfortSuitePage = () => (
  <>
    <RoomEntrance
      room={roomEntrances.comfort}
      titleContent={
        <>
          <span>COMFORT</span>
          <span>SUITE</span>
        </>
      }
      introContent={<>Una stanza sul cortile interno, silenziosa anche d'agosto, con la poltrona buona sotto la finestra.</>}
      tagsContent={
        <>
          <span>2 ospiti</span>
          <span>50 € a notte</span>
          <span>Letto aggiuntivo</span>
        </>
      }
    />
    <SuiteTemplate title="COMFORT SUITE" showHero={false} />
  </>
);
