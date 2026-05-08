"use client";

import { Eyebrow, Body } from '../Typography';
import { DossierMockup } from '../DossierMockup';
import { openBookingModal } from '../BookingModal';
import { trackEvent } from '@/lib/analytics';

const onScrollToVerticals = () => {
  trackEvent('hero_pick_vertical_click');
  const el = document.getElementById('verticals');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const onBookFromHomepage = () => {
  trackEvent('book_demo_click_homepage');
  openBookingModal();
};

export const HomeHero = () => (
  <section className="px-8 pt-24 pb-20 max-w-[1180px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
      <div>
        <Eyebrow>THE INTAKE SPECIALIST WHO NEVER SLEEPS</Eyebrow>
        <h1 className="text-[36px] md:text-[58px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0">
          After-hours intake for law firms<br />
          <span className="italic text-[var(--ink-soft)]">that don&rsquo;t want to lose another midnight call.</span>
        </h1>
        <div className="mt-7 max-w-[540px]">
          <Body size={18}>
            Della answers your firm&rsquo;s phone when no one else is there. She qualifies callers, captures every detail, and hands a complete file to your team by morning. Built for personal injury, criminal defense, and immigration firms across the US.
          </Body>
        </div>
        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={onBookFromHomepage}
            className="inline-flex items-center gap-2.5 px-6 py-[14px] bg-[var(--ink)] text-[var(--paper)] border-[1.5px] border-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase cursor-pointer transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rule)]"
          >
            Book a discovery call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            onClick={onScrollToVerticals}
            className="inline-flex items-center gap-2.5 px-6 py-[14px] bg-transparent text-[var(--ink)] border-[1.5px] border-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase cursor-pointer transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rule)]"
          >
            Try Della — pick a practice area
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </button>
        </div>
      </div>

      <DossierMockup variant="hero" />
    </div>
  </section>
);
