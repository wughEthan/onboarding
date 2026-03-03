'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Loader2, Send } from 'lucide-react';

export function Phase1Checkpoint({ progress, onProceed }: { progress: any, onProceed: () => void }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const allComplete = progress.legal && progress.it && progress.security && progress.culture;

  const handleProceed = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setShowNotification(true);
    }, 2000);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
    onProceed();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Phase 1 Checkpoint</h1>
        <p className="text-slate-500">Review your foundation setup before proceeding to product-specific onboarding.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="font-semibold text-slate-900">Foundation Requirements Checklist</h3>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              {progress.legal ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-slate-300" />}
              <span className="font-medium text-slate-700">Legal & Profile Setup</span>
            </div>
            <span className={`text-sm font-medium ${progress.legal ? 'text-emerald-600' : 'text-slate-400'}`}>
              {progress.legal ? 'Completed' : 'Pending'}
            </span>
          </div>
          
          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              {progress.it ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-slate-300" />}
              <span className="font-medium text-slate-700">IT Infrastructure & Access</span>
            </div>
            <span className={`text-sm font-medium ${progress.it ? 'text-emerald-600' : 'text-slate-400'}`}>
              {progress.it ? 'Completed' : 'Pending'}
            </span>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              {progress.security ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-slate-300" />}
              <span className="font-medium text-slate-700">Security & Compliance</span>
            </div>
            <span className={`text-sm font-medium ${progress.security ? 'text-emerald-600' : 'text-slate-400'}`}>
              {progress.security ? 'Completed' : 'Pending'}
            </span>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              {progress.culture ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-slate-300" />}
              <span className="font-medium text-slate-700">Culture & Wellbeing</span>
            </div>
            <span className={`text-sm font-medium ${progress.culture ? 'text-emerald-600' : 'text-slate-400'}`}>
              {progress.culture ? 'Completed' : 'Pending'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <div className="relative group">
          <button
            onClick={handleProceed}
            disabled={!allComplete || isUpdating}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all ${
              allComplete && !isUpdating
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isUpdating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                System Updating Status...
              </>
            ) : (
              <>
                Proceed to Phase 2
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          
          {!allComplete && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Please complete all Phase 1 requirements to proceed.
            </div>
          )}
        </div>
      </div>

      {/* Notification Modal */}
      {showNotification && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm text-center overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-blue-600 p-6 flex justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Send className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Phase 1 Cleared!</h3>
              <p className="text-slate-600 text-sm">
                A notification has been sent to <strong>Eliane (Phase 2 Owner)</strong>. Your product-specific onboarding track is now unlocked.
              </p>
              <button 
                onClick={handleNotificationClose}
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start Phase 2
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
