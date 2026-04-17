import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function SustainabilityPage() {
  const commitments = [
    { num: '01', title: 'Carbon Neutrality by 2030', desc: 'Transitioning our entire data center infrastructure and operational facilities to 100% renewable energy.' },
    { num: '02', title: 'Circular Hardware Lifecycle', desc: 'Implementing zero-ewaste policies across all our industrial automation hardware deployments.' },
    { num: '03', title: 'Sustainable Engineering', desc: 'Optimizing algorithmic efficiency to reduce computational overhead and energy consumption for our clients.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Sustainability" 
        description="Our commitment to engineering a future where enterprise growth and environmental stewardship are mutually reinforcing."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Our Imprint Goes Beyond Software" subtitle="The Mandate" />
            <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              A technology company’s most lasting impact is not measured purely in revenue or code deployed. It is measured in the long-term sustainability of the ecosystems it creates.
            </p>
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              Safal Group integrates ESG principles natively into our design and engineering processes. We do this not for compliance, but because we recognize that long-term enterprise survival demands systemic ecological balance.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded bg-[#E5E0D5] overflow-hidden">
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-[#888] font-body bg-[#111] text-white/50">
                Sustainability Imprint Image
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
          <SectionTitle title="Core Commitments" alignment="center" subtitle="Actionable Targets" />
          
          <div className="flex flex-col gap-6 max-w-[1000px] mx-auto mt-12">
            {commitments.map((c) => (
              <div key={c.num} className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 border border-[#EEE] hover:border-[#D54B26] transition-colors group">
                <div className="font-heading text-4xl md:text-6xl text-[#E5E0D5] group-hover:text-[#D54B26] transition-colors shrink-0">
                  {c.num}.
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[#111] text-2xl mb-3">{c.title}</h3>
                  <p className="font-body text-[#666] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
