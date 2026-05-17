import type { Metadata } from 'next';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { SITE_URL } from '@/lib/config';

const SLUG = '/intake-playbook/what-should-be-on-a-pi-intake-form';
const TITLE = 'What exactly should be on a personal injury intake form?';
const DESCRIPTION =
  'A PI intake form is a triage instrument: liability, damages, viable recovery source. SOL exposure, comparative-negligence triggers, immediate medical intervention details — without overwhelming the caller.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-default.png'] },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR A CLUSTER · INTAKE PLAYBOOK"
      title={TITLE}
      description={DESCRIPTION}
      slug={SLUG}
      breadcrumbs={[
        { name: 'Intake playbook', href: '/intake-playbook' },
        { name: 'PI intake form', href: SLUG },
      ]}
      author="Andy Norman"
      date="14 MAY 2026"
      datePublished="2026-05-14"
      dateModified="2026-05-14"
      tldr={
        <>
          <p className="mb-2">A personal injury intake form shouldn't be a generic questionnaire. It is a triage instrument designed to establish three things instantly: liability, damages, and viable recovery source.</p>
          <p className="m-0">The perfect form captures statute of limitations exposure, comparative negligence triggers, and immediate medical intervention details without overwhelming the caller.</p>
        </>
      }
    >
      <h2>The problem with generic intake forms</h2>
      <p>
        Most law firms use generic CRM templates or generic answering services that ask name, number, and "what happened." For a personal injury firm, this is malpractice.
      </p>
      <p>
        If your intake form doesn't immediately flag that the caller was in a comparative negligence state, or that the opposing insurance has already made contact, you are bleeding case value before the partner even looks at the file.
      </p>

      <h2>The core framework: Liability, Damages, Recovery</h2>
      <p>
        A professional PI intake form groups questions into three strict categories. If any of these fail, the case is likely a decline.
      </p>
      
      <h3>1. Establishing Liability (Who is at fault?)</h3>
      <ul>
        <li><strong>Did the police arrive at the scene?</strong> If yes, was a citation issued? (Crucial for establishing objective fault).</li>
        <li><strong>Was fault admitted?</strong> Even verbal admissions at the scene change the trajectory of the initial insurance demand.</li>
        <li><strong>Were there witnesses?</strong> Capturing their names during the raw emotional state immediately post-incident is critical before they forget or refuse to cooperate.</li>
      </ul>

      <h3>2. Establishing Damages (Is there a case?)</h3>
      <ul>
        <li><strong>Did they go to the ER?</strong> A gap in treatment is the insurance adjuster's best friend. The intake form must confirm if medical attention was sought immediately.</li>
        <li><strong>What is the primary injury?</strong> Distinguishing between soft-tissue injuries and objective fractures dictates triage urgency.</li>
      </ul>

      <h3>3. Viable Recovery Source (Can we get paid?)</h3>
      <ul>
        <li><strong>Did the at-fault party have insurance?</strong> Or was it a commercial vehicle? (Commercial policies exponentially increase potential case value).</li>
        <li><strong>Is it a rideshare incident?</strong> Uber and Lyft require completely different intake flows due to their varying policy limits based on the driver's app status.</li>
      </ul>

      <h2>State variations and edge cases</h2>
      <p>
        In modified comparative negligence states (like Texas), if the caller admits they were 51% at fault, they recover nothing. The intake script must carefully document the caller's narrative without inadvertently leading them into an admission of fault that ruins the case in discovery.
      </p>

      <h2>How Della handles this</h2>
      <p>
        Instead of a static form, Call Della uses a dynamic, conversational AI protocol. She doesn't just read a list of questions; she listens to the narrative and extracts the liability, damages, and recovery signals organically. If a caller mentions an ER visit, Della automatically follows up to ask which hospital, capturing the precise detail your paralegals need to request the medical records the next morning.
      </p>
      
      <p>
        <a href="/">Learn more about how Della structures intake dossiers →</a>
      </p>
    </ArticleLayout>
  );
}
