# calldella.com — Landing Page Build Specification

> A single-page marketing site for Call Della, an after-hours intake specialist for personal injury law firms. Apex domain: `calldella.com`. The portal lives separately at `app.calldella.com` (see `BUILD.md`).

**Read this file end-to-end before writing any code. Read `DELLA_BRAND.md` first for voice, tone, and visual identity.**

---

## 1. Project scope

- **One page**, scrolling, on `calldella.com`
- **Separate Next.js project** from the platform — keep the marketing site lean and statically generated
- **Single primary CTA**: book a 20-minute discovery call (Cal.com or Calendly embed)
- **Secondary CTA**: listen to a sample Della intake call (audio file)
- **No blog, no resources page, no careers page** for v1. If the firm needs convincing, the page does it or it doesn't.

**Out of scope for v1:**
- Customer testimonials (we don't have customers yet)
- Case studies (same)
- Login/signup (lives on `app.calldella.com`)
- Contact form (the demo booking is the contact)
- Pricing page beyond the inline section

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static export where possible) |
| Language | TypeScript ESM (strict) |
| Styling | Tailwind CSS v4 with custom theme — NO shadcn/ui |
| Fonts | Newsreader + JetBrains Mono via `next/font/google` |
| Animation | Framer Motion (sparingly — see Section 8) |
| Audio player | Native HTML5 `<audio>` with custom UI |
| Demo booking | Cal.com embed (Andy already uses Cal — confirm) |
| Forms | None |
| Analytics | Plausible (privacy-respecting, no cookie banner needed) |
| Hosting | Coolify on Andy's Contabo VPS (same infrastructure as platform) |
| DNS | Cloudflare |

---

## 3. Information architecture

The page is one continuous scroll, sections in this order:

1. **Hero** — wordmark, tagline, primary CTA, supporting visual
2. **The problem** — three statistics that frame the cost of after-hours leak
3. **Meet Della** — who Della is, what she does
4. **The morning brief** — product mockup with explanation
5. **How it works** — four-step deployment
6. **Pricing** — three tiers, transparent
7. **Trust** — security, infrastructure, what the firm owns
8. **FAQ** — six questions
9. **Footer** — minimal: wordmark, copyright, two links (terms, privacy)

Each section has its own component and copy spec below.

---

## 4. Visual direction

**Reference document:** `DELLA_BRAND.md` Section 7. **Reference implementation:** the dossier portal artifact (palette, type, stamps, file tabs, paper texture).

The landing page is the trade publication; the portal is the dossier itself. Same paper, same ink, same restraint. The landing page should feel like an editorial spread from a legal trade journal — generous margins, serif headlines that breathe, rule lines, occasional stamps and pull-quotes.

**Layout principles:**
- Max content width: 1180px
- Generous vertical rhythm: minimum 96px between major sections
- Most copy in single-column long-form serif body (max-width ~640px for readability)
- Stat blocks and dossier mockups break out wider
- Light mode default. Theme toggle in the top-right.

**Header:**
- Sticky, low-profile (56px tall)
- Left: `call della` wordmark in Newsreader 600
- Right: pricing anchor link, "Hire Della" CTA button (filled ink), theme toggle
- Bottom border: 1px `var(--rule)`

**Footer:**
- Three columns on desktop, stacked on mobile
- Column 1: wordmark + small mono tagline `EST. 2026 · LEGAL INTAKE`
- Column 2: nav links (Pricing, How it works, FAQ)
- Column 3: legal links (Terms, Privacy, Security)
- Bottom rule, copyright in small mono caps centred: `© 2026 CALL DELLA · ALL RIGHTS RESERVED`

---

## 5. Section-by-section copy & spec

### Section 1 — Hero

**Layout:** Two-column on desktop (60/40 split). Left: copy. Right: dossier visual.

**Above the headline (mono caps, small):**
```
EST. 2026 · AFTER-HOURS INTAKE · USA
```

**Headline (Newsreader, 56px desktop / 36px mobile, 600 weight, letter-spacing -0.025em):**
```
Della takes the overnight calls.
Your team takes the morning.
```

**Subhead (Newsreader, 18px, ink-soft, italic on second sentence):**
```
An after-hours intake specialist for personal injury law firms.
Every overnight caller, on your desk by dawn.
```

**Primary CTA (filled ink button, mono caps):**
```
HIRE DELLA →
```

**Secondary CTA (text link with underline):**
```
↓ Hear a real intake call (2:14)
```

