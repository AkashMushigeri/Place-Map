import React, { useState } from "react";
import {
  MessageSquareCode,
  Sparkles,
  Bot,
  User,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Send,
  Award,
  Layers,
  Code2,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { INTERVIEW_TRACKS, INTERVIEW_QUESTIONS } from "../data/interviewQuestions";
import { aiService } from "../services/aiService";
import confetti from "canvas-confetti";

export default function InterviewModule() {
  const { profile, addInterviewSession, interviewHistory, stats } = useApp();
  const [activeTrack, setActiveTrack] = useState("technical");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [studentAnswer, setStudentAnswer] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestions = INTERVIEW_QUESTIONS[activeTrack] || INTERVIEW_QUESTIONS.technical;
  const currentQuestion = currentQuestions[questionIndex] || currentQuestions[0];

  const handleTrackChange = (trackId) => {
    setActiveTrack(trackId);
    setQuestionIndex(0);
    setStudentAnswer("");
    setEvaluation(null);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (!studentAnswer.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const result = aiService.evaluateInterviewAnswer(
        currentQuestion,
        studentAnswer,
        profile.targetRole,
        profile.targetCompany
      );
      setEvaluation(result);
      setIsSubmitting(false);

      // Save to interview history
      addInterviewSession({
        track: activeTrack,
        question: currentQuestion.question,
        score: result.score,
        verdict: result.verdict
      });

      if (result.score >= 7) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      }
    }, 500);
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prev) => (prev + 1) % currentQuestions.length);
    setStudentAnswer("");
    setEvaluation(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Live Mock Simulation
            </span>
            <span className="text-xs text-slate-400">• Calibrated for {profile.targetCompany} Rubric</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            AI Mock Interview Simulator
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Experience realistic technical grilling, project deep dives, and behavioral STAR evaluations with instant rubric feedback.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shrink-0">
          <span className="text-slate-500 dark:text-slate-400 block font-medium">Mock Sessions Completed:</span>
          <span className="text-xl font-black text-slate-900 dark:text-white">
            {interviewHistory.length} Sessions ({stats.interviewScore}% Readiness)
          </span>
        </div>
      </div>

      {/* 5 Track Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {INTERVIEW_TRACKS.map((track) => {
          const isActive = activeTrack === track.id;
          return (
            <button
              key={track.id}
              onClick={() => handleTrackChange(track.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/20 border-brand-500"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="font-bold text-xs truncate">{track.name}</div>
              <div className={`text-[10px] truncate mt-0.5 ${isActive ? "text-brand-100" : "text-slate-400"}`}>
                {track.desc.split(',')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Simulation Arena */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Question Prompt from AI Interviewer */}
        <div className="flex items-start gap-3.5 bg-slate-50 dark:bg-slate-950/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                AI Senior Interviewer ({profile.targetCompany} Calibrated)
              </span>
              <span className="text-[11px] text-slate-400">
                Question {questionIndex + 1} of {currentQuestions.length} • {currentQuestion.topic}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              "{currentQuestion.question}"
            </h2>
          </div>
        </div>

        {/* Student Answer Area */}
        {!evaluation ? (
          <form onSubmit={handleSubmitAnswer} className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                <span>Type your structured response (State assumptions, complexity, and steps):</span>
                <span>{studentAnswer.split(/\s+/).filter(Boolean).length} words</span>
              </div>
              <textarea
                rows={5}
                required
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="Start your explanation here... (e.g. In my approach, I would first check if the array is null or empty, then employ two pointers to...)"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>The AI will evaluate against {profile.targetCompany}'s hiring bar.</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Skip Question
                </button>
                <button
                  type="submit"
                  disabled={!studentAnswer.trim() || isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all"
                >
                  {isSubmitting ? (
                    <span>Evaluating...</span>
                  ) : (
                    <>
                      <span>Submit for Evaluation</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Real-time AI Evaluation Output */
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Student submitted answer summary */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-500 dark:text-slate-400 block mb-1">
                Your Answer:
              </span>
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                {studentAnswer}
              </p>
            </div>

            {/* AI Rubric Evaluation Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center font-bold text-lg">
                    {evaluation.score}/10
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Interviewer Evaluation Verdict</h3>
                    <div className="text-xs text-brand-300 font-semibold mt-0.5">
                      {evaluation.verdict}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Strengths & Missing Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Strong Elements:
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {evaluation.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-2">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Areas for Improvement:
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {evaluation.improvements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">△</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Follow-up Question */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-2">
                <span className="font-bold text-brand-400 block uppercase tracking-wider text-[11px]">
                  Interviewer Follow-Up Challenge:
                </span>
                <p className="text-slate-200 font-medium">
                  {evaluation.followUp}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
