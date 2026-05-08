import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { stateData } from '@/data/states';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow, Headline } from '@/components/Typography';
import { CTAButton } from '@/components/CTAButton';

export function generateStaticParams() {
  return stateData.map((state) => ({
    slug: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const state = stateData.find((s) => s.slug === slug);
  if (!state) return {};
  const title = `${state.name} Personal Injury Intake | Call Della`;
  const description = `After-hours PI intake for ${state.name} firms. SOL, comparative negligence, no-fault status, damages caps — and how Della handles ${state.name} intake nightly.`;
  const url = `https://calldella.com/states/${state.slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/states/${state.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-default.png'] },
  };
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = stateData.find(s => s.slug === slug);

  if (!state) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": state.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-8 py-24 max-w-[800px] mx-auto w-full">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <Breadcrumbs
            items={[
              { name: 'States', href: '/states' },
              { name: state.name, href: `/states/${state.slug}` },
            ]}
          />
          <Eyebrow>LOCATION: {state.name.toUpperCase()}</Eyebrow>
          <Headline as="h1" size={44} maxWidth={800}>
            Personal injury intake in {state.name}: After-hours coverage built for {state.name} PI firms
          </Headline>
          
          <div className="mt-8">
            <p className="text-[17px] text-[var(--ink)] font-serif leading-[1.6]">
              {state.intro}
            </p>
          </div>

          <article className="prose prose-p:font-serif prose-p:text-[17px] prose-p:leading-[1.6] prose-p:text-[var(--ink)] prose-headings:font-serif prose-headings:text-[var(--ink)] prose-h2:text-[28px] prose-h2:font-semibold prose-h2:tracking-[-0.02em] prose-h2:mt-16 prose-h2:mb-6 prose-li:font-serif prose-li:text-[17px] prose-strong:font-semibold max-w-none">
            
            <h2>{state.name} personal injury law: What intake needs to capture</h2>
            <ul className="list-disc pl-5">
              <li><strong>Statute of Limitations:</strong> {state.sol}</li>
              <li><strong>Comparative Negligence:</strong> {state.comparativeNegligence}</li>
              <li><strong>No-Fault Status:</strong> {state.noFault}</li>
              <li><strong>Damages Caps:</strong> {state.damagesCaps}</li>
            </ul>

            <h2>How Della handles {state.name} intake</h2>
            <p>{state.handlingDetail}</p>

            <h2>State bar rules on AI use in legal intake</h2>
            <p>{state.stateBar}</p>

            <h2>Pricing for {state.name} firms</h2>
            <p>
              We don&apos;t do regional pricing adjustments. Call Della offers the same transparent, flat-rate tiers nationally — Standard, Practice, and Group, all month-to-month with no setup fees.
            </p>
            <p>
              <a href="/pricing">See full pricing →</a>
            </p>

            <div className="my-12">
              <CTAButton primary>Book a discovery call</CTAButton>
            </div>

            <h2>Frequently asked by {state.name} firms</h2>
            <div className="flex flex-col gap-6 mt-8">
              {state.faqs.map((faq, i) => (
                <div key={i} className="border-l-2 border-[var(--rule)] pl-4">
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] mt-0 mb-2">{faq.q}</h3>
                  <p className="text-[15px] italic text-[var(--ink-soft)] m-0">{faq.a}</p>
                </div>
              ))}
            </div>

          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
