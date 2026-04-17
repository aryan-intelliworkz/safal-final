'use client';

import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000, startOnView = true) {
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

export default function AnimatedStat({ targetNum, prefix, suffix, label }) {
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
