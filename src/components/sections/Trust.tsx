import React from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

export const Trust = () => (
  <section className="px-8 py-24 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
    <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-start">
      <div>
        <Eyebrow>SECURITY & DATA</Eyebrow>
        <Headline size={38} maxWidth={520}>Built for firms that take privilege seriously.</Headline>
        <div className="mt-7 flex flex-col gap-[18px]">
          <Body>Every call recording, transcript, and dossier belongs to your firm. We are the processor, you are the controller. We don't train models on your call data. We don't sell, share, or analyse it for any purpose other than delivering the service you've hired Della for.</Body>
          <Body>Encryption at rest (AES-256-GCM) and in transit (TLS 1.3). SOC 2 Type II audit underway. BAA available on the Practice and Group plans for firms handling matters with PHI exposure. Hosted in US data centres.</Body>
        </div>
      </div>

      <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[24px_26px]">
        <div className="text-[18px] font-semibold text-[var(--ink)] font-serif mb-3.5">Your firm owns:</div>
        <div className="flex flex-col gap-2.5 mb-6">
          {["Every recording","Every transcript","Every dossier and summary","All caller data captured by Della","The right to export everything, any time","Full deletion within 30 days on request"].map(i => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="w-3.5 h-3.5 border border-[var(--stamp-green)] text-[var(--stamp-green)] flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold font-mono">✓</div>
              <span className="text-[13.5px] text-[var(--ink)] font-serif">{i}</span>
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-[var(--rule-soft)] my-[18px]" />
        <div className="text-[18px] font-semibold text-[var(--ink)] font-serif mb-3.5">We do not:</div>
        <div className="flex flex-col gap-2.5">
          {["Train AI models on your data","Sell or share data with third parties","Use data for advertising","Hold data after termination beyond contract"].map(i => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="w-3.5 h-3.5 border border-[var(--stamp-red)] text-[var(--stamp-red)] flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold font-mono">✗</div>
              <span className="text-[13.5px] text-[var(--ink)] font-serif">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
