import { Eyebrow, Headline } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  industryStats: Vertical['industryStats'];
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

// Every stat needs a named source, a year and a URL (spec hard rule). Pass `url` alongside `source` in verticals.ts.
export const IndustryStats = ({ industryStats, eyebrow, heading, intro }: Props) => {
  if (!industryStats.length) return null;

  return (
    <section className="px-4 md:px-8 py-24 max-w-[1180px] mx-auto">
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      {heading && <Headline size={42} center maxWidth={780}>{heading}</Headline>}

      {intro && (
        <p className="mt-8 max-w-[620px] mx-auto text-center text-[16px] text-[var(--ink)] font-serif leading-[1.65]">
          {intro}
        </p>
      )}

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {industryStats.map((s) => (
          <div
            key={s.stat}
            className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[24px_26px] flex flex-col gap-2 relative"
          >
            <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.16em] font-mono uppercase">
              Industry data
            </div>
            <div className="h-[1px] bg-[var(--rule-soft)] my-1.5" />
            <div className="text-[17px] text-[var(--ink)] font-serif leading-[1.4] tracking-[-0.01em]">
              {s.stat}
            </div>
            <div className="mt-3 text-[10px] text-[var(--ink-faint)] font-mono tracking-[0.12em] italic uppercase">
              Source:{' '}
              {(s as { url?: string }).url ? (
                <a href={(s as { url?: string }).url} className="underline underline-offset-4">{s.source}</a>
              ) : (
                s.source
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
