import { Calendar, Play } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudyDetailPage({ params }) {
  const solutionCards = [
    {
      step: 'SOLUTION 1',
      title: 'AI-Powered Route Optimization',
      desc: 'The integration of Safal\'s robust framework. The paths of moving factors is optimized via pure routing in endless permutations over learnings.',
      imgText: 'Network Node Icon',
      bgColor: 'bg-[#EAF0CB]',
      dotColor: 'bg-[#5C6B2B]',
      textColor: 'text-[#5C6B2B]'
    },
    {
      step: 'SOLUTION 2',
      title: 'Unified Data Platform',
      desc: 'The clunky forms that fact field lists to be errors in flow speed and bad bugs in old tables are sorted and grouped logically in the Safal info solutions ecosystem.',
      imgText: 'Laptop Screen Icon',
      bgColor: 'bg-[#D1EAF4]',
      dotColor: 'bg-[#2B6073]',
      textColor: 'text-[#2B6073]'
    },
    {
      step: 'SOLUTION 3',
      title: 'Cloud-Native Microservices',
      desc: 'We isolated monolithic software stacks and put the blocks in a modular array component in the cloud server ecosystem.',
      imgText: 'Orbital Ring Icon',
      bgColor: 'bg-[#F2DACF]',
      dotColor: 'bg-[#7A4B36]',
      textColor: 'text-[#7A4B36]'
    },
    {
      step: 'SOLUTION 4',
      title: 'IoT Integration',
      desc: 'We wired up the heavy lift hardware and machine grid into sensor checks. An operation terminal UI plugged into actual hardware metrics on port.',
      imgText: 'Key Hand Icon',
      bgColor: 'bg-[#D5E8D7]',
      dotColor: 'bg-[#3A6B3D]',
      textColor: 'text-[#3A6B3D]'
    }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen pt-24 md:pt-32 pb-24 md:pb-32 font-body overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        {/* Header Block */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-[#D54B26] text-sm font-semibold tracking-wider">
              <Calendar size={18} /> 12/02/2026
            </div>
            <span className="px-3 py-1 bg-[#D54B26]/10 text-[#D54B26] text-xs font-semibold tracking-wider uppercase rounded">Case Study</span>
            <span className="px-3 py-1 bg-white text-[#555] text-xs font-semibold tracking-wider uppercase rounded border border-[#E1DBCA]">ERP Solution</span>
          </div>
          <h1 className="font-heading font-semibold text-[#111] text-3xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-8">
            Transforming Legacy Manufacturing: A 300% Increase in Operational Velocity
          </h1>
          <p className="font-body text-[#555] text-base md:text-lg leading-relaxed max-w-[1200px]">
            In an era where global supply chains shift overnight, rigid manufacturing is a liability. Scaling autonomous data processing for legacy client Stahl Auto AG changed all rules of legacy monolithic systems. Overhauling tech stacks scaled output capacity directly into a 300% boost across all routing efficiencies.
          </p>
        </div>

        {/* Primary Hero Image Placeholder */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#00000005]/20 mb-20 rounded overflow-hidden relative border border-[#E1DBCA] group">
           <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply bg-[#FFFBEE]/50">
              <span className="text-[#666] font-semibold text-sm uppercase tracking-widest bg-white/80 p-4 rounded backdrop-blur border border-[#E1DBCA] shadow-sm">
                 Industrial Factory Floor Placeholder
              </span>
           </div>
        </div>

        {/* The Challenges Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="w-full lg:w-5/12 aspect-[4/3] flex flex-col items-center justify-center border border-dashed border-[#CCC] rounded bg-[#FFFBEE]/50 mix-blend-multiply border-[#D54B26]/20">
             <span className="text-[#888] font-medium tracking-wider text-xs uppercase px-4 shadow-sm z-10 text-center bg-white/60 backdrop-blur rounded py-2 text-[#D54B26]">
               Partnership Climbing Sketch
             </span>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 className="font-heading text-3xl lg:text-[40px] font-semibold text-[#111] leading-tight mb-12">
              The Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
               <div>
                  <h3 className="font-heading font-semibold text-lg text-[#111] mb-3">Inefficient Route Planning</h3>
                  <p className="text-[#555] text-sm leading-[1.8]">
                    Manual planning of delivery routes with oversight input infrastructure in a mere totality is slowing movement down. Outdated flow logic required hand holding leaving a critical threshold level capacity.
                  </p>
               </div>
               <div>
                  <h3 className="font-heading font-semibold text-lg text-[#111] mb-3">Fragmented Data Silos</h3>
                  <p className="text-[#555] text-sm leading-[1.8]">
                    Inhouse where patches and pieces line across the input infrastructure in a mere totality is slowing measurement metrics drastically. Out of alignment hand amount leaving a critical threshold level legacy stored files.
                  </p>
               </div>
               <div>
                  <h3 className="font-heading font-semibold text-lg text-[#111] mb-3">Scalability Bottlenecks</h3>
                  <p className="text-[#555] text-sm leading-[1.8]">
                    Network where patches and pieces line across the input infrastructure in a mere totality is slowing movement down. Outdated flow logic required hand holding leaving a critical threshold level capacity movement.
                  </p>
               </div>
               <div>
                  <h3 className="font-heading font-semibold text-lg text-[#111] mb-3">Lack of Real-Time Visibility</h3>
                  <p className="text-[#555] text-sm leading-[1.8]">
                    Outlooks where global supply chains shift across input infrastructure in a mere totality is slowing movement in cloud processing. New approaches fault outwork leaving a critical threshold level legacy dropped orders.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution Section */}
      <section className="w-full pb-24 px-5 md:px-10 lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Our Solution
            </h2>
            <p className="font-body text-[#555] uppercase tracking-wider text-xs font-medium max-w-[700px] mx-auto">
              Implementing the Safal Enterprise Stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {solutionCards.map((card, idx) => (
              <div key={idx} className={`${card.bgColor} p-8 md:p-10 rounded shadow-sm hover:-translate-y-1 transition-transform flex flex-col items-start h-full`}>
                <div className={`${card.textColor} font-medium text-[10px] tracking-widest uppercase flex items-center gap-2 mb-8`}>
                  <span className={`w-3 h-3 rounded border border-current flex items-center justify-center text-[6px]`}>+</span> 
                  {card.step}
                </div>
                <div className="w-full aspect-[4/3] border border-[#00000008] bg-black/5 rounded mb-8 flex items-center justify-center">
                  <span className={`text-[10px] ${card.textColor} uppercase tracking-wider font-semibold text-center px-4`}>{card.imgText}</span>
                </div>
                <h3 className="font-heading font-semibold text-[#111] text-lg mb-4">{card.title}</h3>
                <p className="font-body text-[#555] text-sm leading-[1.8]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Stats Section */}
      <section className="w-full max-w-[1600px] mx-auto px-5 lg:px-[60px] pb-32">
        <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[#0A0D0E]/80">
            <div className="w-full h-full flex items-center justify-center mix-blend-overlay opacity-30">
               <span className="text-white font-medium tracking-widest text-xs uppercase bg-white/10 p-4 rounded backdrop-blur border border-white/20">Dark Warehouse Image Placeholder</span>
            </div>
          </div>
          <div className="absolute inset-0 p-10 md:p-16 flex flex-col items-start">
             <span className="bg-white text-[#111] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 shadow-sm">
               Our Impact P/A
             </span>
             <h2 className="font-heading font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
               300% increase in<br />operational velocity
             </h2>
             <p className="text-white/70 font-body text-sm md:text-base max-w-[600px] mb-auto">
               A complete transformation of scaled manufacturing logistics.
             </p>

             {/* Metrics row */}
             <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-12 pt-12 border-t border-white/20 mt-16 text-white overflow-hidden">
                <div className="flex-1 border-l-2 border-[#D54B26] pl-6 py-2 bg-gradient-to-r from-transparent to-transparent hover:from-white/5 transition-colors">
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2">300%</div>
                  <div className="text-sm font-semibold tracking-wide">Operational Velocity</div>
                  <div className="text-xs text-white/50 mt-1">Via Safal Processing</div>
                </div>
                <div className="flex-1 border-l-2 border-[#D54B26] pl-6 py-2 bg-gradient-to-r from-transparent to-transparent hover:from-white/5 transition-colors">
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2">14%</div>
                  <div className="text-sm font-semibold tracking-wide">Delivery Increase</div>
                  <div className="text-xs text-white/50 mt-1">Within first quarter</div>
                </div>
                <div className="flex-1 border-l-2 border-[#D54B26] pl-6 py-2 bg-gradient-to-r from-transparent to-transparent hover:from-white/5 transition-colors">
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2">0</div>
                  <div className="text-sm font-semibold tracking-wide">Downtime Cost</div>
                  <div className="text-xs text-white/50 mt-1">Zero fault SLA</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Result We Deliver & Video block */}
      <section className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px] pb-32">
         <h2 className="font-heading font-semibold text-[#111] text-3xl md:text-[40px] mb-12">
            Result We Deliver
         </h2>
         <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
               <div>
                 <h4 className="font-heading font-semibold text-[#111] mb-2">Lorem ipsum dolor sit.</h4>
                 <p className="text-[#555] text-sm leading-[1.8]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div>
                 <h4 className="font-heading font-semibold text-[#111] mb-2">Lorem ipsum dolor.</h4>
                 <p className="text-[#555] text-sm leading-[1.8]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div>
                 <h4 className="font-heading font-semibold text-[#111] mb-2">Lorem ipsum.</h4>
                 <p className="text-[#555] text-sm leading-[1.8]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div>
                 <h4 className="font-heading font-semibold text-[#111] mb-2">Lorem ipsum dolor sit amet.</h4>
                 <p className="text-[#555] text-sm leading-[1.8]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 aspect-video bg-[#000]/10 border border-[#E1DBCA] rounded relative group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-[#000]/5 flex items-center justify-center">
                   <div className="w-full h-full absolute inset-0 mix-blend-multiply flex items-center justify-center">
                     <span className="text-[#444] font-semibold text-xs tracking-widest uppercase">Video Cables Graphic</span>
                   </div>
                   <div className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-blur group-hover:bg-[#D54B26] group-hover:border-[#D54B26] transition-all duration-300 z-10 shadow-lg">
                      <Play className="text-white ml-1" fill="white" size={20} />
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Conclusion */}
      <section className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <h2 className="font-heading text-3xl md:text-[40px] font-semibold text-[#111] mb-8">
          Conclusion
        </h2>
        <div className="prose-lg text-[#555] font-body leading-[1.8] max-w-[1200px]">
          <p>
            The true power of a modern ERP is in its scaling capacity. Our systems embed directly into the user interface, routing passive dashboards into active strategic advisors. Whether it is anticipating supply chain bottlenecks or forecasting financial trends in trading, the system moves from being a system of record to a system of intelligence.
          </p>
          <p>
            Egestas sed hac suspendisse leo in scelerisque pharetra dui adipiscing. Cursus cursus et congruo enim in volutpat dui non interdum lectus bibendum laoreet. Posuere gravida diam lorem vitae diam, aeuS mattis. Id diam nulla sapien proin prso udut. Vitae enim ispum, in turpis eti. Ei pmtitum mclostid ci id sod semper iusqsn tlissa rmo stia
          </p>
          <p>
            "Ssfal !riosysttns gsvc iis d a oL r w m isin iui. i. isr unctici illy xisirfii.l lto iicv.r si ui si uliiiin ir si. c.. i ci cti .Ity Th ui o lli i i is uic w y inr in . il p cly."
          </p>
          <p className="italic text-sm pt-4">
             — Chief Operations Officer, Global Stahl AG Logistics
          </p>
        </div>
      </section>
    </main>
  );
}
