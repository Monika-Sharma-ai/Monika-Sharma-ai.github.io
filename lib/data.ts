export const FRAMEWORKS = [
  {
    id: "f1",
    number: "F1",
    name: "The Enterprise Agent Failure Pentagon",
    shortName: "Failure Pentagon",
    tagline: "5 modes that kill multi-agent systems in production",
    description:
      "A diagnostic framework for identifying the five collapse patterns that consistently destroy enterprise agentic systems before they reach stable production. Coordination Collapse, Context Fragmentation, Tool Unreliability, Memory Corruption, and Cost Explosion each require different architectural mitigations — and most teams discover them after go-live.",
    pillars: [
      "Coordination Collapse",
      "Context Fragmentation",
      "Tool Unreliability",
      "Memory Corruption",
      "Cost Explosion",
    ],
    color: "from-red-500/10 to-orange-500/10",
    darkColor: "dark:from-red-500/20 dark:to-orange-500/20",
    borderColor: "border-red-500/20 dark:border-red-500/30",
    accentColor: "text-red-500 dark:text-red-400",
    badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    id: "f2",
    number: "F2",
    name: "The Agentic Reliability Pyramid",
    shortName: "Reliability Pyramid",
    tagline: "The layered build order for production-grade agentic systems",
    description:
      "A layered model defining the correct construction sequence for reliable agentic systems. Most enterprise teams build this upside down — shipping orchestration first, evaluation last. The pyramid enforces: Evaluation → Observability → Guardrails → Memory → Orchestration. Each layer must be stable before the next is added.",
    pillars: [
      "Evaluation",
      "Observability",
      "Guardrails",
      "Memory",
      "Orchestration",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    darkColor: "dark:from-blue-500/20 dark:to-cyan-500/20",
    borderColor: "border-blue-500/20 dark:border-blue-500/30",
    accentColor: "text-blue-500 dark:text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "f3",
    number: "F3",
    name: "The Text-to-SQL Decomposition Stack",
    shortName: "Text-to-SQL Stack",
    tagline: "Why a single LLM call will never be enough",
    description:
      "A four-phase architecture for enterprise Text-to-SQL that treats the problem as four distinct sub-problems with different failure modes and latency budgets. Analyze → Generate → Validate → Synthesize. Each phase has its own model selection, context requirements, and validation logic. Collapsing them into one LLM call is the most common and most expensive mistake.",
    pillars: ["Analyze", "Generate", "Validate", "Synthesize"],
    color: "from-emerald-500/10 to-green-500/10",
    darkColor: "dark:from-emerald-500/20 dark:to-green-500/20",
    borderColor: "border-emerald-500/20 dark:border-emerald-500/30",
    accentColor: "text-emerald-500 dark:text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "f4",
    number: "F4",
    name: "The Hallucination Containment Architecture",
    shortName: "Hallucination Containment",
    tagline: "4-layer defense against LLM hallucinations at enterprise scale",
    description:
      "A defense-in-depth model for preventing and catching LLM hallucinations across the full generation pipeline. Pre-prompt containment limits the space of possible outputs. Mid-generation controls steer generation in flight. Post-generation validation catches errors before surfacing. System-of-record verification cross-checks against authoritative data.",
    pillars: [
      "Pre-prompt Containment",
      "Mid-generation Controls",
      "Post-generation Validation",
      "System-of-record Verification",
    ],
    color: "from-purple-500/10 to-violet-500/10",
    darkColor: "dark:from-purple-500/20 dark:to-violet-500/20",
    borderColor: "border-purple-500/20 dark:border-purple-500/30",
    accentColor: "text-purple-500 dark:text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    id: "f5",
    number: "F5",
    name: "The Semantic Control Plane",
    shortName: "Semantic Control Plane",
    tagline: "Knowledge Graphs as the brain between data and agents",
    description:
      "A design pattern that positions Knowledge Graphs, metadata layers, and intent classification as the coordination layer between enterprise data infrastructure and agentic systems. Most enterprise RAG architectures skip this entirely — routing queries directly to vector stores, losing the structural and semantic context that makes answers reliable at scale.",
    pillars: [
      "Knowledge Graph Layer",
      "Metadata Enrichment",
      "Intent Classification",
      "Agent Routing",
    ],
    color: "from-amber-500/10 to-yellow-500/10",
    darkColor: "dark:from-amber-500/20 dark:to-yellow-500/20",
    borderColor: "border-amber-500/20 dark:border-amber-500/30",
    accentColor: "text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "f6",
    number: "F6",
    name: "The Enterprise Agentic Maturity Curve",
    shortName: "Maturity Curve",
    tagline: "5-stage model mapping enterprise AI agent evolution",
    description:
      "A five-stage maturity model for enterprise agentic systems that maps how AI agents evolve from scripted rule-followers to self-governing production systems. Most Fortune 500 companies are between stages 2 and 3. The curve identifies capability prerequisites and common failure modes at each transition — helping teams avoid premature stage jumps.",
    pillars: [
      "Stage 1: Scripted",
      "Stage 2: Tool-using",
      "Stage 3: Multi-agent",
      "Stage 4: Self-improving",
      "Stage 5: Governed",
    ],
    color: "from-teal-500/10 to-cyan-500/10",
    darkColor: "dark:from-teal-500/20 dark:to-cyan-500/20",
    borderColor: "border-teal-500/20 dark:border-teal-500/30",
    accentColor: "text-teal-500 dark:text-teal-400",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
  {
    id: "f7",
    number: "F7",
    name: "The LLMOps Capability Matrix",
    shortName: "LLMOps Matrix",
    tagline: "The self-assessment for enterprise AI teams",
    description:
      "A 6×3 capability matrix mapping LLMOps dimensions against deployment stages. Dimensions: Evaluation, Drift Detection, Memory Management, Cost Control, Latency SLAs, Safety. Stages: Dev, Staging, Production. The matrix gives teams a concrete self-assessment tool to find operational blindspots before they become production incidents.",
    pillars: [
      "Evaluation",
      "Drift Detection",
      "Memory Management",
      "Cost Control",
      "Latency SLAs",
      "Safety",
    ],
    color: "from-indigo-500/10 to-blue-500/10",
    darkColor: "dark:from-indigo-500/20 dark:to-blue-500/20",
    borderColor: "border-indigo-500/20 dark:border-indigo-500/30",
    accentColor: "text-indigo-500 dark:text-indigo-400",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
];

export const TALKS = [
  {
    id: "t1",
    number: "01",
    title: "The Enterprise Agent Failure Pentagon",
    subtitle: "Why Multi-Agent Systems Collapse — and How to Prevent It",
    duration: "45 min keynote · 25 min conference talk",
    audience: "CTOs, AI Architects, Engineering Leaders",
    abstract:
      "Most multi-agent AI projects that fail in production fail for the same five reasons. This talk introduces the Enterprise Agent Failure Pentagon — a diagnostic framework covering Coordination Collapse, Context Fragmentation, Tool Unreliability, Memory Corruption, and Cost Explosion — and gives architects a concrete checklist to stress-test their systems before they go live.",
  },
  {
    id: "t2",
    number: "02",
    title: "Building for Production",
    subtitle: "The Agentic Reliability Pyramid",
    duration: "40 min keynote · 20 min conference talk",
    audience: "ML Engineers, AI Architects, Data Scientists",
    abstract:
      "Teams ship agentic systems in the wrong order. This talk introduces the Agentic Reliability Pyramid — a layered model that defines the correct build sequence: Evaluation → Observability → Guardrails → Memory → Orchestration. Includes real-world examples of what breaks when each layer is skipped, and how to retrofit reliability into systems already in production.",
  },
  {
    id: "t3",
    title: "The Semantic Control Plane",
    number: "03",
    subtitle: "Knowledge Graphs as the Missing Brain in Enterprise RAG",
    duration: "45 min keynote · 30 min workshop",
    audience: "Data Architects, AI Engineers, Enterprise Architects",
    abstract:
      "Most enterprise RAG systems are missing a coordination layer between raw data and the agent. This talk introduces the Semantic Control Plane — a design pattern using Knowledge Graphs, metadata, and intent classification to dramatically improve agent accuracy and reliability at Fortune 50 scale. Covers implementation patterns, tradeoffs, and when not to use it.",
  },
  {
    id: "t4",
    number: "04",
    title: "LLMOps in Practice",
    subtitle: "Scaling Agentic Systems Without Chaos",
    duration: "45 min keynote · 30 min workshop",
    audience: "ML Platform Teams, AI Operations, Engineering Leaders",
    abstract:
      "LLMOps is not just MLOps with better prompts. This talk walks through the LLMOps Capability Matrix — covering Evaluation, Drift Detection, Memory Management, Cost Control, Latency SLAs, and Safety — and shows what production-grade LLMOps looks like for teams running agentic workloads at enterprise scale. Includes a live self-assessment.",
  },
  {
    id: "t5",
    number: "05",
    title: "Governance Patterns for AI Agents at Fortune 50 Scale",
    subtitle:
      "How Regulated Enterprises Govern Agentic AI Without Killing Innovation",
    duration: "45 min keynote",
    audience: "CXOs, AI Governance Teams, Enterprise Architects",
    abstract:
      "AI governance teams are quietly becoming innovation bottlenecks. This talk presents a governance-by-design framework for agentic systems — covering access control, audit trails, blast-radius containment, and model accountability — showing how the most innovative Fortune 50 AI teams embed governance as infrastructure, not policy.",
  },
];

export const STATS = [
  { label: "Years in Enterprise ML/AI", value: "7+" },
  { label: "Named Frameworks", value: "7" },
  { label: "Enterprise Scale", value: "Fortune 50" },
];

export const TIMELINE = [
  {
    year: "2019",
    title: "Began enterprise ML journey",
    description:
      "Started at the intersection of data science and business decision-making in large-scale enterprise environments.",
  },
  {
    year: "2021",
    title: "Moved into GenAI architecture",
    description:
      "Early adopter of LLM-based systems in production enterprise environments — before the term 'GenAI' was commodified.",
  },
  {
    year: "2023",
    title: "Launched enterprise NL analytics platform",
    description:
      "Led architecture of a natural language analytics platform serving Fortune 50 executives. Production-grade, multi-region, SLA-bound.",
  },
  {
    year: "2024",
    title: "Multi-agent systems at scale",
    description:
      "Designed production multi-agent workflows with LangGraph, MCP, and A2A protocols. First time running agents as products, not features.",
  },
  {
    year: "2025",
    title: "Developed 7 Named Frameworks",
    description:
      "Synthesized production patterns into reusable, citable frameworks — F1 through F7 — for the enterprise AI architecture community.",
  },
  {
    year: "2026",
    title: "Public writing, speaking, and the Blueprint",
    description:
      "Sharing production agentic patterns publicly via Medium, LinkedIn, newsletter, and the 2026 Enterprise Agentic AI Blueprint.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/monikasharma-ai",
  github: "https://github.com/Monika-Sharma-ai",
  medium: "https://medium.com/@MonikaSharmaa",
  email: "mailto:hello@monikasharma.ai",
  newsletter: "https://productionagentic.substack.com",
};
