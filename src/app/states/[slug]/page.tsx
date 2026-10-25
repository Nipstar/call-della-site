import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { Prose, DemoCTA } from '@/app/intake-playbook/_ui';
import { stateData, stateBySlug, STATES_PUBLISHED, STATES_UPDATED, LMNC } from '@/data/states';
import { Passage, SourceLine } from '../_parts';
import { RECORDING_CONSENT, rcfpUrl } from '@/data/recordingConsent';
import type { Citation } from '@/lib/schema';
import { SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return stateData.map((s) => ({ slug: s.slug }));
}

const titleFor = (name: string) => `${name} Personal Injury Intake: Deadlines and Fault Rules`;
const descFor = (s: NonNullable<ReturnType<typeof stateBySlug>>) =>
  `${s.name} personal injury intake for law firms: the ${s.sol.period} statute of limitations, the fault rule, no-fault status, and what to capture on the first call.`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = stateBySlug(slug);
  if (!s) return {};
  const title = titleFor(s.name);
  const description = descFor(s);
  const path = `/states/${s.slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, type: 'article', url: `${SITE_URL}${path}`, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-default.png'] },
  };
}

const LABEL = { 'one-party': 'one-party', 'all-party': 'all-party', mixed: 'mixed' } as const;

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = stateBySlug(slug);
  if (!s) notFound();

  const path = `/states/${s.slug}`;
  const rec = RECORDING_CONSENT.find((r) => r.code === s.code)!;
  const rcfp: Citation = { name: `Reporter’s Recording Guide: ${s.name}`, url: rcfpUrl(rec), publisher: 'Reporters Committee for Freedom of the Press' };
  const sections = [s.fault, s.noFault, s.deadlines, s.caps, s.ai];
  const citations = [{ name: s.sol.cite, url: s.sol.url }, ...sections.flatMap((x) => x.src), rcfp, LMNC].filter(
    (c, i, all) => all.findIndex((d) => d.url === c.url) === i,
  );

  return (
    <ArticleLayout
      eyebrow={`STATE GUIDE · ${s.name.toUpperCase()}`}
      title={titleFor(s.name)}
      tldr={s.tldr}
      slug={path}
      datePublished={STATES_PUBLISHED}
      dateModified={STATES_UPDATED}
      description={descFor(s)}
      date={STATES_PUBLISHED}
      author="Andy Norman"
      breadcrumbs={[
        { name: 'States', href: '/states' },
        { name: s.name, href: path },
      ]}
      citations={citations}
    >
      <Prose>
        <p className="!text-[15px] italic">
          This guide is for law firms. If you were injured, contact a licensed {s.name} attorney.
        </p>

        <aside className="my-10 border-[1.5px] border-[var(--rule)] bg-[var(--paper)] p-6 md:p-8" aria-label={`${s.name} statute of limitations`}>
          <p className="!mb-2 font-mono !text-[11px] uppercase tracking-[0.1em] !text-[var(--ink-soft)]">
            {s.name} personal injury statute of limitations
          </p>
          <p className="!mb-3 !text-[34px] font-semibold leading-none">{s.sol.period}</p>
          <p className="!mb-3">{s.sol.detail}</p>
          <p className="!mb-0 !text-[14px] !text-[var(--ink-soft)]">
            Source: <a href={s.sol.url}>{s.sol.cite}</a>. Checked {STATES_UPDATED}.
          </p>
        </aside>

        <Passage heading={`Does ${s.name} use comparative or contributory negligence?`} s={s.fault} />
        <Passage heading={`Is ${s.name} a no-fault state?`} s={s.noFault} />
        <Passage heading={`Which ${s.name} deadlines can run out before the statute of limitations?`} s={s.deadlines} />
        <Passage heading={`Does ${s.name} cap personal injury damages?`} s={s.caps} />
        <Passage heading={`What does ${s.name} guidance say about lawyers using AI?`} s={s.ai} />

        <h2>Do {s.name} intake calls need recording consent?</h2>
        <p>
          <strong>
            {s.name} is a{rec.phone === 'all-party' ? 'n' : ''} {LABEL[rec.phone]} consent state for recording phone calls, under {rec.statute}.
          </strong>{' '}
          {rec.note ? `${rec.note} ` : ''}
          {s.recordingNote} Every Call Della plan includes a recording disclosure set for the firm’s state, and Della plays it before the caller describes their matter. Our{' '}
          <a href="/compliance/call-recording-consent-by-state">call recording consent by state</a> table covers all 50 states and DC.
        </p>
        <SourceLine src={[rcfp]} />

        <h2>What should a {s.name} intake call capture?</h2>
        <p>
          <strong>A {s.name} intake call should capture the facts that decide the deadline, the fault rule and the coverage, in the caller’s own words.</strong>{' '}
          The checklist below is the minimum for a {s.name} auto or premises matter. It is a list of facts to record, not questions to argue with the caller.
        </p>
        <ol>
          {s.capture.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>

        <h2>How does Della handle {s.name} intake after hours?</h2>
        <p>
          <strong>{s.della.split('. ')[0]}.</strong> {s.della.split('. ').slice(1).join('. ')}
        </p>
        <p>
          Firms lose callers in the gap between the call and the reply. According to{' '}
          <a href={LMNC.url}>Lawyers Mutual NC (2019)</a>, reporting an ABA Law Practice Division secret-shopper study, lawyers took three or more days to reply to voicemails and online requests 42 percent of the time. See how Della runs{' '}
          <a href="/personal-injury">after-hours personal injury intake</a>, or compare {s.name} with other states in our{' '}
          <a href="/states">personal injury rules by state</a> table.
        </p>
      </Prose>

      <DemoCTA>
        Hear Della take a {s.name} injury call. Book a demo and she will run a live intake call for your practice area, then show you the dossier with the recording and transcript.
      </DemoCTA>

      <FAQ items={s.faqs} heading={`${s.name} personal injury intake: common questions`} eyebrow="FAQ" />
    </ArticleLayout>
  );
}
