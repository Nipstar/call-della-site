import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { SITE_URL } from '@/lib/config';

const SLUG = '/operations/after-hours-intake-comparison';
const TITLE = 'After-hours intake: In-house vs Human Service vs AI';
const DESCRIPTION =
  'Three ways PI firms handle nights and weekends: in-house graveyard shift, traditional answering service, or AI intake specialist. Cost, response time, and accuracy compared.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
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
        { name: 'After-hours intake comparison', href: SLUG },
      ]}
      author="Andy Norman"
      date="24 MAY 2026"
      datePublished="2026-05-24"
      dateModified="2026-05-24"
      tldr={
        <>
          <p className="mb-2">There are three ways PI firms handle nights and weekends: staffing a graveyard shift, hiring an answering service, or deploying an AI specialist.</p>
          <p className="m-0">We compare the true cost models, response times, and legal accuracy of each approach.</p>
        </>
      }
    >
      <h2>The After-Hours Dilemma</h2>
      <p>
        Personal injury doesn't operate on a 9-to-5 schedule. Accidents happen at 11:00 p.m. on a Friday. If your firm isn't equipped to capture that lead immediately, the victim will call the next firm on Google. Here is a breakdown of the three operational models to solve this.
      </p>

      <h2>1. The In-House Graveyard Shift</h2>
      <p>
        Some mega-firms hire dedicated night-shift intake staff. 
      </p>
      <ul>
        <li><strong>Pros:</strong> Maximum control over the script. Employees understand the firm's culture and case criteria intimately.</li>
        <li><strong>Cons:</strong> Astronomically expensive. Staffing 24/7/365 requires at least 4 full-time employees just to cover the off-hours securely. Factoring in turnover, benefits, and night-shift premiums, this costs upwards of $200,000/year.</li>
      </ul>

      <h2>2. Human Answering Services (BPOs)</h2>
      <p>
        The most common solution. Firms pay an outsourced call center to read a basic script.
      </p>
      <ul>
        <li><strong>Pros:</strong> Cheaper than in-house. Ensures a human voice answers the phone.</li>
        <li><strong>Cons:</strong> Quality control is a nightmare. Reps are reading from a script for a plumber one minute and a PI firm the next. They cannot legally or logically adapt to complex accident narratives. They put callers on hold, sound disengaged, and frequently fail to capture vital liability signals.</li>
      </ul>

      <h2>3. AI Intake Specialists (Call Della)</h2>
      <p>
        The modern approach uses voice AI trained specifically on PI intake protocols.
      </p>
      <ul>
        <li><strong>Pros:</strong> Zero hold times. Infinite scalability (can handle 50 simultaneous calls during a major weather event). Costs a fraction of human services. Most importantly, an AI like Della strictly adheres to the legal script, successfully probing for statute of limitations and liability without breaking character.</li>
        <li><strong>Cons:</strong> Requires an upfront onboarding call to configure the AI to the firm's specific jurisdictional protocols.</li>
      </ul>

      <h2>The Verdict</h2>
      <p>
        For any firm outside the Am Law 200, funding a 24/7 in-house team is financially unviable. The traditional answering service has become a liability, bleeding high-value cases due to poor caller experience. The AI model represents the first time mid-sized firms can achieve enterprise-grade intake coverage at a fixed, transparent monthly cost.
      </p>
      
      <p>
        <a href="/pricing">Compare Della's pricing plans →</a>
      </p>
    </ArticleLayout>
  );
}
