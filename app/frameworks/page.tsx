import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { FRAMEWORKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "7 named frameworks for production agentic AI systems — synthesized from Fortune 50 deployments.",
};

export default function FrameworksPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
            IP Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            7 Named Frameworks
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reusable production patterns for enterprise agentic systems —
            synthesized from 7 years and Fortune 50-scale deployments. Designed
            to be cited, shared, and built upon.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold">
            <Download size={13} />
            Full Framework Pack PDF — shipping with the 2026 Enterprise Agentic
            AI Blueprint
          </div>
        </div>

        {/* Frameworks */}
        <div className="space-y-5">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.id}
              className={`group p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${fw.color} ${fw.darkColor} border ${fw.borderColor} hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Number badge */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${fw.borderColor} bg-white/60 dark:bg-black/20`}
                >
                  <span className={`text-xs font-black ${fw.accentColor}`}>
                    {fw.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                    {fw.name}
                  </h2>
                  <p className={`text-sm font-semibold ${fw.accentColor} mb-3`}>
                    {fw.tagline}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {fw.description}
                  </p>

                  {/* Pillars */}
                  <div className="flex flex-wrap gap-2">
                    {fw.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${fw.badgeColor} border ${fw.borderColor}`}
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Get the Complete Framework Pack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            The 2026 Enterprise Agentic AI Blueprint — a 12-page deep-dive
            covering all 7 frameworks with diagrams, anti-patterns, and a build
            vs buy decision tree. Free, email-gated.
          </p>
          <a
            href="https://productionagentic.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Get Early Access <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
