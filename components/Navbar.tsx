import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="brand-font text-4xl text-white italic tracking-tighter">
              URGE
              <span className="text-orange-600">.</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#product" className="hover:text-orange-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Flavors</a>
              <a href="#features" className="hover:text-orange-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest">Specs</a>
              <a href="#newsletter" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105">
                Pre-Order
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FLAVORS</a>
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">SPECS</a>
            <a href="#newsletter" className="text-orange-500 block px-3 py-2 rounded-md text-base font-bold">PRE-ORDER</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;