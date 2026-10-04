import React, { useState } from "react";
import {
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Search,
  Building2,
  Copy
} from "lucide-react";
import { useApp } from "../context/AppContext";
import confetti from "canvas-confetti";

export default function ResumeAnalysis() {
  const { profile, resumeAnalysis, runResumeAnalysis } = useApp();

  const [resumeText, setResumeText] = useState(
    `AKASH - COMPUTER SCIENCE STUDENT
Email: akash@university.edu | GitHub: github.com/akash | LeetCode: leetcode.com/akash

EDUCATION:
B.Tech in Computer Science & Engineering (CGPA: 8.7/10) - 2026

TECHNICAL SKILLS:
Languages: Python, JavaScript, SQL, C++
Frameworks & Libraries: React, Node.js, Express
Databases: PostgreSQL, MongoDB, Redis
Core Concepts: Data Structures & Algorithms, OOP, Database Systems, Git

PROJECTS:
1. Real-Time Distributed Task Queue & Worker System
- Designed background task processor with Redis pub/sub and PostgreSQL.
- Implemented exponential backoff retries and dead-letter queues.
- Reduced failed task processing delays by 35% through connection pooling.

2. Campus Placement Management Portal
- Developed full-stack portal with React, Express, and PostgreSQL.
- Handled student resumes and job applications with JWT authentication.`
  );

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      runResumeAnalysis(resumeText);
      setIsAnalyzing(false);
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.7 } });
    }, 600);
  };

  const handleFileUploadMock = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Uploaded file "${file.name}". Parsing text for prototype evaluation.`);
    }
  };

  const analysis = resumeAnalysis || {
    overallScore: 78,
    scores: {
      technicalSkills: 80,
      projectStrength: 72,
      roleRelevance: 78,
      profileCompleteness: 85
    },
    matchedKeywords: ["Python", "JavaScript", "SQL", "React", "Node.js", "Redis", "PostgreSQL", "Git"],
    missingKeywords: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "System Design"],
    suggestions: [
      "Add quantifiable metrics to bullet points (e.g., 'Reduced query latency by 42%', 'Handled 5,000 daily active requests').",
      `Highlight algorithmic problem-solving or competitive programming profiles (LeetCode / Codeforces) for ${profile.targetCompany}.`,
      "Add modern deployment keywords: Docker, CI/CD pipelines, or Cloud deployment (AWS/GCP/Vercel).",
      `Calibrate your summary to explicitly target ${profile.targetRole} positions at top engineering organizations.`
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              ATS Calibrator
            </span>
            <span className="text-xs text-slate-400">• Calibrated for {profile.targetCompany}</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            ATS Resume Readiness Analyzer
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Quantify how well your resume matches the keyword thresholds, project metrics, and technical standards for <strong>{profile.targetRole}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shrink-0">
          <div className="text-right">
            <span className="text-slate-400 block font-medium">ATS Match Score</span>
            <span className="text-2xl font-black text-brand-600 dark:text-brand-400">
              {analysis.overallScore}%
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white text-xl shadow-md">
            📄
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Col: Resume Input & Upload */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-500" />
              Resume Text or Document
            </h2>

            {/* File Upload mock */}
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <span>Upload PDF</span>
              <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={handleFileUploadMock} />
            </label>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Paste Resume Text (or edit sample below):
              </label>
              <textarea
                rows={14}
                required
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-3.5 font-mono text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAnalyzing ? "Analyzing ATS Fit..." : `Analyze Against ${profile.targetCompany} Rubric`}</span>
            </button>
          </form>
        </div>

        {/* Right Col: Visual Metrics & Suggestions */}
        <div className="space-y-6">
          {/* Readiness Gauges */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-slate-800">
              Resume Readiness Dimensions
            </h2>

            <div className="space-y-3.5 text-xs">
              {[
                { label: "Technical Skills Alignment", score: analysis.scores.technicalSkills, color: "bg-brand-500" },
                { label: "Project Impact & Metrics", score: analysis.scores.projectStrength, color: "bg-emerald-500" },
                { label: "Role Relevance Match", score: analysis.scores.roleRelevance, color: "bg-purple-500" },
                { label: "Profile Completeness", score: analysis.scores.profileCompleteness, color: "bg-amber-500" }
              ].map((dim, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1 text-slate-600 dark:text-slate-400 font-medium">
                    <span>{dim.label}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{dim.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`${dim.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Missing Keywords Box */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Keyword Delta ({profile.targetCompany} Benchmark)
            </h3>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                  ✓ Matched High-Value Keywords:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(analysis.matchedKeywords || []).map((k, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px]"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 block mb-1">
                  △ Missing High-Priority Keywords:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(analysis.missingKeywords || []).map((k, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px]"
                    >
                      + {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actionable Suggestions */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-500" />
              Targeted ATS Improvement Suggestions
            </h3>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {analysis.suggestions.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
