import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';

export default function OpenPositionsPage() {
  const positions = [
    { id: 'se-1', title: 'Senior AI Engineer', department: 'Emerging Technology', location: 'Remote / Bangalore' },
    { id: 'ia-2', title: 'Director of Industrial Automation', department: 'Industrial Solutions', location: 'Mumbai HQ' },
    { id: 'fa-3', title: 'M&A Financial Analyst', department: 'Financial Advisory', location: 'London' },
    { id: 'pd-4', title: 'Product Manager', department: 'Enterprise Platforms', location: 'Hybrid / Pune' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Open Positions" 
        description="Join our team and help architect the global enterprise ecosystem."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <SectionTitle title="Current Openings" subtitle="Join Us" />
        
        <div className="flex flex-col gap-4 mt-8">
          {positions.map(pos => (
            <Link key={pos.id} href={`/careers/open-positions/${pos.id}`} className="group bg-white p-6 md:p-8 border border-[#EEE] hover:border-[#D54B26] transition-colors flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-heading font-semibold text-[#111] text-xl mb-2 group-hover:text-[#D54B26] transition-colors">{pos.title}</h3>
                <div className="flex gap-4 font-body text-sm text-[#888]">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#888]"></span>{pos.department}</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#888]"></span>{pos.location}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 px-6 py-3 border border-[#111] text-[#111] font-body text-sm group-hover:bg-[#111] group-hover:text-white transition-colors">
                View Details
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
