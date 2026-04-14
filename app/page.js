'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Phone, Mail, Menu, X } from 'lucide-react';

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
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 lg:px-[60px] h-[80px] lg:h-[100px]">
        {/* Logo */}
        <div className="relative w-[150px] h-[50px] md:w-[200px] md:h-[65px] flex-shrink-0">
          <Image
            src="/images/header-logo.png"
            alt="Safal Infosoft Limited"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-white text-[15px] 2xl:text-[17px] font-body hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} className="text-white opacity-70" />}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center bg-[#D54B26] text-white px-6 py-2.5 text-[16px] font-body font-medium hover:bg-[#c04020] transition-colors whitespace-nowrap">
          Get In Touch
        </button>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#111] border-t border-white/10 px-6 py-4 space-y-3 animate-in slide-in-from-top">
          {navItems.map((item) => (
            <button key={item.label} className="block text-white text-[16px] font-body w-full text-left py-2 border-b border-white/5">
              {item.label}
            </button>
          ))}
          <button className="w-full bg-[#D54B26] text-white px-6 py-3 text-[16px] font-body font-medium mt-3">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full bg-[#111] overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#111] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#111] to-transparent z-[1]" />

      <Navbar />

      <div className="relative z-[2] max-w-[1800px] mx-auto px-6 lg:px-[60px] pt-[120px] lg:pt-[160px] pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-4">
          {/* Left Content */}
          <div className="w-full lg:w-[48%] pt-4 lg:pt-[80px]">
            <h1 className="font-heading font-semibold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[80px] text-white leading-[1.08] mb-6">
              The Architecture of Global Enterprise.
            </h1>
            <p className="font-body text-white/90 text-[16px] md:text-[20px] lg:text-[22px] leading-[1.65] mb-8 max-w-[700px]">
              Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
            </p>
            <button className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3 text-[16px] lg:text-[18px] font-body hover:bg-white/10 transition-colors">
              Discover Safal Divisions
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right - Hero Image (provided by user) */}
          <div className="w-full lg:w-[52%] relative">
            <div className="relative w-full aspect-square max-w-[750px] mx-auto">
              <Image
                src="/images/hero-right.png"
                alt="Safal Group - Three Strategic Pillars"
                fill
                className="object-contain"
                priority
              />
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
  const stats = [
    { value: '\u20B9174 Crore', label: 'Strategic Exit Achieved.' },
    { value: '25,000+', label: 'Active Global Users.' },
    { value: '15+', label: 'Countries Deployed.' },
    { value: '500,000+', label: 'Industrial Products Managed.' },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[32px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-4">
          A Diversified Technology Group.
        </h2>
        <p className="font-body text-[16px] md:text-[20px] lg:text-[24px] text-[#666] leading-[1.65] max-w-[1100px] mb-14">
          We are a diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory, we unify complex systems to accelerate growth. We don&apos;t just build software; we architect the frameworks that power industry leaders worldwide.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="border-t-2 border-[#111] pt-5 mb-2">
                <p className="font-heading font-semibold text-[24px] md:text-[32px] lg:text-[40px] text-[#111] leading-tight">{stat.value}</p>
              </div>
              <p className="font-body text-[14px] md:text-[16px] lg:text-[18px] text-[#666]">{stat.label}</p>
            </div>
          ))}
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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-8 lg:mb-12">
          Comprehensive technology and business solutions.
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
          {/* Left - Tab List */}
          <div className="w-full lg:w-[35%]">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left px-5 py-4 transition-all border-b border-[#e0e0e0] ${
                  idx === activeIndex
                    ? 'bg-[#D54B26] text-white'
                    : 'bg-transparent text-[#666] hover:bg-[#f5f0e0]'
                }`}
              >
                <span className={`font-body text-[16px] md:text-[20px] lg:text-[22px] ${idx === activeIndex ? 'font-medium' : 'font-normal'}`}>
                  {sol.id}. {sol.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right - Detail */}
          <div className="w-full lg:w-[65%] bg-white">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image placeholder */}
              <div className="w-full md:w-1/2 min-h-[280px] md:min-h-[500px] img-placeholder relative">
                <Image
                  src="/images/services-image.jpg"
                  alt={solutions[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-[22px] md:text-[28px] lg:text-[36px] text-[#111] leading-[1.2] mb-5">
                    {solutions[activeIndex].id}. {solutions[activeIndex].title}
                  </h3>
                  <p className="font-body text-[14px] md:text-[15px] text-[#666] leading-[1.7] mb-3">
                    Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi amet egestas sit habitant. At mauris euismod dolor scelerisque ac. Fermentum risus.
                  </p>
                  <p className="font-body text-[14px] md:text-[15px] text-[#666] leading-[1.7]">
                    Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[16px] lg:text-[18px] font-body mt-6 w-fit hover:bg-[#222] transition-colors">
                  Explore More
                  <ArrowRight size={16} />
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
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="text-center mb-8">
          <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-3">
            A Diversified Technology Group.
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6] max-w-[1000px] mx-auto">
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
          </p>
        </div>
        <div className="relative w-full max-w-[1200px] mx-auto">
          <Image src="/images/group-structure.png" alt="Safal Group Structure" width={1920} height={650} className="w-full h-auto object-contain" />
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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-6">
          Our Digital Product Ecosystem
        </h2>

        {/* Product Tabs */}
        <div className="flex flex-wrap gap-3 lg:gap-8 mb-8 pb-4 overflow-x-auto">
          {products.map((product, idx) => (
            <button
              key={product}
              onClick={() => setActiveProduct(idx)}
              className={`font-heading text-[22px] md:text-[30px] lg:text-[40px] whitespace-nowrap transition-colors ${
                idx === activeProduct ? 'font-medium text-[#111]' : 'font-normal text-[#BBB] hover:text-[#888]'
              }`}
            >
              {product}
            </button>
          ))}
        </div>

        {/* Product Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Placeholder */}
          <div className="w-full lg:w-[60%] relative min-h-[300px] lg:min-h-[420px] overflow-hidden rounded-sm">
            <Image src="/images/product-ecosystem.jpg" alt="Product" fill className="object-cover" />
          </div>

          {/* Description */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between">
            <p className="font-body text-[14px] md:text-[15px] lg:text-[16px] text-[#666] leading-[1.75] mb-6">
              Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas. Sit porta nulla sed non in nibh tellus nisl.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Product Logo Placeholder */}
              <div className="h-[40px] w-[180px] img-placeholder rounded text-[12px]">
                Product Logo
              </div>
              <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-5 py-2.5 text-[16px] lg:text-[18px] font-body hover:bg-[#222] transition-colors">
                Visit our Product
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SUSTAINABILITY SECTION
   ═══════════════════════════════════════════════════════ */
function SustainabilitySection() {
  return (
    <section className="relative w-full py-14 lg:py-20 overflow-hidden">
      {/* Leaf veins background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image src="/images/leaf-veins.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[40%]">
            <h2 className="font-heading font-medium text-[32px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#608539] leading-[1.1] mb-6">
              Our imprint on the world
            </h2>
            <div className="space-y-4">
              <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
                We believe a technology company&apos;s most lasting impact isn&apos;t measured in revenue — it&apos;s measured in people developed, industries transformed, and responsibility exercised at every level of operation.
              </p>
              <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
                Across eight specialized divisions, Safal Infosoft Group operates with one constant: doing business in a way that creates value for our clients, our people, and the communities we work in — today and for the long term.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[60%] flex flex-col items-end">
            <h2 className="font-heading font-medium text-[32px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#608539] leading-[1.1] mb-6 text-right">
              goes beyond software.
            </h2>
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
              <Image src="/images/green-fingerprint.jpg" alt="Sustainability" fill className="object-contain" />
            </div>
            <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-5 py-2.5 text-[16px] lg:text-[18px] font-body mt-6 hover:bg-[#222] transition-colors">
              Read our Sustainability Commitments
              <ArrowRight size={16} />
            </button>
          </div>
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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-8">
          Transforming Sectors. Architecting the Future.
        </h2>

        <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[640px]">
          {industries.map((industry, idx) => (
            <div
              key={industry.id}
              onClick={() => setExpandedIdx(idx)}
              className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                idx === expandedIdx
                  ? 'w-full lg:w-[540px] flex-shrink-0 bg-white border border-[#eee]'
                  : 'w-full lg:flex-1 min-h-[100px] lg:min-h-0'
              }`}
            >
              {idx === expandedIdx ? (
                /* Expanded card */
                <div className="h-full p-5 lg:p-7 flex flex-col overflow-y-auto">
                  <span className="font-heading text-[40px] lg:text-[72px] text-[#D54B26] font-normal leading-none">{industry.id}.</span>
                  <h3 className="font-heading font-semibold text-[24px] lg:text-[36px] text-[#111] mb-3">{industry.name}</h3>
                  <div className="relative w-full h-[160px] lg:h-[210px] rounded overflow-hidden mb-4 flex-shrink-0">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                  </div>
                  <p className="font-body text-[13px] lg:text-[15px] text-[#666] leading-[1.7]">
                    Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas.
                  </p>
                </div>
              ) : (
                /* Collapsed card */
                <>
                  <div className="absolute inset-0">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#111]/55" />
                  </div>
                  <div className="relative p-5 lg:p-6 h-full flex flex-col justify-end min-h-[100px] lg:min-h-0">
                    <span className="font-heading text-[40px] lg:text-[72px] text-white font-normal leading-none">{industry.id}.</span>
                    <h3 className="font-heading text-[22px] lg:text-[36px] text-white">{industry.name}</h3>
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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-[45%]">
            <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-6">
              A Diversified Technology Group.
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
                We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
              </p>
              <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
                We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
              </p>
              <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
                We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[16px] lg:text-[18px] font-body hover:bg-[#222] transition-colors">
              Visit our Product
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right - Map */}
          <div className="w-full lg:w-[55%] relative min-h-[350px] lg:min-h-[500px]">
            <Image src="/images/global-presence.png" alt="Global Presence" fill className="object-contain" />
            {/* Country markers */}
            <div className="absolute top-[35%] left-[10%] bg-[#D54B26] text-white font-body font-medium text-[14px] lg:text-[16px] px-4 py-2">USA</div>
            <div className="absolute top-[50%] right-[8%] bg-[#D54B26] text-white font-body font-medium text-[14px] lg:text-[16px] px-4 py-2">India</div>
            <div className="absolute top-[30%] right-[15%] bg-[#D54B26] text-white font-body font-medium text-[14px] lg:text-[16px] px-4 py-2">UAE</div>
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
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="text-center mb-10">
          <h2 className="font-heading font-medium text-[28px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-3">
            Where investor confidence meets partner potential
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6] max-w-[900px] mx-auto">
            Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 justify-center items-center">
          {/* Investor Value */}
          <div className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-[#D54B26]/25 flex items-center justify-center p-6 lg:p-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-[26px] md:text-[32px] lg:text-[38px] text-[#111] mb-3 leading-tight">Investor Value</h3>
              <ul className="font-body text-[12px] md:text-[13px] lg:text-[14px] text-[#666] leading-[1.8] text-left space-y-0.5 mb-4">
                {bulletPoints.map((bp) => (
                  <li key={bp}>• {bp}</li>
                ))}
              </ul>
              <button className="bg-[#111] text-[#D54B26] px-5 py-2 text-[14px] lg:text-[16px] font-body hover:bg-[#222] transition-colors">
                Explore More
              </button>
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-[#D54B26]/25 flex items-center justify-center p-6 lg:p-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-[24px] md:text-[30px] lg:text-[36px] text-[#111] mb-3 leading-tight">Strategic Partnerships</h3>
              <ul className="font-body text-[12px] md:text-[13px] lg:text-[14px] text-[#666] leading-[1.8] text-left space-y-0.5 mb-4">
                {bulletPoints.map((bp) => (
                  <li key={bp}>• {bp}</li>
                ))}
              </ul>
              <button className="bg-[#111] text-[#D54B26] px-5 py-2 text-[14px] lg:text-[16px] font-body hover:bg-[#222] transition-colors">
                Explore More
              </button>
            </div>
          </div>
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
    <section className="relative w-full py-16 lg:py-24 overflow-hidden min-h-[400px] lg:min-h-[550px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/gold-key.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBEE] via-[#FFFBEE]/85 to-transparent" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="max-w-[520px]">
          <h2 className="font-heading font-medium text-[30px] md:text-[44px] lg:text-[56px] xl:text-[60px] text-[#111] leading-[1.1] mb-4">
            You&apos;re the missing piece.
            <br />
            Let&apos;s find the right key together.
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7] mb-8">
            Whether you&apos;re evaluating enterprise software, exploring a technology partnership, looking to invest, or launching a startup — every great outcome starts with a single conversation. Tell us what you need. We&apos;ll connect you with exactly the right person from day one.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[16px] lg:text-[18px] font-body hover:bg-[#222] transition-colors">
            Start the Conversation
            <ArrowRight size={16} />
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
    <footer className="w-full bg-[#050505] text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-[60px] py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-10">
          {/* Left - Logo & Info */}
          <div className="w-full lg:w-[26%]">
            <div className="relative w-[160px] h-[55px] mb-5">
              <Image src="/images/header-logo.png" alt="Safal Infosoft Limited" fill className="object-contain object-left" />
            </div>
            <p className="font-body text-[15px] lg:text-[17px] text-white/90 leading-[1.6] mb-5">
              Ideaz Ventures is a startup execution partner helping founders validate ideas, build scalable products, and launch technology ventures globally.
            </p>
            <div className="space-y-2 mb-5">
              <a href="tel:+919737045561" className="flex items-center gap-2 text-white/80 text-[15px] lg:text-[17px] font-body hover:text-white transition-colors">
                <Phone size={16} />
                +91 97370 45561
              </a>
              <a href="mailto:hello@safalinfosoft.com" className="flex items-center gap-2 text-white/80 text-[15px] lg:text-[17px] font-body hover:text-white transition-colors">
                <Mail size={16} />
                hello@safalinfosoft.com
              </a>
            </div>
            {/* Social icons placeholder */}
            <div className="flex items-center gap-4">
              {['IG', 'FB', 'LI', 'WA', 'TW'].map((s) => (
                <a key={s} href="#" className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/60 hover:border-white hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Link Columns */}
          <div className="w-full lg:w-[74%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {/* Divisions */}
            <div>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Divisions</h4>
              <ul className="space-y-2">
                {['Enterprise Products & Platforms', 'Brand, Digital & Creative Services', 'Startup Product Development & Consulting', 'Industrial Automation & IoT', 'AI & Emerging Technology', 'Business & Financial Advisory', 'Financial Accounting', 'Technology Staffing'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* About + Insights */}
            <div>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">About</h4>
              <ul className="space-y-2 mb-6">
                {['Our Story & Vision', 'Leadership Team', 'Group Structure', 'Values & Culture', 'Sustainability'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Insights</h4>
              <ul className="space-y-2">
                {['Blogs', 'Case Studies', 'News & Announcements'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Quick Links + Careers */}
            <div>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 mb-6">
                {['Home', 'Industries', 'Contact Us'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Careers</h4>
              <ul className="space-y-2">
                {['Life at Safal', 'Open Positions', 'Internships & Mentorship'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Investors + Partnerships */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Investors</h4>
              <ul className="space-y-2 mb-6">
                {['Investor Relations', 'Financial Reports & Disclosures', 'Corporate Governance'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
              <h4 className="font-heading text-[18px] lg:text-[22px] text-white mb-4">Partnerships</h4>
              <ul className="space-y-2">
                {['Strategic Partnerships', 'Become a Partner'].map((item) => (
                  <li key={item}><a href="#" className="font-body text-[13px] lg:text-[15px] text-[#DDD] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[14px] lg:text-[17px] text-[#666]">
            Privacy Policy | Terms & Conditions
          </p>
          <p className="font-body text-[14px] lg:text-[17px] text-[#666]">
            &copy; Copyright 2026. All rights reserved Safal Infosoft Limited.
          </p>
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
