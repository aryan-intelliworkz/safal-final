import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';

export default function BlogsPage() {
  const posts = [
    { id: 'agentic-ai-manufacturing', title: 'Why Agentic AI is the Core of Modern Manufacturing', category: 'Emerging Tech', date: 'October 12, 2026' },
    { id: 'enterprise-m-a-strategy', title: 'Structuring Enterprise M&A in a Volatile Market', category: 'Financial Advisory', date: 'September 28, 2026' },
    { id: 'unified-erp-systems', title: 'The Fallacy of Disconnected ERP Solutions', category: 'Enterprise Software', date: 'September 15, 2026' },
    { id: 'sustainable-data-centers', title: 'Architecting Carbon-Neutral Data Infrastructure', category: 'Sustainability', date: 'August 30, 2026' },
    { id: 'future-of-work', title: 'How Automation Reshapes the Workforce', category: 'Culture', date: 'August 14, 2026' },
    { id: 'cybersecurity-iot', title: 'Securing the Industrial Edge', category: 'Industrial IoT', date: 'July 22, 2026' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Insights & Perspectives" 
        description="Engineering thought leadership from the builders of the Safal ecosystem."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <SectionTitle title="Latest Articles" subtitle="The Blog" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map(post => (
            <Link key={post.id} href={`/blogs/${post.id}`} className="group bg-white flex flex-col border border-[#EEE] hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[16/10] bg-[#E5E0D5] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#888] font-body text-xs">Thumbnail: {post.category}</div>
                <div className="absolute inset-0 bg-[#D54B26]/0 group-hover:bg-[#D54B26]/10 transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#D54B26]">{post.category}</span>
                  <span className="font-body text-[#888] text-xs">{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-[#111] text-xl leading-tight mb-4 group-hover:text-[#D54B26] transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-[#EEE]">
                  <span className="font-body text-sm font-medium text-[#111] group-hover:text-[#D54B26] transition-colors">Read Article &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
