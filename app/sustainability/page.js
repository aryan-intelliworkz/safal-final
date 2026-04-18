import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function SustainabilityPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Engineering a Carbon-<br />Neutral Future.</>}
        description="At the Safal Group, sustainability is not a corporate initiative; it is an architectural mandate. We build tech environments that function with absolute efficiency, wasting zero energy, server space, or processing power."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Every Line of Code Section */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-5/12 text-left">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Every Line of Code Leaves<br/>a Footprint.
            </h2>
            <div className="space-y-6">
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                In the digital age, a bloated software architecture doesn't just waste operational time; it consumes massive amounts of server power and global energy. We believe that eliminating digital friction is the most direct path to ecological preservation.
              </p>
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                By architecting leaner, low-code frameworks and deploying predictive AI, we drastically reduce the energy consumption of data centers—turning elite engineering into environmental protection.
              </p>
            </div>
            <div className="mt-8 border-b-2 border-[#E1DBCA] w-24"></div>
          </div>
          <div className="w-full md:w-7/12 flex items-center justify-end">
            <div className="relative w-full aspect-[2/1] max-w-[800px] flex items-center justify-center border-b border-[#CCC] pb-4">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase z-10 bg-[#FFFBEE] px-2 shadow">Sketch: City to Forest Transition</span>
               {/* Visual proxy for the sketch skyline */}
               <div className="absolute bottom-4 left-0 right-0 h-[60%] flex items-end justify-between px-10 opacity-30">
                  <div className="w-16 h-32 border-2 border-dashed border-[#CCC]"></div>
                  <div className="w-20 h-40 border-2 border-dashed border-[#CCC]"></div>
                  <div className="w-12 h-48 border-2 border-[#888] rounded-t-full"></div>
                  <div className="w-24 h-56 border-2 border-[#888] rounded-t-full"></div>
                  <div className="w-32 h-64 border-2 border-[#888] rounded-t-full"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time to Make the Switch Interaction Section */}
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
          Time to Make the Switch
        </h2>
        <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium mb-16">
          Transitioning from rigid legacy architecture toward an adaptive environment.
        </p>

        {/* Interactive Toggle Graphic */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-8 md:gap-16 justify-center">
             {/* Left Dark Globe */}
             <div className="flex flex-col items-center gap-4">
               <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-dashed border-[#CCC] bg-black/5 flex items-center justify-center relative overflow-hidden shadow-sm">
                  <span className="text-[10px] text-[#888] uppercase tracking-wider text-center">Dark Globe</span>
               </div>
               <span className="font-heading font-semibold text-[#D54B26] text-sm md:text-base">The Cost of Bloated Code</span>
             </div>

             {/* Arrows */}
             <div className="flex gap-2 opacity-30 text-2xl font-light text-[#888]">
               <span>&gt;</span><span>&gt;</span><span>&gt;</span>
             </div>

             {/* Right Clean Globe */}
             <div className="flex flex-col items-center gap-4">
               <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-dashed border-[#CCC] bg-[#DDEEF4]/30 flex items-center justify-center relative overflow-hidden shadow-sm">
                  <span className="text-[10px] text-[#888] uppercase tracking-wider text-center">Clean Earth</span>
               </div>
               <span className="font-heading font-semibold text-[#888] text-sm md:text-base">Frictionless, Decarbonized Scaling</span>
             </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="max-w-[900px] mx-auto text-center">
          <h4 className="font-heading font-semibold text-[#111] text-lg mb-4 text-center">The Cost of Bloated Code</h4>
          <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
            Traditional enterprise systems are heavy. As operations scale, computational redundancy spikes. Data is siloed, server requests compound, and IT latency spirals out of control. This bloat doesn't just damage technical stability, it severely impacts environmental resources.
          </p>
          <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
      </section>

      {/* Ultimate Non-Renewable Resource */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Time is our Ultimate Non-Renewable Resource.
            </h2>
            <div className="space-y-6">
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 Environmental responsibility is an imperative, not an afterthought. Every division within Safal operates under a mandate to optimize systems for zero operational waste.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 From engineering automated code reviews that slash testing cycles, to architecting low-friction databases that reduce server loads, we ensure our global footprint remains as light as possible.
               </p>
            </div>
            
            <div className="mt-10 bg-[#FAF8ED] border border-[#EBE7D8] p-6 rounded-lg max-w-[500px]">
               <p className="font-heading font-semibold text-[#D54B26] text-[15px] tracking-wide">
                 Our target is a 100% Net-Zero operational metric across all global hubs.
               </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
             <div className="relative w-[90%] max-w-[450px] aspect-square flex items-center justify-center rounded-full border border-dashed border-[#EBE7D8]">
                <div className="absolute w-2 h-2 bg-[#111] rounded-full"></div>
                <div className="absolute w-full h-0.5 bg-[#EBE7D8] -rotate-[30deg]"></div>
                <span className="text-[#888] font-medium tracking-wider text-xs uppercase bg-[#FFFBEE] px-2 shadow z-10 text-center">
                   Clock of Leaves Graphic
                </span>
             </div>
          </div>

        </div>
      </section>

      {/* Global Image Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] max-h-[800px] mt-12 flex flex-col items-center justify-end text-center">
         {/* Background Full Width Image */}
         <div className="absolute inset-0 z-0">
            <div className="w-full h-full border-t border-[#CCC] bg-[#EBE9E2] flex items-center justify-center overflow-hidden relative opacity-70">
                <span className="text-[#888] uppercase tracking-widest text-sm z-10">Eco-City Architectural Aerial Placeholder</span>
            </div>
         </div>
         
         {/* Gradient Fade up from the bottom */}
         <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#FFFBEE] via-[#FFFBEE]/80 to-transparent z-[1]"></div>
         <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-[#FFFBEE] to-transparent z-[1]"></div>

         <div className="relative z-[2] px-5 pb-16 md:pb-24 max-w-[900px]">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              We can do more than co-exist.
            </h2>
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              The Safal Group is not just reducing digital harm; we are engineering a regenerative future. We architect autonomous ecosystems that allow human ambition, enterprise technology, and the natural world to thrive simultaneously.
            </p>
         </div>
      </section>

    </main>
  );
}
