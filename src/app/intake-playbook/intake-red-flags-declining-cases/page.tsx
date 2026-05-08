import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

const SLUG = '/intake-playbook/intake-red-flags-declining-cases';
const TITLE = 'Intake red flags: When to politely decline a PI case';
const DESCRIPTION =
  "Accepting a bad case is exponentially more expensive than missing a good one. The Three T's of toxic intake: Timeline gaps, Treatment refusal, and The Last Lawyer syndrome.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: `https://calldella.com${SLUG}`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-default.png'] },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR A CLUSTER · INTAKE PLAYBOOK"
      title={TITLE}
      description={DESCRIPTION}
      slug={SLUG}
      breadcrumbs={[
        { name: 'Intake playbook', href: '/intake-playbook' },
        { name: 'Intake red flags', href: SLUG },
      ]}
      author="Andy Norman"
      date="18 MAY 2026"
      datePublished="2026-05-18"
      dateModified="2026-05-18"
      tldr={
        <>
          <p className="mb-2">Accepting a bad case is exponentially more expensive than missing a good one. A high-performing intake team doesn't just sign cases; they actively protect the firm's balance sheet by filtering out toxic leads.</p>
          <p className="m-0">Look for the "Three T's": Timeline gaps, Treatment refusal, and "The Last Lawyer" syndrome.</p>
        </>
      }
    >
      <h2>The hidden cost of bad cases</h2>
      <p>
        Many high-volume personal injury firms incentivise their intake departments purely on signing velocity. This creates a dangerous pipeline. A case with muddy liability or non-existent damages will sit in pre-litigation for 18 months, eating up paralegal hours, case expenses, and partner mental bandwidth, only to be dropped later.
      </p>

      <h2>The Three T's of Toxic Cases</h2>
      
      <h3>1. Timeline Gaps (The Statute of Limitations Trap)</h3>
      <p>
        If a caller is reaching out 23 months after an auto accident in a state with a 2-year statute of limitations, the alarm bells should ring. 
      </p>
      <p>
        <strong>The intake question:</strong> "Why are you looking for representation now, so long after the incident?"
      </p>

      <h3>2. Treatment Refusal (The Damages Void)</h3>
      <p>
        A caller who describes a "10/10 pain" back injury but hasn't seen a doctor in the three weeks since the crash is an insurance adjuster's dream. In most states, failure to mitigate damages (by seeking medical care) severely restricts recovery. 
      </p>
      <p>
        <strong>The intake question:</strong> "Can you tell me which doctors or clinics you've visited since the accident?" (If the answer is none, and the incident wasn't yesterday, it's a massive red flag).
      </p>

      <h3>3. "The Last Lawyer" Syndrome (The Problem Client)</h3>
      <p>
        The most dangerous red flag is the caller who is "shopping" because they just fired their previous attorney. While legitimate grievances happen, a caller who complains that their last three lawyers "didn't know what they were doing" is a systemic risk to your firm.
      </p>
      <p>
        <strong>The intake question:</strong> "Have you previously retained counsel for this specific incident? If so, why are you seeking a transition?"
      </p>

      <h2>How to decline gracefully</h2>
      <p>
        Declining a case requires tact. You do not want to provide legal advice or state definitively that they "do not have a case" (which can create liability). Instead, use the operational decline:
      </p>
      <p>
        <em>"Based on the specific details you've provided, this isn't the type of case our firm is currently taking on, but we strongly encourage you to reach out to other attorneys for a second opinion."</em>
      </p>

      <h2>How Della handles this</h2>
      <p>
        Della is programmed to spot the Three T's instantly. While she will never decline a case on the phone (she politely completes the intake), she will tag the resulting dossier with a "Pending Review - Red Flag" status. The dossier will highlight the specific issue—e.g., <em>"Caller noted they fired previous counsel yesterday"</em>—allowing your morning triage team to send an automated decline email rather than wasting 20 minutes on a callback.
      </p>
      
      <p>
        <a href="/">See how Della triages morning dossiers →</a>
      </p>
    </ArticleLayout>
  );
}
