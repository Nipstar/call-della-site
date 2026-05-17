"use client";

import { Eyebrow, Headline, Body } from '../Typography';
import { verticalList } from '@/lib/verticals';
import type { VerticalSlug } from '@/lib/verticals';
import { trackEvent } from '@/lib/analytics';

const cardCopy: Record<VerticalSlug, { title: string; body: string; ctaPrefix: string }> = {
  'personal-injury': {
    title: 'The 9pm crash call.',
    body: 'Della handles auto, slip, dog bite, and malpractice intake. She qualifies, captures the facts, and routes urgent cases to your on-call attorney.',
    ctaPrefix: 'Try Della-PI',
  },
  'criminal-defense': {
    title: 'The 2am arrest call.',
    body: 'Della handles DUI, drug, assault, and domestic intake. She calms panicked family members, captures jail and bond details, and flags hearings within 24 hours.',
    ctaPrefix: 'Try Della-Criminal',
  },
  'immigration': {
    title: 'The detention call. In English or Spanish.',
    body: 'Della handles detention, removal, asylum, and family-petition intake — natively bilingual. Spanish on greeting, no translation lag.',
    ctaPrefix: 'Try Della-Immigration',
  },
};

export const VerticalPicker = () => (
  <section id="verticals" className="px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>PICK A PRACTICE AREA</Eyebrow>
    <Headline size={42} center maxWidth={680}>Della speaks your firm&rsquo;s language.</Headline>
    <div className="mt-7 max-w-[640px] mx-auto text-center">
      <Body size={16} center maxWidth={640}>
        Three intake flows, each tuned to the calls your practice actually gets at 11pm. Pick the one that fits — call the number, talk to Della, decide if she earns a place at your firm.
      </Body>
    </div>

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
      {verticalList.map((v) => {
        const copy = cardCopy[v.slug];
        const hasNumber = v.demo.phoneDisplay && v.demo.phoneDisplay !== 'TBD';
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

            {hasNumber && (
              <div className="mt-6 pt-5 border-t border-[var(--rule-soft)]">
                <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-1.5">
                  {copy.ctaPrefix} →
                </div>
                <a
                  href={`tel:${v.demo.phoneE164}`}
                  onClick={() => trackEvent(`demo_call_click_${v.slug}`)}
                  className="text-[20px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] no-underline"
                >
                  {v.demo.phoneDisplay}
                </a>
              </div>
            )}

            <a
              href={`/${v.slug}`}
              onClick={() => trackEvent('vertical_card_click', { slug: v.slug })}
              className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.14em] font-mono uppercase no-underline text-[var(--ink)] hover:text-[var(--stamp-red)] transition-colors"
            >
              Read more about the {v.shortName} flow
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
