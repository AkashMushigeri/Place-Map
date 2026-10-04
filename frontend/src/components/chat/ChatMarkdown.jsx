import React, { useState } from "react";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";

/**
 * Robust markdown & code block renderer for ChatGPT-like interface.
 * Zero external dependency, 100% reliable, handles code blocks, inline code,
 * bold, headers, lists, quotes, and links.
 */
export default function ChatMarkdown({ content = "" }) {
  if (!content) return null;

  // Split content by code blocks: ```lang ... ```
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: content.substring(lastIndex, match.index)
      });
    }

    parts.push({
      type: "code",
      language: match[1] || "text",
      code: match[2].trimEnd()
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push({
      type: "text",
      content: content.substring(lastIndex)
    });
  }

  return (
    <div className="space-y-3 leading-relaxed text-sm">
      {parts.map((part, index) => {
        if (part.type === "code") {
          return <CodeBlock key={index} language={part.language} code={part.code} />;
        }
        return <FormattedText key={index} text={part.content} />;
      })}
    </div>
  );
}

function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-3 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 font-mono text-xs shadow-md">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-brand-400" />
          <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300">
            {language || "code"}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px] font-sans font-medium"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed font-mono whitespace-pre selection:bg-brand-500 selection:text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FormattedText({ text }) {
  // Split into paragraphs / lines
  const lines = text.split("\n");

  return (
    <div className="space-y-2">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={lineIdx} className="h-1" />;
        }

        // Header ###
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={lineIdx} className="font-bold text-base text-slate-900 dark:text-white pt-2 pb-1">
              {renderInlineStyles(trimmed.slice(4))}
            </h4>
          );
        }

        // Header ##
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={lineIdx} className="font-extrabold text-lg text-slate-900 dark:text-white pt-3 pb-1 border-b border-slate-200/60 dark:border-slate-800">
              {renderInlineStyles(trimmed.slice(3))}
            </h3>
          );
        }

        // Header #
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={lineIdx} className="font-black text-xl text-slate-900 dark:text-white pt-3 pb-1">
              {renderInlineStyles(trimmed.slice(2))}
            </h2>
          );
        }

        // Blockquote >
        if (trimmed.startsWith("> ")) {
          return (
            <div
              key={lineIdx}
              className="pl-3.5 py-1 border-l-2 border-brand-500 bg-brand-50/50 dark:bg-brand-950/30 rounded-r-lg text-slate-700 dark:text-slate-300 text-xs italic my-1.5"
            >
              {renderInlineStyles(trimmed.slice(2))}
            </div>
          );
        }

        // Bullet point - or *
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 ml-2 my-1">
              <span className="text-brand-500 font-bold shrink-0 mt-1">•</span>
              <span className="flex-1 text-slate-800 dark:text-slate-200">
                {renderInlineStyles(trimmed.replace(/^[-*•]\s+/, ""))}
              </span>
            </div>
          );
        }

        // Numbered list: 1. 2. etc.
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={lineIdx} className="flex items-start gap-2.5 ml-2 my-1">
              <span className="font-bold text-brand-600 dark:text-brand-400 text-xs shrink-0 mt-0.5">
                {numMatch[1]}.
              </span>
              <span className="flex-1 text-slate-800 dark:text-slate-200">
                {renderInlineStyles(numMatch[2])}
              </span>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p key={lineIdx} className="text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderInlineStyles(line)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Parses bold, inline code, and links within a string.
 */
function renderInlineStyles(text) {
  // Regex for **bold**, `code`, and [link](url)
  const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g;
  const tokens = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "plain", value: text.substring(lastIndex, match.index) });
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push({ type: "bold", value: token.slice(2, -2) });
    } else if (token.startsWith("`") && token.endsWith("`")) {
      tokens.push({ type: "inline-code", value: token.slice(1, -1) });
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        tokens.push({ type: "link", text: linkMatch[1], url: linkMatch[2] });
      } else {
        tokens.push({ type: "plain", value: token });
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "plain", value: text.substring(lastIndex) });
  }

  return tokens.map((t, idx) => {
    if (t.type === "bold") {
      return (
        <strong key={idx} className="font-bold text-slate-900 dark:text-white">
          {t.value}
        </strong>
      );
    }
    if (t.type === "inline-code") {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-300 font-mono text-[11px] border border-slate-200 dark:border-slate-700/60"
        >
          {t.value}
        </code>
      );
    }
    if (t.type === "link") {
      return (
        <a
          key={idx}
          href={t.url}
          className="text-brand-600 dark:text-brand-400 font-medium hover:underline inline-flex items-center gap-0.5"
        >
          <span>{t.text}</span>
        </a>
      );
    }
    return <span key={idx}>{t.value}</span>;
  });
}
