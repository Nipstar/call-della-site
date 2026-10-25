import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { SecurityStrip } from '@/components/sections/SecurityStrip';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { HomeFinalCTA } from '@/components/sections/HomeFinalCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { Eyebrow, Headline } from '@/components/Typography';
import { pageMeta } from '@/data/pages';
import { graph } from '@/lib/schema';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = pageMeta('/how-it-works');

const OBA_URL = 'https://www.okbar.org/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/';

const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';
const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';
const th = 'text-left align-top p-3 border-b-[1.5px] border-[var(--rule)] font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--ink-soft)]';
const td = 'align-top p-3 border-b border-[var(--rule-soft)] font-serif text-[15px] text-[var(--ink)] leading-[1.5]';

const steps = [
  {
    name: 'Forward your after-hours line',
    text: 'Your firm gets its own Della number. You set your phones to forward to it when the office closes, and we place a test call with you before you go live.',
  },
  {
    name: 'Della runs the intake questions',
    text: 'Della answers in your firm’s name and asks the questions for your practice area: what happened, when and where, who is calling, how to reach them and any deadline.',
  },
  {
    name: 'She scores urgency and alerts the attorney on call',
    text: 'Each call gets an urgency score. When a matter cannot wait, such as an arrest or a detention, the attorney on call gets an email alert.',
  },
  {
    name: 'The dossier and morning brief arrive by 7am',
    text: 'Every call is filed as a dossier with summary, urgency score, recording and transcript, and the morning brief reaches your team by 7am in your time zone.',
  },
];

const howTo = {
  '@type': 'HowTo',
  '@id': `${SITE_URL}/how-it-works#howto`,
  name: 'How AI legal intake works with Call Della',
  description: 'Four steps from a forwarded after-hours call to a dossier on your desk by 7am.',
  step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text, url: `${SITE_URL}/how-it-works#step-${i + 1}` })),
};

