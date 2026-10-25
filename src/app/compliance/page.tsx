import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta, page } from '@/data/pages';
import { byConsent } from '@/data/recordingConsent';
import { Prose, DemoCTA } from '@/app/intake-playbook/_ui';
import { SRC } from './_sources';

const SLUG = '/compliance';
export const metadata = pageMeta(SLUG);

const POSTS = [
  '/compliance/aba-formal-opinion-512-explained',
  '/compliance/attorney-client-privilege-ai-intake',
  '/compliance/hipaa-at-intake-phi',
  '/compliance/call-recording-consent-by-state',
].map((p) => page(p));

const ALL_PARTY = byConsent('all-party').length;

const FAQS = [
  {
    q: 'Is AI legal intake allowed under the ethics rules?',
    a: 'No ABA rule bars a firm from using AI for intake. ABA Formal Opinion 512 (July 29, 2024) applies the existing Model Rules to generative AI: competence, confidentiality, communication, supervision and fees. A firm using AI intake must meet those duties, and its own state’s rules and opinions, which can go further than the ABA.',
  },
  {
    q: 'Does a law firm have to tell callers they are talking to AI?',
    a: 'ABA Formal Opinion 512 does not set a rule for intake callers; its disclosure discussion is about clients under Rule 1.4. State rules and bar opinions may say more, so check yours. Della tells callers she is an AI if they ask, never claims to be human, and never gives legal advice.',
  },
  {
    q: 'Are intake calls protected by attorney-client privilege?',
    a: 'Whether privilege attaches to a given call is decided by courts under each jurisdiction’s evidence law. The duty of confidentiality applies regardless. Under ABA Model Rule 1.18, a caller who consults the firm about a possible matter is a prospective client, and the firm may not use or reveal what they share, even if it declines the case.',
  },
  {
    q: 'Does HIPAA apply to personal injury intake calls?',
    a: 'Usually not. HIPAA applies to covered entities, which are health plans, clearinghouses and certain health care providers, and to their business associates. A PI firm taking a call from an injured person is usually neither. A firm can be a business associate when it provides legal services to a covered entity involving that entity’s PHI.',
  },
  {
    q: 'Can a law firm record intake calls?',
    a: `Generally yes, if it meets the consent rule that applies. Federal law and most states allow one-party consent, but by our count ${ALL_PARTY} states require all parties to consent to recording a phone call. A recording notice at the start of every call is the common approach. Confirm your states' rules with a licensed attorney.`,
  },
  {
    q: 'Has an attorney reviewed these compliance guides?',
    a: 'Not yet. Call Della is not a law firm, and these guides are written by Call Della’s founder from the primary sources linked on each page: the ABA opinion and Model Rules, HHS guidance, federal regulations and state recording guides. They are not legal advice. Confirm anything you rely on with a licensed attorney in your state.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPLIANCE · GUIDE"
      title="AI Legal Intake Compliance Guide for Law Firms"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-26"
      breadcrumbs={[{ name: 'Compliance', href: SLUG }]}
      citations={[SRC.aba512, SRC.rule118, SRC.hhsCovered, SRC.rcfp, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            <strong>AI legal intake compliance</strong> is the set of ethics rules and laws a law firm must meet when an AI intake specialist answers its phone. The core sources are <a href={SRC.aba512.url}>ABA Formal Opinion 512</a> (July 29, 2024) on generative AI, <a href={SRC.rule118.url}>ABA Model Rule 1.18</a> on prospective clients, HIPAA where a firm works for a covered entity, and state call recording consent laws.
          </p>
          <p className="m-0">
            This hub summarizes each and links to a full guide. The guides are written from primary sources and are not legal advice.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What does AI legal intake compliance cover?</h2>
        <p>
          <strong>AI legal intake compliance covers four questions a firm must answer before an AI intake specialist takes its calls.</strong> The first is ethics: what the rules of professional conduct require when a lawyer uses AI, which ABA Formal Opinion 512 addresses. The second is confidentiality: what the firm owes a caller it may never represent, which ABA Model Rule 1.18 answers, and how that relates to attorney-client privilege. The third is health information: whether HIPAA governs the medical details callers share, which for most personal injury firms it does not. The fourth is recording: whether the firm can record calls, and what notice it must give, which depends on state law. Each question has its own guide below, written from the primary source and linked to it. None of them replaces your state’s rules or advice from a licensed attorney. Call Della is not a law firm, and no attorney has reviewed these guides yet.
        </p>

        <h2>What do the compliance guides cover?</h2>
        <p>
          <strong>The four guides cover ABA Formal Opinion 512, privilege and Rule 1.18, HIPAA at intake, and call recording consent in all 50 states and DC.</strong> Each answers the questions buyers ask most, with the rule or regulation quoted and linked.
        </p>
      </Prose>

      <div className="flex flex-col gap-6 my-8">
        {POSTS.map((p) => (
          <a
            key={p.path}
            href={p.path}
            className="block bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8 hover:shadow-[6px_6px_0_var(--rule)] transition-all duration-200 group no-underline"
          >
            <h3 className="text-[22px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] mb-3 group-hover:underline decoration-[var(--rule-soft)] underline-offset-4">
              {p.title}
            </h3>
            <p className="text-[15px] text-[var(--ink-soft)] font-serif leading-[1.6] m-0">{p.description}</p>
          </a>
        ))}
      </div>

      <Prose>
        <h2>What does ABA Formal Opinion 512 require of firms using AI intake?</h2>
        <p>
          <strong>ABA Formal Opinion 512 requires lawyers using generative AI to meet their existing duties of competence, confidentiality, communication, supervision, candor and reasonable fees.</strong> It does not create new rules or ban any tool. On competence, lawyers need a reasonable understanding of the tool’s capabilities and limits, and may not leave legal advice to AI alone. On confidentiality, they must assess the risk of disclosure before client information goes into a tool, and get informed consent for self-learning tools. On supervision, they must set firm policies and vet outside providers, including their security, confidentiality terms and breach notice. The opinion offers general guidance and binds no one directly, so each state’s version of the rules controls. Our guide, <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512 explained for law firm intake</a>, walks through each section and maps it to questions for an intake vendor.
        </p>

        <h2>Does AI intake affect attorney-client privilege?</h2>
        <p>
          <strong>Whether a particular intake call is privileged is decided by courts under each jurisdiction’s evidence law, but the duty of confidentiality applies to every call.</strong> Under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, a person who consults a lawyer about possibly forming a client-lawyer relationship is a prospective client. Even if the firm never takes the case, it may not use or reveal what that person shared, except as the former-client rule allows. Information from a prospective client can also disqualify the firm from acting against them in a related matter. The comment to Rule 1.18 advises limiting the first consultation to what the firm needs to decide whether to take the matter. An intake vendor is nonlawyer assistance under Rule 5.3, so the firm must supervise it. Our guide to <a href="/compliance/attorney-client-privilege-ai-intake">attorney-client privilege and AI intake</a> covers what to collect and what to check in a vendor contract.
        </p>

        <h2>Does HIPAA apply to law firm intake calls?</h2>
        <p>
          <strong>HIPAA usually does not apply to a law firm’s intake calls, because law firms are usually neither covered entities nor business associates.</strong> According to <a href={SRC.hhsCovered.url}>HHS</a>, covered entities are health plans, health care clearinghouses, and health care providers that transmit health information electronically in standard transactions. A firm becomes a business associate when it provides legal services to a covered entity that involve the disclosure of that entity’s protected health information, for example when defending a hospital. An injured person describing their own treatment to a personal injury firm is not that. The details are still sensitive and protected by the firm’s confidentiality duties. HIPAA does come in later, when a provider needs a signed authorization to release the client’s records. Our guide to <a href="/compliance/hipaa-at-intake-phi">HIPAA at legal intake</a> explains the business associate test and lists the medical details to capture on the first call.
        </p>

        <h2>Can a law firm record intake calls?</h2>
        <p>
          <strong>A law firm can generally record intake calls if it meets the consent rule that applies to the call.</strong> The federal Wiretap Act and most states allow recording with one party’s consent. By our count from the <a href={SRC.rcfp.url}>Reporters Committee for Freedom of the Press state guides</a>, {ALL_PARTY} states require all parties to consent to recording a phone call, and Connecticut, Delaware and Michigan have mixed or unsettled rules. Because callers may be in a different state from the firm, a recording notice at the start of every call is the common approach. Our <a href="/compliance/call-recording-consent-by-state">call recording consent by state</a> table lists the rule and statute for all 50 states and DC, marks the unsettled entries, and links to the source for each.
        </p>

        <h2>How does Della handle compliance on intake calls?</h2>
        <p>
          <strong>Della, Call Della’s intake specialist, is built to collect facts for the firm’s attorneys and leave every legal judgment to them.</strong> She answers in the firm’s name nights, weekends and holidays, and opens each call with a recording disclosure set for the firm’s state. She tells callers she is an AI if they ask, never claims to be human, and never gives legal advice. Every call is filed in the Call Della dashboard as a dossier with a summary, urgency score, recording and transcript, so an attorney can check the summary against what the caller said. Urgent calls reach the attorney on call by email, and the rest arrive in a 7am morning brief. Our <a href="/security">security page</a> sets out how call data is handled. The calls matter: according to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (2025)</a>, Clio’s 2024 secret-shopper study found that only 40 percent of law firms answered the phone, down from 56 percent in 2019. Della takes calls for <a href="/personal-injury">personal injury firms</a>, <a href="/criminal-defense">criminal defense firms</a> and <a href="/immigration">immigration firms</a>.
        </p>
      </Prose>

      <DemoCTA>
        Test Della against your own compliance questions. Book a demo, ask her whether she is an AI, ask her for legal advice, and see the dossier and recording your attorneys would review.
      </DemoCTA>

      <FAQ items={FAQS} heading="AI legal intake compliance: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
