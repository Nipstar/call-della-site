import { Eyebrow, Headline } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  socialProof: Vertical['socialProof'];
  eyebrow?: string;
  heading?: string;
};

// No testimonials until real firms give written approval (spec hard rule).
// Flip this to true only when every quote in verticals.ts is real and approved.
const TESTIMONIALS_APPROVED = false;

export const SocialProof = ({ socialProof, eyebrow, heading }: Props) => {
  if (!TESTIMONIALS_APPROVED || !socialProof.length) return null;

  return (
    <section className="px-4 md:px-8 py-24 max-w-[1180px] mx-auto">
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      {heading && <Headline size={38} center maxWidth={620}>{heading}</Headline>}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {socialProof.map((p) => (
          <div
            key={p.attribution}
            className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[26px_28px]"
          >
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-3">
              {p.firmName}
            </div>
            <div className="h-[1px] bg-[var(--rule-soft)] mb-4" />
            <p className="text-[17px] text-[var(--ink)] font-serif italic leading-[1.55] m-0">
              &ldquo;{p.quote}&rdquo;
            </p>
            <div className="mt-4 text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] uppercase">
              {p.attribution}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
