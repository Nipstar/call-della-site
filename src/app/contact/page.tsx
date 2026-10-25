import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/sections/ContactForm';
import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { Eyebrow, Headline } from '@/components/Typography';
import { pageMeta } from '@/data/pages';
import { graph, ORG_ID } from '@/lib/schema';
import { DEMO_MINUTES, PLANS, OVERAGE_PER_MINUTE } from '@/lib/plans';
import { FAQ } from '@/components/FAQ';
import { SITE_URL, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = pageMeta('/contact');

// The Organization (with its contactPoint) is emitted by the layout; reference it by @id.
const contactPage = {
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: 'Book a Call Della demo',
  about: { '@id': ORG_ID },
  mainEntity: { '@id': ORG_ID },
};

const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';
const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';

const [solo, practice] = PLANS;
const contactFaq = [
  {
    q: 'What happens on a Call Della demo?',
    a: `The demo takes ${DEMO_MINUTES} minutes. We run a live Della intake call for your practice area while you listen, so you hear the questions she asks and how she handles an urgent caller. Then we walk you through the dossier she files and answer your questions on setup and pricing.`,
  },
  {
    q: 'Who should join the demo?',
    a: 'Whoever owns intake at your firm. For a solo lawyer that is you. For larger firms it is usually the managing partner, the intake manager, or both. The demo works best when the person who handles after-hours calls today can hear how Della would take them.',
  },
  {
    q: 'Do I need to prepare anything?',
    a: 'No preparation is needed. It helps to know roughly how many calls reach your firm after hours each week, what happens to them now (voicemail, an answering service or your own cell phone) and which practice areas you want covered. We use that to pick the right demo call.',
  },
  {
    q: 'How much does Call Della cost?',
    a: `${solo.name} is $${solo.price} a month for ${solo.minutes} minutes. ${practice.name} is $${practice.price} a month for ${practice.minutes} minutes. Group plans are priced to your volume. Extra minutes cost $${OVERAGE_PER_MINUTE.toFixed(2)} each. Every plan includes the dashboard, urgent-call email alerts and the morning brief.`,
  },
  {
    q: 'Is there a contract or a setup fee?',
    a: 'No. Every Call Della plan is month-to-month, with no setup fee and no long-term contract. Setup covers your firm details, your Della number and call forwarding, and a test call before Della takes live calls, and it is included in the plan.',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(contactPage)} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-8 py-12 md:py-16 max-w-[820px] mx-auto w-full">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
          <Eyebrow>CONTACT</Eyebrow>
          <Headline as="h1" size={44} maxWidth={820}>
            Book a {DEMO_MINUTES}-minute Call Della demo
          </Headline>

          <div className="answer-block mt-8 flex flex-col gap-4">
            <p className={para}>
              A Call Della demo is a {DEMO_MINUTES}-minute video call where we run a live Della intake call for your
              practice area while you listen. Then we walk you through the dossier she files and answer your questions
              about setup, pricing and call data.
            </p>
            <p className={para}>
              Book a time below, use the form, or email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a>.
            </p>
          </div>

          <div className="mt-8">
            <CTAButton primary large>Book a demo</CTAButton>
          </div>

          <section className="mt-14">
            <Headline size={28} maxWidth={760}>What happens on a Call Della demo?</Headline>
            <ol className="mt-5 pl-5 flex flex-col gap-3 m-0">
              <li className="text-[16px] text-[var(--ink)] font-serif leading-[1.6]">You tell us your practice area and how your firm handles calls after hours today.</li>
              <li className="text-[16px] text-[var(--ink)] font-serif leading-[1.6]">We run a live Della call for that practice area. You can play the caller and ask the questions your own callers ask.</li>
              <li className="text-[16px] text-[var(--ink)] font-serif leading-[1.6]">We open the dossier Della filed: summary, urgency score, recording and transcript.</li>
              <li className="text-[16px] text-[var(--ink)] font-serif leading-[1.6]">We cover forwarding, your state&rsquo;s recording disclosure and which plan fits your call volume.</li>
            </ol>
            <p className={`${para} mt-5`}>
              Before the call, you can read{' '}
              <a href="/how-it-works" className={link}>how AI legal intake works</a>, see{' '}
              <a href="/pricing" className={link}>Call Della pricing</a>, or start with your practice area:{' '}
              <a href="/personal-injury" className={link}>personal injury</a>,{' '}
              <a href="/criminal-defense" className={link}>criminal defense</a> or{' '}
              <a href="/immigration" className={link}>immigration</a>.
            </p>
          </section>

          <section className="mt-14">
            <Headline size={28} maxWidth={760}>Prefer to write?</Headline>
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>
          <FAQ items={contactFaq} eyebrow="BEFORE YOU BOOK" heading="Questions about the demo" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
