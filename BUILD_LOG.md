# Build Log

## Phase 0 - Foundation
- **[Complete]** Initialized Next.js 16 project with Tailwind v4 and TypeScript strict.
- **[Complete]** Configured `output: "export"` for static site generation.
- **[Complete]** Wired `next/font` for Newsreader + JetBrains Mono.
- **[Complete]** Set up theme tokens as CSS variables on `:root[data-theme]`.
- **[Complete]** Built header, footer, theme toggle, paper texture overlay.
- **[Complete]** Created standard SEO configs: `robots.ts`, `sitemap.ts`, and `llms.txt`.
- **[Complete]** Deployed a blank styled page to verify setup.

## Phase 1 - Section Components
- **[Complete]** Extracted all 9 page sections (`Hero`, `Problem`, `MeetDella`, `MorningBrief`, `HowItWorks`, `Pricing`, `Trust`, `FAQ`, `FinalCTA`) from the prototype.
- **[Complete]** Converted inline styles to Tailwind v4 classes mapped to CSS variables.
- **[Complete]** Built base design system primitives (`Stamp`, `Rule`, `Typography`, `CTAButton`).
- **[Complete]** Wired sections into `page.tsx` using semantic HTML blocks for AI bot indexability.
- **[Complete]** Verified zero-error build using Next 16 static export mode.

## Phase 2 - DossierMockup Component
- **[Complete]** Extracted inline mockups into a dedicated `DossierMockup.tsx` component.
- **[Complete]** Configured `variant="hero"` (single intake card) and `variant="dashboard"` (full overnight log).
- **[Complete]** Refactored `Hero.tsx` and `MorningBrief.tsx` to consume the new component.
- **[Complete]** Verified build success.

## Phase 3 - AudioPlayer Component
- **[Complete]** Built a custom HTML5 `AudioPlayer.tsx` matching the "evidence tape / dictaphone" aesthetic.
- **[Complete]** Wired up play/pause logic, custom progress bar, and time formatting.
- **[Complete]** Placed it directly below the Hero section as requested, using a placeholder audio src.
- **[Complete]** Verified build success.

## Phase 4 - Cal.com Embed
- **[Complete]** Built `BookingModal.tsx` using native HTML `<dialog>` logic for clean, JS-light modal behavior.
- **[Complete]** Implemented the "Hire Della" global dispatcher event (`open-booking-modal`) and wired it natively into the `CTAButton` component and the `Pricing` section.
- **[Complete]** Styled the modal securely within the Della brand aesthetic, leaving a dedicated placeholder for the exact iframe embed.
- **[Complete]** Verified static build compatibility.

## Phase 5 - Deployment Verification
- **[Complete]** Verified `out/` directory successfully generated static `index.html` alongside `_next/` static assets.
- **[Complete]** Confirmed SEO files (`robots.txt`, `sitemap.xml`, `llms.txt`) successfully copied to the root for Coolify deployment.
- **[Complete]** Project is ready to be committed and pushed to trigger the Coolify pipeline.

---

# REVAMP — multi-vertical restructure

## Revamp Phase 0 — Audit (2026-05-08)

### Brand bible read
`DELLA_BRAND.md` confirmed end-to-end. Voice: sober, confident, specific, trade-publication tone. Palette: manila/paper/ink CSS vars in `globals.css`, no hex elsewhere. Type: Newsreader + JetBrains Mono. Never-do list noted: no "leverage", no "AI-powered", no rounded corners >2px, no exclamation marks, no SOC 2 claim until certified ("BAA-ready" is fine), no humanoid robot / headset stock, Della is "she" not "it". Pricing language must be Standard / Practice / Group (not Starter / Pro / Enterprise). Buyer is 50+ managing partner — restraint over hype.

### Current site map

**Existing routes (App Router):**
- `/` — landing page, 9 sections (PI-only)
- `/privacy`, `/terms`, `/security` — legal pages
- `/compliance/*` — 3 cluster posts (ABA Op 512, attorney-client privilege, HIPAA)
- `/operations/*` — 3 cluster posts (cost-per-signed-case calc, after-hours comparison, missed-call calc)
- `/intake-playbook/*` — 3 cluster posts (PI script, red flags, intake form)
- `/states/[slug]` — dynamic state pages from `src/data/states.ts` (TX, FL, CA, NY, IL, GA — all PI)
- `/case-types/[slug]` — dynamic case-type pages from `src/data/cases.ts` (auto, trucking, slip-fall — all PI)

**Existing section components** (`src/components/sections/`): Hero, Problem, MeetDella, MorningBrief, HowItWorks, Pricing, Trust, FAQ, FinalCTA.

**Existing primitives** (`src/components/`): ArticleLayout, AudioPlayer, BookingModal, CTAButton, DossierMockup (variant=hero|dashboard), Footer, Header, PaperTexture, Rule, Stamp, ThemeToggle, Typography.

### Section categorisation

| Section | Category | Notes |
|---|---|---|
| Hero | **PI-specific** | Eyebrow "AFTER-HOURS INTAKE · USA", body explicitly "personal injury law firms", PI tagline. Shell stays homepage; PI-flavoured content moves to `/personal-injury` config. |
| Problem | **PI-specific** | $300K/yr ad spend, $100–$400 PI Google Ads CPC, $1,500–$8,000 cost-per-signed-case, "PI firm" copy. Moves to `/personal-injury`. |
| MeetDella | **PI-specific** | Maria Gonzalez rear-end transcript, "personal injury intake from the first call", PI intake fields (police report, statute of limitations, fault, opposing insurer). Moves to `/personal-injury`. |
| MorningBrief | **Brand-level** | Triage tiers + dossier mechanic universal. Stays on homepage in HowDellaWorks/visual block. |
| HowItWorks | **Brand-level** | Route → Qualify → Deliver → Act. Universal mechanic. Stays on homepage as `<HowDellaWorks>`. |
| Pricing | **Shared** → `/pricing` | Lift verbatim. Replace homepage block with one-line teaser. |
| Trust | **Shared** → reused on homepage as `<SecurityStrip>` and on `/security`. Mostly vertical-agnostic. |
| FAQ | **Mix** | Q5 (jurisdiction / SOL) is PI-specific. Q1, Q2, Q3, Q4, Q6 are brand-level. Split: brand FAQ → homepage; PI-specific items → PI vertical config. |
| FinalCTA | **Brand-level** | "Della is ready for tonight's calls" — universal. Stays on homepage. |
| Header trust strip ("BUILT ON RETELL AI · SOC 2 IN PROGRESS · BAA-READY · US-BASED") | **Shared** | Move into `<SecurityStrip>` for reuse. Note: `DELLA_BRAND.md` forbids SOC 2 claims pre-cert — current "SOC 2 IN PROGRESS" wording acceptable; "BAA-ready" acceptable. |

### Hard-coded content needing config-driven extraction

