import Image from 'next/image';

export default function PageHeader({ title, description, bgImage = '/images/inner-hero-bg.jpg', height = 'min-h-[40vh]' }) {
  return (
    <section className={`relative w-full ${height} bg-[#111] overflow-hidden flex flex-col justify-center items-center text-center mt-[60px] md:mt-[70px] lg:mt-[80px]`}>
      <div className="absolute inset-0 z-[1] bg-black/40" />
      {bgImage && (
        <div className="absolute inset-0">
           <Image src={bgImage} alt={title} fill className="object-cover" />
        </div>
      )}
      
      <div className="relative z-[2] max-w-[1200px] mx-auto px-5 md:px-10 mt-10">
        <h1 className="font-heading font-semibold text-white leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 64px)', marginBottom: 'clamp(12px, 1vw, 20px)' }}>
          {title}
        </h1>
        {description && (
          <p className="font-body text-white/80 leading-relaxed max-w-[800px] mx-auto" style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
