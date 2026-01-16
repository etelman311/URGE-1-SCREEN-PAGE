import React from 'react';
import { FLAVORS } from '../constants';
import Bottle3D from './Bottle3D';

const ProductSection: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Text Texture */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="brand-font text-[20vw] leading-none text-white whitespace-nowrap animate-marquee">
          URGE URGE URGE URGE URGE
        </div>
        <div className="brand-font text-[20vw] leading-none text-white whitespace-nowrap animate-marquee-reverse ml-[-50vw]">
          URGE URGE URGE URGE URGE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="brand-font text-5xl md:text-8xl text-white uppercase tracking-tighter">
            4 BOLD <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">FLAVORS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {FLAVORS.map((flavor) => (
            <div key={flavor.id} className="flex flex-col items-center">
              <Bottle3D flavor={flavor} />
              <div className="mt-8 text-center">
                <h3 className={`brand-font text-2xl ${flavor.textColor} uppercase tracking-wider`}>{flavor.name}</h3>
                <p className="text-zinc-500 text-sm mt-2 max-w-[200px]">{flavor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;