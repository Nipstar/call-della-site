export type VerticalSlug = 'personal-injury' | 'criminal-defense' | 'immigration';

export type Vertical = {
  slug: VerticalSlug;
  name: string;
  shortName: string;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    statLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  demo: {
    phoneDisplay: string;
    phoneE164: string;
    label: string;
  };
  painScenario: {
    timestamp: string;
    body: string;
  };
  handles: Array<{
    title: string;
    description: string;
    captures: string[];
  }>;
  capturedFields: string[];
  faq: Array<{ question: string; answer: string }>;
  socialProof: Array<{ firmName: string; quote: string; attribution: string }>;
  industryStats: Array<{ stat: string; source: string }>;
  meta: {
    title: string;
    description: string;
    ogImage: string;
    keywords: string[];
  };
  compliance?: {
    eyebrow?: string;
    heading: string;
    bullets: string[];
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

export const verticals: Record<VerticalSlug, Vertical> = {
  'personal-injury': {
    slug: 'personal-injury',
    name: 'Personal Injury',
    shortName: 'PI',
    hero: {
      eyebrow: 'PERSONAL INJURY INTAKE · AFTER-HOURS COVERAGE',
      headline: 'Della takes the<br/>overnight calls.<br/><span class="italic" style="color:var(--ink-soft)">Your team takes<br/>the morning.</span>',
      sub: 'An after-hours intake specialist for personal injury law firms. Every overnight caller — auto, trucking, premises, malpractice — on your desk by dawn.',
      statLine: 'PI firms spend $300K/year on leads. 30–50% of after-hours calls go to voicemail.',
      ctaPrimary: 'Try Della-PI — call now',
      ctaSecondary: 'Book a discovery call',
    },
    demo: {
      phoneDisplay: '(650) 536-0172',
      phoneE164: '+16505360172',
      label: 'Try Della-PI — call now',
    },
    heroDossier: {
      intakeId: 'INT-04421',
      timestamp: '04 MAY 2026 · 23:42 CDT',
      callerName: 'Maria Gonzalez',
      duration: '4M 18S',
      agentTag: 'DELLA',
      matterLine: 'RE: REAR-END COLLISION, I-90',
      quote: '"I was stopped at a red light and this guy just ploughed into me. I\'ve been in pain since and don\'t know what to do."',
      actionLine: 'High-value intake. ER visit confirmed, fault admitted at scene.',
    },
    painScenario: {
      timestamp: '11:47pm, Tuesday',
      body: "Maria was stopped at a red light when an SUV rear-ended her at full speed. The other driver fled. She's in pain, scared, and calling every PI firm she can find. Your office closed at six. By morning she'll have signed somewhere else.",
    },
    handles: [
      {
        title: 'The midnight crash call',
        description: 'Auto accidents are the highest volume of inbound PI calls. Della separates standard fender benders from high-limit catastrophic incidents in the first three minutes — police report, opposing carrier, treatment timeline, fault narrative.',
        captures: [
          'Were the police called to the scene, and was a citation issued?',
          'Did you leave in an ambulance, or have you visited an ER/Urgent Care since?',
          'Do you have the insurance information for the other driver?',
          'Was the other driver operating a company vehicle or rideshare app?',
        ],
      },
      {
        title: 'Commercial trucking',
        description: '18-wheeler cases are the crown jewels of PI intake — FMCSA regulations and $1M–$5M policy limits. Della captures DOT numbers and trucking carrier identifiers in the window before defence investigators destroy ECM data.',
        captures: [
          'Was the truck a commercial 18-wheeler, a delivery van, or a dump truck?',
          'Did you catch the company name on the cab or the USDOT number?',
          'Was a commercial vehicle inspection unit or state trooper dispatched?',
          'Are there catastrophic injuries, or was a life-flight required?',
        ],
      },
      {
        title: 'Slip and fall (premises liability)',
        description: 'Liability hinges on actual or constructive notice. Della aggressively locks down physical evidence — incident report number, prior-knowledge statements, witness contact — before the property owner cleans the hazard.',
        captures: [
          'Exactly what caused you to fall? (water, uneven concrete, missing handrail)',
          'Did you or anyone else photograph the hazard before it was cleaned up?',
          'Was an official incident report filed with the manager or property owner?',
          'Did the manager say anything indicating prior knowledge of the hazard?',
        ],
      },
      {
        title: 'Catastrophic injury & wrongful death',
        description: 'The calls that change a firm\'s year. Della recognises catastrophic-injury signals — life-flight, ICU, fatality — and routes urgency-5 alerts to the on-call partner so spoliation letters go out by dawn.',
        captures: [
          'Was anyone hospitalised overnight or admitted to ICU?',
          'Has anyone passed away as a result of the incident?',
          'Has anyone from the other side already contacted you (insurer, investigator)?',
          'Do you have copies of the police report or any official documents?',
        ],
      },
    ],
    capturedFields: [
      'Incident type, date, time, and venue',
      'Jurisdiction and statute-of-limitations exposure',
      'Injury severity (ER visit, hospitalisation, ongoing treatment)',
      'Fault narrative and police report number',
      'Opposing party insurance carrier and contact',
      'Prior or current legal representation',
      'Caller name, callback phone, callback email',
      'Best callback window',
      'Free-text notes in the caller\'s own words',
      'Urgency classification (1–5)',
      'AI-generated dossier summary',
      'Recommended next action for the firm',
    ],
    faq: [
      {
        question: 'What about jurisdictional and statute-of-limitations issues?',
        answer: 'Della is configured for the jurisdictions your firm practises in. She flags callers outside your jurisdiction as referrals rather than intakes, and surfaces statute-of-limitations risk in the dossier — including accelerated windows for government-vehicle incidents (often six months) and notice-of-claim deadlines for municipal cases.',
      },
      {
        question: 'How does Della handle rideshare (Uber/Lyft) accidents?',
        answer: 'Della specifically asks if the at-fault driver was Uber or Lyft. Critical because rideshare commercial policies fluctuate between $50k and $1M depending on whether the driver was en route to a passenger.',
      },
      {
        question: 'Can Della identify a commercial trucking case from a standard auto?',
        answer: 'Yes. Della probes whether a "truck" means a Ford F-150 or a Freightliner 18-wheeler. Commercial trucking triggers a different urgency tier and, on the Practice and Group plans, an immediate SMS to the on-call partner so a spoliation letter can be drafted by dawn.',
      },
      {
        question: 'How does Della handle "constructive notice" in premises liability?',
        answer: 'She asks circumstantial questions — "Were there wet floor signs?", "Did anyone mention how long the spill had been there?" — capturing vital early evidence of notice before the property owner can sanitise the scene.',
      },
      {
        question: 'Does Della integrate with PI case management systems?',
        answer: 'Yes. Della pushes dossiers via webhook into Filevine, CASEpeer, Lead Docket, Litify, MyCase, or any standard CRM. Native integrations on the roadmap; structured JSON to anything you point her at today.',
      },
      {
        question: 'How does Della handle bilingual (Spanish) PI callers?',
        answer: 'Della can be configured to detect Spanish and seamlessly transition the intake — Texas, California, Florida, and the Southwest see this as a hard requirement, not a nice-to-have.',
      },
      {
        question: 'Will Della wake up a partner for a catastrophic injury call?',
        answer: 'On the Practice and Group tiers, Della can SMS the on-call partner immediately when the caller describes a fatality, ICU admission, life-flight, or catastrophic commercial-vehicle incident.',
      },
    ],
    socialProof: [],
    industryStats: [
      {
        stat: '30–50% of inbound PI calls reach voicemail outside business hours.',
        source: 'ABA Tech Report · Law.com industry surveys',
      },
      {
        stat: 'Firms answering within 30 seconds sign 4×–8× more cases than firms answering after five minutes.',
        source: 'Law.com industry surveys',
      },
      {
        stat: '$250K+ average annual revenue lost per mid-size PI firm to missed overnight calls.',
        source: 'Internal analysis · 2025',
      },
    ],
    meta: {
      title: 'After-Hours Personal Injury Intake | Della',
      description: 'After-hours AI intake for PI law firms. Della answers the midnight crash call, captures fault and SOL details, hands the file to your team by morning.',
      ogImage: '/og-personal-injury.png',
      keywords: [
        'personal injury intake',
        'PI law firm answering service',
        'after hours legal intake',
        'auto accident intake AI',
        'trucking accident intake',
        'premises liability intake',
        'PI firm voice AI',
      ],
    },
  },
  'criminal-defense': {
    slug: 'criminal-defense',
    name: 'Criminal Defense',
    shortName: 'Criminal',
    hero: {
      eyebrow: 'CRIMINAL DEFENSE & DUI INTAKE',
      headline: 'Never miss<br/>another arrest call.',
      sub: "It's 2:13am. A panicked spouse is calling every defense firm in the city after their partner just got booked for DUI. The first firm to pick up wins the retainer. Della picks up.",
      statLine: 'First call wins. Retainers run $2,500 to $50,000+. Voicemail loses 70%.',
      ctaPrimary: 'Try Della-Criminal — call now',
      ctaSecondary: 'Book a discovery call',
    },
    demo: {
      phoneDisplay: 'TBD',
      phoneE164: '+10000000000',
      label: 'Try Della-Criminal — call now',
    },
    heroDossier: {
      intakeId: 'INT-08832',
      timestamp: '03 MAY 2026 · 02:13 CDT',
      callerName: 'Sarah Mitchell',
      duration: '6M 02S',
      agentTag: 'DELLA',
      matterLine: 'RE: DUI ARREST · COUNTY JAIL HOLD',
      quote: '"They picked him up at a checkpoint. He\'s never been arrested before. They said he blew over and they\'re holding him. I don\'t know what to do."',
      actionLine: 'Bond hearing within 24 hours. Spouse on the call. Defendant in custody at county facility.',
    },
    painScenario: {
      timestamp: '2:13am, Saturday',
      body: "Sarah's husband just called from the county jail — DUI, his first ever arrest. She's panicking, calling every defense firm in the city. By the time you check voicemail Monday morning, she's already paid someone else's retainer. Your Google Ads budget paid for that lead. Voicemail gave it away.",
    },
    handles: [
      {
        title: 'Active custody — the family call',
        description: 'Spouse, parent, or friend calling on behalf of someone just arrested. Della captures the urgent details before the family member starts dialling other firms.',
        captures: [
          'Defendant name, holding facility, charges',
          'Breathalyzer status (DUI cases)',
          'Bond amount and hearing time',
          'Prior record indication',
        ],
      },
      {
        title: 'Released on bond',
        description: 'Defendant or family calling after release. Standard intake — facts, charges, court date, current representation status.',
        captures: [
          'Charges and arraignment date',
          'Bond conditions (no-contact, no-alcohol, GPS)',
          'Current public-defender status',
          'Caller relationship and callback details',
        ],
      },
      {
        title: 'Pre-trial',
        description: 'Caller has an upcoming court date and needs an attorney — often switching from a public defender or after a private attorney has dropped the case.',
        captures: [
          'Jurisdiction and court location',
          'Charges and date of the next hearing',
          'Whether they are switching from a public defender',
          'Any prior representation in this matter',
        ],
      },
      {
        title: 'Jail call (defendant direct)',
        description: 'Compressed flow for time-limited collect calls from the facility. Della keeps the conversation tight to capture what matters before the call cuts.',
        captures: [
          'Full name and holding facility',
          'Charges',
          'Callback person on the outside',
          'Anything urgent (hearing, medical, custody)',
        ],
      },
    ],
    capturedFields: [
      'Defendant: full name, DOB, holding facility, charges',
      'DUI specifics: breathalyzer status, field sobriety test status',
      'Prior record indication',
      'Bond: amount, conditions, hearing time',
      'Caller: relationship, callback phone, callback email, preferred time',
      'Jurisdiction and court location',
      'Current representation status (private / public defender / none)',
      'Free-text notes in the caller’s own words',
      'Urgency score (1–5) — hearings within 24h auto-flagged',
      'AI-generated dossier summary',
      'Recommended next action for the firm',
    ],
    compliance: {
      eyebrow: 'COMPLIANCE',
      heading: 'Built for the rules your bar association cares about.',
      bullets: [
        'No legal advice. Della refuses every legal question. Hard rule, prompted in.',
        'Recording disclosure on greeting, configurable per state (CA, FL, PA, IL, MD, MA, MT, NV, NH, WA — all two-party consent states covered).',
        'Privilege-aware: encrypted at rest, access logged, your firm’s retention rules.',
        '7-year retention default for criminal matters, configurable.',
        'No solicitation language. Della never implies representation has begun.',
      ],
    },
    faq: [
      {
        question: 'Will Della tell my client what to say to the police?',
        answer: 'No. She’s prompted hard against any legal advice and defers every legal question to "the attorney will advise on that when they call you back."',
      },
      {
        question: 'What about California two-party consent?',
        answer: 'Recording disclosure is on greeting and configurable per state. CA, FL, PA, IL, MD, MA, MT, NV, NH, and WA two-party consent states are covered out of the box.',
      },
      {
        question: 'Can she handle a call from inside a jail?',
        answer: 'Yes — compressed flow for time-limited collect calls from the facility. Name, charges, callback person on the outside, anything urgent. She gets it captured before the line cuts.',
      },
      {
        question: 'What if the caller is in immediate danger?',
        answer: 'Della redirects them to 911 and ends the intake. Safety routing overrides all other intake logic.',
      },
      {
        question: 'How does she know our local jails and courts?',
        answer: 'You configure your service area during onboarding. Della confirms spelling on every facility name and surfaces hearings within 24 hours as urgency 5 in the dossier.',
      },
      {
        question: 'What if the caller is the defendant and they’re drunk?',
        answer: 'She still captures what she can and flags the call for attorney review. She doesn’t make judgements about caller state, and she doesn’t use intoxication as a reason to refuse intake.',
      },
      {
        question: 'Does she handle Spanish-speaking callers?',
        answer: 'Yes. Spanish detection is available on the criminal flow if you turn it on — common in TX, CA, FL, AZ markets. Native voice, not auto-translation.',
      },
    ],
    socialProof: [],
    industryStats: [
      {
        stat: '~70% of after-hours callers hang up on voicemail.',
        source: 'Marchex / Invoca call analytics studies',
      },
      {
        stat: 'DUI retainers typically range $2,500–$7,500. Serious felonies $10,000–$50,000+.',
        source: 'Industry estimates · firm surveys',
      },
      {
        stat: 'Friday/Saturday 10pm–4am is the peak arrest window in most US jurisdictions.',
        source: 'FBI Uniform Crime Reporting · NHTSA arrest data',
      },
    ],
    meta: {
      title: 'After-Hours Criminal Defense & DUI Intake | Della',
      description: 'After-hours AI intake for criminal defense firms. Della answers the 2am arrest call, captures jail and bond details, flags urgent hearings.',
      ogImage: '/og-criminal-defense.png',
      keywords: [
        'criminal defense intake',
        'DUI intake',
        'after hours arrest call',
        'law firm voice AI',
        'criminal defense answering service',
        'DUI lawyer answering service',
      ],
    },
  },
  'immigration': {
    slug: 'immigration',
    name: 'Immigration',
    shortName: 'Immigration',
    hero: {
      eyebrow: 'IMMIGRATION INTAKE — IN ENGLISH OR SPANISH',
      headline: 'Never miss<br/>another detention call.',
      sub: "ICE doesn't keep office hours. Della answers in English or Spanish, captures the urgent details from a panicked family member, and has the file ready when your immigration team starts work.",
      statLine: '60–70% of US immigration calls come in Spanish. Della handles both, natively.',
      ctaPrimary: 'Try Della-Immigration — call now',
      ctaSecondary: 'Book a discovery call',
    },
    demo: {
      phoneDisplay: 'TBD',
      phoneE164: '+10000000000',
      label: 'Try Della-Immigration — call now',
    },
    heroDossier: {
      intakeId: 'INT-12047',
      timestamp: '03 MAY 2026 · 23:47 CDT',
      callerName: 'Carmen Ruiz',
      duration: '5M 41S',
      agentTag: 'DELLA',
      matterLine: 'RE: ICE DETENTION · NWDC HOLD',
      quote: '"Mi hermano fue detenido esta mañana en el trabajo. Está en un centro de detención. No sé qué hacer."',
      actionLine: 'Spanish-language intake. Detainee A-number pending. Family verification in US confirmed.',
      languageTag: 'ES · NATIVE',
    },
    painScenario: {
      timestamp: '11:47pm, Wednesday',
      body: 'Maria just got a call from her brother — ICE picked him up at work this morning, he\'s at a detention center two states away, and she has no idea what to do. She speaks Spanish. Your office has been closed for four hours. The next firm she calls might pick up.',
    },
    featureBlock: {
      eyebrow: 'BILINGUAL — HERO FEATURE',
      heading: 'Native Spanish. Not auto-translated.',
      body: "Della's Spanish isn't a translation layer bolted onto an English agent. It's a separate native voice flow built on Retell's Spanish models. She detects language on greeting, switches seamlessly, and captures notes in the language the caller used.",
      roadmap: 'Mandarin and Portuguese on the shortlist. If your firm needs an indigenous Latin American language, Della flags the call and routes to a human translator service.',
    },
    handles: [
      {
        title: 'Detention calls',
        description: 'ICE has picked up a family member. The caller is panicked, often Spanish-speaking, and doesn\'t know where the detainee is. Della captures what the family knows, in their language, fast.',
        captures: [
          'Detainee name and A-number (if known)',
          'Country of origin',
          'Detention facility and date of pickup',
          'Family in the US (citizens, LPRs, others)',
        ],
      },
      {
        title: 'Deadline panic',
        description: 'Caller has just realised a visa expires next week, an asylum filing window is closing, or an NTA arrived in the mail. The clock matters more than the conversation length.',
        captures: [
          'Deadline date and document type (NTA, visa expiry, asylum filing window)',
          'Current immigration status',
          'Prior immigration history',
          'Caller relationship and callback details',
        ],
      },
      {
        title: 'Removal proceedings',
        description: 'Caller has an NTA or a court date for immigration court. Della captures court details and current representation status before referring to the morning queue.',
        captures: [
          'Court location and date',
          'Charges on the NTA',
          'Current representation (private attorney, pro bono, none)',
          'Family or community ties to the US',
        ],
      },
      {
        title: 'General inquiry / consultation',
        description: 'Status questions, family-petition questions, work-authorisation questions. Della captures the situation, scopes the urgency, and routes to the attorney\'s morning queue without making representation commitments.',
        captures: [
          'Current immigration status',
          'Specific question or situation',
          'Family in the US and their statuses',
          'Caller language preference',
        ],
      },
    ],
    capturedFields: [
      'Person: full name, A-number (if known), country of origin',
      'Status: LPR / undocumented / visa holder / asylum applicant / other',
      'Detention: facility, date of pickup (if applicable)',
      'Family in US: citizens, LPRs, others',
      'Prior immigration history',
      'Deadline pressure: NTA date, visa expiry, asylum filing window',
      'Caller: relationship, callback phone, callback email, preferred time, language',
      'Free-text notes (in caller\'s language) + English summary',
      'Urgency score (1–5)',
      'AI-generated dossier summary',
      'Recommended next action for the firm',
    ],
    faq: [
      {
        question: 'Is the Spanish actually fluent or auto-translated?',
        answer: 'Native voice, not auto-translation. Built on Retell\'s Spanish models with intake flows written in Spanish, not translated from English.',
      },
      {
        question: 'What about other languages?',
        answer: 'Mandarin and Portuguese are on the shortlist. For indigenous languages (Mam, K\'iche\', etc.), Della flags the call for a human translator service.',
      },
      {
        question: 'Can she access the ICE detainee locator?',
        answer: 'Not directly — she captures what the caller knows and your team verifies through official channels.',
      },
      {
        question: 'What if the caller doesn\'t know the A-number?',
        answer: 'She captures everything else and flags A-number as missing for your team to follow up.',
      },
      {
        question: 'What about people who are afraid to give their information?',
        answer: 'Della explains that she\'s gathering details for the attorney and that the conversation is confidential. If they\'re still hesitant, she captures what they\'re willing to share and flags the rest.',
      },
      {
        question: 'Does she handle attorney-client privilege correctly?',
        answer: 'Yes — recordings and transcripts are encrypted, access is logged, and only authorised firm staff can view records.',
      },
      {
        question: 'What if a caller is in immediate distress?',
        answer: 'Della redirects to 911 for emergencies and to the appropriate detention hotline (if your firm has configured one) for detention emergencies.',
      },
    ],
    socialProof: [],
    industryStats: [
      {
        stat: '60–70% of inbound calls to US immigration firms are in Spanish.',
        source: 'Firm surveys · AILA practice data',
      },
      {
        stat: 'ICE enforcement actions cluster in early morning and after-hours.',
        source: 'AILA practice data · DHS enforcement statistics',
      },
      {
        stat: 'Immigration cases are deadline-driven. A missed filing window often means case loss — not delay.',
        source: 'AILA practitioner guidance',
      },
    ],
    meta: {
      title: 'Bilingual After-Hours Immigration Intake | Della',
      description: 'Bilingual after-hours AI intake for immigration firms. Della captures detention, deadline, and removal details — English or Spanish, native voice.',
      ogImage: '/og-immigration.png',
      keywords: [
        'immigration intake',
        'bilingual immigration receptionist',
        'Spanish immigration intake',
        'ICE detention call',
        'after hours immigration lawyer',
        'immigration answering service',
      ],
    },
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
