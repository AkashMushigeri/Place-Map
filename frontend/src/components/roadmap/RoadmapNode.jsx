import React from "react";
import {
  Lock,
  Check,
  Play,
  Crown,
  Building2,
  Flag,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function RoadmapNode({ level, position = "center", onSelect }) {
  const isCompleted = level.status === "completed";
  const isCurrent = level.status === "current";
  const isLocked = level.status === "locked";
  const isBoss = level.type === "boss";
  const isFinal = level.type === "final";
  const isStart = level.type === "start";

  // Calculate horizontal offset style based on winding position: 'left', 'center', 'right'
  let offsetClass = "justify-center";
  if (position === "left") offsetClass = "justify-start sm:pl-16";
  if (position === "right") offsetClass = "justify-end sm:pr-16";

  return (
    <div className={`relative flex items-center ${offsetClass} my-6 group`}>
      {/* Node Container */}
      <button
        type="button"
        onClick={() => onSelect(level)}
        className="relative flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-brand-500/30 rounded-3xl transition-transform transform group-hover:scale-105 active:scale-95"
      >
        {/* Current Pulsing Aura */}
        {isCurrent && (
          <span className="absolute -inset-3 rounded-full bg-brand-500/30 animate-ping pointer-events-none" />
        )}

        {/* Node Circle Shape */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex flex-col items-center justify-center font-black transition-all shadow-xl select-none relative z-10 ${
            isCompleted
              ? "bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-emerald-500/25 border-2 border-emerald-300"
              : isCurrent
              ? "bg-gradient-to-tr from-brand-600 via-indigo-600 to-sky-400 text-white shadow-brand-500/40 border-4 border-white dark:border-slate-800 ring-4 ring-brand-400/50"
              : isBoss
              ? isLocked
                ? "bg-slate-800 border-2 border-amber-500/30 text-amber-500/50 opacity-80"
                : "bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-400 text-slate-950 shadow-amber-500/30 border-2 border-yellow-200"
              : isFinal
              ? isLocked
                ? "bg-slate-800 border-2 border-slate-700 text-slate-500"
                : "bg-gradient-to-tr from-emerald-500 to-brand-500 text-white shadow-emerald-500/30 border-4 border-yellow-300 ring-4 ring-emerald-400/40"
              : "bg-slate-200 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 text-slate-400 shadow-sm opacity-80"
          }`}
        >
          {/* Main Icon or Number */}
          {isCompleted ? (
            <Check className="w-8 h-8 stroke-[3]" />
          ) : isCurrent ? (
            <div className="flex flex-col items-center">
              <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest mt-0.5">
                Lv {level.levelNumber}
              </span>
            </div>
          ) : isBoss ? (
            <div className="flex flex-col items-center">
              <Crown className="w-6 h-6 stroke-[2.5]" />
              <span className="text-[9px] font-black uppercase tracking-wider">Boss</span>
            </div>
          ) : isFinal ? (
            <div className="flex flex-col items-center">
              <Building2 className="w-7 h-7" />
              <span className="text-[9px] font-black uppercase tracking-wider">Goal</span>
            </div>
          ) : isStart ? (
            <div className="flex flex-col items-center">
              <Flag className="w-6 h-6" />
              <span className="text-[9px] font-bold">Start</span>
            </div>
          ) : isLocked ? (
            <div className="flex flex-col items-center">
              <Lock className="w-5 h-5 text-slate-400 dark:text-slate-500" />
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">
                {level.levelNumber}
              </span>
            </div>
          ) : (
            <span className="text-sm font-black">{level.levelNumber}</span>
          )}

          {/* Level XP Pill underneath */}
          <span className="absolute -bottom-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900 border border-slate-700 text-amber-400 shadow-sm whitespace-nowrap">
            +{level.xpReward} XP
          </span>
        </div>

        {/* Level Title Badge Below Node */}
        <div className="mt-4 text-center max-w-[140px] sm:max-w-[170px]">
          <div
            className={`font-black text-xs leading-tight line-clamp-2 ${
              isCurrent
                ? "text-brand-600 dark:text-brand-400"
                : isCompleted
                ? "text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {level.shortTitle || level.title}
          </div>
          <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-medium">
            {level.zone}
          </div>
        </div>

        {/* 'CONTINUE HERE' Bubble if Current */}
        {isCurrent && (
          <div className="absolute -top-7 px-3 py-1 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-extrabold text-[10px] shadow-lg shadow-brand-500/30 uppercase tracking-wider flex items-center gap-1 animate-bounce">
            <Sparkles className="w-3 h-3" />
            <span>Active Level</span>
          </div>
        )}
      </button>
    </div>
  );
}
