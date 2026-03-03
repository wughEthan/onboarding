'use client';

import React, { useState } from 'react';
import { FileSignature, FileText, Building2, Globe, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

export function Phase1Legal({ onComplete, isCompleted }: { onComplete: () => void, isCompleted: boolean }) {
  const [ndaSigned, setNdaSigned] = useState(isCompleted);
  const [showNdaModal, setShowNdaModal] = useState(false);
  const [signature, setSignature] = useState('');
  
  const [taxSubmitted, setTaxSubmitted] = useState(isCompleted);

  const handleNdaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signature.trim()) {
      setNdaSigned(true);
      setShowNdaModal(false);
    }
  };

  const allComplete = ndaSigned && taxSubmitted;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Legal, Financial & Profile Setup</h1>
        <p className="text-slate-500 mt-1">Complete these foundational steps to begin your onboarding.</p>
      </div>

      <div className="grid gap-6">
        {/* NDA & MSA */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <FileSignature className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Non-Disclosure Agreement & MSA</h3>
                <p className="text-sm text-slate-500 mt-1">Review and sign our standard vendor agreements.</p>
              </div>
            </div>
            {ndaSigned ? (
              <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> Signed
              </span>
            ) : (
              <button 
                onClick={() => setShowNdaModal(true)}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Review & Sign
              </button>
            )}
          </div>
        </div>

        {/* Financial & Tax */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Financial & Tax Information</h3>
              <p className="text-sm text-slate-500 mt-1">Provide your tax details and payment preferences.</p>
            </div>
          </div>

          <div className="ml-14">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">Offline Tax & Payment Setup</h4>
              <p className="text-sm text-blue-800 mb-4">
                For security reasons, LocSolutions does not collect sensitive banking or tax information directly through this portal.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-100 mb-4">
                <p className="text-sm text-slate-700 font-medium mb-2">Please email the following documents to our Finance team:</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mb-4">
                  <li>Completed W-8BEN or W-9 form</li>
                  <li>Bank account details (Account Number, Routing/SWIFT code) on official bank letterhead or a voided check</li>
                </ul>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href="mailto:finance@locsolutions.com" className="text-blue-600 hover:underline font-medium">finance@locsolutions.com</a>
                </div>
              </div>

              <label className={`flex items-start gap-3 group ${isCompleted ? 'cursor-default' : 'cursor-pointer'}`}>
                <div className="relative flex items-center justify-center mt-0.5">
                  <input 
                    type="checkbox" 
                    className="peer sr-only"
                    checked={taxSubmitted}
                    onChange={(e) => setTaxSubmitted(e.target.checked)}
                    disabled={isCompleted}
                  />
                  <div className={`w-5 h-5 border-2 rounded transition-colors ${isCompleted ? 'bg-blue-600 border-blue-600' : 'border-blue-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600'}`}></div>
                  <CheckCircle2 className={`w-4 h-4 text-white absolute transition-opacity ${isCompleted ? 'opacity-100' : 'opacity-0 peer-checked:opacity-100'}`} />
                </div>
                <span className={`text-sm font-medium transition-colors ${isCompleted ? 'text-blue-900' : 'text-blue-900 group-hover:text-blue-700'}`}>
                  I confirm that I have emailed my tax and banking information to the LocSolutions Finance team.
                </span>
              </label>
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
          {isCompleted ? 'Completed' : 'Proceed to IT Setup'}
        </button>
      </div>

      {/* NDA Modal */}
      {showNdaModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <FileSignature className="w-5 h-5" />
                DocuSign Simulation
              </div>
              <button onClick={() => setShowNdaModal(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <h2 className="text-xl font-bold mb-4">MUTUAL NON-DISCLOSURE AGREEMENT</h2>
              <div className="prose prose-sm text-slate-600 space-y-4">
                <p>This Mutual Non-Disclosure Agreement (this &quot;Agreement&quot;) is entered into by and between LocSolutions (&quot;Company&quot;) and the undersigned vendor (&quot;Vendor&quot;).</p>
                <p><strong>1. Confidential Information.</strong> &quot;Confidential Information&quot; means any non-public information that relates to the actual or anticipated business, research, or development of either party...</p>
                <p><strong>2. Non-Use and Non-Disclosure.</strong> Each party agrees not to use any Confidential Information of the other party for any purpose except to evaluate and engage in discussions concerning a potential business relationship...</p>
                <p><strong>3. Maintenance of Confidentiality.</strong> Each party agrees that it shall take reasonable measures to protect the secrecy of and avoid disclosure and unauthorized use of the Confidential Information of the other party...</p>
                <div className="h-32 bg-slate-100 rounded border border-slate-200 p-4 text-center flex items-center justify-center text-slate-400 italic">
                  [Scroll to read full 12-page document]
                </div>
              </div>

              <form onSubmit={handleNdaSubmit} className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Type your full name to sign</label>
                  <input 
                    type="text" 
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 font-serif text-lg"
                    required
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button type="button" onClick={() => setShowNdaModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Confirm Signature
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
