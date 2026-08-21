// // components/industries/IndustryPageTemplate.tsx
// import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
// import Link from "next/link";

// const T = {
//   ink: "text-[#14163B]",
//   inkBg: "bg-[#0C0E2A]",
//   primary: "text-[#3B2FE0]",
//   primaryBg: "bg-[#3B2FE0]",
//   primaryHoverBg: "hover:bg-[#2E24B8]",
//   muted: "text-[#5B5D78]",
//   border: "border-[#E4E4EF]",
//   panelBg: "bg-[#FAFAFD]",
//   accentOnDark: "text-[#8FA8FF]",
// };

// export type IndustryStat = { value: string; label: string };
// export type IndustryCapability = { title: string; description: string };
// export type IndustrySolution = { label: string };
// export type IndustryInsight = { eyebrow: string; title: string; blurb: string };

// export type IndustryContent = {
//   slug: string;
//   name: string;
//   kicker: string;
//   headline: string;
//   description: string;
//   stats: IndustryStat[];
//   capabilities: IndustryCapability[];
//   solutions: IndustrySolution[];
//   insight: IndustryInsight;
// };

// export default function IndustryPageTemplate({ data }: { data: IndustryContent }) {
//   return (
//     <main className={`${T.ink} bg-white`}>
//       {/* HERO */}
//       <section className="border-b border-[#E4E4EF]">
//         <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-40 sm:px-10 lg:px-16 lg:pt-48">
//           <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
//             <div>
//               <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}>
//                 {data.kicker}
//               </p>
//               <h1 className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.12] tracking-tight sm:text-[46px] lg:text-[52px]">
//                 {data.headline}
//               </h1>
//               <p className={`mt-6 max-w-2xl text-[16.5px] leading-relaxed ${T.muted}`}>
//                 {data.description}
//               </p>

//               <div className="mt-9 flex flex-wrap items-center gap-3">
//                 <button
//                   type="button"
//                   className={`flex h-11 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
//                 >
//                   Talk to us
//                 </button>
//                 <Link
//                   href="#capabilities"
//                   className={`flex h-11 items-center gap-1.5 rounded-md border ${T.border} px-6 text-[15px] font-semibold ${T.ink} transition-colors duration-150 hover:bg-[#F5F5F9]`}
//                 >
//                   See what we deliver
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </div>

//             <div className={`overflow-hidden rounded-2xl ${T.inkBg} p-8`}>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
//                 {data.name} at a glance
//               </p>
//               <div className="mt-6 space-y-6">
//                 {data.stats.map((s) => (
//                   <div key={s.label} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
//                     <p className={`text-[30px] font-bold leading-none ${T.accentOnDark}`}>{s.value}</p>
//                     <p className="mt-2 text-[13.5px] leading-snug text-white/65">{s.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CAPABILITIES */}
//       <section id="capabilities" className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
//         <div className="max-w-xl">
//           <h2 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]">
//             What we deliver
//           </h2>
//           <p className="mt-3 text-[22px] font-semibold leading-snug">
//             Purpose-built capabilities for {data.name.toLowerCase()}.
//           </p>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
//           {data.capabilities.map((c) => (
//             <div key={c.title} className={`border-l-2 ${T.border} pl-5`}>
//               <h3 className="text-[17px] font-semibold">{c.title}</h3>
//               <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{c.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SOLUTIONS */}
//       <section className={`${T.panelBg} border-y ${T.border}`}>
//         <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
//           <h2 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]">
//             Solutions we build
//           </h2>
//           <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
//             {data.solutions.map((s) => (
//               <div key={s.label} className="flex items-center gap-3">
//                 <CheckCircle2 size={17} className={T.primary} strokeWidth={2.25} />
//                 <span className="text-[14.5px]">{s.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURED INSIGHT + CTA */}
//       <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
//           <div className={`overflow-hidden rounded-2xl border ${T.border} p-8`}>
//             <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
//               {data.insight.eyebrow}
//             </p>
//             <h3 className="mt-3 text-[20px] font-semibold leading-snug">{data.insight.title}</h3>
//             <p className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}>{data.insight.blurb}</p>
//             <a href="#" className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}>
//               Read more
//               <ArrowUpRight size={15} />
//             </a>
//           </div>

//           <div className={`flex flex-col justify-between overflow-hidden rounded-2xl ${T.inkBg} p-8 text-white sm:flex-row sm:items-center`}>
//             <div>
//               <h3 className="text-[21px] font-semibold leading-snug">
//                 Ready to talk about {data.name.toLowerCase()}?
//               </h3>
//               <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65">
//                 Tell us what you&apos;re trying to solve — we&apos;ll bring the right team into the conversation.
//               </p>
//             </div>
//             <button
//               type="button"
//               className="mt-6 flex h-11 shrink-0 items-center gap-2 rounded-md bg-white px-6 text-[15px] font-semibold text-[#14163B] transition-colors duration-150 hover:bg-white/90 sm:mt-0"
//             >
//               Talk to us
//               <ArrowRight size={15} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }