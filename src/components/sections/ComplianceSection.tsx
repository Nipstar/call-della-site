import { Eyebrow, Headline } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  compliance: NonNullable<Vertical['compliance']>;
};

export const ComplianceSection = ({ compliance }: Props) => (
  <section className="px-8 py-24 max-w-[980px] mx-auto">
    {compliance.eyebrow && <Eyebrow center>{compliance.eyebrow}</Eyebrow>}
    <Headline size={36} center maxWidth={680}>{compliance.heading}</Headline>

    <div className="mt-12 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[28px_32px]">
      <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-4">
        Compliance · operating rules
      </div>
      <div className="h-[1px] bg-[var(--rule)] mb-5" />
      <ul className="m-0 p-0 list-none flex flex-col gap-3.5">
        {compliance.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 items-start">
            <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.1em] mt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </div>
            <span className="text-[14.5px] text-[var(--ink)] font-serif leading-[1.55]">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
