import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Pricing } from '@/components/sections/Pricing';
import { PricingFAQ } from '@/components/sections/PricingFAQ';
import { HomeFinalCTA } from '@/components/sections/HomeFinalCTA';
import { BookingModal } from '@/components/BookingModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow, Headline, Body } from '@/components/Typography';

import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Pricing — Three plans, month-to-month',
  description:
    'Standard $297, Practice $547, Group custom. Up to 400/1,000/custom minutes. Month-to-month, no setup fees, $0.50 per-minute overage.',
  keywords: [
    'Call Della pricing',
    'AI legal intake pricing',
    'after hours intake cost',
    'law firm answering service pricing',
  ],
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Three plans, month-to-month | Call Della',
    description: 'Standard $297, Practice $547, Group custom. Month-to-month, no setup fees.',
    type: 'website',
    url: `${SITE_URL}/pricing`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Call Della pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Three plans, month-to-month | Call Della',
    description: 'Standard $297, Practice $547, Group custom.',
    images: ['/og-default.png'],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_URL}/pricing#product`,
  name: 'Call Della — After-Hours AI Intake',
  description:
    'After-hours voice AI intake for personal injury, criminal defense, and immigration law firms.',
  brand: { '@type': 'Brand', name: 'Call Della' },
  url: `${SITE_URL}/pricing`,
  category: 'Legal Intake Service',
  offers: [
    {
      '@type': 'Offer',
      name: 'Standard',
      price: '297',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '297',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      url: `${SITE_URL}/pricing`,
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Offer',
      name: 'Practice',
      price: '547',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '547',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      url: `${SITE_URL}/pricing`,
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Offer',
      name: 'Group',
      priceCurrency: 'USD',
      url: `${SITE_URL}/pricing`,
      availability: 'https://schema.org/InStock',
      description: 'Multi-office, custom volume — contact sales.',
      offeredBy: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="px-8 pt-12 pb-12 max-w-[980px] mx-auto text-center">
            <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
            <Eyebrow center>PRICING</Eyebrow>
            <Headline as="h1" size={48} center maxWidth={780}>
              Three plans. Month-to-month.{' '}
              <span className="italic text-[var(--ink-soft)]">No per-minute panic.</span>
            </Headline>
            <div className="mt-7 max-w-[640px] mx-auto">
              <Body size={17} center maxWidth={640}>
                Every plan includes the full Della platform — vertical intake flows, portal access, transcripts, recordings, and webhook integrations. The difference is volume.
              </Body>
            </div>
          </section>

          <Pricing />

          <PricingFAQ />

          <HomeFinalCTA />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}
