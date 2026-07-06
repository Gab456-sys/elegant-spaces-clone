<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->
- 2026-06-24: Booking box di `/suite` esteso anche in altezza fino al fondo della colonna destra.
  Files: src/sections/SuitePage/index.tsx
  Pattern: colonna destra resa `md:self-stretch`, wrapper del box `flex h-full`, mount embed con `flex-1` per riempimento verticale.
- 2026-06-24: Booking box di `/suite` esteso alla piena larghezza della colonna destra senza cambiare struttura, stile o contenuti.
  Files: src/sections/SuitePage/index.tsx
  Pattern: rimosso solo il constraint `md:max-w-[640px]` e l’allineamento `md:ml-auto` dal wrapper del form.
- 2026-06-24: Raffinata la sezione booking di `/suite` mantenendo layout, palette e tipografia; eliminata la doppia cornice con densità visiva più editoriale.
  Files: src/sections/SuitePage/index.tsx
  Pattern: wrapper unico con bordo sottile, form più compatto (`h-11`, gap ridotti), min-height ridotta per rimuovere vuoto sotto la CTA.
  Note: aggiornati anche `workspace/CODER.md` (sintesi 50%+) e `workspace/TODO.md` (task booking provider live).
- 2026-06-24: Sostituita in `/suite` la sezione `Related Projects` con sezione booking embedded dal look editoriale minimale, coerente con pagina hospitality premium.
  Files: src/sections/SuitePage/index.tsx
  Pattern: layout responsive `md:grid-cols-12` (testo/lista camere a sinistra, wrapper embed a destra), bordi sottili e nessun elemento visivo invasivo.
  Note: mount tecnico `#suite-booking-embed` con fallback essenziale (date, ospiti, CTA) pronto a sostituzione con script/iframe Smoobu o Lodgify.
- 2026-06-24: Aggiornata la label della sezione gallery in `/suite` da `Suite Gallery` a `FAMILY SUITE`.
  Files: src/sections/SuitePage/index.tsx
  Pattern: sostituzione testuale puntuale del contenuto `<p>` senza variazioni di classi o struttura.
- 2026-06-24: Allineata su desktop la label `Suite Gallery` al centro e sotto `FAMILY SUITE`, con contenuto gallery riportato full-width nella stessa griglia.
  Files: src/sections/SuitePage/index.tsx
  Pattern: `md:col-span-3` + `md:col-start-4` -> `md:col-span-12`, e `md:text-center` sulla label.
- 2026-06-24: Centrata anche l’immagine hero di `/suite` nella pagina desktop, correggendo l’offset laterale.
  Files: src/sections/SuitePage/index.tsx
  Pattern: da `md:col-span-11 md:col-start-2` a `md:col-span-10 md:col-start-2` per margini simmetrici.
- 2026-06-24: Centrato nella pagina il blocco hero di `/suite` rendendo il contenitore del titolo full-width su desktop.
  Files: src/sections/SuitePage/index.tsx
  Pattern: da `md:col-span-8 md:col-start-4` a `md:col-span-12` per centro geometrico reale del titolo.
- 2026-06-24: Centrata la testata hero di `/suite` su desktop per avere `FAMILY SUITE` allineato precisamente sotto le metadata line.
  Files: src/sections/SuitePage/index.tsx
  Pattern: allineamento desktop con `md:justify-center` sul metadata list e `md:text-center` su H1, mobile invariato.
- 2026-06-24: Spostato il blocco metadata hero (Studio/Category/Location/Year) sopra il titolo nella versione desktop di `/suite`.
  Files: src/sections/SuitePage/index.tsx
  Pattern: duplicazione controllata del blocco metadata con visibilità responsive (`md:flex` desktop sopra H1, `md:hidden` mobile in posizione originale).
- 2026-06-24: Rimossa la sezione Awards & Accolades dalla pagina `/suite` eliminando il blocco grid con heading e lista premi.
  Files: src/sections/SuitePage/index.tsx
  Pattern: rimozione mirata del solo blocco richiesto, senza modificare altre sezioni/layout.
