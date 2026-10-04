import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Briefcase, ArrowRight, ArrowLeft, Compass, CheckCircle2 } from "lucide-react";
import { useApp } from "../context/AppContext";
import { ROLES } from "../data/roles";

export default function RoleSelectionPage() {
  const navigate = useNavigate();
  const { profile, updateProfile, regenerateMap } = useApp();
  const [selectedRole, setSelectedRole] = useState(profile.targetRole || "Software Engineer");

  const handleSelect = (roleName) => {
    setSelectedRole(roleName);
    updateProfile({ targetRole: roleName });
  };

  const handleFinish = () => {
    regenerateMap();
    navigate("/career-map");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Target Role at {profile.targetCompany}</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Choose Your Engineering Profile
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
            Every role shapes the skills, milestones, and boss levels generated in your Career Map.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/company-selection"
            className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200"
          >
            Back
          </Link>
          <button
            onClick={handleFinish}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
          >
            <span>Update Career Map</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Role Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROLES.map((r) => {
          const isSelected = selectedRole.toLowerCase() === r.name.toLowerCase();
          return (
            <div
              key={r.id}
              onClick={() => handleSelect(r.name)}
              className={`p-5 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-brand-50/70 dark:bg-brand-950/40 border-brand-500 shadow-md ring-2 ring-brand-500/30"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {r.shortTitle}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  {r.description}
                </p>

                <div className="text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                  Focus: {r.primaryFocus}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  Calibrated for {profile.targetCompany}
                </span>
                <span className={`font-bold ${isSelected ? "text-brand-600 dark:text-brand-400" : "text-slate-400"}`}>
                  {isSelected ? "Selected ✓" : "Select"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
