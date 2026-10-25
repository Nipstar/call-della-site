import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PaperTexture } from './PaperTexture';
import { Hero } from './sections/Hero';
import { PainScenario } from './sections/PainScenario';
import { DellaHandles } from './sections/DellaHandles';
import { CapturedFields } from './sections/CapturedFields';
import { ComplianceSection } from './sections/ComplianceSection';
import { FeatureBlock } from './sections/FeatureBlock';
import { VerticalFAQ } from './sections/VerticalFAQ';
import { MissedCallSection } from './sections/MissedCallSection';
import { DemoCallout } from './sections/DemoCallout';
import { Breadcrumbs } from './Breadcrumbs';
import { JsonLd } from './JsonLd';
import { Eyebrow, Headline } from './Typography';
import { graph, serviceNode } from '@/lib/schema';
import { page } from '@/data/pages';
import { PLANS, OVERAGE_PER_MINUTE, SETUP_FEE, DEMO_MINUTES, formatPrice } from '@/lib/plans';
import type { Vertical } from '@/lib/verticals';

type Props = {
  vertical: Vertical;
};

const prose = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[var(--stamp-red)]';

const Section = ({ children, id }: { children: ReactNode; id?: string }) => (
  <section id={id} className="px-4 md:px-8 py-16 max-w-[780px] mx-auto">{children}</section>
);

// Example slider starting points per practice (labelled as examples on the page, not benchmarks).
const EXAMPLE: Record<string, { missed: number; newShare: number; signRate: number; fee: number }> = {
  'personal-injury': { missed: 40, newShare: 50, signRate: 20, fee: 10000 },
  'criminal-defense': { missed: 40, newShare: 60, signRate: 30, fee: 4000 },
  immigration: { missed: 40, newShare: 60, signRate: 30, fee: 3500 },
};

const MATTER: Record<string, string> = {
  'personal-injury': 'injury case',
  'criminal-defense': 'criminal matter',
  immigration: 'immigration matter',
};

