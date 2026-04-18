import Image from 'next/image';

export default function MasterLayoutHeader({ title, description, rightImage }) {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[450px] lg:min-h-[500px] bg-[#0A0A0A] overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/MasterLayoutBG.png" alt="Background Grid" fill className="object-cover opacity-80" priority />
      </div>
      
      {/* Overlay Gradients */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#0A0A0A] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0A0A0A] to-transparent z-[1]" />

      <div className="relative z-[2] max-w-[1800px] mx-auto w-full px-5 md:px-10 lg:px-[60px] flex flex-col md:flex-row items-center justify-between gap-10 py-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 lg:w-5/12 text-left">
          <h1 className="font-heading font-semibold text-white leading-[1.1] mb-5 lg:mb-6" style={{ fontSize: 'clamp(32px, 3.5vw, 64px)' }}>
            {title}
          </h1>
          {description && (
            <p className="font-body text-white/80 leading-relaxed" style={{ fontSize: 'clamp(14px, 1.1vw, 20px)' }}>
              {description}
            </p>
          )}
        </div>

        {/* Right Content */}
        {rightImage && (
          <div className="w-full md:w-1/2 lg:w-6/12 flex justify-center md:justify-end">
            <div className="relative w-full aspect-[4/3] max-w-[280px] md:max-w-[380px] lg:max-w-[420px]">
              <Image src={rightImage} alt="Header Graphic" fill className="object-contain object-center md:object-right" priority />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
