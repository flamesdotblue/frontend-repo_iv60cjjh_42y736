import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-100, Math.min(100, posX / 4)));
    y.set(Math.max(-100, Math.min(100, posY / 4)));
  };

  return (
    <section
      aria-label="AI Mentor Hero"
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b1f2e] via-[#0a1a2a] to-[#0a1220] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ perspective: 1200 }}
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-20 pb-12 md:pt-28"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative h-[420px] w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
        >
          <Spline
            scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient overlay for readability without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1220] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 mt-8 text-center"
        >
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            AI Mentor — <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Personalized Learning, Visualized.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 md:text-lg">
            An AI that understands you, teaches your way, and guides your goals — through videos, podcasts, interactive games, and real-world challenges.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#timeline"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 font-semibold text-[#05131f] shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Try Demo
            </a>
            <a
              href="https://opensource.google/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <Github className="h-5 w-5" />
              Join Open Source
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
