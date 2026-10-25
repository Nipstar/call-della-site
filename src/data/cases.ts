// Personal injury case-type intake guides. Legal and regulatory facts were checked on 25 Oct 2026
// against the linked source (statute or regulation text, or a named secondary source). Not legal advice.
import type { Citation } from '@/lib/schema';
import { SOURCES as S, III, MWL_FAULT } from './states';

export const CASES_PUBLISHED = '2026-05-08';
export const CASES_UPDATED = '2026-10-25';

export type CaseSection = { heading: string; lead: string; body: string[]; src: Citation[] };
export type CaseGuide = {
  name: string; // hub card name
  title: string; // "[Case Type] Intake" part of the H1
  slug: string;
  tldr: string;
  description: string;
  captureHeading: string;
  captureLead: string;
  capture: string[];
  sections: CaseSection[];
  della: string;
  faqs: { q: string; a: string }[];
};

const CFR = (sec: string, name: string): Citation => ({ name: `49 CFR § ${sec}: ${name}`, url: `https://www.law.cornell.edu/cfr/text/49/${sec}`, publisher: 'Legal Information Institute (eCFR text)' });
export const FMCSA = {
  hos: CFR('395.3', 'Maximum driving time for property-carrying vehicles'),
  rods: CFR('395.8', 'Driver’s record of duty status'),
  register: CFR('390.15', 'Assistance in investigations and special studies'),
  accident: CFR('390.5', 'Definitions'),
  testing: CFR('382.303', 'Post-accident testing'),
  insurance: CFR('387.9', 'Financial responsibility, minimum levels'),
};

const MMM: Citation = { name: 'Georgia Governor Brian Kemp Signs Sweeping Tort Reform Into Law', url: 'https://www.mmmlaw.com/news-resources/georgia-governor-brian-kemp-signs-sweeping-tort-reform-into-law/', publisher: 'Morris, Manning & Martin', year: '2025' };

const PUBLIC_DEADLINES =
  'New York requires a notice of claim against a municipality within 90 days under General Municipal Law § 50-e. California requires a government claim for injury within six months under Gov. Code § 911.2. Texas requires written notice to a governmental unit within six months under Tex. Civ. Prac. & Rem. Code § 101.101. Illinois gives one year to sue a local public entity under 745 ILCS 10/8-101.';

