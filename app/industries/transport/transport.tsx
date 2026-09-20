"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import GetInTouch from "../transport/getintouch";

const BLUE = "#1B2560";
const INDIGO = "#4F3FE0";
const LAVENDER = "#F5F3FC";
const CARD = "#EEF0F5";
const WRAP = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const HEADING = "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

const capabilities = [
  ["294","Logistics platforms","Connected logistics platforms for complex operations","Modernize platforms connecting shipments, orders, carriers, customers, assets and operational teams through scalable architecture and secure integrations.","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=1500&auto=format&fit=crop"],
  ["295","Supply chain","Supply chain technology built for end-to-end visibility","Connect supplier, inventory, order, warehouse, transportation and fulfillment information so teams can coordinate decisions and respond to change.","https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=85&w=1500&auto=format&fit=crop"],
  ["296","Fleet and operations","Digital fleet and operations solutions that improve control","Build connected experiences for fleet management, dispatch, maintenance, scheduling, driver workflows and service operations.","https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=85&w=1500&auto=format&fit=crop"],
  ["297","Tracking and visibility","Real-time tracking and visibility across logistics journeys","Connect tracking signals, shipment information, operational events and customer-facing experiences to create clearer visibility and faster exception response.","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=85&w=1500&auto=format&fit=crop"],
  ["298","AI","AI for smarter logistics decisions and operations","Apply AI to demand insights, operational support, exception detection, document processing, customer assistance and decision support with governance and human oversight.","https://images.unsplash.com/photo-1677442136019-21780ecad995?q=85&w=1500&auto=format&fit=crop"],
  ["299","Data and analytics","Logistics data and analytics that turn signals into action","Bring shipment, fleet, customer, supply-chain and operational data together through governed dashboards, reporting and analytics.","https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1500&auto=format&fit=crop"],
  ["300","Mobile applications","Mobile applications for connected transportation workflows","Design secure mobile experiences for drivers, field teams, customers, dispatchers and operations, connecting people with schedules, tasks and tracking.","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=85&w=1500&auto=format&fit=crop"],
  ["301","Cloud","Cloud foundations for resilient logistics technology","Modernize applications and workloads in secure cloud environments with strong integration, observability, resilience, data controls and governance.","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1500&auto=format&fit=crop"],
];

const useCases = [
  ["Shipment and order visibility","Connect shipment, order, carrier, tracking and customer information into a consistent view of logistics journeys and exceptions."],
  ["Fleet management","Digitize scheduling, dispatch, maintenance, driver workflows and fleet information to support coordinated daily operations."],
  ["Last-mile delivery","Connect delivery planning, mobile workflows, tracking, customer communication and proof-of-delivery experiences."],
  ["Supply chain analytics","Bring supply-chain and operational data together for dashboards, reporting, performance insights and decision support."],
  ["Logistics workflow automation","Automate repetitive operational processes across documentation, approvals, exception handling, notifications and service workflows."],
  ["Connected driver experiences","Give drivers and field teams mobile access to schedules, tasks, communication, tracking and operational updates."],
];

const cases = [
  ["Modernizing a connected logistics platform","A digital modernization program connected logistics workflows, applications and data around a scalable operational technology foundation.","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=1000&auto=format&fit=crop"],
  ["Creating end-to-end operational visibility","Tracking, data integration and analytics capabilities connected fragmented operational information into clearer visibility.","https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=85&w=1000&auto=format&fit=crop"],
  ["Building modern mobile and cloud services","Mobile application engineering and cloud modernization created a stronger foundation for connected transportation workflows.","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1000&auto=format&fit=crop"],
];

function Accordion({ item, open, onClick }: { item: string[]; open: boolean; onClick: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white" style={{ boxShadow: open ? "0 18px 40px rgba(15,23,42,.18)" : undefined }}>
      <button type="button" aria-expanded={open} onClick={onClick} className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left">
        <span className="font-heading text-[19px] font-medium" style={{ color: open ? INDIGO : BLUE }}>{item[0]}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: open ? "#E5E1F5" : INDIGO, color: open ? "#8B93A7" : "white" }}>
          {open ? <Minus size={18}/> : <Plus size={18}/>}
        </span>
      </button>
      <div className="grid transition-all duration-500" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden"><p className="px-8 pb-8 text-[15px] leading-[1.75]" style={{ color: BLUE }}>{item[1]}</p></div>
      </div>
    </div>
  );
}

