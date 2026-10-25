import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaperTexture } from "@/components/PaperTexture";
import { HomeHero } from "@/components/sections/HomeHero";
import { VerticalPicker } from "@/components/sections/VerticalPicker";
import { HowDellaWorks } from "@/components/sections/HowDellaWorks";
import { SecurityStrip } from "@/components/sections/SecurityStrip";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { BrandFAQ } from "@/components/sections/BrandFAQ";
import { HomeFinalCTA } from "@/components/sections/HomeFinalCTA";
import { Headline } from "@/components/Typography";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/data/pages";
import { graph, serviceNode } from "@/lib/schema";
import { CATEGORY_DEFINITION } from "@/lib/plans";
import { MissedCallSection } from "@/components/sections/MissedCallSection";

export const metadata: Metadata = pageMeta("/");

const OBA_URL = "https://www.okbar.org/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/";
const LMNC_URL = "https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients";

const link = "underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-[var(--ink)]";
const para = "text-[17px] text-[var(--ink)] font-serif leading-[1.65] m-0";

const Passage = ({ id, q, children }: { id: string; q: string; children: React.ReactNode }) => (
  <section id={id} className="px-4 md:px-8 py-14 max-w-[760px] mx-auto">
    <Headline size={34} maxWidth={720}>{q}</Headline>
    <div className="mt-6 flex flex-col gap-4">{children}</div>
  </section>
);

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={graph(serviceNode({ path: "/", name: "Call Della after-hours legal intake", description: CATEGORY_DEFINITION }))} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HomeHero />

          <Passage id="what-is-ai-legal-intake" q="What is AI legal intake?">
            <p className={para}>
              <strong>AI legal intake</strong> is a voice agent that answers a law firm&rsquo;s phone and runs the
              first-call intake questions, then hands a structured record to the firm&rsquo;s attorneys. Call Della
              applies AI legal intake to the hours a firm is closed: nights, weekends and holidays. Della is the intake
              specialist on that shift.
            </p>
            <p className={para}>
              Della takes the call in your firm&rsquo;s name, asks what happened and when, captures who is calling and
              how to reach them, and notes anything with a deadline. She does not take a message and hang up. Each call
              becomes a <strong>dossier</strong> in the Call Della dashboard with a summary, an urgency score, the
              recording and the transcript.
            </p>
            <p className={para}>
              Call Della covers three practice areas, each with its own intake flow:{" "}
              <a href="/personal-injury" className={link}>after-hours intake for personal injury firms</a>,{" "}
              <a href="/criminal-defense" className={link}>a 24/7 criminal defense answering service</a> and{" "}
              <a href="/immigration" className={link}>an immigration attorney answering service in English and Spanish</a>.
            </p>
          </Passage>

          <Passage id="why-after-hours" q="Why do law firms lose callers after hours?">
            <p className={para}>
              Law firms lose callers after hours because most calls never reach a person. According to{" "}
              <a href={OBA_URL} className={link}>the Oklahoma Bar Journal (September 2025)</a>, Clio&rsquo;s 2024 Legal
              Trends Report found that only 40% of law firms answered a prospective client&rsquo;s call, down from 56% in
              2019, and 48% of firms were unreachable by phone.
            </p>
            <p className={para}>
              An earlier ABA Law Practice Division study, summarized by{" "}
              <a href={LMNC_URL} className={link}>Lawyers Mutual of North Carolina</a>, found that fewer than 10% of
              prospective clients ever spoke to a lawyer when they called a firm. Those studies cover business hours too.
              After the office closes, the default is voicemail, and an injured or arrested caller rarely waits for a
              callback.
            </p>
            <p className={para}>
              Call Della answers those calls instead. The caller speaks to Della, the firm gets the facts, and the
              attorney on call gets an email when a matter cannot wait until morning. See the{" "}
              <a href="/operations" className={link}>law firm intake operations guides</a> for the cost side of missed calls.
            </p>
          </Passage>

          <MissedCallSection />

          <VerticalPicker />

          <HowDellaWorks />

          <Passage id="ai-disclosure" q="Does Della tell callers she is an AI?">
            <p className={para}>
              Yes. Della never claims to be human, and when a caller asks, she says she is an AI intake specialist
              working for the firm. She answers in your firm&rsquo;s name and gives her own name, so the caller knows
              who has the call and that an attorney will follow up.
            </p>
            <p className={para}>
              Della also stays inside the limits of intake. She does not give legal advice, quote fees or promise
              representation. Every call carries the recording disclosure set for your state. Firms
              weighing these questions can read the{" "}
              <a href="/compliance" className={link}>AI legal intake compliance guide</a>, including{" "}
              <a href="/compliance/aba-formal-opinion-512-explained" className={link}>ABA Formal Opinion 512 explained for intake</a>{" "}
              and <a href="/compliance/call-recording-consent-by-state" className={link}>call recording consent by state</a>.
            </p>
          </Passage>

          <SecurityStrip />
          <PricingTeaser />
          <BrandFAQ />
          <HomeFinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
