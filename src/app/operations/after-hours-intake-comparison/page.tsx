import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { PLANS, OVERAGE_PER_MINUTE, formatPrice } from '@/lib/plans';
import { Prose, Table, DemoCTA, SRC } from '@/app/intake-playbook/_ui';

const SLUG = '/operations/after-hours-intake-comparison';
export const metadata = pageMeta(SLUG);

const [solo, practice] = PLANS;

const FAQS = [
  {
    q: 'What are the after-hours intake options for a law firm?',
    a: 'There are four: voicemail with a callback rule, a message-taking answering service, in-house staff on an evening or weekend rotation, and AI intake. They differ in who answers, how much of the intake gets done on the first call, how urgent calls reach an attorney, and how the cost scales with call volume.',
  },
  {
    q: 'Is voicemail good enough for after-hours law firm calls?',
    a: 'Voicemail works only if the firm returns every message early the next business day, and many firms do not. In an ABA Law Practice Division benchmark, 32% of calls went straight to voicemail and lawyers took three or more days to reply 42% of the time. Voicemail also captures no intake, only a message.',
  },
  {
    q: 'What is the difference between an answering service and AI intake?',
    a: 'A message-taking answering service has a person take the caller’s name, number and a short message, then passes it to the firm. AI intake takes the full intake on the first call: the facts, the parties, the dates and an urgency level. Some answering services also offer fuller intake scripts, usually at a higher cost per call.',
  },
  {
    q: 'When is in-house after-hours staff the better choice?',
    a: 'In-house staff are the better choice for firms with enough night and weekend volume to keep a person busy, and for firms whose callers need a human who knows the firm’s cases. In-house staff can also book consultations and handle existing clients. The cost is fixed payroll, cover for sickness and holidays, and supervision outside office hours.',
  },
  {
    q: 'Do callers know they are speaking to AI?',
    a: 'They should be able to find out. Della introduces herself by name in the firm’s name, gives the recording disclosure set for the state, and tells any caller who asks that she is an AI. Firms using any after-hours option should decide what callers are told and make sure the option follows it every time.',
  },
  {
    q: 'Can I combine after-hours intake options?',
    a: 'Yes, and many firms do. A common pattern is AI intake or an answering service overnight, with an in-house intake specialist who works through the morning queue from 8am. Another is in-house cover on weekday evenings and outside cover after midnight and at weekends. The goal is that every call is answered and every record has an owner.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="OPERATIONS · COMPARISON"
      title="After-hours intake options for law firms, compared"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-24"
      breadcrumbs={[
        { name: 'Operations', href: '/operations' },
        { name: 'After-hours intake comparison', href: SLUG },
      ]}
      citations={[SRC.lmnc2019, SRC.civility2024, SRC.obj2025, SRC.rule53]}
      tldr={
        <>
          <p className="mb-2">
            After-hours intake is how a law firm handles calls from prospective clients when the office is closed. The four options are voicemail, a message-taking answering service, in-house staff and AI intake.
          </p>
          <p className="m-0">
            They differ most in intake depth and urgent-call handling. Voicemail is the common default: in an ABA Law Practice Division benchmark, 32% of calls to law firms went straight to voicemail. Call Della wrote this comparison and sells the AI intake option.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What are the after-hours intake options for a law firm?</h2>
        <p>
          <strong>A law firm has four after-hours intake options: voicemail, a message-taking answering service, in-house staff on rotation, and AI intake</strong>. Each answers a different question. Voicemail asks the caller to wait. A message service makes sure a person answers but passes on only a message. In-house staff give the firm full control at the highest fixed cost. AI intake takes the full intake on every call at a monthly price, but some callers would rather speak to a person. The table compares them on the points that matter most to a firm. We are the authors and we sell the AI intake option, so we have tried to state each option&apos;s strengths fairly, including where the alternatives are the better fit. Prices for other providers vary and change, so we describe their cost models rather than quote them.
        </p>
        <Table
          caption="After-hours intake options compared"
          head={['Compared on', 'Voicemail', 'Message service', 'In-house staff', 'AI intake (e.g. Call Della)']}
          rows={[
            ['Who answers', 'Nobody; a recording', 'A service agent', 'Your employee', 'An AI intake specialist'],
            ['Intake on the first call', 'None; caller leaves a message', 'Name, number, short message; fuller scripts at some services', 'Full intake; can also book consultations', 'Full intake for the caller’s practice area'],
            ['Urgent calls', 'Heard only when someone checks', 'Passed on per the service’s escalation rules', 'Handled directly or escalated', 'Urgency score; email alert to the attorney on call'],
            ['Consistency', 'Not applicable', 'Varies by agent and shift', 'Depends on training and fatigue', 'Same questions on every call'],
            ['Talks to existing clients', 'Takes messages', 'Takes messages', 'Yes, with access to files', 'Not her focus; built for new-client intake'],
            ['Caller speaks to a person', 'No', 'Yes', 'Yes', 'No; tells callers she is an AI if asked'],
            ['Cost model', 'Usually included in the phone system', 'Per minute or per call, by provider', 'Salaries, benefits, overtime', 'Monthly plan with included minutes'],
            ['Best fit', 'Very low after-hours volume', 'Firms that want a human voice, light intake', 'High volume; complex or existing-client calls', 'Firms that want full intake every night'],
          ]}
        />

        <h2>How does voicemail compare as an after-hours option?</h2>
        <p>
          <strong>Voicemail is the cheapest after-hours option and the weakest, because it captures no intake and depends entirely on the callback</strong>. In the ABA Law Practice Division intake benchmark summarized by <a href={SRC.lmnc2019.url}>Lawyers Mutual NC (2019)</a>, 32% of calls to law firms went directly to voicemail. The same benchmark found that 42% of the time, the lawyer took three or more days to reply to voicemails and online requests. Callbacks are rare in newer data too. According to the <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 figures, only 20% of firms that missed a call returned it. Voicemail also leaves a poor impression. 2Civility&apos;s summary of the Clio study notes that shoppers who reached a person were nearly eight times more likely to recommend the firm than those who only got a voicemail follow-up. Voicemail suits a firm with very few after-hours calls and a strict same-morning callback rule.
        </p>

        <h2>What does a message-taking answering service do?</h2>
        <p>
          <strong>A message-taking answering service has a person answer in the firm&apos;s name, take the caller&apos;s details and a short message, and pass it to the firm</strong>. The main strength is a human voice at any hour. Callers who are upset, confused or elderly often prefer a person, and a good agent can calm a difficult call. Services also handle existing clients and other callers the same way. The limits are depth and consistency. Agents usually cover many businesses, so the intake is often brief, and quality can vary by agent and shift. Some services offer fuller legal intake scripts, usually priced per minute or per call. Before choosing one, ask how urgent calls are escalated, what the record looks like the next morning, and whether calls are recorded. Our <Link href="/compare">comparisons</Link> set out named services against Call Della using each provider&apos;s own published facts.
        </p>

        <h2>When does in-house after-hours staff make sense?</h2>
        <p>
          <strong>In-house after-hours staff make sense when night and weekend volume is high enough to keep a person busy, or when callers need someone who knows the firm&apos;s cases</strong>. An employee can follow the firm&apos;s own script, check the case management system, book consultations directly and help existing clients. For complex matters, in-house staff are often the best option available. The costs are fixed. A rotation needs more than one person to cover sickness, holidays and turnover, plus a supervisor reachable outside office hours. Night and weekend work can be hard to staff. Supervision matters too. Under <a href={SRC.rule53.url}>ABA Model Rule 5.3</a>, lawyers with supervisory authority must make reasonable efforts to ensure nonlawyer staff act consistently with the lawyer&apos;s professional obligations, at 2am as much as at 2pm. Many firms combine in-house evening cover with an outside option after midnight.
        </p>

        <h2>What does AI intake do differently?</h2>
        <p>
          <strong>AI intake takes the full intake on every after-hours call, the same way each time, and files a structured record for the morning</strong>. Della, Call Della&apos;s intake specialist, answers in the firm&apos;s name nights, weekends and holidays. She asks the practice-area questions for <Link href="/personal-injury">personal injury</Link>, <Link href="/criminal-defense">criminal defense</Link> or <Link href="/immigration">immigration</Link> matters, captures party names and dates, and sets an urgency score. Each call becomes a dossier in the dashboard with a summary, recording and transcript. Urgent calls trigger an email alert to the attorney on call, and the rest arrive in a 7am morning brief. AI intake has limits. Some callers want a person, and Della tells callers she is an AI if they ask. She is built for new-client intake in three practice areas, not for existing clients. She takes immigration intake in English and Spanish, and personal injury and criminal defense intake in English.
        </p>

        <h2>Which after-hours option handles urgent calls best?</h2>
        <p>
          <strong>The option that handles urgent calls best is the one with a written rule for what counts as urgent and a fixed route to an attorney</strong>. Voicemail has no route: an urgent message waits until someone listens. A message service routes urgent calls by its escalation rules, which the firm should write and test. In-house staff can act directly if they know who is on call. AI intake applies the same urgency rules on every call and sends an alert. Whichever option a firm uses, it should define urgent by practice area. In criminal defense, an arrest or a person in custody. In immigration, a detention or a hearing within days. In personal injury, a deadline that is close or a serious injury. Test the route monthly with a dummy urgent call at night. Our <Link href="/intake-playbook/law-firm-client-intake-process">client intake process flow chart</Link> shows where triage sits.
        </p>

        <h2>What does each after-hours option cost?</h2>
        <p>
          <strong>Each after-hours option has a different cost model, so compare them on cost per signed case, not price alone</strong>. Voicemail is usually included in the firm&apos;s phone system. Message-taking services usually charge per minute or per call, and prices vary by provider and plan, so check the provider&apos;s current pricing page. In-house staff cost salaries, benefits, overtime and supervision. Call Della plans are {formatPrice(solo)} a month for {solo.minutes} minutes on {solo.name} and {formatPrice(practice)} a month for {practice.minutes} minutes on {practice.name}, with overage at ${OVERAGE_PER_MINUTE.toFixed(2)} a minute, month-to-month with no setup fee. See <Link href="/pricing">pricing</Link> for the Group plan. The fair comparison adds each option&apos;s cost to your acquisition cost and estimates the signed cases it adds. Our <Link href="/operations/cost-per-signed-case-calculator">cost per signed case calculator</Link> does that arithmetic.
        </p>

        <h2>How should a firm choose an after-hours intake option?</h2>
        <p>
          <strong>A firm should choose an after-hours intake option from its own call data, its practice areas and what its callers need</strong>. Start with the numbers, then test the option you pick before you rely on it. Five steps cover it:
        </p>
        <ol>
          <li>Count after-hours calls for 30 days from your phone log, and how many were new-matter inquiries.</li>
          <li>Run the <Link href="/operations/missed-call-cost-calculator">missed-call cost calculator</Link> on the after-hours count.</li>
          <li>List what counts as urgent in each of your practice areas, and who must hear about it at night.</li>
          <li>Decide how much intake you need on the first call: a message, or the full record.</li>
          <li>Trial the option with test calls at night, and check the record that arrives in the morning.</li>
        </ol>
        <p>
          Firms with mostly existing-client calls after hours, or callers who need a person, may be best served by a service or in-house cover. Firms whose after-hours calls are mostly new matters in personal injury, criminal defense or immigration are who AI intake is built for.
        </p>
      </Prose>

      <DemoCTA>
        Put AI intake to the test before you choose. Book a demo and hear Della take a live after-hours call for your practice area.
      </DemoCTA>

      <FAQ items={FAQS} heading="After-hours intake: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
