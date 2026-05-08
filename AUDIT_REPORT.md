# Call Della — GEO + SEO Audit (2026-05-08)

Run via 8 parallel specialist agents (4 GEO + 4 SEO). Composite report.

## Scorecard

| Dimension | Score | Status |
|---|---|---|
| GEO — AI visibility | 58/100 | Fair |
| GEO — Content E-E-A-T | 58/100 | Fair |
| GEO — Platform readiness (avg of 5) | 47/100 | Fair |
| GEO — Schema | 38/100 | Poor |
| GEO — Technical | 66/100 | Fair |
| SEO — Content | ~50/100 | Poor (every URL shares one title) |
| SEO — Schema | 48/100 | Fair |
| SEO — Technical | 62/100 | Fair |
| **Composite** | **~53/100** | **Fair, deploy-blocking issues present** |

Per-platform readiness:

| Platform | Score |
|---|---|
| Google AI Overviews | 62/100 |
| Bing Copilot | 50/100 |
| ChatGPT web search | 48/100 |
| Perplexity | 38/100 |
| Google Gemini | 35/100 |

---

## P0 — Deploy blockers

### 1. Dynamic pages were 404 fallbacks ✅ FIXED THIS SESSION

`src/app/states/[slug]/page.tsx` and `src/app/case-types/[slug]/page.tsx` accessed `params.slug` synchronously. Next 16 changed `params` to `Promise<{slug: string}>`. Build silently emitted `<html id="__next_error__">` with `<meta name="robots" content="noindex">` for all 9 dynamic URLs. 9 KB error-shell HTML instead of full content.

**Fix shipped**: `params: Promise<{slug: string}>`, `await params`, `async` page function. Verified — 9 dynamic pages now render 34 KB each, no `noindex`, no error fallback.

### 2. Per-page metadata missing on ~60 URLs

No `export const metadata` on:
- Homepage (`/`)
- All cluster posts (`/compliance/*`, `/operations/*`, `/intake-playbook/*` — 9 files)
- All hubs (`/compliance`, `/operations`, `/intake-playbook`, `/states`, `/case-types`)
- Legal (`/security`, `/privacy`, `/terms`)
- Dynamic pages (`/states/[slug]`, `/case-types/[slug]`) — need `generateMetadata`

Result: every URL inherits the root layout title. Massive duplicate-title problem — Google may index a single page, or none.

**Fix**: add `metadata` export to each static page; add `generateMetadata({params})` to the two dynamic routes pulling from `stateData`/`caseData`.

### 3. Mobile nav missing

`src/components/Header.tsx` uses `hidden md:flex`. Below 768px users see logo + theme toggle only. No way to reach `/personal-injury`, `/pricing`, `/how-it-works`. Lighthouse mobile usability fail. AI Overviews mobile preview poor.

**Fix**: build hamburger drawer.

### 4. Sitemap incomplete

`src/app/sitemap.ts` lists ~9 URLs. Built `out/` has ~34 HTML pages. ~25 indexable pages missing from sitemap (all 9 cluster posts, 5 hubs, 6 state pages, 3 case-types, etc.).

**Fix**: enumerate states + cases via existing data files; manually list cluster posts + hubs.

### 5. SOC 2 wording violates brand bible §10

`src/app/security/page.tsx` references SOC 2 reports "available to clients under NDA by Q4 2026". Brand bible §10 forbids SOC 2 claims pre-cert. "BAA-ready" is fine.

**Fix**: rewrite as "SOC 2 Type II audit in progress; report available to enterprise clients under NDA upon completion (target Q4 2026)" or remove. Audit `llms.txt` for similar wording (currently "audit underway" — acceptable).

### 6. `sameAs` URLs are placeholders

`src/app/layout.tsx` Organization schema lists `linkedin.com/company/calldella` + `twitter.com/calldella`. Both 404. Broken `sameAs` actively damages entity resolution — AI engines penalise.

**Fix**: either populate the real profiles or remove the array entries until live. **User input needed**.

### 7. Canonical URLs missing on every page

No `alternates: { canonical }` set anywhere. Compiled `out/index.html` shows zero `<link rel="canonical">`.

**Fix**: add to each page metadata + root layout.

---

## P1 — High impact

### Schema

8. **Article / BlogPosting schema missing** on all 9 cluster posts. `ArticleLayout.tsx` renders byline + date but no JSON-LD. Refactor to accept `{datePublished, dateModified, author}` and inject `Article` schema once.
9. **`LegalService` is wrong type** in `VerticalLanderShell.tsx`. Della is virtual — `LegalService` extends `LocalBusiness` which requires address + telephone. Use `Service` with `serviceType` instead.
10. **Service schema redundant** on homepage when Organization is at root. Either drop, or merge into `@graph` pattern with `@id` linking.
11. **No `BreadcrumbList`** anywhere. Add to states, case-types, cluster posts via `ArticleLayout`.
12. **No `WebSite`** schema. Add to layout. (Skip `SearchAction` — no site search.)
13. **Pricing OfferCatalog → Product+Offers** for actual SERP price snippets.
14. **Organization thin** — missing `logo`, `legalName`, `foundingDate`, `founder` (Person), `contactPoint`, `address`, `knowsAbout`, `email`.

### Content

15. **No author Person schema** for cluster bylines. "BY Andy Norman" appears 8× but resolves to nothing.
16. **No `/about` page**. Critical E-E-A-T gap — founder bio + credentials needed.
17. **No image alt / aria-label** on `DossierMockup` or `AudioPlayer` (screen readers + Google ignore).
18. **Vertical landers near-duplicate** structurally — only `Vertical` config strings differ. Add 200-300 unique words per lander between sections.
19. **Cluster posts cite ABA / HIPAA / state bars without outbound links** — YMYL legal content needs source links.
20. **No internal links from cluster posts to verticals**. Every cluster post should link to 2-3 verticals contextually.

