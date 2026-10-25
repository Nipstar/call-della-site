// Content manifest: one entry per URL. Titles, descriptions and dates live here only.
// Pages read metadata with pageMeta(); sitemap.ts and llms.txt are generated from it.
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';

export type PageEntry = {
  path: string;
  title: string; // full <title>, brand included where wanted
  description: string; // 140-160 chars
  primary: string;
  secondaries?: string[];
  section: 'core' | 'practice' | 'compliance' | 'playbook' | 'operations' | 'states' | 'case-types' | 'compare' | 'reference' | 'legal';
  summary: string; // one line for llms.txt
  datePublished: string;
  dateModified: string;
  reviewer?: string;
  priority?: number;
};

const REVAMP = '2026-10-25';

export const PAGES: PageEntry[] = [
  // Core
  { path: '/', title: 'AI Legal Intake for Law Firms, After Hours | Call Della', description: "Call Della is AI legal intake for law firms. Della answers after-hours calls, qualifies every caller and has a dossier on your desk by 7am. From $329 a month.", primary: 'ai legal intake', secondaries: ['ai intake for law firms', 'legal intake ai', 'voice ai intake for law firms', 'after-hours legal intake'], section: 'core', summary: 'What Call Della is and how after-hours AI legal intake works', datePublished: '2026-05-08', dateModified: REVAMP, priority: 1.0 },
  { path: '/how-it-works', title: 'How AI Legal Intake Works, Step by Step | Call Della', description: 'How legal intake automation works with Della: forward your line, she runs the intake questions, scores urgency and files a dossier before 7am. Four steps.', primary: 'legal intake automation', secondaries: ['automated legal intake', 'law firm intake automation', 'how does ai legal intake work'], section: 'core', summary: 'Forwarding, intake questions, urgency scoring and the morning brief', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.8 },
  { path: '/pricing', title: 'Call Della Pricing: Solo $329, Practice $598 | Call Della', description: 'Call Della pricing: Solo $329 a month for 300 minutes, Practice $598 for 600 minutes, Group custom. Month-to-month, no setup fee, $0.50 per extra minute.', primary: 'Call Della pricing', secondaries: ['ai legal intake pricing'], section: 'core', summary: 'Solo, Practice and Group plans with what every plan includes', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.9 },
  { path: '/security', title: 'Security and Data Handling | Call Della', description: 'How Call Della handles legal intake confidentiality: encryption in transit and at rest, firm-owned recordings and transcripts, set retention, no model training.', primary: 'legal intake confidentiality', secondaries: ['hipaa ai receptionist'], section: 'core', summary: 'Data handling, retention and no model training', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.7 },
  { path: '/about', title: 'About Call Della | Founder Andy Norman', description: 'About Call Della, the after-hours intake specialist for law firms. Founded in 2026 by Andy Norman and built by Antek Automation on the Retell AI voice platform.', primary: 'Call Della founder', secondaries: ['Andy Norman'], section: 'core', summary: 'Who builds Call Della and why', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.6 },
  { path: '/about/andy-norman', title: 'Andy Norman, Founder of Call Della', description: 'Andy Norman founded Call Della and Antek Automation. He builds voice AI intake for law firms and writes the Call Della guides on intake and compliance.', primary: 'Andy Norman', section: 'core', summary: 'Author page for the founder', datePublished: REVAMP, dateModified: REVAMP, priority: 0.5 },
  { path: '/contact', title: 'Book a Demo | Call Della', description: 'Book a 30-minute Call Della demo. We run a live intake call for your practice area while you listen, then walk you through the dossier Della files by morning.', primary: 'book a demo', section: 'core', summary: 'Book a 30-minute demo or email the team', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.7 },

  // Practice areas
  { path: '/personal-injury', title: 'AI Intake for Personal Injury Law Firms | Call Della', description: 'AI for personal injury lawyers: Della takes after-hours PI calls, captures incident, injury, treatment and insurance details, and flags urgent cases by 7am.', primary: 'ai for personal injury lawyers', secondaries: ['after-hours personal injury intake', 'personal injury intake ai agent', 'ai tools for personal injury attorneys', 'personal injury law firm intake process'], section: 'practice', summary: 'After-hours intake for PI firms: auto, trucking, premises and catastrophic injury calls', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.9 },
  { path: '/criminal-defense', title: '24/7 Criminal Defense Answering Service and Intake | Call Della', description: 'A 24/7 criminal defense answering service that takes the full intake: charges, custody status, court date and who is calling, with urgent arrests flagged.', primary: '24/7 criminal defense answering service', secondaries: ['criminal lawyer answering service', 'criminal defense answering service', 'ai for criminal defense lawyers'], section: 'practice', summary: '24/7 answering for arrest and jail calls, DUI, drug and assault matters', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.9 },
  { path: '/immigration', title: 'Immigration Attorney Answering Service in English and Spanish | Call Della', description: 'An immigration attorney answering service in English and Spanish. Della takes detention and deadline calls after hours and files the intake before 7am.', primary: 'immigration attorney answering service', secondaries: ['ai for immigration lawyers', 'immigration law firm answering service'], section: 'practice', summary: 'Detention and deadline calls, natively in English and Spanish', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.9 },

  // Compliance
  { path: '/compliance', title: 'AI Legal Intake Compliance Guide | Call Della', description: 'AI legal intake compliance for law firms: ABA Formal Opinion 512, attorney-client privilege, HIPAA at intake and call recording consent by state, in one hub.', primary: 'ai legal intake compliance', section: 'compliance', summary: 'Hub for ABA 512, privilege, HIPAA and recording consent', datePublished: '2026-05-26', dateModified: REVAMP, priority: 0.6 },
  { path: '/compliance/aba-formal-opinion-512-explained', title: 'ABA Formal Opinion 512 Explained for Law Firm Intake', description: 'ABA Formal Opinion 512, issued July 2024, explained for law firm intake: competence, confidentiality, client communication and supervision when AI answers.', primary: 'aba formal opinion 512', section: 'compliance', summary: 'What ABA Formal Opinion 512 means for AI intake', datePublished: '2026-05-28', dateModified: REVAMP },
  { path: '/compliance/attorney-client-privilege-ai-intake', title: 'Does AI Intake Protect Attorney-Client Privilege?', description: 'Does AI intake protect attorney-client privilege? How privilege and confidentiality apply to prospective clients and AI intake vendors under ABA Rule 1.18.', primary: 'ai and attorney client privilege', section: 'compliance', summary: 'Privilege and confidentiality when an AI vendor takes the first call', datePublished: '2026-05-26', dateModified: REVAMP },
  { path: '/compliance/hipaa-at-intake-phi', title: 'HIPAA at Legal Intake: Handling PHI on the First Call', description: "HIPAA at legal intake: when a law firm's first call involves protected health information, who is a covered entity, and how intake vendors should handle it.", primary: 'HIPAA at intake', secondaries: ['hipaa ai receptionist'], section: 'compliance', summary: 'When HIPAA applies to injury and medical details on intake calls', datePublished: '2026-05-30', dateModified: REVAMP },
  { path: '/compliance/call-recording-consent-by-state', title: 'Call Recording Consent by State for Law Firm Intake', description: 'Call recording consent by state for law firm intake: which states need all-party consent, which allow one-party consent, and the disclosure Della plays.', primary: 'call recording consent for law firm intake', secondaries: ['call recording laws by state', 'two party consent states', 'two party consent states list'], section: 'compliance', summary: 'All 50 states and DC: one-party or all-party consent for recorded intake calls', datePublished: REVAMP, dateModified: REVAMP },

  // Intake playbook
  { path: '/intake-playbook', title: 'Law Firm Client Intake Playbook | Call Della', description: 'The law firm client intake playbook: intake process, forms, scripts and case evaluation for personal injury, criminal defense and immigration firms.', primary: 'law firm client intake', secondaries: ['legal client intake', 'client intake process law firm', 'law firm client intake procedures'], section: 'playbook', summary: 'Hub for intake scripts, forms, process and case evaluation', datePublished: '2026-05-14', dateModified: REVAMP, priority: 0.6 },
  { path: '/intake-playbook/what-should-be-on-a-pi-intake-form', title: 'What Should Be on a Personal Injury Intake Form?', description: 'What should be on a personal injury intake form: incident, injuries, treatment, insurance, fault, prior counsel and deadline fields, with why each one matters.', primary: 'personal injury intake form', section: 'playbook', summary: 'The fields a PI intake form needs and why', datePublished: '2026-05-14', dateModified: REVAMP },
  { path: '/intake-playbook/how-to-write-pi-intake-script', title: 'How to Write a Personal Injury Intake Script', description: 'How to write a personal injury intake script: the opening, the qualifying questions, the order to ask them in, and how to close a call without giving advice.', primary: 'personal injury intake script', section: 'playbook', summary: 'Structure and wording for a PI intake script', datePublished: '2026-05-16', dateModified: REVAMP },
  { path: '/intake-playbook/intake-red-flags-declining-cases', title: 'Personal Injury Case Evaluation: Red Flags at Intake', description: 'Personal injury case evaluation at intake: the red flags that signal a weak case, from statute of limitations risk to prior counsel, and how to log them.', primary: 'personal injury case evaluation', secondaries: ['how to qualify a personal injury case'], section: 'playbook', summary: 'Red flags that signal a weak PI case on the first call', datePublished: '2026-05-18', dateModified: REVAMP },
  { path: '/intake-playbook/law-firm-client-intake-process', title: 'Law Firm Client Intake Process: Flow Chart and Steps', description: 'The law firm client intake process as a flow chart: first contact, conflict check, qualification, consultation and engagement, with who owns each step.', primary: 'law firm client intake process flow chart', secondaries: ['law firm client intake system', 'law firm intake process'], section: 'playbook', summary: 'Intake process flow chart from first call to signed engagement', datePublished: REVAMP, dateModified: REVAMP },
  { path: '/intake-playbook/law-firm-client-intake-form', title: 'Law Firm Client Intake Form: PI, Criminal and Immigration', description: 'A law firm client intake form for personal injury, criminal defense and immigration matters: the core contact fields plus the practice-area questions to add.', primary: 'client intake form law firm', secondaries: ['legal client intake form', 'law firm intake form', 'legal intake form'], section: 'playbook', summary: 'Client intake form fields by practice area', datePublished: REVAMP, dateModified: REVAMP },

  // Operations
  { path: '/operations', title: 'Law Firm Intake Operations | Call Della', description: 'Law firm intake operations: missed-call data, cost per signed case, after-hours coverage options and the calculators to work out what missed calls cost you.', primary: 'law firm intake operations', section: 'operations', summary: 'Hub for missed-call data, calculators and after-hours options', datePublished: '2026-05-20', dateModified: REVAMP, priority: 0.6 },
  { path: '/operations/missed-call-cost-calculator', title: 'Missed-Call Cost Calculator for Law Firms', description: 'A missed-call cost calculator for law firms: enter your after-hours calls, case rate and average fee to see the fees a month riding on unanswered calls.', primary: 'missed call cost calculator', section: 'operations', summary: 'Work out the fees at risk from unanswered calls', datePublished: '2026-05-22', dateModified: REVAMP },
  { path: '/operations/cost-per-signed-case-calculator', title: 'Cost per Signed Case Calculator for PI Firms', description: 'A cost per signed case calculator for personal injury firms: marketing spend, intake costs and sign rate in, true acquisition cost per signed case out.', primary: 'cost per signed case', secondaries: ['personal injury lead cost'], section: 'operations', summary: 'Work out acquisition cost per signed PI case', datePublished: '2026-05-20', dateModified: REVAMP },
  { path: '/operations/after-hours-intake-comparison', title: 'After-Hours Intake: Voicemail vs Answering Service vs AI', description: 'After-hours intake options compared: voicemail, a message service, in-house staff and AI intake, on cost, coverage, intake depth and urgent-call handling.', primary: 'after-hours intake options', section: 'operations', summary: 'Voicemail, answering services, staff and AI intake compared', datePublished: '2026-05-24', dateModified: REVAMP },
  { path: '/operations/law-firm-missed-calls-data', title: 'How Many Calls Do Law Firms Miss? The Data', description: "How many calls do law firms miss? In Clio's 2024 secret-shopper study only 40% of 500 US firms answered the phone. The sourced data on missed legal calls.", primary: 'how many calls do law firms miss', secondaries: ['speed to lead law firm'], section: 'operations', summary: 'Sourced studies on how often law firms miss calls', datePublished: REVAMP, dateModified: REVAMP },

  // States and case types (hubs; detail pages come from src/data)
  { path: '/states', title: 'Personal Injury Rules by State: SOL, Fault and No-Fault', description: 'Personal injury rules by state for intake teams: statute of limitations, comparative or contributory fault, and no-fault insurance, in one reference table.', primary: 'personal injury rules by state', secondaries: ['no fault states', 'comparative negligence states', 'modified comparative negligence states'], section: 'states', summary: 'PI deadlines and fault rules by state', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.6 },
  { path: '/case-types', title: 'Personal Injury Case Types: Intake by Matter | Call Della', description: 'Personal injury case types and what to capture on the first call for each: auto accidents, commercial trucking and slip and fall intake checklists.', primary: 'personal injury case types intake', section: 'case-types', summary: 'Intake checklists by PI case type', datePublished: '2026-05-08', dateModified: REVAMP, priority: 0.6 },

  // Compare
  { path: '/compare', title: 'Compare Call Della with Legal Answering Services', description: 'Compare Call Della with Smith.ai, Answering Legal, Posh and Ruby on price, hours, intake depth and urgent calls, using each provider\'s own published facts.', primary: 'call della alternatives', section: 'compare', summary: 'Hub comparing Call Della with Smith.ai, Answering Legal, Posh and Ruby', datePublished: REVAMP, dateModified: REVAMP, priority: 0.6 },
  { path: '/compare/smith-ai', title: 'Smith.ai Alternative for Law Firms: Call Della Compared', description: 'Looking for a Smith.ai alternative for your law firm? Call Della compared with Smith.ai on pricing, after-hours intake depth and urgent-call alerts.', primary: 'smith.ai alternative', secondaries: ['smith ai reviews', 'smith ai pricing'], section: 'compare', summary: 'Call Della and Smith.ai compared', datePublished: REVAMP, dateModified: REVAMP },
  { path: '/compare/answering-legal', title: 'Answering Legal Reviews and Pricing vs Call Della', description: 'Answering Legal reviews and pricing compared with Call Della: plan costs, minutes, intake depth and how each handles urgent after-hours calls for law firms.', primary: 'answering legal reviews', secondaries: ['answering legal pricing'], section: 'compare', summary: 'Call Della and Answering Legal compared', datePublished: REVAMP, dateModified: REVAMP },
  { path: '/compare/posh', title: 'Posh Virtual Receptionist vs Call Della for Law Firms', description: 'Posh virtual receptionist compared with Call Della for law firms: live receptionists or AI intake, pricing, hours covered and what lands on your desk.', primary: 'posh virtual receptionist', section: 'compare', summary: 'Call Della and Posh compared', datePublished: REVAMP, dateModified: REVAMP },
  { path: '/compare/ruby', title: 'Ruby Receptionist Alternative for Law Firms | Call Della', description: 'A Ruby receptionist alternative for law firms: Call Della compared with Ruby on pricing, after-hours coverage, intake questions and urgent-call handling.', primary: 'ruby receptionist alternative', secondaries: ['ruby receptionist reviews', 'ruby receptionist pricing'], section: 'compare', summary: 'Call Della and Ruby compared', datePublished: REVAMP, dateModified: REVAMP },

  // Reference
  { path: '/glossary', title: 'Personal Injury Intake Glossary | Call Della', description: 'A personal injury intake glossary: MMI, MIST, PIP, letter of protection, comparative negligence, statute of limitations tolling, no-fault and BAA, defined.', primary: 'personal injury intake terms', section: 'reference', summary: 'Definitions of PI intake terms', datePublished: REVAMP, dateModified: REVAMP, priority: 0.5 },

  // Legal
  { path: '/privacy', title: 'Privacy Policy | Call Della', description: 'The Call Della privacy policy: what we collect from callers and site visitors, how call recordings and transcripts are stored, and who can access them.', primary: 'Call Della privacy policy', section: 'legal', summary: 'Privacy policy', datePublished: '2026-05-01', dateModified: '2026-05-01', priority: 0.3 },
  { path: '/terms', title: 'Terms of Service | Call Della', description: 'The Call Della terms of service: plans, billing, minutes, acceptable use and the limits of the service. Della takes intake and never gives legal advice.', primary: 'Call Della terms', section: 'legal', summary: 'Terms of service', datePublished: '2026-05-01', dateModified: '2026-05-01', priority: 0.3 },
];

export const page = (path: string): PageEntry => {
  const p = PAGES.find((x) => x.path === path);
  if (!p) throw new Error(`No manifest entry for ${path}`);
  return p;
};

// Metadata for a page from the manifest. `absolute` keeps the title as written.
export const pageMeta = (path: string, extra: Partial<Metadata> = {}): Metadata => {
  const p = page(path);
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = p.section === 'practice' ? `/og-${path.slice(1)}.png` : '/og-default.png';
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path },
    openGraph: { title: p.title, description: p.description, url, type: p.section === 'core' || p.section === 'practice' ? 'website' : 'article', images: [{ url: image, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description, images: [image] },
    ...extra,
  };
};

// "25 October 2026" style for visible dates.
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
