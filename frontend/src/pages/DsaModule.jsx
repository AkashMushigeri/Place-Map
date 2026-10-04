import React, { useState } from "react";
import {
  Code2,
  CheckCircle2,
  Circle,
  ExternalLink,
  Flame,
  Search,
  Filter,
  Sparkles,
  Award,
  Building2
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { DSA_PROBLEMS, DSA_TOPICS } from "../data/dsaProblems";

export default function DsaModule() {
  const { dsaSolved, toggleDsaProblem, stats, profile } = useApp();
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const totalProblems = DSA_PROBLEMS.length;
  const solvedCount = dsaSolved.length;
  const remainingCount = totalProblems - solvedCount;

  // Filter problems
  const filteredProblems = DSA_PROBLEMS.filter(p => {
    const matchesTopic = selectedTopic === "All" || p.topic.toLowerCase() === selectedTopic.toLowerCase();
    const matchesDiff = difficultyFilter === "All" || p.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.pattern.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesDiff && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Algorithmic Core
            </span>
            <span className="text-xs text-slate-400">• Round 1 Gatekeeper Engine</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Pattern-Based DSA Mastery Track
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            {profile.targetCompany} evaluates algorithmic speed and boundary robustness. Practice the 15 standard archetypes below.
          </p>
        </div>

        {/* Global DSA Stats */}
        <div className="flex items-center gap-6 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 text-xs">
          <div>
            <span className="text-slate-400 block font-medium">Solved</span>
            <span className="text-xl font-black text-emerald-500">{solvedCount}</span>
          </div>
          <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
            <span className="text-slate-400 block font-medium">Remaining</span>
            <span className="text-xl font-black text-slate-700 dark:text-slate-300">{remainingCount}</span>
          </div>
          <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
            <span className="text-slate-400 block font-medium">DSA Mastery</span>
            <span className="text-xl font-black text-brand-600 dark:text-brand-400">{stats.dsaPercentage}%</span>
          </div>
        </div>
      </div>

      {/* 15 Topics Pills */}
      <div>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          15 Core Algorithmic Topics:
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTopic("All")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedTopic === "All"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white"
            }`}
          >
            All Topics
          </button>
          {DSA_TOPICS.map((topic) => {
            const topicProblems = DSA_PROBLEMS.filter(p => p.topic === topic);
            const topicSolved = topicProblems.filter(p => dsaSolved.includes(p.id)).length;
            const isAllSolved = topicProblems.length > 0 && topicSolved === topicProblems.length;

            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedTopic === topic
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <span>{topic}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isAllSolved
                    ? "bg-emerald-500/20 text-emerald-400 font-bold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}>
                  {topicSolved}/{topicProblems.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        {/* Difficulty Filter */}
        <div className="flex items-center gap-2">
          {["All", "Easy", "Medium", "Hard"].map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                difficultyFilter === diff
                  ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search problems, patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Problems List Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">Status</th>
                <th className="py-3.5 px-4">Problem Title & Archetype Pattern</th>
                <th className="py-3.5 px-4">Topic</th>
                <th className="py-3.5 px-4">Difficulty</th>
                <th className="py-3.5 px-4">Company Tags</th>
                <th className="py-3.5 px-4 text-right">Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {filteredProblems.map((prob) => {
                const isSolved = dsaSolved.includes(prob.id);

                return (
                  <tr
                    key={prob.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                    onClick={() => toggleDsaProblem(prob.id)}
                  >
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDsaProblem(prob.id);
                        }}
                        className="text-slate-400 hover:text-brand-500"
                      >
                        {isSolved ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                        )}
                      </button>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900 dark:text-white">
                        {prob.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                        Pattern: {prob.pattern}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-medium text-slate-600 dark:text-slate-300">
                      {prob.topic}
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`font-bold px-2 py-0.5 rounded-full text-[10px] uppercase ${
                          prob.difficulty === "Easy"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : prob.difficulty === "Medium"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            : "bg-red-500/10 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {prob.difficulty}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {prob.companies.map((c, i) => (
                          <span
                            key={i}
                            className={`px-1.5 py-0.5 rounded text-[10px] ${
                              c.toLowerCase() === profile.targetCompany.toLowerCase()
                                ? "bg-brand-500/20 text-brand-400 font-bold border border-brand-500/30"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                            }`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={`https://leetcode.com/problemset/all/?search=${encodeURIComponent(prob.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                      >
                        <span>LeetCode</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
