import { Eyebrow, Headline, Body } from '../Typography';

const steps = [
  {
    n: '01',
    t: 'She answers in your firm’s name',
    b: 'Della is white-labelled. Callers think they’re talking to your receptionist — because they are. She introduces herself by name and says the office is closed but she can take their details.',
  },
  {
    n: '02',
    t: 'She qualifies and captures',
    b: 'Vertical-tuned conversation flows pull every detail your attorneys need. Jurisdiction, facts, urgency, callback window. She reassures without committing the firm to anything.',
  },
  {
    n: '03',
    t: 'She files the case',
    b: 'Every call lands in your Della portal as a structured record — searchable, sortable, scored for urgency. Recording, transcript, AI summary, recommended action.',
  },
  {
    n: '04',
    t: 'Your team picks up where she left off',
    b: 'Your attorneys open their morning dashboard and see exactly which calls came in, ranked by how fast they need to act. Triage takes minutes, not hours.',
  },
];

export const HowDellaWorks = () => (
  <section id="how-it-works" className="px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>HOW DELLA WORKS</Eyebrow>
    <Headline size={42} center maxWidth={680}>
      Four things happen on every call.
    </Headline>

    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[18px]">
      {steps.map((s) => (
        <div
          key={s.n}
          className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[26px_28px] relative mt-3.5"
        >
          <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono -translate-y-full uppercase">
            {s.n} · {s.t}
          </div>
          <Body size={14}>{s.b}</Body>
        </div>
      ))}
    </div>

    <p className="mt-9 text-center text-[14px] text-[var(--ink-soft)] font-serif italic m-0">
      Implementation typically takes a week. Month-to-month, no long contract.
    </p>
  </section>
);
