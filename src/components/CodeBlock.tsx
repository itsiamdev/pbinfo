import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { HighlightCpp } from "@/lib/highlight";

export function CodeBlock({
  code,
  filename = "main.cpp",
  showHeader = true,
}: {
  code: string;
  filename?: string;
  showHeader?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-code-bg shadow-lg ring-1 ring-white/5">
      {showHeader && (
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-amber-500/80" />
              <span className="size-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-white/40">
              {filename}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="size-3" /> copiat
              </>
            ) : (
              <>
                <Copy className="size-3" /> copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-white/90">
        <code>
          <HighlightCpp code={code} />
        </code>
      </pre>
    </div>
  );
}
