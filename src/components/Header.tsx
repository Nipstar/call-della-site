"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";
import { verticalList } from "@/lib/verticals";

const navLinkClass =
  "hover:text-[var(--stamp-red)] transition-colors no-underline";

export const Header = () => {
  const [verticalsOpen, setVerticalsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVerticalsOpen, setMobileVerticalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVerticalsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVerticalsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-30 bg-[var(--bg)]/90 border-b border-[var(--rule)] px-6 md:px-8 py-3.5 flex justify-between items-center backdrop-blur-md">
      <Link href="/" className="block no-underline">
        <div className="text-[20px] md:text-[22px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">
          call della
        </div>
        <div className="text-[8.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-[3px] uppercase">
          EST. 2026 · LEGAL INTAKE
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-9 text-[12px] font-bold text-[var(--ink)] tracking-[0.14em] font-mono uppercase">
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setVerticalsOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={verticalsOpen}
            className="flex items-center gap-1.5 bg-transparent border-none p-0 m-0 font-bold tracking-[0.14em] font-mono uppercase text-[12px] text-[var(--ink)] cursor-pointer hover:text-[var(--stamp-red)] transition-colors"
          >
            Verticals
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{
                transform: verticalsOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.15s",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {verticalsOpen && (
            <div role="menu" className="absolute top-full right-0 mt-3 w-[260px] bg-[var(--paper)] border-[1.5px] border-[var(--rule)] shadow-[5px_5px_0_var(--rule)] z-40">
              {verticalList.map((v) => (
                <a
                  key={v.slug}
                  role="menuitem"
                  href={`/${v.slug}`}
                  className="block px-5 py-3.5 text-[12px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline border-b border-[var(--rule-soft)] last:border-b-0 hover:bg-[var(--paper-edge)]"
                  onClick={() => setVerticalsOpen(false)}
                >
                  {v.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="/how-it-works" className={navLinkClass}>How it Works</a>
        <a href="/pricing" className={navLinkClass}>Pricing</a>
        <a href="/security" className={navLinkClass}>Security</a>
        <CTAButton primary>Book a demo</CTAButton>
        <ThemeToggle />
      </nav>

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-[1.5px] border-[var(--ink)] bg-transparent cursor-pointer gap-[5px]"
      >
        <span className="block w-5 h-[1.5px] bg-[var(--ink)]" aria-hidden="true" />
        <span className="block w-5 h-[1.5px] bg-[var(--ink)]" aria-hidden="true" />
        <span className="block w-5 h-[1.5px] bg-[var(--ink)]" aria-hidden="true" />
      </button>

      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-[var(--bg)] flex flex-col md:hidden"
        >
          <div className="flex justify-between items-center px-6 py-3.5 border-b border-[var(--rule)]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block no-underline">
              <div className="text-[20px] font-semibold text-[var(--ink)] font-serif tracking-tight leading-none">
                call della
              </div>
              <div className="text-[8.5px] font-bold text-[var(--ink-soft)] tracking-[0.22em] font-mono mt-[3px] uppercase">
                EST. 2026 · LEGAL INTAKE
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 border-[1.5px] border-[var(--ink)] bg-transparent cursor-pointer flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto px-6 py-8 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setMobileVerticalsOpen((v) => !v)}
              aria-expanded={mobileVerticalsOpen}
              className="flex items-center justify-between text-left bg-transparent border-none p-0 py-4 border-b border-[var(--rule-soft)] cursor-pointer text-[16px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)]"
            >
              <span>Verticals</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{
                  transform: mobileVerticalsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileVerticalsOpen && (
              <div className="flex flex-col bg-[var(--paper-edge)] border-x border-[var(--rule-soft)]">
                {verticalList.map((v) => (
                  <a
                    key={v.slug}
                    href={`/${v.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3.5 text-[14px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline border-b border-[var(--rule-soft)] last:border-b-0"
                  >
                    {v.name}
                  </a>
                ))}
              </div>
            )}
            <a href="/how-it-works" onClick={() => setMobileOpen(false)} className="block py-4 border-b border-[var(--rule-soft)] text-[16px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline">How it Works</a>
            <a href="/pricing" onClick={() => setMobileOpen(false)} className="block py-4 border-b border-[var(--rule-soft)] text-[16px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline">Pricing</a>
            <a href="/security" onClick={() => setMobileOpen(false)} className="block py-4 border-b border-[var(--rule-soft)] text-[16px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline">Security</a>
            <a href="/about" onClick={() => setMobileOpen(false)} className="block py-4 border-b border-[var(--rule-soft)] text-[16px] font-bold tracking-[0.14em] font-mono uppercase text-[var(--ink)] no-underline">About</a>

            <div className="mt-8">
              <CTAButton primary large>Book a demo</CTAButton>
            </div>
            <div className="mt-6">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
