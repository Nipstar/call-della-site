import React from 'react';
import { Eyebrow, Headline, Body } from '../Typography';

export const HowItWorks = () => (
  <section id="how-it-works" className="px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>HOW IT WORKS</Eyebrow>
    <Headline size={42} center maxWidth={620}>Della is on your phone line tonight.</Headline>

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-4 gap-[18px]">
      {[
        { n:"01", t:"ROUTE", b:"After-hours calls forward to Della. We support call-forwarding, IVR routing, or full takeover — your choice, your existing number." },
        { n:"02", t:"QUALIFY", b:"Della answers, identifies herself as the firm's after-hours intake specialist, qualifies the caller against your intake protocol, and reassures." },
        { n:"03", t:"DELIVER", b:"Within minutes of the call ending, a complete dossier appears in your portal — summary, transcript, recording, urgency classification." },
        { n:"04", t:"ACT", b:"Your team logs in at 7 a.m., works the urgent callbacks first, marks each as followed up. Audit trail captured automatically." }
      ].map(s => (
        <div key={s.n} className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[22px_20px] relative mt-3.5">
          <div className="absolute top-[-1px] left-[18px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-2.5 py-[3px] text-[9.5px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono -translate-y-full uppercase">
            {s.n} · {s.t}
          </div>
          <Body size={13.5} maxWidth={1000}>{s.b}</Body>
        </div>
      ))}
    </div>

    <p className="mt-9 text-center text-[14px] text-[var(--ink-soft)] font-serif italic m-0">
      Implementation typically takes 48 hours. No long-term contract.
    </p>
  </section>
);
