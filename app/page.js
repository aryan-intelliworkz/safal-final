'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';

/* ─── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'The Company', hasDropdown: true },
    { label: 'Our Division', hasDropdown: true },
    { label: 'Industries We Serve', hasDropdown: false },
    { label: 'Partnerships', hasDropdown: true },
    { label: 'Insights', hasDropdown: true },
    { label: 'Investors', hasDropdown: true },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 lg:px-[60px] py-2.5 h-[100px]">
        {/* Logo */}
        <div className="relative w-[140px] h-[56px] md:w-[199px] md:h-[80px] flex-shrink-0">
          <Image src="/images/logo-white.png" alt="Safal Infosoft Limited" fill className="object-contain" priority />
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => (
            <button key={item.label} className="flex items-center gap-1 text-white text-[16px] 2xl:text-[18px] font-body hover:opacity-80 transition-opacity whitespace-nowrap">
              {item.label}
              {item.hasDropdown && <ChevronDown size={16} className="text-white" />}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#D54B26] text-white px-6 py-2.5 text-[18px] font-body hover:bg-[#c04020] transition-colors">
          Get In Touch
        </button>

        {/* Mobile Hamburger */}
        <button className="xl:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l16 16M22 6L6 22" />
            ) : (
              <path d="M4 8h20M4 14h20M4 20h20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#111] border-t border-white/10 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button key={item.label} className="block text-white text-[16px] font-body w-full text-left py-2">
              {item.label}
            </button>
          ))}
          <button className="w-full bg-[#D54B26] text-white px-6 py-2.5 text-[18px] font-body mt-3">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ───────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[920px] bg-[#111] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-transparent to-[#111]" />
      
      <Navbar />

      <div className="relative max-w-[1800px] mx-auto px-6 lg:px-[60px] pt-[140px] lg:pt-[142px] pb-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pt-[40px] lg:pt-[180px] z-10">
          <h1 className="font-heading font-semibold text-[40px] md:text-[60px] lg:text-[80px] text-white leading-[1.05] mb-6">
            The Architecture of Global Enterprise.
          </h1>
          <p className="font-body text-white text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] mb-8 max-w-[885px]">
            Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
          </p>
          <button className="inline-flex items-center gap-2 border border-white text-white px-6 py-2.5 text-[18px] font-body hover:bg-white/10 transition-colors">
            Discover Safal Divisions
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right - 3D Render with Labels */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative w-full aspect-[772/737]">
            <Image src="/images/hero-3d.jpg" alt="Safal Group 3D Visualization" fill className="object-contain" priority />
            
            {/* Floating labels - Left */}
            <div className="absolute top-[18%] left-0 bg-black/60 backdrop-blur-sm border border-white/20 rounded px-3 py-2 hidden md:block">
              <p className="text-white text-[12px] lg:text-[14px] font-body">Enterprise Platforms & Products</p>
              <p className="text-white text-[12px] lg:text-[14px] font-body">Brand, Digital & Creative</p>
              <p className="text-white text-[12px] lg:text-[14px] font-body">Startup Consulting</p>
            </div>
            
            {/* Floating labels - Right */}
            <div className="absolute top-[22%] right-0 bg-black/60 backdrop-blur-sm border border-white/20 rounded px-3 py-2 hidden md:block">
              <p className="text-white text-[12px] lg:text-[14px] font-body">Business & Financial Advisory</p>
              <p className="text-white text-[12px] lg:text-[14px] font-body">Financial Accounting</p>
            </div>
            
            {/* Floating labels - Bottom */}
            <div className="absolute bottom-[5%] right-[15%] bg-black/60 backdrop-blur-sm border border-white/20 rounded px-3 py-2 hidden md:block">
              <p className="text-white text-[12px] lg:text-[14px] font-body">Automation & IoT</p>
              <p className="text-white text-[12px] lg:text-[14px] font-body">AI & Emerging Technology</p>
              <p className="text-white text-[12px] lg:text-[14px] font-body">Technology Staffing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ──────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: '\u20B9174 Crore', label: 'Strategic Exit Achieved.' },
    { value: '25,000+', label: 'Active Global Users.' },
    { value: '15+', label: 'Countries Deployed.' },
    { value: '500,000+', label: 'Industrial Products Managed.' },
  ];

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[36px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-4">
          A Diversified Technology Group.
        </h2>
        <p className="font-body text-[16px] md:text-[20px] lg:text-[24px] text-[#666] leading-[1.6] max-w-[1200px] mb-12">
          We are a diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory, we unify complex systems to accelerate growth. We don&apos;t just build software; we architect the frameworks that power industry leaders worldwide.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="border-t-2 border-[#111] pt-4">
                <p className="font-heading font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-[#111]">{stat.value}</p>
              </div>
              <p className="font-body text-[14px] md:text-[16px] lg:text-[18px] text-[#666]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solutions Section ──────────────────────────────── */
function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const solutions = [
    { id: '01', title: 'Enterprise Products & Platforms', description: 'We build enterprise-grade digital products that automate operations, unify data, and drive measurable growth across industries.', detail: 'Our enterprise platforms include ERP systems, CRM solutions, document management tools, and custom business applications designed for scalability and performance.' },
    { id: '02', title: 'Brand, Digital & Creative Services', description: 'Strategic branding and digital presence solutions for modern enterprises.', detail: '' },
    { id: '03', title: 'Startup Product Development & Consulting', description: 'End-to-end product development and consulting for startups.', detail: '' },
    { id: '04', title: 'Industrial Automation & IoT', description: 'Smart automation solutions for industrial operations.', detail: '' },
    { id: '05', title: 'AI & Emerging Technology', description: 'Cutting-edge AI and technology solutions for future-ready businesses.', detail: '' },
    { id: '06', title: 'Business & Financial Advisory', description: 'Expert financial advisory and business consulting services.', detail: '' },
    { id: '07', title: 'Financial Accounting', description: 'Comprehensive financial accounting and reporting solutions.', detail: '' },
    { id: '08', title: 'Technology Staffing', description: 'Top-tier technology talent acquisition and staffing solutions.', detail: '' },
  ];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-8 lg:mb-12">
          Comprehensive technology and business solutions.
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left - Service List */}
          <div className="w-full lg:w-[35%] space-y-0">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left px-5 py-4 border-b border-[#ddd] transition-all ${
                  idx === activeIndex
                    ? 'bg-[#D54B26] text-white'
                    : 'bg-transparent text-[#666] hover:bg-gray-100'
                }`}
              >
                <span className={`font-body text-[18px] md:text-[24px] ${
                  idx === activeIndex ? 'font-medium' : 'font-normal'
                }`}>
                  {sol.id}. {sol.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right - Detail Card */}
          <div className="w-full lg:w-[65%] bg-white rounded-sm overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[520px]">
                <Image src="/images/services-image.jpg" alt={solutions[activeIndex].title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-[24px] md:text-[32px] lg:text-[40px] text-[#111] leading-[1.2] mb-4">
                    {solutions[activeIndex].id}. {solutions[activeIndex].title}
                  </h3>
                  <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6] mb-4">
                    {solutions[activeIndex].description}
                  </p>
                  <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6]">
                    {solutions[activeIndex].detail || 'Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi amet egestas sit habitant.'}
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[18px] font-body mt-6 w-fit hover:bg-[#222] transition-colors">
                  Explore More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Group Structure Section ────────────────────────── */
function GroupStructureSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="text-center mb-10">
          <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-3">
            A Diversified Technology Group.
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6] max-w-[1200px] mx-auto">
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
          </p>
        </div>
        
        <div className="relative w-full">
          <Image 
            src="/images/group-structure.png" 
            alt="Safal Group Structure" 
            width={1920} 
            height={650} 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Product Ecosystem Section ──────────────────────── */
function ProductEcosystemSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const products = ['Datanote', 'POS', 'Formezy', 'CRM', 'Docezy', 'ERP', 'Tasknote'];

  return (
    <section className="w-full py-12 lg:py-16 bg-[#FFFBEE]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-6">
          Our Digital Product Ecosystem
        </h2>
        
        {/* Product Tabs */}
        <div className="flex flex-wrap gap-4 lg:gap-8 mb-8 border-b border-[#ddd] pb-4 overflow-x-auto">
          {products.map((product, idx) => (
            <button
              key={product}
              onClick={() => setActiveProduct(idx)}
              className={`font-heading text-[24px] md:text-[32px] lg:text-[40px] whitespace-nowrap transition-colors ${
                idx === activeProduct
                  ? 'font-medium text-[#111]'
                  : 'font-normal text-[#BBB] hover:text-[#888]'
              }`}
            >
              {product}
            </button>
          ))}
        </div>

        {/* Product Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-2/3 bg-[#f5f5f5] rounded-sm overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
            <Image src="/images/product-ecosystem.jpg" alt="Product Ecosystem" fill className="object-cover" />
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-1/3">
            <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7] mb-6">
              Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus.
            </p>
            <div className="flex items-center justify-between">
              <div className="relative w-[160px] h-[40px] bg-white">
                <Image src="/images/logo-white.png" alt="Datanote" fill className="object-contain invert" />
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

/* ─── Sustainability Section ─────────────────────────── */
function SustainabilitySection() {
  return (
    <section className="relative w-full py-16 lg:py-20 overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <Image src="/images/leaf-veins.jpg" alt="" fill className="object-cover opacity-10" />
      </div>
      
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-[160px] flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[40%]">
          <h2 className="font-heading font-medium text-[36px] md:text-[48px] lg:text-[60px] text-[#608539] leading-[1.1] mb-6">
            Our imprint on the world
          </h2>
          <div className="space-y-4 mb-6">
            <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
              We believe a technology company&apos;s most lasting impact isn&apos;t measured in revenue — it&apos;s measured in people developed, industries transformed, and responsibility exercised at every level of operation.
            </p>
            <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7]">
              Across eight specialized divisions, Safal Infosoft Group operates with one constant: doing business in a way that creates value for our clients, our people, and the communities we work in — today and for the long term.
            </p>
          </div>
        </div>
        
        {/* Right - Green Fingerprint */}
        <div className="w-full lg:w-[60%] flex flex-col items-end">
          <h2 className="font-heading font-medium text-[36px] md:text-[48px] lg:text-[60px] text-[#608539] leading-[1.1] mb-6 self-end text-right">
            goes beyond software.
          </h2>
          <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[400px] self-end">
            <Image src="/images/green-fingerprint.jpg" alt="Our impact" fill className="object-contain" />
          </div>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[16px] lg:text-[18px] font-body mt-6 hover:bg-[#222] transition-colors">
            Read our Sustainability Commitments
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Industries Section ─────────────────────────────── */
function IndustriesSection() {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const industries = [
    { id: '01', name: 'Manufacturing', image: '/images/manufacturing.jpg' },
    { id: '02', name: 'Logistics', image: '/images/container-port.jpg' },
    { id: '03', name: 'Retail', image: '/images/container-port.jpg' },
    { id: '04', name: 'Healthcare', image: '/images/healthcare.jpg' },
    { id: '05', name: 'Finance', image: '/images/finance.jpg' },
  ];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-8">
          Transforming Sectors. Architecting the Future.
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[652px]">
          {industries.map((industry, idx) => (
            <div
              key={industry.id}
              onClick={() => setExpandedIdx(idx)}
              className={`relative cursor-pointer overflow-hidden rounded-sm transition-all duration-500 ease-in-out ${
                idx === expandedIdx
                  ? 'w-full lg:w-[560px] flex-shrink-0 bg-white border border-[#eee]'
                  : 'w-full lg:flex-1 min-h-[120px] lg:min-h-0'
              }`}
            >
              {idx === expandedIdx ? (
                <div className="relative p-6 lg:p-8 h-full flex flex-col overflow-y-auto">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-heading text-[48px] lg:text-[80px] text-[#D54B26] font-normal leading-none">{industry.id}. </span>
                  </div>
                  <h3 className="font-heading font-semibold text-[28px] lg:text-[40px] text-[#111] mb-4">{industry.name}</h3>
                  <div className="relative w-full h-[180px] lg:h-[220px] rounded overflow-hidden mb-4 flex-shrink-0">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                  </div>
                  <p className="font-body text-[14px] lg:text-[16px] text-[#666] leading-[1.7]">
                    Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus a aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#111]/60" />
                  </div>
                  <div className="relative p-6 h-full flex flex-col justify-end">
                    <span className="font-heading text-[48px] lg:text-[80px] text-white font-normal leading-none">{industry.id}. </span>
                    <h3 className="font-heading text-[24px] lg:text-[40px] text-white">{industry.name}</h3>
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

/* ─── Global Presence Section ────────────────────────── */
function GlobalPresenceSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[45%]">
            <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-6">
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
            <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[18px] font-body hover:bg-[#222] transition-colors">
              Visit our Product
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Right - World Map */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative w-full aspect-[692/690]">
              <Image src="/images/global-presence.png" alt="Global Presence" fill className="object-contain" />
              
              {/* Country markers */}
              <div className="absolute top-[38%] left-[8%] bg-[#D54B26] text-white font-label font-medium text-[14px] lg:text-[18px] px-4 py-2 rounded-sm">
                USA
              </div>
              <div className="absolute top-[55%] right-[5%] bg-[#D54B26] text-white font-label font-medium text-[14px] lg:text-[18px] px-4 py-2 rounded-sm">
                India
              </div>
              <div className="absolute top-[33%] right-[12%] bg-[#D54B26] text-white font-label font-medium text-[14px] lg:text-[18px] px-4 py-2 rounded-sm">
                UAE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Investor Section ───────────────────────────────── */
function InvestorSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="text-center mb-10">
          <h2 className="font-heading font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-3">
            Where investor confidence meets partner potential
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.6] max-w-[1000px] mx-auto">
            Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Investor Value Circle */}
          <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-[#D54B26]/30 flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-[28px] md:text-[40px] text-[#111] mb-3">Investor Value</h3>
              <ul className="font-body text-[12px] md:text-[14px] text-[#666] leading-[1.8] text-left space-y-1">
                <li>• Strong financial governance</li>
                <li>• Scalable enterprise technology</li>
                <li>• Sustainable growth strategy</li>
                <li>• Transparent operations</li>
                <li>• Global market expansion</li>
              </ul>
              <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-4 py-2 text-[14px] md:text-[16px] font-body mt-3 hover:bg-[#222] transition-colors">
                Explore More
              </button>
            </div>
          </div>

          {/* Strategic Partnerships Circle */}
          <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-[#D54B26]/30 flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-[24px] md:text-[36px] text-[#111] mb-3 leading-[1.1]">Strategic Partnerships</h3>
              <ul className="font-body text-[12px] md:text-[14px] text-[#666] leading-[1.8] text-left space-y-1">
                <li>• Strong financial governance</li>
                <li>• Scalable enterprise technology</li>
                <li>• Sustainable growth strategy</li>
                <li>• Transparent operations</li>
                <li>• Global market expansion</li>
              </ul>
              <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-4 py-2 text-[14px] md:text-[16px] font-body mt-3 hover:bg-[#222] transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ────────────────────────────────────── */
function CTASection() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/gold-key.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBEE] via-[#FFFBEE]/90 to-transparent" />
      </div>
      
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-[160px]">
        <div className="max-w-[520px]">
          <h2 className="font-heading font-medium text-[36px] md:text-[48px] lg:text-[60px] text-[#111] leading-[1.1] mb-4">
            You&apos;re the missing piece.{' '}
            <br />
            Let&apos;s find the right key together.
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#666] leading-[1.7] mb-8">
            Whether you&apos;re evaluating enterprise software, exploring a technology partnership, looking to invest, or launching a startup — every great outcome starts with a single conversation. Tell us what you need. We&apos;ll connect you with exactly the right person from day one.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#111] text-[#D54B26] px-6 py-2.5 text-[18px] font-body hover:bg-[#222] transition-colors">
            Start the Conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">
          {/* Left - Logo & Info */}
          <div className="w-full lg:w-[28%]">
            <div className="relative w-[160px] h-[60px] mb-4">
              <Image src="/images/logo-white.png" alt="Safal Infosoft Limited" fill className="object-contain" />
            </div>
            <p className="font-body text-[16px] lg:text-[18px] text-white leading-[1.6] mb-6">
              Ideaz Ventures is a startup execution partner helping founders validate ideas, build scalable products, and launch technology ventures globally.
            </p>
            
            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a href="tel:+919737045561" className="flex items-center gap-2 text-white text-[16px] lg:text-[18px] font-body hover:opacity-80">
                <Phone size={18} />
                +91 97370 45561
              </a>
              <a href="mailto:hello@safalinfosoft.com" className="flex items-center gap-2 text-white text-[16px] lg:text-[18px] font-body hover:opacity-80">
                <Mail size={18} />
                hello@safalinfosoft.com
              </a>
            </div>
            
            {/* Social */}
            <div className="flex items-center gap-6">
              {['instagram', 'facebook', 'linkedin', 'whatsapp', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-6 h-6 text-white hover:text-[#D54B26] transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right - Links Grid */}
          <div className="w-full lg:w-[72%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {/* Divisions */}
            <div>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Divisions</h4>
              <ul className="space-y-2">
                {[
                  'Enterprise Products & Platforms',
                  'Brand, Digital & Creative Services',
                  'Startup Product Development & Consulting',
                  'Industrial Automation & IoT',
                  'AI & Emerging Technology',
                  'Business & Financial Advisory',
                  'Financial Accounting',
                  'Technology Staffing',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About + Insights */}
            <div>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">About</h4>
              <ul className="space-y-2 mb-8">
                {['Our Story & Vision', 'Leadership Team', 'Group Structure', 'Values & Culture', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Insights</h4>
              <ul className="space-y-2">
                {['Blogs', 'Case Studies', 'News & Announcements'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links + Careers */}
            <div>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 mb-8">
                {['Home', 'Industries', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Careers</h4>
              <ul className="space-y-2">
                {['Life at Safal', 'Open Positions', 'Internships & Mentorship'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investors + Partnerships */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Investors</h4>
              <ul className="space-y-2 mb-8">
                {['Investor Relations', 'Financial Reports & Disclosures', 'Corporate Governance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              <h4 className="font-heading text-[20px] lg:text-[24px] text-white mb-4">Partnerships</h4>
              <ul className="space-y-2">
                {['Strategic Partnerships', 'Become a Partner'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[14px] lg:text-[16px] text-[#DDD] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[14px] lg:text-[18px] text-[#666]">
            Privacy Policy | Terms & Conditions
          </p>
          <p className="font-body text-[14px] lg:text-[18px] text-[#666]">
            \u00A9 Copyright 2026. All rights reserved Safal Infosoft Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ──────────────────────────────────────── */
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
