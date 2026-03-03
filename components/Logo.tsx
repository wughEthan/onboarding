import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {/* Globe/Localization Motif for LocSolutions */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        {/* Stylized L and S */}
        <path
          d="M12 10V20H18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12C20 12 18 10 16 10C14 10 14 12 16 14C18 16 20 18 20 20C20 22 18 24 16 24C14 24 12 22 12 22"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="22" r="1.5" fill="currentColor" />
      </svg>
      <span className="font-bold text-xl tracking-tight text-slate-900">
        Loc<span className="text-blue-600 font-light">Solutions</span>
      </span>
    </div>
  );
}

