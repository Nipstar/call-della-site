// Shared building blocks for the intake-playbook and operations posts.
// ArticleLayout's `prose-*` classes are no-ops (no typography plugin), so posts style their own body text here.
import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { DEMO_MINUTES } from '@/lib/plans';
import type { Citation } from '@/lib/schema';

const PROSE = [
  '[&_h2]:font-serif [&_h2]:text-[26px] md:[&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.15] [&_h2]:text-[var(--ink)] [&_h2]:mt-14 [&_h2]:mb-5',
  '[&_h3]:font-serif [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:text-[var(--ink)] [&_h3]:mt-8 [&_h3]:mb-3',
  '[&_p]:font-serif [&_p]:text-[17px] [&_p]:leading-[1.6] [&_p]:text-[var(--ink)] [&_p]:mb-5',
  '[&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-6 [&_ul]:pl-6 [&_ol]:mb-6 [&_ul]:mb-6',
  '[&_li]:font-serif [&_li]:text-[17px] [&_li]:leading-[1.6] [&_li]:text-[var(--ink)] [&_li]:mb-2',
  '[&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[var(--rule-soft)] hover:[&_a]:decoration-[var(--ink)]',
  '[&_strong]:font-semibold',
].join(' ');

export const Prose = ({ children }: { children: React.ReactNode }) => <div className={PROSE}>{children}</div>;

// Tables scroll inside their own box so the page never scrolls sideways at 375px.
export const Table = ({ caption, head, rows, wide = true }: { caption: string; head: string[]; rows: React.ReactNode[][]; wide?: boolean }) => (
  <div className="overflow-x-auto my-8 border-[1.5px] border-[var(--rule)] bg-[var(--paper)]">
    <table className={`w-full border-collapse text-left font-serif text-[15px] leading-[1.5] text-[var(--ink)] ${wide ? 'min-w-[560px]' : ''}`}>
      <caption className="text-left font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)] px-4 py-3 border-b border-[var(--rule)]">
        {caption}
      </caption>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} scope="col" className="px-4 py-3 font-semibold border-b border-[var(--rule)] bg-[var(--paper-edge)] align-bottom">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-[var(--rule-soft)] last:border-b-0">
            {r.map((c, j) =>
              j === 0 ? (
                <th key={j} scope="row" className="px-4 py-3 font-semibold align-top">{c}</th>
              ) : (
                <td key={j} className="px-4 py-3 align-top">{c}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const DemoCTA = ({ children }: { children: React.ReactNode }) => (
  <aside className="my-14 border-[1.5px] border-[var(--rule)] bg-[var(--paper-edge)] p-6 md:p-8">
    <p className="font-serif text-[17px] leading-[1.6] text-[var(--ink)] mb-5">{children}</p>
    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)] mb-5">
      {DEMO_MINUTES} minutes · a live Della call for your practice area
    </p>
    <CTAButton primary>Book a demo</CTAButton>
  </aside>
);

// Sources fetched and read on 25 Oct 2026. Figures on these pages quote only what each source says.
export const SRC = {
  clio2024: { name: 'Clio, 2024 Legal Trends Report', url: 'https://www.clio.com/resources/legal-trends/2024-report/', publisher: 'Clio', year: '2024' },
  abaLpm2025: { name: "Law's New First Impression: Transforming Client Intake", url: 'https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/laws-new-first-impression-transforming-client-intake/', publisher: 'ABA Law Practice Magazine', year: '2025' },
  obj2025: { name: 'Answering the Call: Why Responsiveness Is Critical for Law Firm Success', url: 'https://www.okbar.org/lpt_articles/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/', publisher: 'Oklahoma Bar Journal', year: '2025' },
  civility2024: { name: '2024 Clio Legal Trends Report: Fixing the First Impression Problem for Law Firms', url: 'https://www.2civility.org/2024-clio-legal-trends-report-fixing-the-first-impression-problem-for-law-firms/', publisher: 'Illinois Supreme Court Commission on Professionalism (2Civility)', year: '2024' },
  lmnc2019: { name: 'How Your Telephone is Costing You Clients', url: 'https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients', publisher: 'Lawyers Mutual NC', year: '2019' },
  rule118: { name: 'ABA Model Rule 1.18: Duties to Prospective Client', url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_18_duties_of_prospective_client/', publisher: 'American Bar Association', year: '2020' },
  rule15: { name: 'ABA Model Rule 1.5: Fees', url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_5_fees/', publisher: 'American Bar Association', year: '2020' },
  rule53: { name: 'ABA Model Rule 5.3: Responsibilities Regarding Nonlawyer Assistance', url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_3_responsibilities_regarding_nonlawyer_assistant/', publisher: 'American Bar Association' },
} satisfies Record<string, Citation>;