**Right column visual:**
A faux-dossier mockup — a rotated 2° "INTAKE REPORT" card showing one urgent call (Maria Gonzalez, the one from the prototype). Stamps visible: `URGENT`, `NEW INTAKE`. Mono metadata strip across the top. Slightly torn-paper edge along one side. Hard offset shadow.

**Below the fold of the hero:**
A thin mono caps row, separated by vertical bars, in `--ink-soft`:
```
BUILT ON RETELL AI · SOC 2 IN PROGRESS · BAA-READY · US-BASED
```

---

### Section 2 — The problem

**Section eyebrow (mono caps, centred):**
```
THE OVERNIGHT LEAK
```

**Section headline (Newsreader, 36px, centred, max-width 720px):**
```
Personal injury firms spend $300,000 a year on lead generation.
Then 30 to 50 percent of those calls go to voicemail.
```

**Sub-paragraph (centred, max-width 580px, body):**
```
Every PI firm knows the math. Google Ads run $100 to $400 per click. Cost per signed case: $1,500 to $8,000. The single biggest leak in the funnel isn't ad spend, intake script, or follow-up cadence. It's the hours your intake team isn't there.
```

**Three stat blocks below (grid of three on desktop, stacked on mobile):**

Each stat block:
- Form-style border, paper background
- Small mono caps label at top
- Big serif number in the middle (60px)
- Single-sentence italic explanation below

| Label | Number | Sub |
|---|---|---|
| AFTER-HOURS LEAK | `30–50%` | of inbound PI calls reach voicemail outside business hours |
| 30-SECOND ANSWER RATE | `4×–8×` | higher signing rate vs. firms answering after five minutes |
| ANNUAL COST OF MISSED CALLS | `$250K+` | average revenue lost per mid-size PI firm to overnight calls |

**Source row beneath, small mono italic:**
```
SOURCES: ABA TECH REPORT · LAW.COM INDUSTRY SURVEYS · INTERNAL ANALYSIS · 2025
```

(*Note: pull current real numbers when finalising — these are reasonable approximations from the research.*)

---

### Section 3 — Meet Della

**Layout:** Two-column. Left: copy. Right: a "transcript snippet" treatment styled like a torn page from an intake transcript.

**Eyebrow:**
```
MEET DELLA
```

**Headline:**
```
The intake specialist your firm hires for the hours your team isn't there.
```

**Body (3 paragraphs):**

```
Della answers within two rings, every time, including 2 a.m. on a Sunday. She identifies herself by name. She knows the firm she works for. She asks the right questions in the right order — incident type, date, jurisdiction, injury severity, fault, insurance contact, prior counsel, statute of limitations. She reassures callers without committing the firm to anything.

What she doesn't do: pretend she isn't an AI when asked, give legal advice, quote fees, or pressure for retainer signatures. Della was built for personal injury intake from the first call, not adapted from a generic receptionist script.

By the time your intake manager arrives the next morning, every overnight call has a complete dossier waiting — caller's own words, AI-generated summary, urgency classification, recommended action. Triage takes minutes, not hours.
```

**Right column "transcript snippet":**
A dossier-card mockup showing:
- Mono caps header: `INTAKE REPORT · INT-04421`
- Caller name in serif: **Maria Gonzalez**
- A pulled-quote in italic (the snippet from the prototype): *"I was stopped at a red light and this guy just ploughed into me. I've been in pain since and don't know what to do."*
- Mono caption beneath: `— TRANSCRIBED FROM RECORDING · 23:42 CDT`
- Stamp in corner: `URGENT`

---

### Section 4 — The morning brief

**Layout:** Centred eyebrow + headline, then a wide product mockup below, then three explanatory text blocks in a row beneath.

**Eyebrow:**
```
THE MORNING BRIEF
```

**Headline (max-width 760px, centred):**
```
Every overnight call. On your desk by 7 a.m.
Sorted by urgency, ready for action.
```

**Product mockup:**
A wide screenshot of the dossier portal's main dashboard — the urgent callbacks at top, full intake log below. Take this directly from the prototype's `ClientDashboard` component. Display in a "browser frame" mockup with paper-coloured chrome, NOT a generic gradient browser frame.

**Three column explainer beneath the mockup:**

Each column: small mono caps label, then a serif paragraph.

