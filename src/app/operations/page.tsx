import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '@/app/intake-playbook/_ui';

const SLUG = '/operations';
export const metadata = pageMeta(SLUG);

const POSTS = [
  { href: '/operations/law-firm-missed-calls-data', title: 'How many calls do law firms miss?', blurb: 'The published, sourced figures on missed calls, callbacks and voicemail, in one table with study years.' },
  { href: '/operations/missed-call-cost-calculator', title: 'Missed-call cost calculator for law firms', blurb: 'Enter your own missed calls, sign rate and average fee to see the fees at risk each month.' },
  { href: '/operations/cost-per-signed-case-calculator', title: 'Cost per signed case calculator', blurb: 'Marketing, intake payroll, software and after-hours cover in; true acquisition cost per signed case out.' },
  { href: '/operations/after-hours-intake-comparison', title: 'After-hours intake options compared', blurb: 'Voicemail, a message service, in-house staff and AI intake, side by side on depth, urgency and cost model.' },
];

const FAQS = [
  {
    q: 'What is law firm intake operations?',
    a: 'Law firm intake operations is the running of the intake function as a business process: phone coverage by hour, staffing, the tools and records, the response-time standards, and the numbers that show whether intake turns marketing spend into signed matters. It sits alongside the intake process, forms and scripts covered in our client intake playbook.',
  },
  {
    q: 'What metrics should a law firm track for intake?',
    a: 'Track answer rate, callback time for missed calls, sign rate for answered new inquiries, and cost per signed case. Split answer rate by office hours and after hours, and run each metric by practice area. All four come from the phone log, the intake records and the accounts, so no new software is needed to start.',
  },
  {
    q: 'How many calls do law firms miss?',
    a: "In the secret-shopper study in Clio's 2024 Legal Trends Report, only 40% of 500 US firms answered a prospective client's call, down from 56% in 2019. 48% neither answered nor returned the call. An older ABA Law Practice Division benchmark found fewer than 10% of callers reached a lawyer and 32% went straight to voicemail.",
  },
  {
    q: 'What is speed to lead for a law firm?',
    a: 'Speed to lead is the time from a prospective client’s first contact to a real response from the firm. For a phone call, the best speed to lead is answering live. For a missed call or web form, it is the callback time. Track the median by hour of day, because nights and weekends often behave differently.',
  },
  {
    q: 'Who should own intake operations at a law firm?',
    a: 'An intake manager or operations lead should own intake operations, with a managing partner reviewing the numbers monthly. The owner sets coverage, writes the procedures, runs the reporting and fixes handoffs. Attorneys stay responsible for supervising the people and services that take intake on the firm’s behalf, during and after office hours.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="OPERATIONS"
      title="Law firm intake operations"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-20"
      breadcrumbs={[{ name: 'Operations', href: SLUG }]}
      citations={[SRC.clio2024, SRC.abaLpm2025, SRC.obj2025, SRC.lmnc2019, SRC.rule53]}
      tldr={
        <>
          <p className="mb-2">
            Law firm intake operations is how a firm runs intake as a business process: who answers at each hour, how fast missed calls are returned, and what each signed case costs.
          </p>
          <p className="m-0">
            The headline problem is coverage. In Clio&apos;s 2024 secret-shopper study, only 40% of 500 US firms answered a prospective client&apos;s call. These guides give the sourced data, two calculators and a comparison of after-hours options.
          </p>
        </>
      }
    >
      <nav aria-label="Intake operations guides" className="mb-12">
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
        <h2>What is law firm intake operations?</h2>
        <p>
          <strong>Law firm intake operations</strong> is the management side of intake: coverage, staffing, tools, response standards and reporting. The <Link href="/intake-playbook">client intake playbook</Link> covers what intake does on each call: the process, the forms, the scripts and case evaluation. Operations covers whether those calls are answered at all, how fast missed ones are returned, and what the whole function costs per signed matter. Intake operations matters most to managing partners and operations leads, because it is where marketing spend either becomes signed matters or leaks away. The guides in this section start with the published data on missed calls, then give two calculators that turn your own phone log and accounts into dollar figures. The last guide compares the four ways to cover nights and weekends.
        </p>

        <h2>Which numbers should intake operations track?</h2>
        <p>
          <strong>Intake operations should track four numbers each month: answer rate, callback time, sign rate and cost per signed case</strong>. Each comes from a record the firm already keeps, so a firm can start this month without new software. Split answer rate and callback time by office hours and after hours, because the fixes are different. Run every number by practice area, because a blended figure hides where the problem is. The table gives each metric, how to calculate it and where the data lives. Review the figures with the managing partner monthly, and look at the trend over three months rather than any single month. A rising cost per signed case with flat marketing spend nearly always points back to one of the first three numbers.
        </p>
        <Table
          caption="Core intake operations metrics"
          head={['Metric', 'How to calculate it', 'Where the data is']}
          rows={[
            ['Answer rate', 'Calls answered by a person or intake specialist ÷ inbound calls', 'Phone system call log'],
            ['Callback time', 'Median hours from a missed call to a return call', 'Call log and callback notes'],
            ['Sign rate', 'Signed matters ÷ answered new-matter inquiries', 'Intake records and engagements'],
            ['Cost per signed case', 'Marketing + intake costs ÷ signed matters', 'Accounts and payroll'],
          ]}
        />

        <h2>How many calls do law firms miss?</h2>
        <p>
          <strong>Law firms miss most first calls from prospective clients, according to the published studies</strong>. The secret-shopper study in Clio&apos;s 2024 Legal Trends Report, as reported by <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (March 2025)</a>, found that only 40% of firms answered phone calls, down from 56% in 2019. The <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a> reports that only 20% of firms that missed the call returned it, so 48% were unreachable by phone. An older ABA Law Practice Division benchmark, summarized by <a href={SRC.lmnc2019.url}>Lawyers Mutual NC (2019)</a>, found fewer than 10% of callers reached a lawyer and 32% of calls went straight to voicemail. Our page on <Link href="/operations/law-firm-missed-calls-data">how many calls law firms miss</Link> sets out each figure with its study, year and source, and explains the limits of the data.
        </p>

        <h2>What does a missed call cost a law firm?</h2>
        <p>
          <strong>A missed call costs a law firm the fee it would have earned if that caller had signed, multiplied across every missed new-matter call</strong>. The figure depends entirely on the firm. A personal injury practice with high average fees and a criminal defense practice with flat fees will get very different answers from the same number of missed calls. That is why we do not publish an average. Our <Link href="/operations/missed-call-cost-calculator">missed-call cost calculator</Link> asks for four figures from your own records: missed calls a month, the share that are new matters, your sign rate and your average fee. The fields start empty, and the formula is written out on the page, so you can check the arithmetic. The result is fees at risk, an upper estimate that ignores missed callers the firm wins back with a fast callback.
        </p>

        <h2>What does each signed case cost to acquire?</h2>
        <p>
          <strong>Each signed case costs the firm&apos;s total acquisition spend divided by the matters signed in the same period</strong>. Total acquisition spend includes marketing, intake payroll, intake software and phones, and after-hours coverage. Many firms track cost per lead instead. Cost per lead only measures marketing, and it hides what intake does to the result. Two firms paying the same price per lead can have very different costs per signed case if one answers its phone and the other does not. Our <Link href="/operations/cost-per-signed-case-calculator">cost per signed case calculator</Link> works out the figure from your own monthly costs and signed matters. Run it by practice area, and run it again after any change to coverage or staffing, to see what moved. It is the one number that shows whether intake and marketing together pay for themselves.
        </p>

        <h2>How should a law firm cover after-hours calls?</h2>
        <p>
          <strong>A law firm can cover after-hours calls with voicemail, a message-taking answering service, in-house staff on rotation, or AI intake</strong>. Each has a different depth of intake, route for urgent calls and cost model. Voicemail is cheapest and captures nothing. A message service gives callers a human voice but usually a short message. In-house staff give full control at the highest fixed cost. AI intake takes the full intake every time but cannot offer a person. Whichever option a firm chooses, the lawyers stay responsible for it. Under <a href={SRC.rule53.url}>ABA Model Rule 5.3</a>, lawyers with supervisory authority must make reasonable efforts to ensure nonlawyer assistance is compatible with their professional obligations. Our <Link href="/operations/after-hours-intake-comparison">after-hours intake comparison</Link> sets the four options out in one table, including where each is the better fit.
        </p>

        <h2>Where does Call Della fit in intake operations?</h2>
        <p>
          <strong>Call Della is the AI intake option for nights, weekends and holidays</strong>. Della, Call Della&apos;s intake specialist, answers in your firm&apos;s name for <Link href="/personal-injury">personal injury</Link>, <Link href="/criminal-defense">criminal defense</Link> and <Link href="/immigration">immigration</Link> firms. She takes the full intake, sets an urgency score, and files every call in the dashboard as a dossier with a summary, recording and transcript. Urgent calls go to the attorney on call by email alert, and everything else arrives in a 7am morning brief. For intake operations, that changes two of the four numbers directly: after-hours answer rate, and callback time, because the morning team starts from a complete record. Della tells callers she is an AI if they ask and never gives legal advice. Plans are month-to-month; see <Link href="/pricing">pricing</Link>.
        </p>
      </Prose>

      <DemoCTA>
        See what a fully answered night looks like in your numbers. Book a demo and hear a live Della intake call for your practice area.
      </DemoCTA>

      <FAQ items={FAQS} heading="Intake operations: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
