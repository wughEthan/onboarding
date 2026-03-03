'use client';

import React, { useState } from 'react';
import { ShieldAlert, BookOpen, MailWarning, HeartHandshake, CheckCircle2, AlertTriangle, Check } from 'lucide-react';

export function Phase1Security({ onComplete, isCompleted }: { onComplete: () => void, isCompleted: boolean }) {
  const [gdprChecked, setGdprChecked] = useState(isCompleted);
  
  const [phishingState, setPhishingState] = useState<'idle' | 'failed' | 'passed'>(isCompleted ? 'passed' : 'idle');
  
  const [deiChecked, setDeiChecked] = useState(isCompleted);
  const [deiAgreed, setDeiAgreed] = useState(isCompleted);

  const allComplete = gdprChecked && phishingState === 'passed' && deiAgreed;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Security, Compliance & Morality</h1>
        <p className="text-slate-500 mt-1">Complete these mandatory micro-learning modules.</p>
      </div>

      <div className="grid gap-6">
        {/* GDPR Basics */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Module 1: GDPR Basics</h3>
              <p className="text-sm text-slate-500 mt-1">Understanding data privacy as a LocSolutions vendor.</p>
            </div>
          </div>

          <div className="ml-14 space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <ul className="space-y-3 text-sm text-slate-700 list-disc pl-5">
                <li><strong>Data Minimization:</strong> Only process personal data necessary for the specific translation task.</li>
                <li><strong>Storage Limitation:</strong> Delete all source files containing personal data within 30 days of project delivery.</li>
                <li><strong>Breach Notification:</strong> Report any suspected data leaks to security@locsolutions.com within 24 hours.</li>
              </ul>
            </div>
            <label className={`flex items-center gap-3 ${isCompleted ? 'cursor-default' : 'cursor-pointer'}`}>
              <input 
                type="checkbox" 
                checked={gdprChecked}
                onChange={(e) => setGdprChecked(e.target.checked)}
                disabled={isCompleted}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 disabled:opacity-50"
              />
              <span className="text-sm font-medium text-slate-900">I understand and agree to adhere to these GDPR principles.</span>
            </label>
          </div>
        </div>

        {/* Anti-Phishing */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <MailWarning className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Module 2: Anti-Phishing Knowledge Check</h3>
              <p className="text-sm text-slate-500 mt-1">Identify the malicious email to pass this module.</p>
            </div>
          </div>

          <div className="ml-14">
            {phishingState === 'idle' || phishingState === 'failed' ? (
              <div className="space-y-4">
                {phishingState === 'failed' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                    <AlertTriangle className="w-4 h-4" /> Incorrect. That was a legitimate email. Try again.
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Legit Email */}
                  <button 
                    onClick={() => setPhishingState('failed')}
                    disabled={isCompleted}
                    className="text-left p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="text-xs text-slate-500 mb-2 border-b border-slate-100 pb-2">
                      <span className="font-semibold text-slate-700">From:</span> pm@locsolutions.com<br/>
                      <span className="font-semibold text-slate-700">Subject:</span> Project 49201 - Instructions Updated
                    </div>
                    <p className="text-sm text-slate-700">
                      Hi team, please review the updated style guide attached in the TMS portal before starting translation. Let me know if you have questions.
                    </p>
                  </button>

                  {/* Fake Email */}
                  <button 
                    onClick={() => setPhishingState('passed')}
                    disabled={isCompleted}
                    className="text-left p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="text-xs text-slate-500 mb-2 border-b border-slate-100 pb-2">
                      <span className="font-semibold text-slate-700">From:</span> admin@locsolutions-support.net<br/>
                      <span className="font-semibold text-slate-700">Subject:</span> URGENT: Password Expiry Notice
                    </div>
                    <p className="text-sm text-slate-700">
                      Your SSO account will be locked in 2 hours. Click <span className="text-blue-600 underline">here</span> immediately to verify your credentials and prevent suspension.
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-5 h-5" /> Excellent! You correctly identified the phishing attempt.
              </div>
            )}
          </div>
        </div>

        {/* Morality & DEI */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Module 3: Code of Conduct & DEI</h3>
              <p className="text-sm text-slate-500 mt-1">Our commitment to an inclusive global network.</p>
            </div>
          </div>

          <div className="ml-14 space-y-4">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 max-h-48 overflow-y-auto">
              <h4 className="font-serif font-bold text-slate-900 mb-2">Vendor Code of Conduct</h4>
              <p className="text-sm text-slate-600 mb-4">
                LocSolutions is committed to the highest standards of ethical conduct. We expect our vendors to operate with integrity, respect human rights, and foster an inclusive environment free from discrimination or harassment.
              </p>
              <h4 className="font-serif font-bold text-slate-900 mb-2">DEI Principles</h4>
              <p className="text-sm text-slate-600">
                Diversity, Equity, and Inclusion are core to our linguistic mission. We value the unique cultural perspectives our global vendor network brings and strictly prohibit bias based on race, gender, religion, sexual orientation, or disability.
              </p>
            </div>
            
            {!deiAgreed ? (
              <div className="flex items-center justify-between bg-white p-4 border border-slate-200 rounded-lg">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={deiChecked}
                    onChange={(e) => setDeiChecked(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-900">I have read and acknowledge the Code of Conduct.</span>
                </label>
                <button 
                  onClick={() => setDeiAgreed(true)}
                  disabled={!deiChecked}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    deiChecked ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  I Agree
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-5 h-5" /> Acknowledged and agreed
              </div>
            )}
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
          {isCompleted ? 'Completed' : 'Proceed to Culture'}
        </button>
      </div>
    </div>
  );
}
