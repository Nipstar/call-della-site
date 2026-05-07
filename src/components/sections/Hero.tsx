import React from 'react';
import { Eyebrow, Body } from '../Typography';
import { CTAButton } from '../CTAButton';
import { DossierMockup } from '../DossierMockup';
import { AudioPlayer } from '../AudioPlayer';

export const Hero = () => (
  <section className="px-8 pt-24 pb-20 max-w-[1180px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
      <div>
        <Eyebrow>EST. 2026 · AFTER-HOURS INTAKE · USA</Eyebrow>
        <h1 className="text-[36px] md:text-[60px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0">
          Della takes the<br/>overnight calls.<br/>
          <span className="italic text-[var(--ink-soft)]">Your team takes<br/>the morning.</span>
        </h1>
        <div className="mt-7 max-w-[480px]">
          <Body size={18}>
            An after-hours intake specialist for personal injury law firms.{' '}
            <em className="text-[var(--ink-soft)] not-italic">Every overnight caller, on your desk by dawn.</em>
          </Body>
        </div>
        <div className="mt-9">
          <CTAButton primary large>Hire Della</CTAButton>
        </div>
        <div className="mt-8">
          <AudioPlayer />
        </div>
      </div>

      <DossierMockup variant="hero" />
    </div>

    <div className="mt-20 py-3.5 border-y border-[var(--rule-soft)] flex justify-center gap-9 text-[10px] font-mono text-[var(--ink-soft)] tracking-[0.18em] uppercase flex-wrap">
      <span>BUILT ON RETELL AI</span><span>·</span>
      <span>SOC 2 IN PROGRESS</span><span>·</span>
      <span>BAA-READY</span><span>·</span>
      <span>US-BASED</span>
    </div>
  </section>
);
