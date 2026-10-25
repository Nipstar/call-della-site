// PI intake glossary for /glossary. Definitions that state law were checked on 25 Oct 2026 against the linked source.
import type { Citation } from '@/lib/schema';
import { SOURCES as S, III, MWL_FAULT } from './states';

export type Term = { id: string; term: string; def: string; src?: Citation[] };

const TDI: Citation = { name: 'Workers’ compensation insurance glossary', url: 'https://www.tdi.texas.gov/wc/dwc/glossary.html', publisher: 'Texas Department of Insurance' };
const TX16001: Citation = { name: 'Tex. Civ. Prac. & Rem. Code § 16.001', url: 'https://texas.public.law/statutes/tex._civ._practice_and_remedies_code_section_16.001', publisher: 'Texas.Public.Law' };
const CFR160103: Citation = { name: '45 CFR § 160.103: Definitions', url: 'https://www.law.cornell.edu/cfr/text/45/160.103', publisher: 'Legal Information Institute' };
const CFR164504: Citation = { name: '45 CFR § 164.504: Uses and disclosures, organizational requirements', url: 'https://www.law.cornell.edu/cfr/text/45/164.504', publisher: 'Legal Information Institute' };
const CA6147: Citation = { name: 'Cal. Bus. & Prof. Code § 6147', url: 'https://california.public.law/codes/business_and_professions_code_section_6147', publisher: 'California.Public.Law' };

