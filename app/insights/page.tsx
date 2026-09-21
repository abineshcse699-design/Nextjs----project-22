import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Database,
  Layers,
  LayoutGrid,
  Link2,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  BarChart3,
} from "lucide-react";
import { IndustryTimeline, ProcessSteps, ScrollTopButton } from "./InsightsClient";

/* Same heading tokens as the Banking page */
const CHAMPION_BLUE = "#1B2560";
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

export const metadata: Metadata = {
  title: "Insights | Discover What's Next in Your Sector | Starfii Technology",
  description:
    "AI driven software and product engineering for e commerce, healthcare, ed tech, travel, finance, and logistics. Explore how Starfii helps your sector build what's next.",
      icons: {
    icon: [
      {
        url: "/starfii_logo_WHITE.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const dash = "border-[#1E88F0]/60";

type NodeProps = { icon: React.ComponentType<{ size?: number }>; title: string; sub?: string };

function Node({ icon: Icon, title, sub }: NodeProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#BFDDFB] bg-white px-4 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F3FE] text-[#1E88F0]">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-[14px] font-semibold leading-snug text-[#0B1B33]">{title}</span>
        {sub && <span className="block text-[12px] text-[#6B7386]">{sub}</span>}
      </span>
    </div>
  );
}

function Diagram() {
  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col items-center">
      <div className="w-[300px]">
        <Node icon={Users} title="Your Sector" sub="Define · Validate · Launch" />
      </div>
      <div className={`h-7 border-l border-dashed ${dash}`} />
      <div className="grid w-full grid-cols-[1fr_20px_auto_20px_1fr] items-center">
        <div className="space-y-3">
          <Node icon={Layers} title="Enterprise Product Engineering" />
          <Node icon={LayoutGrid} title="SaaS Product Engineering" />
          <Node icon={Sparkles} title="Gen AI & LLM Engineering" />
        </div>
        <div className={`border-t border-dashed ${dash}`} />
        <div className="w-[150px] rounded-2xl bg-[#1E88F0] px-4 py-7 text-center text-white shadow-[0_16px_40px_rgba(30,136,240,0.35)]">
          <span className="mx-auto mb-3 block h-3 w-3 rounded-full bg-white" />
          <p className="text-[15px] font-semibold leading-snug">Starfii Delivery Engine</p>
          <p className="mt-3 text-[11px] leading-snug text-white/85">Design · Build · Scale</p>
        </div>
        <div className={`border-t border-dashed ${dash}`} />
        <div className="space-y-3">
          <Node icon={Database} title="Data Engineering & Science" />
          <Node icon={RefreshCw} title="Legacy Modernization" />
          <Node icon={ShieldCheck} title="DevOps & Quality Engineering" />
        </div>
      </div>
      <div className={`h-7 border-l border-dashed ${dash}`} />
      <div className="w-[300px]">
        <Node icon={Cloud} title="Modern Tech Stack" sub="React · Node.js · Python · AWS · Azure" />
      </div>
    </div>
  );
}

const solutions = [
  {
    title: "Enterprise & SaaS Product Engineering",
    tag: "Product foundation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    text: "We design, develop, and deliver end to end enterprise and SaaS products across fintech, healthcare, e commerce, and more, combining modern technology with AI powered frameworks for scalable growth.",
  },
  {
    title: "Enterprise AI, Gen AI & LLM Engineering",
    tag: "AI & automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    text: "Reduce manual tasks and improve efficiency with tailored automation, from AI chatbots and meeting assistants to data extraction, backed by certified data engineers and data scientists.",
  },
  {
    title: "Secure, Compliant, Built to Scale",
    tag: "Security & delivery",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    text: "You keep all IP rights, and our apps comply with data protection and domain specific regulations. DevOps, test automation, a free warranty period, and SLA support keep releases fast and reliable.",
  },
];

const features = [
  { icon: Layers, text: "End to end web and mobile product engineering, from UI/UX design to launch and support" },
  { icon: Link2, text: "Integrations with your existing CRMs, helpdesks, and communication platforms" },
  { icon: ShieldCheck, text: "IP protection, data security, and domain specific compliance built in" },
  { icon: BarChart3, text: "DevOps pipelines, test automation, and SLA backed support after launch" },
];

export default function InsightsPage() {
  return (
    <main className="font-body bg-white text-[#0B1B33]">
      {/* 1. Hero */}
      <section className={`${ALIGN} pb-20 pt-[140px] lg:pb-28 lg:pt-[176px]`}>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h1
              className="font-heading text-[32px] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[38px] lg:text-[44px] xl:text-[48px]"
              style={{ color: CHAMPION_BLUE }}
            >
              Discover What&apos;s Next in Your Sector
            </h1>
            <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.85] text-[#26324A]">
              Starfii delivers AI driven software and product engineering for businesses worldwide. Across 3+ development locations, our
              team builds scalable, high performance solutions customized for your business, from MVP to enterprise scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#form"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#0B1B33] px-8 text-[16px] font-semibold text-white transition-colors duration-150 hover:bg-[#16294A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88F0] focus-visible:ring-offset-2"
              >
                Request Your POC Now! <ArrowRight size={18} />
              </Link>
              <Link
                href="/About/Case-study"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#FF5B2E] px-8 text-[16px] font-semibold text-white transition-colors duration-150 hover:bg-[#E84D22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B2E] focus-visible:ring-offset-2"
              >
                Explore Case Studies <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Diagram />
          </div>
        </div>
      </section>

      {/* 2. Solutions */}
      <section className={`${ALIGN} pb-24 lg:pb-32`}>
        <h2 className={`${SECTION_HEADING} mx-auto max-w-[960px] text-center`} style={{ color: CHAMPION_BLUE }}>
          Scalable, High Performance Solutions Customized for Your Business
        </h2>
        <p className="mx-auto mt-6 max-w-[80ch] text-center text-[17px] leading-relaxed text-slate-600">
          Move beyond one off builds. Compose reusable, scalable products, connect them to your data, and ship AI powered workflows that
          keep improving with real world usage.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-3xl border border-[#EEF0F6] bg-white shadow-[0_10px_40px_rgba(15,27,45,0.08)]"
            >
              <img src={s.image} alt="" className="h-[260px] w-full object-cover" />
              <div className="p-8">
                <h3 className="font-heading text-[22px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                  {s.title}
                </h3>
                <p className="mt-1 text-[14px] uppercase text-[#7A8296]">{s.tag}</p>
                <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Stats */}
      <section className="bg-[#101B2D] py-24 lg:py-28">
        <div className={ALIGN}>
          <h2 className={`${SECTION_HEADING} text-center text-white`}>
            Trusted by Leading Industry Clients Globally
          </h2>
          <p className="mx-auto mt-5 max-w-[70ch] text-center text-[17px] leading-relaxed text-[#C9D2E6]">
            Delivering tailored technology solutions that power success, innovation, and seamless digital transformation.
          </p>
          <div className="mt-14 grid items-center gap-6 md:grid-cols-3">
            <div className="flex min-h-[288px] flex-col justify-between rounded-3xl bg-[#E6E8F2] p-9">
              <p className="text-[20px] font-medium leading-snug text-[#26324A]">Years of Experience Delivering Top Solutions</p>
              <p className="text-[84px] font-light leading-none text-[#A7AEC6]">5+</p>
            </div>
            <div className="flex min-h-[288px] flex-col justify-between rounded-3xl bg-gradient-to-br from-[#3F8BFA] to-[#2D5FB0] p-9 text-white shadow-[0_24px_60px_rgba(47,99,184,0.45)] md:translate-y-4">
              <p className="text-[84px] font-light leading-none">20+</p>
              <p className="text-[20px] font-semibold leading-snug">Successful Partnerships, Including Fortune 500 Leaders</p>
            </div>
            <div className="flex min-h-[288px] flex-col justify-between rounded-3xl bg-[#E6E8F2] p-9">
              <p className="text-[20px] font-medium leading-snug text-[#26324A]">Skilled Professionals with the Lowest Attrition</p>
              <p className="text-[84px] font-light leading-none text-[#A7AEC6]">80+</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Idea to launch */}
      <section className="bg-[#F7F9FC] py-24 lg:py-28">
        <div className={ALIGN}>
          <h2 className={`${SECTION_HEADING} text-center`} style={{ color: CHAMPION_BLUE }}>
            From Idea to Launched Product
          </h2>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(15,27,45,0.06)]">
              <p className="font-heading text-[19px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                Starfii gives you the core capabilities to design, build, and scale AI driven products across your industry.
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-5 rounded-xl border border-[#E6E9F2] px-5 py-4">
                    <f.icon size={30} className="shrink-0 text-[#FF5B2E]" />
                    <span className="text-[16px] leading-snug text-[#26324A]">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className={`${ALIGN} py-24 lg:py-32`}>
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className={`${SECTION_HEADING} max-w-[560px]`} style={{ color: CHAMPION_BLUE }}>
              AI Driven Engineering Across Your Industry
            </h2>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-[1.85] text-slate-600">
              Starfii delivers software and AI solutions across e commerce, healthcare, ed tech, travel, finance, and logistics, helping
              teams ship faster with compliant, scalable products.
            </p>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              alt="Team planning a product roadmap"
              className="mt-10 h-[340px] w-full rounded-3xl object-cover shadow-[0_10px_40px_rgba(15,27,45,0.12)]"
            />
          </div>
          <IndustryTimeline />
        </div>
      </section>

      {/* 6. CTA */}
      <section className={`${ALIGN} pb-24`}>
        <div className="rounded-3xl bg-[#101B2D] px-7 py-14 text-center sm:px-12 lg:py-20">
          <h2 className={`${SECTION_HEADING} mx-auto max-w-[760px] text-white`}>
            Have a Great Idea? Let&apos;s Discuss It.
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-[17px] leading-relaxed text-[#C9D2E6]">
            Tell us about your project and get a free consultation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/#form"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-[#FF5B2E] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#E84D22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:techteam@starfii.com"
              className="inline-flex h-14 items-center rounded-full border border-white/30 px-8 text-[16px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              techteam@starfii.com
            </a>
          </div>
        </div>
      </section>

      <ScrollTopButton />
    </main>
  );
}