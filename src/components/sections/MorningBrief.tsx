import React from 'react';
import { Eyebrow, Headline, Body } from '../Typography';
import { DossierMockup } from '../DossierMockup';
import { Rule } from '../Rule';

export const MorningBrief = () => (
  <section className="px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>THE MORNING BRIEF</Eyebrow>
    <Headline size={42} center maxWidth={760}>
      Every overnight call. On your desk by 7 a.m.<br/>
      <span className="text-[var(--ink-soft)] italic">Sorted by urgency, ready for action.</span>
    </Headline>

    <DossierMockup variant="dashboard" />

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-9">
      {[
        { l:"TRIAGE-READY", b:"Three urgency tiers — urgent, pending, closed. Della classifies based on signals only PI firms care about: ER visit, fault admission, opposing insurance contact, statute of limitations exposure." },
        { l:"EVIDENCE-FIRST", b:"Every dossier includes the AI summary, the caller's own words verbatim, the recommended action, and a one-click link to the full recording and transcript." },
        { l:"AUDIT-CLEAN", b:"Every action is logged. Who marked the call followed up, when, with what notes. Built for firms that take privilege and discovery seriously." }
      ].map(c => (
        <div key={c.l}>
          <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono mb-2.5 uppercase">{c.l}</div>
          <div className="h-[1px] bg-[var(--rule)] mb-3.5" />
          <Body size={14}>{c.b}</Body>
        </div>
      ))}
    </div>
  </section>
);
