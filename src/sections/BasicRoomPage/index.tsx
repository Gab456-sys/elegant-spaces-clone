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
      introContent={{
        it: <>Essenziale nel senso buono: quello che serve per dormire bene e uscire presto, senza pagare per il resto.</>,
        en: <>Essential in the good sense: what you need to sleep well and leave early, without paying for the rest.</>,
      }}
      tagsContent={{
        it: <><span>2 ospiti</span><span>40 € a notte</span><span>Bagno privato</span></>,
        en: <><span>2 guests</span><span>€40 per night</span><span>Private bathroom</span></>,
      }}
    />
    <SuiteTemplate title="BASIC ROOM" showHero={false} />
  </>
);
