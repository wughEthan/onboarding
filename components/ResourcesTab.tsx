'use client';

import React, { useState } from 'react';
import { FileSignature, FileText, Play, Users, LifeBuoy, Download, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { ThumbnailSoftware } from './Thumbnails';

export function ResourcesTab({ 
  vendorType,
  phase1Progress,
  phase2Progress
}: { 
  vendorType: 'software' | 'game',
  phase1Progress: Record<string, boolean>,
  phase2Progress: Record<string, boolean>
}) {
  const [showHelpdeskModal, setShowHelpdeskModal] = useState(false);

  const stakeholders = vendorType === 'software' ? [
    { name: 'Anna Smith', role: 'Project Manager', email: 'anna.s@locsolutions.com', img: 'https://picsum.photos/seed/anna/150/150' },
    { name: 'Bob Wang', role: 'Vendor Manager', email: 'bob.w@locsolutions.com', img: 'https://picsum.photos/seed/bob/150/150' },
    { name: 'Cindy Miller', role: 'Quality Manager', email: 'cindy.m@locsolutions.com', img: 'https://picsum.photos/seed/cindy/150/150' },
  ] : [
    { name: 'Evelyn Waugh', role: 'Project Manager', email: 'evelyn.w@locsolutions.com', img: 'https://picsum.photos/seed/evelyn/150/150' },
    { name: 'Bob Wang', role: 'Vendor Manager', email: 'bob.w@locsolutions.com', img: 'https://picsum.photos/seed/bob/150/150' },
    { name: 'Satomi Takahashi', role: 'Quality Manager', email: 'satomi.t@locsolutions.com', img: 'https://picsum.photos/seed/satomi/150/150' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Resources & Documents</h1>
        <p className="text-slate-500 mt-1">Quick access to your signed agreements, training materials, and support contacts.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Signed Information */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <FileSignature className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Signed Information</h3>
          </div>
          <div className="space-y-4 flex-1">
            {phase1Progress.legal && (
              <>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Mutual Non-Disclosure Agreement</p>
                      <p className="text-xs text-slate-500">Signed during onboarding</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Tax Form (W-9 / W-8BEN)</p>
                      <p className="text-xs text-slate-500">Verified</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
              </>
            )}
            {phase1Progress.security && (
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Vendor Code of Conduct</p>
                    <p className="text-xs text-slate-500">Acknowledged</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" /> View
                </button>
              </div>
            )}
            {!phase1Progress.legal && !phase1Progress.security && (
              <div className="p-4 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-slate-100">
                Documents will appear here once you complete the related onboarding steps.
              </div>
            )}
          </div>
        </div>

        {/* Videos & Documents */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Videos & Documents</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div className="grid grid-cols-2 gap-4">
              {phase1Progress.culture && (
                <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                  <Image src="https://picsum.photos/seed/diverse-office-team/400/225" alt="Culture Induction" fill className="object-cover opacity-80 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate drop-shadow-md">Culture Induction</p>
                  </div>
                </div>
              )}
              {vendorType === 'software' && phase2Progress.intro && (
                <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                  <ThumbnailSoftware />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate drop-shadow-md">Software Product Intro</p>
                  </div>
                </div>
              )}
              {vendorType === 'game' && phase2Progress.intro && (
                <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-900 group cursor-pointer border border-slate-200">
                  <Image src="https://picsum.photos/seed/fantasy-game-art/400/225" alt="Game Product Intro" fill className="object-cover opacity-80 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate drop-shadow-md">Game Product Intro</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-2 space-y-2">
              {phase1Progress.culture && (
                <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors text-left group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Freelancer Wellbeing Guide</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </button>
              )}
              {vendorType === 'software' && phase2Progress.tone && (
                <>
                  <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors text-left group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Software Style Guide</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors text-left group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Help Center Style Guide</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </button>
                </>
              )}
              {vendorType === 'game' && phase2Progress.tone && (
                <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors text-left group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Game Style Guide</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </button>
              )}
              {phase2Progress.tools && (
                <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors text-left group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">Jira Bug Submission Guide</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </button>
              )}
              {!phase1Progress.culture && !phase2Progress.intro && !phase2Progress.tone && !phase2Progress.tools && (
                <div className="p-4 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-slate-100">
                  Videos and guides will appear here once you complete the related onboarding steps.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact List */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Contact List</h3>
            </div>
            {phase2Progress.stakeholders && (
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                <Download className="w-4 h-4" /> Save PDF
              </button>
            )}
          </div>
          <div className="space-y-4 flex-1">
            {phase2Progress.stakeholders ? (
              stakeholders.map((person, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <Image src={person.img} alt={person.name} width={48} height={48} className="rounded-full border border-slate-200" referrerPolicy="no-referrer" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{person.name}</h4>
                    <p className="text-xs text-blue-600 font-medium truncate">{person.role}</p>
                    <p className="text-xs text-slate-500 truncate">{person.email}</p>
                  </div>
                  <a href={`mailto:${person.email}`} className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 hover:bg-slate-50">
                    Email
                  </a>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-slate-100">
                Contact list will be unlocked after you complete the Stakeholder Brief step.
              </div>
            )}
          </div>
        </div>

        {/* Support & Helpdesk */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
              <LifeBuoy className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Support & Helpdesk</h3>
          </div>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-slate-600 mb-4">
              Need assistance with your account, tools, or payments? Our support teams are here to help.
            </p>
            
            <button 
              onClick={() => setShowHelpdeskModal(true)}
              className="w-full flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Submit IT Ticket</h4>
                <p className="text-xs text-slate-500">For TMS, VPN, or portal issues.</p>
              </div>
            </button>

            <a 
              href="mailto:finance@locsolutions.com"
              className="w-full flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group bg-slate-50 hover:bg-white"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Finance Support</h4>
                <p className="text-xs text-slate-500">For invoice or payment queries.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

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
