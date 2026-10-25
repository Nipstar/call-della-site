import { CTAButton } from '../CTAButton';

export const HomeFinalCTA = () => (
  <section className="px-8 py-20 bg-[var(--ink)] relative">
    <div className="max-w-[820px] mx-auto text-center">
      <h2 className="text-[44px] font-semibold text-[var(--paper)] font-serif tracking-[-0.025em] leading-[1.1] m-0">
        Hear Della before you trust her.
      </h2>
      <p className="text-[17px] text-[var(--paper)] opacity-70 font-serif italic mt-[18px] leading-[1.5]">
        Book a 30-minute demo. We run a live intake call for your practice area while you listen, then walk you through the dossier she files.
      </p>
      <div className="mt-9 flex justify-center">
        <CTAButton dark large>Book a demo</CTAButton>
      </div>
    </div>
  </section>
);
