import { Eyebrow, Headline, Body } from '../Typography';

const steps = [
  {
    n: '01',
    t: 'She answers in your firm’s name',
    b: 'Della picks up on your forwarded line, gives her name and your firm’s name, and explains that the office is closed but she can take the details. She never claims to be human, and if a caller asks, she says she is an AI intake specialist.',
  },
  {
    n: '02',
    t: 'She qualifies and captures',
    b: 'Della runs the intake questions for your practice area: what happened, when and where, who is calling, urgency and the best callback time. She reassures the caller without committing the firm, and she never gives legal advice.',
  },
  {
    n: '03',
    t: 'She files the dossier',
    b: 'Every call lands in the Call Della dashboard as a dossier: a summary, an urgency score, the recording and the transcript. Urgent calls also go by email to the attorney on call.',
  },
  {
    n: '04',
    t: 'Your team picks up at 7am',
    b: 'The morning brief reaches your team by 7am in your time zone, with overnight calls ranked by how fast someone needs to call back. Your intake team starts the day with a worklist instead of a voicemail box.',
  },
];

export const HowDellaWorks = () => (
  <section id="how-it-works" className="px-4 md:px-8 py-24 max-w-[1180px] mx-auto">
    <Eyebrow center>HOW DELLA WORKS</Eyebrow>
    <Headline size={42} center maxWidth={680}>
      What happens on every after-hours call?
    </Headline>

    <ol className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[18px] list-none p-0">
      {steps.map((s) => (
        <li
          key={s.n}
          className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[26px_28px] relative mt-3.5"
        >
          <h3 className="absolute top-[-1px] left-[22px] m-0 bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold text-[var(--ink)] tracking-[0.16em] font-mono -translate-y-full uppercase">
            {s.n} · {s.t}
          </h3>
          <Body size={14}>{s.b}</Body>
        </li>
      ))}
    </ol>

    <p className="mt-9 text-center text-[14px] text-[var(--ink-soft)] font-serif italic m-0">
      Month-to-month, no setup fee. <a href="/how-it-works" className="underline decoration-[var(--rule-soft)] underline-offset-4">See how legal intake automation works, step by step</a>.
    </p>
  </section>
);
