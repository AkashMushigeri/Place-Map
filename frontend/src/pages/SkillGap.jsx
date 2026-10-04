import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GitPullRequestDraft,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Building2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  FolderGit2,
  Zap,
  Info
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function SkillGap() {
  const { profile, skillGapAnalysis, setIsGuideDrawerOpen } = useApp();
  const [filter, setFilter] = useState("all"); // 'all', 'high', 'medium', 'low'
  const [expandedSkill, setExpandedSkill] = useState(null);

  const { company, role, gaps, matchPercentage, highPriorityCount } = skillGapAnalysis;

  const filteredGaps = gaps.filter(g => {
    if (filter === "high") return g.priorityBadge === "high";
    if (filter === "medium") return g.priorityBadge === "medium";
    if (filter === "low") return g.priorityBadge === "low";
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Benchmark Calibration Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              GPS Delta Engine
            </span>
            <span className="text-xs text-slate-400">• Prototype Career Requirements</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Target Skill Gap Matrix
          </h1>

          <div className="flex items-center gap-2 mt-2 text-sm text-slate-600 dark:text-slate-300">
            <span>Target Destination:</span>
            <span className="font-bold text-brand-600 dark:text-brand-400">{role.name}</span>
            <span>at</span>
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" /> {company.name}
            </span>
          </div>
        </div>

        {/* Aggregate Match Indicator */}
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Rubric Match</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {matchPercentage}%
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/20">
            🎯
          </div>
        </div>
      </div>

      {/* Summary Alert */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-500 shrink-0 mt-0.5 sm:mt-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              {highPriorityCount} High Priority (P0) Showstopper Gaps Identified
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Skills like DSA & Algorithms directly determine Round 1 OA survival at {company.name}.
            </p>
          </div>
        </div>

        <Link
          to="/roadmap"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all shrink-0 self-end sm:self-auto"
        >
          <span>Open Adaptive Roadmap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        {[
          { id: "all", label: `All Gaps (${gaps.length})` },
          { id: "high", label: `High Priority / P0 (${gaps.filter(g => g.priorityBadge === "high").length})` },
          { id: "medium", label: `Medium Priority / P1 (${gaps.filter(g => g.priorityBadge === "medium").length})` },
          { id: "low", label: `Low Priority / P2 (${gaps.filter(g => g.priorityBadge === "low").length})` }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
              filter === tab.id
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill Gaps Cards */}
      <div className="space-y-4">
        {filteredGaps.map((gap, index) => {
          const isExpanded = expandedSkill === gap.skill;
          const currentWidth = gap.currentScore;
          const targetWidth = gap.targetScore;

          return (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {gap.skill}
                    </h3>

                    {/* Priority Badge */}
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        gap.priorityBadge === "high"
                          ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                          : gap.priorityBadge === "medium"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {gap.priority}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>
                      Current: <strong className="text-slate-700 dark:text-slate-200">{gap.currentLevel}</strong>
                    </span>
                    <span>→</span>
                    <span>
                      Target: <strong className="text-brand-600 dark:text-brand-400">{gap.targetLevel}</strong>
                    </span>
                    {gap.delta > 0 ? (
                      <span className="text-red-500 font-semibold text-[11px]">
                        (-{gap.delta} pts gap)
                      </span>
                    ) : (
                      <span className="text-emerald-500 font-semibold text-[11px] flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Met benchmark
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setExpandedSkill(isExpanded ? null : gap.skill)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <span>{isExpanded ? "Hide Details" : "Action Plan"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => setIsGuideDrawerOpen(true)}
                    className="p-1.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 hover:bg-brand-100 transition-colors"
                    title="Ask AI Career Guide about this gap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual Gap Comparison Progress Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                  <span>Current Mastery ({gap.currentScore}%)</span>
                  <span>Target Bar ({gap.targetScore}%)</span>
                </div>

                <div className="relative w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  {/* Target benchmark faint marker */}
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-slate-300 dark:bg-slate-700 rounded-full"
                    style={{ width: `${targetWidth}%` }}
                  />
                  {/* Current student progress */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 rounded-full transition-all duration-500 ${
                      gap.delta === 0
                        ? "bg-emerald-500"
                        : gap.priorityBadge === "high"
                        ? "bg-gradient-to-r from-red-500 to-amber-500"
                        : "bg-brand-500"
                    }`}
                    style={{ width: `${currentWidth}%` }}
                  />
                </div>
              </div>

              {/* Expandable Action Plan */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in duration-150">
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1 text-[11px]">
                      <Info className="w-3.5 h-3.5 text-brand-500" />
                      Why It Matters
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                      {gap.whyItMatters}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1 text-[11px]">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      What to Learn
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                      {gap.whatToLearn}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1 text-[11px]">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                      Recommended Practice
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                      {gap.practice}
                    </p>
                  </div>

                  <div className="p-3 bg-brand-50 dark:bg-brand-950/40 rounded-xl border border-brand-200 dark:border-brand-800/60 flex flex-col justify-between">
                    <div>
                      <span className="font-bold text-brand-700 dark:text-brand-300 flex items-center gap-1.5 mb-1 text-[11px]">
                        <FolderGit2 className="w-3.5 h-3.5 text-brand-500" />
                        Recommended Project
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        Apply this skill in your portfolio project to demonstrate real-world competence.
                      </p>
                    </div>
                    <Link
                      to="/projects"
                      className="text-brand-600 dark:text-brand-400 font-bold hover:underline mt-2 inline-flex items-center gap-1 text-[11px]"
                    >
                      View Projects <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
