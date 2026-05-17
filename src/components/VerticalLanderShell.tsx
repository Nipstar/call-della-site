import { Header } from './Header';
import { Footer } from './Footer';
import { PaperTexture } from './PaperTexture';
import { Hero } from './sections/Hero';
import { PainScenario } from './sections/PainScenario';
import { IndustryStats } from './sections/IndustryStats';
import { DellaHandles } from './sections/DellaHandles';
import { CapturedFields } from './sections/CapturedFields';
import { ComplianceSection } from './sections/ComplianceSection';
import { FeatureBlock } from './sections/FeatureBlock';
import { HowDellaWorks } from './sections/HowDellaWorks';
import { SocialProof } from './sections/SocialProof';
import { SecurityStrip } from './sections/SecurityStrip';
import { PricingTeaser } from './sections/PricingTeaser';
import { VerticalFAQ } from './sections/VerticalFAQ';
import { DemoCallout } from './sections/DemoCallout';
import { BookingModal } from './BookingModal';
import { Breadcrumbs } from './Breadcrumbs';
import { SITE_URL } from '@/lib/config';
import type { Vertical } from '@/lib/verticals';

type Props = {
  vertical: Vertical;
};

export const VerticalLanderShell = ({ vertical }: Props) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${vertical.slug}#service`,
    name: `Call Della — ${vertical.name} Intake`,
    description: vertical.meta.description,
    serviceType: `${vertical.name} after-hours intake`,
    category: `${vertical.name} legal intake`,
    url: `${SITE_URL}/${vertical.slug}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: `${vertical.name} law firms`,
    },
    availableLanguage:
      vertical.slug === 'immigration' ? ['English', 'Spanish'] : ['English'],
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="px-8 pt-6 pb-0 max-w-[1180px] mx-auto w-full">
            <Breadcrumbs items={[{ name: vertical.name, href: `/${vertical.slug}` }]} />
          </div>
          <Hero hero={vertical.hero} demo={vertical.demo} slug={vertical.slug} dossier={vertical.heroDossier} />

          <PainScenario
            painScenario={vertical.painScenario}
            eyebrow="THE CALL YOU'RE LOSING"
            heading="The call you're losing right now."
          />

          <IndustryStats
            industryStats={vertical.industryStats}
            eyebrow="THE LEAK"
            heading={`Why ${vertical.shortName} firms lose cases after dark.`}
          />

          {vertical.featureBlock && <FeatureBlock featureBlock={vertical.featureBlock} />}

          <DellaHandles
            handles={vertical.handles}
            eyebrow={`HOW DELLA HANDLES ${vertical.shortName.toUpperCase()} INTAKE`}
            heading={`${vertical.name}, four ways Della handles the call.`}
          />

          <CapturedFields
            capturedFields={vertical.capturedFields}
            eyebrow="WHAT LANDS IN YOUR DOSSIER"
            heading="Every field your attorneys need, captured every call."
          />

          {vertical.compliance && <ComplianceSection compliance={vertical.compliance} />}

          <HowDellaWorks />

          <SocialProof
            socialProof={vertical.socialProof}
            eyebrow="WHAT FIRMS SAY"
            heading={`${vertical.shortName} firms using Della.`}
          />

          <SecurityStrip />

          <PricingTeaser />

          <VerticalFAQ
            faq={vertical.faq}
            eyebrow={`${vertical.shortName.toUpperCase()} INTAKE — FAQ`}
            heading={`Questions ${vertical.shortName} partners ask first.`}
          />

          <DemoCallout
            demo={vertical.demo}
            slug={vertical.slug}
            eyebrow="TRY DELLA BEFORE YOU TRUST HER"
            heading={`Call Della-${vertical.shortName}. Talk to her like a real intake.`}
            sub="If she earns it, book a discovery call and we'll have you live in a week."
          />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
};
