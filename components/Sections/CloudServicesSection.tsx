"use client";

import { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Shared page-width wrapper, kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Cloud Services" tab list
const TAB_AUTOPLAY_MS = 4000;

// --- Shared animation variants ---
// heroContainer / heroItem: play once on page load (hero only)
// container / item: play once, triggered on scroll into view (rest of page)
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// SEO note: this page maps directly to Starfii's real "Cloud
// Engineering - AWS, Azure, GCP" service (see starfii.com/services).
// Primary keyword targets woven into the copy below: "cloud
// engineering services", "AWS Azure GCP consulting", "cloud
// migration services", "cloud-native application development",
// "multi-cloud architecture", "cloud cost optimization (FinOps)",
// "cloud security & compliance", "DevOps CI/CD", "cloud operations
// & SRE".

const keyTakeaways = [
  "Starfii delivers end-to-end cloud engineering services, covering migration, cloud-native development, and ongoing operations across AWS, Azure, and GCP.",
  "We design multi-cloud and hybrid cloud architecture built for scale, resilience, and cost efficiency, so you're never locked into a single vendor.",
  "Our cloud services span migration, modernization, FinOps cost optimization, and DevOps automation, wired together as one connected journey.",
  "We treat cloud security, compliance, and cost as first-class design constraints from day one, not afterthoughts bolted on post-migration.",
];

const focusAreas = [
  {
    title: "Cloud Migration Services",
    body: "We assess workloads, plan the migration sequence, and move systems to AWS, Azure, or GCP with minimal disruption to day-to-day business operations.",
  },
  {
    title: "Cloud-Native Application Development",
    body: "We design and build applications for the cloud from the ground up, using containers, microservices, and serverless architecture where they deliver the most value.",
  },
  {
    title: "Multi-Cloud & Hybrid Cloud Architecture",
    body: "We architect across AWS, Azure, and GCP so workloads run where they perform best, giving you multi-cloud flexibility without vendor lock-in.",
  },
  {
    title: "Cloud Security & Compliance",
    body: "We build security and compliance controls into your cloud environment from day one, so infrastructure growth never outpaces data protection.",
  },
  {
    title: "FinOps & Cloud Cost Optimization",
    body: "We monitor and tune cloud spend continuously through FinOps best practices, keeping infrastructure costs predictable as usage scales.",
  },
  {
    title: "Cloud Operations & Site Reliability Engineering (SRE)",
    body: "We run day-to-day cloud operations with site reliability engineering practices, keeping uptime high and incidents rare across your environment.",
  },
  {
    title: "DevOps & CI/CD Automation",
    body: "We build automated CI/CD pipelines that get code to production faster and safer, with testing, monitoring, and rollback built in.",
  },
  {
    title: "Data & AI Workloads on Cloud",
    body: "We design cloud infrastructure purpose-built for data engineering and AI/ML workloads, so pipelines and models run efficiently at scale.",
  },
];

const tabs = [
  {
    label: "Migration: Plan a Move That Fits",
    heading: "A cloud migration roadmap sequenced around business risk, not just technical ease",
    body: "We assess your workloads and build a cloud migration plan that moves the right systems in the right order, so the business keeps running while the cloud foundation gets built underneath it.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Cloud-Native: Built For the Cloud",
    heading: "Applications engineered for the cloud, not just moved onto it",
    body: "We build with containers, microservices, and serverless architecture where they genuinely help, so you get the elasticity, scalability, and resilience the cloud is meant to offer.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "FinOps: Control Cost as You Scale",
    heading: "FinOps that keeps cloud spend predictable, not a surprise on the invoice",
    body: "We monitor cloud usage continuously and right-size resources to match actual demand, so infrastructure cost scales with the business instead of running ahead of it.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Security: Secure by Design",
    heading: "Cloud security built into the architecture, not added after launch",
    body: "We embed identity, network, and compliance controls into the cloud environment from the start, so security scales alongside the workloads it protects.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "SRE: Keep Operations Reliable",
    heading: "Site reliability engineering that keeps uptime high as complexity grows",
    body: "Our SRE-led cloud operations team monitors, automates, and responds to incidents across your AWS, Azure, and GCP estate, so reliability holds steady as workloads multiply.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CloudServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // --- Autoplay for the left-side tab list ---
  // Advances to the next tab automatically every TAB_AUTOPLAY_MS.
  // Pauses on hover, and restarts the timer whenever the user
  // manually clicks a tab.
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    <main className="bg-white">
      {/* Progress-fill keyframe for the autoplaying tab indicator line */}
      <style>{`
        @keyframes ss-tab-progress {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ss-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
        }
      `}</style>

      {/* ============================================================
          HERO — animates once, right after page load
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop"
            alt="Cloud engineering team working on AWS, Azure, and GCP infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
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
            <span className="text-slate-500">Cloud Engineering</span>
          </motion.nav>

          <motion.h1
            variants={heroItem}
            className="mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Cloud Engineering Services on AWS, Azure & GCP
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600"
          >
            Migrate, modernize, and run on AWS, Azure, and GCP with cloud
            architecture designed for performance, security, and cost
            control from day one.
          </motion.p>

          <motion.a
            variants={heroItem}
            href="/services#serviceconact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Request Your POC Now
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS — animates on scroll into view
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
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
        </motion.section>

        {/* ============================================================
            Q&A BLOCK — animates on scroll into view
        ============================================================ */}
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
                className="text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Move to the Cloud Without Losing Control?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises stay in control during cloud adoption by
                sequencing migration around business risk, designing
                cloud-native applications from the start, and treating
                cost and security as ongoing FinOps and compliance
                practices, not one-time projects. Starfii brings these
                together across{" "}
                <a href="/services" className="underline" style={{ color: CHAMPION_BLUE }}>
                  AWS, Azure, and GCP cloud engineering
                </a>
                .
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                alt="Cloud engineers reviewing AWS and Azure infrastructure architecture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* ============================================================
            FOCUS AREAS — grid cards stagger in on scroll
        ============================================================ */}
        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2
                className="text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Cloud Engineering
                <br />
                Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Migrate, build, and operate on AWS, Azure, and GCP with
                architecture designed for scale, resilience, and
                predictable cost from the outset. See our full{" "}
                <a href="/services" className="underline" style={{ color: LAVENDER_ACCENT }}>
                  service offerings
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {focusAreas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={item}
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
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE, auto-advancing tab list, fixed panel height
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2
            className="text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Cloud Services, Explained
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav, autoplaying */}
            <ul
              className="space-y-1 border-l"
              style={{ borderColor: "#E5E1F5" }}
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
            >
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label} className="relative -ml-px">
                    {/* Animated progress fill, only rendered on the active tab,
                        remounted via key so the fill restarts from empty each time */}
                    {isActive && (
                      <span
                        key={`${activeTab}-${tabHovered}`}
                        className="ss-tab-progress-fill pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top"
                        style={{
                          backgroundColor: CHAMPION_BLUE,
                          animation: tabHovered
                            ? "none"
                            : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                          transform: tabHovered ? "scaleY(1)" : undefined,
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
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

            {/* Right panel, fixed height so the image never stretches
                oversized on tabs with shorter text content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:h-[340px] md:grid-cols-2"
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

              <div className="h-[280px] md:h-full">
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
    </main>
  );
}

/*
  SEO checklist for this page (apply outside this component, since
  it's a client component and can't export metadata):

  1. Page <title>: "Cloud Engineering Services | AWS, Azure & GCP |
     Starfii Technology" (under 60 chars).
  2. Meta description: "Starfii delivers cloud engineering services on
     AWS, Azure, and GCP, migration, cloud-native development,
     FinOps, security, and DevOps automation for growing enterprises."
  3. Internal links added in-page to /services, matching real nav
     structure, for topical consistency with the rest of starfii.com.
  4. One <h1> per page (done), with target keywords ("cloud
     engineering services", "AWS Azure GCP") in the H1, first
     paragraph, and multiple H2s/H3s.
  5. Descriptive, keyword-relevant alt text added to all images
     (previously empty on the hero image).
*/