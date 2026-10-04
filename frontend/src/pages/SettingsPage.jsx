import React, { useState } from "react";
import {
  Settings,
  Clock,
  Key,
  RotateCcw,
  Sun,
  Moon,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function SettingsPage() {
  const { profile, updateProfile, theme, toggleTheme, resetAllProgress, careerXP } = useApp();
  const [dailyTime, setDailyTime] = useState(profile.dailyStudyTime || "1 hour");
  const [expLevel, setExpLevel] = useState(profile.experienceLevel || "Complete Beginner");
  const [savedAlert, setSavedAlert] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      dailyStudyTime: dailyTime,
      experienceLevel: expLevel
    });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Reset all levels, XP, and tasks to prototype defaults?")) {
      resetAllProgress();
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-brand-500/10 text-brand-500 border border-brand-500/20 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Settings & Preferences
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize pacing, study habits, and AI model parameters
            </p>
          </div>
        </div>
      </div>

      {savedAlert && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Settings saved! Your Career Map pacing has been updated.</span>
        </div>
      )}

      {/* Main Settings Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Study Time & Level */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 text-xs">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-brand-500" />
            <span>Pacing & Experience Level</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Daily Study Budget
              </label>
              <select
                value={dailyTime}
                onChange={(e) => setDailyTime(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              >
                <option value="30 minutes">30 minutes / day</option>
                <option value="1 hour">1 hour / day (Recommended)</option>
                <option value="2 hours">2 hours / day</option>
                <option value="3+ hours">3+ hours / day</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Experience Level
              </label>
              <select
                value={expLevel}
                onChange={(e) => setExpLevel(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
              >
                <option value="Complete Beginner">Complete Beginner (Level 0)</option>
                <option value="Beginner">Beginner (Basic Syntax)</option>
                <option value="Intermediate">Intermediate (DSA & Projects)</option>
                <option value="Advanced">Advanced (Placement Ready)</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all"
            >
              Save Pacing Preferences
            </button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-slate-800">
            Appearance & Interface Theme
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                Color Theme
              </span>
              <span className="text-[11px] text-slate-400">
                Currently using {theme === "dark" ? "Dark Theme" : "Light Theme"}
              </span>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-600" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Reset Prototype Data */}
        <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 text-xs">
          <h2 className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider pb-3 border-b border-red-100 dark:border-red-900/30">
            Reset Data & Re-Onboard
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                Reset Career Progress
              </span>
              <span className="text-[11px] text-slate-400">
                Clears all completed levels, XP ({careerXP} XP), and restarts from Level 1.
              </span>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-bold text-xs transition-colors"
            >
              Reset All
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
