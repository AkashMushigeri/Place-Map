import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Building2,
  Briefcase,
  GraduationCap,
  Save,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Award,
  Layers,
  ArrowRight,
  Wand2
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { COMPANIES } from "../data/companies";
import { ROLES } from "../data/roles";
import confetti from "canvas-confetti";

export default function Profile() {
  const { profile, updateProfile, resetAllProgress, stats, currentLevel, careerXP, careerMap, regenerateMap } = useApp();

  const [formData, setFormData] = useState({
    name: profile.name || "",
    college: profile.college || "",
    degree: profile.degree || "B.Tech",
    branch: profile.branch || "Computer Science",
    year: profile.year || "3rd Year",
    semester: profile.semester || "6th Semester",
    cgpa: profile.cgpa || "8.5",
    targetCompany: profile.targetCompany || "Google",
    targetRole: profile.targetRole || "Software Engineer"
  });

  const [savedAlert, setSavedAlert] = useState(false);

  const completedLevelsCount = careerMap?.levels?.filter((l) => l.status === "completed")?.length || 0;
  const totalLevelsCount = careerMap?.levels?.length || 16;
  const mapCompletionPercent = Math.round((completedLevelsCount / totalLevelsCount) * 100);

  const handleSave = (e) => {
    e.preventDefault();
    const destinationChanged =
      formData.targetCompany !== profile.targetCompany ||
      formData.targetRole !== profile.targetRole;

    updateProfile(formData);
    if (destinationChanged) {
      regenerateMap({ ...profile, ...formData });
    }

    setSavedAlert(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Reset all profile progress and tasks to prototype defaults?")) {
      resetAllProgress();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-brand-500/20">
            {profile.name?.charAt(0) || "A"}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                {profile.name}
              </h1>
              <span className="text-xs bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full font-semibold">
                {profile.year}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {profile.branch} • {profile.college}
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                🎯 Destination: <strong>{profile.targetRole} @ {profile.targetCompany}</strong>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                • {stats.overallPreparation}% Placement Ready
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/career-map"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold transition-colors"
          >
            <span>Open Career Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Edit Skills</span>
          </Link>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold transition-colors"
            title="Reset storage"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Gamification & Progression Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Current Node
          </span>
          <div className="text-xl font-black text-brand-600 dark:text-brand-400 mt-1">
            Level {currentLevel?.levelNumber || 1}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
            {currentLevel?.title || "Foundations"}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Career XP
          </span>
          <div className="text-xl font-black text-amber-500 mt-1 flex items-center gap-1">
            <span>⚡ {careerXP || 1450}</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            +500 XP per boss level
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Study Streak
          </span>
          <div className="text-xl font-black text-orange-500 mt-1 flex items-center gap-1">
            <span>🔥 {profile.streakDays || 7} Days</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Consistency active
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Roadmap Mastered
          </span>
          <div className="text-xl font-black text-emerald-500 mt-1">
            {completedLevelsCount} / {totalLevelsCount} Levels
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {mapCompletionPercent}% of journey complete
          </div>
        </div>
      </div>

      {savedAlert && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Profile updated! Roadmap and skill gaps have been recalculated for {formData.targetCompany}.</span>
        </div>
      )}

      {/* Profile Form */}
      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Target Destination Calibration */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base pb-3 border-b border-slate-100 dark:border-slate-800">
            <Building2 className="w-5 h-5 text-brand-500" />
            <span>GPS Destination Calibration</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Dream Company
            </label>
            <select
              value={formData.targetCompany}
              onChange={(e) => setFormData({ ...formData, targetCompany: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
            >
              {COMPANIES.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.tier})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400 mt-1">
              Changes the hiring rubric, round formats, and gap weights.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Target Role
            </label>
            <select
              value={formData.targetRole}
              onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
            >
              {ROLES.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2">
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 text-xs space-y-2">
              <span className="font-semibold text-brand-600 dark:text-brand-400 block">
                Navigation Insight
              </span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                Changing your destination automatically triggers the <strong>Adaptive Recalculation Engine</strong> to prioritize new skills in your roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Academic & Personal Data */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base pb-3 border-b border-slate-100 dark:border-slate-800">
            <GraduationCap className="w-5 h-5 text-brand-500" />
            <span>Academic & Student Baseline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                College / University
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Degree
              </label>
              <input
                type="text"
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Branch
              </label>
              <input
                type="text"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Academic Year
              </label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Recent Graduate">Recent Graduate</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                CGPA
              </label>
              <input
                type="text"
                value={formData.cgpa}
                onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-all shadow-md shadow-brand-500/20"
            >
              <Save className="w-4 h-4" />
              <span>Save & Recalculate Route</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
