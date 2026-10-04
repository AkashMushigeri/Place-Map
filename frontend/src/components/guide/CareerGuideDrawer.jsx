import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Square,
  Bot,
  User,
  ArrowRight,
  RotateCcw,
  Key
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { aiService } from "../../services/aiService";
import { Link } from "react-router-dom";
import ChatMessage from "../chat/ChatMessage";
import ApiKeyModal from "../chat/ApiKeyModal";

export default function CareerGuideDrawer() {
  const { isGuideDrawerOpen, setIsGuideDrawerOpen, profile, skillGapAnalysis, stats } = useApp();

  const [messages, setMessages] = useState([
    {
      id: "initial",
      sender: "ai",
      text: `### Hi ${profile.name || "Akash"} 👋

You're currently preparing for **${profile.targetRole}** at **${profile.targetCompany}**.

Based on your profile, your biggest current gap is **${skillGapAnalysis.topGap?.skill || "DSA"}** (${skillGapAnalysis.topGap?.currentLevel} vs Target ${skillGapAnalysis.topGap?.targetLevel}).

What would you like help with right now?`,
      timestamp: "Just now",
      suggestedActions: [
        "What should I learn today?",
        "Why is DSA my biggest gap?",
        "Recommend a project",
        "Test me on SQL",
        "Start mock interview"
      ]
    }
  ]);

  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (isGuideDrawerOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, streamingText, isGuideDrawerOpen]);

  const handleSend = (textToSend = null) => {
    const text = textToSend || input;
    if (!text.trim() || isStreaming) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: "Just now"
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsStreaming(true);
    setStreamingText("");

    const abortController = { aborted: false };
    abortControllerRef.current = abortController;

    aiService.streamCareerAnswer(
      text,
      profile,
      (chunk) => {
        setStreamingText(chunk);
      },
      (finalText, suggestedActions) => {
        const aiMsg = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: finalText,
          timestamp: "Just now",
          suggestedActions: suggestedActions || []
        };
        setMessages(prev => [...prev, aiMsg]);
        setIsStreaming(false);
        setStreamingText("");
        abortControllerRef.current = null;
      },
      abortController
    );
  };

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.aborted = true;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isGuideDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsGuideDrawerOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative z-10 w-full max-w-xl bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  PlaceMap Career Guide
                </h2>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  AI Mentor
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Staff Mentor & Navigation Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Settings"
            >
              <Key className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsGuideDrawerOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Context Header */}
        <div className="px-4 py-2 bg-brand-50 dark:bg-brand-950/40 border-b border-brand-100 dark:border-brand-900/50 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-brand-700 dark:text-brand-300">Grounded:</span>
            <span className="text-slate-700 dark:text-slate-300 truncate">
              {profile.targetRole} @ {profile.targetCompany}
            </span>
          </div>
          <span className="text-brand-600 dark:text-brand-400 font-bold whitespace-nowrap ml-2">
            {stats.overallPreparation}% Ready
          </span>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50">
          {messages.map((m) => (
            <ChatMessage
              key={m.id}
              message={m}
              onActionClick={handleSend}
            />
          ))}

          {isStreaming && (
            <ChatMessage
              message={{
                id: "streaming",
                sender: "ai",
                text: streamingText || "Analyzing preparation trajectory and company rubric...",
                timestamp: "Generating..."
              }}
              isStreaming={true}
            />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 transition-all">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask PlaceMap about ${profile.targetCompany}, DSA, or next steps...`}
              className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 max-h-24 py-1"
            />

            {isStreaming ? (
              <button
                type="button"
                onClick={handleStop}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                title="Stop generating"
              >
                <Square className="w-4 h-4 fill-white" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-40 disabled:hover:bg-brand-600 text-white transition-colors"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 mt-2">
            <span>Press Enter to send</span>
            <Link
              to="/guide"
              onClick={() => setIsGuideDrawerOpen(false)}
              className="text-brand-500 hover:underline flex items-center gap-0.5"
            >
              Open Full-Screen Guide <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
