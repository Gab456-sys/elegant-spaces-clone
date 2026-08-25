import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { roomEntrances } from "@/sections/RoomEntrance/rooms";
import { SuiteTemplate } from "@/sections/SuitePage/SuiteTemplate";

export const BasicRoomPage = () => (
  <>
    <RoomEntrance
      room={roomEntrances.basic}
      titleContent={
        <>
          <span>BASIC</span>
          <span>ROOM</span>
        </>
      }
      introContent={<>Essenziale nel senso buono: quello che serve per dormire bene e uscire presto, senza pagare per il resto.</>}
      tagsContent={
        <>
          <span>2 ospiti</span>
          <span>40 € a notte</span>
          <span>Bagno privato</span>
        </>
      }
    />
    <SuiteTemplate title="BASIC ROOM" showHero={false} />
  </>
);
