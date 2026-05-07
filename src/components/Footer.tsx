export const Footer = () => (
  <footer className="px-8 pt-[60px] pb-8 border-t border-[var(--rule)]">
    <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
      <div>
        <div className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">call della</div>
        <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-1.5 uppercase">EST. 2026 · LEGAL INTAKE</div>
        <p className="text-[13px] text-[var(--ink-soft)] font-serif italic mt-3.5 max-w-[300px]">An after-hours intake specialist for personal injury law firms.</p>
      </div>
      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">PRODUCT</div>
        <div className="flex flex-col gap-2">
          {["Pricing", "How it works", "FAQ", "Hire Della"].map(l => (
            <a key={l} href="#" className="text-[13.5px] text-[var(--ink)] font-serif no-underline">{l}</a>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">LEGAL</div>
        <div className="flex flex-col gap-2">
          {["Terms of Service", "Privacy Policy", "Security", "Data Processing"].map(l => (
            <a key={l} href="#" className="text-[13.5px] text-[var(--ink)] font-serif no-underline">{l}</a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-[1180px] mx-auto mt-10 pt-5 border-t border-[var(--rule-soft)] text-center text-[10px] text-[var(--ink-soft)] font-mono tracking-[0.18em]">
      © 2026 CALL DELLA · ALL RIGHTS RESERVED
    </div>
  </footer>
);
