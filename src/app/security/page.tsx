import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CTAButton } from '@/components/CTAButton';
import { pageMeta, page } from '@/data/pages';

export const metadata: Metadata = pageMeta('/security');

const entry = page('/security');

// Only state what is true today: encryption in transit and at rest, firm-owned recordings,
// retention set per firm, no model training. Anything else (hosting region, BAA, audits,
// access controls) needs Andy's confirmation before it goes on this page.
const faq = [
  {
    q: 'Is call data encrypted?',
    a: 'Yes. Call Della encrypts call data in transit and at rest. That covers the recordings, the transcripts and the dossiers Della files for each call. Encryption protects the data while it moves between the phone call, the Call Della platform and your dashboard, and while it is stored.',
  },
  {
    q: 'Who owns the recordings and transcripts?',
    a: 'Your firm does. The recordings, transcripts and dossiers from your callers belong to your firm, not to Call Della. Call Della holds them to provide the service: answering your calls, filing dossiers, sending alerts and producing the morning brief. Your firm decides how long they are kept.',
  },
  {
    q: 'How long does Call Della keep call data?',
    a: 'Retention is set per firm. Your firm chooses how long Call Della keeps recordings, transcripts and dossiers, in line with your own file retention policy and the rules that apply to your practice. Tell us your retention period during setup and Call Della applies it to your account.',
  },
  {
    q: 'Is our callers’ data used to train AI models?',
    a: 'No. Call Della does not use your callers’ recordings, transcripts or dossiers to train AI models. Your callers’ information is used to handle your firm’s calls and nothing else. That matters for confidentiality, because a prospective client’s first call often includes facts they would share only with a lawyer.',
  },
  {
    q: 'Is Call Della HIPAA compliant?',
    a: 'Call Della does not claim HIPAA compliance. Whether HIPAA applies to a law firm’s intake call depends on the firm and the matter, so Call Della does not make a blanket claim either way. Our guide to HIPAA at legal intake explains when the rules can apply and what to ask any intake vendor.',
  },
];

export default function SecurityPage() {
  return (
    <ArticleLayout
      eyebrow="SECURITY"
      title="Legal intake confidentiality: how Call Della handles your data"
      breadcrumbs={[{ name: 'Security', href: '/security' }]}
      author="Andy Norman"
      date={entry.datePublished}
      datePublished={entry.datePublished}
      dateModified={entry.dateModified}
      tldr={
        <>
          <p className="mb-2">
            <strong>Legal intake confidentiality</strong> means keeping what a prospective client says on the first
            call private to the firm they called. Call Della protects it in four ways: call data is encrypted in transit
            and at rest, your firm owns every recording and transcript, retention is set per firm, and your callers&rsquo;
            data is not used to train AI models.
          </p>
          <p className="m-0">
            Della also limits what she says. She never gives legal advice, never claims to be human, and plays the
            recording disclosure set for your state.
          </p>
        </>
      }
    >
      <h2>How does Call Della keep intake calls confidential?</h2>
      <p>
        Call Della keeps intake calls confidential by protecting the data and limiting its use. Every call Della takes is
        recorded and transcribed, then filed as a dossier in the Call Della dashboard. That call data is encrypted in
        transit, while it moves between the call, the platform and your dashboard, and at rest, while it is stored. The
        data is used to answer your firm&rsquo;s calls, file dossiers, send urgent-call email alerts and produce the
        morning brief. It is not used to train AI models. A caller&rsquo;s first call often includes facts about an
        injury, an arrest or an immigration status, and those facts belong with the firm the caller chose.
      </p>

      <h2>Who owns the call recordings and transcripts?</h2>
      <p>
        Your firm owns the call recordings, transcripts and dossiers from your callers. Call Della holds that data to run
        the service for you, and your firm decides how long it is kept. Retention is set per firm, so a firm can match
        Call Della to its own file retention policy. Ownership also shapes how Della behaves on the call. She answers in
        your firm&rsquo;s name, takes the intake for your attorneys and hands every detail to your team. The
        relationship with the caller stays with your firm from the first word.
      </p>

      <h2>What does Della say, and not say, to callers?</h2>
      <p>
        Della says only what an intake specialist should. She gives her name and your firm&rsquo;s name, explains that
        the office is closed and takes the caller&rsquo;s details. She never claims to be human, and when a caller asks,
        she says she is an AI intake specialist. She never gives legal advice, never quotes fees and never promises
        representation. Each call carries the recording disclosure set for your state. For the rules behind these
        choices, see{' '}
        <a href="/compliance/attorney-client-privilege-ai-intake">AI intake and attorney-client privilege</a>,{' '}
        <a href="/compliance/aba-formal-opinion-512-explained">ABA Formal Opinion 512 explained</a> and{' '}
        <a href="/compliance/call-recording-consent-by-state">call recording consent by state</a>.
      </p>

      <h2>What platform does Della run on?</h2>
      <p>
        Della&rsquo;s voice runs on the Retell AI voice platform, and Call Della is built by{' '}
        <a href="https://www.antekautomation.com">Antek Automation</a>. Call Della configures Della&rsquo;s intake flow for
        each practice area: <a href="/personal-injury">personal injury</a>,{' '}
        <a href="/criminal-defense">criminal defense</a> and <a href="/immigration">immigration</a>. If your firm needs
        more detail for a vendor review, email the team and we will answer in writing.
      </p>

      <div className="not-prose my-12">
        <CTAButton primary large>Book a demo</CTAButton>
      </div>

      <div className="not-prose">
        <FAQ items={faq} eyebrow="SECURITY FAQ" heading="Questions firms ask about call data" />
      </div>
      <p>
        Read more on <a href="/compliance/hipaa-at-intake-phi">HIPAA at legal intake</a> and the full{' '}
        <a href="/compliance">AI legal intake compliance guide</a>.
      </p>
    </ArticleLayout>
  );
}
