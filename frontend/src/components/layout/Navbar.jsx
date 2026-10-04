import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sparkles, Flame, Building2, Sun, Moon, ArrowRight } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function Navbar({ onOpenMobile }) {
  const { profile, stats, theme, toggleTheme, setIsGuideDrawerOpen } = useApp();
  const location = useLocation();

  // Map route to page title
  const pageTitles = {
    "/career-map": "Visual Career Road & Level Progression",
    "/today": "Today's Focused Route & Daily Mission",
    "/settings": "Preferences & Pacing Configuration",
    "/company-selection": "Target Company Benchmarks",
    "/role-selection": "Target Engineering Role Profile",
    "/dashboard": "Preparation Command Center",
    "/profile": "Student Diagnostic Profile",
    "/skill-gap": "Visual Skill Gap Matrix",
    "/roadmap": "Adaptive Preparation Roadmap",
    "/tasks": "Daily Action Sprint",
    "/projects": "Company-Calibrated Projects",
    "/resources": "Curated Learning Vault",
    "/dsa": "Pattern-Based DSA Mastery",
    "/interview": "Simulated Technical & Behavioral Mocks",
    "/resume": "ATS Resume Readiness Checker",
    "/progress": "Placement Readiness Analytics",
    "/guide": "PlaceMap Autonomous Career Guide",
    "/career-guide": "PlaceMap Autonomous Career Guide",
    "/assessment": "Skill Self-Assessment Matrix"
  };

  const currentTitle = pageTitles[location.pathname] || "Career GPS";

  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobile}
            className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
              {currentTitle}
            </h1>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Goal:</span>
              <span className="font-semibold text-brand-600 dark:text-brand-400">
                {profile.targetRole}
              </span>
              <span>at</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {profile.targetCompany}
              </span>
            </div>
          </div>
        </div>

        {/* Right: GPS Status, Streak, AI Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{profile.streakDays || 4} Day Streak</span>
          </div>

          {/* Quick AI Guide Drawer button */}
          <button
            onClick={() => setIsGuideDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs font-medium shadow-sm shadow-brand-500/25 transition-all"
            title="Ask AI Career Guide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Ask AI Guide</span>
          </button>

          {/* Theme Toggle (Mobile & Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
