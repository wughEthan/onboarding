import React, { useState } from 'react';
import { ArrowRight, Code, Gamepad2 } from 'lucide-react';
import { Logo } from './Logo';

export function InitialSetup({ onComplete }: { onComplete: (name: string, track: 'software' | 'game') => void }) {
  const [name, setName] = useState('');
  const [track, setTrack] = useState<'software' | 'game' | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && track) {
      onComplete(name.trim(), track);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 text-center flex flex-col items-center">
          <Logo className="w-12 h-12 text-white mb-4" />
          <h1 className="text-2xl font-bold text-white">Welcome to LocSolutions</h1>
          <p className="text-slate-400 text-sm mt-2">Let&apos;s get your vendor profile set up.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Primary Specialization Track</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTrack('software')}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                  track === 'software' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <Code className="w-6 h-6" />
                <span className="text-sm font-medium">Software & IT</span>
              </button>
              <button
                type="button"
                onClick={() => setTrack('game')}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                  track === 'game' 
                    ? 'border-purple-600 bg-purple-50 text-purple-700' 
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <Gamepad2 className="w-6 h-6" />
                <span className="text-sm font-medium">Game Localization</span>
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={!name.trim() || !track}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Start Onboarding <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
