# HBA-Style Luxury Design Studio Site

Single-page site inspired by hba.com, built on the existing TanStack Start setup. All sections live on the home route (`src/routes/index.tsx`), composed from small section components. Fully responsive (mobile / tablet / desktop).

## Design system (in `src/styles.css`)

Tokens (oklch equivalents of the requested hex values):
- `--background` cream `#f5f0ea`
- `--foreground` near-black `#0a0a0a`
- `--dark` deep petrol `#0a1628` (+ `--dark-foreground` white)
- `--accent-gold` warm sand/gold
- `--accent-bordeaux` deep bordeaux
- `--muted-foreground` warm grey for faded expertise list

Typography (Google Fonts via `<link>` in `__root.tsx` head):
- Display serif: **Cormorant Garamond** (headings, project titles, expertise list)
- Sans body: **Inter** (body copy)
- Uppercase labels: Inter, tracking-widest, 11–12px

Reusable utilities: `.pill-outline` (thin border, full-rounded, uppercase, hover invert), `.label-eyebrow` (uppercase tracked small), `.serif-display`.

## File structure

```
src/routes/index.tsx            // composes sections
src/components/site/
  Navbar.tsx                    // fixed, transparent → solid on scroll
  Hero.tsx                      // fullscreen fade slideshow + counter
  WhoWeAre.tsx                  // 2-col image/text on cream
  FeaturedProjects.tsx          // 4 stacked full-viewport project panels on dark
  Expertise.tsx                 // stacked faded serif list + photo grid
  Perspectives.tsx              // horizontal card carousel w/ prev/next
  CollectiveExcellence.tsx      // centered text + CTA on cream
  LeadershipTeam.tsx            // B&W portrait carousel w/ prev/next
  Footer.tsx                    // dark footer w/ regions, subscribe, social
  data.ts                       // projects, articles, leaders, offices arrays
```

## Section behavior

1. **Navbar** — `position: fixed`, transparent over hero, swaps to cream/dark text once `window.scrollY > 60`. Left: `HB_A` serif logo. Right: `MENU` + search circle icon (lucide).
2. **Hero** — 100vh. Slideshow of 4 luxury hotel images (Unsplash URLs) with CSS opacity fade every 6s. Large serif headline left-aligned bottom-third: "Design that gives form to emotion". Bottom-left counter "1 of 4".
3. **Who we are** — cream bg, 2 cols (image left, eyebrow + serif H2 + body + pill CTA right). Stacks on mobile.
4. **Featured projects** — 4 sequential full-viewport panels with dark overlay over Unsplash hero image. Title bottom-left, tag row (studio | typology | location | year), `VIEW PROJECT` pill. Data from `data.ts`.
5. **Expertise** — cream bg. Large serif "interiors", subtitle, `VIEW INTERIORS →`. Below: vertical list of 13 disciplines in huge faded serif (each centered or left-aligned, hover → darken). Then 3-col image grid.
6. **Perspectives** — cream. Heading + `VIEW ALL` pill. Horizontal scroll/snap of 3 article cards (image, eyebrow `AWARDS & ACCOLADES`, date, title). Prev/next arrow buttons control scroll.
7. **Collective excellence** — short centered block, pill CTA `OUR PEOPLE`.
8. **Leadership team** — carousel of 3 B&W portrait cards (Unsplash portrait photos, grayscale CSS filter), eyebrow `HBA | SINGAPORE`, name, role. Prev/next.
9. **Footer** — dark `#0a1628`. Logo + intro paragraph. 7-column region grid (collapses to 2 cols mobile). Subscribe form (email input, country `<select>`, consent checkbox, `SIGN UP` pill — front-end only, no submit logic). Enquire link. Follow Us row. Bottom copyright bar.

## Images

All from Unsplash via direct CDN URLs (`https://images.unsplash.com/photo-...?w=1920&q=80`) — no API key. Pick moody luxury hotel / resort / interior shots for hero, projects, expertise grid. Portrait shots for leadership (rendered with `filter: grayscale(1)`).

## Responsiveness

- Mobile: single column everywhere, hero headline scales down with `clamp()`, project panels keep 100vh but title shrinks, footer regions become 2-col, carousels become horizontal swipe.
- Tablet: 2-col layouts for Who/Expertise grid, 3-col footer.
- Desktop: full layouts as described.

## Technical notes

- Pure client-side; no backend, no Cloud needed.
- Slideshow + carousels use small local `useState` + `setInterval`; no external carousel lib.
- Update `__root.tsx` head: add Google Fonts links + update title/description to "HBA — Design that gives form to emotion".
- Update `src/routes/index.tsx` head meta accordingly and remove placeholder.
- No new dependencies required (lucide-react already present via shadcn).

## Out of scope

- Real routing for `/projects/*`, `/people/*` etc. (CTAs are visual only).
- Real form submission for Subscribe.
- CMS/data fetching — content is hardcoded in `data.ts`.
