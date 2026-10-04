import React from "react";
import { Link } from "react-router-dom";
import {
  Map,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  AlertCircle,
  Building2,
  ChevronRight
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Roadmap() {
  const { roadmap, toggleRoadmapTask, profile, stats, setIsGuideDrawerOpen } = useApp();

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Dynamic Navigation Route
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              • Adaptive Route Active
            </span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Personalized Career Roadmap
          </h1>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Calibrated for <strong>{profile.targetRole}</strong> at <strong>{profile.targetCompany}</strong>. Completing milestone tasks adapts upcoming priorities in real-time.
          </p>
        </div>

        {/* Roadmap Progress Gauge */}
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Roadmap Progress</div>
            <div className="text-2xl font-black text-brand-600 dark:text-brand-400">
              {stats.roadmapPercentage}%
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/20">
            🗺️
          </div>
        </div>
      </div>

      {/* Adaptive Logic Notification Banner */}
      <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/80 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
          <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
          <span>
            <strong>Adaptive Engine Active:</strong> Because your DSA baseline is marked as <em>{profile.skills?.dsa || "Beginner"}</em>, Phase 02 (DSA Patterns) has been prioritized ahead of secondary electives.
          </span>
        </div>

        <button
          onClick={() => setIsGuideDrawerOpen(true)}
          className="text-brand-600 dark:text-brand-400 font-semibold hover:underline shrink-0 flex items-center gap-1"
        >
          Ask AI Mentor <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Roadmap Phase Timeline */}
      <div className="space-y-6">
        {roadmap.map((phase) => {
          const totalTasks = phase.tasks.length;
          const completedTasks = phase.tasks.filter(t => t.completed).length;
          const phasePercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
          const isPhaseDone = phasePercent === 100;

          return (
            <div
              key={phase.id}
              className={`bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-sm transition-all ${
                phase.isPriority
                  ? "border-brand-300 dark:border-brand-700/80 ring-1 ring-brand-500/20"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* Phase Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shrink-0 ${
                      isPhaseDone
                        ? "bg-emerald-500 text-white"
                        : phase.isPriority
                        ? "bg-brand-600 text-white shadow-md shadow-brand-500/25"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {phase.phaseNumber}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-slate-900 dark:text-white">
                        {phase.title}
                      </h2>
                      {phase.isPriority && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase">
                          Priority Sprint
                        </span>
                      )}
                      {isPhaseDone && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {phase.description} • Est. {phase.durationWeeks}
                    </p>
                  </div>
                </div>

                {/* Phase completion percentage */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {completedTasks}/{totalTasks} tasks ({phasePercent}%)
                  </span>
                  <div className="w-24 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${phasePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Phase Task Checklist */}
              <div className="mt-4 space-y-2.5">
                {phase.tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleRoadmapTask(phase.id, task.id)}
                    className={`p-3.5 rounded-xl border flex items-start justify-between gap-4 cursor-pointer transition-all ${
                      task.completed
                        ? "bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/60 opacity-80"
                        : "bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="mt-0.5 text-slate-400 hover:text-brand-500 transition-colors"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                        )}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold ${
                              task.completed
                                ? "line-through text-slate-400 dark:text-slate-500"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {task.title}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                            {task.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {task.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{task.estimatedHours}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