- 2026-06-24: Rimossa la sezione Team dalla pagina `/suite` eliminando il blocco grid con heading e card membri.
  Files: src/sections/SuitePage/index.tsx
  Pattern: rimozione mirata del solo blocco richiesto, senza modificare altre sezioni/layout.
- 2026-06-24: `SUITE GALLERY` aggiornata a griglia fotografica asimmetrica (`grid-cols-12`) con hero 8 colonne a sinistra e due immagini impilate 4 colonne a destra, tutte in ratio 4:3.
  Files: src/sections/SuitePage/index.tsx
  Pattern: `gap-4 md:gap-6`, card immagini con `rounded-md`, bottone overlay assoluto su immagine in basso a destra (`bottom-4 right-4`) in stile minimal.
- 2026-06-24: Ridisegnata `SUITE GALLERY` in stile quiet luxury editoriale con frame panoramico (16:9→21:9), spazio negativo laterale e navigazione con frecce vettoriali sottili.
  Files: src/sections/SuitePage/index.tsx
  Pattern: gallery non full-width con `max-w` interno, micro-tipografia caption/counter, transizioni lente `~950ms` + ingresso immagine da `scale-[1.05]` a `scale-100` e fade-up testi.
- 2026-06-24: Affinata la sezione intro di `SUITE` con immagine sinistra a piena altezza sezione e riduzione della scala testi/valori nella colonna destra.
  Files: src/sections/SuitePage/index.tsx
  Pattern: container intro senza padding verticale globale, colonna destra con `py` dedicato, immagine con `md:h-full md:min-h-*` e tipografia editoriale più compatta.
- 2026-06-24: Rivista la sezione intro di `SUITE` con composizione editoriale tipo project page (immagine a sinistra + narrativa e info su colonna destra).
  Files: src/sections/SuitePage/index.tsx
  Pattern: unita narrativa+project info in un unico blocco a 12 colonne con separatori sottili e typographic scale più marcata.
- 2026-06-23: Aggiunta nuova pagina editoriale premium `SUITE` su route `/suite` con layout a griglia, narrativa, info progetto, gallery, team, awards e related projects.
  Files: src/sections/SuitePage/index.tsx, src/App.tsx, src/sections/Header/components/DesktopNavigation.tsx, src/components/MobileOverlay.tsx
  Pattern: routing React Router con route dedicata + navigazione desktop/mobile aggiornata verso path assoluti e anchor homepage.
- 2026-06-23: Risolto il menu mobile difficile da chiudere aggiungendo un pulsante "Chiudi" visibile nel pannello overlay.
  Files: src/components/MobileOverlay.tsx
  Pattern: CTA esplicita con `onClick={onClose}` mantenendo invariata la logica esistente di backdrop/Escape/link.
- 2026-06-23: Centrato il blocco intro FAQ (header sinistro sticky) solo su mobile, mantenendo il layout desktop invariato.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: applicato `text-center md:text-left` al wrapper e `mx-auto md:mx-0` su titolo/paragrafo.
- 2026-06-23: Test FAQ mirato: rimosse esclusivamente le classi reveal (`reveal`, `reveal-editorial`, `reveal-editorial-tight`) dagli elementi interni.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: nessuna modifica a layout, copy, colori, spaziature, immagine, stato o animazioni dell’accordion; cleanup isolato per debug zoom/scatto.
- 2026-06-23: Sostituiti i testi FAQ placeholder con 14 Q/A reali di Villa Sesto senza toccare layout, classi Tailwind, animazioni o logica accordion.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: update mirato del solo array `faqs` (chiavi `question/answer` invariate), con struttura componente completamente intatta.
- 2026-06-23: Ridisegnata la FAQ in layout editoriale premium a 2 colonne con colonna sinistra sticky e accordion destra full-width.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: item semantici `ol > li > details/summary`, numerazione progressiva, animazione fluida su `grid-template-rows` + opacità, prima domanda `open` di default, id aggiornato a `faq`.
- 2026-06-23: Nella card Comfort Suite aggiunta "3 camere disponibili" come prima info a sinistra, mantenendo "1 letto aggiuntivo disponibile" allineato a destra.
  Files: src/sections/MainContent/index.tsx, src/sections/ProjectGallery/index.tsx
  Pattern: `dettaglio` passato come `metaYear` + gestione condizionale label extra letto su `metaPrimary/metaYear`.
