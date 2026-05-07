# Call Della — SEO & GEO Strategic Plan

> The plan that sits behind the site architecture: what to publish, what NOT to publish, how to avoid cannibalisation, how location and blog pages relate to each other, and how to win citations in AI answers.

---

## 1. Strategic principles (the seven rules)

These rules govern every content decision. If a proposed page violates one, it doesn't get built.

**1. One query per page.**
Every page targets exactly one primary search intent. If two pages compete for the same intent, one of them is wrong and gets merged or killed.

**2. Service pages convert. Blog pages educate. Location pages localise. Comparison pages adjudicate.**
Each page type has one job. A blog post does not try to convert. A service page does not try to educate. Cross the line and you cannibalise yourself.

**3. The intake manager is the gatekeeper. Write for them as much as for the partner.**
The partner buys, but the intake manager kills the deal in the demo. A lot of our content needs to make the intake manager's life easier so she becomes the internal champion, not the blocker.

**4. PI is not law in general.**
Every page should feel specifically PI-coded. Generic "law firm" content is what competitors do. The closer we get to PI specifics (SOL by state, comparative negligence, contingency fee structures, MIST cases, medical authorisation issues), the harder we are to commoditise.

**5. Original data beats opinion.**
Anything we publish with a number in it should ideally be a number we generated, sourced from a verifiable third party, or pulled from a public dataset we cite properly. AI tools cite numbers; opinion pieces don't get cited.

**6. Don't publish what competitors already publish well.**
There's no need for our "How does AI receptionist work" post when Smith.ai's already ranks. Find the angles they're not covering — usually the operational, the regional, and the post-purchase content.

**7. GEO is downstream of authority, not a separate channel.**
LLM citations follow real-world signals: backlinks, brand mentions, structured data, expert authorship. There is no GEO trick that bypasses authority. Build authority, citations follow.

---

## 2. Topic architecture (the cluster model)

The site has a small number of pillar pages, each surrounded by supporting cluster content. Pillars compete on broad terms, clusters compete on long-tail. Internal linking flows pillar → cluster → pillar.

```
                    [calldella.com — homepage]
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   [Pillar A]            [Pillar B]            [Pillar C]
   Intake Guide          Operations            Compliance
        │                     │                     │
   ┌────┴────┐           ┌────┴────┐           ┌────┴────┐
   ▼         ▼           ▼         ▼           ▼         ▼
 Cluster   Cluster    Cluster   Cluster    Cluster   Cluster
  posts     posts      posts     posts      posts     posts
```

**Three pillars, deliberately:**

- **Pillar A — The PI Intake Playbook.** The definitive guide to running PI intake (script, checklist, KPIs, scoring rubrics). Owns commercial-informational queries.
- **Pillar B — Intake Operations.** How firms actually run intake — staffing, after-hours coverage, conversion benchmarks, ROI calculators. Owns operational queries.
- **Pillar C — Privilege, Compliance & Trust.** HIPAA, BAA, attorney-client privilege at intake, state bar advertising rules, AI disclosure obligations. Owns the trust queries that block deals.

A fourth cluster sits separately: **State pages** (location landing pages). These don't roll up to a pillar — they're parallel, querying-by-jurisdiction.

---

## 3. URL structure & information architecture

```
calldella.com/                              ← homepage
calldella.com/pricing                       ← service: pricing
calldella.com/how-it-works                  ← service: process
calldella.com/security                      ← service: trust signals

calldella.com/intake-playbook/              ← Pillar A index
calldella.com/intake-playbook/[slug]        ← cluster posts under A

calldella.com/operations/                   ← Pillar B index
calldella.com/operations/[slug]             ← cluster posts under B

calldella.com/compliance/                   ← Pillar C index
calldella.com/compliance/[slug]             ← cluster posts under C

calldella.com/states/                       ← location index
calldella.com/states/[state-slug]           ← state page

calldella.com/case-types/                   ← case-type index
calldella.com/case-types/[type-slug]        ← case-type page

calldella.com/compare/[competitor-slug]     ← comparison pages

calldella.com/changelog                     ← product updates (small, but feeds GEO freshness signals)
calldella.com/about                         ← E-E-A-T page
calldella.com/about/[author-slug]           ← author bios
```

