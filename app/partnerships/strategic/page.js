import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function StrategicPartnershipsPage() {
  const ecosystems = [
    { name: 'Cloud Infrastructure', partners: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
    { name: 'Industrial Hardware', partners: ['Siemens', 'Rockwell Automation', 'ABB'] },
    { name: 'Enterprise Software', partners: ['SAP', 'Oracle', 'Salesforce'] }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Strategic Partnerships" 
        description="Collaborating with global leaders to provide unified solutions."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <SectionTitle title="The Ecosystem Approach" subtitle="Alliances" />
            <p className="font-body text-[#555] leading-relaxed mb-6">
              No single company can solve every enterprise challenge. We partner with the world's leading technology providers to ensure our architectural implementations integrate seamlessly with the tools our clients already trust.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystems.map((eco) => (
              <div key={eco.name} className="bg-white p-8 border border-[#EEE]">
                <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">{eco.name}</h3>
                <ul className="space-y-3 font-body text-[#555]">
                  {eco.partners.map(p => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D54B26]"></span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
