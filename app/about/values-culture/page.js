import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function ValuesCulturePage() {
  const dnaCards = [
    { title: 'Calculated Urgency', color: 'bg-[#EAEADC]', desc: 'We move fast, but never rush. We implement systems rapidly, backed by strict logic and parameters to outpace the market safely.' },
    { title: 'Systemic Accountability', color: 'bg-[#DDEEF4]', desc: 'There is no finger pointing. In our culture, if an error happens, the system is at fault. We trace the error to the root and fix the system.' },
    { title: 'Aesthetic Intelligence', color: 'bg-[#F2E5D5]', desc: 'Code must be brilliant, but the interface must be beautiful. Enterprise software should look and feel like premium technology.' },
    { title: 'Trust Ethics', color: 'bg-[#E1EDDB]', desc: 'We build systems that handle millions in global capital. Absolute transparency, strict privacy and unwavering integrity are non-negotiable.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Culture is our Operating System</>}
        description="At the Safal Group, culture is not a set of hollow statements; it is the algorithmic code by which we execute. It governs our architecture, our scaling, and our engineering standards."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* The Multiplier Effect */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              The Multiplier Effect
            </h2>
            <div className="space-y-6">
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                In many corporate environments, culture is an HR mandate. At Safal, culture is mathematically engineered. A collection of brilliant minds will accomplish much, but when a brilliant team operates under a shared framework of extreme ownership, systemic logic, and relentless iteration—the output doesn't scale linearly. It scales exponentially.
              </p>
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                Every engineer, designer, and financial analyst in our eight divisions runs on this same operational OS. This shared vocabulary allows an AI dev in the US to flawlessly integrate with a CRM architect in India to launch a unified product in weeks rather than months.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-[90%] max-w-[500px] aspect-square flex items-center justify-center overflow-hidden">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase z-10 bg-[#FFFBEE] px-2 shadow">Sketch: Circle of Pawns</span>
               <div className="absolute inset-0 border border-dashed border-[#CCC] rounded-full flex items-center justify-center">
                 <div className="w-[80%] h-[80%] border border-dashed border-[#CCC] rounded-full"></div>
                 <div className="absolute w-[60%] h-[60%] border border-dashed border-[#CCC] rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The DNA of Our Culture */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            The DNA of Our Culture.
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium">The functional parameters guiding our execution framework.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dnaCards.map((card, i) => (
            <div key={i} className={`${card.color} p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start`}>
              <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
                <span className="text-[#666] text-xs font-semibold uppercase text-center px-4">DNA Sketch {i+1}<br/>(Rocket, Cube, Globe, Keys)</span>
              </div>
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">{card.title}</h3>
              <p className="font-body text-[#555] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Behind Every Global Innovation */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          <div className="w-full lg:w-4/12 flex flex-col items-start pr-0 md:pr-8">
            <h2 className="font-heading font-semibold text-[#4A6741] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
              Behind Every Global<br/>Innovation Stands the<br/>Unmatched Dedication of<br/>
              <span className="text-[#D54B26] font-serif italic text-4xl mt-2 block">Our People.</span>
            </h2>
            <div className="mt-12 relative w-full aspect-[3/1] max-w-[300px]">
              <div className="absolute inset-0 flex flex-col justify-end">
                <span className="font-serif italic text-[#CCC] text-5xl mb-2">Thank You,</span>
                <span className="font-body text-[#888] text-sm ml-8 pl-4 border-l border-[#888]">Leaders who scale dreams into reality.</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 flex items-center justify-center">
             <div className="relative w-full aspect-square max-w-[450px]">
               <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#CCC] rounded-full opacity-60">
                 <span className="font-body text-xs text-[#888] tracking-widest uppercase bg-[#FFFBEE] px-4 text-center">
                   Three Leaf Grid Collage<br/>Image Placeholder
                 </span>
               </div>
             </div>
          </div>

          <div className="w-full lg:w-4/12 flex flex-col justify-center pl-0 md:pl-8">
             <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
               We exist because of visionary talent. Our enterprise ecosystem serves global industry leaders, but it is the developers, strategists, designers, and financial experts across India, the UAE, and the USA—our people—who make it possible. We build an environment where excellence is the baseline, and where brilliant, driven minds can do the best work of their lives. Trust and respect form the very fabric of our operation.
             </p>
          </div>

        </div>
      </section>

      {/* Diverse Minds. Singular Impact. */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="bg-[#F4F1E8] rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-16 lg:p-20 gap-16">
          <div className="w-full md:w-5/12">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Diverse Minds.<br/>Singular Impact.
            </h2>
            <p className="font-body text-[#555] leading-relaxed mb-8" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              An echo chamber is lethal to innovation. The complexity of the modern enterprise demands a portfolio of distinct perspectives to solve accurately. We consciously align engineers from different backgrounds with creatives and risk-analysts. When these diverse minds collide against a unified metric, we generate solutions that are not just functional, but exponentially powerful.
            </p>
          </div>
          <div className="w-full md:w-7/12 flex justify-center">
             <div className="relative w-full aspect-video max-w-[650px] flex items-center justify-center border border-dashed border-[#CCC] rounded opacity-70">
                 <span className="font-heading tracking-widest text-sm text-[#888] uppercase bg-[#F4F1E8] px-2 shadow">
                   Brain Head Gears Sketch Placeholder
                 </span>
             </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="w-full py-16 md:py-32 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px] border-t border-[#EBE7D8]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-1/2 flex items-center justify-center">
             <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#CCC] overflow-hidden flex">
                   {/* Diagram mapping via HTML lines */}
                   <div className="absolute top-0 bottom-0 left-1/2 w-px bg-dashed bg-[#CCC]"></div>
                   <div className="absolute left-0 right-0 top-1/2 h-px bg-dashed bg-[#CCC]"></div>
                </div>
                <span className="font-heading tracking-widest text-xs text-[#888] uppercase bg-[#FFFBEE] px-4 py-1 z-10 shadow border border-[#EBE7D8]">
                  Segmented Target Graphic (Vision/Mission Placeholder)
                </span>
             </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 42px)' }}>
              Our Vision
            </h2>
            <div className="content-container mb-10 transition-opacity duration-300">
               <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(15px, 1vw, 17px)' }}>
                 Safal Infosoft Limited was built on the philosophy that deep operational competence combined with absolute engineering excellence could solve the hardest problems facing modern enterprises. From our roots navigating complex local networks to orchestrating global infrastructure rollouts...
               </p>
               <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(15px, 1vw, 17px)' }}>
                 We execute architectural miracles every day for partners worldwide. Today, our ecosystem spans eight specialized divisions. Yet, our core philosophy remains unchanged: we engineer systems that empower human potential.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1vw, 17px)' }}>
                 We don't just write code; we architect the frameworks that power industry leaders globally. We envision a world where enterprise complexity is abstract...
               </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-[#D54B26]/30 flex items-center justify-center text-[#D54B26] hover:bg-[#D54B26] hover:text-white transition-colors">
                 &larr;
              </button>
              <button className="w-10 h-10 rounded-full border border-[#D54B26]/30 flex items-center justify-center text-[#D54B26] hover:bg-[#D54B26] hover:text-white transition-colors">
                 &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