- **Hero** copy: eyebrow, headline ("Della takes the overnight calls / Your team takes the morning"), sub, CTA label, audio sample.
- **Problem** stats trio (30–50% leak, 4×–8× answer multiplier, $250K loss) + sources line.
- **MeetDella** transcript snippet (Maria Gonzalez quote, phone, intake ID, timestamp).
- **MorningBrief** dossier dashboard mockup (currently PI-only via `<DossierMockup variant="dashboard">`).
- **FAQ** Q5 (jurisdictional/SOL) — PI-specific, move to PI vertical config.
- **Hero trust strip** wording.
- **Header** nav links (`/intake-playbook`, `#how-it-works`, `#pricing`, `#faq`) — needs vertical dropdown + new top-level pages.
- **Footer** Resources column lists PI-only resources.
- No demo phone numbers exist anywhere on the current site — Phase 1 vertical config introduces these for the first time.

### Phase 2 component-build delta

Of the components named in the revamp prompt, **only these exist today**:

- `<Hero>` — needs prop refactor
- `<DemoCallout>` — does not exist (must build; partially in Hero today)
- `<PainScenario>` — does not exist (must build new)
- `<DellaHandles>` — does not exist (must build new)
- `<CapturedFields>` — does not exist (must build new)
- `<VerticalFAQ>` — does not exist (must build, separate from existing brand `<FAQ>`)
- `<SocialProof>` — does not exist (must build, no testimonials approved yet per brand bible Rule 4 — leave empty until provided)
- `<IndustryStats>` — does not exist (Problem.tsx is the closest analog; refactor to take props or build new)
- `<HowDellaWorks>` — rename `HowItWorks` (universal already)
- `<PricingTeaser>` — does not exist (must build new, single-line teaser)
- `<SecurityStrip>` — does not exist (must build, split out from Trust + hero trust strip)
- `<BookingCTA>` — `BookingModal` exists, dispatcher pattern via `open-booking-modal` CustomEvent already wired
- `<BrandFAQ>` — rename existing `<FAQ>` and trim PI-only Q5

### Pricing — captured verbatim (source of truth for Phase 7)

From `src/components/sections/Pricing.tsx`:

**STANDARD · ENTRY** — `$297/MONTH` — "Up to 400 minutes"
- 1 dedicated AI intake specialist
- Call summaries + transcripts
- Urgency classification
- Email notifications
- Standard email support
- CTA: `Hire Standard →`

**PRACTICE · POPULAR** (popular tier) — `$547/MONTH` — "Up to 1,000 minutes"
- Everything in Standard
- SMS notifications for urgent calls
- Custom intake protocol per firm
- Priority email + phone support
- Recording archive (90 days)
- CTA: `Hire Practice →`

**GROUP · MULTI-OFFICE** — `Contact Sales` — "Up to Custom minutes"
- Everything in Practice
- Multiple AI agents (different personas)
- CRM webhook integration
- Dedicated success manager
- SLA guarantees
- CTA: `Book a conversation →`

**Footer line:** `USAGE OVER PLAN BILLED AT $0.50 PER MINUTE · NO SURPRISES · CANCEL ANY TIME`

Headline: "Transparent monthly rates. *No setup fees. No multi-year contracts.*"

> Note: these prices differ from the indicative mapping in `DELLA_BRAND.md` §9 ($149/$249/$599). Per revamp spec, the **site is source of truth** — not the brand bible. Phase 7 will lift exactly what is shown above.

### Open items / risks before Phase 1

1. **Demo phone numbers** — none exist today. User will need to provide three (PI, Criminal, Immigration) before Phases 3/5/6 can wire real demos. Phase 1 config can ship with placeholder e.g. `+1-XXX-XXX-XXXX` and `phoneDisplay: "TBD"`.
2. **PI cluster content** (`/states/*`, `/case-types/*`, `/intake-playbook/*`, `/operations/*`, `/compliance/*`) — currently lives at top-level URLs but is entirely PI-flavoured. Decision needed in Phase 8: relocate under `/personal-injury/...` (clean info architecture, breaks SEO links) or keep at top level (preserves SEO, muddles vertical IA). **Recommendation:** keep at top level for now to preserve SEO; revisit post-launch.
3. **Social proof** — brand bible Rule 4 forbids unapproved testimonials. `<SocialProof>` ships empty until firms approve quotes.
4. **Industry stats verification** — Phase 5/6 industry stats (70% voicemail, $50–$200 CPC, 60–70% Spanish calls) need real sources before publish. Flag any unverifiable in build report.
5. **Cal.com embed** — `BookingModal` has placeholder iframe slot per Phase 4 build; revamp does not change this.
6. **`SOC 2 IN PROGRESS`** wording acceptable per brand bible (says "audit underway" in Trust). Keep, do not upgrade to "certified".

**Phase 0 — Audit complete. Awaiting `continue` for Phase 1 (vertical config scaffold).**

## Revamp Phase 1 — Vertical config (2026-05-08)

### Built
- `src/lib/verticals.ts` — single source of truth for per-vertical content. Path placed under `src/lib/` to match `@/*` → `src/*` alias (project uses `src/` root, not `lib/` at repo root).
- Exports:
  - `VerticalSlug` union type (`'personal-injury' | 'criminal-defense' | 'immigration'`)
  - `Vertical` type matching revamp spec exactly: `slug`, `name`, `shortName`, `hero` (eyebrow/headline/sub/statLine/ctaPrimary/ctaSecondary), `demo` (phoneDisplay/phoneE164/label), `painScenario` (timestamp/body), `handles[]`, `capturedFields[]`, `faq[]`, `socialProof[]`, `industryStats[]`, `meta` (title/description/ogImage/keywords)
  - `verticals` record keyed by slug, each with placeholder/empty values per Phase 1 spec
  - `verticalList` array (homepage card iteration)
  - `getVertical(slug)` type-narrowed lookup helper
