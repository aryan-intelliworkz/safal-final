export default function BlogDetailPage({ params }) {
  const { id } = params;

  return (
    <main className="w-full bg-[#FFFBEE] min-h-screen pt-[120px]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10 pb-16 lg:pb-24">
        {/* Article Header */}
        <div className="mb-12 text-center max-w-[800px] mx-auto">
          <span className="font-heading text-[#D54B26] font-semibold tracking-wider text-sm uppercase mb-4 block">Emerging Tech</span>
          <h1 className="font-heading font-semibold text-[#111] text-3xl md:text-5xl leading-tight mb-6">
            The post about: {id}
          </h1>
          <div className="flex items-center justify-center gap-4 text-[#888] font-body text-sm">
            <span>By Vikram Singh</span>
            <span>•</span>
            <span>October 12, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] bg-[#E5E0D5] mb-12 relative rounded overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center text-[#888] font-body">Main Hero Image</div>
        </div>

        {/* Article Body */}
        <article className="prose prose-lg max-w-[800px] mx-auto prose-headings:font-heading prose-p:font-body prose-a:text-[#D54B26]">
          <p className="lead text-xl text-[#555] font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <h2 className="text-3xl text-[#111] font-semibold mt-10 mb-5">The Paradigm Shift</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote className="border-l-4 border-[#D54B26] pl-6 italic text-[#111] text-2xl my-10 font-heading">
            "We are no longer building software that people use. We are engineering software that executes on behalf of people."
          </blockquote>
          <h2 className="text-3xl text-[#111] font-semibold mt-10 mb-5">Implementation Constraints</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </article>
      </div>
    </main>
  );
}
