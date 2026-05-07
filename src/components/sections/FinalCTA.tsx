import React from 'react';
import { CTAButton } from '../CTAButton';

export const FinalCTA = () => (
  <section className="px-8 py-20 bg-[var(--ink)] relative">
    <div className="max-w-[780px] mx-auto text-center">
      <h2 className="text-[44px] font-semibold text-[var(--paper)] font-serif tracking-[-0.025em] leading-[1.1] m-0">
        Della is ready for tonight's calls.
      </h2>
      <p className="text-[17px] text-[var(--paper)] opacity-70 font-serif italic mt-[18px] leading-[1.5]">
        Twenty-minute discovery call. No pitch deck.<br/>
        We'll walk you through the dossier, let you hear Della work, and answer your questions.
      </p>
      <div className="mt-9 flex justify-center">
        <CTAButton dark large>Book a Discovery Call</CTAButton>
      </div>
    </div>
  </section>
);
