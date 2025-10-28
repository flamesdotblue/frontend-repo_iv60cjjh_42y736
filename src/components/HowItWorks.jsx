import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Gamepad2, Video, Mic, BookOpen } from 'lucide-react';

const steps = [
  {
    title: 'Learner profiling',
    desc: 'AI asks about interests, mindset, and goals to tailor learning.',
    icon: Users,
  },
  {
    title: 'Personalized lessons',
    desc: 'Generates visual, audio, and playable content just for you.',
    icon: Sparkles,
  },
  {
    title: 'Real-world challenges',
    desc: 'Practice with career-aligned scenarios and problem sets.',
    icon: Gamepad2,
  },
  {
    title: 'Feedback & mapping',
    desc: 'Measure progress and map strengths to future careers.',
    icon: BookOpen,
  },
];

const HowItWorks = () => {
  return (
    <section id="timeline" aria-label="How AI Mentor Works" className="relative w-full bg-[#07101a] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How AI Mentor Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            A guided journey from understanding you to delivering outcomes that matter.
          </p>
        </div>

        {/* Interactive timeline */}
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-5 shadow-xl"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/20" />
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-400/20 to-blue-500/20 text-cyan-300 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{i + 1}. {s.title}</h3>
                    <p className="mt-1 text-sm text-blue-100">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-blue-200/80">
                  {i === 1 && (
                    <>
                      <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 inline-flex items-center gap-1"><Video className="h-3.5 w-3.5" /> Videos</span>
                      <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 inline-flex items-center gap-1"><Mic className="h-3.5 w-3.5" /> Podcasts</span>
                      <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 inline-flex items-center gap-1"><Gamepad2 className="h-3.5 w-3.5" /> Games</span>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
