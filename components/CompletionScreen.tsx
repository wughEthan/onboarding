'use client';

import React from 'react';
import { CheckCircle, LayoutDashboard, Rocket, Star } from 'lucide-react';

export function CompletionScreen() {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-center">
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-12 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/30">
              <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Onboarding Complete!</h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Welcome to the LocSolutions global vendor network. You are now fully certified and ready to receive project assignments.
            </p>
          </div>
        </div>

        <div className="p-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 font-bold text-lg mb-10 shadow-sm">
            <CheckCircle className="w-6 h-6" />
            Status: Project Ready - Access Unlocked
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button className="flex flex-col items-center justify-center p-8 border-2 border-blue-600 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Active Projects Dashboard</h3>
              <p className="text-sm text-slate-500">View and accept new assignments</p>
            </button>

            <button className="flex flex-col items-center justify-center p-8 border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors group">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Vendor Portal</h3>
              <p className="text-sm text-slate-500">Manage invoices and profile</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
