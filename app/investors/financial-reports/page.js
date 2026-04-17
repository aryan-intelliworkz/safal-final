import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function FinancialReportsPage() {
  const reports = [
    { year: 2025, docs: ['Q4 Annual Report', 'Q3 Earnings', 'Q2 Earnings', 'Q1 Earnings'] },
    { year: 2024, docs: ['Annual Report & Proxy', 'Q4 Earnings', 'Q3 Earnings', 'Q1 & Q2 Earnings'] }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Financial Reports & Disclosures" 
        description="Comprehensive records of our financial health and performance."
      />

      <section className="w-full py-16 md:py-24 max-w-[1000px] mx-auto px-5 md:px-10">
        <SectionTitle title="Historical Filings" subtitle="Reports" />
        
        <div className="space-y-12 mt-12">
          {reports.map(yearGroup => (
            <div key={yearGroup.year}>
              <h3 className="font-heading font-semibold text-[#111] text-3xl mb-6 border-b border-[#CCC] pb-2">{yearGroup.year}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {yearGroup.docs.map(doc => (
                  <div key={doc} className="bg-white p-6 border border-[#EEE] flex justify-between items-center hover:shadow-md transition-shadow cursor-pointer">
                    <span className="font-body text-[#111] font-medium">{doc}</span>
                    <span className="font-body text-xs text-[#888] uppercase tracking-wider">PDF &darr;</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
