import { FAQ } from '../FAQ';
import { OVERAGE_PER_MINUTE, GROUP_EXTRAS } from '@/lib/plans';

const overage = `$${OVERAGE_PER_MINUTE.toFixed(2)}`;

const items = [
  {
    q: 'What counts as a minute on Call Della?',
    a: 'A minute is time a caller spends on the line with Della, from her greeting to the end of the call. Each plan includes a set number of minutes a month. The dossier, recording, transcript, morning brief and urgent-call email alerts come with every plan at no extra charge, whatever your call volume.',
  },
  {
    q: 'What happens if we go over our monthly minutes?',
    a: `Della keeps answering. Calls past your plan’s minutes are billed at ${overage} a minute and appear on your next invoice. There is no penalty and no change to your plan. If your firm goes over most months, we can compare the overage with the next plan up on a call.`,
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. Every Call Della plan has no setup fee. Setup covers your own Della number, call forwarding from your firm’s line, the recording disclosure for your state and a test call with your team before you go live. The monthly plan price is the only fixed charge.',
  },
  {
    q: 'Is there a contract or minimum term?',
    a: 'No. Every plan is month-to-month, with no annual commitment and no multi-year contract. Your firm can change plans or stop at the end of any month. The plan price, the minutes and the overage rate are all published on this page.',
  },
  {
    q: 'What does the Group plan add?',
    a: `The Group plan is for firms with more than one practice area or office. It adds ${GROUP_EXTRAS.map((g) => (/^[A-Z][a-z]/.test(g) ? g.charAt(0).toLowerCase() + g.slice(1) : g)).join('; ')}. Group pricing depends on your call volume and setup, so we quote it after the demo once we know how many lines and practice areas Della will cover.`,
  },
  {
    q: 'Can we hear Della before we pay?',
    a: 'Yes. Book a demo and we run a live Della call for your practice area while you listen, then walk you through the dossier she files. You can ask her the questions your own callers ask. There is no charge for the demo and no obligation afterward.',
  },
];

export const PricingFAQ = () => (
  <FAQ items={items} eyebrow="PRICING FAQ" heading="Questions about Call Della pricing and billing" />
);
