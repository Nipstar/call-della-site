"use client";

import { useState } from 'react';
import { Eyebrow, Headline, Body } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  faq: Vertical['faq'];
  eyebrow?: string;
  heading: string;
};

export const VerticalFAQ = ({ faq, eyebrow, heading }: Props) => {
  const [open, setOpen] = useState<number | null>(null);

  if (!faq.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <section className="px-8 py-24 max-w-[980px] mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      <Headline size={38} center maxWidth={620}>{heading}</Headline>

      <div className="mt-12">
        {faq.map((item, i) => (
          <div key={item.question} className="border-b border-[var(--rule)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-[22px] px-1 bg-transparent border-none flex justify-between items-center gap-[18px] cursor-pointer text-left"
            >
              <div className="flex gap-[18px] items-baseline flex-1">
                <span className="text-[11px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.1em]">
                  Q{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[18px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em]">
                  {item.question}
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {open === i ? <line x1="5" y1="12" x2="19" y2="12" /> : <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
              </svg>
            </button>
            {open === i && (
              <div className="pl-[49px] pr-1 pb-[22px] max-w-[780px]">
                <Body size={15}>{item.answer}</Body>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