### Technical

21. **No OpenGraph or Twitter Card tags** on homepage. Vertical pages have them, homepage doesn't.
22. **No `metadataBase`** — wait, was added Phase 8. Confirm canonical helpers use it.
23. **Trailing slash undefined** in `next.config.ts`. Pick one to avoid duplicate-content.
24. **AI crawlers not explicitly allowlisted** in `robots.ts`. Currently `User-agent: *, Allow: /` is permissive but not explicit. Add `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` blocks.

---

## P2 — Polish / off-site

25. `speakable` schema — add to `Article` hero paragraphs for voice search.
26. `dateModified` — render visibly on every cluster post + state page (legal content stales fast).
27. Industry stat source URLs — `verticals.ts` + `Problem` cite "ABA Tech Report" / "Marchex" / "AILA practice data" without links. Replace with study URLs.
28. YouTube channel + 3 demo recordings (PI/DUI/detention) — Gemini knowledge graph signal.
29. Wikidata entity submission once 3+ independent media mentions exist.
30. Crunchbase + GitHub org + BBB + G2/Capterra listings — `sameAs` enrichment.
31. Bing Webmaster Tools verification (`msvalidate.01` meta) + IndexNow key file in `public/`.
32. Reddit seeding (`r/Lawyertalk`, `r/LawFirm`, `r/Immigration`) — Perplexity weights Reddit heavily.
33. Comparison tables on `/pricing` and verticals (Della vs. legal answering service vs. voicemail) — AIO extracts directly.
34. `HowTo` JSON-LD on `/how-it-works` for the 4-step mechanic.
35. Author Person schema with `jobTitle`, `worksFor` once `/about` exists.
36. CWV: hero `DossierMockup` may be LCP — verify width/height set, no CLS.
37. Plausible — confirm `calldella.com` domain registered before deploy.
38. Delete `/Users/andrewnorman/Call Della/calldella-landing.jsx` orphan prototype at repo root.
39. Footer link inventory: vertical column + pillar column already added Phase 8 — verify rendering.
40. Footer + every cluster byline — needs working `/about` link target.

---

## File hit list (most-touched)

- `src/app/layout.tsx` — Organization schema rewrite, `WebSite`, OG/Twitter, AI bot allowlist consideration, canonical
- `src/app/page.tsx` — homepage `metadata` export, drop redundant Service schema
- `src/app/sitemap.ts` — enumerate all routes including cluster posts + dynamic pages
- `src/app/robots.ts` — explicit AI bot allowlist
- `src/components/Header.tsx` — mobile drawer
- `src/components/VerticalLanderShell.tsx` — `LegalService` → `Service`, BreadcrumbList
- `src/components/ArticleLayout.tsx` — `Article` JSON-LD, BreadcrumbList, `dateModified`
- `src/app/states/[slug]/page.tsx` — `generateMetadata`, breadcrumb, content tweaks (✅ params already fixed this session)
- `src/app/case-types/[slug]/page.tsx` — `generateMetadata`, breadcrumb, ARIA on ✓/✕ symbols (✅ params fixed)
- `src/app/security/page.tsx` — SOC 2 wording fix
- All 9 cluster post `page.tsx` files — `metadata` export
- `src/app/{compliance,operations,intake-playbook,states,case-types}/page.tsx` (5 hub pages) — `metadata` export
- `src/app/{privacy,terms,security}/page.tsx` — `metadata` export
- `src/lib/verticals.ts` — trim PI meta description ≤160 chars, hyperlink stat sources
- `src/components/DossierMockup.tsx` + `AudioPlayer.tsx` — ARIA labels
- New: `src/app/about/page.tsx` — founder bio + Person schema
- New: `public/og-default.png`, `og-personal-injury.png`, `og-criminal-defense.png`, `og-immigration.png`

---

## Suggested order of operations

**Day 1 (deterministic, can ship without user input)**:
1. ✅ Dynamic-page params fix (done)
2. Sitemap completion (1 file, ~5 min)
3. Per-page metadata batch (15 files, ~30 min)
4. `generateMetadata` for `[slug]` routes (2 files, ~10 min)
5. Canonical setup in layout + per-page (~10 min)
6. SOC 2 wording fix (1 file)
7. AI bot allowlist in `robots.ts` (~5 min)
8. Drop `calldella-landing.jsx` orphan
9. Schema rewrites — Organization full, `WebSite`, `LegalService` → `Service`, OfferCatalog → Product+Offers, BreadcrumbList helper (~45 min)
10. `Article` JSON-LD in `ArticleLayout` (~15 min)
11. ARIA on `DossierMockup` + `AudioPlayer` + cluster post ✓/✕ symbols
12. Trim PI meta description, hyperlink industry stat sources

**Day 2 (needs user input or design)**:
13. Real `sameAs` URLs (LinkedIn / Twitter / Crunchbase) — user provides
14. `/about` page with founder bio — user provides bio + photo
15. Mobile nav drawer (design call) — recommend hamburger + drawer matching dossier aesthetic
16. OG image asset production
17. Demo phone numbers for verticals (already pending pre-revamp)
18. Cal.com booking link replacement (already pending)

**Day 3+ (off-site)**:
19. YouTube + Reddit + Wikidata + Crunchbase + Bing Webmaster + IndexNow

---

## Net

After P0 batch ships: composite ~53 → ~78. After P1 batch: ~78 → ~88. P2/off-site brings ceiling ~92 (capped by entity baseline taking time to establish).

The dynamic-page bug was the single most valuable fix — recovered 9 long-tail SEO/GEO pages from total invisibility. Already shipped.