export const VerticalLanderShell = ({ vertical }: Props) => {
  const path = `/${vertical.slug}`;
  const entry = page(path);
  const practice = vertical.name.toLowerCase();
  const priced = PLANS.filter((p) => p.price !== null);
  const group = PLANS.find((p) => p.price === null);

  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd
        data={graph(
          serviceNode({
            path,
            name: `Call Della ${vertical.name} Intake`,
            description: entry.description,
            serviceType: `After-hours ${practice} intake`,
          }),
        )}
      />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="px-4 md:px-8 pt-6 pb-0 max-w-[1180px] mx-auto w-full">
            <Breadcrumbs items={[{ name: vertical.name, href: path }]} />
          </div>
          <Hero hero={vertical.hero} dossier={vertical.heroDossier} />

          {vertical.sections.map((s) => (
            <Section key={s.heading}>
              <Headline size={32}>{s.heading}</Headline>
              <div className="mt-6 flex flex-col gap-4">
                {s.html.map((h, i) => (
                  <p key={i} className={prose} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </div>
              {s.table && (
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left font-serif text-[14.5px] text-[var(--ink)]">
                    <caption className="text-left text-[10px] font-bold text-[var(--ink-soft)] tracking-[0.16em] font-mono uppercase mb-3">{s.table.caption}</caption>
                    <thead>
                      <tr>
                        {s.table.head.map((h, i) => (
                          <th key={i} scope="col" className="border-b-[1.5px] border-[var(--rule)] py-2.5 pr-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r[0]}>
                          {r.map((c, i) =>
                            i === 0 ? (
                              <th key={i} scope="row" className="border-b border-[var(--rule-soft)] py-2.5 pr-4 font-semibold align-top">{c}</th>
                            ) : (
                              <td key={i} className="border-b border-[var(--rule-soft)] py-2.5 pr-4 align-top">{c}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Section>
          ))}

          <PainScenario painScenario={vertical.painScenario} eyebrow="EXAMPLE CALL" heading="Who calls after your office closes?" />

          {vertical.featureBlock && <FeatureBlock featureBlock={vertical.featureBlock} />}

          <DellaHandles
            handles={vertical.handles}
            eyebrow={`HOW DELLA HANDLES ${vertical.shortName.toUpperCase()} INTAKE`}
            heading={vertical.handlesHeading}
          />

          <CapturedFields
            capturedFields={vertical.capturedFields}
            eyebrow="WHAT LANDS IN YOUR DOSSIER"
            heading="What does the dossier capture on every call?"
          />

          {vertical.compliance && <ComplianceSection compliance={vertical.compliance} />}

          <Section id="how-it-works">
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <Headline size={32}>{`How does Della take a ${practice} call?`}</Headline>
            <ol className={`mt-6 pl-5 flex flex-col gap-3 list-decimal ${prose}`}>
              <li>You forward your after-hours line to your own Della number and place a test call before you go live.</li>
              <li>Della answers in your firm&rsquo;s name, introduces herself as Della, plays the recording disclosure for your state and runs the {practice} intake.</li>
              <li>She scores urgency on every call. Urgent calls go to the attorney on call by email straight away.</li>
              <li>Every call lands in the Call Della dashboard as a dossier with a summary, recording and transcript, and a morning brief arrives by 7am.</li>
            </ol>
            <p className={`mt-5 ${prose}`}>
              The full walkthrough is in <a href="/how-it-works">how AI legal intake works</a>.
            </p>
          </Section>

          <Section id="pricing">
            <Eyebrow>PRICING</Eyebrow>
            <Headline size={32}>{`How much does ${practice} intake with Della cost?`}</Headline>
            <p className={`mt-6 ${prose}`}>
              Call Della has {PLANS.length} plans, all month-to-month{SETUP_FEE === 0 ? ' with no setup fee' : ''}.{' '}
              {priced.map((p) => `${p.name} is ${formatPrice(p)} a month for ${p.minutes} minutes, for ${p.audience.toLowerCase()}.`).join(' ')}{' '}
              {group && `${group.name} is priced to your volume, for ${group.audience.toLowerCase()}, and adds a CRM webhook.`} Extra minutes are ${OVERAGE_PER_MINUTE.toFixed(2)} each.
              See <a href="/pricing">Call Della pricing</a> for what every plan includes.
            </p>
          </Section>

          <Section id="guides">
            <Eyebrow>{`${vertical.shortName.toUpperCase()} INTAKE GUIDES`}</Eyebrow>
            <Headline size={32}>{`Where can I read more about ${practice} intake?`}</Headline>
            <ul className={`mt-6 pl-5 flex flex-col gap-2 list-disc ${prose}`}>
              {vertical.related.map((r) => (
                <li key={r.href}><a href={r.href} className="inline-block py-1.5">{r.label}</a></li>
              ))}
            </ul>
          </Section>

          <MissedCallSection matter={MATTER[vertical.slug] ?? 'case'} example={EXAMPLE[vertical.slug]} />

          <VerticalFAQ
            faq={vertical.faq}
            eyebrow={`${vertical.shortName.toUpperCase()} INTAKE · FAQ`}
            heading={`What do ${practice} attorneys ask about Della?`}
          />

          {vertical.industryStats.length > 0 && (
            <Section id="sources">
              <Eyebrow>SOURCES</Eyebrow>
              <ul className="m-0 pl-5 flex flex-col gap-2 list-disc text-[14px] text-[var(--ink-soft)] font-serif leading-[1.55] [&_a]:underline [&_a]:underline-offset-2">
                {vertical.industryStats.map((s) => (
                  <li key={s.url}>
                    {s.stat} <a href={s.url} rel="noopener" target="_blank">{s.source}</a>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <DemoCallout
            slug={vertical.slug}
            eyebrow="HEAR DELLA BEFORE YOU TRUST HER"
            heading={`Hear Della take a ${practice} intake call.`}
            sub={`Book a ${DEMO_MINUTES}-minute demo. We run a live ${practice} intake call while you listen, then walk you through the dossier.`}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};
