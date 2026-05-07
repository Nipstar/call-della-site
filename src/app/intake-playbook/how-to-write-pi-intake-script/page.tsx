import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR A CLUSTER · INTAKE PLAYBOOK"
      title="How to write a PI intake script (that doesn't sound like an interrogation)"
      author="Andy Norman"
      date="16 MAY 2026"
      tldr={
        <>
          <p className="mb-2">A great intake script balances empathy with aggressive fact-finding. If your script feels like an interrogation, traumatised callers will hang up. If it's too conversational, you'll miss the statute of limitations exposure.</p>
          <p className="m-0">We outline the four-stage "E.F.F.E." framework for intake scripts: Empathy, Facts, Fault, Evidence.</p>
        </>
      }
    >
      <h2>The problem with most intake scripts</h2>
      <p>
        Callers reaching out to a personal injury firm have just experienced one of the worst days of their lives. When an intake specialist immediately barks, "What is your date of birth and insurance policy number?", the caller's defense mechanisms go up. 
      </p>
      <p>
        Conversely, if the specialist lets the caller ramble for 45 minutes about how their back hurts, the firm loses money on operational drag and fails to capture the core legal facts.
      </p>

      <h2>The E.F.F.E. Framework</h2>
      <p>
        The best PI firms in the country script their intake around four distinct phases.
      </p>

      <h3>Phase 1: Empathy (Minutes 0-1)</h3>
      <p>
        The script must mandate an immediate, human acknowledgment of the trauma. 
        <br/><em>Example Script:</em> "I am so sorry you are going through this, but you've called the right place. We are going to help you. Before we get into the details, are you safe right now, and do you need an ambulance?"
      </p>

      <h3>Phase 2: Facts (Minutes 1-3)</h3>
      <p>
        Establish the bare operational facts. Date of incident, location, and parties involved. This immediately flags statute of limitations issues and jurisdictional mismatch.
        <br/><em>Example Script:</em> "To make sure our attorneys can review this immediately, I need to capture a few quick details. What date did the incident happen, and in what city?"
      </p>

      <h3>Phase 3: Fault (Minutes 3-5)</h3>
      <p>
        This is where the script pivots to liability.
        <br/><em>Example Script:</em> "Can you walk me through exactly what happened leading up to the collision? Did the police arrive, and did they issue a ticket to the other driver?"
      </p>

      <h3>Phase 4: Evidence (Minutes 5-7)</h3>
      <p>
        Lock down the recovery sources and medical reality.
        <br/><em>Example Script:</em> "Have you sought medical treatment yet? Did you go to the ER or urgent care? Has the other party's insurance company tried to contact you?"
      </p>

      <h2>Edge cases and state variations</h2>
      <p>
        If your firm operates in a no-fault state (like Florida), the script must include a mandatory check for the 14-day PIP rule. If the caller hasn't seen a doctor and it's day 13, the script needs an emergency escalation protocol to get them into a clinic immediately.
      </p>

      <h2>How Della handles this</h2>
      <p>
        Della's core intelligence is built strictly on the E.F.F.E. framework. Her AI allows her to inject Phase 1 empathy organically, adjusting her tone based on the caller's distress level. If the caller jumps straight to Phase 3 (Fault) in their opening sentence, Della intelligently logs that information without forcing them to repeat it, making the process feel like a seamless conversation rather than a rigid questionnaire.
      </p>
      
      <p>
        <a href="/">Learn more about Della's conversational intelligence →</a>
      </p>
    </ArticleLayout>
  );
}
