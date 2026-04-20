import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import Image from 'next/image';
import DynamicOrbitSection from '@/components/DynamicOrbitSection';

export default function BecomePartnerPage() {
  const ecosystemCards = [
    {
      step: '01 / TECH',
      title: 'Technology Integrations',
      desc: 'Integrate your backend infrastructure directly into our proprietary platforms for unified, massive-scale deployment models designed for rapid enterprise sync.',
      imgText: 'Scales Icon'
    },
    {
      step: '02 / GO-TO-MARKET',
      title: 'Channels & Go-To-Market',
      desc: 'Leverage our established global footprint to accelerate product adoption in the US, UAE, and Indian subcontinents. Co-sell and distribute through our primary global vendor ecosystem.',
      imgText: 'Padlock Icon'
    },
    {
      step: '03 / VENTURES',
      title: 'Venture & Co-Innovation',
      desc: 'Partner directly with our Innovation Labs to develop disruptive IP and co-fund new tech stacks. We invest in the platforms that will redefine our shared industries.',
      imgText: 'Cube Icon'
    },
    {
      step: '04 / EXPERTS',
      title: 'Implementation Experts',
      desc: 'Become a certified agency partner. Deploy Safal architectures for your own clientele. Receive comprehensive support and lead-generation routing from our internal teams.',
      imgText: 'Rings Icon'
    }
  ];

  const blueprintCards = [
    {
      step: '01',
      title: 'Initiation',
      desc: 'Initial alignment on technical infrastructure and joint market strategy. We establish clear KPIs and mutual objectives before finalizing any strategic integration.'
    },
    {
      step: '02',
      title: 'Architecture',
      desc: 'Our engineering and infrastructure teams will directly integrate with their counterparts to define integration protocols and custom deployment strategies.'
    },
    {
      step: '03',
      title: 'Integration',
      desc: 'The integration is executed. Our operations directors ensure seamless syncing between both tech stacks with absolutely no latency and zero downtime transitions.'
    },
    {
      step: '04',
      title: 'Global Scaling',
      desc: 'Rapid global deployment against shared objectives. Once integrated, our joint GTM forces execute simultaneous campaigns across identified verticals.'
    }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Force Multipliers for Global<br />Scale</>}
        description="A Safal Partnership is not just an agreement—it is a strategic synthesis of infrastructure, distribution networks, and domain expertise capable of dominating new market verticals."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* A Borderless Innovation Network (Reused) */}
      <section className="w-full py-16 md:py-24 max-w-[1240px] mx-auto px-5 md:px-10 lg:px-[60px] text-center">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            A Borderless Innovation Network
          </h2>
          <p className="font-body text-[#555] leading-relaxed max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
            Strategic scale requires global reach. Our partnership ecosystem spans across North America, the Middle East, and Asia. By aligning our deep-tech infrastructure with your domain expertise, we create a synchronized, borderless network capable of deploying enterprise-grade solutions anywhere in the world.
          </p>
        </div>
        <div className="w-full max-w-[900px] mx-auto flex items-center justify-center opacity-60">
            {/* Dot World Map Placeholder */}
            <div className="w-full aspect-[21/9] border border-dashed border-[#CCC] rounded bg-[#FFFBEE]/40 flex items-center justify-center mix-blend-multiply">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase px-2 shadow-sm z-10 text-center bg-white/60 backdrop-blur rounded p-2 border border-[#EBEBEB]">
                 Dotted World Map Sketch
               </span>
            </div>
        </div>
      </section>

      {/* Collaborative Ecosystems (Reused) */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            Collaborative Ecosystems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ecosystemCards.map((card, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 border border-[#E1DBCA] flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 bg-[#D54B26]"></div>
                <span className="text-[#888] font-semibold text-[10px] tracking-widest uppercase">{card.step}</span>
              </div>
              <div className="w-full aspect-[4/3] bg-black/[0.02] border border-[#F0F0F0] rounded mb-8 flex items-center justify-center">
                 <span className="text-xs text-[#666] tracking-widest uppercase font-semibold">{card.imgText}</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-lg mb-4">{card.title}</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Safal Partnership Matrix. (Reused) */}
      <DynamicOrbitSection>
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
          The Safal<br />Partnership Matrix.
        </h2>
        <p className="font-body text-[#555] leading-relaxed mb-10 mx-auto max-w-[550px]" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          A partnership with the Safal Group is not transactional—it is deeply symbiotic. We leverage our robust technical architecture and enterprise relationships to forge high-impact market monopolies. Find out exactly where you fit in our global matrix today.
        </p>
        <button className="bg-[#D54B26] text-white px-8 py-3.5 font-body font-medium hover:bg-[#111] transition-colors rounded">
          Apply to Partner Network
        </button>
      </DynamicOrbitSection>

      {/* The Alignment Blueprint */}
      <section className="w-full py-24 px-5 md:px-10 lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              The Alignment Blueprint.
            </h2>
            <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium max-w-[800px] mx-auto">
              High-value partnerships deserve rigorous planning and execution. This is how we onboard strategic partners into our operational ecosystem securely and flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-[#E1DBCA]">
            {blueprintCards.map((card, idx) => (
              <div key={idx} className="bg-transparent flex flex-col items-center text-center p-8 lg:p-12 relative overflow-hidden group">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#D54B26]"></div>
                  <span className="text-[#D54B26] font-semibold text-[10px] tracking-widest uppercase">Phase</span>
                </div>
                <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">{card.title}</h3>
                <p className="font-body text-[#555] text-sm leading-[1.8] mb-12">
                  {card.desc}
                </p>
                {/* Dashed semi-arch */}
                <div className="absolute -bottom-16 w-[180px] h-[180px] rounded-full border border-dashed border-[#D54B26]/30 flex items-start justify-center group-hover:border-[#D54B26]/80 transition-colors">
                   <div className="mt-[20px] bg-[#FFFBEE] w-7 h-7 rounded-full border border-[#D54B26] flex items-center justify-center text-[10px] text-[#D54B26] font-bold">
                     {card.step}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 md:py-24 max-w-[1000px] mx-auto px-5 md:px-10 lg:px-[60px] border-t border-[#E1DBCA]">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Submit your corporate details to our Alliance Directors
          </h2>
        </div>

        <form className="space-y-8 font-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="space-y-8">
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Full Name</label>
                <input type="text" placeholder="e.g. John Doe" className="w-full bg-transparent outline-none text-[#555] text-[15px] placeholder:text-[#999]" />
              </div>
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Phone Number</label>
                <input type="text" placeholder="e.g. +1 (800) 000-0000" className="w-full bg-transparent outline-none text-[#555] text-[15px] placeholder:text-[#999]" />
              </div>
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Website URL</label>
                <input type="text" placeholder="e.g. www.safal.com" className="w-full bg-transparent outline-none text-[#555] text-[15px] placeholder:text-[#999]" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Corporate Email</label>
                <input type="email" placeholder="e.g. info@safal-group.com" className="w-full bg-transparent outline-none text-[#555] text-[15px] placeholder:text-[#999]" />
              </div>
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Company Name</label>
                <input type="text" placeholder="e.g. Safal Group" className="w-full bg-transparent outline-none text-[#555] text-[15px] placeholder:text-[#999]" />
              </div>
              <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative">
                <label className="text-[#333] font-semibold text-sm block mb-1">Partnership Type</label>
                <select className="w-full bg-transparent outline-none text-[#555] text-[15px] appearance-none cursor-pointer">
                  <option value="" disabled selected>e.g. Vendor</option>
                  <option value="vendor">Vendor</option>
                  <option value="agency">Agency Partner</option>
                  <option value="integrator">Systems Integrator</option>
                  <option value="investor">Strategic Investor</option>
                </select>
                <div className="absolute right-0 bottom-2 pointer-events-none text-[#999]">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full border-b border-[#CCC] pb-2 focus-within:border-[#D54B26] transition-colors relative pt-4">
            <label className="text-[#333] font-semibold text-sm block mb-1">Executive Summary</label>
            <p className="text-xs text-[#888] mb-3">Briefly detail your primary value-proposition and the scope of partnership you envision with Safal Group.</p>
            <textarea rows="3" className="w-full bg-transparent outline-none text-[#555] text-[15px] resize-none"></textarea>
          </div>

          <div className="pt-6">
            <button type="button" className="bg-transparent border border-[#D54B26] text-[#D54B26] px-10 py-3 font-semibold text-sm tracking-wide rounded-sm hover:bg-[#D54B26] hover:text-white transition-colors">
              Submit
            </button>
          </div>
        </form>
      </section>

    </main>
  );
}
