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

import { pageMeta } from '@/data/pages';
import { JsonLd } from '@/components/JsonLd';
import { graph, offerNodes, serviceNode } from '@/lib/schema';
import { CATEGORY_DEFINITION } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/pricing');

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(...offerNodes(), serviceNode({ path: '/pricing', name: 'Call Della after-hours legal intake', description: CATEGORY_DEFINITION }))} />
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
