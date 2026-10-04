import React, { useState, useRef, useEffect } from "react";
import RoadmapNode from "./RoadmapNode";
import LevelModal from "./LevelModal";
import {
  Compass,
  Building2,
  Award,
  Sparkles,
  Flame,
  ArrowUp,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function CareerMap() {
  const { careerMap, currentLevel, profile, careerXP, stats } = useApp();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const currentRef = useRef(null);

  const levels = careerMap?.levels || [];

  // Group levels by zone for visual milestone separators
  const zones = [
    { name: "Offer Summit", icon: "🏆", bg: "from-yellow-500/10 to-amber-500/5", border: "border-amber-500/30" },
    { name: "Engineering Metropolis", icon: "🏙️", bg: "from-purple-500/10 to-indigo-500/5", border: "border-purple-500/30" },
    { name: "Algorithmic Peaks", icon: "🏔️", bg: "from-blue-500/10 to-cyan-500/5", border: "border-blue-500/30" },
    { name: "Foundations Valley", icon: "🏞️", bg: "from-emerald-500/10 to-teal-500/5", border: "border-emerald-500/30" }
  ];

  // Alternating S-curve node positioning: center, left, center, right...
  const getPositionForIndex = (index) => {
    const mod = index % 4;
    if (mod === 0) return "center";
    if (mod === 1) return "left";
    if (mod === 2) return "center";
    return "right";
  };

  // Scroll to current level on initial load
  const scrollToCurrentLevel = () => {
    currentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    // Delay slightly to let layout render
    const t = setTimeout(scrollToCurrentLevel, 300);
    return () => clearTimeout(t);
  }, []);

  // Display levels reversed so Start (Level 1) is at bottom, climbing up to Dream Company at the top!
  const reversedLevels = [...levels].reverse();

  return (
    <div className="relative pb-24 animate-in fade-in duration-300">
      {/* Sticky Progress & Navigation Bar */}
      <div className="sticky top-16 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              🗺️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-base">
                  Route to {profile.targetCompany}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase">
                  {stats.roadmapProgress}% Traveled
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Target Role: <strong>{profile.targetRole}</strong> • Level {currentLevel?.levelNumber || 1} of {levels.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* XP badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-black">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{careerXP} XP</span>
            </div>

            {/* Jump to Current Button */}
            <button
              onClick={scrollToCurrentLevel}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Current Level</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Candy-Crush Vertical Level Map */}
      <div className="max-w-xl mx-auto relative px-4">
        {/* Background S-curve SVG road */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-2 bg-gradient-to-t from-emerald-500 via-brand-500 to-amber-500 rounded-full opacity-30 h-full" />
        </div>

        {/* Level Nodes Climbing upward from Start to Dream Company */}
        <div className="relative space-y-4">
          {reversedLevels.map((lvl, index) => {
            const isCurrentNode = lvl.id === currentLevel?.id;
            const originalIndex = lvl.levelNumber - 1;
            const position = getPositionForIndex(originalIndex);

            // Check if this level is the start of a new zone
            const isZoneBoundary =
              index === 0 ||
              reversedLevels[index - 1]?.zone !== lvl.zone;

            return (
              <React.Fragment key={lvl.id}>
                {/* Zone Milestone Banner */}
                {isZoneBoundary && (
                  <div className="my-8 text-center relative z-10 animate-in fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 text-xs font-extrabold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lvl.zone}</span>
                    </div>
                  </div>
                )}

                {/* Level Node */}
                <div ref={isCurrentNode ? currentRef : null}>
                  <RoadmapNode
                    level={lvl}
                    position={position}
                    onSelect={(level) => setSelectedLevel(level)}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Interactive Level Modal */}
      <LevelModal
        level={selectedLevel}
        isOpen={Boolean(selectedLevel)}
        onClose={() => setSelectedLevel(null)}
      />
    </div>
  );
}
