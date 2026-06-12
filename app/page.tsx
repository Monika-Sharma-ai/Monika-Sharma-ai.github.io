import Link from "next/link";
import { ArrowRight, ChevronDown, PenTool, Mic } from "lucide-react";
import { FRAMEWORKS, STATS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 bg-grid">
        {/* Amber glow blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 dark:bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Production Architect · Enterprise Agentic AI
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight mb-5 leading-[1.05]">
            <span className="text-slate-900 dark:text-white">Monika </span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Sharma
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-5 max-w-3xl mx-auto">
            Production Architect for Enterprise Agentic Systems
          </p>

          {/* Sub-tagline */}
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build the patterns that make multi-agent AI survive Fortune 50
            reality.
            <br className="hidden sm:block" />
            <span className="text-slate-400 dark:text-slate-500 text-sm">
              PepsiCo · LangGraph · MCP · A2A · LLMOps · Knowledge Graphs
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/frameworks"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Explore 7 Frameworks
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-white/50 dark:bg-transparent"
            >
              Read My Writing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-500 dark:text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600">
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={15} className="animate-bounce" />
        </div>
      </section>

      {/* ─── FRAMEWORKS PREVIEW ───────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-3">
              Intellectual Property
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              7 Named Frameworks
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Reusable production patterns synthesized from Fortune 50
              deployments — designed to be cited, shared, and built upon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {FRAMEWORKS.slice(0, 6).map((fw) => (
              <div
                key={fw.id}
                className={`group p-5 rounded-2xl bg-gradient-to-br ${fw.color} ${fw.darkColor} border ${fw.borderColor} hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-[10px] font-black ${fw.accentColor} uppercase tracking-[0.15em]`}
                  >
                    {fw.number}
                  </span>
                  <ArrowRight
                    size={13}
                    className={`${fw.accentColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`}
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5 leading-snug">
                  {fw.shortName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {fw.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/frameworks"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline underline-offset-4"
            >
              View all 7 frameworks with full descriptions
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POV QUOTE ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.15em] mb-8">
            Point of View
          </p>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-200 leading-[1.4]">
            &ldquo;I believe the next decade of enterprise AI will be won by
            teams that treat agents as{" "}
            <span className="text-amber-500 font-semibold">products</span>, not{" "}
            <span className="line-through text-slate-400 dark:text-slate-600">
              features
            </span>
            .&rdquo;
          </blockquote>
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-500 font-medium">
            Monika Sharma &mdash; Production Architect · PepsiCo
          </p>
        </div>
      </section>

      {/* ─── WRITING + SPEAKING ────────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Writing card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <PenTool size={19} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Writing
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Medium · LinkedIn · Newsletter
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Deep technical writing on production agentic systems, LLMOps,
                enterprise architecture, and the patterns that actually work at
                scale.
              </p>
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline underline-offset-4"
              >
                Browse all writing <ArrowRight size={14} />
              </Link>
            </div>

            {/* Speaking card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Mic size={19} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Speaking
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Keynotes · Workshops · Podcasts
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                5 curated talk formats on enterprise agentic AI — from The
                Failure Pentagon to Governance at Fortune 50 Scale. Available
                for conferences, offsites, and universities.
              </p>
              <Link
                href="/speaking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline underline-offset-4"
              >
                View talk portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
              Weekly Newsletter
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Production Agentic
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-sm max-w-sm mx-auto">
              Director&apos;s cut: deeper dives, more diagrams, fewer hooks.
              Published every Friday for architects building at scale.
            </p>
            <a
              href="https://productionagentic.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Subscribe Free <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
