import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { SRC } from '../_sources';

const SLUG = '/compliance/aba-formal-opinion-512-explained';
const TITLE = 'ABA Formal Opinion 512 Explained for Law Firm Intake';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'Is ABA Formal Opinion 512 binding on lawyers?',
    a: 'No. ABA formal opinions interpret the ABA Model Rules of Professional Conduct, and the opinion describes itself as offering general guidance. Lawyers are bound by the rules their own state has adopted. Many state rules follow the Model Rules closely, so state bars and courts often look to ABA opinions, but your state’s rules and opinions control.',
  },
  {
    q: 'When was ABA Formal Opinion 512 issued?',
    a: 'The ABA Standing Committee on Ethics and Professional Responsibility issued Formal Opinion 512, titled Generative Artificial Intelligence Tools, on July 29, 2024. It is based on the Model Rules as amended through August 2023, and it says the committee and state bars will likely offer updated guidance as the tools develop.',
  },
  {
    q: 'Does Opinion 512 require client consent before using AI?',
    a: 'Not in every case. Opinion 512 says informed consent is required before a lawyer inputs information relating to a representation into a self-learning tool whose output could lead to disclosure of that information. Where no client information goes in, consent is not needed. Boilerplate in an engagement letter is not enough for informed consent.',
  },
  {
    q: 'Does Opinion 512 say firms must tell callers they are talking to AI?',
    a: 'No. Opinion 512 discusses disclosure to clients under Rule 1.4, the duty to communicate, and says the facts of each case decide whether disclosure is required. It does not set a rule for intake callers. Della tells callers she is an AI if they ask and never claims to be human. Check your state’s rules and advertising opinions too.',
  },
  {
    q: 'Can an AI intake tool give legal advice under Opinion 512?',
    a: 'Opinion 512 says lawyers may not leave it to AI tools alone to offer legal advice to clients, negotiate claims, or perform other functions that require a lawyer’s personal judgment. For intake, that means the tool should collect facts and route the matter, and an attorney should give any advice. Della never gives legal advice.',
  },
  {
    q: 'Which Model Rules does Opinion 512 cover?',
    a: 'Opinion 512 covers competence (Rule 1.1), confidentiality (Rule 1.6, with 1.9(c) and 1.18(b) for former and prospective clients), communication (Rule 1.4), meritorious claims and candor toward the tribunal (Rules 3.1, 3.3 and 8.4(c)), supervision (Rules 5.1 and 5.3) and fees (Rule 1.5). It notes that Rules 7.1, 1.7 and 1.9 may also be relevant.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPLIANCE · ETHICS OPINIONS"
      title={TITLE}
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-28"
      breadcrumbs={[
        { name: 'Compliance', href: '/compliance' },
        { name: 'ABA Formal Opinion 512', href: SLUG },
      ]}
      citations={[SRC.aba512, SRC.rule118, SRC.rule53, SRC.rule53c, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            <strong>ABA Formal Opinion 512</strong> is the American Bar Association’s ethics opinion on generative AI tools, issued on July 29, 2024 by its Standing Committee on Ethics and Professional Responsibility. It creates no new rules. It applies existing Model Rules to AI: competence, confidentiality, client communication, candor toward courts, supervision and fees.
          </p>
          <p className="m-0">
            The opinion offers general guidance and binds no one directly; each state’s own rules control. For intake, the parts that matter most are confidentiality of prospective-client information, supervision of vendors, and the line that AI tools may not be left alone to give legal advice. <a href={SRC.aba512.url}>Read the opinion (PDF)</a>.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is ABA Formal Opinion 512?</h2>
        <p>
          <strong>ABA Formal Opinion 512 is a 15-page ethics opinion titled “Generative Artificial Intelligence Tools”, issued on July 29, 2024.</strong> It opens with a single sentence that sets its scope: lawyers using generative AI must fully consider their duties to provide competent representation, protect client information, communicate with clients, supervise employees and agents, advance only meritorious claims, ensure candor toward the tribunal, and charge reasonable fees. The opinion is based on the ABA Model Rules as amended through August 2023. It describes itself as identifying “some ethical issues” and offering “general guidance”. It also says the tools are “a rapidly moving target” and expects the committee and state bars to update their guidance as the tools change. That framing matters. Opinion 512 is not a statute or a court rule. It is the ABA committee’s reading of the Model Rules, which each state adopts in its own version. A firm should read it alongside its own state’s rules and any state bar opinions on AI.
        </p>

        <h2>Does ABA Formal Opinion 512 apply to AI intake?</h2>
        <p>
          <strong>Opinion 512 applies to any generative AI tool a lawyer uses, but it does not single out phone intake.</strong> Its examples are legal research, contract review, document review and drafting. The principles still reach intake, because an intake call collects information from a <strong>prospective client</strong>. The opinion’s confidentiality section says Model Rule 1.18(b) requires lawyers to protect prospective clients’ information much as they protect clients’ information. A footnote also flags issues the opinion does not fully address, including Rule 7.1 on communications about a lawyer’s services. In that footnote the opinion cites Florida Bar Ethics Opinion 24-1, which discusses generative AI chatbots under Florida’s rule against misleading and manipulative advertising. So a firm using an AI intake specialist should read Opinion 512 for the general duties, then check its own state’s opinions for anything specific to client-facing tools. Our guide to <a href="/compliance/attorney-client-privilege-ai-intake">privilege and Rule 1.18 at intake</a> covers the prospective-client duty in detail.
        </p>

        <h2>What does Opinion 512 say about competence under Rule 1.1?</h2>
        <p>
          <strong>Under Rule 1.1, Opinion 512 says lawyers need “a reasonable understanding of the capabilities and limitations” of the AI tools they use, though they need not become AI experts.</strong> Lawyers can get there by self-study, by working with a competent lawyer, or by consulting someone with expertise, and they must keep up as the tools change. The opinion warns that AI tools can produce inaccurate output and “hallucinations”. It cites a Stanford study finding that leading legal research AI tools “hallucinate between 17% and 33% of the time” (<a href={SRC.aba512.url}>ABA Formal Opinion 512, 2024</a>, note 14). Relying on AI output without appropriate independent verification could breach Rule 1.1. The opinion is direct on one point that matters for intake: lawyers may not leave it to AI tools alone “to offer legal advice to clients, negotiate clients’ claims, or perform other functions that require a lawyer’s personal judgment or participation”. An intake tool should gather facts and hand them to a lawyer, not advise the caller.
        </p>

        <h2>What does Opinion 512 say about confidentiality under Rule 1.6?</h2>
        <p>
          <strong>Opinion 512 says that before lawyers put information relating to a representation into an AI tool, they must evaluate the risk that it will be disclosed to or accessed by others, inside or outside the firm.</strong> That analysis is fact-driven: it depends on the client, the matter, the task and the tool. The opinion then focuses on <strong>self-learning tools</strong>, which can surface one client’s information in answers to other users. Because many such tools are designed so their output could lead to disclosure, a client’s informed consent is required before inputting representation information into them. Informed consent means real explanation of the risks and benefits; “general, boiler-plate provisions” in an engagement letter are not enough. The opinion does not say that any use of AI breaches Rule 1.6. It says consent is not needed where no representation information goes in. As a baseline, lawyers should read the tool’s terms of use and privacy policy, or have someone who has read them advise.
        </p>

        <h2>Does Opinion 512 require telling callers they are speaking to AI?</h2>
        <p>
          <strong>No. Opinion 512 does not set a rule that callers must be told they are speaking to AI.</strong> Its disclosure discussion is about clients, under Rule 1.4, the duty to communicate. The opinion says the facts of each case decide whether a lawyer must disclose AI use to a client, and that “depending on the circumstances, client disclosure may be unnecessary.” Lawyers must disclose if a client asks how the work was done, if the engagement terms require it, if client information will go into a self-learning tool, if AI use affects the fee, or if AI output will influence a significant decision in the matter. The opinion adds that lawyers may tell clients how they use AI even when no rule requires it. State rules and advertising opinions can go further, as the Florida opinion cited in Opinion 512 shows. Call Della’s rule is consistent on every call: Della tells callers she is an AI if they ask, and she never claims to be human.
        </p>

        <h2>What does Opinion 512 say about supervising AI vendors under Rules 5.1 and 5.3?</h2>
        <p>
          <strong>Opinion 512 says managerial lawyers must set clear firm policies on permissible AI use, and supervisory lawyers must make reasonable efforts to ensure lawyers and staff follow them.</strong> That includes training on the tools, their limits, and secure data handling. For outside providers, the opinion applies <a href={SRC.rule53.url}>Model Rule 5.3(b)</a> and earlier outsourcing opinions. It lists diligence points for vendors: reference checks and credentials, the vendor’s security policies, hiring practices, confidentiality agreements, its conflicts process, and whether there is a legal forum for relief if the vendor breaches. From the cloud-computing opinions it adds four checks. Lawyers should ensure the tool is configured to preserve confidentiality, that the obligation is enforceable, and that they will be notified of a breach. They should investigate reliability and security. They should find out whether the tool keeps data after the service ends or claims rights in it. And they should understand the risk of server failures and cyber-attacks. An intake vendor is a nonlawyer service, so these checks apply to it.
        </p>

        <h2>What does Opinion 512 say about fees under Rule 1.5?</h2>
        <p>
          <strong>Opinion 512 says lawyers who bill hourly must bill for the time they actually spend, even when AI makes them faster.</strong> A lawyer who spends 15 minutes prompting a tool to draft a pleading may bill those 15 minutes plus the time spent reviewing the draft, but no more. Flat and contingent fees must still be reasonable under the Rule 1.5(a) factors. On costs, the opinion separates overhead from expenses. A tool that works like equipping and maintaining a practice, such as a grammar checker built into word processing software, is overhead and should not be charged to clients without advance disclosure. A per-use third-party tool run for one client’s matter can ordinarily be billed as an actual out-of-pocket expense. Lawyers also may not bill clients for learning a tool they will use regularly. A firm-wide intake service answers every caller, not one client’s matter, so firms should consider which side of that line it falls on before passing any cost through.
        </p>

        <h2>What does Opinion 512 say about candor toward the tribunal?</h2>
        <p>
          <strong>Opinion 512 says AI output must be carefully reviewed before anything goes to a court, under Rules 3.1, 3.3 and 8.4(c).</strong> Rule 3.1 bars frivolous claims and contentions. Rule 3.3 bars knowingly false statements of law or fact to a tribunal. Rule 8.4(c) bars conduct involving dishonesty, fraud, deceit or misrepresentation, and the opinion notes that even an unintentional misstatement can involve misrepresentation. The problems seen so far include citations to nonexistent opinions, inaccurate analysis of authority and misleading arguments. Some courts now require lawyers to disclose AI use, so the opinion tells lawyers to check local rules. For intake, this section is mostly indirect. An intake summary is a starting point for the attorney, not evidence. Facts from an AI intake summary should be confirmed with the client, and against the call recording or transcript, before they appear in a demand letter, complaint or filing.
        </p>

        <h2>How should a firm apply Opinion 512 to an intake vendor?</h2>
        <p>
          <strong>A firm can apply Opinion 512 to an intake vendor by turning each section into a question for the vendor and for itself.</strong> The table maps the opinion to intake. It is a working checklist, not a compliance certificate.
        </p>
      </Prose>

      <Table
        caption="ABA Formal Opinion 512 applied to AI intake"
        head={['Rule', 'What Opinion 512 says', 'Question to ask about intake']}
        rows={[
          ['1.1 Competence', 'Understand the tool’s capabilities and limits; verify output; do not leave legal advice to AI alone.', 'Does the tool refuse to give legal advice? Can an attorney check each summary against the recording and transcript?'],
          ['1.6 and 1.18 Confidentiality', 'Assess disclosure risk before input; informed consent for self-learning tools; read the terms of use.', 'Is caller information used to train models? Who can access it, and is it kept after the contract ends?'],
          ['1.4 Communication', 'Disclosure to clients depends on the facts; required if a client asks.', 'What does the tool say when a caller asks whether it is an AI?'],
          ['5.1 and 5.3 Supervision', 'Firm AI policies, training, and vendor diligence on security, confidentiality and breach notice.', 'Is there a written confidentiality obligation, breach notice, and a named contact?'],
          ['1.5 Fees', 'Bill actual time; overhead is not an expense without disclosure.', 'Is the intake service overhead, or a cost the engagement letter discloses?'],
          ['3.1, 3.3, 8.4(c) Candor', 'Review all AI output before it reaches a court.', 'Are intake facts confirmed with the client before they appear in a filing?'],
        ]}
      />

      <Prose>
        <h2>How does Call Della line up with Opinion 512?</h2>
        <p>
          <strong>Della is built around the parts of Opinion 512 that touch intake: she collects facts, never gives legal advice, and leaves every judgment call to the firm’s attorneys.</strong> Della answers in the firm’s name nights, weekends and holidays. She tells callers she is an AI if they ask, never claims to be human, and opens every call with a recording disclosure set for the firm’s state; our <a href="/compliance/call-recording-consent-by-state">call recording consent by state</a> table explains why. Every call lands in the Call Della dashboard as a dossier with a summary, urgency score, recording and transcript, so an attorney can verify the summary against the source, as Rule 1.1 expects. Urgent calls reach the attorney on call by email, and the rest arrive in a 7am morning brief. Our <a href="/security">security page</a> sets out how call data is handled, for your Rule 5.3 review. Whether your firm’s use meets your state’s rules is your firm’s decision. The gap Della fills is real: according to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (2025)</a>, only 40 percent of firms answered the phone in Clio’s 2024 secret-shopper study. See how Della handles <a href="/personal-injury">personal injury intake</a>, <a href="/criminal-defense">criminal defense calls</a> and <a href="/immigration">immigration calls</a>.
        </p>
      </Prose>

      <DemoCTA>
        Put Della through your own Opinion 512 checklist. Book a demo, ask her whether she is an AI, ask her for legal advice, and see the dossier she files.
      </DemoCTA>

      <FAQ items={FAQS} heading="ABA Formal Opinion 512: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
