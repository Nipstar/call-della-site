"use client";

import { Eyebrow, Headline, Body } from '../Typography';
import { verticalList } from '@/lib/verticals';
import type { VerticalSlug } from '@/lib/verticals';
import { trackEvent } from '@/lib/analytics';

const cardCopy: Record<VerticalSlug, { title: string; body: string }> = {
  'personal-injury': {
    title: 'The 9pm crash call.',
    body: 'Della handles auto, slip, dog bite, and malpractice intake. She qualifies the caller, captures the facts, and emails urgent cases to your attorney on call.',
  },
  'criminal-defense': {
    title: 'The 2am arrest call.',
    body: 'Della handles DUI, drug, assault, and domestic intake. She calms panicked family members, captures jail and bond details, and flags hearings within 24 hours.',
  },
  'immigration': {
    title: 'The detention call. In English or Spanish.',
    body: 'Della handles detention, removal, asylum and family-petition intake in English or Spanish. She picks up the caller\u2019s language on the greeting.',
  },
};

export const VerticalPicker = () => (
  <section id="verticals" className="px-4 md:px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>PICK A PRACTICE AREA</Eyebrow>
    <Headline size={42} center maxWidth={680}>Della speaks your firm&rsquo;s language.</Headline>
    <div className="mt-7 max-w-[640px] mx-auto text-center">
      <Body size={16} center maxWidth={640}>
        Three intake flows, each tuned to the calls your practice actually gets at 11pm. Pick the one that fits, then book a demo to hear Della take a live call for your practice.
      </Body>
    </div>

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
      {verticalList.map((v) => {
        const copy = cardCopy[v.slug];
        return (
          <div
            key={v.slug}
            className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[28px_28px] flex flex-col mt-3.5 relative"
          >
            <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono -translate-y-full uppercase">
              {v.name}
            </div>

            <h3 className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] leading-[1.2] m-0">
              {copy.title}
            </h3>

            <div className="mt-4 flex-grow">
              <Body size={14}>{copy.body}</Body>
            </div>


            <a
              href={`/${v.slug}`}
              onClick={() => trackEvent('vertical_card_click', { slug: v.slug })}
              className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.14em] font-mono uppercase no-underline text-[var(--ink)] hover:text-[var(--stamp-red)] transition-colors"
            >
              {v.name} intake
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        );
      })}
    </div>
  </section>
);
