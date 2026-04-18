import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import SectionTitle from '@/components/SectionTitle';

export default function InternshipsMentorshipPage() {
  const blueprint = [
    { title: 'Strategic Mentorship', desc: 'You are paired directly with senior systems architects. You do not report to junior management; you learn directly from the master builders.' },
    { title: 'Live Enterprise Projects', desc: 'Forget dummy data. You will be assigned to live codebases, running alongside our engineering pods to debug, optimize, and deploy to active production servers.' },
    { title: 'Bleeding Edge Tech', desc: 'From predictive ML algorithms to multi-continent cloud deployments, you will leverage enterprise-grade tech stacks from day one.' },
    { title: 'The Fast Track', desc: 'Interns who successfully integrate into our culture are fast-tracked for full-time executive engineering positions post-graduation.' }
  ];

  const safalMaterial = [
    { title: 'Fierce Curiosity', color: 'bg-[#EAEADC]', desc: 'You do not wait to be taught; you deconstruct systems on your own time to understand how they work.' },
    { title: 'Radical Accountability', color: 'bg-[#DDEEF4]', desc: 'You take ownership. If you write the code, you own the outcome. You never hide from an error; you fix it.' },
    { title: 'Agile Adaptability', color: 'bg-[#F2E5D5]', desc: 'You are resilient. You can pivot from writing backend scripts to front-end UI structures without losing momentum.' },
    { title: 'Collaborative Ego', color: 'bg-[#E1EDDB]', desc: 'You are confident in your code, but you always defer to a smarter solution. The best architecture wins, regardless of who built it.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Skip the Sandbox.<br />Build the Enterprise.</>}
        description="At Safal Group, our internship program is not a simulation. You will write code that powers live corporate infrastructure, sit in on strategic executive sessions, and be treated like a full-time architect from day one."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* A Global Classroom */}
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
          A Global Classroom.
        </h2>
        <p className="font-body text-[#555] leading-relaxed max-w-[1000px] mx-auto mb-8" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          As a Safal Intern, your learning isn't confined to one region. Our flat borderless infrastructure means a UI/UX intern in Ahmedabad might be fixing an interface with a mentor in Dubai, while an engineering fellow in New York does PR reviews. You are global from day one.
        </p>
        <button className="bg-[#D54B26] text-white px-10 py-3 font-body font-medium hover:bg-[#111] transition-colors rounded mb-16">
          Apply Now
        </button>

        {/* Global Network Sketch Placeholder */}
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-transparent flex items-center justify-center opacity-70 border-b border-[#CCC] pb-8">
           <span className="text-[#888] tracking-widest text-sm uppercase z-10 bg-[#FFFBEE] px-4 shadow">Node Network Sketch Graphic</span>
           {/* Fallback wireframe representation */}
           <div className="absolute inset-x-10 bottom-10 h-[60%] flex gap-4 opacity-30">
               <div className="flex-1 border-t-2 border-dashed border-[#888] rounded-t-[100%] mt-8"></div>
               <div className="flex-1 border-t-2 border-[#888] rounded-t-[100%]"></div>
               <div className="flex-1 border-t-2 border-dashed border-[#888] rounded-t-[100%] mt-8"></div>
           </div>
        </div>
      </section>

      {/* The Blueprint for Growth */}
      <section className="w-full pb-16 md:pb-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            The Blueprint for Growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {blueprint.map((item, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="w-full aspect-square max-w-[200px] mb-8 relative mx-auto lg:mx-0 flex flex-col items-center justify-center border border-dashed border-[#CCC] rounded">
                 <span className="text-[#666] text-xs uppercase tracking-wider text-center">Sketch Icon<br/>(Scales/Lock/Box/Rings)</span>
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

      {/* Learn from the Architects */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="bg-[#FAF8ED] rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-16 gap-16 border border-[#EBE7D8]">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Learn from the<br/>Architects.
            </h2>
            <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              Engineering theoretically inside a university is vastly different than launching to high-concurrency production servers. What you learn here goes beyond syntax. You learn code architecture, dev-ops scaling, data security, and enterprise strategy.
            </p>
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center border border-dashed border-[#CCC] rounded opacity-70">
                 <span className="font-heading tracking-widest text-sm text-[#888] uppercase bg-[#FAF8ED] px-2 shadow text-center">
                   Sketch Placeholder<br/>(Helping Hand on Rocks)
                 </span>
             </div>
          </div>
        </div>
      </section>

      {/* Your Code. Real Impact. */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col-reverse md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-5/12 flex items-center justify-center">
             <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center border border-dashed border-[#CCC] rounded opacity-70">
                <span className="text-[#888] font-medium tracking-wider text-xs uppercase bg-[#FFFBEE] px-2 shadow z-10 text-center">
                   Sketch Placeholder<br/>(Watering Tree with Pulley)
                </span>
             </div>
          </div>

          <div className="w-full md:w-7/12 flex flex-col">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              Your Code. Real Impact.
            </h2>
            <div className="space-y-6 mb-10">
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 We do not assign busy-work. The algorithms you optimize may be executed by international logistics firms. The UI components you build may guide financial analysts. When you deploy a successful sprint, it ships directly to market.
               </p>
               <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
                 In return, we expect absolute dedication. You are treated like an executive architect. We hold you to identical standards for code quality, communication, and strategic thinking.
               </p>
            </div>
            
            <div className="inline-block border border-[#D54B26]/30 bg-[#FAF8ED] rounded px-6 py-4">
               <p className="font-heading font-semibold text-[#D54B26] text-[15px] tracking-wide">
                 Our highest performers are immediately offered full-time architecture roles.
               </p>
            </div>
          </div>

        </div>
      </section>

      {/* Are You Safal Material? */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px] border-t border-[#EBE7D8]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Are You Safal Material?
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium">The traits defining our internship candidates.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safalMaterial.map((card, i) => (
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

      {/* Apply Now Form Bottom */}
      <section className="w-full py-16 md:pb-32 max-w-[1200px] mx-auto px-5 md:px-10">
        <h2 className="font-heading font-semibold text-[#111] leading-tight mb-10 text-[28px] md:text-[36px]">
          Apply Now
        </h2>
        
        <form className="space-y-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#333] font-medium">Full Name</label>
              <input type="text" className="w-full border-b border-[#DCD5C6] bg-transparent pb-3 focus:outline-none focus:border-[#D54B26] text-[15px] placeholder:text-[#AAA]" placeholder="e.g. Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#333] font-medium">Email ID</label>
              <input type="email" className="w-full border-b border-[#DCD5C6] bg-transparent pb-3 focus:outline-none focus:border-[#D54B26] text-[15px] placeholder:text-[#AAA]" placeholder="e.g. name@yourcompany.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#333] font-medium">Phone Number</label>
              <input type="tel" className="w-full border-b border-[#DCD5C6] bg-transparent pb-3 focus:outline-none focus:border-[#D54B26] text-[15px] placeholder:text-[#AAA]" placeholder="e.g. +1 (555) 000-0000" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#333] font-medium">Current Location :</label>
              <input type="text" className="w-full border-b border-[#DCD5C6] bg-transparent pb-3 focus:outline-none focus:border-[#D54B26] text-[15px] placeholder:text-[#AAA]" placeholder="e.g. Ahmedabad" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[#333] font-medium">Upload Resume :</label>
            <div className="w-full border border-dashed border-[#DCD5C6] bg-[#FAF8ED] p-12 flex items-center justify-center cursor-pointer hover:border-[#D54B26] transition-colors rounded">
                <span className="text-center text-[#888] text-sm">
                  Attach Your Resume in PDF, Word Format<br/>Max Size: 5 Mb
                </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[#333] font-medium">Cover Letter</label>
            <textarea rows="4" className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] text-[15px] rounded resize-none" placeholder="Briefly describe About you"></textarea>
          </div>

          <button type="button" className="border border-[#D54B26] text-[#D54B26] px-14 py-3 font-medium hover:bg-[#D54B26] hover:text-white transition-colors rounded">
            Submit
          </button>
        </form>
      </section>

    </main>
  );
}
