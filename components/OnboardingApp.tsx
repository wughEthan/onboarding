'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  CheckCircle2, Circle, ChevronRight, User, Settings, Shield, 
  Heart, PlaySquare, BookOpen, Wrench, CalendarCheck, Check, FolderOpen
} from 'lucide-react';
import { Phase1Legal } from './Phase1Legal';
import { Phase1IT } from './Phase1IT';
import { Phase1Security } from './Phase1Security';
import { Phase1Culture } from './Phase1Culture';
import { Phase2TrackA } from './Phase2TrackA';
import { Phase2TrackB } from './Phase2TrackB';
import { Phase1Checkpoint } from './Phase1Checkpoint';
import { CompletionScreen } from './CompletionScreen';
import { ResourcesTab } from './ResourcesTab';
import { InitialSetup } from './InitialSetup';

export type VendorType = 'software' | 'game';

export default function OnboardingApp() {
  const [hasCompletedInitialSetup, setHasCompletedInitialSetup] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [activeTab, setActiveTab] = useState<'onboarding' | 'resources'>('onboarding');
  const [currentPhase, setCurrentPhase] = useState<1 | 1.5 | 2 | 3>(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [vendorType, setVendorType] = useState<VendorType>('software');
  
  const [phase1Progress, setPhase1Progress] = useState({
    legal: false,
    it: false,
    security: false,
    culture: false,
  });

  const [phase2Progress, setPhase2Progress] = useState({
    stakeholders: false,
    intro: false,
    tone: false,
    tools: false,
    qa: false,
  });

  const phase1Steps = [
    { id: 1, title: 'Legal & Profile', icon: Settings, key: 'legal' },
    { id: 2, title: 'IT Infrastructure', icon: Wrench, key: 'it' },
    { id: 3, title: 'Security & Compliance', icon: Shield, key: 'security' },
    { id: 4, title: 'Culture & Wellbeing', icon: Heart, key: 'culture' },
  ];

  const phase2StepsTrackA = [
    { id: 1, title: 'Stakeholder Brief', icon: User, key: 'stakeholders' },
    { id: 2, title: 'Product Intro', icon: PlaySquare, key: 'intro' },
    { id: 3, title: 'Tone Guides', icon: BookOpen, key: 'tone' },
    { id: 4, title: 'Tool Tips', icon: Wrench, key: 'tools' },
    { id: 5, title: 'Final QA', icon: CalendarCheck, key: 'qa' },
  ];

  const phase2StepsTrackB = [
    { id: 1, title: 'Stakeholder Brief', icon: User, key: 'stakeholders' },
    { id: 3, title: 'Tone Guides', icon: BookOpen, key: 'tone' },
    { id: 4, title: 'Tool Tips', icon: Wrench, key: 'tools' },
    { id: 5, title: 'Final QA', icon: CalendarCheck, key: 'qa' },
  ];

  const currentSteps = currentPhase === 1 ? phase1Steps : 
                       currentPhase === 2 ? (vendorType === 'software' ? phase2StepsTrackA : phase2StepsTrackB) : 
                       [];

  const handlePhase1Complete = (key: keyof typeof phase1Progress) => {
    setPhase1Progress(prev => ({ ...prev, [key]: true }));
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentPhase(1.5); // Checkpoint
    }
  };

  const handlePhase2Complete = (key: keyof typeof phase2Progress) => {
    setPhase2Progress(prev => ({ ...prev, [key]: true }));
    const steps = vendorType === 'software' ? phase2StepsTrackA : phase2StepsTrackB;
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    } else {
      setCurrentPhase(3); // Completion
    }
  };

  if (!hasCompletedInitialSetup) {
    return (
      <InitialSetup 
        onComplete={(name, track) => {
          setVendorName(name);
          setVendorType(track);
          setHasCompletedInitialSetup(true);
        }} 
      />
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <Logo />
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'onboarding' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-4 h-4" />
              Onboarding Path
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`w-full flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'resources' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Resources & Docs
            </button>
          </div>

          {activeTab === 'onboarding' && (
            <>
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Phase 1: Foundation
                </h3>
            <div className="space-y-2">
              {phase1Steps.map((step) => {
                const isCompleted = phase1Progress[step.key as keyof typeof phase1Progress];
                const isActive = currentPhase === 1 && currentStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      if (isCompleted || (currentPhase === 1 && currentStep >= step.id)) {
                        setCurrentPhase(1);
                        setCurrentStep(step.id);
                      }
                    }}
                    disabled={!isCompleted && (currentPhase !== 1 || currentStep < step.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-700 font-medium' : 
                      isCompleted ? 'text-slate-600 hover:bg-slate-50' : 
                      'text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-300'}`} />
                    )}
                    {step.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Phase 2: Product
            </h3>
            <div className="space-y-2">
              {(vendorType === 'software' ? phase2StepsTrackA : phase2StepsTrackB).map((step) => {
                const isCompleted = phase2Progress[step.key as keyof typeof phase2Progress];
                const isActive = currentPhase === 2 && currentStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      if (isCompleted || (currentPhase === 2 && currentStep >= step.id)) {
                        setCurrentPhase(2);
                        setCurrentStep(step.id);
                      }
                    }}
                    disabled={!isCompleted && (currentPhase !== 2 || currentStep < step.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-700 font-medium' : 
                      isCompleted ? 'text-slate-600 hover:bg-slate-50' : 
                      'text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-300'}`} />
                    )}
                    {step.title}
                  </button>
                );
              })}
            </div>
          </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {activeTab === 'resources' ? (
              <span className="font-medium text-slate-900">Resources & Documents</span>
            ) : (
              <>
                <span>Onboarding</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-medium text-slate-900">
                  {currentPhase === 1 ? 'Phase 1: Foundation' : 
                   currentPhase === 1.5 ? 'Phase 1 Checkpoint' :
                   currentPhase === 2 ? 'Phase 2: Product-Specific' : 'Completed'}
                </span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {currentPhase === 3 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                <Check className="w-3.5 h-3.5" />
                Project Ready - Access Unlocked
              </span>
            )}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold uppercase">
                {vendorName.charAt(0)}
              </div>
              <div className="text-sm">
                <p className="font-medium text-slate-900 leading-none">{vendorName}</p>
                <p className="text-slate-500 text-xs mt-1">Vendor Candidate</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'resources' ? (
              <ResourcesTab 
                vendorType={vendorType} 
                phase1Progress={phase1Progress} 
                phase2Progress={phase2Progress} 
              />
            ) : (
              <>
                {currentPhase === 1 && currentStep === 1 && (
                  <Phase1Legal onComplete={() => handlePhase1Complete('legal')} isCompleted={phase1Progress.legal} />
                )}
                {currentPhase === 1 && currentStep === 2 && (
                  <Phase1IT onComplete={() => handlePhase1Complete('it')} isCompleted={phase1Progress.it} />
                )}
                {currentPhase === 1 && currentStep === 3 && (
                  <Phase1Security onComplete={() => handlePhase1Complete('security')} isCompleted={phase1Progress.security} />
                )}
                {currentPhase === 1 && currentStep === 4 && (
                  <Phase1Culture onComplete={() => handlePhase1Complete('culture')} isCompleted={phase1Progress.culture} />
                )}
                {currentPhase === 1.5 && (
                  <Phase1Checkpoint 
                    progress={phase1Progress} 
                    onProceed={() => {
                      setCurrentPhase(2);
                      setCurrentStep(1);
                    }} 
                  />
                )}
                {currentPhase === 2 && vendorType === 'software' && (
                  <Phase2TrackA 
                    step={currentStep} 
                    onComplete={(key) => handlePhase2Complete(key as any)} 
                    progress={phase2Progress} 
                  />
                )}
                {currentPhase === 2 && vendorType === 'game' && (
                  <Phase2TrackB 
                    step={currentStep} 
                    onComplete={(key) => handlePhase2Complete(key as any)} 
                    progress={phase2Progress} 
                  />
                )}
                {currentPhase === 3 && (
                  <CompletionScreen />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