| Label | Content |
|---|---|
| TRIAGE-READY | Three urgency tiers — urgent, pending, closed. Della classifies based on signals only PI firms care about: ER visit, fault admission, opposing insurance contact, statute of limitations exposure. |
| EVIDENCE-FIRST | Every dossier includes the AI summary, the caller's own words verbatim, the recommended action, and a one-click link to the full recording and transcript. |
| AUDIT-CLEAN | Every action is logged. Who marked the call followed up, when, with what notes. Built for firms that take privilege and discovery seriously. |

---

### Section 5 — How it works

**Layout:** Four numbered steps, vertical on mobile, horizontal grid on desktop. Each step in a small file-card with a folder tab on top showing the step number in mono.

**Eyebrow:**
```
HOW IT WORKS
```

**Headline:**
```
Della is on your phone line tonight.
```

**Four steps:**

**01 · ROUTE**
After-hours calls forward to Della. We support call-forwarding, IVR routing, or full takeover — your choice, your existing number.

**02 · QUALIFY**
Della answers, identifies herself as the firm's after-hours intake specialist, qualifies the caller against your intake protocol, and reassures.

**03 · DELIVER**
Within minutes of the call ending, a complete dossier appears in your portal — summary, transcript, recording, urgency classification.

**04 · ACT**
Your team logs in at 7 a.m., works the urgent callbacks first, marks each as followed up. Audit trail captured automatically.

**Caption below the four steps (centred, italic, ink-soft):**
```
Implementation typically takes 48 hours. No long-term contract.
```

---

### Section 6 — Pricing

**Eyebrow:**
```
PRICING
```

**Headline (max-width 660px):**
```
Transparent monthly rates.
No setup fees. No multi-year contracts.
```

**Three pricing cards, side by side on desktop, stacked on mobile.**

Each card uses the file-card pattern with a folder tab on top showing the tier name in mono caps.

#### Card 1 — Standard

- **Tab label:** `STANDARD · ENTRY`
- **Price:** `$149` (large serif) `/MONTH` (small mono)
- **Subtitle:** Up to 150 minutes
- **Features (with check marks):**
  - 1 dedicated AI intake specialist
  - Call summaries + transcripts
  - Urgency classification
  - Email notifications
  - Standard email support
- **CTA:** `HIRE STANDARD →`

#### Card 2 — Practice (recommended)

- **Tab label:** `PRACTICE · POPULAR`
- **Recommended marker:** small `MOST POPULAR` stamp rotated -3° in top-right of card
- **Price:** `$249` `/MONTH`
- **Subtitle:** Up to 300 minutes
- **Features:**
  - Everything in Standard
  - SMS notifications for urgent calls
  - Custom intake protocol per firm
  - Priority email + phone support
  - Recording archive (90 days)
- **CTA:** `HIRE PRACTICE →` (filled, primary)

#### Card 3 — Group

- **Tab label:** `GROUP · MULTI-OFFICE`
- **Price:** `$599` `/MONTH`
- **Subtitle:** Up to 1,000 minutes
- **Features:**
  - Everything in Practice
  - Multiple AI agents (different personas per office or practice area)
  - CRM webhook integration
  - Dedicated success manager
  - SLA guarantees
- **CTA:** `BOOK A CONVERSATION →`

**Beneath the cards, small mono caption:**
```
USAGE OVER PLAN BILLED AT $0.50 PER MINUTE · NO SURPRISES · CANCEL ANY TIME
```

---

### Section 7 — Trust

**Layout:** Two columns. Left: copy. Right: a list of "what you own" in dossier style.

**Eyebrow:**
```
SECURITY & DATA
```

**Headline:**
```
Built for firms that take privilege seriously.
```

**Body (left column):**

```
Every call recording, transcript, and dossier belongs to your firm. We are the processor, you are the controller. We don't train models on your call data. We don't sell, share, or analyse it for any purpose other than delivering the service you've hired Della for.

Encryption at rest (AES-256-GCM) and in transit (TLS 1.3). SOC 2 Type II audit underway. BAA available on the Practice and Group plans for firms handling matters with PHI exposure. Hosted in US data centres.
```

**Right column — "What your firm owns" list:**

A serif heading: *Your firm owns:*

A bulleted list (using small `✓` stamp markers in `--stamp-green`):
- Every recording
- Every transcript
- Every dossier and summary
- All caller data captured by Della
- The right to export everything, any time, in standard formats
- The right to delete on request — full deletion within 30 days

A serif heading further down: *We do not:*

A bulleted list with small `✗` markers in `--stamp-red`:
- Train AI models on your data
- Sell or share data with third parties
- Use data for advertising
- Hold data after termination beyond contractual retention

