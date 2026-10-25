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
import { DEMO_MINUTES } from '@/lib/plans';
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
