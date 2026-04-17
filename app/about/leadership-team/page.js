import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function LeadershipTeamPage() {
  const leaders = [
    { name: 'Dr. Aravind Mehta', role: 'Chief Executive Officer', desc: 'Over 25 years scaling deep tech enterprises globally.' },
    { name: 'Sarah Chacko', role: 'Chief Operating Officer', desc: 'Architect of operational frameworks across our 8 divisions.' },
    { name: 'Vikram Singh', role: 'Head of Industrial AI', desc: 'Pioneer in agentic automation applied to manufacturing.' },
    { name: 'Priya Rajan', role: 'Chief Financial Officer', desc: 'Ensuring strict financial governance and sustainable capital allocation.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Leadership Team" 
        description="Meet the minds engineering the unified ecosystems of the future."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <SectionTitle title="Guiding the Vision" alignment="center" subtitle="Our Leaders" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <div key={leader.name} className="group bg-white border border-[#EEE] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/4] bg-[#E5E0D5]">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-[#888] font-body text-sm">
                  Photo: {leader.name}
                </div>
                <div className="absolute inset-0 bg-[#D54B26]/0 group-hover:bg-[#D54B26]/20 transition-colors" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-semibold text-[#111] text-xl mb-1">{leader.name}</h3>
                <p className="font-heading font-medium text-[#D54B26] text-sm mb-3 uppercase tracking-wider">{leader.role}</p>
                <p className="font-body text-[#666] text-sm leading-relaxed">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
