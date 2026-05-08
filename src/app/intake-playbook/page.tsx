import type { Metadata } from 'next';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Eyebrow, Headline } from '@/components/Typography';

export const metadata: Metadata = {
  title: 'Personal Injury Intake Playbook',
  description:
    'How to write a PI intake script, what to capture on a PI intake form, and the red flags that should kill a case at intake. Practitioner guide for PI firms.',
  keywords: [
    'PI intake playbook',
    'personal injury intake script',
    'PI intake form',
    'intake red flags',
  ],
  alternates: { canonical: '/intake-playbook' },
  openGraph: {
    title: 'PI Intake Playbook | Call Della',
    description: 'PI intake scripts, forms, and red flags for personal injury firms.',
    type: 'website',
    url: 'https://calldella.com/intake-playbook',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Intake Playbook' }],
  },
};

export default function PillarAIndex() {
  const posts = [
    {
      title: "What exactly should be on a personal injury intake form?",
      slug: "what-should-be-on-a-pi-intake-form",
      tldr: "A PI intake form shouldn't be a generic questionnaire. It is a triage instrument designed to establish three things instantly: liability, damages, and viable recovery source."
    },
    {
      title: "How to write a PI intake script (that doesn't sound like an interrogation)",
      slug: "how-to-write-pi-intake-script",
      tldr: "A great intake script balances empathy with aggressive fact-finding. We outline the four-stage \"E.F.F.E.\" framework for intake scripts: Empathy, Facts, Fault, Evidence."
    },
    {
      title: "Intake red flags: When to politely decline a PI case",
      slug: "intake-red-flags-declining-cases",
      tldr: "Accepting a bad case is exponentially more expensive than missing a good one. Look for the \"Three T's\": Timeline gaps, Treatment refusal, and \"The Last Lawyer\" syndrome."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
          <Eyebrow>PILLAR A · CORE GUIDE</Eyebrow>
          <Headline as="h1" size={48} maxWidth={800}>The PI Intake Playbook</Headline>
          
          <div className="text-[17px] text-[var(--ink)] font-serif leading-[1.6] mt-6 mb-16">
            <p className="mb-4">
              The definitive guide to running personal injury intake. Most firms lose cases not because their attorneys are bad, but because their intake is slow, generic, or lacks legal precision. 
            </p>
            <p>
              This playbook breaks down the exact operational scripts, checklists, and red-flag protocols used by the highest-converting PI firms in the country.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <a 
                key={i} 
                href={`/intake-playbook/${post.slug}`}
                className="block bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8 hover:shadow-[6px_6px_0_var(--rule)] transition-all duration-200 group no-underline"
              >
                <h2 className="text-[24px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] mb-3 group-hover:underline decoration-[var(--rule-soft)] underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-[14.5px] text-[var(--ink-soft)] font-serif italic leading-[1.6] m-0">
                  {post.tldr}
                </p>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
