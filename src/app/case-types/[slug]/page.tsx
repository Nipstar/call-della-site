import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { Prose, DemoCTA } from '@/app/intake-playbook/_ui';
import { Passage } from '@/app/states/_parts';
import { caseData, caseBySlug, CASES_PUBLISHED, CASES_UPDATED } from '@/data/cases';
import { LMNC } from '@/data/states';
import { SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return caseData.map((c) => ({ slug: c.slug }));
}

const titleFor = (t: string) => `${t}: What to Capture on the First Call`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) return {};
  const title = titleFor(c.title);
  const path = `/case-types/${c.slug}`;
  return {
    title: { absolute: title },
    description: c.description,
    alternates: { canonical: path },
    openGraph: { title, description: c.description, type: 'article', url: `${SITE_URL}${path}`, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description: c.description, images: ['/og-default.png'] },
  };
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) notFound();

  const path = `/case-types/${c.slug}`;
  const citations = [...c.sections.flatMap((s) => s.src), LMNC].filter((x, i, all) => all.findIndex((y) => y.url === x.url) === i);
  const lower = c.title.toLowerCase();

  return (
    <ArticleLayout
      eyebrow="CASE TYPE GUIDE"
      title={titleFor(c.title)}
      tldr={c.tldr}
      slug={path}
      datePublished={CASES_PUBLISHED}
      dateModified={CASES_UPDATED}
      description={c.description}
      date={CASES_PUBLISHED}
      author="Andy Norman"
      breadcrumbs={[
        { name: 'Case types', href: '/case-types' },
        { name: c.title, href: path },
      ]}
      citations={citations}
    >
      <Prose>
        <p className="!text-[15px] italic">This guide is for law firms. If you were injured, contact a licensed attorney in your state.</p>

        <h2>{c.captureHeading}</h2>
        <p>
          <strong>{c.captureLead}</strong> Record each item as the caller says it. The checklist is a list of facts, not questions to debate with someone who may still be in pain.
        </p>
        <ol>
          {c.capture.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>

        {c.sections.map((s) => (
          <Passage key={s.heading} heading={s.heading} s={s} />
        ))}

        <h2>How does Della take {lower} calls after hours?</h2>
        <p>
          <strong>{c.della.split('. ')[0]}.</strong> {c.della.split('. ').slice(1).join('. ')}
        </p>
        <p>
          The reply is where firms lose callers. According to <a href={LMNC.url}>Lawyers Mutual NC (2019)</a>, reporting an ABA Law Practice Division secret-shopper study, lawyers took three or more days to reply to voicemails and online requests 42 percent of the time. See how Della runs{' '}
          <a href="/personal-injury">after-hours personal injury intake</a>, check the deadlines in our <a href="/states">personal injury rules by state</a> table, or look up terms in the{' '}
          <a href="/glossary">PI intake glossary</a>.
        </p>
      </Prose>

      <DemoCTA>
        Hear Della handle {lower} on a live call. Book a demo and she will run an intake call for your practice area, then show you the dossier with the recording and transcript.
      </DemoCTA>

      <FAQ items={c.faqs} heading={`${c.title}: common questions`} eyebrow="FAQ" />
    </ArticleLayout>
  );
}
