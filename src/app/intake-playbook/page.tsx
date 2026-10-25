import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, DemoCTA, SRC } from './_ui';

const SLUG = '/intake-playbook';
export const metadata = pageMeta(SLUG);

const POSTS = [
  { href: '/intake-playbook/law-firm-client-intake-process', title: 'Law firm client intake process flow chart', blurb: 'The eight steps from first contact to an opened matter, with the owner of each, as a flow chart and a text list.' },
  { href: '/intake-playbook/law-firm-client-intake-form', title: 'Client intake form for a law firm', blurb: 'The core fields every matter needs, plus sections for personal injury, criminal defense and immigration.' },
  { href: '/intake-playbook/what-should-be-on-a-pi-intake-form', title: 'What should be on a personal injury intake form?', blurb: 'Incident, injury, treatment, insurance, fault, deadline and prior-counsel fields, and why each one is there.' },
  { href: '/intake-playbook/how-to-write-pi-intake-script', title: 'How to write a personal injury intake script', blurb: 'The opening, the order of questions, the line for advice requests, urgent calls and the close, with example wording.' },
  { href: '/intake-playbook/intake-red-flags-declining-cases', title: 'Personal injury case evaluation: red flags at intake', blurb: 'The red flags that weaken a PI matter, what to record for each, and how to decline in writing.' },
];

