import React from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

export const Problem = () => (
  <section className="px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>THE OVERNIGHT LEAK</Eyebrow>
    <Headline size={42} center maxWidth={780}>
      Personal injury firms spend $300,000 a year on lead generation.<br/>
      <span className="text-[var(--ink-soft)] italic">Then 30 to 50 percent of those calls go to voicemail.</span>
    </Headline>
    <div className="mt-8">
      <Body size={16} center maxWidth={620}>
        Every PI firm knows the math. Google Ads run $100 to $400 per click. Cost per signed case: $1,500 to $8,000. The single biggest leak in the funnel isn't ad spend, intake script, or follow-up cadence. It's the hours your intake team isn't there.
      </Body>
    </div>

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
      {[
        { label:"AFTER-HOURS LEAK", num:"30–50%", sub:"of inbound PI calls reach voicemail outside business hours" },
        { label:"30-SECOND ANSWER RATE", num:"4×–8×", sub:"higher signing rate vs. firms answering after five minutes" },
        { label:"ANNUAL COST OF MISSED CALLS", num:"$250K+", sub:"average revenue lost per mid-size PI firm to overnight calls" }
      ].map(s => (
        <div key={s.label} className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[24px_26px] flex flex-col gap-2 relative">
          <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.16em] font-mono uppercase">{s.label}</div>
          <div className="h-[1px] bg-[var(--rule-soft)] my-1.5" />
          <div className="text-[54px] font-semibold text-[var(--ink)] font-serif leading-none tracking-[-0.03em]">{s.num}</div>
          <div className="text-[13px] text-[var(--ink-soft)] font-serif italic mt-2 leading-[1.5]">{s.sub}</div>
        </div>
      ))}
    </div>

    <div className="mt-[18px] text-center text-[9.5px] text-[var(--ink-faint)] font-mono tracking-[0.16em] italic uppercase">
      SOURCES: ABA TECH REPORT · LAW.COM INDUSTRY SURVEYS · INTERNAL ANALYSIS · 2025
    </div>
  </section>
);
