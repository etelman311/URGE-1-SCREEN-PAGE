import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would connect to an API
      setTimeout(() => {
        setEmail('');
        // setSubmitted(false); // Keep success message
      }, 2000);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-orange-600 relative overflow-hidden skew-cut">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="brand-font text-6xl md:text-8xl text-black uppercase mb-6 leading-[0.9]">
          DON'T MISS<br/>THE DROP
        </h2>
        <p className="text-black/80 font-bold text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Be the first to know when pre-orders open. Limited quantities available for the first batch.
        </p>

        {submitted ? (
          <div className="bg-black text-white p-8 rounded-2xl inline-flex items-center gap-4 animate-fade-in">
            <CheckCircle className="text-green-500" size={32} />
            <div className="text-left">
              <h3 className="brand-font text-2xl uppercase">You're on the list</h3>
              <p className="text-zinc-400">Keep an eye on your inbox.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-black border-2 border-black text-white px-6 py-4 rounded-xl placeholder-zinc-500 font-bold focus:outline-none focus:ring-4 focus:ring-white/30 uppercase tracking-wider"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Notify Me <Send size={18} />
            </button>
          </form>
        )}
        
        <p className="mt-8 text-black/50 text-xs font-bold uppercase tracking-widest">
          No Spam. Just Urge.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;