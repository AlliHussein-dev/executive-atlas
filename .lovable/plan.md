
# Etihad Consultancy — Build Plan

## Approach
Editorial, luxury-corporate marketing site + a visually rich (mock-data) Private Client Portal. No backend in this build — portal uses realistic seeded data and stays purely presentational. All photography sourced from curated Unsplash URLs (25+ images).

## Step 1 — Design directions (first)
Generate 3 rendered homepage directions, all sharing the brief's locked taste (ivory/charcoal/royal navy, Playfair Display + Inter, magazine layouts, restrained motion). Variants differ in composition / hierarchy:
1. **Editorial Annual Report** — serif-led, oversized type, asymmetric grids, thin rules, generous whitespace.
2. **Private Bank Quiet Luxury** — centered, symmetrical, large hero photography, refined small caps, navy accents.
3. **Diplomatic Modern** — split-screen hero, sage + navy accents, horizontal section rails, structured magazine columns.

You pick one; I build it across the whole site and portal.

## Step 2 — Design system
- Tokens in `src/styles.css` (`@theme`): Executive White, Soft Ivory, Platinum, Graphite, Deep Charcoal, Royal Navy, Sage.
- Fonts loaded via `<link>` in `__root.tsx` (Playfair Display + Inter); `--font-display` / `--font-sans` tokens.
- Shared primitives: SectionHeader, Eyebrow, Divider, Stat, QuoteBlock, ImagePlate, TimelineRail.

## Step 3 — Public site routes
- `/` Home — cinematic hero, trust strip, legacy teaser, signature services preview, industries strip, success story feature, leadership preview, journey timeline, gallery teaser, contact CTA.
- `/legacy` — Etihad story, founder vision, philosophy, office imagery.
- `/services` — 4 advisory practices (Corporate Establishment, Immigration & Residency, Regulatory & Government Relations, Legal & Documentation) with imagery + detail.
- `/industries` — 6 sectors with full-width imagery and case highlights.
- `/case-studies` — executive case studies (challenge / solution / outcome).
- `/leadership` — executive profiles with portraits & advisory philosophy.
- `/journey` — 6-step horizontal premium timeline.
- `/gallery` — immersive corporate gallery.
- `/contact` — elegant consultation form, Abu Dhabi map embed, office photography, hours.

## Step 4 — Private Client Portal (visual demo, no auth)
Routes under `/portal/*` with a refined sidebar shell (not admin-dashboard feel):
- `/portal` — personal welcome ("Welcome back, Mr. Ahmed…"), dedicated advisor card, upcoming meetings.
- `/portal/documents` — Secure Document Lounge: drag-and-drop zone (UI only), encrypted indicators, categories, sample docs.
- `/portal/progress` — Business Progress timeline: applications, visa updates, renewals, deadlines.
- `/portal/billing` — invoices, government fees, payment records, "Complete Secure Payment" CTA.
- `/portal/messages` — advisor messaging UI with seeded thread.
A subtle "Enter Private Client Portal" link from the marketing header goes to `/portal` directly (no login wall in this build).

## Step 5 — Photography
~28 curated Unsplash images: Abu Dhabi skyline at sunrise, skyscrapers, boardrooms, executive meetings, leadership portraits, reception/office interiors, documentation scenes, industry shots (construction, tech, healthcare, real estate, manufacturing, hospitality), corporate events.

## Step 6 — Motion & polish
Framer Motion for subtle fade-up on scroll, soft parallax on hero, refined hover states on cards/links. No flashy animations. Accessibility: semantic landmarks, single `<main>` per route, alt text, focus rings, AA contrast.

## Step 7 — SEO
Per-route `head()` with unique title / description / og tags; root has site-wide defaults only (no og:image on root).

## Technical Notes
- Stack: TanStack Start + Tailwind v4 + shadcn primitives + Framer Motion.
- Portal data: typed mock fixtures in `src/lib/portal-fixtures.ts`. Easy to swap for Lovable Cloud later.
- No `src/pages/`, no React Router DOM — file-based routes under `src/routes/`.

## Out of scope (this build)
Real authentication, real file uploads, real payments, CMS. Can be added later via Lovable Cloud without redesigning the UI.
