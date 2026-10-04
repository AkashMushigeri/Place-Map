import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Building2, ArrowRight, ArrowLeft, Compass, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";
import { COMPANIES } from "../data/companies";

export default function CompanySelectionPage() {
  const navigate = useNavigate();
  const { profile, updateProfile } = useApp();
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(profile.targetCompany || "Google");

  const filteredCompanies = COMPANIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (companyName) => {
    setSelectedCompany(companyName);
    updateProfile({ targetCompany: companyName });
  };

  const handleContinue = () => {
    navigate("/role-selection");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Target Calibration</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Select Your Dream Company
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
            PlaceMap benchmarks your visual career map directly against the hiring patterns of your chosen destination.
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all shrink-0"
        >
          <span>Continue to Roles</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search companies (Google, Amazon, Microsoft, NVIDIA, Infosys)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 shadow-sm"
        />
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCompanies.map((c) => {
          const isSelected = selectedCompany.toLowerCase() === c.name.toLowerCase();
          return (
            <div
              key={c.id}
              onClick={() => handleSelect(c.name)}
              className={`p-5 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-brand-50/70 dark:bg-brand-950/40 border-brand-500 shadow-md ring-2 ring-brand-500/30"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 font-black text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center">
                    {c.logoText || c.name.slice(0, 2)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {c.tier}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-1">
                  {c.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {c.tagline || c.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  DSA Weight: {Math.round((c.hiringBarWeights?.dsa || 0.35) * 100)}%
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
