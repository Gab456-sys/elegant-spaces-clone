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
      introContent={{
        it: <>Una stanza sul cortile interno, silenziosa anche d'agosto, con la poltrona buona sotto la finestra.</>,
        en: <>A room over the inner courtyard, quiet even in August, with the good armchair under the window.</>,
      }}
      tagsContent={{
        it: <><span>2 ospiti</span><span>50 € a notte</span><span>Letto aggiuntivo</span></>,
        en: <><span>2 guests</span><span>€50 per night</span><span>Extra bed available</span></>,
      }}
    />
    <SuiteTemplate title="COMFORT SUITE" showHero={false} />
  </>
);
