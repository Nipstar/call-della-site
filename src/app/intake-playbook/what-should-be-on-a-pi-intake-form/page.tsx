import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '../_ui';

const SLUG = '/intake-playbook/what-should-be-on-a-pi-intake-form';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'What is the most important field on a personal injury intake form?',
    a: 'The incident date. It starts the statute of limitations clock, and a matter that is close to its deadline needs an attorney quickly or cannot be taken at all. Record the exact date, or the best estimate with a note that it is unconfirmed, and check it against the limitation period for the state where it happened.',
  },
  {
    q: 'Should a personal injury intake form ask about medical treatment?',
    a: 'Yes. Ask whether the caller has seen a doctor, where, when, and whether treatment is continuing. Treatment is the main evidence of damages. If the caller has not been seen, intake can suggest getting medical care, which is safety guidance, not legal advice. Leave the medical records themselves for after the consultation.',
  },
  {
    q: 'How long should a PI intake call take?',
    a: 'Long enough to capture the incident, injuries, treatment, insurance, fault facts and the incident date, plus contact details and party names. For most callers that fits in one conversation. Detailed medical history, wage loss and document collection belong in the consultation, once the conflict check has cleared and an attorney is involved.',
  },
  {
    q: 'Can intake tell a caller whether they have a case?',
    a: 'No. Telling a caller whether they have a case is legal advice, and only an attorney should give it. Intake records facts and checks them against the firm’s written criteria. A caller who asks can be told that an attorney will review the details and call back, with a realistic time for that callback.',
  },
  {
    q: 'Do different personal injury case types need different forms?',
    a: 'They need the same core form plus a few extra fields. A trucking crash needs the carrier name and DOT number. A slip and fall needs the property owner and a description of the hazard. A dog bite needs the owner’s name. Keep one form with short branches so every record looks the same.',
  },
  {
    q: 'What does Della capture on a personal injury call?',
    a: 'Della captures the incident type and date, location, injuries and treatment, police report details, insurance, the caller’s account of fault, witnesses, any prior lawyer and contact details. She files each call as a dossier with a summary, urgency score, recording and transcript. Personal injury intake runs in English.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK · PERSONAL INJURY"
      title="What should be on a personal injury intake form?"
      slug={SLUG}
      author="Andy Norman"
      date="2026-05-14"
      breadcrumbs={[
        { name: 'Intake Playbook', href: '/intake-playbook' },
        { name: 'PI intake form', href: SLUG },
      ]}
      citations={[SRC.clio2024, SRC.obj2025, SRC.rule118, SRC.rule15]}
      tldr={
        <>
          <p className="mb-2">
            A personal injury intake form is the first-contact record a PI firm uses to decide whether a matter has liability, damages and a source of recovery. It needs incident, injury, treatment, insurance, fault, deadline and prior-counsel fields.
          </p>
          <p className="m-0">
            The incident date matters most, because it starts the limitation period. The form only helps if someone answers: in Clio&apos;s 2024 secret-shopper study, 40% of 500 US firms picked up.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is a personal injury intake form?</h2>
        <p>
          <strong>A personal injury intake form</strong> is the fixed list of questions a PI firm asks every prospective client on first contact. It is a screening record, not a case file. Its job is to give an attorney enough to decide three things: whether someone else is likely at fault, whether the injuries are real and documented, and whether there is insurance or another source to pay a recovery. The form also captures party names for the conflict check and the incident date for the deadline. Everything else waits for the consultation. A form that tries to collect the full history on the first call keeps an injured caller on the phone too long. A form that is too thin forces a second call before anyone can decide. The table below lists the fields that strike that balance, grouped by section. Our general <Link href="/intake-playbook/law-firm-client-intake-form">law firm client intake form</Link> shows how this section sits alongside the core contact fields.
        </p>

        <Table
          caption="Personal injury intake form fields"
          head={['Section', 'Field', 'Why it is on the form']}
          rows={[
            ['Contact', 'Name, phone, email, best callback time', 'Taken first in case the call drops'],
            ['Contact', 'Injured person, if someone else is calling', 'Family often call for a person in hospital'],
            ['Incident', 'Type, date and time', 'Type sets the questions; date starts the limitation period'],
            ['Incident', 'State, city and exact location', 'Decides which state’s rules apply'],
            ['Incident', 'Police or incident report number and agency', 'The first document the firm will request'],
            ['Injuries', 'Injuries in the caller’s words', 'The basis of damages'],
            ['Treatment', 'Seen a doctor? Where, when, continuing?', 'Treatment is the evidence of injury'],
            ['Insurance', 'Caller’s insurer, other party’s insurer, claim numbers', 'Identifies the source of recovery'],
            ['Fault', 'What happened, as the caller tells it', 'Liability facts, recorded without analysis'],
            ['Evidence', 'Witnesses, photos, video, damaged property', 'Some evidence needs preserving quickly'],
            ['Parties', 'Other driver, owner, employer, company names', 'Feeds the conflict check'],
            ['History', 'Statements given, documents signed, prior lawyer', 'Changes what the firm can do and how fast'],
            ['Source', 'How they found the firm', 'Ties the case to marketing spend'],
          ]}
        />

        <h2>What incident details should the form capture?</h2>
        <p>
          <strong>The form should capture the incident type, the date and time, the exact location and any report that was made</strong>. Incident type decides which follow-up questions apply. A car crash, a commercial truck collision, a fall on someone&apos;s property and a dog bite each need different details later, but all four start with what, when and where. Location should be specific: the state, the city, the road or the business name. A fall in a federal building and a fall in a shop across the street can fall under different rules and deadlines, so record the property type as well. Ask whether police or a property manager made a report, and take the report number and agency if the caller has them. Our <Link href="/case-types">personal injury case types</Link> pages list the extra fields for auto, trucking and slip and fall matters.
        </p>

        <h2>What injury and treatment questions belong on the form?</h2>
        <p>
          <strong>The injury and treatment questions record what hurts, who has seen it, and whether care is continuing</strong>. Ask the caller to describe the injuries in their own words, and record them that way. Then ask whether they went to an emergency room, urgent care or their own doctor, when, and whether they have follow-up appointments. Treatment is the main evidence of damages, and a gap in treatment is one of the first things an insurer will point to. Our guide to <Link href="/intake-playbook/intake-red-flags-declining-cases">personal injury case evaluation</Link> explains how treatment gaps affect the decision. If the caller has not been seen at all, the person taking the call can suggest getting medical care. That is safety guidance, not legal advice. Do not ask for medical records or full medical history on the first call. Those belong in the consultation, after the conflict check.
        </p>

        <h2>What insurance information should intake collect?</h2>
        <p>
          <strong>Intake should collect the name of every insurer involved and any claim number already opened</strong>. For a vehicle crash that means the caller&apos;s own auto insurer, the other driver&apos;s insurer, and any commercial policy if a work vehicle was involved. For a premises case it means the property owner or business, whose insurer the firm will identify later. Ask whether an adjuster has already called, and whether the caller has given a recorded statement or signed anything. Those answers change how quickly the attorney needs to call back. Some states use no-fault insurance for car crashes, which changes how medical bills are paid at first. Our <Link href="/states">personal injury rules by state</Link> page lists which of the states we cover are no-fault. Record the facts and leave the coverage analysis to the attorney.
        </p>

        <h2>How should a personal injury intake form record fault?</h2>
        <p>
          <strong>A personal injury intake form records fault as the caller&apos;s account of what happened, in their own words, without any judgment from the person taking the call</strong>. Ask open questions. What were you doing just before it happened? What did the other person do? Did anyone say anything at the scene? Then record any facts that bear on shared fault, such as speed, phone use, weather or a warning sign. Many states reduce or bar recovery when the injured person shares the fault, and the rules differ by state. Our <Link href="/states">rules by state</Link> page shows whether each state we cover uses comparative or contributory fault. Intake should never tell a caller that they were or were not at fault. A careful, neutral account lets the attorney make that judgment, and it protects the firm if the matter is declined.
        </p>

        <h2>Why does the incident date matter most?</h2>
        <p>
          <strong>The incident date matters most because it starts the statute of limitations, the deadline after which a claim usually cannot be filed</strong>. Limitation periods for personal injury differ by state and by type of claim, so the date has to be read alongside the location. A matter that is months from its deadline can join the normal queue. A matter that is days from it needs an attorney the next morning, or the firm may need to decline it quickly so the caller can look elsewhere. Record the exact date when the caller knows it, and the best estimate with a note when they do not. Do not calculate or state the deadline to the caller. Flag it in the record and let the attorney decide. Our{' '}
          <Link href="/states">personal injury rules by state</Link> page gives limitation periods for the states we cover.
        </p>

        <h2>Why ask about prior lawyers and statements to insurers?</h2>
        <p>
          <strong>Prior lawyers and earlier statements change what the firm can do and how fast it must do it</strong>. A caller who already has a lawyer on the same matter is usually looking for a second opinion or a change of counsel, and the attorney needs to know that before the consultation. A caller whose earlier lawyer withdrew may be a weaker case, or may simply have had a poor fit. Either way the attorney should hear it from the record, not discover it later. Statements matter too. A caller who has given a recorded statement to the other side&apos;s insurer, or signed a release, may have narrowed their options. Ask both questions plainly and record the answers. Do not advise the caller about what they should or should not say to an insurer. That is the attorney&apos;s call.
        </p>

        <h2>What should a personal injury intake form leave out?</h2>
        <p>
          <strong>A personal injury intake form should leave out anything the firm does not need to decide whether to offer a consultation</strong>. That means no Social Security numbers, no full medical history, no copies of records and no detailed financial questions on the first call. There is a professional reason as well as a practical one. Under <a href={SRC.rule118.url}>ABA Model Rule 1.18</a>, information learned from a prospective client is protected even if the firm never takes the matter. A firm that hears too much from someone it declines can be conflicted out of acting against them later. A short form limits that risk. Leave out any question that asks intake for an opinion, such as whether the case is worth pursuing. Finally, fee terms belong in the engagement agreement. Under <a href={SRC.rule15.url}>ABA Model Rule 1.5(c)</a>, a contingent fee agreement must be in a writing signed by the client.
        </p>

        <h2>Does the form still work when the office is closed?</h2>
        <p>
          <strong>A personal injury intake form only works if someone is there to ask the questions, and many firms have nobody on the phone at night</strong>. According to the <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 Legal Trends Report, only 40% of firms answered a prospective client&apos;s call, and only 20% of those that missed it called back. Crashes and falls happen in the evening and at weekends too. Della, Call Della&apos;s intake specialist, takes this intake on after-hours calls in your firm&apos;s name. She captures every field in the table above, files the call as a dossier with an urgency score, and flags urgent matters to the attorney on call by email. She tells callers she is an AI if they ask and never tells them whether they have a case. See <Link href="/personal-injury">AI intake for personal injury law firms</Link>.
        </p>
      </Prose>

      <DemoCTA>
        Hear this form asked on a live call. Book a demo and Della will take a personal injury intake while you listen, then we will show you the dossier.
      </DemoCTA>

      <FAQ items={FAQS} heading="Personal injury intake forms: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