**Why no `/blog` namespace:**
A `/blog` URL signals "marketing content" to both Google and LLMs. Putting cluster posts inside their pillar (e.g., `/intake-playbook/medical-authorisation-at-intake`) signals subject-matter depth. It's a small thing that compounds.

**Why states is separate from case-types:**
A New York firm handling slip-and-fall has different intake requirements than a Texas firm handling auto. Crossing the matrix at the URL level (`/states/new-york/case-types/slip-and-fall`) is bait for spam. Keep the axes separate.

---

## 4. Page-type taxonomy & cannibalisation rules

Each page type has a defined role. Cannibalisation usually happens when two types overlap. Use this table to decide where new content lives.

| Type | Goal | Primary intent | Canonical query example | Conversion CTA |
|---|---|---|---|---|
| Service page | Sell the product | Commercial | "AI intake for personal injury firms" | Hire Della |
| Pillar page | Establish topic authority | Informational-commercial | "personal injury intake guide" | Read related cluster |
| Cluster post | Answer a specific question | Informational | "what should be on a PI intake form" | Read related cluster + soft CTA |
| State page | Localise for jurisdiction | Local-commercial | "personal injury intake [state]" | Hire Della (state-specific framing) |
| Case-type page | Vertical fit | Informational-commercial | "auto accident intake software" | Hire Della (case-type framing) |
| Comparison page | Win the bake-off | Decision-stage commercial | "Smith.ai vs Call Della" | Hire Della + book demo |

**The cannibalisation tests, applied before any new page:**

1. *Title test:* Does another page on the site already answer this in its title? If yes, merge.
2. *Meta description test:* Could two existing pages plausibly use the same meta description? If yes, kill one.
3. *SERP test:* Search the target query on Google with `site:calldella.com` after 90 days live. If two of your pages show up, you have a problem — pick the stronger one and 301 the other.
4. *Intent test:* If a user searched the target query, would they be satisfied by another page on the site? If yes, you don't need this page.

---

## 5. Pillar content (cornerstone pieces)

These three pages are the most important content on the site. They get the most internal links, the most outbound promotion, and they're updated quarterly. Each is 3,000–5,000 words.

### Pillar A — The PI Intake Playbook
**URL:** `/intake-playbook/`
**Primary query:** "personal injury intake guide"
**Secondary queries:** PI intake checklist, intake script template, intake best practices
**Format:** Long-form guide with downloadable artefacts (intake checklist PDF, scoring rubric)
**Originality angle:** Co-author with a practising PI attorney. Quote them throughout. Their bio at the top creates the E-E-A-T signal Google needs for legal content.
**Why this wins:** Competitors publish "how AI receptionists work." We publish "how to run intake." Different content gravity.

### Pillar B — Intake Operations
**URL:** `/operations/`
**Primary query:** "personal injury law firm intake conversion rate"
**Secondary queries:** intake KPIs, intake staffing, after-hours coverage, intake ROI
**Format:** Data-heavy operational guide with calculators (cost-per-signed-case calculator, missed-call cost calculator)
**Originality angle:** Original survey of 50+ PI firms on their intake operations. This becomes our citable data asset for years.
**Why this wins:** Generates the numbers that get cited in articles, podcasts, AI answers.

### Pillar C — Privilege, Compliance & Trust
**URL:** `/compliance/`
**Primary query:** "AI receptionist HIPAA compliance"
**Secondary queries:** attorney-client privilege AI, state bar AI rules, BAA legal intake
**Format:** State-by-state breakdown of advertising/AI disclosure rules + attorney-client privilege analysis
**Originality angle:** First publication to comprehensively map state bar rules on AI use in legal practice (as of writing this plan, ABA Formal Opinion 512 from July 2024 is the only national reference, and state-level interpretations vary widely).
**Why this wins:** This is the deal-breaker page. Every partner asks "is this allowed?" before signing. Owning the answer wins every demo.

