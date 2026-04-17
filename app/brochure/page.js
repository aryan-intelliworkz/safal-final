import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function BrochurePage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Corporate Brochure" 
        description="Download our comprehensive guide to Safal Group's operations and divisions."
      />

      <section className="w-full py-16 md:py-24 max-w-[1000px] mx-auto px-5 md:px-10">
        <div className="bg-white p-8 md:p-16 border border-[#EEE] shadow-xl flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2 aspect-[3/4] bg-[#E5E0D5] relative shadow-sm">
             <div className="absolute inset-0 flex items-center justify-center font-body text-[#888] text-sm">Brochure Cover</div>
           </div>
           <div className="w-full md:w-1/2">
             <SectionTitle title="Safal 2026 Brief" subtitle="Download" />
             <p className="font-body text-[#555] leading-relaxed mb-8">
               Our 2026 Corporate Brochure provides an in-depth look at our eight specialized divisions, our global footprint, and our strategic pathway for unified enterprise automation.
             </p>
             <button className="bg-[#D54B26] text-white px-8 py-3 font-body font-medium hover:bg-[#111] transition-colors w-full sm:w-auto">
               Download PDF (4.2 MB)
             </button>
           </div>
        </div>
      </section>
    </main>
  );
}
