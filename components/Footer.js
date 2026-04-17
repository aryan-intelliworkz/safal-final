import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
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
                {[
                  { name: 'Our Story & Vision', href: '/about/story-vision' },
                  { name: 'Leadership Team', href: '/about/leadership-team' },
                  { name: 'Group Structure', href: '/about/group-structure' },
                  { name: 'Values & Culture', href: '/about/values-culture' },
                  { name: 'Sustainability', href: '/sustainability' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Insights</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {[
                  { name: 'Blogs', href: '/blogs' },
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'Webinars', href: '/webinars' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Industries', href: '/industries' },
                  { name: 'Contact Us', href: '/contact' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Careers</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {[
                  { name: 'Life at Safal', href: '/careers/life-at-safal' },
                  { name: 'Open Positions', href: '/careers/open-positions' },
                  { name: 'Internships & Mentorship', href: '/careers/internships-mentorship' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Investors</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
                {[
                  { name: 'Investor Relations', href: '/investors' },
                  { name: 'Financial Reports & Disclosures', href: '/investors/financial-reports' },
                  { name: 'Corporate Governance', href: '/investors/corporate-governance' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
              <h4 className="font-heading text-white" style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', marginBottom: 'clamp(8px, 0.6vw, 12px)' }}>Partnerships</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.3vw, 6px)' }}>
                {[
                  { name: 'Strategic Partnerships', href: '/partnerships/strategic' },
                  { name: 'Become a Partner', href: '/partnerships/become-partner' }
                ].map((item) => (
                  <li key={item.name}><Link href={item.href} className="font-body text-[#DDD] hover:text-white transition-colors" style={{ fontSize: 'clamp(10px, 0.73vw, 14px)' }}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 flex flex-col md:flex-row items-center justify-between" style={{ paddingTop: 'clamp(12px, 1vw, 20px)', gap: 'clamp(6px, 0.4vw, 8px)' }}>
          <div className="flex gap-4">
             <Link href="/privacy-policy" className="font-body text-[#666] hover:text-white" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>Privacy Policy</Link>
             <Link href="/terms-conditions" className="font-body text-[#666] hover:text-white" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>Terms & Conditions</Link>
          </div>
          <p className="font-body text-[#666]" style={{ fontSize: 'clamp(11px, 0.78vw, 15px)' }}>&copy; Copyright 2026. All rights reserved Safal Infosoft Limited.</p>
        </div>
      </div>
    </footer>
  );
}
