import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function LifeAtSafalPage() {
  const perks = [
    { title: 'Continuous Learning', desc: 'Dedicated mandate for R&D, certifications, and upskilling.' },
    { title: 'Global Mobility', desc: 'Opportunities to work across our regional offices.' },
    { title: 'Autonomy', desc: 'Flat hierarchy where the best engineering argument wins.' },
    { title: 'Comprehensive Wellness', desc: 'Premium health coverage and dedicated focus on mental well-being.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Life at Safal" 
        description="We are a collective of engineers, domain experts, and visionaries."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Build your life's work here." subtitle="Our Environment" />
            <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              Joining Safal means more than executing tickets. It means participating in the architecture of systems that define global industries. We foster an environment that respects deep work, demands excellence, and rewards innovation.
            </p>
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              Whether you are optimizing an AI agent or structuring a complex financial merger, you will be surrounded by people who are the absolute best at what they do.
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-[#E5E0D5] flex items-center justify-center text-[#888] text-sm">Image 1</div>
            <div className="aspect-[4/5] bg-[#E5E0D5] flex items-center justify-center text-[#888] text-sm mt-8">Image 2</div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
          <SectionTitle title="Why Safal?" alignment="center" subtitle="Benefits & Growth" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {perks.map(perk => (
              <div key={perk.title} className="p-8 border border-[#EEE] hover:border-[#D54B26] transition-colors group text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFFBEE] mx-auto mb-6 group-hover:scale-110 transition-transform"></div>
                <h3 className="font-heading font-semibold text-[#111] mb-3">{perk.title}</h3>
                <p className="font-body text-[#666] text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