// Distinct from the home page FAQ (BrandFAQ). Don't repeat questions across the two.
const faq = [
  {
    q: 'How do we forward our phone line to Della?',
    a: 'Every plan includes your own Della number. Your firm sets its phone system or carrier to forward calls to that number outside office hours, the same way you would forward to an answering service. Before you go live, we run a test call together so you can hear the greeting and see the dossier it produces.',
  },
  {
    q: 'How does Della decide a call is urgent?',
    a: 'Della scores each call for urgency from what the caller tells her: a person in custody, a detention, a court date or filing deadline that is close, or a serious injury. The score sits on the dossier, and the morning brief ranks calls by it so your team calls back the most time-sensitive matters first.',
  },
  {
    q: 'How are urgent calls escalated overnight?',
    a: 'When Della marks a call urgent, the attorney on call gets an email alert with the caller’s details and the summary, so a lawyer can decide whether to call back that night. Alerts go by email today. The full recording and transcript are in the Call Della dashboard with the dossier.',
  },
  {
    q: 'What is in the morning brief?',
    a: 'The morning brief is a summary of every call Della took overnight, ranked by urgency, delivered by 7am in your time zone. Each entry links to the full dossier with the caller’s contact details, the facts they gave, the urgency score, the recording and the transcript, so intake staff can start callbacks straight away.',
  },
  {
    q: 'Is every call recorded?',
    a: 'Yes. Della records and transcribes every call so your attorneys can check her summary against what the caller actually said. Each call carries the recording disclosure set for your state. Your firm owns the recordings and transcripts, and retention is set per firm. The security page explains how call data is handled.',
  },
  {
    q: 'What happens if a caller asks Della a legal question?',
    a: 'Della does not answer it. She tells the caller that an attorney will address the question on the callback, records the question in the dossier and moves on with the intake. Della never gives legal advice, never quotes fees and never tells a caller the firm will take the case.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(howTo)} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="px-4 md:px-8 pt-12 pb-8 max-w-[860px] mx-auto">
            <Breadcrumbs items={[{ name: 'How it works', href: '/how-it-works' }]} />
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <Headline as="h1" size={46} maxWidth={820}>
              How AI legal intake works, step by step
            </Headline>
            <div className="answer-block mt-7 flex flex-col gap-4 max-w-[720px]">
              <p className={para}>
                <strong>Legal intake automation</strong> is software that answers a law firm&rsquo;s calls, asks the
                first-call intake questions and files the answers as a record the firm can act on. With Call Della it
                takes four steps: you forward your after-hours line, Della runs the intake, she scores urgency and
                alerts the attorney on call, and the dossier and morning brief arrive by 7am.
              </p>
              <p className={para}>
                Della covers personal injury, criminal defense and immigration, each with its own questions. She never
                gives legal advice and never claims to be human.
              </p>
            </div>
          </section>

          <section id="steps" className="px-4 md:px-8 py-10 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>How does legal intake automation work?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Legal intake automation with Call Della works by moving your after-hours calls from voicemail to an
                intake specialist who files every call. Setup needs no new phone system, because forwarding happens on
                the line your firm already has. The four steps below run on every call, every night.
              </p>
            </div>
            <ol className="mt-8 flex flex-col gap-5 list-none p-0">
              {steps.map((s, i) => (
                <li key={s.name} id={`step-${i + 1}`} className="bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-5 md:p-6">
                  <h3 className="m-0 text-[20px] font-semibold font-serif text-[var(--ink)]">
                    <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--ink-soft)] mr-3">{String(i + 1).padStart(2, '0')}</span>
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[16px] text-[var(--ink)] font-serif leading-[1.6] m-0">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="questions" className="px-4 md:px-8 py-10 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>What does automated legal intake ask callers?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Automated legal intake with Della asks the questions a trained intake specialist would ask for the
                caller&rsquo;s practice area, in a set order. Every call captures the caller&rsquo;s name, phone number,
                relationship to the matter and best callback time. The rest depends on the practice area, as the table
                shows. Della records anything she cannot resolve as a follow-up question for the attorney rather than
                guessing.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <caption className="sr-only">What Della captures by practice area</caption>
                <thead>
                  <tr>
                    <th scope="col" className={th}>Practice area</th>
                    <th scope="col" className={th}>What Della captures</th>
                    <th scope="col" className={th}>Typical urgent signal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className={td}><a href="/personal-injury" className={link}>Personal injury</a></th>
                    <td className={td}>Incident type, date and place, injuries, treatment so far, insurance contacts, fault, prior counsel</td>
                    <td className={td}>Serious injury, a filing deadline close to expiring</td>
                  </tr>
                  <tr>
                    <th scope="row" className={td}><a href="/criminal-defense" className={link}>Criminal defense</a></th>
                    <td className={td}>Charges, custody status and facility, court date, who is calling for the defendant</td>
                    <td className={td}>Someone in custody, a hearing within a day</td>
                  </tr>
                  <tr>
                    <th scope="row" className={td}><a href="/immigration" className={link}>Immigration</a></th>
                    <td className={td}>Matter type, status, detention details, filing or hearing deadlines, in English or Spanish</td>
                    <td className={td}>A detention, a removal hearing or filing deadline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="compared" className="px-4 md:px-8 py-10 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>How is law firm intake automation different from voicemail or a message service?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Law firm intake automation differs from voicemail and message-taking services in what reaches the firm
                the next morning. Voicemail depends on the caller leaving details and waiting. A message service passes
                on a name and number. Della runs the intake itself, so the firm starts the day with facts, an urgency
                score and a recording. According to{' '}
                <a href={OBA_URL} className={link}>the Oklahoma Bar Journal (September 2025)</a>, Clio&rsquo;s 2024 Legal
                Trends Report found that only 40% of firms answered a prospective client&rsquo;s call.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <caption className="sr-only">After-hours call handling options compared</caption>
                <thead>
                  <tr>
                    <th scope="col" className={th}>&nbsp;</th>
                    <th scope="col" className={th}>Voicemail</th>
                    <th scope="col" className={th}>Message service</th>
                    <th scope="col" className={th}>Call Della</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row" className={td}>Who answers</th><td className={td}>No one</td><td className={td}>An operator</td><td className={td}>Della, in your firm&rsquo;s name</td></tr>
                  <tr><th scope="row" className={td}>Intake questions</th><td className={td}>None</td><td className={td}>Usually name, number, reason</td><td className={td}>The full first-call intake for the practice area</td></tr>
                  <tr><th scope="row" className={td}>Urgent calls</th><td className={td}>Found next morning</td><td className={td}>Depends on the service</td><td className={td}>Urgency score and email to the attorney on call</td></tr>
                  <tr><th scope="row" className={td}>Next morning</th><td className={td}>A voicemail box</td><td className={td}>A message log</td><td className={td}>Dossiers and a ranked brief by 7am</td></tr>
                </tbody>
              </table>
            </div>
            <p className={`${para} mt-6`}>
              For costs and in-house staffing, see{' '}
              <a href="/operations/after-hours-intake-comparison" className={link}>after-hours intake options compared</a>.
            </p>
          </section>

          <section id="morning" className="px-4 md:px-8 py-10 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>What does your intake team do in the morning?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Your intake team opens the morning brief, which arrives by 7am, and works down the list from the most
                urgent call. Each dossier holds the caller&rsquo;s details, the facts in the order an attorney would want
                them, the urgency score, the recording and the transcript. Nobody has to replay voicemails or guess
                which caller matters most.
              </p>
              <p className={para}>
                Della covers the hours your team is not there. She does not replace your daytime intake staff, and the
                callback, the conflict check and the engagement stay with your firm. The{' '}
                <a href="/intake-playbook" className={link}>law firm client intake playbook</a> covers what happens after
                the first call.
              </p>
            </div>
          </section>

          <FAQ items={faq} eyebrow="HOW IT WORKS FAQ" heading="Questions about how Della handles a call" />
          <SecurityStrip />
          <PricingTeaser />
          <HomeFinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
