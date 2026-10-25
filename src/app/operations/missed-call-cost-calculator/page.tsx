import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, DemoCTA, SRC } from '@/app/intake-playbook/_ui';
import { MissedCallCalculator } from '../calculators';

const SLUG = '/operations/missed-call-cost-calculator';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'How do you calculate the cost of a missed call for a law firm?',
    a: 'Multiply missed calls per month by the share that are new-matter inquiries, then by your sign rate for answered inquiries, then by your average fee per signed matter. The result is the fees a month riding on unanswered calls, assuming missed callers would have signed at your normal rate. Multiply by 12 for a yearly figure.',
  },
  {
    q: 'Where do I find my missed-call numbers?',
    a: 'In your phone system’s call log. Most business phone and call-tracking systems export every inbound call with a time, duration and outcome. Count calls that went to voicemail, rang out or lasted under 10 seconds. Split office hours from after hours, because the two gaps usually need different fixes.',
  },
  {
    q: 'Is every missed call a lost client?',
    a: 'No. Some missed callers leave a message and get a callback, and some were never going to hire the firm. That is why the calculator asks for the share of calls that are new-matter inquiries and uses your sign rate. Clio’s 2024 study found only 20% of firms returned a missed call, so many callers never hear back.',
  },
  {
    q: 'Which fee should I enter in the calculator?',
    a: 'Enter the average fee the firm actually receives per signed matter, not the gross settlement or verdict. For contingency work, use the average fee after the case resolves. For flat-fee or hourly work, use the average billed and collected per matter. Use a trailing 12-month average to smooth out one large case.',
  },
  {
    q: 'Why does the calculator start empty?',
    a: 'Because any default would be a guess about your firm. Missed-call counts, sign rates and fees vary widely by practice area, market and marketing mix, and we have no published benchmark for them that we would stand behind. The calculator only gives a useful answer with your own figures from your own records.',
  },
  {
    q: 'How do I reduce my missed-call cost?',
    a: 'Answer more calls, especially after hours, and return the rest fast. Options include voicemail with a same-morning callback rule, a message-taking answering service, staff on rotation, and AI intake. Our after-hours intake comparison sets the options side by side. Call Della answers nights, weekends and holidays in your firm’s name.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="OPERATIONS · CALCULATOR"
      title="Missed-call cost calculator for law firms"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-22"
      breadcrumbs={[
        { name: 'Operations', href: '/operations' },
        { name: 'Missed-call cost calculator', href: SLUG },
      ]}
      citations={[SRC.clio2024, SRC.abaLpm2025, SRC.obj2025, SRC.civility2024, SRC.lmnc2019]}
      tldr={
        <>
          <p className="mb-2">
            The missed-call cost for a law firm is the fees a month riding on calls nobody answered: missed calls, times the share that are new matters, times your sign rate, times your average fee.
          </p>
          <p className="m-0">
            Most firms have a gap to measure. In Clio&apos;s 2024 secret-shopper study, only 40% of 500 US firms answered a prospective client&apos;s call. Enter your own figures below; the fields start empty.
          </p>
        </>
      }
    >
      <MissedCallCalculator />

      <Prose>
        <h2>How does the missed-call cost calculator work?</h2>
        <p>
          <strong>The missed-call cost calculator multiplies four figures from your own records to estimate the fees at risk each month</strong>. It assumes that a missed caller with a new matter would have signed at the same rate as callers you do answer. That assumption is generous to voicemail, because a caller who reaches nobody is less likely to sign than one who reaches a person. The formula is:
        </p>
        <p className="font-mono text-[14px] bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-5">
          Monthly fees at risk = missed calls per month × share that are new matters × sign rate × average fee per signed matter
          <br />
          <br />
          Yearly fees at risk = monthly fees at risk × 12
        </p>
        <p>
          The calculator does not store or send what you type. It runs in your browser. If JavaScript is off, the formula above gives the same answer with a phone calculator. Each input is explained below, with where to find it.
        </p>

        <h2>How do I find my missed-call count?</h2>
        <p>
          <strong>You find your missed-call count in your phone system&apos;s call log, not in anyone&apos;s memory</strong>. Most business phone and call-tracking systems export inbound calls with a timestamp, a duration and an outcome. Pull 30 days. Count every inbound call that went to voicemail, rang out with no answer, or lasted under 10 seconds. Short calls matter: in the ABA Law Practice Division intake benchmark summarized by{' '}
          <a href={SRC.lmnc2019.url}>Lawyers Mutual NC (2019)</a>, 11% of calls lasted less than 10 seconds, most likely callers who gave up on reaching a person. Split the count into office hours and after hours using the hours on your website. Then check how many missed numbers got a callback, and how fast. A missed call returned within the hour is a different problem from one returned on Monday. Use the after-hours count alone if you want the cost of nights and weekends.
        </p>
        <ol>
          <li>Export 30 days of inbound calls from your phone system.</li>
          <li>Remove internal calls, known vendors and obvious spam.</li>
          <li>Count voicemails, unanswered calls and calls under 10 seconds.</li>
          <li>Split the count into office hours and after hours.</li>
        </ol>

        <h2>What share of missed calls are new clients?</h2>
        <p>
          <strong>The share of missed calls that are new-matter inquiries is your own figure, taken from the voicemails and callbacks you can trace</strong>. Not every missed call is a prospective client. Existing clients call about their matters, opposing counsel and insurers call, vendors call, and some calls are spam. Listen to a sample of the voicemails from the 30 days you pulled, or check the callback notes, and count how many were people with a new legal problem. Divide that by the voicemails you sampled. If a missed caller left no message, you cannot know why they called. Apply the share from the calls you can trace, and note the assumption. Call-tracking numbers on ads can help, because a missed call to a number used only in advertising is very likely a new inquiry. Enter the result as a percentage.
        </p>

        <h2>Which sign rate should I use?</h2>
        <p>
          <strong>Use your sign rate for new-matter inquiries that someone answered: signed matters divided by answered new inquiries over the same period</strong>. Most intake or case management systems can report both numbers. If yours cannot, count the new inquiries logged last quarter and the engagements signed from them. Use a quarter or more, because a single month can swing on a few cases. Do not use a marketing agency&apos;s lead-to-case figure if it includes leads your team never spoke to. That mixes the problem you are measuring into the rate you are using. The sign rate in the calculator is applied to missed callers as if they had been answered. If anything, that overstates what voicemail recovers, because callers who reach a person are the most likely to stay. According to <a href={SRC.civility2024.url}>2Civility&apos;s summary of Clio&apos;s 2024 report</a>, shoppers who reached someone by phone were the most likely to recommend the firm.
        </p>

        <h2>Which fee figure should I use?</h2>
        <p>
          <strong>Use the average fee the firm actually receives per signed matter, over the last 12 months</strong>. For contingency work, that is the fee on resolved matters, not the gross settlement and not the case value at signing. For flat-fee or hourly work, use the average collected per matter. A 12-month figure smooths out one unusual result. If the firm handles several practice areas with very different fees, run the calculator once per practice area, with that practice&apos;s own missed calls and sign rate. A <Link href="/criminal-defense">criminal defense</Link> practice and a <Link href="/personal-injury">personal injury</Link> practice in the same firm will give very different answers, and averaging them hides where the money is. The result is fees at risk, not profit. To compare it with what coverage costs, see our{' '}
          <Link href="/operations/cost-per-signed-case-calculator">cost per signed case calculator</Link>.
        </p>

        <h2>What does a worked example look like?</h2>
        <p>
          <strong>A worked example shows how the four inputs combine; the figures here are invented for illustration and are not benchmarks</strong>. Say a firm&apos;s phone log shows 40 missed calls a month after hours. From the voicemails it can trace, half are new-matter inquiries, so 20 a month. Its sign rate for answered new inquiries is 20%, which gives four matters. Its average fee per signed matter is $5,000. The monthly fees at risk are 40 × 50% × 20% × $5,000, which is $20,000, or $240,000 a year. Change any one input and the answer moves in proportion. Halve the sign rate and the figure halves. That is why the calculator starts empty: your figures, not ours, decide the answer. Put your own numbers into the calculator at the top of this page.
        </p>

        <h2>What does the calculator leave out?</h2>
        <p>
          <strong>The calculator leaves out referrals, reputation and the callers you won back with a callback</strong>, so it is an estimate, not an audit. Some missed callers are recovered. If your firm returns missed calls fast, the true loss is lower. Many firms do not. According to the <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 figures, only 20% of firms that missed a call returned it. Referrals cut the other way. 2Civility reports that only 12% of Clio&apos;s secret shoppers were likely to recommend the firms they contacted. A caller who reaches nobody tells nobody good things. The calculator also ignores marketing cost. If the call came from a paid ad, the firm paid for the click and lost the matter. That cost is in your <Link href="/operations/cost-per-signed-case-calculator">cost per signed case</Link>.
        </p>

        <h2>How many calls do law firms miss on average?</h2>
        <p>
          <strong>Law firms miss most first calls from prospective clients, according to the published secret-shopper studies</strong>. In Clio&apos;s 2024 Legal Trends Report, as reported by{' '}
          <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (March 2025)</a>, 40% of 500 US firms answered the phone, down from 56% in 2019. The Oklahoma Bar Journal adds that 48% of firms neither answered nor returned the call. An older ABA Law Practice Division benchmark found fewer than 10% of callers reached a lawyer and 32% went straight to voicemail. These are profession-wide figures, not your firm&apos;s. That is why the calculator asks for your own phone log, not a benchmark. Our page on{' '}
          <Link href="/operations/law-firm-missed-calls-data">how many calls law firms miss</Link> sets out every figure with its source and year.
        </p>

        <h2>How do you reduce the missed-call cost?</h2>
        <p>
          <strong>You reduce the missed-call cost by answering more calls live, especially after hours, and returning the rest the same morning</strong>. The options are voicemail with a callback rule, a message-taking answering service, staff on an evening rotation, and AI intake. Each has a different cost and depth, compared in our{' '}
          <Link href="/operations/after-hours-intake-comparison">after-hours intake comparison</Link>. Call Della is the AI intake option. Della answers in your firm&apos;s name nights, weekends and holidays, takes the full intake, and files every call as a dossier with a summary, urgency score, recording and transcript. Urgent calls go to the attorney on call by email, and the rest arrive in a 7am morning brief. She tells callers she is an AI if they ask, and never gives legal advice. Rerun the calculator after any change to see what moved. More guides are on our{' '}
          <Link href="/operations">law firm intake operations</Link> hub.
        </p>
      </Prose>

      <DemoCTA>
        Hear what your missed calls would sound like answered. Book a demo and we will run a live Della intake call for your practice area.
      </DemoCTA>

      <FAQ items={FAQS} heading="Missed-call cost: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
