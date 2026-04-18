import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function OpenPositionsPage() {
  const jobs = [
    { 
      title: 'Senior Full-Stack Engineer', 
      slug: 'senior-full-stack-engineer',
      desc: 'Architect and develop scalable, high-performance web applications for our global enterprise clients using modern JavaScript frameworks.',
      dept: 'Engineering & Tech',
      location: 'Ahmedabad, India',
      type: 'Full-time'
    },
    { 
      title: 'Lead Product Designer (UI/UX)', 
      slug: 'lead-product-designer',
      desc: 'Drive the visual and interaction design for complex digital ecosystems. Transform dense operational data into intuitive, award-winning user experiences.',
      dept: 'Creative Strategy',
      location: 'Dubai, UAE',
      type: 'Full-time'
    },
    { 
      title: 'Cloud Solutions Architect', 
      slug: 'cloud-solutions-architect',
      desc: 'Design, deploy, and manage secure, resilient cloud infrastructure. Ensure seamless data migration and zero-trust security for our multi-continent hubs.',
      dept: 'Cloud Infrastructure',
      location: 'New York, USA',
      type: 'Full-time'
    }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Operate at the Edge of<br/>Possible.</>}
        description="At the Safal Group, we don't hire for static roles; we hire for upward trajectories. Join a borderless matrix where deep engineering meets boundless creativity, and help us architect the digital backbone of tomorrow."
        rightImage="/images/MasterLayoutBG.png" 
      />

      {/* Main Content Section */}
      <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        
        {/* Intro */}
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-[#111] leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            A Borderless Brain-Trust.
          </h2>
          <p className="font-body text-[#555] leading-relaxed max-w-[1100px] mx-auto" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
            Talent is not restricted by geography. Our operational infrastructure allows a systems architect in New York to collaborate flawlessly in real-time with a UI/UX director in Dubai and a low-code engineering lead in Ahmedabad. We operate as a singular, synchronized global team, ensuring you are always learning from the best minds in the industry.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-16">
           <div className="relative w-full max-w-[300px]">
             <select className="w-full border border-[#D54B26]/40 text-[#D54B26] font-body bg-transparent py-3 px-4 appearance-none focus:outline-none focus:border-[#D54B26] text-center cursor-pointer">
                <option>Select the department</option>
                <option>Engineering & Tech</option>
                <option>Creative Strategy</option>
                <option>Cloud Infrastructure</option>
             </select>
             {/* Custom Chevron for select */}
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D54B26] opacity-70">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
           </div>
        </div>

        {/* Job Listings List */}
        <div className="flex flex-col gap-6 max-w-[1200px] mx-auto text-left">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-[#FAF8ED] border border-[#EBE7D8] p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group hover:border-[#D54B26]/30 transition-colors">
              
              {/* Left Side: Job Info */}
              <div className="w-full lg:w-3/4">
                 <h3 className="font-heading font-semibold text-[#111] leading-tight mb-3" style={{ fontSize: 'clamp(20px, 1.5vw, 24px)' }}>
                   {job.title}
                 </h3>
                 <p className="font-body text-[#555] leading-relaxed mb-6 max-w-[800px]" style={{ fontSize: 'clamp(14px, 1vw, 15px)' }}>
                   {job.desc}
                 </p>
                 
                 {/* Meta Info Tags */}
                 <div className="flex flex-wrap items-center gap-6 text-[#777] font-body text-sm">
                   <div className="flex items-center gap-2">
                     <Briefcase size={16} className="text-[#888]" strokeWidth={1.5} />
                     <span>{job.dept}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <MapPin size={16} className="text-[#888]" strokeWidth={1.5} />
                     <span>{job.location}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Clock size={16} className="text-[#888]" strokeWidth={1.5} />
                     <span>{job.type}</span>
                   </div>
                 </div>
              </div>

              {/* Right Side: Button */}
              <div className="w-full lg:w-1/4 flex lg:justify-end">
                 <Link href={`/careers/open-positions/${job.slug}`} className="w-[160px] text-center bg-[#D54B26] text-white py-3 font-body font-medium hover:bg-[#111] transition-colors rounded">
                   Apply Now
                 </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

    </main>
  );
}
