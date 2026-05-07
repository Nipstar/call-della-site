import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => (
  <header className="sticky top-0 z-30 bg-[var(--bg)]/90 border-b border-[var(--rule)] px-8 py-3.5 flex justify-between items-center backdrop-blur-md">
    <div>
      <div className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">call della</div>
      <div className="text-[8.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-[3px] uppercase">EST. 2026 · LEGAL INTAKE</div>
    </div>
    <nav className="hidden md:flex items-center gap-9 text-[12px] font-bold text-[var(--ink)] tracking-[0.14em] font-mono uppercase">
      <a href="/intake-playbook" className="hover:text-[var(--stamp-red)] transition-colors no-underline">Playbook</a>
      <a href="/#how-it-works" className="hover:text-[var(--stamp-red)] transition-colors no-underline">How it Works</a>
      <a href="/#pricing" className="hover:text-[var(--stamp-red)] transition-colors no-underline">Pricing</a>
      <a href="/#faq" className="hover:text-[var(--stamp-red)] transition-colors no-underline">FAQ</a>
      <CTAButton primary>Hire Della</CTAButton>
      <ThemeToggle />
    </nav>
  </header>
);
