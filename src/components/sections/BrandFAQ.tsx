"use client";

import { useState } from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

const qs = [
  {
    q: 'What exactly is Della?',
    a: 'A voice AI that answers your firm’s after-hours phone, captures intake details, and hands the file to your team. Built specifically for legal — not a generic receptionist bot.',
  },
  {
    q: 'Can we rebrand her?',
    a: 'Yes. The platform default is Della, but most firms rebrand her — Sophia, Maya, whatever fits your firm. Same agent, your name.',
  },
  {
    q: 'Does she handle Spanish?',
    a: 'Yes, natively. The immigration flow leads with Spanish detection on greeting. The PI and criminal flows handle Spanish on request.',
  },
  {
    q: 'Is this just a chatbot?',
    a: 'No. Della is a voice agent — phone calls, real-time speech, natural conversation. Callers don’t know they’re talking to AI unless they ask, and even then she discloses cleanly.',
  },
  {
    q: 'What if a caller asks for legal advice?',
    a: 'She refuses. She’s prompted hard against giving any legal opinion, and she defers every legal question to "the attorney will advise on that when they call you back."',
  },
  {
    q: 'How does it integrate with our case management system?',
    a: 'Webhook out, REST API, native integrations on the roadmap (Clio, MyCase, Filevine prioritised). Until then: structured JSON to whatever you point it at.',
  },
  {
    q: 'What happens if Della can’t answer something?',
    a: 'She captures what she can, flags the rest as a follow-up question for the attorney, and never makes things up.',
  },
  {
    q: 'Can callers tell it’s AI?',
    a: 'Most don’t unless they ask. When they do ask, she discloses honestly.',
  },
  {
    q: 'What’s the contract?',
    a: 'Month-to-month. Cancel anytime.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most firms are live within 7 days. The bottleneck is usually your team agreeing on the intake script, not the tech.',
  },
];

export const BrandFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <section id="faq" className="px-8 py-24 max-w-[980px] mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Eyebrow center>FREQUENTLY ASKED</Eyebrow>
      <Headline size={38} center maxWidth={620}>The questions managing partners ask first.</Headline>

      <div className="mt-12">
        {qs.map((item, i) => (
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