---

### Section 8 — FAQ

**Eyebrow:**
```
FREQUENTLY ASKED
```

**Headline:**
```
The questions managing partners ask first.
```

Six questions in an accordion. Each question is a serif h3 with a mono question number on the left (`Q01`, `Q02`...). Open accordion shows the serif body answer with a slight indent.

**Q01. Will Della tell callers she's an AI if asked?**
Yes. Della identifies herself as your firm's after-hours intake specialist. If a caller asks directly whether she's a real person, she will say she is an AI assistant capable of taking their information so a human can call them back. We do not deceive callers. Doing so creates regulatory and reputational risk we will not accept on your firm's behalf.

**Q02. What happens if a caller has an emergency?**
Della is trained to recognise emergencies (active medical crisis, threat of harm) and immediately direct the caller to 911 before continuing. She will note the emergency in the dossier and, on the Practice and Group plans, immediately SMS the firm contact on call.

**Q03. How does this work with our existing intake team?**
Della only handles the hours your team isn't there. She is configured around your existing business hours and overflow rules. Most firms use her overnight (6 p.m. to 8 a.m.), weekends, and during major holidays. Your intake team owns daytime calls as before.

**Q04. Can we customise what Della asks and how she responds?**
Yes. We start from a base PI intake protocol developed with practising attorneys, then customise to your firm's specific intake script during onboarding. You can update intake fields, escalation rules, and Della's voice introduction at any time.

**Q05. What about jurisdictional and statute-of-limitations issues?**
Della is configured for the jurisdictions your firm practises in. She'll flag callers outside your jurisdiction as referrals rather than intakes, and will surface statute-of-limitations risk in the dossier (e.g., "incident occurred 11 months ago — SOL exposure in [state]").

**Q06. What's the actual onboarding process?**
A 20-minute discovery call to understand your firm and intake protocol. We then provision Della, configure her against your protocol, and provide a test number for your team to call and review. You go live when you're satisfied — typically 48 hours from kick-off. No long-term contract; cancel any time after the first 30 days.

---

### Section 9 — Final CTA strip

A short single-section before the footer.

**Background:** `--ink` (deep ink colour). White text. Stamp-style borders.

**Headline (Newsreader, white, 36px, centred):**
```
Della is ready for tonight's calls.
```

**Sub (white, ink-faint, italic, centred):**
```
Twenty-minute discovery call. No pitch deck.
We'll walk you through the dossier, let you hear Della work, and answer your questions.
```

**CTA (large, paper-coloured filled button on the dark background, mono caps):**
```
BOOK A DISCOVERY CALL →
```

---

## 6. Components to build

Build these as standalone components in `src/components/`:

1. `Wordmark.tsx` — the "call della" type lockup, with optional mono date stamp
2. `Stamp.tsx` — same primitive as platform; reuse if possible
3. `StatBox.tsx` — same primitive as platform
4. `Rule.tsx` — same primitive as platform
5. `FileCard.tsx` — card with optional folder-tab label
6. `DossierMockup.tsx` — the inline mockup shown in hero and Section 4 (this is the showpiece — invest time)
7. `PricingCard.tsx` — file-card variant for pricing tiers
8. `FAQAccordion.tsx` — serif-styled accordion with mono question numbers
9. `AudioPlayer.tsx` — custom HTML5 audio with paper-styled controls (for the sample call)
10. `CTAButton.tsx` — filled-ink button with mono caps label and arrow
11. `PaperTexture.tsx` — fixed SVG noise overlay (same as platform)
12. `ThemeToggle.tsx` — sun/moon button
13. `BookingEmbed.tsx` — Cal.com embed wrapper, lazy-loaded
14. `Footer.tsx` / `Header.tsx`

Reuse the design tokens from the platform's `theme.ts`. The two codebases share visual identity but not code — copy the theme tokens across, don't try to build a shared package yet.

---

## 7. Animation guidelines

Use Framer Motion sparingly. The dossier aesthetic is about restraint and gravitas. Heavy parallax, scroll-jacking, or 3D will undermine it.

**Approved animations:**
- Hero dossier mockup: fades in + 8px upward translate on first paint
- Stat numbers: count-up animation on scroll into view, 800ms ease-out
- Pricing cards: hard-shadow lift on hover (`translate(-2px, -2px)` + `shadow-[4px_4px_0_var(--rule)]`)
- FAQ accordion: simple height auto, 200ms ease
- Section reveals: 12px upward translate + opacity 0→1, 400ms ease, on scroll into view (stagger 80ms between items in a group)

