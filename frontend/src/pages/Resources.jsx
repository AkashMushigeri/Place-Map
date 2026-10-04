import React, { useState } from "react";
import {
  BookOpen,
  ExternalLink,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  Bookmark
} from "lucide-react";
import { LEARNING_RESOURCES, RESOURCE_CATEGORIES } from "../data/resources";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = LEARNING_RESOURCES.filter(r => {
    const matchesCat = selectedCategory === "All" || r.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Canonical Sources
            </span>
            <span className="text-xs text-slate-400">• Zero-Fluff Verified Material</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Curated Learning Resources Vault
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Direct canonical links to gold-standard documentation, NeetCode patterns, system design blueprints, and textbooks.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by skill or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {RESOURCE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-brand-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 uppercase tracking-wider">
                  {res.category}
                </span>

                <span className="text-[11px] text-slate-400 font-medium">
                  {res.difficulty}
                </span>
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {res.title}
              </h3>

              <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                {res.skill} • {res.phase}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {res.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                <Clock className="w-3.5 h-3.5" /> {res.estimatedTime}
              </span>

              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400 font-semibold hover:underline"
              >
                <span>Open Resource</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
