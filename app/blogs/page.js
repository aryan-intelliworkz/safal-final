import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import { Calendar, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';

export default function BlogsPage() {
  const topics = [
    { name: 'ERP Solutions', count: 24, active: true },
    { name: 'Cloud Migration', count: 18, active: false },
    { name: 'Aviation Tech', count: 12, active: false },
    { name: 'AI & Automation', count: 31, active: false }
  ];

  const contentTypes = [
    { name: 'Whitepapers', count: 45, active: false },
    { name: 'Blog Posts', count: 89, active: true },
    { name: 'Webinars', count: 23, active: false },
    { name: 'Case Studies', count: 34, active: false },
    { name: 'Brochures', count: 19, active: false },
    { name: 'News', count: 21, active: false }
  ];

  const posts = [
    {
      title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
      description: 'Why top-tier B2B organizations are investing heavily in cohesive digital design ecosystems to...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'Business Hands Sketch'
    },
    {
      title: 'Automating the Supply Chain: A 2026 Perspective.',
      description: 'A technical breakdown of how AI and machine learning are eliminating bottlenecks in...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'Factory Arm Sketch'
    },
    {
      title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
      description: 'Why top-tier B2B organizations are investing heavily in cohesive digital design ecosystems to...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'Business Meeting Sketch'
    },
    {
      title: 'The Future of Decentralized Corporate Banking.',
      description: 'How our financial advisory division envisions the next decade of institutional transaction process...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'City Skyline Sketch'
    },
    {
      title: 'Transforming Healthcare with Predictive Analytics.',
      description: 'A case study on implementing data-driven patient care models using Safal\'s facility custom...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'Lab Equipment Sketch'
    },
    {
      title: 'Designing for Data Density in Complex SaaS.',
      description: 'Our Creative Head shares a framework for ensuring accessible, user-friendly interfaces wit...',
      tags: ['ERP Solution', 'Blog'],
      date: '12/02/2026',
      img: 'Screen Monitor Sketch'
    }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Insights & Strategic<br />Foresight</>}
        description="Explore perspectives, industry trends, and technical perspectives from the minds architecting the future of enterprise technology at Safal Group."
        rightImage="/images/MasterLayoutBG.png" 
      />

      <section className="w-full max-w-[1600px] mx-auto px-5 py-16 md:py-20 lg:px-[60px] flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-[280px] shrink-0 border border-[#E1DBCA] bg-transparent">
          <div className="p-6 border-b border-[#E1DBCA] flex items-center justify-between">
            <h3 className="font-heading font-semibold text-[#111] text-lg">Filters</h3>
            <button className="text-[#D54B26] text-xs font-semibold uppercase tracking-wider hover:underline">Clear All</button>
          </div>

          {/* Topic Section */}
          <div className="p-6 border-b border-[#E1DBCA]">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <span className="font-semibold text-sm text-[#333]">Topic</span>
              <ChevronDown size={16} className="text-[#888] transform transition-transform" />
            </div>
            <ul className="space-y-2">
              {topics.map(topic => (
                <li key={topic.name} className={`flex items-center justify-between px-3 py-2 text-sm rounded transition-colors cursor-pointer ${topic.active ? 'text-[#D54B26] font-medium border-l-2 border-[#D54B26] bg-[#D54B26]/[0.03]' : 'text-[#555] hover:bg-black/5 border-l-2 border-transparent'}`}>
                  <span>{topic.name}</span>
                  <span>{topic.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Type Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <span className="font-semibold text-sm text-[#333]">Content Type</span>
              <ChevronDown size={16} className="text-[#888] transform transition-transform" />
            </div>
            <ul className="space-y-2">
               {contentTypes.map(type => (
                <li key={type.name} className={`flex items-center justify-between px-3 py-2 text-sm rounded transition-colors cursor-pointer ${type.active ? 'text-[#D54B26] font-medium border-l-2 border-[#D54B26] bg-[#D54B26]/[0.03]' : 'text-[#555] hover:bg-black/5 border-l-2 border-transparent'}`}>
                  <span>{type.name}</span>
                  <span>{type.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full flex flex-col gap-8">
          {/* Active Filters */}
          <div className="flex flex-wrap items-center gap-4 border-b border-[#E1DBCA] pb-6">
             <span className="font-semibold text-[#111] text-sm">Active Filters:</span>
             <div className="flex items-center gap-2 bg-white border border-[#E1DBCA] px-3 py-1.5 rounded shadow-sm text-sm text-[#555]">
               Blog Posts <button className="hover:text-[#D54B26] transition-colors"><X size={14} /></button>
             </div>
             <div className="flex items-center gap-2 bg-white border border-[#E1DBCA] px-3 py-1.5 rounded shadow-sm text-sm text-[#555]">
               ERP Solutions <button className="hover:text-[#D54B26] transition-colors"><X size={14} /></button>
             </div>
          </div>

          {/* Featured Post */}
          <div className="w-full bg-white border border-[#E1DBCA] rounded shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
             {/* Left Image Placeholder */}
             <div className="w-full md:w-3/5 aspect-video md:aspect-auto bg-[#0A0D0E]/5 border-r border-[#E1DBCA] flex items-center justify-center relative">
               <span className="text-[#888] font-medium tracking-wider text-xs uppercase z-10 px-4 py-2 bg-white/60 backdrop-blur rounded shadow-sm text-center">
                 City Circuit Abstract<br />Featured Image Placeholder
               </span>
               <div className="absolute inset-0 bg-[#D54B26]/5 pointer-events-none mix-blend-multiply" />
             </div>
             <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
               <div className="flex flex-wrap items-center gap-3 mb-6">
                 <div className="flex items-center gap-2 text-[#D54B26] text-xs font-semibold tracking-wider">
                   <Calendar size={14} /> 12/02/2026
                 </div>
                 <span className="px-2 py-0.5 bg-[#D54B26]/10 text-[#D54B26] text-[10px] font-semibold tracking-wider uppercase rounded">Blog</span>
                 <span className="px-2 py-0.5 bg-[#EAF0CB]/60 text-[#5C6B2B] text-[10px] font-semibold tracking-wider uppercase rounded border border-[#EAF0CB]">ERP Solution</span>
               </div>
               <h2 className="font-heading font-semibold text-[#111] leading-tight mb-4 text-2xl lg:text-[28px]">
                 The AI-Driven Enterprise: Scaling Low-Code ERP Across Global Markets.
               </h2>
               <p className="font-body text-[#555] text-sm leading-relaxed mb-8 border-b border-[#E1DBCA] pb-8">
                 Discover how legacy manufacturing hubs are leveraging autonomous data nodes and low-code infrastructure to achieve unprecedented operational velocity and eliminate system friction.
               </p>
               <div>
                  <button className="bg-transparent border border-[#D54B26] text-[#D54B26] px-8 py-2.5 font-semibold text-sm tracking-wide rounded hover:bg-[#D54B26] hover:text-white transition-colors">
                    Read more
                  </button>
               </div>
             </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white border border-[#E1DBCA] rounded shadow-sm hover:shadow-md transition-shadow flex flex-col group">
                <div className="w-full aspect-[16/10] bg-[#00000005]/20 flex items-center justify-center relative border-b border-[#E1DBCA] overflow-hidden">
                   <span className="text-[#888] font-medium tracking-wider text-[10px] uppercase text-center px-4 z-10 group-hover:scale-105 transition-transform duration-500">
                     {post.img}
                   </span>
                   <div className="absolute inset-0 bg-[#D54B26]/0 group-hover:bg-[#D54B26]/5 transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                     <div className="flex items-center gap-1.5 text-[#D54B26] text-[11px] font-semibold tracking-wider w-full mb-1">
                       <Calendar size={13} /> {post.date}
                     </div>
                     <span className="px-2 py-0.5 bg-[#EAF0CB]/60 text-[#5C6B2B] text-[9px] font-semibold tracking-wider uppercase rounded border border-[#E1DBCA]/50">{post.tags[0]}</span>
                     <span className="px-2 py-0.5 bg-[#D54B26]/10 text-[#D54B26] text-[9px] font-semibold tracking-wider uppercase rounded">{post.tags[1]}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-[#111] text-lg leading-tight mb-3 group-hover:text-[#D54B26] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-[#555] text-sm leading-[1.6] mb-6 border-[#E1DBCA] pb-0 hidden md:block opacity-90 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    <Link href="#" className="inline-flex items-center text-[#D54B26] text-[13px] font-semibold tracking-wide hover:underline gap-1.5 transition-all group-hover:gap-2">
                      Read More <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
