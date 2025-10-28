import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, Bot, Power, Link2, Wifi, Pause, Play, X } from 'lucide-react';

function normalize(text) {
  return text.toLowerCase().trim();
}

const suggestions = [
  'go to hero',
  'go to problem',
  'go to timeline',
  'open github',
  'stop live data',
  'start live data',
  'help'
];

const ChatBot = ({ onNavigate, onToggleRealtime, getRealtimePaused }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I can navigate the page and control live data. Try: "go to timeline", "open github", or "stop live data".' }
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  function reply(text) {
    setMessages((m) => [...m, { role: 'bot', text }]);
  }

  function handleCommand(raw) {
    const text = normalize(raw);

    // Navigation intents
    if (/(go to|open|take me to|navigate to) (hero|home)/.test(text)) {
      onNavigate?.('hero');
      return reply('Jumping to the hero.');
    }
    if (/(go to|open|take me to|navigate to) (problem|vision)/.test(text)) {
      onNavigate?.('problem');
      return reply('On it — showing the problem & vision.');
    }
    if (/(go to|open|take me to|navigate to) (timeline|how it works)/.test(text)) {
      onNavigate?.('timeline');
      return reply('Scrolling to the journey.');
    }
    if (/(go to|open|take me to|navigate to) (open source|impact|footer)/.test(text)) {
      onNavigate?.('impact');
      return reply('Let\'s check out the impact.');
    }

    // Live data controls
    if (/stop (live|realtime|real-time) data|pause (live|realtime)/.test(text)) {
      onToggleRealtime?.(true);
      return reply('Paused live GitHub updates. You can say "start live data" to resume.');
    }
    if (/start (live|realtime|real-time) data|resume (live|realtime)/.test(text)) {
      onToggleRealtime?.(false);
      return reply('Resumed live GitHub updates.');
    }

    // Open GitHub
    if (/open github|github explore|show github/.test(text)) {
      window.open('https://github.com/explore', '_blank', 'noopener');
      return reply('Opened GitHub Explore in a new tab.');
    }

    if (text === 'help' || /what can you do|commands/.test(text)) {
      return reply('I can navigate sections (hero, problem, timeline, impact), open GitHub Explore, and start/stop live data. Try: "go to timeline" or "stop live data".');
    }

    // Fallback
    const paused = getRealtimePaused?.();
    return reply(`I didn\'t catch that. Try: ${paused ? 'start live data' : 'stop live data'}, go to hero, go to timeline, or open github.`);
  }

  function onSubmit(e) {
    e.preventDefault();
    const val = input.trim();
    if (!val) return;
    setMessages((m) => [...m, { role: 'user', text: val }]);
    setInput('');
    setTimeout(() => handleCommand(val), 100);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[320px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b1726]/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-teal-400/30 to-blue-500/30 text-cyan-300 ring-1 ring-white/10">
                <Bot className="h-4 w-4" />
              </div>
              <div className="text-sm font-semibold">AI Mentor Assistant</div>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-md p-1 text-blue-200/80 hover:bg-white/10 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-72 space-y-2 overflow-y-auto px-4 py-3" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-[#05131f]' : 'bg-white/5 text-white'} max-w-[80%] rounded-2xl px-3 py-2 text-sm`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-3 py-2">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                aria-label="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Try: go to timeline"
                className="h-10 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder-blue-300/70 outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
              <button type="submit" className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 px-3 text-[#05131f] shadow shadow-cyan-500/20">
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-2 flex flex-wrap gap-1">
              {suggestions.map((s) => (
                <button key={s} onClick={() => { setInput(s); }} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-blue-200/90 hover:bg-white/10">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-3 font-semibold text-[#05131f] shadow-lg shadow-cyan-500/20">
          <MessageCircle className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          Chat with us
        </button>
      )}
    </div>
  );
};

export default ChatBot;
