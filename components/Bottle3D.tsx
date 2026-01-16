import React from 'react';
import { Flavor } from '../types';

interface Bottle3DProps {
  flavor: Flavor;
}

const Bottle3D: React.FC<Bottle3DProps> = ({ flavor }) => {
  return (
    <div className="relative group w-48 h-[340px] mx-auto transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2">
      {/* Glow Effect */}
      <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${flavor.color.replace('bg-', 'bg-')}`}></div>

      {/* Bottle Container */}
      <div className="relative w-full h-full flex flex-col items-center">
        
        {/* Cap (Ribbed) */}
        <div className="w-40 h-24 ribbed-cap rounded-t-lg shadow-2xl z-20 border-b border-zinc-800 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none rounded-t-lg"></div>
        </div>

        {/* Bottle Body */}
        <div className="w-44 h-full bg-[#111] relative -mt-1 rounded-b-2xl shadow-xl flex flex-col overflow-hidden z-10">
          {/* Lighting overlay on bottle */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-zinc-800/10 to-black/90 pointer-events-none z-20"></div>
          
          {/* Label Area */}
          <div className="absolute top-4 bottom-4 left-0 right-0 px-4 flex flex-col justify-between z-10">
            
            {/* Upper Label Info */}
            <div className="flex justify-between items-start border-b border-zinc-700 pb-2 mb-4">
               <div className="flex flex-col">
                  <span className="bg-orange-600 text-black text-[10px] font-bold px-1 rounded-sm mb-1 inline-block w-max">21+</span>
                  <span className="text-[9px] text-zinc-400 leading-tight">10 SERVINGS<br/>100MG / SERVING</span>
               </div>
            </div>

            {/* Brand Logo on Bottle */}
            <div className="relative transform -rotate-12 translate-y-2">
               <h2 className={`brand-font text-6xl ${flavor.textColor} opacity-90 tracking-tighter leading-none`}>
                 URGE
               </h2>
               {/* Slash effect */}
               <div className={`absolute top-1/2 left-0 w-full h-1 ${flavor.color} transform -rotate-3`}></div>
            </div>

            {/* Bottom Label Info */}
            <div className="mt-auto">
               <h3 className={`brand-font text-xl uppercase tracking-wider mb-2 ${flavor.textColor}`}>
                 {flavor.name}
               </h3>
               
               <div className="space-y-1">
                 <div className="flex items-baseline gap-1">
                    <span className="text-orange-500 font-bold text-lg leading-none">200mg</span>
                    <span className="text-zinc-500 text-[10px] uppercase">| 1,000mg per bottle</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className={`font-black italic text-2xl ${flavor.textColor}`}>MIT</span>
                    <div className="h-4 w-[1px] bg-zinc-600"></div>
                    <span className="text-[9px] text-zinc-500">Net Wt: 3.75g (0.132 oz)</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottle3D;