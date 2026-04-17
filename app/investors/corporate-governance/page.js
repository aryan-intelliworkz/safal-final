import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function CorporateGovernancePage() {
  const documents = [
    'Code of Business Conduct and Ethics',
    'Corporate Governance Guidelines',
    'Audit Committee Charter',
    'Compensation Committee Charter',
    'Nominating and Corporate Governance Committee Charter'
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Corporate Governance" 
        description="Integrity, accountability, and the operational guidelines we follow."
      />

      <section className="w-full py-16 md:py-24 max-w-[1000px] mx-auto px-5 md:px-10">
        <SectionTitle title="Governance Documents" subtitle="Compliance" />
        
        <p className="font-body text-[#555] leading-relaxed mb-8">
          The Board of Directors of Safal Group is committed to the highest standards of corporate governance. We believe that robust governance practices are essential to creating long-term value for our shareholders, employees, and the ecosystem at large.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#EEE] flex flex-col sm:flex-row justify-between sm:items-center hover:shadow-md transition-shadow">
              <span className="font-body text-[#111] font-medium mb-3 sm:mb-0">{doc}</span>
              <button className="text-[#D54B26] font-body text-sm font-semibold tracking-wide uppercase border border-[#D54B26] px-4 py-2 hover:bg-[#D54B26] hover:text-white transition-colors self-start sm:self-auto">
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
