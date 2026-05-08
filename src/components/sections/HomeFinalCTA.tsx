import { CTAButton } from '../CTAButton';

export const HomeFinalCTA = () => (
  <section className="px-8 py-20 bg-[var(--ink)] relative">
    <div className="max-w-[820px] mx-auto text-center">
      <h2 className="text-[44px] font-semibold text-[var(--paper)] font-serif tracking-[-0.025em] leading-[1.1] m-0">
        Try Della before you trust her.
      </h2>
      <p className="text-[17px] text-[var(--paper)] opacity-70 font-serif italic mt-[18px] leading-[1.5]">
        Pick a vertical. Call the number. Talk to her like you&rsquo;d talk to your own intake specialist.
        <br />
        If she earns it, book a discovery call and we&rsquo;ll have you live in a week.
      </p>
      <div className="mt-9 flex justify-center">
        <CTAButton dark large>Book a discovery call</CTAButton>
      </div>
    </div>
  </section>
);
