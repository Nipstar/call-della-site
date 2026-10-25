import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '../_ui';

const SLUG = '/intake-playbook/intake-red-flags-declining-cases';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'What is personal injury case evaluation?',
    a: 'Personal injury case evaluation is the firm’s decision on whether a prospective matter is worth taking. At intake it is a screen: does someone else appear to be at fault, are the injuries documented, is there a source of recovery, and is there time before the deadline. The attorney makes the final decision at or after the consultation.',
  },
  {
    q: 'How do you qualify a personal injury case on the first call?',
    a: 'Check the matter against written criteria: practice area and case type, the state where it happened, time left before the limitation period, documented injury and treatment, a likely at-fault party, an insurer or other source of recovery, and no current lawyer on the matter. Matters that meet every criterion go to consultation. Edge cases go to an attorney.',
  },
  {
    q: 'Should intake staff decline a personal injury case during the call?',
    a: 'Generally no. Intake staff should complete the record and flag the concern for an attorney, who makes the decision and sends the decline. A decline given on the phone by someone who is not a lawyer can sound like legal advice, and it gives the caller nothing in writing about the firm’s position.',
  },
  {
    q: 'What should a personal injury decline letter say?',
    a: 'A decline letter should say clearly that the firm is not representing the person, that it has not reviewed the merits of the claim, and that deadlines may apply and the person should consult another lawyer promptly if they wish to pursue it. Keep it short, and do not state the deadline as advice.',
  },
  {
    q: 'Is a gap in medical treatment always a reason to decline?',
    a: 'No. A treatment gap is a flag to record and explain, not an automatic decline. Callers miss care because of cost, work, childcare or because they hoped the pain would pass. Record the dates and the reason in the caller’s words. The attorney weighs it against the injury, the liability facts and the insurance available.',
  },
  {
    q: 'Does Della decline cases?',
    a: 'No. Della completes the intake on every after-hours call and flags anything that matches your firm’s red flags, such as a deadline that is close or a current lawyer on the matter. Your attorneys make every decision about taking or declining a case. Della never tells a caller whether they have a case.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK · PERSONAL INJURY"
      title="Personal injury case evaluation: red flags at intake"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-18"
      breadcrumbs={[
        { name: 'Intake Playbook', href: '/intake-playbook' },
        { name: 'Case evaluation red flags', href: SLUG },
      ]}
      citations={[SRC.rule118, SRC.rule15, SRC.rule53, SRC.obj2025]}
      tldr={
        <>
          <p className="mb-2">
            Personal injury case evaluation at intake is a first screen for liability, documented injury, a source of recovery and time before the deadline. Red flags are facts that make a matter weaker or riskier: a near deadline, a treatment gap, a current or departed lawyer, unclear fault, no insurance.
          </p>
          <p className="m-0">
            Log red flags, do not act on them. Under ABA Model Rule 1.18, what a declined caller tells the firm stays protected, so record facts and let an attorney decide.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is personal injury case evaluation at intake?</h2>
        <p>
          <strong>Personal injury case evaluation at intake</strong> is the first screen a firm applies to a new matter, before an attorney spends time on a consultation. It asks four questions. Does someone else appear to be at fault? Are the injuries real and documented? Is there an insurer or another source to pay a recovery? Is there enough time before the limitation period runs? A matter that clears all four goes to consultation. A matter that fails one is not automatically declined, but it carries a <strong>red flag</strong> that the attorney needs to see. Intake evaluation is a sorting step, not a legal opinion. The person taking the call collects facts, matches them to the firm&apos;s written criteria and marks anything that looks wrong. The attorney decides. Our <Link href="/intake-playbook/law-firm-client-intake-process">client intake process flow chart</Link> shows where this sits.
        </p>

        <h2>How do you qualify a personal injury case?</h2>
        <p>
          <strong>You qualify a personal injury case by checking it against criteria the firm writes down before the phone rings</strong>. Written criteria let intake staff sort most calls without an attorney, keep decisions consistent, and give the firm a record of why it declined. Most PI firms use some version of this list:
        </p>
        <ol>
          <li>The case type is one the firm handles: auto, trucking, premises, product, or others it lists.</li>
          <li>The incident happened in a state where the firm practices.</li>
          <li>There is enough time before the limitation period to investigate and file.</li>
          <li>The caller has been injured and has seen, or is seeing, a medical provider.</li>
          <li>Someone other than the caller appears to share the fault.</li>
          <li>There is an insurer, a business or another source that could pay.</li>
          <li>No other lawyer currently represents the caller on this matter.</li>
        </ol>
        <p>
          A matter that meets every point goes to the consultation queue. A matter that misses one goes to an attorney with the red flag marked.
        </p>

        <h2>What are the red flags at personal injury intake?</h2>
        <p>
          <strong>The common red flags at personal injury intake are a near deadline, a treatment gap, prior or current counsel, unclear fault, no source of recovery, minor injury, a signed release and an inconsistent account</strong>. None is an automatic decline. Each changes how much work the matter needs, how strong it is, or how fast the firm must act. The table sets out what to record for each and what it may mean for the attorney. Record the facts in the caller&apos;s own words, with dates where possible. Avoid labels like &quot;weak case&quot; in the record. A neutral record is more useful to the attorney and safer for the firm if the decision is ever questioned.
        </p>
        <Table
          caption="Personal injury intake red flags"
          head={['Red flag', 'What to record', 'What it may mean']}
          rows={[
            ['Deadline close', 'Exact incident date, state, any government party', 'Needs an attorney at once, or a fast decline'],
            ['Treatment gap or none', 'Dates of care and the reason for any gap', 'Harder to prove injury; needs explaining'],
            ['Current lawyer on the matter', 'Lawyer’s name and why the caller is calling', 'Second opinion or change of counsel'],
            ['Earlier lawyer withdrew', 'Name, when, and the reason given', 'Possible weakness the attorney should hear first'],
            ['Fault unclear or mainly the caller’s', 'The caller’s account, weather, speed, phones', 'Shared-fault rules may reduce or bar recovery'],
            ['No insurance or collectible party', 'Every insurer and business named', 'A strong claim with nothing to recover'],
            ['Minor injury', 'Injuries in the caller’s words and treatment', 'Value may not justify the work'],
            ['Signed release or statement', 'What was signed or said, and to whom', 'Options may already be narrowed'],
            ['Account changes during the call', 'Both versions, verbatim', 'Credibility question for the attorney'],
          ]}
        />

        <h2>Why is a near deadline the first red flag?</h2>
        <p>
          <strong>A near deadline is the first red flag because it is the only one that can end a claim outright on a date</strong>. Every other flag weakens a case. A missed statute of limitations usually bars it. The limitation period for personal injury differs by state and by type of claim, so intake needs both the incident date and the state. Our <Link href="/states">personal injury rules by state</Link> page lists the periods for the states we cover. When the deadline is close, the firm has two good options: get an attorney on the matter the same day, or decline in writing quickly so the person can find another lawyer. The bad option is to leave the record in a queue. Intake should not calculate the deadline or tell the caller about it. Mark the record, give the date, and route it to the attorney on call.
        </p>

        <h2>What does a gap in medical treatment signal?</h2>
        <p>
          <strong>A gap in medical treatment signals that the injury will be harder to prove, not that the case is lost</strong>. Insurers look at the treatment record first. Weeks without care after a crash give them an argument that the injury was minor or caused by something else. A caller who has never seen a doctor gives them a stronger one. Intake should record the dates of every visit the caller remembers and the reason for any gap, in the caller&apos;s words. Common reasons are cost, work, childcare and hoping the pain would pass. Those reasons matter to the attorney and to a jury. If the caller has had no care, intake can suggest seeing a doctor. That is safety guidance, not legal advice. The attorney then weighs the gap against the injury, the fault facts and the insurance.
        </p>

        <h2>What does prior or current counsel signal?</h2>
        <p>
          <strong>Prior or current counsel signals that the attorney needs to know the history before deciding anything</strong>. A caller with a current lawyer on the same matter is usually looking for a second opinion or a change of lawyer. The attorney will need to handle that carefully, and intake should not discuss the other lawyer&apos;s work. A caller whose earlier lawyer withdrew or declined may have a weak claim, or may have had a poor fit with that firm. Ask when, and what reason the caller was given. Record the answer plainly. Fee history matters too. Under <a href={SRC.rule15.url}>ABA Model Rule 1.5</a>, contingent fee terms must be set out in a writing signed by the client, and a change of lawyer can raise questions about how fees are shared. The attorney resolves those. Intake only records who was involved and when.
        </p>

        <h2>What about unclear fault and no source of recovery?</h2>
        <p>
          <strong>Unclear fault and no source of recovery are the two flags that most often lead to a decline after consultation</strong>. Fault first. Many states reduce a recovery when the injured person shares the fault, and some bar it. Our <Link href="/states">rules by state</Link> page shows which approach each covered state uses. Intake records the caller&apos;s account without judging it, plus the plain facts: weather, speed, phones, signs, lighting. Recovery next. A clear claim against someone with no insurance and no assets may recover nothing. Intake should capture every insurer, employer and business involved, because the source of recovery is often a company the caller has not thought about, such as a driver&apos;s employer. Neither flag should be raised with the caller. Both should be marked for the attorney.
        </p>

        <h2>Should intake decline a case on the phone?</h2>
        <p>
          <strong>Intake should not decline a personal injury case on the phone; it should finish the record and flag it for an attorney</strong>. There are three reasons. A non-lawyer saying &quot;you don&apos;t have a case&quot; is giving legal advice. Under <a href={SRC.rule53.url}>ABA Model Rule 5.3</a>, supervising lawyers must make reasonable efforts to ensure staff conduct is compatible with the lawyer&apos;s obligations, and an advice line in the script is one of those efforts. A phone decline leaves no written record of what the firm said. And the facts on a first call are incomplete. A matter that looks weak at 10pm may look different once the police report arrives. So the script should close every call the same way: the attorney will review it, and the firm will call back by a stated time. The attorney then decides and sends the answer.
        </p>

        <h2>How should a firm decline a personal injury case?</h2>
        <p>
          <strong>A firm should decline a personal injury case promptly and in writing, with a short letter that says the firm is not representing the person</strong>. The letter should also say that the firm has not evaluated the merits, that time limits may apply, and that the person should speak to another lawyer soon if they want to pursue the claim. Do not state the deadline as advice. Send it quickly, especially when the deadline is close. Keep a copy with the intake record. The record of a declined matter still matters. Under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, a lawyer who learned information from a prospective client must not use or reveal it, even when no engagement follows. Rule 1.18 can also bar the firm from acting against that person in a related matter. Store declined records where the conflicts check will find them.
        </p>

        <h2>How do you log red flags so attorneys act on them?</h2>
        <p>
          <strong>You log red flags as fixed fields on the intake record, not as notes buried in a paragraph</strong>. A checkbox or a short list for each flag in the table above lets an attorney scan a morning queue in minutes. Each flag should carry the facts behind it: the incident date for a deadline flag, the visit dates for a treatment gap, the lawyer&apos;s name for prior counsel. Then sort the queue. Records with a near deadline go to the top. Records that clear every criterion come next. Records with other flags follow, ordered by injury and incident date. Review the flags quarterly against signed and declined matters. If a flag never changes a decision, drop it. If attorneys keep asking about something the form does not capture, add it to the <Link href="/intake-playbook/what-should-be-on-a-pi-intake-form">personal injury intake form</Link>.
        </p>

        <h2>How does Della handle red flags after hours?</h2>
        <p>
          <strong>Della completes the intake on every after-hours call and marks red flags for your attorneys; she never declines a case</strong>. Red flags only help if the call is answered, and many are not: according to the <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 Legal Trends Report, only 40% of firms answered a prospective client&apos;s call. Della is Call Della&apos;s intake specialist for personal injury, criminal defense and immigration firms. She answers in your firm&apos;s name nights, weekends and holidays, takes the incident, injury, treatment, insurance and fault details, and asks about earlier lawyers and anything signed. Every call gets an urgency score, and urgent calls go to the attorney on call by email alert. Every call is filed in the dashboard with a summary, recording and transcript, and the rest arrive in the 7am morning brief. Della never tells a caller whether they have a case and tells callers she is an AI if they ask. See <Link href="/personal-injury">AI intake for personal injury law firms</Link>.
        </p>
      </Prose>

      <DemoCTA>
        See how red flags look in a Della dossier. Book a demo and we will run a live personal injury intake call while you listen.
      </DemoCTA>

      <FAQ items={FAQS} heading="PI case evaluation: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
