import type { Metadata } from "next";
import { Mic, Mail, Clock, Users } from "lucide-react";
import { TALKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynotes and workshops on production agentic AI systems, LLMOps, and enterprise AI architecture at Fortune 50 scale.",
};

export default function SpeakingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
            Speaking
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Talk Portfolio
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            5 curated keynotes and workshops on enterprise agentic AI — developed
            from production experience at Fortune 50 scale. Available for
            conferences, corporate events, university lectures, and podcasts.
          </p>
        </div>

        {/* Talks */}
        <div className="space-y-5 mb-16">
          {TALKS.map((talk) => (
            <div
              key={talk.id}
              className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-200"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                    {talk.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {talk.title}
                  </h2>
                  <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4">
                    {talk.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {talk.abstract}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-slate-400" />
                      {talk.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} className="text-slate-400" />
                      {talk.audience}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
            <Mic size={24} className="text-amber-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Book a Talk
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Available for conferences, corporate offsites, keynotes, university
            lectures, and podcast conversations on enterprise agentic AI.
          </p>
          <a
            href="mailto:hello@monikasharma.ai"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
            hello@monikasharma.ai · Response within 48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
