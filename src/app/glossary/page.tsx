import { ArticleLayout } from '@/components/ArticleLayout';
import { JsonLd } from '@/components/JsonLd';
import { Prose, DemoCTA } from '@/app/intake-playbook/_ui';
import { SourceLine } from '@/app/states/_parts';
import { pageMeta, page } from '@/data/pages';
import { GLOSSARY } from '@/data/glossary';
import { graph, ORG_ID } from '@/lib/schema';
import { SITE_URL } from '@/lib/config';

const SLUG = '/glossary';
export const metadata = pageMeta(SLUG);

const SET_ID = `${SITE_URL}${SLUG}#terms`;
const plain = (html: string) => html.replace(/<[^>]+>/g, '');

const termSet = {
  '@type': 'DefinedTermSet',
  '@id': SET_ID,
  name: 'Personal injury intake glossary',
  description: page(SLUG).description,
  url: `${SITE_URL}${SLUG}`,
  publisher: { '@id': ORG_ID },
  hasDefinedTerm: GLOSSARY.map((t) => ({
    '@type': 'DefinedTerm',
    '@id': `${SITE_URL}${SLUG}#${t.id}`,
    name: t.term,
    description: plain(t.def),
    url: `${SITE_URL}${SLUG}#${t.id}`,
    inDefinedTermSet: { '@id': SET_ID },
  })),
};

export default function GlossaryPage() {
  const p = page(SLUG);
  return (
    <ArticleLayout
      eyebrow="REFERENCE · GLOSSARY"
      title="Personal Injury Intake Glossary"
      datePublished={p.datePublished}
      dateModified={p.dateModified}
      date={p.datePublished}
      author="Andy Norman"
      breadcrumbs={[{ name: 'Glossary', href: SLUG }]}
      tldr={
        <>
          This personal injury intake glossary defines {GLOSSARY.length} terms that come up on a firm’s first call with an injured person, from MMI and MIST to PIP and letters of protection. Where a definition states law, it cites the statute or source, such as Florida’s 14-day PIP rule in Fla. Stat. § 627.736. These definitions are reference material, not legal advice.
        </>
      }
    >
      <JsonLd data={graph(termSet)} />
      <Prose>
        <nav aria-label="Glossary terms" className="mb-10">
          <ul className="!list-none !pl-0 flex flex-wrap gap-x-5 gap-y-1">
            {GLOSSARY.map((t) => (
              <li key={t.id} className="!mb-0">
                <a href={`#${t.id}`} className="inline-block py-3">{t.term.split(' (')[0]}</a>
              </li>
            ))}
          </ul>
        </nav>

        {GLOSSARY.map((t) => (
          <section key={t.id} id={t.id} className="scroll-mt-24">
            <h2>{t.term}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.def }} />
            {t.src && <SourceLine src={t.src} />}
          </section>
        ))}

        <p>
          For the state rules behind these terms, see our <a href="/states">personal injury rules by state</a> table and the{' '}
          <a href="/case-types">personal injury case types</a> intake checklists.
        </p>
      </Prose>

      <DemoCTA>
        Hear these terms in use. Book a demo and Della will take a live intake call for your practice area, then show you the dossier she writes.
      </DemoCTA>
    </ArticleLayout>
  );
}