---

## 6. Service pages (commercial intent — the conversion engine)

Five pages, no more. Each one is short, focused, conversion-optimised. They link OUT to clusters but never replicate cluster content.

| URL | Primary query | What it does |
|---|---|---|
| `/` (homepage) | "Call Della" / branded | Sells the product to traffic that knows it |
| `/pricing` | "Call Della pricing" / "AI legal intake pricing" | Plans, transparent pricing, FAQ at bottom |
| `/how-it-works` | "AI receptionist for law firms" | Process explanation, deployment timeline, integration |
| `/security` | "AI legal intake HIPAA" | Trust signals, certifications, BAA details |
| `/hire-della` | branded conversion page | The booking page (Cal.com embed) |

**Cannibalisation guardrail:** None of these compete with Pillar A/B/C content. The service pages convert intent that already exists; the pillars create that intent.

---

## 7. Location landing pages (the structured approach)

This is where most SaaS sites poison their own SEO. Generic city pages = doorway pages = manual penalties. Done right, location pages are some of the highest-converting content on the site.

### The non-negotiable rule
> A location page must be more useful than the equivalent page on a competitor's site, AND it must offer something a generic page can't.

If you can replace `[CITY]` in the page with a different city without changing the rest, the page should not exist.

### What makes a state page genuinely unique
For PI specifically, this is easier than other verticals because PI law is wildly state-specific. A real state page contains:

1. **Statute of limitations** for that state (e.g., Texas = 2 years, Maine = 6 years)
2. **Comparative negligence rules** (pure / modified / contributory — 50% bar / 51% bar)
3. **No-fault status** (PIP requirements where applicable)
4. **Damages caps** if any (medical malpractice typically, sometimes others)
5. **Discovery rule** specifics
6. **Recent jury verdict ranges** for common case types in major metros (cite The National Law Journal or VerdictSearch where possible)
7. **Filing volume context** (how many PI cases filed in state courts last year)
8. **Local PI firm landscape** (high-level — number of practices over 10 attorneys, biggest cities for PI)
9. **State bar advertising rules** that affect intake (some states regulate what you can say in solicitation)
10. **How Della handles state-specific intake** (e.g., "In Florida, Della captures PIP details and confirms the 14-day medical attention requirement")

A page with all ten signals is genuinely useful and not generic.

### URL pattern
```
/states/florida           ← state hub
/states/florida/miami     ← only if metro deserves its own page (see below)
```

### When does a metro deserve its own page?
Only when ALL of these are true:
- The metro has at least 100 PI firms (Miami, Houston, LA, Chicago, NYC qualify)
- The metro has distinct legal characteristics from the rest of the state (e.g., New York City vs upstate NY)
- We have at least 5 unique data points specific to that metro

If those don't hold, the state page is enough. **Don't build a Boise page just to have one.**

### Phased state rollout
Don't launch with 50 states. Launch with the 6 states where PI volume is highest (Texas, Florida, California, New York, Illinois, Georgia), validate they rank, then add 2–3 states per month based on outbound demand.

### State page template structure
```
<H1>Personal injury intake in [State]: After-hours coverage built for [State] PI firms</H1>

[200-word intro: state PI landscape framing]

<H2>[State] personal injury law: what intake needs to capture</H2>
- SOL
- Comparative negligence
- No-fault status
- Damages caps

<H2>Why after-hours intake matters more in [State]</H2>
[State-specific data — call volume, filing rates, jury verdict averages]

<H2>How Della handles [State] intake</H2>
[Specific examples: e.g., "For Texas auto cases, Della confirms PIP coverage status, captures the police report number for the DPS Crash Report system, and flags whether the incident occurred in a county under the modified comparative negligence 51% bar"]

<H2>State bar rules on AI use in legal intake</H2>
[Specific to that state — most states haven't formally ruled, document this]

<H2>Pricing for [State] firms</H2>
[Same pricing as everywhere; no fake regional discounts]

<CTA>Book a discovery call</CTA>

<H2>Frequently asked by [State] firms</H2>
[5-7 state-specific FAQ entries, NOT a copy-paste of the global FAQ]
```