export const GLOSSARY: Term[] = [
  {
    id: 'mmi',
    term: 'MMI (maximum medical improvement)',
    def: 'Maximum medical improvement is the point at which an injured person’s condition has stabilized and further recovery is not expected. The Texas Department of Insurance defines it in workers’ compensation as the point “when no further healing or recovery from an injury can be expected.” In a personal injury case, MMI matters because future medical costs and permanent effects can only be estimated once the client reaches it. Intake records current treatment and any doctor’s statement about recovery, so the attorney can judge how far the case is from MMI.',
    src: [TDI],
  },
  {
    id: 'mist',
    term: 'MIST (minor impact soft tissue)',
    def: 'MIST stands for minor impact soft tissue: a claim label used in auto insurance for low-speed collisions with little visible vehicle damage and injuries such as sprains and strains rather than fractures. The label signals that the claim may be valued conservatively, so the facts gathered at intake carry weight. A useful MIST intake record covers the property damage, photos of both vehicles, whether the caller went to an ER or urgent care, when treatment started, and how the injury affects work and daily life. A MIST label is a claims category, not a legal standard, and the attorney decides whether the case is worth taking.',
  },
  {
    id: 'pip',
    term: 'PIP (personal injury protection)',
    def: 'Personal injury protection is first-party auto insurance that pays the policyholder’s own medical expenses and lost income after a crash, whoever caused it. In Florida, PIP pays up to $10,000 in medical and disability benefits, covering 80 percent of reasonable medical expenses, and only for care first received within 14 days of the accident under Fla. Stat. § 627.736. In Texas, every auto liability policy must include PIP unless a named insured rejects it in writing under Tex. Ins. Code § 1952.152. Intake records the caller’s carrier and whether a PIP claim is open.',
    src: [S.fl627736, S.tx1952],
  },
  {
    id: 'letter-of-protection',
    term: 'Letter of protection',
    def: 'A letter of protection is an arrangement under which a medical provider treats an injured person now in exchange for payment later from the settlement or judgment. Florida defines it in Fla. Stat. § 768.0427 as any such arrangement, whatever it is called, and since 2023 requires the claimant to disclose the letter and itemized, coded billing as a condition of claiming those medical expenses. Letters of protection let uninsured clients get treatment, but they affect how medical damages are proven. Intake should record whether any provider has offered or requested one.',
    src: [S.fl7680427],
  },
  {
    id: 'comparative-negligence',
    term: 'Comparative negligence',
    def: 'Comparative negligence is the rule that an injured person’s own fault reduces their damages in proportion to their share of the blame. Under pure comparative negligence, recovery is reduced but never barred: New York’s CPLR § 1411(a) says the claimant’s culpable conduct “shall not bar recovery.” Under modified comparative negligence, recovery stops at a bar. Georgia bars a plaintiff 50 percent or more at fault, while Texas, Florida and Illinois bar a plaintiff more than 50 percent at fault. New York added a modified rule for motor vehicle suits filed on or after May 26, 2026.',
    src: [S.ny1411, MWL_FAULT],
  },
  {
    id: 'contributory-negligence',
    term: 'Contributory negligence',
    def: 'Contributory negligence is the older, stricter rule under which an injured person who is even slightly at fault recovers nothing. According to the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025), only four states and the District of Columbia still apply pure contributory negligence: Alabama, Maryland, North Carolina and Virginia. The District of Columbia applies a 51 percent bar for pedestrians, cyclists and other non-motorized road users. In a contributory negligence state, intake should record the caller’s account with particular care, because any admitted fault can end the claim.',
    src: [MWL_FAULT],
  },
  {
    id: 'sol-tolling',
    term: 'Statute of limitations tolling',
    def: 'Tolling is a pause in the statute of limitations, so that time does not count against the injured person while a legal condition applies. A common example is age. Under Tex. Civ. Prac. & Rem. Code § 16.001, a person younger than 18 or of unsound mind when the claim accrues is under a legal disability, and that time is not included in the limitations period. A disability that arises after the period starts does not suspend it. Tolling rules vary by state and by claim, so intake records the injured person’s date of birth and the incident date for the attorney to check.',
    src: [TX16001],
  },
  {
    id: 'no-fault-insurance',
    term: 'No-fault insurance',
    def: 'No-fault insurance is a state auto insurance system in which injured people claim first against their own insurer, whoever caused the crash, and the right to sue for pain and suffering is limited by a threshold. Twelve states and Puerto Rico have no-fault laws, according to the Insurance Information Institute. Florida, Michigan, New Jersey, New York and Pennsylvania use a verbal threshold describing the injury. Hawaii, Kansas, Kentucky, Massachusetts, Minnesota, North Dakota and Utah use a monetary threshold. New Jersey, Pennsylvania and Kentucky let drivers choose to keep the right to sue.',
    src: [III],
  },
  {
    id: 'baa',
    term: 'BAA (business associate agreement)',
    def: 'A business associate agreement is the contract HIPAA requires between a covered entity, such as a hospital or health plan, and a business associate that handles protected health information on its behalf. The HIPAA definition of business associate in 45 CFR § 160.103 includes those who provide legal services to a covered entity, and 45 CFR § 164.504(e) sets what the contract must contain. A personal injury firm receiving records from its own client is usually not acting for a covered entity, but a firm that represents providers may be. Our <a href="/compliance/hipaa-at-intake-phi">HIPAA at intake guide</a> covers the distinction.',
    src: [CFR160103, CFR164504],
  },
  {
    id: 'conflict-check',
    term: 'Conflict check',
    def: 'A conflict check is the search a firm runs before taking a matter, to confirm that representing the new client would not conflict with duties to current clients, former clients or other prospective clients. It needs the caller’s name, the names of the other parties and any insurers, collected at intake. Florida Bar Ethics Opinion 24-1 (2024) warns that an AI intake tool can create a prospective client relationship without the lawyer’s knowledge, and suggests screening questions that limit the conversation if another lawyer already represents the caller. Intake records whether the caller has a lawyer.',
    src: [S.fl241],
  },
  {
    id: 'engagement-letter',
    term: 'Retainer agreement (engagement letter)',
    def: 'A retainer agreement, or engagement letter, is the written contract in which a client hires a law firm and the firm sets out the scope of the work and the fee. In personal injury practice the fee is usually contingent on recovery, and some states require that agreement in writing. California’s Business and Professions Code § 6147 requires a contingency fee contract to be in writing, to state the fee rate, and to be provided as a duplicate copy signed by both attorney and client. An intake specialist never signs up a client. That step belongs to the attorney.',
    src: [CA6147],
  },
  {
    id: 'intake-specialist',
    term: 'Intake specialist',
    def: 'An intake specialist is the person, or the AI agent, who takes a law firm’s first call from a prospective client and records the facts the attorney needs to decide whether to take the matter. In personal injury practice that means the incident date, location, injuries, treatment, insurers, any deadline already running and any conflict. An intake specialist does not give legal advice, quote fees or promise representation. Della is Call Della’s after-hours intake specialist for personal injury, criminal defense and immigration firms, and she tells callers she is an AI if they ask. See <a href="/personal-injury">after-hours personal injury intake</a>.',
  },
];
