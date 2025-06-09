import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Benefits from './components/Benefits'
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <TargetAudience />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;