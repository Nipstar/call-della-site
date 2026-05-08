import { Eyebrow, Headline, Body } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  featureBlock: NonNullable<Vertical['featureBlock']>;
};

export const FeatureBlock = ({ featureBlock }: Props) => (
  <section className="px-8 py-24 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
    <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 items-start">
      <div>
        {featureBlock.eyebrow && <Eyebrow>{featureBlock.eyebrow}</Eyebrow>}
        <Headline size={40} maxWidth={520}>{featureBlock.heading}</Headline>
        <div className="mt-7">
          <Body>{featureBlock.body}</Body>
        </div>
      </div>

      {featureBlock.roadmap && (
        <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[24px_28px] shadow-[5px_5px_0_var(--rule)] mt-3.5 relative">
          <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-deep)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.16em] font-mono -translate-y-full uppercase">
            Roadmap
          </div>
          <p className="text-[15.5px] text-[var(--ink)] font-serif leading-[1.6] m-0">
            {featureBlock.roadmap}
          </p>
        </div>
      )}
    </div>
  </section>
);
