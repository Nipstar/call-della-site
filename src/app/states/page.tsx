import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { Prose, Table, DemoCTA } from '@/app/intake-playbook/_ui';
import { pageMeta, page } from '@/data/pages';
import { stateData, III, MWL_FAULT, SOURCES } from '@/data/states';

const SLUG = '/states';
export const metadata = pageMeta(SLUG);

const FAQS = [
  { q: 'How many states are no-fault states?', a: 'Twelve states and Puerto Rico have no-fault auto insurance laws that restrict the right to sue, according to the Insurance Information Institute. Florida, Michigan, New Jersey, New York and Pennsylvania use a verbal threshold. Hawaii, Kansas, Kentucky, Massachusetts, Minnesota, North Dakota and Utah use a monetary threshold.' },
  { q: 'Which states still use contributory negligence?', a: 'Four states and the District of Columbia apply pure contributory negligence, according to the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025): Alabama, Maryland, North Carolina and Virginia. The District of Columbia applies a 51 percent bar for pedestrians, cyclists and other non-motorized road users.' },
  { q: 'What is the difference between a 50 percent bar and a 51 percent bar?', a: 'Under a 50 percent bar, as in Georgia, a plaintiff who is 50 percent or more at fault recovers nothing. Under a 51 percent bar, as in Texas, Florida and Illinois, a plaintiff recovers unless their fault is greater than 50 percent, so an even split still allows a reduced recovery.' },
  { q: 'Did New York change its comparative negligence rule?', a: 'Yes, for motor vehicle cases. New CPLR § 1411(b), signed May 26, 2026, bars a claimant in a no-fault motor vehicle injury suit whose fault is greater than the defendants’ combined fault. It applies to suits filed on or after that date. Other New York injury claims keep pure comparative fault.' },
  { q: 'Are these state guides legal advice?', a: 'No. They are reference material for law firm intake teams, checked against statute text, court publications and bar guidance on 25 October 2026. Call Della is not a law firm, and no attorney has reviewed these pages yet. Confirm any rule against the current statute before relying on it for a case.' },
];

