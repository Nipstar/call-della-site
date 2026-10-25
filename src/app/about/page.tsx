import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { Eyebrow, Headline } from '@/components/Typography';
import { pageMeta } from '@/data/pages';
import { graph, ORG_ID, FOUNDER_ID } from '@/lib/schema';
import { CATEGORY_DEFINITION, DEMO_MINUTES } from '@/lib/plans';
import { FAQ } from '@/components/FAQ';
import { SITE_URL, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = pageMeta('/about');

const OBA_URL = 'https://www.okbar.org/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/';

// The Person node itself is emitted once, by founderNode() in the layout. Reference it by @id only.
const aboutPage = {
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: 'About Call Della',
  about: { '@id': ORG_ID },
  mainEntity: { '@id': ORG_ID },
  author: { '@id': FOUNDER_ID },
};

const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';
const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';

const aboutFaq = [
  {
    q: 'Who is behind Call Della?',
    a: 'Call Della was founded by Andy Norman and is built by Antek Automation, a voice AI agency he also founded. Della runs on the Retell AI voice platform. The intake flows, the urgency scoring and the morning dossier are designed by the Call Della team for law firm intake specifically.',
  },
  {
    q: 'Is Della a lawyer, and does she give legal advice?',
    a: 'No. Della is an intake specialist, not a lawyer. She never gives legal advice, never quotes fees and never suggests that representation has begun. She takes the caller\'s details, qualifies the matter and passes everything to the firm\'s attorneys. If a caller asks whether she is an AI, she says so.',
  },
  {
    q: 'Which practice areas does Della cover?',
    a: 'Della has intake flows built for personal injury, criminal defense and immigration firms. Each flow asks the questions that practice area needs on a first call. Spanish-language intake is available on the immigration flow today; personal injury and criminal defense intake run in English.',
  },
  {
    q: 'Who owns the call recordings and transcripts?',
    a: 'The firm does. Every recording, transcript and dossier Della creates belongs to the law firm she answers for, and call data is not used to train AI models. Retention is set per firm. The security page explains how call data is handled.',
  },
  {
    q: 'How do I find out whether Della fits my firm?',
    a: `Book a ${DEMO_MINUTES}-minute demo. We run a live Della call for your practice area while you listen, then walk you through the dossier she files. You can also email hello@calldella.com with questions before you book, such as how Della would handle a call type your firm sees often.`,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(aboutPage)} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-8 py-12 md:py-16 max-w-[820px] mx-auto w-full">
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <Eyebrow>ABOUT</Eyebrow>
          <Headline as="h1" size={44} maxWidth={820}>
            About Call Della
          </Headline>

          <div className="answer-block mt-8 flex flex-col gap-4">
            <p className={`${para} text-[18px]`}>{CATEGORY_DEFINITION}</p>
            <p className={para}>
              Call Della was founded in 2026 by Andy Norman. It is built by Antek Automation, the voice AI agency Andy
              also founded, and Della&rsquo;s voice runs on the Retell AI platform.
            </p>
          </div>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>Why was Call Della built?</Headline>
            <div className="mt-5 flex flex-col gap-4">
              <p className={para}>
                Call Della was built because law firms miss the calls that matter most, and the after-hours calls are
                the easiest to miss. According to{' '}
                <a href={OBA_URL} className={link}>the Oklahoma Bar Journal (September 2025)</a>, Clio&rsquo;s 2024 Legal
                Trends Report found that only 40% of law firms answered a prospective client&rsquo;s call, down from 56% in
                2019. An injured driver at 9pm, a parent calling about an arrest at 2am, or a family calling about a
                detention at dawn rarely waits for a callback.
              </p>
              <p className={para}>
                Call Della gives those callers an intake specialist instead of a voicemail box. Della asks the questions
                an intake team would ask, files each call as a dossier and has the morning brief on the firm&rsquo;s desk
                by 7am. She covers the hours the firm is closed and leaves the daytime intake team and every legal
                judgment with the firm.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>Who builds Della?</Headline>
            <div className="mt-5 flex flex-col gap-4">
              <p className={para}>
                Della is built by Antek Automation, a UK-based voice AI agency that designs and runs AI phone agents for
                businesses. Antek Automation builds Della on the Retell AI voice platform and writes the intake flows for
                each practice area Call Della covers:{' '}
                <a href="/personal-injury" className={link}>personal injury</a>,{' '}
                <a href="/criminal-defense" className={link}>criminal defense</a> and{' '}
                <a href="/immigration" className={link}>immigration</a>. Call Della is sold to law firms in the United States.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>What will Della never do?</Headline>
            <div className="mt-5 flex flex-col gap-4">
              <p className={para}>
                Della will never give legal advice, quote fees or promise that a firm will take a case. She never claims
                to be human, and when a caller asks, she says she is an AI intake specialist. Call Della is not a law
                firm, and nothing on this site is legal advice. Firms should check the{' '}
                <a href="/compliance" className={link}>AI legal intake compliance guide</a> and their own state bar rules
                before using any AI intake service. See how call data is handled on the{' '}
                <a href="/security" className={link}>security page</a>.
              </p>
            </div>
          </section>

          <section className="mt-14 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8">
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-4">
              Founder
            </div>
            <div className="h-[1px] bg-[var(--rule)] mb-5" />
            <h2 className="text-[24px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em] m-0 mb-2">
              <a href="/about/andy-norman" className={link}>Andy Norman</a>
            </h2>
            <div className="text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] uppercase mb-4">
              Founder · Call Della and Antek Automation
            </div>
            <p className="text-[15px] text-[var(--ink)] font-serif leading-[1.65] m-0">
              Andy Norman is the founder of Call Della and of{' '}
              <a href="https://www.antekautomation.com" className={link}>Antek Automation</a>, a UK-based voice AI agency.
              He designs the intake flows Della runs and writes the Call Della guides on intake, compliance and
              operations. Andy is not a lawyer. His work is the operational side of intake: how calls are answered, which
              questions are asked and what reaches the attorney the next morning. Read{' '}
              <a href="/about/andy-norman" className={link}>Andy Norman&rsquo;s author page</a> or connect on{' '}
              <a href="https://www.linkedin.com/in/andy-norman-ab78443a1" className={link}>LinkedIn</a>.
            </p>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <CTAButton primary large>Book a demo</CTAButton>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} font-serif text-[16px] text-[var(--ink)]`}>{CONTACT_EMAIL}</a>
          </div>
          <FAQ items={aboutFaq} eyebrow="ABOUT CALL DELLA" heading="Questions about Call Della" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
