import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="PILLAR B CLUSTER · OPERATIONS"
      title="Cost per signed case: How to actually calculate it"
      author="Andy Norman"
      date="20 MAY 2026"
      tldr={
        <>
          <p className="mb-2">Most PI firms calculate Cost Per Lead (CPL) and ignore Cost Per Signed Case. This masks the catastrophic operational drag of bad intake.</p>
          <p className="m-0">Your true cost includes marketing spend, intake payroll, software overhead, and the opportunity cost of mis-triaged leads.</p>
        </>
      }
    >
      <h2>The illusion of Cost Per Lead</h2>
      <p>
        Personal injury marketing agencies love reporting on Cost Per Lead (CPL). If they generate 100 leads for $10,000, your CPL is $100. It looks great on a dashboard. But a lead doesn't pay the bills; a retained case does.
      </p>
      <p>
        If your intake department is slow, or if they fail to properly screen out bad cases, those 100 leads might result in only 2 retained cases. Suddenly, your true marketing cost isn't $100—it's $5,000 per signed case.
      </p>

      <h2>The True Cost Per Signed Case Formula</h2>
      <p>
        To find your actual Cost Per Signed Case, you must calculate the Total Acquisition Cost (TAC) and divide it by Retained Cases.
      </p>
      
      <p className="bg-[var(--paper-edge)] p-6 font-mono text-[13px] border-[1.5px] border-[var(--rule)]">
        TAC = Marketing Spend + Intake Payroll + Intake Software + After-Hours Service Costs
        <br/><br/>
        Cost Per Signed Case = TAC / Number of Retained Cases
      </p>

      <h3>Step 1: Calculate Intake Payroll</h3>
      <p>
        If you have two full-time intake specialists making $50,000 each, plus a manager making $75,000, your monthly intake payroll is roughly $14,500. This must be factored into your acquisition cost.
      </p>

      <h3>Step 2: Calculate Software and Service Overhead</h3>
      <p>
        Add up your CRM licensing (Lead Docket, Filevine, etc.), your telephony costs, and whatever human answering service you use for nights and weekends. Let's assume this is $2,500/month.
      </p>

      <h3>Step 3: Run the Math</h3>
      <p>
        If your monthly marketing spend is $30,000, your Total Acquisition Cost is $47,000. If you sign 15 cases that month, your True Cost Per Signed Case is <strong>$3,133</strong>.
      </p>

      <h2>How Della handles this</h2>
      <p>
        Call Della drastically reduces your Total Acquisition Cost by eliminating the need for expensive, per-minute human answering services, and by pre-qualifying leads before your in-house team spends an hour chasing them down. By delivering triage-ready dossiers, Della ensures your human payroll is spent closing high-value cases, not screening unqualified leads.
      </p>
      
      <p>
        <a href="/pricing">View Della's transparent pricing models →</a>
      </p>
    </ArticleLayout>
  );
}
