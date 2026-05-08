import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

const SLUG = '/operations/missed-call-cost-calculator';
const TITLE = 'The missed-call cost calculator: A math walkthrough';
const DESCRIPTION =
  "A missed call at 2 a.m. isn't a missed lead — it's a structural leak in marketing ROI. The math on what a 15% after-hours missed-call rate costs a 5-attorney PI firm.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: `https://calldella.com${SLUG}`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-default.png'] },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR B CLUSTER · OPERATIONS"
      title={TITLE}
      description={DESCRIPTION}
      slug={SLUG}
      breadcrumbs={[
        { name: 'Operations', href: '/operations' },
        { name: 'Missed-call cost', href: SLUG },
      ]}
      author="Andy Norman"
      date="22 MAY 2026"
      datePublished="2026-05-22"
      dateModified="2026-05-22"
      tldr={
        <>
          <p className="mb-2">A missed call at 2 a.m. isn't just a missed lead; it's a structural leak in your marketing ROI.</p>
          <p className="m-0">We break down the math on what a 15% after-hours missed call rate actually costs a 5-attorney PI firm.</p>
        </>
      }
    >
      <h2>The 2:00 a.m. leak</h2>
      <p>
        Most PI firms spend heavily on TV, billboards, and SEO. Those ads don't stop running at 5:00 p.m. When an accident victim calls at 2:00 a.m. and gets a generic voicemail—or worse, a tired answering service rep who says "the office is closed, someone will call you tomorrow"—that caller immediately dials the next firm on Google.
      </p>

      <h2>The Math: What is a missed call worth?</h2>
      <p>
        Let's look at a mid-sized firm spending $50,000 a month on marketing, generating 400 calls a month.
      </p>

      <ul>
        <li><strong>Total Monthly Calls:</strong> 400</li>
        <li><strong>After-Hours Calls (30%):</strong> 120 calls</li>
        <li><strong>Missed/Abandoned After-Hours Calls:</strong> 30 calls (assuming a conservative 25% drop-off rate for generic voicemails/bad service reps)</li>
      </ul>

      <p>
        If your firm's historical conversion rate from Call to Signed Case is 10%, those 30 abandoned calls represent <strong>3 lost cases every single month.</strong>
      </p>

      <h3>The Revenue Impact</h3>
      <p>
        If your average PI case fee is $12,000, losing 3 cases a month means you are bleeding <strong>$36,000 in monthly revenue</strong>—or over $430,000 a year. That is the true cost of failing to secure the after-hours pipeline.
      </p>

      <h2>The compounding problem</h2>
      <p>
        It gets worse. When you miss those calls, your Cost Per Acquisition (CPA) on your marketing spend artificially inflates. You paid for those clicks and those billboard impressions. The marketing worked; the operational intake failed.
      </p>

      <h2>How Della handles this</h2>
      <p>
        Call Della answers every single after-hours call instantly, with zero hold times. She doesn't take messages; she conducts a full PI intake, demonstrating immediate competence and care to the caller. By the time your team arrives at 8:00 a.m., the caller feels represented and is significantly less likely to call a competitor.
      </p>
      
      <p>
        <a href="/">See the Morning Brief dashboard in action →</a>
      </p>
    </ArticleLayout>
  );
}