export default function TransportationLogisticsPage() {
  const [active, setActive] = useState(0);
  const [openCase, setOpenCase] = useState<number | null>(null);
  useEffect(() => {
    const t = window.setInterval(() => setActive(v => (v + 1) % capabilities.length), 4500);
    return () => window.clearInterval(t);
  }, []);
  const current = capabilities[active];

  return (
    <main className="bg-white">
      <style>{`
        @keyframes transportUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        .transport-reveal{animation:transportUp .75s cubic-bezier(.22,1,.36,1) both}
        .transport-card{background:${CARD};border-radius:20px;transition:.35s cubic-bezier(.22,1,.36,1)}
        .transport-card:hover{background:#E4E7F3;transform:translateY(-4px);box-shadow:0 16px 40px rgba(27,37,96,.08)}
        .transport-case{transition:.35s cubic-bezier(.22,1,.36,1)}
        .transport-case:hover{transform:translateY(-5px);box-shadow:0 18px 42px rgba(27,37,96,.10)}
        @media(prefers-reduced-motion:reduce){.transport-reveal{animation:none!important}.transport-card,.transport-case{transition:none!important}}
      `}</style>

      {/* HERO */}
      <section className="relative isolate min-h-[520px] overflow-hidden lg:min-h-[650px]">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=90&w=2200&auto=format&fit=crop" alt="Transportation and logistics operations" className="h-full w-full object-cover"/>
          <div className="absolute inset-0" style={{background:"linear-gradient(90deg,rgba(0,0,0,.91) 0%,rgba(0,0,0,.74) 31%,rgba(0,0,0,.34) 58%,rgba(0,0,0,.06) 82%,rgba(0,0,0,0) 100%)"}}/>
        </div>
        <div className={`${WRAP} relative flex min-h-[520px] items-center lg:min-h-[650px]`}>
          <div className="w-full max-w-[840px]">
            <nav className="flex items-center gap-2 text-[14px] font-medium text-white/90">
              <Link href="/">Home</Link><ChevronRight size={14}/><Link href="/industries">Industries</Link><ChevronRight size={14}/><span className="text-white/60">Transportation &amp; Logistics</span>
            </nav>
            <h1 className="mt-6 max-w-[820px] text-[34px] font-medium leading-[1.08] tracking-[-.025em] text-white sm:text-[42px] lg:text-[52px]" style={{animation:"transportUp .7s ease-out both"}}>
              Transportation &amp; Logistics Technology Solutions
            </h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-white/90 sm:text-[18px]" style={{animation:"transportUp .7s ease-out .12s both"}}>
              Intelligent digital platforms for logistics, transportation, supply chains and operational visibility.
            </p>
            <a href="#connect" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold hover:scale-[1.03]" style={{color:INDIGO}}>Connect Now <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <div className={WRAP}>
        {/* 293 */}
        <section className="transport-reveal py-20 lg:py-24">
          <div className="grid overflow-hidden rounded-lg bg-[#F5F3FC] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="text-[16px] font-semibold" style={{color:BLUE}}>293 · Transportation &amp; Logistics</span>
              <h2 className={`${HEADING} mt-4`} style={{color:BLUE}}>Industry challenges</h2>
              <p className="mt-6 text-[17px] leading-[1.75] text-slate-600">Transportation and logistics organizations are balancing complex supply chains, fleet and operational demands, customer expectations, fragmented systems, real-time visibility needs, and pressure to improve efficiency.</p>
              <p className="mt-5 text-[16px] leading-[1.75] text-slate-600">Starfii connects logistics platforms, supply chain technology, fleet operations, tracking, AI, analytics, mobile applications, and cloud capabilities into one connected modernization approach.</p>
            </div>
            <div className="relative min-h-[350px]"><img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=85&w=1500&auto=format&fit=crop" alt="Transportation fleet" className="absolute inset-0 h-full w-full object-cover"/></div>
          </div>
        </section>

        {/* 294–301 cards */}
        <section className="transport-reveal pb-24 lg:pb-28">
          <span className="text-[16px] font-semibold" style={{color:BLUE}}>Transportation &amp; Logistics</span>
          <h2 className={`${HEADING} mt-4`} style={{color:BLUE}}>Transportation &amp; Logistics capabilities</h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.75] text-slate-600">Connect logistics operations, supply chains, fleets, tracking, data, intelligent technology, mobile experiences, and cloud platforms through a unified digital foundation.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map(item => (
              <Link key={item[0]} href={`#transport-${item[0]}`} className="transport-card flex min-h-[270px] flex-col p-8">
                <span className="text-[13px] font-semibold" style={{color:INDIGO}}>{item[0]}</span>
                <h3 className="mt-4 text-[25px] font-semibold leading-[1.2] sm:text-[27px]" style={{color:BLUE}}>{item[1]}</h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-slate-600">{item[3]}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold" style={{color:INDIGO}}>Learn More <ArrowUpRight size={16}/></span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* 294–301 tab section */}
      <section className="bg-white py-20 lg:py-28">
        <div className={WRAP}>
          <span className="text-[16px] font-semibold" style={{color:BLUE}}>Transportation &amp; Logistics</span>
          <h2 className={`${HEADING} mt-4`} style={{color:BLUE}}>Connected transportation solutions</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[330px_1fr]">
            <ul className="space-y-1 border-l" style={{borderColor:"#E5E1F5"}}>
              {capabilities.map((item,i)=>(
                <li key={item[0]} className="relative -ml-px">
                  {active===i && <span className="absolute inset-y-0 left-0 w-[2px]" style={{background:BLUE}}/>}
                  <button onClick={()=>setActive(i)} className="block w-full py-4 pl-5 text-left text-[18px] sm:text-[20px]" style={{color:active===i?BLUE:"#94A3B8",fontWeight:active===i?600:400}}>{item[1]}</button>
                </li>
              ))}
            </ul>
            <div key={current[0]} id={`transport-${current[0]}`} className="grid min-h-[440px] overflow-hidden rounded-2xl md:grid-cols-2" style={{background:LAVENDER}}>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="text-[13px] font-semibold" style={{color:INDIGO}}>{current[0]} · {current[1]}</span>
                <h3 className="mt-4 text-[28px] font-medium leading-[1.18] sm:text-[32px]" style={{color:BLUE}}>{current[2]}</h3>
                <p className="mt-5 text-[17px] leading-[1.75] text-slate-600">{current[3]}</p>
              </div>
              <div className="relative min-h-[310px]"><img src={current[4]} alt={current[1]} className="absolute inset-0 h-full w-full object-cover"/></div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="h-[3px] flex-1 rounded-full bg-[#E5E1F5]"><div className="h-full transition-all" style={{width:`${((active+1)/capabilities.length)*100}%`,background:INDIGO}}/></div>
            <span className="text-[13px] tabular-nums text-slate-400">{String(active+1).padStart(2,"0")} / 08</span>
            <button onClick={()=>setActive(v=>Math.max(0,v-1))} disabled={!active} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E5E1F5] disabled:opacity-40"><ChevronLeft size={18}/></button>
            <button onClick={()=>setActive(v=>Math.min(capabilities.length-1,v+1))} disabled={active===capabilities.length-1} className="flex h-11 w-11 items-center justify-center rounded-full text-white disabled:opacity-40" style={{background:INDIGO}}><ChevronRight size={18}/></button>
          </div>
        </div>
      </section>

      {/* 302 */}
      <section className="bg-[#1B2560] py-24 lg:py-28">
        <div className={WRAP}>
          <span className="text-[16px] font-semibold text-white/75">302</span>
          <h2 className={`${HEADING} mt-4 text-white`}>Use cases</h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-[1.75] text-white/70">Apply connected platforms, tracking, analytics, AI, mobile, and cloud technology to the transportation and logistics workflows that matter most.</p>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {useCases.map((item,i)=><Accordion key={item[0]} item={item} open={openCase===i} onClick={()=>setOpenCase(openCase===i?null:i)}/>)}
          </div>
        </div>
      </section>

      {/* 303 */}
      <section className="py-24 lg:py-28">
        <div className={WRAP}>
          <span className="text-[16px] font-semibold" style={{color:BLUE}}>303</span>
          <h2 className={`${HEADING} mt-4`} style={{color:BLUE}}>Case studies</h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-[1.75] text-slate-600">Explore examples of logistics platform modernization, operational visibility, data transformation, mobile applications, and cloud engineering.</p>
          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {cases.map(item=>(
              <article key={item[0]} className="transport-case overflow-hidden rounded-2xl bg-[#EEF0F5]">
                <div className="aspect-[16/10] overflow-hidden"><img src={item[2]} alt={item[0]} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"/></div>
                <div className="p-7">
                  <h3 className="text-[23px] font-semibold leading-[1.25]" style={{color:BLUE}}>{item[0]}</h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-slate-600">{item[1]}</p>
                  <Link href="/industries/transportation-logistics/casestudies" className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold" style={{color:INDIGO}}>View case studies <ArrowUpRight size={16}/></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 304 */}
      <section id="connect" className="scroll-mt-24"><GetInTouch /></section>
    </main>
  );
}
