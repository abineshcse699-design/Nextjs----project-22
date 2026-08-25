import Link from "next/link";
import { ArrowUpRight, Cloud, Cpu, Layers, ShieldCheck } from "lucide-react";

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

/* Same max-width + padding scale as the navbar's inner container, so
   every section on this page lines up edge-to-edge with the nav. */
const CONTAINER = "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

export const metadata = {
  title: "Partners | Starfii",
  description:
    "Starfii's technology alliances and client partners — the cloud, AI, and platform ecosystem behind every product we build.",
};

const techPartners = [
  {
    icon: Cloud,
    tier: "Cloud Infrastructure",
    partners: "AWS · Microsoft Azure · Google Cloud Platform",
    body:
      "Certified engineering across all three hyperscalers, from landing-zone setup to cost-optimized production workloads.",
  },
  {
    icon: Cpu,
    tier: "AI & Foundation Models",
    partners: "OpenAI · Anthropic · Google DeepMind",
    body:
      "Direct model-provider relationships that keep our AI/ML and LLM engineering practice current with the frontier, not a generation behind it.",
  },
  {
    icon: Layers,
    tier: "Enterprise Platforms",
    partners: "ServiceNow · Salesforce · SAP",
    body:
      "Implementation and integration partnerships for the enterprise systems our clients already run their business on.",
  },
  {
    icon: ShieldCheck,
    tier: "Security & Compliance",
    partners: "SOC 2 · ISO 27001 aligned tooling",
    body:
      "Partnerships with the security tooling vendors that let us build compliance in at the architecture stage, not audit it in afterward.",
  },
];

const clientLogos = [
  "Entrans",
  "Apexx Cloud",
  "Turbodev",
  "Kurryzo",
  "KareerSity",
  "Filecentral",
  "TheThird",
];

const whyPartner = [
  {
    title: "Co-sell, not just referral",
    body: "We build joint solutions with our partners and go to market together, rather than treating partnership as a lead-share arrangement.",
  },
  {
    title: "Certified, hands-on engineers",
    body: "Our teams hold active certifications on partner platforms and use them daily on client work, not just in a training environment.",
  },
  {
    title: "One roadmap, shared upside",
    body: "Technology and delivery partnerships are structured around a shared roadmap, so both sides are building toward the same outcome.",
  },
];

export default function PartnersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#E4E4EF] pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            About Starfii / Partners
          </p>
          <h1 className={`mt-5 max-w-3xl text-[42px] font-bold leading-[1.1] ${T.ink} lg:text-[52px]`}>
            The ecosystem behind every product we ship.
          </h1>
          <p className={`mt-6 max-w-2xl text-[17px] leading-relaxed ${T.muted}`}>
            From the hyperscalers we build on to the clients we build for,
            our partnerships are what let a small senior team deliver at
            enterprise scale.
          </p>
        </div>
      </section>

      {/* Technology partners */}
      <section className="py-20 lg:py-24">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Technology alliances
          </p>
          <h2 className={`mt-4 max-w-xl text-[28px] font-bold leading-tight ${T.ink} lg:text-[32px]`}>
            Certified across the stack our clients run on.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {techPartners.map((p) => (
              <div key={p.tier} className={`rounded-lg border ${T.border} p-7`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <p.icon size={20} className="text-white" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-[17px] font-semibold ${T.ink}`}>{p.tier}</h3>
                <p className={`mt-1.5 text-[13.5px] font-semibold ${T.primary}`}>{p.partners}</p>
                <p className={`mt-3 text-[14px] leading-relaxed ${T.muted}`}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client partners */}
      <section className={`${T.panelBg} py-20 lg:py-24`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Client partners
          </p>
          <h2 className={`mt-4 max-w-xl text-[28px] font-bold leading-tight ${T.ink} lg:text-[32px]`}>
            Trusted by product teams across fintech, logistics, and SaaS.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((name) => (
              <div
                key={name}
                className={`flex h-20 items-center justify-center rounded-lg border ${T.border} bg-white px-4`}
              >
                <span className={`text-[15px] font-semibold ${T.ink} opacity-70`}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="py-20 lg:py-24">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Why partner with Starfii
          </p>
          <h2 className={`mt-4 max-w-xl text-[28px] font-bold leading-tight ${T.ink} lg:text-[32px]`}>
            What our alliance and delivery partners get.
          </h2>

          <div className={`mt-12 divide-y ${T.border}`}>
            {whyPartner.map((w, idx) => (
              <div
                key={w.title}
                className={`grid grid-cols-1 gap-3 py-8 lg:grid-cols-[60px_1fr_1.2fr] ${
                  idx === 0 ? "border-t border-[#E4E4EF]" : ""
                }`}
              >
                <p className={`text-[15px] font-bold ${T.primary}`}>0{idx + 1}</p>
                <h3 className={`text-[17px] font-semibold leading-snug ${T.ink}`}>{w.title}</h3>
                <p className={`text-[14.5px] leading-relaxed ${T.muted}`}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${T.inkBg} py-20 lg:py-24`}>
        <div className={`flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center ${CONTAINER}`}>
          <div>
            <h2 className="text-[26px] font-bold text-white lg:text-[30px]">
              Interested in becoming a Starfii partner?
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
              Tell us about your platform or practice — we'll follow up with
              the right lead on our side.
            </p>
          </div>
          <Link
            href="/contact"
            className={`inline-flex shrink-0 items-center gap-2 rounded-md ${T.primaryBg} ${T.primaryHoverBg} px-7 py-3.5 text-[15px] font-semibold text-white transition-colors`}
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}