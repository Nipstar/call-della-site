import { FAQ } from '../FAQ';

const items = [
  {
    q: 'What counts as a minute?',
    a: 'Every second a caller is on the line with Della counts toward your monthly minutes — from greeting through hang-up. Internal processing, dossier generation, and webhook delivery do not count.',
  },
  {
    q: 'What happens if we go over our minutes?',
    a: 'Overage is billed at $0.50 per minute. No surprise rate hikes, no contract penalties. Overage shows on your next invoice.',
  },
  {
    q: 'Can we change plans mid-month?',
    a: 'Yes. Upgrade anytime — pro-rated to the day. Downgrade takes effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. Onboarding is included in every plan. Most firms are live within 7 days from kickoff.',
  },
  {
    q: 'Do you offer multi-office or multi-firm discounts?',
    a: 'The Group plan is built for multi-office firms. Custom volume pricing for firms with 3+ offices or specialised intake-flow needs — contact sales.',
  },
  {
    q: 'What\'s the contract?',
    a: 'Month-to-month. Cancel anytime after the first 30 days. No multi-year contracts.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most firms are live within 7 days. The bottleneck is usually your team agreeing on the intake script, not the tech.',
  },
];

export const PricingFAQ = () => (
  <FAQ items={items} eyebrow="PRICING FAQ" heading="Billing questions, answered." />
);
