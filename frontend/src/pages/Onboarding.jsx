import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Search,
  Clock,
  Layers,
  Wand2,
  Check,
  ShieldCheck,
  Award
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { COMPANIES } from "../data/companies";
import { ROLES } from "../data/roles";
import confetti from "canvas-confetti";

export default function Onboarding() {
  const navigate = useNavigate();
  const { profile, updateProfile, regenerateMap } = useApp();

  const [step, setStep] = useState(1);
  const [searchCompany, setSearchCompany] = useState("");
  const [customCompany, setCustomCompany] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationStep, setCalculationStep] = useState(0);

  // Form states
  const [selectedCompany, setSelectedCompany] = useState(profile.targetCompany || "Google");
  const [selectedRole, setSelectedRole] = useState(profile.targetRole || "Software Engineer");
  const [experienceLevel, setExperienceLevel] = useState("Complete Beginner");
  const [dailyStudyTime, setDailyStudyTime] = useState("1 hour");
  const [knownSkills, setKnownSkills] = useState(["None"]);
  const [studentName, setStudentName] = useState(profile.name || "Akash");

  const companyList = [
    { id: "google", name: "Google", tier: "Tier 1 Product", icon: "G" },
    { id: "microsoft", name: "Microsoft", tier: "Tier 1 Product", icon: "MS" },
    { id: "amazon", name: "Amazon", tier: "Tier 1 Product", icon: "A" },
    { id: "apple", name: "Apple", tier: "Tier 1 Hardware/Software", icon: "" },
    { id: "nvidia", name: "NVIDIA", tier: "Tier 1 AI & Hardware", icon: "NV" },
    { id: "meta", name: "Meta", tier: "Tier 1 Social / Scale", icon: "M" },
    { id: "adobe", name: "Adobe", tier: "Tier 1 Creative Cloud", icon: "Ad" },
    { id: "ibm", name: "IBM", tier: "Enterprise Tech", icon: "IBM" },
    { id: "salesforce", name: "Salesforce", tier: "Cloud SaaS", icon: "SF" },
    { id: "infosys", name: "Infosys", tier: "IT Services", icon: "INF" },
    { id: "tcs", name: "TCS", tier: "IT Services", icon: "TCS" },
    { id: "accenture", name: "Accenture", tier: "Consulting & Tech", icon: ">" },
    { id: "startup", name: "High-Growth Startup", tier: "Scaleup", icon: "🚀" },
    { id: "unknown", name: "I don't know yet", tier: "Guided Path", icon: "❓" }
  ];

  const filteredCompanies = companyList.filter(c =>
    c.name.toLowerCase().includes(searchCompany.toLowerCase())
  );

  const toggleKnownSkill = (skill) => {
    if (skill === "None") {
      setKnownSkills(["None"]);
      return;
    }
    const withoutNone = knownSkills.filter(s => s !== "None");
    if (withoutNone.includes(skill)) {
      const filtered = withoutNone.filter(s => s !== skill);
      setKnownSkills(filtered.length === 0 ? ["None"] : filtered);
    } else {
      setKnownSkills([...withoutNone, skill]);
    }
  };

  const handleFinish = () => {
    setIsCalculating(true);

    const stepsMessages = [
      "Benchmarking destination against hiring rubrics...",
      `Configuring Zero-Knowledge mode for ${experienceLevel}...`,
      "Synthesizing 16-level visual Candy Crush progression...",
      "Your Career Map is ready! 🎉"
    ];

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCalculationStep(current);
      if (current >= stepsMessages.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          const finalCompany =
            selectedCompany === "other" && customCompany.trim()
              ? customCompany.trim()
              : selectedCompany === "unknown"
              ? "Google"
              : selectedCompany;

          const finalRole =
            selectedRole === "other" && customRole.trim()
              ? customRole.trim()
              : selectedRole;

          const updated = {
            ...profile,
            name: studentName,
            targetCompany: finalCompany,
            targetRole: finalRole,
            experienceLevel,
            dailyStudyTime,
            knownSkills,
            onboardingCompleted: true
          };

          updateProfile(updated);
          regenerateMap(updated);

          confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 } });
          navigate("/career-map");
        }, 800);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full">
        {/* Top Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Step {step} of 5 • Career GPS Calibration</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome to PlaceMap 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Let's build your personalized Zero-to-Hero preparation route
          </p>
        </div>

        {/* Calculating Loading Overlay */}
        {isCalculating ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-3xl mx-auto animate-pulse shadow-xl shadow-brand-500/30">
              🗺️
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-black text-white">
                PlaceMap is calculating your route...
              </h2>
              <p className="text-xs text-brand-400 font-semibold">
                {calculationStep === 0 && "Benchmarking destination against hiring rubrics..."}
                {calculationStep === 1 && `Configuring Zero-Knowledge mode for ${experienceLevel}...`}
                {calculationStep === 2 && "Synthesizing 16-level visual Candy Crush progression..."}
                {calculationStep >= 3 && "Your Career Map is ready! 🎉"}
              </p>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
              <div
                className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${((calculationStep + 1) / 4) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            {/* QUESTION 1: Dream Company */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                    Question 1 of 5
                  </span>
                  <h2 className="text-lg font-black text-white">
                    What's your dream company?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Choose your destination. We calibrate the entire route to this hiring bar.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search companies (e.g. Google, Apple, Amazon)..."
                    value={searchCompany}
                    onChange={(e) => setSearchCompany(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                {/* Company Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                  {filteredCompanies.map((c) => {
                    const isSelected = selectedCompany.toLowerCase() === c.name.toLowerCase();
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCompany(c.name)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                            : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-xs text-white">{c.name}</span>
                          <span className="text-[10px] opacity-60 font-mono">{c.icon}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 block truncate">{c.tier}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
                  >
                    <span>Next: Target Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* QUESTION 2: Target Role */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                    Question 2 of 5
                  </span>
                  <h2 className="text-lg font-black text-white">
                    What role do you want at {selectedCompany}?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Select your target engineering profile.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
                  {ROLES.map((r) => {
                    const isSelected = selectedRole.toLowerCase() === r.name.toLowerCase();
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setSelectedRole(r.name)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                            : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="font-bold text-xs text-white block truncate">{r.name}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5 block truncate">
                          {r.primaryFocus.split(',')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
                  >
                    <span>Next: Current Level</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* QUESTION 3: Zero-Knowledge / Current Level */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                    Question 3 of 5
                  </span>
                  <h2 className="text-lg font-black text-white">
                    How would you describe your current level?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Be honest! Zero previous coding experience is completely welcomed.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      id: "Complete Beginner",
                      title: "🌱 Complete Beginner (Starting from Level 0)",
                      desc: "I don't know coding or have never written software. Start me from absolute computer basics."
                    },
                    {
                      id: "Beginner",
                      title: "🐥 Beginner (Know some syntax)",
                      desc: "I know basic loops and variables in Python/C++, but haven't solved data structures yet."
                    },
                    {
                      id: "Intermediate",
                      title: "🚀 Intermediate (Built small projects, some DSA)",
                      desc: "I understand basic arrays, recursion, and have built a web or database project."
                    },
                    {
                      id: "Advanced",
                      title: "⭐ Advanced (Aiming for Tier-1 Placement)",
                      desc: "Solid DSA foundation; looking for company-specific mocks and system design."
                    }
                  ].map((lvl) => {
                    const isSelected = experienceLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setExperienceLevel(lvl.id)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                            : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="font-bold text-xs text-white">{lvl.title}</div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">{lvl.desc}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
                  >
                    <span>Next: Daily Study Time</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* QUESTION 4: Study Time */}
            {step === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                    Question 4 of 5
                  </span>
                  <h2 className="text-lg font-black text-white">
                    How much time can you study each day?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We'll pace your daily missions to fit your realistic schedule.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "30 minutes", label: "⏱️ 30 Minutes", desc: "Bite-sized daily sprint" },
                    { id: "1 hour", label: "🎯 1 Hour", desc: "Recommended steady pace" },
                    { id: "2 hours", label: "⚡ 2 Hours", desc: "Accelerated career sprint" },
                    { id: "3+ hours", label: "🔥 3+ Hours", desc: "Full-time placement prep" }
                  ].map((time) => {
                    const isSelected = dailyStudyTime === time.id;
                    return (
                      <button
                        key={time.id}
                        type="button"
                        onClick={() => setDailyStudyTime(time.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                            : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="font-bold text-xs text-white block">{time.label}</span>
                        <span className="text-[10px] text-slate-500 mt-1 block">{time.desc}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
                  >
                    <span>Next: Existing Knowledge</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* QUESTION 5: Known Skills & Name */}
            {step === 5 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                    Question 5 of 5
                  </span>
                  <h2 className="text-lg font-black text-white">
                    What do you already know?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Select any topics you are already familiar with. If none, click 'None'.
                  </p>
                </div>

                {/* Name field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Akash"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Python",
                    "C++",
                    "Java",
                    "JavaScript",
                    "HTML/CSS",
                    "SQL",
                    "Git/GitHub",
                    "None"
                  ].map((skill) => {
                    const isSelected = knownSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleKnownSkill(skill)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-brand-600 text-white shadow-sm"
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Route Summary Preview */}
                <div className="p-4 bg-brand-950/40 border border-brand-500/30 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-brand-300 uppercase tracking-widest font-bold block">
                      Target Route Calibrated:
                    </span>
                    <span className="font-extrabold text-white text-sm">
                      {selectedRole} @ {selectedCompany}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs">
                    {experienceLevel}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleFinish}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-emerald-500 hover:from-brand-400 hover:to-emerald-400 text-white font-extrabold text-xs shadow-xl shadow-brand-500/30 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate My Career Map</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
