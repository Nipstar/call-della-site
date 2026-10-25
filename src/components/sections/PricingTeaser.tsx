import { Eyebrow, Headline, Body } from '../Typography';
import { PLANS, formatPrice, OVERAGE_PER_MINUTE } from '@/lib/plans';

const planLine = PLANS.map((p) => (p.minutes ? `${p.name} ${formatPrice(p)} a month for ${p.minutes} minutes` : `${p.name} priced to your volume`)).join(', ');

export const PricingTeaser = () => (
  <section id="pricing-teaser" className="px-4 md:px-8 py-20 max-w-[820px] mx-auto text-center">
    <Eyebrow center>PRICING</Eyebrow>
    <Headline size={36} center maxWidth={680}>
      How much does Call Della cost?
    </Headline>
    <div className="mt-6">
      <Body size={16} center maxWidth={640}>
        Three plans, all month-to-month with no setup fee: {planLine}. Extra minutes are ${OVERAGE_PER_MINUTE.toFixed(2)} each.
      </Body>
    </div>

    <div className="mt-9">
      <a
        href="/pricing"
        className="inline-flex items-center gap-2.5 px-6 py-[14px] min-h-[48px] border-[1.5px] border-[var(--ink)] bg-transparent text-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase no-underline transition-all duration-150 hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        See Call Della pricing
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </section>
);
