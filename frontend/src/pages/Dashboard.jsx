import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  CheckSquare,
  Square,
  Target,
  Building2,
  TrendingUp,
  AlertTriangle,
  Code2,
  FolderGit2,
  MessageSquareCode,
  FileText,
  Flame,
  Award,
  Clock,
  Compass,
  CheckCircle2
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const {
    profile,
    stats,
    skillGapAnalysis,
    dailyTasks,
    toggleDailyTask,
    setIsGuideDrawerOpen,
    currentLevel,
    careerXP,
    dailyMission,
    toggleDailyMissionItem
  } = useApp();

  const topGaps = skillGapAnalysis.gaps.slice(0, 3);
  const completedMissionsCount = dailyMission?.items?.filter((i) => i.completed)?.length || 0;
  const totalMissionsCount = dailyMission?.items?.length || 4;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome & Target Destination Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Career Navigation Active</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Welcome back, {profile.name || "Student"} 👋
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Target className="w-4 h-4 text-brand-500" />
                Target: <strong className="text-slate-900 dark:text-white">{profile.targetRole}</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-slate-500" />
                Dream Company: <strong className="text-brand-600 dark:text-brand-400">@{profile.targetCompany}</strong>
              </span>
            </div>
          </div>

          {/* Overall Preparation Readiness Gauge */}
          <div className="flex items-center gap-5 bg-slate-50 dark:bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                Overall Preparation
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-0.5">
                {stats.overallPreparation}%
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-3 h-3" /> Offer Trajectory Active
              </div>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-brand-500/20">
              🎯
            </div>
          </div>
        </div>

        {/* Category Breakdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
              Technical Skills
            </span>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {stats.skillsScore}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-brand-500 h-full rounded-full" style={{ width: `${stats.skillsScore}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
              DSA Mastery
            </span>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {stats.dsaPercentage}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: `${stats.dsaPercentage}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
              Projects
            </span>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {stats.projectsScore}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${stats.projectsScore}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
              Mock Interviews
            </span>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {stats.interviewScore}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${stats.interviewScore}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
              ATS Resume
            </span>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {stats.resumeScore}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-purple-500 h-full rounded-full" style={{ width: `${stats.resumeScore}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero "Continue Journey" Checkpoint Card (Candy Crush / Google Maps Metaphor) */}
      <div className="bg-gradient-to-r from-brand-900/90 via-indigo-950/80 to-slate-900 border border-brand-500/40 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> CURRENT CHECKPOINT
            </span>
            <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-amber-400" /> {profile.streakDays || 7} Day Streak
            </span>
            <span className="text-xs text-brand-300 font-bold">
              • ⚡ {careerXP || 1450} Career XP
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Level {currentLevel?.levelNumber || 1}:</span>
              <span className="text-brand-300">{currentLevel?.title || "Foundations Valley"}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
              {currentLevel?.whyItMatters || "Master this level's core checkpoints to advance your trajectory towards your dream company."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
            <span className="text-white font-medium">
              🎯 Destination: <strong>{profile.targetRole} @ {profile.targetCompany}</strong>
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Today's Mission: {completedMissionsCount}/{totalMissionsCount} completed
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 relative z-10">
          <Link
            to="/today"
            className="px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Today's Mission</span>
          </Link>
          <Link
            to="/career-map"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-500 to-indigo-500 hover:from-brand-400 hover:to-indigo-400 text-white font-black text-xs shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <span>Continue Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Today's Tasks & Next Milestone */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Tasks Interactive Box */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  Today's 4-Part Sprint (Day {dailyMission?.dayNumber || 12})
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Calibrated for {currentLevel?.title || "Foundations"}. Complete all 4 to maintain your 🔥 {profile.streakDays || 7} day streak.
                </p>
              </div>

              <Link
                to="/today"
                className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
              >
                <span>Full Mission Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="mt-4 space-y-2.5">
              {dailyMission?.items?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleDailyMissionItem(item.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                    item.completed
                      ? "bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/60 opacity-70"
                      : "bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button type="button" className="text-slate-400 hover:text-brand-500">
                      {item.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          {item.type}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            item.completed
                              ? "line-through text-slate-400 dark:text-slate-500"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Step {item.step} • +100 XP upon completion
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium shrink-0 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.timeMin}m
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Milestone Card */}
          <div className="bg-gradient-to-r from-brand-900/40 to-indigo-900/40 border border-brand-500/30 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-300 block mb-1">
                Next Preparation Milestone
              </span>
              <h3 className="text-base font-bold text-white">
                Complete Phase 02: DSA Pattern Foundation
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Solve Two Pointers and Sliding Window patterns to eliminate the Round 1 OA barrier at {profile.targetCompany}.
              </p>
            </div>

            <Link
              to="/dsa"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md shadow-brand-500/25 transition-all shrink-0"
            >
              <span>Practice DSA Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Col: Top Skill Gaps & AI Guide Promo */}
        <div className="space-y-6">
          {/* Top Skill Gaps */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Top Skill Gaps
              </h2>
              <Link to="/skill-gap" className="text-xs text-brand-600 dark:text-brand-400 hover:underline">
                View all
              </Link>
            </div>

            <div className="mt-3 space-y-3">
              {topGaps.map((gap, i) => (
                <div
                  key={i}
                  className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">
                      {i + 1}. {gap.skill}
                    </span>
                    <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">
                      {gap.priorityBadge.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-between">
                    <span>Current: {gap.currentLevel}</span>
                    <span>Target: {gap.targetLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PlaceMap Career Guide Interactive Widget */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-brand-500/40 rounded-2xl p-6 text-white shadow-xl shadow-brand-500/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-xl shadow-md shadow-brand-500/30">
                🗺️
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">PlaceMap Career Guide</h3>
                <p className="text-[11px] text-slate-400">Contextual Staff AI Mentor</p>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 leading-relaxed">
              "Hi {profile.name}! Based on your {profile.targetCompany} target, your biggest blocker is <strong>{skillGapAnalysis.topGap?.skill || "DSA"}</strong>. What should we tackle right now?"
            </div>

            <div className="space-y-1.5 pt-1">
              {[
                "What should I learn today?",
                "Why is DSA my biggest gap?",
                "Recommend a project"
              ].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setIsGuideDrawerOpen(true)}
                  className="w-full text-left text-xs px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center justify-between group"
                >
                  <span>{prompt}</span>
                  <ArrowRight className="w-3 h-3 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsGuideDrawerOpen(true)}
              className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask PlaceMap Anything</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
