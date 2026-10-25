// Phone-call recording consent by state (50 states + DC), for /compliance/call-recording-consent-by-state.
// Checked on 25 Oct 2026 against each state's page in the Reporters Committee for Freedom of the Press
// Reporter's Recording Guide (rcfpUpdated = that page's "Last updated" date), plus statute text for CT and OR.
// `verify` marks entries whose law is unsettled or in litigation: the page shows it as a visible note.
// Not legal advice.

export type Consent = 'one-party' | 'all-party' | 'mixed';

export type StateConsent = {
  code: string;
  name: string;
  phone: Consent; // rule for recording a phone call
  statute: string;
  note?: string;
  verify?: string;
  rcfpUpdated: string;
};

export const RCFP_BASE = 'https://www.rcfp.org/reporters-recording-guide/';
export const rcfpUrl = (s: StateConsent) => `${RCFP_BASE}${s.name.toLowerCase().replace(/ /g, '-')}/`;

export const RECORDING_CONSENT: StateConsent[] = [
  { code: 'AL', name: 'Alabama', phone: 'one-party', statute: 'Ala. Code § 13A-11-31', rcfpUpdated: 'October 2025' },
  { code: 'AK', name: 'Alaska', phone: 'one-party', statute: 'Alaska Stat. § 42.20.310', rcfpUpdated: 'September 2019' },
  { code: 'AZ', name: 'Arizona', phone: 'one-party', statute: 'Ariz. Rev. Stat. § 13-3005', rcfpUpdated: 'September 2022' },
  { code: 'AR', name: 'Arkansas', phone: 'one-party', statute: 'Ark. Code § 5-60-120', rcfpUpdated: 'September 2019' },
  {
    code: 'CA', name: 'California', phone: 'all-party', statute: 'Cal. Penal Code §§ 632, 632.7',
    note: 'All parties must consent to record a confidential communication (§ 632). For cellular and cordless calls, all parties must consent regardless of confidentiality.',
    rcfpUpdated: 'August 2021',
  },
  { code: 'CO', name: 'Colorado', phone: 'one-party', statute: 'Colo. Rev. Stat. § 18-9-303', rcfpUpdated: 'July 2022' },
  {
    code: 'CT', name: 'Connecticut', phone: 'mixed', statute: 'Conn. Gen. Stat. §§ 53a-187, 53a-189 (criminal); § 52-570d (civil)',
    note: 'Criminal law: one-party consent. Civil liability: recording a phone call needs all parties’ consent, given in writing or at the start of the recording, or a recorded verbal notice at the beginning of the call, or a periodic tone warning (§ 52-570d(a)).',
    rcfpUpdated: 'October 2019',
  },
  {
    code: 'DE', name: 'Delaware', phone: 'mixed', statute: 'Del. Code tit. 11, § 2402(c)(4); tit. 11, § 1335(a)(4)',
    note: 'The wiretap law allows one-party consent; the privacy law requires all parties’ consent. At least one federal court has held a party may record their own call. RCFP advises following the stricter rule.',
    verify: 'Statutes conflict; no controlling state ruling found.',
    rcfpUpdated: 'October 2019',
  },
  { code: 'DC', name: 'District of Columbia', phone: 'one-party', statute: 'D.C. Code § 23-542', rcfpUpdated: 'October 2019' },
  { code: 'FL', name: 'Florida', phone: 'all-party', statute: 'Fla. Stat. § 934.03(2)(d)', rcfpUpdated: 'October 2019' },
  { code: 'GA', name: 'Georgia', phone: 'one-party', statute: 'Ga. Code §§ 16-11-62, 16-11-66(a)', rcfpUpdated: 'May 2020' },
  {
    code: 'HI', name: 'Hawaii', phone: 'one-party', statute: 'Haw. Rev. Stat. § 803-42(b)(3)(A)',
    note: 'Phone calls: one-party consent. A separate privacy law requires all parties’ consent to install or use a recording device in a “private place” (§ 711-1111).',
    rcfpUpdated: 'May 2020',
  },
  { code: 'ID', name: 'Idaho', phone: 'one-party', statute: 'Idaho Code § 18-6702(2)(d)', rcfpUpdated: 'May 2020' },
  { code: 'IL', name: 'Illinois', phone: 'all-party', statute: '720 ILCS 5/14-1, 5/14-2', note: 'Applies to private conversations and communications made with a reasonable expectation of privacy.', rcfpUpdated: 'May 2020' },
  { code: 'IN', name: 'Indiana', phone: 'one-party', statute: 'Ind. Code § 35-33.5-5-5', rcfpUpdated: 'August 2021' },
  { code: 'IA', name: 'Iowa', phone: 'one-party', statute: 'Iowa Code §§ 808B.2, 727.8', rcfpUpdated: 'October 2021' },
  { code: 'KS', name: 'Kansas', phone: 'one-party', statute: 'Kan. Stat. § 21-6101(a)(1)', rcfpUpdated: 'July 2022' },
  { code: 'KY', name: 'Kentucky', phone: 'one-party', statute: 'Ky. Rev. Stat. § 526.010', rcfpUpdated: 'May 2020' },
  { code: 'LA', name: 'Louisiana', phone: 'one-party', statute: 'La. Rev. Stat. § 15:1303', rcfpUpdated: 'May 2020' },
  { code: 'ME', name: 'Maine', phone: 'one-party', statute: 'Me. Rev. Stat. tit. 15, § 710', rcfpUpdated: 'May 2020' },
  { code: 'MD', name: 'Maryland', phone: 'all-party', statute: 'Md. Code, Cts. & Jud. Proc. § 10-402(c)(3)', rcfpUpdated: 'May 2020' },
  {
    code: 'MA', name: 'Massachusetts', phone: 'all-party', statute: 'Mass. Gen. Laws ch. 272, § 99(C)',
    note: 'The law reaches secret recordings; affirmative consent is not needed when all parties know the call is being recorded (Curtatone v. Barstool Sports, 2021).',
    rcfpUpdated: 'August 2021',
  },
  {
    code: 'MI', name: 'Michigan', phone: 'mixed', statute: 'Mich. Comp. Laws § 750.539c',
    note: 'The statute bars recording private conversations without all parties’ consent. Sullivan v. Gray (Mich. Ct. App. 1982) held a participant may record a conversation they are part of; a federal court followed it in 2021. The Michigan Supreme Court has not ruled.',
    verify: 'Participant exception rests on an appellate ruling the state supreme court has not addressed.',
    rcfpUpdated: 'May 2020',
  },
  { code: 'MN', name: 'Minnesota', phone: 'one-party', statute: 'Minn. Stat. § 626A.02(2)(d)', rcfpUpdated: 'May 2020' },
  { code: 'MS', name: 'Mississippi', phone: 'one-party', statute: 'Miss. Code § 41-29-531(e)', rcfpUpdated: 'May 2020' },
  { code: 'MO', name: 'Missouri', phone: 'one-party', statute: 'Mo. Rev. Stat. § 542.402.2(3)', rcfpUpdated: 'May 2020' },
  {
    code: 'MT', name: 'Montana', phone: 'all-party', statute: 'Mont. Code § 45-8-213(1)(c)',
    note: 'Recording a phone call without the knowledge of all parties is unlawful. The ban does not apply to people given a warning that the call is being recorded (§ 45-8-213(2)(a)).',
    rcfpUpdated: 'May 2020',
  },
  { code: 'NE', name: 'Nebraska', phone: 'one-party', statute: 'Neb. Rev. Stat. § 86-290', rcfpUpdated: 'May 2020' },
  {
    code: 'NV', name: 'Nevada', phone: 'all-party', statute: 'Nev. Rev. Stat. § 200.620',
    note: 'Phone calls need all parties’ consent (Lane v. Allstate, Nev. 1998), including cell calls (Sharpe v. State, Nev. 2015). In-person conversations need only one party’s consent.',
    rcfpUpdated: 'May 2020',
  },
  { code: 'NH', name: 'New Hampshire', phone: 'all-party', statute: 'N.H. Rev. Stat. § 570-A:2', rcfpUpdated: 'May 2020' },
  { code: 'NJ', name: 'New Jersey', phone: 'one-party', statute: 'N.J. Stat. §§ 2A:156A-3, 2A:156A-4', rcfpUpdated: 'May 2020' },
  { code: 'NM', name: 'New Mexico', phone: 'one-party', statute: 'N.M. Stat. § 30-12-1', note: 'The statute names wire and cable communications; courts have not said whether it covers cell calls.', rcfpUpdated: 'April 2020' },
  { code: 'NY', name: 'New York', phone: 'one-party', statute: 'N.Y. Penal Law §§ 250.00, 250.05', rcfpUpdated: 'May 2020' },
  { code: 'NC', name: 'North Carolina', phone: 'one-party', statute: 'N.C. Gen. Stat. § 15A-287', rcfpUpdated: 'April 2020' },
  { code: 'ND', name: 'North Dakota', phone: 'one-party', statute: 'N.D. Cent. Code § 12.1-15-02', note: 'The statute names wire and cable communications; courts have not said whether it covers cell calls.', rcfpUpdated: 'April 2020' },
  { code: 'OH', name: 'Ohio', phone: 'one-party', statute: 'Ohio Rev. Code § 2933.52', rcfpUpdated: 'April 2020' },
  { code: 'OK', name: 'Oklahoma', phone: 'one-party', statute: 'Okla. Stat. tit. 13, § 176.4', rcfpUpdated: 'July 2022' },
  {
    code: 'OR', name: 'Oregon', phone: 'one-party', statute: 'Or. Rev. Stat. § 165.540(1)(a)',
    note: 'Phone calls: one-party consent. In-person conversations: § 165.540(1)(c) requires all participants to be specifically informed. A Ninth Circuit panel struck that in-person rule in 2023 (Project Veritas v. Schmidt), and the court issued a further opinion in the case in January 2025.',
    verify: 'Current status of the in-person rule after the 2025 Ninth Circuit opinion.',
    rcfpUpdated: 'October 2023',
  },
  {
    code: 'PA', name: 'Pennsylvania', phone: 'all-party', statute: '18 Pa. Cons. Stat. §§ 5703, 5704(4)',
    note: 'Courts find consent where a party knew or reasonably should have known the call was being recorded (Commonwealth v. Byrd, 2020).',
    rcfpUpdated: 'August 2020',
  },
  { code: 'RI', name: 'Rhode Island', phone: 'one-party', statute: 'R.I. Gen. Laws § 11-35-21', rcfpUpdated: 'April 2020' },
  { code: 'SC', name: 'South Carolina', phone: 'one-party', statute: 'S.C. Code § 17-30-30', rcfpUpdated: 'April 2020' },
  { code: 'SD', name: 'South Dakota', phone: 'one-party', statute: 'S.D. Codified Laws § 23A-35A-20', rcfpUpdated: 'April 2020' },
  { code: 'TN', name: 'Tennessee', phone: 'one-party', statute: 'Tenn. Code § 39-13-601', rcfpUpdated: 'June 2020' },
  { code: 'TX', name: 'Texas', phone: 'one-party', statute: 'Tex. Penal Code § 16.02', rcfpUpdated: 'June 2020' },
  { code: 'UT', name: 'Utah', phone: 'one-party', statute: 'Utah Code § 77-23a-4', rcfpUpdated: 'July 2022' },
  { code: 'VT', name: 'Vermont', phone: 'one-party', statute: 'No state statute; federal 18 U.S.C. § 2511 applies', note: 'Vermont has no specific recording statute, so the federal one-party rule governs.', rcfpUpdated: 'June 2020' },
  { code: 'VA', name: 'Virginia', phone: 'one-party', statute: 'Va. Code § 19.2-62', rcfpUpdated: 'June 2020' },
  {
    code: 'WA', name: 'Washington', phone: 'all-party', statute: 'Wash. Rev. Code § 9.73.030',
    note: 'Consent is obtained when a reasonably effective recorded announcement tells all parties the call is about to be recorded.',
    rcfpUpdated: 'June 2020',
  },
  { code: 'WV', name: 'West Virginia', phone: 'one-party', statute: 'W. Va. Code § 62-1D-3', rcfpUpdated: 'December 2021' },
  { code: 'WI', name: 'Wisconsin', phone: 'one-party', statute: 'Wis. Stat. § 968.31', rcfpUpdated: 'June 2020' },
  { code: 'WY', name: 'Wyoming', phone: 'one-party', statute: 'Wyo. Stat. § 7-3-702', rcfpUpdated: 'July 2022' },
];

export const byConsent = (c: Consent) => RECORDING_CONSENT.filter((s) => s.phone === c);