const FAQS = [
  {
    q: 'What is law firm client intake?',
    a: 'Law firm client intake is the process a firm uses to take a prospective client from first contact to a signed engagement and an opened matter. It covers answering the call, capturing details, the conflict check, qualification, urgency triage, the consultation and the engagement letter. Each step needs a named owner and a written standard.',
  },
  {
    q: 'What are law firm client intake procedures?',
    a: 'Law firm client intake procedures are the written rules for each intake step: who answers and when, which form is used, when the conflict check runs, the criteria for qualifying a matter, what counts as urgent, how declines are sent, and who signs the engagement letter. Written procedures keep intake consistent whoever answers the phone.',
  },
  {
    q: 'How is legal client intake different by practice area?',
    a: 'The steps are the same, but the questions and the urgent cases differ. Personal injury intake focuses on the incident date, injuries, treatment and insurance. Criminal defense intake starts with custody status and the court date. Immigration intake starts with detention status, notices received and the next hearing date.',
  },
  {
    q: 'Who should own client intake at a law firm?',
    a: 'One person should own the intake process as a whole, usually an intake manager or operations lead, with named owners for each step. Attorneys own the consultation, edge-case qualification decisions and the engagement letter. Intake staff, after-hours services and paralegals own the rest, under attorney supervision.',
  },
  {
    q: 'Does Call Della replace an intake team?',
    a: 'No. Call Della covers the hours your intake team is not there: nights, weekends and holidays. Della answers in your firm’s name, takes the intake and files a dossier on every call for the morning. Your team runs the conflict check, the consultation and the engagement letter, starting from a complete record.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK"
      title="Law firm client intake playbook"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-14"
      breadcrumbs={[{ name: 'Intake Playbook', href: SLUG }]}
      citations={[SRC.clio2024, SRC.abaLpm2025, SRC.obj2025, SRC.rule118]}
      tldr={
        <>
          <p className="mb-2">
            Law firm client intake is the process that turns a first call into a signed engagement: answer, capture, conflict check, qualify, triage, consult, engage, open the matter.
          </p>
          <p className="m-0">
            It fails most often at the first step. In Clio&apos;s 2024 secret-shopper study, only 40% of 500 US firms answered a prospective client&apos;s call. This playbook covers the process, forms, scripts and case evaluation for personal injury, criminal defense and immigration firms.
          </p>
        </>
      }
    >
      <nav aria-label="Intake playbook guides" className="mb-12">
        <ul className="flex flex-col gap-5 list-none p-0 m-0">
          {POSTS.map((p) => (
            <li key={p.href}>
              <a href={p.href} className="block min-h-[48px] bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-5 md:p-6 no-underline hover:shadow-[6px_6px_0_var(--rule)] transition-shadow">
                <span className="block font-serif text-[21px] font-semibold text-[var(--ink)] tracking-[-0.01em] mb-2">{p.title}</span>
                <span className="block font-serif text-[15px] text-[var(--ink-soft)] leading-[1.55]">{p.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Prose>
        <h2>What is law firm client intake?</h2>
        <p>
          <strong>Law firm client intake</strong> is everything that happens between a prospective client&apos;s first contact and an opened matter. It starts when someone answers the phone, a web form or a chat. It ends when the engagement letter is signed and the file is open. In between sit the steps that decide whether the firm takes the matter: capturing details, the conflict check, qualification, urgency triage and the consultation. Our{' '}
          <Link href="/intake-playbook/law-firm-client-intake-process">law firm client intake process flow chart</Link> sets out all eight steps with an owner for each. Intake is where marketing spend turns into signed matters, or does not. A firm can buy excellent leads and still sign few of them if the phone goes unanswered, the record is thin or nobody calls back. This playbook is written for the people who run that process.
        </p>

        <h2>What are law firm client intake procedures?</h2>
        <p>
          <strong>Law firm client intake procedures are the written rules that make each intake step happen the same way every time</strong>. They name who answers at each hour, which form they use, when the conflict check runs, the criteria for qualifying a matter, what counts as urgent, how declines are sent and who signs the engagement letter. Written procedures matter because intake is usually done by several people across the week, and callers should not get a different firm depending on when they call. Procedures also support supervision. Every person or service that takes intake for the firm acts under attorney supervision, and a written standard is how a firm shows what it expects. A good set of procedures fits on a few pages:
        </p>
        <ol>
          <li>Coverage: who answers in office hours, evenings, weekends and holidays.</li>
          <li>The <Link href="/intake-playbook/law-firm-client-intake-form">intake form</Link>: the core fields and the section for each practice area.</li>
          <li>The <Link href="/intake-playbook/how-to-write-pi-intake-script">intake script</Link>: opening, question order, advice line and close.</li>
          <li>The conflict check: who runs it, against what, and when.</li>
          <li>Qualification criteria and the <Link href="/intake-playbook/intake-red-flags-declining-cases">red flags</Link> that go to an attorney.</li>
          <li>Urgency rules and the route to the attorney on call.</li>
          <li>Declines and engagement letters: who sends them and how fast.</li>
        </ol>

        <h2>Why does the conflict check come so early?</h2>
        <p>
          <strong>The conflict check comes early because information from a prospective client is protected even if the firm never takes the matter</strong>. Under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, a lawyer who learns information from a prospective client must not use or reveal it, and in some cases the firm can be barred from acting against that person in a related matter. So intake should capture party names first, run the check, and only then hear the full story. That is why the intake form puts names near the top and why the script asks for them before the detail. A firm that hears everything before checking conflicts can end up disqualified from a matter it would rather have taken. States adopt their own versions of the Model Rules, so confirm your jurisdiction&apos;s rule when you write the procedure.
        </p>

        <h2>How is client intake different by practice area?</h2>
        <p>
          <strong>Client intake follows the same steps in every practice area, but the questions and the urgent cases differ</strong>. <Link href="/personal-injury">Personal injury</Link> intake turns on the incident date, the injuries, the treatment and the insurance, because those decide liability, damages and recovery. Its urgent cases are a deadline that is close or a serious injury. <Link href="/criminal-defense">Criminal defense</Link> intake starts with custody: whether the person is in jail, where, and when the next court date is. The caller is often a family member, not the client. <Link href="/immigration">Immigration</Link> intake starts with detention status, any notice received and the next hearing date, and the record should note the caller&apos;s preferred language. The intake form handles this with one core section and a short branch for each practice area, so every record still looks the same in the morning queue.
        </p>

        <h2>Where does client intake usually fail?</h2>
        <p>
          <strong>Client intake usually fails at first contact, before any form or script comes into play</strong>. According to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (March 2025)</a>, the secret-shopper study in Clio&apos;s 2024 Legal Trends Report found that only 40% of law firms answered phone calls, down from 56% in 2019. The <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a> adds that only 20% of firms that missed a call returned it, and 48% were unreachable by phone. The second common failure is the handoff: a record that sits overnight with no owner, or an urgent flag that never reaches an attorney. The third is inconsistency: different questions depending on who answers. Each failure has a procedure-level fix. Our <Link href="/operations">law firm intake operations</Link> guides cover the data and the coverage options.
        </p>

        <h2>How do you measure law firm client intake?</h2>
        <p>
          <strong>You measure law firm client intake with four numbers: answer rate, callback time, sign rate and cost per signed case</strong>. Answer rate is the share of inbound calls a person or intake specialist answered, split by office hours and after hours. Callback time is how long missed callers waited for a return call. Sign rate is signed matters divided by new inquiries answered. Cost per signed case is total acquisition cost divided by signed matters. All four come from records the firm already has: the phone log, the intake records and the accounts. Track them monthly, by practice area. Our <Link href="/operations/missed-call-cost-calculator">missed-call cost calculator</Link> and <Link href="/operations/cost-per-signed-case-calculator">cost per signed case calculator</Link> turn the raw counts into dollar figures.
        </p>

        <h2>Where does Call Della fit in client intake?</h2>
        <p>
          <strong>Call Della covers the first steps of client intake when your office is closed</strong>. Della, Call Della&apos;s intake specialist, answers in your firm&apos;s name nights, weekends and holidays. She takes the intake for personal injury, criminal defense and immigration matters, captures party names for your conflict check, and sets an urgency score. Every call is filed as a dossier with a summary, recording and transcript. Urgent calls go to the attorney on call by email alert, and everything else arrives in a 7am morning brief. Della never gives legal advice, never quotes fees and tells callers she is an AI if they ask. Your team picks up at the conflict check with a complete record instead of a voicemail.
        </p>
      </Prose>

      <DemoCTA>
        See your intake process with nights and weekends covered. Book a demo and hear a live Della call for your practice area.
      </DemoCTA>

      <FAQ items={FAQS} heading="Law firm client intake: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
