const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf-8');
const lines = content.split('\n');

// We want to remove:
// 1. imports on lines 3-5
// 2. useCountUp and AnimatedStat (lines 7-50)
// 3. Navbar (lines 52-105)
// 4. Navbar call in HeroSection (lines 117-120)
// 5. Footer (lines 623-717)
// 6. Footer call in Home (line 734)

let newLines = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  
  if (i === 2) { // line 3
    newLines.push("import { useState } from 'react';");
    newLines.push("import Image from 'next/image';");
    newLines.push("import { ArrowRight } from 'lucide-react';");
    newLines.push("import AnimatedStat from '@/components/AnimatedStat';");
    i += 3; // skip old imports
    continue;
  }
  
  if (line.includes('/* ─── Animated Counter Hook ─── */')) {
    while (!lines[i].includes('/* ═══════════════════════════════════════════════════════')) {
      if (lines[i].includes('HERO SECTION')) break; // safety
      i++;
    }
    continue;
  }
  
  if (line.includes('NAVBAR')) {
    while (!lines[i].includes('HERO SECTION')) {
      i++;
    }
    continue; // we are at the HERO SECTION line header now!
  }

  if (line.includes('{/* Navbar inside hero so both fit in 100vh */}')) {
    i += 3; // skip the div and Navbar
    continue;
  }

  if (line.includes('    <nav className="w-full z-50 flex-shrink-0">')) {
     while (!lines[i].includes('}')) { i++; } i++; continue; // fallback
  }

  if (line.includes('FOOTER') && line.includes('════')) {
    while (!lines[i].includes('export default function Home()')) {
      i++;
    }
    continue;
  }

  if (line.includes('<Footer />')) {
    i++;
    continue;
  }

  newLines.push(line);
  i++;
}

fs.writeFileSync('app/page.js', newLines.join('\n'));
console.log('Done cleaning page.js');
