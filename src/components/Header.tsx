import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => (
  <header className="sticky top-0 z-30 bg-[var(--bg)]/90 border-b border-[var(--rule)] px-8 py-3.5 flex justify-between items-center backdrop-blur-md">
    <div>
      <div className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">call della</div>
      <div className="text-[8.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-[3px] uppercase">EST. 2026 · LEGAL INTAKE</div>
    </div>
    <nav className="flex items-center gap-6">
      {["Pricing", "How it Works", "FAQ"].map(l => (
        <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="text-xs text-[var(--ink-soft)] font-mono uppercase tracking-[0.1em] no-underline font-semibold">
          {l}
        </a>
      ))}
      <CTAButton primary>Hire Della</CTAButton>
      <ThemeToggle />
    </nav>
  </header>
);
