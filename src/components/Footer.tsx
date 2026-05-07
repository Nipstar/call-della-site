export const Footer = () => (
  <footer className="px-8 pt-[60px] pb-8 border-t border-[var(--rule)]">
    <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
      <div>
        <div className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">call della</div>
        <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-1.5 uppercase">EST. 2026 · LEGAL INTAKE</div>
        <p className="text-[13px] text-[var(--ink-soft)] font-serif italic mt-3.5 max-w-[300px]">An after-hours intake specialist for personal injury law firms.</p>
      </div>
      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">PRODUCT</div>
        <div className="flex flex-col gap-2">
          <a href="/#how-it-works" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">How it works</a>
          <a href="/#pricing" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Pricing</a>
          <a href="/#faq" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">FAQ</a>
        </div>
      </div>
      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">RESOURCES</div>
        <div className="flex flex-col gap-2">
          <a href="/intake-playbook" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Intake Playbook</a>
          <a href="/operations" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Operations</a>
          <a href="/compliance" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Compliance</a>
          <a href="/states" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">State Protocols</a>
          <a href="/case-types" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Practice Areas</a>
        </div>
      </div>
      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">LEGAL</div>
        <div className="flex flex-col gap-2">
          <a href="/terms" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Terms of Service</a>
          <a href="/privacy" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Privacy Policy</a>
          <a href="/security" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Security</a>
        </div>
      </div>
    </div>
    <div className="max-w-[1180px] mx-auto mt-10 pt-5 border-t border-[var(--rule-soft)] text-center text-[10px] text-[var(--ink-soft)] font-mono tracking-[0.18em]">
      © 2026 CALL DELLA · ALL RIGHTS RESERVED
    </div>
  </footer>
);
