import { Eyebrow, Headline, Body } from '../Typography';
import type { Vertical } from '@/lib/verticals';

type Props = {
  handles: Vertical['handles'];
  eyebrow?: string;
  heading: string;
};

export const DellaHandles = ({ handles, eyebrow, heading }: Props) => {
  if (!handles.length) return null;

  return (
    <section className="px-8 py-24 max-w-[1180px] mx-auto">
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      <Headline size={38} center maxWidth={760}>{heading}</Headline>

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {handles.map((h, i) => (
          <div
            key={h.title}
            className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[26px_28px] relative mt-3.5"
          >
            <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono -translate-y-full uppercase">
              {String(i + 1).padStart(2, '0')} · {h.title}
            </div>
            <Body size={14}>{h.description}</Body>

            {h.captures.length > 0 && (
              <>
                <div className="h-[1px] bg-[var(--rule-soft)] my-4" />
                <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase mb-2">
                  Captures
                </div>
                <ul className="m-0 pl-4 flex flex-col gap-1.5">
                  {h.captures.map((c) => (
                    <li
                      key={c}
                      className="text-[13px] text-[var(--ink)] font-serif leading-[1.5]"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
