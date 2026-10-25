// Only claims Call Della can back today. See /security for the detail.
const pillars = [
  { label: 'Encrypted', body: 'Call data is encrypted in transit and at rest.' },
  { label: 'Recorded', body: 'Every call is recorded and transcribed, with retention set per firm.' },
  { label: 'Firm-owned', body: 'Your firm owns its recordings, transcripts and dossiers.' },
  { label: 'No training', body: 'Your callers’ data is not used to train AI models.' },
  { label: 'State-aware', body: 'The recording disclosure is set for your state.' },
  { label: 'No legal advice', body: 'Della takes intake. Legal questions go to your attorneys.' },
];

export const SecurityStrip = () => (
  <section className="px-4 md:px-8 py-20 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
    <div className="max-w-[1180px] mx-auto">
      <div className="text-center text-[11px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono uppercase mb-[14px]">
        How Della handles your data
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px] list-none p-0 m-0">
        {pillars.map((p) => (
          <li
            key={p.label}
            className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-[18px_18px] flex flex-col gap-2"
          >
            <div className="text-[11px] font-bold text-[var(--ink)] tracking-[0.14em] font-mono uppercase">
              {p.label}
            </div>
            <div className="h-[1px] bg-[var(--rule-soft)]" />
            <div className="text-[12.5px] text-[var(--ink-soft)] font-serif italic leading-[1.45]">
              {p.body}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-[13px] font-serif m-0">
        <a href="/security" className="text-[var(--ink)] underline decoration-[var(--rule-soft)] underline-offset-4">Read how Call Della handles legal intake confidentiality</a>
      </p>
    </div>
  </section>
);
