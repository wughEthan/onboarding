'use client';

import React, { useState } from 'react';
import { User, Download, Play, BookOpen, Wrench, CalendarCheck, CheckCircle2, FileText, X, Video, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { ThumbnailSoftware, ThumbnailHelpCenter, ThumbnailTMS } from './Thumbnails';

export function Phase2TrackA({ step, onComplete, progress }: { step: number, onComplete: (key: string) => void, progress: any }) {
  const [showSoftwareGuide, setShowSoftwareGuide] = useState(false);
  const [showHelpCenterGuide, setShowHelpCenterGuide] = useState(false);
  const [showJiraGuide, setShowJiraGuide] = useState(false);
  
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const stakeholders = [
    { name: 'Anna Smith', role: 'Project Manager', email: 'anna.s@locsolutions.com', img: 'https://picsum.photos/seed/anna/150/150' },
    { name: 'Bob Wang', role: 'Vendor Manager', email: 'bob.w@locsolutions.com', img: 'https://picsum.photos/seed/bob/150/150' },
    { name: 'Cindy Miller', role: 'Quality Manager', email: 'cindy.m@locsolutions.com', img: 'https://picsum.photos/seed/cindy/150/150' },
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
        <h1 className="text-2xl font-bold text-slate-900">Track A: Software & Help Center</h1>
        <p className="text-slate-500 mt-1">Product-specific onboarding for the Software team.</p>
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
                <p className="text-sm text-slate-500 mt-1">Meet your core team for Software & Help Center projects.</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Simulated Contact List Content');
                link.download = 'LocSolutions_TrackA_Contacts.pdf';
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

      {/* Step 2: Product Intro */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Product Introduction</h3>
              <p className="text-sm text-slate-500 mt-1">Familiarize yourself with the software suite and help center.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                <ThumbnailSoftware />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">LocSolutions Software Suite Intro</h4>
                <p className="text-xs text-slate-500">Overview of the core application UI.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                <ThumbnailHelpCenter />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">Help Center Navigation</h4>
                <p className="text-xs text-slate-500">How to find and use support articles.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <span className="text-sm text-slate-500 italic">These videos are skippable for experienced vendors.</span>
            <button
              onClick={() => onComplete('intro')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Mark as Watched & Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Tone Guides */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Tone Guides</h3>
              <p className="text-sm text-slate-500 mt-1">Crucial style guidelines for software and help center content.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <button 
              onClick={() => setShowSoftwareGuide(true)}
              className="flex items-center gap-4 p-5 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  Software Style Guide <ExternalLink className="w-3 h-3 text-slate-400" />
                </h4>
                <p className="text-xs text-slate-500">UI strings, variables, capitalization.</p>
              </div>
            </button>

            <button 
              onClick={() => setShowHelpCenterGuide(true)}
              className="flex items-center gap-4 p-5 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  Help Center Style Guide <ExternalLink className="w-3 h-3 text-slate-400" />
                </h4>
                <p className="text-xs text-slate-500">Brand voice, active vs passive voice.</p>
              </div>
            </button>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={() => onComplete('tone')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              I have read the guides
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
                  <p className="text-xs text-slate-500">How to report software text bugs.</p>
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
              <p className="text-sm text-slate-500 mt-1">Book your 1:1 onboarding review with Anna Smith (PM).</p>
            </div>
          </div>

          {!bookingConfirmed ? (
            <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <Image src={stakeholders[0].img} alt="Anna Smith" width={60} height={60} className="rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">Anna Smith</h4>
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
                Your 1:1 with Anna Smith is scheduled for <br/>
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
      {showSoftwareGuide && (
        <GuideModal title="Software Style Guide" onClose={() => setShowSoftwareGuide(false)}>
          <h2 className="text-xl font-bold mb-4">Software Style Guide</h2>
          <div className="space-y-4 text-slate-700">
            <p><strong>1. Consistency in UI Strings:</strong> Ensure that all buttons, menus, and labels are translated consistently across the entire application. Use the provided glossary.</p>
            <p><strong>2. Handling Variables:</strong> Do not translate or alter variables such as <code>%s</code>, <code>{'{user_name}'}</code>, or <code>$1</code>. Ensure they are placed correctly according to target language syntax.</p>
            <p><strong>3. Capitalization Rules:</strong> Follow Title Case for menus and buttons in English. For other languages, follow standard local conventions (e.g., Sentence case for French buttons).</p>
          </div>
        </GuideModal>
      )}

      {showHelpCenterGuide && (
        <GuideModal title="Help Center Style Guide" onClose={() => setShowHelpCenterGuide(false)}>
          <h2 className="text-xl font-bold mb-4">Help Center Style Guide</h2>
          <div className="space-y-4 text-slate-700">
            <p><strong>1. Brand Voice:</strong> The tone should be user-friendly, clear, and encouraging. Avoid overly technical jargon when a simpler term exists.</p>
            <p><strong>2. Active vs. Passive Voice:</strong> Always prefer active voice. (e.g., &quot;Click the button to save&quot; instead of &quot;The button should be clicked to save&quot;).</p>
            <p><strong>3. Formatting Rules:</strong> Use bolding for UI elements the user needs to interact with (e.g., Click <strong>Save Changes</strong>).</p>
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
