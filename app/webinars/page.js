import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function WebinarsPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Webinars & Events" 
        description="Join our engineering leads and industry experts in deep-dive sessions."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <SectionTitle title="Upcoming Sessions" subtitle="Register" />
        
        <div className="bg-white p-8 md:p-12 border border-[#EEE] mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
             <span className="inline-block bg-[#D54B26]/10 text-[#D54B26] font-body text-xs px-3 py-1 font-semibold uppercase tracking-wider mb-4">Live Masterclass</span>
             <h3 className="font-heading font-semibold text-[#111] text-2xl mb-2">Architecting the Agentic Enterprise</h3>
             <p className="font-body text-[#555] mb-2">November 15, 2026 • 10:00 AM EST</p>
             <p className="font-body text-[#666] text-sm">Speaker: Vikram Singh, Head of Industrial AI</p>
          </div>
          <button className="bg-[#111] text-white px-8 py-3 font-body font-medium hover:bg-[#D54B26] transition-colors shrink-0">
            Reserve Seat
          </button>
        </div>

        <div className="mt-24">
          <SectionTitle title="On-Demand Recordings" subtitle="Past Events" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-[#EEE] group cursor-pointer hover:shadow-md transition-shadow">
                 <div className="w-full aspect-video bg-[#E5E0D5] relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#111]/80 group-hover:bg-[#D54B26] transition-colors flex items-center justify-center">
                      <div className="w-0 h-0 border-t-6 border-t-transparent border-l-[10px] border-l-white border-b-6 border-b-transparent ml-1"></div>
                    </div>
                 </div>
                 <div className="p-6">
                   <h4 className="font-heading font-semibold text-[#111] mb-2">Structuring M&A for Tech Spin-offs {i}</h4>
                   <p className="font-body text-[#888] text-xs">Runtime: 45 mins</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
