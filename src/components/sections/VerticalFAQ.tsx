import { FAQ } from '../FAQ';
import type { Vertical } from '@/lib/verticals';

type Props = {
  faq: Vertical['faq'];
  eyebrow?: string;
  heading: string;
};

export const VerticalFAQ = ({ faq, eyebrow, heading }: Props) => (
  <FAQ items={faq.map((f) => ({ q: f.question, a: f.answer }))} eyebrow={eyebrow} heading={heading} />
);
