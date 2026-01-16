import React from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      <Hero />
    </div>
  );
}

export default App;