// Practice-area lander copy. HTML strings (answer, sections, compliance bullets) are trusted static copy.
// Every number here links to a source fetched and read on 25 Oct 2026. Product claims follow FLAGS in plans.ts.

export type VerticalSlug = 'personal-injury' | 'criminal-defense' | 'immigration';

export type Vertical = {
  slug: VerticalSlug;
  name: string;
  shortName: string;
  hero: {
    eyebrow: string;
    headline: string; // the H1, plain text
    answer: string; // HTML answer block under the H1
    statLine?: string;
    ctaPrimary: string;
  };
  painScenario: {
    timestamp: string;
    body: string;
  };
  sections: Array<{
    heading: string; // phrased as a buyer question
    html: string[]; // paragraphs
    table?: { caption: string; head: string[]; rows: string[][] };
  }>;
  handlesHeading: string;
  handles: Array<{
    title: string;
    description: string;
    captures: string[];
  }>;
  capturedFields: string[];
  faq: Array<{ question: string; answer: string }>;
  socialProof: Array<{ firmName: string; quote: string; attribution: string }>;
  industryStats: Array<{ stat: string; source: string; url: string }>; // rendered as the Sources list
  related: Array<{ href: string; label: string }>;
  compliance?: {
    eyebrow?: string;
    heading: string;
    bullets: string[]; // HTML
  };
  featureBlock?: {
    eyebrow?: string;
    heading: string;
    body: string;
    roadmap?: string;
  };
  heroDossier?: {
    intakeId: string;
    timestamp: string;
    callerName: string;
    duration: string;
    agentTag: string;
    matterLine: string;
    quote: string;
    actionLine: string;
    languageTag?: string;
  };
};

