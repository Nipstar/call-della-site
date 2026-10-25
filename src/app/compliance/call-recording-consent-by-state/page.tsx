import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, page } from '@/data/pages';
import { graph, ORG_ID } from '@/lib/schema';
import { SITE_URL } from '@/lib/config';
import { RECORDING_CONSENT, byConsent, rcfpUrl } from '@/data/recordingConsent';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { SRC } from '../_sources';

const SLUG = '/compliance/call-recording-consent-by-state';
const TITLE = 'Call Recording Consent by State for Law Firm Intake';
export const metadata = pageMeta(SLUG);

const ALL = byConsent('all-party');
const MIXED = byConsent('mixed');
const ONE = byConsent('one-party');
const names = (list: typeof ALL) => list.map((s) => s.name).join(', ');

const LABEL = { 'one-party': 'One-party', 'all-party': 'All-party', mixed: 'Mixed' } as const;

const datasetNode = {
  '@type': 'Dataset',
  '@id': `${SITE_URL}${SLUG}#dataset`,
  name: 'Phone call recording consent rules by US state (50 states and DC)',
  description:
    'For each US state and the District of Columbia: whether recording a phone call needs one party’s or all parties’ consent, the statute, and notes on mixed or unsettled rules. Checked against the Reporters Committee for Freedom of the Press state guides and statute text. Not legal advice.',
  url: `${SITE_URL}${SLUG}`,
  creator: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  temporalCoverage: '2026',
  dateModified: page(SLUG).dateModified,
  spatialCoverage: { '@type': 'Place', name: 'United States' },
  isAccessibleForFree: true,
  isBasedOn: SRC.rcfp.url,
  license: { '@type': 'CreativeWork', name: 'Free to cite with attribution and a link to this page. Not legal advice; confirm with a licensed attorney.' },
  variableMeasured: ['Phone recording consent rule', 'Statute citation', 'Notes on mixed or unsettled rules'],
};