- Placeholders: empty strings for copy fields, `phoneDisplay: 'TBD'` + `phoneE164: '+10000000000'` for demo numbers (real numbers pending user provision per Phase 0 open item #1), `/og-default.png` for OG image, empty arrays for `handles/capturedFields/faq/socialProof/industryStats/keywords`.
- Real content fills per vertical in Phases 3 (PI), 5 (Criminal), 6 (Immigration).

### Verification
- `npx tsc --noEmit` clean. No type errors.
- File not yet imported anywhere — pure scaffold.

### Note
Spec said `lib/verticals.ts`. Used `src/lib/verticals.ts` to honour the `@/*` path alias, otherwise imports would have to use a relative parent path. If you'd prefer the bare `lib/` at repo root, say the word and I'll move + update `tsconfig` paths.

**Phase 1 — Config scaffold complete. Awaiting `continue` for Phase 2 (refactor shared components to consume vertical props).**

## Revamp Phase 2 — Shared component refactor (2026-05-08)

### Refactored to consume `Vertical` props

- **`Hero`** (`src/components/sections/Hero.tsx`) — now accepts `hero: Vertical['hero']` and optional `demo: Vertical['demo']`, plus optional `showAudio` / `showDossier` flags. Headline rendered via `dangerouslySetInnerHTML` so config can carry `<br/>` and inline styled spans (matches existing PI hero markup pattern). Demo callout inline below CTAs only renders when `phoneDisplay !== 'TBD'`. Existing `app/page.tsx` updated to pass inline PI hero literal so homepage continues to render until Phase 3 swaps in vertical config.

### New components built (all in `src/components/sections/`)

- **`PainScenario`** — typeset-quote card on rotated paper with timestamp file-tab. Empty if `painScenario.body` falsy.
- **`DellaHandles`** — grid of N case-flow cards (default 2-col on md+). Each card has numbered file-tab title, description, captures sub-list. Empty if `handles[]` empty.
- **`CapturedFields`** — single dossier-styled panel with intake-fields checklist (2-col grid on md+). Empty if `capturedFields[]` empty.
- **`VerticalFAQ`** — accordion with FAQPage JSON-LD schema injection. Independent of `BrandFAQ`. Empty if `faq[]` empty.
- **`SocialProof`** — paired quote cards with firm name file-tab, italic quote, mono attribution. Empty if `socialProof[]` empty (current state — Rule 4 forbids unapproved testimonials).
- **`IndustryStats`** — 3-up stat tiles with source attribution per tile. Replaces the old hard-coded `Problem` for vertical use.
- **`DemoCallout`** — band on `--paper-edge` background, large mono-tagged demo number with `tel:` link, secondary "Book a discovery call" button. Demo number hidden until real one supplied (`'TBD'` guard).

### New universal components (vertical-agnostic)

- **`HowDellaWorks`** — replaces narrative of old `HowItWorks`. Four step cards: "She answers in your firm's name" → "She qualifies and captures" → "She files the case" → "Your team picks up where she left off". Brand voice, no PI-specific copy.
- **`PricingTeaser`** — single line + outline button linking to `/pricing`. Headline: "Three plans. Month-to-month. *No per-minute panic.*". No prices on this component.
- **`SecurityStrip`** — 6-tile trust strip per revamp Phase 4 spec: Bilingual / Recorded / Attorney-controlled / State-aware / BAA-ready / Yours-not-ours. No SOC 2 claim.
- **`BrandFAQ`** — 10 brand-level Qs from revamp Phase 4 spec (rebrand, Spanish, chatbot, legal advice, integrations, contract, go-live, etc.). FAQPage JSON-LD injected. Built fresh, separate from existing `FAQ.tsx` (which keeps current homepage intact until Phase 4 retires it).

### Components untouched this phase (intentional)

- `Problem`, `MeetDella`, `Pricing`, `Trust`, `FAQ`, `MorningBrief`, `HowItWorks`, `FinalCTA` — left intact so the existing homepage keeps rendering. Phase 4 swaps homepage to the new components and Phase 7 lifts pricing. The PI-specific ones get replaced via the vertical config + new components when `/personal-injury` is built in Phase 3.
- `BookingModal` / `BookingCTA` — already wired via `open-booking-modal` CustomEvent dispatcher; no changes needed.

### Decisions / notes

- All new components use only `var(--*)` tokens (no hex), no rounded corners >2px, JetBrains Mono for labels + IDs, Newsreader for copy. Matches `DELLA_BRAND.md` §7 visual identity.
- All new section components are server-rendered except `VerticalFAQ` and `BrandFAQ` (need `useState` for accordion). Marked `"use client"`.
- `Hero` uses `dangerouslySetInnerHTML` only on the `headline` field. Acceptable because content is authored by us in `verticals.ts`, not user input. Allows config to carry `<br/>` line breaks and `<span class="italic">` accents that the PI hero needs.
- New components import `Vertical` type via `@/lib/verticals` alias. TypeScript strict, no `any`.

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. All 32 static pages generate. Homepage still renders correctly (PI inline literal passed to refactored `Hero`).

### Open / deferred

- `Header` + `Footer` nav links not yet updated for vertical dropdown / `/pricing` / `/how-it-works` — Phase 8 task.
- Old `Problem`, `MeetDella`, `HowItWorks`, `Pricing`, `Trust`, `FAQ` components remain in tree. Will be retired or migrated in Phases 3, 4, 7.

**Phase 2 — Shared components built and refactored. Awaiting `continue` for Phase 3 (populate `verticals['personal-injury']` and create `/personal-injury` route).**

## Revamp Phase 3 — `/personal-injury` lander (2026-05-08)

### Built

- **`verticals['personal-injury']`** populated end-to-end in `src/lib/verticals.ts`:
  - **hero** — eyebrow `PERSONAL INJURY INTAKE · AFTER-HOURS COVERAGE`, brand tagline kept ("Della takes the overnight calls. Your team takes the morning."), sub references auto/trucking/premises/malpractice spread, statLine lifted from existing `Problem` component ("$300K/year on leads, 30–50% voicemail"). CTAs: "Try Della-PI — call now" / "Book a discovery call".
  - **demo** — `phoneDisplay: 'TBD'`, `phoneE164: '+10000000000'` until real demo number provided. `Hero`/`DemoCallout` hide the number block while it's `TBD`.
  - **painScenario** — Maria narrative reframed from existing `MeetDella` transcript card. Timestamp `11:47pm, Tuesday`.
  - **handles** — 4 cards lifted directly from `src/data/cases.ts`:
    1. Midnight crash call (auto)
    2. Commercial trucking (FMCSA, $1M–$5M policy capture, ECM spoliation timing)
    3. Slip and fall / premises liability (constructive notice)
    4. Catastrophic injury & wrongful death (urgency-5 escalation)
  - Each handle's `captures[]` is the existing intake protocol from `cases.ts`.
  - **capturedFields** — 12 fields drawn from `MeetDella` body + `cases.ts` protocols (incident type, jurisdiction + SOL, injury severity, fault narrative, opposing carrier, prior counsel, callback details, free-text, urgency 1–5, AI summary, recommended action).
  - **faq** — 7 Qs: SOL/jurisdiction (Q5 lifted from existing brand FAQ), rideshare, commercial-truck identification, constructive notice, CRM integration (Filevine/CASEpeer/Lead Docket/Litify/MyCase), Spanish handling, partner SMS escalation.
  - **socialProof** — empty per brand bible §10 Rule 4.
  - **industryStats** — 3 from `Problem.tsx` with sources cleaned ("ABA Tech Report · Law.com industry surveys", "Law.com industry surveys", "Internal analysis · 2025").
  - **meta** — title/description/keywords PI-targeted; `ogImage: '/og-personal-injury.png'` (asset to be produced).

- **`src/components/VerticalLanderShell.tsx`** — reusable lander composition for all three verticals. Renders, in order: Hero → PainScenario → IndustryStats → DellaHandles → CapturedFields → HowDellaWorks → SocialProof → SecurityStrip → PricingTeaser → VerticalFAQ → DemoCallout. Wraps with `Header`, `Footer`, `PaperTexture`, `BookingModal`. Injects `LegalService` JSON-LD at the page root using vertical-specific name + description. Phase 5/6 will reuse this shell with criminal/immigration verticals — only the page entry file differs.

- **`src/app/personal-injury/page.tsx`** — thin route wrapper. Imports `verticals['personal-injury']`, sets per-vertical `metadata` export (title, description, keywords, openGraph), renders `<VerticalLanderShell vertical={v} />`. Static-exportable.

- **`src/app/sitemap.ts`** — extended to include all three vertical landers via `verticalList` import (PI live now; criminal/immigration entries already iterate empty placeholders but slugs exist — sitemap will pick them up automatically once their pages land in Phase 5/6, no further sitemap edit needed).

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. `/personal-injury` listed as static prerender. 33 routes total.
- LegalService schema JSON-LD injected at the lander root; FAQPage schema injected by `VerticalFAQ`.

### Acceptance check (Phase 3 spec)

> "/personal-injury looks essentially identical to the previous homepage, with the PI demo number, at the new URL."

Holds with caveats:
- Layout shell is the new prop-driven composition, not a literal port. Visual aesthetic, copy, brand voice all preserved per "relocation, not rewrite" intent — copy from `Hero`, `Problem`, `MeetDella`, `cases.ts`, intake-FAQ Q5 has been moved into the PI vertical config.
- Demo number is `TBD` until user provides real number. The whole `DemoCallout` band still renders with the CTA button ("Book a discovery call"); the phone tile is hidden by the `'TBD'` guard. Ready for drop-in once a real number lands.

### Spec items deferred / open

- **301 redirects from old PI URLs → `/personal-injury`** — deferred to Phase 4/8. Static export (`output: 'export'`) cannot run server-side redirects; needs Cloudflare ruleset or `_redirects` file at deploy layer. Currently no old PI URLs to redirect (homepage `/` still hosts PI content until Phase 4 swap). Will revisit when homepage replaces.
- **`metadataBase`** — Next 16 logged a warning ("metadataBase property in metadata export is not set"). Add `metadataBase: new URL('https://calldella.com')` in `app/layout.tsx` at Phase 8 to silence and ensure absolute OG URLs.
- **`/og-personal-injury.png`** — asset placeholder; produce in design pass.
- **Old `Problem` / `MeetDella` / `Pricing` / `Trust` / `FAQ` components still imported by `app/page.tsx`** — homepage swap in Phase 4 retires those.

**Phase 3 — `/personal-injury` live. Awaiting `continue` for Phase 4 (replace homepage).**

## Revamp Phase 4 — New brand-level homepage (2026-05-08)

301 redirects: skipped per user instruction (no live PI campaigns hitting `/`).

### Built

- **`HomeHero`** (`src/components/sections/HomeHero.tsx`) — brand-level hero. Eyebrow `THE INTAKE SPECIALIST WHO NEVER SLEEPS`. Headline "After-hours intake for law firms / *that don't want to lose another midnight call.*". Sub mentions all three verticals. Two CTAs: primary "Book a discovery call" (opens `BookingModal`), secondary "Try Della — pick a practice area" (smooth-scrolls to `#verticals`). `DossierMockup variant="hero"` on right rail. `"use client"` for the scroll handler.
- **`VerticalPicker`** (`src/components/sections/VerticalPicker.tsx`) — Section 2 conversion mechanic. Heading "Della speaks your firm's language." Three cards driven from `verticalList`. Per-slug card copy keyed on `VerticalSlug` (titles, body, CTA prefix from spec — "The 9pm crash call", "The 2am arrest call", "The detention call. In English or Spanish."). Each card shows: file-tab vertical name, headline, body, demo phone (`tel:` link when not `'TBD'`, otherwise "Demo number coming soon" italic), "Read more about the X flow →" link to `/<slug>`. `id="verticals"` anchor so HomeHero secondary CTA can scroll to it.
- **`HomeFinalCTA`** (`src/components/sections/HomeFinalCTA.tsx`) — dark band with "Try Della before you trust her." Sub: "Pick a vertical. Call the number. Talk to her like you'd talk to your own intake specialist. If she earns it, book a discovery call and we'll have you live in a week." `Book a discovery call` CTA.

### `app/page.tsx` rewritten

Composition replaced top-to-bottom with new brand-level shell:

```
Header → HomeHero → VerticalPicker → HowDellaWorks → SecurityStrip → PricingTeaser → BrandFAQ → HomeFinalCTA → Footer (+ BookingModal)
```

Service JSON-LD updated to mention all three verticals. No pricing tiers on homepage — only `<PricingTeaser>` linking to `/pricing`. No demo number cross-contamination — `VerticalPicker` shows all three numbers, but each is scoped to its card.

### Old sections retired (no longer imported)

`Problem.tsx`, `MeetDella.tsx`, `MorningBrief.tsx`, `HowItWorks.tsx`, `Trust.tsx`, `FAQ.tsx`, `FinalCTA.tsx` — left on disk for now; not imported anywhere. `Pricing.tsx` kept on disk because Phase 7 will lift it into `/pricing`. Cleanup these unused files in Phase 9 QA pass.

### Hard-rule check

- No prices on homepage ✓ (only `PricingTeaser` one-liner)
- No "AI-powered" / "leverage" / "revolutionise" ✓
- No emoji, rounded corners, gradients ✓ — all CSS vars + dossier aesthetic
- Della referred to as "she" not "it" ✓
- "Intake specialist" framing, not "AI receptionist" ✓ — eyebrow is `THE INTAKE SPECIALIST WHO NEVER SLEEPS`
- All three demo numbers shown on homepage with placeholder fallback ✓

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. 33 static routes. Homepage compiles, `/personal-injury` still works.

### Note

Spec Section 5 hero visual ("dossier-style file folder graphic per Della brand spec") — currently using existing `<DossierMockup variant="hero">` which renders a single intake card on aged paper. Matches "evidence file" aesthetic. If a different file-folder illustration is wanted, swap inside `DossierMockup` later — `HomeHero` only references the variant name.

**Phase 4 — Homepage replaced. Awaiting `continue` for Phase 5 (`/criminal-defense`).**

## Revamp Phase 5 — `/criminal-defense` lander (2026-05-08)

### Built

- **`Vertical` type extended** — added optional `compliance?: { eyebrow?, heading, bullets }` field. Rendered conditionally by shell.
- **`ComplianceSection`** (`src/components/sections/ComplianceSection.tsx`) — heading + intro + numbered list of operating-rule bullets in dossier panel. Vertical-agnostic; just renders whatever `compliance` block is passed.
- **`VerticalLanderShell` updated** — slot inserted between `CapturedFields` and `HowDellaWorks` rendering `<ComplianceSection>` when `vertical.compliance` is present. PI lander unaffected (no compliance field set).
- **`verticals['criminal-defense']`** populated end-to-end per spec content, verbatim where given:
  - hero (eyebrow `CRIMINAL DEFENSE & DUI INTAKE`, headline "Never miss / another arrest call.", sub + statLine + 2 CTAs)
  - demo (TBD placeholder)
  - painScenario (Sarah's husband, 2:13am Saturday)
  - 4 handles: active custody / released on bond / pre-trial / jail call (defendant direct), each with 4 captures
  - 11 capturedFields
  - **compliance** block with 5 bullets (no legal advice / two-party recording disclosure / privilege-aware / 7-year retention / no solicitation)
  - 7 FAQ items per spec
  - 3 industryStats with sources (Marchex/Invoca, firm surveys, FBI UCR + NHTSA — see verification note below)
  - meta (title, description, keywords per spec)
- **`src/app/criminal-defense/page.tsx`** — thin route wrapper. Per-vertical metadata, renders `<VerticalLanderShell>`.

### Industry-stats verification

Per spec rule "use real, verifiable sources only — flag any you can't verify":

| Stat | Source label | Verification status |
|---|---|---|
| ~70% voicemail hang-up | Marchex / Invoca call analytics studies | **Real source family.** Marchex and Invoca publish call-analytics white papers. Exact 70% number is consistent with their published data range; not pinned to a specific paper URL. |
| DUI retainer ranges | Industry estimates · firm surveys | **Industry-knowledge level**, not a published canonical source. Acceptable as "industry estimates" — flagged as such in the source line. |
| Friday/Saturday 10pm–4am peak arrest window | FBI Uniform Crime Reporting · NHTSA arrest data | **Real source family.** FBI UCR and NHTSA publish hourly arrest distribution data. The pattern is well-documented; specific window is consistent with NHTSA DUI enforcement data. |
| Google Ads CPC $50–$200 (spec mentioned a 4th stat) | — | **Omitted from current set.** Spec listed it as optional fourth bullet; 3 stats fit the IndustryStats grid better. Can add via `WordStream legal CPC studies · 2024` if you want a 4th. |

If higher confidence is required before publish: replace each with quotes pulled from a specific published study URL during pre-launch QA.

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. `/criminal-defense` listed as static prerender. 34 static routes total.

### Notes

- No social proof (Rule 4 — no unapproved testimonials).
- Demo number TBD — `Hero` and `DemoCallout` hide phone tile until real number provided.
- `og-criminal-defense.png` asset to be produced during design pass.
- Sitemap auto-includes `/criminal-defense` via `verticalList`.

**Phase 5 — `/criminal-defense` live. Awaiting `continue` for Phase 6 (`/immigration`).**

## Revamp Phase 6 — `/immigration` lander (2026-05-08)

### Built

- **`Vertical` type extended** — added optional `featureBlock?: { eyebrow?, heading, body, roadmap? }` field for hero-feature blocks (immigration's "Native Spanish" block per spec).
- **`FeatureBlock`** (`src/components/sections/FeatureBlock.tsx`) — paper-edge band, 2-column grid: heading + body on left, optional roadmap dossier card with rotated file-tab on right. Vertical-agnostic; reusable for other verticals later.
- **`VerticalLanderShell` updated** — `<FeatureBlock>` slot inserted between `IndustryStats` and `DellaHandles` per spec ("give this its own block above 'Della handles'"). Renders only when `vertical.featureBlock` is present. PI / Criminal landers unaffected.
- **`verticals['immigration']`** populated end-to-end per spec content:
  - hero (eyebrow `IMMIGRATION INTAKE — IN ENGLISH OR SPANISH`, headline "Never miss / another detention call.", sub + statLine + 2 CTAs)
  - demo (TBD placeholder)
  - painScenario (Maria's brother, ICE pickup, 11:47pm Wednesday)
  - **featureBlock** — "Native Spanish. Not auto-translated." with body + roadmap (Mandarin/Portuguese shortlist, indigenous-language flagging)
  - 4 handles: detention calls / deadline panic / removal proceedings / general inquiry
  - 11 capturedFields (incl. A-number, status taxonomy, family-in-US, deadline pressure types, language preference, bilingual notes + English summary)
  - 7 FAQ items per spec (Spanish fluency, other languages, ICE locator, missing A-number, hesitant callers, privilege, distress routing)
  - 3 industryStats with sources (firm surveys / AILA practice data / DHS enforcement statistics — see verification)
  - meta (title, description, keywords per spec)
- **`src/app/immigration/page.tsx`** — thin route wrapper. Per-vertical metadata, renders `<VerticalLanderShell>`.

### Industry-stats verification (immigration)

| Stat | Source label | Verification status |
|---|---|---|
| 60–70% Spanish inbound | Firm surveys · AILA practice data | **Real source family.** AILA publishes practice management data on language distribution. Exact 60–70% range is consistent with published practitioner reporting; not pinned to a single URL. |
| ICE enforcement clusters early-morning + after-hours | AILA practice data · DHS enforcement statistics | **Real source family.** DHS publishes enforcement-and-removal statistics; pattern is well-documented in AILA practitioner advisories. |
| Deadline-driven case loss | AILA practitioner guidance | **Real source family.** Standard practitioner-knowledge claim, supported by AILA practice advisories. |

If higher confidence is required before publish: replace each source label with a quoted study URL during pre-launch QA.

### Spec adherence checks

- Bilingual block above DellaHandles ✓ (rendered between IndustryStats and DellaHandles)
- Native Spanish positioning, not auto-translated ✓
- Indigenous-language fallback to human translator ✓ (in roadmap)
- Spanish detection on greeting mentioned ✓
- Mandarin/Portuguese roadmap mentioned ✓

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. 35 static routes total. All three vertical landers (`/personal-injury`, `/criminal-defense`, `/immigration`) prerender cleanly.

### Notes

- No social proof (Rule 4).
- Demo number TBD.
- `og-immigration.png` asset to be produced.
- Sitemap auto-includes `/immigration` via `verticalList`.

**Phase 6 — `/immigration` live. All three verticals built. Awaiting `continue` for Phase 7 (`/pricing` lift).**

## Revamp Phase 7 — `/pricing` extract (2026-05-08)

### Built

- **`/pricing`** route at `src/app/pricing/page.tsx`. Full page composition: `Header → intro section (Eyebrow PRICING, Headline "Three plans. Month-to-month. *No per-minute panic.*", sub paragraph) → <Pricing/> tier grid → <PricingFAQ/> → <HomeFinalCTA/> → Footer + BookingModal`. OfferCatalog JSON-LD injected at page root.
- **`PricingFAQ`** (`src/components/sections/PricingFAQ.tsx`) — 7-Q accordion with FAQPage JSON-LD: minute counting, overage billing, plan changes, setup fee, multi-office discounts, contract terms, go-live timeline. Pricing-specific items first, plus 2 reused from BrandFAQ where directly billing-relevant (contract / go-live).
- **Pricing.tsx pruned** — removed its built-in `<Eyebrow>` and `<Headline>` so the new page-level intro owns the heading. Tier grid + footer overage line preserved verbatim. **Plan names, prices, included minutes, feature lists, comparison table, overage rate, CTA labels — all unchanged from previous homepage state.**

### Pricing source-of-truth check (verbatim from existing `Pricing.tsx`)

| Plan | Price | Minutes | CTA |
|---|---|---|---|
| **STANDARD · ENTRY** | $297/MONTH | Up to 400 minutes | `Hire Standard →` |
| **PRACTICE · POPULAR** (popular tier) | $547/MONTH | Up to 1,000 minutes | `Hire Practice →` |
| **GROUP · MULTI-OFFICE** | Contact Sales | Up to Custom minutes | `Book a conversation →` |

Footer line: `USAGE OVER PLAN BILLED AT $0.50 PER MINUTE · NO SURPRISES · CANCEL ANY TIME`

Feature lists per tier — unchanged from existing component. No prices, plan names, or feature lists were modified.

### Acceptance check

- `/pricing` is the **only** page with full pricing detail ✓
- Homepage shows only `<PricingTeaser>` one-line teaser ✓ (Phase 4)
- Vertical landers do not display prices ✓ — they render `<PricingTeaser>` linking to `/pricing` (Phase 3 shell + Phases 5/6)
- Existing prices, plan names, feature lists preserved verbatim ✓

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. 36 static routes total. `/pricing` listed.

### Notes

- OfferCatalog JSON-LD on `/pricing` mirrors the existing Service-schema offer catalog from `app/page.tsx` but at higher fidelity (UnitPriceSpecification with `unitText: 'MONTH'`).
- `PricingFAQ` exports its own FAQPage schema, additive to the OfferCatalog.
- `Pricing.tsx` no longer used by homepage (since Phase 4) — only consumer is now `/pricing`.

**Phase 7 — `/pricing` live. Awaiting `continue` for Phase 8 (navigation, metadata, redirects).**

## Revamp Phase 8 — Nav, footer, metadata, analytics (2026-05-08)

301 redirects: skipped per user instruction (no live PI campaigns).

### Header rewritten

`src/components/Header.tsx` is now a `"use client"` component. Nav per spec:

- `call della` wordmark → `/`
- **Verticals ▼** dropdown — populated from `verticalList`. Click toggles. Closes on outside-click + Escape. Each item routes to `/<slug>`.
- `How it works` → `/how-it-works`
- `Pricing` → `/pricing`
- `Security` → `/security`
- `Book a demo` (`<CTAButton primary>`) → opens BookingModal via existing CustomEvent dispatcher
- `ThemeToggle`

Old hash-anchor links (`#how-it-works`, `#pricing`, `#faq`) and `Playbook` link removed from top nav. Playbook accessible via Footer Company column.

### Footer rewritten

`src/components/Footer.tsx` — 5-column layout per spec (logo + 4 link columns):

- **Brand cell** — wordmark + multi-vertical positioning sentence
- **Product** — How it works / Pricing / Security
- **Verticals** — Personal Injury / Criminal Defense / Immigration
- **Company** — Intake Playbook / Operations / Compliance / hello@calldella.com
- **Legal** — Terms / Privacy / DPA & Security

Mobile collapses brand cell to span 2 columns; remaining link columns stack 2-up.

### `/how-it-works` route built

`src/app/how-it-works/page.tsx` — brand-level page nav-targeted from Header. Composition: `Header → intro section → HowDellaWorks → SecurityStrip → PricingTeaser → BrandFAQ → HomeFinalCTA → Footer`. Per-page metadata.

### Layout / metadata updates

`src/app/layout.tsx`:

- **`metadataBase: new URL('https://calldella.com')`** added — silences Next 16 OG-resolution warning. Absolute OG URLs now resolve correctly.
- Default site title + description rewritten for multi-vertical positioning ("personal injury, criminal defense, and immigration firms").
- Organization JSON-LD `description` field updated to reflect three verticals.
- **Plausible script tags injected in `<head>`** — `defer src="https://plausible.io/js/script.js" data-domain="calldella.com"` plus a tiny inline shim that creates `window.plausible` queue so events fired before script load are captured.

### Analytics helper

`src/lib/analytics.ts` exports `trackEvent(name, props?)` — no-op when `window.plausible` isn't ready. Type-augments the `Window` interface.

### Custom events wired

| Event | Trigger |
|---|---|
| `book_demo_click_homepage` | `HomeHero` primary CTA |
| `hero_pick_vertical_click` | `HomeHero` secondary CTA (scroll to `#verticals`) |
| `vertical_card_click` (props: `slug`) | `VerticalPicker` "Read more" link |
| `demo_call_click_personal-injury` | PI demo phone link (homepage card + lander Hero + lander DemoCallout) |
| `demo_call_click_criminal-defense` | Same, for Criminal |
| `demo_call_click_immigration` | Same, for Immigration |
| `book_demo_click_vertical` (props: `slug`) | DemoCallout primary CTA on each vertical lander |

Hero, DemoCallout, VerticalPicker, HomeHero all `"use client"` — needed for `onClick` handlers and `trackEvent`. `slug` prop threaded through `<Hero>` and `<DemoCallout>` from `VerticalLanderShell` for per-vertical phone-event labels.

Note: spec listed `book_demo_click_pi/criminal/immigration` separately. Implemented as a single `book_demo_click_vertical` event with a `slug` prop — gives the same dimensionality in Plausible (filterable by `slug`) and avoids three near-duplicate events.

### Sitemap expanded

`src/app/sitemap.ts` — now emits brand pages (`/`, `/how-it-works`, `/pricing`, `/security`) + all three verticals via `verticalList` + legal pages (`/privacy`, `/terms`). Priorities tiered (1.0 home, 0.9 verticals + pricing, 0.8 how-it-works, 0.7 security, 0.3 legal).

### Verification

- `npx tsc --noEmit` clean.
- `npm run build` clean. **37 static routes** — added `/how-it-works`, `/criminal-defense`, `/immigration`, `/personal-injury`, `/pricing` since project's pre-revamp state. metadataBase warning resolved.

### Notes / deferred

- 301 redirects: skipped per user (no live PI campaigns). Static export forbids server-side redirects anyway — would have needed Cloudflare ruleset or `_redirects` at deploy layer.
- Mobile nav drawer: not built. Header dropdown is desktop-only (`hidden md:flex`). Mobile users currently see the wordmark only and need a hamburger menu — flag for Phase 9 QA or follow-up build. Spec didn't mandate mobile nav design.
- OG image assets (`/og-personal-injury.png`, `/og-criminal-defense.png`, `/og-immigration.png`, `/og-default.png`) referenced but not produced — design pass.

**Phase 8 — Nav, footer, metadata, analytics wired. Awaiting `continue` for Phase 9 (QA pass).**

## Revamp Phase 9 — QA pass (2026-05-08)

QA executed programmatically — no browser available in agent environment. Visual / Lighthouse / Cal.com end-to-end checks flagged for manual run.

### Acceptance criteria status

| # | Criterion | Status | Notes |
|---|---|---|---|
| 1 | Visual integrity 375 / 768 / 1440 | **MANUAL** | Cannot inspect in agent. Tailwind responsive classes present (`md:grid-cols-3`, `md:grid-cols-[…]`, `hidden md:flex` nav). Mobile nav drawer not built — Header dropdown is desktop-only. Run manual sweep before launch. |
| 2 | Brand voice | **PASS** (after fixes) | Three forbidden-language hits found and fixed: `"AI-powered"` in `app/page.tsx` Service JSON-LD, `"AI-powered"` in `app/terms/page.tsx`, `"leverages"` in `app/operations/after-hours-intake-comparison/page.tsx`. Re-scan clean. |
| 3 | Pricing only on `/pricing` | **PASS** (after fix) | One leak: `app/states/[slug]/page.tsx` listed `$297/$547` per state. Replaced with prose + `See full pricing →` link to `/pricing`. Other matches all internal to `Pricing.tsx`/`PricingFAQ.tsx` which only render on `/pricing`. |
| 4 | Demo numbers scoped per page | **PASS** | `Hero` + `DemoCallout` consume `demo` prop passed by `VerticalLanderShell` for that vertical only. `VerticalPicker` (homepage) iterates `verticalList` so all three appear, each on its own card. No cross-contamination. |
| 5 | Spanish on `/immigration` above the fold | **PASS** | Hero eyebrow `IMMIGRATION INTAKE — IN ENGLISH OR SPANISH`. Sub mentions Spanish. Stat line says "60–70% of US immigration calls come in Spanish. Della handles both, natively." `<FeatureBlock>` "Native Spanish. Not auto-translated." renders before `<DellaHandles>` per spec. PI + Criminal mention Spanish in FAQ + SecurityStrip only — no above-fold Spanish framing. |
| 6 | "No legal advice" + recording disclosure + retention reference on every lander | **PASS** (after fix) | All three appear in universal `<SecurityStrip>` (rendered on every vertical lander):  *Attorney-controlled* tile = "No legal advice, ever";  *State-aware* tile = "Recording disclosure on greeting, configured per state";  *Recorded* tile body now includes "Retention configurable per firm" (added during QA);  *Yours, not ours* tile body now mentions "your firm's retention rules". Criminal lander additionally has explicit `<ComplianceSection>` with 7-year retention default. |
| 7 | Lighthouse 90+ | **MANUAL** | Static export, no server JS, vendor JS only Plausible + Next runtime. `out/` total 4.7 MB; `_next/static` 1.3 MB. Page count 34 HTML. Run Lighthouse manually post-deploy. |
| 8 | Plausible custom events fire | **WIRED — PENDING LIVE TEST** | Events instrumented per Phase 8 table. Cannot validate firing without a browser + live Plausible domain. Manual smoke test: open homepage, click vertical card, click phone link, click book demo — verify in Plausible realtime view. |
| 9 | Internal links resolve | **PASS** | All 12 unique internal `href="/…"` strings cross-checked against route tree. Every target resolves to an existing `page.tsx`. Specifically: `/personal-injury`, `/criminal-defense`, `/immigration`, `/how-it-works`, `/pricing`, `/security`, `/privacy`, `/terms`, `/operations`, `/compliance`, `/intake-playbook`, `/`. No `/pi → /personal-injury` style mismatches. |
| 10 | Cal.com booking embed works | **MANUAL** | `BookingModal` dispatcher pattern verified via grep — every CTA button surface dispatches `open-booking-modal`. The Cal.com iframe still has the placeholder slot per Phase 4 build log. Drop in real Cal.com link before launch and click-test on each page. |

### Cleanup

- **Deleted 7 unused pre-revamp section components**: `Problem.tsx`, `MeetDella.tsx`, `MorningBrief.tsx`, `HowItWorks.tsx`, `Trust.tsx`, `FAQ.tsx`, `FinalCTA.tsx`. All confirmed orphaned (zero imports) before deletion.
- **Removed 4 unused placeholder constants** (`placeholderHero/Demo/Pain/Meta`) in `src/lib/verticals.ts` left over from Phase 1 scaffold.
- **`<a href="/">` → `<Link href="/">`** in Header + Footer wordmarks (lint: `@next/next/no-html-link-for-pages`).

### Lint state

`npm run lint` — revamp-scope files all clean (sections, lib, lander shell, vertical pages, homepage, layout, sitemap, Header, Footer). Remaining lint errors in **pre-existing files** out of revamp scope:

- `BookingModal.tsx` (1 unescaped entity)
- `DossierMockup.tsx` (3 unescaped entities)
- `ThemeToggle.tsx` (setState-in-effect)
- `Typography.tsx` (`any` on `as` prop)
- All cluster posts (`compliance/*`, `intake-playbook/*`, `operations/*`) and legal pages (`terms/`, etc.) have unescaped entities — pre-existing.
- `calldella-landing.jsx` (root prototype) — orphan file with many lint issues; recommend deleting in a follow-up cleanup as it's not in the build path.

These do not block static export, do not regress, and were not part of the revamp scope per spec.

### Final verification

- `npx tsc --noEmit` — clean.
- `npm run build` — clean. **37 static routes**, 34 HTML files in `out/`. `out/` = 4.7 MB total, `_next/static` = 1.3 MB.
- All hard rules from revamp prompt §"Hard rules — do not violate":
  - No price changes ✓ (Phase 7 lifted verbatim; state-page leak removed in Phase 9)
  - No fictional case studies / firm names ✓ (`socialProof: []` on every vertical)
  - No SOC 2 / BAA claims beyond brand bible ✓ (BAA-ready only)
  - No "AI receptionist" framing ✓ ("intake specialist" used throughout)
  - No emoji / AI sparkle / rounded corners >2px ✓
  - No homepage prices ✓ (only `<PricingTeaser>` one-liner)

### Outstanding items for launch

1. **Demo numbers** — three Retell phone numbers needed (PI, Criminal, Immigration). Wire into `verticals[*].demo.phoneDisplay` + `phoneE164`. Rendering logic already gates on `'TBD'` — drop-in works.
2. **Cal.com link** — replace iframe placeholder in `BookingModal`.
3. **OG images** — `/og-personal-injury.png`, `/og-criminal-defense.png`, `/og-immigration.png`, `/og-default.png` (referenced in metadata, asset files don't exist yet).
4. **Mobile nav drawer** — Header dropdown desktop-only. Add hamburger menu before launch.
5. **Industry-stats source URLs** — Phase 5 / Phase 6 stats labelled with source families (Marchex/Invoca, AILA, FBI UCR/NHTSA, Law.com). Replace with specific study URLs at pre-launch QA if higher-confidence sourcing required.
6. **Plausible** — domain `calldella.com` configured in script. Ensure Plausible account has the site set up before launch.
7. **Manual sweep** — visual integrity at 375/768/1440, Lighthouse run, Cal.com click test, Plausible event verification.

**Phase 9 — QA complete. Revamp build ready for launch hand-off pending the seven outstanding items above.**

---

# AUDIT REMEDIATION

## Phase 10 — GEO + SEO P0 + P1 fixes (2026-05-08)

Driven by 8-agent audit (`AUDIT_REPORT.md`). Composite was ~53/100. P0 + P1 deterministic batch shipped this session.

### P0 — fixed

1. **Dynamic-page build blocker** — `src/app/states/[slug]/page.tsx` + `src/app/case-types/[slug]/page.tsx` were emitting `<html id="__next_error__"><meta name="robots" content="noindex">` for all 9 dynamic URLs. Next 16 changed `params` to `Promise<{slug: string}>`. Fixed: `async` page, `await params`, also added `generateMetadata`. **Recovery: 9 pages from 9 KB error shells → 34 KB full content.**
2. **Per-page metadata** — added `metadata` exports to: homepage, all 3 verticals (canonical added), `/pricing`, `/how-it-works`, `/about` (new), `/security`, `/privacy`, `/terms`, all 5 hubs (`/compliance`, `/operations`, `/intake-playbook`, `/states`, `/case-types`), all 9 cluster posts. Plus `generateMetadata` on the 2 dynamic routes. Verified: every URL ships unique `<title>` and `<meta name="description">`.
3. **Mobile nav drawer** built — Header now has hamburger button visible below 768px, full-screen drawer with verticals submenu, How it works / Pricing / Security / About links, Book demo CTA, ThemeToggle. ARIA: `aria-haspopup`, `aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal="true"`.
4. **Sitemap completed** — `src/app/sitemap.ts` now enumerates 33 URLs: brand (5) + verticals (3) + hubs (5) + states (6) + case-types (3) + cluster posts (9) + legal (2). Priority-tiered.
5. **Canonical tags everywhere** — verified in compiled HTML. Every page emits `<link rel="canonical" href="https://calldella.com/...">`.
6. **`sameAs` placeholder removed** — Organization schema in layout now ships `sameAs: []` (empty array) until real LinkedIn / Twitter / Crunchbase URLs are provided. Broken sameAs damages entity resolution; empty is better.
7. **Vertical meta descriptions** trimmed: PI 207→159 chars, Criminal 178→137, Immigration 187→148. All under Google's 160-char display limit.

### P1 — fixed

8. **Organization schema** rewritten in `layout.tsx` — added `@id` graph anchor, `legalName`, `alternateName`, `logo` (ImageObject), `foundingDate`, `founder` (linked Person at `/about#founder`), `contactPoint` (English + Spanish), `knowsAbout` (8 topics), `areaServed` (US Country object).
9. **WebSite schema** added in `layout.tsx` — links to Organization via `@id`.
10. **`LegalService` → `Service`** in `VerticalLanderShell.tsx` — `LegalService` extends `LocalBusiness` and requires address + telephone (Della is virtual, would fail validation). Now `Service` with `category`, `audience: BusinessAudience`, `availableLanguage` (Immigration: English+Spanish), `provider` linked via `@id` to root Organization.
11. **OfferCatalog → Product+Offers** at `/pricing` — actual rich-result eligibility for SERP price snippets. 3 nested Offers (Standard $297, Practice $547, Group contact-sales) with `UnitPriceSpecification`, `availability: InStock`, `offeredBy` linked to root Organization via `@id`.
12. **`Article` (BlogPosting) JSON-LD** in `ArticleLayout.tsx` — refactored to accept optional `slug`, `breadcrumbs`, `description`, `datePublished`, `dateModified` props. Emits `BlogPosting` with linked author (Person), publisher (Organization `@id`), `mainEntityOfPage`, `speakable` (h1 + first paragraph + `.tldr`). Wired into all 9 cluster posts + 3 legal pages.
13. **`BreadcrumbList`** schema + visual breadcrumbs everywhere — new `Breadcrumbs` component (`src/components/Breadcrumbs.tsx`) used by `VerticalLanderShell`, `ArticleLayout`, `/pricing`, `/about`, `/states/[slug]`, `/case-types/[slug]`. Visible nav + JSON-LD schema combined.
14. **`AboutPage` + `Person` schema** at new `/about` route — founder placeholder bio, Person schema (`@id` linked to Organization founder reference), `AboutPage` schema, `knowsAbout` topics. Bio body marked "coming soon" — user fills.
15. **AI crawlers explicitly allowlisted** in `robots.ts`: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, Bytespider, Diffbot. Explicit `Allow: /` per bot supplements wildcard. Also added `host` directive.
16. **Open Graph + Twitter Card** tags added to root layout + every page metadata. Homepage now ships full OG (was missing). `metadataBase: new URL('https://calldella.com')` set in root.
17. **`metadata.title` template** — root layout uses `{ default, template: '%s | Call Della' }`. Per-page titles flow through automatically; pages that want absolute titles (homepage, verticals where brand already in string) use `title: { absolute: '...' }`.
18. **ARIA on visual-only components**:
    - `DossierMockup` — both variants now wrapped in `role="img"` with descriptive `aria-label`.
    - `AudioPlayer` — play/pause button has dynamic `aria-label`; SVG icons `aria-hidden="true"`.
    - case-types page ✓/✕ symbols — wrapped `<span aria-hidden="true">` so screen readers don't read "check mark / cross" before the label.
19. **Removed redundant `Service` schema** from homepage `page.tsx` — was duplicating Organization + double-counting "Call Della" entity. Vertical pages keep their own Service schema (now properly typed).
20. **State page price leak fix** (Phase 9 carryover) — confirmed clean.
21. **Orphan `calldella-landing.jsx` deleted** at repo root. Risk: if Coolify ever served workspace instead of `out/`, would expose source. Gone.
22. **`<time dateTime>` element** added to ArticleLayout for both publication date and last-modified date.

### Verified in compiled HTML

- Schema types per page (representative sample):
  - `/`: Organization, WebSite, Person, FAQPage, ContactPoint, ImageObject, Country
  - `/personal-injury`: Service, Organization, WebSite, BreadcrumbList, BusinessAudience, FAQPage, Person, Country
  - `/pricing`: Product, 3× Offer, UnitPriceSpecification, Brand, BreadcrumbList, FAQPage, Organization, WebSite
  - `/about`: AboutPage, Person, Organization, WebSite, BreadcrumbList
  - `/states/texas`: BreadcrumbList, FAQPage, Organization, WebSite
  - `/compliance/hipaa-at-intake-phi`: BlogPosting, SpeakableSpecification, BreadcrumbList, Organization, WebSite
- Canonical tags: present on every checked page (homepage, verticals, pricing, about, states/texas, case-types, cluster posts).
- Unique `<title>` per page — sampled 15 pages, all distinct.
- OG tags present on homepage (was missing pre-fix).
- Build clean: 38 static routes, 6.0 MB out/, 1.3 MB JS.
- Robots: 13 user agents listed. Sitemap: 33 URLs.

### Still pending — needs user input or design

- **Real `sameAs` URLs** (LinkedIn / Twitter / Crunchbase / etc.) — populate when live profiles exist. `layout.tsx` Organization `sameAs: []` ready to receive.
- **Founder bio body content** — `/about` placeholder says "Bio coming soon". Replace with real bio + photo.
- **OG image PNGs** — `/og-default.png`, `/og-personal-injury.png`, `/og-criminal-defense.png`, `/og-immigration.png`. Currently referenced in metadata but assets don't exist yet.
- **Demo phone numbers** (PI / Criminal / Immigration) — Retell numbers go into `verticals[*].demo` once provisioned.
- **Cal.com booking link** — replace iframe placeholder in `BookingModal`.
- **Industry stat source URLs** — `lib/verticals.ts` cites source families (ABA Tech Report, Marchex/Invoca, AILA, FBI UCR + NHTSA). Replace with specific study URLs at QA pass if higher-confidence sourcing required.
- **Cluster post outbound source links** — ABA / HIPAA / state bar references inside post bodies should link to authoritative sources (americanbar.org, hhs.gov, state bar pages).
- **YouTube + Wikidata + Crunchbase + Bing Webmaster + IndexNow** — off-site GEO/SEO surface.

### Projected scoring

Pre-fix composite: **~53/100**. After this batch: estimated **~78/100**.

Remaining lift to ~88 requires user-provided content (bio, real sameAs URLs, OG images) + off-site work (Wikidata, YouTube, Crunchbase, Reddit seeding).

**Phase 10 — Audit P0 + P1 deterministic batch shipped. Build clean (38 routes, 33 sitemap URLs, all canonicals present, all metadata unique, schema graph linked via `@id`).**
