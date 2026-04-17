const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf-8');
const lines = content.split('\n');

const topBlock = `/* ═══════════════════════════════════════════════════════
   HERO SECTION - Header + Hero = 100vh
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[550px] bg-[#111] overflow-hidden flex flex-col">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#111] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#111] to-transparent z-[1]" />

      {/* Hero Content - fills remaining space */}
      <div className="relative z-[2] flex-1 max-w-[1800px] mx-auto w-full px-5 md:px-10 lg:px-[60px] flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full gap-4">
          {/* Left Content */}
          <div className="w-full lg:w-[48%]">
            <h1 className="font-heading font-semibold text-white leading-[1.08]" style={{ fontSize: 'clamp(26px, 3.96vw, 76px)', marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
              The Architecture of Global Enterprise.
            </h1>
            <p className="font-body text-white/85 leading-[1.65] max-w-[650px]" style={{ fontSize: 'clamp(12px, 1.04vw, 20px)', marginBottom: 'clamp(14px, 1.4vw, 26px)' }}>
              Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
            </p>
            <button className="inline-flex items-center gap-2 border border-white/40 text-white font-body hover:bg-white/10 transition-colors" style={{ padding: 'clamp(6px, 0.55vw, 10px) clamp(14px, 1.2vw, 22px)', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
              Discover Safal Divisions
              <ArrowRight style={{ width: 'clamp(12px, 0.83vw, 16px)', height: 'clamp(12px, 0.83vw, 16px)' }} />
            </button>
          </div>

          {/* Right - Hero Image */}
          <div className="w-full lg:w-[52%] relative">
            <div className="relative w-full aspect-square" style={{ maxWidth: 'clamp(280px, 36vw, 680px)', margin: '0 auto' }}>
              <Image src="/images/hero-right.png" alt="Safal Group - Three Strategic Pillars" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   STATS SECTION
   ═══════════════════════════════════════════════════════ */
function StatsSection() {`;

// Insert after imports (lines 0-5)
const updatedLines = [...lines.slice(0, 6), topBlock, ...lines.slice(6)];

fs.writeFileSync('app/page.js', updatedLines.join('\n'));
console.log('Fixed app/page.js');
