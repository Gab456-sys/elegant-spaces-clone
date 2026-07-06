## Obiettivo

Aggiungere accanto al tasto "Menu" nell'header un pulsante `IT / EN` che cambi la lingua di tutto il sito, con la scelta persistente tra le pagine.

## Cosa costruisco

1. **Contesto lingua globale** (`src/lib/i18n/LanguageContext.tsx`)
   - Provider con stato `language: "it" | "en"`, salvato in `localStorage` (`site-lang`) e sincronizzato con `document.documentElement.lang`.
   - Hook `useLanguage()` → `{ language, setLanguage, toggle, t }`.
   - `t(key)` legge dal dizionario attivo; se manca la chiave, fallback all'italiano.
   - Provider montato una sola volta in `src/routes/__root.tsx` dentro `RootComponent`, così copre home e sotto-pagine.

2. **Dizionari** (`src/lib/i18n/dictionaries/it.ts`, `en.ts`)
   - Un unico oggetto piatto con chiavi tipo `nav.menu`, `hero.title`, `faq.title`, `faq.items.0.q`, ecc.
   - Traduco tutte le stringhe visibili di:
     - Header / DesktopNavigation (Menu, Close, voci nav, dropdown Suite)
     - Hero, WhoWeAre, FeaturedProjects, Expertise, Perspectives, Footer (home)
     - PracticeLinksSection (FAQ: titolo, intro e le 14 Q/A)
     - Sezioni suite (Family / Comfort / Basic) e ProjectGallery meta labels
   - Le stringhe restano in italiano come baseline; la versione EN è una traduzione professionale delle stesse frasi.

3. **Pulsante lingua nell'header** (`src/sections/Header/index.tsx`)
   - Nuovo `<button>` inserito nel cluster a destra, subito **prima** del bottone "Menu", stesso stile `header-nav-link` (uppercase, tracking 1.2px).
   - Etichetta dinamica: mostra la lingua *verso cui* si passa, es. quando sei in IT vedi `EN`, quando sei in EN vedi `IT`. Con separatore visivo: `IT · EN` con quella attiva più opaca.
   - `aria-label="Cambia lingua"`, `aria-pressed` per stato.
   - Sempre visibile (non nascosto quando `!isScrolled`, così è raggiungibile anche in cima).

4. **Refactor dei componenti per usare `t()`**
   - Sostituisco le stringhe hard-coded nei componenti elencati sopra con `t("chiave")`.
   - Nessun cambiamento di layout, colori o animazioni.

## Dettagli tecnici

- Nessuna dipendenza esterna (niente `react-i18next`): dizionario semplice + context, sufficiente per un sito statico bilingue e più leggero.
- SSR-safe: legge `localStorage` dentro `useEffect`, default `it` al primo render per evitare hydration mismatch.
- `document.documentElement.lang` viene aggiornato a `it` / `en` per SEO/accessibilità.
- Le meta tag della route restano in italiano (baseline); posso aggiungere varianti EN in un secondo momento se serve.

## Fuori scope

- Routing per URL (`/en/...`) e traduzione delle meta `<title>`/`description` per lingua: non richiesti; se li vuoi li aggiungo dopo.
- Traduzione automatica via API: uso traduzioni statiche curate.