- 2026-06-23: Nel blocco meta desktop resa `metaPrimary` come prima info a sinistra, mantenendo "1 letto aggiuntivo disponibile" in fondo a destra.
  Files: src/sections/ProjectGallery/index.tsx, src/sections/MainContent/index.tsx
  Pattern: ordine condizionale dei meta (`metaPrimary` prima, eccezione testuale a destra) + `note` Basic Room impostata a "1 camera disponibile".
- 2026-06-23: Spostata la label "1 letto aggiuntivo disponibile" in fondo a destra nel meta desktop della gallery.
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: riordinati i meta e applicata classe condizionale solo al testo target.
- 2026-06-23: Nel dataset `roomsData` impostata la prima info della `Family Suite` a "1 camera disponibile".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica puntuale del solo campo `note` della prima card, senza impatto sulle altre schede.
- 2026-06-23: Refactor `MainContent` con array `roomsData` (nome/prezzo/ospiti/note) e render delle 3 camere via `.map()`.
  Files: src/sections/MainContent/index.tsx
  Pattern: ogni card riceve props autonome dai dati mappati (`title`, `metaSecondary`, `metaLocation`, `metaPrimary`) senza dipendenze incrociate.
- 2026-06-23: Aggiornata l’etichetta selezionata da "80 euro a notte" a "50 euro a notte" nella card `family-suite`.
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaSecondary` nel dataset `suiteCards`.
- 2026-06-23: Aggiornata l’etichetta selezionata da "50 euro a notte" a "80 euro a notte" nella card `family-suite`.
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaSecondary` nel dataset `suiteCards`.
- 2026-06-23: Estratti i dati delle tre schede `ProjectGallery` in `suiteCards` con render via `.map()`.
  Files: src/sections/MainContent/index.tsx
  Pattern: props testuali indipendenti per ogni scheda in array tipizzato `ProjectGalleryProps[]`.
- 2026-06-23: Aggiornato il label selezionato "50 euro a notte" a "80 euro a notte" nel blocco `comfort-suite`.
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica puntuale del solo prop `metaSecondary` nel `ProjectGallery` con `sectionId="comfort-suite"`.
- 2026-06-23: Aggiornato il label selezionato "Family Stay" a "50 euro a notte" nel blocco `comfort-suite`.
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica puntuale del solo prop `metaSecondary` nel `ProjectGallery` con `sectionId="comfort-suite"`.
- 2026-06-23: Aggiornato il prezzo notte della prima gallery da "80 euro a notte" a "50 euro a notte".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaSecondary` nel blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-23: Aggiornata etichetta selezionata da "Villa Sesto" a "3 camere disponibili" nel blocco `comfort-suite`.
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaPrimary` del `ProjectGallery` con `sectionId="comfort-suite"`.
- 2026-06-23: Rimossa etichetta anno "2026" dalla prima gallery selezionata.
  Files: src/sections/MainContent/index.tsx
  Pattern: rimozione mirata del solo prop `metaYear` nel blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-23: Aggiornata etichetta località della prima gallery da "Toscana" a "4 persone".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaLocation` nel blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-23: Aggiornata etichetta meta secondaria della prima gallery da "Suite & Hospitality" a "80 euro a notte".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaSecondary` nel blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-23: Aggiornata etichetta meta primaria della prima gallery da "Villa Sesto" a "1 camera disponibile".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del solo prop `metaPrimary` nel blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-15: Aggiornato il titolo H2 del blocco `family-suite` da "Comfort Suite" a "Family Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-15: Aggiornato il titolo H2 del blocco `family-suite` da "Family Suite" a "Comfort Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo blocco `ProjectGallery` con `sectionId="family-suite"`.
- 2026-06-15: Aggiornato il titolo H2 del blocco `comfort-suite` da "Family Suite" a "Comfort Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo primo `ProjectGallery`, senza toccare struttura/stili.
- 2026-06-15: Aggiornato il titolo H2 del blocco `comfort-suite` da "Comfort Suite" a "Family Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo primo `ProjectGallery`, senza toccare struttura/stili.
- 2026-06-15: Aggiornato il titolo H2 del blocco `comfort-suite` da "Family Suite" a "Comfort Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo primo `ProjectGallery`, senza toccare struttura/stili.
- 2026-06-15: Aggiornato il titolo H2 del blocco `comfort-suite` da "Comfort Suite" a "Family Suite".
  Files: src/sections/MainContent/index.tsx
  Pattern: modifica mirata del prop `title` del solo primo `ProjectGallery`, senza toccare struttura/stili.
