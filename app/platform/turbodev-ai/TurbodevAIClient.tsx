"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import {
//   Instagram,
  Phone,
  Globe,
  ShoppingBag,
  ShoppingCart,
  BarChart3,
  TrendingUp,
  ArrowUp,
  Package,
  Gift,
  CircleHelp,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
  Headset,
  Users,
  Layers,
  MessageSquare,
  Quote,
  RefreshCw,
  Bot,
  Send,
  Inbox,
  Target,
  CheckCheck,
  UserRound,
  Zap,
  MousePointerClick,
  Clock3,
  UserCheck,
  MessageCircle,
  PhoneCall,
  GraduationCap,
  Plane,
  DollarSign,
  Briefcase,
  Home,
  Heart,
  Cog,
} from "lucide-react";

/* ===============================================================
   Real brand logos (inline SVG, official marks)
================================================================ */
function WhatsAppLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.005 3C9.11 3 3.5 8.61 3.5 15.505c0 2.36.65 4.57 1.78 6.46L3 29l7.2-2.24a12.4 12.4 0 0 0 5.8 1.44h.005C22.9 28.2 28.5 22.6 28.5 15.7 28.5 8.8 22.9 3 16.005 3Z"
        fill="#25D366"
      />
      <path
        d="M22.1 18.66c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.05 1.3-.2.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.65-1.96-1.84-2.3-.2-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.16-.2.22-.33.33-.55.11-.22.06-.42-.02-.58-.08-.17-.75-1.81-1.03-2.48-.27-.65-.55-.56-.75-.57l-.64-.01c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.55 5.63 4.98.79.34 1.4.55 1.88.7.79.25 1.51.22 2.08.13.63-.1 1.96-.8 2.24-1.58.28-.77.28-1.44.2-1.58-.08-.14-.3-.22-.63-.39Z"
        fill="#fff"
      />
    </svg>
  );
}

function InstagramLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="10%" stopColor="#FFDD55" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#igGrad)" />
      <rect x="9.5" y="9.5" width="13" height="13" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="3.6" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="21.6" cy="10.4" r="1.1" fill="#fff" />
    </svg>
  );
}

function GmailLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="#fff" />
      <path d="M7 9.5v13a1.5 1.5 0 0 0 1.5 1.5h1.9V13.9L16 18l5.6-4.1v9.6h1.9A1.5 1.5 0 0 0 25 22V9.5" fill="none" />
      <path d="M8.5 24h2V13.9L16 18l5.5-4.1V24h2A1.5 1.5 0 0 0 25 22.5v-13a1.85 1.85 0 0 0-2.98-1.46L16 12.6l-6.02-4.56A1.85 1.85 0 0 0 7 9.5v13A1.5 1.5 0 0 0 8.5 24Z" fill="#EA4335" />
      <path d="M7 9.5v2.87L16 18l9-5.63V9.5a1.85 1.85 0 0 0-2.98-1.46L16 12.6 9.98 8.04A1.85 1.85 0 0 0 7 9.5Z" fill="#EA4335" />
      <path d="M7 12.37V22.5A1.5 1.5 0 0 0 8.5 24h1.9V13.9L7 12.37Z" fill="#C5221F" />
      <path d="M25 12.37V22.5a1.5 1.5 0 0 1-1.5 1.5h-1.9V13.9L25 12.37Z" fill="#C5221F" />
    </svg>
  );
}

function ShopifyLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.3 6.9c0-.18-.16-.28-.3-.29-.13-.01-2.68-.05-2.68-.05s-1.6-1.55-1.77-1.72c-.17-.17-.5-.12-.63-.08 0 0-.34.1-.9.28a6.3 6.3 0 0 0-.44-1.08c-.65-1.24-1.6-1.9-2.75-1.9h-.01c-.08 0-.16 0-.24.02-.03-.04-.07-.08-.1-.11-.5-.53-1.14-.79-1.9-.76-1.48.04-2.95 1.1-4.15 3-.85 1.33-1.5 3-1.68 4.29-1.72.53-2.92.9-2.95.91-.87.27-.9.3-1.01 1.12C1.7 11.03 0 24.4 0 24.4l17.9 3.16L26 25.6S23.3 7.08 23.3 6.9ZM16.6 4.2c-.43.13-.92.28-1.44.44V4.3c0-.7-.1-1.27-.26-1.72.63.08 1.18.5 1.7 1.62Zm-2.4-1.5c.19.44.31 1.06.31 1.9v.13c-.75.23-1.56.48-2.4.74.46-1.77 1.33-2.63 2.09-2.77Zm-.95-1.24c.13 0 .25.01.36.05-1 .47-2.05 1.65-2.5 3.99-.65.2-1.29.4-1.88.58.53-1.9 2-4.57 4.02-4.62Z"
        fill="#95BF47"
      />
      <path
        d="m22.99 6.63c-.13-.01-2.67-.05-2.67-.05s-1.6-1.55-1.77-1.72a.4.4 0 0 0-.23-.1l-1.32 27.31L26 25.6s-2.7-18.52-2.71-18.68a.31.31 0 0 0-.3-.29Z"
        fill="#5E8E3E"
      />
      <path
        d="M14.65 10.98 13.7 14.2s-.94-.5-2.09-.5c-1.68 0-1.77 1.06-1.77 1.32 0 1.45 3.8 2 3.8 5.42 0 2.68-1.7 4.41-4 4.41-2.76 0-4.17-1.72-4.17-1.72l.74-2.44s1.44 1.24 2.66 1.24c.8 0 1.12-.63 1.12-1.09 0-1.9-3.12-1.99-3.12-5.12 0-2.63 1.89-5.17 5.7-5.17 1.47 0 2.19.42 2.19.42Z"
        fill="#fff"
      />
    </svg>
  );
}

/* ===============================================================
   Fonts: Geist Sans for headings, Inter for body text
   + marquee keyframes for the "Trusted by" logo strip
================================================================ */
function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@500;600;700;800;900&display=swap');

      .business-next-content {
        animation: businessNextContentIn 0.65s cubic-bezier(.2,.8,.2,1) both;
      }
      @keyframes businessNextContentIn {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .business-next-content { animation: none; }
      }

      .font-heading {
        font-family: 'Geist', 'Geist Sans', ui-sans-serif, system-ui, sans-serif;
        letter-spacing: -0.01em;
      }
      .font-body {
        font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      }

      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}</style>
  );
}

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

/* ===============================================================
   "For Businesses" hero copy (used only when tab === "business")
================================================================ */
const businessHero = {
  eyebrow: "Meta Business Partners",
  headline: (
    <>
      AI agents that sell, support, and qualify leads on{" "}
      <span className="text-[#22B573]">WhatsApp</span> automatically
    </>
  ),
  description:
    "Deploy AI agents on WhatsApp that handle conversations, capture leads, and automate workflows across your business tools. No coding required. Launch in minutes.",
};

const trustedByLogos = ["FRAGANOTE", "STARFII", "TheThirdBiome", "andMe", "Traveon"];

/* ===============================================================
   Shared prop types
================================================================ */
interface WithChildren {
  children?: ReactNode;
}

interface UnlockButtonProps {
  className?: string;
}

interface StatPillProps {
  icon: ReactNode;
  value: string;
  label: string;
  valueColor: string;
  iconBg?: string;
}

interface RevenueRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

interface ProblemCardProps extends WithChildren {
  title: string;
  wide?: boolean;
}

interface DonutRingProps extends WithChildren {
  percent: number;
  color: string;
}

/* ---------------- shared bits ---------------- */

