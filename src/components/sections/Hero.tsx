"use client";

import { Eyebrow, Body } from '../Typography';
import { CTAButton } from '../CTAButton';
import { DossierMockup } from '../DossierMockup';
import { AudioPlayer } from '../AudioPlayer';
import { trackEvent } from '@/lib/analytics';
import type { Vertical } from '@/lib/verticals';

type HeroProps = {
  hero: Vertical['hero'];
  demo?: Vertical['demo'];
  slug?: Vertical['slug'];
  dossier?: Vertical['heroDossier'];
  showAudio?: boolean;
  showDossier?: boolean;
};

export const Hero = ({ hero, demo, slug, dossier, showAudio = true, showDossier = true }: HeroProps) => (
  <section className="px-8 pt-6 pb-20 max-w-[1180px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
      <div>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1
          className="text-[36px] md:text-[60px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0"
          dangerouslySetInnerHTML={{ __html: hero.headline }}
        />
        <div className="mt-7 max-w-[520px]">
          <Body size={18}>{hero.sub}</Body>
        </div>
        {hero.statLine && (
          <div className="mt-5 text-[12px] font-mono text-[var(--ink-soft)] tracking-[0.06em] uppercase border-t border-b border-[var(--rule-soft)] py-2.5">
            {hero.statLine}
          </div>
        )}
        <div className="mt-9 flex flex-wrap gap-4">
          <CTAButton primary large>{hero.ctaPrimary}</CTAButton>
          {hero.ctaSecondary && <CTAButton large>{hero.ctaSecondary}</CTAButton>}
        </div>
        {demo && demo.phoneDisplay !== 'TBD' && (
          <div className="mt-6 inline-flex flex-col gap-1 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] px-5 py-3">
            <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase">
              {demo.label || 'Try Della — call now'}
            </div>
            <a
              href={`tel:${demo.phoneE164}`}
              onClick={() => slug && trackEvent(`demo_call_click_${slug}`)}
              className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] no-underline"
            >
              {demo.phoneDisplay}
            </a>
          </div>
        )}
        {showAudio && (
          <div className="mt-8">
            <AudioPlayer
              label={dossier ? `EVIDENCE TAPE · ${dossier.intakeId}` : undefined}
            />
          </div>
        )}
      </div>

      {showDossier && <DossierMockup variant="hero" data={dossier} />}
    </div>
  </section>
);
