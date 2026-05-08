"use client";

import { Eyebrow, Headline, Body } from '../Typography';
import { CTAButton } from '../CTAButton';
import { openBookingModal } from '../BookingModal';
import { trackEvent } from '@/lib/analytics';
import type { Vertical } from '@/lib/verticals';

type Props = {
  demo: Vertical['demo'];
  eyebrow?: string;
  heading: string;
  sub?: string;
  slug?: Vertical['slug'];
};

export const DemoCallout = ({ demo, eyebrow, heading, sub, slug }: Props) => {
  const hasNumber = demo.phoneDisplay && demo.phoneDisplay !== 'TBD';

  const onBookClick = () => {
    trackEvent('book_demo_click_vertical', slug ? { slug } : undefined);
    openBookingModal();
  };

  const onPhoneClick = () => {
    if (slug) trackEvent(`demo_call_click_${slug}`);
  };

  return (
    <section className="px-8 py-20 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
      <div className="max-w-[820px] mx-auto text-center">
        {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
        <Headline size={36} center maxWidth={680}>{heading}</Headline>
        {sub && (
          <div className="mt-5">
            <Body size={16} center maxWidth={620}>{sub}</Body>
          </div>
        )}

        {hasNumber && (
          <div className="mt-9 inline-flex flex-col gap-2 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] px-7 py-5 shadow-[4px_4px_0_var(--rule)]">
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase">
              {demo.label || 'Try Della — call now'}
            </div>
            <a
              href={`tel:${demo.phoneE164}`}
              onClick={onPhoneClick}
              className="text-[28px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] no-underline"
            >
              {demo.phoneDisplay}
            </a>
          </div>
        )}

        <div className="mt-9 flex justify-center">
          <CTAButton primary large onClick={onBookClick}>Book a discovery call</CTAButton>
        </div>
      </div>
    </section>
  );
};
