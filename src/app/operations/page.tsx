import type { Metadata } from 'next';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Eyebrow, Headline } from '@/components/Typography';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Law Firm Intake Operations',
  description:
    'Cost-per-signed-case, missed-call cost, and after-hours intake comparison. Operations playbook for personal injury law firm intake managers.',
  keywords: [
    'law firm intake operations',
    'cost per signed case',
    'missed call cost',
    'after hours legal intake comparison',
  ],
  alternates: { canonical: '/operations' },
  openGraph: {
    title: 'Law Firm Intake Operations | Call Della',
    description: 'Cost-per-signed-case, missed-call cost, intake comparison.',
    type: 'website',
    url: `${SITE_URL}/operations`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Operations' }],
  },
};

export default function PillarBIndex() {
  const posts = [
    {
      title: "Cost per signed case: How to actually calculate it",
      slug: "cost-per-signed-case-calculator",
      tldr: "Most PI firms calculate Cost Per Lead (CPL) and ignore Cost Per Signed Case. This masks the catastrophic operational drag of bad intake. Here's how to calculate the true cost of acquiring a retained client."
    },
    {
      title: "The missed call cost calculator: A math walkthrough",
      slug: "missed-call-cost-calculator",
      tldr: "A missed call at 2 a.m. isn't just a missed lead; it's a structural leak in your marketing ROI. We break down the math on what a 15% after-hours missed call rate actually costs a 5-attorney PI firm."
    },
    {
      title: "After-hours intake: In-house vs Human Service vs AI",
      slug: "after-hours-intake-comparison",
      tldr: "The three ways PI firms handle nights and weekends. We compare the true cost models, response times, and legal accuracy of staffing a graveyard shift, hiring an answering service, and deploying an AI specialist."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
          <Eyebrow>PILLAR B · CORE GUIDE</Eyebrow>
          <Headline as="h1" size={48} maxWidth={800}>Intake Operations & ROI</Headline>
          
          <div className="text-[17px] text-[var(--ink)] font-serif leading-[1.6] mt-6 mb-16">
            <p className="mb-4">
              How the top personal injury firms actually run intake—staffing models, after-hours coverage economics, conversion benchmarks, and ROI calculators.
            </p>
            <p>
              This pillar focuses purely on the operational math of legal intake. If you aren't measuring your intake performance, you are bleeding marketing dollars.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <a 
                key={i} 
                href={`/operations/${post.slug}`}
                className="block bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8 hover:shadow-[6px_6px_0_var(--rule)] transition-all duration-200 group no-underline"
              >
                <h2 className="text-[24px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] mb-3 group-hover:underline decoration-[var(--rule-soft)] underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-[14.5px] text-[var(--ink-soft)] font-serif italic leading-[1.6] m-0">
                  {post.tldr}
                </p>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
