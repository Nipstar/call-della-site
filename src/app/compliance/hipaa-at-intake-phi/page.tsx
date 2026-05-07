import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR C CLUSTER · COMPLIANCE"
      title="HIPAA at intake: What counts as PHI, what doesn't"
      author="Andy Norman"
      date="30 MAY 2026"
      tldr={
        <>
          <p className="mb-2">Personal injury intake inherently involves medical data. But is a law firm covered by HIPAA during a cold intake call?</p>
          <p className="m-0">We clarify the boundary lines of Protected Health Information (PHI) and when your firm—and your software vendors—actually need a Business Associate Agreement (BAA).</p>
        </>
      }
    >
      <h2>The great HIPAA misconception</h2>
      <p>
        Many personal injury attorneys believe that any mention of medical injuries on a phone call triggers full HIPAA compliance protocols. This is legally inaccurate. 
      </p>
      <p>
        HIPAA (the Health Insurance Portability and Accountability Act) applies strictly to "Covered Entities" (healthcare providers, health plans, and healthcare clearinghouses) and their "Business Associates." A law firm is generally not a Covered Entity.
      </p>

      <h2>When does a Law Firm become subject to HIPAA?</h2>
      <p>
        A personal injury law firm typically becomes subject to HIPAA regulations only when it requests and receives medical records from a Covered Entity (like a hospital) on behalf of a client. In this scenario, the law firm may be acting as a Business Associate or receiving the data under a HIPAA-compliant patient authorization.
      </p>
      <p>
        <strong>During a cold intake call:</strong> If a victim calls your firm and says, "I broke my leg in a car crash," that information is <em>not</em> PHI governed by HIPAA. The caller is freely sharing their own medical reality; they are not a Covered Entity transmitting data.
      </p>

      <h2>Why security still matters at intake</h2>
      <p>
        Even though an initial intake call is rarely governed by HIPAA, the information captured is highly sensitive and is absolutely governed by <strong>Attorney-Client Privilege</strong> and state bar rules regarding data security.
      </p>
      <p>
        Furthermore, once the client is retained and the firm begins pulling official medical records into its CRM, the entire digital environment must be secure. If your intake software connects to your CRM, that integration path must be hardened.
      </p>

      <h2>The BAA (Business Associate Agreement)</h2>
      <p>
        If your firm utilizes an answering service or AI tool that stores data in the same environment where official medical records will eventually reside, executing a BAA with that vendor is a best practice, even if the initial intake call technically falls outside HIPAA's strict purview.
      </p>

      <h2>How Della handles this</h2>
      <p>
        We treat all intake audio and transcript data with the same rigorous encryption standards required for PHI, regardless of whether it legally qualifies as such at the time of the call. Call Della offers signed Business Associate Agreements (BAAs) for our Practice and Group tier clients to ensure seamless, compliant integration with your downstream firm management software.
      </p>
    </ArticleLayout>
  );
}
