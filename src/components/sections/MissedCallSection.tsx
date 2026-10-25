import { Headline } from '../Typography';
import { MissedCallCalculator, DEFAULT_EXAMPLE, type MissedCallExample } from '@/app/operations/calculators';

const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';
const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';

// One missed-call calculator section for every sales page. `matter` tunes the wording
// for a practice area ("injury case", "criminal matter"); the formula never changes.
export const MissedCallSection = ({ matter = 'case', example = DEFAULT_EXAMPLE }: { matter?: string; example?: MissedCallExample }) => (
  <section id="missed-call-cost" className="px-4 md:px-8 py-14 max-w-[760px] mx-auto">
    <Headline as="h2" size={34} maxWidth={720}>What are missed calls costing your firm?</Headline>
    <div className="mt-6 flex flex-col gap-4">
      <p className={para}>
        The cost of a missed call is the fee from the {matter} that caller would have signed. Work it out for your own
        firm: <strong>missed calls a month &times; share that are new matters &times; your sign rate &times; your
        average fee</strong>. The sliders start on example figures. Move them to your own numbers.
      </p>
      <MissedCallCalculator example={example} />
      <p className={para}>
        For the method and what to count as a missed call, see the{' '}
        <a href="/operations/missed-call-cost-calculator" className={link}>full missed-call cost calculator</a>.
      </p>
    </div>
  </section>
);
