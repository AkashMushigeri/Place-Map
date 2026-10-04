import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  GitPullRequestDraft,
  Map,
  CheckSquare,
  FolderGit2,
  BookOpen,
  Code2,
  MessageSquareCode,
  FileText,
  TrendingUp,
  Sparkles,
  Sun,
  Moon,
  ChevronRight,
  ShieldCheck,
  Building2,
  X,
  Compass,
  Flame,
  Settings
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function Sidebar({ mobileOpen, onCloseMobile }) {
  const { profile, stats, theme, toggleTheme, setIsGuideDrawerOpen, currentLevel, careerXP } = useApp();

  const navItems = [
    { to: "/career-map", icon: Compass, label: "Career Map", highlight: true, badge: currentLevel ? `Lvl ${currentLevel.levelNumber}` : "START" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/today", icon: Flame, label: "Today's Mission" },
    { to: "/profile", icon: User, label: "My Profile" },
    { to: "/skill-gap", icon: GitPullRequestDraft, label: "Skill Gap" },
    { to: "/roadmap", icon: Map, label: "Phase Roadmap" },
    { to: "/tasks", icon: CheckSquare, label: "Daily Tasks", badge: stats.totalDaily - stats.completedDaily },
    { to: "/projects", icon: FolderGit2, label: "Projects" },
    { to: "/resources", icon: BookOpen, label: "Resources" },
    { to: "/dsa", icon: Code2, label: "DSA Module" },
    { to: "/interview", icon: MessageSquareCode, label: "Interview" },
    { to: "/resume", icon: FileText, label: "Resume" },
    { to: "/progress", icon: TrendingUp, label: "Progress" },
    { to: "/settings", icon: Settings, label: "Settings" },
    { to: "/guide", icon: Sparkles, label: "AI Career Guide" }
  ];

  const content = (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 text-slate-300 w-64 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <NavLink to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            🗺️
          </div>
          <div>
            <div className="font-bold text-white text-lg tracking-tight flex items-center gap-1.5">
              PlaceMap
              <span className="text-[10px] font-semibold bg-brand-500/20 text-brand-400 border border-brand-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                MVP
              </span>
            </div>
            <div className="text-xs text-slate-400">Career GPS Engine</div>
          </div>
        </NavLink>
        {mobileOpen && (
          <button
            onClick={onCloseMobile}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Target Destination & Level Card */}
      <div className="px-3 pt-3">
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-brand-400" /> Target Goal
            </span>
            <span className="text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
              🔥 {profile.streakDays || 7}d
            </span>
          </div>
          <div>
            <div className="font-bold text-white truncate">{profile.targetRole}</div>
            <div className="text-brand-300 font-medium truncate flex items-center gap-1">
              <span>@{profile.targetCompany}</span>
            </div>
          </div>

          {/* Active Level Badge */}
          <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-700/40 flex items-center justify-between">
            <div className="truncate">
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">Current Node</span>
              <span className="text-xs font-bold text-white truncate block">
                Lvl {currentLevel?.levelNumber || 1}: {currentLevel?.title || "Foundations"}
              </span>
            </div>
            <span className="text-[11px] font-extrabold text-brand-400 shrink-0">
              ⚡{careerXP || 1450}
            </span>
          </div>

          {/* Progress bar */}
          <div className="pt-1 border-t border-slate-700/50">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Preparation:</span>
              <span className="font-bold text-brand-400">{stats.overallPreparation}%</span>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${stats.overallPreparation}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onCloseMobile}
              className={({ isActive }) => `
                flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActive
                  ? "bg-brand-600 text-white shadow-sm shadow-brand-500/20"
                  : item.highlight
                  ? "text-brand-300 hover:bg-brand-500/10 hover:text-brand-200"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${item.highlight ? "text-brand-400" : ""}`} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span className={`px-1.5 py-0.5 text-[10px] font-semibold rounded-full ${
                  item.highlight
                    ? "bg-brand-500/30 text-brand-200 border border-brand-400/40"
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                }`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* AI Quick Callout */}
      <div className="p-3">
        <button
          onClick={() => {
            if (onCloseMobile) onCloseMobile();
            setIsGuideDrawerOpen(true);
          }}
          className="w-full text-left bg-gradient-to-r from-brand-900/60 to-indigo-900/60 border border-brand-500/30 hover:border-brand-500/60 rounded-xl p-3 transition-all group"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-300 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 group-hover:rotate-12 transition-transform" />
            Quick AI Mentor
          </div>
          <div className="text-[11px] text-slate-300 line-clamp-1">
            "What should I learn today?"
          </div>
          <div className="mt-1 flex items-center gap-1 text-[10px] text-brand-400 font-medium">
            Open Chat Drawer <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </div>

      {/* User & Settings Footer */}
      <div className="p-3 border-t border-slate-800 flex items-center justify-between">
        <NavLink
          to="/profile"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 overflow-hidden hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-brand-400">
            {profile.name?.charAt(0) || "A"}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-200 truncate">{profile.name}</div>
            <div className="text-[10px] text-slate-400 truncate">{profile.branch || "CS"}</div>
          </div>
        </NavLink>
        <div className="flex items-center gap-1">
          <NavLink
            to="/settings"
            onClick={onCloseMobile}
            title="Settings"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4" />
          </NavLink>
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 z-30">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onCloseMobile} />
          <div className="relative z-10 h-full">{content}</div>
        </div>
      )}
    </>
  );
}
