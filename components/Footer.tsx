import Link from "next/link";
import { Linkedin, Github, BookOpen, Mail, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-amber-500/20">
                MS
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                Monika Sharma
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-5">
              Production Architect for Enterprise Agentic Systems. Building the
              patterns that make multi-agent AI survive Fortune 50 reality.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-50 uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Weekly deep-dives on production agentic systems. For architects
              building at scale.
            </p>
            <a
              href={SOCIAL_LINKS.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline font-medium"
            >
              Production Agentic <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Monika Sharma. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Production Architect · Enterprise Agentic AI · LLMOps
          </p>
        </div>
      </div>
    </footer>
  );
}
