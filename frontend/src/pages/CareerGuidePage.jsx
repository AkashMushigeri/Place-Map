import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Send,
  Square,
  RotateCcw,
  Menu,
  Key,
  Trash2,
  Cpu,
  Target,
  ArrowRight,
  Code2,
  HelpCircle,
  FolderGit2,
  Database,
  Compass
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { aiService } from "../services/aiService";
import ChatMessage from "../components/chat/ChatMessage";
import ChatSidebar from "../components/chat/ChatSidebar";
import ApiKeyModal from "../components/chat/ApiKeyModal";

export default function CareerGuidePage() {
  const { profile, skillGapAnalysis, stats } = useApp();

  // Multi-chat sessions state (like ChatGPT)
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("placemap_conversations");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: "conv-init",
        title: `${profile.targetCompany} SDE Sprint`,
        createdAt: new Date().toISOString(),
        messages: [
          {
            id: "m-welcome",
            sender: "ai",
            text: `### Hi ${profile.name || "Akash"} 👋

I am your **PlaceMap Career Guide**, acting as your Senior Staff Engineering Mentor calibrated specifically for **${profile.targetRole}** at **${profile.targetCompany}**.

Based on your diagnostic baseline:
- **Top Showstopper Gap**: **${skillGapAnalysis.topGap?.skill || "DSA"}** (${skillGapAnalysis.topGap?.currentLevel} vs ${profile.targetCompany} Target ${skillGapAnalysis.topGap?.targetLevel})
- **Current Preparation Velocity**: **${stats.overallPreparation}% Placement Ready**
- **Preparation Streak**: **${profile.streakDays || 4} Days**

How can I help you accelerate your preparation today?`,
            timestamp: "Just now",
            suggestedActions: [
              "What should I learn today?",
              "Why is DSA my biggest gap?",
              "Recommend a project",
              "Test me on SQL",
              "Start mock interview"
            ]
          }
        ]
      }
    ];
  });

  const [activeConvId, setActiveConvId] = useState(() => conversations[0]?.id || "conv-init");
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Sync conversations to localStorage
  useEffect(() => {
    localStorage.setItem("placemap_conversations", JSON.stringify(conversations));
  }, [conversations]);

  // Scroll to bottom on new message or streaming update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConv?.messages, streamingText, isStreaming]);

  const handleNewChat = () => {
    const newId = `conv-${Date.now()}`;
    const newConv = {
      id: newId,
      title: "New Career Consultation",
      createdAt: new Date().toISOString(),
      messages: []
    };
    setConversations(prev => [newConv, ...prev]);
    setActiveConvId(newId);
  };

  const handleDeleteChat = (id) => {
    if (conversations.length <= 1) {
      handleNewChat();
      return;
    }
    setConversations(prev => prev.filter(c => c.id !== id));
    if (activeConvId === id) {
      const remaining = conversations.filter(c => c.id !== id);
      setActiveConvId(remaining[0]?.id);
    }
  };

  const handleClearMessages = () => {
    setConversations(prev =>
      prev.map(c => (c.id === activeConvId ? { ...c, messages: [] } : c))
    );
  };

  const handleSend = (textToSend = null) => {
    const text = textToSend || input;
    if (!text.trim() || isStreaming) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: "Just now"
    };

    // Update conversation title if first message
    const updatedMessages = [...(activeConv?.messages || []), userMessage];
    const newTitle =
      activeConv?.messages?.length === 0
        ? text.slice(0, 30) + (text.length > 30 ? "..." : "")
        : activeConv.title;

    setConversations(prev =>
      prev.map(c =>
        c.id === activeConvId
          ? { ...c, title: newTitle, messages: updatedMessages }
          : c
      )
    );

    if (!textToSend) setInput("");
    setIsStreaming(true);
    setStreamingText("");

    const abortController = { aborted: false };
    abortControllerRef.current = abortController;

    // Stream the career answer with typing effect
    aiService.streamCareerAnswer(
      text,
      profile,
      (chunk) => {
        setStreamingText(chunk);
      },
      (finalText, suggestedActions) => {
        const aiMessage = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: finalText,
          timestamp: "Just now",
          suggestedActions: suggestedActions || []
        };

        setConversations(prev =>
          prev.map(c =>
            c.id === activeConvId
              ? { ...c, messages: [...c.messages, aiMessage] }
              : c
          )
        );

        setIsStreaming(false);
        setStreamingText("");
        abortControllerRef.current = null;
      },
      abortController
    );
  };

  const handleStopStreaming = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.aborted = true;
    }
  };

  const handleRegenerate = () => {
    const messages = activeConv?.messages || [];
    const lastUserMsg = [...messages].reverse().find(m => m.sender === "user");
    if (lastUserMsg) {
      handleSend(lastUserMsg.text);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Starter card options for empty state
  const starterPrompts = [
    {
      title: "Today's High-Impact Sprint",
      desc: `What should I study today for ${profile.targetCompany} ${profile.targetRole}?`,
      icon: Target,
      prompt: "What should I learn today?"
    },
    {
      title: "Skill Gap Breakdown",
      desc: "Why is DSA my biggest gap and how do I close it quickly?",
      icon: Code2,
      prompt: "Why is DSA my biggest gap?"
    },
    {
      title: "Portfolio Project Blueprint",
      desc: `Recommend a production project that stands out at ${profile.targetCompany}.`,
      icon: FolderGit2,
      prompt: "Recommend a project"
    },
    {
      title: "Live Technical Drill",
      desc: "Test me on a realistic SQL window function or DSA question.",
      icon: Database,
      prompt: "Test me on SQL"
    }
  ];

  return (
    <div className="h-[calc(100vh-6rem)] -m-4 sm:-m-6 lg:-m-8 flex bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* ChatGPT-style Left Sidebar */}
      <ChatSidebar
        conversations={conversations}
        activeConversationId={activeConvId}
        onSelectConversation={setActiveConvId}
        onNewChat={handleNewChat}
        onDeleteConversation={handleDeleteChat}
        onOpenSettings={() => setIsSettingsOpen(true)}
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full bg-white dark:bg-slate-950">
        {/* Top Control Bar */}
        <div className="h-14 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between shrink-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Model Badge */}
            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>PlaceMap Mentor v2.0</span>
              </div>
              <span className="hidden sm:inline text-xs text-slate-400">
                • Grounded in {profile.targetRole} @ {profile.targetCompany}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearMessages}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors flex items-center gap-1"
              title="Clear current consultation"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Clear</span>
            </button>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
              title="Model & Key Settings"
            >
              <Key className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Message Thread Container */}
        <div className="flex-1 overflow-y-auto">
          {(!activeConv?.messages || activeConv.messages.length === 0) ? (
            /* Empty State: ChatGPT Style with Starter Cards */
            <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-full text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-xl shadow-brand-500/20 mb-4">
                🗺️
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                How can I guide your preparation, {profile.name || "Akash"}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mt-1.5 mb-8">
                Calibrated to your destination: <strong>{profile.targetRole}</strong> at <strong>{profile.targetCompany}</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
                {starterPrompts.map((starter, i) => {
                  const Icon = starter.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSend(starter.prompt)}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800/80 hover:border-brand-500/50 transition-all text-xs group shadow-sm flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {starter.title}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                        {starter.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Active Messages List */
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {activeConv.messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  onActionClick={handleSend}
                  onRegenerate={handleRegenerate}
                />
              ))}

              {/* Streaming Output Bubble */}
              {isStreaming && (
                <ChatMessage
                  message={{
                    id: "streaming-msg",
                    sender: "ai",
                    text: streamingText || "Analyzing preparation trajectory and company rubric...",
                    timestamp: "Generating..."
                  }}
                  isStreaming={true}
                />
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Bottom Input Area (ChatGPT Style) */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0">
          <div className="max-w-3xl mx-auto space-y-2">
            <div className="relative flex items-center rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 transition-all p-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Ask PlaceMap about ${profile.targetCompany}, DSA patterns, system design, or today's sprint...`}
                className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 px-3 py-1.5 max-h-32 leading-relaxed"
              />

              {isStreaming ? (
                <button
                  type="button"
                  onClick={handleStopStreaming}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  title="Stop generating"
                >
                  <Square className="w-4 h-4 fill-white" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="p-2 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-30 disabled:hover:bg-brand-600 text-white transition-all shadow-sm"
                  title="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-2">
              <span>Shift + Enter for new line • Enter to send</span>
              <span className="truncate ml-2">
                Grounded in your actual skills, gaps, and {profile.targetCompany} hiring rubric.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Model & API Key Settings Modal */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
