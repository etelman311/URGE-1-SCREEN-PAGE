import React from 'react';
import { Zap, ShieldCheck, Box, Crosshair } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={40} className="text-orange-500" />,
      title: "POTENT FORMULA",
      desc: "200MG of Mitragynine per tablet. 100MG per serving. Engineered for maximum impact."
    },
    {
      icon: <Box size={40} className="text-blue-500" />,
      title: "BULK VALUE",
      desc: "1,000MG total Mitragynine per bottle. 10 servings packed into a compact, durable container."
    },
    {
      icon: <Crosshair size={40} className="text-green-500" />,
      title: "PRECISION DOSING",
      desc: "Scored tablets allow for accurate 100MG servings. Control your experience."
    },
    {
      icon: <ShieldCheck size={40} className="text-red-500" />,
      title: "LAB TESTED",
      desc: "Rigorous 21+ compliance testing ensuring purity, consistency, and safety in every batch."
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-font text-5xl md:text-7xl text-white mb-4 uppercase">
            THE <span className="text-orange-600">SPECS</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            URGE is designed for those who demand more. Higher potency, better flavor, and unbeatable value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all hover:-translate-y-2 group">
              <div className="mb-6 bg-black w-16 h-16 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-white/20">
                {feature.icon}
              </div>
              <h3 className="brand-font text-2xl text-white mb-3 uppercase italic">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;