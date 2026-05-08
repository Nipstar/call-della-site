const pillars = [
  { label: 'Bilingual', body: 'English and Spanish, native voices, no translation layer.' },
  { label: 'Recorded', body: 'Every call captured, transcribed, stored encrypted. Retention configurable per firm — defaulted to your matter type.' },
  { label: 'Attorney-controlled', body: 'No legal advice, ever. Della is prompted to refuse.' },
  { label: 'State-aware', body: 'Recording disclosure on greeting, configured per state.' },
  { label: 'BAA-ready', body: 'For firms handling matters with PHI exposure.' },
  { label: 'Yours, not ours', body: 'Your firm’s data, your firm’s brand, your firm’s retention rules.' },
];

export const SecurityStrip = () => (
  <section className="px-8 py-20 bg-[var(--paper-edge)] border-y border-[var(--rule)]">
    <div className="max-w-[1180px] mx-auto">
      <div className="text-center text-[11px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono uppercase mb-[14px]">
        Trust strip
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[14px]">
        {pillars.map((p) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  </section>
);
