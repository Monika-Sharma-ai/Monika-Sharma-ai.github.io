import type { Metadata } from "next";
import { ExternalLink, BookOpen } from "lucide-react";
import { MediumFeed } from "@/components/MediumFeed";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing on production agentic systems, LLMOps, enterprise AI architecture, and the patterns that work at scale.",
};

// Update these as you publish LinkedIn articles
const LINKEDIN_ARTICLES = [
  {
    title: "The Enterprise Agent Failure Pentagon (F1)",
    excerpt:
      "Naming the 5 modes that kill multi-agent systems in production: Coordination Collapse, Context Fragmentation, Tool Unreliability, Memory Corruption, and Cost Explosion.",
    series: "Agentic Architecture Notes",
    date: "Week 1",
    href: "https://www.linkedin.com/in/monikasharma-ai",
  },
  {
    title: "The Agentic Reliability Pyramid (F2)",
    excerpt:
      "The layered build order for production-grade agentic systems. Most teams build this upside down.",
    series: "Agentic Architecture Notes",
    date: "Week 2",
    href: "https://www.linkedin.com/in/monikasharma-ai",
  },
  {
    title: "'Agentic' is not a feature. It's an architectural commitment.",
    excerpt:
      "Most enterprise copilots should not be agents. The distinction matters more than people think.",
    series: "What Most Teams Miss",
    date: "Week 2",
    href: "https://www.linkedin.com/in/monikasharma-ai",
  },
];

const CONTENT_SERIES = [
  {
    name: "Agentic Architecture Notes",
    day: "Monday",
    description: "Deep technical posts with diagrams — one framework per week.",
  },
  {
    name: "What Most Teams Miss",
    day: "Wednesday",
    description:
      "Contrarian takes and myth-busting for enterprise AI practitioners.",
  },
  {
    name: "Production AI Fridays",
    day: "Friday",
    description: "War stories and operator insights from real deployments.",
  },
];

export default function WritingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
            Writing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Technical Writing
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Deep dives on production agentic systems, LLMOps, enterprise
            architecture, and the patterns that actually work at Fortune 50
            scale. Published on Medium, LinkedIn, and the Production Agentic
            newsletter.
          </p>
        </div>

        {/* Content series */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CONTENT_SERIES.map((series) => (
            <div
              key={series.name}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.12em] mb-1">
                Every {series.day}
              </p>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {series.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {series.description}
              </p>
            </div>
          ))}
        </div>

        {/* Medium Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center flex-shrink-0">
              <span className="text-white dark:text-slate-900 font-black text-sm">
                M
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Medium
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Long-form · 2,500–4,000 words · Published every 3 weeks
              </p>
            </div>
          </div>
          <MediumFeed />
        </section>

        {/* LinkedIn Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">in</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                LinkedIn
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Daily posts · Frameworks · Architecture diagrams
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {LINKEDIN_ARTICLES.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                      {article.series}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-[10px] text-slate-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <ExternalLink
                  size={13}
                  className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 flex-shrink-0 mt-0.5 transition-colors"
                />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
            More published weekly.{" "}
            <a
              href="https://www.linkedin.com/in/monikasharma-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline"
            >
              Follow on LinkedIn
            </a>{" "}
            for daily content.
          </p>
        </section>

        {/* Newsletter */}
        <section>
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <BookOpen size={18} className="text-amber-500" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-slate-900 dark:text-white mb-1">
                  Production Agentic Newsletter
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  Weekly Friday newsletter. Director&apos;s cut: deeper dives,
                  more diagrams, fewer hooks. Targeted at CTOs, architects, and
                  founders building production agentic systems.
                </p>
                <a
                  href="https://productionagentic.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-500/25"
                >
                  Subscribe Free
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
