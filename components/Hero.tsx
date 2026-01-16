import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-orange-600/5 rounded-full blur-[120px]"></div>
        {/* Carbon texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        
        {/* Main Title / Brand Name */}
        <div className="relative flex flex-col items-center">
            <h1 className="brand-font text-[35vw] md:text-[25vw] leading-[0.8] text-zinc-100 tracking-tighter uppercase mix-blend-overlay opacity-90 select-none">
            URGE
            </h1>
            
            <div className="absolute -bottom-6 md:-bottom-8">
                <span className="inline-block py-1 px-4 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase backdrop-blur-md">
                    Coming Soon
                </span>
            </div>
        </div>

        {/* Absolute Bottom Footer */}
        <div className="absolute bottom-8 w-full text-center">
            <p className="text-zinc-800 text-[10px] uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} URGE Supplements
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;