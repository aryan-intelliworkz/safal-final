export default function SectionTitle({ title, subtitle, alignment = 'left', className = '' }) {
  return (
    <div className={`mb-[clamp(24px,3vw,56px)] ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="font-heading text-[#D54B26] uppercase tracking-wider font-semibold" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', marginBottom: 'clamp(8px, 0.6vw, 12px)', display: 'block' }}>
          {subtitle}
        </span>
      )}
      <h2 className="font-heading font-medium text-[#111] leading-[1.1]" style={{ fontSize: 'clamp(24px, 3vw, 52px)' }}>
        {title}
      </h2>
    </div>
  );
}
