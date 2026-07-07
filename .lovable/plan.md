## Obiettivo
Sostituire il pulsante fisso "Scopri di più" con un'interazione al passaggio del mouse sulla fascia in basso di ogni sezione camera. L'intera fascia (titolo + metadati) diventa cliccabile e rimanda alla pagina della camera; il testo "Scopri di più" appare in modo elegante solo all'hover.

## Modifiche in `src/sections/ProjectGallery/index.tsx`

1. Rimuovere il pulsante pill attualmente accanto ai metadati.
2. Avvolgere la fascia inferiore (`div` con titolo + meta) in un `<a href="/projects/{sectionId}">` con `group` e `pointer-events-auto`, così tutta la fascia diventa hover-target e link.
3. Aggiungere un elemento `Scopri di più / Discover more` posizionato in modo coerente con lo stile editoriale del sito:
   - piccolo, uppercase, tracking largo (`text-[11px] uppercase tracking-[1.2px]`), stesso trattamento tipografico dei metadati
   - allineato a destra sotto/accanto ai metadati, o come riga sottile appena sopra la fascia
   - stato di default: `opacity-0 translate-y-2`
   - stato hover della fascia: `group-hover:opacity-100 group-hover:translate-y-0`
   - transizione morbida (`transition-all duration-500 ease-out`)
   - con una freccia sottile `→` per suggerire il link
4. Aggiungere un leggero feedback visivo sull'intera fascia al hover per rendere chiara l'interattività:
   - un sottile underline animato sotto il titolo, oppure un lieve schiarimento del gradiente/overlay nero già presente in fondo all'immagine (opzione preferita: underline animato tipo `story-link` coerente con lo stile editoriale)
5. Mantenere la stringa i18n già aggiunta (`room.cta.discover`) — nessuna modifica ai dizionari.
6. Su mobile (dove hover non esiste) mostrare il "Scopri di più →" sempre visibile, sotto il titolo, in piccolo — la fascia rimane comunque un link.

## Note tecniche
- `sectionId` è già passato ai `ProjectGallery` (`family-suite`, `comfort-suite`, `basic-room`) e serve per costruire l'href.
- Nessuna modifica ai dizionari, a `MainContent`, o ad altri file.
- Il link punta a `/projects/{sectionId}` coerentemente con la scelta precedente.
