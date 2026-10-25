import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CompareTable, CompareCTA } from '@/components/compare/CompareTable';
import { COMPETITORS, competitorCitations, FETCHED } from '@/data/competitors';
import { pageMeta, formatDate } from '@/data/pages';
import { planByID, formatPrice } from '@/lib/plans';

const SLUG = '/compare';
export const metadata: Metadata = pageMeta(SLUG);

const solo = planByID('solo');
const asOf = formatDate(FETCHED);
const LMNC = 'https://lawyersmutualnc.com/article/how-your-telephone-is-costing-you-clients/';

const citations = [
  ...COMPETITORS.flatMap(competitorCitations),
  { name: 'How Your Telephone is Costing You Clients', url: LMNC, publisher: 'Lawyers Mutual Liability Insurance Company of North Carolina', year: '2019' },
];

const summaries: Record<string, { title: string; text: string }> = {
  'smith-ai': {
    title: 'Smith.ai alternative',
    text: 'Smith.ai offers human-first, AI-first and hybrid answering for any business, priced per call. It suits firms that want live receptionists, daytime coverage or a Clio integration.',
  },
  'answering-legal': {
    title: 'Answering Legal reviews and pricing',
    text: 'Answering Legal has live, U.S.-based receptionists who answer only for lawyers, 24/7, with direct links to Clio Grow, Lead Docket and MyCase. Prices are not published.',
  },
  posh: {
    title: 'Posh virtual receptionist',
    text: 'Posh has live receptionists in Virginia Beach and optional AI-enabled plans, priced per minute from a low entry plan. It does not record calls.',
  },
  ruby: {
    title: 'Ruby receptionist alternative',
    text: 'Ruby has live receptionists for phone and website chat, priced per minute, with a native Clio integration. Its pricing page does not publish overage or contract length.',
  },
};

