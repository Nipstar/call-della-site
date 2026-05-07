export const stateData = [
  {
    name: "Texas",
    slug: "texas",
    intro: "Texas is a high-volume, high-value personal injury market, particularly for commercial trucking and oilfield accidents. With vast distances between major metros like Houston, Dallas, and San Antonio, accidents frequently occur at night or early morning, making after-hours coverage a critical competitive advantage.",
    sol: "2 years for most personal injury claims.",
    comparativeNegligence: "Modified comparative negligence (51% Bar). If a caller is found 51% or more at fault, they recover nothing.",
    noFault: "At-fault state (Texas does not require PIP, though it must be offered).",
    damagesCaps: "Caps generally apply only to medical malpractice and claims against government entities. No caps on standard auto or premises liability.",
    handlingDetail: "For Texas auto cases, Della is configured to confirm optional PIP coverage status, capture the police report number for the Texas DPS Crash Report system, and carefully document the caller's narrative without inadvertently leading them into an admission of fault that triggers the 51% bar.",
    stateBar: "The State Bar of Texas has not issued a formal opinion restricting AI in intake. However, firms must comply with Rule 1.05 regarding confidential information. Della operates under a strict zero-retention model to maintain privilege.",
    faqs: [
      { q: "Does Della handle bilingual (Spanish) callers in Texas?", a: "Yes, Della can be configured to detect Spanish and seamlessly transition the intake process for callers in South Texas and major metros." },
      { q: "Can Della integrate with Filevine (popular in Texas)?", a: "Absolutely. Della's dossiers can be pushed directly via webhook into Filevine, Lead Docket, or any standard CRM your firm uses." }
    ]
  },
  {
    name: "Florida",
    slug: "florida",
    intro: "Florida's personal injury landscape underwent massive tort reform in 2023. Between the new statute of limitations and the shift to modified comparative negligence, the pressure on intake teams to rapidly triage and secure viable cases has never been higher.",
    sol: "2 years (reduced from 4 years under the 2023 tort reform).",
    comparativeNegligence: "Modified comparative negligence (51% Bar). Note: This is a major shift from Florida's historical pure comparative negligence standard.",
    noFault: "No-fault state. PIP (Personal Injury Protection) is mandatory ($10,000 limit).",
    damagesCaps: "Medical malpractice caps were previously struck down by the Florida Supreme Court. Punitive damages are generally capped.",
    handlingDetail: "Florida's 14-day PIP rule is unforgiving. Della is programmed to ask Florida callers exactly when the accident occurred and whether they have seen a medical professional. If they haven't and the 14-day window is closing, Della highlights this as an emergency priority in the morning dossier.",
    stateBar: "The Florida Bar maintains strict advertising and solicitation rules. Della is programmed strictly as an inbound-only, non-lawyer receptionist that provides no legal advice, fully complying with Florida Bar guidelines.",
    faqs: [
      { q: "How does Della handle Florida's 14-day PIP requirement?", a: "Della explicitly asks when the accident occurred and if medical treatment was received. The resulting dossier flags any impending 14-day deadlines for your paralegals." },
      { q: "Will Della give legal advice if the caller is confused about the 2023 tort reforms?", a: "Never. Della is strictly trained to state she is an intake specialist and that the firm's attorneys will review the specific legal merits of their claim." }
    ]
  },
  {
    name: "California",
    slug: "california",
    intro: "California is one of the most plaintiff-friendly jurisdictions in the country. However, the sheer volume of freeway traffic in Los Angeles, the Bay Area, and San Diego means firms are battling for leads 24/7. Missing a 10:00 p.m. call in LA means losing a case.",
    sol: "2 years for personal injury (6 months for claims against a government entity).",
    comparativeNegligence: "Pure comparative negligence. A plaintiff can recover damages even if they are 99% at fault (though recovery is reduced by their percentage of fault).",
    noFault: "At-fault state.",
    damagesCaps: "MICRA caps non-economic damages in medical malpractice (though the cap is progressively increasing). No cap on standard PI non-economic damages.",
    handlingDetail: "Because California allows recovery even if the caller is partially at fault (Pure Comparative), Della is trained not to immediately discard leads who admit partial liability. She captures the full narrative for the attorney to evaluate the proportional damage potential.",
    stateBar: "The State Bar of California issued Practical Guidance on AI in 2023, emphasizing the duty of confidentiality (Rule 3-100). Della's enterprise architecture ensures no client audio or transcripts are used to train external LLMs, fulfilling this duty.",
    faqs: [
      { q: "Can Della handle intake for claims against Caltrans or other government entities?", a: "Yes. Della flags incidents involving government vehicles or property, immediately noting the accelerated 6-month statute of limitations in the dossier." },
      { q: "How does Della handle Spanish intake for California firms?", a: "Della fully supports Spanish intake, allowing firms to serve the massive bilingual population in Southern California seamlessly." }
    ]
  },
  {
    name: "New York",
    slug: "new-york",
    intro: "New York personal injury practice is defined by high liability limits, complex scaffolding and labor laws (Labor Law 240), and a massive volume of commercial vehicle and rideshare incidents in NYC. The intake required here is highly specialized.",
    sol: "3 years for general personal injury (2.5 for medical malpractice, 90 days for Notice of Claim against municipalities).",
    comparativeNegligence: "Pure comparative negligence.",
    noFault: "No-fault state. Minimum $50,000 PIP coverage is required.",
    damagesCaps: "New York constitutionally prohibits caps on damages for personal injury or wrongful death.",
    handlingDetail: "For New York callers, Della specifically asks whether the incident involved a commercial vehicle, an MTA bus, an Uber/Lyft, or a construction site. If a municipality might be involved, the 90-day Notice of Claim deadline is instantly flagged in the dossier.",
    stateBar: "The NYSBA formed a Task Force on AI. Their primary concern revolves around hallucinated legal advice. Della is hard-coded to never provide legal advice or analyze the merits of a case, acting strictly as a factual intake gatherer.",
    faqs: [
      { q: "Does Della understand NY Labor Law 240 cases?", a: "Yes. If a caller mentions falling from a height or a scaffolding incident at a construction site, Della triggers specific questions about the employer and location." },
      { q: "How does Della handle MTA or city-involved injuries?", a: "Della will flag the incident for the accelerated 90-day Notice of Claim requirement so your team knows to prioritize the file." }
    ]
  },
  {
    name: "Illinois",
    slug: "illinois",
    intro: "Centered heavily around the Chicago metro area, Illinois personal injury firms face intense competition. After-hours calls from the major interstates (I-90, I-94) require immediate, competent handling to prevent lead leakage.",
    sol: "2 years for personal injury (1 year for claims against local public entities).",
    comparativeNegligence: "Modified comparative negligence (51% Bar).",
    noFault: "At-fault state.",
    damagesCaps: "No caps on compensatory damages (previous medical malpractice caps were ruled unconstitutional by the Illinois Supreme Court).",
    handlingDetail: "Because Illinois operates on a 51% bar, establishing liability clearly is paramount. Della captures precise details regarding police response, citations issued, and witness information to help attorneys assess the comparative fault risk before the callback.",
    stateBar: "The ISBA requires lawyers to maintain competence regarding the risks of relevant technology (Rule 1.1). Della provides full transparency, providing both the raw audio and transcript of every call so attorneys can verify the AI's summary.",
    faqs: [
      { q: "Does Della work for Workers' Compensation intake in Illinois?", a: "Yes, Della has a specific conversational flow for Workers' Comp, ensuring she asks about reporting the injury to the employer and current employment status." },
      { q: "How quickly do we receive the dossier after an Illinois crash?", a: "The dossier (audio, transcript, and summary) is pushed to your CRM or email inbox within 60 seconds of the call ending." }
    ]
  },
  {
    name: "Georgia",
    slug: "georgia",
    intro: "Georgia's population explosion, particularly in the Atlanta metro, has driven a massive surge in PI volume. Atlanta's infamous traffic congestion means auto accidents happen at all hours, making an after-hours answering strategy vital.",
    sol: "2 years for personal injury.",
    comparativeNegligence: "Modified comparative negligence (50% Bar). Note this is stricter than the 51% bar; if the plaintiff is exactly 50% at fault, they recover nothing.",
    noFault: "At-fault state.",
    damagesCaps: "No caps on compensatory damages. Punitive damages are generally capped at $250,000, with exceptions for DUI or intentional harm.",
    handlingDetail: "Georgia's strict 50% bar means liability is a knife-edge. Della is programmed to gently but thoroughly ask about the police report and citations. Furthermore, if a caller mentions the at-fault driver was intoxicated, Della flags the potential exception to the punitive damages cap.",
    stateBar: "The State Bar of Georgia focuses heavily on client confidentiality. Della ensures no PHI or intake data is shared with public language models, operating in a closed, secure loop.",
    faqs: [
      { q: "Can Della handle intake for commercial trucking accidents on I-285?", a: "Yes. Della is trained to specifically ask whether the at-fault vehicle was a commercial truck, semi, or company vehicle, given the higher policy limits involved." },
      { q: "How does Della integrate with our Atlanta-based team?", a: "Della simply takes over your phone lines when your office closes. When your team arrives in the morning, the dossiers from the night's calls are waiting in their inbox." }
    ]
  }
];
