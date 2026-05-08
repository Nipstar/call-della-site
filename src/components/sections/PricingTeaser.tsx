import { Eyebrow, Headline } from '../Typography';

export const PricingTeaser = () => (
  <section id="pricing-teaser" className="px-8 py-20 max-w-[820px] mx-auto text-center">
    <Eyebrow center>PRICING</Eyebrow>
    <Headline size={36} center maxWidth={680}>
      Three plans. Month-to-month.{' '}
      <span className="italic text-[var(--ink-soft)]">No per-minute panic.</span>
    </Headline>

    <div className="mt-9">
      <a
        href="/pricing"
        className="inline-flex items-center gap-2.5 px-6 py-[14px] border-[1.5px] border-[var(--ink)] bg-transparent text-[var(--ink)] text-[13px] font-bold tracking-[0.14em] font-mono uppercase no-underline transition-all duration-150 hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        See pricing
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </section>
);
