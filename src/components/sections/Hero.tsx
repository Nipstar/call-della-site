import { Eyebrow } from '../Typography';
import { CTAButton } from '../CTAButton';
import { DossierMockup } from '../DossierMockup';
import type { Vertical } from '@/lib/verticals';

type HeroProps = {
  hero: Vertical['hero'];
  dossier?: Vertical['heroDossier'];
  showDossier?: boolean;
};

export const Hero = ({ hero, dossier, showDossier = true }: HeroProps) => (
  <section className="px-4 md:px-8 pt-6 pb-20 max-w-[1180px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
      <div>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="text-[36px] md:text-[56px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0">
          {hero.headline}
        </h1>
        <p
          className="answer-block mt-7 max-w-[560px] text-[18px] text-[var(--ink)] font-serif leading-[1.65] m-0 [&_a]:underline [&_a]:underline-offset-2"
          dangerouslySetInnerHTML={{ __html: hero.answer }}
        />
        {hero.statLine && (
          <div className="mt-5 text-[12px] font-mono text-[var(--ink-soft)] tracking-[0.06em] uppercase border-t border-b border-[var(--rule-soft)] py-2.5">
            {hero.statLine}
          </div>
        )}
        <div className="mt-9 flex flex-wrap gap-4">
          <CTAButton primary large>{hero.ctaPrimary}</CTAButton>
        </div>
      </div>

      {showDossier && <DossierMockup variant="hero" data={dossier} />}
    </div>
  </section>
);
