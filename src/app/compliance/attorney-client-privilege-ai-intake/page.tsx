import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

const SLUG = '/compliance/attorney-client-privilege-ai-intake';
const TITLE = 'Attorney-client privilege at the AI intake call: What counts';
const DESCRIPTION =
  'Does speaking to an AI break attorney-client privilege? Specific requirements to ensure early intake communications remain protected from discovery.';

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
      eyebrow="PILLAR C CLUSTER · COMPLIANCE"
      title={TITLE}
      description={DESCRIPTION}
      slug={SLUG}
      breadcrumbs={[
        { name: 'Compliance', href: '/compliance' },
        { name: 'Attorney-client privilege', href: SLUG },
      ]}
      author="Andy Norman"
      date="26 MAY 2026"
      datePublished="2026-05-26"
      dateModified="2026-05-26"
      tldr={
        <>
          <p className="mb-2">Does speaking to an AI break attorney-client privilege? The short answer is no, provided the AI operates as an agent of the firm and strict confidentiality protocols are enforced.</p>
          <p className="m-0">We outline the specific requirements to ensure early intake communications remain protected from discovery.</p>
        </>
      }
    >
      <h2>The boundary of privilege</h2>
      <p>
        Attorney-client privilege attaches when a prospective client seeks legal advice from a lawyer, even if the lawyer ultimately declines the representation. The critical question with modern legal tech is: does communicating through a third-party AI vendor waive this privilege by exposing the communication to an outside party?
      </p>

      <h2>The "Agent of the Firm" Doctrine</h2>
      <p>
        Courts have long held that communications made to an attorney's agent—such as a paralegal, a human answering service, or an investigator—are covered by the privilege, so long as the communication was made in confidence for the purpose of obtaining legal advice.
      </p>
      <p>
        When an AI intake system is deployed properly, it functions as a digital agent of the firm. However, to maintain privilege, the firm must ensure the vendor's data practices do not inadvertently breach confidentiality.
      </p>

      <h3>Requirements for maintaining privilege with AI:</h3>
      <ul>
        <li><strong>No Third-Party Model Training:</strong> The vendor must explicitly state in their Terms of Service that client data, call audio, and transcripts are <em>never</em> used to train public LLMs (like ChatGPT or Claude). If the data is absorbed into a public model, privilege is arguably waived.</li>
        <li><strong>Data Encryption:</strong> Data must be encrypted in transit and at rest.</li>
        <li><strong>Strict Access Controls:</strong> The vendor's employees should not have unrestricted access to the audio files without the firm's explicit, case-by-case consent.</li>
      </ul>

      <h2>The Disclaimer Requirement</h2>
      <p>
        To prevent callers from volunteering highly sensitive, non-relevant information during the initial screening, the intake script (whether human or AI) should clearly state that the system is gathering preliminary information for the attorneys to review, and that no formal attorney-client relationship is established until a retainer is signed.
      </p>

      <h2>How Della handles this</h2>
      <p>
        Call Della's infrastructure is built specifically for legal privilege constraints. We employ a strict Zero Data Retention policy for model training. Your firm's audio and transcripts belong exclusively to you, are stored in SOC 2 Type II compliant environments, and are never fed back into public foundational models.
      </p>
    </ArticleLayout>
  );
}
