"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER = "#A48FEA";
const INDIGO = "#6C5DD3";
const DARK_BG = "#0A0A18";
const DARK_CARD = "rgba(255,255,255,0.045)";
const DARK_BORDER = "rgba(255,255,255,0.10)";
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const AUTOPLAY_MS = 4500;

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.2 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

type Capability = {
  title: string;
  body: string;
  tags: string[];
};

const capabilities: Capability[] = [
  {
    title: "AI/ML Engineering",
    body: "Design, build, deploy, and operate machine learning solutions that turn enterprise data into predictive and intelligent outcomes.",
    tags: ["MACHINE LEARNING", "MLOPS", "PREDICTIONS"],
  },
  {
    title: "Generative AI",
    body: "Build production-ready GenAI experiences that use large language models to create, summarize, reason over, and transform enterprise content.",
    tags: ["GENAI", "LLM", "MULTIMODAL"],
  },
  {
    title: "LLM Engineering",
    body: "Engineer reliable LLM applications with prompt design, model selection, structured outputs, tool use, guardrails, and production observability.",
    tags: ["PROMPTING", "MODELS", "GUARDRAILS"],
  },
  {
    title: "AI Agents",
    body: "Create intelligent agents that plan tasks, use tools, retrieve information, and execute multi-step workflows with appropriate human oversight.",
    tags: ["AGENTS", "TOOLS", "WORKFLOWS"],
  },
  {
    title: "RAG",
    body: "Ground AI responses in trusted enterprise knowledge using retrieval-augmented generation, semantic search, vector stores, and source-aware responses.",
    tags: ["RAG", "VECTOR SEARCH", "KNOWLEDGE"],
  },
  {
    title: "AI Automation",
    body: "Automate repetitive knowledge work by combining AI reasoning with business rules, APIs, documents, and human approval steps.",
    tags: ["AUTOMATION", "COPILOTS", "ORCHESTRATION"],
  },
  {
    title: "AI Integration",
    body: "Connect AI capabilities to existing applications, data platforms, APIs, SaaS tools, and enterprise workflows without creating disconnected AI islands.",
    tags: ["APIs", "INTEGRATION", "ENTERPRISE"],
  },
  {
    title: "Intelligent Application Development",
    body: "Embed AI directly into customer and employee products so recommendations, search, assistants, summaries, and decisions become part of the experience.",
    tags: ["APPLICATIONS", "UX", "AI FEATURES"],
  },
  {
    title: "AI Evaluation and Testing",
    body: "Measure quality, groundedness, safety, latency, cost, and task success with evaluation datasets, automated checks, and production feedback loops.",
    tags: ["EVALUATION", "TESTING", "OBSERVABILITY"],
  },
  {
    title: "AI Governance",
    body: "Put practical controls around AI systems with security, privacy, access controls, auditability, responsible AI practices, and human oversight.",
    tags: ["GOVERNANCE", "SECURITY", "RESPONSIBLE AI"],
  },
];

type DeepDive = {
  label: string;
  heading: string;
  body: string;
  image: string;
};

