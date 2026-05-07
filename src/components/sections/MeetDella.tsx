import React from 'react';
import { Eyebrow, Headline, Body } from '../Typography';
import { Stamp } from '../Stamp';
import { Rule } from '../Rule';

export const MeetDella = () => (
  <section className="px-8 py-24 max-w-[1180px] mx-auto bg-[var(--paper-edge)] border-y border-[var(--rule)]">
    <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-start">
      <div>
        <Eyebrow>MEET DELLA</Eyebrow>
        <Headline size={38} maxWidth={560}>The intake specialist your firm hires for the hours your team isn't there.</Headline>
        <div className="mt-[30px] flex flex-col gap-5">
          <Body>Della answers within two rings, every time, including 2 a.m. on a Sunday. She identifies herself by name. She knows the firm she works for. She asks the right questions in the right order — incident type, date, jurisdiction, injury severity, fault, insurance contact, prior counsel, statute of limitations. She reassures callers without committing the firm to anything.</Body>
          <Body>What she doesn't do: pretend she isn't an AI when asked, give legal advice, quote fees, or pressure for retainer signatures. <em className="italic text-[var(--ink)]">Della was built for personal injury intake from the first call</em>, not adapted from a generic receptionist script.</Body>
          <Body>By the time your intake manager arrives the next morning, every overnight call has a complete dossier waiting — caller's own words, AI-generated summary, urgency classification, recommended action. Triage takes minutes, not hours.</Body>
        </div>
      </div>

      {/* Transcript snippet card */}
      <div className="relative py-[30px]">
        <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[22px_26px] shadow-[5px_5px_0_var(--rule)] -rotate-[1.5deg] relative">
          <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-deep)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.14em] font-mono -translate-y-full uppercase">
            TRANSCRIPT · INT-04421
          </div>
          <div className="text-[18px] font-semibold text-[var(--ink)] font-serif tracking-[-0.015em]">Maria Gonzalez</div>
          <div className="text-[11px] text-[var(--ink-soft)] font-mono mt-1 tracking-[0.06em]">+1 (312) 555-0194</div>
          <Rule mt={16} />
          <p className="text-[18px] text-[var(--ink)] font-serif italic leading-[1.55] m-[6px_0_0] tracking-[-0.005em]">
            "I was stopped at a red light and this guy just ploughed into me. I've been in pain since and don't know what to do."
          </p>
          <div className="mt-[18px] text-[10px] text-[var(--ink-soft)] font-mono tracking-[0.14em] uppercase">
            — TRANSCRIBED FROM RECORDING · 23:42 CDT
          </div>
          <div className="mt-3.5 flex justify-end">
            <div className="-rotate-3"><Stamp kind="urgent"/></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
