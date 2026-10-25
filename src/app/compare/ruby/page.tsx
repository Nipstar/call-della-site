import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CompareTable, CompareCTA } from '@/components/compare/CompareTable';
import { competitor, competitorCitations, FETCHED } from '@/data/competitors';
import { pageMeta, formatDate } from '@/data/pages';
import { planByID, formatPrice, OVERAGE_PER_MINUTE } from '@/lib/plans';

const SLUG = '/compare/ruby';
export const metadata: Metadata = pageMeta(SLUG);

const c = competitor('ruby');
const solo = planByID('solo');
const practice = planByID('practice');
const asOf = formatDate(FETCHED);
const overage = `$${OVERAGE_PER_MINUTE.toFixed(2)}`;
const PRICING = 'https://www.ruby.com/plans-and-pricing/';
const INTEGRATIONS = 'https://www.ruby.com/solutions/integrations/';
const LEGAL = 'https://www.ruby.com/industries/legal/';

const faqs = [
  {
    q: 'How much does Ruby Receptionists cost?',
    a: `As of ${asOf}, Ruby's virtual receptionist plans cost $250 a month for 50 minutes, $395 for 100 minutes, $720 for 200 minutes and $1,725 for 500 minutes, per ruby.com/plans-and-pricing. Larger plans are quoted by sales. The pricing page does not publish an overage rate or a contract length.`,
  },
  {
    q: 'How much does Call Della cost?',
    a: `Call Della's ${solo.name} plan is ${formatPrice(solo)} a month for ${solo.minutes} minutes, and ${practice.name} is ${formatPrice(practice)} a month for ${practice.minutes} minutes. Extra minutes cost ${overage} each. Group is custom. Every plan is month-to-month, with no setup fee, and covers nights, weekends and holidays.`,
  },
  {
    q: 'Does this page summarize Ruby receptionist reviews?',
    a: `No. Call Della does not quote, summarize or score reviews of Ruby or any other competitor, because we are one of the options compared. This page uses Ruby's own published facts to describe which firms Ruby fits and which fit Call Della. Read reviews on the platforms that host them.`,
  },
  {
    q: 'Is Ruby staffed by people or AI?',
    a: `People. Ruby's pricing page describes "100% live, personalized communication" from its receptionists, supported by AI-assisted call flows and AI transcripts. Della is an AI intake specialist. She answers in your firm's name, tells callers she is an AI if asked, and never gives legal advice.`,
  },
  {
    q: 'Does Ruby integrate with Clio?',
    a: `Yes. Ruby's integrations page lists a native Clio integration, plus 8am MyCase, Lawmatics, HubSpot and Zapier-powered connections, as of ${asOf}. Call Della has no native Clio or MyCase integration. It offers a CRM webhook on the Group plan only, so a firm that needs a Clio sync today is better served by Ruby.`,
  },
  {
    q: 'Can Ruby and Call Della both take Spanish calls?',
    a: `Ruby's pricing page lists 24/7 Spanish and bilingual call handling as available. Call Della takes Spanish calls on immigration intake only. Personal injury and criminal defense intake with Della is in English today, so a firm with many Spanish-speaking PI callers should weigh that difference.`,
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPARE · WRITTEN BY CALL DELLA"
      title="Ruby Receptionist Alternative for Law Firms"
      slug={SLUG}
      author="Andy Norman"
      date={FETCHED}
      breadcrumbs={[
        { name: 'Compare', href: '/compare' },
        { name: 'Ruby', href: SLUG },
      ]}
      citations={competitorCitations(c)}
      tldr={
        <>
          <p className="mb-2">
            A Ruby receptionist alternative is another way to cover the calls Ruby&apos;s live virtual receptionists would answer. As
            of {asOf}, Ruby charges $250 a month for 50 minutes up to $1,725 for 500 minutes, per its own pricing page. Call Della, an
            AI intake specialist for after-hours personal injury, criminal defense and immigration calls, starts at{' '}
            {formatPrice(solo)} a month for {solo.minutes} minutes.
          </p>
          <p className="m-0">Call Della wrote this comparison and is one of the two options compared.</p>
        </>
      }
    >
      <h2>What is the difference between Ruby and Call Della?</h2>
      <p>
        <strong>Ruby</strong> is a virtual receptionist service with live receptionists who answer calls and website chats for small
        businesses, law firms among them. Its <a href={PRICING}>pricing page</a> lists 24/7 live answering, including after hours,
        weekends and holidays, with scheduling, payment collection, outbound calls, lead qualification and intake. Its{' '}
        <a href={LEGAL}>legal page</a> describes screening, routing, message-taking, consultations booked on the calendar and
        bilingual receptionists.
      </p>
      <p>
        <strong>Call Della</strong> is an after-hours intake specialist for personal injury, criminal defense and immigration firms.
        Della is an AI. She answers in the firm&apos;s name on nights, weekends and holidays, runs the intake for that practice, and
        turns each call into a dossier with a summary, urgency score, recording and transcript. The core difference is that Ruby is a
        live receptionist team for many kinds of business, around the clock, while Call Della is an AI specialist for three kinds of
        case, after hours only.
      </p>

      <h2>How much does Ruby cost compared with Call Della?</h2>
      <p>
        Ruby pricing is per receptionist minute. On {asOf}, Ruby&apos;s <a href={PRICING}>plans and pricing page</a> listed four
        virtual receptionist plans: $250 a month for 50 minutes, $395 for 100 minutes, $720 for 200 minutes and $1,725 for 500
        minutes, with larger plans through sales. Ruby says there are no fees for activation, onboarding, setup or customization. The
        page did not publish an overage rate or a contract length, so ask Ruby for both in writing. Ruby also sells live chat plans
        and bundles.
      </p>
      <p>
        Call Della is also priced by the minute. {solo.name} is {formatPrice(solo)} a month for {solo.minutes} minutes and{' '}
        {practice.name} is {formatPrice(practice)} for {practice.minutes} minutes. Extra minutes cost {overage}, there is no setup
        fee, and every plan is month-to-month. The <a href="/pricing">Call Della pricing page</a> lists what every plan includes.
      </p>

      <h2>How do Ruby and Call Della compare, line by line?</h2>
      <p>
        The table below compares Ruby and Call Della on the ten criteria every Call Della comparison uses. Each Ruby fact links to
        the ruby.com page it came from, read on {asOf}. &quot;Not published&quot; means that page did not state it.
      </p>
      <CompareTable competitors={[c]} caption="Ruby and Call Della compared." />

      <h2>When is Ruby the better choice for a law firm?</h2>
      <p>
        Ruby is the better choice when a firm wants live people on its phones and website chat, during the day as well as at night,
        across any practice area. A firm whose callers are mostly existing clients, opposing counsel and court staff needs routing
        and messages more than intake, and Ruby&apos;s receptionists handle that kind of call.
      </p>
      <p>
        Ruby also has integrations Call Della does not. Its <a href={INTEGRATIONS}>integrations page</a> lists a native Clio
        integration and names 8am MyCase, Lawmatics and HubSpot, with Zapier-powered connections for others. Call Della has no native
        practice-management integration and offers a CRM webhook on the Group plan only. Ruby&apos;s live chat for law firm websites is
        another service Call Della does not offer. A family law, estate planning or business firm that wants one receptionist team
        for phone and chat should start with Ruby.
      </p>

      <h2>When is Call Della the better choice?</h2>
      <p>
        Call Della is the better choice when a personal injury, criminal defense or immigration firm wants every after-hours caller
        qualified, not just greeted, and a structured file waiting by morning. Della asks the questions that decide whether a case is
        worth a callback: incident, injuries, fault and deadlines for a <a href="/personal-injury">personal injury firm</a>; charges,
        custody, bond and court dates for a <a href="/criminal-defense">criminal defense firm</a>; detention, status and deadlines for
        an <a href="/immigration">immigration firm</a>, in English or Spanish.
      </p>
      <p>
        Each dossier carries a summary, urgency score, recording and transcript, and the firm gets a morning brief by 7am. Call Della
        publishes its overage rate and its month-to-month terms, which Ruby&apos;s pricing page does not. The trade-off is scope: Della
        does not take daytime calls, website chats or calls for other practice areas.
      </p>

      <h2>What do Ruby receptionist reviews mean for your choice?</h2>
      <p>
        Ruby receptionist reviews help most when the reviewer&apos;s business looks like yours. This page does not quote, summarize or
        score reviews of Ruby or anyone else, because Call Della is one of the options compared. It describes fit from each
        company&apos;s published facts instead.
      </p>
      <p>
        On those facts, Ruby fits a small firm that wants a live receptionist team on phones and chat, in any practice area, at any
        hour, with Clio or MyCase connected. Call Della fits a personal injury, criminal defense or immigration firm whose staff
        cover business hours and want after-hours intake done in full by an AI specialist. When you read Ruby receptionist reviews
        elsewhere, look for firms of your size and practice area, and note whether the calls were new leads or existing clients.
      </p>

      <h2>How does each service handle an urgent after-hours call?</h2>
      <p>
        Ruby&apos;s pricing page did not describe a specific urgent-call process on {asOf}. It lists personalized call handling,
        flexible call forwarding, and notifications by mobile app and email, so ask Ruby how it would route a late-night emergency for
        your firm.
      </p>
      <p>
        Call Della scores urgency during the intake and sends an urgent-call email alert to the attorney on call. Call Della&apos;s
        plans list email alerts, not live transfers. The attorney reads the dossier, then decides whether to call back that night, and
        every other call waits in the 7am brief. For an immigration firm, that means a detention call raises the alert while a routine
        status question waits for morning.
      </p>

      <h2>What should a firm check before switching from Ruby?</h2>
      <ol>
        <li>Count after-hours calls and minutes by practice area from your phone logs.</li>
        <li>Ask Ruby in writing for its overage rate and contract terms.</li>
        <li>List the integrations your intake team relies on.</li>
        <li>Book a demo and hear Della take a call for your practice area.</li>
      </ol>
      <p>
        The <a href="/compare">Call Della comparison hub</a> sets Ruby beside Smith.ai, Answering Legal and Posh on the same criteria.
      </p>

      <CompareCTA line="If your firm handles personal injury, criminal defense or immigration and wants after-hours callers qualified rather than just greeted, hear Della first." />

      <FAQ items={faqs} eyebrow="RUBY RECEPTIONIST ALTERNATIVE" heading="Questions about Ruby and Call Della" />
    </ArticleLayout>
  );
}
