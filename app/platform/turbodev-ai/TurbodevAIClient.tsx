"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
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
================================================================ */
function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@500;600;700;800;900&display=swap');

      .font-heading {
        font-family: 'Geist', 'Geist Sans', ui-sans-serif, system-ui, sans-serif;
        letter-spacing: -0.01em;
      }
      .font-body {
        font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      }
    `}</style>
  );
}

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

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

/* Back-to-home link — shown at the top of this page since the shared
   Navbar is intentionally hidden here (see ConditionalNavbar). Without
   this, a person who lands here in a new tab (Learn more opens in a
   new tab) has no way back to the main site except closing the tab. */
function BackToHomeLink() {
  return (
    <div className={`${ALIGN} pb-4 pt-8`}>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5B5D78] transition-colors hover:text-[#6C4CF0]"
      >
        <ArrowLeft size={16} strokeWidth={2.25} />
        Back to Starfii
      </Link>
    </div>
  );
}

/* Small dashed connector used to visually link cards/icons together */
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

/* ---------------- page ---------------- */

export default function TurbodevAIClient() {
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
    <main className="font-body bg-white pb-28 pt-10">
      <FontLoader />

      <BackToHomeLink />

      {/* ===================== HERO ===================== */}
      <section className={`${ALIGN}`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left */}
          <div>
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
      </section>

      {/* ===================== BY THE NUMBERS ===================== */}
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

      {/* ===================== AFTER THE AD CLICK ===================== */}
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
          <ProblemCard title="Abandoned Carts">
            <AbandonedCartsVisual />
          </ProblemCard>

          <ProblemCard title="High COD Failure Rates">
            <CODFailureVisual />
          </ProblemCard>

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

      {/* ===================== HOW TURBODEV GETS THAT REVENUE BACK ===================== */}
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

      {/* ===================== WIN MORE REPEAT ORDERS ===================== */}
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

      {/* ===================== TURN CONVERSATIONS INTO SALES ===================== */}
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

      {/* ===================== EVERY REVENUE MOMENT, COVERED ===================== */}
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

      {/* ===================== EVERY MONTH REVENUE ATTRIBUTION ===================== */}
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

      {/* ===================== THE ALTERNATIVE ===================== */}
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

      {/* ===================== FAQ ===================== */}
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

/* ---- "Abandoned Carts" visual ---- */
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

/* ---- "High COD Failure Rates" visual ---- */
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

/* ---- "No Repeat Orders" cycle graphic ---- */
function CycleGraphic() {
  return (
    <div className="relative h-[260px] w-[340px] shrink-0 text-left">
      <svg viewBox="0 0 340 260" className="absolute inset-0 h-full w-full">
        <defs>
          <marker id="cycleArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#22B573" />
          </marker>
        </defs>
        <path d="M64 96 Q86 34 150 26" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
        <path d="M190 28 Q250 38 262 100" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
        <path d="M70 196 Q40 160 48 118" fill="none" stroke="#22B573" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cycleArrow)" />
      </svg>

      <div className="absolute left-1/2 top-0 flex w-[92px] -translate-x-1/2 flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <ShoppingBag size={18} className="text-[#95BF47]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">First Purchase</span>
      </div>

      <div className="absolute left-0 top-[34%] flex w-[92px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <ShoppingCart size={18} className="text-[#6C4CF0]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Repeat Purchase</span>
      </div>

      <div className="absolute right-0 top-[32%] flex w-[92px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Package size={18} className="text-[#8A5A2B]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Order Delivered</span>
      </div>

      <div className="absolute left-1/2 top-[52%] flex w-[130px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#6C4CF0] text-[12px] font-bold text-white">
          1
        </span>
        <span className="text-[11px] font-semibold leading-tight text-[#6C4CF0]">
          Turbodev brings them back
        </span>
      </div>

      <div className="absolute bottom-0 left-[6%] flex w-[100px] flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Gift size={18} className="text-[#F5A623]" />
        </span>
        <span className="text-[11px] leading-tight text-[#5B5D78]">Special Offer Unlocked</span>
      </div>

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

/* ---- "Missed Cross-sells" graphic ---- */
function CrossSellGraphic() {
  return (
    <div className="relative h-[236px] w-[300px] min-w-[300px] shrink-0 text-left">
      <svg viewBox="0 0 300 236" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <marker id="crossArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#6C4CF0" />
          </marker>
        </defs>
        <path d="M128 108 Q150 55 172 48" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
        <path d="M222 52 Q258 68 262 92" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
        <path d="M252 132 Q228 150 210 154" fill="none" stroke="#6C4CF0" strokeWidth="1.4" strokeDasharray="3 4" markerEnd="url(#crossArrow)" />
      </svg>

      <div className="absolute left-[96px] top-0">
        <ShopifyLogo size={26} />
      </div>

      <div className="absolute left-[172px] top-[10px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white text-[19px] shadow-sm">
          ⌚
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      <div className="absolute left-[78px] top-[92px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white shadow-sm">
          <Headset size={19} className="text-[#5B5D78]" />
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      <div className="absolute left-[240px] top-[82px] flex w-[52px] flex-col items-center gap-1.5 text-center">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E4E4EF] bg-white text-[19px] shadow-sm">
          👟
        </span>
        <span className="text-[10px] font-medium leading-tight text-[#6C4CF0]">Recommended</span>
      </div>

      <span className="absolute left-[192px] top-[150px] flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F1FD] text-[13px] font-bold text-[#6C4CF0]">
        1
      </span>

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