const faqs = [
  {
    q: 'Who wrote these comparisons?',
    a: `Call Della wrote every comparison in this section, and Call Della is one of the options compared. To keep them fair, every competitor fact comes from the competitor's own website, is linked, and is dated ${asOf}. Where a competitor does not publish a fact, the table says "not published" rather than guessing.`,
  },
  {
    q: 'Why are there no ratings or review scores?',
    a: 'Because a company scoring its own competitors is not a neutral source. These pages leave out stars, ratings and quoted reviews. They describe what each service publishes about itself and which kind of firm each one fits, so you can read reviews elsewhere with the right questions in mind.',
  },
  {
    q: 'Is Call Della a receptionist service?',
    a: "No. Call Della is an after-hours intake specialist. Della, an AI, answers a personal injury, criminal defense or immigration firm's phone at night, on weekends and on holidays, runs the intake for that practice, and delivers a dossier by morning. Receptionist services such as Ruby and Posh answer any call for any business.",
  },
  {
    q: 'Which service is cheapest?',
    a: `It depends on your calls. As of ${asOf}, Posh had the lowest published entry price, $65 a month plus $2.30 per minute, and Smith.ai offered a free AI-first tier for 25 calls. Call Della starts at ${formatPrice(solo)} a month for ${solo.minutes} minutes. Answering Legal does not publish prices. Compare using your own call counts and lengths.`,
  },
  {
    q: 'How often are these pages updated?',
    a: 'Every comparison shows its updated date at the top. Competitor prices change, so each fact carries the date it was read. If you spot a fact that has changed on a competitor site, email hello@calldella.com and we will re-check the page and correct it.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPARE · WRITTEN BY CALL DELLA"
      title="Call Della Alternatives: Legal Answering Services Compared"
      slug={SLUG}
      author="Andy Norman"
      date={FETCHED}
      breadcrumbs={[{ name: 'Compare', href: SLUG }]}
      citations={citations}
      tldr={
        <>
          <p className="mb-2">
            Call Della alternatives are the answering services and virtual receptionists a law firm might choose instead: Smith.ai,
            Answering Legal, Posh and Ruby. As of {asOf}, their published prices ranged from $65 a month at Posh to custom quotes,
            and Answering Legal published none. Each comparison below uses only facts from the competitor&apos;s own site, dated and
            linked, on the same ten criteria.
          </p>
          <p className="m-0">Call Della wrote these comparisons and is one of the options compared.</p>
        </>
      }
    >
      <h2>Why compare legal answering services at all?</h2>
      <p>
        Law firms compare answering services because an unanswered call is often a lost client. In a survey by the ABA Law Practice
        Division, researchers posing as prospective clients called hundreds of law firms, and 32 percent of the calls went straight to
        voicemail, according to <a href={LMNC}>Lawyers Mutual of North Carolina (2019)</a>. Fewer than 10 percent of callers got to
        speak with a lawyer.
      </p>
      <p>
        The services that close that gap work in different ways. Some put a live receptionist on every call. Some use AI, some a
        mix. <strong>Call Della</strong> is an after-hours intake specialist: Della, an AI, answers personal injury, criminal defense
        and immigration calls at night, on weekends and on holidays, and turns each one into a dossier by morning. The right choice
        depends on your practice area, your hours and what you want on your desk the next day. These pages set the options side by
        side so a firm can decide on facts.
      </p>

      <h2>Which criteria does each comparison use?</h2>
      <p>
        Every comparison in this section uses the same ten criteria, so the pages can be read against each other. Each criterion is a
        question a managing partner would ask before signing.
      </p>
      <ol>
        <li><strong>Who answers:</strong> a live person, an AI, or a mix.</li>
        <li><strong>Hours covered:</strong> 24/7, business hours, or after hours only.</li>
        <li><strong>Published price:</strong> what the provider lists on its own site.</li>
        <li><strong>Minutes or calls included:</strong> the allowance in each plan, and whether it counts calls or minutes.</li>
        <li><strong>Overage:</strong> the price of each call or minute past the allowance.</li>
        <li><strong>Legal intake depth:</strong> message-taking, screening, or a full practice-specific intake.</li>
        <li><strong>Urgent-call handling:</strong> live transfer, alert, or message.</li>
        <li><strong>Integrations:</strong> which practice-management and CRM systems the service connects to.</li>
        <li><strong>Spanish:</strong> whether it is offered, at what cost, and during which hours.</li>
        <li><strong>Contract terms:</strong> month-to-month or longer, trials, and setup fees.</li>
      </ol>
      <p>
        Call Della&apos;s column always comes from its own plan configuration, the same source as the{' '}
        <a href="/pricing">Call Della pricing page</a>. Competitor facts come only from competitor sites, never from review sites.
      </p>

      <h2>How do Smith.ai, Answering Legal, Posh and Ruby compare with Call Della?</h2>
      <p>
        The summary table sets all four providers beside Call Della. On a phone, the table scrolls sideways inside its frame. Each
        competitor fact links to its source page, read on {asOf}.
      </p>
      <CompareTable competitors={COMPETITORS} caption="Call Della, Smith.ai, Answering Legal, Posh and Ruby compared." />

      <h2>Which comparison should you read?</h2>
      <p>
        Read the comparison for the provider you use now or are weighing. Each page covers pricing in detail, when the competitor is
        the better fit, when Call Della is, and how each handles an urgent call at night.
      </p>
      <ul>
        {COMPETITORS.map((c) => (
          <li key={c.slug}>
            <a href={`/compare/${c.slug}`}>{summaries[c.slug].title}</a>: {summaries[c.slug].text}
          </li>
        ))}
      </ul>

      <h2>When is a receptionist service a better fit than Call Della?</h2>
      <p>
        A receptionist service is the better fit when a firm needs daytime coverage, live humans on complex or sensitive calls, a
        practice area outside personal injury, criminal defense and immigration, or a ready-made practice-management integration.
        All four providers compared here answer 24/7 with live staff options, and Smith.ai, Answering Legal, Posh and Ruby each list
        Clio or other legal software integrations on their own sites.
      </p>
      <p>
        Call Della covers nights, weekends and holidays only. It offers a CRM webhook on the Group plan and no native Clio or MyCase
        integration. Della takes Spanish calls on immigration intake only. A family law or estate planning firm, a firm that wants one
        vendor for day and night, or a firm whose existing clients call with case questions, will usually be better served by one of
        the four services above.
      </p>

      <h2>When is Call Della the better fit?</h2>
      <p>
        Call Della is the better fit when a firm practices <a href="/personal-injury">personal injury</a>,{' '}
        <a href="/criminal-defense">criminal defense</a> or <a href="/immigration">immigration</a>, its own team covers business
        hours, and it wants every after-hours caller qualified rather than just greeted. Della runs the intake for that practice,
        scores urgency, emails an urgent-call alert to the attorney on call, and has the dossier and morning brief ready by 7am.
      </p>
      <p>
        Every Call Della plan is published, month-to-month and free of setup fees, starting at {formatPrice(solo)} a month for{' '}
        {solo.minutes} minutes. For a wider look at the choices, including voicemail and in-house night staff, see the{' '}
        <a href="/operations/after-hours-intake-comparison">after-hours intake options guide</a>, and for how a call becomes a dossier,
        see <a href="/how-it-works">how Call Della works</a>.
      </p>

      <CompareCTA line="If you practice personal injury, criminal defense or immigration, the quickest way to compare is to hear Della take a call." />

      <FAQ items={faqs} eyebrow="COMPARE" heading="Questions about these comparisons" />
    </ArticleLayout>
  );
}
