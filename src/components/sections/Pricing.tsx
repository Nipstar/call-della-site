import { Stamp } from '../Stamp';
import { openBookingModal } from '../BookingModal';

export const Pricing = () => {
  const tiers = [
    { name:"STANDARD · ENTRY", price:297, mins:"400", popular:false, features:["1 dedicated AI intake specialist","Call summaries + transcripts","Urgency classification","Email notifications","Standard email support"], cta:"Hire Standard" },
    { name:"PRACTICE · POPULAR", price:547, mins:"1,000", popular:true, features:["Everything in Standard","SMS notifications for urgent calls","Custom intake protocol per firm","Priority email + phone support","Recording archive (90 days)"], cta:"Hire Practice" },
    { name:"GROUP · MULTI-OFFICE", price:"Contact Sales", mins:"Custom", popular:false, features:["Everything in Practice","Multiple AI agents (different personas)","CRM webhook integration","Dedicated success manager","SLA guarantees"], cta:"Book a conversation" }
  ];
  return (
    <section id="pricing" className="px-8 pb-12 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {tiers.map(tier => (
          <div key={tier.name} className={`bg-[var(--paper)] p-[30px_26px] relative mt-3.5 ${tier.popular ? 'border-[2px] border-[var(--ink)]' : 'border-[1.5px] border-[var(--rule)]'}`}>
            <div 
              className="absolute top-[-1px] left-[22px] border-[1.5px] border-b-0 px-3 py-1 text-[9.5px] font-bold tracking-[0.16em] font-mono uppercase -translate-y-full"
              style={{
                background: tier.popular ? 'var(--ink)' : 'var(--paper-edge)',
                borderColor: tier.popular ? 'var(--ink)' : 'var(--rule)',
                color: tier.popular ? 'var(--paper)' : 'var(--ink)'
              }}
            >
              {tier.name}
            </div>
            {tier.popular && (
              <div className="absolute top-[18px] right-[18px] rotate-8">
                <Stamp kind="popular" />
              </div>
            )}
            <div className="flex items-baseline gap-1.5 mb-1.5">
              {typeof tier.price === 'number' ? (
                <>
                  <span className="text-[48px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-none">${tier.price}</span>
                  <span className="text-[11px] text-[var(--ink-soft)] font-mono tracking-[0.1em]">/MONTH</span>
                </>
              ) : (
                <span className="text-[32px] font-semibold text-[var(--ink)] font-serif tracking-[-0.02em] leading-none">{tier.price}</span>
              )}
            </div>
            <div className="text-[13px] text-[var(--ink-soft)] font-serif italic">Up to {tier.mins} minutes</div>
            <div className="h-[1px] bg-[var(--rule-soft)] my-5" />
            <div className="flex flex-col gap-2.5 mb-6 min-h-[160px]">
              {tier.features.map(f => (
                <div key={f} className="flex gap-2.5 items-start">
                  <div className="w-3.5 h-3.5 border border-[var(--stamp-green)] flex items-center justify-center mt-0.5 shrink-0">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--stamp-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 12 4 9"/>
                    </svg>
                  </div>
                  <span className="text-[13.5px] text-[var(--ink)] font-serif leading-[1.4]">{f}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={openBookingModal}
              className="w-full py-3 border-[1.5px] border-[var(--ink)] text-[11.5px] font-bold tracking-[0.14em] font-mono uppercase cursor-pointer"
              style={{
                background: tier.popular ? 'var(--ink)' : 'transparent',
                color: tier.popular ? 'var(--paper)' : 'var(--ink)'
              }}
            >
              {tier.cta} →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-[10px] text-[var(--ink-soft)] font-mono tracking-[0.14em] uppercase">
        USAGE OVER PLAN BILLED AT $0.50 PER MINUTE · NO SURPRISES · CANCEL ANY TIME
      </div>
    </section>
  );
};
