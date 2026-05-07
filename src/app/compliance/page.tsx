import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Eyebrow, Headline } from '@/components/Typography';

export default function PillarCIndex() {
  const posts = [
    {
      title: "Attorney-client privilege at the AI intake call: What counts",
      slug: "attorney-client-privilege-ai-intake",
      tldr: "Does speaking to an AI break attorney-client privilege? The short answer is no, provided the AI operates as an agent of the firm and strict confidentiality protocols are enforced."
    },
    {
      title: "ABA Formal Opinion 512 explained for PI firms",
      slug: "aba-formal-opinion-512-explained",
      tldr: "In July 2024, the ABA issued Formal Opinion 512, establishing national guidelines for generative AI in legal practice. We break down what this means for automated intake and client disclosure."
    },
    {
      title: "HIPAA at intake: What counts as PHI, what doesn't",
      slug: "hipaa-at-intake-phi",
      tldr: "Personal injury intake inherently involves medical data. We clarify the boundary lines of Protected Health Information (PHI) during an initial call and when a Business Associate Agreement (BAA) is legally required."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
          <Eyebrow>PILLAR C · CORE GUIDE</Eyebrow>
          <Headline size={48} maxWidth={800}>Privilege, Compliance & Trust</Headline>
          
          <div className="text-[17px] text-[var(--ink)] font-serif leading-[1.6] mt-6 mb-16">
            <p className="mb-4">
              The deal-breaker questions answered. Navigating HIPAA, BAAs, attorney-client privilege at intake, state bar advertising rules, and AI disclosure obligations.
            </p>
            <p>
              This pillar is dedicated to the regulatory and ethical frameworks governing automated legal intake. We continuously monitor state bar updates to ensure your operations remain fully compliant.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <a 
                key={i} 
                href={`/compliance/${post.slug}`}
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
