import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { Eyebrow, Headline } from '@/components/Typography';
import { PAGES, pageMeta, page } from '@/data/pages';
import { graph, founderNode, FOUNDER_ID, FOUNDER_URL, WEBSITE_ID } from '@/lib/schema';

export const metadata: Metadata = pageMeta('/about/andy-norman');

const entry = page('/about/andy-norman');
const LINKEDIN = 'https://www.linkedin.com/in/andy-norman-ab78443a1';
const ANTEK = 'https://www.antekautomation.com';

// Every cluster, compare and reference page is bylined to Andy (ArticleLayout).
const GUIDE_SECTIONS = [
  { section: 'compliance', label: 'Compliance' },
  { section: 'playbook', label: 'Intake playbook' },
  { section: 'operations', label: 'Operations' },
  { section: 'compare', label: 'Comparisons' },
  { section: 'reference', label: 'Reference' },
] as const;
const isHub = (path: string) => path.split('/').length === 2 && path !== '/glossary';

const profilePage = {
  '@type': 'ProfilePage',
  '@id': `${FOUNDER_URL}#profilepage`,
  url: FOUNDER_URL,
  name: entry.title,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': FOUNDER_ID },
  dateCreated: entry.datePublished,
  dateModified: entry.dateModified,
};

const link = 'underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]';
const para = 'text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0';

export default function AndyNormanPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(profilePage, founderNode())} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-8 py-12 md:py-16 max-w-[820px] mx-auto w-full">
          <Breadcrumbs items={[{ name: 'About', href: '/about' }, { name: 'Andy Norman', href: '/about/andy-norman' }]} />
          <Eyebrow>AUTHOR</Eyebrow>
          <Headline as="h1" size={44} maxWidth={820}>
            Andy Norman
          </Headline>
          <div className="mt-3 text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] uppercase">
            Founder · Call Della and Antek Automation
          </div>

          <div className="answer-block mt-8 flex flex-col gap-4">
            <p className={`${para} text-[18px]`}>
              Andy Norman is the founder of Call Della, the after-hours intake specialist for US law firms, and of{' '}
              <a href={ANTEK} className={link}>Antek Automation</a>, a UK-based voice AI agency. He builds voice AI intake
              on the Retell AI platform and writes the Call Della guides on intake, compliance and operations.
            </p>
            <p className={para}>
              Andy is not a lawyer, and his guides are not legal advice. They explain how intake works in practice and
              link to the primary sources, such as bar opinions and statutes, so readers can check each point.
            </p>
          </div>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>What does Andy Norman write about?</Headline>
            <div className="mt-5 flex flex-col gap-4">
              <p className={para}>
                Andy Norman writes about the first call a law firm gets from a prospective client: who answers it, what
                gets asked and what reaches the attorney the next morning. His guides cover{' '}
                <a href="/intake-playbook" className={link}>law firm client intake</a>,{' '}
                <a href="/compliance" className={link}>AI legal intake compliance</a>,{' '}
                <a href="/operations" className={link}>intake operations and missed-call costs</a>, and{' '}
                <a href="/compare" className={link}>how Call Della compares with legal answering services</a>. Every
                statistic links to its source, and every comparison uses the other provider&rsquo;s own published facts.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>Guides by Andy Norman</Headline>
            <div className="mt-6 flex flex-col gap-8">
              {GUIDE_SECTIONS.map(({ section, label }) => {
                const guides = PAGES.filter((p) => p.section === section && !isHub(p.path));
                if (!guides.length) return null;
                return (
                  <div key={section}>
                    <h3 className="m-0 mb-3 text-[11px] font-bold text-[var(--ink-soft)] tracking-[0.18em] font-mono uppercase">{label}</h3>
                    <ul className="m-0 pl-5 flex flex-col gap-2">
                      {guides.map((g) => (
                        <li key={g.path} className="text-[16px] font-serif leading-[1.5]">
                          <a href={g.path} className={`${link} text-[var(--ink)]`}>{g.title.replace(/ \| Call Della$/, '')}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <p className={para}>
                Andy also maintains the <a href="/states" className={link}>personal injury rules by state</a> and{' '}
                <a href="/case-types" className={link}>personal injury case types</a> references.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <Headline size={30} maxWidth={760}>Where to find Andy Norman</Headline>
            <ul className="mt-5 m-0 pl-5 flex flex-col gap-2">
              <li className="text-[16px] font-serif"><a href={LINKEDIN} className={`${link} text-[var(--ink)]`} rel="me">Andy Norman on LinkedIn</a></li>
              <li className="text-[16px] font-serif"><a href={ANTEK} className={`${link} text-[var(--ink)]`}>Antek Automation</a></li>
              <li className="text-[16px] font-serif"><a href="/about" className={`${link} text-[var(--ink)]`}>About Call Della</a></li>
            </ul>
          </section>

          <div className="mt-12">
            <CTAButton primary large>Book a demo</CTAButton>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
