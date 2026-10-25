import { FAQ } from '../FAQ';

const qs = [
  {
    q: 'What exactly is Della?',
    a: 'A voice AI that answers your firm’s after-hours phone, captures intake details, and hands the file to your team. Built specifically for legal — not a generic receptionist bot.',
  },
  {
    q: 'Can we rebrand her?',
    a: 'Yes. The platform default is Della, but most firms rebrand her — Sophia, Maya, whatever fits your firm. Same agent, your name.',
  },
  {
    q: 'Does she handle Spanish?',
    a: 'Yes, natively. The immigration flow leads with Spanish detection on greeting. The PI and criminal flows handle Spanish on request.',
  },
  {
    q: 'Is this just a chatbot?',
    a: 'No. Della is a voice agent — phone calls, real-time speech, natural conversation. Callers don’t know they’re talking to AI unless they ask, and even then she discloses cleanly.',
  },
  {
    q: 'What if a caller asks for legal advice?',
    a: 'She refuses. She’s prompted hard against giving any legal opinion, and she defers every legal question to "the attorney will advise on that when they call you back."',
  },
  {
    q: 'How does it integrate with our case management system?',
    a: 'Webhook out, REST API, native integrations on the roadmap (Clio, MyCase, Filevine prioritised). Until then: structured JSON to whatever you point it at.',
  },
  {
    q: 'What happens if Della can’t answer something?',
    a: 'She captures what she can, flags the rest as a follow-up question for the attorney, and never makes things up.',
  },
  {
    q: 'Can callers tell it’s AI?',
    a: 'Most don’t unless they ask. When they do ask, she discloses honestly.',
  },
  {
    q: 'What’s the contract?',
    a: 'Month-to-month. Cancel anytime.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most firms are live within 7 days. The bottleneck is usually your team agreeing on the intake script, not the tech.',
  },
];

export const BrandFAQ = () => (
  <FAQ id="faq" items={qs} eyebrow="FREQUENTLY ASKED" heading="The questions managing partners ask first." />
);
