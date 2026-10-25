import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '@/app/intake-playbook/_ui';

const SLUG = '/operations/law-firm-missed-calls-data';
export const metadata = pageMeta(SLUG);

const A = ({ s, children }: { s: { url: string }; children: React.ReactNode }) => <a href={s.url}>{children}</a>;

const FAQS = [
  {
    q: 'What percentage of law firms answer the phone?',
    a: "In the secret-shopper test inside Clio's 2024 Legal Trends Report, 40% of 500 US law firms answered a call from a prospective client. In Clio's 2019 test the figure was 56%. That means six in ten firms in the 2024 sample let a new-client call go unanswered on the first try.",
  },
  {
    q: 'How many law firms call back after a missed call?',
    a: "Few. The Oklahoma Bar Journal, reporting Clio's 2024 figures, says only 20% of the firms that missed the call returned it. Because so few called back, 48% of firms in the study neither answered nor returned the call, which left them unreachable by phone for that prospective client.",
  },
  {
    q: 'How often does a caller reach a lawyer on the first call?',
    a: 'Rarely. An ABA Law Practice Division intake benchmark, summarized by Lawyers Mutual NC in 2019, found that fewer than 10% of callers spoke to a lawyer. One in three callers never spoke to a human at all, and 32% of calls went straight to voicemail.',
  },
  {
    q: 'What is speed to lead for a law firm?',
    a: 'Speed to lead is the time between a prospective client first contacting a firm and a person from the firm responding. The ABA Law Practice Division benchmark found that 42% of the time, the lawyer took three or more days to reply to voicemails and online requests. Most firms track it in hours, not days.',
  },
  {
    q: 'Are these missed-call figures for personal injury firms only?',
    a: "No. Clio's 2024 study contacted 500 US firms across practice areas, with questions specific to each firm's practice. The ABA Law Practice Division benchmark focused mainly on smaller, consumer-facing practices. Neither study reports a separate figure for personal injury, criminal defense or immigration firms, so treat them as profession-wide benchmarks.",
  },
  {
    q: 'Can I quote these figures?',
    a: "Yes. Quote the original study and year, and link the publication that reported it: Clio's 2024 Legal Trends Report for the 40%, 56% and 48% figures, and the ABA Law Practice Division benchmark for the under-10% and 32% figures. This page links each source so you can check the wording before you publish.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="OPERATIONS · DATA"
      title="How many calls do law firms miss?"
      slug={SLUG}
      author="Andy Norman"
      date="2026-10-25"
      breadcrumbs={[
        { name: 'Operations', href: '/operations' },
        { name: 'Missed-calls data', href: SLUG },
      ]}
      citations={[SRC.clio2024, SRC.abaLpm2025, SRC.obj2025, SRC.civility2024, SRC.lmnc2019]}
      tldr={
        <>
          <p className="mb-2">
            Law firms miss most first calls from prospective clients. In the secret-shopper study in Clio&apos;s 2024 Legal Trends Report, only 40% of 500 US firms answered the phone, down from 56% in 2019.
          </p>
          <p className="m-0">
            48% of those firms neither answered nor returned the call. An earlier ABA Law Practice Division benchmark found fewer than 10% of callers ever reached a lawyer, and 32% of calls went straight to voicemail.
          </p>
        </>
      }
    >
      <Prose>
        <p>
          This page collects the published, sourced figures on how often law firms miss calls from people who want to hire them. Every number below names its study, its year and the publication that reported it, so you can check the wording yourself. We will add Call Della&apos;s own aggregated data once there is enough of it to publish.
        </p>

        <h2>How many calls do law firms miss?</h2>
        <p>
          <strong>Law firms miss roughly six in ten first calls from new prospective clients</strong>, according to the secret-shopper study in{' '}
          <A s={SRC.clio2024}>Clio&apos;s 2024 Legal Trends Report</A>. A third-party research firm contacted 500 US law firms, and only 40% answered the phone. In Clio&apos;s 2019 test, 56% answered, so the answer rate fell by 16 points in five years. The{' '}
          <A s={SRC.abaLpm2025}>ABA&apos;s Law Practice Magazine (March 2025)</A> reported the same two figures and noted that 60% of firms failed to answer. Missed first calls are only half the picture, because some firms call back. According to the{' '}
          <A s={SRC.obj2025}>Oklahoma Bar Journal (September 2025)</A>, only 20% of the firms that missed a call returned it, and 48% of firms were unreachable by phone: they neither answered nor returned the message. The table below sets out each figure with its source.
        </p>

        <Table
          caption="Published figures on law firm call handling"
          head={['Figure', 'What it measures', 'Study', 'Study year', 'Reported by']}
          rows={[
            ['40%', 'Firms that answered a prospective client’s call (500 US firms)', 'Clio Legal Trends Report secret shopper', '2024', <A key="a" s={SRC.abaLpm2025}>ABA Law Practice Magazine, 2025</A>],
            ['56%', 'Firms that answered in the same test five years earlier', 'Clio Legal Trends Report secret shopper', '2019', <A key="a" s={SRC.abaLpm2025}>ABA Law Practice Magazine, 2025</A>],
            ['48%', 'Firms that neither answered nor returned the call', 'Clio Legal Trends Report secret shopper', '2024', <A key="a" s={SRC.obj2025}>Oklahoma Bar Journal, 2025</A>],
            ['20%', 'Firms that missed the call and then returned it', 'Clio Legal Trends Report secret shopper', '2024', <A key="a" s={SRC.obj2025}>Oklahoma Bar Journal, 2025</A>],
            ['33%', 'Firms that responded to an emailed inquiry (40% in 2019)', 'Clio Legal Trends Report secret shopper', '2024', <A key="a" s={SRC.civility2024}>2Civility, 2024</A>],
            ['12%', 'Secret shoppers likely to recommend the firm they contacted', 'Clio Legal Trends Report secret shopper', '2024', <A key="a" s={SRC.civility2024}>2Civility, 2024</A>],
            ['Under 10%', 'Callers who got to speak with a lawyer', 'ABA Law Practice Division intake benchmark', '2016', <A key="a" s={SRC.lmnc2019}>Lawyers Mutual NC, 2019</A>],
            ['32%', 'Calls that went directly to voicemail', 'ABA Law Practice Division intake benchmark', '2016', <A key="a" s={SRC.lmnc2019}>Lawyers Mutual NC, 2019</A>],
            ['1 in 3', 'Callers who never spoke to a human being', 'ABA Law Practice Division intake benchmark', '2016', <A key="a" s={SRC.lmnc2019}>Lawyers Mutual NC, 2019</A>],
            ['42%', 'Cases where the lawyer took three or more days to reply to voicemails and online requests', 'ABA Law Practice Division intake benchmark', '2016', <A key="a" s={SRC.lmnc2019}>Lawyers Mutual NC, 2019</A>],
          ]}
        />
        <p>
          The ABA Law Practice Division benchmark was published in Law Technology Today in February 2016 and summarized by Lawyers Mutual NC in September 2019. Clio&apos;s report page is gated, so the Clio figures here are quoted as the ABA, the Oklahoma Bar Journal and 2Civility reported them.
        </p>

        <h2>What did Clio&apos;s 2024 secret-shopper study test?</h2>
        <p>
          <strong>Clio&apos;s 2024 secret-shopper study tested how easily a prospective client could reach a law firm and get answers</strong>. According to{' '}
          <A s={SRC.civility2024}>2Civility&apos;s summary (2024)</A>, a third-party research company contacted 500 US law firms with a short list of questions a potential client might ask before hiring a lawyer. The questions were specific to each firm&apos;s practice areas. They covered fees, procedures, past experience and how to book a consultation. The researchers contacted firms by phone and by email, and the 2024 edition also evaluated website chatbots and online intake forms. Clio ran the same kind of test in 2019, which is why the report can compare the two years. On every channel 2Civility lists, firms did worse in 2024: 40% answered the phone against 56% before, and 33% replied to email against 40% before. The study measured responsiveness to new business, not service to existing clients.
        </p>

        <h2>How many law firms call back after a missed call?</h2>
        <p>
          <strong>Only one in five law firms that missed a prospective client&apos;s call returned it</strong>, according to the{' '}
          <A s={SRC.obj2025}>Oklahoma Bar Journal&apos;s September 2025 Law Practice Tips column</A>, which reported Clio&apos;s 2024 figures. That callback rate explains the gap between the 60% of firms that missed the first call and the 48% that stayed unreachable. A missed call is recoverable when somebody calls back quickly, and most firms in the study did not. The same column reports that 64% of prospective clients received no follow-up at all, by phone or email. The cost shows up in referrals as well as in lost matters. According to 2Civility, only 12% of secret shoppers said they were likely to recommend the firms they contacted. Shoppers who reached a person on the phone were the most likely to recommend the firm, at more than three times the average across all channels.
        </p>

        <h2>How often does a caller reach a lawyer on the first call?</h2>
        <p>
          <strong>Fewer than 10% of callers reach a lawyer on the first call</strong>, according to an ABA Law Practice Division intake benchmark summarized by{' '}
          <A s={SRC.lmnc2019}>Lawyers Mutual NC (2019)</A>. Researchers posing as prospective clients called hundreds of law firms, mostly smaller consumer-facing practices, during and after business hours. A receptionist, lawyer or other person took the call 65% of the time. 32% of calls went directly to voicemail, and in 3% nobody answered. One in three callers never spoke to a human being. Some firms told the researchers this was deliberate: lawyers would get back to callers whose cases looked important. That approach depends on a fast callback, and the same benchmark found that 42% of the time the lawyer took three or more days to reply to voicemails and online requests. A prospective client with an urgent problem rarely waits that long.
        </p>

        <h2>What is speed to lead for a law firm?</h2>
        <p>
          <strong>Speed to lead</strong> is the time between a prospective client&apos;s first contact and a real response from someone at the firm. For a phone inquiry, the fastest speed to lead is answering the call. The published data suggests most firms are slow. The ABA Law Practice Division benchmark found three-day reply times 42% of the time, and Clio&apos;s 2024 study found that only 20% of firms returned a missed call at all. Neither study reports how quickly callers move on to another firm, so we do not quote a figure for that. What the studies do show is that a caller who reaches a person is far more likely to recommend the firm. Speed to lead matters most outside office hours. A call at 11pm on a Friday may wait until Monday morning, which is more than two days, unless someone answers it.
        </p>

        <h2>How should a law firm measure its own missed-call rate?</h2>
        <p>
          <strong>A law firm measures its missed-call rate from its phone system&apos;s call log, not from memory</strong>. Most business phone systems can export every inbound call with a timestamp and outcome. Four steps give a usable number in an afternoon:
        </p>
        <ol>
          <li>Export 30 days of inbound calls, with the time, the duration and whether a person answered.</li>
          <li>Split the calls into office hours and after hours, using the hours on your website.</li>
          <li>Count calls that went to voicemail, rang out or lasted under 10 seconds. That is your missed-call count for each period.</li>
          <li>For each missed number, check whether anyone called back, and how many hours it took.</li>
        </ol>
        <p>
          The result gives two figures: the share of calls missed and the median callback time. Run the{' '}
          <Link href="/operations/missed-call-cost-calculator">missed-call cost calculator</Link> with your own counts to put a fee value on the gap.
        </p>

        <h2>What are the limits of this data?</h2>
        <p>
          <strong>The missed-call studies are benchmarks, not measurements of any single firm</strong>. Clio&apos;s 2024 secret-shopper sample was 500 US firms. The ABA Law Practice Division benchmark covered hundreds of firms, mainly smaller consumer-facing practices, and is now ten years old. The two studies used different methods, so their figures should not be combined or compared directly. Neither study reports figures for personal injury, criminal defense or immigration firms separately. Neither one splits its results into office hours and after hours, although the ABA researchers placed calls in both. We have kept each figure in the words of the publication that reported it. Where we could not read the original, we say so. If you know of a newer study, with a named sample and method, write to hello@calldella.com and we will review it for this page.
        </p>

        <h2>What can a law firm do about missed calls?</h2>
        <p>
          <strong>A law firm closes the missed-call gap by making sure a person or an intake specialist answers every call, including nights and weekends</strong>. The options are voicemail, a message-taking answering service, in-house staff on rotation, or AI intake. Each has a different cost and depth, set out in our{' '}
          <Link href="/operations/after-hours-intake-comparison">after-hours intake comparison</Link>. Call Della is one option. Della answers in your firm&apos;s name nights, weekends and holidays, takes the full intake, and files a dossier on every call for the morning. She tells callers she is an AI if they ask, and she never gives legal advice. Firms in{' '}
          <Link href="/personal-injury">personal injury</Link>, <Link href="/criminal-defense">criminal defense</Link> and{' '}
          <Link href="/immigration">immigration</Link> use her for the calls that arrive when the office is closed. The rest of our{' '}
          <Link href="/operations">law firm intake operations</Link> guides cover cost per signed case and staffing.
        </p>
      </Prose>

      <DemoCTA>
        Want to hear what an answered after-hours call sounds like for your practice? Book a demo and we will run a live Della intake call while you listen.
      </DemoCTA>

      <FAQ items={FAQS} heading="Missed-call data: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
