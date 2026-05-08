import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Security & Data',
  description:
    'Security at Call Della — encryption at rest and in transit, SOC 2 Type II audit underway, BAA-ready for firms with PHI exposure, US-hosted, no model training on client data.',
  alternates: { canonical: '/security' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Security & Data | Call Della',
    description: 'Encryption at rest and in transit, SOC 2 audit underway, BAA-ready, US-hosted.',
    type: 'website',
    url: 'https://calldella.com/security',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Call Della security' }],
  },
};

export default function SecurityPage() {
  return (
    <ArticleLayout
      eyebrow="LEGAL"
      title="Security & Compliance"
      slug="/security"
      breadcrumbs={[{ name: 'Security & Compliance', href: '/security' }]}
      author="Call Della Operations"
      date="2 MAY 2026"
      datePublished="2026-05-02"
      dateModified="2026-05-02"
      tldr={
        <>
          <p className="mb-2">We build software for law firms. That means treating every byte of data as if it were subject to strict attorney-client privilege and HIPAA regulations.</p>
          <p className="m-0">We employ AES-256 encryption, zero-training data agreements, and offer Business Associate Agreements (BAAs) for enterprise clients.</p>
        </>
      }
    >
      <h2>Enterprise-Grade Architecture</h2>
      <p>
        Call Della is hosted on AWS infrastructure, utilizing isolated tenant environments. All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. Our database clusters operate within private VPCs with strict ingress/egress filtering.
      </p>

      <h2>LLM Privacy & Zero Training</h2>
      <p>
        The core of our service relies on Large Language Models (LLMs). To ensure compliance with ABA Formal Opinion 512 and general attorney-client privilege:
      </p>
      <ul>
        <li>We operate exclusively via Enterprise API endpoints.</li>
        <li>We have signed Zero Data Retention (ZDR) and Zero Training agreements with our model providers.</li>
        <li>No prompt, audio file, or transcript passed through Call Della is ever used to train a foundational AI model.</li>
      </ul>

      <h2>HIPAA Compliance & BAAs</h2>
      <p>
        While cold legal intake often falls outside the strict purview of HIPAA (as the caller is not a Covered Entity), we treat the infrastructure housing this medical and injury data as if it were PHI.
      </p>
      <p>
        For firms on our Practice and Group tiers that integrate Della directly into HIPAA-compliant CRM environments, Call Della will execute a standard Business Associate Agreement (BAA).
      </p>

      <h2>SOC 2 Type II Status</h2>
      <p>
        Call Della is currently undergoing a SOC 2 Type II audit by an independent AICPA-accredited firm to verify the operational effectiveness of our security, availability, and confidentiality controls. We expect to make this report available to clients under NDA by Q4 2026.
      </p>

      <h2>Access Controls</h2>
      <p>
        Internal access to production data is strictly governed by the Principle of Least Privilege (PoLP). Support personnel cannot access audio or transcripts without explicit, temporary, cryptographic authorization granted by the Customer for debugging purposes.
      </p>
    </ArticleLayout>
  );
}
