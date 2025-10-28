import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Video, Mic, Gamepad2, BookOpen, Globe, Github, ArrowRight, Users } from 'lucide-react';

const features = [
  { title: 'Auto-generates videos', icon: Video, desc: 'Visual lessons from concepts to storytelling.' },
  { title: 'Creates podcasts', icon: Mic, desc: 'Audio-first learning on the go.' },
  { title: 'Makes learning games', icon: Gamepad2, desc: 'Play to master tough topics.' },
  { title: 'Exam preparation', icon: BookOpen, desc: 'Adaptive tests with spaced repetition.' },
  { title: 'Career guidance', icon: Rocket, desc: 'Projects mapped to real roles.' },
  { title: 'Open source', icon: Globe, desc: 'Free, transparent, and community-built.' },
];

const ImpactFooter = () => {
  return (
    <section className="relative w-full bg-[#081421] text-white">
      {/* Features Grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Key Features</h2>
          <p className="mx-auto mt-3 max-w-3xl text-blue-100">Designed to adapt to you — not the other way around.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-5 shadow-xl"
              >
                <div className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                  <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/20" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-400/20 to-blue-500/20 text-cyan-300 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-blue-100">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Teacher–Student Bridge */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Bridging Students and Teachers</h2>
            <p className="mt-3 text-blue-100">A collaborative loop where insights flow both ways — students receive personalized guidance while teachers gain analytics to teach better.</p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-teal-500/10 via-cyan-400/10 to-blue-500/10">
            {/* Simplified 3D-ish bridge visualization */}
            <div className="absolute left-4 top-1/2 h-2 w-1/3 -translate-y-1/2 rounded-full bg-cyan-300/60 blur-sm" />
            <div className="absolute right-4 top-1/2 h-2 w-1/3 -translate-y-1/2 rounded-full bg-blue-400/60 blur-sm" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-white/5 shadow-inner" />
            <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur"><Users className="h-3.5 w-3.5" /> Student</div>
            <div className="absolute right-8 bottom-8 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur"><BookOpen className="h-3.5 w-3.5" /> Teacher</div>
          </div>
        </div>
      </div>

      {/* Open Source Impact */}
      <div id="open-source" className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Open Source Impact</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">Free for students. Open for developers. Powerful for teachers.</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-blue-100">Join a global community building the future of learning. Contribute code, content, and ideas.</p>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
                Contribute on GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative h-44 w-full">
              {/* Simple glowing world map effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.4),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.35),transparent_35%)]" />
              <div className="absolute inset-0 mix-blend-screen opacity-60" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Roadmap</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">Where were headed next — in clear milestones.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'AR/VR lessons', d: 'Immersive reality classrooms with safe practice zones.' },
            { t: 'Global languages', d: 'Learn anywhere in your native language.' },
            { t: 'Study groups', d: 'Collaborative quests and peer support.' },
            { t: 'AI avatars', d: 'Mentors that adapt style and tone to you.' },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl" />
              <h3 className="font-semibold">{item.t}</h3>
              <p className="mt-1 text-sm text-blue-100">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing CTA Banner */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-teal-500/20 via-cyan-400/20 to-blue-500/20 p-6 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_55%)]" />
          <h3 className="text-2xl font-bold">Join the AI Mentor movement — Learn. Create. Succeed.</h3>
          <p className="mt-1 text-blue-100">Be part of a future where learning is empathetic, adaptive, and free.</p>
          <a href="#timeline" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-5 py-2.5 font-semibold text-[#05131f] shadow-lg shadow-cyan-500/20">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07101a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-blue-200 md:flex-row">
          <div>AI Mentor — Not just a study tool, but a lifelong guide.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <span className="text-blue-300/70">
              © {new Date().getFullYear()} AI Mentor
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ImpactFooter;
