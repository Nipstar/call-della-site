"use client";

import { useEffect, useState } from "react";

const Icon = ({ n, s = 16, c = "currentColor" }: { n: string, s?: number, c?: string }) => {
  const d: Record<string, React.ReactNode> = {
    sun:<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon:<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d[n]}</svg>;
};

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className="w-[34px] h-[34px] bg-[var(--paper)] border-[1.5px] border-[var(--rule)] cursor-pointer flex items-center justify-center">
      <Icon n={dark ? "sun" : "moon"} s={14} c="var(--ink)" />
    </button>
  );
};