- 2026-06-15: Aggiornato il titolo H2 della prima immagine gallery da "Family Suite" a "Comfort Suite".
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: sostituzione testuale mirata del solo contenuto dell`h2, senza modifiche strutturali.
- 2026-06-15: Aggiornato il titolo hero della ProjectGallery da "Jumeirah Marsa Al Arab" a "Family Suite".
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: modifica testuale puntuale del solo nodo `h2`, nessuna variazione strutturale/stile.
- 2026-06-15: Inserita sezione FAQ integrata nel blocco hero consigli con stile editoriale coerente e accordion nativo.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: FAQ dentro container esistente `h-[1000px]` con `details/summary`, reveal classes e nessuna dipendenza aggiuntiva.
- 2026-06-15: Rimossa l’intestazione "Consigli" (`h5`) dalla sezione consigli, mantenendo invariata la struttura restante.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: rimozione mirata del solo blocco `h5` nella colonna sinistra con modifica localizzata.
- 2026-06-15: Rimossa la colonna link della sezione consigli con voci La Villa/Suite/Esperienze/Sapori/Benessere/Contatti.
  Files: src/sections/PracticeLinksSection/index.tsx
  Pattern: rimozione mirata del solo `div` `w-[66.6667%] ... md:w-[91.6667%]`, mantenuta struttura della sezione invariata.
- 2026-06-12: Create due copie aggiuntive della sezione ProjectGallery, posizionate una sotto l’altra sotto la sezione esistente.
  Files: src/sections/MainContent/index.tsx
  Pattern: mantenuta la prima sezione con `sectionId="suite"`; copie aggiunte senza id per evitare duplicati nel DOM.
- 2026-06-12: Risolto errore build `Unexpected token, expected ")" (45:25)` in ProjectGallery.
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: convertite entità HTML (`&lt;=`, `&gt;=`, `&lt;section`) in sintassi TSX valida e rimosso log `__ANIMA_DBG__`.
- 2026-06-12: Risolto errore build `Unexpected token (66:6)` in ProjectGallery ricostruendo la parte finale troncata del file.
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: ripristinati chiusure funzione/effect, cleanup listener scroll/resize, return JSX completo; aggiunto log temporaneo `__ANIMA_DBG__ project-gallery-progress`.
- 2026-06-11: Aumentata ancora la lente ricerca desktop perché risultasse visibilmente più grande, mantenendo lo stesso allineamento in riga.
  Files: src/sections/Header/index.tsx
  Pattern: SVG ricerca aggiornata da `w-[18px] h-[18px]` a `w-[22px] h-[22px]` senza cambiare struttura/header grid.
- 2026-06-11: Ingrandita leggermente la lente ricerca nell’header desktop mantenendola allineata sulla stessa riga delle voci menu.
  Files: src/sections/Header/index.tsx
  Pattern: SVG ricerca aggiornata da `w-4 h-4` a `w-[18px] h-[18px]` senza modificare layout/grid.
- 2026-06-11: Header desktop aggiornato con tasto ricerca a lente nella colonna destra, sulla stessa linea delle voci menu e con stile coerente.
  Files: src/sections/Header/index.tsx
  Pattern: aggiunta classe `header-nav-link` al link ricerca e normalizzato SVG (`w-4 h-4`) per allineamento ottico.
- 2026-06-11: Rimossa l’icona lente flottante (`icon-4.svg`) dalla pagina principale.
  Files: src/App.tsx
  Pattern: rimosso import e render di `FloatingLogo`; nessun altro layout/componente toccato.
- 2026-06-10: Header desktop: abbassata ulteriormente la lente per correggere il disallineamento verticale percepito.
  Files: src/sections/Header/index.tsx
  Pattern: offset icona ricerca aggiornato da `md:translate-y-[2px]` a `md:translate-y-[4px]`.
- 2026-06-10: Corretto il bottone MENU mobile che restava fermo durante lo scroll.
  Files: src/sections/Header/components/MobileMenuButton.tsx
  Pattern: posizione cambiata da `fixed` a `absolute` mantenendo offset top/right esistenti.
- 2026-06-10: Header desktop: abbassata ulteriormente la lente desktop per centrarla otticamente con le voci menu.
  Files: src/sections/Header/index.tsx
  Pattern: offset SVG del bottone ricerca aggiornato da `md:translate-y-[1px]` a `md:translate-y-[2px]`.
- 2026-06-10: Header desktop: micro-correzione allineamento ottico della lente con le voci menu su desktop.
  Files: src/sections/Header/index.tsx
  Pattern: applicato offset SVG `md:translate-y-[1px]` sul bottone ricerca per compensare la percezione di icona più alta.
- 2026-06-10: Header desktop: allineata verticalmente la lente alla stessa altezza delle altre voci menu.
  Files: src/sections/Header/index.tsx
  Pattern: nel link ricerca desktop sostituito `md:[align-items:normal]` con `md:items-center` per correggere baseline/centering verticale.
- 2026-06-10: Header desktop: eliminata la seconda lente, mantenuta solo quella principale e centrata nella colonna destra.
  Files: src/sections/Header/index.tsx
  Pattern: rimosso `header-nav-link` dal bottone ricerca per evitare pseudo-elemento `::after` duplicato; icona SVG aumentata a `w-4.5 h-4.5`.
- 2026-06-10: Header desktop aggiornato: rimossa la scritta del bottone ricerca e mantenuta solo la lente centrata sulla baseline della riga.
  Files: src/sections/Header/index.tsx
  Pattern: CTA destra in griglia simmetrica invariata, `aria-label` mantenuta e icona SVG inline centrata.
- 2026-06-10: Header desktop corretto: menu realmente centrato, niente a-capo e tasto ricerca allineato sulla stessa riga.
  Files: src/sections/Header/index.tsx, src/sections/Header/components/DesktopNavigation.tsx
  Pattern: griglia `auto 1fr auto`, colonna destra reale (no spacer interno nav), `nowrap` su voci menu.
- 2026-06-10: Header desktop centrato con struttura simmetrica a 3 colonne e menu allineato al centro.
  Files: src/sections/Header/index.tsx, src/sections/Header/components/DesktopNavigation.tsx, src/sections/Header/components/HeaderLogo.tsx
  Pattern: `header-shell` centrato, container `max-w`, nav `justify-center` con spacer destro per bilanciamento visivo.
- 2026-06-10: Follow-up fix: sezione gallery estesa anche a destra su desktop e rimossi log debug runtime residui.
  Files: src/sections/ProjectGallery/index.tsx, src/App.tsx
  Pattern: banda hero gallery non più limitata (`md:max-w-full`), cleanup completo `__ANIMA_DBG__`.
- 2026-06-10: Corretto overlay desktop che copriva i contenuti e aggiunto logging minimo per verifica runtime.
  Files: src/sections/Header/components/DesktopNavigation.tsx, src/App.tsx
  Pattern: layer nav background sempre hidden su desktop (`md:invisible md:pointer-events-none`) + log `__ANIMA_DBG__ header-overlay-state` su mount/resize.
- 2026-06-10: Fix finale fullscreen “tutto blu” con Hero sempre visibile e fallback immagine se il video fallisce.
  Files: src/App.tsx, src/sections/Hero/index.tsx, src/sections/Hero/components/HeroMedia.tsx
  Pattern: rimozione log runtime `__ANIMA_DBG__`, viewport unit `100svh` e fallback resiliente `video -> img`.
- 2026-06-10: Nuovo pass debug fullscreen: root con `overflow-y-auto`, video Hero normalizzato e log minimi ripristinati.
  Files: src/App.tsx, src/sections/Hero/components/HeroMedia.tsx
  Pattern: fallback-no-logs con `__ANIMA_DBG__ fullscreen-layout` + attributi video React corretti (`autoPlay`, `playsInline`) e URL media senza suffisso ambiguo.
- 2026-06-10: Risolto problema fullscreen “tutto blu” limitando il media Hero alla prima sezione e rimuovendo debug runtime.
  Files: src/sections/Hero/index.tsx, src/sections/Hero/components/HeroMedia.tsx, src/App.tsx
  Pattern: Hero passa da altezza fissa (`h-[1000px]`) a viewport (`h-screen min-h-screen`) e il layer video da `fixed` a `absolute h-full`.
- 2026-06-10: Fix fullscreen su home: rimosso `<body>` annidato dentro React e sostituito con root `<div>` valido.
  Files: src/App.tsx
  Pattern: aggiunto `min-h-screen w-full` sul container root e log temporanei `__ANIMA_DBG__ fullscreen-layout` per verifica runtime.
- 2026-06-10: Fix definitivo per lo spazio vuoto a destra intervenendo su overflow globale e layer assoluto header fuori viewport.
  Files: src/App.tsx, src/sections/Header/components/DesktopNavigation.tsx
  Pattern: `overflow-x-hidden` su root body e rimozione offset `left: calc(100% + 135px)` che estendeva il layout oltre il viewport.
- 2026-06-10: Corretto spazio vuoto sulla destra nella sezione Suite eliminando overflow orizzontale.
  Files: src/sections/ProjectGallery/index.tsx
  Pattern: sostituito `w-screen` con `w-full max-w-full` e aggiunto `overflow-x-hidden` sul container sezione.
- 2026-06-10: Aggiornata la sezione Suite per far riempire l’immagine di sfondo su tutta la sezione.
  Files: src/sections/MainContent/index.tsx
  Pattern: `backgroundVariant` su `ProjectGallery` impostato a `inset-0` per copertura full-height senza tagli inferiori.
- 2026-06-10: Step 5 motion header/nav: aggiunto stato scroll raffinato e micro-hover editoriale su link desktop/logo senza cambiare layout.
  Files: src/sections/Header/index.tsx, src/sections/Header/components/DesktopNavigation.tsx, src/sections/Header/components/HeaderLogo.tsx, tailwind.css
  Pattern: `header-shell.is-scrolled` + `header-nav-link` con underline sottile/opacity shift, easing coerente e reduced-motion coperta.
- 2026-06-10: Step 4 motion immagini: introdotto crop reveal con wrapper `overflow-hidden` e animazione inner media su Hero, La Villa e Suite.
  Files: src/sections/Hero/components/HeroMedia.tsx, src/components/SectionImage.tsx, src/sections/ProjectGallery/components/GalleryImageGroup.tsx
  Pattern: sostituito reveal opacity-only con `.reveal-crop` + `.reveal-media-inner` e `data-reveal-order` per ingressi controllati.
- 2026-06-10: Step 3 motion testi: sequenza editoriale con delay espliciti su Intro/Consigli/Footer e hover link più discreto nei consigli.
  Files: tailwind.css, src/sections/IntroSection/index.tsx, src/components/SectionCta.tsx, src/sections/PracticeLinksSection/index.tsx, src/sections/PracticeLinksSection/components/PracticeLink.tsx, src/sections/Footer/components/FooterLogo.tsx, src/sections/Footer/components/FooterIntro.tsx, src/sections/Footer/components/FooterNavigation.tsx, src/sections/Footer/components/FooterContact.tsx, src/sections/Footer/components/FooterSocial.tsx
  Pattern: reveal progressivo non-template via `data-reveal-order` + preset `.reveal-editorial` e `.reveal-editorial-tight`.
- 2026-06-10: Step 2 motion system: centralizzati preset HBA-like per reveal testo/media e introdotto crop reveal riusabile.
  Files: tailwind.css, src/App.tsx
  Pattern: Observer unico esteso a `.reveal-crop` con delay da dataset (`data-reveal-delay`, `data-reveal-order`) e timing più editoriale.
- 2026-06-10: Footer cleanup mirato: eliminato blocco subscribe/newsletter e applicati reveal/hover sobri ai blocchi contatti-social-link.
  Files: src/sections/Footer/components/FooterLogo.tsx, src/sections/Footer/components/FooterIntro.tsx, src/sections/Footer/components/FooterNavigation.tsx, src/sections/Footer/components/FooterRegion.tsx, src/sections/Footer/components/FooterContact.tsx, src/sections/Footer/components/FooterSocial.tsx, src/sections/Footer/components/FooterCopyright.tsx, src/sections/Footer/components/FooterSubscribe.tsx
  Pattern: Layout invariato, solo pulizia contenuti corporate/HBA e micro-motion coerente con sistema `.reveal`.
- 2026-06-10: Step 5 completed: removed legacy hero slider controls and detached newsletter/subscribe from active footer render.
  Files: src/sections/Hero/components/HeroMedia.tsx, src/sections/Footer/index.tsx
  Pattern: Kept Villa Sesto structure and reveal system intact; removed only corporate motion/form residues.
- 2026-06-10: Applied minimal Villa Sesto cleanup: home now renders only Hero, La Villa, one Suite gallery, I nostri Consigli, plus existing Header/Footer.
  Files: src/sections/MainContent/index.tsx, src/sections/ProjectGallery/index.tsx, src/sections/IntroSection/index.tsx, src/sections/PracticeLinksSection/index.tsx
  Pattern: Disconnected corporate sections at render level only; no component/asset deletion.
- 2026-06-10: Simplified navigation semantics and removed corporate/global menu paths from active desktop/mobile navigation surfaces.
  Files: src/sections/Header/components/DesktopNavigation.tsx, src/components/MobileOverlay.tsx, src/sections/Header/components/HeaderLogo.tsx
  Pattern: Internal anchor navigation to `#la-villa`, `#suite`, `#consigli`, `#contatti`.
