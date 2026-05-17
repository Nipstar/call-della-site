import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { Eyebrow, Headline, Body } from '@/components/Typography';

import { SITE_URL, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: { absolute: 'About Call Della' },
  description:
    'Why we built Della — an after-hours intake specialist for personal injury, criminal defense, and immigration law firms. Founder background, why now, what the platform is.',
  keywords: ['Call Della', 'about Call Della', 'Andy Norman founder', 'voice AI legal intake'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Call Della',
    description: 'Why we built Della.',
    type: 'profile',
    url: `${SITE_URL}/about`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'About Call Della' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Call Della',
    description: 'Why we built Della.',
    images: ['/og-default.png'],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about#founder`,
  name: 'Andy Norman',
  url: `${SITE_URL}/about`,
  jobTitle: 'Founder',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: [
    'legal intake',
    'voice AI',
    'personal injury law firm operations',
    'after-hours phone answering',
  ],
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: 'About Call Della',
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: { '@id': `${SITE_URL}/about#founder` },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-16 max-w-[820px] mx-auto w-full">
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <Eyebrow>ABOUT</Eyebrow>
          <Headline as="h1" size={44} maxWidth={820}>
            Why Della exists.
          </Headline>

          <div className="mt-8">
            <Body size={18}>
              Personal injury firms spend $300,000 a year on lead generation, then send 30 to 50 percent of inbound calls to voicemail outside business hours. Criminal defense firms lose $2,500 to $50,000 retainers when nobody answers the 2 a.m. arrest call. Immigration firms miss bilingual detention calls when ICE picks someone up at 4 a.m.
            </Body>
          </div>

          <div className="mt-6">
            <Body size={17}>
              Della is an after-hours intake specialist — a voice AI agent built specifically for legal intake from the first call. White-labelled per firm. She answers in your firm&rsquo;s name, qualifies the caller, captures the file, and hands a triage-ready dossier to your team by morning. She refuses legal advice, identifies herself as AI when asked, and operates under your firm&rsquo;s privilege and retention rules.
            </Body>
          </div>

          <div className="mt-12 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[28px_32px]">
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-4">
              Founder
            </div>
            <div className="h-[1px] bg-[var(--rule)] mb-5" />
            <h2 className="text-[24px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em] m-0 mb-2">
              Andy Norman
            </h2>
            <div className="text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] uppercase mb-4">
              Founder · Call Della
            </div>
            <Body size={15}>
              Bio coming soon. In the meantime, the fastest way to learn what Della does is to{' '}
              <a href="/personal-injury#verticals" className="underline">try a demo</a> or{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">email us</a>.
            </Body>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <CTAButton primary large>Book a discovery call</CTAButton>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
