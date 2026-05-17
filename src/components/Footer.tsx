import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export const Footer = () => (
  <footer className="px-8 pt-[60px] pb-8 border-t border-[var(--rule)]">
    <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
      <div className="col-span-2 md:col-span-1">
        <Link href="/" className="block no-underline">
          <div className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">call della</div>
          <div className="text-[9.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-1.5 uppercase">EST. 2026 · LEGAL INTAKE</div>
        </Link>
        <p className="text-[13px] text-[var(--ink-soft)] font-serif italic mt-3.5 max-w-[300px]">An after-hours intake specialist for personal injury, criminal defense, and immigration law firms.</p>
      </div>

      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">PRODUCT</div>
        <div className="flex flex-col gap-2">
          <a href="/how-it-works" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">How it works</a>
          <a href="/pricing" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Pricing</a>
          <a href="/security" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Security</a>
        </div>
      </div>

      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">VERTICALS</div>
        <div className="flex flex-col gap-2">
          <a href="/personal-injury" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Personal Injury</a>
          <a href="/criminal-defense" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Criminal Defense</a>
          <a href="/immigration" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Immigration</a>
        </div>
      </div>

      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">COMPANY</div>
        <div className="flex flex-col gap-2">
          <a href="/about" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">About</a>
          <a href="/contact" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Contact</a>
          <a href="/intake-playbook" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Intake Playbook</a>
          <a href="/operations" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Operations</a>
          <a href="/compliance" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Compliance</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">{CONTACT_EMAIL}</a>
        </div>
      </div>

      <div>
        <div className="text-[10px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-3.5">LEGAL</div>
        <div className="flex flex-col gap-2">
          <a href="/terms" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Terms of Service</a>
          <a href="/privacy" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">Privacy Policy</a>
          <a href="/security" className="text-[13.5px] text-[var(--ink)] font-serif no-underline hover:underline decoration-[var(--rule-soft)] underline-offset-4">DPA & Security</a>
        </div>
      </div>
    </div>
    <div className="max-w-[1180px] mx-auto mt-10 pt-5 border-t border-[var(--rule-soft)] text-center text-[10px] text-[var(--ink-soft)] font-mono tracking-[0.18em]">
      © 2026 CALL DELLA · ALL RIGHTS RESERVED
    </div>
  </footer>
);
