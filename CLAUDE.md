# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CuffleyCabs is a static site for a taxi/car service in Cuffley, Hertfordshire. It is built with **Astro + React** for programmatic SEO — the homepage is a single-page layout, and 45 route pages (e.g. `/cuffley-to-heathrow-taxi`) are generated at build time from data.

## Commands

### Development
```bash
npm run dev          # Start Astro dev server
npm run build        # Build static site to dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Tech Stack

- **Build Tool**: Astro 4.x (replaces Vite; uses Vite internally)
- **Framework**: React 18.3 (used for interactive islands via Astro's partial hydration)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Icons**: lucide-react 0.344
- **Sitemap**: @astrojs/sitemap (auto-generates `sitemap-index.xml` at build)

## Architecture

### File Structure

```
src/
  layouts/
    Layout.astro        # Base HTML shell — handles all <head> SEO tags
  pages/
    index.astro         # Homepage (all existing sections)
    [slug].astro        # Route page template — generates 45 airport pages
  components/           # All React components (unchanged from original)
  data/
    routes.ts           # Route data powering [slug].astro
  index.css             # Tailwind directives + custom animations
  env.d.ts              # Astro type reference
astro.config.mjs        # Astro config with react, tailwind, sitemap integrations
tailwind.config.js      # Content array includes *.astro files
tsconfig.json           # Extends astro/tsconfigs/strict with react-jsx
```

### Programmatic Route Pages

`src/data/routes.ts` defines **9 origins × 5 airports = 45 route pages**:

- **Origins**: Cuffley, Potters Bar, Brookmans Park, Goffs Oak, Northaw, Cheshunt, Enfield, Waltham Cross, Welwyn Garden City
- **Airports**: Heathrow, Gatwick, Stansted, Luton, London City

Each entry generates a page at `/{origin}-to-{airport}-taxi` with a unique title, description, distance/time/price stats, what's-included section, 5 FAQs, and a booking form.

Distances and prices for non-Cuffley origins use a simple `offset` applied to the Cuffley base values. **These should be verified and corrected** against actual driving distances.

To add more routes, add entries to `origins` or `airports` arrays in `routes.ts` — pages are generated automatically.

### Astro Partial Hydration

React components are selectively hydrated:

| Component | Directive | Reason |
|---|---|---|
| Header | `client:load` | Scroll handler + mobile menu |
| Hero | `client:load` | Animation useEffects |
| Services | *(none)* | Static HTML — zero JS shipped |
| About | *(none)* | Static HTML — zero JS shipped |
| Testimonials | `client:visible` | Carousel state, below fold |
| Contact | `client:visible` | Form state, below fold |
| Footer | `client:load` | Modal state (Privacy/Terms) |

### Key Components

- **Layout.astro** (`src/layouts/Layout.astro`): Accepts `title`, `description`, `canonicalUrl`, `ogTitle`, `schema` props. Injects all SEO meta tags, Open Graph, Twitter card, and JSON-LD schema. Also contains the Netlify form detection hidden template (replaces the old `index.html` template).

- **Hero Component** (`src/components/Hero.tsx`): Two entrance animations via refs and useEffect:
  - Tagline: `.animate-typing` CSS class → `fadeInText` fade-in animation
  - Subtitle: starts `opacity-0`, fades to `opacity-100` via delayed class swap
  - CTAs: WhatsApp button (image link) + "Book Online" anchor to `#booking`, wrapped in `.animate-fade-in` (1.5s delay)
  - Scroll indicator: bouncing `ChevronDown` → smooth scrolls to `#services`

- **Contact Component** (`src/components/Contact.tsx`): Booking form container has `id="booking"`. Submits via `fetch` POST to Netlify. Contact details: `cuffleycabs@gmail.com`, Station Road, Cuffley, EN6 4HZ, 24/7.

- **Footer Component** (`src/components/Footer.tsx`): Contains Privacy Policy and Terms of Service modals.

- **Modal Component** (`src/components/Modal.tsx`): Reusable backdrop-blur modal, uses `.animate-modal-slide-up`.

### Styling Approach

- Tailwind utility classes throughout
- Custom animations in `src/index.css`:
  - `fadeInText` → `.animate-typing` (tagline fade-in)
  - `fadeIn` → `.animate-fade-in` (CTA buttons, 1.5s delay)
  - `modalSlideUp` → `.animate-modal-slide-up` (modals)
  - `typing` + `blink` — commented-out typewriter approach (kept for reference)
- Primary brand color: `#D4AF37` (gold)
- Dark theme (gray-900/gray-800) for hero/header; white/gray-50 for content sections

### Form Handling

Netlify Forms. The hidden detection template lives in `Layout.astro` `<body>`. The Contact component submits via `fetch` POST to `/` with `application/x-www-form-urlencoded`. A honeypot `bot-field` is included. On success, shows a confirmation message (not a confirmed booking — team contacts the customer).

### Asset Management

Static assets (`src/bg-img-min.png`, `src/WhatsAppButtonGreenSmall.png`) live in `src/` and are imported directly into components. Astro/Vite hashes and copies them to `dist/_astro/` on build.

## Configuration Notes

- **astro.config.mjs**: Integrates `@astrojs/react`, `@astrojs/tailwind` (`applyBaseStyles: false`), `@astrojs/sitemap`. Site URL set to `https://cuffleycars.netlify.app`.
- **tsconfig.json**: Extends `astro/tsconfigs/strict` with `jsx: "react-jsx"` and `jsxImportSource: "react"`.
- **tailwind.config.js**: Content array includes `**/*.astro` in addition to tsx/ts/jsx/js.

## Deployment

Deployed on Netlify. Netlify auto-detects Astro: build command `astro build`, publish directory `dist/`. The sitemap is auto-generated at `dist/sitemap-index.xml`.

## Expanding the SEO Strategy

To add new route types (cities, service pages):

1. Add new entries to `src/data/routes.ts`
2. (Optional) Create a separate data file + page template for a different layout
3. Run `npm run build` — new pages appear automatically in `dist/` and `sitemap-index.xml`
