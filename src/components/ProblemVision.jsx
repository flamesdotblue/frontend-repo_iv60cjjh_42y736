import React from 'react';
import { motion } from 'framer-motion';

const ProblemVision = () => {
  return (
    <section aria-label="Problem and Vision" className="relative w-full bg-[#0a1220] text-white">
      {/* Problem Section */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_60%)]" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold md:text-4xl">The Problem</h2>
            <p className="mt-3 text-blue-100 md:text-lg">
              Education today is one-size-fits-all. Students learn differently — but lessons don’t adapt. Many feel lost in crowded classrooms, while content stays static.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 shadow-xl">
              <div className="absolute inset-0 opacity-70" aria-hidden>
                {/* Faded classroom vibe with layered gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(148,163,184,0.18),transparent_40%)]" />
              </div>
              <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100 backdrop-blur">Confused classroom</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-tr from-teal-500/10 via-cyan-400/10 to-blue-500/10 shadow-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.25),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_55%)]" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs text-teal-100 backdrop-blur">Bright, adaptive future</div>
            </div>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-cyan-300/40 pl-6"
          >
            <p className="text-2xl font-semibold md:text-3xl">
              “Our goal — bridge the gap between teachers and students using intelligent, empathetic AI.”
            </p>
            <footer className="mt-3 text-blue-200">The AI Mentor Team</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default ProblemVision;