export default function StatesIndex() {
  const p = page(SLUG);
  return (
    <ArticleLayout
      eyebrow="REFERENCE · STATES"
      title="Personal Injury Rules by State: SOL, Fault and No-Fault"
      slug={SLUG}
      date={p.datePublished}
      author="Andy Norman"
      breadcrumbs={[{ name: 'States', href: SLUG }]}
      citations={[III, MWL_FAULT, SOURCES.ny1411, SOURCES.nyBD]}
      tldr={
        <>
          Personal injury rules by state are the deadlines and fault rules that decide whether an injury claim is still viable. Among the six states below, the statute of limitations runs from two years (Texas, Florida, California, Illinois, Georgia) to three (New York). Two of the six, Florida and New York, are no-fault states, and four different fault rules apply.
        </>
      }
    >
      <Prose>
        <p className="!text-[15px] italic">
          These guides are for law firms. If you were injured, contact a licensed attorney in your state.
        </p>

        <h2>How do personal injury deadlines and fault rules compare by state?</h2>
        <p>
          <strong>The table compares the six states Call Della covers today on the three rules that most often decide an intake call.</strong> Each state name links to a full guide with the statute citations, shorter government-claim deadlines, damages caps and the state’s guidance on lawyers using AI.
        </p>
        <Table
          caption="Personal injury rules by state, checked 25 October 2026"
          head={['State', 'Statute of limitations', 'Fault rule', 'No-fault?']}
          rows={stateData.map((s) => [
            <a key={s.slug} href={`/states/${s.slug}`}>{s.name}</a>,
            <>
              {s.table.sol}
              <br />
              <span className="text-[13px] text-[var(--ink-soft)]">{s.sol.cite}</span>
            </>,
            s.table.fault,
            s.table.noFault,
          ])}
        />

        <h2>Which states are no-fault states?</h2>
        <p>
          <strong>Twelve states and Puerto Rico have no-fault auto insurance laws, according to the Insurance Information Institute.</strong> In those states every driver must carry <strong>personal injury protection</strong> (PIP), and injured people claim first against their own insurer, whoever caused the crash. The laws also restrict the right to sue for pain and suffering until an injury crosses a threshold.
        </p>
        <p>
          Florida, Michigan, New Jersey, New York and Pennsylvania use a verbal threshold, which describes the kind of injury that opens the courthouse door. Hawaii, Kansas, Kentucky, Massachusetts, Minnesota, North Dakota and Utah use a monetary threshold tied to medical expenses. New Jersey, Pennsylvania and Kentucky are also “choice” states, where drivers may reject the threshold and keep the right to sue. For intake, a no-fault state adds questions about the caller’s own policy and treatment dates, such as Florida’s 14-day PIP rule and New York’s serious injury threshold.
        </p>
        <p className="!text-[14px] !text-[var(--ink-soft)]">
          Source: <a href={III.url}>{III.name}</a>, {III.publisher}.
        </p>

        <h2>What is the difference between comparative and contributory negligence?</h2>
        <p>
          <strong>Under comparative negligence, an injured person’s own fault reduces their damages; under pure contributory negligence, any fault at all bars recovery.</strong> According to the Matthiesen, Wickert & Lehrer 50-state chart (updated April 2025), every US jurisdiction uses one of four systems: pure contributory negligence, pure comparative fault, modified comparative fault, or South Dakota’s slight/gross negligence system.
        </p>
        <p>
          Only four states and the District of Columbia keep pure contributory negligence: Alabama, Maryland, North Carolina and Virginia, with DC applying a 51 percent bar for pedestrians and cyclists. Pure comparative fault lets a plaintiff recover even when mostly at fault, reduced by their share. California follows it, and New York does for most claims. An intake call in a contributory state has to treat any admission of fault with particular care, because a single percentage point can end the claim.
        </p>
        <p className="!text-[14px] !text-[var(--ink-soft)]">
          Source: <a href={MWL_FAULT.url}>{MWL_FAULT.name}</a>, {MWL_FAULT.publisher} ({MWL_FAULT.year}).
        </p>

        <h2>What is modified comparative negligence, and where is the bar?</h2>
        <p>
          <strong>Modified comparative negligence reduces damages by the plaintiff’s share of fault until that share reaches a bar, and then recovery stops.</strong> The bar sits in one of two places, and the difference is a single percentage point.
        </p>
        <p>
          Under a 50 percent bar, a plaintiff who is 50 percent or more at fault recovers nothing. Georgia follows this rule. Under a 51 percent bar, the plaintiff recovers unless their fault is greater than 50 percent, so an even split still pays. Texas, Florida and Illinois follow this rule. Florida moved to it from pure comparative fault in 2023. New York added a version for motor vehicle suits filed on or after May 26, 2026, under new CPLR § 1411(b), which bars a claimant whose fault is greater than the defendants’ combined fault. For intake teams, the bar is why the caller’s account of the crash is recorded in their own words and never characterized on the call.
        </p>
        <p className="!text-[14px] !text-[var(--ink-soft)]">
          Sources: <a href={SOURCES.ny1411.url}>{SOURCES.ny1411.name}</a>; <a href={SOURCES.nyBD.url}>Barclay Damon (2026)</a>; the statutes cited in each state guide.
        </p>

        <h2>Why do state rules change the first intake call?</h2>
        <p>
          <strong>State rules decide which facts are urgent, so an intake call that ignores them collects the wrong details in the wrong order.</strong> A Florida caller on day ten without treatment, a New York caller hurt by a city bus 80 days ago, and a Georgia caller who says the other driver was drunk all need something different from the firm the next morning.
        </p>
        <p>
          The shortest clocks are rarely the statute of limitations. New York’s notice of claim on a municipality is due in 90 days. California and Texas give six months to present a claim against a public entity. Illinois gives one year to sue a local public entity. A good intake record captures the incident date, any public vehicle or property, the police report, the injuries and treatment, and both sides’ insurers. Our <a href="/case-types">personal injury case types</a> guides set out the checklist for auto, trucking and slip and fall matters.
        </p>

        <h2>How were these state guides checked?</h2>
        <p>
          <strong>Each rule in these guides was checked on 25 October 2026 against statute text, court publications, bar guidance or a named secondary source, and each is linked where it appears.</strong> Statute text comes from public mirrors of the official codes where the official site could not be read, and the mirror is named.
        </p>
        <p>
          Recording consent rules come from our <a href="/compliance/call-recording-consent-by-state">call recording consent by state</a> table, built from the Reporters Committee for Freedom of the Press guide. Call Della is not a law firm, and no attorney has reviewed these pages yet. If you spot an error, email us and we will correct it with a dated note. Della, Call Della’s intake specialist, applies these state facts on <a href="/personal-injury">after-hours personal injury intake</a> calls.
        </p>
      </Prose>

      <DemoCTA>
        See how Della handles your state’s deadlines on a live call. Book a demo and she will run an intake call for your practice area, then show you the dossier.
      </DemoCTA>

      <FAQ items={FAQS} heading="Personal injury rules by state: common questions" eyebrow="FAQ" />
    </ArticleLayout>
  );
}