### Cannibalisation guardrail for state pages
- State page targets `[state] personal injury intake`
- Pillar B targets `personal injury law firm intake operations` (national)
- These don't compete because Google reads the geo modifier as different intent
- BUT: avoid creating state pages that target `[state] AI receptionist for law firms` if that's what the homepage targets — be deliberate about the qualifier

---

## 8. Case-type pages (the vertical play)

Sit alongside state pages but on a different axis: case type rather than geography.

### URL structure
```
/case-types/auto-accidents
/case-types/slip-and-fall
/case-types/medical-malpractice
/case-types/wrongful-death
/case-types/workers-compensation
/case-types/product-liability
/case-types/dog-bites
/case-types/trucking-accidents
```

### What goes on a case-type page
- The intake protocol Della uses for this case type (specific questions, evidence captured)
- Statute of limitations considerations specific to this case type (e.g., medical malpractice often has different SOL than other PI)
- Insurance/liability context (e.g., trucking has FMCSA implications)
- What a strong intake looks like vs a weak one for this case type
- Sample dossier for this case type (sanitised real example)

### Cannibalisation guardrail
- Case-type pages target `[case-type] intake software` or `[case-type] intake protocol`
- They do NOT target `[case-type] lawyer` — that's a directory query, not ours
- They link to relevant state pages, not the other way around

### Phased rollout
Start with three case types: **auto, slip-and-fall, trucking**. These cover ~70% of PI volume in most firms. Add others quarterly based on what outbound prospects ask for.

---

## 9. Cluster blog posts (the long tail)

Each pillar gets 8–12 cluster posts in the first six months. Each post answers one specific question that pillar visitors ask.

### Pillar A clusters — The PI Intake Playbook
1. What questions should a PI intake form contain
2. How to write a PI intake script (with downloadable template)
3. Intake red flags: when to politely decline a case
4. Medical authorisation at intake: when to capture, when to wait
5. The 30-second rule: why answer speed predicts signing rate
6. Intake handoff to attorneys: what should be in the file
7. Intake KPIs that actually predict revenue
8. Statute of limitations: how intake should screen for SOL risk
9. Spotting fraud at intake: behavioural signals
10. The intake-to-retainer conversion: what slows it down

### Pillar B clusters — Intake Operations
1. Cost per signed case: how to calculate it (with our calculator)
2. Missed call cost calculator: a math walkthrough
3. After-hours intake: in-house vs human service vs AI (full comparison with cost models)
4. Staffing the intake desk: when to hire your second person
5. Intake CRM benchmarks: what good looks like
6. Lead source attribution at intake: solving the "what worked" problem
7. The intake manager job description: what to hire for in 2026
8. PI lead-gen channel mix: where the calls actually come from
9. Holiday and weekend intake coverage: the four approaches
10. ROI of AI intake: a 90-day model

