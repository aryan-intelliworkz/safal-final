import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function GroupStructurePage() {
  const entities = [
    { name: 'Intelliworkz Business Solutions Pvt. Ltd.', country: 'India' },
    { name: 'Safal Infosoft Ltd.', country: 'India' },
    { name: 'Ideaz Ventures', country: 'Global' },
    { name: 'Intelliworkz Infosoft Technology LLC', country: 'UAE' },
    { name: 'Safal Infosoft Inc.', country: 'USA' },
    { name: 'Safal Automation Inc.', country: 'USA' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>The Architecture of Synergy</>}
        description="We structure our global hubs not as isolated entities, but as interconnected nodes processing data, talent, and strategic leverage across the Safal Group."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Global Synergy Section */}
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
          Independent Focus. <span className="font-bold">Infinite Synergy.</span>
        </h2>
        <p className="font-body text-[#555] leading-relaxed max-w-[1000px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          While each entity within our group operates with laser-focused specialization—from hardware automation in the US to venture incubation in India—they are entirely interconnected. This matrix allows us to cross-pollinate world-class engineering, design, and strategy, giving our partners access to massive centralized intellectual capital.
        </p>

        {/* World Map Connectivity Image Placeholder */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] mt-12 bg-transparent flex items-center justify-center overflow-hidden opacity-80">
           <span className="text-[#888] tracking-widest text-sm uppercase z-10 bg-[#FFFBEE] px-4">World Map Graphic Placeholder</span>
           {/* Fallback dotted map representation */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80%] h-[70%] border border-dashed border-[#CCC] rounded-full"></div>
             <div className="absolute w-[60%] h-[50%] border border-dashed border-[#CCC] rounded-full"></div>
           </div>
        </div>
      </section>

      {/* The Entities List Section */}
      <section className="w-full pb-24 md:pb-32 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col gap-20 lg:gap-32">
          {entities.map((entity, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
              
              {/* Left Side: Text */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}>
                  {entity.name}
                </h3>
                
                <div className="space-y-6 font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.05vw, 16px)' }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>

              {/* Right Side: Isometric Graphic Placeholder */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-[90%] max-w-[500px] aspect-[4/3] flex items-center justify-center group overflow-hidden">
                   {/* Ghost box to represent the 3D isometric slab */}
                   <div className="absolute w-[80%] h-[60%] bg-[#DDEEF4] border border-[#A6D5E9] shadow-lg transform -skew-y-12 rotate-[-15deg] flex items-center justify-center transition-transform group-hover:translate-y-[-10px] duration-500">
                     <span className="font-heading font-bold text-[#0584C7] opacity-80 uppercase tracking-widest rotate-[15deg] skew-y-12 text-sm">
                       Isometric Logo Plate
                     </span>
                   </div>
                   {/* Explicit placeholder text overlay */}
                   <span className="absolute bottom-5 text-[#888] font-medium tracking-wider text-xs uppercase z-10 bg-[#FFFBEE] px-2">
                     Image placeholder
                   </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
