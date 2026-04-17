export default function OpenPositionDetailPage({ params }) {
  const { id } = params;
  
  // In a real app we'd fetch based on ID.
  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen pt-[120px]">
      <section className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[160px] pb-16">
        <div className="mb-12">
          <span className="font-heading text-[#D54B26] text-sm font-semibold tracking-wider uppercase">Emerging Technology • Remote / Bangalore</span>
          <h1 className="font-heading font-semibold text-[#111] text-4xl md:text-5xl mt-4 mb-6">Senior AI Engineer ({id})</h1>
          <button className="bg-[#D54B26] text-white px-8 py-3 font-body hover:bg-[#111] transition-colors">Apply Now</button>
        </div>

        <div className="bg-white p-8 md:p-12 border border-[#EEE] shadow-sm">
          <h3 className="font-heading text-2xl font-semibold mb-4 text-[#111]">Role Overview</h3>
          <p className="font-body text-[#555] mb-8 leading-relaxed">
            We are looking for a Senior AI Engineer to join our Emerging Technology division. You will be responsible for architecting and deploying agentic workflows that integrate seamlessly with legacy enterprise systems.
          </p>

          <h3 className="font-heading text-2xl font-semibold mb-4 text-[#111]">Key Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-3 font-body text-[#555] mb-8">
            <li>Design and deploy multi-agent LLM systems for enterprise clients.</li>
            <li>Optimize inference pipelines for minimum latency and cost.</li>
            <li>Collaborate with our Industrial Automation team to bridge cognitive AI with IoT.</li>
          </ul>

          <h3 className="font-heading text-2xl font-semibold mb-4 text-[#111]">Requirements</h3>
          <ul className="list-disc pl-6 space-y-3 font-body text-[#555] mb-8">
            <li>5+ years of software engineering in a production environment.</li>
            <li>Deep understanding of transformer architectures and applied ML.</li>
            <li>Experience with modern orchestration frameworks (LangChain, LlamaIndex, etc.).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