function UnlockButton({ className = "" }: UnlockButtonProps) {
  return (
    <button
      type="button"
      className={`font-body inline-flex items-center gap-2.5 rounded-full bg-[#0C0E2A] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(12,14,42,0.25)] transition-transform hover:scale-[1.02] ${className}`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD65C] to-[#F5A623] text-[13px]">
        $
      </span>
      Unlock More Revenue
    </button>
  );
}

function SectionEyebrow({ children }: WithChildren) {
  return (
    <p className="font-body flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6C4CF0]">
      <Sparkles size={13} strokeWidth={2.5} />
      {children}
    </p>
  );
}

/* ===============================================================
   Business tab — "Problem" section:
   "You spend lakhs on ads..." + 3 problem cards (Speed / Capacity / Revenue)
================================================================ */
function BusinessProblemSection() {
  const problems: { icon: ReactNode; tag: string; title: string; desc: string }[] = [
    {
      icon: <Zap size={20} className="text-[#6C4CF0]" strokeWidth={2.2} />,
      tag: "SPEED",
      title: "Leads go cold fast",
      desc: "A lead messages on WhatsApp. Your team replies hours later. By then, they've already moved on.",
    },
    {
      icon: <Users size={20} className="text-[#6C4CF0]" strokeWidth={2.2} />,
      tag: "CAPACITY",
      title: "Your team can't keep up",
      desc: "Sales reps spend their day copy-pasting qualification messages instead of actually selling.",
    },
    {
      icon: <TrendingUp size={20} className="text-[#6C4CF0]" strokeWidth={2.2} />,
      tag: "REVENUE",
      title: "Ad spend grows. Revenue doesn't.",
      desc: "You're paying more per lead every month but conversion rates stay the same. Something is broken.",
    },
  ];

  return (
    <section className={`${ALIGN} mt-28`}>
      <h2 className="font-heading mx-auto max-w-4xl text-center text-[32px] font-extrabold leading-[1.18] text-[#14163B] sm:text-[44px]">
        You spend lakhs on ads to generate leads, but most of those leads
        never convert into real customers
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {problems.map((p) => (
          <div key={p.tag} className="rounded-2xl bg-[#FAFAFB] p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F1FD]">
              {p.icon}
            </span>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6C4CF0]">
              {p.tag}
            </p>
            <h3 className="font-heading mt-1.5 text-[19px] font-bold text-[#14163B]">
              {p.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#5B5D78]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===============================================================
   Business tab — "How It Works" section:
   "One platform. From first message to closed deal." + 4 numbered steps
================================================================ */
function HowItWorksSection() {
  const steps: { number: string; tag: string; title: string; desc: string }[] = [
    {
      number: "01",
      tag: "LEAD CAPTURE",
      title: "Every lead lands directly in Turbodev",
      desc: "Your Click to WhatsApp ad fires. The lead sends you a message. Turbodev captures them instantly, with no manual work and no leads falling through the cracks.",
    },
    {
      number: "02",
      tag: "AI QUALIFICATION",
      title: "AI talks to every lead. Immediately.",
      desc: "Turbodev's AI responds within seconds, asks the right questions, and separates serious buyers from time wasters, automatically, at any hour.",
    },
    {
      number: "03",
      tag: "LEAD CONVERSION",
      title: "Qualified leads get booked. Without your team lifting a finger.",
      desc: "Once a lead is qualified, Turbodev books the appointment, sends confirmations, and follows up, so your sales team walks in only when it is time to close.",
    },
    {
      number: "04",
      tag: "SCALE",
      title: "Do it all. For thousands of leads. Simultaneously.",
      desc: "While your competitors' teams scramble to keep up, Turbodev handles thousands of conversations at the same time, without adding a single team member.",
    },
  ];

  return (
    <section className={`${ALIGN} mt-28`}>
      <SectionEyebrow>How It Works</SectionEyebrow>
      <h2 className="font-heading mt-4 text-[32px] font-extrabold leading-tight text-[#14163B] sm:text-[42px]">
        One platform. From first message to closed deal.
      </h2>

      <div className="relative mt-14">
        <div className="absolute left-[27px] top-3 bottom-3 w-px bg-[#EDEBFB]" />
        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-8">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD] text-[15px] font-extrabold text-[#6C4CF0]">
                {step.number}
              </span>
              <div className="flex-1 rounded-2xl border border-[#EEEEF5] bg-white p-6 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6C4CF0]">
                  {step.tag}
                </p>
                <h3 className="font-heading mt-1.5 text-[19px] font-bold text-[#14163B]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#5B5D78]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Toggle used in both hero variants, so tab-switching works from either side */
function HeroTabToggle({
  tab,
  setTab,
}: {
  tab: "shopify" | "business";
  setTab: (t: "shopify" | "business") => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#E4E4EF] bg-white p-1.5 shadow-sm">
      <button
        type="button"
        onClick={() => setTab("shopify")}
        className={`flex items-center gap-2 rounded-full px-5 py-2 text-[14.5px] font-semibold transition-colors ${
          tab === "shopify" ? "bg-white shadow-sm text-[#14163B]" : "text-[#8A8CA6]"
        }`}
      >
        For{" "}
        <span className="inline-flex items-center gap-1.5 font-bold italic text-[#14163B]">
          <ShopifyLogo size={17} />
          shopify
        </span>
      </button>
      <button
        type="button"
        onClick={() => setTab("business")}
        className={`rounded-full px-5 py-2 text-[14.5px] font-semibold transition-colors ${
          tab === "business" ? "bg-white shadow-sm text-[#14163B]" : "text-[#8A8CA6]"
        }`}
      >
        For Businesses
      </button>
    </div>
  );
}

/* Small dashed connector used to visually link cards/icons together,
   just like the arrows in the reference screenshots. */
function DashArrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center" aria-hidden="true">
        <div className="h-5 w-px border-l-2 border-dashed border-[#B7A9F5]" />
        <div className="h-0 w-0 border-x-4 border-x-transparent border-t-[6px] border-t-[#B7A9F5]" />
      </div>
    );
  }
  return (
    <div className="flex items-center" aria-hidden="true">
      <div className="h-px w-6 border-t-2 border-dashed border-[#B7A9F5] sm:w-8" />
      <div className="h-0 w-0 border-y-4 border-y-transparent border-l-[6px] border-l-[#B7A9F5]" />
    </div>
  );
}

/* ===============================================================
   Business tab — "Crafted with AI" capabilities showcase:
   "Discover Turbodev AI that transforms sales productivity and
   drives business growth" + 6 feature cards.
================================================================ */
function MaximizeLeadsVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 px-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD] text-[20px] font-extrabold text-[#3B5BDB]">
        ∞
      </span>
      <svg width="26" height="18" viewBox="0 0 26 18" className="shrink-0 text-[#B7C9F5]">
        <path d="M1 3 Q14 3 22 13" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#mlArrow)" />
        <defs>
          <marker id="mlArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#B7C9F5" />
          </marker>
        </defs>
      </svg>
      <div className="w-[180px] shrink-0 rounded-xl border border-[#E4E4EF] bg-white p-2.5 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#6C4CF0] text-[8px] font-bold text-white">1</span>
          <div>
            <p className="text-[9px] font-bold text-[#14163B]">Fashion Store</p>
            <p className="text-[7px] text-[#A0A1B0]">Sponsored</p>
          </div>
        </div>
        <div className="relative mt-2 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-[#1D3B63] to-[#4FA0C7]">
          <span className="absolute right-1 top-1 rounded bg-[#F0286E] px-1 py-0.5 text-[6px] font-bold text-white">SALE</span>
        </div>
        <button type="button" className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-[#25D366] py-1.5 text-[8px] font-bold text-white">
          <WhatsAppLogo size={10} /> WhatsApp
        </button>
      </div>
    </div>
  );
}

function AIAgentsVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="relative w-[190px] overflow-hidden rounded-2xl border-[6px] border-[#0A0A0A] bg-[#F4F2FF]">
        <div className="flex items-center gap-1.5 bg-[#25D366] px-2 py-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[7px] font-bold text-[#25D366]">1</span>
          <p className="text-[8px] font-bold text-white">Turbodev ✓</p>
        </div>
        <div className="p-2">
          <p className="text-[7px] font-bold text-[#14163B]">Welcome!</p>
          <p className="mt-1 rounded-lg bg-white p-1.5 text-[7px] leading-snug text-[#3A3C55] shadow-sm">
            I can help you book your dream vacation. Where would you like to go?
          </p>
          <p className="ml-auto mt-1.5 w-fit rounded-lg bg-[#DCF8C6] p-1.5 text-[7px] text-[#214A35]">
            Looking for Bali package
          </p>
        </div>
        <div className="absolute -right-3 -top-1 w-[104px] rounded-lg border border-[#E4E4EF] bg-white p-1.5 shadow-md">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[6px] font-bold text-[#14163B]">
              <Bot size={9} className="text-[#6C4CF0]" /> Sales Agent
            </span>
            <span className="h-2.5 w-4 shrink-0 rounded-full bg-[#6C4CF0]" />
          </div>
          <p className="mt-1 border-t border-[#F0F0F5] pt-1 text-[6px] font-semibold text-[#6C4CF0]">Instructions</p>
        </div>
      </div>
    </div>
  );
}

function StorePaymentsVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="relative w-[190px] overflow-hidden rounded-2xl border-[6px] border-[#0A0A0A] bg-[#DCF8C6]">
        <div className="flex items-center gap-1.5 bg-[#25D366] px-2 py-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[7px] font-bold text-[#25D366]">1</span>
          <p className="text-[8px] font-bold text-white">Turbodev ✓</p>
        </div>
        <div className="p-2">
          <p className="w-fit rounded-lg bg-white p-1.5 text-[7px] text-[#3A3C55] shadow-sm">
            Sure! Here&apos;s a pair in stock, and here&apos;s a discount too
          </p>
        </div>
        <div className="absolute -bottom-1 left-2 w-[168px] rounded-lg border border-[#E4E4EF] bg-white p-2 shadow-md">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F2F1FD]">
              <ShoppingBag size={15} className="text-[#6C4CF0]" />
            </span>
            <div className="flex-1">
              <p className="text-[8px] font-bold text-[#14163B]">Shoes</p>
              <p className="text-[7px] text-[#8A8CA6]">Rose Red</p>
            </div>
            <p className="text-[8px] font-bold text-[#6C4CF0]">₹649</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BroadcastScaleVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 px-4">
      <div className="w-[170px] shrink-0 rounded-xl border border-[#E4E4EF] bg-white p-2.5 shadow-sm">
        <p className="text-[8px] font-bold text-[#14163B]">Broadcast Message</p>
        <p className="text-[7px] text-[#8A8CA6]">sent to 1,076 customers</p>
        <div className="mt-2 h-10 rounded-lg bg-gradient-to-br from-[#8A5A2B] to-[#D4A76A]" />
        <p className="mt-1.5 text-[8px] font-semibold text-[#14163B]">Hello Amit,</p>
        <p className="text-[7px] text-[#5B5D78]">10% discount · Valid till 30th Aug</p>
        <p className="mt-1 text-[8px] font-bold text-[#3B82F6]">Claim offer</p>
      </div>
      <div className="flex shrink-0 -space-x-2">
        {["#F5A623", "#22B573", "#6C4CF0"].map((c, i) => (
          <span
            key={i}
            className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white"
            style={{ background: c }}
          >
            <CheckCheck size={9} className="absolute -bottom-1 -right-1 rounded-full bg-white p-[1px] text-[#22B573]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function OrganizeLeadsVisual() {
  const rows = [
    ["Qualified", "Saravana"],
    ["New Enquiry", "Amar"],
    ["Converted", "Krishna"],
  ];
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="w-[230px] rounded-xl border border-[#E4E4EF] bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-[9px] font-bold">
            <span className="text-[#8A8CA6]">Contacts</span>
            <span className="border-b-2 border-[#6C4CF0] text-[#6C4CF0]">Segments</span>
          </div>
          <span className="rounded-md bg-[#6C4CF0] px-1.5 py-1 text-[7px] font-bold text-white">+ New</span>
        </div>
        <div className="mt-2 space-y-1.5 border-t border-[#F0F0F5] pt-2">
          {rows.map(([name, by]) => (
            <div key={name} className="flex items-center justify-between rounded-lg bg-[#FAFAFD] px-2 py-1.5">
              <span className="text-[8px] font-semibold text-[#14163B]">{name}</span>
              <span className="text-[7px] text-[#8A8CA6]">{by}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatbotBuilderVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 px-4">
      <div className="w-[150px] shrink-0 rounded-xl border border-[#E4E4EF] bg-white p-2 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rotate-45 bg-[#6C4CF0]" />
          <p className="text-[8px] font-bold text-[#6C4CF0]">Ask Button</p>
        </div>
        <p className="mt-1.5 text-[7px] leading-snug text-[#5B5D78]">
          I can help you select the course. Where would you like to go?
        </p>
        <div className="mt-1.5 space-y-1">
          <p className="rounded-md bg-[#F2F1FD] px-1.5 py-1 text-[7px] font-semibold text-[#6C4CF0]">AI Automation</p>
          <p className="rounded-md bg-[#F2F1FD] px-1.5 py-1 text-[7px] font-semibold text-[#6C4CF0]">Marketing</p>
        </div>
      </div>
      <svg width="18" height="14" viewBox="0 0 18 14" className="shrink-0 text-[#B7A9F5]">
        <path d="M1 2 Q10 2 15 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 3" markerEnd="url(#cbArrow)" />
        <defs>
          <marker id="cbArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#B7A9F5" />
          </marker>
        </defs>
      </svg>
      <div className="w-[110px] shrink-0 rounded-xl border border-[#E4E4EF] bg-white p-2 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rotate-45 bg-[#6C4CF0]" />
          <p className="text-[8px] font-bold text-[#6C4CF0]">Send Media</p>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-[#F2F1FD] p-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#E5342E] text-[5px] font-bold text-white">PDF</span>
          <span className="text-[6.5px] font-medium text-[#14163B]">Marketing notes.pdf</span>
        </div>
      </div>
    </div>
  );
}

const aiCapabilities: { visual: ReactNode; title: string; desc: string }[] = [
  {
    visual: <MaximizeLeadsVisual />,
    title: "Maximize Leads, Optimize Sales",
    desc: "Run Click-to-WhatsApp ads to capture leads instantly on WhatsApp.",
  },
  {
    visual: <AIAgentsVisual />,
    title: "AI Agents",
    desc: "AI agents handle conversations, qualify leads, and close deals automatically on WhatsApp.",
  },
  {
    visual: <StorePaymentsVisual />,
    title: "Launch WhatsApp Store & Payments",
    desc: "Sync your catalog from Shopify, e-commerce or Excel and let customers browse and buy on WhatsApp Pay.",
  },
  {
    visual: <BroadcastScaleVisual />,
    title: "Send WhatsApp broadcasts at scale.",
    desc: "Scale business communication and automate customer queries on WhatsApp with Turbodev.",
  },
  {
    visual: <OrganizeLeadsVisual />,
    title: "Organize Leads, Track Success",
    desc: "Centralize leads from WhatsApp and other sources in a sales CRM with automatic assignment.",
  },
  {
    visual: <ChatbotBuilderVisual />,
    title: "Launch WhatsApp Chatbots in Minutes",
    desc: "Automate customer queries with an easy to use WhatsApp chatbot builder and improve response time.",
  },
];

function AICapabilitiesSection() {
  return (
    <section className="relative bg-[#F8F8F8] py-20 md:py-32">
      <div className={`${ALIGN}`}>
        <div className="mb-16 max-w-3xl text-left">
          <p className="font-body flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6C4CF0]">
            <span className="h-2 w-2 rotate-45 bg-[#6C4CF0]" /> Crafted with AI
          </p>
          <h2 className="font-heading mt-4 text-[32px] font-extrabold leading-[1.15] text-[#14163B] sm:text-[42px]">
            Discover Turbodev AI that transforms sales productivity and
            drives business growth
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#5B5D78]">
            AI handles the heavy lifting while you stay in control and every
            workflow is fully customizable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {aiCapabilities.map((card) => (
            <div key={card.title} className="rounded-lg border-2 border-white bg-white p-4 md:p-6">
              <div className="mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-white md:mb-6 md:h-64">
                {card.visual}
              </div>
              <h3 className="font-heading text-[19px] font-bold text-[#14163B] md:text-[22px]">
                {card.title}
              </h3>
              <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-[#5B5D78]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   WhatsApp growth showcase — inspired by the supplied reference video:
   01 Broadcast → 02 AI Chatbots → 03 Shared Team Inbox → 04 Analytics.
   It is intentionally built from live HTML/SVG UI rather than screenshots,
   so every element stays crisp, responsive and animated.
================================================================ */

type WhatsAppFeatureKey = "broadcast" | "chatbot" | "inbox" | "analytics";

const whatsappFeatures: {
  key: WhatsAppFeatureKey;
  number: string;
  title: string;
  description: string;
  outcome: string;
}[] = [
  {
    key: "broadcast",
    number: "01",
    title: "Broadcast",
    description: "Send high-impact, personalized WhatsApp campaigns at scale. Segment and tag contacts for laser-focused targeting.",
    outcome: "Reach the right customers at the right moment.",
  },
  {
    key: "chatbot",
    number: "02",
    title: "AI Chatbots",
    description: "Create no-code AI agents that answer product, pricing, shipping and support questions instantly — 24/7.",
    outcome: "Turn questions into qualified buying conversations.",
  },
  {
    key: "inbox",
    number: "03",
    title: "Shared Team Inbox",
    description: "Collaborate on every WhatsApp conversation with assignments, notes, tags and live handoffs.",
    outcome: "Never lose a hot lead because nobody replied.",
  },
  {
    key: "analytics",
    number: "04",
    title: "Analytics & Insights",
    description: "Track campaign performance, response rates, qualified leads and conversion revenue from one clear dashboard.",
    outcome: "Know what converts — then scale it.",
  },
];

function WhatsAppGrowthShowcase() {
  const [active, setActive] = useState<WhatsAppFeatureKey>("broadcast");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => {
        const i = whatsappFeatures.findIndex((f) => f.key === current);
        return whatsappFeatures[(i + 1) % whatsappFeatures.length].key;
      });
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const current = whatsappFeatures.find((f) => f.key === active)!;

  return (
    <section className="relative mt-28 overflow-hidden border-y border-[#EEEEF5] bg-[#FCFCFE] py-24 sm:py-32">
      <div className={`${ALIGN}`}>
        <div className="mx-auto max-w-3xl text-center">
<p className="font-body text-[12px] font-bold uppercase tracking-[0.18em] text-[#6C4CF0]">
  WhatsApp Growth Engine
</p>
<h2 className="font-heading mt-4 text-[36px] font-extrabold leading-[1.05] text-[#14163B] sm:text-[56px]">
  Attract. <span className="text-[#6C4CF0]">Engage.</span> Convert.
</h2>
<p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#5B5D78]">
  One WhatsApp system for campaigns, AI conversations, team selling and revenue analytics — designed to move customers from attention to action.
</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
<div>
  <div className="mb-7 flex flex-wrap gap-2">
    {whatsappFeatures.map((feature) => (
      <button
        key={feature.key}
        type="button"
        onClick={() => setActive(feature.key)}
        className={`rounded-full border px-3.5 py-2 text-[11px] font-bold transition-all ${
          active === feature.key
            ? "border-[#6C4CF0] bg-[#6C4CF0] text-white shadow-[0_8px_22px_rgba(108,76,240,0.22)]"
            : "border-[#E4E4EF] bg-white text-[#6B6D84] hover:border-[#B7A9F5]"
        }`}
      >
        {feature.number} {feature.title}
      </button>
    ))}
  </div>

  <div key={current.key} className="wa-copy-enter">
    <p className="font-heading text-[15px] font-extrabold text-[#A0A1B0]">{current.number}</p>
    <h3 className="font-heading mt-2 text-[34px] font-extrabold text-[#14163B] sm:text-[42px]">
      <span className="rounded-md bg-[#6C4CF0] px-2 py-0.5 text-white">{current.title}</span>
    </h3>
    <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-[#5B5D78]">
      {current.description}
    </p>
    <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#E7E2FA] bg-white p-4 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E9F9F0]">
        <Zap size={17} className="text-[#22B573]" />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A8CA6]">Business outcome</p>
        <p className="mt-1 text-[14px] font-semibold text-[#14163B]">{current.outcome}</p>
      </div>
    </div>
    <div className="mt-7 flex items-center gap-3 text-[12px] font-semibold text-[#6B6D84]">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F1FD]">
        <WhatsAppLogo size={19} />
      </span>
      Automated on WhatsApp
      <span className="h-1 w-1 rounded-full bg-[#B7A9F5]" />
      24/7
    </div>
  </div>
</div>

<div className="relative min-h-[470px]">
  <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-[#6C4CF0]/10 blur-3xl" />
  <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#22B573]/10 blur-3xl" />

  <div className="relative h-full min-h-[470px] overflow-hidden rounded-[32px] border border-[#E6E4F0] bg-white p-5 shadow-[0_30px_90px_rgba(24,18,65,0.12)]">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6C4CF0] via-[#22B573] to-[#F5A623]" />
    <div className="flex items-center justify-between border-b border-[#EEEEF5] pb-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9F9F0]"><WhatsAppLogo size={22} /></span>
        <div>
          <p className="text-[12px] font-bold text-[#14163B]">Turbodev WhatsApp</p>
          <p className="text-[9px] text-[#8A8CA6]">Revenue command center</p>
        </div>
      </div>
      <span className="flex items-center gap-1.5 rounded-full bg-[#EFFBF4] px-2.5 py-1.5 text-[9px] font-bold text-[#22B573]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22B573]" /> LIVE
      </span>
    </div>

    <div className="mt-5">
      {active === "broadcast" && <BroadcastVisual />}
      {active === "chatbot" && <ChatbotVisual />}
      {active === "inbox" && <TeamInboxVisual />}
      {active === "analytics" && <AnalyticsVisual />}
    </div>
  </div>
</div>
        </div>
      </div>

      <style>{`
        @keyframes waCopyEnter {
from { opacity: 0; transform: translateY(12px); }
to { opacity: 1; transform: translateY(0); }
        }
        .wa-copy-enter { animation: waCopyEnter .45s ease both; }
        @keyframes waFloat {
0%,100% { transform: translateY(0); }
50% { transform: translateY(-8px); }
        }
        .wa-float { animation: waFloat 3.2s ease-in-out infinite; }
        @keyframes waSlide {
from { opacity: 0; transform: translateX(18px) scale(.98); }
to { opacity: 1; transform: translateX(0) scale(1); }
        }
        .wa-slide { animation: waSlide .55s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes waPulseRing {
0% { box-shadow: 0 0 0 0 rgba(37,211,102,.25); }
70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .wa-pulse { animation: waPulseRing 2.2s infinite; }
        @media (prefers-reduced-motion: reduce) {
.wa-copy-enter,.wa-float,.wa-slide,.wa-pulse { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function BroadcastVisual() {
  return (
    <div className="wa-slide">
      <div className="grid grid-cols-[1fr_170px] gap-4">
        <div className="rounded-2xl border border-[#E8E8EF] bg-[#FAFAFD] p-4">
<div className="flex items-center justify-between">
  <p className="text-[11px] font-bold text-[#14163B]">Campaign builder</p>
  <span className="rounded-full bg-[#F2F1FD] px-2 py-1 text-[8px] font-bold text-[#6C4CF0]">PERSONALIZED</span>
</div>
<div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
  <div className="flex items-center gap-2">
    <WhatsAppLogo size={25} />
    <div>
      <p className="text-[9px] font-bold text-[#14163B]">Summer Drop ☀️</p>
      <p className="text-[8px] text-[#8A8CA6]">2,500 selected contacts</p>
    </div>
  </div>
  <div className="mt-3 rounded-xl bg-[#E9F9F0] p-3 text-[9px] leading-relaxed text-[#214A35]">
    Hi {"{{first_name}}"}! Your early access is live. Want 15% off your next order?
  </div>
  <div className="mt-3 flex items-center gap-2 text-[8px] text-[#8A8CA6]">
    <CheckCheck size={12} className="text-[#22B573]" /> Delivered 2,462
    <span className="ml-auto font-bold text-[#22B573]">98.5%</span>
  </div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
  {["VIP", "Repeat", "Dormant"].map((tag) => (
    <span key={tag} className="rounded-lg border border-[#E4E4EF] bg-white px-2 py-2 text-center text-[8px] font-bold text-[#6B6D84]">{tag}</span>
  ))}
</div>
        </div>

        <div className="wa-float flex flex-col justify-center gap-3">
<div className="rounded-2xl border border-[#E8E8EF] bg-white p-3 shadow-sm">
  <div className="flex -space-x-2">
    {["P","A","M","R"].map((x) => (
      <span key={x} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F2F1FD] text-[9px] font-bold text-[#6C4CF0]">{x}</span>
    ))}
  </div>
  <p className="mt-2 text-[9px] font-bold text-[#14163B]">Laser targeting</p>
  <p className="mt-0.5 text-[8px] text-[#8A8CA6]">Tags + segments + behavior</p>
</div>
<div className="rounded-2xl bg-[#0C0E2A] p-3 text-white shadow-lg">
  <p className="text-[8px] text-white/60">Revenue attributed</p>
  <p className="font-heading mt-1 text-[22px] font-extrabold">₹2.84L</p>
  <p className="mt-1 text-[8px] text-[#7CF2B2]">↑ 32.4% vs last campaign</p>
</div>
        </div>
      </div>
    </div>
  );
}

function ChatbotVisual() {
  const bubbles = [
    ["Customer", "Is COD available for Chennai?", false],
    ["AI Agent", "Yes — COD is available. Delivery is 2–3 days. Want me to show today's best sellers?", true],
    ["Customer", "Yes, show me 👀", false],
  ];
  return (
    <div className="wa-slide">
      <div className="grid grid-cols-[1fr_170px] gap-4">
        <div className="rounded-2xl border border-[#E8E8EF] bg-[#FAFAFD] p-4">
<div className="flex items-center gap-2">
  <span className="wa-pulse flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9F9F0]"><Bot size={18} className="text-[#22B573]" /></span>
  <div>
    <p className="text-[10px] font-bold text-[#14163B]">AI Sales Agent</p>
    <p className="text-[8px] text-[#22B573]">Trained on your store</p>
  </div>
</div>
<div className="mt-4 space-y-2.5">
  {bubbles.map(([who, text, ai], i) => (
    <div key={i} className={`max-w-[88%] ${ai ? "" : "ml-auto"}`}>
      <p className={`rounded-2xl p-2.5 text-[9px] leading-relaxed ${ai ? "rounded-bl-md bg-[#F2F1FD] text-[#343052]" : "rounded-br-md bg-[#E9F9F0] text-[#214A35]"}`}>
        {text}
      </p>
      <p className={`mt-1 text-[7px] text-[#A0A1B0] ${ai ? "" : "text-right"}`}>{who} • now</p>
    </div>
  ))}
</div>
<div className="mt-3 flex items-center gap-2 rounded-xl border border-[#E4E4EF] bg-white px-3 py-2">
  <span className="flex-1 text-[8px] text-[#A0A1B0]">AI is typing…</span>
  <Send size={12} className="text-[#6C4CF0]" />
</div>
        </div>
        <div className="space-y-3">
{[
  [MessageCircle, "Instant replies", "24/7"],
  [Target, "Lead qualification", "Auto"],
  [Clock3, "Response time", "< 5 sec"],
].map(([Icon, label, value], i) => (
  <div key={i} className="rounded-2xl border border-[#E8E8EF] bg-white p-3 shadow-sm">
    <Icon size={16} className="text-[#6C4CF0]" />
    <p className="mt-2 text-[8px] text-[#8A8CA6]">{label as string}</p>
    <p className="font-heading mt-0.5 text-[16px] font-extrabold text-[#14163B]">{value as string}</p>
  </div>
))}
        </div>
      </div>
    </div>
  );
}

function TeamInboxVisual() {
  return (
    <div className="wa-slide">
      <div className="grid grid-cols-[170px_1fr] overflow-hidden rounded-2xl border border-[#E8E8EF] bg-white">
        <div className="border-r border-[#EEEEF5] bg-[#FAFAFD] p-3">
<div className="mb-3 flex items-center justify-between">
  <span className="text-[10px] font-bold text-[#14163B]">Conversations</span>
  <span className="rounded-full bg-[#6C4CF0] px-1.5 py-0.5 text-[7px] font-bold text-white">24</span>
</div>
{[
  ["Riya", "Hot lead • wants size M", "#22B573"],
  ["Karthik", "COD confirmation", "#F5A623"],
  ["Meera", "Return request", "#6C4CF0"],
  ["Dev", "Product question", "#3B82F6"],
].map(([name, preview, dot]) => (
  <div key={name} className="mb-2 rounded-xl bg-white p-2.5 shadow-sm">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ background: dot as string }} />
      <span className="text-[9px] font-bold text-[#14163B]">{name}</span>
    </div>
    <p className="mt-1 truncate text-[8px] text-[#8A8CA6]">{preview}</p>
  </div>
))}
        </div>
        <div className="p-4">
<div className="flex items-center gap-2 border-b border-[#EEEEF5] pb-3">
  <WhatsAppLogo size={24} />
  <div>
    <p className="text-[10px] font-bold text-[#14163B]">Riya • Hot Lead</p>
    <p className="text-[8px] text-[#22B573]">AI qualified • handoff ready</p>
  </div>
  <button className="ml-auto rounded-full bg-[#F2F1FD] px-2.5 py-1 text-[8px] font-bold text-[#6C4CF0]">Assign</button>
</div>
<div className="space-y-2.5 py-4">
  <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-[#F4F2FF] p-2.5 text-[9px] text-[#3A3C55]">Do you have the black one in M?</div>
  <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-[#E9F9F0] p-2.5 text-[9px] text-[#214A35]">Yes. I can reserve it while you checkout.</div>
  <div className="rounded-xl border border-[#E4E4EF] bg-[#FAFAFD] p-2.5">
    <div className="flex items-center gap-2">
      <UserRound size={13} className="text-[#6C4CF0]" />
      <span className="text-[8px] font-bold text-[#14163B]">Assigned to Arjun</span>
      <span className="ml-auto text-[7px] text-[#22B573]">Team online</span>
    </div>
  </div>
</div>
<div className="flex items-center justify-between rounded-xl bg-[#0C0E2A] px-3 py-2.5 text-white">
  <span className="flex items-center gap-1.5 text-[8px]"><PhoneCall size={11} /> Human handoff</span>
  <span className="text-[8px] font-bold text-[#7CF2B2]">1-click</span>
</div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="wa-slide">
      <div className="grid grid-cols-4 gap-2.5">
        {[
["Sent", "24.8K", "↑ 18%"],
["Replies", "8.2K", "↑ 31%"],
["Qualified", "2.4K", "↑ 42%"],
["Revenue", "₹6.8L", "↑ 37%"],
        ].map(([label, value, delta]) => (
<div key={label} className="rounded-2xl border border-[#E8E8EF] bg-[#FAFAFD] p-3">
  <p className="text-[8px] text-[#8A8CA6]">{label}</p>
  <p className="font-heading mt-1 text-[17px] font-extrabold text-[#14163B]">{value}</p>
  <p className="mt-1 text-[7px] font-bold text-[#22B573]">{delta}</p>
</div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-[#E8E8EF] bg-white p-4">
        <div className="flex items-center justify-between">
<p className="text-[10px] font-bold text-[#14163B]">Campaign → Revenue</p>
<span className="rounded-full bg-[#F2F1FD] px-2 py-1 text-[7px] font-bold text-[#6C4CF0]">LAST 30 DAYS</span>
        </div>
        <svg viewBox="0 0 600 190" className="mt-4 h-[190px] w-full">
<defs>
  <linearGradient id="waAnalyticsFill" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#6C4CF0" stopOpacity="0.22" />
    <stop offset="100%" stopColor="#6C4CF0" stopOpacity="0" />
  </linearGradient>
</defs>
<path d="M10 160 C80 145 95 130 145 138 S225 90 270 108 S345 62 390 82 S455 40 500 55 S560 25 590 30 L590 180 L10 180 Z" fill="url(#waAnalyticsFill)" />
<path d="M10 160 C80 145 95 130 145 138 S225 90 270 108 S345 62 390 82 S455 40 500 55 S560 25 590 30" fill="none" stroke="#6C4CF0" strokeWidth="4" strokeLinecap="round" />
{[10,145,270,390,500,590].map((x, i) => <circle key={i} cx={x} cy={[160,138,108,82,55,30][i]} r="5" fill="#fff" stroke="#22B573" strokeWidth="3" />)}
        </svg>
        <div className="flex items-center justify-between text-[8px] text-[#A0A1B0]">
<span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#0C0E2A] px-3 py-2.5 text-white">
        <MousePointerClick size={13} className="text-[#7CF2B2]" />
        <span className="text-[8px]">Every campaign tied to clicks, conversations, leads and revenue.</span>
      </div>
    </div>
  );
}

/* ===============================================================
   NEW — HomeSections (Industry Tabs + Testimonials + CTA Banner)
   Rendered ONLY on the "For Businesses" tab, right after the
   WhatsApp Growth Showcase ("Attract. Engage. Convert.").
================================================================ */

// ---- Industry tabs ("Turbodev is built for you") ----
const industries: { id: string; label: string; icon: typeof GraduationCap; image: string }[] = [
  { id: "customer-education", label: "Customer Education", icon: GraduationCap, image: "/industries/customer-education.png" },
  { id: "travel-tourism", label: "Travel & Tourism", icon: Plane, image: "/industries/travel-tourism.png" },
  { id: "finance-banking", label: "Finance & Banking", icon: DollarSign, image: "/industries/finance-banking.png" },
  { id: "professional-services", label: "Professional Services", icon: Briefcase, image: "/industries/professional-services.png" },
  { id: "logistics-shipping", label: "Logistics & Shipping", icon: Package, image: "/industries/logistics-shipping.png" },
  { id: "real-estate", label: "Real Estate", icon: Home, image: "/industries/real-estate.png" },
  { id: "healthcare-services", label: "Healthcare Services", icon: Heart, image: "/industries/healthcare-services.png" },
  { id: "automotive-services", label: "Automotive Services", icon: Cog, image: "/industries/automotive-services.png" },
];

function IndustryTabs() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <section className={`${ALIGN} mt-28`}>
      <p className="font-body flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6C4CF0]">
        <Sparkles size={13} strokeWidth={2.5} /> Industry
      </p>
      <h2 className="font-heading mt-4 text-[32px] font-extrabold leading-tight text-[#14163B] sm:text-[42px]">
        Turbodev is built for you
      </h2>
      <p className="mt-3 text-[16px] text-[#5B5D78]">
        Explaining software is hard. Turbodev makes it easy.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col gap-1 lg:col-span-1">
          {industries.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "bg-[#F2F1FD] font-semibold text-[#14163B]"
                    : "text-[#5B5D78] hover:bg-[#FAFAFB]"
                }`}
              >
                <Icon size={18} className={isActive ? "text-[#6C4CF0]" : "text-[#A0A1B0]"} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-start lg:col-span-2 lg:mt-0 lg:pt-0">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#F2F1FD]">
            <Image
              key={activeIndustry.id}
              src={activeIndustry.image}
              alt={activeIndustry.label}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Testimonials marquee ("What our customers say") ----
const testimonials: { company: string; quote: string; name: string; role: string }[] = [
  {
    company: "TRENDKART",
    quote:
      "The broadcast feature is incredible! We can send personalized campaigns to thousands of customers instantly. Our engagement rates increased by 250% and conversion by 180%.",
    name: "David",
    role: "E-commerce Manager, Trenkart India",
  },
  {
    company: "GROWTHVERSEDIGITAL",
    quote:
      "Shared inbox is a game-changer. We can collaborate seamlessly, and the AI-assisted replies help us respond faster. Customer satisfaction is at an all-time high.",
    name: "Amit Patel",
    role: "Marketer, Growthverse Digital",
  },
  {
    company: "PRIMESPACES",
    quote:
      "Turbodev transformed our customer support. The AI chatbots handle 80% of inquiries automatically, and our response time improved by 300%. Revenue increased by 40% in just 3 months.",
    name: "Rajesh Kumar",
    role: "Co-founder, Primespaces Realty",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="flex min-h-[200px] max-w-[380px] shrink-0 flex-col rounded-xl border border-[#E4E4EF]/40 bg-[#F7F7FA] p-6 text-start transition-colors duration-300 sm:max-w-[380px] sm:p-8">
      <span className="mb-4 text-xs font-semibold tracking-wide text-[#8A8CA6]">
        {item.company}
      </span>
      <p className="mb-6 text-[#3A3C55]">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-auto">
        <p className="font-heading font-semibold text-[#14163B]">{item.name}</p>
        <p className="text-sm text-[#8A8CA6]">{item.role}</p>
      </div>
    </div>
  );
}

function TestimonialsMarquee() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="mt-28 bg-[#f8fafc] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-4 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h2 className="font-heading text-[32px] font-extrabold text-[#14163B] sm:text-[42px]">
            What our customers say
          </h2>
          <p className="text-[16px] text-[#5B5D78]">
            Join 500+ businesses already using Turbodev to transform their
            WhatsApp Business
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8fafc] to-transparent md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8fafc] to-transparent md:w-32" />

          <div
            className="group flex flex-row overflow-hidden p-2"
            style={{ ["--gap" as string]: "1rem", ["--duration" as string]: "40s" }}
          >
            <div
              className="animate-testimonial-marquee flex shrink-0 flex-row justify-around group-hover:[animation-play-state:paused]"
              style={{ gap: "var(--gap)" }}
            >
              {loopItems.map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonialMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-testimonial-marquee {
          animation: testimonialMarquee var(--duration, 40s) linear infinite;
        }
      `}</style>
    </section>
  );
}

// ---- Final CTA banner ("Transform your WhatsApp Business...") ----
function CtaBanner() {
  return (
    <section className="w-full bg-white pb-8 pt-2 md:pb-16 md:pt-6 lg:pb-24">
      <div className={`${ALIGN} -mt-4 md:-mt-6 lg:-mt-14`}>
        <div
          className="relative mb-8 overflow-hidden rounded-2xl px-8 pb-12 pt-8 text-white md:mb-12 md:rounded-[3rem] md:px-12 md:pb-16 md:pt-12 lg:mb-16 lg:px-16 lg:pb-20 lg:pt-16"
          style={{
            backgroundImage: 'url("/images/footer-bg.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#000000]/35" />

          <div className="relative z-10 flex w-full justify-start">
            <div className="flex max-w-2xl flex-col items-start gap-0 text-left">
              <h2 className="font-heading mb-4 text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[44px]">
                Transform your WhatsApp Business with Turbodev Agentic AI
                platform
              </h2>
              <p className="mb-8 text-base text-white/90 md:text-lg">
                Be among the first to ride the WhatsApp automation wave
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
              >
                Start Free Trial
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- page ---------------- */

export default function TurbodevAIClient() {
  const [tab, setTab] = useState<"shopify" | "business">("shopify");
  const [openFaq, setOpenFaq] = useState<number>(0);

  const faqs: { q: string; a: string }[] = [
    {
      q: "How long does it take to set up?",
      a: "Most brands are live within an afternoon. Connect your Shopify store, pick the playbooks you want running, and Turbodev takes it from there \u2014 no developer required.",
    },
    {
      q: "How do I know it's actually working?",
      a: "Every rupee Turbodev recovers or generates is attributed to the exact workflow that drove it \u2014 abandoned cart, COD confirmation, win-back, or cross-sell \u2014 so you see the number, not a vanity metric.",
    },
  ];

  return (
    <main className="font-body bg-white pb-28 pt-40">
      <FontLoader />

      {/* ===================== HERO ===================== */}
      <section className={`${ALIGN}`}>
        {tab === "shopify" ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left */}
            <div>
              <HeroTabToggle tab={tab} setTab={setTab} />

              <p className="mt-6 flex items-center gap-1.5 text-[15px] text-[#5B5D78]">
                The Revenue Engine for
                <span className="inline-flex items-center gap-1.5 font-bold italic text-[#14163B]">
                  <ShopifyLogo size={17} />
                  shopify
                </span>
                Brands
              </p>

              <h1 className="font-heading mt-4 text-[42px] font-extrabold leading-[1.08] text-[#14163B] sm:text-[54px]">
                More <span className="text-[#6C4CF0]">Revenue</span> from the{" "}
                <span className="text-[#6C4CF0]">Customers</span> you&apos;ve
                Already Paid for.
              </h1>

              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5B5D78]">
                Turbodev recovers your lost sales, increases repeat orders, and
                grows profit from every customer without spending more on ads
                or hiring a bigger team.
              </p>

              <UnlockButton className="mt-8" />
            </div>

            {/* Right — dashboard visual */}
            <div className="flex items-start justify-center gap-8 pt-2">
              {/* Channel icon rail — real brand logos */}
              <div className="flex flex-col items-center gap-6 pt-2">
                <WhatsAppLogo size={28} />
                <InstagramLogo size={28} />
                <GmailLogo size={28} />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0286E] text-white shadow-sm">
                  <Phone size={13} fill="white" strokeWidth={0} />
                </span>
                <span className="flex h-7 w-7 flex-col items-center justify-center rounded-md bg-[#0A0A0A] leading-none text-white shadow-sm">
                  <span className="text-[7px] font-extrabold tracking-tight">RCS</span>
                  <span className="text-[6px] font-bold tracking-widest">•••</span>
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-[10px] rounded-bl-[3px] bg-[#FF8A1E] text-white shadow-sm">
                  <span className="text-[7px] font-extrabold tracking-tight">SMS</span>
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-white shadow-sm">
                  <Globe size={14} strokeWidth={2.25} />
                </span>
              </div>

              {/* Middle column */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-[24px] border border-[#EFEFF5] bg-white shadow-[0_12px_28px_rgba(10,14,40,0.07)]">
                  <ShopifyLogo size={58} />
                </div>

                <StatPill
                  icon={<ShoppingCart size={16} className="text-[#6C4CF0]" strokeWidth={2.2} />}
                  iconBg="bg-[#F2F1FD]"
                  value="15-25%"
                  label="Cart Recovery"
                  valueColor="text-[#6C4CF0]"
                />
                <StatPill
                  icon={<BarChart3 size={16} className="text-[#22B573]" strokeWidth={2.2} />}
                  iconBg="bg-[#E9F9F0]"
                  value="40%"
                  label="More Repeat Orders"
                  valueColor="text-[#22B573]"
                />
                <StatPill
                  icon={<TrendingUp size={16} className="text-white" strokeWidth={2.4} />}
                  iconBg="bg-[#22B573]"
                  value="20-30%"
                  label="More Profit from Existing Customers"
                  valueColor="text-[#22B573]"
                />
              </div>

              {/* Right column — revenue card */}
              <div className="hidden w-[240px] flex-col gap-5 sm:flex">
                <div>
                  <p className="font-heading text-[26px] font-extrabold leading-none text-[#6C4CF0]">
                    3x
                  </p>
                  <p className="mt-1.5 text-[13.5px] font-medium leading-tight text-[#14163B]">
                    Revenue
                    <br />
                    Increase
                  </p>
                </div>

                <div className="rounded-2xl border border-[#ECECF3] bg-[#FDFDFB] p-5 shadow-[0_14px_32px_rgba(10,14,40,0.06)]">
                  <p className="text-[15px] font-bold text-[#14163B]">
                    Revenue generated
                  </p>
                  <p className="text-[11px] text-[#ACADBD]">This month</p>
                  <p className="font-heading mt-1.5 text-[28px] font-extrabold text-[#6C4CF0]">
                    ₹10,38,000
                  </p>

                  <div className="mt-4 space-y-3 border-t border-[#ECECF3] pt-4">
                    <RevenueRow
                      icon={<ShoppingCart size={14} className="text-[#22B573]" strokeWidth={2} />}
                      label="Cart Recovery"
                      value="₹1,70,000"
                    />
                    <RevenueRow
                      icon={<RefreshCw size={14} className="text-[#22B573]" strokeWidth={2} />}
                      label="Repeat Orders"
                      value="₹1,23,000"
                    />
                    <RevenueRow
                      icon={<Package size={14} className="text-[#8A5A2B]" strokeWidth={2} />}
                      label="Cross sells"
                      value="₹1,45,000"
                    />
                  </div>
                </div>

                {/* mini trend line */}
                <svg viewBox="0 0 240 100" className="h-24 w-full">
                  <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22B573" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#22B573" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 86 L48 62 L88 70 L124 28 L160 44 L196 12 L232 8 L232 100 L8 100 Z"
                    fill="url(#trendFill)"
                  />
                  <path
                    d="M8 86 L48 62 L88 70 L124 28 L160 44 L196 12 L232 8"
                    fill="none"
                    stroke="#22B573"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="86" r="5" fill="#fff" stroke="#22B573" strokeWidth="2.5" />
                  <circle cx="232" cy="8" r="5" fill="#fff" stroke="#22B573" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <HeroTabToggle tab={tab} setTab={setTab} />

            <p className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#14163B]">
              <span className="text-[#3B5BDB]">∞</span> {businessHero.eyebrow}
            </p>

            <h1 className="font-heading mt-4 max-w-4xl text-[42px] font-extrabold leading-[1.08] text-[#0A0A0A] sm:text-[54px]">
              {businessHero.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5B5D78]">
              {businessHero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-[#6C4CF0] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                Start Free Trial <ArrowUp size={16} className="rotate-45" />
              </button>
              <button
                type="button"
                className="rounded-lg border border-[#6C4CF0] px-6 py-3.5 text-[15px] font-semibold text-[#6C4CF0] transition-colors hover:bg-[#F2F1FD]"
              >
                Book a demo
              </button>
            </div>

            {/* Dashboard screenshot */}
            <div className="mt-16 overflow-hidden rounded-2xl border border-[#E9D9FB] bg-white shadow-[0_0_40px_rgba(139,92,246,0.22)]">
              <img
                alt="Turbodev WhatsApp Business API dashboard and AI automation"
                loading="eager"
                decoding="async"
                className="h-auto w-full"
                src="/whatsapp-dashboard.png"
              />
            </div>
          </div>
        )}
      </section>

      {/* ===================== BY THE NUMBERS (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <SectionEyebrow>By the Numbers</SectionEyebrow>
          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { value: "500+", label: "Businesses Trust Turbodev" },
              { value: "1M+", label: "WhatsApp Conversations Automated" },
              { value: "40%", label: "Average Increase in Lead Conversion" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-[#6C4CF0] pl-6">
                <p className="font-heading text-[46px] font-extrabold leading-none text-[#14163B]">
                  {s.value}
                </p>
                <p className="mt-3 text-[15px] text-[#5B5D78]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===================== TRUSTED BY (Business tab only) ===================== */}
      {tab === "business" && (
        <section className={`${ALIGN} mt-20`}>
          <p className="text-center text-[14px] font-medium text-[#5B5D78]">
            Trusted by businesses across industries
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex w-max items-center gap-16 animate-marquee">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center gap-16">
                  {trustedByLogos.map((name) => (
                    <span
                      key={`${dup}-${name}`}
                      className="shrink-0 text-[22px] font-semibold tracking-tight text-[#9B9CAE]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== BUSINESS NEXT CONTENT ===================== */}
      {tab === "business" && (
        <div className="business-next-content">
          <BusinessProblemSection />
          <HowItWorksSection />
          <AICapabilitiesSection />
          <WhatsAppGrowthShowcase />

          {/* NEW: HomeSections — shown ONLY on the business tab,
              right after "Attract. Engage. Convert." */}
          <IndustryTabs />
          <TestimonialsMarquee />
          <CtaBanner />
        </div>
      )}

      {/* ===================== AFTER THE AD CLICK (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[38px]">
              After the <span className="text-[#6C4CF0]">Ad Click</span> where
              your <span className="text-[#6C4CF0]">Revenue</span> goes
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5B5D78]">
              You&apos;ve already paid to get these customers to your store.
              Here&apos;s the revenue you&apos;re not collecting yet and how
              much of it Turbodev brings back.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Abandoned Carts */}
            <ProblemCard title="Abandoned Carts">
              <AbandonedCartsVisual />
            </ProblemCard>

            {/* COD Failure */}
            <ProblemCard title="High COD Failure Rates">
              <CODFailureVisual />
            </ProblemCard>

            {/* No Repeat Orders */}
            <ProblemCard title="No Repeat Orders">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="font-heading text-[34px] font-extrabold text-[#6C4CF0]">~75%</p>
                  <p className="mt-1 max-w-[130px] text-[13.5px] leading-snug text-[#5B5D78]">
                    of buyers never order again
                  </p>
                </div>
                <CycleGraphic />
              </div>
            </ProblemCard>

            {/* Missed Cross-sells */}
            <ProblemCard title="Missed Cross-sells">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="font-heading text-[34px] font-extrabold text-[#6C4CF0]">~80%</p>
                  <p className="mt-1 max-w-[130px] text-[13.5px] leading-snug text-[#5B5D78]">
                    of customers don&apos;t buy your other products
                  </p>
                </div>
                <CrossSellGraphic />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F2F1FD] px-4 py-2 text-[13px] font-semibold text-[#5B5D78]">
                <BarChart3 size={15} className="text-[#22B573]" />
                More items.{" "}
                <span className="font-semibold text-[#6C4CF0]">
                  More Revenue.
                </span>
              </div>
            </ProblemCard>
          </div>

          {/* Sales lost to unanswered questions — full width */}
          <div className="mt-6">
            <ProblemCard title="Sales lost to unanswered Questions" wide>
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
                <DonutRing percent={65} color="#6C4CF0">
                  <span className="text-[15px] font-bold text-[#6C4CF0]">
                    ~65%
                  </span>
                </DonutRing>

                <p className="max-w-[220px] text-[14px] leading-relaxed text-[#5B5D78]">
                  of customers have a question before their first purchase —
                  most never get answered
                </p>

                <div className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="w-[190px] rounded-xl border border-[#E4E4EF] bg-[#FAFAFD] p-3">
                      <div className="mb-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#22B573]">
                        <CircleHelp size={11} className="text-white" />
                      </div>
                      {[
                        "Is COD available?",
                        "What's the return policy?",
                        "When will my order arrive?",
                      ].map((q) => (
                        <p key={q} className="mt-2 text-[11.5px] text-[#5B5D78]">
                          {q}
                        </p>
                      ))}
                    </div>

                    <DashArrow />

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD]">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6C4CF0] text-white">
                        <span className="flex gap-[3px]">
                          <span className="h-[5px] w-[5px] rounded-full bg-white" />
                          <span className="h-[5px] w-[5px] rounded-full bg-white" />
                          <span className="h-[5px] w-[5px] rounded-full bg-white" />
                        </span>
                      </span>
                    </span>

                    <DashArrow />

                    <div className="w-[190px] rounded-xl border border-[#E4E4EF] bg-[#FAFAFD] p-3">
                      <div className="mb-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#22B573]">
                        <CheckCircle2 size={11} className="text-white" />
                      </div>
                      {[
                        "Yes, COD is available",
                        "Easy returns within 7 days",
                        "Delivery in 2\u20133 days",
                      ].map((a) => (
                        <p key={a} className="mt-2 text-[11.5px] text-[#5B5D78]">
                          {a}
                        </p>
                      ))}
                    </div>
                  </div>

                  <DashArrow vertical />

                  {/* Result: icon + "Question answered / Sales Converted" card, with
                      caption text beside it — matching the reference layout. */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFFBF4] text-[#22B573]">
                        <ShoppingCart size={18} />
                        <CheckCircle2
                          size={13}
                          className="absolute -right-1 -top-1 rounded-full bg-white text-[#22B573]"
                        />
                      </span>
                      <div className="whitespace-nowrap rounded-lg border border-[#E4E4EF] bg-white px-3 py-1.5 text-center text-[11px] font-medium text-[#14163B] shadow-sm">
                        Question answered.
                        <br />
                        <span className="font-semibold text-[#22B573]">Sales Converted.</span>
                      </div>
                    </div>
                    <p className="max-w-[150px] text-left text-[12.5px] font-medium leading-snug text-[#14163B]">
                      Turbodev answers it right, and converts them
                    </p>
                  </div>
                </div>
              </div>
            </ProblemCard>
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-[17px] leading-relaxed text-[#5B5D78]">
              All revenue from customers you&apos;ve already paid to acquire.
              Turbodev gets it back automatically.
            </p>
            <UnlockButton className="mx-auto mt-6" />
          </div>
        </section>
      )}

      {/* ===================== HOW TURBODEV GETS THAT REVENUE BACK (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[38px]">
              How Turbodev gets that <span className="text-[#6C4CF0]">Revenue</span> back
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5B5D78]">
              Three things it runs for you, automatically — no new team required.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <RecoverLostSalesVisual />

            <div>
              <h3 className="font-heading text-[26px] font-extrabold text-[#14163B] sm:text-[30px]">
                Recover Lost Sales
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Turbodev follows up on every Abandoned Cart and Checkout.",
                  "Confirms COD Orders before they Ship so the Sales you almost Lost actually Close.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Sparkles size={17} className="mt-1 shrink-0 text-[#F5A623]" />
                    <span className="text-[15.5px] leading-relaxed text-[#5B5D78]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <UnlockButton className="mt-8" />
            </div>
          </div>
        </section>
      )}

      {/* ===================== WIN MORE REPEAT ORDERS (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[36px]">
                Win more repeat orders
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "It brings quiet customers back at exactly the right moment.",
                  "Replenishment reminders when they're ready to reorder.",
                  "Win-back messages for customers who've gone silent.",
                  "VIP journeys that make your best customers feel recognised and keep coming back.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Sparkles size={17} className="mt-1 shrink-0 text-[#F5A623]" />
                    <span className="text-[15.5px] leading-relaxed text-[#5B5D78]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <UnlockButton className="mt-8" />
            </div>

            <RepeatOrdersJourney />
          </div>
        </section>
      )}

      {/* ===================== TURN CONVERSATIONS INTO SALES (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <ConversationsVisual />

            <div>
              <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[36px]">
                Turn conversations into sales
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Every question before or after the sale, on WhatsApp, Instagram or email lands in one inbox.",
                  "Turbodev answers the common ones instantly with the right information, so doubt doesn't kill the sale.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Sparkles size={17} className="mt-1 shrink-0 text-[#F5A623]" />
                    <span className="text-[15.5px] leading-relaxed text-[#5B5D78]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <UnlockButton className="mt-8" />
            </div>
          </div>
        </section>
      )}

      {/* ===================== EVERY REVENUE MOMENT, COVERED (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[38px]">
            Every <span className="text-[#6C4CF0]">Revenue</span> moment, covered
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5B5D78]">
            From the moment a customer discovers your store to every repeat
            purchase, Turbodev works at every stage of the journey.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <MessageSquare size={18} className="text-[#6C4CF0]" />,
                title: "Pre-sales",
                desc: "From sizing to shipping, Turbodev answers customer questions instantly to drive more conversions.",
              },
              {
                icon: <ShoppingCart size={18} className="text-[#6C4CF0]" />,
                title: "Conversion",
                desc: "Recover lost sales from abandoned carts, incomplete checkouts, and risky COD orders.",
              },
              {
                icon: <Package size={18} className="text-[#6C4CF0]" />,
                title: "Post-purchase",
                desc: "Keep customers informed with timely order updates that build trust and encourage repeat purchases.",
              },
              {
                icon: <Headset size={18} className="text-[#6C4CF0]" />,
                title: "Support",
                desc: "Resolve returns, tracking, and product queries quickly to build long-term customer loyalty.",
              },
              {
                icon: <Users size={18} className="text-[#6C4CF0]" />,
                title: "Retention",
                desc: "Win back inactive customers with personalized reminders and offers.",
              },
              {
                icon: <Layers size={18} className="text-[#6C4CF0]" />,
                title: "LTV Expansion",
                desc: "Increase every customer's value with timely cross-sells, upsells, and bundles.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2F1FD]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-heading text-[17px] font-bold text-[#14163B]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#5B5D78]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===================== EVERY MONTH REVENUE ATTRIBUTION (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <h2 className="font-heading max-w-2xl text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[38px]">
            Every month, you&apos;ll know exactly what{" "}
            <span className="text-[#6C4CF0]">Turbodev</span> made you.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5B5D78]">
            Most tools show you open rates and click rates, numbers that
            don&apos;t pay your bills. Turbodev shows you the only number that
            matters: how much revenue it recovered and generated, attributed to
            every workflow, every month.
          </p>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#E4E4EF] bg-white p-8 shadow-[0_10px_28px_rgba(10,14,40,0.06)]">
              <p className="text-[13px] font-medium text-[#8A8CA6]">
                Revenue Turbodev made you this month
              </p>
              <p className="font-heading mt-1 flex items-center gap-2 text-[42px] font-extrabold text-[#14163B]">
                ₹1,38,000
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD65C] to-[#F5A623] text-[15px] shadow-[0_0_18px_rgba(245,166,35,0.55)]">
                  $
                </span>
              </p>

              <div className="mt-6 space-y-5">
                {[
                  { label: "Abandoned cart recovery", value: "₹70,000", pct: 90 },
                  { label: "COD confirmations", value: "₹45,000", pct: 68 },
                  { label: "Win-backs & retention", value: "₹23,000", pct: 40 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#5B5D78]">{row.label}</span>
                      <span className="font-heading font-bold text-[#14163B]">
                        {row.value}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#EEEEF5]">
                      <div
                        className="h-full rounded-full bg-[#6C4CF0]"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative rounded-2xl border border-[#E4E4EF] bg-[#FAFAFD] p-6">
                <Quote size={18} className="absolute left-4 top-4 text-[#F5A623]" />
                <Quote size={18} className="absolute bottom-4 right-4 text-[#F5A623]" />
                <p className="px-6 text-[16px] italic leading-relaxed text-[#3A3C55]">
                  We made more revenue from abandoned carts, cross-sells, and
                  repeat orders. Can&apos;t believe we weren&apos;t doing this
                  sooner.
                </p>
              </div>
              <p className="mt-6 text-[16px] leading-relaxed text-[#5B5D78]">
                And it grows. Every playbook that switches on adds to the
                number — and the longer Turbodev runs, the bigger it gets.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ===================== THE ALTERNATIVE (Shopify tab only) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <h2 className="font-heading text-[30px] font-extrabold leading-tight text-[#14163B] sm:text-[38px]">
            The alternative isn&apos;t spending more. It&apos;s{" "}
            <span className="text-[#6C4CF0]">Turbodev</span>.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5B5D78]">
            Instead of pouring more money into ads, hires, or agencies, Turbodev
            recovers more revenue from the customers you&apos;ve already paid to
            acquire.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#E4E4EF]">
            <div className="grid grid-cols-[1fr_1.6fr] bg-[#F7F7FB] px-6 py-4 sm:px-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#8A8CA6]">
                Option
              </p>
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#8A8CA6]">
                The Problem
              </p>
            </div>

            {[
              {
                option: "Spend more on ads",
                problem:
                  "Buys more first orders at thin or negative margin. Doesn't fix what's slipping after the click.",
              },
              {
                option: "Hire someone",
                problem:
                  "Weeks to hire and train. Still manual. One person can't follow up 24/7.",
              },
              {
                option: "Hire an agency",
                problem:
                  "You don't own it. Generic campaigns. Dependency with no end date.",
              },
            ].map((row) => (
              <div
                key={row.option}
                className="grid grid-cols-[1fr_1.6fr] items-center border-t border-[#E4E4EF] bg-white px-6 py-5 sm:px-8"
              >
                <p className="text-[15px] font-bold text-[#14163B]">{row.option}</p>
                <p className="text-[14.5px] leading-relaxed text-[#5B5D78]">
                  {row.problem}
                </p>
              </div>
            ))}

            <div className="grid grid-cols-[1fr_1.6fr] items-center border-t border-[#E4E4EF] bg-[#F2F1FD] px-6 py-5 sm:px-8">
              <p className="text-[15px] font-bold text-[#14163B]">Turbodev</p>
              <p className="text-[14.5px] font-semibold leading-relaxed text-[#6C4CF0]">
                Playbooks running day one. Live in an afternoon. Every rupee
                recovered is attributed.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ===================== FAQ (Shopify tab only — hidden on Business tab) ===================== */}
      {tab === "shopify" && (
        <section className={`${ALIGN} mt-28`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="font-heading mt-4 text-[34px] font-extrabold leading-[1.1] text-[#14163B] sm:text-[42px]">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
            </div>

            <div>
              {faqs.map((f, i) => (
                <div key={f.q} className="border-b border-[#E4E4EF] py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[16.5px] font-semibold text-[#14163B]">
                      {f.q}
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD] text-[#6C4CF0]">
                      {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[#5B5D78]">
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bee banner */}
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1D3B63] via-[#2C5C86] to-[#4FA0C7] px-8 py-16 sm:px-16">
            <BeeBannerArt />
            <div className="relative z-10 max-w-xl">
              <h3 className="font-heading text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
                Every Turbodev brand can say:
                <br />
                Turbodev made me X.
              </h3>
              <p className="mt-4 text-[15.5px] text-white/80">
                And that number grows every month they stay.
              </p>
              <UnlockButton className="mt-8" />
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

/* ===============================================================
   Small presentational components
================================================================ */

function StatPill({ icon, value, label, valueColor, iconBg = "bg-[#FAFAFD]" }: StatPillProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </span>
      <div>
        <p className={`font-heading text-[17px] font-extrabold leading-none ${valueColor}`}>
          {value}
        </p>
        <p className="mt-1.5 max-w-[150px] text-[12px] font-medium leading-tight text-[#14163B]">
          {label}
        </p>
      </div>
    </div>
  );
}

function RevenueRow({ icon, label, value }: RevenueRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-[13px] font-medium text-[#14163B]">
        {icon}
        {label}
      </span>
      <span className="flex items-center gap-1 text-[13px] font-semibold text-[#14163B]">
        {value}
        <ArrowUp size={11} className="text-[#22B573]" strokeWidth={3} />
      </span>
    </div>
  );
}

function ProblemCard({ title, children, wide = false }: ProblemCardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#E4E4EF] bg-white p-8 shadow-[0_4px_16px_rgba(10,14,40,0.04)] ${
        wide ? "" : ""
      }`}
    >
      <h3 className="font-heading text-[22px] font-bold text-[#14163B]">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/* ---- "Abandoned Carts" visual — donut ring linked by a dotted curve
   and dot to the "~70%" stat, plus a teal dotted curve from the donut
   down to the numbered "1" badge, which links via a dashed line and
   dot to the "~25%" stat and a cart icon with a sparkle accent.
   Matches the reference screenshot pixel-for-pixel in composition. ---- */
function AbandonedCartsVisual() {
  return (
    <div className="flex flex-col gap-9">
      {/* row 1: donut -> ~70% stat */}
      <div className="flex flex-wrap items-center gap-6">
        <DonutRing percent={70} color="#6C4CF0">
          <span className="text-3xl">🛒</span>
        </DonutRing>
        <div>
          <p className="font-heading text-[28px] font-extrabold leading-tight text-[#6C4CF0]">~70%</p>
          <p className="mt-1 text-[16px] text-[#5B5D78]">of Carts never Check Out</p>
        </div>
      </div>

      {/* row 2: "1" badge -> ~25% stat -> recovery icon */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD] text-[14px] font-bold text-[#6C4CF0]">
          1
        </span>
        <DashArrow />
        <div>
          <p className="font-heading text-[28px] font-extrabold leading-tight text-[#22B573]">~25%</p>
          <p className="mt-1 text-[16px] text-[#5B5D78]">Turbodev wins back</p>
        </div>
        <DashArrow />
        <span className="relative ml-2 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#EFFBF4]">
          <ShoppingCart size={26} className="text-[#22B573]" />
          <Sparkles size={15} className="absolute -right-1.5 -top-1.5 text-[#22B573]" />
        </span>
      </div>
    </div>
  );
}

/* ---- "High COD Failure Rates" visual — COD package card linked by a
   purple dotted arrow to the "~25%" stat, and a green dashed arrow
   from the "1" badge sweeping over to a package icon with a sparkle
   accent, matching the reference screenshot. ---- */
function CODFailureVisual() {
  return (
    <div className="flex flex-col gap-9">
      {/* row 1: package -> ~25% stat */}
      <div className="flex flex-wrap items-center gap-6">
        <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-[#F2F1FD]">
          <Package size={36} className="text-[#B7A9F5]" strokeWidth={1.5} />
          <div className="absolute -bottom-4 -right-12 whitespace-nowrap rounded-lg border border-[#E4E4EF] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#14163B] shadow-md">
            COD Order
            <br />
            <span className="text-[10px] font-normal text-[#8A8CA6]">₹1,299</span>
          </div>
        </div>
        <div className="ml-6">
          <p className="font-heading text-[28px] font-extrabold leading-tight text-[#6C4CF0]">~25%</p>
          <p className="mt-1 text-[16px] text-[#5B5D78]">of COD orders fail or return</p>
        </div>
      </div>

      {/* row 2: "1" badge -> <10% stat -> icon */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2F1FD] text-[14px] font-bold text-[#6C4CF0]">
          1
        </span>
        <DashArrow />
        <div>
          <p className="font-heading text-[28px] font-extrabold leading-tight text-[#22B573]">&lt;10%</p>
          <p className="mt-1 text-[16px] text-[#5B5D78]">Turbodev cuts it</p>
        </div>
        <DashArrow />
        <span className="relative ml-2 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#EFFBF4]">
          <Package size={26} className="text-[#F5A623]" />
          <Sparkles size={15} className="absolute -right-1.5 -top-1.5 text-[#22B573]" />
        </span>
      </div>
    </div>
  );
}

function DonutRing({ percent, color, children }: DonutRingProps) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;

  return (
    <div className="relative flex h-[110px] w-[110px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#EDEBFB" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
}

/* ---- "No Repeat Orders" cycle graphic — 4 corner cards in a diamond,
   linked by dashed circular arrows, with a center caption. Matches the
   reference screenshot: First Purchase -> Order Delivered -> Special
   Offer Unlocked -> Repeat Purchase -> back to First Purchase. ---- */
function CycleGraphic() {
  return (
    <div className="relative h-[260px] w-[340px] shrink-0 text-left">
      {/* connector arrows — endpoints stop short of each icon so labels never sit under an arrowhead */}
      <svg viewBox="0 0 340 260" className="absolute inset-0 h-full w-full">
        <defs>
          <marker id="cycleArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#22B573" />
          </marker>
        </defs>
        {/* Repeat Purchase (left) -> First Purchase (top) */}
        <path d="M64 96 Q86 34 150 26" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
        {/* First Purchase (top) -> Order Delivered (right) */}
        <path d="M190 28 Q250 38 262 100" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
        {/* Special Offer Unlocked (bottom) -> Repeat Purchase (left) */}
        <path d="M70 196 Q40 160 48 118" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
      </svg>

      {/* First Purchase */}
      <div className="absolute left-1/2 top-0 flex w-[92px] -translate-x-1/2 flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <ShoppingBag size={18} className="text-[#95BF47]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">First Purchase</span>
      </div>

      {/* Repeat Purchase */}
      <div className="absolute left-0 top-[34%] flex w-[92px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <ShoppingCart size={18} className="text-[#6C4CF0]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Repeat Purchase</span>
      </div>

      {/* Order Delivered */}
      <div className="absolute right-0 top-[32%] flex w-[92px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Package size={18} className="text-[#8A5A2B]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Order Delivered</span>
      </div>

      {/* center: "1" badge + caption */}
      <div className="absolute left-1/2 top-[52%] flex w-[130px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#6C4CF0] text-[12px] font-bold text-white">
          1
        </span>
        <span className="text-[11px] font-semibold leading-tight text-[#6C4CF0]">
          Turbodev brings them back
        </span>
      </div>

      {/* Special Offer Unlocked */}
      <div className="absolute bottom-0 left-[6%] flex w-[100px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Gift size={18} className="text-[#F5A623]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Special Offer Unlocked</span>
      </div>

      {/* Lifetime Value mini card */}
      <div className="absolute bottom-0 right-0 w-[128px] rounded-xl border border-[#E4E4EF] bg-white p-3 shadow-sm">
        <p className="text-[11px] text-[#8A8CA6]">Lifetime Value</p>
        <p className="font-heading text-[17px] font-extrabold text-[#6C4CF0]">+156%</p>
        <svg viewBox="0 0 100 28" className="mt-1.5 h-7 w-full">
          <path
            d="M2 24 L20 18 L38 21 L56 9 L74 13 L98 3"
            fill="none"
            stroke="#22B573"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ---- "Missed Cross-sells" graphic — Shopify store, three recommended
   items linked by dashed arrows, and a numbered "1" badge with caption,
   matching the reference screenshot layout. ---- */
function CrossSellGraphic() {
  return (
    <div className="relative h-[236px] w-[300px] min-w-[300px] shrink-0 text-left">
      <svg viewBox="0 0 300 236" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <marker id="crossArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#6C4CF0" />
          </marker>
        </defs>
        {/* Headphones -> Watch */}
        <path d="M128 108 Q150 55 172 48" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
        {/* Watch -> Shoes */}
        <path d="M222 52 Q258 68 262 92" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
        {/* Shoes -> "1" badge */}
        <path d="M252 132 Q228 150 210 154" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
      </svg>

      {/* Shopify store icon (source of recommendations) */}
      <div className="absolute left-[96px] top-0">
        <ShopifyLogo size={26} />
      </div>

      {/* Watch — top right */}
      <div className="absolute left-[172px] top-[10px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white text-[19px] shadow-sm">
          ⌚
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      {/* Headphones — bottom left */}
      <div className="absolute left-[78px] top-[92px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Headset size={19} className="text-[#5B5D78]" />
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      {/* Shoes — right */}
      <div className="absolute left-[240px] top-[82px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white text-[19px] shadow-sm">
          👟
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      {/* "1" badge */}
      <span className="absolute left-[192px] top-[150px] flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F1FD] text-[13px] font-bold text-[#6C4CF0]">
        1
      </span>

      {/* Caption */}
      <p className="absolute left-[112px] top-[196px] w-[188px] text-center text-[11.5px] leading-snug text-[#5B5D78]">
        Turbodev cross-sells and upsells automatically
      </p>
    </div>
  );
}

/* ---- Recover Lost Sales visual ---- */
function RecoverLostSalesVisual() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <img
        alt="Turbodev recovering a lost sale through WhatsApp, COD confirmation and payment"
        loading="lazy"
        decoding="async"
        className="h-auto w-full object-contain"
        src="/recover-lost-sales.png"
      />
    </div>
  );
}

/* ---- Turn conversations into sales visual ---- */
function ConversationsVisual() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <img
        alt="Turbodev turning conversations into sales"
        loading="lazy"
        decoding="async"
        className="h-auto w-full object-contain"
        src="/conversation-into-sales.png"
      />
    </div>
  );
}

/* ---- Win more repeat orders visual ---- */
function RepeatOrdersJourney() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <img
        alt="Turbodev's repeat-order journey from first purchase to VIP treatment"
        loading="lazy"
        decoding="async"
        className="h-auto w-full object-contain"
        src="/repeat-orders.png"
      />
    </div>
  );
}

/* ---- Decorative bee/meadow banner art (pure SVG, no external images) ---- */
function BeeBannerArt() {
  const bees: [number, number][] = [
    [120, 340], [260, 210], [1240, 60], [1180, 260], [980, 120], [90, 120],
  ];
  const flowers: [number, number][] = [
    [60, 380], [180, 400], [1350, 380], [1300, 320], [40, 300],
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      viewBox="0 0 1400 420"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sky" cx="70%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#6FB8D9" />
          <stop offset="100%" stopColor="#1D3B63" />
        </radialGradient>
      </defs>
      <rect width="1400" height="420" fill="url(#sky)" opacity="0.55" />
      {bees.map(([x, y], i) => (
        <text key={`bee-${i}`} x={x} y={y} fontSize="26" opacity="0.85">
          🐝
        </text>
      ))}
      {flowers.map(([x, y], i) => (
        <text key={`flower-${i}`} x={x} y={y} fontSize="30" opacity="0.9">
          🌼
        </text>
      ))}
    </svg>

  );
  
}