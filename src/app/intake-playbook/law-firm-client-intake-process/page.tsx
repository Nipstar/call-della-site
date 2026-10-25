import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '../_ui';

const SLUG = '/intake-playbook/law-firm-client-intake-process';
export const metadata = pageMeta(SLUG);

// One list drives both the flow chart and its text alternative, so they never drift apart.
const STEPS = [
  { name: 'First contact', owner: 'Whoever answers: intake team by day, Della after hours', short: 'Intake team; Della after hours', does: 'Answers the call, form or chat in the firm’s name and identifies who is calling.' },
  { name: 'Capture details', owner: 'Intake specialist (Della after hours)', short: 'Intake specialist', does: 'Records contact details, the matter, the other parties, dates and documents.' },
  { name: 'Conflict check', owner: 'Conflicts staff or intake coordinator', short: 'Conflicts staff', does: 'Searches every party name against current and former clients and prospects.' },
  { name: 'Qualification', owner: 'Intake specialist, attorney on edge cases', short: 'Intake; attorney on edge cases', does: 'Tests the matter against the firm’s case criteria: practice area, venue, deadline, value.' },
  { name: 'Urgency triage', owner: 'Intake specialist flags; attorney on call acts', short: 'Intake flags; attorney acts', does: 'Sorts matters by how soon a lawyer must act: arrest, detention, near deadline, routine.' },
  { name: 'Consultation', owner: 'Attorney', short: 'Attorney', does: 'Reviews the facts with the prospective client and decides whether to take the matter.' },
  { name: 'Engagement letter', owner: 'Attorney signs; paralegal sends', short: 'Attorney; paralegal sends', does: 'Sets out scope, fee basis and expenses; the client signs.' },
  { name: 'Matter opened', owner: 'Paralegal or operations', short: 'Paralegal or operations', does: 'Opens the file, sets deadlines and assigns the team.' },
];

const BOX_H = 62;
const GAP = 30;
const TOP = 14;
const y = (i: number) => TOP + i * (BOX_H + GAP);
const H = y(STEPS.length) - GAP + 14;
// Steps 3 and 4 can end the process; their exits sit in a side column.
const EXITS: Record<number, string[]> = {
  2: ['Conflict found:', 'decline in', 'writing'],
  3: ['Not a fit:', 'decline and', 'refer out'],
};

const FlowChart = () => (
  <figure className="my-10">
    <svg
      role="img"
      aria-labelledby="flow-title" aria-describedby="flow-desc"
      viewBox={`0 0 360 ${H}`}
      className="block w-full h-auto max-w-[520px] mx-auto"
    >
      <title id="flow-title">Law firm client intake process flow chart</title>
      <desc id="flow-desc">
        Eight steps in order, each with its owner: {STEPS.map((s, i) => `${i + 1}. ${s.name} (${s.short})`).join('; ')}. Conflict check can end with a written decline if a conflict is found. Qualification can end with a decline and referral if the matter is not a fit.
      </desc>
      <defs>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-[var(--ink)]" />
        </marker>
      </defs>
      {STEPS.map((s, i) => (
        <g key={s.name}>
          <rect x="6" y={y(i)} width="222" height={BOX_H} className={i === 0 || i === STEPS.length - 1 ? 'fill-[var(--paper-edge)] stroke-[var(--ink)]' : 'fill-[var(--paper)] stroke-[var(--ink)]'} strokeWidth="1.5" />
          <text x="18" y={y(i) + 26} className="fill-[var(--ink)] font-serif" fontSize="16" fontWeight="600">
            {i + 1}. {s.name}
          </text>
          <text x="18" y={y(i) + 47} className="fill-[var(--ink-soft)] font-serif italic" fontSize="12.5">
            {s.short}
          </text>
          {i < STEPS.length - 1 && (
            <line x1="117" y1={y(i) + BOX_H} x2="117" y2={y(i + 1) - 2} className="stroke-[var(--ink)]" strokeWidth="1.5" markerEnd="url(#flow-arrow)" />
          )}
          {EXITS[i] && (
            <>
              <line x1="228" y1={y(i) + BOX_H / 2} x2="246" y2={y(i) + BOX_H / 2} className="stroke-[var(--stamp-red)]" strokeWidth="1.5" markerEnd="url(#flow-arrow)" />
              <rect x="248" y={y(i) + 6} width="106" height={BOX_H - 12} className="fill-[var(--paper)] stroke-[var(--stamp-red)]" strokeWidth="1.5" strokeDasharray="4 3" />
              {EXITS[i].map((line, k) => (
                <text key={line} x="256" y={y(i) + 23 + k * 14} className="fill-[var(--ink)] font-serif" fontSize="12">
                  {line}
                </text>
              ))}
            </>
          )}
        </g>
      ))}
    </svg>
    <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
      The eight-step client intake process, with the owner of each step. Text version below.
    </figcaption>
  </figure>
);

