import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Pricing } from '@/components/sections/Pricing';
import { PricingFAQ } from '@/components/sections/PricingFAQ';
import { MissedCallSection } from '@/components/sections/MissedCallSection';
import { HomeFinalCTA } from '@/components/sections/HomeFinalCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow, Headline } from '@/components/Typography';

import { pageMeta } from '@/data/pages';
import { JsonLd } from '@/components/JsonLd';
import { graph, offerNodes, serviceNode } from '@/lib/schema';
import { CATEGORY_DEFINITION, PLANS, INCLUDES, OVERAGE_PER_MINUTE, formatPrice } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/pricing');

const OBA_URL = 'https://www.okbar.org/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/';
const [solo, practice, group] = PLANS;
const overage = `$${OVERAGE_PER_MINUTE.toFixed(2)}`;

const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';
const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';
const th = 'text-left align-top p-3 border-b-[1.5px] border-[var(--rule)] font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--ink-soft)]';
const td = 'align-top p-3 border-b border-[var(--rule-soft)] font-serif text-[15px] text-[var(--ink)] leading-[1.5]';

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(...offerNodes(), serviceNode({ path: '/pricing', name: 'Call Della after-hours legal intake', description: CATEGORY_DEFINITION }))} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="px-4 md:px-8 pt-12 pb-12 max-w-[860px] mx-auto">
            <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
            <Eyebrow>PRICING</Eyebrow>
            <Headline as="h1" size={46} maxWidth={780}>
              Call Della pricing
            </Headline>
            <div className="answer-block mt-7 flex flex-col gap-4 max-w-[720px]">
              <p className={para}>
                <strong>Call Della pricing</strong> is a flat monthly plan with a set number of call minutes: Solo is{' '}
                {formatPrice(solo)} a month for {solo.minutes} minutes and Practice is {formatPrice(practice)} a month for{' '}
                {practice.minutes} minutes. Group is priced to your volume.
              </p>
              <p className={para}>
                Every plan is month-to-month with no setup fee, and extra minutes are {overage} each. The plans differ
                in volume, not in what Della does on the call.
              </p>
            </div>
          </section>

          <Pricing />

          <section id="compare-plans" className="px-4 md:px-8 py-12 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>Which Call Della plan fits your firm?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                The right Call Della plan depends on how many minutes of after-hours calls your firm takes in a month.
                Solo suits a solo lawyer with a modest overnight volume. Practice doubles the minutes for small and
                growing firms. Group is for firms with more than one practice area or office, and adds a CRM webhook.
                If you are not sure of your volume, your phone system&rsquo;s after-hours call log is the best starting
                point, and we can read it with you on the demo.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse min-w-[520px]">
                <caption className="sr-only">Call Della plans compared</caption>
                <thead>
                  <tr>
                    <th scope="col" className={th}>Plan</th>
                    <th scope="col" className={th}>Price a month</th>
                    <th scope="col" className={th}>Minutes a month</th>
                    <th scope="col" className={th}>Built for</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANS.map((p) => (
                    <tr key={p.id}>
                      <th scope="row" className={td}>{p.name}</th>
                      <td className={td}>{formatPrice(p)}</td>
                      <td className={td}>{p.minutes ?? 'Custom'}</td>
                      <td className={td}>{p.audience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`${para} mt-4 text-[15px]`}>
              Extra minutes on every plan: {overage} each. {group.name} pricing is quoted after the demo.
            </p>
          </section>

          <section id="includes" className="px-4 md:px-8 py-12 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>What does every Call Della plan include?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Every Call Della plan includes the same intake service: Della, the dashboard, the alerts and the morning
                brief. A Solo firm gets the same dossier on the same call as a Group firm. Della runs the intake flow for
                your practice area, whether that is{' '}
                <a href="/personal-injury" className={link}>personal injury intake</a>,{' '}
                <a href="/criminal-defense" className={link}>criminal defense intake</a> or{' '}
                <a href="/immigration" className={link}>immigration intake in English and Spanish</a>.
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-3 pl-5 m-0">
              {INCLUDES.map((i) => (
                <li key={i} className="text-[16px] text-[var(--ink)] font-serif leading-[1.55]">{i}</li>
              ))}
            </ul>
          </section>

          <section id="worth-it" className="px-4 md:px-8 py-12 max-w-[860px] mx-auto">
            <Headline size={32} maxWidth={760}>How do law firms judge whether AI legal intake pricing is worth it?</Headline>
            <div className="mt-6 flex flex-col gap-4">
              <p className={para}>
                Firms usually judge AI legal intake pricing against the cases they lose when nobody answers. According to{' '}
                <a href={OBA_URL} className={link}>the Oklahoma Bar Journal (September 2025)</a>, Clio&rsquo;s 2024 Legal
                Trends Report found that only 40% of law firms answered a prospective client&rsquo;s call, and 48% were
                unreachable by phone. What a missed call costs depends on your practice
                area, your sign rate and your average fee.
              </p>
              <p className={para}>
                To run the numbers for your own firm, use the{' '}
                <a href="/operations/missed-call-cost-calculator" className={link}>missed-call cost calculator</a> or the{' '}
                <a href="/operations/cost-per-signed-case-calculator" className={link}>cost per signed case calculator</a>.
                To see how Della handles the call itself, read{' '}
                <a href="/how-it-works" className={link}>how AI legal intake works</a>.
              </p>
            </div>
          </section>

          <MissedCallSection />

          <PricingFAQ />

          <HomeFinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