const deepDives: DeepDive[] = [
  {
    label: "AI/ML Engineering",
    heading: "From experimentation to machine learning in production",
    body: "We design data, model, deployment, and monitoring workflows that move ML initiatives beyond notebooks and into reliable production systems.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Generative AI",
    heading: "Generative AI grounded in your business context",
    body: "Build assistants and GenAI experiences that work with your enterprise knowledge, business rules, and workflows rather than generic model output alone.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "LLM Engineering",
    heading: "LLM applications engineered for reliability",
    body: "Select the right model and architecture, design prompts and tools, add guardrails, and create evaluation loops before the application reaches production.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "AI Agents",
    heading: "Agents that can reason, retrieve, and act",
    body: "Connect models to tools and enterprise systems so agents can complete meaningful multi-step work while staying inside defined permissions and controls.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "RAG",
    heading: "Enterprise knowledge available through natural language",
    body: "Create retrieval pipelines that find relevant information, provide context to models, and return answers that are traceable back to enterprise sources.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "AI Automation",
    heading: "Automate knowledge workflows without losing control",
    body: "Combine AI with APIs, rules, documents, and approvals to reduce manual effort across operations while keeping people in the loop where it matters.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "AI Integration",
    heading: "Make AI part of the systems your teams already use",
    body: "Integrate AI services into products, CRM, service platforms, data platforms, and internal applications so adoption happens inside existing workflows.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Intelligent Applications",
    heading: "Turn ordinary software into intelligent experiences",
    body: "Add copilots, recommendations, natural-language search, summarization, classification, and decision support directly into business applications.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
];

type UseCase = {
  industry: string;
  title: string;
  body: string;
};

const useCases: UseCase[] = [
  {
    industry: "Customer Service",
    title: "AI Customer Support Copilot",
    body: "Give service teams conversational access to policies, product knowledge, customer history, and suggested next actions.",
  },
  {
    industry: "Financial Services",
    title: "Document Intelligence",
    body: "Extract, classify, summarize, and validate information from financial documents while routing exceptions for human review.",
  },
  {
    industry: "Healthcare",
    title: "Clinical Knowledge Assistant",
    body: "Make approved internal knowledge easier to search and summarize while maintaining access controls and source traceability.",
  },
  {
    industry: "Retail & E-Commerce",
    title: "Personalized Shopping Experiences",
    body: "Use customer, catalog, and behavioral data to power recommendations, conversational discovery, and personalized product journeys.",
  },
  {
    industry: "Manufacturing",
    title: "Operations Intelligence",
    body: "Combine machine data, maintenance history, and operational knowledge to surface anomalies and recommend actions before downtime.",
  },
  {
    industry: "Enterprise Operations",
    title: "Workflow Automation",
    body: "Use AI agents and automation to classify requests, retrieve information, update systems, and route decisions across business processes.",
  },
];

type Impact = {
  title: string;
  body: string;
};

const impactAreas: Impact[] = [
  {
    title: "Build AI Into Products",
    body: "Add intelligence to customer and employee applications so AI improves the product experience instead of living as a separate experiment.",
  },
  {
    title: "Ground AI in Enterprise Knowledge",
    body: "Connect models to trusted internal information through RAG, retrieval, permissions, and source-aware responses.",
  },
  {
    title: "Automate Business Work",
    body: "Combine agents, APIs, business rules, and approvals to automate repeatable knowledge workflows with measurable outcomes.",
  },
  {
    title: "Improve Decision Making",
    body: "Use predictive ML and GenAI to help teams discover patterns, summarize complex information, and act faster.",
  },
  {
    title: "Scale AI Responsibly",
    body: "Create governance, evaluation, security, and monitoring practices that let AI initiatives grow without sacrificing trust.",
  },
  {
    title: "Measure AI Outcomes",
    body: "Track quality, adoption, latency, cost, safety, and business impact so AI programs can continuously improve.",
  },
];

type Insight = {
  title: string;
  body: string;
  image: string;
  href: string;
};

const insights: Insight[] = [
  {
    title: "Generative AI in the Enterprise",
    body: "A practical view of moving GenAI from experiments to secure, measurable production use cases.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/services/ai-generative-ai/blogs/generative-ai-enterprise",
  },
  {
    title: "RAG vs. Fine-Tuning",
    body: "Understand when enterprise knowledge retrieval is the right architecture and when model customization makes sense.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    href: "/services/ai-generative-ai/blogs/rag-vs-fine-tuning",
  },
  {
    title: "AI Agents and Enterprise Workflows",
    body: "How tool-using agents can connect reasoning with the systems and processes your teams already depend on.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    href: "/services/ai-generative-ai/blogs/ai-agents-enterprise-workflows",
  },
  {
    title: "Evaluating LLM Applications",
    body: "Why production AI needs evaluation for quality, groundedness, safety, cost, and task success.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
    href: "/services/ai-generative-ai/blogs/llm-evaluation",
  },
];

function Carousel<T>({
  items,
  renderItem,
  dark = false,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  dark?: boolean;
}) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / perPage));

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <div key={index}>{renderItem(item, page * perPage + index)}</div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-5">
        <div
          className="h-[2px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.16)" : "#CBD5E1",
          }}
        >
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${((page + 1) / pageCount) * 100}%`,
              backgroundColor: INDIGO,
            }}
          />
        </div>

        <span
          className="font-body text-[13px] tabular-nums"
          style={{ color: dark ? "#94A3B8" : "#64748B" }}
        >
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(pageCount).padStart(2, "0")}
        </span>

        <button
          type="button"
          aria-label="Previous"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105 disabled:opacity-35"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.10)" : "#E9E6F6",
            color: dark ? "#fff" : CHAMPION_BLUE,
          }}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          aria-label="Next"
          disabled={page === pageCount - 1}
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:scale-105 disabled:opacity-35"
          style={{ backgroundColor: INDIGO }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function AIGenerativeAIServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [openImpact, setOpenImpact] = useState<number | null>(0);

  const current = deepDives[activeTab];

  useEffect(() => {
    if (tabHovered) return;

    const timer = setInterval(() => {
      setActiveTab((current) => (current + 1) % deepDives.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [tabHovered]);

  return (
    <main className="bg-white pt-[92px] lg:pt-[100px]">
      <style>{`
        @keyframes ai-tab-progress {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-white/35" />
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} py-24 lg:py-32`}
        >
          <motion.nav
            variants={heroItem}
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-500">AI & Generative AI</span>
          </motion.nav>

          <motion.div variants={heroItem} className="mt-8">
            <span
              className="font-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{ backgroundColor: "#F1EEFC", color: INDIGO }}
            >
              <Sparkles size={15} />
              AI & GENERATIVE AI
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-heading mt-6 max-w-3xl text-[44px] font-medium leading-[1.1] lg:text-[60px]"
            style={{ color: CHAMPION_BLUE }}
          >
            AI & Generative AI
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-body mt-6 max-w-2xl text-[17px] leading-[1.8] text-slate-600"
          >
            Build intelligent applications, automate workflows and embed AI into products and enterprise operations.
          </motion.p>

          <motion.a
            variants={heroItem}
            href="#connect"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Talk to Our AI Team
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      {/* AI CAPABILITIES OVERVIEW */}
      <div className={ALIGN}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
          <div
            className="overflow-hidden rounded-[22px] border bg-white"
            style={{ borderColor: LAVENDER }}
          >
            <div
              className="flex min-h-[104px] items-center justify-between gap-5 px-8 py-6 lg:px-10"
              style={{ borderBottom: `1px solid ${LAVENDER}` }}
            >
              <div className="flex items-center gap-3">
                <Sparkles size={21} style={{ color: LAVENDER }} />
                <span
                  className="font-body text-[17px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  AI Capabilities Overview
                </span>
              </div>

              <span
                className="font-body rounded-full px-5 py-2.5 text-[13px] font-semibold"
                style={{ backgroundColor: "#F1EEFC", color: INDIGO }}
              >
                Intelligent by Design
              </span>
            </div>

            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
              {[
                {
                  title: "Build",
                  body: "Engineer AI/ML, GenAI, LLM, agent, and intelligent application capabilities that solve real business problems.",
                },
                {
                  title: "Connect",
                  body: "Ground AI in enterprise data and integrate models with applications, APIs, knowledge, and business workflows.",
                },
                {
                  title: "Scale",
                  body: "Evaluate, govern, monitor, and continuously improve AI systems so they can scale securely across the enterprise.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="font-heading text-[23px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-4xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            We help enterprises turn AI from an isolated experiment into a
            trusted capability embedded across products, data, and operations.
          </p>
        </motion.section>

        {/* Q&A */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20"
        >
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER }}
              >
                How Do Enterprises Turn AI Into a Production Capability?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-[1.8] text-slate-600">
                Successful AI programs connect the right models to trusted data,
                business context, applications, and workflows. Starfii combines
                engineering, integration, evaluation, and governance so AI
                systems are useful in production—not just impressive in a demo.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="Team working on an AI application"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* AI/ML + GENAI CAPABILITIES */}
      <section
        className="relative mt-24 overflow-hidden py-24"
        style={{
          background: `radial-gradient(120% 140% at 85% 100%, rgba(108,93,211,0.35), transparent 55%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[46px]">
              AI & Generative AI
              <br />
              Capabilities
            </h2>
            <p className="font-body mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300">
              From AI/ML engineering to agents, RAG, automation, evaluation,
              and governance, we build the technical foundation for practical,
              enterprise-ready AI.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={cardItem}
                className="flex min-h-[290px] flex-col rounded-2xl p-8 transition-colors duration-300 hover:bg-white/[0.07]"
                style={{
                  backgroundColor: DARK_CARD,
                  border: `1px solid ${DARK_BORDER}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-body text-[14px] text-slate-500">
                    {String(index + 41).padStart(2, "0")}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h3 className="font-heading mt-6 text-[19px] font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-400">
                  {capability.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* USE CASES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-24"
        >
          <h2
            className="font-heading text-[36px] font-medium leading-[1.15]"
            style={{ color: CHAMPION_BLUE }}
          >
            AI & Generative AI Use Cases
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Practical examples of how AI, GenAI, agents, and intelligent
            applications can create measurable value across the enterprise.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={cardItem}
                className="flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 hover:bg-[#F8F7FD]"
                style={{ borderColor: "#E5E1F5" }}
              >
                <span
                  className="font-body text-[12px] font-semibold tracking-wide"
                  style={{ color: LAVENDER }}
                >
                  {useCase.industry.toUpperCase()}
                </span>

                <h3
                  className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {useCase.title}
                </h3>

                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                  {useCase.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CASE STUDIES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-24"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2
                className="font-heading text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                AI & Generative AI
                <br />
                Case Studies
              </h2>
              <p className="font-body mt-4 max-w-2xl text-[15px] text-slate-600">
                Real-world examples of applying intelligent systems to products,
                operations, knowledge, and decision making.
              </p>
            </div>

            <Link
              href="/services/ai-generative-ai/casestudies"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: INDIGO }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-10">
            <Carousel
              items={useCases.slice(0, 4)}
              renderItem={(study) => (
                <div
                  className="flex h-full min-h-[280px] flex-col rounded-2xl p-7"
                  style={{
                    backgroundColor: "#F5F3FC",
                    border: "1px solid #E5E1F5",
                  }}
                >
                  <span
                    className="font-body text-[12px] font-semibold tracking-wide"
                    style={{ color: LAVENDER }}
                  >
                    {study.industry.toUpperCase()}
                  </span>
                  <h3
                    className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {study.title}
                  </h3>
                  <p className="font-body mt-4 flex-1 text-[14px] leading-relaxed text-slate-600">
                    {study.body}
                  </p>
                  <Link
                    href="/services/ai-generative-ai/casestudies"
                    className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                    style={{ color: INDIGO }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              )}
            />
          </div>
        </motion.section>

        {/* SERVICE DEEP DIVE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            AI Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            <ul
              className="space-y-1 border-l"
              style={{ borderColor: "#E5E1F5" }}
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
            >
              {deepDives.map((tab, index) => {
                const active = index === activeTab;

                return (
                  <li key={tab.label} className="relative -ml-px">
                    {active && (
                      <span
                        key={`${activeTab}-${tabHovered}`}
                        className="ai-tab-progress-fill pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top"
                        style={{
                          backgroundColor: CHAMPION_BLUE,
                          animation: tabHovered
                            ? "none"
                            : `ai-tab-progress ${AUTOPLAY_MS}ms linear forwards`,
                          transform: tabHovered ? "scaleY(1)" : undefined,
                        }}
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className="font-body block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        color: active ? CHAMPION_BLUE : "#94A3B8",
                        fontWeight: active ? 600 : 500,
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:min-h-[360px] md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <span
                  className="font-body text-[12px] font-semibold tracking-wide"
                  style={{ color: LAVENDER }}
                >
                  {current.label.toUpperCase()}
                </span>
                <h3
                  className="font-heading mt-3 text-[23px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="h-[300px] md:h-full">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* IMPACT */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: `radial-gradient(110% 130% at 90% 100%, rgba(164,143,234,0.22), transparent 50%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span
              className="font-body text-[12px] font-semibold tracking-[0.18em]"
              style={{ color: "#B9AEF3" }}
            >
              AI AT SCALE
            </span>
            <h2 className="font-heading mt-4 max-w-3xl text-[36px] font-medium leading-[1.15] text-white lg:text-[46px]">
              Impact Across Your AI & Generative AI Ecosystem
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {impactAreas.map((area, index) => {
              const isOpen = openImpact === index;

              return (
                <motion.div key={area.title} variants={cardItem}>
                  <button
                    type="button"
                    onClick={() => setOpenImpact(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 rounded-2xl bg-white px-8 py-6 text-left"
                  >
                    <span
                      className="font-body text-[16px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {area.title}
                    </span>

                    <span
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-white transition-transform duration-300"
                      style={{
                        backgroundColor: INDIGO,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <p className="font-body mt-3 px-8 text-[14px] leading-relaxed text-slate-300">
                      {area.body}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHAT'S NEW */}
      <section className="py-24" style={{ backgroundColor: "#EEF0FB" }}>
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between gap-6"
          >
            <div>
              <h2
                className="font-heading max-w-2xl text-[36px] font-medium leading-[1.15] lg:text-[44px]"
                style={{ color: CHAMPION_BLUE }}
              >
                What&apos;s New in AI
                <br />
                & Generative AI
              </h2>
              <p className="font-body mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
                Perspectives on GenAI, LLM engineering, agents, RAG, evaluation,
                and responsible enterprise AI.
              </p>
            </div>

            <Link
              href="/services/ai-generative-ai/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: INDIGO }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-14">
            <Carousel
              items={insights}
              renderItem={(post) => (
                <Link href={post.href} className="block h-full">
                  <article className="flex min-h-[380px] h-full flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[220px] overflow-hidden bg-slate-900">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className="font-body text-[12px] font-semibold tracking-wide"
                        style={{ color: INDIGO }}
                      >
                        AI INSIGHT
                      </span>

                      <h3
                        className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {post.title}
                      </h3>

                      <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                        {post.body}
                      </p>

                      <span
                        className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                        style={{ color: INDIGO }}
                      >
                        Read More
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </article>
                </Link>
              )}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="connect" className="relative overflow-hidden py-28">
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[28px] px-8 py-16 text-center lg:px-16"
            style={{
              background: `radial-gradient(80% 120% at 50% 0%, rgba(164,143,234,0.28), transparent 65%), ${DARK_BG}`,
            }}
          >
            <div className="mx-auto max-w-3xl">
              <span
                className="font-body inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide text-white/80"
                style={{ borderColor: "rgba(255,255,255,0.14)" }}
              >
                <Sparkles size={15} />
                BUILD WITH AI
              </span>

              <h2 className="font-heading mt-6 text-[38px] font-medium leading-[1.12] text-white lg:text-[52px]">
                Ready to Turn Your AI Idea Into a Production Capability?
              </h2>

              <p className="font-body mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300">
                Bring us your use case, data challenge, product idea, or
                automation opportunity. We&apos;ll help you define the right AI
                architecture and path to production.
              </p>

              <Link
                href="/contact"
                className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
                style={{ backgroundColor: INDIGO }}
              >
                Connect Now
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
