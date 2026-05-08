"use client";

import { useState } from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

const items = [
  {
    q: 'What counts as a minute?',
    a: 'Every second a caller is on the line with Della counts toward your monthly minutes — from greeting through hang-up. Internal processing, dossier generation, and webhook delivery do not count.',
  },
  {
    q: 'What happens if we go over our minutes?',
    a: 'Overage is billed at $0.50 per minute. No surprise rate hikes, no contract penalties. Overage shows on your next invoice.',
  },
  {
    q: 'Can we change plans mid-month?',
    a: 'Yes. Upgrade anytime — pro-rated to the day. Downgrade takes effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. Onboarding is included in every plan. Most firms are live within 7 days from kickoff.',
  },
  {
    q: 'Do you offer multi-office or multi-firm discounts?',
    a: 'The Group plan is built for multi-office firms. Custom volume pricing for firms with 3+ offices or specialised intake-flow needs — contact sales.',
  },
  {
    q: 'What\'s the contract?',
    a: 'Month-to-month. Cancel anytime after the first 30 days. No multi-year contracts.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most firms are live within 7 days. The bottleneck is usually your team agreeing on the intake script, not the tech.',
  },
];

export const PricingFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className="px-8 py-24 max-w-[980px] mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Eyebrow center>PRICING — FAQ</Eyebrow>
      <Headline size={36} center maxWidth={620}>Billing questions, answered.</Headline>

      <div className="mt-12">
        {items.map((item, i) => (
          <div key={item.q} className="border-b border-[var(--rule)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-[22px] px-1 bg-transparent border-none flex justify-between items-center gap-[18px] cursor-pointer text-left"
            >
              <div className="flex gap-[18px] items-baseline flex-1">
                <span className="text-[11px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.1em]">
                  Q{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[18px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em]">
                  {item.q}
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {open === i ? <line x1="5" y1="12" x2="19" y2="12" /> : <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
              </svg>
            </button>
            {open === i && (
              <div className="pl-[49px] pr-1 pb-[22px] max-w-[780px]">
                <Body size={15}>{item.a}</Body>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
