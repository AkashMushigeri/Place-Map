import React from "react";
import CareerMap from "../components/roadmap/CareerMap";
import { useApp } from "../context/AppContext";
import { Sparkles, ArrowRight, Compass, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareerMapPage() {
  const { currentLevel, profile, setIsGuideDrawerOpen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Value Banner: Persistent "Your Next Best Step" */}
      <div className="bg-gradient-to-r from-brand-900/60 via-indigo-950/60 to-slate-900 border border-brand-500/30 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
              Your Next Best Step
            </span>
            <span className="text-xs text-slate-300">
              • Calibrated for {profile.targetCompany}
            </span>
          </div>

          <h1 className="text-lg sm:text-xl font-black text-white">
            Level {currentLevel?.levelNumber || 1}: {currentLevel?.title || "Foundations"}
          </h1>

          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            {currentLevel?.whyItMatters || "Master this checkpoint to advance your journey."}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsGuideDrawerOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Ask Guide</span>
          </button>
        </div>
      </div>

      {/* The Visual Winding Candy-Crush Career Map */}
      <CareerMap />
    </div>
  );
}
