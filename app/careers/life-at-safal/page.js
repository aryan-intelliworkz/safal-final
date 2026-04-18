import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function LifeAtSafalPage() {
  const joinTeam = [
    { title: 'Dynamic Equilibrium', desc: 'We do not believe in burnout parameters. We execute in intense, focused sprints and mandate deep recovery downtime to maintain structural human integrity.' },
    { title: 'Psychological Safety', desc: 'True innovation requires risk. We cultivate an environment where failure is treated as a diagnostic data point rather than a behavioral defect. We test and adapt.' },
    { title: 'The Mastery Fund', desc: 'We don’t just hire top talent, we sponsor absolute dominion in your field. Safal completely underwrites advanced global certifications and master-level training programs.' },
    { title: 'Global Mobility', desc: 'Performers transcend borders. After 24 months of elite execution, engineers unlock the autonomy to transfer between our UAE, USA, and India hubs.' }
  ];

  const dnaTalent = [
    { title: 'Relentless Velocity', color: 'bg-[#EAEADC]', desc: 'You thrive in high-pressure, rapid-iteration environments. You perform best when challenged to execute the impossible inside an accelerated timeline.' },
    { title: 'Absolute Integrity', color: 'bg-[#DDEEF4]', desc: 'Our building parameters handle billions in global capital. You understand that error-free, securely audited code is required—it is a non-negotiable baseline requirement.' },
    { title: 'Aesthetic Intelligence', color: 'bg-[#F2E5D5]', desc: 'You believe fundamentally that software should not just be mathematically brilliant; it should be visually and experientially beautiful to the end user.' },
    { title: 'Systemic Ownership', color: 'bg-[#E1EDDB]', desc: 'You do not pass the buck. If you commit to the codebase, you own the outcome, the performance, and the ROI metrics tied directly to your architectural footprint.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Operate at the Edge of<br/>Possible.</>}
        description="Life at the Safal Group is high-velocity, high-agency, and high-stakes. We are recruiting proven software architects and financial visionaries who sleep at night thinking about systems."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* A Borderless Brain-Trust */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
          A Borderless Brain-Trust.
        </h2>
        <p className="font-body text-[#555] leading-relaxed max-w-[1100px] mx-auto mb-16" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          Talent is not restricted by geography. Our operational infrastructure allows a systems architect in New York to collaborate flawlessly in real-time with a UI/UX director in Dubai and a dev-code engineering lead in Ahmedabad. We operate as a singular, synchronized global team, meaning you are always learning from the best minds in the industry.
        </p>

        {/* Masonry Image Collage Placeholder */}
        <div className="relative w-full aspect-[5/3] md:aspect-[2/1] bg-transparent flex items-center justify-center opacity-80 border border-dashed border-[#CCC]">
           <span className="text-[#888] tracking-widest text-sm uppercase bg-[#FFFBEE] px-4 shadow z-10 absolute">
             Masonry Office Collage Placeholder (7-8 Photos)
           </span>
           <div className="grid grid-cols-4 gap-4 w-full h-full p-4 opacity-30">
              <div className="col-span-1 row-span-2 bg-[#888] rounded"></div>
              <div className="col-span-1 row-span-1 bg-[#AAA] rounded"></div>
              <div className="col-span-2 row-span-2 bg-[#666] rounded"></div>
              <div className="col-span-1 row-span-1 bg-[#999] rounded"></div>
              <div className="col-span-1 row-span-1 bg-[#777] rounded"></div>
              <div className="col-span-1 row-span-1 bg-[#BBB] rounded"></div>
           </div>
        </div>
      </section>

      {/* Why you Should Join Our Awesome Team */}
      <section className="w-full pb-16 md:pb-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            Why you Should Join Our Awesome Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {joinTeam.map((item, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="w-full aspect-square max-w-[200px] mb-8 relative mx-auto lg:mx-0 flex items-center justify-center border border-dashed border-[#CCC] rounded">
                 <span className="text-[#666] text-xs uppercase tracking-wider">Sketch Icon</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#D54B26]"></div>
                 <h4 className="font-heading font-semibold text-[#111] text-xl tracking-wide">{item.title}</h4>
              </div>
              <p className="font-body text-[#555] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Don't Just Write Code. Engineer the Future. */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-5/12 flex flex-col">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Don't Just Write Code.<br/>Engineer the Future.
            </h2>
            <div className="space-y-6">
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 At the Safal Group, you are not writing opaque dependencies for an unnamed industry module. Your code scales physical infrastructure. Our logic sequences directly operate automated factory floors, launch massive corporate applications, and securely aggregate financial datasets.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
               </p>
            </div>
          </div>

          <div className="w-full md:w-7/12 flex items-center justify-center">
             <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#CCC] rounded-full opacity-60">
                 <span className="font-body text-xs text-[#888] tracking-widest uppercase bg-[#FFFBEE] px-4 text-center">
                   Three Leaf Grid Collage<br/>(Office Space Version)
                 </span>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* The R&D Sandbox */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center border-y border-[#EBE7D8]">
         {/* Circular Background Grid Placeholder */}
         <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-[800px] h-[800px] rounded-full border border-[#D54B26]/30"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[#CCC]"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#D54B26]/20"></div>
         </div>

         <div className="relative z-10 text-center max-w-[700px] px-5 bg-[#FFFBEE]/80 backdrop-blur-sm py-12">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              The R&D Sandbox.
            </h2>
            <p className="font-body text-[#555] leading-relaxed mb-8" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              We dedicate 15% of our resources to absolute blue-sky conceptual exploration. Team pods are deployed into internal bootcamps where you are free from client requirements, given an unlimited sandbox to break things, and build for the pure sake of advancement.
            </p>
            <button className="bg-[#D54B26] text-white px-10 py-3.5 font-body font-medium hover:bg-[#111] transition-colors rounded">
              View Open Roles
            </button>
         </div>

         {/* Orbiting Elements Placeholders */}
         <div className="absolute top-[20%] left-[20%] w-20 h-20 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded">Box Icon</div>
         <div className="absolute top-[30%] right-[25%] w-24 h-24 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded-full">Compass</div>
         <div className="absolute bottom-[20%] left-[30%] w-16 h-16 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded-full">Rocket</div>
         <div className="absolute bottom-[30%] right-[30%] w-20 h-20 bg-white shadow-lg flex items-center justify-center text-[10px] text-center text-[#888] rounded">Data</div>
      </section>

      {/* The DNA of Our Talent */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            The DNA of Our Talent.
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium">Specific operational characteristics we filter for during recruitment.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dnaTalent.map((card, i) => (
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

    </main>
  );
}
