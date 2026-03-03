import React from 'react';
import { Clock, User, PieChart, Mail, Book } from 'lucide-react';

export function ThumbnailSoftware() {
  return (
    <div className="w-full h-full bg-[#2A373A] relative overflow-hidden flex items-center">
      <div className="absolute right-[-10%] top-[-20%] w-[70%] h-[140%] bg-[#344245] rounded-full" />
      
      <div className="relative z-10 ml-4 sm:ml-6 bg-[#00C47A] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg max-w-[55%] text-center leading-tight">
        9 minutes Software Introduction
      </div>

      <div className="absolute right-4 sm:right-8 bottom-0 w-1/2 h-full flex items-end justify-center z-10">
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-2 sm:border-4 border-[#00C47A] flex items-center justify-center">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" strokeWidth={1.5} />
        </div>
        
        <div className="absolute top-2 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
           <PieChart className="w-3 h-3 sm:w-4 sm:h-4 text-[#00C47A]" />
        </div>
        <div className="absolute top-[-5px] right-12 sm:right-20 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
           <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C47A]" />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-full border-2 sm:border-4 border-[#2A373A] z-20 flex items-center justify-center overflow-hidden">
             <User className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 mt-2" />
          </div>
          <div className="w-14 h-12 sm:w-16 sm:h-16 bg-[#00C47A] rounded-t-xl z-10 -mt-2 sm:-mt-4" />
          <div className="absolute bottom-0 right-[-20px] sm:right-[-30px] w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-t-lg border-2 sm:border-4 border-slate-200 z-30" />
        </div>
      </div>
    </div>
  );
}

export function ThumbnailHelpCenter() {
  return (
    <div className="w-full h-full bg-[#2A373A] relative overflow-hidden flex items-center">
      <div className="absolute right-[-10%] top-[-20%] w-[70%] h-[140%] bg-[#344245] rounded-full" />
      
      <div className="relative z-10 ml-4 sm:ml-6 bg-[#38BDF8] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg max-w-[55%] text-center leading-tight">
        6 minutes Help Center Introduction
      </div>

      <div className="absolute right-4 sm:right-8 bottom-0 w-1/2 h-full flex items-end justify-center z-10">
        <div className="absolute top-2 right-6 sm:top-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-2 sm:border-4 border-[#D946EF] flex items-center justify-center">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" strokeWidth={1.5} />
        </div>
        
        <div className="absolute top-6 left-2 sm:top-8 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
           <Book className="w-3 h-3 sm:w-4 sm:h-4 text-[#D946EF]" />
        </div>
        <div className="absolute top-[-5px] right-16 sm:right-24 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
           <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#D946EF]" />
        </div>

        <div className="relative flex flex-col items-center ml-10 sm:ml-16">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-full border-2 sm:border-4 border-[#2A373A] z-20 flex items-center justify-center overflow-hidden">
             <User className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 mt-2" />
          </div>
          <div className="w-12 h-16 sm:w-14 sm:h-20 bg-[#D946EF] rounded-t-xl z-10 -mt-2 sm:-mt-4" />
          <div className="absolute bottom-0 left-[-40px] sm:left-[-60px] w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-t-lg border-2 sm:border-4 border-slate-200 z-30" />
        </div>
      </div>
    </div>
  );
}

export function ThumbnailTMS() {
  return (
    <div className="w-full h-full bg-[#00C47A] relative overflow-hidden flex items-center">
      <div className="absolute left-[-10%] top-[10%] w-[60%] h-[120%] bg-[#E6F9F0] rounded-[100px] transform rotate-12" />
      
      <div className="absolute left-4 sm:left-8 bottom-0 w-1/2 h-full flex items-end justify-center z-10">
        <div className="absolute top-2 right-[-10px] sm:top-4 sm:right-0 w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-lg border-2 border-slate-800 shadow-lg overflow-hidden flex flex-col">
          <div className="h-3 sm:h-4 border-b-2 border-slate-800 flex items-center px-1 gap-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-slate-800" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-slate-800" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-slate-800" />
          </div>
          <div className="flex-1 bg-[#00C47A] flex items-end justify-center">
             <div className="w-8 h-10 sm:w-10 sm:h-12 bg-slate-200 rounded-t-full border-2 border-slate-800 flex items-start justify-center pt-1 sm:pt-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
             </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center mr-6 sm:mr-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-full border-2 border-slate-800 z-20 flex items-center justify-center overflow-hidden">
             <User className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500 mt-2" />
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-slate-800 rounded-t-xl z-10 -mt-1 sm:-mt-2 flex justify-center">
             <div className="w-2 h-6 sm:w-3 sm:h-8 bg-[#00C47A] mt-2 sm:mt-3" />
          </div>
          <div className="absolute bottom-0 right-[-30px] sm:right-[-40px] w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-t-lg border-2 border-slate-800 z-30" />
        </div>
      </div>

      <div className="relative z-10 ml-auto mr-4 sm:mr-8 border-l-2 sm:border-l-4 border-slate-800 pl-3 sm:pl-4">
        <h2 className="text-white font-bold text-sm sm:text-lg leading-tight">
          TMS/CAT Tool<br/>Setup Tutorial<br/>(10mins)
        </h2>
      </div>
    </div>
  );
}
