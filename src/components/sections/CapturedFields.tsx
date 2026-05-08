import { Eyebrow, Headline } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  capturedFields: Vertical['capturedFields'];
  eyebrow?: string;
  heading: string;
};

export const CapturedFields = ({ capturedFields, eyebrow, heading }: Props) => {
  if (!capturedFields.length) return null;

  return (
    <section className="px-8 py-24 max-w-[980px] mx-auto">
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      <Headline size={38} center maxWidth={680}>{heading}</Headline>

      <div className="mt-12 bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[28px_32px]">
        <div className="text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-4">
          Intake fields · captured every call
        </div>
        <div className="h-[1px] bg-[var(--rule)] mb-5" />
        <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
          {capturedFields.map((f) => (
            <li key={f} className="flex gap-2.5 items-start">
              <div className="w-3.5 h-3.5 border border-[var(--stamp-green)] flex items-center justify-center mt-1 shrink-0">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--stamp-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 12 4 9" />
                </svg>
              </div>
              <span className="text-[14px] text-[var(--ink)] font-serif leading-[1.5]">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
