# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Stack

- Next.js **16.2.6** + React **19.2.4**, TypeScript strict, App Router.
- Tailwind **v4** via `@tailwindcss/postcss`. No `tailwind.config` — theme tokens live in `src/app/globals.css` under `@theme inline`, sourced from CSS vars on `:root[data-theme="light|dark"]`.
- `next.config.ts` sets `output: "export"` → fully static site. No server runtime, no API routes, no `next start` in prod. Build output in `out/`. Coolify pipeline serves `out/` behind Cloudflare.
- Path alias `@/*` → `src/*`.
- ESLint flat config (`eslint.config.mjs`) extends `next/core-web-vitals` + `next/typescript`.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build → static export to out/
npm run lint     # eslint (flat config)
```

No test runner configured. No `next start` (static export — serve `out/` instead).

## Architecture

**Marketing site for Call Della** — AI after-hours intake agent for personal injury law firms. Persona name: **Della**. Sister project (separate repo) is `calldella-platform` at `app.calldella.com`; do not couple.

### Layout

- `src/app/layout.tsx` — root: loads Newsreader + JetBrains Mono via `next/font`, sets `data-theme="light"` on `<html>`, injects Organization JSON-LD.
- `src/app/page.tsx` — landing composition. Renders 9 sections in order: `Hero → Problem → MeetDella → MorningBrief → HowItWorks → Pricing → Trust → FAQ → FinalCTA`, plus `BookingModal`. Injects Service JSON-LD.
- `src/app/globals.css` — design tokens. Edit CSS vars here, not Tailwind config.
- `src/app/robots.ts`, `src/app/sitemap.ts` — Next metadata routes. `public/llms.txt` is a static SEO/GEO asset.

### Components

- `src/components/sections/*` — page sections. One section per file. Each section is server-rendered unless it needs client interactivity.
- `src/components/*` — primitives + cross-cutting UI: `Header`, `Footer`, `PaperTexture` (background overlay), `Stamp`, `Rule`, `Typography` (`Eyebrow`, `Headline`, etc.), `CTAButton`, `DossierMockup` (`variant="hero"|"dashboard"`), `AudioPlayer` (custom HTML5 player), `BookingModal`, `ThemeToggle`, `ArticleLayout` (shared shell for content/SEO pages).

### Booking modal dispatcher pattern

`BookingModal` listens for a global `open-booking-modal` CustomEvent. `CTAButton` and `Pricing` dispatch this event instead of importing modal state. Use `window.dispatchEvent(new CustomEvent('open-booking-modal'))` to trigger from any new component — do not lift state.

### Dynamic SEO/GEO pages (static-generated)

- `src/app/states/[slug]/page.tsx` + `src/data/states.ts` — per-US-state landing pages. `generateStaticParams` enumerates `stateData`. Each emits FAQPage JSON-LD.
- `src/app/case-types/[slug]/page.tsx` + `src/data/cases.ts` — per-case-type pages (auto, trucking, etc.).
- `src/app/{compliance,operations,intake-playbook}/<post-slug>/page.tsx` — pillar/cluster blog posts (Phase 1 SEO content).
- `src/app/{privacy,terms,security}/page.tsx` — legal.

To add a new state or case type: append entry to the data file. Static export picks it up on next build via `generateStaticParams`. To add a new pillar post: create directory under matching pillar (`compliance/`, `operations/`, `intake-playbook/`) with `page.tsx`.

### Design system

"Evidence file / dossier" aesthetic — paper textures, stamps, rules, serif body, mono labels. Brand spec in `DELLA_BRAND.md`. Landing build spec in `LANDING_BUILD.md`. SEO/GEO content roadmap in `SEO_GEO_PLAN.md` / `SEO_GEO_STRATEGY.md`. Phase progress in `BUILD_LOG.md`.

Color/spacing tokens are CSS vars only — never hardcode hex. Use `bg-[var(--paper)]`, `text-[var(--ink)]`, etc., or the Tailwind v4 `@theme inline` aliases (`bg-paper`, `text-ink`).

### Schema.org / JSON-LD

Inject via inline `<script type="application/ld+json" dangerouslySetInnerHTML>` on the relevant page. Pattern already used in `layout.tsx` (Organization), `page.tsx` (Service), state/case pages (FAQPage).

## Critical Next.js 16 reminder

Per `AGENTS.md`: this Next.js version has breaking changes vs training data. Read `node_modules/next/dist/docs/` before writing routing, metadata, or data-fetching code. In particular:

- `output: "export"` is set — no server-only APIs, no dynamic route handlers, no `next/headers` runtime usage, no ISR, no middleware that requires a server. All pages must be statically generable.
- Dynamic segments require `generateStaticParams`.
- `params` typing in dynamic route pages may differ from older versions — verify against installed docs before changing signatures.
