export const caseData = [
  {
    name: "Auto Accidents",
    slug: "auto-accidents",
    intro: "Auto accidents represent the highest volume of inbound calls for most personal injury firms. Because the margins rely on rapid triage and securing viable policies quickly, the intake flow must be incredibly precise—separating standard soft-tissue fender benders from high-limit catastrophic incidents in the first three minutes.",
    solContext: "Statute of limitations for standard auto accidents generally tracks the state's baseline PI limits (typically 2 to 3 years), but can accelerate dramatically to 6 months if the at-fault vehicle is a government entity (like a city bus or municipal maintenance vehicle).",
    insuranceContext: "Securing the at-fault party's insurance information and establishing whether a police report was filed are paramount. In no-fault states, establishing the caller's own PIP coverage and treatment timeline is equally critical.",
    protocol: [
      "Were the police called to the scene, and was a citation issued?",
      "Did you leave in an ambulance, or have you visited an ER/Urgent Care since?",
      "Do you have the insurance information for the other driver?",
      "Was the other driver operating a company vehicle or rideshare app?"
    ],
    goodVsBad: {
      good: "Captures the exact police report number, confirms the at-fault driver's insurance carrier, and verifies the caller's immediate medical treatment timeline to prevent gap-in-treatment defenses.",
      bad: "Writes down 'rear-ended at red light, neck hurts' without verifying if the at-fault driver fled the scene or possessed valid insurance."
    },
    faqs: [
      { q: "How does Della handle rideshare (Uber/Lyft) accidents?", a: "Della specifically asks if the at-fault driver was an Uber or Lyft. This is critical because rideshare commercial policies fluctuate between $50k and $1M depending on whether the driver was en route to a passenger." },
      { q: "Can Della collect photos of the crash?", a: "While Della handles the voice triage, she can instantly text the caller a secure link to upload photos of the vehicle damage and insurance cards directly to your CRM." }
    ]
  },
  {
    name: "Commercial Trucking Accidents",
    slug: "trucking-accidents",
    intro: "Commercial trucking (18-wheeler) cases are the crown jewels of PI intake due to FMCSA regulations and massive commercial policy limits (often $1M to $5M minimum). However, trucking defense teams deploy rapid-response investigators to the scene within hours. Your intake must be equally aggressive.",
    solContext: "While the baseline SOL remains standard, spoliation of evidence is the real ticking clock. Trucking companies will routinely destroy dashcam footage, ECM (black box) data, and driver logs after 30 to 90 days unless a spoliation letter is immediately sent.",
    insuranceContext: "These cases involve multiple layers of liability: the truck driver, the motor carrier, the freight broker, and potentially the trailer owner. The intake must capture identifying DOT numbers and company names painted on the cab.",
    protocol: [
      "Was the truck a commercial 18-wheeler, a delivery van, or a dump truck?",
      "Did you catch the name of the company on the side of the truck or the USDOT number?",
      "Was a commercial vehicle inspection unit or state trooper dispatched to the scene?",
      "Are there catastrophic injuries, or was a life-flight required?"
    ],
    goodVsBad: {
      good: "Identifies the specific trucking carrier and confirms state trooper presence, triggering a massive urgency alert to the firm's partners so a spoliation letter can be drafted by dawn.",
      bad: "Records it as a standard 'car crash' without noting the commercial nature of the at-fault vehicle, causing the firm to miss the critical window for securing black-box data."
    },
    faqs: [
      { q: "Does Della know the difference between a standard truck and a commercial motor vehicle?", a: "Yes. Della's intelligence allows her to probe whether a 'truck' means a Ford F-150 or a Freightliner 18-wheeler, completely altering the intake urgency." },
      { q: "Will Della wake up a partner for a commercial trucking incident?", a: "On the Practice and Group tiers, Della can be configured to immediately SMS the on-call partner if a caller describes a catastrophic commercial trucking incident." }
    ]
  },
  {
    name: "Slip and Fall (Premises Liability)",
    slug: "slip-and-fall",
    intro: "Slip and fall cases are notoriously difficult to win because liability hinges entirely on the property owner's 'actual or constructive notice' of the hazard. An intake script for premises liability must aggressively lock down the physical evidence of negligence.",
    solContext: "Similar to auto, standard PI statutes apply. However, if the fall occurred on government property (like a post office or a city sidewalk), strict Notice of Claim deadlines apply, often shrinking the window to 60-90 days.",
    insuranceContext: "Identifying the exact corporate entity or property owner is critical to triggering commercial general liability (CGL) policies.",
    protocol: [
      "Exactly what caused you to fall? (e.g., water, uneven concrete, missing handrail)",
      "Did you or anyone else take photos of the hazard before it was cleaned up?",
      "Was an official incident report filed with the store manager or property owner?",
      "Did the manager say anything indicating they knew about the hazard beforehand?"
    ],
    goodVsBad: {
      good: "Confirms that an incident report was filed and asks if the caller secured contact information for any independent witnesses who saw the spill before the fall.",
      bad: "Fails to ask what specifically caused the fall, leaving the firm blind to whether the hazard was open and obvious, or if the store had prior notice."
    },
    faqs: [
      { q: "Can Della distinguish between slip and falls at commercial stores vs residential homes?", a: "Yes. Della asks exactly where the incident occurred, allowing your attorneys to assess whether a massive corporate CGL policy is in play or a standard homeowner's policy." },
      { q: "How does Della document 'constructive notice'?", a: "Della is trained to ask circumstantial questions, such as 'Were there wet floor signs?' or 'Did anyone mention the spill had been there a while?', capturing vital early evidence of notice." }
    ]
  }
];
