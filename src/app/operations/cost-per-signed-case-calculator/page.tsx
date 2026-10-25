import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { PLANS, OVERAGE_PER_MINUTE, formatPrice } from '@/lib/plans';
import { Prose, Table, DemoCTA, SRC } from '@/app/intake-playbook/_ui';
import { CostPerSignedCaseCalculator } from '../calculators';

const SLUG = '/operations/cost-per-signed-case-calculator';
export const metadata = pageMeta(SLUG);

const [solo, practice] = PLANS;

const FAQS = [
  {
    q: 'What is cost per signed case?',
    a: 'Cost per signed case is the total a firm spends to acquire new matters in a period, divided by the number of matters it signed in that period. Total acquisition cost includes marketing, intake payroll, intake software and phones, and after-hours coverage. It is the figure that shows whether marketing and intake together are paying for themselves.',
  },
  {
    q: 'How is cost per signed case different from cost per lead?',
    a: 'Cost per lead divides marketing spend by the inquiries it produced. Cost per signed case divides all acquisition costs, including intake, by the matters actually signed. A firm can have a low cost per lead and a high cost per signed case if intake misses calls or signs few of the leads it gets.',
  },
  {
    q: 'What is a good cost per signed case for a personal injury firm?',
    a: 'There is no reliable public benchmark we would stand behind, and figures vary widely by market, case type and marketing mix. The useful comparison is internal: cost per signed case against your average fee per signed matter, tracked month by month. If the gap narrows, either acquisition costs rose or intake signed fewer of the inquiries.',
  },
  {
    q: 'Should intake payroll count toward cost per signed case?',
    a: 'Yes. Intake staff exist to turn inquiries into signed matters, so their cost belongs in acquisition cost alongside marketing. Leaving payroll out makes marketing look more efficient than it is and hides the cost of intake changes. Include the intake manager, intake specialists, benefits, and any overtime spent covering evenings and weekends.',
  },
  {
    q: 'How often should a firm calculate cost per signed case?',
    a: 'Monthly, with a rolling three-month figure next to it. A single month can swing on a few signed cases or a large marketing invoice. The rolling figure shows the trend. Calculate it separately for each practice area if their marketing and fees differ, because one blended number hides where the money goes.',
  },
  {
    q: 'Does after-hours intake lower cost per signed case?',
    a: 'It can, if it signs more of the inquiries you already pay for at a lower cost than the matters it adds. After-hours coverage adds a monthly cost and, when it works, adds signed matters from calls that would have gone to voicemail. Enter both changes into the calculator to see the net effect for your firm.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="OPERATIONS · CALCULATOR"
      title="Cost per signed case calculator for personal injury firms"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-20"
      breadcrumbs={[
        { name: 'Operations', href: '/operations' },
        { name: 'Cost per signed case', href: SLUG },
      ]}
      citations={[SRC.clio2024, SRC.obj2025, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            Cost per signed case is total acquisition cost divided by signed cases: marketing, intake payroll, intake software and after-hours coverage, over the matters signed in the same month.
          </p>
          <p className="m-0">
            Intake decides the bottom of that fraction. In Clio&apos;s 2024 secret-shopper study, only 40% of 500 US firms answered a prospective client&apos;s call. Enter your own figures below; every field starts empty.
          </p>
        </>
      }
    >
      <CostPerSignedCaseCalculator />

      <Prose>
        <h2>What is cost per signed case?</h2>
        <p>
          <strong>Cost per signed case</strong> is what a firm spends to acquire new matters in a month, divided by the matters it signed that month. It is the one acquisition figure that includes both marketing and intake, so it shows whether the two together pay for themselves. The formula is:
        </p>
        <p className="font-mono text-[14px] bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-5">
          Total acquisition cost = marketing spend + intake payroll + intake software and phones + after-hours coverage
          <br />
          <br />
          Cost per signed case = total acquisition cost ÷ signed cases
        </p>
        <p>
          The calculator above runs in your browser and does not store what you type. With JavaScript off, the formula gives the same result. Use one month of costs and the cases signed in that same month. For a steadier figure, use three months of each. Personal injury firms feel this number most, because their marketing spend is usually the largest line, but the method works for any practice area.
        </p>

        <h2>How is cost per signed case different from personal injury lead cost?</h2>
        <p>
          <strong>Personal injury lead cost measures what marketing pays per inquiry; cost per signed case measures what the whole firm pays per new matter</strong>. Lead cost divides marketing spend by the leads it produced. It ignores everything that happens after the phone rings. Two firms buying leads at the same price can end up with very different costs per signed case. The difference is intake: how many calls are answered, how fast the rest are returned, and how many answered callers sign. A lead that rings out at 9pm costs the same as one that signs. That is why agencies tend to report cost per lead and firms should track cost per signed case. If your lead cost is steady but your cost per signed case is rising, look at intake first. Our page on{' '}
          <Link href="/operations/law-firm-missed-calls-data">how many calls law firms miss</Link> shows how common that leak is.
        </p>

        <h2>What costs go into total acquisition cost?</h2>
        <p>
          <strong>Total acquisition cost includes every monthly cost that exists to bring in and sign new matters</strong>: marketing, intake staff, intake tools and after-hours coverage. Leave out the cost of working cases once signed. The test for any line is simple. Would this cost disappear if the firm stopped taking new matters? If yes, include it. The table lists the four lines the calculator asks for and where to find each. Use actual invoices and payroll, not budgets. Include benefits and payroll taxes for intake staff, and any overtime paid for evening or weekend cover. If a person splits time between intake and casework, include the intake share only. Be consistent month to month, so changes in the result come from the business, not from the bookkeeping.
        </p>
        <Table
          caption="What to include in total acquisition cost"
          head={['Cost line', 'Include', 'Where to find it']}
          rows={[
            ['Marketing', 'Paid search, SEO, TV, radio, billboards, lead vendors, referral marketing', 'Agency and media invoices'],
            ['Intake payroll', 'Intake manager and specialists, benefits, payroll taxes, overtime', 'Payroll reports'],
            ['Intake software and phones', 'Intake CRM, phone system, call tracking, e-signature', 'Software invoices'],
            ['After-hours coverage', 'Answering service, AI intake, on-call pay', 'Service invoices and payroll'],
          ]}
        />

        <h2>How do I count signed cases?</h2>
        <p>
          <strong>Count signed cases as new engagements signed in the same period as the costs, for the same practice area</strong>. A signed case is one with a signed engagement or fee agreement, not a consultation booked and not a verbal yes. For contingency work that usually means a signed contingent fee agreement. Exclude matters signed from existing clients unless your marketing brought them back. Exclude matters that were signed and then withdrawn in the same month. If the firm runs more than one practice area, count each one separately and run the calculator once per area, with that area&apos;s marketing and intake costs. A blended figure across{' '}
          <Link href="/personal-injury">personal injury</Link> and <Link href="/criminal-defense">criminal defense</Link>, for example, hides which practice is expensive to feed. Keep the definition fixed, so this month&apos;s figure can be compared with last quarter&apos;s.
        </p>

        <h2>What does a worked example look like?</h2>
        <p>
          <strong>A worked example shows how the inputs combine; the figures here are invented for illustration and are not benchmarks</strong>. Say a firm spends $40,000 a month on marketing. Intake payroll is $15,000, intake software and phones are $2,000, and after-hours coverage is $1,000. Total acquisition cost is $58,000. If the firm signs 20 cases that month, its cost per signed case is $58,000 ÷ 20, which is $2,900. Now say the firm adds after-hours coverage that costs another $1,000 a month and signs three more cases from calls that used to go to voicemail. Total cost becomes $59,000 over 23 cases, about $2,565 per signed case. The calculator lets you test that kind of change with your own figures. Change one input at a time and watch which one moves the result most.
        </p>

        <h2>What is a good cost per signed case?</h2>
        <p>
          <strong>A good cost per signed case is one that stays well below your average fee per signed matter and falls or holds steady over time</strong>. We do not publish a benchmark figure. Costs vary widely by market, case type and marketing channel, and we have not found a public source with a named sample and method that we would stand behind. The useful comparison is internal. Put cost per signed case next to your average fee per signed matter for the same practice area. The gap between them is what acquisition leaves for everything else. Track both monthly, with a rolling three-month figure. If cost per signed case rises while marketing spend is flat, the cause is usually intake: fewer calls answered, slower callbacks, or a lower sign rate. Our{' '}
          <Link href="/operations/missed-call-cost-calculator">missed-call cost calculator</Link> estimates that leak.
        </p>

        <h2>How does intake change cost per signed case?</h2>
        <p>
          <strong>Intake changes cost per signed case by deciding how many of the inquiries you paid for become signed matters</strong>. Marketing sets the cost. Intake sets the count. Missed calls are the most common leak. According to the <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 Legal Trends Report, the share of firms answering a prospective client&apos;s call fell from 56% in 2019 to 40% in 2024, and only 20% of firms that missed a call returned it. Every unanswered inquiry still carries its marketing cost. Slow callbacks, a script that gives callers no clear next step, and records that sit unread overnight have the same effect. Improving any of them raises signed cases with no extra marketing spend, which lowers cost per signed case directly. Our <Link href="/intake-playbook">law firm client intake playbook</Link> covers the process, forms and scripts.
        </p>

        <h2>Where does after-hours coverage fit in the calculation?</h2>
        <p>
          <strong>After-hours coverage is one line of acquisition cost, and it pays for itself only if it adds enough signed cases</strong>. The options are voicemail, a message-taking answering service, staff on rotation, and AI intake, compared in our{' '}
          <Link href="/operations/after-hours-intake-comparison">after-hours intake comparison</Link>. Call Della is the AI intake option. Plans start at {formatPrice(solo)} a month for {solo.minutes} minutes on {solo.name}, and {formatPrice(practice)} a month for {practice.minutes} minutes on {practice.name}, with overage at ${OVERAGE_PER_MINUTE.toFixed(2)} a minute and no setup fee. Della answers in your firm&apos;s name nights, weekends and holidays, takes the full intake, and files every call as a dossier. She tells callers she is an AI if they ask and never gives legal advice. Enter the plan cost in the after-hours field, and your expected extra signed cases, to see the net effect. Full details are on our <Link href="/pricing">pricing</Link> page.
        </p>
      </Prose>

      <DemoCTA>
        Test the after-hours line before you change it. Book a demo and hear a live Della intake call for your practice area.
      </DemoCTA>

      <FAQ items={FAQS} heading="Cost per signed case: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
