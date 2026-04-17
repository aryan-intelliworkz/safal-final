import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function GroupStructurePage() {
  const divisions = [
    { name: 'Enterprise Products & Platforms', desc: 'Core software systems powering global organizations.' },
    { name: 'Brand, Digital & Creative Services', desc: 'Transforming brand narratives into digital experiences.' },
    { name: 'Startup Product Development & Consulting', desc: 'Executing vision to MVP to scalable product.' },
    { name: 'Industrial Automation & IoT', desc: 'Hardware and software convergence for smart manufacturing.' },
    { name: 'AI & Emerging Technology', desc: 'Agentic operations and cognitive business automation.' },
    { name: 'Business & Financial Advisory', desc: 'Strategic consulting for sustainable scaling.' },
    { name: 'Financial Accounting', desc: 'Precision accounting frameworks and compliance.' },
    { name: 'Technology Staffing', desc: 'Deploying elite engineering talent globally.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Group Structure" 
        description="Eight specialized divisions operating as one unified ecosystem to deliver end-to-end enterprise transformation."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <SectionTitle title="The Architecture of Safal Group" alignment="center" subtitle="Our Divisions" />
          <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            We operate a unique hub-and-spoke model. Each of our eight divisions is led by domain experts and operates with high autonomy, yet they all orbit a central core of shared engineering standards, cultural values, and strict financial governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {divisions.map((div, i) => (
            <div key={div.name} className="bg-white p-8 border border-[#EEE] hover:border-[#D54B26] transition-colors group cursor-pointer">
              <div className="text-[#D54B26] font-heading text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                0{i + 1}.
              </div>
              <h3 className="font-heading font-semibold text-[#111] mb-3 text-xl">{div.name}</h3>
              <p className="font-body text-[#666] text-sm leading-relaxed">{div.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
