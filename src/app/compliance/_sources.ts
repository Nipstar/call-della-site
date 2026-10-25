// Sources for the compliance posts. Each was fetched and read on 25 Oct 2026; the posts quote only what each says.
import type { Citation } from '@/lib/schema';

const MR = 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct';

export const SRC = {
  aba512: {
    name: 'ABA Formal Opinion 512: Generative Artificial Intelligence Tools',
    url: 'https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf',
    publisher: 'ABA Standing Committee on Ethics and Professional Responsibility',
    year: '2024',
  },
  rule118: { name: 'ABA Model Rule 1.18: Duties to Prospective Client', url: `${MR}/rule_1_18_duties_of_prospective_client/`, publisher: 'American Bar Association' },
  rule118c: { name: 'ABA Model Rule 1.18, Comment', url: `${MR}/rule_1_18_duties_of_prospective_client/comment_on_rule_1_18_duties_of_prospective_client/`, publisher: 'American Bar Association' },
  rule16c: { name: 'ABA Model Rule 1.6, Comment', url: `${MR}/rule_1_6_confidentiality_of_information/comment_on_rule_1_6/`, publisher: 'American Bar Association' },
  rule53: { name: 'ABA Model Rule 5.3: Responsibilities Regarding Nonlawyer Assistance', url: `${MR}/rule_5_3_responsibilities_regarding_nonlawyer_assistant/`, publisher: 'American Bar Association' },
  rule53c: { name: 'ABA Model Rule 5.3, Comment', url: `${MR}/rule_5_3_responsibilities_regarding_nonlawyer_assistant/comment_on_rule_5_3/`, publisher: 'American Bar Association' },
  hhsCovered: { name: 'Covered Entities and Business Associates', url: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html', publisher: 'U.S. Department of Health and Human Services', year: '2024' },
  hhsBA: { name: 'Business Associates Frequently Asked Questions', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html', publisher: 'U.S. Department of Health and Human Services' },
  cfr160103: { name: '45 CFR 160.103: Definitions (business associate, covered entity)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103', publisher: 'Electronic Code of Federal Regulations' },
  cfr164508: { name: '45 CFR 164.508: Uses and disclosures for which an authorization is required', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.508', publisher: 'Electronic Code of Federal Regulations' },
  abaLpm2025: {
    name: "Law's New First Impression: Transforming Client Intake",
    url: 'https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/laws-new-first-impression-transforming-client-intake/',
    publisher: 'ABA Law Practice Magazine',
    year: '2025',
  },
  rcfp: { name: "Reporter's Recording Guide", url: 'https://www.rcfp.org/reporters-recording-guide/', publisher: 'Reporters Committee for Freedom of the Press' },
  ct52570d: { name: 'Conn. Gen. Stat. § 52-570d', url: 'https://www.cga.ct.gov/current/pub/chap_925.htm', publisher: 'Connecticut General Assembly' },
  ors165540: { name: 'ORS 165.540: Obtaining contents of communications', url: 'https://oregon.public.law/statutes/ors_165.540', publisher: 'OregonLaws' },
} satisfies Record<string, Citation>;
