'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navItems = [
    { label: 'The Company', href: '/about/story-vision', hasDropdown: true },
    { label: 'Our Division', href: '/about/group-structure', hasDropdown: true },
    { label: 'Industries We Serve', href: '/industries', hasDropdown: true },
    { label: 'Partnerships', href: '/partnerships/strategic', hasDropdown: true },
    { label: 'Insights', href: '/blogs', hasDropdown: true },
    { label: 'Investors', href: '/investors', hasDropdown: true },
  ];

  return (
    <nav className={`w-full z-50 flex-shrink-0 ${!isHome ? 'bg-[#111]' : ''}`}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-5 md:px-10 lg:px-[60px] h-[60px] md:h-[70px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/" className="relative flex-shrink-0 block" style={{ width: 'clamp(110px, 10vw, 190px)', height: 'clamp(36px, 3.2vw, 60px)' }}>
          <Image src="/images/header-logo.png" alt="Safal Infosoft Limited" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center" style={{ gap: 'clamp(12px, 1.3vw, 24px)' }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center gap-1 text-white font-body hover:opacity-80 transition-opacity whitespace-nowrap" style={{ fontSize: 'clamp(12px, 0.83vw, 16px)' }}>
              {item.label}
              {item.hasDropdown && <ChevronDown size={12} className="text-white opacity-70" />}
            </Link>
          ))}
        </div>

        {/* CTA Button - xl+ only */}
        <Link href="/contact" className="hidden xl:flex items-center bg-[#D54B26] text-white font-body font-medium hover:bg-[#c04020] transition-colors whitespace-nowrap" style={{ padding: 'clamp(6px, 0.5vw, 10px) clamp(14px, 1.2vw, 22px)', fontSize: 'clamp(12px, 0.78vw, 15px)' }}>
          Get In Touch
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#111] border-t border-white/10 px-5 py-3 space-y-2 absolute w-full top-[60px] md:top-[70px] lg:top-[80px] z-50 left-0">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-white text-[14px] font-body w-full text-left py-2 border-b border-white/5">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full bg-[#D54B26] text-center text-white px-5 py-2.5 text-[14px] font-body font-medium mt-2">Get In Touch</Link>
        </div>
      )}
    </nav>
  );
}