const FAQS = [
  {
    q: 'What are the steps in a law firm client intake process?',
    a: 'A typical law firm client intake process has eight steps: first contact, capture details, conflict check, qualification, urgency triage, consultation, engagement letter and matter opened. Two steps can end the process early. A conflict ends it with a written decline, and a matter outside the firm’s criteria ends it with a decline and a referral.',
  },
  {
    q: 'Who should run the conflict check?',
    a: 'A named person who is not under pressure to sign the case, usually a conflicts clerk, paralegal or intake coordinator. They search every party name the intake captured against current clients, former clients and earlier prospective clients. An attorney decides what to do when the search returns a possible match.',
  },
  {
    q: 'Should the conflict check come before or after qualification?',
    a: 'Run a basic conflict check as early as the details allow, before the prospective client shares much about the matter. ABA Model Rule 1.18 protects information learned from a prospective client even when no engagement follows. Fewer facts heard before the check means less risk of a disqualifying conflict later.',
  },
  {
    q: 'Does an engagement letter have to be in writing?',
    a: 'It depends on the fee. Under ABA Model Rule 1.5(b), scope and fee basis must be communicated, preferably in writing. Under Rule 1.5(c), a contingent fee agreement must be in a writing signed by the client. States adopt their own versions of these rules, so check the rule in your jurisdiction.',
  },
  {
    q: 'What is a law firm client intake system?',
    a: 'A law firm client intake system is the set of people, scripts, forms and software that move a prospective client from first contact to an opened matter. A working system names an owner for every step, records every call, and makes sure nights and weekends are covered, not only office hours.',
  },
  {
    q: 'Where does Call Della fit in the intake process?',
    a: 'Della covers steps one and two after hours, then supports qualification and triage. She answers in the firm’s name, captures the details and party names, screens against your criteria and flags urgent matters. Your team runs the conflict check, the consultation and the engagement letter. Della never gives legal advice.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK · PROCESS"
      title="Law firm client intake process flow chart"
      slug={SLUG}
      author="Andy Norman"
      date="2026-10-25"
      breadcrumbs={[
        { name: 'Intake Playbook', href: '/intake-playbook' },
        { name: 'Client intake process', href: SLUG },
      ]}
      citations={[SRC.rule118, SRC.rule15, SRC.rule53, SRC.clio2024, SRC.obj2025]}
      tldr={
        <>
          <p className="mb-2">
            The law firm client intake process is the sequence that turns a first call into an opened matter: first contact, capture details, conflict check, qualification, urgency triage, consultation, engagement letter, matter opened.
          </p>
          <p className="m-0">
            Each step needs a named owner. The first step is where most firms leak: in Clio&apos;s 2024 secret-shopper study, only 40% of 500 US firms answered the phone.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is the law firm client intake process?</h2>
        <p>
          <strong>The law firm client intake process</strong> is the fixed sequence of steps a firm uses to take a prospective client from first contact to a signed engagement and an opened matter. The flow chart below shows the eight steps most firms use, and who owns each one. Two steps can end the process: the conflict check, if a conflict turns up, and qualification, if the matter falls outside the firm&apos;s criteria. Writing the process down matters because intake failures are usually handoff failures. A call is answered but nobody runs the conflict check. A strong case is flagged but nobody books the consultation. A named owner per step closes those gaps. The same process applies to <Link href="/personal-injury">personal injury</Link>, <Link href="/criminal-defense">criminal defense</Link> and <Link href="/immigration">immigration</Link> practices, with different qualification criteria and different urgent cases.
        </p>
      </Prose>

      <FlowChart />

      <Prose>
        <h3>The eight steps, in order</h3>
        <ol>
          {STEPS.map((s) => (
            <li key={s.name}>
              <strong>{s.name}.</strong> {s.does} Owner: {s.owner}.
            </li>
          ))}
        </ol>
        <p>
          Exits: at step 3, a conflict ends intake with a written decline. At step 4, a matter outside the firm&apos;s criteria ends intake with a decline and, where possible, a referral.
        </p>

        <h2>Who owns each step of the intake process?</h2>
        <p>
          <strong>Every step of client intake needs one named owner, and only three steps need an attorney</strong>: the edge cases in qualification, the consultation and the engagement letter. The rest belong to intake staff, paralegals and operations. That split matters for supervision. Under <a href={SRC.rule53.url}>ABA Model Rule 5.3</a>, lawyers with managerial or supervisory authority must make reasonable efforts to ensure that nonlawyer assistants act in a way compatible with the lawyer&apos;s professional obligations. Intake staff, answering services and AI intake all sit inside that duty. The table sets out the owner and the output of each step.
        </p>
        <Table
          caption="Client intake steps, owners and outputs"
          head={['Step', 'Owner', 'Output']}
          rows={[
            ['1. First contact', 'Intake team by day; Della after hours', 'An answered call, logged with time and number'],
            ['2. Capture details', 'Intake specialist', 'An intake record using the firm’s form'],
            ['3. Conflict check', 'Conflicts staff or intake coordinator', 'Clear, or a match for an attorney to review'],
            ['4. Qualification', 'Intake specialist; attorney on edge cases', 'Meets criteria, decline, or attorney review'],
            ['5. Urgency triage', 'Intake flags; attorney on call acts', 'An urgency level and a callback order'],
            ['6. Consultation', 'Attorney', 'Accept or decline the matter'],
            ['7. Engagement letter', 'Attorney signs; paralegal sends', 'A signed engagement or fee agreement'],
            ['8. Matter opened', 'Paralegal or operations', 'A file, deadlines and an assigned team'],
          ]}
        />

        <h2>What happens at first contact?</h2>
        <p>
          <strong>At first contact, someone answers in the firm&apos;s name and finds out who is calling and why</strong>. First contact is the step most firms fail. According to the{' '}
          <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 Legal Trends Report, the share of firms answering a prospective client&apos;s call fell from 56% in 2019 to 40% in 2024, and only 20% of the firms that missed a call returned it. A process that starts with voicemail starts with a gap. Good first contact is short. The person answering gives the firm&apos;s name, asks for the caller&apos;s name and number first in case the line drops, and asks what happened in the caller&apos;s own words. Whoever answers must not give legal advice or promise representation. Our data page on <Link href="/operations/law-firm-missed-calls-data">how many calls law firms miss</Link> sets out the full figures.
        </p>

        <h2>What details should intake capture?</h2>
        <p>
          <strong>Intake should capture contact details, the matter in brief, every party name, the key dates and how the caller found the firm</strong>. Party names feed the conflict check, so capture the opposing party, any insurer, any co-defendant and any employer involved. Key dates drive urgency: the incident date for a personal injury claim, the court date for a criminal charge, a hearing or filing deadline in an immigration matter. Use the same form on every call, whoever answers, so records can be compared and nothing depends on one person&apos;s memory. Our{' '}
          <Link href="/intake-playbook/law-firm-client-intake-form">law firm client intake form</Link> lists the core fields and the extra sections for each practice area. For personal injury, see{' '}
          <Link href="/intake-playbook/what-should-be-on-a-pi-intake-form">what should be on a personal injury intake form</Link>.
        </p>

        <h2>When should a firm run the conflict check?</h2>
        <p>
          <strong>A firm should run the conflict check as soon as it has the party names, before the prospective client describes the matter in depth</strong>. The reason is <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>. Under Rule 1.18(b), a lawyer who learns information from a prospective client must not use or reveal it, even when no engagement follows. Under Rule 1.18(c), if the information could be significantly harmful to that person, the lawyer may be barred from representing a client with materially adverse interests in the same or a substantially related matter, and the bar can extend to the whole firm. Rule 1.18(d) allows a way through with informed written consent, or with screening and written notice, where the lawyer limited what they heard to what was reasonably necessary. Intake should collect names first and the full story second. States adopt their own versions of the Model Rules, so confirm the rule in your jurisdiction.
        </p>

        <h2>How do you qualify a prospective client?</h2>
        <p>
          <strong>You qualify a prospective client by testing the matter against written criteria the firm agreed in advance</strong>. Typical criteria are practice area, jurisdiction and venue, time left before any deadline, the client&apos;s role in the matter, and, for contingency work, whether there is a viable source of recovery. Written criteria let intake staff decide most calls without an attorney and send only the edge cases up. They also make declines consistent, which protects the firm when a declined caller later complains. Qualification is not the consultation. Intake staff should not tell callers whether they have a case, because that is legal advice. For personal injury, our guide to{' '}
          <Link href="/intake-playbook/intake-red-flags-declining-cases">personal injury case evaluation</Link> lists the red flags to log. A declined caller should get a clear decline and, where possible, a referral.
        </p>

        <h2>How should urgent calls be triaged?</h2>
        <p>
          <strong>Urgent calls should be triaged by how soon a lawyer must act, and the most urgent should reach the attorney on call the same night</strong>. Urgency differs by practice. In criminal defense, an arrest, a bond hearing or a client in custody is urgent. In immigration, a detained family member or a hearing within days is urgent. In personal injury, a limitations deadline that is close, or evidence about to disappear, is urgent. Everything else can wait for the morning queue, ordered by value and time. Triage needs a short, fixed scale, such as urgent, next business day and routine, so that everyone means the same thing. The flag is set during the call, and the attorney on call decides what to do with it. Our{' '}
          <Link href="/states">personal injury rules by state</Link> page lists limitation periods for the states we cover.
        </p>

        <h2>What does the consultation decide?</h2>
        <p>
          <strong>The consultation decides whether the firm will take the matter, and on what terms</strong>. It is the first step owned by an attorney end to end. The attorney reviews the intake record, asks the questions intake could not, and gives the prospective client a clear answer: accepted, declined, or more information needed by a date. A good intake record makes the consultation shorter, because the attorney starts with the facts, the party names and the conflict result already on file. The consultation is also where fee terms are first discussed in detail, which leads to the engagement letter. If the firm declines, the attorney should say so in writing and avoid any suggestion that the firm is acting for the person. A written decline that mentions any deadline the person faces, without advising on it, is common practice.
        </p>

        <h2>What goes in the engagement letter?</h2>
        <p>
          <strong>The engagement letter sets out the scope of the representation, the basis of the fee and the expenses the client will pay</strong>. Under <a href={SRC.rule15.url}>ABA Model Rule 1.5(b)</a>, the scope and the basis or rate of the fee and expenses must be communicated to the client, preferably in writing, before or within a reasonable time after the representation begins. Under Rule 1.5(c), a contingent fee agreement must be in a writing signed by the client. It must state the percentage at settlement, trial or appeal, the expenses to be deducted, and whether they come off before or after the fee. Rule 1.5(d)(2) bars a contingent fee for representing a defendant in a criminal case. Until the letter is signed, the firm should treat the person as a prospective client. Check your state&apos;s version of Rule 1.5 before you finalize templates.
        </p>

        <h2>What is a law firm client intake system?</h2>
        <p>
          <strong>A law firm client intake system</strong> is the combination of people, scripts, forms, phone coverage and software that runs the eight steps above every day. The software is the least important part. A firm can run good intake on a shared form and a phone log if every step has an owner and every call is answered. The common failures are coverage and handoffs: calls after 5pm that go to voicemail, and records that sit in an inbox with no owner. Check three things in your own system. First, who answers at 9pm on a Saturday. Second, how a captured record reaches the conflicts check. Third, how an urgent flag reaches an attorney. Our{' '}
          <Link href="/operations/after-hours-intake-comparison">after-hours intake comparison</Link> sets out the coverage options side by side.
        </p>

        <h2>Where does after-hours intake fit in the process?</h2>
        <p>
          <strong>After-hours intake covers steps one and two, and starts steps four and five, when the office is closed</strong>. Della, Call Della&apos;s intake specialist, answers in the firm&apos;s name nights, weekends and holidays. She captures the details and party names on the firm&apos;s questions, screens the matter against the firm&apos;s criteria, and sets an urgency score. Urgent calls go to the attorney on call by email alert, and everything else lands in a 7am morning brief. Della does not run the conflict check, hold the consultation or sign anyone up. Those stay with your team. She tells callers she is an AI if they ask, and she never gives legal advice or quotes fees. The morning starts at step three with a complete record, not a voicemail to return.
        </p>
      </Prose>

      <DemoCTA>
        See how steps one and two run when your office is closed. Book a demo and hear a live Della intake call for your practice area, then see the dossier she files.
      </DemoCTA>

      <FAQ items={FAQS} heading="Client intake process: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
