import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { HowDellaWorks } from '@/components/sections/HowDellaWorks';
import { SecurityStrip } from '@/components/sections/SecurityStrip';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { BrandFAQ } from '@/components/sections/BrandFAQ';
import { HomeFinalCTA } from '@/components/sections/HomeFinalCTA';
import { BookingModal } from '@/components/BookingModal';
import { Eyebrow, Headline, Body } from '@/components/Typography';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How Della works',
  description:
    "Della answers your firm's after-hours phone, qualifies callers, files the case, and hands the morning dossier to your team. Four steps, every call.",
  keywords: [
    'how Della works',
    'AI legal intake mechanics',
    'after hours intake process',
  ],
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How Della works | Call Della',
    description: "Four things happen on every call. Here's the mechanic.",
    type: 'website',
    url: `${SITE_URL}/how-it-works`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'How Della works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Della works | Call Della',
    description: "Four things happen on every call.",
    images: ['/og-default.png'],
  },
};

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="px-8 pt-24 pb-12 max-w-[980px] mx-auto text-center">
            <Eyebrow center>HOW IT WORKS</Eyebrow>
            <Headline as="h1" size={48} center maxWidth={780}>
              The mechanic is simple.{' '}
              <span className="italic text-[var(--ink-soft)]">The intake is not.</span>
            </Headline>
            <div className="mt-7 max-w-[640px] mx-auto">
              <Body size={17} center maxWidth={640}>
                Della answers your firm&rsquo;s phone when no one else is there.
                She qualifies, captures, files, and hands the dossier to your team by morning.
                Four steps. Every call. Built specifically for legal intake — not a generic receptionist bot.
              </Body>
            </div>
          </section>

          <HowDellaWorks />
          <SecurityStrip />
          <PricingTeaser />
          <BrandFAQ />
          <HomeFinalCTA />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}
