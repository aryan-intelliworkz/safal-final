import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import Image from 'next/image';
import DynamicOrbitSection from '@/components/DynamicOrbitSection';

export default function StrategicPartnershipsPage() {
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

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Force Multipliers for Global<br />Scale</>}
        description="A Safal Partnership is not just an agreement—it is a strategic synthesis of infrastructure, distribution networks, and domain expertise capable of dominating new market verticals."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* A Borderless Innovation Network */}
      <section className="w-full py-16 md:py-24 max-w-[1240px] mx-auto px-5 md:px-10 lg:px-[60px] text-center">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            A Borderless Innovation Network
          </h2>
          <p className="font-body text-[#555] leading-relaxed max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
            Strategic scale requires global reach. Our partnership ecosystem spans across North America, the Middle East, and Asia. By aligning our deep-tech infrastructure with your domain expertise, we create a synchronized, borderless network capable of deploying enterprise-grade solutions anywhere in the world.
          </p>
        </div>
        <div className="w-full max-w-[900px] mx-auto opacity-50 flex items-center justify-center">
            {/* Dot World Map Placeholder */}
            <div className="w-full aspect-[21/9] border border-dashed border-[#CCC] rounded bg-white/40 flex items-center justify-center mix-blend-multiply">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase px-2 shadow-sm z-10 text-center bg-[#FFFBEE] rounded p-2 border border-[#EBEBEB]">
                 Dotted World Map Sketch
               </span>
            </div>
        </div>
      </section>

      {/* Collaborative Ecosystems */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            Collaborative Ecosystems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ecosystemCards.map((card, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 border border-[#EBE7D8] flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 bg-[#D54B26]"></div>
                <span className="text-[#888] font-semibold text-[10px] tracking-widest uppercase">{card.step}</span>
              </div>
              <div className="w-full aspect-[4/3] bg-[#00000005]/20 rounded mb-8 flex items-center justify-center">
                 <span className="text-xs text-[#666] tracking-widest uppercase font-semibold">{card.imgText}</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-lg mb-4">{card.title}</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Safal Partnership Matrix. */}
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

      {/* The DNA of a Strategic Ally */}
      <section className="w-full py-24 px-5 md:px-10 lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              The DNA of a Strategic Ally.
            </h2>
            <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium max-w-[700px] mx-auto">
              Our partners share our obsessive dedication to operational excellence and uncompromising integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#EAF0CB] p-8 md:p-10 rounded shadow-sm hover:-translate-y-1 transition-transform flex flex-col items-start h-full">
              <div className="text-[#5C6B2B] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">1</span> 
                Partner Standard
              </div>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center">
                <span className="text-xs text-[#5C6B2B] uppercase tracking-wider font-semibold">Illustration</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Uncompromising Velocity</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">
                We partner with organizations that prioritize hyper-scalability and rapid deployment. Speed to market and aggressive expansion form the core of our shared strategy.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#D1EAF4] p-8 md:p-10 rounded shadow-sm hover:-translate-y-1 transition-transform flex flex-col items-start h-full">
              <div className="text-[#2B6073] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">2</span> 
                Partner Standard
              </div>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center">
                 <span className="text-xs text-[#2B6073] uppercase tracking-wider font-semibold">Illustration</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Enterprise-Grade Integrity</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">
                We expect strict adherence to secure digital architectures, maintaining absolute data stability. Zero-trust validation and faultless operations govern every joint venture.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F2DACF] p-8 md:p-10 rounded shadow-sm hover:-translate-y-1 transition-transform flex flex-col items-start h-full">
              <div className="text-[#7A4B36] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
                 <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">3</span> 
                 Partner Standard
              </div>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center">
                 <span className="text-xs text-[#7A4B36] uppercase tracking-wider font-semibold">Illustration</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Disruptive Ambition</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">
                Incremental iterations are insufficient. We seek partners ready to completely subvert existing industry paradigms and establish lasting foundational dominance.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#D5E8D7] p-8 md:p-10 rounded shadow-sm hover:-translate-y-1 transition-transform flex flex-col items-start h-full">
              <div className="text-[#3A6B3D] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
                 <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">4</span> 
                 Partner Standard
              </div>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center">
                 <span className="text-xs text-[#3A6B3D] uppercase tracking-wider font-semibold">Illustration</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Shared Accountability</h3>
              <p className="font-body text-[#555] text-sm leading-[1.8]">
                True alliances are forged in the trenche. We construct immutable contracts and frameworks ensuring performance standards are relentlessly upheld by both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Architect the Future, Together */}
      <section className="relative w-full flex flex-col items-center overflow-hidden">
        {/* Top Cityscape section */}
        <div className="relative w-full h-[300px] md:h-[450px]">
           <div className="absolute inset-0 z-0 bg-[#E8EAE8]">
               <div className="w-full h-full flex flex-col items-center justify-center shadow-inner">
                   <span className="text-[#888] font-medium tracking-wider text-sm uppercase">Background Cityscape</span>
               </div>
           </div>
           {/* Fade into bottom */}
           <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#FFFBEE] to-transparent z-[1]" />
        </div>
        
        {/* Bottom text block */}
        <div className="relative z-10 w-full bg-[#FFFBEE] px-5 py-16 md:py-24 text-center">
           <div className="max-w-[1000px] mx-auto">
             <h2 className="font-heading font-semibold text-[#111] mb-8 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
               Let's Architect the Future, Together
             </h2>
             <p className="text-[#555] font-body leading-relaxed max-w-[850px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
               The most complex enterprise challenges cannot be solved in isolation. Whether you are an industry giant looking to modernize legacy systems, or an emerging tech leader looking to scale globally, the Safal Group is ready to align our infrastructure with your vision.
             </p>
           </div>
        </div>
      </section>
    </main>
  );
}
