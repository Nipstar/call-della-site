// State personal injury intake guides. Every legal statement below was checked on 25 Oct 2026
// against the source linked beside it (statute text, court or bar publication). Not legal advice.
import type { Citation } from '@/lib/schema';

export const STATES_PUBLISHED = '2026-05-08';
export const STATES_UPDATED = '2026-10-25';

export type Section = { lead: string; body: string[]; src: Citation[] };
export type QA = { q: string; a: string };

export type StateGuide = {
  name: string;
  slug: string;
  code: string; // matches RECORDING_CONSENT
  tldr: string;
  sol: { period: string; cite: string; detail: string; url: string };
  table: { sol: string; fault: string; noFault: string };
  fault: Section;
  noFault: Section;
  deadlines: Section;
  caps: Section;
  ai: Section;
  recordingNote: string;
  capture: string[];
  della: string;
  faqs: QA[];
};

// Sources. `publisher` names the site we read; official-source links are in the page text where they differ.
export const LMNC: Citation = { name: 'How Your Telephone is Costing You Clients', url: 'https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients', publisher: 'Lawyers Mutual NC', year: '2019' };
export const III: Citation = { name: 'Background on: No-fault auto insurance', url: 'https://www.iii.org/article/background-on-no-fault-auto-insurance', publisher: 'Insurance Information Institute' };
export const MWL_FAULT: Citation = { name: 'Contributory Negligence and Comparative Fault Laws in All 50 States', url: 'https://www.mwl-law.com/wp-content/uploads/2018/02/CONTRIBUTORY-NEGLIGENCE-COMPARATIVE-FAULT-LAWS-CHART-1.pdf', publisher: 'Matthiesen, Wickert & Lehrer', year: '2025' };
export const MWL_SOL: Citation = { name: 'Statutes of Limitations for All 50 States', url: 'https://www.mwl-law.com/wp-content/uploads/2013/03/statute-of-limitations-for-all-50-states.pdf', publisher: 'Matthiesen, Wickert & Lehrer', year: '2019' };

