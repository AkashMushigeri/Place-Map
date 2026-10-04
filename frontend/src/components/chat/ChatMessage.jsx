import React, { useState } from "react";
import {
  Bot,
  User,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Sparkles
} from "lucide-react";
import ChatMarkdown from "./ChatMarkdown";

export default function ChatMessage({
  message,
  onActionClick,
  onRegenerate,
  isStreaming = false
}) {
  const isAI = message.sender === "ai";
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'up' | 'down' | null

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group py-5 px-4 sm:px-6 transition-colors ${
        isAI
          ? "bg-slate-50/60 dark:bg-slate-900/60 border-y border-slate-200/50 dark:border-slate-800/50"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <div className="max-w-3xl mx-auto flex gap-4 sm:gap-5 items-start">
        {/* Avatar */}
        <div className="shrink-0 mt-0.5">
          {isAI ? (
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-500 via-indigo-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-brand-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs border border-slate-300 dark:border-slate-700">
              <User className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Sender & Timestamp */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-slate-900 dark:text-white">
              {isAI ? "PlaceMap Career Guide" : "You"}
            </span>
            <span className="text-[10px] text-slate-400">
              {message.timestamp || "Just now"}
            </span>
          </div>

          {/* Formatted Markdown Content */}
          <div className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
            <ChatMarkdown content={message.text} />
            {isStreaming && (
              <span className="inline-block w-2 h-4 ml-1 bg-brand-500 animate-pulse align-middle" />
            )}
          </div>

          {/* Interactive Action Suggestion Chips from AI */}
          {isAI && message.suggestedActions && message.suggestedActions.length > 0 && !isStreaming && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {message.suggestedActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => onActionClick && onActionClick(action)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/60 hover:border-brand-400 transition-all font-medium text-left shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-brand-500" />
                  <span>{action}</span>
                </button>
              ))}
            </div>
          )}

          {/* Action Bar (Copy, Like, Dislike, Regenerate) */}
          {isAI && !isStreaming && (
            <div className="pt-2 flex items-center gap-2 text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleCopyMessage}
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors text-xs flex items-center gap-1"
                title="Copy response"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] text-emerald-500 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setFeedback(feedback === "up" ? null : "up")}
                className={`p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ${
                  feedback === "up" ? "text-emerald-500" : "hover:text-slate-700 dark:hover:text-slate-200"
                }`}
                title="Good response"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setFeedback(feedback === "down" ? null : "down")}
                className={`p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ${
                  feedback === "down" ? "text-red-500" : "hover:text-slate-700 dark:hover:text-slate-200"
                }`}
                title="Bad response"
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>

              {onRegenerate && (
                <button
                  onClick={onRegenerate}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors text-xs flex items-center gap-1 ml-2"
                  title="Regenerate response"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Regenerate</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
