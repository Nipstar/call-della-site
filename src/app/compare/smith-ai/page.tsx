import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CompareTable, CompareCTA } from '@/components/compare/CompareTable';
import { competitor, competitorCitations, FETCHED } from '@/data/competitors';
import { pageMeta, formatDate } from '@/data/pages';
import { planByID, formatPrice, OVERAGE_PER_MINUTE, INCLUDES } from '@/lib/plans';

const SLUG = '/compare/smith-ai';
export const metadata: Metadata = pageMeta(SLUG);

const c = competitor('smith-ai');
const solo = planByID('solo');
const practice = planByID('practice');
const asOf = formatDate(FETCHED);
const overage = `$${OVERAGE_PER_MINUTE.toFixed(2)}`;
const PRICING = 'https://smith.ai/pricing/receptionists';
const AI = 'https://smith.ai/pricing/ai-receptionist';
const HYBRID = 'https://smith.ai/pricing/hybrid-ai-human-receptionists';
const LEGAL = 'https://smith.ai/industries/legal-law-firms-answering-service';

const faqs = [
  {
    q: 'Is Call Della a Smith.ai alternative for every law firm?',
    a: `No. Call Della is an alternative only for personal injury, criminal defense and immigration firms that need after-hours intake. Smith.ai answers for any practice area at any hour, with humans, AI or both. A family law or estate planning firm, or a firm that wants daytime overflow, is better served by Smith.ai or a similar service.`,
  },
  {
    q: 'How much does Smith.ai cost for a law firm?',
    a: `As of ${asOf}, Smith.ai's human-first plans cost $300 a month for 30 calls, $810 for 90 calls and $2,100 for 300 calls, with overage of $8.50 to $11.50 per call, per smith.ai/pricing/receptionists. Its AI-first plans start free for 25 calls, with a $150 Pro plan.`,
  },
  {
    q: 'How much does Call Della cost?',
    a: `Call Della's ${solo.name} plan is ${formatPrice(solo)} a month for ${solo.minutes} minutes and the ${practice.name} plan is ${formatPrice(practice)} a month for ${practice.minutes} minutes. Extra minutes are ${overage} each. Plans are month-to-month with no setup fee. A Group plan with custom minutes covers firms with more than one practice area or office.`,
  },
  {
    q: 'Does Call Della integrate with Clio like Smith.ai does?',
    a: `No. Smith.ai lists a free first CRM integration and names Clio among the systems it supports. Call Della offers a CRM webhook on the Group plan only and has no native Clio, MyCase or other practice-management integration today. If a Clio sync on day one matters most, Smith.ai is the stronger fit.`,
  },
  {
    q: 'Will callers know Della is an AI?',
    a: `Yes, if they ask. Della introduces herself by name and answers in your firm's name, and she tells any caller who asks that she is an AI. She never claims to be human and never gives legal advice. Smith.ai offers live human receptionists for firms that want a person on every call.`,
  },
  {
    q: 'Do Smith.ai and Call Della both offer Spanish?',
    a: `Smith.ai sells a dedicated Spanish line as a $1.00 per call add-on, per its pricing page as of ${asOf}. Call Della offers Spanish on immigration intake only. Personal injury and criminal defense intake with Della is in English today, so a Spanish-heavy PI firm should weigh that.`,
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPARE · WRITTEN BY CALL DELLA"
      title="Smith.ai Alternative for Law Firms: Call Della Compared"
      slug={SLUG}
      author="Andy Norman"
      date={FETCHED}
      breadcrumbs={[
        { name: 'Compare', href: '/compare' },
        { name: 'Smith.ai', href: SLUG },
      ]}
      citations={competitorCitations(c)}
      tldr={
        <>
          <p className="mb-2">
            A Smith.ai alternative for law firms is another way to answer and qualify the calls Smith.ai would take. As of {asOf},
            Smith.ai&apos;s human-first plans start at $300 a month for 30 calls, per its own pricing page; Call Della&apos;s {solo.name}{' '}
            plan is {formatPrice(solo)} a month for {solo.minutes} minutes. Smith.ai covers any practice at any hour. Call Della covers
            nights, weekends and holidays for personal injury, criminal defense and immigration firms.
          </p>
          <p className="m-0">Call Della wrote this comparison and is one of the two options compared.</p>
        </>
      }
    >
      <h2>What is the difference between Smith.ai and Call Della?</h2>
      <p>
        <strong>Smith.ai</strong> is a general front-desk service: a firm picks human-first receptionists, an AI-first receptionist or
        a hybrid of the two, and Smith.ai answers 24/7 or during the hours the firm sets, according to{' '}
        <a href={PRICING}>Smith.ai&apos;s pricing page</a>. It serves many industries and lists a dedicated{' '}
        <a href={LEGAL}>legal page</a> with practice-specific intake, conflict checks, scheduling and payments.
      </p>
      <p>
        <strong>Call Della</strong> is an after-hours intake specialist for three practice areas: personal injury, criminal defense
        and immigration. Della is an AI. She answers in the firm&apos;s name at night, on weekends and on holidays, runs the intake
        questions for that practice, and turns each call into a dossier with a summary, urgency score, recording and transcript.
        The difference is scope. Smith.ai is built to be a firm&apos;s whole front desk. Call Della is built to cover the hours the
        firm&apos;s own intake team is closed, for three kinds of case.
      </p>

      <h2>How do Smith.ai and Call Della compare, line by line?</h2>
      <p>
        The table below sets Smith.ai and Call Della side by side on the ten criteria every Call Della comparison uses. Each
        Smith.ai fact links to the Smith.ai page it came from, read on {asOf}. Where Smith.ai publishes several plan types, the
        table gives the range.
      </p>
      <CompareTable competitors={[c]} caption="Smith.ai and Call Della compared." />

      <h2>How much does Smith.ai cost compared with Call Della?</h2>
      <p>
        Smith.ai prices by the call and Call Della prices by the minute. On {asOf}, Smith.ai&apos;s{' '}
        <a href={PRICING}>human-first plans</a> were $300 a month for 30 calls, $810 for 90 calls and $2,100 for 300 calls, with
        overage of $11.50, $10.50 and $8.50 per extra call. Its <a href={AI}>AI-first plans</a> start free for 25 calls, then $150 a
        month for Pro and $500 for Enterprise. <a href={HYBRID}>Hybrid presets</a> start at $2.50 per call.
      </p>
      <p>
        Call Della&apos;s {solo.name} plan is {formatPrice(solo)} a month for {solo.minutes} minutes, {practice.name} is{' '}
        {formatPrice(practice)} for {practice.minutes} minutes, and extra minutes cost {overage}. Because one bills calls and the
        other minutes, the fair comparison depends on your call length. As a worked example, if after-hours calls averaged five
        minutes, {solo.name}&apos;s {solo.minutes} minutes would cover {Math.floor((solo.minutes ?? 0) / 5)} calls. Check your own
        phone logs before you compare. Full plan details are on the <a href="/pricing">Call Della pricing page</a>.
      </p>

      <h2>When is Smith.ai the better choice for a law firm?</h2>
      <p>
        Smith.ai is the better choice when a firm wants live humans on complex or sensitive calls, daytime coverage, or a practice
        area Call Della does not serve. Its human-first plans put trained receptionists on the line around the clock, which suits
        firms whose callers are often existing clients with case questions rather than new leads.
      </p>
      <p>
        Smith.ai also publishes features Call Della does not offer. It lists a free first CRM integration and names Clio, HubSpot,
        Salesforce and Zapier. It sells a collect-call add-on that its pricing page says attorneys who work with inmates often need,
        plus payment collection and live transfers to set numbers. A family law, estate planning or business firm, a firm that
        wants one vendor for day and night, or a firm already running intake in Clio should look hard at Smith.ai before choosing
        Call Della.
      </p>

      <h2>When is Call Della the better choice?</h2>
      <p>
        Call Della is the better choice when a personal injury, criminal defense or immigration firm wants deep intake on
        after-hours calls and a structured file waiting by morning. Della runs the intake for that practice: for a{' '}
        <a href="/personal-injury">personal injury firm</a>, incident type, date, injuries, fault and the statute-of-limitations
        clock; for a <a href="/criminal-defense">criminal defense firm</a>, the charge, custody status and court dates; for an{' '}
        <a href="/immigration">immigration firm</a>, status, deadlines and detention, in English or Spanish.
      </p>
      <p>
        Each call becomes a dossier with a summary, urgency score, recording and transcript. Every plan includes{' '}
        {INCLUDES[2].charAt(0).toLowerCase() + INCLUDES[2].slice(1)} and {INCLUDES[3].charAt(0).toLowerCase() + INCLUDES[3].slice(1)}.
        Pricing is a flat monthly plan with month-to-month terms, so a firm with long, detailed intake calls is not paying per call.
      </p>

      <h2>What do Smith.ai reviews tell a law firm buyer?</h2>
      <p>
        Smith.ai reviews mostly help a buyer judge one question: will a general front-desk service handle my callers well? This
        page does not quote or score reviews of Smith.ai or anyone else. Instead, it sets out which buyer each service fits, using
        each company&apos;s own published facts.
      </p>
      <p>
        On those facts, Smith.ai fits a firm that wants live receptionists or AI on every call, across many practice areas, during
        the day and at night, with an existing CRM. Call Della fits a personal injury, criminal defense or immigration firm whose
        own team covers the day and wants after-hours callers qualified and documented. When you read Smith.ai reviews on other
        sites, check whether the reviewer&apos;s firm looks like yours: practice area, call volume, and whether the calls were new
        leads or existing clients.
      </p>

      <h2>How does each service handle an urgent call at 2am?</h2>
      <p>
        Smith.ai handles an urgent call by transferring it to a destination the firm sets, with one, two or ten free destinations
        depending on the plan and $15 a month for each extra, per its pricing page on {asOf}. That suits a firm with an attorney
        willing to take live calls overnight.
      </p>
      <p>
        Call Della handles an urgent call by scoring its urgency during intake and sending an urgent-call email alert to the
        attorney on call. Call Della&apos;s plans list email alerts, not live transfers. The attorney reads the dossier and decides
        whether to call back that night. Everything else waits in the 7am morning brief. Neither model is better for every firm. A
        firm that wants a person patched through at 2am needs transfers. A firm that wants the facts first, then a decision, may
        prefer the alert.
      </p>

      <h2>What should a firm check before switching from Smith.ai?</h2>
      <ol>
        <li>Pull three months of call logs and count after-hours calls and their average length.</li>
        <li>Split those calls by practice area. Only personal injury, criminal defense and immigration calls fit Call Della.</li>
        <li>List the integrations you rely on today. Call Della offers a CRM webhook on Group only.</li>
        <li>Decide who covers daytime calls. Call Della covers nights, weekends and holidays.</li>
        <li>Book a demo and hear a live Della call for your practice area before you change anything.</li>
      </ol>
      <p>
        For a wider view, the <a href="/compare">Call Della comparison hub</a> sets Smith.ai beside Answering Legal, Posh and Ruby,
        and the <a href="/operations/after-hours-intake-comparison">after-hours intake options guide</a> covers voicemail and in-house
        staff too.
      </p>

      <CompareCTA line="If your firm handles personal injury, criminal defense or immigration and loses callers after hours, hear Della take a call before you decide." />

      <FAQ items={faqs} eyebrow="SMITH.AI ALTERNATIVE" heading="Questions about Smith.ai and Call Della" />
    </ArticleLayout>
  );
}
