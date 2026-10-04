import React, { useState, useEffect } from "react";
import { X, Key, Sparkles, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export default function ApiKeyModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("placemap_custom_ai_key") || "");
  const [provider, setProvider] = useState(() => localStorage.getItem("placemap_ai_provider") || "builtin");
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(localStorage.getItem("placemap_custom_ai_key") || "");
      setProvider(localStorage.getItem("placemap_ai_provider") || "builtin");
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("placemap_custom_ai_key", apiKey.trim());
    localStorage.setItem("placemap_ai_provider", provider);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 border border-brand-500/20 flex items-center justify-center">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              AI Engine & Model Configuration
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize how the PlaceMap Career Guide generates responses
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          {/* Provider Selection */}
          <div className="space-y-2">
            <label className="block font-semibold text-slate-700 dark:text-slate-300">
              Select Reasoning Provider
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setProvider("builtin")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  provider === "builtin"
                    ? "bg-brand-50 dark:bg-brand-950/60 border-brand-500 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>PlaceMap Local (Recommended)</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Ultra-fast, zero-setup, grounded in your target company & skills. 100% reliable.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setProvider("gemini")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  provider === "gemini"
                    ? "bg-brand-50 dark:bg-brand-950/60 border-brand-500 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Google Gemini / OpenAI</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Connect your live API key for open-ended model generation.
                </p>
              </button>
            </div>
          </div>

          {/* Optional Key input if external model selected */}
          {provider !== "builtin" && (
            <div className="space-y-1.5 pt-1">
              <label className="block font-medium text-slate-700 dark:text-slate-300">
                API Key
              </label>
              <input
                type="password"
                placeholder="AIzaSy... or sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
              />
              <p className="text-[10px] text-slate-400">
                Stored strictly in your local browser storage. Never transmitted to our servers.
              </p>
            </div>
          )}

          {/* Privacy Note */}
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 flex items-start gap-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              PlaceMap works completely out-of-the-box. The built-in Staff Mentor model uses your actual profile, target company rubrics, and DSA gaps.
            </span>
          </div>

          {savedSuccess && (
            <div className="p-2.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-center font-semibold text-xs flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Settings saved successfully!</span>
            </div>
          )}

          <div className="flex justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