### Pillar C clusters — Privilege, Compliance & Trust
1. Attorney-client privilege at the AI intake call: what counts
2. ABA Formal Opinion 512 explained for PI firms
3. State bar rules on AI use: a 50-state tracker (live document, updated quarterly)
4. HIPAA at intake: what counts as PHI, what doesn't
5. BAA requirements when intake captures medical details
6. Recording disclosure rules: state-by-state two-party consent
7. AI disclosure to callers: what the law actually requires (vs what's prudent)
8. SOC 2 vs HIPAA vs ISO 27001 for legal vendors: what matters
9. Data retention policies for legal intake records
10. The deletion request: how to handle a former caller's "delete my data"

### Cluster post template
```
<H1>[Specific question]</H1>
[2-paragraph TL;DR with the answer up top, for the LLMs and the impatient]

<H2>[The problem in detail]</H2>
<H2>[The framework / answer]</H2>
<H2>[A concrete example]</H2>
<H2>[Edge cases / state variations]</H2>
<H2>How Della handles this</H2>  ← soft product mention, never a hard sell
<H2>FAQ</H2>  ← schema-marked-up, 4-6 questions

[Internal links: 1 link to the pillar, 2-3 links to sibling clusters, 1 link to a relevant service page]
```

### Cluster cadence
- Phase 1 (months 1–2): 3 posts per pillar = 9 posts. The launch foundation.
- Phase 2 (months 3–6): 1 post per week, alternating across pillars.
- Phase 3 (month 7+): 2 posts per week as content team scales.

---

## 10. Comparison pages (the bake-off win)

When a partner is in the decision phase, they search "[Competitor] vs [Competitor]" or "[Competitor] alternative." Own these queries.

### URL pattern
```
/compare/smith-ai
/compare/casegen-ai
/compare/legalclerk
/compare/answering-legal
/compare/posh
```

### What goes on a comparison page
- Honest comparison table (pricing, features, integration, reviews — not loaded toward us)
- Specific scenarios where each is the right answer (yes, including when the competitor wins)
- Switching guide if applicable

### Critical: be honest
The hidden trick of comparison pages: if you write a fair comparison that admits where the competitor wins, Google trusts the page more, AI tools cite it more, and prospects respect it more. Most comparison pages on the internet are obvious sales pieces; an honest one stands out.

### Cannibalisation guardrail
Comparison pages target the comparison query specifically. They link to pillars but don't try to rank for pillar queries.

---

## 11. GEO strategy (winning AI citations)

The AI search engines (ChatGPT, Claude, Perplexity, Google AI Overviews) cite a different set of sources than traditional search rewards. Optimising for them is its own discipline.

### What gets cited in AI answers
1. **Wikipedia and Wikidata** (when applicable — usually not for SaaS)
2. **High-authority publications** with topic relevance (law.com, ABA Journal, Above the Law, Bloomberg Law)
3. **Software directories** (Capterra, G2, GetApp, Software Advice, Crozdesk, SourceForge)
4. **Reddit and Quora** with substantive answers (not promotional)
5. **YouTube transcripts** of substantive content
6. **Original research** with citable numbers
7. **Comparison pages** with structured data
8. **Government and academic sources** (.gov, .edu)
9. **Industry-specific Q&A** (Avvo, Justia for legal)
10. **The brand's own site** when it's the canonical source on a topic

### Tactical priorities for Call Della

**Priority 1 — Get listed in legal-tech directories (week 1)**
- Capterra (paid placement worth it for legal vertical)
- G2 (free profile, paid for premium)
- GetApp
- Software Advice
- Lawyerist's vendor list
- LawSites tools directory
- ABA Legal Technology Resource Center listing
These get scraped by every LLM training pipeline.

**Priority 2 — Original data (months 1–3)**
Run an industry survey on PI intake operations. Publish results as a citable report. Title it something AI tools will recognise as a primary source: "The 2026 State of PI Intake Report." Pitch the data to law.com, ABA Journal, Lawyerist, Above the Law. One placed article = months of citations.

**Priority 3 — llms.txt (week 1)**
Implement `llms.txt` at the root of calldella.com. Emerging standard, easy to add, signals to crawlers what content is canonical. Format:
```
# Call Della
> After-hours intake specialist for personal injury law firms

## Core pages
- /intake-playbook/: The PI Intake Playbook
- /operations/: Intake Operations
- /compliance/: Privilege, Compliance & Trust

## Key facts
- Founded 2026
- Built on Retell AI infrastructure
- Plans: Standard ($149), Practice ($249), Group ($599)
```

**Priority 4 — Schema markup (week 1)**
Every page must have structured data. Specifically:
- `Organization` schema on every page (sitewide)
- `Service` schema on `/`, `/pricing`, `/how-it-works`
- `Article` schema on every blog/cluster post (with `author` and `datePublished`)
- `FAQPage` schema where FAQ blocks exist
- `BreadcrumbList` on every page beyond the homepage
- `Product` schema on `/pricing` (with `Offer` for each tier)
- `LocalBusiness` schema on state pages where applicable
- Author bio pages with `Person` schema linked to LinkedIn/Twitter via `sameAs`

**Priority 5 — Author authority (months 1–3)**
Every long-form piece needs a named author. Andy is the founder; he should be one author. Find 1–2 PI attorneys willing to co-author or be quoted (even unpaid — many will, for the credit). Set up author bio pages with proper `Person` schema and links to LinkedIn, bar admissions, etc.

**Priority 6 — Reddit and Quora presence (ongoing)**
Identify the 5–10 threads on Reddit (r/Lawyertalk, r/PersonalInjuryLaw, r/legaltech) and Quora that come up for relevant queries. Post substantive answers. Don't link-spam — answer the question, mention Call Della only when it's directly relevant. LLMs cite Reddit heavily; this matters.

**Priority 7 — YouTube transcripts (months 2–6)**
Record 5–10 short videos: "What is PI intake," "How after-hours coverage works," "Della handles a sample intake call." Upload with full descriptions. YouTube transcripts are heavily indexed by LLMs.

**Priority 8 — Wikipedia / Wikidata (only when warranted)**
Don't try to create a Wikipedia page for Call Della itself — it'll be deleted as not yet notable. But:
- Add Call Della to the Wikidata entity for "AI receptionist" or "Legal intake software" once enough citations exist (typically 6+ months after launch).
- If Andy or his US partner ever speak at a major conference, get them cited in relevant Wikipedia articles.

### GEO measurement
Andy already runs CiteFire, so this is the easy part. Track:
- Brand mention rate in ChatGPT, Claude, Perplexity for relevant queries
- Citation rate (which pages are being cited)
- Competitor citation rate as benchmark
- Query-to-mention conversion over time

---

## 12. Technical SEO (the foundation)

Get these right at launch. They compound.

### Must-haves at launch
- [ ] HTTPS everywhere (Coolify handles via Let's Encrypt)
- [ ] Next.js static export where possible for top-of-funnel pages
- [ ] Core Web Vitals: LCP <2.0s, INP <200ms, CLS <0.1
- [ ] Sitemap.xml at root, submitted to Google Search Console + Bing Webmaster Tools
- [ ] Robots.txt allowing all crawlers (no clever blocks; LLM crawlers respect it)
- [ ] llms.txt at root (see GEO section)
- [ ] Schema markup on every page (see GEO section)
- [ ] Canonical tags on every page (no exceptions)
- [ ] Open Graph + Twitter Card metadata on every page
- [ ] Hreflang tags only if you launch international (don't bother for US-only)
- [ ] 301 redirect plan for any URL changes
- [ ] Author bio pages with Person schema

### What to avoid
- Excessive `noindex` (only on `/admin/` and any thank-you pages)
- Pagination beyond /page/2 (collapse if possible — better for crawl budget)
- Duplicate H1s on a page
- Image lazy-loading on above-the-fold images (hurts LCP)
- Web fonts that block rendering (use `next/font` properly)

---

## 13. Internal linking rules

Internal links pass authority. Most sites do them randomly. Be deliberate.

**The rules:**

1. Every cluster post links UP to its pillar (always, near the top, in body).
2. Every cluster post links to 2–3 sibling clusters under the same pillar.
3. Every cluster post links to one relevant service page (not the homepage).
4. Pillar pages link to their top 5 most important cluster posts in the body.
5. Service pages link only to other service pages and to pillars (never to clusters — keeps service pages laser-focused on conversion).
6. State pages link to relevant case-type pages and to Pillar A.
7. Comparison pages link only to service pages and pillars.

**Anchor text rules:**
- Use descriptive anchors that match the target page's H1, not "click here"
- Don't keyword-stuff anchors — varied natural language ranks better than 50 instances of "AI intake software"

---

## 14. Measurement framework

What to track, what NOT to track.

### Track
- **Indexed pages** (Search Console). Goal: every published page indexed within 14 days.
- **Brand search volume** (Search Console + GA4). The honest measure of awareness.
- **Non-brand organic traffic by cluster.** Each cluster's posts should compound.
- **Pages cited by AI tools** (CiteFire). Goal: cited in 30%+ of relevant prompts within 6 months.
- **Conversion rate by traffic source.** Organic-driven demos vs outbound-driven demos — separate funnels.
- **Cluster post lift over time.** Posts published 6 months ago should still be growing in traffic.

### Don't obsess over
- Position-1 ranking for any single query (zero-click SERPs make this less meaningful)
- Total traffic vs. relevant traffic (PI partner traffic > random traffic)
- Domain rating / DR scores (proxy metric, don't optimise for it directly)

---

## 15. Phased rollout (the realistic 12-month plan)

### Months 1–2: Foundation
- Launch site with all 5 service pages
- Publish 3 pillar pages (skeleton versions OK at launch, expand over month 2)
- Publish 3 cluster posts per pillar (9 total)
- Publish 6 state pages (TX, FL, CA, NY, IL, GA)
- Publish 3 case-type pages (auto, slip-and-fall, trucking)
- Submit to all relevant directories
- Implement llms.txt and full schema
- Set up Search Console + GA4 + CiteFire monitoring

**Total: ~21 pages live by end of month 2.**

### Months 3–6: Build out
- Cluster posts: 1 per week (~16 over 4 months)
- State pages: 2–3 per month based on demand
- Case-type pages: 1 per month
- Launch original PI intake survey (Pillar B's data play)
- 2–3 comparison pages
- Begin Reddit/Quora presence
- Pitch original research to industry publications

**End of month 6: ~50 pages live, 2–3 substantial earned-media placements.**

### Months 7–12: Scale and authority
- Cluster posts: 2 per week
- Complete state coverage (all 50 states by end of year, only if the first 12 perform)
- All major competitor comparison pages live
- Author bio pages for 3+ contributors
- First annual update to pillars (with new data)
- YouTube channel with 10+ videos

**End of month 12: ~120 pages live, robust GEO presence, organic-driven demos as significant share of pipeline.**

---

## 16. Things to watch for (the failure modes)

- **Publishing volume over quality.** A site with 200 mediocre posts ranks worse than one with 50 excellent ones. Quality compounds; quantity doesn't.
- **Generic location pages slipping in.** If the writing process makes a state page feel routine, the page is too generic. Stop and add real state-specific data or kill it.
- **AI-generated content without expert review.** Don't ship LLM-written legal content without a real attorney reviewing. Both an SEO risk (Google's HCU update penalises this) and a real liability risk.
- **Cannibalisation appearing late.** Run a quarterly audit: search every primary query with `site:calldella.com`, ensure exactly one page ranks. Merge duplicates.
- **Forgetting the intake manager.** If every page is partner-targeted, the gatekeeper has no reason to recommend you internally.
- **GEO chasing instead of authority building.** GEO citations follow real authority. Don't try to game LLM inclusion; build the authority that earns it.

---

## 17. The first concrete actions (week 1)

If Andy can do nothing else in week 1, do these:

1. Buy the domain (done) and register on Search Console + Bing Webmaster Tools
2. Implement llms.txt at the root
3. Implement Organization, Service, Article, and FAQPage schemas at the template level (so every future page inherits them)
4. Set up CiteFire monitoring for "AI legal intake," "personal injury intake software," "after-hours intake for law firms," and 5–10 other priority queries
5. Submit to Capterra, G2, GetApp, Software Advice
6. Draft (don't yet publish) the three pillar pages
7. Identify and reach out to 3 PI attorneys willing to be quoted or co-author content

Everything else can wait two weeks.
