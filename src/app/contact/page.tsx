import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/sections/ContactForm';
import { Eyebrow, Headline, Body } from '@/components/Typography';

const SITE_URL = 'https://calldella.com';

export const metadata: Metadata = {
  title: 'Contact Call Della',
  description:
    'Get in touch with Call Della. Personal injury, criminal defense, and immigration intake — tell us about your firm and we will be in touch within one business day.',
  keywords: ['contact Call Della', 'AI legal intake contact', 'Della intake demo'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Call Della',
    description: 'Tell us about your firm. We respond within one business day.',
    type: 'website',
    url: `${SITE_URL}/contact`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Contact Call Della' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Call Della',
    description: 'Tell us about your firm.',
    images: ['/og-default.png'],
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: 'Contact Call Della',
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@calldella.com',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-16 max-w-[820px] mx-auto w-full">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
          <Eyebrow>CONTACT</Eyebrow>
          <Headline as="h1" size={44} maxWidth={820}>
            Tell us about your firm.
          </Headline>

          <div className="mt-8">
            <Body size={17}>
              Twenty-minute discovery call. No pitch deck. We&rsquo;ll walk you through the dossier, let you hear Della work, and answer questions. Fill the form below or email{' '}
              <a href="mailto:hello@calldella.com" className="underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]">hello@calldella.com</a>.
            </Body>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>

          <div className="mt-12 bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] p-[24px_28px]">
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-3">
              Prefer to book directly?
            </div>
            <div className="h-[1px] bg-[var(--rule-soft)] mb-4" />
            <Body size={15}>
              The PI demo line is live now:{' '}
              <a href="tel:+16505360172" className="font-semibold no-underline">(650) 536-0172</a>. Or{' '}
              <a href="/personal-injury" className="underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]">read the PI lander</a> first.
            </Body>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
