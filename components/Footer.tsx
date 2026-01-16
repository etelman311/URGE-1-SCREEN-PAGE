import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <span className="brand-font text-5xl text-white italic tracking-tighter">
              URGE
              <span className="text-orange-600">.</span>
            </span>
            <p className="text-zinc-500 mt-4 max-w-md">
              Engineered for intensity. The new standard in Mitragynine supplements. 
              Responsibly sourced, rigorously tested.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">All Flavors</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Lab Results</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} URGE Supplements. All rights reserved. Must be 21+ to purchase.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-zinc-900 rounded-lg text-zinc-500 text-xs text-center leading-relaxed">
          <strong>Disclaimer:</strong> This product has not been evaluated by the Food and Drug Administration. 
          This product is not intended to diagnose, treat, cure, or prevent any disease. 
          Keep out of reach of children. Consult your physician before use.
        </div>
      </div>
    </footer>
  );
};

export default Footer;