**Banned:**
- Parallax
- Scroll-hijacking
- Snap-scrolling
- Marquee/ticker tape
- Lottie animations of phones, robots, or workflow diagrams
- Hero video backgrounds
- Animated gradients

---

## 8. Performance budget

- LCP: under 2.0s on 4G
- Total page weight: under 500KB compressed (excluding the audio sample)
- No web fonts beyond Newsreader and JetBrains Mono (load with `next/font` for zero CLS)
- Audio sample lazy-loaded — only fetched on play click
- Cal.com embed lazy-loaded — only mounted when CTA is clicked, opens as a modal
- Static export where possible (`output: 'export'` in `next.config.ts`)
- No client-side JS for sections that don't need it (use Server Components by default)

---

## 9. SEO & metadata

```html
<title>Call Della — After-hours intake specialist for personal injury law firms</title>
<meta name="description" content="Della answers your firm's overnight calls, qualifies every caller, and delivers a triage-ready dossier by dawn. Built for PI intake from the first call." />
```

**Open Graph image:** A dossier-card mockup with the wordmark and tagline, 1200x630, manila/ink palette, paper texture. Static PNG generated once.

**Schema.org:** `Organization` + `Service` schema with the three pricing tiers. Don't bother with `Product` schema — this is a service.

**Robots:** allow indexing. Submit a sitemap with the single page to Google Search Console.

**Don't optimise for SEO traffic initially.** The buyer is reached through outbound (your US partner's sales motion). The page is a conversion tool for traffic he sends, not an organic SEO play.

---

## 10. Build phases

### Phase 0 — Foundation
- Init Next.js 15 project, Tailwind v4, TypeScript strict
- Wire `next/font` for Newsreader + JetBrains Mono
- Set up theme tokens as CSS variables on `:root[data-theme]`
- Build header, footer, theme toggle, paper texture overlay
- Deploy a blank styled page to verify Coolify pipeline

### Phase 1 — Section components
Build all 9 sections in order. Use real copy from this document. After each section, view in browser, screenshot, confirm it matches the dossier aesthetic before moving on.

### Phase 2 — DossierMockup component
This is the visual showpiece. Spend extra time. It should look like a real screenshot of the actual portal — paper background, stamps, file tab, metadata strip, all the dossier signals. Two variants: one for the hero (single intake card), one for Section 4 (full dashboard).

### Phase 3 — Audio player
Custom HTML5 player, paper-styled controls, mono timecode. Sample audio file: 2:14 of Della handling a slip-and-fall intake. Andy will provide the audio (placeholder MP3 acceptable for v1).

### Phase 4 — Cal.com embed
Lazy-loaded modal. Triggered by every "HIRE DELLA" CTA on the page.

### Phase 5 — Polish + perf
- Test on mobile (this is critical — most partners will first see the page on their phone)
- Tune animations
- Compress images (target AVIF + WebP fallback)
- Run Lighthouse, hit 95+ on every metric

### Phase 6 — Deployment
- Cloudflare DNS for calldella.com → Coolify VPS
- HTTPS via Let's Encrypt (Coolify handles)
- Plausible analytics injected
- Verify Open Graph image renders in LinkedIn/iMessage previews

---

## 11. Definition of done

The landing page is complete when:

1. A managing partner of a 30-attorney PI firm can land on `calldella.com`, read the page top to bottom in under 5 minutes, understand exactly what the product does, see the pricing, and book a discovery call without leaving the page.
2. The page is visually indistinguishable in spirit from the portal at `app.calldella.com` — same paper, same ink, same stamps, same restraint.
3. Lighthouse scores: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
4. Mobile experience is equal to desktop, not an afterthought.
5. The Open Graph card looks correct when the URL is pasted into LinkedIn, iMessage, and Slack.

---

## How to use this document with Claude Code

1. Drop this file plus `DELLA_BRAND.md` into a new repo as `LANDING_BUILD.md` and `DELLA_BRAND.md`.
2. Run `claude` in the repo.
3. First prompt:

> Read `DELLA_BRAND.md` then `LANDING_BUILD.md` end-to-end. Confirm you understand the brand voice, visual identity, and the page structure. Then start Phase 0. Stop after each phase, write a brief report to `BUILD_LOG.md`, and wait for me to say continue.

4. Reference the dossier portal artifact (`portal-dossier.jsx` from the platform build) for visual primitives — the landing page should feel like the same world.
