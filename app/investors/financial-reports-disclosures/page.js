import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function FinancialReportsPage() {
  const reports = [
    "Annual Report for the year 2024-2025",
    "Annual Report for the year 2023-2024",
    "Annual Report for the year 2022-2023",
    "Annual Report for the year 2021-2022",
    "Annual Report for the year 2020-2021",
    "Annual Report for the year 2019-2020",
    "Annual Report for the year 2018-2019",
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden flex flex-col">
      <MasterLayoutHeader 
        title={<>Radical Transparency.<br />Measurable Scale.</>}
        description="Access our comprehensive financial data, quarterly earnings, SEC filings, and annual reports. We believe that true market leadership requires unfiltered clarity. Track our compounding growth, operational margins, and strategic capital deployment across our global ecosystem."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Intro Text Section */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            A Borderless Brain-Trust.
          </h2>
          <p className="font-body text-[#555] leading-relaxed max-w-[1100px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
            Talent is not restricted by geography. Our operational infrastructure allows a systems architect in New York to collaborate flawlessly in real-time with a UI/UX director in Dubai and a low-code engineering lead in Ahmedabad. We operate as a singular, synchronized global team, ensuring you are always learning from the best minds in the industry.
          </p>
        </div>
      </section>

      {/* Reports Filter & List Section */}
      <section className="w-full pb-24 md:pb-32 max-w-[1200px] mx-auto px-5 md:px-10 flex-grow">
        
        {/* Controls Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
           
           {/* Left: Category Pills */}
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="bg-[#D54B26] text-white px-6 py-2.5 rounded-full font-body text-sm tracking-wide transition-colors">
                Annual Reports
              </button>
              <button className="bg-transparent border border-[#CCC] text-[#777] px-6 py-2.5 rounded-full font-body text-sm tracking-wide hover:border-[#D54B26] hover:text-[#D54B26] transition-colors">
                Quarterly Results
              </button>
              <button className="bg-transparent border border-[#CCC] text-[#777] px-6 py-2.5 rounded-full font-body text-sm tracking-wide hover:border-[#D54B26] hover:text-[#D54B26] transition-colors">
                Financial Presentations
              </button>
              <button className="bg-transparent border border-[#CCC] text-[#777] px-6 py-2.5 rounded-full font-body text-sm tracking-wide hover:border-[#D54B26] hover:text-[#D54B26] transition-colors">
                CSR Reports
              </button>
           </div>

           {/* Right: Year Filter */}
           <div className="relative">
              <select className="appearance-none bg-transparent border border-[#D54B26]/40 text-[#D54B26] text-sm pr-12 pl-6 py-2.5 rounded shadow-sm focus:outline-none focus:border-[#D54B26] cursor-pointer">
                <option>Filter by Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D54B26] opacity-80">
                 <ChevronDown size={16} strokeWidth={2} />
              </div>
           </div>

        </div>

        {/* Reports List */}
        <div className="flex flex-col">
          {reports.map((report, idx) => (
             <a 
               key={idx} 
               href="#" 
               className="flex items-center justify-between py-6 border-b border-[#E1DBCA] group hover:bg-black/[0.02] transition-colors px-4 -mx-4 rounded"
             >
                <span className="font-heading font-medium text-[#111] text-lg group-hover:text-[#D54B26] transition-colors">
                  {report}
                </span>
                <ArrowUpRight className="text-[#888] group-hover:text-[#D54B26] transition-colors" size={24} strokeWidth={1.5} />
             </a>
          ))}
        </div>

      </section>

    </main>
  );
}
