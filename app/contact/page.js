import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Initiate the Next Phase<br />of Growth.</>}
        description="Whether you require robust enterprise infrastructure, visionary creative strategy, or elite financial advisory, our global team is ready to engineer your solution. Connect with Safal Group to begin."
        rightImage="/images/MasterLayoutBG.png"
      />

      {/* Middle Form Section */}
      <section className="w-full py-16 md:py-24 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="bg-[#FAF8ED] border border-[#EBE7D8] rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-sm">
          
          {/* Left Side */}
          <div className="w-full lg:w-5/12 p-10 md:p-16 lg:p-20 flex flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-[#EBE7D8] bg-white text-[#111]">
            <h2 className="font-heading font-semibold leading-[1.1] mb-12" style={{ fontSize: 'clamp(32px, 3.5vw, 56px)' }}>
              Connect with Our<br />Global Team.
            </h2>
            <div className="relative w-[80%] max-w-[400px] aspect-[4/3] mt-auto">
              <Image src="/images/ContactHandShake.png" alt="Partnership Handshake" fill className="object-contain object-left-bottom" />
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20">
            <form className="space-y-8 max-w-[800px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-[15px] font-medium">Full Name</label>
                  <input type="text" className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] transition-colors rounded text-[#333] placeholder:text-[#AAA]" placeholder="e.g. Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-[15px] font-medium">Service Interested In</label>
                  <select className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] transition-colors rounded text-[#555] appearance-none">
                    <option>Select a division</option>
                    <option>Enterprise Products & Platforms</option>
                    <option>Startup Product Development & Consulting</option>
                    <option>Industrial Automation & IoT</option>
                    <option>Business & Financial Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-[15px] font-medium">Phone Number</label>
                  <input type="tel" className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] transition-colors rounded text-[#333] placeholder:text-[#AAA]" placeholder="e.g. +1 (555) 000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-[15px] font-medium">Email ID</label>
                  <input type="email" className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] transition-colors rounded text-[#333] placeholder:text-[#AAA]" placeholder="e.g. name@yourcompany.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-[15px] font-medium">Message</label>
                <textarea rows="4" className="w-full border border-[#DCD5C6] bg-transparent p-4 focus:outline-none focus:border-[#D54B26] transition-colors rounded resize-none text-[#333] placeholder:text-[#AAA]" placeholder="Briefly describe your project or requirements..."></textarea>
              </div>

              <button type="button" className="border border-[#D54B26] text-[#D54B26] px-12 py-3.5 font-medium hover:bg-[#D54B26] hover:text-white transition-colors rounded group mt-4">
                <span className="group-hover:scale-105 inline-block transition-transform">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <section className="relative w-full max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px] pb-24 md:pb-32 overflow-hidden lg:overflow-visible">
        
        {/* Absolute Globe Background */}
        <div className="absolute right-[-100px] lg:right-0 top-0 w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] max-w-[60vw] aspect-square opacity-20 pointer-events-none z-[1]">
          <Image src="/images/ContactGlobe.png" alt="Globe" fill className="object-contain object-right" />
        </div>

        <div className="relative z-[2] max-w-[1400px]">
          <h2 className="font-heading font-semibold text-[#111] leading-[1.1] mb-6" style={{ fontSize: 'clamp(28px, 3.2vw, 48px)' }}>
            A Global Footprint. A Local Partnership.
          </h2>
          <p className="font-body text-[#555] leading-[1.7] max-w-[900px] mb-16" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            With strategic hubs across India, the UAE, and the USA, Safal delivers world-class execution with localized insight. Reach out to the office nearest you to discuss how our integrated divisions can scale your enterprise globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* India Office */}
            <div className="space-y-5">
              <h4 className="font-semibold text-[#111] text-xl mb-4 border-b border-[#E1DBCA] pb-2 inline-block">India Office</h4>
              <div className="flex items-start gap-4 text-[#555]">
                <MapPin size={22} className="text-[#888] shrink-0 mt-0.5 font-light" strokeWidth={1.5} />
                <p className="leading-relaxed text-[15px]">Safal Business Towers, S.G. Highway,<br/>Thaltej, Ahmedabad, Gujarat 380054</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Phone size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">+91 97370 45561</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Mail size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">hello@safalinfosoft.com</p>
              </div>
            </div>

            {/* UAE Office */}
            <div className="space-y-5">
              <h4 className="font-semibold text-[#111] text-xl mb-4 border-b border-[#E1DBCA] pb-2 inline-block">UAE Office</h4>
              <div className="flex items-start gap-4 text-[#555]">
                <MapPin size={22} className="text-[#888] shrink-0 mt-0.5 font-light" strokeWidth={1.5} />
                <p className="leading-relaxed text-[15px]">Business Bay, PO Box 3345,<br/>Dubai, United Arab Emirates</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Phone size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">+91 97370 45561</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Mail size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">hello@safalinfosoft.com</p>
              </div>
            </div>

            {/* USA Office */}
            <div className="space-y-5">
              <h4 className="font-semibold text-[#111] text-xl mb-4 border-b border-[#E1DBCA] pb-2 inline-block">USA Office</h4>
              <div className="flex items-start gap-4 text-[#555]">
                <MapPin size={22} className="text-[#888] shrink-0 mt-0.5 font-light" strokeWidth={1.5} />
                <p className="leading-relaxed text-[15px]">285 W 23rd St, New York,<br/>NY 10011, United States</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Phone size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">+91 97370 45561</p>
              </div>
              <div className="flex items-center gap-4 text-[#555]">
                <Mail size={20} className="text-[#888] shrink-0 font-light" strokeWidth={1.5} />
                <p className="text-[15px]">hello@safalinfosoft.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
