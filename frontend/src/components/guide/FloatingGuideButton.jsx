import React from "react";
import { Sparkles, MessageSquare } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { useLocation } from "react-router-dom";

export default function FloatingGuideButton() {
  const { setIsGuideDrawerOpen, profile, skillGapAnalysis } = useApp();
  const location = useLocation();

  // Don't show floating button on the dedicated full-screen /guide page
  if (location.pathname === "/guide") return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={() => setIsGuideDrawerOpen(true)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all"
        title="Open PlaceMap AI Career Guide"
      >
        {/* Ambient pulse effect */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />

        <div className="w-5 h-5 flex items-center justify-center">
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </div>

        <div className="text-left hidden sm:block">
          <div className="leading-tight font-extrabold flex items-center gap-1">
            <span>AI Career Guide</span>
          </div>
          <div className="text-[10px] text-brand-100 font-normal">
            Ask about {profile.targetCompany}
          </div>
        </div>
      </button>
    </div>
  );
}
