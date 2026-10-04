import React, { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  Lock,
  Clock,
  Award,
  Flame,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  Play
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function LevelModal({ level, isOpen, onClose }) {
  const { completeLevel, profile } = useApp();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completedMissions, setCompletedMissions] = useState(() => {
    return (level?.missions || []).reduce((acc, m) => {
      acc[m.id] = m.completed || level?.status === "completed";
      return acc;
    }, {});
  });

  if (!isOpen || !level) return null;

  const isCompleted = level.status === "completed";
  const isLocked = level.status === "locked";
  const isCurrent = level.status === "current";

  const toggleMission = (id) => {
    if (isLocked) return;
    setCompletedMissions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleQuizAnswer = (idx) => {
    if (quizSubmitted) return;
    setSelectedAnswer(idx);
    setQuizSubmitted(true);
  };

  const handleCompleteLevel = () => {
    completeLevel(level.levelNumber);
    onClose();
  };

  const allMissionsChecked = (level.missions || []).every(m => completedMissions[m.id]);
  const isBoss = level.type === "boss";
  const isFinal = level.type === "final";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative select-none">
        {/* Header Bar */}
        <div
          className={`p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between ${
            isBoss
              ? "bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent"
              : isFinal
              ? "bg-gradient-to-r from-emerald-500/10 via-brand-500/5 to-transparent"
              : "bg-slate-50/50 dark:bg-slate-900/50"
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                Level {level.levelNumber} • {level.zone}
              </span>
              {isBoss && (
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/30">
                  👑 Boss Level
                </span>
              )}
              {isFinal && (
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  🏆 Final Destination
                </span>
              )}
            </div>

            <h2 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
              {level.title}
            </h2>

            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-amber-500">{level.difficulty}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Est. {level.estimatedDays}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-500 font-bold">
                <Award className="w-3.5 h-3.5" /> +{level.xpReward} XP
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-xs">
          {/* Locked Notice if Level is Locked */}
          {isLocked && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center gap-3">
              <Lock className="w-5 h-5 shrink-0" />
              <div>
                <span className="font-bold block">Level Locked</span>
                <span className="text-[11px] opacity-90">
                  Complete Level {level.levelNumber - 1} to unlock this destination.
                </span>
              </div>
            </div>
          )}

          {/* Why this matters */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider text-[10px] block">
              Why this matters for {profile.targetCompany}
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
              {level.whyItMatters}
            </p>
          </div>

          {/* What you'll learn */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2.5">
              What You'll Master in this Level:
            </h3>
            <div className="space-y-1.5">
              {(level.learnItems || []).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Your Level Missions:
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">
                Check off to complete
              </span>
            </div>

            <div className="space-y-2">
              {(level.missions || []).map((m) => {
                const isChecked = completedMissions[m.id];
                return (
                  <div
                    key={m.id}
                    onClick={() => toggleMission(m.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                      isChecked
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                        : "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "border-slate-400"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`text-xs font-medium ${isChecked ? "line-through opacity-80" : ""}`}>
                        {m.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mini Checkpoint Question */}
          {level.checkpoint && (
            <div className="p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/60 space-y-3">
              <div className="flex items-center gap-1.5 text-brand-700 dark:text-brand-300 font-bold uppercase tracking-wider text-[10px]">
                <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
                <span>Level Checkpoint Quiz</span>
              </div>

              <p className="font-semibold text-slate-900 dark:text-white text-xs">
                {level.checkpoint.question}
              </p>

              <div className="space-y-1.5">
                {level.checkpoint.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === level.checkpoint.correctIndex;

                  let style = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300";
                  if (quizSubmitted) {
                    if (isCorrect) style = "bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold";
                    else if (isSelected && !isCorrect) style = "bg-red-500/20 border-red-500 text-red-600 dark:text-red-400";
                  } else if (isSelected) {
                    style = "border-brand-500 bg-brand-50 text-brand-700";
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuizAnswer(idx)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${style}`}
                    >
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {quizSubmitted && (
                <p className="text-[11px] text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                  <strong>Explanation:</strong> {level.checkpoint.explanation}
                </p>
              )}
            </div>
          )}

          {/* Reward preview */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-transparent border border-amber-500/20">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block text-xs">
                  Level Rewards:
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  +{level.xpReward} Career XP • Maintain {profile.streakDays || 7}-Day Streak
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-amber-500 font-black text-sm">+{level.xpReward} XP</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200 transition-colors"
          >
            Close
          </button>

          {!isCompleted ? (
            <button
              onClick={handleCompleteLevel}
              disabled={isLocked}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                isLocked
                  ? "bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed shadow-none"
                  : "bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-500 hover:to-emerald-500 text-white shadow-brand-500/20 hover:scale-105"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Complete Level & Claim +{level.xpReward} XP</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Level Completed!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
