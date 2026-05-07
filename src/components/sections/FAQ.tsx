"use client";

import React, { useState } from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const qs = [
    { q:"Will Della tell callers she's an AI if asked?", a:"Yes. Della identifies herself as your firm's after-hours intake specialist. If a caller asks directly whether she's a real person, she will say she is an AI assistant capable of taking their information so a human can call them back. We do not deceive callers. Doing so creates regulatory and reputational risk we will not accept on your firm's behalf." },
    { q:"What happens if a caller has an emergency?", a:"Della is trained to recognise emergencies (active medical crisis, threat of harm) and immediately direct the caller to 911 before continuing. She will note the emergency in the dossier and, on the Practice and Group plans, immediately SMS the firm contact on call." },
    { q:"How does this work with our existing intake team?", a:"Della only handles the hours your team isn't there. She is configured around your existing business hours and overflow rules. Most firms use her overnight (6 p.m. to 8 a.m.), weekends, and during major holidays. Your intake team owns daytime calls as before." },
    { q:"Can we customise what Della asks and how she responds?", a:"Yes. We start from a base PI intake protocol developed with practising attorneys, then customise to your firm's specific intake script during onboarding. You can update intake fields, escalation rules, and Della's voice introduction at any time." },
    { q:"What about jurisdictional and statute-of-limitations issues?", a:"Della is configured for the jurisdictions your firm practises in. She'll flag callers outside your jurisdiction as referrals rather than intakes, and will surface statute-of-limitations risk in the dossier." },
    { q:"What's the actual onboarding process?", a:"A 20-minute discovery call to understand your firm and intake protocol. We then provision Della, configure her against your protocol, and provide a test number for your team to call and review. You go live when you're satisfied — typically 48 hours from kick-off. No long-term contract; cancel any time after the first 30 days." }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="px-8 py-24 max-w-[980px] mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Eyebrow center>FREQUENTLY ASKED</Eyebrow>
      <Headline size={38} center maxWidth={620}>The questions managing partners ask first.</Headline>

      <div className="mt-12">
        {qs.map((item, i) => (
          <div key={i} className="border-b border-[var(--rule)]">
            <button 
              onClick={() => setOpen(open === i ? null : i)} 
              className="w-full py-[22px] px-1 bg-transparent border-none flex justify-between items-center gap-[18px] cursor-pointer text-left"
            >
              <div className="flex gap-[18px] items-baseline flex-1">
                <span className="text-[11px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.1em]">Q0{i+1}</span>
                <span className="text-[18px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em]">{item.q}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {open === i ? <line x1="5" y1="12" x2="19" y2="12"/> : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>}
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
