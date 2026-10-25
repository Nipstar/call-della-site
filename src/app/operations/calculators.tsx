'use client';

// Client-side calculators. The formulas are also written out in each page's server HTML,
// so the method reads without JavaScript. Inputs start empty: no invented defaults.
import React, { useState } from 'react';

type Field = { id: string; label: string; hint: string; unit?: '%' | '$' };

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const useFields = (fields: Field[]) => {
  const [v, setV] = useState<Record<string, string>>({});
  const nums = fields.map((f) => Number(v[f.id]));
  const ready = fields.every((f, i) => v[f.id]?.trim() && Number.isFinite(nums[i]) && nums[i] >= 0 && (f.unit !== '%' || nums[i] <= 100));
  const inputs = (
    <div className="grid gap-5 md:grid-cols-2">
      {fields.map((f) => (
        <label key={f.id} htmlFor={f.id} className="block">
          <span className="block font-serif text-[16px] font-semibold text-[var(--ink)]">{f.label}</span>
          <span className="block font-serif text-[14px] text-[var(--ink-soft)] mb-2">{f.hint}</span>
          <span className="flex items-center border-[1.5px] border-[var(--rule)] bg-[var(--paper)] min-h-[48px]">
            {f.unit === '$' && <span className="pl-3 font-mono text-[var(--ink-soft)]" aria-hidden="true">$</span>}
            <input
              id={f.id}
              type="number"
              inputMode="decimal"
              min={0}
              max={f.unit === '%' ? 100 : undefined}
              step="any"
              value={v[f.id] ?? ''}
              onChange={(e) => setV((s) => ({ ...s, [f.id]: e.target.value }))}
              className="w-full bg-transparent px-3 py-3 font-mono text-[16px] text-[var(--ink)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
            />
            {f.unit === '%' && <span className="pr-3 font-mono text-[var(--ink-soft)]" aria-hidden="true">%</span>}
          </span>
        </label>
      ))}
    </div>
  );
  return { nums, ready, inputs };
};

const Shell = ({ title, children, result }: { title: string; children: React.ReactNode; result: React.ReactNode }) => (
  <form className="my-10 border-[1.5px] border-[var(--rule)] bg-[var(--paper-edge)] p-5 md:p-8" onSubmit={(e) => e.preventDefault()} aria-label={title}>
    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)] mb-6">{title}</p>
    {children}
    <output aria-live="polite" className="block mt-8 border-t-[1.5px] border-[var(--rule)] pt-6 font-serif text-[var(--ink)]">
      {result}
    </output>
  </form>
);

const MISSED: Field[] = [
  { id: 'missed', label: 'Missed calls per month', hint: 'From your phone log: voicemail, rang out or under 10 seconds' },
  { id: 'newShare', label: 'Share that are new-matter inquiries', hint: 'Exclude existing clients, vendors and spam', unit: '%' },
  { id: 'signRate', label: 'Sign rate for answered new inquiries', hint: 'Signed matters divided by new inquiries answered', unit: '%' },
  { id: 'fee', label: 'Average fee per signed matter', hint: 'Your average fee received, not the gross settlement', unit: '$' },
];

export const missedCallCost = (missed: number, newShare: number, signRate: number, fee: number) =>
  missed * (newShare / 100) * (signRate / 100) * fee;

export const MissedCallCalculator = () => {
  const { nums, ready, inputs } = useFields(MISSED);
  const [missed, newShare, signRate, fee] = nums;
  const month = ready ? missedCallCost(missed, newShare, signRate, fee) : 0;
  const matters = ready ? missed * (newShare / 100) * (signRate / 100) : 0;
  return (
    <Shell
      title="Missed-call cost calculator"
      result={
        ready ? (
          <>
            <span className="block text-[15px] text-[var(--ink-soft)]">Fees at risk from missed calls</span>
            <span className="block text-[32px] font-semibold">{usd(month)} a month</span>
            <span className="block text-[17px]">
              {usd(month * 12)} a year, about {matters.toFixed(1)} signed matters a month, if missed callers would sign at your normal rate.
            </span>
          </>
        ) : (
          <span className="text-[16px] text-[var(--ink-soft)]">Enter all four figures to see the result.</span>
        )
      }
    >
      {inputs}
    </Shell>
  );
};

const CPSC: Field[] = [
  { id: 'marketing', label: 'Marketing spend per month', hint: 'Ads, SEO, TV, lead vendors, referral marketing', unit: '$' },
  { id: 'payroll', label: 'Intake payroll per month', hint: 'Intake staff and manager, including benefits', unit: '$' },
  { id: 'software', label: 'Intake software and phones per month', hint: 'CRM, phone system, call tracking', unit: '$' },
  { id: 'afterHours', label: 'After-hours coverage per month', hint: 'Answering service, AI intake or overtime', unit: '$' },
  { id: 'signed', label: 'Signed cases per month', hint: 'New signed engagements in the same month' },
];

export const costPerSignedCase = (costs: number[], signed: number) => (signed > 0 ? costs.reduce((a, b) => a + b, 0) / signed : NaN);

export const CostPerSignedCaseCalculator = () => {
  const { nums, ready, inputs } = useFields(CPSC);
  const costs = nums.slice(0, 4);
  const signed = nums[4];
  const total = costs.reduce((a, b) => a + b, 0);
  const cpsc = ready ? costPerSignedCase(costs, signed) : NaN;
  return (
    <Shell
      title="Cost per signed case calculator"
      result={
        !ready ? (
          <span className="text-[16px] text-[var(--ink-soft)]">Enter all five figures to see the result.</span>
        ) : Number.isFinite(cpsc) ? (
          <>
            <span className="block text-[15px] text-[var(--ink-soft)]">Cost per signed case</span>
            <span className="block text-[32px] font-semibold">{usd(cpsc)}</span>
            <span className="block text-[17px]">
              Total acquisition cost {usd(total)} a month, of which intake (payroll, software and after-hours) is {usd(total - costs[0])}.
            </span>
          </>
        ) : (
          <span className="text-[16px] text-[var(--ink-soft)]">Signed cases must be more than zero.</span>
        )
      }
    >
      {inputs}
    </Shell>
  );
};
