import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function InternshipsMentorshipPage() {
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Internships & Mentorship" 
        description="Identifying raw talent and accelerating it into engineering mastery."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Real Projects. Zero Sandbox." subtitle="The Program" />
            <p className="font-body text-[#555] leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              We do not believe in shadow programs. Interns at Safal write production code, participate in strategic financial modeling, and sit in on core architectural reviews.
            </p>
            <p className="font-body text-[#555] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              You will be paired with a senior mentor who is accountable for your acceleration. Our goal is to convert top interns into full-time engineers and analysts the moment they graduate.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-12 shadow-sm border border-[#EEE]">
              <h3 className="font-heading font-semibold text-[#111] text-2xl mb-6">Program Tracks</h3>
              <ul className="space-y-4">
                {['Software Engineering & AI', 'Industrial Automation Systems', 'Financial Advisory & Analysis', 'Digital Product Design'].map(track => (
                  <li key={track} className="flex items-center gap-4 font-body text-[#555] text-lg">
                    <span className="w-2 h-2 rounded-full bg-[#D54B26]"></span> {track}
                  </li>
                ))}
              </ul>
              <button className="mt-10 inline-flex items-center gap-2 bg-[#111] text-white font-body px-8 py-3 hover:bg-[#D54B26] transition-colors">
                Apply for 2026 Batch
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
