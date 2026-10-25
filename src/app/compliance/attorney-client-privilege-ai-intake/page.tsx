import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { SRC } from '../_sources';

const SLUG = '/compliance/attorney-client-privilege-ai-intake';
const TITLE = 'Does AI Intake Protect Attorney-Client Privilege?';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'Is a caller to a law firm intake line a prospective client?',
    a: 'Often, yes. Under ABA Model Rule 1.18(a), a person who consults a lawyer about possibly forming a client-lawyer relationship is a prospective client. Comment [2] says a consultation is likely when a firm invites people to share information about a possible matter without clear warnings limiting its obligations, and the person responds. An intake line usually does exactly that.',
  },
  {
    q: 'Does speaking to an AI intake specialist waive privilege?',
    a: 'No ABA rule answers that question, because privilege is decided by courts under each jurisdiction’s evidence law, on the facts. What the ethics rules do say is that the firm must protect what a prospective client shares, under Rule 1.18(b), and must supervise outside services, under Rule 5.3. Ask your own counsel about privilege in your jurisdiction.',
  },
  {
    q: 'What is the difference between privilege and confidentiality?',
    a: 'Comment [3] to ABA Model Rule 1.6 explains that the attorney-client privilege applies in judicial and other proceedings where a lawyer may be compelled to give evidence. The duty of confidentiality is broader: it covers all information relating to the representation, whatever its source, and applies outside those proceedings too.',
  },
  {
    q: 'Does a firm owe duties to a caller it never represents?',
    a: 'Yes. Rule 1.18(b) says that even when no client-lawyer relationship follows, a lawyer who learned information from a prospective client may not use or reveal it, except as Rule 1.9 would allow for a former client. Comment [3] adds that the duty exists however brief the initial conference was.',
  },
  {
    q: 'How much should intake collect on the first call?',
    a: 'Comment [4] to Rule 1.18 says a lawyer considering a new matter should limit the initial consultation to the information reasonably necessary to decide whether to take it, including the conflict check. Intake should capture party names, dates, the type of matter and urgency, and leave the detailed story for the attorney.',
  },
  {
    q: 'Who runs the conflict check on an after-hours intake call?',
    a: 'The firm does. Intake should capture the full names of the caller, the person affected and the other side, so staff can run them against current, former and prospective clients the next morning. Rule 1.18(c) can disqualify a firm that learns significantly harmful information from a prospective client, so the check should happen before an attorney hears the full story.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPLIANCE · PRIVILEGE AND CONFIDENTIALITY"
      title={TITLE}
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-26"
      breadcrumbs={[
        { name: 'Compliance', href: '/compliance' },
        { name: 'Attorney-client privilege at intake', href: SLUG },
      ]}
      citations={[SRC.rule118, SRC.rule118c, SRC.rule16c, SRC.rule53c, SRC.aba512, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            <strong>Attorney-client privilege</strong> is an evidence rule that keeps confidential lawyer-client communications out of court; the duty of confidentiality is a broader ethics duty. On an intake call, the caller is usually a <strong>prospective client</strong> under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, and the firm may not use or reveal what they share even if it never takes the case.
          </p>
          <p className="m-0">
            Whether privilege attaches to a particular call is decided by courts under each jurisdiction’s evidence law. The confidentiality duty applies regardless, so firms should treat an AI intake vendor as part of their confidentiality program and supervise it under Rule 5.3.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is the difference between privilege and confidentiality?</h2>
        <p>
          <strong>Privilege and confidentiality are two separate protections, and an intake call raises both.</strong> <a href={SRC.rule16c.url}>Comment [3] to ABA Model Rule 1.6</a> explains the split. The <strong>attorney-client privilege</strong> and the work product doctrine apply in judicial and other proceedings where a lawyer may be called as a witness or required to produce evidence. The <strong>duty of confidentiality</strong> applies in every other setting. It is also wider in scope: it covers not only what a client says in confidence but “all information relating to the representation, whatever its source.” For an intake line, the practical point is that the ethics duty never depends on whether a court would later find a call privileged. A firm must protect what callers share from the first word of the call. Privilege is a narrower question, decided case by case under the evidence law of the jurisdiction. Firms should design intake to protect confidentiality fully, and take advice on privilege for their own jurisdiction.
        </p>

        <h2>Is a caller to an after-hours intake line a prospective client?</h2>
        <p>
          <strong>Usually, yes: under ABA Model Rule 1.18(a), a person who consults a lawyer about possibly forming a client-lawyer relationship on a matter is a prospective client.</strong> <a href={SRC.rule118c.url}>Comment [2]</a> says whether a communication counts as a consultation depends on the circumstances. A consultation is likely where a lawyer, in person or through advertising in any medium, specifically invites people to submit information about a possible representation without “clear and reasonably understandable warnings and cautionary statements” limiting the lawyer’s obligations, and the person responds. An intake line that answers in the firm’s name and asks about the caller’s accident, arrest or immigration case fits that description. By contrast, someone who sends information unprompted, in response to advertising that only describes the lawyer’s practice, is not a prospective client. Neither is a person who contacts a lawyer in order to disqualify them. Firms should assume most intake callers are prospective clients from the first minute, and handle every call that way.
        </p>

        <h2>What does a firm owe a prospective client under Rule 1.18?</h2>
        <p>
          <strong>Rule 1.18(b) says that even if no representation follows, a lawyer who learned information from a prospective client may not use or reveal it, except as Rule 1.9 would allow for a former client.</strong> Comment [3] adds that the duty exists “regardless of how brief the initial conference may be.” Rule 1.18(c) goes further. A lawyer who received information that could be significantly harmful to the prospective client may not represent someone with materially adverse interests in the same or a substantially related matter. That disqualification can extend to the whole firm. Rule 1.18(d) allows the representation if both people give informed consent in writing, or if the lawyer who heard the information took reasonable steps to avoid hearing more than necessary, is screened from the matter, takes no part of the fee, and written notice goes to the prospective client. An intake call can therefore create a conflict for the whole firm, which is why intake records must reach the conflict check.
        </p>

        <h2>Does using an AI intake vendor waive attorney-client privilege?</h2>
        <p>
          <strong>No ethics rule settles whether using an intake vendor affects privilege; courts decide privilege under the evidence law of each jurisdiction, on the facts.</strong> What the rules of professional conduct do say is how a firm must treat the vendor. <a href={SRC.rule53c.url}>Comment [3] to Model Rule 5.3</a> lists outside nonlawyer services a firm may use, including “an Internet-based service to store client information”. The firm must make reasonable efforts to ensure the service is provided compatibly with the lawyer’s obligations. That depends on the vendor’s experience, the services, the terms protecting client information, and the legal setting where the work is done. <a href={SRC.aba512.url}>ABA Formal Opinion 512 (2024)</a> applies the same thinking to AI tools and says lawyers must assess the risk of disclosure before client information goes in. A firm that wants to protect a privilege argument should be able to show that the vendor works under the firm’s direction, under written confidentiality terms, and only to help the firm deliver legal services.
        </p>

        <h2>How much should intake collect on the first call?</h2>
        <p>
          <strong>Intake should collect only what the firm reasonably needs to decide whether to take the matter, including what it needs for the conflict check.</strong> That is the guidance in <a href={SRC.rule118c.url}>Comment [4] to Rule 1.18</a>, which says a lawyer considering a new matter “should limit the initial consultation to only such information as reasonably appears necessary for that purpose.” Collecting less protects both sides. The caller shares less before the firm has agreed to act, and the firm is less likely to acquire disqualifying information about someone it turns away. In practice, the first call should capture names of everyone involved, dates, the type of matter, the deadline or urgency, and how to reach the caller. The full narrative, the caller’s theories about fault and any admissions belong in the consultation with an attorney. Comment [5] adds that a lawyer may condition a consultation on the prospective client’s informed consent that what they share will not bar the firm from representing someone else. The table below shows the split.
        </p>
      </Prose>

      <Table
        caption="What intake captures on the first call, and what waits for the attorney"
        head={['Topic', 'Capture on the first call', 'Leave for the consultation']}
        rows={[
          ['Parties', 'Full names of the caller, the person affected, and the other side', 'Background on the other side beyond names'],
          ['Matter', 'Type of matter, date, place, court or agency involved', 'The caller’s detailed account and theories of fault'],
          ['Urgency', 'Custody status, hearing dates, filing deadlines', 'Strategy for meeting the deadline'],
          ['Prior counsel', 'Whether another lawyer is or was involved', 'Why the caller is changing lawyers'],
          ['Documents', 'What exists: police report, notice to appear, medical bills', 'The documents themselves'],
        ]}
      />

      <Prose>
        <h2>What should a firm check in an AI intake vendor’s contract?</h2>
        <p>
          <strong>A firm should check that the vendor’s contract makes confidentiality enforceable and answers the diligence points in Opinion 512.</strong> Opinion 512 draws these from earlier outsourcing and cloud-computing opinions. Ask for each in writing.
        </p>
        <ol>
          <li>A confidentiality obligation that covers caller information and is enforceable by the firm.</li>
          <li>Notice to the firm of any breach, and of any subpoena or other demand for call data.</li>
          <li>Whether caller information is used to train models, and by whom. Opinion 512 requires informed consent before client information goes into a self-learning tool.</li>
          <li>Whether the vendor keeps data after the service ends, and whether it claims any rights in it.</li>
          <li>Who at the vendor can access recordings and transcripts, and how that access is controlled.</li>
          <li>The vendor’s security policies and its approach to outages and cyber-attacks.</li>
          <li>Where disputes would be heard if the vendor breaches the agreement.</li>
        </ol>

        <h2>Should the intake line give a cautionary statement?</h2>
        <p>
          <strong>Whether an intake line gives a cautionary statement is a firm decision, but Rule 1.18’s comments show why it matters.</strong> Comment [2] treats “clear and reasonably understandable warnings and cautionary statements that limit the lawyer’s obligations” as one of the facts that decide whether a consultation has occurred. A short statement at the start of the call can make clear that the firm has not yet agreed to represent the caller and that the call is to gather details for an attorney. It does not remove the duty to protect what the caller then shares. Comment [5] goes further and allows a lawyer to condition a consultation on informed consent that the information will not bar other representation, though that needs a real explanation, not a one-line script. Most firms keep the opening simple: who is answering, that the call is recorded, and that an attorney will review the details. Della’s greeting names the firm and explains that the office is closed, and our <a href="/intake-playbook/how-to-write-pi-intake-script">intake script guide</a> covers the wording.
        </p>

        <h2>How does Della handle confidentiality on intake calls?</h2>
        <p>
          <strong>Della, Call Della’s intake specialist, collects the facts the firm needs and files them to the firm’s own dashboard.</strong> She answers in the firm’s name, opens with a recording disclosure set for the firm’s state, and asks the intake questions for the firm’s practice area. She tells callers she is an AI if they ask, never claims to be human, and never gives legal advice. Each call becomes a dossier in the firm’s Call Della dashboard with a summary, urgency score, recording and transcript, ready for the conflict check in the morning. Urgent matters reach the attorney on call by email. Our <a href="/security">security page</a> describes how call data is handled. The volume this protects is large: according to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (2025)</a>, Clio’s 2024 secret-shopper study found only 40 percent of law firms answered the phone. See how Della handles <a href="/criminal-defense">criminal defense intake</a>, <a href="/immigration">immigration calls</a> and <a href="/personal-injury">personal injury intake</a>, and read our guide to <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512</a>.
        </p>
      </Prose>

      <DemoCTA>
        Hear what a prospective client hears. Book a demo and Della will take a live intake call for your practice area, then show you the dossier your attorneys would review.
      </DemoCTA>

      <FAQ items={FAQS} heading="Privilege and AI intake: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
