"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const keyTakeaways = [
  "Starfii helps enterprises move to the cloud on their terms — at the pace, cost, and risk level that fits the business.",
  "We design cloud-native architectures on AWS, Azure, and GCP built for scale, resilience, and cost efficiency.",
  "Our focus spans migration, modernization, cloud operations, and FinOps, wired together as one journey.",
  "We treat cloud cost and security as first-class design constraints, not afterthoughts bolted on post-migration.",
];

const focusAreas = [
  {
    title: "Cloud Migration",
    body: "We assess workloads, plan the sequence, and migrate systems to the cloud with minimal disruption to the business.",
  },
  {
    title: "Cloud-Native Engineering",
    body: "We design and build applications for the cloud from the ground up, using containers, microservices, and serverless where they fit.",
  },
  {
    title: "Multi-Cloud & Hybrid Architecture",
    body: "We architect across AWS, Azure, and GCP so workloads sit where they perform best, without locking you into a single vendor.",
  },
  {
    title: "Cloud Security & Compliance",
    body: "We build security and compliance controls into the cloud environment from day one, so growth doesn't outpace protection.",
  },
  {
    title: "FinOps & Cost Optimization",
    body: "We monitor and tune cloud spend continuously, so infrastructure costs stay predictable as usage scales.",
  },
  {
    title: "Cloud Operations & SRE",
    body: "We run day-to-day cloud operations with site reliability practices, keeping uptime high and incidents rare.",
  },
  {
    title: "DevOps & CI/CD",
    body: "We build automated pipelines that get code to production faster and safer, with testing and rollback built in.",
  },
  {
    title: "Data & AI Workloads on Cloud",
    body: "We design cloud infrastructure purpose-built for data and AI workloads, so pipelines and models run efficiently at scale.",
  },
];

const tabs = [
  {
    label: "Plan a Migration That Fits",
    heading: "A migration roadmap sequenced around business risk, not just technical ease",
    body: "We assess your workloads and build a migration plan that moves the right systems in the right order, so the business keeps running while the cloud gets built underneath it.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Build Cloud-Native, Not Just Cloud-Hosted",
    heading: "Applications designed for the cloud, not just moved onto it",
    body: "We build with containers, microservices, and serverless where they genuinely help, so you get the elasticity and resilience the cloud is meant to offer.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Control Cost as You Scale",
    heading: "FinOps that keeps cloud spend predictable, not a surprise on the invoice",
    body: "We monitor usage continuously and tune resources to match actual demand, so cost scales with the business instead of running ahead of it.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Secure the Environment by Design",
    heading: "Security built into the cloud architecture, not added after launch",
    body: "We embed identity, network, and compliance controls into the environment from the start, so security scales alongside the workloads it protects.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Keep Operations Reliable",
    heading: "Site reliability practices that keep uptime high as complexity grows",
    body: "Our SRE-led operations teams monitor, automate, and respond to incidents across your cloud estate, so reliability holds steady as workloads multiply.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CloudServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-500">Cloud</span>
          </nav>

          <h1
            className="mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Cloud Engineering Built for Scale and Control
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600">
            Migrate, modernize, and run on AWS, Azure, and GCP with
            architecture designed for performance, security, and cost
            control from day one.
          </p>

          <a
            href="#connect"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        <section className="mt-16">
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <button
              type="button"
              onClick={() => setTakeawaysOpen((v) => !v)}
              className="flex w-full items-center justify-between px-8 py-6 text-left"
            >
              <span
                className="flex items-center gap-2.5 text-[16px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                <Sparkles size={18} style={{ color: LAVENDER_ACCENT }} />
                Key Takeaways
              </span>
              <ChevronDown
                size={20}
                style={{ color: CHAMPION_BLUE }}
                className={`transition-transform duration-300 ${
                  takeawaysOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {takeawaysOpen && (
              <ul
                className="space-y-3 px-8 pb-8"
                style={{ borderTop: `1px solid ${LAVENDER_ACCENT}` }}
              >
                {keyTakeaways.map((point, i) => (
                  <li
                    key={i}
                    className="pt-3 text-[15px] leading-relaxed text-slate-700"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p
            className="mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A specialist cloud engineering partner, Starfii designs and
            runs cloud environments on AWS, Azure, and GCP that balance
            performance, security, and cost as you scale.
          </p>
        </section>

        <section className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Move to the Cloud Without Losing Control?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises stay in control during cloud adoption by
                sequencing migration around business risk, designing
                cloud-native from the start, and treating cost and
                security as ongoing practices, not one-time projects.
                Starfii brings these together across AWS, Azure, and
                GCP.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                alt="Engineers reviewing cloud infrastructure"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <div>
              <h2
                className="text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Cloud Engineering
                <br />
                Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Migrate, build, and operate on the cloud with architecture
                designed for scale, resilience, and predictable cost from
                the outset.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#F5F3FC" }}
                >
                  <h3
                    className="text-[19px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    {area.body}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 pb-28">
          <h2
            className="text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Cloud Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            <ul className="space-y-1 border-l" style={{ borderColor: "#E5E1F5" }}>
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="-ml-px block border-l-2 py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        borderColor: isActive ? CHAMPION_BLUE : "transparent",
                        color: isActive ? CHAMPION_BLUE : "#94A3B8",
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="min-h-[280px]">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}