const FAQS = [
  {
    q: 'What are the two-party consent states?',
    a: `For recorded phone calls, the all-party (often called two-party) consent states are ${names(ALL)}. Connecticut, Delaware and Michigan have mixed or unsettled rules. Every other state and DC allows recording with one party's consent. This list reflects our check on 25 October 2026 and is not legal advice.`,
  },
  {
    q: 'Is two-party consent the same as all-party consent?',
    a: 'Yes. "Two-party consent" is the common name, but the statutes require the consent of every party to the call, however many there are. A three-way call in Florida or Pennsylvania needs all three people to consent. That is why this guide uses "all-party", which matches the statutory wording more closely.',
  },
  {
    q: 'Does federal law allow one-party consent recording?',
    a: 'Yes. The federal Wiretap Act, 18 U.S.C. § 2511, allows a party to a call, or someone with one party’s consent, to record it, unless the recording is made to commit a criminal or tortious act. State law can be stricter, so a firm must also meet the rule of any all-party state involved in the call.',
  },
  {
    q: 'Can a law firm record intake calls?',
    a: 'In general, yes, if it meets the consent rule that applies to the call. Most firms that record intake calls play a recording notice at the start, which addresses all-party states and keeps the practice the same on every call. Confirm the rules for your state and your callers’ states with a licensed attorney before you start.',
  },
  {
    q: 'Is a recorded announcement enough consent?',
    a: 'In several states the statute or the courts treat a clear notice as enough. Connecticut’s civil statute accepts a recorded verbal notice at the start of the call, and Washington accepts a reasonably effective recorded announcement. Pennsylvania courts find consent where a party knew or should have known. Other states have not said so as clearly.',
  },
  {
    q: 'Is Michigan a one-party or all-party consent state?',
    a: 'Michigan is unsettled. The statute bars recording private conversations without all parties’ consent, but a 1982 Court of Appeals decision, Sullivan v. Gray, held that a participant may record a conversation they are part of. The Michigan Supreme Court has not ruled, so most firms disclose recording on Michigan calls.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="COMPLIANCE · REFERENCE TABLE"
      title={TITLE}
      slug={SLUG}
      author="Andy Norman"
      date="2026-10-25"
      breadcrumbs={[
        { name: 'Compliance', href: '/compliance' },
        { name: 'Call recording consent by state', href: SLUG },
      ]}
      citations={[SRC.rcfp, SRC.ct52570d, SRC.ors165540, SRC.aba512, SRC.abaLpm2025]}
      tldr={
        <>
          <p className="mb-2">
            <strong>Call recording consent</strong> is the permission a state’s wiretap law requires before a phone call can be recorded. Federal law and most states allow recording with one party’s consent. By our count from the{' '}
            <a href={SRC.rcfp.url}>Reporters Committee for Freedom of the Press state guides</a>, {ALL.length} states require all parties to consent to recording a phone call, and {MIXED.length} more have mixed or unsettled rules.
          </p>
          <p className="m-0">
            The table below covers all 50 states and DC, with the statute for each. A law firm intake line that discloses recording at the start of every call meets the strictest rule in the table.
          </p>
        </>
      }
    >
      <JsonLd data={graph(datasetNode)} />
      <Prose>
        <p>
          <em>
            This page is a reference for law firms, not legal advice. Recording law changes and turns on facts. Confirm the rule for your state, and your callers’ states, with a licensed attorney before you rely on it.
          </em>
        </p>

        <h2>What is the difference between one-party and all-party consent?</h2>
        <p>
          <strong>One-party consent</strong> means a call may be recorded if one person on the call agrees, and that person can be the one recording. <strong>All-party consent</strong> means everyone on the call must agree. The federal Wiretap Act, 18 U.S.C. § 2511, sets a one-party floor for the whole country. States can add stricter rules, and {ALL.length} states have done so for phone calls. All-party states are often called “two-party consent states”, but the statutes cover every party, so a three-way call needs three consents. A law firm’s intake line sits on one side of the call, which is why one-party states rarely cause trouble. The risk sits with callers in all-party states, and with mixed states where the rule depends on whether a case is civil or criminal. A recorded notice at the start of the call is the common way firms handle both.
        </p>

        <h2>Which states require all-party consent to record a phone call?</h2>
        <p>
          <strong>
            {ALL.length} states require all parties to consent before a phone call is recorded: {names(ALL)}.
          </strong>{' '}
          The rules differ in detail. California’s Penal Code § 632 protects confidential communications, and § 632.7 covers cellular and cordless calls regardless of confidentiality. Montana’s statute turns on the “knowledge” of all parties and exempts people given a warning that the call is recorded. Massachusetts applies its law to secret recordings, so consent is not needed when everyone knows the call is being recorded. Washington treats a reasonably effective recorded announcement as consent. Nevada requires all-party consent for phone calls but only one-party consent for in-person conversations. Each entry in the table links to the Reporters Committee page we checked, so you can read the detail and the cases for yourself.
        </p>

        <h2>Which states have mixed or unsettled recording rules?</h2>
        <p>
          <strong>Connecticut, Delaware and Michigan have mixed or unsettled rules for recording phone calls.</strong> Connecticut’s criminal law allows one-party consent, but its civil statute, <a href={SRC.ct52570d.url}>Conn. Gen. Stat. § 52-570d</a>, makes a person liable for recording a phone call without all parties’ consent, a recorded notice at the start, or a periodic warning tone. Delaware has two statutes that conflict: the wiretap law allows one-party consent and the privacy law requires all parties’ consent. Michigan’s statute reads as all-party, but a 1982 appellate decision held that a participant may record, and the state supreme court has not ruled. Oregon allows one-party consent for phone calls under <a href={SRC.ors165540.url}>ORS 165.540(1)(a)</a>, while its in-person rule has been in federal litigation since 2023. Hawaii allows one-party consent for calls but requires all parties’ consent for recording devices in a private place. Entries we could not settle carry a visible “verify” note.
        </p>

        <h2>What does each state require to record a phone call?</h2>
        <p>
          <strong>The table lists the phone-call rule for all 50 states and DC, the statute, and notes where the rule is mixed or unsettled.</strong> “One-party” means one participant’s consent is enough. “All-party” means everyone on the call must consent. “Mixed” means the answer depends on the statute or court you ask. The last column shows when the Reporters Committee last updated its page for that state; we read each page on 25 October 2026.
        </p>
      </Prose>

      <Table
        caption={`Phone call recording consent by state: ${ONE.length} one-party, ${ALL.length} all-party, ${MIXED.length} mixed (checked 25 Oct 2026)`}
        head={['State', 'Phone calls', 'Statute', 'Notes', 'Source']}
        rows={RECORDING_CONSENT.map((s) => [
          s.name,
          <span key="c" className={s.phone === 'one-party' ? '' : 'font-semibold'}>{LABEL[s.phone]}</span>,
          s.statute,
          <span key="n">
            {s.note ?? ''}
            {s.verify && (
              <span className="block mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)]">
                Verify: <span className="normal-case tracking-normal font-serif text-[13px]">{s.verify}</span>
              </span>
            )}
          </span>,
          <a key="s" href={rcfpUrl(s)} className="underline underline-offset-4 decoration-[var(--rule-soft)]">
            RCFP, {s.rcfpUpdated}
          </a>,
        ])}
      />

      <Prose>
        <h2>Which law applies when the caller is in another state?</h2>
        <p>
          <strong>When the caller and the firm are in different states, more than one state’s recording law can be in play, and the answer is not settled for every pair of states.</strong> A Texas firm, in a one-party state, can still take a call from a driver in California or a family member in Florida, both all-party states. Courts decide these conflicts case by case, so a rule of thumb is the safer plan: treat every call as if the strictest state on the line applies. In practice that means a recording notice at the start of every call, whatever the firm’s own state. Intake lines take calls from people who have moved, are travelling, or are calling about someone held in another state. Immigration firms in particular take calls about detention in other states. A notice on every call removes the need to work out the caller’s location before the conversation starts. Our <a href="/immigration">immigration intake</a> page covers those calls.
        </p>

        <h2>Is a recorded announcement enough to count as consent?</h2>
        <p>
          <strong>In several states a clear recorded notice at the start of the call counts as consent, or removes the call from the statute.</strong> Connecticut’s civil statute accepts a verbal notice recorded at the beginning of the call. Washington accepts a reasonably effective recorded announcement to all parties. Montana exempts people who are warned the call is recorded. Pennsylvania courts find consent where a party knew or reasonably should have known the call was recorded. A North Carolina appellate court held that a party who is warned and keeps talking has impliedly consented. Massachusetts applies its law only to secret recordings. The pattern across these states is that notice, given before the substance of the call, does most of the work. Some all-party states have not ruled on recorded notices as clearly, so the wording should be plain and should come first: “This call is recorded.” A caller who objects can be offered a callback.
        </p>

        <h2>How should a law firm’s intake line handle call recording?</h2>
        <p>
          <strong>A law firm’s intake line should disclose recording at the start of every call, in plain words, before the caller explains their matter.</strong> The steps below are a practical baseline, not a substitute for advice on your state’s rules.
        </p>
        <ol>
          <li>Play a recording notice before any substantive conversation, on every call, including calls from one-party states.</li>
          <li>Use plain wording: “This call is recorded for the attorney’s review.” Avoid vague phrases a caller may not register.</li>
          <li>Give callers who object a way forward, such as a callback during office hours without recording.</li>
          <li>Keep recordings under the firm’s retention policy and limit who can hear them, because they hold prospective-client information protected by <a href="/compliance/attorney-client-privilege-ai-intake">ABA Model Rule 1.18</a>.</li>
          <li>Check the rule again for calls involving Connecticut, Delaware, Michigan and the all-party states.</li>
        </ol>
        <p>
          The confidentiality side matters as much as the consent side. A recording of an injured person describing their treatment is sensitive, which our <a href="/compliance/hipaa-at-intake-phi">HIPAA at intake guide</a> covers.
        </p>

        <h2>How does Della handle recording disclosure?</h2>
        <p>
          <strong>Della, Call Della’s intake specialist, opens every call with a recording disclosure set for the firm’s state.</strong> The disclosure is part of every plan, alongside the dashboard where each call is filed as a dossier with a summary, urgency score, recording and transcript. Della answers in the firm’s name nights, weekends and holidays. She tells callers she is an AI if they ask, never claims to be human, and never gives legal advice. The recording and transcript let an attorney check Della’s summary against what the caller actually said, which is the kind of review <a href={SRC.aba512.url}>ABA Formal Opinion 512</a> expects of lawyers using AI tools. The stakes of answering are real: according to <a href={SRC.abaLpm2025.url}>ABA Law Practice Magazine (2025)</a>, Clio’s 2024 secret-shopper study found that only 40 percent of law firms answered phone calls, down from 56 percent in 2019. See how Della runs <a href="/personal-injury">after-hours personal injury intake</a> and <a href="/criminal-defense">criminal defense intake</a>.
        </p>

        <h2>How was this table built?</h2>
        <p>
          <strong>
            We checked each state against its page in the <a href={SRC.rcfp.url}>Reporters Committee for Freedom of the Press Reporter’s Recording Guide</a> on 25 October 2026, and against statute text for Connecticut and Oregon.
          </strong>{' '}
          The table records the rule for phone calls only. In-person recording, hidden cameras and text messages follow different rules in several states. Some Reporters Committee pages were last updated in 2019 or 2020, and the update date for each is in the table, so check the statute itself where the date matters to you. Three entries carry a “verify” note because the law is unsettled: Delaware’s conflicting statutes, Michigan’s participant question and Oregon’s in-person rule. Call Della is not a law firm, and no attorney has reviewed this table. If you spot an error, email us and we will correct it with a dated note.
        </p>
      </Prose>

      <DemoCTA>
        Hear the disclosure for your state on a live call. Book a demo and Della will take an intake call for your practice area, then show you the dossier with the recording and transcript.
      </DemoCTA>

      <FAQ items={FAQS} heading="Call recording consent: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
