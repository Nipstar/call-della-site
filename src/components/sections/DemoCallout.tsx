"use client";

import { Eyebrow, Headline, Body } from '../Typography';
import { CTAButton } from '../CTAButton';
import { openBookingModal } from '../BookingModal';
import { trackEvent } from '@/lib/analytics';
import type { Vertical } from '@/lib/verticals';

type Props = {
  eyebrow?: string;
  heading: string;
  sub?: string;
  slug?: Vertical['slug'];
};

export const DemoCallout = ({ eyebrow, heading, sub, slug }: Props) => {
  const onBookClick = () => {
    trackEvent('book_demo_click_vertical', slug ? { slug } : undefined);
    openBookingModal();
  };

  return (
    <section className="px-4 md:px-8 py-20 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
      <div className="max-w-[820px] mx-auto text-center">
        {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
        <Headline size={36} center maxWidth={680}>{heading}</Headline>
        {sub && (
          <div className="mt-5">
            <Body size={16} center maxWidth={620}>{sub}</Body>
          </div>
        )}
        <div className="mt-9 flex justify-center">
          <CTAButton primary large onClick={onBookClick}>Book a demo</CTAButton>
        </div>
      </div>
    </section>
  );
};
