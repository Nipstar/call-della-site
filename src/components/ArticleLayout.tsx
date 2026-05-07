import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PaperTexture } from './PaperTexture';
import { Eyebrow } from './Typography';

export const ArticleLayout = ({
  eyebrow,
  title,
  tldr,
  children,
  date,
  author
}: {
  eyebrow: string;
  title: string;
  tldr: React.ReactNode;
  children: React.ReactNode;
  date: string;
  author: string;
}) => (
  <div className="relative min-h-screen flex flex-col">
    <PaperTexture />
    <div className="relative z-20 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[36px] md:text-[48px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] mt-4 mb-6">
          {title}
        </h1>
        <div className="flex gap-4 items-center border-y border-[var(--rule-soft)] py-3 mb-10 text-[11px] font-mono text-[var(--ink-soft)] uppercase tracking-[0.1em]">
          <span>BY {author}</span>
          <span>·</span>
          <span>{date}</span>
        </div>
        
        {/* TL;DR Box */}
        <div className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8 mb-16 shadow-[6px_6px_0_var(--rule)] relative">
           <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold tracking-[0.16em] font-mono uppercase -translate-y-full">
            TL;DR · EXECUTIVE SUMMARY
          </div>
          <div className="text-[14.5px] text-[var(--ink)] font-serif italic leading-[1.6]">
            {tldr}
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-p:font-serif prose-p:text-[17px] prose-p:leading-[1.6] prose-p:text-[var(--ink)] prose-headings:font-serif prose-headings:text-[var(--ink)] prose-h2:text-[28px] prose-h2:font-semibold prose-h2:tracking-[-0.02em] prose-h2:mt-14 prose-h2:mb-5 prose-h3:text-[20px] prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-li:font-serif prose-li:text-[17px] prose-a:text-[var(--ink)] prose-a:underline prose-a:decoration-[var(--rule-soft)] prose-a:underline-offset-4 hover:prose-a:decoration-[var(--ink)] prose-strong:font-semibold max-w-none">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  </div>
);