export const caseData: CaseGuide[] = [
  {
    name: 'Auto accidents',
    title: 'Auto Accident Intake',
    slug: 'auto-accidents',
    tldr:
      'Auto accident intake is the first-call screening a personal injury firm runs when someone calls after a car crash. It records the facts that set the deadline, the fault rule and the coverage. In a no-fault state such as Florida, PIP medical benefits depend on treatment within 14 days of the accident under Fla. Stat. § 627.736, so the accident date comes first.',
    description:
      'Auto accident intake for PI firms: what to capture on the first call, how fault rules and no-fault PIP change the questions, and which deadlines run first.',
    captureHeading: 'What should an auto accident intake call capture?',
    captureLead:
      'An auto accident intake call should capture the date, the place, the vehicles, the injuries and both sides’ insurers, in the caller’s own words.',
    capture: [
      'Date, time and exact location of the crash, including city, county and state',
      'Whether police came, the agency, the report number if the caller has it, and any citation',
      'The other vehicle: personal car, commercial truck, rideshare, delivery van, or a city, county or state vehicle',
      'Injuries, whether the caller left by ambulance, and every place they have been treated since',
      'The other driver’s name and insurer, and the caller’s own carrier and PIP or medical payments coverage',
      'Witnesses, photos and dashcam footage the caller has, recorded as “has” or “does not have”',
      'Any sign the other driver was impaired, fled or was arrested',
      'Whether the caller has given a recorded statement, signed anything or spoken to another lawyer',
    ],
    sections: [
      {
        heading: 'Why does the state fault rule matter on an auto accident call?',
        lead: 'The state fault rule decides how much the caller’s own conduct can cost them, so the auto accident record has to describe that conduct precisely and neutrally.',
        body: [
          'Four systems are in use, according to the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025). In a pure contributory negligence state such as Virginia or Maryland, any fault can bar recovery. Under a 50 percent bar, as in Georgia, an even split ends the claim. New York added a modified rule for motor vehicle suits filed on or after May 26, 2026, under CPLR § 1411(b).',
          'Georgia’s SB 68 now lets juries hear whether the plaintiff wore a seat belt, according to Kennedys (2025). None of this calls for the intake specialist to judge fault. It calls for a clean record: where each car was, the light, the speed limit, the weather, and what each driver said after the crash. Our <a href="/states">personal injury rules by state</a> table lists the rule for each state we cover.',
        ],
        src: [MWL_FAULT, S.ny1411, S.gaSB68],
      },
      {
        heading: 'How does a no-fault state change auto accident intake?',
        lead: 'In a no-fault state, the auto accident caller claims first against their own insurer, so intake has to capture their policy and their treatment dates as well as the other driver’s details.',
        body: [
          'Twelve states and Puerto Rico have no-fault auto insurance laws, according to the Insurance Information Institute. Two of the states Call Della covers are among them. Florida’s PIP pays up to $10,000 in medical and disability benefits, covers 80 percent of reasonable medical expenses, and reaches only care first received within 14 days of the accident, under Fla. Stat. § 627.736.',
          'New York’s no-fault benefits cover up to $50,000 per person in basic economic loss, and a suit for pain and suffering needs a serious injury as defined in Insurance Law § 5102(d), such as a fracture or a significant limitation of use. Auto intake in those states should record the caller’s carrier, whether a no-fault claim is open, and each injury in specific terms.',
        ],
        src: [III, S.fl627736, S.ny5102],
      },
      {
        heading: 'Which deadlines can an auto accident caller already be up against?',
        lead: 'The deadline most likely to be running is not the statute of limitations but a government notice period, when a public vehicle or road was involved in the auto accident.',
        body: [
          `The general limitations periods for personal injury are two years in Texas, Florida, California, Illinois and Georgia, and three years in New York. Government claims move faster. ${PUBLIC_DEADLINES}`,
          'An auto accident caller often does not phone a firm until weeks after the crash, once the pain persists or the insurer stops returning calls. That makes the question “Was the other vehicle a bus, a city truck, a police car or a school vehicle?” one of the first an intake specialist should ask. If the answer is yes, the dossier should record the vehicle markings and the incident date so the attorney can check the notice period first thing.',
        ],
        src: [S.ny50e, S.ca9112, S.tx101101, S.il81010],
      },
      {
        heading: 'What makes an auto accident call urgent?',
        lead: 'An auto accident call is urgent when a deadline is close, the injuries are severe, or evidence is about to disappear.',
        body: [
          'In practice that means a death or a hospital admission, a commercial truck, a government vehicle with a notice period running, or a Florida caller inside the 14-day PIP window who has not yet been treated. A report that the other driver was drunk or arrested also matters: Texas lifts its exemplary damages cap for intoxication assault and intoxication manslaughter under Tex. Civ. Prac. & Rem. Code § 41.008, and Georgia has no punitive cap for impaired drivers under O.C.G.A. § 51-12-5.1(f).',
          'Every Call Della plan includes urgent-call email alerts to the attorney on call, so an urgent auto accident call does not wait for the morning. A crash with a semi-truck has its own records clock, covered in our <a href="/case-types/trucking-accidents">trucking accident intake</a> guide.',
        ],
        src: [S.tx41008, S.ga51125],
      },
    ],
    della:
      'Della, Call Della’s intake specialist, takes auto accident calls in the firm’s name nights, weekends and holidays. She plays the state recording disclosure, works through the checklist in a calm order, and never gives legal advice or tells a caller whether they were at fault. Each call becomes a dossier with a summary, urgency score, recording and transcript, and the 7am morning brief lists which callers need a callback first.',
    faqs: [
      { q: 'How does Della handle rideshare accidents?', a: 'Della asks whether the other driver, or the caller’s own driver, was working for a rideshare or delivery app at the time, and whether a passenger was on board or a trip was accepted. Those facts can change which policy applies. She records the answers and leaves the coverage question to the attorney.' },
      { q: 'Can Della collect photos of the crash during the call?', a: 'No. Della takes intake by voice. She asks whether the caller has photos, dashcam footage or the other driver’s insurance card, and records what they have, so the firm can request copies at the callback. The dossier notes each item as available or not.' },
      { q: 'Will Della tell a caller whether they have a case?', a: 'No. Della never gives legal advice, never evaluates fault, and never promises the firm will take the matter. She tells callers that an attorney will review what they shared and call back. If a caller asks whether she is a person, she tells them she is an AI.' },
      { q: 'What is the statute of limitations for a car accident?', a: 'It depends on the state. For personal injury it is two years in Texas, Florida, California, Illinois and Georgia, and three years in New York. Claims involving a government vehicle can need notice in 90 days to one year, so intake should always ask about public vehicles.' },
      { q: 'Should a firm take intake on a minor fender bender?', a: 'Yes, at least the first call. A low-speed crash with soft-tissue injuries, often called a MIST claim, can still involve real treatment, and the caller may have facts the firm needs. Intake records the property damage, the treatment and the coverage, and the attorney decides. See our glossary entry on MIST.' },
    ],
  },
  {
    name: 'Commercial trucking accidents',
    title: 'Trucking Accident Intake',
    slug: 'trucking-accidents',
    tldr:
      'Trucking accident intake is the first-call screening a firm runs after a crash with a commercial truck. The first call has to identify the motor carrier quickly, because federal rules let carriers keep a driver’s hours-of-service records for as little as six months under 49 CFR § 395.8(k). It also captures the injuries, the scene, and the company name or USDOT number on the truck.',
    description:
      'Trucking accident intake for PI firms: what to capture on the first call, the FMCSA records and retention periods that matter, and the insurance minimums.',
    captureHeading: 'What should a trucking accident intake call capture?',
    captureLead:
      'A trucking accident intake call should capture who the carrier is, what the truck was doing, and what happened at the scene, before anything else fades.',
    capture: [
      'The company name on the cab or trailer, and the USDOT number if the caller or a witness saw it',
      'Type of vehicle: tractor-trailer, box truck, dump truck, tanker or delivery van, and any hazardous materials placards',
      'Date, time, road and direction of travel, and where the truck appeared to be heading',
      'Whether anyone died, whether the caller was taken to hospital, and whether vehicles were towed',
      'Which agency responded, whether the truck driver was cited, and the report number if known',
      'Anything the driver said about their hours, their load or their dispatcher',
      'Witnesses, photos and dashcam footage the caller has',
      'Whether an insurer or company representative has contacted the caller, and whether they gave a statement',
    ],
    sections: [
      {
        heading: 'Which federal trucking records matter, and how long are they kept?',
        lead: 'The records that matter most are the driver’s record of duty status and the carrier’s accident register, and federal rules require them to be kept for only six months and three years.',
        body: [
          'Under 49 CFR § 395.8(k), a motor carrier must retain records of duty status and supporting documents for each driver for not less than 6 months from the date of receipt. Under § 390.15, a carrier must keep an accident register for 3 years after each accident, listing the date, location, injuries and fatalities. The register uses the FMCSA definition of an accident in § 390.5: a fatality, an injury treated away from the scene, or a vehicle towed for disabling damage.',
          'Six months is a minimum, not a destruction date, but it explains why trucking firms move fast. Intake cannot send a preservation letter. It can identify the carrier on the first call so the attorney can decide on one the next morning.',
        ],
        src: [FMCSA.rods, FMCSA.register, FMCSA.accident],
      },
      {
        heading: 'What do the hours-of-service rules mean for trucking accident intake?',
        lead: 'The hours-of-service rules cap how long a truck driver may drive, so the time of the crash and the driver’s route are worth recording on the first call.',
        body: [
          'Under 49 CFR § 395.3, a property-carrying driver must start a shift with 10 consecutive hours off duty, may not drive after 14 consecutive hours on duty, and may drive a total of 11 hours within that window. Except for short-haul drivers, driving is not permitted after 8 hours of driving time without a consecutive 30-minute break.',
          'The intake specialist does not investigate violations. The call should still capture the time of the crash, the road, the direction of travel, and anything the driver said about how long they had been on the road or where they were heading. A caller may remember the driver saying they were behind schedule or had been driving all night. Those details give the attorney a reason to request the logs, and the six-month retention rule gives a reason to request them quickly.',
        ],
        src: [FMCSA.hos],
      },
      {
        heading: 'When must a trucking company test its driver after a crash?',
        lead: 'A motor carrier must test its driver for alcohol and controlled substances after a crash that kills someone, and after certain injury or tow-away crashes where the driver is cited.',
        body: [
          'Under 49 CFR § 382.303, testing is required for each surviving driver if the accident involved a loss of human life, or if the driver receives a citation within 8 hours for a moving violation arising from an accident with an injury treated away from the scene or a vehicle towed for disabling damage. If an alcohol test is not given within 2 hours, the employer must record why, and it must stop trying after 8 hours. Attempts at a controlled substance test stop after 32 hours.',
          'Those triggers line up with intake questions: did anyone die, did anyone leave by ambulance, were vehicles towed, and was the truck driver ticketed. The answers tell the attorney whether test records should exist.',
        ],
        src: [FMCSA.testing],
      },
      {
        heading: 'How much insurance must a trucking company carry?',
        lead: 'Federal minimum liability coverage for a for-hire interstate carrier hauling non-hazardous property in a truck of 10,001 pounds or more is $750,000.',
        body: [
          'The schedule in 49 CFR § 387.9 raises the minimum to $1,000,000 for oil and many hazardous materials, and to $5,000,000 for certain hazardous substances carried in bulk and other high-risk loads. These are minimums. Many carriers carry more, and the policy limits are a question for the attorney.',
          'What intake can add is the identity of every company on the scene. A crash may involve the driver, the motor carrier, a broker that arranged the load, and the owner of the trailer, each with their own coverage. The caller may remember two different names, one on the cab and one on the trailer. Hazardous materials placards matter too, because they can move the case into a higher insurance tier. A trucking crash with a catastrophic injury is an urgent call on any reading, and Call Della sends an urgent-call email to the attorney on call on every plan.',
        ],
        src: [FMCSA.insurance],
      },
    ],
    della:
      'Della, Call Della’s intake specialist, takes trucking accident calls in the firm’s name nights, weekends and holidays. She asks whether a “truck” means a pickup or a tractor-trailer, takes the carrier details first, and never gives legal advice. Each call becomes a dossier with a summary, urgency score, recording and transcript, and an urgent call sends an email alert to the attorney on call that night.',
    faqs: [
      { q: 'Does Della know the difference between a pickup truck and a commercial truck?', a: 'Della asks. When a caller says a truck hit them, she asks what kind: pickup, box truck, tractor-trailer, dump truck or tanker, and whether it had a company name or USDOT number on it. The answer changes the urgency and the records the attorney will want, so it comes early in the call.' },
      { q: 'Will Della alert an attorney about a trucking crash at night?', a: 'Yes, if she scores the call as urgent. Every Call Della plan includes urgent-call email alerts to the attorney on call. A trucking crash with a death, a hospital admission or a carrier identified at the scene is the kind of call that should not wait for the 7am morning brief.' },
      { q: 'How long do trucking companies keep driver logs?', a: 'Under 49 CFR § 395.8(k), a motor carrier must keep each driver’s records of duty status and supporting documents for not less than 6 months from receipt. The accident register must be kept for 3 years under § 390.15. Six months is a minimum, which is why carrier identification on the first call matters.' },
      { q: 'What is the minimum insurance for an interstate trucking company?', a: 'Under 49 CFR § 387.9, a for-hire interstate carrier hauling non-hazardous property in a vehicle of 10,001 pounds or more must carry at least $750,000. Oil and many hazardous materials require $1,000,000, and certain bulk hazardous loads require $5,000,000. Actual policies are often higher.' },
      { q: 'Does Della send preservation or spoliation letters?', a: 'No. Della takes intake and never acts for the firm with third parties. She records the carrier, the vehicle and the scene facts so the attorney can decide on a preservation letter the next morning, or that night if the urgent-call alert reaches them first.' },
    ],
  },
  {
    name: 'Slip and fall (premises liability)',
    title: 'Slip and Fall Intake',
    slug: 'slip-and-fall',
    tldr:
      'Slip and fall intake is the first-call screening a firm runs on a premises liability matter: an injury from a fall on someone else’s property. The first call records what caused the fall, who owns or runs the property, and who documented the hazard. If the property is public, the deadline can be short: New York requires a notice of claim within 90 days under General Municipal Law § 50-e.',
    description:
      'Slip and fall intake for PI firms: what to capture on the first call, the hazard and ownership facts that matter, and the public property deadlines that run first.',
    captureHeading: 'What should a slip and fall intake call capture?',
    captureLead:
      'A slip and fall intake call should capture the hazard, the place, the owner and the record of the fall, before the scene is cleaned up and memories fade.',
    capture: [
      'Exactly what caused the fall: liquid, ice, a broken step, uneven pavement, poor lighting or a missing handrail',
      'The business or property name, the address, and where on the property the fall happened',
      'Whether the property is a store, a home, a workplace, or public property such as a sidewalk, transit station or government building',
      'Whether anyone took photos of the hazard, and whether there were warning signs or cones',
      'Whether an incident report was made, who took it, and whether the caller got a copy',
      'Whether staff said anything about the hazard, such as how long it had been there',
      'Witness names, and whether the caller noticed cameras',
      'Injuries, treatment so far, and whether the fall happened at work',
    ],
    sections: [
      {
        heading: 'Why does the cause of the fall matter so much?',
        lead: 'The cause of the fall is the center of a slip and fall case, because the attorney has to judge what the hazard was, how long it was there and whether the owner knew about it.',
        body: [
          'A vague record such as “slipped in a store” gives the attorney nothing to evaluate. A useful record says what the caller slipped on, where it was, what it looked like, whether there were tracks or cart marks through it, and whether a wet-floor sign was out. Each of those details speaks to how long the hazard existed and whether staff should have seen it.',
          'The intake specialist should ask the caller to describe the scene, not to argue the case. Statements from staff are especially worth recording word for word. A manager who said “that leak has been there all week” has given the attorney a fact that no later investigation can recreate. The caller’s footwear, what they were carrying and whether they were looking at a phone also belong in the record, stated neutrally.',
        ],
        src: [],
      },
      {
        heading: 'What changes when the fall happened on public property?',
        lead: 'A fall on public property usually starts a government notice period that is far shorter than the statute of limitations.',
        body: [
          `${PUBLIC_DEADLINES} The general limitations periods are two years in Texas, Florida, California, Illinois and Georgia, and three years in New York.`,
          'Callers rarely know who owns a sidewalk, a transit platform or a parking structure. The intake call should record the precise location, the nearest address or cross streets, and any signs or markings, so the attorney can identify the owner. A slip and fall on a city sidewalk 70 days ago in New York is an urgent call, and every Call Della plan sends an urgent-call email to the attorney on call.',
        ],
        src: [S.ny50e, S.ca9112, S.tx101101, S.il81010],
      },
      {
        heading: 'How does the injured person’s own fault affect a slip and fall claim?',
        lead: 'The injured person’s own fault reduces or bars a slip and fall recovery under the same state fault rule that applies to car crashes.',
        body: [
          'According to the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025), Alabama, Maryland, North Carolina, Virginia and the District of Columbia apply pure contributory negligence, where any fault can bar recovery. Georgia bars a plaintiff 50 percent or more at fault. Texas, Florida and Illinois bar a plaintiff more than 50 percent at fault. California and New York, outside motor vehicle cases, use pure comparative fault.',
          'Defendants in premises cases may argue the hazard was open and obvious or that the plaintiff was not paying attention. Intake cannot answer that argument, but it can capture the lighting, the weather, the caller’s footwear and what they were doing, in neutral words. Our <a href="/states">personal injury rules by state</a> table lists each covered state’s rule.',
        ],
        src: [MWL_FAULT],
      },
      {
        heading: 'Have any states changed premises liability rules recently?',
        lead: 'Yes. Georgia’s SB 68, signed April 21, 2025, set new standards for premises liability claims based on third-party crimes, known as negligent security.',
        body: [
          'According to Kennedys (2025), SB 68 created new standards for negligent security claims. Morris, Manning & Martin (2025) describes the change as amending the standard of care business owners owe patrons for injuries caused by third parties, effective for cases filed after April 21, 2025. Florida’s 2023 HB 837 also moved negligence claims to a two-year limitations period under Fla. Stat. § 95.11.',
          'For a slip and fall, the practical intake points stay the same across states: the hazard, the owner, the record of the fall and the injuries. For a premises case involving an assault or robbery, a Georgia firm’s intake should record what security the property had, such as lighting, cameras, guards or locked gates, because the new standards make those facts central.',
        ],
        src: [S.gaSB68, MMM, S.fl9511],
      },
    ],
    della:
      'Della, Call Della’s intake specialist, takes slip and fall calls in the firm’s name nights, weekends and holidays. She asks what caused the fall, who runs the property and what was documented, and records staff statements in the caller’s words. She never gives legal advice. Each call becomes a dossier with a summary, urgency score, recording and transcript, delivered to the dashboard and the 7am morning brief.',
    faqs: [
      { q: 'Can Della tell a store fall from a fall at someone’s home?', a: 'Yes. Della asks where the fall happened and who owns or runs the property: a business, a private home, a landlord, an employer or a public body. The answer tells the attorney which kind of coverage and which deadline may apply, so it is recorded early in the call.' },
      { q: 'How does Della document whether the owner knew about the hazard?', a: 'Della asks factual questions: what the hazard looked like, whether there were signs or cones, whether staff said anything about it, and whether the caller saw cameras. She records staff remarks in the caller’s words. She does not tell the caller whether the owner is liable.' },
      { q: 'What is the deadline for a slip and fall on public property?', a: 'It depends on the state and the entity. New York requires a notice of claim within 90 days, California a government claim within six months, Texas written notice within six months, and Illinois a suit within one year against a local public entity. The general limitations period is longer.' },
      { q: 'Should intake ask whether the caller was at fault?', a: 'Intake should not ask the caller to assign fault. It should record the facts that bear on it, such as lighting, weather, footwear and whether the caller was carrying something or using a phone, in neutral words. The attorney applies the state’s comparative or contributory negligence rule.' },
      { q: 'What if the fall happened at work?', a: 'Della records that the fall happened at work, the employer’s name, and whether the injury was reported. A workplace fall can involve workers’ compensation as well as, or instead of, a premises claim against a third party, so the attorney needs those facts at the callback.' },
    ],
  },
];

export const caseBySlug = (slug: string) => caseData.find((c) => c.slug === slug);
