import React, { useRef, useState } from 'react';
import Hero3D from './components/Hero3D';
import ProblemVision from './components/ProblemVision';
import HowItWorks from './components/HowItWorks';
import RealtimeOpenSource from './components/RealtimeOpenSource';
import ImpactFooter from './components/ImpactFooter';
import ChatBot from './components/ChatBot';

function App() {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const timelineRef = useRef(null);
  const impactRef = useRef(null);

  const [realtimePaused, setRealtimePaused] = useState(false);

  const navigate = (section) => {
    const map = {
      hero: heroRef,
      problem: problemRef,
      timeline: timelineRef,
      impact: impactRef,
    };
    const ref = map[section];
    const el = ref?.current || document.getElementById(section === 'timeline' ? 'timeline' : section === 'impact' ? 'open-source' : undefined);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1220] font-inter text-white">
      {/* Anchors for chatbot-controlled navigation */}
      <div ref={heroRef}></div>
      <Hero3D />
      <div ref={problemRef}></div>
      <ProblemVision />
      <div ref={timelineRef}></div>
      <HowItWorks />
      <RealtimeOpenSource id="realtime" paused={realtimePaused} onTogglePause={setRealtimePaused} />
      <div ref={impactRef}></div>
      <ImpactFooter />

      <ChatBot
        onNavigate={navigate}
        onToggleRealtime={(p) => setRealtimePaused(Boolean(p))}
        getRealtimePaused={() => realtimePaused}
      />
    </div>
  );
}

export default App;
