import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function StoryVisionPage() {
  const dnaCards = [
    { title: 'Relentless Quality', color: 'bg-[#EAEADC]', desc: 'We build enterprise solutions with uncompromising precision, ensuring every system operates flawlessly at scale.' },
    { title: 'Absolute Integrity', color: 'bg-[#D2EAF4]', desc: 'Our architectural frameworks are built on trust, securing data with impenetrable reliability and ethical precision.' },
    { title: 'Radical Innovation', color: 'bg-[#F2E5D5]', desc: 'We systematically dissect operational bottlenecks to engineer solutions that redefine modern industry standards.' },
    { title: 'Working as One Team', color: 'bg-[#E1EDDB]', desc: 'A unified collective of domain experts and master engineers executing together to accelerate global enterprises.' }
  ];

  const valTabs = [
    { title: 'Data & Analytics', active: true },
    { title: 'Cloud Architecture', active: false },
    { title: 'AI / Machine Learning', active: false },
    { title: 'Enterprise Systems', active: false }
  ];

  const globalImpact = [
    { title: 'Sustained Capital', desc: 'Ensuring your strategic investments generate continuous scalable returns via resilient software.' },
    { title: 'Uninterrupted UI / UX', desc: 'We craft human-centric application interfaces designed for zero latency and absolute clarity.' },
    { title: 'Data Infrastructure', desc: 'Deploying unified ecosystems that operate flawlessly across borders and jurisdictions.' },
    { title: 'Secure Deployment', desc: 'Military-grade encryption algorithms protecting your operational intelligence globally.' }
  ];

  const architectureGrowth = [
    { step: '01', title: 'Discovery & Strategy', desc: 'We begin by conducting a forensic audit of your existing operational challenges.' },
    { step: '02', title: 'Design & Prototype', desc: 'Our engineers draft robust architectural schemas prioritizing automation and logic.' },
    { step: '03', title: 'Development & Integration', desc: 'The build phase executes strict coding paradigms running parallel to your legacy systems.' },
    { step: '04', title: 'Deployment & Iteration', desc: 'Flawless launch parameters are monitored and continuously optimized by intelligent agents.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Architecting the Digital<br />Backbone of Tomorrow.</>}
        description="We systematically solve complex enterprise challenges by designing intelligent, scalable, and secure technology ecosystems that power the modern global economy."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Forged in India Section */}
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Forged in India. Scaled for the World.
        </h2>
        <p className="font-body text-[#555] leading-relaxed max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          Safal Infosoft Limited was built on the philosophy that deep operational competence combined with absolute engineering excellence could solve the hardest problems facing modern enterprises. From our roots navigating complex local networks to orchestrating global infrastructure rollouts, we execute architectural miracles every day for partners worldwide.
        </p>

        {/* Network Nodes Image Placeholder */}
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] mt-12 bg-transparent overflow-hidden flex items-center justify-center opacity-70">
           <span className="text-[#888] tracking-widest text-sm uppercase">Network Nodes Graphic</span>
           {/* Fallback wireframe drawing */}
           <div className="absolute inset-0 border border-dashed border-[#CCC] rounded-lg"></div>
        </div>
      </section>

      {/* The DNA of Our Culture */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            The DNA of Our Culture.
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium">The principles governing our execution</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dnaCards.map((card, i) => (
            <div key={i} className={`${card.color} p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start`}>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-[#666] text-xs font-semibold uppercase">Sketch Image {i+1}</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">{card.title}</h3>
              <p className="font-body text-[#555] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value-Creation Architecture */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            The Value-Creation Architecture.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Tabs */}
          <div className="w-full lg:w-4/12 flex flex-col">
            {valTabs.map((tab, idx) => (
              <div key={idx} className={`py-6 border-b border-[#E1DBCA] cursor-pointer group flex items-center gap-4`}>
                <span className={`font-heading font-semibold text-lg md:text-xl transition-colors ${tab.active ? 'text-[#D54B26]' : 'text-[#888] group-hover:text-[#111]'}`}>
                  {tab.title}
                </span>
              </div>
            ))}
          </div>

          {/* Center Isometric Image */}
          <div className="w-full md:w-8/12 lg:w-4/12 flex justify-center">
             <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center">
                <span className="text-[#888] tracking-widest text-sm uppercase">Isometric Layers</span>
                <div className="absolute inset-0 border border-dashed border-[#D54B26]/30"></div>
             </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-4/12">
            <div className="bg-white/50 p-8 rounded border border-[#E1DBCA] relative">
              <div className="absolute top-8 -left-2 w-4 h-4 bg-[#D54B26]/20 rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-[#D54B26] rounded-full"></div>
              </div>
              <p className="font-body text-[#555] leading-relaxed text-sm md:text-base">
                Our infrastructure unifies structured and unstructured enterprise intelligence, ensuring zero latency data retrieval. This active layer feeds directly into automated decision engines that push real-time analytics to the execution perimeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driven by Intelligence */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
         {/* Circular Background Grid Placeholder */}
         <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-[800px] h-[800px] rounded-full border border-[#D54B26]/30"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[#CCC]"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#D54B26]/20"></div>
         </div>

         <div className="relative z-10 text-center max-w-[600px] px-5 bg-[#FFFBEE]/80 backdrop-blur-sm py-12">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              Driven by<br/>Intelligence.
            </h2>
            <p className="font-body text-[#555] leading-relaxed mb-8">
              Autonomy is not an outcome; it is the fundamental baseline. We engineer automated cognitive loops into every software product.
            </p>
            <button className="bg-[#D54B26] text-white px-8 py-3.5 font-body font-medium hover:bg-[#111] transition-colors rounded">
              Connect With Us
            </button>
         </div>

         {/* Orbiting Elements Placeholders */}
         <div className="absolute top-[20%] left-[20%] w-20 h-20 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded">Box Icon</div>
         <div className="absolute top-[30%] right-[25%] w-24 h-24 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded-full">Compass</div>
         <div className="absolute bottom-[20%] left-[30%] w-16 h-16 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded-full">Rocket</div>
         <div className="absolute bottom-[30%] right-[30%] w-20 h-20 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded">Data</div>
      </section>

      {/* Engineering Global Impact */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-20">
          <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Engineering Global Impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {globalImpact.map((item, i) => (
            <div key={i} className="flex flex-col items-centertext-left group">
              <div className="w-full aspect-square max-w-[200px] mb-8 relative mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                 <div className="flex items-center justify-center w-full h-full border border-dashed border-[#CCC] rounded">
                    <span className="text-[#666] text-xs uppercase tracking-wider">Sketch Icon</span>
                 </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#D54B26]"></div>
                 <h4 className="font-heading font-semibold text-[#111] text-lg uppercase tracking-wide">{item.title}</h4>
              </div>
              <p className="font-body text-[#555] text-sm leading-relaxed text-center lg:text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering a Sustainable Tomorrow */}
      <section className="w-full py-16 max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="bg-[#EBE9E2] rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Engineering a<br/>Sustainable Tomorrow.
            </h2>
            <p className="font-body text-[#555] leading-relaxed mb-8">
              A technology company's most lasting impact is not measured purely in revenue or code deployed. It is measured in the long-term sustainability of the ecosystems it creates. We prioritize zero-waste architectural frameworks.
            </p>
            <ul className="space-y-3 font-body text-[#333] font-medium text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D54B26]"></span> Carbon-Neutral Data Governance
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D54B26]"></span> Lifecycle End-to-End Auditing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D54B26]"></span> Ethical Engineering Mandates
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full aspect-video max-w-[500px]">
                <div className="w-full h-full flex items-center justify-center border border-dashed border-[#CCC] rounded">
                   <span className="text-[#888] uppercase tracking-wider text-sm">3D Leaves Image</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Architecture of Growth */}
      <section className="w-full pt-16 pb-32 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
           <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
             The Architecture of Growth.
           </h2>
           <p className="font-body text-[#555] text-sm uppercase tracking-wide">The deployment matrix scaling enterprise value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureGrowth.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center justify-between h-full relative group">
              <div className="text-center bg-white border border-[#E1DBCA] rounded p-8 flex-1 z-10 w-full mb-12">
                 <div className="flex items-center justify-center gap-2 mb-4">
                   <span className="text-[#D54B26] font-bold text-sm">0{idx+1}</span>
                   <h4 className="font-heading font-semibold text-[#111] text-lg">{step.title}</h4>
                 </div>
                 <p className="font-body text-[#666] text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Dotted semi-circle placeholder */}
              <div className="h-[100px] w-full border-t-[2px] border-dashed rounded-t-full border-[#CCC] group-hover:border-[#D54B26] transition-colors relative flex items-start justify-center pt-[-20px]">
                 <div className="absolute -top-3 w-6 h-6 border-2 border-[#D54B26] bg-[#FFFBEE] rounded-full flex items-center justify-center text-[#D54B26]">
                    <span className="w-2 h-2 bg-[#D54B26] rounded-full"></span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
