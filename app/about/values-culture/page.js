import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function ValuesCulturePage() {
  const values = [
    { title: 'Obsessive Quality', desc: 'Good enough is never enough. We measure our success by the absolute precision and robustness of the systems we build.' },
    { title: 'Radical Transparency', desc: 'No black boxes. We maintain absolute transparency with our clients, our partners, and within our internal teams.' },
    { title: 'Intellectual Honesty', desc: 'We seek the truth, not the easy answer. We are willing to discard our own ideas the moment a better engineering solution arises.' },
    { title: 'Infinite Growth', desc: 'We are perpetual learners. The technology landscape shifts daily, and our cultural mandate is to stay three steps ahead.' }
  ];

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen">
      <PageHeader 
        title="Values & Culture" 
        description="The principles that govern our engineering, shape our decisions, and define who we are."
      />

      <section className="w-full py-16 md:py-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12 sticky top-32">
            <SectionTitle title="Culture is not a poster. It is how we build." subtitle="Core Values" />
            <p className="font-body text-[#555] leading-relaxed mb-8" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              At Safal Infosoft, culture is the operational system of our company. It dictates who we hire, how we treat code, how we handle failure, and how we celebrate success. We do not compromise on our core tenets.
            </p>
          </div>
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-8 md:p-12 border-l-4 border-[#D54B26] shadow-sm">
                <h3 className="font-heading font-semibold text-[#111] text-2xl mb-4">{v.title}</h3>
                <p className="font-body text-[#666] leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="w-full pb-16 md:pb-24 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-[160px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(idx => (
            <div key={idx} className="aspect-square bg-[#E5E0D5] rounded flex items-center justify-center">
              <span className="text-[#888] font-body text-sm">Culture Image {idx}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
