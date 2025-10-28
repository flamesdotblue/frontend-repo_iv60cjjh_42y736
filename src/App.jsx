import React from 'react';
import Hero3D from './components/Hero3D';
import ProblemVision from './components/ProblemVision';
import HowItWorks from './components/HowItWorks';
import ImpactFooter from './components/ImpactFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1220] font-inter text-white">
      {/* SEO-friendly headings are inside each section */}
      <Hero3D />
      <ProblemVision />
      <HowItWorks />
      <ImpactFooter />
    </div>
  );
}

export default App;
