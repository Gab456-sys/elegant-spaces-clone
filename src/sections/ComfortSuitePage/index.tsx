import { RoomEntrance } from "@/sections/RoomEntrance/RoomEntrance";
import { BedIcon, BathIcon, CoffeeIcon, CarIcon, UserPlusIcon } from "@/sections/RoomEntrance/icons";
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
      panelBedContent={{
        it: { heading: <>Lo spazio comincia dal letto.</>, body: <>Matrimoniale da 160, testiera imbottita e due comodini veri: quelli su cui ci sta anche un libro.</>, facts: [{ dt: <>22 m²</>, dd: <>Superficie con affaccio sul cortile</> }, { dt: <>2+1</>, dd: <>Ospiti, letto aggiuntivo su richiesta</> }] },
        en: { heading: <>The room begins at the bed.</>, body: <>A 160 double, upholstered headboard and two proper nightstands — the kind a book fits on.</>, facts: [{ dt: <>22 m²</>, dd: <>Facing the courtyard</> }, { dt: <>2+1</>, dd: <>Guests, extra bed on request</> }] },
      }}
      panelServicesContent={{
        it: { heading: <>Tutto il resto è già incluso.</>, body: <>Colazione, pulizia quotidiana e parcheggio nel cortile: nessun extra a sorpresa alla partenza.</>, cta: <>Verifica disponibilità</> },
        en: { heading: <>Everything else is included.</>, body: <>Breakfast, daily cleaning and courtyard parking. No surprises at checkout.</>, cta: <>Check availability</> },
      }}
      amenitiesContent={{
        it: [
          { kicker: <>Riposo</>, title: <>Matrimoniale 160</>, body: <>Materasso in memory, biancheria in lino lavato, cambio ogni tre giorni.</> },
          { kicker: <>Su richiesta</>, title: <>Letto aggiuntivo</>, body: <>Un terzo letto in camera senza rinunciare allo spazio di manovra.</> },
          { kicker: <>Privato</>, title: <>Bagno con doccia</>, body: <>Interno alla camera, doccia walk-in, set cortesia e asciugacapelli.</> },
          { kicker: <>Inclusa</>, title: <>Colazione servita</>, body: <>Prodotti del forno vicino e frutta di stagione, dalle 8 alle 10.30.</> },
          { kicker: <>Servizi</>, title: <>Parcheggio interno</>, body: <>Posto auto riservato nel cortile, senza costi aggiuntivi.</> },
        ],
        en: [
          { kicker: <>Sleep</>, title: <>160 double bed</>, body: <>Memory foam mattress, washed linen, changed every three days.</> },
          { kicker: <>On request</>, title: <>Extra bed</>, body: <>A third bed in the room without losing room to move.</> },
          { kicker: <>Private</>, title: <>Bathroom with shower</>, body: <>En suite, walk-in shower, courtesy set and hairdryer.</> },
          { kicker: <>Included</>, title: <>Breakfast served</>, body: <>Pastries from the bakery nearby and seasonal fruit, 8 to 10.30.</> },
          { kicker: <>Services</>, title: <>Private parking</>, body: <>Reserved space in the courtyard, at no extra cost.</> },
        ],
      }}
    />
    <SuiteTemplate title="COMFORT SUITE" showHero={false} />
  </>
);
