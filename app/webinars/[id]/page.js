import { Calendar } from 'lucide-react';

export default function WebinarDetailPage({ params }) {
  const speakers = [
    { name: 'Jay Mehta', role: 'CEO of Safal Solution' },
    { name: 'Jay Mehta', role: 'CEO of Safal Solution' },
    { name: 'Jay Mehta', role: 'CEO of Safal Solution' },
    { name: 'Jay Mehta', role: 'CEO of Safal Solution' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen pt-24 md:pt-32 pb-24 font-body overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        {/* Header Block */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-[#D54B26] text-sm font-semibold tracking-wider">
              <Calendar size={18} /> 12/03/2026
            </div>
            <span className="px-3 py-1 bg-[#D54B26]/10 text-[#D54B26] text-xs font-semibold tracking-wider uppercase rounded">Case Study</span>
            <span className="px-3 py-1 bg-[#EAF0CB]/60 text-[#5C6B2B] text-xs font-semibold tracking-wider uppercase rounded border border-[#EAF0CB]">ERP Solution</span>
          </div>
          <h1 className="font-heading font-semibold text-[#111] text-3xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-8">
            The End of One-Size-Fits-All Payroll: Why 2026 Will Be the Year of Regional Intelligence
          </h1>
          <p className="font-body text-[#555] text-base md:text-lg leading-relaxed max-w-[1200px]">
            Join out top leaders, vendors, and developers from the Safal merchant base platforms to talk about the latest advancements in specific workflow processes. Find out how we offset costs in macro industries and global auditing environments.
          </p>
        </div>

        {/* Primary Hero Image Placeholder */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#E1DBCA] mb-16 md:mb-24 rounded overflow-hidden relative border border-[#CCC]">
           <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply bg-[#FFFBEE]/50">
              <span className="text-[#666] font-semibold text-sm uppercase tracking-widest bg-white/80 p-4 rounded backdrop-blur shadow-sm">
                 Industrial Factory Floor Placeholder
              </span>
           </div>
        </div>

        {/* Why Attend Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24 md:mb-32">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-[40px] font-semibold text-[#111] leading-tight mb-6">
              Why attend
            </h2>
            <h3 className="font-heading font-semibold text-lg text-[#111] mb-4">
              Expand your skills with training Developing an AI agent-ready checkout experience and certification
            </h3>
            <p className="text-[#555] text-sm mb-4">Topics:</p>
            <ul className="list-disc pl-5 font-body text-[#555] text-sm space-y-2 mb-8">
              <li>Deploying automation and removing monolith costs</li>
              <li>Aligning financial and emergency backups</li>
              <li>Scaling cloud reporting via micro-entities</li>
              <li>Installing hardware infrastructure and track platforms</li>
              <li>Recovering critical data in sub-millisecond network architecture</li>
              <li>Outweighing server space redundancy limits in ecommerce</li>
            </ul>
            <p className="font-body text-[#555] text-sm mb-8">
              Hosted on On-demand free to assess until further instructions are Wednesday and Thursday"
            </p>

            <h4 className="font-heading font-semibold text-[#111] text-base mb-2">See what's next in payments and commerce</h4>
            <p className="font-body text-[#555] text-xs leading-[1.8] mb-6">
              Head to the main stage to see our biggest product announcements live. Hear from renowned business leaders and creators who are using global commerce as the base model against commerce and crypto options. How business options fix lorem ipsum dolor sit amet consectetur. Tetas euismod curous sodales dipns mi tonior nullam.
            </p>

            <h4 className="font-heading font-semibold text-[#111] text-base mb-2">See what's next in payments and commerce</h4>
            <p className="font-body text-[#555] text-xs leading-[1.8] mb-6">
              Head to the main stage to see our biggest product announcements live. Hear from renowned business leaders and creators who are using global commerce as the base model against commerce and crypto options. How business options fix lorem ipsum dolor sit amet consectetur. Tetas euismod curous sodales dipns mi tonior nullam.
            </p>

            <h4 className="font-heading font-semibold text-[#111] text-base mb-2">See what's next in payments and commerce</h4>
            <p className="font-body text-[#555] text-xs leading-[1.8]">
              Lorem ipsum color sit amet consectetur. Tetas euismod curous sodales dipns mi tonior nullam. Enim dui vel lorem inisus pellentesque eyestus fcuoous sed. Dictum proin urnai inperdiet faecibus in eiismod eu magna. Mi nullus haec cs d sad enum plasellas. Tortor civarms n enim dosec sit nulaitss Anem puviner sit rises siur, cu sem vetlt purus dictumn is. In sii profil fat iactus faucibis odic isis mlestue vel twnpus. Lewus tempior tenrsus mauris cumnoodo elevnd.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 aspect-[4/3] bg-[#E1DBCA] rounded relative border border-[#EEE] overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply bg-[#FFFBEE]/30">
                <span className="text-[#888] font-semibold text-xs tracking-widest uppercase bg-white/70 p-3 rounded backdrop-blur text-center">
                   Office Workers Presentation<br />Image Placeholder
                </span>
             </div>
          </div>
        </div>

        {/* Meet Our Speakers */}
        <div className="w-full mb-24 md:mb-32 text-center">
           <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-[#111] leading-tight mb-4">
             Meet Our Speakers
           </h2>
           <p className="font-body text-[#555] text-sm max-w-[800px] mx-auto mb-12">
             Lorem ipsum dolor sit amet consectetur. Ui velit resere nunc pat ut males viatrue, fas szcno at sit mi pellentos iaculas taciti is, tellus Et iet iaculis dis elefenent egedus, nato st ultrici eu is a Aliquam iis frigills lib ci cosnauloiui diam amst, Pingilla su cmnni main er id aemnid.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="flex flex-col text-left group">
                   <div className="w-full aspect-[4/5] bg-[#E1DBCA] relative mb-4 border border-[#EEE] overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply bg-[#FFFBEE]/20">
                          <span className="text-[#888] font-semibold text-[10px] tracking-widest uppercase">Speaker Photo</span>
                       </div>
                   </div>
                   <div className="bg-[#EBE7D8]/60 p-4 rounded-b border border-[#EBE7D8] group-hover:bg-[#EBE7D8] transition-colors">
                      <h4 className="font-heading font-semibold text-[#111] text-lg mb-1">{speaker.name}</h4>
                      <p className="font-body text-[#555] text-[11px] font-medium uppercase tracking-wide">{speaker.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Secondary Handshake Hero */}
        <div className="w-full aspect-video md:aspect-[21/6] bg-[#0A0D0E] mb-24 rounded overflow-hidden relative border border-[#111]">
           <div className="absolute inset-0 flex items-center justify-center opacity-60">
              <span className="text-white font-semibold text-sm uppercase tracking-widest bg-white/10 p-4 rounded backdrop-blur border border-white/20">
                 Dark Handshake Image Placeholder
              </span>
           </div>
        </div>

        {/* Registration Form Box */}
        <div className="bg-[#F6F5F0] rounded-xl p-8 md:p-16 border border-[#EBE7D8] flex flex-col lg:flex-row gap-12 lg:gap-24 shadow-sm">
           <div className="w-full lg:w-5/12">
              <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
                Watch the On-Demand Fireside Chat
              </h2>
              <p className="font-body text-[#555] text-sm leading-[1.8] mb-6">
                Consectetuer et mi a renuo eu proin. Rhoncus orci a enilm integer est. Uis a trstiqu ruiueis a syenil Quedioioy is e purn t is el — nec asul oibr imdi inova hy OO I ad sgrsn
              </p>
              <p className="font-body text-[#555] text-sm leading-[1.8]">
                Lurenn apsum rolor sit mnet aonecneti. Tst i a t rir d t in ir ui at ti idna is a mior nll.t ir E im I di vl lor m rs ls n eii n ts a eitn fo in as c d l is is l n ro ui ri u im in is a m n i p a o e n c ii e in m a h M il s ih ic u id f i
              </p>
           </div>
           
           <div className="w-full lg:w-7/12">
              <form className="space-y-6">
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                       <label className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2 block">Email Id</label>
                       <input type="email" placeholder="e.g. name@company.com" className="w-full bg-white border border-[#CCC] p-3 text-sm focus:outline-none focus:border-[#D54B26] transition-colors" />
                    </div>
                    <div className="w-full md:w-1/2">
                       <label className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2 block">Full Name</label>
                       <input type="text" placeholder="e.g. Jane Doe" className="w-full bg-white border border-[#CCC] p-3 text-sm focus:outline-none focus:border-[#D54B26] transition-colors" />
                    </div>
                 </div>

                 <div>
                    <label className="text-[#111] text-xs font-bold uppercase tracking-wider mb-2 block">Are you interested in Safal product demo?</label>
                    <div className="relative">
                       <select className="w-full bg-white border border-[#CCC] p-3 text-sm appearance-none focus:outline-none focus:border-[#D54B26] transition-colors text-[#555] cursor-pointer">
                         <option value="" disabled selected>Please Select</option>
                         <option value="yes">Yes, definitely</option>
                         <option value="maybe">Maybe later</option>
                         <option value="no">No, just here for the content</option>
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                       </div>
                    </div>
                 </div>

                 <div>
                    <p className="font-body text-[#555] text-xs mb-3">Please read our <a href="#" className="text-[#D54B26] hover:underline">Privacy Notice</a>.</p>
                    <label className="flex items-start gap-3 cursor-pointer group">
                       <div className="relative flex items-center justify-center mt-0.5">
                          <input type="checkbox" className="peer appearance-none w-4 h-4 border border-[#CCC] rounded-sm checked:bg-[#D54B26] checked:border-[#D54B26] transition-colors cursor-pointer" />
                          <svg className="absolute w-3 h-3 pointer-events-none text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <span className="text-[#555] text-xs leading-tight pt-0.5 group-hover:text-[#111] transition-colors">Yes, I will be happy to receive communications on Safal products, services and events.</span>
                    </label>
                 </div>

                 <div className="pt-4">
                    <button type="button" className="bg-transparent border border-[#D54B26] text-[#D54B26] px-10 py-2.5 font-semibold text-sm tracking-wide rounded-sm hover:bg-[#D54B26] hover:text-white transition-colors">
                      Submit
                    </button>
                 </div>
              </form>
           </div>
        </div>

      </div>
    </main>
  );
}