- 2026-06-10: Realigned footer labels/content to hospitality voice while preserving existing responsive structure.
  Files: src/sections/Footer/index.tsx, src/sections/Footer/components/FooterLogo.tsx, src/sections/Footer/components/FooterIntro.tsx, src/sections/Footer/components/FooterNavigation.tsx, src/sections/Footer/components/FooterContact.tsx, src/sections/Footer/components/FooterSocial.tsx, src/sections/Footer/components/FooterCopyright.tsx
  Pattern: Reused existing layout primitives (`FooterRegion`, same grid/flex classes) with Villa Sesto copy.
- 2026-06-10: Implemented HBA-style menu overlay open/close animation and accessibility behavior for the HOME "MENU" trigger.
  Files: src/App.tsx, src/components/MobileOverlay.tsx, src/sections/Header/components/MobileMenuButton.tsx, tailwind.css
  Pattern: `.menu-overlay` closed/open states (opacity/visibility/pointer-events/translateY), 620ms cubic-bezier(0.16, 1, 0.3, 1), Escape close + column stagger.
- 2026-06-10: Added reusable scroll reveal system and applied it across key home text/media blocks with subtle editorial motion.
  Files: tailwind.css, src/App.tsx, src/sections/IntroSection/index.tsx, src/sections/PerspectivesSection/index.tsx, src/sections/CollectiveExcellence/index.tsx, src/sections/LeadershipSection/index.tsx
  Pattern: single IntersectionObserver (`threshold: 0.2`, one-shot unobserve) + sibling stagger via CSS variable delay.
- 2026-06-10: Applied reveal-media to hero/editorial/card images and cleaned up debug logs.
  Files: src/sections/Hero/components/HeroMedia.tsx, src/components/SectionImage.tsx, src/sections/ProjectGallery/components/GalleryImageGroup.tsx, src/sections/PerspectivesSection/components/PerspectiveCard.tsx, src/sections/LeadershipSection/components/LeadershipCard.tsx, src/components/MobileOverlay.tsx
  Pattern: timing split kept consistent (text 620ms, media 920ms, cubic-bezier(0.16, 1, 0.3, 1)).
- 2026-06-09: Fixed persistent white strip by moving MobileOverlay panel fully offscreen and added runtime debug logs.
  Files: src/components/MobileOverlay.tsx, src/App.tsx
  Pattern: fixed positioned full-height overlays with negative bottom offsets can still leave visible slivers.
- 2026-06-09: Removed empty spacer/callout blocks causing white gap below content.
  Files: src/sections/MainContent/index.tsx
  Pattern: main page section flow controlled directly in MainContent component order.
</changelog>
