import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function StoryVisionPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Our Story & Vision" 
        description="Pioneering the next era of enterprise technology through intelligent automation and strategic engineering."
      />

      {/* Story Section */}
      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="A Legacy of Engineering Excellence" subtitle="Our Origins" />
            <div className="space-y-6">
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
                Founded with a singular mission to solve the most complex enterprise challenges, Safal Infosoft Limited has grown from a specialized automation boutique into a global technology conglomerate. We started by building robust CRM and ERP systems for complex manufacturing environments.
              </p>
              <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
                Today, our ecosystem spans eight specialized divisions. Yet, our core philosophy remains unchanged: we engineer systems that empower human potential. We don&apos;t just write code; we architect the frameworks that power industry leaders globally.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded bg-[#E5E0D5]">
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-[#888] font-body">Image Placeholder (Story)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <SectionTitle title="The Vision that Drives Us" alignment="center" subtitle="Our Future" />
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              We envision a world where enterprise complexity is abstract, and growth is deterministic. By unifying agentic AI with industrial automation, we are preparing our partners for the next fifty years of business evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Global Scale', desc: 'Deploying unified ecosystems that operate flawlessly across borders and jurisdictions.' },
              { title: 'Agentic Automation', desc: 'Transitioning from automated workflows to intelligent systems that learn, adapt, and execute autonomously.' },
              { title: 'Sustainable Growth', desc: 'Building technology that generates robust economic value without compromising our environmental responsibilities.' }
            ].map(item => (
              <div key={item.title} className="p-8 border border-[#EEE] bg-[#FFFBEE] hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-semibold text-[#111] mb-4" style={{ fontSize: 'clamp(20px, 1.5vw, 24px)' }}>{item.title}</h3>
                <p className="font-body text-[#666] leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
