import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Award,
  CheckCircle2,
  Flame,
  Code2,
  FolderGit2,
  MessageSquareCode,
  FileText,
  Map,
  ArrowRight,
  Sparkles,
  Building2,
  Layers
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ProgressTracking() {
  const { profile, stats, interviewHistory, dsaSolved, dailyTasks, roadmap } = useApp();

  let completedRoadmapTasks = 0;
  let totalRoadmapTasks = 0;
  roadmap.forEach(phase => {
    phase.tasks.forEach(t => {
      totalRoadmapTasks++;
      if (t.completed) completedRoadmapTasks++;
    });
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Placement Readiness Analytics
            </span>
            <span className="text-xs text-slate-400">• GPS Trajectory Evaluation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Overall Placement Preparation: {stats.overallPreparation}%
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Calculated from your technical skills match, pattern-based DSA problems, completed roadmap milestones, and interview simulations for <strong>{profile.targetCompany}</strong>.
          </p>
        </div>

        {/* Global Streak & Readiness Score */}
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
            <Flame className="w-5 h-5 fill-amber-500" />
            <span>{profile.streakDays || 4} Day Streak</span>
          </div>
          <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
            <span className="text-xs text-emerald-500 font-bold block">
              {stats.overallPreparation >= 75 ? "Placement Ready" : "Accelerating Route"}
            </span>
            <span className="text-xs text-slate-400">Offer Bar: 85%+</span>
          </div>
        </div>
      </div>

      {/* Primary 5 Readiness Dimensions */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-slate-800">
          Core Dimension Score Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              title: "Technical Skills",
              score: stats.skillsScore,
              link: "/skill-gap",
              icon: Layers,
              color: "text-brand-500",
              barColor: "bg-brand-500",
              desc: "Based on company rubric match"
            },
            {
              title: "DSA Mastery",
              score: stats.dsaPercentage,
              link: "/dsa",
              icon: Code2,
              color: "text-amber-500",
              barColor: "bg-amber-500",
              desc: `${dsaSolved.length} of ${stats.totalDsaCount} problems solved`
            },
            {
              title: "Projects",
              score: stats.projectsScore,
              link: "/projects",
              icon: FolderGit2,
              color: "text-emerald-500",
              barColor: "bg-emerald-500",
              desc: `${profile.projects?.length || 1} portfolio projects`
            },
            {
              title: "Mock Interview",
              score: stats.interviewScore,
              link: "/interview",
              icon: MessageSquareCode,
              color: "text-indigo-500",
              barColor: "bg-indigo-500",
              desc: `${interviewHistory.length} mock rounds completed`
            },
            {
              title: "ATS Resume",
              score: stats.resumeScore,
              link: "/resume",
              icon: FileText,
              color: "text-purple-500",
              barColor: "bg-purple-500",
              desc: "Verified keyword alignment"
            }
          ].map((dim, i) => {
            const Icon = dim.icon;
            return (
              <Link
                key={i}
                to={dim.link}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-brand-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {dim.title}
                    </span>
                    <Icon className={`w-4 h-4 ${dim.color}`} />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {dim.score}%
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className={`${dim.barColor} h-full rounded-full`} style={{ width: `${dim.score}%` }} />
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800/80 group-hover:text-brand-500 transition-colors">
                  {dim.desc} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quantitative Velocity Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Completed Tasks</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
            {stats.completedDaily} / {stats.totalDaily}
          </span>
          <span className="text-[10px] text-emerald-500 font-semibold mt-0.5 block">Today's Sprint</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Active Phase</span>
          <span className="text-2xl font-black text-brand-600 dark:text-brand-400 mt-1 block">
            Phase 02
          </span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">DSA Patterns</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Current Streak</span>
          <span className="text-2xl font-black text-amber-500 mt-1 block">
            {profile.streakDays || 4} Days
          </span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">Velocity Consistent</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Projects Built</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
            {profile.projects?.length || 1}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">In Portfolio</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Problems Solved</span>
          <span className="text-2xl font-black text-emerald-500 mt-1 block">
            {dsaSolved.length}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">Algorithmic</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs text-slate-400 block font-medium">Mock Interviews</span>
          <span className="text-2xl font-black text-indigo-500 mt-1 block">
            {interviewHistory.length}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">Evaluated Rounds</span>
        </div>
      </div>
    </div>
  );
}
