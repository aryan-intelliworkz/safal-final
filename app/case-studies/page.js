import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function CaseStudiesPage() {
  const cases = [
    { client: 'Stahl Auto AG', title: 'Reducing Defect Rates by 34% via Edge-AI Vision', metrics: ['34% lower defects', '$2M annual savings'] },
    { client: 'Globex Finance', title: 'Architecting a Unified Ledger for 12 Global Entities', metrics: ['Sub-second reconciliation', 'Regulatory zero-fault audit'] },
    { client: 'Nova Logistics', title: 'Agentic Routing Across 4 Continents', metrics: ['18% fuel cost reduction', 'Automated crisis rerouting'] }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Case Studies" 
        description="Proof of scale. Real-world applications of Safal engineering."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <SectionTitle title="Transformation in Practice" subtitle="Client Stories" />
        
        <div className="flex flex-col gap-12 mt-12">
          {cases.map((c, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 bg-white border border-[#EEE] group hover:border-[#D54B26] transition-colors p-8">
              <div className="w-full md:w-1/3 aspect-[4/3] bg-[#E5E0D5]">
               <div className="w-full h-full flex items-center justify-center font-body text-[#888] text-sm">Main Feature Image</div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#D54B26] mb-3">{c.client}</span>
                <h3 className="font-heading font-semibold text-[#111] text-2xl lg:text-3xl mb-6">{c.title}</h3>
                
                <div className="flex gap-6 mb-8">
                  {c.metrics.map(m => (
                    <div key={m} className="border-l-2 border-[#D54B26] pl-3">
                      <span className="block font-body text-[#555] font-medium">{m}</span>
                    </div>
                  ))}
                </div>

                <button className="self-start text-[#111] font-body text-sm font-semibold tracking-wide uppercase border border-[#111] px-6 py-2 group-hover:bg-[#111] group-hover:text-white transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
