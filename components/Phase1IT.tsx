'use client';

import React, { useState } from 'react';
import { KeyRound, Download, ShieldCheck, Laptop, CheckCircle2, Loader2 } from 'lucide-react';

export function Phase1IT({ onComplete, isCompleted }: { onComplete: () => void, isCompleted: boolean }) {
  const [ssoState, setSsoState] = useState<'idle' | 'loading' | 'success'>(isCompleted ? 'success' : 'idle');
  const [password, setPassword] = useState('');
  
  const [kitDownloaded, setKitDownloaded] = useState(isCompleted);
  
  const [tradosActive, setTradosActive] = useState(isCompleted);
  const [phraseActive, setPhraseActive] = useState(isCompleted);

  const handleSsoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length >= 8) {
      setSsoState('loading');
      setTimeout(() => {
        setSsoState('success');
      }, 2000);
    }
  };

  const handleDownload = () => {
    setKitDownloaded(true);
    // Simulate download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Simulated IT Kit Content');
    link.download = 'LocSolutions_IT_Setup_Kit.zip';
    link.click();
  };

  const allComplete = ssoState === 'success' && kitDownloaded && tradosActive && phraseActive;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">IT Infrastructure & Access</h1>
        <p className="text-slate-500 mt-1">Set up your unified accounts and software licenses.</p>
      </div>

      <div className="grid gap-6">
        {/* SSO Account */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <KeyRound className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Unified SSO Account</h3>
              <p className="text-sm text-slate-500 mt-1">Create your password for LocSolutions systems (TMS, VPN, Portal).</p>
            </div>
          </div>

          <div className="ml-14">
            {ssoState === 'idle' && (
              <form onSubmit={handleSsoSubmit} className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 8 characters"
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    minLength={8}
                    disabled={isCompleted}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isCompleted}
                  className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Provision Account
                </button>
              </form>
            )}

            {ssoState === 'loading' && (
              <div className="flex items-center gap-3 text-blue-600 bg-blue-50 p-4 rounded-lg max-w-md">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="font-medium text-sm">Provisioning your unified LocSolutions SSO account...</span>
              </div>
            )}

            {ssoState === 'success' && (
              <div className="flex items-start gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-lg max-w-md border border-emerald-100">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Success! Account Provisioned.</p>
                  <p className="text-xs text-emerald-600 mt-1">Use these credentials for all LocSolutions systems.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* IT Kit Dispatch */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">IT Setup Kit</h3>
                <p className="text-sm text-slate-500 mt-1">Download required VPN profiles and security certificates.</p>
              </div>
            </div>
            <button 
              onClick={handleDownload}
              disabled={isCompleted}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                kitDownloaded 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              } ${isCompleted ? 'cursor-default opacity-80' : ''}`}
            >
              {kitDownloaded ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              {kitDownloaded ? 'Downloaded' : 'Download .zip'}
            </button>
          </div>
        </div>

        {/* CAT/TMS Licensing */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">CAT/TMS Licensing</h3>
              <p className="text-sm text-slate-500 mt-1">Activate your provided software licenses.</p>
            </div>
          </div>

          <div className="ml-14 space-y-4 max-w-2xl">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">SDL Trados Studio 2024</h4>
                <p className="text-xs text-slate-500 mt-0.5">Freelance Edition</p>
              </div>
              {tradosActive ? (
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
                  </span>
                  <p className="text-xs font-mono text-slate-500">Key: TRD-8X92-K4M1-P9QZ</p>
                </div>
              ) : (
                <button 
                  onClick={() => setTradosActive(true)}
                  disabled={isCompleted}
                  className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Activate License
                </button>
              )}
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">Phrase TMS</h4>
                <p className="text-xs text-slate-500 mt-0.5">Linguist Access</p>
              </div>
              {phraseActive ? (
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
                  </span>
                  <p className="text-xs font-mono text-slate-500">Key: PHR-2B7V-N6X8-L3WC</p>
                </div>
              ) : (
                <button 
                  onClick={() => setPhraseActive(true)}
                  disabled={isCompleted}
                  className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Activate License
                </button>
              )}
            </div>
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
          {isCompleted ? 'Completed' : 'Proceed to Security'}
        </button>
      </div>
    </div>
  );
}
