import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Target,
  BarChart2,
  MapPin,
  Flame,
  Award,
  Layers,
  Code2,
  Brain,
  Building2,
  ChevronRight
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Landing() {
  const navigate = useNavigate();
  const { profile, resetAllProgress, loadSampleProfile } = useApp();

  const workflowSteps = [
    {
      step: "01",
      title: "Set Your Goal",
      desc: "Select your dream company (Google, Amazon, Microsoft, NVIDIA, etc.) and target role. PlaceMap calibrates the exact engineering bar.",
      icon: Target
    },
    {
      step: "02",
      title: "Analyze Your Skills",
      desc: "Input your programming languages, core CS, frameworks, and project experience to establish your current geographic location.",
      icon: Layers
    },
    {
      step: "03",
      title: "Find Your Gaps",
      desc: "Our engine computes mathematical delta scores (P0 Showstoppers, P1 Differentiators) against the company's hiring rubric.",
      icon: BarChart2
    },
    {
      step: "04",
      title: "Follow Your Roadmap",
      desc: "Execute a dynamic, phased preparation route with daily tasks that adapt to your speed and skill mastery.",
      icon: MapPin
    },
    {
      step: "05",
      title: "Become Placement Ready",
      desc: "Simulate company-specific coding rounds, mock interviews, and ATS resume verification until you reach the offer bar.",
      icon: Award
    }
  ];

  const featuredCompanies = [
    "Google", "Microsoft", "Amazon", "NVIDIA", "Meta", "Apple", "Infosys", "TCS", "Accenture", "Deloitte"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-brand-500/20">
              🗺️
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight">PlaceMap</span>
              <span className="ml-2 text-[10px] font-semibold bg-brand-500/20 text-brand-400 border border-brand-500/30 px-2 py-0.5 rounded-full uppercase">
                Prototype MVP
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/career-map"
              className="text-sm font-semibold text-brand-400 hover:text-brand-300 px-3 py-2 rounded-lg hover:bg-brand-500/10 transition-colors hidden sm:inline"
            >
              🗺️ Career Map
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white text-sm font-semibold shadow-md shadow-brand-500/20 transition-all hover:shadow-brand-500/40"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-800">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-semibold mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Knowledge to Placement Ready</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Navigate Your Career. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-sky-300">
              Reach Your Dream Company.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Start from complete zero. Choose Google, Amazon, Microsoft, or NVIDIA. PlaceMap guides you step-by-step through a visual level progression with daily missions and AI mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-base shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all group"
            >
              <span>Start Free Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/career-map"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-base transition-colors"
            >
              <span>Explore Career Map</span>
            </Link>
          </div>

          {/* Quick Pillars Badge */}
          <div className="mt-8 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Candy-Crush Level Progression
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Duolingo Daily Streaks & XP
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ChatGPT-Style Career Guide
            </span>
          </div>

          {/* Miniature Candy Crush Path Preview */}
          <div className="mt-12 max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl text-left relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white">🗺️ Interactive Visual Road Preview</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300">
                  Google Software Engineer
                </span>
              </div>
              <Link to="/career-map" className="text-xs font-semibold text-brand-400 hover:underline flex items-center gap-1">
                <span>Play Live Map</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Visual Level Nodes Flow */}
            <div className="py-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 relative">
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-950/80 border border-emerald-500/30 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm mb-1.5">
                  ✓
                </div>
                <span className="text-[10px] font-extrabold text-emerald-400">LEVEL 1</span>
                <span className="text-xs font-bold text-white">Zero Coding</span>
                <span className="text-[10px] text-slate-400">Completed</span>
              </div>

              <div className="hidden sm:block text-slate-600 font-bold">➔</div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-brand-950/60 border-2 border-brand-500 shadow-lg shadow-brand-500/20 w-full sm:w-auto ring-4 ring-brand-500/20 animate-pulse">
                <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-black text-sm mb-1.5 shadow-md">
                  ★
                </div>
                <span className="text-[10px] font-extrabold text-brand-300">LEVEL 4</span>
                <span className="text-xs font-bold text-white">C++ Basics</span>
                <span className="text-[10px] text-brand-400 font-semibold">Active Right Now</span>
              </div>

              <div className="hidden sm:block text-slate-600 font-bold">➔</div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800 w-full sm:w-auto opacity-75">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 flex items-center justify-center font-black text-sm mb-1.5">
                  🔒
                </div>
                <span className="text-[10px] font-extrabold text-slate-400">LEVEL 7</span>
                <span className="text-xs font-bold text-slate-300">DSA Patterns</span>
                <span className="text-[10px] text-slate-500">Upcoming</span>
              </div>

              <div className="hidden sm:block text-slate-600 font-bold">➔</div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm mb-1.5">
                  👑
                </div>
                <span className="text-[10px] font-extrabold text-amber-400">LEVEL 10</span>
                <span className="text-xs font-bold text-white">Boss Project</span>
                <span className="text-[10px] text-amber-300 font-medium">+500 XP Milestone</span>
              </div>

              <div className="hidden sm:block text-slate-600 font-bold">➔</div>

              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-lg mb-1.5">
                  🏢
                </div>
                <span className="text-[10px] font-extrabold text-indigo-300">FINAL SUMMIT</span>
                <span className="text-xs font-bold text-white">Google Offer</span>
                <span className="text-[10px] text-indigo-400 font-semibold">Placement Ready</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Adaptive based on your experience level: Beginner to Advanced
              </span>
              <Link to="/career-map" className="text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1">
                Enter The Map <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Companies Ticker */}
      <section className="py-10 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
            Calibrated for top company hiring rounds
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {featuredCompanies.map((c) => (
              <span
                key={c}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold hover:border-slate-700 hover:text-slate-200 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Workflow Section */}
      <section id="how-it-works" className="py-24 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">
              The Navigation Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Where You Are to Where You Want to Be
            </h3>
            <p className="text-slate-400 text-base mt-4">
              PlaceMap doesn't give you a chaotic list of random tutorials. It acts as an autonomous navigation system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-brand-500/50 transition-all hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-brand-500/40 group-hover:text-brand-400 transition-colors">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core GPS Questions */}
          <div className="mt-16 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-400" />
              The Five Career GPS Questions Answered Instantly:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-sm">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <span className="text-brand-400 font-bold block text-xs mb-1">1. Where am I?</span>
                <span className="text-slate-300 text-xs">Diagnostic skill baseline across 8 tech dimensions.</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <span className="text-brand-400 font-bold block text-xs mb-1">2. Where do I go?</span>
                <span className="text-slate-300 text-xs">Precise dream company tier & engineering role bar.</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <span className="text-brand-400 font-bold block text-xs mb-1">3. What is missing?</span>
                <span className="text-slate-300 text-xs">P0 showstopper & P1 differentiator skill gaps.</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <span className="text-brand-400 font-bold block text-xs mb-1">4. How do I close it?</span>
                <span className="text-slate-300 text-xs">Milestone-gated adaptive roadmap & projects.</span>
              </div>
              <div className="p-3 bg-brand-950/40 rounded-xl border border-brand-500/30">
                <span className="text-brand-300 font-bold block text-xs mb-1">5. What next?</span>
                <span className="text-slate-200 text-xs">Today's curated high-impact action sprint.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Launch CTA */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl shadow-brand-500/20">
            🗺️
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to Navigate Your Career to Your Dream Company?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Build your personalized prototype roadmap in under 2 minutes. Free and calibrated for students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/onboarding"
              className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-xl shadow-brand-500/30 transition-all hover:scale-105"
            >
              Start Free Onboarding
            </Link>
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-base transition-colors"
            >
              Open Active Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>🗺️ PlaceMap — Prototype MVP</span>
            <span className="text-slate-700">•</span>
            <span>AI-Powered Company-Specific Career Preparation</span>
          </div>
          <div>
            Built for engineering students aiming for Tier-1 and top technology companies.
          </div>
        </div>
      </footer>
    </div>
  );
}
