'use client';

import React, { useState } from 'react';
import { Play, FileText, LifeBuoy, Mail, CheckCircle2, X } from 'lucide-react';
import Image from 'next/image';

export function Phase1Culture({ onComplete, isCompleted }: { onComplete: () => void, isCompleted: boolean }) {
  const [videoWatched, setVideoWatched] = useState(isCompleted);
  const [showWellbeingModal, setShowWellbeingModal] = useState(false);
  const [wellbeingRead, setWellbeingRead] = useState(isCompleted);
  const [showHelpdeskModal, setShowHelpdeskModal] = useState(false);

  const handleVideoClick = () => {
    setVideoWatched(true);
  };

  const handleWellbeingClose = () => {
    setShowWellbeingModal(false);
    setWellbeingRead(true);
  };

  const allComplete = videoWatched && wellbeingRead;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Culture & Wellbeing</h1>
        <p className="text-slate-500 mt-1">Welcome to the LocSolutions family. Learn about our culture and support systems.</p>
      </div>

      <div className="grid gap-6">
        {/* Culture Induction Video */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Culture Induction</h3>
                <p className="text-sm text-slate-500 mt-1">A welcome message from our global team.</p>
              </div>
            </div>
            {videoWatched && (
              <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> Watched
              </span>
            )}
          </div>

          <div className={`ml-14 relative rounded-xl overflow-hidden aspect-video bg-slate-900 group ${isCompleted ? '' : 'cursor-pointer'}`} onClick={isCompleted ? undefined : handleVideoClick}>
            <Image 
              src="https://picsum.photos/seed/diverse-office-team/800/450" 
              alt="Diverse team smiling in office" 
              fill 
              className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">LS</div>
              <span className="text-white font-medium text-sm drop-shadow-md">LocSolutions Welcome (2:15)</span>
            </div>
          </div>
        </div>

        {/* Wellbeing Guide */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Freelancer Wellbeing Guide</h3>
                <p className="text-sm text-slate-500 mt-1">Best practices for remote work ergonomics and time management.</p>
              </div>
            </div>
            {wellbeingRead ? (
              <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> Read
              </span>
            ) : (
              <button 
                onClick={() => setShowWellbeingModal(true)}
                disabled={isCompleted}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Open Guide
              </button>
            )}
          </div>
        </div>

        {/* Support Links */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <LifeBuoy className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Support & Helpdesk</h3>
              <p className="text-sm text-slate-500 mt-1">Resources available if you need assistance.</p>
            </div>
          </div>

          <div className="ml-14 grid sm:grid-cols-2 gap-4">
            <button 
              onClick={() => setShowHelpdeskModal(true)}
              className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition-all text-left"
            >
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">Open IT Helpdesk Ticket</div>
                <div className="text-xs text-slate-500">For TMS or VPN issues</div>
              </div>
            </button>

            <a 
              href="mailto:finance@locsolutions.com"
              className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition-all text-left"
            >
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">Email Finance Support</div>
                <div className="text-xs text-slate-500">For invoice or payment queries</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={onComplete}
          disabled={!allComplete || isCompleted}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            allComplete && !isCompleted
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isCompleted ? 'Completed' : 'Complete Phase 1'}
        </button>
      </div>

      {/* Wellbeing Guide Modal */}
      {showWellbeingModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <FileText className="w-5 h-5" />
                Freelancer Wellbeing: LocSolutions Best Practices
              </div>
              <button onClick={handleWellbeingClose} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1 bg-slate-100">
              <div className="bg-white p-10 shadow-sm border border-slate-200 mx-auto max-w-2xl min-h-[800px] font-serif">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center border-b pb-4">Freelancer Wellbeing Guide</h1>
                
                <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Screen Ergonomics & Eye Health</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  As a linguistic professional, your eyes are your most valuable asset. Prolonged screen time can lead to digital eye strain. We strongly recommend adopting the <strong>20-20-20 rule</strong>:
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 italic text-slate-700">
                  &quot;Every 20 minutes, look at something 20 feet away for at least 20 seconds.&quot;
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Additionally, ensure your monitor is positioned at eye level, approximately an arm&apos;s length away, to prevent neck and shoulder strain.
                </p>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">2. Time Management & Boundaries</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Working remotely offers flexibility, but it can blur the lines between professional and personal life. To maintain a healthy balance:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
                  <li>Establish clear working hours and communicate them to your Project Managers.</li>
                  <li>Create a dedicated workspace separate from your relaxation areas.</li>
                  <li>Take scheduled breaks away from your desk to stretch and hydrate.</li>
                </ul>

                <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
                  <p>LocSolutions - Global Vendor Management</p>
                  <p>Page 1 of 2</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-200 bg-white flex justify-end rounded-b-xl">
              <button onClick={handleWellbeingClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Mark as Read & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IT Helpdesk Modal */}
      {showHelpdeskModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Open IT Support Ticket</h3>
              <button onClick={() => setShowHelpdeskModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setShowHelpdeskModal(false); }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Issue Category</label>
                <select className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option>TMS Login Issue</option>
                  <option>VPN Connection</option>
                  <option>License Activation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows={4} className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Describe your issue..."></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowHelpdeskModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Submit Ticket</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
