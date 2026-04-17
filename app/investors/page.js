import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';

export default function InvestorRelationsPage() {
  const sections = [
    { title: 'Financial Reports & Disclosures', desc: 'Quarterly earnings, annual reports, and SEC filings.', link: '/investors/financial-reports' },
    { title: 'Corporate Governance', desc: 'Board of directors, committees, and compliance documents.', link: '/investors/corporate-governance' },
    { title: 'Investor Events', desc: 'Upcoming webcasts, shareholder meetings, and presentations.', link: '#' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Investor Relations" 
        description="Transparent financial stewardship and long-term value creation."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <SectionTitle title="Information Center" subtitle="Resources" />
            <p className="font-body text-[#555] leading-relaxed">
              We believe in radical transparency. Our investors are partners in our mission to architect the global enterprise.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map(sec => (
              <Link key={sec.title} href={sec.link} className="bg-white p-8 border border-[#EEE] hover:border-[#D54B26] transition-colors group block">
                <h3 className="font-heading font-semibold text-[#111] text-xl mb-3 group-hover:text-[#D54B26] transition-colors">{sec.title}</h3>
                <p className="font-body text-[#666] leading-relaxed mb-6">{sec.desc}</p>
                <span className="font-body text-sm font-medium border-b border-[#111] pb-1 uppercase tracking-wider">Access Info &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
