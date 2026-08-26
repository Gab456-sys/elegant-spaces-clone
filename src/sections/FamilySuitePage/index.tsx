import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { BedIcon, BathIcon, CoffeeIcon, WifiIcon, CarIcon } from "@/sections/RoomEntrance/icons";
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
      panelBedContent={{
        it: {
          heading: <>Lo spazio comincia dal letto.</>,
          body: <>Matrimoniale e letto singolo separati da una quinta in legno, così chi dorme prima non resta sveglio.</>,
          facts: [
            { dt: <>32 m²</>, dd: <>Superficie su due ambienti</> },
            { dt: <>4</>, dd: <>Ospiti, letto aggiuntivo incluso</> },
          ],
        },
        en: {
          heading: <>The room begins at the bed.</>,
          body: <>A double and a single divided by a wooden partition, so whoever turns in first actually sleeps.</>,
          facts: [
            { dt: <>32 m²</>, dd: <>Across two rooms</> },
            { dt: <>4</>, dd: <>Guests, extra bed included</> },
          ],
        },
      }}
      panelServicesContent={{
        it: {
          heading: <>Tutto il resto è già incluso.</>,
          body: <>Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.</>,
          cta: <>Verifica disponibilità</>,
        },
        en: {
          heading: <>Everything else is included.</>,
          body: <>Breakfast, daily cleaning and courtyard parking. No surprises at checkout.</>,
          cta: <>Check availability</>,
        },
      }}
      amenitiesContent={{
        it: [
          { kicker: <>Riposo</>, title: <>Matrimoniale + singolo</>, body: <>Materassi in memory, biancheria in lino lavato, cambio ogni tre giorni.</> },
          { kicker: <>Privato</>, title: <>Bagno con doccia</>, body: <>Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.</> },
          { kicker: <>Inclusa</>, title: <>Colazione servita</>, body: <>Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.</> },
          { kicker: <>Comfort</>, title: <>Wi-Fi e smart TV</>, body: <>Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.</> },
          { kicker: <>Servizi</>, title: <>Parcheggio interno</>, body: <>Posto auto riservato nel cortile, senza costi aggiuntivi.</> },
        ],
        en: [
          { kicker: <>Sleep</>, title: <>Double + single</>, body: <>Memory foam mattresses, washed linen, changed every three days.</> },
          { kicker: <>Private</>, title: <>Bathroom with shower</>, body: <>En suite, walk-in shower, courtesy set and hairdryer.</> },
          { kicker: <>Included</>, title: <>Breakfast served</>, body: <>Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.</> },
          { kicker: <>Comfort</>, title: <>Wi-Fi and smart TV</>, body: <>Dedicated fibre, smart TV with your own accounts, desk and USB sockets.</> },
          { kicker: <>Services</>, title: <>Private parking</>, body: <>Reserved space in the courtyard, at no extra cost.</> },
        ],
      }}
    />
    <SuiteTemplate title="FAMILY SUITE" showHero={false} />
  </>
);
