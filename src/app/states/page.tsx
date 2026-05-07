import React from 'react';
import { stateData } from '@/data/states';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Eyebrow, Headline } from '@/components/Typography';

export default function StatesIndex() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
          <Eyebrow>LOCATION HUB</Eyebrow>
          <Headline size={48} maxWidth={800}>State-Specific Intake Protocols</Headline>
          
          <div className="text-[17px] text-[var(--ink)] font-serif leading-[1.6] mt-6 mb-16">
            <p className="mb-4">
              Personal injury law is fiercely local. An intake flow built for California will fail in Texas. 
            </p>
            <p>
              Call Della maintains highly customized jurisdictional protocols. Select your state below to see how Della handles local statutes of limitations, comparative negligence rules, and bar association compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stateData.map((state, i) => (
              <a 
                key={i} 
                href={`/states/${state.slug}`}
                className="block bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 hover:shadow-[6px_6px_0_var(--rule)] transition-all duration-200 group no-underline"
              >
                <h2 className="text-[20px] font-semibold text-[var(--ink)] font-serif tracking-[-0.01em] mb-2 group-hover:underline decoration-[var(--rule-soft)] underline-offset-4 m-0">
                  {state.name}
                </h2>
                <div className="text-[11px] font-mono text-[var(--ink-soft)] uppercase tracking-[0.1em]">
                  View Protocol →
                </div>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
