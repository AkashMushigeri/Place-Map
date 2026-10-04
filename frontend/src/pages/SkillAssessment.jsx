import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Layers,
  HelpCircle
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { SKILLS_CATALOG, SKILL_CATEGORIES } from "../data/skills";

export default function SkillAssessment() {
  const { profile, updateSkillLevel, skillGapAnalysis } = useApp();
  const currentSkills = profile.skills || {};

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GPS Diagnostic Calibration</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            Skill Assessment Matrix
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Rate your real-world comfort across languages, DSA, and systems. PlaceMap recalibrates your gaps instantly.
          </p>
        </div>

        <Link
          to="/skill-gap"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all shrink-0"
        >
          <span>View Skill Gap Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {SKILL_CATEGORIES.map((cat) => {
          const catSkills = SKILLS_CATALOG.filter(s => s.category === cat.id);
          if (catSkills.length === 0) return null;

          return (
            <div
              key={cat.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                {cat.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catSkills.map((skill) => {
                  const currentLevel = currentSkills[skill.id] || "None";

                  return (
                    <div
                      key={skill.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          currentLevel === "Advanced"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                            : currentLevel === "Intermediate"
                            ? "bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                            : currentLevel === "Beginner"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                        }`}>
                          {currentLevel}
                        </span>
                      </div>

                      {/* Level Selection Radio Pills */}
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => {
                          const isSelected = currentLevel === level;
                          return (
                            <button
                              key={level}
                              type="button"
                              onClick={() => updateSkillLevel(skill.id, level)}
                              className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all text-center flex items-center justify-center gap-1 ${
                                isSelected
                                  ? "bg-brand-600 text-white font-bold shadow-sm shadow-brand-500/20"
                                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-slate-400"}`} />
                              <span>{level}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
