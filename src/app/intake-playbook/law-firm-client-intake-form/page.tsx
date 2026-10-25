import React from 'react';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { pageMeta } from '@/data/pages';
import { Prose, Table, DemoCTA, SRC } from '../_ui';

const SLUG = '/intake-playbook/law-firm-client-intake-form';
export const metadata = pageMeta(SLUG);

const FAQS = [
  {
    q: 'What should be on a client intake form for a law firm?',
    a: 'Every law firm client intake form needs the caller’s name, phone, email, preferred contact time, who the client is if someone else is calling, the matter in brief, every other party’s name, key dates, how they found the firm and any prior lawyer. Add a practice-area section for personal injury, criminal defense or immigration matters.',
  },
  {
    q: 'Is a legal client intake form the same as an engagement letter?',
    a: 'No. A legal client intake form records what a prospective client tells the firm before the firm decides to take the matter. An engagement letter comes later and sets out the scope of the representation and the fee. Signing an intake form does not make someone a client, and the form should say so.',
  },
  {
    q: 'Should the intake form ask for a Social Security number?',
    a: 'Not at first contact. A Social Security number is rarely needed to decide whether to take a matter, and holding it adds risk if the person never becomes a client. Collect identifiers like a Social Security number, full date of birth or immigration A-Number when the matter needs them, usually after the consultation.',
  },
  {
    q: 'Can one law firm intake form cover several practice areas?',
    a: 'Yes. Use one core section that every caller answers, then branch into a short section for the practice area. A firm that handles personal injury and criminal defense keeps one record format, one conflict check and one morning queue, while each matter still gets the questions its attorneys need.',
  },
  {
    q: 'How long should a law firm intake form take to complete?',
    a: 'Long enough to qualify the matter and run a conflict check, and no longer. On the phone, the core fields plus one practice-area section is a manageable first call. Detailed history, documents and medical or criminal records belong in the consultation, after the conflict check has cleared and an attorney is involved.',
  },
  {
    q: 'What does Della capture on an after-hours call?',
    a: 'Della captures the caller’s contact details, every party name, the key dates and the practice-area facts, then files the call as a dossier with a summary, an urgency score, a recording and a transcript. Immigration intake runs in English and Spanish; personal injury and criminal defense run in English. A demo shows how her questions map to your form.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="INTAKE PLAYBOOK · FORMS"
      title="Client intake form for a law firm: fields by practice area"
      slug={SLUG}
      author="Andy Norman"
      date="2026-10-25"
      breadcrumbs={[
        { name: 'Intake Playbook', href: '/intake-playbook' },
        { name: 'Client intake form', href: SLUG },
      ]}
      citations={[SRC.rule118, SRC.rule15, SRC.clio2024, SRC.obj2025]}
      tldr={
        <>
          <p className="mb-2">
            A client intake form for a law firm is the standard record of every prospective client contact: who is calling, what happened, who else is involved and which deadlines apply.
          </p>
          <p className="m-0">
            Collect party names early. Under ABA Model Rule 1.18, information from a prospective client is protected even if the firm never takes the case, so the form supports a conflict check before the full story. Below: the core fields, then sections for personal injury, criminal defense and immigration.
          </p>
        </>
      }
    >
      <Prose>
        <h2>What is a law firm client intake form?</h2>
        <p>
          <strong>A law firm client intake form</strong> is the set of questions a firm asks every prospective client, in the same order, so that every first contact produces a comparable record. The form serves three jobs. It gives the conflicts check the party names it needs. It gives the attorney enough facts to decide whether to offer a consultation. It gives operations a record of where the inquiry came from. A good <strong>legal intake form</strong> works the same whether it is filled in by a receptionist, an intake specialist, an after-hours service or the client on a web page. That consistency matters because first contact is where firms lose people. According to the{' '}
          <a href={SRC.obj2025.url}>Oklahoma Bar Journal (September 2025)</a>, reporting Clio&apos;s 2024 Legal Trends Report, only 40% of firms answered a prospective client&apos;s call in 2024. The firms that do answer should come away with a complete record.
        </p>

        <h2>What fields belong on every legal client intake form?</h2>
        <p>
          <strong>Every legal client intake form needs the same core fields, whatever the practice area</strong>: contact details, who the client is, a short description of the matter, the other parties, the key dates, the source of the inquiry and any earlier lawyer. These fields support the conflict check and the first qualification decision. Keep each one short. The person taking the call should be able to complete the core section in a few minutes and then move to the practice-area section. The table lists each core field and the reason it is there.
        </p>
        <Table
          wide={false}
          caption="Core fields for every matter"
          head={['Field', 'Why it is on the form']}
          rows={[
            ['Full name of the caller', 'Identifies the contact and starts the record'],
            ['Best phone number and email', 'Taken first, in case the call drops'],
            ['Best time to call back', 'Lets the morning team reach the caller on the first try'],
            ['Client’s name, if the caller is calling for someone else', 'Family often call for a person who is injured, in custody or detained'],
            ['Relationship of caller to client', 'Matters for confidentiality and for who can make decisions'],
            ['Matter in brief, in the caller’s words', 'Two or three sentences for the attorney’s first read'],
            ['Every other party’s name', 'Opposing party, insurer, employer, co-defendant: feeds the conflict check'],
            ['Key dates', 'Incident, arrest, court or filing dates drive urgency'],
            ['State and county where it happened', 'Decides jurisdiction and which deadlines apply'],
            ['Prior or current lawyer on this matter', 'A current lawyer changes what the firm can discuss'],
            ['How they found the firm', 'Ties intake back to marketing spend'],
            ['Preferred language', 'Routes the callback to the right person'],
          ]}
        />

        <h2>What should a personal injury intake section include?</h2>
        <p>
          <strong>A personal injury intake section captures the incident, the injuries, the treatment, the insurance and the fault facts</strong>. Those five areas decide whether there is liability, damages and a source of recovery, which is what most personal injury firms screen for. The incident date matters more than anything else, because it starts the limitation period. Our{' '}
          <Link href="/states">personal injury rules by state</Link> page lists the periods for the states we cover. Ask about treatment early. A caller who has not seen a doctor may need to be told to get care, which is not legal advice. Record what the caller knows and leave the analysis to the attorney. Our full guide covers{' '}
          <Link href="/intake-playbook/what-should-be-on-a-pi-intake-form">what should be on a personal injury intake form</Link> field by field.
        </p>
        <Table
          wide={false}
          caption="Personal injury section"
          head={['Field', 'Why it is on the form']}
          rows={[
            ['Incident type and date', 'Auto, truck, premises, product or other; the date starts the limitation period'],
            ['Location', 'State, city and type of property; decides which rules apply'],
            ['Injuries and current treatment', 'Damages, and whether the caller has seen a doctor'],
            ['Police or incident report', 'Report number and agency, if one was made'],
            ['Insurance involved', 'The caller’s insurer, the other party’s insurer and any claim number'],
            ['What the caller says happened', 'Fault facts in the caller’s words, with no analysis'],
            ['Witnesses, photos or video', 'Evidence that may need to be preserved quickly'],
            ['Statements already given', 'Whether the caller has spoken to an insurer or signed anything'],
          ]}
        />

        <h2>What should a criminal defense intake section include?</h2>
        <p>
          <strong>A criminal defense intake section captures custody status, the charges, the court date and who is calling</strong>. Custody comes first, because a person in jail changes how fast the firm must act. Many criminal defense calls come from a spouse, parent or friend, so record the caller&apos;s relationship and whether the accused person can be reached. Ask for the facility name and the booking number if the person is in custody. Do not ask the caller to describe what the accused did. That keeps the record limited to what the firm needs to decide on a consultation, and the attorney gets the facts directly. Fee terms differ too: under{' '}
          <a href={SRC.rule15.url}>ABA Model Rule 1.5(d)(2)</a>, a lawyer may not charge a contingent fee for representing a defendant in a criminal case. See how Della handles these calls on our{' '}
          <Link href="/criminal-defense">criminal defense intake</Link> page.
        </p>
        <Table
          wide={false}
          caption="Criminal defense section"
          head={['Field', 'Why it is on the form']}
          rows={[
            ['In custody or released', 'Sets urgency; a person in custody is the most urgent call'],
            ['Facility name and booking number', 'Lets the attorney locate and contact the person'],
            ['Arrest date and arresting agency', 'Starts the timeline and identifies the case'],
            ['Charges as the caller understands them', 'DUI, drug, assault, other; recorded as said'],
            ['Next court date and court', 'Arraignment or bond hearing dates drive callback order'],
            ['Bond status and amount, if set', 'Often the first thing the family needs help with'],
            ['Prior or pending cases', 'Recorded as the caller reports them, for the attorney'],
            ['Who is paying', 'Family often pay the fee; recorded for the consultation'],
          ]}
        />

        <h2>What should an immigration intake section include?</h2>
        <p>
          <strong>An immigration intake section captures detention status, the next hearing or deadline, current immigration status and the documents the person has received</strong>. A detained family member is the most urgent immigration call. Record the person&apos;s full name as it appears on their documents, their country of birth and, if the caller knows it, their A-Number. Ask whether the person has received a Notice to Appear or any other notice, and the dates on it. Many callers are family members who know only part of the picture, so record what they know and mark what is unconfirmed. Preferred language matters here more than anywhere. Della takes immigration intake in English and Spanish, as set out on our{' '}
          <Link href="/immigration">immigration intake</Link> page.
        </p>
        <Table
          wide={false}
          caption="Immigration section"
          head={['Field', 'Why it is on the form']}
          rows={[
            ['Detained or not, and where', 'Detention sets urgency and decides where the attorney goes'],
            ['Full name as on documents, and country of birth', 'Needed to locate the person and the file'],
            ['A-Number, if known', 'The identifier used on immigration notices and in court'],
            ['Notices received and their dates', 'A Notice to Appear or other notice sets deadlines'],
            ['Next hearing date and court', 'Drives callback order'],
            ['Current status as the caller understands it', 'Recorded as said, for the attorney to confirm'],
            ['Earlier applications or prior lawyer', 'Avoids duplicate filings and shows history'],
            ['Family members in the US', 'Often relevant to the options the attorney will review'],
          ]}
        />

        <h2>What should a law firm intake form leave out?</h2>
        <p>
          <strong>A law firm intake form should leave out anything the firm does not need to decide whether to take the matter</strong>. That rule protects the caller and the firm. <a href={SRC.rule118.url}>ABA Model Rule 1.18</a> lets a firm screen a lawyer who heard disqualifying information only if the lawyer took reasonable measures to avoid hearing more than was reasonably necessary to decide on the representation. A short first-contact form is one of those measures. So leave out Social Security numbers, full medical histories, detailed admissions and copies of records until the consultation. Leave out any field that invites intake staff to give an opinion, such as &quot;Do you have a case?&quot; Intake records facts. The attorney gives advice. Finally, the form should state that completing it does not create a lawyer-client relationship.
        </p>

        <h2>Should the intake form be used on the phone or online?</h2>
        <p>
          <strong>The same intake form should work on the phone and online, with identical fields and the same record at the end</strong>. Phone intake gets more complete answers, because the person asking can follow up when an answer is vague. Online forms are convenient, but they wait for someone to read them. Clio&apos;s 2024 secret-shopper study, as summarized by{' '}
          <a href={SRC.civility2024.url}>2Civility (2024)</a>, also evaluated firms&apos; online intake forms and chatbots, alongside phone and email. Whichever channel a prospective client uses, the record should land in the same queue and be read the same day. Firms with a web form and a phone line should check that both feed one list. A caller who also filled in the form should end up as one record, not two.
        </p>

        <h2>How does the intake form feed the conflict check?</h2>
        <p>
          <strong>The intake form feeds the conflict check through the party-name fields</strong>, so those fields must be complete and spelled as the caller gives them. Capture every name: the opposing party, any company, any insurer, any co-defendant, and the client if someone else is calling. Record alternative spellings when the caller is unsure. The conflicts owner then searches every name against current clients, former clients and earlier prospective clients. Our{' '}
          <Link href="/intake-playbook/law-firm-client-intake-process">law firm client intake process flow chart</Link> shows where the conflict check sits and who owns it. Run it before the consultation and before the prospective client is asked for more detail. A clear result goes to qualification. A possible match goes to an attorney, who decides whether the firm can act.
        </p>

        <h2>How does Della take intake after hours?</h2>
        <p>
          <strong>Della takes a structured intake on every after-hours call and files the answers as a dossier</strong>. She answers in your firm&apos;s name nights, weekends and holidays. She takes the contact details first, then the questions for the caller&apos;s practice area, and she captures every party name for your conflict check. Each call is filed in the Call Della dashboard with a summary, an urgency score, the recording and the transcript. Urgent calls go to the attorney on call by email, and the rest arrive in a morning brief by 7am. Della never tells a caller whether they have a case, never quotes fees, and tells callers she is an AI if they ask. Immigration intake runs in English and Spanish. The other sections run in English.
        </p>
      </Prose>

      <DemoCTA>
        Bring your intake form to a demo. We will run a live Della call for your practice area and show you the dossier it produces.
      </DemoCTA>

      <FAQ items={FAQS} heading="Law firm intake forms: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
