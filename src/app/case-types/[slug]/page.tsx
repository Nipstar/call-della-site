import React from 'react';
import { notFound } from 'next/navigation';
import { caseData } from '@/data/cases';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PaperTexture } from '@/components/PaperTexture';
import { Eyebrow, Headline } from '@/components/Typography';
import { CTAButton } from '@/components/CTAButton';

export function generateStaticParams() {
  return caseData.map((c) => ({
    slug: c.slug,
  }));
}

export default function CaseTypePage({ params }: { params: { slug: string } }) {
  const caseType = caseData.find(c => c.slug === params.slug);
  
  if (!caseType) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": caseType.faqs.map(faq => ({
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
          <Eyebrow>CASE TYPE PROTOCOL</Eyebrow>
          <Headline size={44} maxWidth={800}>
            Automated intake software for {caseType.name.toLowerCase()}
          </Headline>
          
          <div className="mt-8">
            <p className="text-[17px] text-[var(--ink)] font-serif leading-[1.6]">
              {caseType.intro}
            </p>
          </div>

          <article className="prose prose-p:font-serif prose-p:text-[17px] prose-p:leading-[1.6] prose-p:text-[var(--ink)] prose-headings:font-serif prose-headings:text-[var(--ink)] prose-h2:text-[28px] prose-h2:font-semibold prose-h2:tracking-[-0.02em] prose-h2:mt-16 prose-h2:mb-6 prose-li:font-serif prose-li:text-[17px] prose-strong:font-semibold max-w-none">
            
            <h2>Statute of Limitations & Urgency Context</h2>
            <p>{caseType.solContext}</p>

            <h2>Liability & Insurance Considerations</h2>
            <p>{caseType.insuranceContext}</p>

            <h2>The Della Intake Protocol</h2>
            <p>For {caseType.name.toLowerCase()}, Della is programmed to specifically target these critical data points:</p>
            <ul className="list-disc pl-5 bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] p-6 my-6">
              {caseType.protocol.map((item, i) => (
                <li key={i} className="mb-2 last:mb-0"><strong>Della asks:</strong> "{item}"</li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="border-[1.5px] border-[var(--rule)] p-6">
                <div className="text-[11px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-4 text-emerald-700">✓ STRONG INTAKE</div>
                <p className="text-[15px] m-0">{caseType.goodVsBad.good}</p>
              </div>
              <div className="border-[1.5px] border-[var(--rule)] p-6">
                <div className="text-[11px] font-bold text-[var(--ink-soft)] font-mono tracking-[0.18em] mb-4 text-red-800">✕ WEAK INTAKE</div>
                <p className="text-[15px] m-0">{caseType.goodVsBad.bad}</p>
              </div>
            </div>

            <div className="my-12">
              <CTAButton primary>Book a discovery call</CTAButton>
            </div>

            <h2>Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6 mt-8">
              {caseType.faqs.map((faq, i) => (
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