const S = {
  tx16003: { name: 'Tex. Civ. Prac. & Rem. Code § 16.003', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_16.003', publisher: 'Texas.Public.Law (text of statutes.capitol.texas.gov)' },
  tx33001: { name: 'Tex. Civ. Prac. & Rem. Code § 33.001', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_33.001', publisher: 'Texas.Public.Law' },
  tx1952: { name: 'Tex. Ins. Code § 1952.152', url: 'https://texas.public.law/statutes/tex._ins._code_section_1952.152', publisher: 'Texas.Public.Law' },
  tx101101: { name: 'Tex. Civ. Prac. & Rem. Code § 101.101', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_101.101', publisher: 'Texas.Public.Law' },
  tx41008: { name: 'Tex. Civ. Prac. & Rem. Code § 41.008', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_41.008', publisher: 'Texas.Public.Law' },
  tx74301: { name: 'Tex. Civ. Prac. & Rem. Code § 74.301', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_74.301', publisher: 'Texas.Public.Law' },
  tx705: { name: 'Professional Ethics Committee Opinion 705', url: 'https://www.legalethicstexas.com/resources/opinions/opinion-705/', publisher: 'Texas Center for Legal Ethics', year: '2025' },
  fl9511: { name: 'Fla. Stat. § 95.11', url: 'https://florida.public.law/statutes/fla._stat._95.11', publisher: 'Florida.Public.Law' },
  flhb837: { name: 'CS/CS/HB 837 (2023), Chapter 2023-15', url: 'https://www.flsenate.gov/Session/Bill/2023/837', publisher: 'The Florida Senate', year: '2023' },
  fl76881: { name: 'Fla. Stat. § 768.81', url: 'https://florida.public.law/statutes/fla._stat._768.81', publisher: 'Florida.Public.Law' },
  fl627736: { name: 'Fla. Stat. § 627.736', url: 'https://florida.public.law/statutes/fla._stat._627.736', publisher: 'Florida.Public.Law' },
  fl76873: { name: 'Fla. Stat. § 768.73', url: 'https://florida.public.law/statutes/fla._stat._768.73', publisher: 'Florida.Public.Law' },
  fl7680427: { name: 'Fla. Stat. § 768.0427', url: 'https://florida.public.law/statutes/fla._stat._768.0427', publisher: 'Florida.Public.Law' },
  fl241: { name: 'Florida Bar Ethics Opinion 24-1', url: 'https://www.floridabar.org/etopinions/opinion-24-1/', publisher: 'The Florida Bar', year: '2024' },
  ca3351: { name: 'Cal. Code Civ. Proc. § 335.1', url: 'https://california.public.law/codes/code_of_civil_procedure_section_335.1', publisher: 'California.Public.Law' },
  ca9112: { name: 'Cal. Gov. Code § 911.2', url: 'https://california.public.law/codes/government_code_section_911.2', publisher: 'California.Public.Law' },
  caLi: { name: 'Li v. Yellow Cab Co., 13 Cal. 3d 804 (1975)', url: 'https://en.wikipedia.org/wiki/Li_v._Yellow_Cab_Co.', publisher: 'Wikipedia', year: '1975' },
  ca33332: { name: 'Cal. Civ. Code § 3333.2', url: 'https://california.public.law/codes/civil_code_section_3333.2', publisher: 'California.Public.Law' },
  caAI: { name: 'Practical Guidance for the Use of Generative Artificial Intelligence in the Practice of Law', url: 'https://www.calbar.ca.gov/Portals/0/documents/ethics/Generative-AI-Practical-Guidance.pdf', publisher: 'State Bar of California, COPRAC', year: '2026' },
  caRules: { name: 'California Rules of Professional Conduct (operative November 1, 2018)', url: 'https://www.calbar.ca.gov/Attorneys/Conduct-Discipline/Rules/Rules-of-Professional-Conduct/Current-Rules', publisher: 'State Bar of California' },
  ny214: { name: 'N.Y. CPLR § 214', url: 'https://newyork.public.law/laws/n.y._civil_practice_law_and_rules_section_214', publisher: 'NewYork.Public.Law' },
  ny214a: { name: 'N.Y. CPLR § 214-a', url: 'https://newyork.public.law/laws/n.y._civil_practice_law_and_rules_section_214-a', publisher: 'NewYork.Public.Law' },
  ny1411: { name: 'N.Y. CPLR § 1411', url: 'https://newyork.public.law/laws/n.y._civil_practice_law_and_rules_section_1411', publisher: 'NewYork.Public.Law (updated May 29, 2026)', year: '2026' },
  nyBD: { name: 'NYS Enacts Sweeping Auto Insurance Reforms Impacting Motor Vehicle Accident Claims', url: 'https://www.barclaydamon.com/alerts/nys-enacts-sweeping-auto-insurance-reforms-impacting-motor-vehicle-accident-claims', publisher: 'Barclay Damon', year: '2026' },
  ny50e: { name: 'N.Y. General Municipal Law § 50-e', url: 'https://newyork.public.law/laws/n.y._general_municipal_law_section_50-e', publisher: 'NewYork.Public.Law' },
  ny5102: { name: 'N.Y. Insurance Law § 5102', url: 'https://newyork.public.law/laws/n.y._insurance_law_section_5102', publisher: 'NewYork.Public.Law' },
  nyConst: { name: 'N.Y. Constitution, Article I, § 16', url: 'https://ballotpedia.org/Article_I,_New_York_Constitution', publisher: 'Ballotpedia' },
  nysba: { name: 'New York State Bar Association Warns That AI Must Not Compromise Attorney-Client Privilege', url: 'https://nysba.org/new-york-state-bar-association-warns-that-ai-must-not-compromise-attorney-client-privilege/', publisher: 'New York State Bar Association', year: '2024' },
  il13202: { name: 'Zlatev v. Millette, 2015 IL App (1st) 143173 (applying 735 ILCS 5/13-202)', url: 'https://www.illinoiscourts.gov/Resources/4262ddbf-c207-49dd-a90b-8ca0bcd850b7/1143173.pdf', publisher: 'Illinois Appellate Court', year: '2015' },
  il81010: { name: 'Ferguson v. City of Chicago (quoting 745 ILCS 10/8-101)', url: 'https://www.illinoiscourts.gov/Resources/689d3191-c8fc-46d6-bf4a-e5f56310ed87/1022463.htm', publisher: 'Illinois Appellate Court' },
  ilIPI: { name: 'Illinois Pattern Jury Instructions (Civil), Section 10.00, notes on 735 ILCS 5/2-1116', url: 'https://www.illinoiscourts.gov/resources/a1751f33-c206-4771-abcf-33947ec2cff8/file', publisher: 'Illinois Supreme Court' },
  ilLebron: { name: 'Lebron v. Gottlieb Memorial Hospital, 237 Ill. 2d 217 (2010)', url: 'https://www.courtlistener.com/opinion/1987695/lebron-v-gottlieb-memorial-hospital/', publisher: 'CourtListener', year: '2010' },
  ilAI: { name: 'Illinois Supreme Court Announces Policy on Artificial Intelligence', url: 'https://www.illinoiscourts.gov/News/1485/Illinois-Supreme-Court-announces-policy-on-artificial-intelligence/news-detail/', publisher: 'Illinois Courts', year: '2024' },
  ga51125: { name: 'O.C.G.A. § 51-12-5.1', url: 'https://www.casemine.com/act/us/6409aa962ce01c6c517fea64', publisher: 'CaseMine' },
  gaSB68: { name: 'Georgia Enacts Sweeping Tort Reform: Key Takeaways from SB 68', url: 'https://kennedyslaw.com/en/thought-leadership/article/2025/georgia-enacts-sweeping-tort-reform-key-takeaways-from-sb-68', publisher: 'Kennedys', year: '2025' },
  gaBar: { name: 'Artificial Intelligence and Emerging Technology Committee', url: 'https://www.gabar.org/bar-communities/view/Artificial-Intelligence-and-Emerging-Technology', publisher: 'State Bar of Georgia' },
} satisfies Record<string, Citation>;

export const SOURCES = S;

export const stateData: StateGuide[] = [
  {
    name: 'Texas',
    slug: 'texas',
    code: 'TX',
    tldr:
      'Texas personal injury intake is the first-call screening a Texas firm runs on a new injury matter. Texas gives most injury plaintiffs two years to sue under Tex. Civ. Prac. & Rem. Code § 16.003, bars recovery when the plaintiff is more than 50 percent responsible, and is not a no-fault state. The first call has to lock down the incident date, liability facts and any government defendant.',
    sol: {
      period: '2 years',
      cite: 'Tex. Civ. Prac. & Rem. Code § 16.003',
      detail: 'Suit for personal injury must be brought not later than two years after the day the cause of action accrues. A wrongful death claim also has two years, running from the death.',
      url: S.tx16003.url,
    },
    table: { sol: '2 years', fault: 'Modified comparative (bar above 50%)', noFault: 'No. PIP must be offered' },
    fault: {
      lead: 'Texas uses modified comparative responsibility: a claimant recovers nothing if their percentage of responsibility is greater than 50 percent.',
      body: [
        'The rule sits in Tex. Civ. Prac. & Rem. Code § 33.001. A claimant found 50 percent responsible can still recover, reduced by that share. At 51 percent the claim is gone.',
        'For intake, the bar means the caller’s own account of the crash matters from the first sentence. A Texas intake specialist should capture where each vehicle was, who had the light, what the police officer wrote and whether anyone was cited. The caller should not be asked to assign blame or speculate about speed. Those answers belong to the attorney’s review, not to a late-night phone call that may end up quoted back at the client in a deposition.',
      ],
      src: [S.tx33001],
    },
    noFault: {
      lead: 'Texas is not a no-fault state, but every Texas auto liability policy must include personal injury protection unless the named insured rejects it in writing.',
      body: [
        'Tex. Ins. Code § 1952.152 bars an insurer from issuing an auto liability policy in Texas without PIP coverage, and lets any named insured reject that coverage in writing. A rejection carries over to renewals unless the insured asks for PIP back in writing.',
        'That makes the PIP question a factual one for Texas intake. The caller may have PIP, may have rejected it, or may not know. Intake should record the caller’s own carrier and policy details where they have them, plus the other driver’s carrier, because the at-fault driver’s liability coverage remains the main source of recovery. The Insurance Information Institute does not list Texas among the twelve no-fault states.',
      ],
      src: [S.tx1952, III],
    },
    deadlines: {
      lead: 'A Texas claim against a governmental unit needs written notice no later than six months after the incident, under the Texas Tort Claims Act.',
      body: [
        'Tex. Civ. Prac. & Rem. Code § 101.101 requires the notice to describe the injury, the time and place of the incident, and the incident itself. A city charter can set its own notice period where the statute permits it, so the city matters as much as the fact of government involvement.',
        'This is why a Texas intake call should ask whether the other vehicle was a city bus, a county truck, a school vehicle or a state agency car, and whether the fall happened on public property. Six months passes quickly when the caller first phones the firm two or three months after the crash. The dossier should carry the incident date and the government entity named by the caller so the attorney can check the notice period that morning.',
      ],
      src: [S.tx101101],
    },
    caps: {
      lead: 'Texas caps exemplary (punitive) damages and non-economic damages in health care liability claims, but not compensatory damages in an ordinary negligence case.',
      body: [
        'Under Tex. Civ. Prac. & Rem. Code § 41.008, exemplary damages may not exceed the greater of two times economic damages plus non-economic damages up to $750,000, or $200,000. The cap does not apply where the conduct is one of the listed felonies, which include intoxication assault and intoxication manslaughter.',
        'In health care liability claims, § 74.301 limits non-economic damages against physicians and other providers to $250,000 per claimant, with separate limits for health care institutions. For intake, the practical point is the felony exception: a caller who says the other driver was drunk, arrested or charged is giving the attorney a fact that can change the value of the case.',
      ],
      src: [S.tx41008, S.tx74301],
    },
    ai: {
      lead: 'Yes. The Texas Professional Ethics Committee issued Opinion 705 in February 2025 on lawyers’ use of generative AI.',
      body: [
        'Opinion 705 asks what ethical issues the Texas Disciplinary Rules of Professional Conduct raise when a lawyer uses generative AI in practice. Its confidentiality analysis turns on Rule 1.05, which covers privileged information and all other information relating to a client. The opinion says how far Rule 1.05 is implicated depends on how a given program works and how the lawyer uses it.',
        'For a firm putting an AI intake specialist on its phones, that means knowing what happens to caller information, who can hear the recordings and how long the firm keeps them. It also means reviewing the work, which is why every Della dossier carries the recording and transcript next to the summary. Our guide to <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512</a> covers the national rule.',
      ],
      src: [S.tx705],
    },
    recordingNote:
      'Texas firms still take calls from people in all-party states, so a recording notice at the start of every call is the safer default.',
    capture: [
      'Incident date and time, and the city and county where it happened',
      'Whether a police report was made, the agency, and any citation issued',
      'Whether the other vehicle belonged to a city, county, school district or state agency',
      'Whether the other vehicle was a commercial truck, with the company name or USDOT number if seen',
      'Injuries, where the caller was treated, and whether they were admitted',
      'The other driver’s insurer, and the caller’s own carrier and PIP status if known',
      'Any sign the other driver was intoxicated, arrested or charged',
      'Whether the caller has spoken to another lawyer or signed anything with an insurer',
    ],
    della:
      'Della, Call Della’s intake specialist, answers a Texas firm’s line in the firm’s name nights, weekends and holidays. She takes the facts above in a calm order, never gives legal advice, and tells callers she is an AI if they ask. Each call becomes a dossier with a summary, urgency score, recording and transcript. A call she scores as urgent sends an email alert to the attorney on call, on every plan, and the rest are in the 7am morning brief.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in Texas?', a: 'Two years. Tex. Civ. Prac. & Rem. Code § 16.003 requires a personal injury suit to be brought not later than two years after the day the cause of action accrues. Wrongful death also has two years, running from the death. Claims against a governmental unit also need written notice within six months under § 101.101.' },
      { q: 'Can a Texas plaintiff recover if they were partly at fault?', a: 'Yes, up to a point. Under Tex. Civ. Prac. & Rem. Code § 33.001, a claimant whose percentage of responsibility is greater than 50 percent recovers nothing. A claimant at 50 percent or less recovers damages reduced by their share. Intake should record the facts of the crash without asking the caller to assign blame.' },
      { q: 'Is Texas a no-fault state?', a: 'No. Texas is an at-fault state. Tex. Ins. Code § 1952.152 requires auto liability policies to include personal injury protection unless a named insured rejects it in writing, so callers may or may not have PIP. The at-fault driver’s liability insurer is still the main source of recovery.' },
      { q: 'Does Texas have an ethics opinion on lawyers using AI?', a: 'Yes. Professional Ethics Committee Opinion 705, issued in February 2025, addresses the ethical issues generative AI raises under the Texas Disciplinary Rules. Its confidentiality discussion centers on Rule 1.05 and says the risk depends on how a program works and how the lawyer uses it.' },
      { q: 'Does Della speak Spanish to Texas callers?', a: 'Not on personal injury lines today. Della takes personal injury intake in English, and Spanish is available on Call Della’s immigration intake only. Texas firms with many Spanish-speaking callers should plan for a bilingual staff callback on those matters, and can ask about language support when they book a demo.' },
    ],
  },
  {
    name: 'Florida',
    slug: 'florida',
    code: 'FL',
    tldr:
      'Florida personal injury intake is the first-call screening a Florida firm runs on a new injury matter. Since HB 837 took effect on March 24, 2023, negligence claims have a two-year limit under Fla. Stat. § 95.11, and a plaintiff more than 50 percent at fault recovers nothing. Florida is a no-fault state, so the 14-day PIP treatment rule shapes the first call.',
    sol: {
      period: '2 years',
      cite: 'Fla. Stat. § 95.11',
      detail: 'An action founded on negligence must be brought within two years. HB 837 (Chapter 2023-15) made the change, effective March 24, 2023. Check the accrual date on older claims.',
      url: S.fl9511.url,
    },
    table: { sol: '2 years (negligence)', fault: 'Modified comparative (bar above 50%)', noFault: 'Yes. $10,000 PIP' },
    fault: {
      lead: 'Florida now uses modified comparative fault: in a negligence action, a party found greater than 50 percent at fault for their own harm may not recover any damages.',
      body: [
        'The rule is Fla. Stat. § 768.81(6), added by HB 837 in 2023. Before that, Florida applied pure comparative fault, so a firm’s older intake scripts and case evaluations may assume rules that no longer hold. The subsection does not apply to medical negligence claims under chapter 766.',
        'For intake, the change raises the stakes of the liability conversation. A caller who ran a yellow light, was on the phone or was not wearing a seat belt is not automatically a lost case, but the attorney needs those facts early. A Florida intake specialist should record the caller’s account and any police findings in plain terms, without leading the caller into conclusions about their own fault.',
      ],
      src: [S.fl76881, S.flhb837],
    },
    noFault: {
      lead: 'Yes. Florida is a no-fault state, and its personal injury protection statute pays up to $10,000 in medical and disability benefits.',
      body: [
        'Under Fla. Stat. § 627.736, PIP medical benefits cover 80 percent of reasonable, medically necessary expenses, and only for initial services and care received within 14 days after the motor vehicle accident. Benefits are limited to $2,500 if a qualifying provider determines the injured person did not have an emergency medical condition.',
        'The 14-day rule is the most time-sensitive fact in Florida auto intake. A caller who phones on day nine and has not seen a doctor is in a different position from one who went to the ER that night. Florida intake should capture the accident date, every place the caller has been treated, and who treated them. The Insurance Information Institute lists Florida among the five no-fault states with a verbal threshold on the right to sue.',
      ],
      src: [S.fl627736, III],
    },
    deadlines: {
      lead: 'The 14-day PIP treatment window is the deadline most likely to be running when a Florida caller phones after hours.',
      body: [
        'It runs from the accident, not from the first call to the firm, and missing it limits the caller’s PIP medical benefits under § 627.736. That is a different kind of deadline from the two-year limitations period, because it affects the client’s treatment and benefits rather than the right to sue.',
        'Florida intake should also ask about letters of protection. Fla. Stat. § 768.0427 defines a letter of protection as any arrangement where a provider treats in exchange for payment from a judgment or settlement, and makes disclosure of the letter and itemized, coded billing a condition of claiming those medical expenses. A caller already treating under one should say so on the first call.',
      ],
      src: [S.fl627736, S.fl7680427],
    },
    caps: {
      lead: 'Florida limits punitive damages to the greater of three times compensatory damages or $500,000, in the general case.',
      body: [
        'Fla. Stat. § 768.73 sets that ceiling, with higher limits where the fact finder determines the wrongful conduct was motivated solely by unreasonable financial gain. Florida also changed how medical damages are proven: § 768.0427 governs what evidence of medical expenses is admissible in a personal injury or wrongful death action, including amounts actually paid and amounts owed under letters of protection.',
        'For intake, the medical evidence rules mean insurance status and billing arrangements are case-value facts, not paperwork. Florida intake should record whether the caller has health insurance, Medicare or Medicaid, whether treatment is running through PIP, and whether any provider has asked for a letter of protection. Those answers tell the attorney how the medical damages will be presented.',
      ],
      src: [S.fl76873, S.fl7680427],
    },
    ai: {
      lead: 'Yes. Florida Bar Ethics Opinion 24-1, issued January 19, 2024, says lawyers may use generative AI if they meet their existing ethical duties.',
      body: [
        'Opinion 24-1 speaks to intake directly. It warns that a chatbot used for client intake can create a prospective client relationship, or even a lawyer-client relationship, without the lawyer’s knowledge. It says a lawyer must inform prospective clients that they are communicating with an AI program and not with a lawyer or law firm employee, and that the lawyer is responsible if the program gives misleading information.',
        'The opinion is advisory, not binding, but it is the clearest state guidance on AI intake. Della meets the disclosure point by design: she tells callers she is an AI if they ask, never claims to be human, and never gives legal advice. Our guide to <a href="/compliance/attorney-client-privilege-ai-intake">privilege and AI intake</a> covers the prospective-client duties.',
      ],
      src: [S.fl241],
    },
    recordingNote:
      'Florida’s all-party rule means the recording notice has to come before the caller describes their accident, on every call.',
    capture: [
      'Accident date, so the 14-day PIP treatment window can be checked',
      'Every place the caller has been treated so far, and when',
      'The caller’s own auto carrier and whether they have opened a PIP claim',
      'Health insurance, Medicare or Medicaid status',
      'Whether any provider has offered or requested a letter of protection',
      'Police report agency and any citation issued',
      'The other driver’s insurer and whether the other vehicle was commercial',
      'Whether the caller has spoken to another lawyer or a referral service',
    ],
    della:
      'Della, Call Della’s intake specialist, answers a Florida firm’s line in the firm’s name nights, weekends and holidays. She plays the recording disclosure first, takes the facts above, and never gives legal advice. Each call becomes a dossier with a summary, urgency score, recording and transcript. The dossier records the accident date and treatment so far, so a caller inside the 14-day window stands out. Urgent calls send an email alert to the attorney on call, on every plan.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in Florida?', a: 'Two years for negligence claims. Fla. Stat. § 95.11 lists an action founded on negligence among the claims that must be brought within two years. HB 837 (Chapter 2023-15) made that change effective March 24, 2023. Older claims may fall under the prior rule, so the accrual date matters.' },
      { q: 'What is Florida’s 14-day PIP rule?', a: 'Fla. Stat. § 627.736 limits PIP medical benefits to initial services and care received within 14 days after the motor vehicle accident. Benefits run up to $10,000, or $2,500 if a qualifying provider finds no emergency medical condition. Intake should record the accident date and every treatment visit.' },
      { q: 'Is Florida still a pure comparative negligence state?', a: 'No. Since HB 837 in 2023, Fla. Stat. § 768.81(6) bars a party found greater than 50 percent at fault for their own harm from recovering any damages in a negligence action. Medical negligence claims under chapter 766 are excluded from that subsection.' },
      { q: 'Does Florida require an AI intake tool to disclose that it is AI?', a: 'Florida Bar Ethics Opinion 24-1 says a lawyer must inform prospective clients that they are communicating with an AI program and not with a lawyer or law firm employee. The opinion is advisory. Della tells callers she is an AI if they ask and never claims to be human.' },
      { q: 'Does Della push Florida calls into our case management system?', a: 'Every plan delivers each call as a dossier on the Call Della dashboard, plus urgent-call email alerts and a 7am morning brief. A CRM webhook is available on the Group plan. Call Della does not offer direct integrations with named case management products today.' },
    ],
  },
  {
    name: 'California',
    slug: 'california',
    code: 'CA',
    tldr:
      'California personal injury intake is the first-call screening a California firm runs on a new injury matter. California gives two years to sue for personal injury under Code of Civil Procedure § 335.1, applies pure comparative fault, and is not a no-fault state. A claim against a public entity needs a government claim within six months, which is the deadline intake most often catches.',
    sol: {
      period: '2 years',
      cite: 'Cal. Code Civ. Proc. § 335.1',
      detail: 'An action for injury to, or for the death of, an individual caused by the wrongful act or neglect of another must be brought within two years.',
      url: S.ca3351.url,
    },
    table: { sol: '2 years', fault: 'Pure comparative', noFault: 'No' },
    fault: {
      lead: 'California applies pure comparative fault: an injured person’s recovery is reduced by their share of fault, but never barred by it.',
      body: [
        'The California Supreme Court adopted the rule in Li v. Yellow Cab Co. in 1975, rejecting the all-or-nothing contributory negligence rule California courts had applied before. A caller who was mostly at fault can still have a claim worth reviewing, because the other party’s share remains recoverable.',
        'For intake, pure comparative fault argues against screening callers out on liability alone. A California intake specialist should take the full account even when the caller admits running a light or looking at a phone, and leave the evaluation to the attorney. The facts that matter are the same as anywhere: the scene, the police report, witnesses, and what each driver said afterward. What changes is that an unfavorable answer is a reason to record carefully, not a reason to end the call.',
      ],
      src: [S.caLi],
    },
    noFault: {
      lead: 'No. California is an at-fault state, so the injured person claims against the at-fault driver’s liability insurance.',
      body: [
        'The Insurance Information Institute’s list of the twelve states with no-fault auto insurance laws does not include California. California callers will not have a PIP claim of the Florida or New York kind, though they may have medical payments coverage on their own policy.',
        'That shifts California auto intake toward the other side’s coverage. The intake call should capture the other driver’s name and insurer from the exchange of information, the caller’s own carrier, and whether the other vehicle was a rideshare car, a delivery van or a company vehicle. Commercial and rideshare vehicles often carry different coverage from a personal policy, and the attorney will want to know which applies before the first letter goes out. The caller should not be asked to guess at limits.',
      ],
      src: [III],
    },
    deadlines: {
      lead: 'A California claim against a public entity for death or personal injury must be presented no later than six months after the cause of action accrues.',
      body: [
        'Cal. Gov. Code § 911.2 sets that six-month period for claims relating to death or injury to the person, and one year for most other claims. The government claim comes before any lawsuit, so it can expire long before the two-year limitations period does.',
        'California intake should ask whether a city bus, a Caltrans truck, a county vehicle or a school district vehicle was involved, and whether a fall or crash happened because of a public road, sidewalk or building. The caller often does not know the entity’s name. The dossier should record what they saw, such as the logo, the vehicle markings or the street, so the attorney can identify the entity and the claim deadline the next morning.',
      ],
      src: [S.ca9112],
    },
    caps: {
      lead: 'California caps non-economic damages in medical malpractice cases under MICRA, and the cap rises every year until 2033.',
      body: [
        'Cal. Civ. Code § 3333.2, as amended, set a $350,000 limit against health care providers in non-death cases and a $500,000 limit in wrongful death cases, for cases filed on or after January 1, 2023. The non-death amounts increase by $40,000 each January 1 for 10 years, up to $750,000, and the death amounts by $50,000 a year up to $1,000,000.',
        'The statute provides separate limits for health care providers, health care institutions and unaffiliated defendants. For an auto, trucking or premises case, MICRA does not apply. Intake matters here mainly for routing: a caller describing a hospital error or a surgical injury should be flagged as a medical negligence matter, because the caps, the notice rules and the economics of the case differ.',
      ],
      src: [S.ca33332],
    },
    ai: {
      lead: 'Yes. The State Bar of California’s 2026 Practical Guidance on generative AI replaces its November 2023 guidance and adds rules for agentic AI.',
      body: [
        'The guidance is issued by the Committee on Professional Responsibility and Conduct. It ties the duty of confidentiality to Rule 1.6 and Business and Professions Code § 6068(e)(1). Rule 1.6 replaced former Rule 3-100 when the current California Rules of Professional Conduct became operative on November 1, 2018, so older material citing Rule 3-100 is out of date.',
        'The 2026 guidance says a lawyer must not deploy an agentic AI system in a way that allows autonomous external transmission of client information without appropriate safeguards and human review. For intake, that supports a model where the AI takes the call and an attorney reviews the result. Della’s dossiers go to the firm’s own dashboard for attorney review.',
      ],
      src: [S.caAI, S.caRules],
    },
    recordingNote:
      'California’s Penal Code § 632 protects confidential communications and § 632.7 covers cellular and cordless calls, so the notice comes first on every call.',
    capture: [
      'Incident date, city and county',
      'Whether a public entity vehicle, road, sidewalk or building was involved, and any markings seen',
      'Police or CHP report and any citation',
      'Whether the other vehicle was a rideshare, delivery or company vehicle',
      'Injuries, treatment so far, and whether the caller was admitted',
      'The other driver’s insurer and the caller’s own carrier',
      'Whether a health care provider’s error is involved',
      'Whether the caller has signed anything with an insurer or spoken to another lawyer',
    ],
    della:
      'Della, Call Della’s intake specialist, answers a California firm’s line in the firm’s name nights, weekends and holidays. She plays the recording disclosure, takes the full account without screening callers out on fault, and never gives legal advice. Each call becomes a dossier with a summary, urgency score, recording and transcript, reviewed by the firm. Urgent calls send an email alert to the attorney on call, on every plan.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in California?', a: 'Two years. Cal. Code Civ. Proc. § 335.1 requires an action for injury to, or for the death of, an individual caused by the wrongful act or neglect of another to be brought within two years. Claims against a public entity need a government claim within six months under Gov. Code § 911.2.' },
      { q: 'Can a California plaintiff recover if they were mostly at fault?', a: 'Yes. California applies pure comparative fault, adopted in Li v. Yellow Cab Co. (1975). Damages are reduced by the plaintiff’s share of fault, but recovery is not barred. That is why California intake should not screen out callers who admit partial fault.' },
      { q: 'Which California rule covers confidentiality when a firm uses AI?', a: 'Rule 1.6 of the California Rules of Professional Conduct, together with Business and Professions Code § 6068(e). Rule 1.6 replaced former Rule 3-100 on November 1, 2018. The State Bar’s 2026 Practical Guidance on generative AI applies those duties to AI tools, including agentic systems.' },
      { q: 'What is the MICRA cap in California?', a: 'Cal. Civ. Code § 3333.2 caps non-economic damages in medical negligence cases. For cases filed from January 1, 2023, the non-death limit started at $350,000 and rises $40,000 each January 1 up to $750,000. Wrongful death limits started at $500,000 and rise to $1,000,000.' },
      { q: 'Does Della take Spanish-language PI calls in California?', a: 'Not today. Della takes personal injury intake in English, and Spanish is available on Call Della’s immigration intake only. California firms with many Spanish-speaking PI callers should plan for a bilingual staff callback on those matters, and can ask about language support when they book a demo.' },
    ],
  },
  {
    name: 'New York',
    slug: 'new-york',
    code: 'NY',
    tldr:
      'New York personal injury intake is the first-call screening a New York firm runs on a new injury matter. New York gives three years to sue for personal injury under CPLR § 214(5), and 90 days to serve a notice of claim on a municipality. Since May 26, 2026, motor vehicle suits use a modified comparative fault rule, and New York remains a no-fault state with $50,000 in basic economic loss coverage.',
    sol: {
      period: '3 years',
      cite: 'N.Y. CPLR § 214(5)',
      detail: 'An action to recover damages for a personal injury must be commenced within three years, with exceptions. Medical malpractice has two years and six months under CPLR § 214-a.',
      url: S.ny214.url,
    },
    table: { sol: '3 years', fault: 'Pure comparative; motor vehicle suits filed from May 26, 2026 barred if claimant’s fault is greater', noFault: 'Yes. $50,000 basic economic loss' },
    fault: {
      lead: 'New York applies pure comparative fault in most injury cases, but motor vehicle claims filed on or after May 26, 2026 follow a new modified rule.',
      body: [
        'CPLR § 1411(a) says a claimant’s culpable conduct does not bar recovery and diminishes damages in proportion to it. New subsection (b), added in the state’s FY 2027 budget, applies to personal injury actions subject to Insurance Law article 51, the no-fault article. In those cases, the claimant’s culpable conduct bars recovery if it is greater than the culpable conduct of the defendant, or of all defendants combined.',
        'According to Barclay Damon (2026), the act was signed May 26, 2026, took effect immediately, and applies to suits filed on or after that date, not to pending actions. For intake, a New York auto caller’s own account of the crash now carries more weight. The intake specialist should record it carefully and leave the fault question to the attorney.',
      ],
      src: [S.ny1411, S.nyBD],
    },
    noFault: {
      lead: 'Yes. New York is a no-fault state, and first-party benefits cover up to $50,000 per person in basic economic loss.',
      body: [
        'N.Y. Insurance Law § 5102 defines basic economic loss as up to $50,000 per person of medical expenses, lost earnings and other listed items. To sue for pain and suffering in a car case, the injured person must have a serious injury as defined in § 5102(d): death, dismemberment, significant disfigurement, a fracture, loss of a fetus, permanent loss of use, permanent consequential limitation, or significant limitation of use of a body function or system.',
        'The 2026 reforms removed the 90/180-day category of serious injury, according to Barclay Damon (2026). Intake should therefore capture fractures, imaging, surgery recommendations and lasting limitations in plain terms, because those facts decide whether the case clears the threshold.',
      ],
      src: [S.ny5102, S.nyBD, III],
    },
    deadlines: {
      lead: 'A New York claim against a city, county, town or other public corporation usually needs a notice of claim served within 90 days after the claim arises.',
      body: [
        'General Municipal Law § 50-e sets the 90-day period. In wrongful death actions, the 90 days run from the appointment of a representative of the decedent’s estate. Ninety days is the shortest common deadline in New York injury practice, and it often runs out before the caller thinks of calling a lawyer.',
        'New York intake should ask early whether the incident involved a city bus, a sanitation or police vehicle, a public school, a city sidewalk or a public housing building. The caller may not know which entity owns what, so the dossier should record exactly what they describe and where. Medical malpractice callers raise a different clock: two years and six months under CPLR § 214-a, from the act or the last treatment in a continuous course.',
      ],
      src: [S.ny50e, S.ny214a],
    },
    caps: {
      lead: 'New York’s constitution bars statutory limits on one category of damages: the amount recoverable for injuries resulting in death.',
      body: [
        'Article I, § 16 of the New York Constitution says the right of action to recover damages for injuries resulting in death shall never be abrogated, and the amount recoverable shall not be subject to any statutory limitation. The provision protects wrongful death recovery specifically. It is not a general ban on caps for every personal injury claim.',
        'The 2026 reforms show the difference. According to Barclay Damon (2026), the act limits non-economic recovery to $100,000 where the claimant bears fault and was driving an uninsured vehicle that had to be insured, or was convicted of impaired driving, or was committing or fleeing a felony. For intake, that makes the caller’s insurance status and any arrest relevant facts, recorded without judgment.',
      ],
      src: [S.nyConst, S.nyBD],
    },
    ai: {
      lead: 'New York has bar association guidance rather than a court rule: the NYSBA Task Force on Artificial Intelligence report, approved on April 6, 2024.',
      body: [
        'According to the New York State Bar Association (2024), the House of Delegates approved the report, which advises lawyers to disclose to clients when AI tools are used in their cases. The report found that New York’s Rules of Professional Conduct already provide helpful guidance on AI, and stressed that lawyers must make sure paralegals and other staff handle AI properly.',
        'For an intake line, the NYSBA themes are privilege and supervision. Callers share injury details and sometimes admissions, so the firm needs to know where recordings live and who can hear them. Supervision means an attorney reviews what the intake specialist produced, which is why each Della dossier includes the recording and transcript. The <a href="/compliance/attorney-client-privilege-ai-intake">privilege guide</a> covers the details.',
      ],
      src: [S.nysba],
    },
    recordingNote:
      'New York firms take calls from people in Florida, California and other all-party states, so a notice at the start of every call is the safer default.',
    capture: [
      'Accident date, borough or county, and exact location',
      'Whether a city, county or public authority vehicle, sidewalk or building was involved',
      'For construction falls: the site address, the employer, and the height of the fall',
      'Fractures, imaging, surgery recommendations and lasting limitations',
      'The caller’s own no-fault carrier and whether an application has been filed',
      'Whether the caller was driving an insured vehicle',
      'Police report and any arrest or ticket',
      'Whether the caller has spoken to another lawyer',
    ],
    della:
      'Della, Call Della’s intake specialist, answers a New York firm’s line in the firm’s name nights, weekends and holidays. She takes the facts above, never gives legal advice, and tells callers she is an AI if they ask. Each call becomes a dossier with a summary, urgency score, recording and transcript. Urgent calls send an email alert to the attorney on call, on every plan, and the rest are in the 7am morning brief.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in New York?', a: 'Three years under CPLR § 214(5) for most personal injury actions. Medical malpractice has two years and six months under CPLR § 214-a. Claims against a municipality usually need a notice of claim within 90 days under General Municipal Law § 50-e, long before the limitations period ends.' },
      { q: 'Is New York still a pure comparative negligence state?', a: 'For most claims, yes. CPLR § 1411(a) reduces but does not bar recovery. New § 1411(b), effective May 26, 2026, applies to motor vehicle personal injury suits under the no-fault article: a claimant whose fault is greater than the defendants’ combined fault recovers nothing. It applies to suits filed on or after that date.' },
      { q: 'Does New York’s constitution prohibit damages caps?', a: 'Only for one category. Article I, § 16 says the amount recoverable for injuries resulting in death shall not be subject to any statutory limitation. It protects wrongful death damages specifically. It does not bar every limit on personal injury damages, as the 2026 non-economic limit for certain at-fault drivers shows.' },
      { q: 'What counts as a serious injury under New York no-fault law?', a: 'Insurance Law § 5102(d) lists death, dismemberment, significant disfigurement, a fracture, loss of a fetus, permanent loss of use, permanent consequential limitation, and significant limitation of use of a body function or system. The 2026 reforms removed the 90/180-day category, according to Barclay Damon (2026).' },
      { q: 'Does Della ask about Labor Law cases at construction sites?', a: 'Yes, as facts. When a caller describes a fall at a construction site, Della records the site address, the employer, what the caller was doing and how far they fell. She does not tell the caller whether they have a Labor Law claim. That evaluation stays with the attorney.' },
    ],
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    code: 'IL',
    tldr:
      'Illinois personal injury intake is the first-call screening an Illinois firm runs on a new injury matter. Illinois gives two years to sue for personal injury under 735 ILCS 5/13-202, but only one year against a local public entity under the Tort Immunity Act. A plaintiff more than 50 percent at fault recovers nothing, and Illinois is not a no-fault state.',
    sol: {
      period: '2 years',
      cite: '735 ILCS 5/13-202',
      detail: 'Actions for personal injury must be brought within two years after the cause of action accrues. Suits against a local entity or its employees have one year under 745 ILCS 10/8-101.',
      url: S.il13202.url,
    },
    table: { sol: '2 years', fault: 'Modified comparative (bar above 50%)', noFault: 'No' },
    fault: {
      lead: 'Illinois uses modified comparative fault: a plaintiff whose fault is more than 50 percent of the proximate cause of the injury is barred from recovering.',
      body: [
        'The rule is 735 ILCS 5/2-1116. According to the notes to the Illinois Pattern Jury Instructions, the 1986 amendments abolished pure comparative fault for causes of action accruing on and after November 25, 1986. Fault of 50 percent or less reduces damages in proportion to the plaintiff’s share.',
        'For intake, the threshold makes the liability facts worth recording with care. An Illinois intake specialist should capture the scene, the police response, any citation, the names of witnesses and what the other driver said, all in the caller’s words. The caller should not be pushed to estimate their own share of blame. A clean, factual record helps the attorney judge which side of the 50 percent line the case is likely to land on.',
      ],
      src: [S.ilIPI],
    },
    noFault: {
      lead: 'No. Illinois is an at-fault state, so the injured person claims against the at-fault driver’s liability insurer.',
      body: [
        'The Insurance Information Institute’s list of the twelve states with no-fault auto insurance laws does not include Illinois. Illinois callers will not have a PIP claim of the kind Florida or New York drivers do, though they may have medical payments coverage on their own policy.',
        'Illinois auto intake therefore centers on the other driver and their coverage. The call should capture the other driver’s name and insurer from the information exchange, the caller’s own carrier, and whether the other vehicle was a commercial truck, a delivery vehicle, a rideshare car or a CTA or Pace bus. A public transit vehicle raises the Tort Immunity Act’s shorter deadline. A commercial truck brings federal motor carrier rules into the case, which our <a href="/case-types/trucking-accidents">trucking accident intake</a> guide covers.',
      ],
      src: [III],
    },
    deadlines: {
      lead: 'A suit against an Illinois local public entity or its employees must be commenced within one year from the injury or from when the cause of action accrued.',
      body: [
        'Section 8-101 of the Local Governmental and Governmental Employees Tort Immunity Act sets that one-year period, as quoted by the Illinois Appellate Court in Ferguson v. City of Chicago. One year is half the general two-year period under 735 ILCS 5/13-202, and the difference catches callers who assume every injury claim has the same clock.',
        'Illinois intake should ask whether the incident involved a city, county, park district, school district or transit vehicle, or happened on public property such as a city sidewalk or a Chicago Housing Authority building. The dossier should record the entity the caller names and the incident date, so the attorney can check the one-year deadline and any exceptions that morning.',
      ],
      src: [S.il81010, S.il13202],
    },
    caps: {
      lead: 'Illinois has no statutory cap on non-economic damages in medical malpractice cases, because its Supreme Court struck the cap down in 2010.',
      body: [
        'In Lebron v. Gottlieb Memorial Hospital, decided February 4, 2010, the Illinois Supreme Court held the statutory limits on non-economic damages in medical malpractice actions unconstitutional.',
        'For intake, the absence of a malpractice cap means a caller describing a hospital or surgical error can carry significant value, and should be routed to an attorney who handles medical negligence. Auto and premises cases in Illinois turn mostly on the fault threshold and the defendant’s coverage. An intake specialist should record the injuries, the treatment and any lasting effects in plain terms, so the attorney can judge the size of the claim before the callback.',
      ],
      src: [S.ilLebron],
    },
    ai: {
      lead: 'The Illinois Supreme Court announced a policy on artificial intelligence on December 18, 2024, finding that its current rules are sufficient to govern AI use.',
      body: [
        'The policy followed a report from the Illinois Judicial Conference Task Force on Artificial Intelligence. In announcing it, Chief Justice Mary Jane Theis said the policy recognizes that current rules are sufficient to govern AI use, and that the Court will regularly reassess those rules as the technology evolves.',
        'For law firms, that means the Illinois Rules of Professional Conduct apply to AI intake the same way they apply to any staff member or vendor: competence, confidentiality and supervision. An attorney should be able to check any summary against the source, which is why each Della dossier includes the full recording and transcript. Our guide to <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512</a> sets out the national framework.',
      ],
      src: [S.ilAI],
    },
    recordingNote:
      'Because Illinois requires all-party consent for private conversations, the recording notice comes before the caller describes their injury.',
    capture: [
      'Incident date and the city or county where it happened',
      'Whether a city, county, park district, school or transit vehicle or property was involved',
      'Police response, the report agency and any citation',
      'Witness names and contact details, if the caller has them',
      'Whether the other vehicle was a commercial truck, with the company name or USDOT number',
      'Injuries, treatment so far, and whether the caller was admitted',
      'The other driver’s insurer and the caller’s own carrier',
      'Whether a workplace injury is involved, and the employer',
    ],
    della:
      'Della, Call Della’s intake specialist, answers an Illinois firm’s line in the firm’s name nights, weekends and holidays. She plays the recording disclosure, takes the facts above, and never gives legal advice. Each call becomes a dossier with a summary, urgency score, recording and transcript. Urgent calls send an email alert to the attorney on call, on every plan, and the rest arrive in the 7am morning brief.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in Illinois?', a: 'Two years under 735 ILCS 5/13-202. Suits against a local public entity or its employees have one year under section 8-101 of the Tort Immunity Act, running from the injury or from when the cause of action accrued. That shorter period is the one intake most often needs to catch.' },
      { q: 'What is Illinois’s comparative fault rule?', a: 'Modified comparative fault under 735 ILCS 5/2-1116. A plaintiff whose fault is more than 50 percent of the proximate cause of the injury is barred. At 50 percent or less, damages are reduced by the plaintiff’s share. The rule applies to causes of action accruing on and after November 25, 1986.' },
      { q: 'Is Illinois a no-fault state?', a: 'No. Illinois is an at-fault state. The Insurance Information Institute’s list of twelve no-fault states does not include it. Injured people claim against the at-fault driver’s liability insurer, so intake should capture the other driver’s insurer and whether the vehicle was commercial or public.' },
      { q: 'Has Illinois issued rules on AI in legal practice?', a: 'The Illinois Supreme Court announced an AI policy on December 18, 2024. In announcing it, the Chief Justice said current rules are sufficient to govern AI use and will be reassessed as the technology changes. The Rules of Professional Conduct still govern confidentiality and supervision when a firm uses AI intake.' },
      { q: 'How fast does an Illinois firm hear about an urgent overnight call?', a: 'Every plan includes urgent-call email alerts to the attorney on call, sent when Della scores a call as urgent. Every call also appears on the Call Della dashboard as a dossier with the summary, urgency score, recording and transcript, and in the 7am morning brief.' },
    ],
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    code: 'GA',
    tldr:
      'Georgia personal injury intake is the first-call screening a Georgia firm runs on a new injury matter. Georgia gives two years to sue for personal injury under O.C.G.A. § 9-3-33, bars a plaintiff who is 50 percent or more at fault, and is not a no-fault state. SB 68, signed April 21, 2025, changed how Georgia injury cases are tried, including seat belt evidence.',
    sol: {
      period: '2 years',
      cite: 'O.C.G.A. § 9-3-33',
      detail: 'Actions for injuries to the person must be brought within two years after the right of action accrues.',
      url: MWL_SOL.url,
    },
    table: { sol: '2 years', fault: 'Modified comparative (bar at 50%)', noFault: 'No' },
    fault: {
      lead: 'Georgia uses modified comparative fault with a 50 percent bar: a plaintiff who is 50 percent or more responsible recovers nothing.',
      body: [
        'The rule comes from O.C.G.A. §§ 51-11-7 and 51-12-33, as summarized in the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025). That is stricter than the Texas, Florida and Illinois rule, where a plaintiff at exactly 50 percent can still recover. In Georgia, an even split of fault ends the claim.',
        'SB 68 adds to the weight of the liability facts. According to Kennedys (2025), it removed the long-standing rule that kept seat belt non-use out of evidence in motor vehicle cases, so a jury may now consider it on negligence, comparative fault and causation. Georgia intake should record whether the caller was belted, in neutral terms, alongside the police report, citations and witnesses.',
      ],
      src: [MWL_FAULT, S.gaSB68],
    },
    noFault: {
      lead: 'No. Georgia is an at-fault state, so the injured person claims against the at-fault driver’s liability insurance.',
      body: [
        'The Insurance Information Institute’s list of the twelve states with no-fault auto insurance laws does not include Georgia. Georgia callers will not have a PIP claim, though some carry medical payments coverage on their own policies.',
        'Georgia auto intake therefore turns on the other driver and their coverage. The call should capture the other driver’s name and insurer, the caller’s own carrier, and whether the other vehicle was a commercial truck, a delivery van, a rideshare car or a government vehicle. Interstate trucking through Atlanta brings federal motor carrier rules into play, and our <a href="/case-types/trucking-accidents">trucking accident intake</a> guide lists the records that matter. SB 68 also limits recovery of billed medical charges to the reasonable value of care, according to Kennedys (2025), so the caller’s health insurance status is worth recording.',
      ],
      src: [III, S.gaSB68],
    },
    deadlines: {
      lead: 'The two-year limit under O.C.G.A. § 9-3-33 is the main deadline, but claims against government defendants can carry shorter notice periods.',
      body: [
        'Georgia law requires notice to cities, counties and the state within set periods before suit, and those periods are shorter than two years. We have not listed them here because we could not confirm the current text against the official code in this review. The attorney should check them the morning after any call that names a public entity.',
        'What intake can do is make sure the question gets asked. A Georgia intake specialist should ask whether a MARTA bus, a city or county vehicle, a school bus or a state DOT truck was involved, and whether a fall happened on public property. The dossier should record the entity the caller names, the location and the incident date, so the deadline check starts with the right facts.',
      ],
      src: [MWL_SOL],
    },
    caps: {
      lead: 'Georgia caps punitive damages at $250,000 in most tort cases, with no cap where the defendant acted with specific intent to harm or while impaired.',
      body: [
        'O.C.G.A. § 51-12-5.1(g) sets the $250,000 maximum for tort actions not covered by its product liability and intent provisions. Under subsection (f), there is no limit where the defendant acted with specific intent to cause harm, or while under the influence of alcohol or drugs to the degree that judgment was substantially impaired.',
        'That impairment exception is the reason a Georgia intake call should ask, plainly, whether the other driver seemed intoxicated, was arrested or was charged. SB 68 also changed how non-economic damages are argued: according to Kennedys (2025), it restricts “anchoring” by limiting when attorneys may suggest dollar amounts for pain and suffering. Neither change caps compensatory damages in an ordinary negligence case.',
      ],
      src: [S.ga51125, S.gaSB68],
    },
    ai: {
      lead: 'We found no formal State Bar of Georgia ethics opinion on generative AI as of October 2026, but a Bar committee is examining the question.',
      body: [
        'The State Bar of Georgia’s Artificial Intelligence and Emerging Technology Committee is charged with examining how the Georgia Rules of Professional Conduct cover artificial intelligence, whether existing rules and Bar policies adequately address lawyers’ technology-related conduct, and how the Bar can help members integrate AI into practice. It reports to the Executive Committee, the Board of Governors and the Supreme Court of Georgia.',
        'Until the committee reports, Georgia firms work under the existing Rules and the national guidance in <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512</a>. For intake, that means confidentiality of caller information, supervision of whoever answers the phone, and attorney review of every summary. Each Della dossier carries the recording and transcript so that review is possible.',
      ],
      src: [S.gaBar],
    },
    recordingNote:
      'Georgia firms take calls from Florida, an all-party state, every day, so a notice at the start of every call is the safer default.',
    capture: [
      'Incident date, city and county',
      'Whether a MARTA bus, school bus, city, county or state vehicle was involved',
      'Police report agency and any citation issued',
      'Whether the caller was wearing a seat belt, asked neutrally',
      'Any sign the other driver was impaired, arrested or charged',
      'Whether the other vehicle was a commercial truck, with the company name or USDOT number',
      'Injuries, treatment so far, and the caller’s health insurance status',
      'The other driver’s insurer and the caller’s own carrier',
    ],
    della:
      'Della, Call Della’s intake specialist, answers a Georgia firm’s line in the firm’s name nights, weekends and holidays. She takes the facts above in a calm order, never gives legal advice, and tells callers she is an AI if they ask. Each call becomes a dossier with a summary, urgency score, recording and transcript. Urgent calls send an email alert to the attorney on call, on every plan, and the rest are in the 7am morning brief.',
    faqs: [
      { q: 'What is the statute of limitations for personal injury in Georgia?', a: 'Two years. O.C.G.A. § 9-3-33 requires actions for injuries to the person to be brought within two years after the right of action accrues. Claims against government defendants can require notice much sooner, so intake should always ask whether a public vehicle or property was involved.' },
      { q: 'What is Georgia’s comparative negligence rule?', a: 'Modified comparative fault with a 50 percent bar under O.C.G.A. § 51-12-33. A plaintiff who is 50 percent or more responsible recovers nothing. Below that, damages are reduced by the plaintiff’s share. That is stricter than states where a plaintiff at exactly 50 percent can still recover.' },
      { q: 'What did Georgia’s SB 68 change for injury cases?', a: 'SB 68, signed April 21, 2025, made several trial changes. According to Kennedys (2025), it allows seat belt evidence in motor vehicle cases, limits medical damages to the reasonable value of care, restricts anchoring of non-economic damages, and sets new negligent security standards. Effective dates differ by provision.' },
      { q: 'Does Georgia cap punitive damages?', a: 'Yes, in most cases. O.C.G.A. § 51-12-5.1(g) limits punitive damages to $250,000 in tort actions outside its product liability and intent provisions. There is no cap where the defendant acted with specific intent to harm or was impaired by alcohol or drugs to the degree that judgment was substantially impaired.' },
      { q: 'Does Della work for Atlanta firms with daytime intake staff?', a: 'Yes. Della covers the hours your intake team is not there: nights, weekends and holidays, answering in your firm’s name. When your team arrives, each overnight call is on the Call Della dashboard as a dossier, and the 7am morning brief lists what needs a callback first.' },
    ],
  },
];

export const stateBySlug = (slug: string) => stateData.find((s) => s.slug === slug);
