import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { pageMeta, page } from '@/data/pages';
import { caseData, FMCSA } from '@/data/cases';
import { III, SOURCES } from '@/data/states';

const SLUG = '/case-types';
export const metadata = pageMeta(SLUG);

const CLOCK: Record<string, [string, string]> = {
  'auto-accidents': ['Florida’s 14-day PIP treatment window; government notice periods', 'Police report, both insurers, treatment dates'],
  'trucking-accidents': ['Driver duty-status records kept for as little as 6 months', 'Carrier name or USDOT number, scene facts, tests'],
  'slip-and-fall': ['Government notice periods of 90 days to 1 year', 'The hazard, the owner, incident report, staff remarks'],
};

const FAQS = [
  { q: 'What is personal injury intake?', a: 'Personal injury intake is the first conversation between a firm and a person who may have an injury claim. It records who the caller is, what happened, when and where, the injuries and treatment, the insurers involved, and any deadline already running. The attorney uses that record to decide whether to take the matter.' },
  { q: 'Which personal injury case types does Call Della cover?', a: 'These guides cover auto accidents, commercial trucking accidents and slip and fall premises cases. Della takes after-hours intake for personal injury firms on all three, alongside criminal defense and immigration intake for firms in those practice areas. Wrongful death and medical malpractice guides are planned.' },
  { q: 'Why does the case type change the intake questions?', a: 'Each case type has a different clock and different evidence. A trucking crash turns on identifying the motor carrier before records age out. A slip and fall turns on the hazard and the property owner. An auto accident in a no-fault state turns on the caller’s own policy and treatment dates.' },
  { q: 'Does Della decide whether a caller has a case?', a: 'No. Della never gives legal advice and never tells a caller whether they have a claim. She records the facts in the caller’s words, scores the call’s urgency, and delivers a dossier with the recording and transcript for the attorney to review. If asked, she tells callers she is an AI.' },
  { q: 'How do urgent case-type calls reach the firm at night?', a: 'Every Call Della plan includes urgent-call email alerts to the attorney on call. Calls Della scores as urgent, such as a catastrophic trucking crash, send an alert straight away. Every other call is on the Call Della dashboard as a dossier and in the 7am morning brief.' },
];

export default function CaseTypesIndex() {
  const p = page(SLUG);
  return (
    <ArticleLayout
      eyebrow="REFERENCE · CASE TYPES"
      title="Personal Injury Case Types: Intake by Matter"
      slug={SLUG}
      date={p.datePublished}
      author="Andy Norman"
      breadcrumbs={[{ name: 'Case types', href: SLUG }]}
      citations={[FMCSA.rods, SOURCES.fl627736, SOURCES.ny50e, III]}
      tldr={
        <>
          Personal injury case types intake means running a different first-call checklist for each kind of matter. Each case type has its own clock: federal rules let trucking companies keep driver duty-status records for as little as six months, Florida’s PIP covers only care first received within 14 days of a crash, and a New York notice of claim on a municipality is due in 90 days.
        </>
      }
    >
      <Prose>
        <h2>How does intake differ by personal injury case type?</h2>
        <p>
          <strong>Intake differs by case type in which deadline runs first and which evidence fades fastest.</strong> The table summarizes the three guides. Each guide has a full capture checklist, the sourced rules behind it, and common questions from firms.
        </p>
        <Table
          caption="Personal injury intake by case type"
          head={['Case type', 'The clock that runs first', 'What the first call must lock down']}
          rows={caseData.map((c) => [
            <a key={c.slug} href={`/case-types/${c.slug}`}>{c.title}</a>,
            CLOCK[c.slug][0],
            CLOCK[c.slug][1],
          ])}
        />

        <h2>Which facts does every personal injury intake call need?</h2>
        <p>
          <strong>Every personal injury intake call needs the same core record: who, what, when, where, the injuries, the insurers and any deadline already running.</strong> Whatever the case type, the attorney needs the caller’s contact details and best callback time, the date and place of the incident, a plain account of what happened, the injuries and every place the caller has been treated, the insurers on both sides, and whether a public vehicle or public property was involved.
        </p>
        <p>
          Two more questions protect the firm. Has the caller spoken to another lawyer, and have they given a recorded statement or signed anything with an insurer? The first is a conflict and ethics question. The second can change the case. Our <a href="/glossary">PI intake glossary</a> defines the terms that come up on these calls, from MMI and MIST to letters of protection.
        </p>

        <h2>What makes auto accident intake different?</h2>
        <p>
          <strong>Auto accident intake turns on the state’s fault rule and, in no-fault states, the caller’s own insurance.</strong> Twelve states and Puerto Rico have no-fault auto laws, according to the Insurance Information Institute. In Florida, PIP pays up to $10,000 and covers only care first received within 14 days of the accident under Fla. Stat. § 627.736. The <a href="/case-types/auto-accidents">auto accident intake</a> guide covers the full checklist, the deadlines and what makes a crash call urgent.
        </p>

        <h2>What makes trucking accident intake different?</h2>
        <p>
          <strong>Trucking accident intake has to identify the motor carrier on the first call, because the federal records that matter are only kept for set periods.</strong> Under 49 CFR § 395.8(k), carriers must keep each driver’s records of duty status for not less than six months. The <a href="/case-types/trucking-accidents">trucking accident intake</a> guide covers hours of service, post-accident testing and the federal insurance minimums.
        </p>

        <h2>What makes slip and fall intake different?</h2>
        <p>
          <strong>Slip and fall intake centers on the hazard and the property owner, and on public property the deadline can be 90 days.</strong> New York requires a notice of claim against a municipality within 90 days under General Municipal Law § 50-e. The <a href="/case-types/slip-and-fall">slip and fall intake</a> guide covers the cause of the fall, comparative fault and recent premises liability changes.
        </p>

        <h2>What should happen after the intake call?</h2>
        <p>
          <strong>After the intake call, the attorney reviews the record, runs the conflict check and decides the order of callbacks, starting with the matters whose deadlines are closest.</strong> A good intake record makes that review fast. The dossier should show the incident date, the case type, any public entity, the injuries and the urgency in a form the attorney can scan in a minute.
        </p>
        <p>
          Decisions that act on the case stay with the firm: sending a preservation letter to a trucking company, filing a notice of claim on a city, or signing a retainer agreement with the client. Intake gathers the facts those decisions need. It does not make them. That division keeps the firm in control of every step that creates a legal obligation, and it keeps the intake specialist on the right side of the line against giving legal advice.
        </p>

        <h2>How does Della handle each case type after hours?</h2>
        <p>
          <strong>Della, Call Della’s intake specialist, answers the firm’s line nights, weekends and holidays and runs the checklist that fits the caller’s matter.</strong> She plays the state recording disclosure, never gives legal advice, and tells callers she is an AI if they ask. Each call becomes a dossier with a summary, urgency score, recording and transcript. Urgent calls send an email alert to the attorney on call, on every plan. See how Della runs <a href="/personal-injury">after-hours personal injury intake</a>, and check state deadlines in our <a href="/states">personal injury rules by state</a> table.
        </p>
      </Prose>

      <DemoCTA>
        Hear Della take a case-type call for your practice. Book a demo and she will run a live intake call, then show you the dossier.
      </DemoCTA>

      <FAQ items={FAQS} heading="Personal injury case types: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