const SRC = {
  clio: {
    url: 'https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/laws-new-first-impression-transforming-client-intake/',
    source: 'ABA Law Practice Magazine, "Law\'s New First Impression: Transforming Client Intake", March/April 2025, reporting the 2024 Clio Legal Trends Report',
  },
  lawyersMutual: {
    url: 'https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients',
    source: 'Lawyers Mutual NC, "How Your Telephone Is Costing You Clients", 2019, reporting an ABA Law Practice Division secret-shopper survey',
  },
  fmcsa: { url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-A/section-387.9', source: '49 CFR 387.9, Financial responsibility, minimum levels (eCFR)' },
  asylum: { url: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-208/subpart-A/section-208.4', source: '8 CFR 208.4, Filing the application (eCFR)' },
  ctCivil: { url: 'https://www.cga.ct.gov/current/pub/chap_925.htm#sec_52-570d', source: 'Conn. Gen. Stat. § 52-570d, Action for illegal recording of private telephonic communications' },
  ctCriminal: { url: 'https://www.cga.ct.gov/current/pub/chap_952.htm#sec_53a-187', source: 'Conn. Gen. Stat. § 53a-187, Eavesdropping definitions' },
};

const a = (href: string, text: string) =>
  href.startsWith('http') ? `<a href="${href}" rel="noopener" target="_blank">${text}</a>` : `<a href="${href}">${text}</a>`;

const CLIO_LINE = `In the 2024 Clio Legal Trends Report secret-shopper study, only 40% of law firms answered the phone, down from 56% in 2019, ${a(SRC.clio.url, 'according to ABA Law Practice Magazine (2025)')}.`;

const CLIO_STAT = { stat: 'Only 40% of law firms answered phone inquiries in the 2024 Clio secret-shopper study, down from 56% in 2019.', ...SRC.clio };
const LM_STAT = { stat: '32% of calls to law firms went straight to voicemail, and 42% of the time the lawyer took three or more days to reply.', ...SRC.lawyersMutual };

const RECORDING_BULLET = `Recording disclosure at the start of every call, set for your firm's state. Consent rules differ by state, and some are mixed: Connecticut's civil statute requires all-party consent or a recorded notice before a phone call is recorded (${a(SRC.ctCivil.url, 'Conn. Gen. Stat. § 52-570d')}), while its criminal eavesdropping law turns on the consent of one party (${a(SRC.ctCriminal.url, '§ 53a-187')}). Check your state in our ${a('/compliance/call-recording-consent-by-state', 'call recording consent by state')} guide.`;

const RECORDING_FAQ =
  "Della plays a recording disclosure at the start of every call, set for your firm's state. State rules differ: some require every party's consent, and Connecticut is mixed, with all-party consent or a recorded notice under its civil statute and one-party consent under its criminal law. Our call recording consent by state guide covers each state. Confirm the wording with your own counsel.";

export const verticals: Record<VerticalSlug, Vertical> = {
  'personal-injury': {
    slug: 'personal-injury',
    name: 'Personal Injury',
    shortName: 'PI',
    hero: {
      eyebrow: 'PERSONAL INJURY INTAKE · NIGHTS, WEEKENDS, HOLIDAYS',
      headline: 'AI intake for personal injury law firms, after hours.',
      answer: `<strong>AI intake for personal injury law firms</strong> is a voice agent that answers the firm's phone when the office is closed and runs the first intake call. Call Della is that intake specialist: Della takes the overnight crash, trucking and premises calls, captures incident, injury, treatment and insurance details, and files a dossier before 7am. ${CLIO_LINE}`,
      statLine: 'Dossier by 7am · Urgent calls emailed to the attorney on call',
      ctaPrimary: 'Book a demo',
    },
    heroDossier: {
      intakeId: 'SAMPLE INT-04421',
      timestamp: '04 MAY 2026 · 23:42 CDT',
      callerName: 'Sample caller',
      duration: '4M 18S',
      agentTag: 'DELLA',
      matterLine: 'RE: REAR-END COLLISION, I-90',
      quote: '"I was stopped at a red light and this guy just plowed into me. I\'ve been in pain since and don\'t know what to do."',
      actionLine: 'High-value intake. ER visit confirmed, fault admitted at scene.',
    },
    painScenario: {
      timestamp: 'Example call · 11:47pm, Tuesday',
      body: 'A caller was stopped at a red light when an SUV hit her from behind. The other driver left the scene. She is in pain and calling every personal injury firm she can find. Your office closed at six. If nobody answers, she signs with whoever picks up first.',
    },
    sections: [
      {
        heading: 'What does AI intake do for a personal injury firm after hours?',
        html: [
          "<strong>After-hours personal injury intake</strong> answers the calls that would otherwise reach voicemail, and it runs a full intake instead of taking a message. Della answers in the firm's name and works through the questions an intake coordinator would ask: incident date and place, injuries, treatment so far, police involvement, the other party's insurer and any prior attorney.",
          `Each call becomes a dossier in the Call Della dashboard with a summary, urgency score, recording and transcript. Voicemail is where many of these callers end up today. In an ABA Law Practice Division secret-shopper survey, 32% of calls to law firms went straight to voicemail, and 42% of the time the lawyer took three or more days to reply, ${a(SRC.lawyersMutual.url, 'Lawyers Mutual NC reported (2019)')}. An injured caller who reaches voicemail at 11pm usually keeps dialing. Della keeps that caller on the line with your firm.`,
        ],
      },
      {
        heading: 'How does Della qualify a personal injury caller on the first call?',
        html: [
          "Della qualifies a personal injury caller by asking the questions that decide whether the case is worth a callback, in the order a good intake script uses. She starts with the incident type and date, because those start the statute of limitations clock, then the state where it happened. She asks about injuries and treatment: an ambulance ride, an ER visit, a hospital admission, ongoing care.",
          `She asks about fault in the caller's own words, whether police came, and whether a citation was issued. She asks whether the caller has already signed with another firm. She does not tell the caller whether they have a case, because that is legal advice and Della never gives it. Your attorneys make that call in the morning, with the facts already in the file. For the field-by-field version, see ${a('/intake-playbook/what-should-be-on-a-pi-intake-form', 'what belongs on a personal injury intake form')} and ${a('/intake-playbook/how-to-write-pi-intake-script', 'how to write a personal injury intake script')}.`,
        ],
      },
      {
        heading: 'Why do trucking and catastrophic injury calls need a different intake?',
        html: [
          `Trucking and catastrophic injury calls need a different intake because the stakes and the evidence are different from a standard auto claim. Federal rules set minimum liability coverage for a for-hire interstate carrier of general freight at $750,000, and at $5,000,000 for some bulk hazardous materials, under ${a(SRC.fmcsa.url, '49 CFR 387.9')}. A caller who says "truck" might mean a pickup or a tractor-trailer, so Della asks which, and asks for the carrier name or USDOT number on the cab.`,
          `When a caller describes a death, an ICU admission or a life-flight, Della scores the call as urgent and emails an alert to the attorney on call straight away, so the firm can decide that night whether to send a preservation letter. She also logs red flags such as prior counsel or an old incident date, which our guide to ${a('/intake-playbook/intake-red-flags-declining-cases', 'personal injury case evaluation')} covers in detail.`,
        ],
      },
      {
        heading: 'Which personal injury details change by state?',
        html: [
          "The statute of limitations and the fault rule are the two personal injury details that change most by state, and both affect how fast a caller needs a callback. Della records the state and the incident date on every call, so the dossier shows the deadline exposure at a glance, before anyone reads the transcript. Claims against a city, county or state agency can carry notice deadlines far shorter than the general limitations period, so Della asks whether a government vehicle or public property was involved.",
          `Our ${a('/states', 'personal injury rules by state')} reference covers deadlines, comparative and contributory fault, and no-fault insurance. The ${a('/case-types', 'case-type checklists')} list what to capture on ${a('/case-types/auto-accidents', 'auto accident')}, ${a('/case-types/trucking-accidents', 'trucking accident')} and ${a('/case-types/slip-and-fall', 'slip and fall')} calls. To put a number on the calls your firm misses now, try the ${a('/operations/missed-call-cost-calculator', 'missed-call cost calculator')}.`,
        ],
      },
    ],
    handlesHeading: 'Which personal injury calls does Della handle?',
    handles: [
      {
        title: 'The midnight crash call',
        description: "Della separates a minor fender bender from a serious collision in the first few minutes: police report, the other driver's insurer, treatment so far and the caller's account of fault.",
        captures: [
          'Were the police called to the scene, and was a citation issued?',
          'Did you leave in an ambulance, or have you visited an ER or urgent care since?',
          'Do you have the insurance information for the other driver?',
          'Was the other driver in a company vehicle or working for a rideshare app?',
        ],
      },
      {
        title: 'Commercial trucking',
        description: 'Commercial trucking cases carry higher federal insurance minimums and more parties. Della captures the carrier name and USDOT number while the caller still remembers them.',
        captures: [
          'Was the truck a tractor-trailer, a delivery van or a dump truck?',
          'Did you catch the company name on the cab or the USDOT number?',
          'Are there catastrophic injuries, or was a life-flight needed?',
        ],
      },
      {
        title: 'Slip and fall (premises liability)',
        description: 'Premises liability turns on whether the owner knew, or should have known, about the hazard. Della asks for the incident report, photos, witnesses and anything staff said, before the scene is cleaned up.',
        captures: [
          'What exactly caused you to fall: water, uneven concrete, a missing handrail?',
          'Did you or anyone else photograph the hazard before it was cleaned up?',
          'Was an incident report filed with the manager or property owner?',
          'Did anyone say how long the hazard had been there?',
        ],
      },
      {
        title: 'Catastrophic injury and wrongful death',
        description: 'Della recognizes catastrophic-injury signals such as a life-flight, an ICU admission or a death, scores the call as urgent and emails the attorney on call.',
        captures: [
          'Was anyone kept in the hospital overnight or admitted to the ICU?',
          'Has anyone died as a result of the incident?',
          'Has an insurer or investigator for the other side contacted you?',
        ],
      },
    ],
    capturedFields: [
      'Incident type, date, time and place',
      'State and statute of limitations exposure',
      'Injury severity (ER visit, hospitalization, ongoing treatment)',
      'Fault narrative and police report number',
      'Other party insurance carrier and contact',
      'Prior or current legal representation',
      'Caller name, callback phone, email and best time',
      "Notes in the caller's own words",
      'Urgency score',
      'Summary of the call',
      'Recommended next step for the firm',
    ],
    faq: [
      {
        question: 'Does Della give callers legal advice about their injury claim?',
        answer: 'No. Della never gives legal advice. She does not tell a caller whether they have a case, what it is worth or what to say to an insurer. She takes the facts, explains that an attorney will review them, and tells the caller the firm will call back. If a caller asks whether Della is a person, she tells them she is an AI intake specialist.',
      },
      {
        question: 'How does Della handle statute of limitations questions?',
        answer: "Della records the incident date and the state on every call, so the dossier shows the deadline exposure. She asks whether a government vehicle or public property was involved, because claims against public bodies can carry much shorter notice deadlines. She flags callers outside your firm's states as referrals. She does not tell the caller how long they have; the attorney does.",
      },
      {
        question: 'How does Della handle rideshare accidents?',
        answer: 'Della asks whether either driver was working for Uber, Lyft or another rideshare app, and whether a passenger was in the car or a ride had been accepted. Rideshare coverage can depend on what the driver was doing at the moment of the crash, so those answers go straight into the dossier for the attorney to assess in the morning.',
      },
      {
        question: 'Can Della tell a commercial trucking case from a standard auto accident?',
        answer: 'Yes. Della asks whether "truck" means a pickup, a delivery van or a tractor-trailer, and asks for the company name or USDOT number on the cab. A commercial vehicle raises the urgency score. Catastrophic injuries or a death trigger an immediate email alert to the attorney on call, on every plan.',
      },
      {
        question: 'Will Della alert an attorney about a catastrophic injury call overnight?',
        answer: 'Yes. On every plan, Della emails an urgent-call alert to the attorney on call as soon as a caller describes a death, an ICU admission, a life-flight or a serious commercial-vehicle crash. Everything else waits for the 7am morning brief, sorted by urgency, so the attorney on call is not woken for a fender bender.',
      },
      {
        question: 'Can Della send intakes to our case management system?',
        answer: 'Every call lands in the Call Della dashboard as a dossier with a summary, urgency score, recording and transcript. The Group plan adds a CRM webhook that sends each intake to a system you choose. Call Della does not offer native integrations with personal injury case management software today, so check fit on the demo.',
      },
      {
        question: 'Does Della take personal injury calls in Spanish?',
        answer: 'Not today. Della takes personal injury calls in English, and Spanish intake is live on the immigration flow only. Spanish-speaking callers on your personal injury line are still answered and recorded, and their calls appear in the dossier list for your team to return.',
      },
    ],
    socialProof: [],
    industryStats: [CLIO_STAT, LM_STAT],
    related: [
      { href: '/intake-playbook/what-should-be-on-a-pi-intake-form', label: 'What should be on a personal injury intake form?' },
      { href: '/intake-playbook/how-to-write-pi-intake-script', label: 'How to write a personal injury intake script' },
      { href: '/intake-playbook/intake-red-flags-declining-cases', label: 'Personal injury case evaluation: red flags at intake' },
      { href: '/states', label: 'Personal injury rules by state' },
      { href: '/case-types', label: 'Personal injury case types: intake by matter' },
      { href: '/operations/missed-call-cost-calculator', label: 'Missed-call cost calculator for law firms' },
      { href: '/compliance/hipaa-at-intake-phi', label: 'HIPAA at legal intake: handling PHI on the first call' },
    ],
  },
  'criminal-defense': {
    slug: 'criminal-defense',
    name: 'Criminal Defense',
    shortName: 'Criminal',
    hero: {
      eyebrow: 'CRIMINAL DEFENSE AND DUI INTAKE · 24/7',
      headline: '24/7 criminal defense answering service, with the full intake.',
      answer: `A <strong>24/7 criminal defense answering service</strong> answers a defense firm's phone around the clock, including the arrest calls that come in at 2am. Call Della goes further than a message service: Della takes the full intake, capturing the charges, custody status, holding facility, bond and next court date, and emails the attorney on call when a hearing is close. ${CLIO_LINE}`,
      statLine: 'Arrest calls answered · Hearings flagged · Dossier by 7am',
      ctaPrimary: 'Book a demo',
    },
    heroDossier: {
      intakeId: 'SAMPLE INT-08832',
      timestamp: '03 MAY 2026 · 02:13 CDT',
      callerName: 'Sample caller',
      duration: '6M 02S',
      agentTag: 'DELLA',
      matterLine: 'RE: DUI ARREST · COUNTY JAIL HOLD',
      quote: '"They picked him up at a checkpoint. He\'s never been arrested before. They said he blew over and they\'re holding him. I don\'t know what to do."',
      actionLine: 'Bond hearing within 24 hours. Spouse on the call. Defendant in custody at county facility.',
    },
    painScenario: {
      timestamp: 'Example call · 2:13am, Saturday',
      body: "A caller's husband has just phoned from the county jail after a DUI arrest, his first. She is panicking and calling every defense firm in the city. If your line goes to voicemail, she pays someone else's retainer before Monday. The ad that brought her to you did its job. Voicemail gave the case away.",
    },
    sections: [
      {
        heading: 'What should a criminal defense answering service capture on an arrest call?',
        html: [
          "A <strong>criminal defense answering service</strong> should capture who is in custody, where they are held, what they are charged with and when they next see a judge. Those four facts decide how fast the firm moves. Most arrest calls come from a spouse, parent or friend rather than the defendant, so Della records the caller's relationship and the best number to reach them.",
          "She asks whether the charge is a DUI and, if so, whether there was a breath or blood test. She asks about bond: the amount, any conditions, and whether a bond hearing has been set. She asks whether a public defender has been appointed or another firm contacted. A message service writes down a name and a number. Della files a dossier that lets the attorney call back already knowing the case, which matters when the family is calling other firms too.",
        ],
      },
      {
        heading: 'How is AI intake different from a criminal lawyer answering service?',
        html: [
          'AI intake runs the intake itself, while a traditional <strong>criminal lawyer answering service</strong> usually takes a message and passes it on. The difference shows up in the morning. With a message service, an attorney gets a name, a number and a line such as "husband arrested, call back". With Della, the attorney gets the charges, the facility, the bond status, the court date, a recording and a transcript, sorted by urgency.',
          `Both options answer the phone. The question is how much of the intake is done before an attorney picks up. For a defense firm, that decides whether the callback is the first real conversation about the case or a second round of the same questions. The table below sets out the main differences. Our comparison of ${a('/operations/after-hours-intake-comparison', 'after-hours intake options')} covers voicemail, message services, in-house staff and AI intake in more detail.`,
        ],
        table: {
          caption: 'Message-taking answering service compared with Della for criminal defense calls',
          head: ['', 'Message-taking service', 'Della'],
          rows: [
            ['What the attorney receives', 'Name, number and a short message', 'Dossier: charges, custody, facility, bond, court date and summary'],
            ['Recording and transcript', 'Varies by provider', 'Every call'],
            ['Urgent calls', "Depends on the service's escalation rules", 'Emailed to the attorney on call straight away'],
            ['Legal questions from callers', 'Should be deferred', 'Always deferred to the attorney'],
            ['AI disclosure', 'Not applicable', 'Never claims to be human; says she is an AI if asked'],
          ],
        },
      },
      {
        heading: 'What will Della never say to a criminal defense caller?',
        html: [
          'Della will never give a criminal defense caller legal advice, never promise representation and never claim to be human. A family member at 2am often asks what the defendant should say to police, whether to post bond or whether the charge will stick. Della answers each of those the same way: the attorney will advise on that when they call back. She does not imply the firm has taken the case, because an intake call is not an engagement.',
          `If a caller asks whether she is a real person, she tells them she is an AI intake specialist working for the firm. If a caller is in danger, Della tells them to hang up and call 911. These rules track the duties set out in ${a('/compliance/aba-formal-opinion-512-explained', 'ABA Formal Opinion 512')}, which our ${a('/compliance', 'AI legal intake compliance guide')} explains alongside privilege and recording consent. For the fields to add to your own intake, see the ${a('/intake-playbook/law-firm-client-intake-form', 'law firm client intake form')}.`,
        ],
      },
    ],
    handlesHeading: 'Which arrest and court calls does Della handle?',
    handles: [
      {
        title: 'Active custody: the family call',
        description: 'A spouse, parent or friend calling for someone just arrested. Della captures the urgent details before the family member starts dialing other firms.',
        captures: [
          'Defendant name, holding facility and charges',
          'Breath or blood test status (DUI cases)',
          'Bond amount and hearing time',
          'Any prior record the caller knows of',
        ],
      },
      {
        title: 'Released on bond',
        description: 'The defendant or family calling after release. A standard intake: facts, charges, court date and current representation.',
        captures: [
          'Charges and arraignment date',
          'Bond conditions (no-contact, no-alcohol, GPS)',
          'Whether a public defender has been appointed',
          'Caller relationship and callback details',
        ],
      },
      {
        title: 'Pre-trial',
        description: 'A caller with an upcoming court date who needs an attorney, often switching from a public defender or after another lawyer has withdrawn.',
        captures: [
          'County and court location',
          'Charges and the date of the next hearing',
          'Whether they are switching from a public defender',
          'Any prior representation in this matter',
        ],
      },
      {
        title: 'The defendant calling directly',
        description: 'When the defendant calls, from a facility phone or after release, the call may be short. Della asks for the essentials first.',
        captures: [
          'Full name and holding facility',
          'Charges',
          'A contact person on the outside',
          'Anything urgent: a hearing, a medical need, child care',
        ],
      },
    ],
    capturedFields: [
      'Defendant: full name, date of birth, holding facility, charges',
      'DUI details: breath or blood test, field sobriety test',
      'Prior record the caller knows of',
      'Bond: amount, conditions, hearing time',
      'Caller: relationship, callback phone, callback email, preferred time',
      'County and court location',
      'Current representation (private, public defender, none)',
      "Notes in the caller's own words",
      'Urgency score, with hearings within 24 hours flagged',
      'Summary of the call',
      'Recommended next step for the firm',
    ],
    compliance: {
      eyebrow: 'COMPLIANCE',
      heading: 'What rules does Della follow on a criminal defense call?',
      bullets: [
        'No legal advice. Della defers every legal question to the attorney.',
        "No impersonation. Della answers in your firm's name, never claims to be human, and tells any caller who asks that she is an AI.",
        RECORDING_BULLET,
        `Confidential by default. Recordings and transcripts are encrypted in transit and at rest, belong to your firm, and are kept for the retention period you set. See ${a('/security', 'security and data handling')}.`,
        'No solicitation language. Della never implies that representation has begun.',
      ],
    },
    faq: [
      {
        question: 'Will Della tell my client what to say to the police?',
        answer: 'No. Della never gives legal advice. When a caller asks what the defendant should say, whether to post bond or how a charge usually goes, she says the attorney will advise on that when they call back. She notes the question in the dossier, so the attorney knows what the family is worried about before the callback.',
      },
      {
        question: 'Do callers know they are talking to an AI?',
        answer: "Della answers in your firm's name and introduces herself as Della, the firm's intake specialist. She never claims to be human. If a caller asks whether she is a person or an AI, she tells them she is an AI. The recording and transcript of every call show exactly what was said, so your firm can check.",
      },
      {
        question: 'How does recording disclosure work in all-party consent states?',
        answer: RECORDING_FAQ,
      },
      {
        question: 'What happens when a hearing is within 24 hours?',
        answer: 'Della asks for the court and the date of the next hearing on every call. A bond hearing or arraignment within 24 hours raises the urgency score, and Della emails an urgent-call alert to the attorney on call straight away. Calls without a near deadline go into the 7am morning brief, sorted by urgency.',
      },
      {
        question: 'How does Della know our local jails and courts?',
        answer: 'You give us your service area, facilities and courts during setup. Della confirms the spelling of each facility name with the caller, records the county and court, and flags callers outside your area as referrals rather than new intakes, so your morning list holds matters your firm can take.',
      },
      {
        question: 'What if the caller is intoxicated or in danger?',
        answer: 'If anyone is in immediate danger, Della tells the caller to hang up and call 911; safety comes before intake. If the caller sounds intoxicated, she still captures what she can, keeps her questions short and flags the call for attorney review. She does not refuse an intake because of how a caller sounds.',
      },
      {
        question: 'Does Della take criminal defense calls in Spanish?',
        answer: 'Not today. Della takes criminal defense calls in English, and Spanish intake is live on the immigration flow only. A Spanish-speaking caller on your criminal line is still answered and recorded, and the call appears in your dossier list for your team to return.',
      },
    ],
    socialProof: [],
    industryStats: [CLIO_STAT, LM_STAT],
    related: [
      { href: '/compliance', label: 'AI legal intake compliance guide' },
      { href: '/compliance/call-recording-consent-by-state', label: 'Call recording consent by state' },
      { href: '/compliance/aba-formal-opinion-512-explained', label: 'ABA Formal Opinion 512 explained for intake' },
      { href: '/compliance/attorney-client-privilege-ai-intake', label: 'Does AI intake protect attorney-client privilege?' },
      { href: '/intake-playbook/law-firm-client-intake-form', label: 'Law firm client intake form: PI, criminal and immigration' },
      { href: '/operations/after-hours-intake-comparison', label: 'After-hours intake options compared' },
    ],
  },
  immigration: {
    slug: 'immigration',
    name: 'Immigration',
    shortName: 'Immigration',
    hero: {
      eyebrow: 'IMMIGRATION INTAKE · ENGLISH AND SPANISH',
      headline: 'Immigration attorney answering service, in English and Spanish.',
      answer: `An <strong>immigration attorney answering service</strong> answers an immigration firm's phone when the office is closed. Call Della answers in English or Spanish and takes the intake itself: Della captures detention details, A-numbers, court dates and filing deadlines, and files a dossier before 7am. Deadlines drive this practice. An asylum application generally must be filed within one year of the applicant's last arrival in the United States, under ${a(SRC.asylum.url, '8 CFR 208.4')}.`,
      statLine: 'English and Spanish · Detention calls flagged · Dossier by 7am',
      ctaPrimary: 'Book a demo',
    },
    heroDossier: {
      intakeId: 'SAMPLE INT-12047',
      timestamp: '03 MAY 2026 · 23:47 CDT',
      callerName: 'Sample caller',
      duration: '5M 41S',
      agentTag: 'DELLA',
      matterLine: 'RE: ICE DETENTION · FACILITY TO CONFIRM',
      quote: '"Mi hermano fue detenido esta mañana en el trabajo. Está en un centro de detención. No sé qué hacer."',
      actionLine: 'Spanish-language intake. A-number not known. Family in the US on the call.',
      languageTag: 'ES · SPANISH',
    },
    painScenario: {
      timestamp: 'Example call · 11:47pm, Wednesday',
      body: "A caller's brother was picked up by ICE at work this morning and taken to a detention center two states away. She speaks Spanish and does not know what to do. Your office closed four hours ago. The next firm she calls might answer.",
    },
    featureBlock: {
      eyebrow: 'SPANISH INTAKE',
      heading: 'Spanish intake, not live translation.',
      body: "Della's Spanish is a separate voice and intake flow built on Retell's Spanish models, not a translation layer over an English agent. She detects the caller's language on the greeting, runs the intake in Spanish, and the recording and transcript stay in the language the caller used.",
    },
    sections: [
      {
        heading: 'Why does an immigration firm need an answering service in Spanish?',
        html: [
          "An <strong>immigration law firm answering service</strong> needs Spanish because callers in a family emergency speak the language they are most comfortable in, and a caller who is not understood hangs up. Della answers in English or Spanish. She detects the caller's language on the greeting and runs the intake in that language, with a Spanish voice and an intake flow written in Spanish rather than translated live.",
          'The recording and transcript stay in the language the caller used, so nothing is lost or paraphrased before the attorney reviews it. Spanish is the one second language Call Della offers today, and it is live on the immigration flow only. Calls in other languages are still answered and recorded, and they reach your team in the dossier list so you can arrange an interpreter for the callback.',
        ],
      },
      {
        heading: 'What should an immigration intake capture on a detention call?',
        html: [
          "An immigration intake on a detention call should capture who was detained, where, when, and what the family knows about the person's status and history. Della asks for the detained person's full name, country of birth and A-number if the caller has it. She asks where and when the person was picked up and which facility they were taken to, if known.",
          'She asks about family in the United States and their status, prior immigration history, and any past removal orders or court dates. Della cannot search the ICE detainee locator herself; she records what the caller knows so your team can confirm it through official channels. If the A-number is missing, the dossier says so. Detention calls are scored as urgent and emailed to the attorney on call, so the firm can decide that night what happens next.',
        ],
      },
      {
        heading: 'How does AI intake help immigration lawyers with deadlines?',
        html: [
          `<strong>AI for immigration lawyers</strong> is most useful at the first call, when a deadline can be caught before it is buried in a voicemail queue. Many immigration matters turn on dates: the one-year asylum filing deadline in ${a(SRC.asylum.url, '8 CFR 208.4')}, a hearing date on a Notice to Appear, a visa or status expiry, a response window on a government notice.`,
          `Della asks the caller what document they received, what date it shows and what it asks them to do, and records the wording if the caller can read it out. The dossier puts the deadline at the top, with the urgency score set by how close it is. Della does not interpret the document or tell the caller what to file, because that is legal advice. For the full field list, see our ${a('/intake-playbook/law-firm-client-intake-form', 'law firm client intake form')}, and for the rules Della works under, the ${a('/compliance', 'AI legal intake compliance guide')}.`,
        ],
      },
    ],
    handlesHeading: 'Which immigration calls does Della handle?',
    handles: [
      {
        title: 'Detention calls',
        description: "ICE has picked up a family member. The caller is frightened, often Spanish-speaking, and may not know where the person is held. Della captures what the family knows, in the caller's language.",
        captures: [
          'Detained person’s name and A-number (if known)',
          'Country of birth',
          'Where and when they were picked up, and the facility if known',
          'Family in the US (citizens, LPRs, others)',
        ],
      },
      {
        title: 'Deadline calls',
        description: 'The caller has just realized a visa expires next week, an asylum filing window is closing, or a Notice to Appear arrived in the mail. The date matters more than anything else on the call.',
        captures: [
          'Deadline date and document type (NTA, visa expiry, asylum filing window)',
          'Current immigration status',
          'Prior immigration history',
          'Caller relationship and callback details',
        ],
      },
      {
        title: 'Removal proceedings',
        description: 'The caller has a Notice to Appear or a date in immigration court. Della captures the court details and current representation before the call goes into the morning queue.',
        captures: [
          'Court location and hearing date',
          'Charges listed on the NTA',
          'Current representation (private attorney, pro bono, none)',
          'Family or community ties to the US',
        ],
      },
      {
        title: 'General inquiry or consultation',
        description: "Status, family-petition and work-authorization questions. Della captures the situation, scores the urgency and routes it to the attorney's morning queue without making any promise of representation.",
        captures: [
          'Current immigration status',
          'The specific question or situation',
          'Family in the US and their statuses',
          'Caller language preference',
        ],
      },
    ],
    capturedFields: [
      'Person: full name, A-number (if known), country of birth',
      'Status: LPR, undocumented, visa holder, asylum applicant, other',
      'Detention: facility and date of pickup (if applicable)',
      'Family in the US: citizens, LPRs, others',
      'Prior immigration history',
      'Deadlines: NTA hearing date, visa expiry, asylum filing window',
      'Caller: relationship, callback phone, callback email, preferred time, language',
      "Recording and transcript in the caller's language",
      'Urgency score',
      'Summary of the call',
      'Recommended next step for the firm',
    ],
    compliance: {
      eyebrow: 'COMPLIANCE',
      heading: 'What rules does Della follow on an immigration call?',
      bullets: [
        'No legal advice. Della never interprets a notice, predicts an outcome or tells a caller what to file.',
        "No impersonation. Della answers in your firm's name, never claims to be human, and tells any caller who asks that she is an AI.",
        RECORDING_BULLET,
        `Confidential by default. Recordings and transcripts are encrypted in transit and at rest, belong to your firm, and are kept for the retention period you set. See ${a('/compliance/attorney-client-privilege-ai-intake', 'attorney-client privilege and AI intake')}.`,
        'No promises. Della never implies that representation has begun or that a case will succeed.',
      ],
    },
    faq: [
      {
        question: "Is Della's Spanish fluent or auto-translated?",
        answer: "Della's Spanish is a Spanish voice with an intake flow written in Spanish, not live translation from English. She detects the caller's language on the greeting and runs the whole intake in Spanish. The recording and transcript stay in Spanish, so your attorneys can review exactly what the caller said.",
      },
      {
        question: 'What about callers who speak other languages?',
        answer: "Della takes immigration calls in English and Spanish only. Calls in other languages, including Indigenous languages such as Mam or K'iche', are still answered and recorded, and they reach your team in the dossier list so you can arrange an interpreter for the callback. Della does not attempt an intake in a language she does not speak.",
      },
      {
        question: 'Can Della look up a detainee in the ICE locator?',
        answer: "No. Della cannot search the ICE Online Detainee Locator System or any government database. She records what the caller knows: the person's name, country of birth, A-number if known, where they were picked up and the facility if known. Your team confirms the details through official channels when it reviews the dossier.",
      },
      {
        question: "What if the caller doesn't know the A-number?",
        answer: 'Della captures everything else: full name, country of birth, where and when the person was detained, and family contacts. The dossier marks the A-number as missing so your team knows to find it. A missing A-number never stops the intake, and Della does not press a caller for details they do not have.',
      },
      {
        question: 'What about callers who are afraid to give their information?',
        answer: 'Della explains that she is taking details for the attorney and that the firm keeps the call confidential. If a caller is still hesitant, she takes what they are willing to share and notes what is missing. She asks only what the intake needs, and she never claims to be a person; if asked, she says she is an AI.',
      },
      {
        question: 'How does Della protect confidentiality on immigration calls?',
        answer: 'Recordings and transcripts are encrypted in transit and at rest, belong to your firm and are kept for the retention period you set. Call Della does not use your calls to train models. Our guide to attorney-client privilege and AI intake explains how confidentiality applies to prospective clients under ABA Model Rule 1.18.',
      },
      {
        question: 'What if a caller is in immediate danger?',
        answer: 'If anyone is in immediate danger, Della tells the caller to hang up and call 911. Safety comes before intake. For a detention that has already happened, she completes the intake, scores it as urgent and emails an alert to the attorney on call, so the firm can decide that night what to do next.',
      },
    ],
    socialProof: [],
    industryStats: [{ stat: 'An asylum application generally must be filed within one year of the last arrival in the United States.', ...SRC.asylum }, CLIO_STAT],
    related: [
      { href: '/compliance', label: 'AI legal intake compliance guide' },
      { href: '/compliance/attorney-client-privilege-ai-intake', label: 'Does AI intake protect attorney-client privilege?' },
      { href: '/compliance/call-recording-consent-by-state', label: 'Call recording consent by state' },
      { href: '/intake-playbook/law-firm-client-intake-form', label: 'Law firm client intake form: PI, criminal and immigration' },
      { href: '/operations/after-hours-intake-comparison', label: 'After-hours intake options compared' },
    ],
  },
};

export const verticalList: Vertical[] = [
  verticals['personal-injury'],
  verticals['criminal-defense'],
  verticals['immigration'],
];

export const getVertical = (slug: string): Vertical | undefined => {
  if (slug === 'personal-injury' || slug === 'criminal-defense' || slug === 'immigration') {
    return verticals[slug];
  }
  return undefined;
};
