import { FAQ } from '../FAQ';
import { PLANS, formatPrice, OVERAGE_PER_MINUTE } from '@/lib/plans';

const [solo, practice] = PLANS;

// Home page only. /how-it-works has its own questions; keep the two sets distinct.
const qs = [
  {
    q: 'What is Call Della?',
    a: 'Call Della is an after-hours intake specialist for US law firms in personal injury, criminal defense and immigration. Della is a voice AI agent who answers your forwarded line at night, on weekends and on holidays, runs the intake questions for your practice area, and files each call as a dossier your team reads by 7am.',
  },
  {
    q: 'How is Della different from a message-taking service?',
    a: 'Della is an intake specialist. A message service writes down a name and a number. Della asks the questions your attorneys would ask on the first call, scores how urgent the matter is, and delivers the recording, transcript and summary in one dossier, so your team can call back the right people first.',
  },
  {
    q: 'Does Della speak Spanish?',
    a: 'Della speaks English and Spanish on the immigration intake flow, where she can take the whole call in Spanish. The personal injury and criminal defense flows run in English today. If your firm needs Spanish on those practice areas, raise it on the demo and we will tell you where it stands.',
  },
  {
    q: 'Can Della give legal advice to callers?',
    a: 'No. Della never gives legal advice, never quotes fees and never promises the firm will take a case. When a caller asks a legal question, she records it in the dossier and tells the caller that an attorney will answer it on the callback. Your attorneys keep every judgment call about the matter.',
  },
  {
    q: 'Does Call Della connect to our case management software?',
    a: 'The Group plan includes a CRM webhook that sends each dossier to a system your firm chooses. Call Della does not offer named integrations with case management platforms today. On every plan, the dossiers, recordings and transcripts sit in the Call Della dashboard, and urgent calls arrive by email to the attorney on call.',
  },
  {
    q: 'What does Call Della cost, and is there a contract?',
    a: `Solo is ${formatPrice(solo)} a month for ${solo.minutes} minutes and Practice is ${formatPrice(practice)} a month for ${practice.minutes} minutes. Group is priced to your volume. Extra minutes are $${OVERAGE_PER_MINUTE.toFixed(2)} each. Every plan is month-to-month with no setup fee and no long-term contract, so your firm can stop at the end of any month.`,
  },
];

export const BrandFAQ = () => (
  <FAQ id="faq" items={qs} eyebrow="FREQUENTLY ASKED" heading="What do managing partners ask about Call Della first?" />
);
