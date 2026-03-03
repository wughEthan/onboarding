'use client';

import React, { useState } from 'react';
import { User, Download, Play, BookOpen, Wrench, CalendarCheck, CheckCircle2, FileText, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { ThumbnailTMS } from './Thumbnails';

export function Phase2TrackB({ step, onComplete, progress }: { step: number, onComplete: (key: string) => void, progress: any }) {
  const [showGameGuide, setShowGameGuide] = useState(false);
  const [showJiraGuide, setShowJiraGuide] = useState(false);
  
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const stakeholders = [
    { name: 'Evelyn Waugh', role: 'Project Manager', email: 'evelyn.w@locsolutions.com', img: 'https://picsum.photos/seed/evelyn/150/150' },
    { name: 'Bob Wang', role: 'Vendor Manager', email: 'bob.w@locsolutions.com', img: 'https://picsum.photos/seed/bob/150/150' },
    { name: 'Satomi Takahashi', role: 'Quality Manager', email: 'satomi.t@locsolutions.com', img: 'https://picsum.photos/seed/satomi/150/150' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingDate && bookingTime) {
      setBookingConfirmed(true);
      onComplete('qa');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Track B: Game Localization</h1>
        <p className="text-slate-500 mt-1">Product-specific onboarding for the Game team.</p>
      </div>

      {/* Step 1: Stakeholder Brief */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start justify-between mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Stakeholder Brief</h3>
                <p className="text-sm text-slate-500 mt-1">Meet your core team for Game Localization projects.</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Simulated Contact List Content');
                link.download = 'LocSolutions_TrackB_Contacts.pdf';
                link.click();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Download className="w-4 h-4" /> Download Contact List
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stakeholders.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 border border-slate-100 rounded-xl bg-slate-50">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-white shadow-sm">
                  <Image src={person.img} alt={person.name} width={80} height={80} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-slate-900">{person.name}</h4>
                <p className="text-xs font-medium text-blue-600 mb-1">{person.role}</p>
                <p className="text-xs text-slate-500">{person.email}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={() => onComplete('stakeholders')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Acknowledge & Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Tone Guides (Step 2 is skipped for Track B) */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Tone Guides</h3>
              <p className="text-sm text-slate-500 mt-1">Crucial style guidelines for game localization.</p>
            </div>
          </div>

          <div className="mb-8">
            <button 
              onClick={() => setShowGameGuide(true)}
              className="w-full max-w-md flex items-center gap-4 p-5 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  Game Style Guide <ExternalLink className="w-3 h-3 text-slate-400" />
                </h4>
                <p className="text-xs text-slate-500">Character voice, terminology, subtitles.</p>
              </div>
            </button>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={() => onComplete('tone')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              I have read the guide
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Tool Tips */}
      {step === 4 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Tool Tips & Bug Reporting</h3>
              <p className="text-sm text-slate-500 mt-1">Learn how to use our tools and report issues effectively.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900 text-sm border-b border-slate-100 pb-2">CAT/TMS Setup</h4>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                <ThumbnailTMS />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">Skippable video tutorial.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-slate-900 text-sm border-b border-slate-100 pb-2">Bug Reporting</h4>
              <button 
                onClick={() => setShowJiraGuide(true)}
                className="w-full flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    Jira Bug Submission Guide <ExternalLink className="w-3 h-3 text-slate-400" />
                  </h4>
                  <p className="text-xs text-slate-500">How to report localization bugs.</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={() => onComplete('tools')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue to Final QA
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Final QA */}
      {step === 5 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <CalendarCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Final QA Meeting</h3>
              <p className="text-sm text-slate-500 mt-1">Book your 1:1 onboarding review with Evelyn Waugh (PM).</p>
            </div>
          </div>

          {!bookingConfirmed ? (
            <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <Image src={stakeholders[0].img} alt="Evelyn Waugh" width={60} height={60} className="rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">Evelyn Waugh</h4>
                  <p className="text-sm text-slate-500">Project Manager</p>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select Date</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select Time</label>
                  <select 
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Choose a time...</option>
                    <option value="09:00">09:00 AM PST</option>
                    <option value="10:30">10:30 AM PST</option>
                    <option value="13:00">01:00 PM PST</option>
                    <option value="15:00">03:00 PM PST</option>
                  </select>
                </div>
                <button type="submit" className="w-full mt-4 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Confirm Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Meeting Confirmed!</h3>
              <p className="text-slate-600 mb-6">
                Your 1:1 with Evelyn Waugh is scheduled for <br/>
                <strong>{bookingDate} at {bookingTime} PST</strong>.
              </p>
              <button
                onClick={() => onComplete('qa')}
                className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                Complete Onboarding
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modals for Guides */}
      {showGameGuide && (
        <GuideModal title="Game Style Guide" onClose={() => setShowGameGuide(false)}>
          <h2 className="text-xl font-bold mb-4">Game Style Guide</h2>
          <div className="space-y-4 text-slate-700">
            <p><strong>1. Character Voice Consistency:</strong> Maintain the established tone for each character. A rugged warrior should sound different from a scholarly mage. Refer to the Character Bios document.</p>
            <p><strong>2. Terminology Management:</strong> Always use the approved glossary for fictional worlds, items, and locations. Do not translate proper nouns unless specified in the glossary.</p>
            <p><strong>3. Subtitle Formatting:</strong> Ensure subtitles do not exceed 40 characters per line, and a maximum of 2 lines per screen. Use standard punctuation for pauses and interruptions.</p>
          </div>
        </GuideModal>
      )}

      {showJiraGuide && (
        <GuideModal title="Jira Bug Submission Guide" onClose={() => setShowJiraGuide(false)}>
          <h2 className="text-xl font-bold mb-4">Jira Bug Submission Guide</h2>
          <div className="space-y-4 text-slate-700">
            <p>When reporting a linguistic or functional bug during testing, please follow this format:</p>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm">
              <strong>Title:</strong> [Language Code] - [Component] - Brief Description<br/>
              <em>Example: [FR] - Login Screen - Truncated text on submit button</em><br/><br/>
              <strong>Steps to Reproduce:</strong><br/>
              1. Navigate to URL<br/>
              2. Change language to French<br/>
              3. Observe the login button<br/><br/>
              <strong>Expected Result:</strong> The text &quot;Se connecter&quot; fits within the button.<br/>
              <strong>Actual Result:</strong> The text is truncated to &quot;Se conne...&quot;<br/>
            </div>
            <p><strong>Screenshot Rules:</strong> Always attach a full-screen screenshot with the issue highlighted in red.</p>
          </div>
        </GuideModal>
      )}
    </div>
  );
}

function GuideModal({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <FileText className="w-5 h-5" />
            {title}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto flex-1">
          {children}
        </div>
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end rounded-b-xl">
          <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
