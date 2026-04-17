import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function BecomePartnerPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Become a Partner" 
        description="Join forces with Safal Group to deliver exponential value to global enterprises."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Co-create the future" subtitle="Partnership Inquiry" />
            <p className="font-body text-[#555] leading-relaxed mb-6">
              We are actively looking for system integrators, technology vendors, and domain consultants who share our obsession with quality and scale.
            </p>
            <div className="bg-white p-8 border border-[#EEE] mt-8">
              <h4 className="font-heading font-semibold text-[#111] mb-2">Partnership Criteria</h4>
              <ul className="list-disc pl-5 font-body text-[#555] space-y-2">
                <li>Proven track record in enterprise deployment</li>
                <li>Alignment with our core engineering values</li>
                <li>Complementary technology stack or domain expertise</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 border border-[#EEE] shadow-sm">
            <h3 className="font-heading font-semibold text-[#111] text-2xl mb-6">Partnership Application</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Company Name</label>
                  <input type="text" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" />
                </div>
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Website URL</label>
                  <input type="text" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Contact Person</label>
                  <input type="text" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" />
                </div>
                <div>
                  <label className="font-body text-[#111] text-sm font-medium mb-2 block">Email Address</label>
                  <input type="email" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26]" />
                </div>
              </div>
              <div>
                <label className="font-body text-[#111] text-sm font-medium mb-2 block">Partnership Proposal / Value Hypothesis</label>
                <textarea rows="4" className="w-full border border-[#CCC] p-3 font-body bg-[#FAFAFA] focus:outline-none focus:border-[#D54B26] resize-none"></textarea>
              </div>
              <button type="button" className="bg-[#111] text-white px-8 py-3 font-body font-medium hover:bg-[#D54B26] transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
