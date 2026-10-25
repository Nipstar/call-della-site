"use client";

import { Eyebrow, Body } from '../Typography';
import { DossierMockup } from '../DossierMockup';
import { openBookingModal } from '../BookingModal';
import { trackEvent } from '@/lib/analytics';
import { CATEGORY_DEFINITION, PLANS, formatPrice, DEMO_MINUTES } from '@/lib/plans';

const onScrollToVerticals = () => {
  trackEvent('hero_pick_vertical_click');
  const el = document.getElementById('verticals');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const onBookFromHomepage = () => {
  trackEvent('book_demo_click_homepage');
  openBookingModal();
};

const solo = PLANS[0];

export const HomeHero = () => (
  <section className="px-4 md:px-8 pt-16 md:pt-24 pb-20 max-w-[1180px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
      <div>
        <Eyebrow>AFTER-HOURS INTAKE SPECIALIST</Eyebrow>
        <h1 className="text-[36px] md:text-[58px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0">
          AI legal intake for law firms,<br />
          <span className="italic text-[var(--ink-soft)]">after the office closes.</span>
        </h1>
        <div className="answer-block mt-7 max-w-[540px] flex flex-col gap-4">
          <Body size={18}>{CATEGORY_DEFINITION}</Body>
          <Body size={16}>
            Every call becomes a dossier with a summary, an urgency score, the recording and the transcript, and
            the morning brief reaches your team by 7am. Plans start at {formatPrice(solo)} a month for {solo.minutes} minutes,
            month-to-month, with no setup fee.
          </Body>
        </div>
        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={onBookFromHomepage}
            className="inline-flex items-center gap-2.5 px-6 py-[14px] min-h-[48px] bg-[var(--ink)] text-[var(--paper)] border-[1.5px] border-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase cursor-pointer transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rule)]"
          >
            Book a demo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            onClick={onScrollToVerticals}
            className="inline-flex items-center gap-2.5 px-6 py-[14px] min-h-[48px] bg-transparent text-[var(--ink)] border-[1.5px] border-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase cursor-pointer transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rule)]"
          >
            See the practice areas
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] m-0">
          The demo takes {DEMO_MINUTES} minutes: a live Della call for your practice area.
        </p>
      </div>

      <figure className="m-0">
        <DossierMockup variant="hero" />
        <figcaption className="mt-3 text-[10px] text-[var(--ink-faint)] font-mono tracking-[0.14em] uppercase text-center">
          Sample dossier. Names and details are illustrative.
        </figcaption>
      </figure>
    </div>
  </section>
);
