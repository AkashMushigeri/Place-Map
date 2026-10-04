import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Award,
  CheckCircle2,
  Circle,
  Play,
  Clock,
  Sparkles,
  BookOpen,
  Code2,
  Hammer,
  HelpCircle,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { useApp } from "../context/AppContext";
import confetti from "canvas-confetti";

export default function TodayMissionPage() {
  const { dailyMission, toggleDailyMissionItem, currentLevel, profile, careerXP, stats, addXP } = useApp();

  const [activeTimerIndex, setActiveTimerIndex] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(1800); // 30 min default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const completedCount = dailyMission.items.filter(i => i.completed).length;
  const allCompleted = completedCount === dailyMission.items.length;

  const startTaskTimer = (index, minutes) => {
    setActiveTimerIndex(index);
    setSecondsLeft(minutes * 60);
    setIsTimerRunning(true);
  };

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner: Day Number & Target */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black mb-2">
            <Flame className="w-3.5 h-3.5 fill-amber-500" />
            <span>DAY {dailyMission.dayNumber} OF PREPARATION</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Today's Focused Route
          </h1>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
            Targeting: <strong>{currentLevel?.title || "Level 1: Coding Foundations"}</strong> for <strong>{profile.targetCompany}</strong>.
          </p>
        </div>

        {/* Global Streak & XP Card */}
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-semibold">Current Streak</div>
            <div className="text-xl font-black text-amber-500 flex items-center justify-end gap-1">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{profile.streakDays || 7} Days</span>
            </div>
          </div>
          <div className="border-l border-slate-200 dark:border-slate-800 pl-4 text-right">
            <div className="text-xs text-slate-400 font-semibold">Career XP</div>
            <div className="text-xl font-black text-brand-600 dark:text-brand-400">
              {careerXP}
            </div>
          </div>
        </div>
      </div>

      {/* Duolingo-style Streak Calendar Week */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            Weekly Streak Velocity
          </span>
          <span className="text-xs text-emerald-500 font-bold">
            {profile.streakDays || 7}-Day Consistency
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 pt-1">
          {daysOfWeek.map((day, idx) => {
            const isDone = profile.streakHistory ? profile.streakHistory[idx] : idx < 6;
            return (
              <div
                key={day}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isDone
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-400"
                }`}
              >
                <div className="text-[10px] font-bold block mb-1">{day}</div>
                <div className="w-6 h-6 rounded-full mx-auto flex items-center justify-center font-black text-xs">
                  {isDone ? "✓" : "○"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4-Step Daily Route Cards (Learn, Practice, Build, Review) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Daily Mission Breakdown ({dailyMission.totalMinutes} Mins Total)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Complete each stage sequentially to lock in your daily streak and earn +400 XP.
            </p>
          </div>

          <div className="text-xs font-bold text-brand-600 dark:text-brand-400">
            {completedCount} of {dailyMission.items.length} Completed
          </div>
        </div>

        <div className="space-y-3">
          {dailyMission.items.map((item, index) => {
            let Icon = BookOpen;
            if (item.type === "Practice") Icon = Code2;
            if (item.type === "Build") Icon = Hammer;
            if (item.type === "Review") Icon = HelpCircle;

            return (
              <div
                key={item.id}
                onClick={() => toggleDailyMissionItem(item.id)}
                className={`p-4 rounded-2xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                  item.completed
                    ? "bg-emerald-500/5 border-emerald-500/30 opacity-80"
                    : "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button type="button" className="text-slate-400 hover:text-brand-500">
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                    )}
                  </button>

                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs text-brand-500">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                        {item.step} • {item.type}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-bold ${
                        item.completed
                          ? "line-through text-slate-400 dark:text-slate-500"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.timeMin} mins
                  </span>

                  {!item.completed && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        startTaskTimer(index, item.timeMin);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 text-[11px] font-semibold transition-colors flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Focus</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Milestone Card */}
        {allCompleted ? (
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
            <span className="text-2xl">🎉</span>
            <h3 className="font-black text-sm text-emerald-600 dark:text-emerald-400">
              TODAY'S MISSION COMPLETE!
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              You earned +400 XP and reinforced your route to {profile.targetCompany}.
            </p>
            <Link
              to="/career-map"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-500 shadow-md transition-all mt-2"
            >
              <span>Return to Career Map</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="pt-2 flex justify-end">
            <Link
              to="/career-map"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
            >
              <span>Start Today's Journey on Career Map</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
