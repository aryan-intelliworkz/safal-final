import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Contact Us" 
        description="Whether you're exploring enterprise systems, seeking strategic advisory, or looking to partner."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12">
            <SectionTitle title="Let's start the conversation" subtitle="Get in touch" />
            <p className="font-body text-[#555] leading-relaxed mb-8">
              Every major transformation starts with a single dialogue. Tell us what you need, and we will connect you directly with the engineering lead or partner who can make it happen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D54B26] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#111] mb-1">Global Headquarters</h4>
                  <p className="font-body text-[#555] text-sm leading-relaxed">
                    Safal Infosoft Limited<br/>
                    Tech Park, Block B, Floor 4<br/>
                    Ahmedabad, Gujarat, India 380015
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#D54B26] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#111] mb-1">Phone</h4>
                  <p className="font-body text-[#555] text-sm">+91 97370 45561</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#D54B26] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-[#111] mb-1">Email</h4>
                  <p className="font-body text-[#555] text-sm">hello@safalinfosoft.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 border border-[#EEE] shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Full Name</label>
                  <input type="text" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Company / Organization</label>
                  <input type="text" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" placeholder="Acme Corp" />
                </div>
              </div>
              <div>
                <label className="font-body text-[#111] text-sm font-medium mb-2 block">Email Address</label>
                <input type="email" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="font-body text-[#111] text-sm font-medium mb-2 block">Inquiry Type</label>
                <select className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]">
                  <option>Enterprise Software Development</option>
                  <option>Industrial Automation</option>
                  <option>Strategic Partnerships</option>
                  <option>Investor Relations</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-[#111] text-sm font-medium mb-2 block">Message</label>
                <textarea rows="5" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26] resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="button" className="bg-[#111] text-white px-10 py-3 font-body font-medium hover:bg-[#D54B26] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
