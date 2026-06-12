import type { Metadata } from "next";
import { TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "7 years building enterprise ML and agentic AI systems at Fortune 50 scale. Lead Architect at PepsiCo.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Building Production AI
            <br />
            at Fortune 50 Scale
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            7 years across ML → GenAI → Production Agentic Systems. Lead
            Architect at PepsiCo, designing the patterns that make multi-agent
            systems survive real-world complexity, governance, and scale.
          </p>
        </div>

        {/* POV callout */}
        <div className="mb-16 pl-5 border-l-[3px] border-amber-500">
          <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
            &ldquo;I believe the next decade of enterprise AI will be won by
            teams that treat agents as products, not features.&rdquo;
          </p>
        </div>

        {/* What I do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            What I Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Architect",
                description:
                  "Design multi-agent systems that handle enterprise-grade data complexity, latency SLAs, and governance requirements. I work at the intersection of LLMs, Knowledge Graphs, and production infrastructure.",
              },
              {
                title: "Synthesize",
                description:
                  "Turn production patterns into named, reusable frameworks. The 7 Named Frameworks are intellectual property designed to be cited, shared, and built upon by the engineering community.",
              },
              {
                title: "Teach",
                description:
                  "Write on Medium, speak at conferences, and publish the Production Agentic newsletter for architects and technical leaders building agentic AI at scale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2 text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Background
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I&apos;m Monika Sharma — Lead Architect for enterprise agentic AI
              at PepsiCo (title: Manager, Data Science). I lead the architecture
              of a natural language analytics platform that enables Fortune 50
              executives to query and interpret business data through
              conversational AI — at scale, with production reliability
              requirements.
            </p>
            <p>
              Over 7 years, I&apos;ve moved from classical ML → GenAI
              engineering → production agentic systems. The shift from
              &ldquo;building models&rdquo; to &ldquo;building systems of
              agents&rdquo; is the most significant inflection point I&apos;ve
              witnessed in enterprise AI. I write and speak about what it
              actually takes to make it work — not in demos, but in production.
            </p>
            <p>
              My technical stack includes LangGraph, MCP (Model Context
              Protocol), A2A protocols, Knowledge Graphs, LLMOps tooling, and
              enterprise RAG architectures. My pattern language — the 7 Named
              Frameworks — emerged from production experience, not whitepapers.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-[13px] -translate-x-1/2 top-1 w-3 h-3 rounded-full bg-amber-500 border-[3px] border-white dark:border-slate-950 shadow-sm" />
                  <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-1">
                    {item.year}
                  </p>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio versions */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Bio Versions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            For podcast hosts, event organizers, and press.
          </p>
          <div className="space-y-5">
            {[
              {
                label: "50-Word Bio",
                text: "Monika Sharma is a Production Architect for Enterprise Agentic AI at PepsiCo. With 7 years in enterprise ML, she leads the architecture of production multi-agent systems and has developed 7 named frameworks for agentic AI at Fortune 50 scale. She writes on Medium and hosts the Production Agentic newsletter.",
              },
              {
                label: "150-Word Bio",
                text: "Monika Sharma is a Production Architect for Enterprise Agentic AI at PepsiCo, where she leads the design of multi-agent AI systems operating at Fortune 50 scale. Over 7 years, she has moved from classical ML through GenAI engineering to production agentic architecture — designing systems that handle enterprise data complexity, latency, and governance requirements in the real world.\n\nShe is the creator of 7 Named Frameworks for production agentic systems — including the Enterprise Agent Failure Pentagon, the Agentic Reliability Pyramid, and the Semantic Control Plane — used by architects and engineering teams as reference models for enterprise AI design. She writes technical deep-dives on Medium, hosts the weekly Production Agentic newsletter, and speaks at conferences on enterprise AI architecture.",
              },
            ].map((bio) => (
              <div
                key={bio.label}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-3">
                  {bio.label}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                  {bio.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
