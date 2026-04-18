import Image from 'next/image';
import MasterLayoutHeader from '@/components/MasterLayoutHeader';

export default function CorporateGovernancePage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Zero-Trust Ethics.<br />Unyielding Discipline.</>}
        description="In a world where trust is often a vulnerability, the Safal Group operates on a zero-trust governance model. We do not place blind faith in people or processes—we rely on rigorous checks, immutable logs, and relentless accountability."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* A Legacy of Accountability */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-8 pr-0 md:pr-8">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              A Legacy of Accountability
            </h2>
            <div className="space-y-6 text-[#555] font-body leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              <p>
                We always operate transparently across every enterprise vertical within the Safal Group. We simply don't rely only on faith in our internal team. Safal Group's governance framework is built on a simple foundation: verify everything, trust nothing blindly.
              </p>
              <p>
                By embedding rigorous oversight mechanisms... Safal Group minimizes operational risks, ensures regulatory compliance, and protects stakeholder interests. Security protocols, robust auditing practices... Safal group holds everyone accountable and maintains rigid adherence.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex flex-col items-center justify-center">
             <div className="relative w-[90%] max-w-[350px] aspect-[3/4] flex items-center justify-center border border-dashed border-[#CCC] rounded bg-[#FFFBEE]/50 mix-blend-multiply border-[#D54B26]/20">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase px-2 shadow-sm z-10 text-center bg-white/50 backdrop-blur rounded p-2 text-[#D54B26]">
                 Hourglass Graphic Sketch<br/>Placeholder
               </span>
             </div>
          </div>
        </div>
      </section>

      {/* The Architecture of Our Oversight */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            The Architecture of Our Oversight.
          </h2>
          <p className="font-body text-[#555] uppercase tracking-wider text-sm font-medium max-w-[700px] mx-auto">
            While others rely on people to do the right thing, we build systems that make doing the wrong thing impossible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#EAF0CB] p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
            <div className="text-[#5C6B2B] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span> 
              Core Principle
            </div>
            <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
              <span className="text-xs text-[#5C6B2B] uppercase tracking-wider font-semibold">Illustration</span>
            </div>
            <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Independent Oversight</h3>
            <p className="font-body text-[#555] text-sm leading-relaxed">
              We maintain an independent majority of directors, ensuring an unprejudiced approach to oversight and strategic decision making.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#D1EAF4] p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
            <div className="text-[#2B6073] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span> 
              Core Principle
            </div>
            <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
               <span className="text-xs text-[#2B6073] uppercase tracking-wider font-semibold">Illustration</span>
            </div>
            <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Zero-Trust Compliance</h3>
            <p className="font-body text-[#555] text-sm leading-relaxed">
              Our strict internal auditing procedures continuously monitor operations to prevent regulatory and financial breaches.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F2DACF] p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
            <div className="text-[#7A4B36] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
               <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span> 
               Core Principle
            </div>
            <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
               <span className="text-xs text-[#7A4B36] uppercase tracking-wider font-semibold">Illustration</span>
            </div>
            <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Risk Mitigation</h3>
            <p className="font-body text-[#555] text-sm leading-relaxed">
              We strictly implement continuous risk management processes with real-time tracking, preemptively identifying vulnerabilities and addressing them.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#D5E8D7] p-8 md:p-10 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
            <div className="text-[#3A6B3D] font-medium text-xs tracking-wider uppercase flex items-center gap-2 mb-8">
               <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">4</span> 
               Core Principle
            </div>
            <div className="w-full aspect-[4/3] bg-black/5 rounded mb-8 flex items-center justify-center relative overflow-hidden">
               <span className="text-xs text-[#3A6B3D] uppercase tracking-wider font-semibold">Illustration</span>
            </div>
            <h3 className="font-heading font-semibold text-[#111] text-xl mb-3">Shareholder Transparency</h3>
            <p className="font-body text-[#555] text-sm leading-relaxed">
              We are radically transparent with all our investors. We conduct regular reporting to ensure shareholders are updated in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Governing the Digital Frontier */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px] bg-transparent">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24">
           <div className="w-full md:w-5/12 flex items-center justify-center">
             <div className="relative w-[90%] max-w-[400px] aspect-[4/3] flex items-center justify-center border border-dashed border-[#CCC] rounded bg-[#FFFBEE]/50 border-[#D54B26]/20">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase px-2 shadow-sm z-10 text-center bg-white/50 backdrop-blur rounded p-2 text-[#D54B26]">
                 Stones Illustration Placeholder
               </span>
             </div>
          </div>
          <div className="flex-1 space-y-8 pr-0 md:pr-8">
            <h2 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Governing the<br/>Digital Frontier.
            </h2>
            <div className="space-y-6 text-[#555] font-body leading-relaxed" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              <p>
                Across a digitized landscape where data breaches occur frequently, Safal Group takes a proactive stance. We execute rigorous security protocols over our data infrastructure, ensuring that sensitive information remains protected. Our internal policies act as a firewall against external threats and internal discrepancies.
              </p>
              <p>
                Safal Group mandates the highest standards of data governance. Data is our most sensitive asset, and we guard it ferociously. We ensure zero vulnerabilities through stringent access controls and robust audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Legacy of Responsible Scale. */}
      <section className="relative w-full py-24 md:py-32 flex items-center justify-center border-y border-[#EBE7D8] bg-[#FFFBEE]">
         <div className="relative z-10 w-full px-5">
           <div className="max-w-[1000px] mx-auto text-center px-6 md:px-10 py-16">
             <h2 className="font-heading font-semibold text-[#111] mb-8 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
               A Legacy of Responsible Scale.
             </h2>
             <p className="text-[#555] font-body leading-relaxed max-w-[800px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
               Corporate governance is not just a defensive measure. It is our absolute mandate. By enforcing rigorous ethical standards and transparent leadership at every level of the Safal Group, we don't just protect our stakeholders' investments—we build a global enterprise designed to endure for generations.
             </p>
           </div>
        </div>
      </section>
    </main>
  );
}
