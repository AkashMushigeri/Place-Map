import React from "react";
import {
  Plus,
  MessageSquare,
  Trash2,
  Sparkles,
  Compass,
  Settings,
  X,
  Building2,
  Target
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function ChatSidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
  onDeleteConversation,
  onOpenSettings,
  isOpenMobile,
  onCloseMobile
}) {
  const { profile, skillGapAnalysis, stats } = useApp();

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 text-slate-300 w-64 select-none">
      {/* Top Header / New Chat */}
      <div className="p-3 border-b border-slate-800 space-y-2">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-white text-xs shadow-md">
              🗺️
            </div>
            <span className="font-bold text-sm text-white">PlaceMap Mentor</span>
          </div>

          {isOpenMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white lg:hidden"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* New Chat Button (ChatGPT Style) */}
        <button
          onClick={() => {
            onNewChat();
            if (onCloseMobile) onCloseMobile();
          }}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-brand-600/20 hover:bg-brand-600/30 border border-brand-500/30 text-brand-300 hover:text-white transition-all text-xs font-semibold shadow-sm group"
        >
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-brand-400 group-hover:rotate-90 transition-transform" />
            <span>New Consultation</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">⌘K</span>
        </button>
      </div>

      {/* Grounding Context Card */}
      <div className="p-3 border-b border-slate-800/80">
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 text-[11px] space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-brand-400">
              <Compass className="w-3 h-3" /> Grounded Context
            </span>
            <span className="text-[10px] text-emerald-400 font-medium">{stats.overallPreparation}% Ready</span>
          </div>
          <div className="font-bold text-white truncate">
            {profile.name} • {profile.targetRole}
          </div>
          <div className="text-slate-400 truncate">
            @{profile.targetCompany} (Top Gap: {skillGapAnalysis.topGap?.skill || "DSA"})
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Recent Consultations
        </div>

        {conversations.map((conv) => {
          const isActive = conv.id === activeConversationId;
          return (
            <div
              key={conv.id}
              onClick={() => {
                onSelectConversation(conv.id);
                if (onCloseMobile) onCloseMobile();
              }}
              className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                isActive
                  ? "bg-slate-800 text-white font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brand-400" : "text-slate-500"}`} />
                <span className="truncate">{conv.title || "Career Consultation"}</span>
              </div>

              {conversations.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteConversation(conv.id);
                  }}
                  className="p-1 rounded opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity"
                  title="Delete chat"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Settings */}
      <div className="p-3 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={onOpenSettings}
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 py-1.5 px-2 rounded-lg hover:bg-slate-800 transition-colors w-full"
        >
          <Settings className="w-4 h-4 text-slate-400" />
          <span>Model & Key Settings</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block h-full shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onCloseMobile} />
          <div className="relative z-10 h-full">{sidebarContent}</div>
        </div>
      )}
    </>
  );
}
