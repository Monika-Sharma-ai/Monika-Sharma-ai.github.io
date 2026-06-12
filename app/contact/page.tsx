import type { Metadata } from "next";
import { Linkedin, Github, BookOpen, Mail, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Monika Sharma for speaking, collaboration, or general inquiries about enterprise agentic AI.",
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@monikasharma.ai",
    href: SOCIAL_LINKS.email,
    description: "Speaking, advisory, collaboration",
    isEmail: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/monikasharma-ai",
    href: SOCIAL_LINKS.linkedin,
    description: "Connect + follow for daily content",
    isEmail: false,
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "medium.com/@MonikaSharmaa",
    href: SOCIAL_LINKS.medium,
    description: "Long-form technical writing",
    isEmail: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Monika-Sharma-ai",
    href: SOCIAL_LINKS.github,
    description: "Projects and code",
    isEmail: false,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.15em] mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            For speaking inquiries, collaboration, advisory conversations, or
            just to talk enterprise agentic AI.
          </p>
        </div>

        {/* Contact cards */}
        <div className="space-y-3 mb-10">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isEmail ? "_self" : "_blank"}
              rel={item.isEmail ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-500/5"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                  {item.value}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {item.description}
                </p>
              </div>
              <ExternalLink
                size={14}
                className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 flex-shrink-0 transition-colors"
              />
            </a>
          ))}
        </div>

        {/* Response time note */}
        <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Response time:
            </span>{" "}
            I respond to speaking and collaboration inquiries within 48 hours.
            For general questions about enterprise agentic AI, LinkedIn DMs are
            the fastest path.
          </p>
        </div>
      </div>
    </div>
  );
}
