# calldella.com: SEO and GEO Revamp Spec (25 Oct 2026)

This is the build spec for the calldella.com revamp. It supersedes the keyword and page sections of `SEO_GEO_PLAN.md` where they conflict, and keeps that file's principles (one query per page, page-type roles, cannibalisation tests, internal linking rules). `SEO_GEO_STRATEGY.md` is a duplicate of `SEO_GEO_PLAN.md`: delete it in Phase 1.

Sources behind this spec:
- Ahrefs US keyword and SERP data, pulled 25 Oct 2026 (volumes are US monthly searches, KD in brackets, "n/s" = Ahrefs hasn't scored difficulty).
- Andy's GEO toolkit, geo-slab (`Nipstar/geo-slab`): scoring weights, citability rules, schema, llms.txt and crawler standards, per-platform checklists.
- OtterlyAI GEO checklist (in `cite fire/refs`).
- `AUDIT_REPORT.md` (8 May 2026) and a fresh read of this repo on 25 Oct 2026, including Andy's uncommitted edits of the same day.
- The Della feeder sites plan (personalinjuryansweringservice.com and virtualreceptionistforlawyers.com), so calldella.com and the feeders never compete for the same query.

---

## Hard rules

- **Brand bible first.** `DELLA_BRAND.md` governs voice, naming and visuals. Della is "she", never "it" or "the AI". An intake specialist, not a receptionist. Company name: Call Della. No exclamation marks, no "unlock", no "AI-powered", no "revolutionary".
- **Plans (confirmed 25 Oct 2026):** Solo $329/month, 300 minutes, for solo lawyers. Practice $598/month, 600 minutes, for small and growing firms. Group custom. Overage $0.50/min. Month-to-month, no setup fee. Every plan includes: Della answering in the firm's name nights, weekends and holidays; the Call Della dashboard (every call as a dossier with summary, urgency score, recording and transcript); urgent-call email alerts to the attorney on call; the 7am morning brief; state recording disclosure; the firm's own Della number with forwarding and a test call before go-live. Prices live in one config file and are never typed into a page.
- **No demo phone numbers anywhere on the site.** The primary CTA is "Book a demo" (30 minutes, a live Della call for the prospect's practice area). The `verticals.ts` placeholders (`phoneDisplay: 'TBD'`, `phoneE164: '+10000000000'`) must never render a `tel:` link.
- **No claim the product can't back today.** Remove or gate behind config flags: Filevine/CASEpeer/Lead Docket/Litify/Clio/MyCase integrations (only the Group CRM webhook exists), Spanish on PI and criminal (immigration only today), SMS alerts (off), "SOC 2 Type II audit underway" (confirm with Andy, otherwise remove), "cancel any time after 30 days" (contradicts month-to-month).
- **No invented statistics.** Every number on the site has a named source, a year and a link. The current unsourced lines in `verticals.ts` ("30–50% of after-hours calls go to voicemail", "Voicemail loses 70%", "60–70% of US immigration calls come in Spanish", "$300K/year on leads") get a source or get cut.
- **No testimonials, ratings or Review/AggregateRating schema** until real firms give written approval.
- **One query per page, across all three sites.** The ownership map below is binding. Before creating any page, run the four cannibalisation tests in `SEO_GEO_PLAN.md` §4.
- **Static export stays.** `output: "export"`. All JSON-LD is in the server-rendered HTML, never injected client-side.
- **Stop. Report. Wait.** after every phase. Progress goes in `BUILD_LOG.md`.

---

## 1. Where the site stands (25 Oct 2026)

Fixed since the May audit: per-page metadata on most routes, root canonical and `metadataBase`, mobile nav drawer, `/about` page, sitemap enumerates states, case types and cluster posts, robots.ts allows the main AI crawlers, ArticleLayout carries dates, vertical landers use `Service` instead of `LegalService`.

Still open (confirm each in Phase 0):

| Issue | Where | Fix |
|---|---|---|
| `lastModified: now` on every sitemap entry, so every build claims every page changed | `src/app/sitemap.ts` | Real `dateModified` per page from a content manifest |
| OG images referenced but not in `public/` (`og-default.png` and per-vertical images) | `public/` | Produce the images (1200×630, dossier style) |
| `sameAs: []` in the Organization schema | `src/app/layout.tsx` | Fill with real profiles only, as they go live (§8) |
| Unsourced statistics | `src/lib/verticals.ts`, Problem sections | Source or cut |
| Live claims ahead of the product (integrations, Spanish PI/criminal, SOC 2, SMS, 30-day cancel) | `public/llms.txt`, `/security`, vertical FAQs | Rewrite per Hard rules |
| No `llms-full.txt`, no IndexNow key, no Bing verification | `public/` | Phase 4 |
| `SEO_GEO_STRATEGY.md` duplicates `SEO_GEO_PLAN.md` | repo root | Delete |
| Compliance and state content has no attorney reviewer | cluster posts, `/states/*` | "Reviewed by" a licensed US attorney (§7), YMYL signal |
| No Ahrefs US rankings yet for calldella.com | | Nothing to protect; restructure freely |

---

## 2. Who owns which searches

calldella.com is the brand, the category ("AI legal intake"), the three practice areas, the knowledge hubs and the comparisons. The feeders own the answering-service and virtual-receptionist head terms. Rule: if a query is in the feeder column, calldella.com doesn't target it, and the reverse.

| Topic | calldella.com | Feeders |
|---|---|---|
| Category: AI legal intake, AI intake for law firms, legal intake automation | **Owns** (`/`, `/how-it-works`) | Link to calldella.com |
| Legal answering service, law firm answering service, virtual receptionist for lawyers, 24/7, legal intake services, cost, best-of lists | No | **Own** (site B) |
| "ai receptionist for law firms" | No (brand bible: Della isn't a receptionist) | **Owns** (B5) |
| Personal injury answering service, PI intake, mass tort intake, PI intake form template/PDF | No | **Own** (site A) |
| AI for personal injury lawyers, after-hours PI intake | **Owns** (`/personal-injury`) | Link to calldella.com |
| Criminal defense answering service, immigration attorney answering service | **Owns** (`/criminal-defense`, `/immigration`) | Drop B9 and B10 from the feeder plan; B links here |
| Law firm client intake, client intake forms, intake process | **Owns** (`/intake-playbook`) | |
| "personal injury intake form" (head term) | **Owns** (existing playbook post) | A6 keeps template/PDF variants only |
| Compliance: ABA 512, privilege, HIPAA, recording consent, state bar AI rules | **Owns** (`/compliance`) | FAQ answers link here |
| Missed-call data, cost per signed case, after-hours economics | **Owns** (`/operations`) | Cite and link |
| "X vs Call Della", "X alternative", "X reviews", "X pricing" | **Owns** (`/compare/*`) | B8 owns "best X" lists and links to each compare page |
| States and case types | **Owns** | Never build location pages on the feeders |

Two changes this makes to the feeder plan: B5 loses "legal intake automation", "automated legal intake" and "ai legal intake" as secondaries, and B9/B10 are dropped.

---

## 3. Keyword map: existing pages

| URL | Primary (vol, KD) | Secondaries | Title tag | H1 must contain |
|---|---|---|---|---|
| `/` | ai legal intake (150, 5) | ai intake for law firms (150, n/s); legal intake ai (40); voice ai intake for law firms (40); after-hours legal intake; Call Della (brand) | AI Legal Intake for Law Firms, After Hours \| Call Della | "legal intake" |
| `/how-it-works` | legal intake automation (250, 6) | automated legal intake (150, 8); law firm intake automation (80); how does ai legal intake work (20) | How AI Legal Intake Works, Step by Step \| Call Della | "how" + "legal intake" |
| `/pricing` | Call Della pricing (brand) | AI legal intake pricing | Call Della Pricing: Solo $329, Practice $598 \| Call Della | "pricing" |
| `/personal-injury` | ai for personal injury lawyers (300, 4) | after-hours personal injury intake; personal injury intake ai agent (10); ai tools for personal injury attorneys (10); personal injury law firm intake process (10) | AI Intake for Personal Injury Law Firms \| Call Della | "personal injury" + "intake" |
| `/criminal-defense` | 24/7 criminal defense answering service (60, n/s) | criminal lawyer answering service (60); criminal defense answering service (20); ai for criminal defense lawyers (20) | 24/7 Criminal Defense Answering Service and Intake \| Call Della | "criminal defense" |
| `/immigration` | immigration attorney answering service (100, n/s) | ai for immigration lawyers (90, 3); immigration law firm answering service (60) | Immigration Attorney Answering Service in English and Spanish \| Call Della | "immigration" |
| `/security` | legal intake confidentiality (30, n/s) | hipaa ai receptionist (10) | Security and Data Handling \| Call Della | |
| `/about` | Call Della founder | Andy Norman | About Call Della \| Founder Andy Norman | |
| `/compliance` | ai legal intake compliance | | AI Legal Intake Compliance Guide \| Call Della | "compliance" |
| `/compliance/aba-formal-opinion-512-explained` | aba formal opinion 512 (250, n/s) | | ABA Formal Opinion 512 Explained for Law Firm Intake | "ABA Formal Opinion 512" |
| `/compliance/attorney-client-privilege-ai-intake` | ai and attorney client privilege (70, n/s) | | Does AI Intake Protect Attorney-Client Privilege? | "attorney-client privilege" |
| `/compliance/hipaa-at-intake-phi` | HIPAA at intake | hipaa ai receptionist (10) | HIPAA at Legal Intake: Handling PHI on the First Call | "HIPAA" |
| `/intake-playbook` | law firm client intake (150, 0) | legal client intake (200, 3); client intake process law firm (100, 3); law firm client intake procedures (100) | Law Firm Client Intake Playbook \| Call Della | "client intake" |
| `/intake-playbook/what-should-be-on-a-pi-intake-form` | personal injury intake form (90, 0) | | What Should Be on a Personal Injury Intake Form? | "personal injury intake form" |
| `/intake-playbook/how-to-write-pi-intake-script` | personal injury intake script (no volume yet; GEO value) | | How to Write a Personal Injury Intake Script | "intake script" |
| `/intake-playbook/intake-red-flags-declining-cases` | personal injury case evaluation (80, 1) | how to qualify a personal injury case | Personal Injury Case Evaluation: Red Flags at Intake | "case evaluation" |
| `/operations` | law firm intake operations | | Law Firm Intake Operations \| Call Della | |
| `/operations/missed-call-cost-calculator` | missed call cost calculator | | Missed-Call Cost Calculator for Law Firms | "missed-call cost" |
| `/operations/cost-per-signed-case-calculator` | cost per signed case | personal injury lead cost (40) | Cost per Signed Case Calculator for PI Firms | "cost per signed case" |
| `/operations/after-hours-intake-comparison` | after-hours intake options | | After-Hours Intake: Voicemail vs Answering Service vs AI | "after-hours intake" |
| `/states` | PI rules by state (see §4) | no fault states (2,800, 22); comparative negligence states (90, 20); modified comparative negligence states (30, 0) | Personal Injury Rules by State: SOL, Fault and No-Fault | "by state" |
| `/states/[slug]` | [state] personal injury intake | [state] personal injury statute of limitations (see §4) | [State] Personal Injury Intake: Deadlines and Fault Rules | state name + "intake" |
| `/case-types/[slug]` | [case type] intake | | [Case Type] Intake: What to Capture on the First Call | case type + "intake" |

Rules for titles: 60 characters or fewer before the brand where possible, primary keyword first, no keyword stuffing, every title unique. Meta descriptions: 140 to 160 characters, primary keyword once, one concrete fact, no exclamation marks.

---

## 4. New pages

Priority: P1 build in this revamp, P2 next month, P3 when the data or feature exists.

| P | URL | Primary (vol, KD) | Secondaries | Why |
|---|---|---|---|---|
| P1 | `/compare/smith-ai` | smith.ai alternative (700, n/s) | smith ai reviews (200, 0); smith ai pricing (150, 16) | Biggest decision-stage query found |
| P1 | `/compare/answering-legal` | answering legal reviews (150, 4) | answering legal pricing (80, 0) | |
| P1 | `/compare/posh` | posh virtual receptionist (350, 9) | | |
| P1 | `/compare/ruby` | ruby receptionist alternative (70) | ruby receptionist reviews (80, 5); ruby receptionist pricing (100, 0) | |
| P2 | `/compare/lexreception` | lexreception pricing (30) | lexreception (400, 4, mostly navigational) | |
| P1 | `/compliance/call-recording-consent-by-state` | call recording consent for law firm intake | call recording laws by state (100, 58); two party consent states (2,000, 50); two party consent states list (20) | All 50 states in one table, built from the app's `state_recording_law` data. A citation magnet; the head terms are stretch |
| P1 | `/intake-playbook/law-firm-client-intake-process` | law firm client intake process flow chart (150, 0) | law firm client intake system (100); law firm intake process (20) | Ship a real flow chart (SVG plus text alternative) |
| P1 | `/intake-playbook/law-firm-client-intake-form` | client intake form law firm (200, 0) | legal client intake form (200, 0); law firm intake form (100, 1); legal intake form (90, 1) | PI, criminal and immigration sections |
| P2 | `/intake-playbook/criminal-defense-intake-form` | criminal defense intake form (40) | | Supports `/criminal-defense` |
| P2 | `/intake-playbook/immigration-intake-form` | immigration intake form (50) | | Supports `/immigration` |
| P1 | `/glossary` | PI intake terms | | Definitions (MMI, MIST, PIP, letter of protection, comparative negligence, SOL tolling, no-fault, BAA) with `DefinedTermSet`. AI Overviews cite definitions |
| P1 | `/operations/law-firm-missed-calls-data` | how many calls do law firms miss | speed to lead law firm (30) | Moved here from the feeder plan. Sourced figures below. Original data added in P3 |
| P2 | `/compliance/state-bar-ai-rules` | state bar rules on AI | ai disclosure requirements for lawyers | The deal-blocker question; `SEO_GEO_PLAN.md` Pillar C |
| P2 | `/states/*` wave 2: Arizona, Nevada, Missouri, Tennessee, North Carolina, New Jersey | [state] personal injury intake | SOL volumes 150 to 250, KD 0 to 3 each | Next PI markets with clean SOL data |
| P2 | `/case-types/wrongful-death`, `/case-types/medical-malpractice` | [type] intake | | Higher-value PI matters |
| P2 | `/about/andy-norman` | Andy Norman | | Author page with `Person` schema; target of every byline |
| P2 | `/changelog` | | | Freshness signal, product updates in dated entries |
| P3 | `/operations/personal-injury-marketing-intake-gap` | personal injury law firm marketing (500, 5) | personal injury lead generation (350, 0); criminal defense law firm marketing (300, 1) | Marketing buyers, different intent. One post on where marketing spend leaks at intake |
| P3 | `/research/after-hours-intake-report-2026` | | | Original data from Della's own calls (aggregated, anonymised) and the outreach team's after-8pm call log. The strongest GEO asset once it exists. `Dataset` schema |
| P3 | `/integrations/clio-grow` etc. | | | Only when an integration is live. Clio Grow (12,000), Lawmatics (6,800), CASEpeer (6,200) and Lead Docket (1,200) are navigational; integration pages ride that demand |

**State pages and consumer traffic.** Statute-of-limitations searches are large and easy ("florida statute of limitations personal injury" 400, KD 3; "texas statute of limitations personal injury" 300, KD 0) but mostly injured people. Keep the state page primary as "[state] personal injury intake", include the SOL as a quotable fact block for AI citations and links, and add one line near the top: "This guide is for law firms. If you were injured, contact a licensed [State] attorney." Don't chase consumer traffic beyond that.

**Missed-call data page, sourced figures (re-fetch before publishing):**
- Clio's 2024 Legal Trends Report secret-shopped 500 US firms: 40% answered the phone, down from 56% in 2019 ([ABA Law Practice Magazine](https://americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/laws-new-first-impression-transforming-client-intake)). Link Clio's own report as the primary source.
- The same study: 48% of firms unreachable by phone, even with a chance to return a message ([Oklahoma Bar Journal, Sept 2025](https://www.okbar.org/obj/2025/september/84)).
- ABA Law Practice Division study: under 10% of callers reached a lawyer; 32% went straight to voicemail ([Lawyers Mutual NC](https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients)).

**Comparison page rules.** Competitor prices and features only from their own pages, fetched during the build, dated and linked. A fair table, including where the competitor is the better fit (human receptionists for complex calls, many practice areas). Say at the top that Call Della is the author. No ratings or review stars.

---

## 5. Final site map

```
/                                   home (category + brand)
/how-it-works                       mechanism, HowTo
/pricing                            Solo, Practice, Group
/personal-injury  /criminal-defense  /immigration     practice areas
/security  /about  /about/andy-norman  /contact  /changelog
/compliance/                        Pillar C hub + 5 posts
/intake-playbook/                   Pillar A hub + 7 posts
/operations/                        Pillar B hub + 5 posts (+ report later)
/states/                            reference table + 12 state pages
/case-types/                        hub + 5 case types
/compare/                           hub + 5 competitor pages
/glossary
/research/                          P3
/privacy  /terms
```

Every page is within 3 clicks of the home page. The header links: practice areas, How it works, Pricing, Resources (a menu for the three hubs, Compare and Glossary), Book a demo. The footer lists every hub and every practice area.

---

## 6. Page templates for AI citation

These rules come from geo-slab's citability and content scorers. Phase 5 runs `citability_scorer.py` on every page; target 70+ per page.

**Every content page**
1. H1 with the primary keyword. One H1 only. H1 > H2 > H3, no skipped levels.
2. **Answer block** straight under the H1: a definition sentence ("AI legal intake is...") then 2 to 3 sentences. The first 60 words carry one concrete fact (a number, price or named source).
3. H2s phrased as the questions buyers ask, taken from People Also Ask and the keyword lists above ("How much does AI legal intake cost?").
4. The first sentence under each H2 answers it. The passage under each H2 is **134 to 167 words**, makes sense if lifted out on its own, names its subject instead of "it" or "this", and carries at least one fact.
5. Paragraphs of 2 to 4 sentences. Short sentences (5 to 25 words). Bold the first use of each key term.
6. Comparisons as real HTML `<table>`s. Steps as ordered lists.
7. At least one statistic with "according to [Source, year]" and a link. Up to 5 or 6 citations per page.
8. An FAQ of 5 to 8 questions with 40 to 80 word answers, marked up as FAQPage with identical text.
9. Visible "Published" and "Updated" dates, matching `datePublished` and `dateModified`.
10. Byline: "By Andy Norman, Founder, Call Della" linking to `/about/andy-norman`. On compliance and state pages, also "Reviewed by [Attorney], [State] Bar" once a reviewer is in place.
11. One "Book a demo" CTA, plus a contextual link to the relevant practice area.

**Word counts (geo-slab benchmarks)**

| Page type | Words |
|---|---|
| Home | 800 to 1,500 |
| Practice area and service pages | 1,200 to 2,000 (adds 200 to 300 unique words per lander, closing the May audit's duplication finding) |
| Hub pages | 1,000 to 1,500, linking to every post |
| Cluster posts | 1,500 to 3,000 |
| Comparison pages | 1,200 to 2,000 |
| State and case-type pages | 900 to 1,500, unique facts per state |
| Glossary | 60 to 120 words per term |

**Category definition.** Use this sentence, word for word, on the home page, in llms.txt, in the Organization `description` and in every directory listing:

> Call Della is an after-hours intake specialist for law firms: personal injury, criminal defense and immigration. Della answers your firm's overnight phone, qualifies every caller, and delivers a triage-ready dossier by dawn.

---

## 7. Schema

One `@graph` per page, every entity with a stable `@id`, all in the static HTML. The feeder sites reference the same `@id`s.

| Entity | `@id` | On | Key properties |
|---|---|---|---|
| Organization | `https://calldella.com/#org` | every page (layout) | name Call Della, url, logo, description (the definition above), founder → `#founder`, parentOrganization Antek Automation (antekautomation.com), contactPoint (hello@calldella.com, sales), areaServed US, knowsAbout (legal intake, personal injury intake, criminal defense intake, immigration intake), sameAs (real profiles only) |
| WebSite | `https://calldella.com/#website` | every page | publisher → `#org`. No SearchAction (no site search) |
| Person | `https://calldella.com/about/andy-norman#person` | about, author page, every Article | name, jobTitle Founder, worksFor → `#org`, sameAs (LinkedIn), knowsAbout |
| Service | `https://calldella.com/[vertical]#service` | each practice area, home | serviceType ("After-hours legal intake"), provider → `#org`, audience (law firms), areaServed US, offers → pricing offers |
| Product + Offer | `https://calldella.com/pricing#solo`, `#practice` | pricing | Solo 329 USD/month (300 min), Practice 598 USD/month (600 min), from the pricing config |
| Article | page URL + `#article` | every cluster, compare, state and case-type page | headline, author → Person, reviewedBy (attorney, when in place), publisher → `#org`, datePublished, dateModified, citation for each source, speakable on the answer block |
| BreadcrumbList | | every page below the home page | |
| FAQPage | | any page with an FAQ | text identical to the visible FAQ (tested) |
| HowTo | | `/how-it-works` | the 4 steps (no rich result since 2023, but AI parses it) |
| DefinedTermSet | | `/glossary` | one DefinedTerm per entry |
| Dataset | | `/research/*`, recording-consent table | name, description, creator, temporalCoverage, license |

Never use `LegalService` or `LocalBusiness` (there's no public office), `Review`, or `AggregateRating`.

---

## 8. llms.txt, crawlers and technical

**llms.txt** (replaces the current file; the build generates it from config and the content manifest):

```
# Call Della

> Call Della is an after-hours intake specialist for law firms: personal injury, criminal defense and immigration. Della answers your firm's overnight phone, qualifies every caller, and delivers a triage-ready dossier by dawn.

## Practice areas
- [Personal injury intake](https://calldella.com/personal-injury): after-hours intake for PI firms, auto, trucking, premises and catastrophic injury calls
- [Criminal defense intake](https://calldella.com/criminal-defense): 24/7 answering for arrest and jail calls, DUI, drug and assault matters
- [Immigration intake](https://calldella.com/immigration): detention and deadline calls, natively in English and Spanish

## How it works
- [How AI legal intake works](https://calldella.com/how-it-works): forwarding, intake questions, urgency scoring, morning brief
- [Pricing](https://calldella.com/pricing): Solo, Practice and Group plans
- [Security](https://calldella.com/security): data handling, retention, no model training

## Guides
- [Law firm client intake playbook](https://calldella.com/intake-playbook): intake scripts, forms, process and case evaluation
- [AI legal intake compliance](https://calldella.com/compliance): ABA Formal Opinion 512, privilege, HIPAA, recording consent by state
- [Law firm intake operations](https://calldella.com/operations): missed-call data, cost per signed case, after-hours options
- [Personal injury rules by state](https://calldella.com/states): statute of limitations, fault rules, no-fault states
- [Compare](https://calldella.com/compare): Call Della against Smith.ai, Answering Legal, Posh, Ruby

## Key facts
- Plans: Solo $329/month (300 minutes, for solo lawyers); Practice $598/month (600 minutes); Group custom. Overage $0.50/minute. Month-to-month, no setup fee
- Every plan includes: answering in the firm's name nights, weekends and holidays; the dashboard with every call as a dossier (summary, urgency score, recording, transcript); urgent-call email alerts to the attorney on call; a 7am morning brief; state recording disclosure
- Della never gives legal advice, never quotes fees, never implies representation has begun, and tells callers she is an AI if asked
- Built by Antek Automation. Founder: Andy Norman. Runs on Retell AI's voice platform
- Spanish: immigration intake today

## Contact
- Book a 30-minute demo: https://calldella.com/contact
- Email: hello@calldella.com
```

Also generate `llms-full.txt` with the full text of every page, rebuilt on each deploy.

**Crawlers.** robots.ts already allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, Bingbot, PerplexityBot, Google-Extended, Applebot-Extended and CCBot. Add `Amazonbot` and `Meta-ExternalAgent`. Keep `Sitemap:`. No `trailingSlash` is set in `next.config.ts` yet. On Cloudflare, check the zone's AI crawler blocking setting and Bot Fight Mode are off for these bots, then fetch the home page as GPTBot, ClaudeBot and PerplexityBot to confirm a 200.

**Technical checklist**
- [ ] Canonical on every page (self-referencing), one trailing-slash rule in `next.config.ts`, a 301 for the other form at Cloudflare.
- [ ] Sitemap with real `lastModified` from a content manifest; split by section if over 50 URLs.
- [ ] IndexNow key file in `public/` and a post-deploy ping. Bing Webmaster Tools verification meta. Google Search Console. ChatGPT search leans on Bing's index.
- [ ] OG and Twitter images for the home page, each practice area, each hub and the default.
- [ ] Core Web Vitals on mobile: LCP 2.0s or less, INP 200ms or less, CLS 0.1 or less. `DossierMockup` has fixed dimensions. Fonts through `next/font`, preloaded.
- [ ] Security headers at Cloudflare: HSTS, CSP, X-Content-Type-Options, Referrer-Policy, X-Frame-Options.
- [ ] Alt text on every image and ARIA labels on `DossierMockup` and `AudioPlayer`.
- [ ] Zero 404s and no redirect chains; a styled 404 page.

---

## 9. Off-site entity and per-platform work (Andy, not Claude Code)

Brand authority is 20% of the geo-slab score and moves AI citations more than backlinks. In order:

1. **LinkedIn company page** for Call Della and Andy's profile updated. Add both to `sameAs`. (Bing Copilot and ChatGPT entity grounding.)
2. **Bing Webmaster Tools and IndexNow** (ChatGPT and Copilot use Bing's index).
3. **Directories:** Capterra, G2, GetApp, Software Advice, Lawyerist vendor list, LawSites, ABA Legal Technology Resource Center, Crunchbase, BBB. Same name and definition everywhere.
4. **Retell partner directory or case study.** Retell's own law-firm page ranks for "virtual receptionist for lawyers".
5. **Reddit.** A r/LawFirm thread ranks 1st and 2nd for "ai legal intake" and sits in its AI Overview. Answer genuinely in r/LawFirm, r/Lawyertalk and r/PersonalInjuryLaw as Andy; mention Della only where it fits. (Perplexity cites Reddit most.)
6. **YouTube:** three demo recordings (PI crash call, DUI arrest call, Spanish detention call) with chapters and full descriptions linking to the practice pages. (Gemini weights YouTube.)
7. **PR with data:** pitch the missed-calls page, then the P3 report, to ABA Journal, Above the Law, Lawyerist, LawSites and state bar journals. The Oklahoma Bar Journal ran this topic in September 2025.
8. **Wikidata** once there are 3 or more independent mentions. No Wikipedia article attempt yet.

No Google Business Profile: Call Della has no public US office.

---

## 10. Measurement

| What | Tool | Target |
|---|---|---|
| Pages indexed | GSC, Bing WMT | All within 14 days of deploy |
| Rankings for every primary and secondary in §3 and §4 | Ahrefs Rank Tracker (one project, tagged by page) | KD 0 to 10 primaries in the top 10 within 3 months |
| AI mentions | CiteFire monitor, Ahrefs Brand Radar cross-check | Named in 3 of the prompts below within 6 months |
| GEO score | geo-slab `/geo audit calldella.com` | 53 (May) to 80+ after this revamp |
| Demos booked by source page | Plausible events + booking form UTM fields | The headline number |

CiteFire prompts: best AI intake for law firms; AI legal intake for personal injury firms; after-hours answering service for criminal defense lawyers; immigration law firm answering service in Spanish; Smith.ai alternative for law firms; is AI intake allowed under ABA Formal Opinion 512; how much does a legal answering service cost; how do personal injury firms handle after-hours calls.

---

## 11. Build phases

**Phase 0: Audit.** Confirm every row in §1. Run `npm run build` and list every URL in `out/` with its title, H1, canonical, JSON-LD types and word count. Run geo-slab's `citability_scorer.py` on the built HTML of the home page, each practice area and three cluster posts; record baselines. List every number on the site with its source (or "none"). List every claim from the Hard rules that appears anywhere. **Stop. Report. Wait.**

**Phase 1: Foundations.** Content manifest (`src/data/pages.ts`: url, title, description, primary, secondaries, datePublished, dateModified, author, reviewer). Pricing and plan config. Schema `@graph` builder with the `@id`s in §7. Sitemap from the manifest. Canonicals, trailing slash, robots additions. Delete `SEO_GEO_STRATEGY.md`. Remove demo number rendering. **Stop. Report. Wait.**

**Phase 2: Existing pages.** Apply §3 titles, descriptions, H1s and §6 structure to every existing page. Rewrite claims per Hard rules. Source or cut every statistic. Add the 200 to 300 unique words per practice lander. FAQ and FAQPage on each. **Stop. Report. Wait.** Andy reviews the home page and the three practice areas at 375px.

**Phase 3: New P1 pages.** Four compare pages (fetch and date competitor facts), recording consent by state, the two new playbook posts, glossary, missed-calls data page. Header Resources menu and footer links. **Stop. Report. Wait.**

**Phase 4: llms.txt, llms-full.txt, IndexNow, OG images.** Generated from config and manifest. **Stop. Report. Wait.**

**Phase 5: QA.** Build clean, lint clean. Lighthouse mobile 95+ on all four scores for the home page, pricing, each practice area and two posts. Schema validates on every page (no errors). FAQ text equals schema text (test). `citability_scorer.py` 70+ on every content page; rewrite the weakest blocks until it is. No broken links. Copy lint: no em dashes, no exclamation marks, no banned words, no `TODO(`. Re-run `/geo audit` and record the score against the May baseline of 53. **Stop. Report. Done.**

P2 pages follow in the next session with the same rules.

---

## 12. Decisions for Andy

1. **Feeder plan changes:** drop B9 and B10, move "ai legal intake", "legal intake automation" and "automated legal intake" off B5 to calldella.com. Default: yes.
2. **Feeder CTAs:** the brand bible now says no demo phone numbers and "Book a demo" first, but the feeder plan leads with "Hear Della" (tap to call a tracked number). Default: switch the feeders to Book a demo too.
3. **SOC 2 wording:** is an audit actually underway? Default: remove the claim until it is.
4. **Attorney reviewer** for compliance and state pages (a named, licensed US attorney). Strong YMYL signal. Default: publish without, add when found.
5. **Wave 2 states:** Arizona, Nevada, Missouri, Tennessee, North Carolina, New Jersey. Default: as listed.
6. **Research report (P3):** publish aggregated, anonymised figures from Della's calls and the outreach after-8pm call log. Default: yes, once there are 3 months of data.
