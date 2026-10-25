import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, DemoCTA, SRC } from '../_ui';

const SLUG = '/intake-playbook/how-to-write-pi-intake-script';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'What should a personal injury intake script include?',
    a: 'A personal injury intake script should include an opening with the firm’s name, an early request for the caller’s name and number, any recording disclosure your state requires, the incident and injury questions in a fixed order, a neutral fault question, a line for advice requests, urgent-call rules and a close that sets a realistic callback time.',
  },
  {
    q: 'Should an intake script be read word for word?',
    a: 'The opening, the recording disclosure, the advice line and the close should be read as written, because they carry the firm’s legal and ethical commitments. The middle questions can be asked in natural words, as long as every question is asked and the answers are recorded in the same fields every time.',
  },
  {
    q: 'What should intake say when a caller asks if they have a case?',
    a: 'Intake should say that an attorney decides that, and give a time for the callback. A good line is: “I can’t tell you that, but I will make sure an attorney has every detail you have given me, and you will hear from the firm by a set time.” Never guess, and never promise representation.',
  },
  {
    q: 'How do you keep an intake script from sounding like an interrogation?',
    a: 'Start with an open question about what happened, listen, and only then move to the specific fields. Acknowledge what the caller says before asking the next question. Group questions by topic so the caller is not jumping between subjects. Callers who have just been hurt respond better to calm pacing than to a fast checklist.',
  },
  {
    q: 'How often should a firm update its intake script?',
    a: 'Review the script whenever the firm changes its case criteria, adds a practice area or a state, or sees the same follow-up question asked in consultations again and again. A quarterly review of recorded calls against signed and declined matters shows which questions are missing and which are wasted.',
  },
  {
    q: 'Does Della follow an intake script?',
    a: 'Della follows a structured personal injury intake: the opening in your firm’s name, the state recording disclosure, the incident, injury, treatment, insurance and fault questions, and a close that tells the caller when to expect a callback. She tells callers she is an AI if they ask, never gives legal advice and never quotes fees.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK · PERSONAL INJURY"
      title="How to write a personal injury intake script"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-16"
      breadcrumbs={[
        { name: 'Intake Playbook', href: '/intake-playbook' },
        { name: 'PI intake script', href: SLUG },
      ]}
      citations={[SRC.lmnc2019, SRC.civility2024, SRC.rule118, SRC.rule53]}
      tldr={
        <>
          <p className="mb-2">
            A personal injury intake script is the written order and wording of the questions a PI firm asks on every first call: the opening, the qualifying questions, the advice line and the close.
          </p>
          <p className="m-0">
            Write the opening first, because first impressions are where firms fail. In an ABA Law Practice Division benchmark, fewer than 10% of callers reached a lawyer and 6% got a rude or curt greeting.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is a personal injury intake script?</h2>
        <p>
          <strong>A personal injury intake script</strong> is the written sequence of lines and questions that whoever answers the phone uses on every new-client call. It sets the opening, the order of the qualifying questions, the exact wording for the moments with legal risk, and the close. A script is not a substitute for listening. Its job is to make sure every caller is asked the same questions and nothing important depends on who picked up. The script follows the firm&apos;s <Link href="/intake-playbook/what-should-be-on-a-pi-intake-form">personal injury intake form</Link>, so every answer lands in a field. The stakes are real. In the ABA Law Practice Division intake benchmark summarized by <a href={SRC.lmnc2019.url}>Lawyers Mutual NC (2019)</a>, 6% of callers received a rude or curt greeting and 11% of calls lasted under 10 seconds. A script fixes the first problem and shortens the second.
        </p>

        <h2>How should a personal injury intake script open?</h2>
        <p>
          <strong>A personal injury intake script should open with the firm&apos;s name, the speaker&apos;s name and an offer to help, then take the caller&apos;s name and number before anything else</strong>. The number comes first because injured callers are often on a mobile phone in a hospital or at the roadside, and calls drop. If your state requires a recording disclosure, it belongs in the opening, before the caller shares details. Our guide to <Link href="/compliance/call-recording-consent-by-state">call recording consent by state</Link> covers the rules. Keep the opening under 20 seconds. Then ask one open question and let the caller talk. The lines below are an example script, not a recording of a real call. Adapt the wording to your firm.
        </p>
        <div className="my-8 border-[1.5px] border-[var(--rule)] bg-[var(--paper)] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)] mb-4">Example script · opening</p>
          <ol>
            <li>&quot;Thank you for calling [Firm name]. This is [name]. How can I help?&quot;</li>
            <li>&quot;I&apos;m sorry that happened. So I can call you back if we get cut off, what&apos;s your name and the best number for you?&quot;</li>
            <li>[If required in your state] &quot;This call is recorded so the attorney has an accurate record.&quot;</li>
            <li>&quot;In your own words, tell me what happened.&quot;</li>
          </ol>
        </div>

        <h2>What order should the intake questions go in?</h2>
        <p>
          <strong>The intake questions should go from the caller&apos;s story to the specific facts, then to deadlines and history, then to the close</strong>. That order follows how people remember an injury. It also puts the deadline questions late enough that the caller is calm, and early enough that a short call still captures them. Ask for every party name before the caller goes into detail. Under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, information from a prospective client is protected even if the firm declines, so the conflict check should run before the firm hears the whole story. A workable order is:
        </p>
        <ol>
          <li>Opening, name and number, and any recording disclosure.</li>
          <li>&quot;Tell me what happened&quot;: the caller&apos;s account, uninterrupted.</li>
          <li>Incident type, date, time and location.</li>
          <li>Names of the other people, companies and insurers involved.</li>
          <li>Injuries, treatment so far and treatment planned.</li>
          <li>Police or incident report, witnesses, photos.</li>
          <li>Insurance, adjuster contact and any statement given.</li>
          <li>Any earlier lawyer on this matter.</li>
          <li>How they heard about the firm.</li>
          <li>The close: what happens next, and when.</li>
        </ol>

        <h2>How do you ask about fault without leading the caller?</h2>
        <p>
          <strong>You ask about fault with open questions about what each person did, and you record the answers without comment</strong>. Leading questions, such as &quot;The other driver ran the light, right?&quot;, produce answers that fall apart when the police report arrives. They also make the firm&apos;s record look coached. Better questions are: &quot;What were you doing just before it happened?&quot;, &quot;What did the other driver do?&quot; and &quot;Did anyone say anything at the scene?&quot; Then ask the plain factual questions that bear on shared fault: weather, speed, whether anyone was on a phone, whether there was a warning sign. Never tell the caller whether they were at fault. Fault rules differ by state, and our <Link href="/states">personal injury rules by state</Link> page shows which states use comparative or contributory fault. The attorney applies the rule. The script only collects the facts.
        </p>

        <h2>What should the script say when a caller asks for advice?</h2>
        <p>
          <strong>The script should give one fixed line for advice requests: an attorney will decide, and here is when you will hear from the firm</strong>. Callers ask &quot;Do I have a case?&quot;, &quot;What is it worth?&quot; and &quot;Should I talk to their insurance?&quot;. Each is a request for legal advice, and intake staff should not answer any of them. Under <a href={SRC.rule53.url}>ABA Model Rule 5.3</a>, lawyers with supervisory authority must make reasonable efforts to ensure that nonlawyer staff act consistently with the lawyer&apos;s professional obligations. A written advice line is one of those efforts. An example line: &quot;That&apos;s a question for the attorney, and I don&apos;t want to guess. I&apos;ll make sure they have everything you&apos;ve told me, and you&apos;ll hear from the firm by [time].&quot; The same line covers fee questions. Never quote a fee, a percentage or a settlement value.
        </p>

        <h2>How should the script handle urgent calls?</h2>
        <p>
          <strong>The script should name the situations that count as urgent and say exactly what happens when one comes up</strong>. For a personal injury firm, urgent usually means a serious injury or a death, a deadline that is close, evidence about to disappear, or a caller about to sign something with an insurer. Write those triggers into the script, so the person answering does not have to judge urgency alone. Then write the action: who is alerted, how, and what the caller is told. An urgent caller should hear something specific, such as &quot;I&apos;m marking this urgent for the attorney on call tonight,&quot; and never a promise that the firm will take the case. Anything not on the urgent list goes to the morning queue, ordered by incident date and injury. A short fixed list beats a long one, because people actually use it.
        </p>

        <h2>How do you close a personal injury intake call?</h2>
        <p>
          <strong>You close a personal injury intake call by reading back the contact details, saying what happens next, and giving a realistic time</strong>. Reading back the number catches the most common intake error, a wrong digit. Saying what happens next tells the caller the firm is acting. A realistic time sets an expectation the firm can meet. Avoid &quot;someone will call you soon&quot;; say &quot;the firm will call you tomorrow morning&quot; if that is true. Then end with a short, specific courtesy. The close matters for referrals. According to <a href={SRC.civility2024.url}>2Civility&apos;s summary of Clio&apos;s 2024 Legal Trends Report</a>, only 12% of secret shoppers were likely to recommend the firm they contacted. Shoppers who reached a person by phone were by far the most likely to recommend.
        </p>
        <div className="my-8 border-[1.5px] border-[var(--rule)] bg-[var(--paper)] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)] mb-4">Example script · close</p>
          <ol>
            <li>&quot;Let me read your number back to make sure I have it right.&quot;</li>
            <li>&quot;An attorney will review everything you&apos;ve told me. The firm will call you [time].&quot;</li>
            <li>&quot;If anything changes before then, or an insurance company contacts you, call this number.&quot;</li>
            <li>&quot;Thank you for calling. I hope you feel better soon.&quot;</li>
          </ol>
        </div>

        <h2>How do you test and update an intake script?</h2>
        <p>
          <strong>You test an intake script by listening to recorded calls and comparing them with the matters that were signed or declined</strong>. Three questions show where the script is weak. Which questions did attorneys have to ask again in the consultation? Which fields are blank most often? Where do callers get confused or hang up? Each answer points to a line to add, move or cut. Test changes on a few calls before rolling them out. Update the script whenever the firm changes its case criteria, adds a state, or adds a case type such as trucking or premises. Keep the version history, with dates, so you can tie a change in results to a change in wording. A script that has not changed in a year is usually missing something the attorneys now ask every time.
        </p>

        <h2>How does an AI intake specialist use a script?</h2>
        <p>
          <strong>An AI intake specialist follows the same structure as a human script, every time, at any hour</strong>. Della, Call Della&apos;s intake specialist, answers in your firm&apos;s name nights, weekends and holidays. She gives the recording disclosure set for your state, takes the caller&apos;s story, then asks the incident, injury, treatment, insurance and fault questions and reads the number back. When a caller asks for advice, Della uses the advice line: an attorney will decide. She never quotes fees or promises representation, and she tells callers she is an AI if they ask. Urgent calls go to the attorney on call by email alert, and every call is filed in the dashboard with a summary, urgency score, recording and transcript. Personal injury intake runs in English. See <Link href="/personal-injury">AI intake for personal injury law firms</Link>.
        </p>
      </Prose>

      <DemoCTA>
        Hear a personal injury intake script run live. Book a demo and Della will take a call for your practice area while you listen.
      </DemoCTA>

      <FAQ items={FAQS} heading="PI intake scripts: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
