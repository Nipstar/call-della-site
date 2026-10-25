import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { SRC } from '../_sources';

const SLUG = '/compliance/hipaa-at-intake-phi';
const TITLE = 'HIPAA at Legal Intake: Handling PHI on the First Call';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'Is a personal injury law firm a HIPAA covered entity?',
    a: 'Usually not. According to HHS, covered entities are health plans, health care clearinghouses, and health care providers that transmit health information electronically in connection with standard transactions. A law firm is none of these. HHS says an entity that is neither a covered entity nor a business associate does not have to comply with the HIPAA Rules.',
  },
  {
    q: 'When is a law firm a HIPAA business associate?',
    a: 'Under 45 CFR 160.103, a firm is a business associate when it provides legal services to or for a covered entity and those services involve the disclosure of protected health information from the covered entity, or from another business associate, to the firm. Defending a hospital or advising a health plan on matters involving patient records can qualify.',
  },
  {
    q: 'Is medical information a caller shares on an intake call PHI?',
    a: 'When an injured person describes their own injuries to a law firm that is not acting for a covered entity, HIPAA does not govern that conversation. The information is still confidential under the firm’s ethics duties, including ABA Model Rule 1.18 for prospective clients, and other laws may apply. Treat it as sensitive.',
  },
  {
    q: 'Does a law firm need a BAA with its intake vendor?',
    a: 'Only if HIPAA reaches the arrangement. If the firm is a business associate and the vendor will create, receive, maintain or transmit PHI on the firm’s behalf, the vendor is a subcontractor business associate and a BAA is needed. For ordinary personal injury, criminal or immigration intake from the public, that usually is not the case.',
  },
  {
    q: 'Is Della HIPAA compliant?',
    a: 'Call Della does not describe Della as HIPAA compliant. Most intake calls to personal injury, criminal defense and immigration firms are not governed by HIPAA. If your firm works as a business associate for a covered entity, tell us before you route those calls, so we can discuss whether Della is the right fit for them.',
  },
  {
    q: 'How do PI firms get medical records from providers?',
    a: 'Providers that are covered entities generally may not disclose protected health information without a valid authorization under 45 CFR 164.508, unless another HIPAA rule permits it. PI firms usually have the client sign a HIPAA authorization after engagement. Intake should note which providers treated the caller, not collect the records.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPLIANCE · HEALTH INFORMATION"
      title={TITLE}
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-30"
      breadcrumbs={[
        { name: 'Compliance', href: '/compliance' },
        { name: 'HIPAA at intake', href: SLUG },
      ]}
      citations={[SRC.hhsCovered, SRC.hhsBA, SRC.cfr160103, SRC.cfr164508, SRC.rule118, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            <strong>HIPAA at intake</strong> is the question of whether federal health privacy rules govern the medical details a caller shares on a law firm’s first call. According to <a href={SRC.hhsCovered.url}>HHS</a>, the HIPAA Rules apply to covered entities (health plans, health care clearinghouses and health care providers that transmit health information electronically in standard transactions) and their business associates.
          </p>
          <p className="m-0">
            A law firm taking a call from an injured person is usually neither, so HIPAA does not govern that call; the firm’s duty of confidentiality does. A firm becomes a business associate when it provides legal services to a covered entity that involve PHI from that entity (<a href={SRC.cfr160103.url}>45 CFR 160.103</a>).
          </p>
        </>
      }
    >
      <Prose>
        <h2>Who does HIPAA apply to?</h2>
        <p>
          <strong>HIPAA’s Privacy, Security and Breach Notification Rules apply to covered entities and their business associates, and to no one else.</strong> That is how <a href={SRC.hhsCovered.url}>HHS’s covered-entity guidance</a> puts it: “If an entity does not meet the definition of a covered entity or business associate, it does not have to comply with the HIPAA Rules.” There are three kinds of <strong>covered entity</strong>. Health care providers, such as doctors, clinics, psychologists, dentists, chiropractors, nursing homes and pharmacies, are covered only if they transmit information electronically in connection with a transaction for which HHS has adopted a standard. Health plans include insurers, HMOs, company health plans and government programs such as Medicare and Medicaid. Health care clearinghouses convert nonstandard health information into standard formats, or the reverse. A <strong>business associate</strong> is a person or organization that performs certain functions for a covered entity, or provides certain services to it, involving protected health information. HHS also links a CMS decision tool for checking covered-entity status.
        </p>

        <h2>Is a law firm a covered entity under HIPAA?</h2>
        <p>
          <strong>A law firm is usually not a covered entity under HIPAA, because it is not a health plan, a health care clearinghouse or a health care provider.</strong> A personal injury firm that hears about a client’s fractures, surgery and physical therapy is still not a provider of that care. The same is true of a criminal defense firm told about a client’s medication in jail, or an immigration firm told about a medical condition in a hardship case. None of those facts turns the firm into a covered entity. A vendor that markets intake as “HIPAA compliant” to a PI firm is answering a question that usually does not arise. The firm’s real obligations on that call come from the rules of professional conduct and any other law that applies to the firm. HIPAA can still enter the picture in two ways: when the firm works for a covered entity, and when it requests records from one.
        </p>

        <h2>When is a law firm a HIPAA business associate?</h2>
        <p>
          <strong>A law firm is a business associate when it provides legal services to or for a covered entity and those services involve the disclosure of protected health information from that covered entity to the firm.</strong> The definition is in <a href={SRC.cfr160103.url}>45 CFR 160.103</a>, paragraph (1)(ii), which lists “legal, actuarial, accounting, consulting” and other services. A firm defending a hospital in a malpractice case, or advising a health plan on a matter involving member records, can be a business associate when the work involves PHI from the client. In those engagements the covered entity must have a business associate agreement with the firm, and HHS says business associates are directly liable for compliance with certain provisions of the HIPAA Rules. The definition also reaches downstream. Paragraph (3)(iii) makes a subcontractor that creates, receives, maintains or transmits PHI on behalf of a business associate a business associate too. That is the point where a firm’s intake vendor could be pulled in: only if the vendor handles PHI on the firm’s behalf in a business associate engagement.
        </p>

        <h2>Is medical information on a personal injury intake call PHI?</h2>
        <p>
          <strong>When an injured person describes their own injuries to a law firm that is not acting for a covered entity, HIPAA does not govern that conversation.</strong> The business associate definition turns on services to a covered entity that involve disclosure of PHI from that entity. A caller telling a PI firm about their own treatment is not a disclosure from a hospital or a health plan. That does not make the information any less sensitive. The caller is a prospective client under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, and the firm may not use or reveal what they share, even if it declines the case. State privacy laws may also apply to health information a firm holds, so firms should check their own state. The practical answer is to treat injury and treatment details as the most sensitive part of the intake record. Collect what the attorney needs to evaluate the case, store it with limited access, and keep it out of anything shared outside the firm.
        </p>

        <h2>When does HIPAA come into a personal injury case?</h2>
        <p>
          <strong>HIPAA usually enters a personal injury case when the firm asks a provider for the client’s medical records.</strong> Providers that are covered entities generally may not use or disclose protected health information without a valid authorization, unless another HIPAA rule permits it. That rule is in <a href={SRC.cfr164508.url}>45 CFR 164.508(a)(1)</a>. So the HIPAA step falls on the provider releasing the records, and the firm’s job is to supply a valid authorization signed by the client. Firms typically get that authorization signed with the engagement documents, after the attorney has decided to take the case. That has a direct consequence for intake. The first call should not try to collect records, authorizations or detailed medical histories. It should note who treated the caller, when, and whether treatment is continuing, so the attorney can judge the case and the paralegal can request records later. Our <a href="/intake-playbook/what-should-be-on-a-pi-intake-form">personal injury intake form guide</a> lists the treatment fields to capture.
        </p>

        <h2>What medical details should intake collect on the first call?</h2>
        <p>
          <strong>Intake should collect enough medical detail to evaluate the case and plan records requests, and no more.</strong> <a href={SRC.rule118.url}>Comment [4] to Rule 1.18</a> says a lawyer considering a new matter should limit the initial consultation to information reasonably necessary to decide whether to take it. The table applies that to medical details.
        </p>
      </Prose>

      <Table
        caption="Medical details at intake: what to capture and what to leave"
        head={['Topic', 'Capture on the first call', 'Leave for after engagement']}
        rows={[
          ['Injuries', 'Body parts injured, in the caller’s words', 'Diagnoses from records, imaging results'],
          ['Treatment', 'Where treated, when, whether treatment is ongoing', 'Full treatment history, provider notes'],
          ['Providers', 'Names of the ER, doctors, therapists seen', 'Records requests and signed authorizations'],
          ['Prior conditions', 'Whether the same body part was injured before', 'Detailed prior medical history'],
          ['Insurance', 'Health insurance and auto coverage carriers', 'Policy documents, lien details'],
        ]}
      />

      <Prose>
        <h2>Does a law firm need a business associate agreement with its intake vendor?</h2>
        <p>
          <strong>A law firm needs a business associate agreement with its intake vendor only if HIPAA reaches the arrangement.</strong> That happens when the firm is itself a business associate and the vendor will create, receive, maintain or transmit PHI on the firm’s behalf. In that case the vendor is a subcontractor business associate under <a href={SRC.cfr160103.url}>45 CFR 160.103</a>. <a href={SRC.hhsBA.url}>HHS’s business associate guidance</a> says the agreement must describe the permitted uses and disclosures of PHI, among other required terms in 45 CFR 164.504(e). For ordinary intake from the public, such as a driver hurt in a crash, a family calling about an arrest, or a relative calling about a detention, the firm is usually not a business associate. A BAA is then not the right tool. A confidentiality agreement and the vendor diligence in <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512</a> are. HHS also notes a narrow conduit exception, which covers only pure transmission services. It does not cover a vendor that accesses the information to do its work.
        </p>

        <h2>What should a firm ask an AI intake vendor about health information?</h2>
        <p>
          <strong>A firm should ask an AI intake vendor how it stores, limits and deletes the health details callers share.</strong> These questions apply whether or not HIPAA governs the call.
        </p>
        <ol>
          <li>Where are recordings, transcripts and summaries stored, and who at the vendor can access them?</li>
          <li>Is caller information used to train AI models?</li>
          <li>How long is call data kept, and can the firm set or shorten that period?</li>
          <li>What happens to the data when the contract ends?</li>
          <li>Will the vendor notify the firm of a breach or a demand for call data?</li>
          <li>Does the vendor claim HIPAA compliance, and if so, on what basis and for which engagements?</li>
        </ol>

        <h2>How does Della handle medical details on intake calls?</h2>
        <p>
          <strong>Della, Call Della’s intake specialist, captures the injury and treatment basics a personal injury attorney needs to evaluate a case, and leaves records and authorizations to the firm.</strong> On a PI call she asks about the incident, injuries, treatment and insurance, and files the answers in a dossier with a summary, urgency score, recording and transcript. Records requests and authorizations stay with the firm, and she never gives legal advice. She tells callers she is an AI if they ask and never claims to be human. Call Della does not describe Della as HIPAA compliant. Our <a href="/security">security page</a> explains how call data is handled. If your firm works as a business associate for a hospital or health plan, tell us before routing those calls. The calls are worth answering: according to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (2025)</a>, only 40 percent of firms answered the phone in Clio’s 2024 secret-shopper study. See <a href="/personal-injury">after-hours personal injury intake</a>, and read our guide to <a href="/compliance/attorney-client-privilege-ai-intake">privilege and confidentiality at intake</a>.
        </p>
      </Prose>

      <DemoCTA>
        Hear how Della takes a personal injury call, from the crash to the treatment questions. Book a demo for a live call and the dossier she files.
      </DemoCTA>

      <FAQ items={FAQS} heading="HIPAA at intake: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
