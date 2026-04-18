import MasterLayoutHeader from '@/components/MasterLayoutHeader';
import { notFound } from 'next/navigation';

export default async function JobDetailPage({ params }) {
  const { id } = await params;

  // Dummy Database to simulate API response
  const jobDatabase = {
    'senior-full-stack-engineer': {
      title: 'Senior Full-Stack Engineer',
      location: 'Ahmedabad, India',
      experience: '5+ Years',
      type: 'Full-Time',
      dept: 'Engineering & Tech',
      overview: 'We are seeking a highly skilled Senior Full-Stack Engineer to join our core development team. In this role, you will be responsible for building and maintaining robust, scalable enterprise software solutions. You will work closely with cross-functional teams, including product managers and UX designers across our global hubs, to deliver high-quality digital products that solve complex business challenges. This role requires a deep understanding of modern web architecture and a passion for writing clean, efficient code.',
      responsibilities: [
        'Architect, develop, and deploy scalable web applications using React.js and Node.js.',
        'Collaborate seamlessly with our global UI/UX and product teams to translate design prototypes into functional, responsive software.',
        'Optimize enterprise applications for maximum speed, scalability, and zero-downtime reliability.',
        'Identify and resolve complex technical bottlenecks within large-scale data systems.',
        'Mentor junior developers and enforce elite coding standards across the engineering department.'
      ],
      tasks: [
        'Write clean, modular, and extensively tested code in accordance with agile development methodologies.',
        'Design and implement secure RESTful APIs and handle complex third-party system integrations.',
        'Conduct rigorous peer code reviews to maintain high-quality software architecture.',
        'Manage cloud deployments and monitor system performance using modern CI/CD pipelines.',
        'Participate in weekly global engineering sprints and technical strategy sessions.'
      ],
      skills: [
        '5+ years of professional experience in full-stack web development.',
        'Deep proficiency in modern JavaScript (ES6+), React.js, Node.js, and TypeScript.',
        'Strong experience designing and managing relational and NoSQL databases (PostgreSQL, MongoDB).',
        'Hands-on experience with cloud platforms (AWS or Azure) and containerization (Docker/Kubernetes).',
        'Excellent problem-solving skills and the ability to communicate technical concepts to non-technical stakeholders.'
      ]
    },
    'lead-product-designer': {
      title: 'Lead Product Designer (UI/UX)',
      location: 'Dubai, UAE',
      experience: '6+ Years',
      type: 'Full-Time',
      dept: 'Creative Strategy',
      overview: 'As our Lead Product Designer, you will command the visual and interaction design for complex digital ecosystems. You will transform dense operational data into intuitive, award-winning user experiences...',
      responsibilities: ['Drive UX strategy across global platforms', 'Lead user research initiatives', 'Maintain design systems'],
      tasks: ['Create wireframes and interactive prototypes', 'Collaborate with frontend engineers'],
      skills: ['Figma mastery', 'Strong portfolio of enterprise apps', 'Understanding of front-end capabilities']
    },
    'cloud-solutions-architect': {
      title: 'Cloud Solutions Architect',
      location: 'New York, USA',
      experience: '8+ Years',
      type: 'Full-Time',
      dept: 'Cloud Infrastructure',
      overview: 'We are looking for a visionary Cloud Solutions Architect to design, deploy, and manage secure, resilient cloud infrastructure. Ensure seamless data migration and zero-trust security...',
      responsibilities: ['Design enterprise cloud architectures', 'Manage multi-continent AWS deployments', 'Ensure zero-downtime systems'],
      tasks: ['Infrastructure as Code (Terraform)', 'Container orchestration', 'Security compliance audits'],
      skills: ['AWS Certified Solutions Architect', 'Deep understanding of networking', 'Kubernetes and Docker']
    }
  };

  const job = jobDatabase[id];

  if (!job) {
    // If a dummy job is requested that isn't mapped, provide a generic fallback
    return (
      <main className="w-full bg-[#FFFBEE] min-h-screen flex items-center justify-center font-body text-[#111]">
        <h2>Position not found.</h2>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen font-body overflow-hidden">
      <MasterLayoutHeader 
        title={<>Operate at the Edge of<br/>Possible.</>}
        description="At the Safal Group, we don't hire for static roles; we hire for upward trajectories. Join a borderless matrix where deep engineering meets boundless creativity, and help us architect the digital backbone of tomorrow."
        rightImage="/images/MasterLayoutBG.png" 
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column: Job Details */}
          <div className="w-full lg:w-7/12 text-left">
            <h1 className="font-heading font-semibold text-[#111] leading-tight mb-8" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              {job.title}
            </h1>

            {/* Meta tags Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 border-b border-[#EBE7D8] pb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#444] rounded-full"></span>
                <span className="font-semibold text-[#333]">Location:</span>
                <span className="text-[#666]">{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#444] rounded-full"></span>
                <span className="font-semibold text-[#333]">Experience Required:</span>
                <span className="text-[#666]">{job.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#444] rounded-full"></span>
                <span className="font-semibold text-[#333]">Job Type:</span>
                <span className="text-[#666]">{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#444] rounded-full"></span>
                <span className="font-semibold text-[#333]">Department:</span>
                <span className="text-[#666]">{job.dept}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">Job Overview</h3>
              <p className="font-body text-[#555] leading-relaxed text-[15px]">
                {job.overview}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row gap-3">
                    <span className="text-[#D54B26] mt-1 text-lg leading-none shrink-0">&#9632;</span>
                    <span className="font-body text-[#555] leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks & Responsibilities */}
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">Tasks & Responsibilities</h3>
              <ul className="space-y-3">
                {job.tasks.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row gap-3">
                    <span className="text-[#D54B26] mt-1 text-lg leading-none shrink-0">&#9632;</span>
                    <span className="font-body text-[#555] leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Experience */}
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-[#111] text-xl mb-4">Skills & Experience</h3>
              <ul className="space-y-3">
                {job.skills.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row gap-3">
                    <span className="text-[#D54B26] mt-1 text-lg leading-none shrink-0">&#9632;</span>
                    <span className="font-body text-[#555] leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Application Form (Sticky on Desktop) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
            <div className="bg-[#FAF8ED] border border-[#EBE7D8] p-8 md:p-10 rounded">
              <h3 className="font-heading font-semibold text-[#111] text-2xl mb-8">Apply Now</h3>
              
              <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#333] text-sm font-medium">Full Name</label>
                    <input type="text" className="w-full border border-[#DCD5C6] bg-transparent p-3 focus:outline-none focus:border-[#D54B26] text-[15px] rounded" placeholder="e.g. Jane Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#333] text-sm font-medium">Email ID</label>
                    <input type="email" className="w-full border border-[#DCD5C6] bg-transparent p-3 focus:outline-none focus:border-[#D54B26] text-[15px] rounded" placeholder="e.g. name@yourcompany.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#333] text-sm font-medium">Phone Number</label>
                    <input type="tel" className="w-full border border-[#DCD5C6] bg-transparent p-3 focus:outline-none focus:border-[#D54B26] text-[15px] rounded" placeholder="e.g. +1 (555) 000-0000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#333] text-sm font-medium">Current Location :</label>
                    <input type="text" className="w-full border border-[#DCD5C6] bg-transparent p-3 focus:outline-none focus:border-[#D54B26] text-[15px] rounded" placeholder="e.g. Ahmedabad" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-sm font-medium">Upload Resume :</label>
                  <div className="w-full border border-dashed border-[#DCD5C6] bg-transparent p-8 flex items-center justify-center cursor-pointer hover:border-[#D54B26] transition-colors rounded">
                     <span className="text-center text-[#888] text-sm">
                       Attach Your Resume in PDF, Word Format<br/>Max Size: 5 Mb
                     </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#333] text-sm font-medium">Cover Letter</label>
                  <textarea rows="4" className="w-full border border-[#DCD5C6] bg-transparent p-3 focus:outline-none focus:border-[#D54B26] text-[15px] rounded resize-none" placeholder="Briefly describe About you"></textarea>
                </div>

                <button type="button" className="border border-[#D54B26] text-[#D54B26] px-10 py-3 font-medium hover:bg-[#D54B26] hover:text-white transition-colors rounded">
                  Submit
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
