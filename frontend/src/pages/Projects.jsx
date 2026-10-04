import React, { useState } from "react";
import {
  FolderGit2,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Building2,
  Code2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { PROJECTS_CATALOG } from "../data/projects";
import confetti from "canvas-confetti";

export default function Projects() {
  const { profile, updateProfile } = useApp();
  const [levelFilter, setLevelFilter] = useState("all");
  const [expandedProj, setExpandedProj] = useState("proj-1");

  const filteredProjects = PROJECTS_CATALOG.filter(p => {
    if (levelFilter !== "all" && p.level.toLowerCase() !== levelFilter.toLowerCase()) {
      return false;
    }
    return true;
  });

  const handleSelectProject = (project) => {
    const existing = profile.projects || [];
    if (!existing.some(p => p.name === project.title)) {
      updateProfile({
        projects: [
          ...existing,
          {
            id: project.id,
            name: project.title,
            description: project.shortDesc,
            technologies: project.skills.join(", "),
            difficulty: project.level
          }
        ]
      });
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      alert(`"${project.title}" has been linked to your portfolio! Project score updated.`);
    } else {
      alert(`"${project.title}" is already in your portfolio.`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Portfolio Engineering
            </span>
            <span className="text-xs text-slate-400">• Calibrated for {profile.targetRole}</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Role-Calibrated Project Recommendations
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Generic to-do apps get ignored. These production-calibrated projects demonstrate concurrency, message queues, and real-world system architecture.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shrink-0">
          <span className="text-slate-500 dark:text-slate-400 block font-medium">Portfolio Status:</span>
          <span className="font-bold text-slate-900 dark:text-white text-sm">
            {profile.projects?.length || 1} Projects Linked
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        {[
          { id: "all", label: "All Levels" },
          { id: "beginner", label: "Beginner" },
          { id: "intermediate", label: "Intermediate" },
          { id: "advanced", label: "Advanced" },
          { id: "capstone", label: "Capstone" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setLevelFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              levelFilter === tab.id
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => {
          const isExpanded = expandedProj === project.id;
          const isLinked = profile.projects?.some(p => p.name === project.title);

          return (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              {/* Project Title Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        project.level === "Capstone"
                          ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                          : project.level === "Advanced"
                          ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                          : project.level === "Intermediate"
                          ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {project.level}
                    </span>
                    {isLinked && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Linked to Portfolio
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleSelectProject(project)}
                    disabled={isLinked}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isLinked
                        ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 cursor-default"
                        : "bg-brand-600 hover:bg-brand-500 text-white shadow-sm shadow-brand-500/20"
                    }`}
                  >
                    {isLinked ? "In Portfolio" : "Add to Portfolio"}
                  </button>

                  <button
                    onClick={() => setExpandedProj(isExpanded ? null : project.id)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                    title={isExpanded ? "Collapse milestones" : "Expand milestones"}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Technologies & Why */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Tech Stack & Skills:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80">
                  <span className="font-semibold text-brand-600 dark:text-brand-400 block mb-1">
                    Why this project wins interviews:
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                    {project.whyThisProject}
                  </p>
                </div>
              </div>

              {/* Milestones & Architecture Pipeline */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in fade-in duration-150">
                  {/* Architecture blueprint */}
                  <div className="p-3 bg-brand-50/50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900/50 rounded-xl text-xs">
                    <span className="font-bold text-brand-700 dark:text-brand-300 block mb-1">
                      System Architecture Flow:
                    </span>
                    <code className="font-mono text-slate-800 dark:text-slate-200 text-[11px] block overflow-x-auto whitespace-nowrap">
                      {project.architecture}
                    </code>
                  </div>

                  {/* 6-step milestones list */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                      Implementation Milestones:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.milestones.map((m) => (
                        <div
                          key={m.step}
                          className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs"
                        >
                          <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                            <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center text-[10px]">
                              {m.step}
                            </span>
                            <span>{m.title}</span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
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
