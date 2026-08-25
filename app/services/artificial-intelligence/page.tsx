// app/services/artificial-intelligence/page.tsx
"use client";

import {
  ArrowUpRight,
  ChevronRight,
  BrainCircuit,
  Sparkles,
  Eye,
  MessagesSquare,
  LineChart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

// ✅ Matches navbar's outer wrapper exactly: max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const useCases = [
  { name: "Predictive Maintenance", detail: "Failure prediction models for manufacturing and industrial equipment." },
  { name: "Fraud & Risk Scoring", detail: "Real-time anomaly detection for financial and insurance transactions." },
  { name: "Demand Forecasting", detail: "Inventory and supply-chain forecasting from historical and market signals." },
  { name: "Clinical Decision Support", detail: "Diagnostic-assist and triage models trained on structured health data." },
  { name: "Document Intelligence", detail: "Extraction and classification across invoices, contracts, and forms." },
  { name: "Recommendation Engines", detail: "Personalization models for e-commerce and content platforms." },
];

const capabilities = [
  { icon: BrainCircuit, title: "AI Strategy & Readiness", desc: "We assess data maturity, infrastructure, and the business case before recommending build, buy, or fine-tune — not the other way around." },
  { icon: Sparkles, title: "Model Development", desc: "Custom ML models built and validated against your data — classification, forecasting, ranking, and recommendation systems." },
  { icon: Eye, title: "Computer Vision", desc: "Object detection, defect inspection, and image classification pipelines deployed at production throughput." },
  { icon: MessagesSquare, title: "NLP & Conversational AI", desc: "Entity extraction, document classification, and intent-driven chat and voice interfaces trained on domain language." },
  { icon: LineChart, title: "MLOps & Model Monitoring", desc: "CI/CD pipelines for models, with drift detection and retraining triggers so accuracy holds up after deployment." },
  { icon: ShieldCheck, title: "Responsible AI", desc: "Bias testing, explainability reporting, and human-in-the-loop review built into the model lifecycle, not bolted on after audit." },
];

const engagementSteps = [
  { title: "Discover", desc: "We identify the highest-value use case where data quality and business impact both clear the bar." },
  { title: "Prototype", desc: "A working model against real data, benchmarked for accuracy before any production commitment." },
  { title: "Productionize", desc: "The model is hardened, wrapped in APIs, and integrated into the systems people actually use." },
  { title: "Monitor & Retrain", desc: "Ongoing tracking of drift and accuracy, with scheduled retraining as the underlying data shifts." },
];

export default function ArtificialIntelligencePage() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className={`${T.inkBg} relative overflow-hidden pt-[104px] pb-20 sm:pt-[118px]`}>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(60% 80% at 100% 40%, rgba(59,47,224,0.35) 0%, rgba(143,168,255,0.18) 40%, rgba(12,14,42,0) 72%)",
          }}
        />
        <div className={`relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] ${ALIGN}`}>
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] font-medium text-white/50">
              <a href="/" className="transition-colors hover:text-white/80">Home</a>
              <ChevronRight size={13} />
              <a href="/services" className="transition-colors hover:text-white/80">Services</a>
              <ChevronRight size={13} />
              <span className="text-white/75">Artificial Intelligence</span>
            </nav>
            <h1 className="mt-6 max-w-xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
              AI Models Built for{" "}
              <span className="text-[#8FA8FF]">Your Data</span>, Not a Generic Benchmark
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">
              From strategy to production, we build and operate machine
              learning systems — prediction, vision, language, and
              recommendation — validated against your data before they touch
              a live decision.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#talk-to-us" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
                Talk to us
                <ArrowUpRight size={16} />
              </a>
              <a href="#use-cases" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                See use cases
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Model types we build
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Prediction", "Computer Vision", "NLP", "Recommendation"].map((name) => (
                  <div key={name} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85">
                    {name}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[28px] font-bold text-white">6</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                  Core AI capability areas, from strategy through MLOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={`text-[28px] font-bold ${T.ink}`}>
              We collaborate on the problem before the model
            </h2>
            <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
              Most AI initiatives stall because the problem was never framed
              in a way a model could solve. We start with your business
              problem, identify whether it's a classification, forecasting,
              or generative problem, and only then choose the right model
              family and architecture.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Data scientists and ML engineers embedded with your domain experts",
                "Model choice driven by the problem, not defaulted to the newest architecture",
                "Every model benchmarked against a defined accuracy and latency target",
                "Deployment designed for monitoring and retraining from day one",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                  <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-2xl border ${T.border} ${T.panelBg} p-8`}>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              How this differs from Generative AI
            </p>
            <p className={`mt-4 text-[14.5px] leading-relaxed ${T.ink}`}>
              This practice covers predictive and applied ML — forecasting,
              vision, fraud detection, and recommendation systems built on
              your structured and unstructured data.
            </p>
            <p className={`mt-4 text-[14.5px] leading-relaxed ${T.muted}`}>
              For large language model and generative use cases — copilots,
              content generation, retrieval-augmented assistants — see our
              dedicated Generative AI offering.
            </p>
            <a href="#" className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}>
              View Generative AI
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <h2 className={`text-[28px] font-bold ${T.ink}`}>What we deliver</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`rounded-xl border ${T.border} bg-white p-6`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`mt-4 text-[16.5px] font-semibold ${T.ink}`}>{title}</h3>
                <p className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== USE CASES ===================== */}
      <section id="use-cases" className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>Use cases we've built</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Applied AI across manufacturing, financial services, healthcare, and retail.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.name} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{u.name}</h4>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{u.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ENGAGEMENT MODEL ===================== */}
      <section className={T.inkBg}>
        <div className={`${ALIGN} py-20`}>
          <h2 className="text-[28px] font-bold text-white">How an engagement runs</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step, i) => (
              <div key={step.title} className="border-t border-white/15 pt-5">
                <p className="text-[13px] font-semibold text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-[17px] font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="talk-to-us" className={`${ALIGN} py-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>
              Have a use case you're not sure is "AI-ready"?
            </h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              Bring us the data and the decision it should improve — we'll tell you honestly if a model is worth building.
            </p>
          </div>
          <a href="/contact" className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
            Talk to us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}