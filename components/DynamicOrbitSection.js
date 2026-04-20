import React from 'react';
import OrbitingCircles from './OrbitingCircles';
import Image from 'next/image';

export default function DynamicOrbitSection({ children }) {
  return (
    <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative flex h-full w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden">
          
          {/* Single Outer Ring */}
          <OrbitingCircles className="border-none bg-transparent" iconSize={90} radius={360} duration={40}>
            <Image src="/images/DI_StarCube.png" alt="StarCube Orbit" width={90} height={90} className="object-contain drop-shadow-md" />
            <Image src="/images/DI_Orbit.png" alt="Cube Orbit" width={90} height={90} className="object-contain drop-shadow-md" />
            <Image src="/images/DI_Rocket.png" alt="Rocket Orbit" width={70} height={70} className="object-contain drop-shadow-md" />
            <Image src="/images/DI_Compaas.png" alt="Compass Orbit" width={70} height={70} className="object-contain drop-shadow-md" />
          </OrbitingCircles>

          {/* Dotted Grid Background Optional Overlay */}
          <div className="absolute inset-0 bg-[url('/images/MasterLayoutBG.png')] bg-center bg-cover opacity-[0.03] pointer-events-none mix-blend-multiply"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-[650px] px-5 py-12">
         {children}
      </div>
    </section>
  );
}
