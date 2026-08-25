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
      panelBedContent={{
        it: { heading: <>Lo spazio comincia dal letto.</>, body: <>Matrimoniale da 140 sotto la finestra, un armadio capiente e nulla di superfluo in mezzo.</>, facts: [{ dt: <>16 m²</>, dd: <>Superficie, secondo piano</> }, { dt: <>2</>, dd: <>Ospiti, bagno privato interno</> }] },
        en: { heading: <>The room begins at the bed.</>, body: <>A 140 double under the window, a roomy wardrobe, and nothing superfluous in between.</>, facts: [{ dt: <>16 m²</>, dd: <>Second floor</> }, { dt: <>2</>, dd: <>Guests, en suite bathroom</> }] },
      }}
      panelServicesContent={{
        it: { heading: <>Tutto il resto è già incluso.</>, body: <>Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.</>, cta: <>Verifica disponibilità</> },
        en: { heading: <>Everything else is included.</>, body: <>Breakfast, daily cleaning and courtyard parking. No surprises at checkout.</>, cta: <>Check availability</> },
      }}
      amenitiesContent={{
        it: [
          { kicker: <>Riposo</>, title: <>Matrimoniale 140</>, body: <>Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.</> },
          { kicker: <>Privato</>, title: <>Bagno con doccia</>, body: <>Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.</> },
          { kicker: <>Inclusa</>, title: <>Colazione servita</>, body: <>Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.</> },
          { kicker: <>Comfort</>, title: <>Wi-Fi e smart TV</>, body: <>Fibra dedicata, smart TV con i tuoi account, scrivania e prese USB.</> },
          { kicker: <>Servizi</>, title: <>Parcheggio interno</>, body: <>Posto auto riservato nel cortile, senza costi aggiuntivi.</> },
        ],
        en: [
          { kicker: <>Sleep</>, title: <>140 double bed</>, body: <>Memory foam mattress, washed linen, changed every three days.</> },
          { kicker: <>Private</>, title: <>Bathroom with shower</>, body: <>En suite, walk-in shower, courtesy set and hairdryer.</> },
          { kicker: <>Included</>, title: <>Breakfast served</>, body: <>Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.</> },
          { kicker: <>Comfort</>, title: <>Wi-Fi and smart TV</>, body: <>Dedicated fibre, smart TV with your own accounts, desk and USB sockets.</> },
          { kicker: <>Services</>, title: <>Private parking</>, body: <>Reserved space in the courtyard, at no extra cost.</> },
        ],
      }}
    />
    <SuiteTemplate title="BASIC ROOM" showHero={false} />
  </>
);
