<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
- 2026-06-24: In `/suite` booking box esteso anche in altezza fino al fondo della colonna destra con wrapper `h-full`/`flex-1`, senza modifiche a struttura o stile.
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: In `/suite` booking box portato a tutta larghezza della colonna destra rimuovendo il vincolo `md:max-w-[640px]` (layout invariato).
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: In `/suite` raffinata la sezione booking mantenendo layout e stile globale; rimossa doppia cornice, ridotta la densità verticale del form e compattato lo spazio sotto CTA.
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: In `/suite` sostituita la sezione finale `Related Projects` con sezione booking editoriale embedded (2 colonne desktop / 1 mobile) con mount `#suite-booking-embed` pronto per Smoobu/Lodgify.
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: In `/suite` aggiornata la label gallery a `FAMILY SUITE`; hero e blocchi gallery/heading riallineati e centrati su desktop.
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: In `/suite` rimosse sezioni Team e Awards con rimozione mirata dei rispettivi blocchi, senza alterare il resto della pagina.
  Files: src/sections/SuitePage/index.tsx
- 2026-06-24: Intro/info `/suite` consolidata in layout editoriale doppia colonna (immagine full-height a sinistra, narrativa e info a destra).
  Files: src/sections/SuitePage/index.tsx
- 2026-06-23: Creata route `/suite` e aggiornata la navigazione desktop/mobile ai nuovi percorsi.
  Files: src/sections/SuitePage/index.tsx, src/App.tsx, src/sections/Header/components/DesktopNavigation.tsx, src/components/MobileOverlay.tsx
- 2026-06-23: `MainContent` usa dataset tipizzato `roomsData` e render via `.map()` per le camere.
  Files: src/sections/MainContent/index.tsx
- 2026-06-23: `ProjectGallery` gestisce il meta desktop con eccezione per "1 letto aggiuntivo disponibile" allineata a destra.
  Files: src/sections/ProjectGallery/index.tsx
- 2026-06-10/23: `PracticeLinksSection` è una FAQ editoriale a due colonne con accordion nativo.
  Files: src/sections/PracticeLinksSection/index.tsx
- 2026-06-10+: Motion/reveal centralizzati in `App` + `tailwind.css`; in stato finale rimuovere sempre log `__ANIMA_DBG__`.
  Files: src/App.tsx, tailwind.css
</coder>
