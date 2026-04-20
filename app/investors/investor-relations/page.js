import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';
import DynamicOrbitSection from '@/components/DynamicOrbitSection';

export default function InvestorRelationsPage() {
  const architectureCards = [
    { title: 'Aggressive Trajectory', color: 'bg-[#EAEADC]', desc: 'Sustained compound revenue growth. We aggressively acquire market share through proprietary IP and automated infrastructure deployments.' },
    { title: 'Disciplined Allocation', color: 'bg-[#DDEEF4]', desc: 'A fortress balance sheet. We deploy capital with mathematical precision, prioritizing ventures with high EBITDA margins and predictable cash flow generation.' },
    { title: 'Strategic Diversification', color: 'bg-[#F2E5D5]', desc: 'Our interconnected divisions provide a hedge against isolated volatility. The dynamic cross-pollination of our portfolio mitigates downside exposure.' },
    { title: 'Transparent Governance', color: 'bg-[#E1EDDB]', desc: 'We build systems that handle billions in global capital. Absolute transparency, strict privacy, and unwavering integrity are non-negotiable.' }
  ];

  const financialData = [
    { title: 'Quarterly Earnings', desc: 'Download comprehensive financial models, transcripts, and quarterly performance metrics.' },
    { title: 'Corporate Governance', desc: 'Review the mandates and bylaws that ensure structural accountability at the executive level.' },
    { title: 'Annual Reports', desc: 'Our extensive yearly performance review. Audited financials, operational highlights.' },
    { title: 'ESG Disclosures', desc: 'Tracking our path to a carbon-neutral footprint across our global development hubs.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Architecting Exponential<br />Value</>}
        description="We are not a traditional holding entity. We engineer hyper-scalable industry dominance by blending deep engineering talent with macro-economic capitalization. We architect the infrastructure that allows our portfolio companies to outpace the market."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Capitalizing on the Future */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col-reverse md:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full md:w-7/12 flex flex-col items-start pr-0 md:pr-8">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
              Capitalizing on the Future.
            </h2>
            <div className="space-y-6">
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                At the Safal Group, our central thesis is simple: hardware dependency is shrinking, and software infrastructure is compounding. We isolate inefficiencies in legacy industry sectors—like enterprise logistics or multi-vertical manufacturing—and we fund the technology pods building the algorithmic solutions.
              </p>
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                By converting traditional CapEx into optimized digital architectures, we rapidly expand operational profit margins across our portfolio. Whether it is incubating a SaaS startup in India or acquiring a legacy automation firm in the United States, our investment methodology guarantees sustained, exponential value creation.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex flex-col items-center justify-center">
            <div className="relative w-[90%] max-w-[350px] aspect-[3/4] flex items-center justify-center border border-dashed border-[#CCC] rounded opacity-70">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase bg-[#FFFBEE] px-2 shadow z-10 text-center">
                 Hourglass Graphic Sketch<br/>Placeholder
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Architecture of Our Value */}
      <section className="w-full py-16 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            The Architecture of Our Value.
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium">Strict strategic parameters dictating the financial allocation of capital across divisions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureCards.map((card, i) => (
            <div key={i} className={`${card.color} p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start`}>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-[#666] text-xs font-semibold uppercase text-center px-4">DNA Sketch {i+1}</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">{card.title}</h3>
              <p className="font-body text-[#555] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expanding Global Market Share. */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full md:w-5/12 flex flex-col">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Expanding Global Market Share.
            </h2>
            <div className="space-y-6">
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 Our operational hubs in India, the UAE, and the USA are strategically positioned to capitalize on varied macro-economic cycles. When North American enterprise software demand shifts, our UAE and Indian subsidiaries dynamically reallocate resources to capture emerging markets.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
               </p>
            </div>
          </div>
          <div className="w-full md:w-7/12 flex items-center justify-center">
             <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#CCC] rounded-full opacity-60">
                 <span className="font-body text-xs text-[#888] tracking-widest uppercase bg-[#FFFBEE] px-4 text-center">
                   Three Leaf Grid Collage<br/>(Business Market Version)
                 </span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Safal Economic Moat */}
      <DynamicOrbitSection>
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
          The Safal Economic Moat.
        </h2>
        <p className="font-body text-[#555] leading-relaxed mb-8" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          Our proprietary IP usage, combined with absolute engineering excellence, creates a barrier to entry that competitors cannot replicate. We possess the human capital of a massive development agency, combined with the strategic agility of a venture capital fund. This dual-threat paradigm creates recurring revenue engines highly resistant to market disruptions.
        </p>
        <button className="bg-[#D54B26] text-white px-10 py-3.5 font-body font-medium hover:bg-[#111] transition-colors rounded">
          Download Earnings Presentation
        </button>
      </DynamicOrbitSection>

      {/* Financial Data & Reporting */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            Financial Data & Reporting.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {financialData.map((item, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="w-full aspect-square max-w-[200px] mb-8 relative mx-auto lg:mx-0 flex flex-col items-center justify-center border border-dashed border-[#CCC] rounded">
                 <span className="text-[#666] text-xs uppercase tracking-wider text-center">Sketch Icon</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#D54B26]"></div>
                 <h4 className="font-heading font-semibold text-[#111] text-[17px] tracking-wide">{item.title}</h4>
              </div>
              <p className="font-body text-[#555] text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
