'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Phone, Mail, Menu, X } from 'lucide-react';

/* ─── Animated Counter Hook ─── */
function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) { setStarted(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function AnimatedStat({ targetNum, prefix, suffix, label }) {
  const { count, ref } = useCountUp(targetNum, 2000);
  return (
    <div ref={ref}>
      <p className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: 'clamp(18px, 1.88vw, 36px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </p>
      <div className="border-t-2 border-[#111]" style={{ paddingTop: 'clamp(8px, 0.6vw, 12px)' }}>
        <p className="font-body text-[#666]" style={{ fontSize: 'clamp(11px, 0.83vw, 16px)' }}>{label}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'The Company', hasDropdown: true },
    { label: 'Our Division', hasDropdown: true },
    { label: 'Industries We Serve', hasDropdown: true },
    { label: 'Partnerships', hasDropdown: true },
    { label: 'Insights', hasDropdown: true },
    { label: 'Investors', hasDropdown: true },
  ];

  return (
    <nav className="w-full z-50 flex-shrink-0">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-5 md:px-10 lg:px-[60px] h-[60px] md:h-[70px] lg:h-[80px]">
        {/* Logo */}
        <div className="relative flex-shrink-0" style={{ width: 'clamp(110px, 10vw, 190px)', height: 'clamp(36px, 3.2vw, 60px)' }}>
          <Image src="/images/header-logo.png" alt="Safal Infosoft Limited" fill className="object-contain object-left" priority />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center" style={{ gap: 'clamp(12px, 1.3vw, 24px)' }}>
          {navItems.map((item) => (
            <button key={item.label} className="flex items-center gap-1 text-white font-body hover:opacity-80 transition-opacity whitespace-nowrap" style={{ fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
              {item.label}
              {item.hasDropdown && <ChevronDown size={12} className="text-white opacity-70" />}
            </button>
          ))}
        </div>

        {/* CTA Button - xl+ only */}
        <button className="hidden xl:flex items-center bg-[#D54B26] text-white font-body font-medium hover:bg-[#c04020] transition-colors whitespace-nowrap" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(14px, 1.2vw, 22px)', fontSize: 'clamp(12px, 0.78vw, 15px)' }}>
          Get In Touch
        </button>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#111] border-t border-white/10 px-5 py-3 space-y-2">
          {navItems.map((item) => (
            <button key={item.label} className="block text-white text-[14px] font-body w-full text-left py-2 border-b border-white/5">{item.label}</button>
          ))}
          <button className="w-full bg-[#D54B26] text-white px-5 py-2.5 text-[14px] font-body font-medium mt-2">Get In Touch</button>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION - Header + Hero = 100vh
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[550px] bg-[#111] overflow-hidden flex flex-col">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#111] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#111] to-transparent z-[1]" />

      {/* Navbar inside hero so both fit in 100vh */}
      <div className="relative z-[2]">
        <Navbar />
      </div>

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
function StatsSection() {
  return (
    <section className="w-full" style={{ padding: 'clamp(40px, 4.5vw, 86px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(22px, 2.71vw, 52px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>
          A Diversified Technology Group.
        </h2>
        <p className="font-body text-[#666] leading-[1.65] max-w-[1000px]" style={{ fontSize: 'clamp(12px, 1.04vw, 20px)', marginBottom: 'clamp(28px, 3vw, 56px)' }}>
          We are a diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory, we unify complex systems to accelerate growth. We don&apos;t just build software; we architect the frameworks that power industry leaders worldwide.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(16px, 1.8vw, 34px)' }}>
          <AnimatedStat targetNum={174} prefix={'\u20B9'} suffix={' Crore'} label="Strategic Exit Achieved." />
          <AnimatedStat targetNum={25000} prefix="" suffix="+" label="Active Global Users." />
          <AnimatedStat targetNum={15} prefix="" suffix="+" label="Countries Deployed." />
          <AnimatedStat targetNum={500000} prefix="" suffix="+" label="Industrial Products Managed." />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SOLUTIONS SECTION
   ═══════════════════════════════════════════════════════ */
function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const solutions = [
    { id: '01', title: 'Enterprise Products & Platforms' },
    { id: '02', title: 'Brand, Digital & Creative Services' },
    { id: '03', title: 'Startup Product Development & Consulting' },
    { id: '04', title: 'Industrial Automation & IoT' },
    { id: '05', title: 'AI & Emerging Technology' },
    { id: '06', title: 'Business & Financial Advisory' },
    { id: '07', title: 'Financial Accounting' },
    { id: '08', title: 'Technology Staffing' },
  ];

  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3.5vw, 66px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(20px, 2.2vw, 42px)' }}>
          Comprehensive technology and business solutions.
        </h2>

        <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(16px, 0vw, 0px)' }}>
          {/* Left - Tab List */}
          <div className="w-full lg:w-[35%]">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left transition-all border-b border-[#e0e0e0] ${
                  idx === activeIndex ? 'bg-[#D54B26] text-white' : 'bg-transparent text-[#666] hover:bg-[#f5f0e0]'
                }`}
                style={{ padding: 'clamp(8px, 0.7vw, 14px) clamp(12px, 1vw, 20px)' }}
              >
                <span className={`font-body ${idx === activeIndex ? 'font-medium' : 'font-normal'}`} style={{ fontSize: 'clamp(13px, 1.04vw, 20px)' }}>
                  {sol.id}. {sol.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right - Detail Card */}
          <div className="w-full lg:w-[65%] bg-white">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 relative" style={{ minHeight: 'clamp(200px, 24vw, 460px)' }}>
                <Image src="/images/services-image.jpg" alt={solutions[activeIndex].title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between" style={{ padding: 'clamp(14px, 1.5vw, 28px)' }}>
                <div>
                  <h3 className="font-heading font-semibold text-[#111] leading-[1.2]" style={{ fontSize: 'clamp(16px, 1.67vw, 32px)', marginBottom: 'clamp(8px, 0.8vw, 16px)' }}>
                    {solutions[activeIndex].id}. {solutions[activeIndex].title}
                  </h3>
                  <p className="font-body text-[#666] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                    Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi amet egestas sit habitant. At mauris euismod dolor scelerisque ac. Fermentum risus.
                  </p>
                  <p className="font-body text-[#666] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
                    Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] font-body w-fit hover:bg-[#222] transition-colors" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 20px)', fontSize: 'clamp(12px, 0.83vw, 16px)', marginTop: 'clamp(10px, 1vw, 20px)' }}>
                  Explore More
                  <ArrowRight style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   GROUP STRUCTURE SECTION
   ═══════════════════════════════════════════════════════ */
function GroupStructureSection() {
  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3vw, 56px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <div className="text-center" style={{ marginBottom: 'clamp(16px, 1.5vw, 28px)' }}>
          <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
            A Diversified Technology Group.
          </h2>
          <p className="font-body text-[#666] leading-[1.6] max-w-[900px] mx-auto" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
          </p>
        </div>
        <div className="relative w-full max-w-[1100px] mx-auto">
          <Image src="/images/home-diversified.png" alt="Safal Group Structure" width={1920} height={650} className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PRODUCT ECOSYSTEM SECTION
   ═══════════════════════════════════════════════════════ */
function ProductEcosystemSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const products = ['Datanote', 'POS', 'Formezy', 'CRM', 'Docezy', 'ERP', 'Tasknote'];

  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3.5vw, 66px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(14px, 1.3vw, 24px)' }}>
          Our Digital Product Ecosystem
        </h2>

        {/* Product Tabs */}
        <div className="flex flex-wrap overflow-x-auto" style={{ gap: 'clamp(10px, 1.3vw, 24px)', marginBottom: 'clamp(14px, 1.3vw, 24px)', paddingBottom: 'clamp(8px, 0.6vw, 12px)' }}>
          {products.map((product, idx) => (
            <button
              key={product}
              onClick={() => setActiveProduct(idx)}
              className={`font-heading whitespace-nowrap transition-colors ${
                idx === activeProduct ? 'font-medium text-[#111]' : 'font-normal text-[#BBB] hover:text-[#888]'
              }`}
              style={{ fontSize: 'clamp(16px, 1.77vw, 34px)' }}
            >
              {product}
            </button>
          ))}
        </div>

        {/* Product Image - full width */}
        <div className="w-full relative overflow-hidden rounded-sm" style={{ minHeight: 'clamp(200px, 22vw, 420px)', marginBottom: 'clamp(14px, 1.3vw, 24px)' }}>
          <Image src="/images/digital-product.png" alt={products[activeProduct]} fill className="object-cover" />
        </div>

        {/* Logo + Button Row */}
        <div className="flex flex-wrap items-center justify-between" style={{ gap: 'clamp(10px, 1vw, 18px)', marginBottom: 'clamp(14px, 1.3vw, 24px)' }}>
          <div className="relative" style={{ height: 'clamp(24px, 2vw, 38px)', width: 'clamp(100px, 8vw, 160px)' }}>
            <Image src="/images/datanote-logo.png" alt="Datanote" fill className="object-contain object-left" />
          </div>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] font-body hover:bg-[#222] transition-colors" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 18px)', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
            Visit our Product
            <ArrowRight style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} />
          </button>
        </div>

        {/* Description */}
        <p className="font-body text-[#666] leading-[1.75] max-w-[1000px]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
          Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas. Sit porta nulla sed non in nibh tellus nisl.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SUSTAINABILITY SECTION
   ═══════════════════════════════════════════════════════ */
function SustainabilitySection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(350px, 34vw, 650px)' }}>
      {/* Background Image - OurImprint.png */}
      <div className="absolute inset-0">
        <Image src="/images/our-imprint.png" alt="" fill className="object-cover" />
        {/* Right side overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFFBEE]/90 via-[#FFFBEE]/60 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative max-w-[1600px] mx-auto h-full flex flex-col justify-between" style={{ padding: 'clamp(30px, 3.5vw, 66px) clamp(20px, 8.3vw, 160px)' }}>
        {/* Top Right - Heading + Paragraphs */}
        <div className="w-full lg:w-[50%] lg:ml-auto">
          <h2 className="font-heading font-medium text-[#608539] leading-[1.1]" style={{ fontSize: 'clamp(22px, 2.71vw, 52px)', marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
            Our imprint on the world
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.7vw, 14px)' }}>
            <p className="font-body text-[#555] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
              We believe a technology company&apos;s most lasting impact isn&apos;t measured in revenue — it&apos;s measured in people developed, industries transformed, and responsibility exercised at every level of operation.
            </p>
            <p className="font-body text-[#555] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
              Across eight specialized divisions, Safal Infosoft Group operates with one constant: doing business in a way that creates value for our clients, our people, and the communities we work in — today and for the long term.
            </p>
          </div>
        </div>

        {/* Bottom Right - "goes beyond software" + Button */}
        <div className="w-full lg:w-[50%] lg:ml-auto flex flex-col items-end" style={{ marginTop: 'clamp(24px, 3vw, 56px)' }}>
          <h2 className="font-heading font-medium text-[#608539] leading-[1.1] text-right" style={{ fontSize: 'clamp(22px, 2.71vw, 52px)', marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
            goes beyond software.
          </h2>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] font-body hover:bg-[#222] transition-colors" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 18px)', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
            Read our Sustainability Commitments
            <ArrowRight style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   INDUSTRIES SECTION
   ═══════════════════════════════════════════════════════ */
function IndustriesSection() {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const industries = [
    { id: '01', name: 'Manufacturing', image: '/images/manufacturing.jpg' },
    { id: '02', name: 'Logistics', image: '/images/container-port.jpg' },
    { id: '03', name: 'Healthcare', image: '/images/healthcare.jpg' },
    { id: '04', name: 'Finance', image: '/images/finance.jpg' },
  ];

  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3.5vw, 66px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(16px, 1.5vw, 28px)' }}>
          Transforming Sectors. Architecting the Future.
        </h2>

        <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(6px, 0.5vw, 10px)', height: 'auto' }}>
          {industries.map((industry, idx) => (
            <div
              key={industry.id}
              onClick={() => setExpandedIdx(idx)}
              className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                idx === expandedIdx ? 'bg-white border border-[#eee]' : ''
              }`}
              style={{
                width: idx === expandedIdx ? 'clamp(280px, 25vw, 480px)' : undefined,
                flex: idx === expandedIdx ? 'none' : '1',
                minHeight: idx !== expandedIdx ? 'clamp(80px, 5vw, 90px)' : undefined,
                height: 'clamp(400px, 30vw, 580px)',
              }}
            >
              {idx === expandedIdx ? (
                <div className="h-full flex flex-col overflow-y-auto" style={{ padding: 'clamp(12px, 1.2vw, 24px)' }}>
                  <span className="font-heading text-[#D54B26] font-normal leading-none" style={{ fontSize: 'clamp(28px, 3.33vw, 64px)' }}>{industry.id}.</span>
                  <h3 className="font-heading font-semibold text-[#111]" style={{ fontSize: 'clamp(18px, 1.67vw, 32px)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>{industry.name}</h3>
                  <div className="relative w-full rounded overflow-hidden flex-shrink-0" style={{ height: 'clamp(120px, 10vw, 190px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                  </div>
                  <p className="font-body text-[#666] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.73vw, 14px)' }}>
                    Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas.
                  </p>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#111]/55" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end" style={{ padding: 'clamp(12px, 1vw, 20px)' }}>
                    <span className="font-heading text-white font-normal leading-none" style={{ fontSize: 'clamp(28px, 3.33vw, 64px)' }}>{industry.id}.</span>
                    <h3 className="font-heading text-white" style={{ fontSize: 'clamp(16px, 1.67vw, 32px)' }}>{industry.name}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   GLOBAL PRESENCE SECTION
   ═══════════════════════════════════════════════════════ */
function GlobalPresenceSection() {
  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3.5vw, 66px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(20px, 3vw, 56px)' }}>
          <div className="w-full lg:w-[45%]">
            <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
              A Diversified Technology Group.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.7vw, 14px)', marginBottom: 'clamp(16px, 1.5vw, 28px)' }}>
              {[1, 2, 3].map((i) => (
                <p key={i} className="font-body text-[#666] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
                  We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
                </p>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] font-body hover:bg-[#222] transition-colors" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 20px)', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
              Visit our Product
              <ArrowRight style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} />
            </button>
          </div>
          <div className="w-full lg:w-[55%] relative" style={{ minHeight: 'clamp(250px, 24vw, 450px)' }}>
            <Image src="/images/global-presence.png" alt="Global Presence" fill className="object-contain" />
            <div className="absolute bg-[#D54B26] text-white font-body font-medium" style={{ top: '35%', left: '10%', fontSize: 'clamp(11px, 0.78vw, 15px)', padding: 'clamp(4px, 0.35vw, 6px) clamp(8px, 0.7vw, 14px)' }}>USA</div>
            <div className="absolute bg-[#D54B26] text-white font-body font-medium" style={{ top: '50%', right: '8%', fontSize: 'clamp(11px, 0.78vw, 15px)', padding: 'clamp(4px, 0.35vw, 6px) clamp(8px, 0.7vw, 14px)' }}>India</div>
            <div className="absolute bg-[#D54B26] text-white font-body font-medium" style={{ top: '30%', right: '15%', fontSize: 'clamp(11px, 0.78vw, 15px)', padding: 'clamp(4px, 0.35vw, 6px) clamp(8px, 0.7vw, 14px)' }}>UAE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   INVESTOR SECTION
   ═══════════════════════════════════════════════════════ */
function InvestorSection() {
  const bulletPoints = [
    'Strong financial governance',
    'Scalable enterprise technology platforms',
    'Sustainable long-term growth strategy',
    'Transparent business operations',
    'Global market expansion opportunities',
  ];

  return (
    <section className="w-full" style={{ padding: 'clamp(30px, 3.5vw, 66px) 0' }}>
      <div className="max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <div className="text-center" style={{ marginBottom: 'clamp(20px, 2vw, 38px)' }}>
          <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
            Where investor confidence meets partner potential
          </h2>
          <p className="font-body text-[#666] leading-[1.6] max-w-[850px] mx-auto" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
            Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center" style={{ gap: 'clamp(16px, 1.8vw, 34px)' }}>
          {[{ title: 'Investor Value', titleSize: 'clamp(18px, 1.77vw, 34px)' }, { title: 'Strategic Partnerships', titleSize: 'clamp(16px, 1.67vw, 32px)' }].map((card) => (
            <div key={card.title} className="rounded-full border-2 border-[#D54B26]/25 flex items-center justify-center" style={{ width: 'clamp(220px, 19.3vw, 370px)', height: 'clamp(220px, 19.3vw, 370px)', padding: 'clamp(14px, 1.3vw, 26px)' }}>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-[#111] leading-tight" style={{ fontSize: card.titleSize, marginBottom: 'clamp(6px, 0.4vw, 8px)' }}>{card.title}</h3>
                <ul className="font-body text-[#666] leading-[1.8] text-left" style={{ fontSize: 'clamp(9px, 0.68vw, 13px)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                  {bulletPoints.map((bp) => (<li key={bp}>• {bp}</li>))}
                </ul>
                <button className="bg-[#111] text-[#D54B26] font-body hover:bg-[#222] transition-colors" style={{ padding: 'clamp(4px, 0.35vw, 6px) clamp(10px, 0.8vw, 16px)', fontSize: 'clamp(10px, 0.73vw, 14px)' }}>
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: 'clamp(40px, 4.5vw, 86px) 0', minHeight: 'clamp(300px, 25vw, 480px)' }}>
      <div className="absolute inset-0">
        <Image src="/images/gold-key.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBEE] via-[#FFFBEE]/85 to-transparent" />
      </div>
      <div className="relative max-w-[1600px] mx-auto" style={{ padding: '0 clamp(20px, 8.3vw, 160px)' }}>
        <div style={{ maxWidth: 'clamp(320px, 25vw, 480px)' }}>
          <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(20px, 2.71vw, 52px)', marginBottom: 'clamp(8px, 0.7vw, 14px)' }}>
            You&apos;re the missing piece.
            <br />
            Let&apos;s find the right key together.
          </h2>
          <p className="font-body text-[#666] leading-[1.7]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)', marginBottom: 'clamp(16px, 1.5vw, 28px)' }}>
            Whether you&apos;re evaluating enterprise software, exploring a technology partnership, looking to invest, or launching a startup — every great outcome starts with a single conversation. Tell us what you need. We&apos;ll connect you with exactly the right person from day one.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] font-body hover:bg-[#222] transition-colors" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 20px)', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
            Start the Conversation
            <ArrowRight style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white" style={{ padding: 'clamp(28px, 3vw, 56px) 0' }}>
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row mb-8" style={{ gap: 'clamp(20px, 2.2vw, 42px)' }}>
          {/* Left - Logo & Info */}
          <div className="w-full lg:w-[26%]">
            <div className="relative mb-4" style={{ width: 'clamp(100px, 7.3vw, 140px)', height: 'clamp(34px, 2.5vw, 48px)' }}>
              <Image src="/images/header-logo.png" alt="Safal Infosoft Limited" fill className="object-contain object-left" />
            </div>
            <p className="font-body text-white/85 leading-[1.6]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)', marginBottom: 'clamp(10px, 0.8vw, 16px)' }}>
              Ideaz Ventures is a startup execution partner helping founders validate ideas, build scalable products, and launch technology ventures globally.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(10px, 0.8vw, 16px)' }}>
              <a href="tel:+919737045561" className="flex items-center gap-2 text-white/75 font-body hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
                <Phone style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} /> +91 97370 45561
              </a>
              <a href="mailto:hello@safalinfosoft.com" className="flex items-center gap-2 text-white/75 font-body hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>
                <Mail style={{ width: 'clamp(12px, 0.73vw, 14px)', height: 'clamp(12px, 0.73vw, 14px)' }} /> hello@safalinfosoft.com
              </a>
            </div>
            <div className="flex items-center" style={{ gap: 'clamp(6px, 0.5vw, 10px)' }}>
              {['IG', 'FB', 'LI', 'WA', 'TW'].map((s) => (
                <a key={s} href="#" className="rounded-full border border-white/30 flex items-center justify-center text-white/50 hover:border-white hover:text-white transition-colors" style={{ width: 'clamp(20px, 1.3vw, 24px)', height: 'clamp(20px, 1.3vw, 24px)', fontSize: 'clamp(7px, 0.47vw, 9px)' }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Right - Link Columns */}
          <div className="w-full lg:w-[74%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: 'clamp(12px, 1vw, 18px)' }}>
            <div>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Divisions</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {['Enterprise Products & Platforms', 'Brand, Digital & Creative Services', 'Startup Product Development & Consulting', 'Industrial Automation & IoT', 'AI & Emerging Technology', 'Business & Financial Advisory', 'Financial Accounting', 'Technology Staffing'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>About</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
                {['Our Story & Vision', 'Leadership Team', 'Group Structure', 'Values & Culture', 'Sustainability'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Insights</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {['Blogs', 'Case Studies', 'News & Announcements'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
                {['Home', 'Industries', 'Contact Us'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Careers</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {['Life at Safal', 'Open Positions', 'Internships & Mentorship'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Investors</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
                {['Investor Relations', 'Financial Reports & Disclosures', 'Corporate Governance'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Partnerships</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {['Strategic Partnerships', 'Become a Partner'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 flex flex-col md:flex-row items-center justify-between" style={{ paddingTop: 'clamp(12px, 1vw, 20px)', gap: 'clamp(6px, 0.4vw, 8px)' }}>
          <p className="font-body text-[#666]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>Privacy Policy | Terms & Conditions</p>
          <p className="font-body text-[#666]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>&copy; Copyright 2026. All rights reserved Safal Infosoft Limited.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBEE]">
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <GroupStructureSection />
      <ProductEcosystemSection />
      <SustainabilitySection />
      <IndustriesSection />
      <GlobalPresenceSection />
      <InvestorSection />
      <CTASection />
      <Footer />
    </main>
  );
}
