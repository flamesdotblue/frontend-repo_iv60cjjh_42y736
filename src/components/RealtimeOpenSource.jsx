import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Star, GitFork, AlertCircle, Wifi, WifiOff } from 'lucide-react';

const repos = [
  { owner: 'google', name: 'filament', label: 'google/filament' },
  { owner: 'vercel', name: 'next.js', label: 'vercel/next.js' },
];

function useGitHubRepo(owner, name) {
  const [data, setData] = useState({ stars: 0, forks: 0, issues: 0, loading: true, error: null, connected: false });
  const backoffRef = useRef(60000); // normal refresh every 60s
  const timeoutRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function fetchRepo() {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${name}`);
        if (!res.ok) throw new Error('Network error');
        const json = await res.json();
        if (!mounted) return;
        setData({
          stars: json.stargazers_count || 0,
          forks: json.forks_count || 0,
          issues: json.open_issues_count || 0,
          loading: false,
          error: null,
          connected: true,
        });
        // Reset backoff to normal on success
        backoffRef.current = 60000;
      } catch (e) {
        if (!mounted) return;
        setData((d) => ({ ...d, loading: false, error: e.message, connected: false }));
        // Exponential-ish backoff: 5s -> 10s -> 30s -> 60s
        const next = backoffRef.current === 60000 ? 5000 : Math.min(backoffRef.current * 2, 60000);
        backoffRef.current = next;
      } finally {
        if (!mounted) return;
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(fetchRepo, backoffRef.current);
      }
    }

    // Initial fetch immediately
    fetchRepo();

    // If the device comes back online, try immediately
    const handleOnline = () => {
      clearTimeout(timeoutRef.current);
      backoffRef.current = 60000; // reset to normal
      fetchRepo();
    };
    window.addEventListener('online', handleOnline);

    return () => {
      mounted = false;
      window.removeEventListener('online', handleOnline);
      clearTimeout(timeoutRef.current);
    };
  }, [owner, name]);

  return data;
}

const Stat = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-2 text-sm text-blue-100">
    <Icon className="h-4 w-4 text-cyan-300" />
    <span className="font-semibold text-white">{value.toLocaleString()}</span>
    <span className="text-blue-300/80">{label}</span>
  </div>
);

const ConnectionPill = ({ connected, loading }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
    loading ? 'border-blue-300/30 text-blue-100 bg-blue-400/10' : connected ? 'border-emerald-300/30 text-emerald-100 bg-emerald-400/10' : 'border-amber-300/30 text-amber-100 bg-amber-400/10'
  }`}>
    {loading ? (
      <>
        <Wifi className="h-3.5 w-3.5" /> Connecting…
      </>
    ) : connected ? (
      <>
        <Wifi className="h-3.5 w-3.5" /> Live
      </>
    ) : (
      <>
        <WifiOff className="h-3.5 w-3.5" /> Reconnecting…
      </>
    )}
  </span>
);

const RealtimeOpenSource = () => {
  const a = useGitHubRepo(repos[0].owner, repos[0].name);
  const b = useGitHubRepo(repos[1].owner, repos[1].name);

  const allLoading = a.loading || b.loading;
  const anyConnected = a.connected || b.connected;

  return (
    <section aria-label="Realtime Open Source" className="relative w-full bg-[#07101a] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Real-time Open Source</h2>
            <p className="mt-2 max-w-2xl text-blue-100">Live GitHub stats and direct links to contribute. Connects automatically with smart retries — no setup needed.</p>
          </div>
          <div className="flex items-center gap-3">
            <ConnectionPill connected={anyConnected} loading={allLoading} />
            <a href="https://opensource.google/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              <Globe className="h-4 w-4" /> Explore Google Open Source
            </a>
            <a href="https://github.com/explore" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 text-sm font-semibold text-[#05131f] shadow-lg shadow-cyan-500/20">
              <Github className="h-4 w-4" /> Discover Projects
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[{ repo: repos[0], data: a }, { repo: repos[1], data: b }].map(({ repo, data }) => (
            <motion.div
              key={repo.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-blue-300/80">Repository</div>
                  <div className="text-lg font-semibold">{repo.label}</div>
                </div>
                <a href={`https://github.com/${repo.owner}/${repo.name}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                  <Github className="h-4 w-4" /> View
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                {data.loading ? (
                  <div className="text-blue-200/80">Loading live stats…</div>
                ) : data.error ? (
                  <div className="flex items-center gap-2 text-amber-300"><AlertCircle className="h-4 w-4" /> Issue fetching data — will retry automatically.</div>
                ) : (
                  <>
                    <Stat icon={Star} value={data.stars} label="stars" />
                    <Stat icon={GitFork} value={data.forks} label="forks" />
                    <Stat icon={AlertCircle} value={data.issues} label="open issues" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealtimeOpenSource;
