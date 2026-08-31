// components/industries/data.ts
//
// Content source: pulled and rewritten from starfii.com (home + /expertise) —
// stats, capability names, and sub-solution names are the real ones Starfii
// already publishes. Insight/blog cards are placeholders labelled clearly
// below — swap in real blog post links whenever they're ready.
//
// NOTE: This file now contains 18 industries total — the original 6 plus
// 12 new ones added to match the full "Industries" nav menu. New entries
// follow the exact same IndustryContent shape as the originals.

import type { IndustryContent } from "./IndustryPageTemplate/IndustryPageTemplate";

// Stats are company-wide facts (from the Starfii homepage) reframed per
// industry page so every vertical still reads truthfully.
const baseStats = (industryNoun: string) => [
  { value: "5+", label: `Years delivering ${industryNoun} software` },
  { value: "80+", label: "Engineers, designers and QA on the bench" },
  { value: "3", label: "Delivery locations working across time zones" },
  { value: "20+", label: "Partnerships with industry-leading clients" },
];

export const industries: Record<string, IndustryContent> = {
  "ecommerce-retail": {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    kicker: "Industry Expertise / E-commerce & Retail",
    headline: "E-commerce & Retail Software Development",
    description:
      "Custom storefronts, marketplaces, and back-office systems that help retail and D2C brands sell faster, run leaner, and keep customers coming back.",
    stats: baseStats("e-commerce"),
    keyTakeaway:
      "Starfii builds custom e-commerce software end to end — from the storefront and admin panel to payments, inventory, and shipping — so retail and D2C teams can launch faster and scale without re-platforming.",
    highlight: {
      title: "How Retailers Move Faster Online",
      body: "Retail teams need one connected system instead of a patchwork of plugins: a storefront that converts, an admin panel that gives real control, and inventory and shipping that stay accurate as order volume grows. Starfii designs and builds that system around your catalogue, payment flows, and fulfillment process, with real-time reporting so decisions aren't made on stale data.",
    },
    focusAreas: [
      { title: "Mobile Commerce", description: "Native and cross-platform shopping apps built for browsing, checkout, and repeat purchase on mobile." },
      { title: "Marketplaces", description: "Multi-vendor platforms with seller onboarding, commission handling, and catalogue moderation built in." },
      { title: "Store Inventory Software", description: "Real-time stock tracking across warehouses and storefronts so listings never fall out of sync." },
      { title: "Order Management", description: "Order-to-delivery workflows with automated status updates, returns handling, and reporting." },
    ],
    impactPoints: [
      { label: "Faster Checkout Conversion", body: "A streamlined checkout with integrated payments and saved-preference support reduces drop-off between cart and confirmed order." },
      { label: "Accurate, Real-Time Inventory", body: "Stock levels sync across every channel — storefront, warehouse, and marketplace listings — so overselling and manual reconciliation go away." },
      { label: "Loyalty & Repeat Purchase", body: "Built-in loyalty programs and personalized recommendations turn first-time buyers into repeat customers." },
      { label: "Automated Fulfillment", body: "Shipping automation and order routing cut manual handling time from checkout to dispatch." },
      { label: "Actionable Reporting", body: "Real-time dashboards on sales, stock, and fulfillment give teams the numbers they need without waiting on exports." },
    ],
    capabilities: [
      { title: "Storefront & Admin Panel Development", description: "Custom storefronts paired with a powerful admin panel for catalogue, pricing, and order control." },
      { title: "Payment Integrations", description: "Secure, PCI-aware integrations with the payment gateways your customers already trust." },
      { title: "Inventory Management", description: "Centralized stock control across warehouses, stores, and online channels." },
      { title: "Shipping Automation", description: "Rules-based carrier selection, label generation, and tracking updates without manual work." },
      { title: "Loyalty Programs", description: "Points, tiers, and rewards logic built directly into the checkout and account experience." },
      { title: "Real-Time Reporting", description: "Sales, inventory, and fulfillment dashboards that update as orders happen, not overnight." },
    ],
    solutions: [
      { title: "Marketplace Platforms", description: "Multi-vendor marketplace builds with seller dashboards, commission rules, and catalogue moderation." },
      { title: "Order Management Solutions", description: "End-to-end order lifecycle tooling, from checkout through returns and refunds." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres", "Cloudflare"],
    insights: [
      { tag: "Guide", title: "Choosing Between a Custom Storefront and a Marketplace Build", blurb: "A practical breakdown of when a standalone storefront beats a multi-vendor marketplace, and what it costs to switch later." },
      { tag: "Case Study", title: "Cutting Fulfillment Time with Shipping Automation", blurb: "How rules-based carrier selection and label automation shortened the gap between checkout and dispatch for a growing retailer." },
      { tag: "Article", title: "What Real-Time Inventory Actually Requires", blurb: "The sync architecture behind stock counts that stay accurate across warehouse, storefront, and marketplace listings." },
    ],
    faqs: [
      { question: "Can Starfii build a custom storefront instead of using an off-the-shelf platform?", answer: "Yes — we build storefronts, admin panels, and back-office tooling from scratch when off-the-shelf platforms are too rigid for the catalogue, pricing, or fulfillment logic you need." },
      { question: "Do you integrate with existing payment gateways and shipping carriers?", answer: "Yes, we integrate with the payment gateways and shipping carriers your business already uses, and can add new ones as you expand into new markets." },
      { question: "Can you build a marketplace with multiple sellers?", answer: "Yes — we've built multi-vendor marketplace platforms with seller onboarding, commission handling, and catalogue moderation." },
      { question: "How long does a typical e-commerce build take?", answer: "Most engagements target an MVP within roughly 3 months, with a full-featured platform following in 5+ months, depending on scope." },
      { question: "Do you support mobile apps alongside the web storefront?", answer: "Yes, we build native and cross-platform mobile commerce apps that share the same catalogue, inventory, and order backend as the web storefront." },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    kicker: "Industry Expertise / Healthcare",
    headline: "Healthcare Software Development Services",
    description:
      "Digital products for clinics, pharmacies, and medical centers that improve patient engagement and support better healthcare outcomes.",
    stats: baseStats("healthcare"),
    keyTakeaway:
      "Starfii builds patient-facing and clinical software — from health tracking apps to telemedicine platforms — that helps healthcare practitioners and organizations engage patients and improve outcomes.",
    highlight: {
      title: "How Healthcare Providers Improve Patient Engagement",
      body: "Clinics, pharmacies, and medical centers need software that fits how patients actually behave — booking, checking in, tracking symptoms, and reaching a provider without friction. Starfii builds patient portals, telemedicine tools, and clinic-specific apps that keep patients engaged between visits, not just during them.",
    },
    focusAreas: [
      { title: "Health Tracking Applications", description: "Apps that let patients log symptoms, vitals, and medication so care teams see the full picture between visits." },
      { title: "Patient Portals", description: "Secure self-service portals for appointments, records, and communication with care teams." },
      { title: "Clinic, Pharmacy & Medical Center Apps", description: "Purpose-built apps for the day-to-day operations of clinics, pharmacies, and medical centers." },
      { title: "Telemedicine Software", description: "Video consultation and remote-care platforms that extend a practice's reach beyond its walls." },
    ],
    impactPoints: [
      { label: "Stronger Patient Engagement", body: "Portals and tracking apps keep patients connected to their care plan outside of scheduled visits." },
      { label: "Reduced Administrative Load", body: "Self-service booking, records access, and messaging cut down on phone-based admin work for staff." },
      { label: "Extended Access via Telemedicine", body: "Remote consultation software lets practices serve patients who can't easily visit in person." },
      { label: "Better Continuity of Care", body: "Shared, structured patient data across portal, tracking app, and clinic system reduces information gaps." },
      { label: "Compliance-Aware by Design", body: "Security and data-protection requirements are built into the architecture from the start, not bolted on after." },
    ],
    capabilities: [
      { title: "Patient Portal Development", description: "Secure portals for appointments, records, prescriptions, and provider messaging." },
      { title: "Telemedicine Platforms", description: "Video consultation software with scheduling, notes, and follow-up built in." },
      { title: "Health Tracking Apps", description: "Symptom, vitals, and medication tracking that feeds directly into a patient's care record." },
      { title: "Clinic & Pharmacy Software", description: "Operational apps tailored to the workflow of a specific clinic, pharmacy, or medical center." },
      { title: "Data Protection & Compliance", description: "Architecture built with healthcare data protection and domain-specific regulation in mind." },
      { title: "Integration & Interoperability", description: "Connecting patient-facing apps with the systems clinics already run on." },
    ],
    solutions: [
      { title: "Telemedicine Platform Build", description: "A complete remote-consultation platform — scheduling, video, notes, and follow-up in one system." },
      { title: "Patient Portal Suite", description: "Appointment booking, records access, and secure messaging for patients and care teams." },
    ],
    techStack: ["React", "Node.js", "AWS", "Azure", "MongoDB", "Postgres"],
    insights: [
      { tag: "Guide", title: "What a Patient Portal Needs to Actually Reduce Front-Desk Calls", blurb: "The features that move booking and records requests out of the phone queue and into self-service." },
      { tag: "Article", title: "Building Telemedicine Software Patients Will Actually Use", blurb: "Scheduling, connection reliability, and follow-up design choices that determine whether a telemedicine tool sticks." },
      { tag: "Case Study", title: "Connecting a Health Tracking App to a Clinic's Care Records", blurb: "How structured patient-logged data can feed directly into a provider's existing workflow." },
    ],
    faqs: [
      { question: "Can Starfii build software that handles sensitive patient data safely?", answer: "Yes, we design healthcare applications with data protection and domain-specific regulatory requirements in mind from the architecture stage onward." },
      { question: "Do you build telemedicine platforms from scratch?", answer: "Yes, we build complete telemedicine platforms including scheduling, video consultation, notes, and follow-up workflows." },
      { question: "Can you build software specific to a pharmacy or medical center?", answer: "Yes — we build apps tailored to the specific operational workflow of clinics, pharmacies, and medical centers, not generic templates." },
      { question: "Do patient portals integrate with our existing clinic systems?", answer: "We build portals to integrate with the systems a clinic already runs on, so patient data stays connected rather than living in a silo." },
      { question: "What's included in a health tracking application?", answer: "Typically symptom, vitals, and medication logging for patients, with structured data that can feed into a provider's care record." },
    ],
  },

  "edtech-elearning": {
    slug: "edtech-elearning",
    name: "Ed-tech & E-learning",
    kicker: "Industry Expertise / Ed-tech & E-learning",
    headline: "Ed-tech & E-learning Software Development",
    description:
      "Platforms that bridge academia and industry — helping students, professionals, and educators learn, teach, and upskill.",
    stats: baseStats("ed-tech"),
    keyTakeaway:
      "Starfii builds e-learning platforms that connect educators, corporates, and students in one system — course creation and sales, bulk corporate training, and industry-focused learning for individual students.",
    highlight: {
      title: "How Ed-tech Platforms Bridge Academia and Industry",
      body: "The gap between what students learn and what industry needs closes fastest when one platform serves everyone in the loop: educators who create and sell courses, corporates who need to train teams at scale, and students who want industry-relevant skills. Starfii builds that shared platform rather than three disconnected tools.",
    },
    focusAreas: [
      { title: "E-Learning Web Applications", description: "Full-featured learning platforms covering course delivery, progress tracking, and assessments." },
      { title: "Course Creation & Sales", description: "Tools for educators to build, price, and sell their own courses directly on the platform." },
      { title: "Corporate Training at Scale", description: "Bulk-user training solutions that let corporates onboard and track entire teams at once." },
      { title: "Industry-Focused Student Access", description: "Learning paths built around the skills students need for real industry roles, not just generic curricula." },
    ],
    impactPoints: [
      { label: "Faster Course Creation", body: "Educators get tools to build and publish courses without waiting on engineering support for every update." },
      { label: "Scalable Corporate Onboarding", body: "Bulk-user provisioning lets corporates roll out training to entire departments in one action." },
      { label: "Higher Completion Rates", body: "Progress tracking, reminders, and structured learning paths keep learners moving through a course." },
      { label: "Industry-Relevant Outcomes", body: "Curricula built around real industry skills give students outcomes that translate directly to employability." },
      { label: "Monetization for Educators", body: "Built-in course sales and pricing tools let educators earn directly from the platform." },
    ],
    capabilities: [
      { title: "E-Learning Platform Development", description: "End-to-end learning platforms with course delivery, assessments, and progress tracking." },
      { title: "Course Marketplace Tools", description: "Course creation, pricing, and sales tools built for individual educators." },
      { title: "Corporate Training Solutions", description: "Bulk-user management and reporting for corporates training teams at scale." },
      { title: "Learning Path Personalization", description: "Industry-focused learning tracks tailored to a student's target role or skill gap." },
      { title: "Assessments & Certification", description: "Quizzes, assignments, and certificate issuance built into the learning flow." },
      { title: "Analytics & Reporting", description: "Engagement and completion analytics for educators, corporates, and platform admins." },
    ],
    solutions: [
      { title: "Educator Course Platform", description: "Lets educators upload, price, and sell courses directly, with built-in payments and analytics." },
      { title: "Corporate Bulk Training Suite", description: "A dedicated workflow for corporates to onboard and train large numbers of employees at once." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres", "OpenAI"],
    insights: [
      { tag: "Guide", title: "Designing a Platform That Serves Educators, Corporates, and Students", blurb: "How to structure one e-learning system so three different user types each get the workflow they need." },
      { tag: "Article", title: "What Makes a Corporate Bulk-Training Rollout Actually Work", blurb: "The onboarding, reporting, and access-control features that matter when training hundreds of employees at once." },
      { tag: "Case Study", title: "Turning a Course Idea into a Sellable Product for Educators", blurb: "The tools an educator needs beyond video hosting to actually monetize a course." },
    ],
    faqs: [
      { question: "Can educators sell their own courses directly on the platform?", answer: "Yes — we build course creation and sales tools that let individual educators upload, price, and sell their courses." },
      { question: "Can corporates train large teams through the same platform?", answer: "Yes, we build bulk-user training workflows so corporates can onboard and track entire teams in one place." },
      { question: "Do you build assessments and certification into the platform?", answer: "Yes, quizzes, assignments, and certificate issuance can be built directly into the learning flow." },
      { question: "Can the platform support industry-focused learning paths for students?", answer: "Yes — we design learning paths around the specific skills students need for real industry roles." },
      { question: "What technologies do you typically use for e-learning platforms?", answer: "Common choices include React and Node.js for the application layer, with MongoDB or Postgres for data and AWS for hosting — adapted to your specific requirements." },
    ],
  },

  finance: {
    slug: "finance",
    name: "Finance",
    kicker: "Industry Expertise / Finance",
    headline: "Finance & Fintech Software Development",
    description:
      "Secure, compliant software built on microservices architecture that improves the financial experience for banks, neobanks, and fintechs.",
    stats: baseStats("finance"),
    keyTakeaway:
      "Starfii designs and develops secure, compliant financial software — from digital banking and neobank platforms to e-wallets and leasing systems — built on a microservices architecture for scale.",
    highlight: {
      title: "How Financial Products Earn Long-Term Trust",
      body: "Financial software has to be secure and compliant on day one, and flexible enough to add products later without a rebuild. Starfii builds on microservices architecture so digital banking, e-wallet, and leasing platforms can scale feature by feature, with security and compliance considered at every layer rather than added at the end.",
    },
    focusAreas: [
      { title: "Digital Banking & Neobank Software", description: "Core digital banking experiences built for neobanks and traditional institutions going digital-first." },
      { title: "Personal Finance Management Apps", description: "Budgeting, tracking, and financial-planning tools that help users manage money in one place." },
      { title: "E-Wallets", description: "Digital wallet platforms for storing, sending, and receiving funds securely." },
      { title: "Leasing Software", description: "Systems that manage leasing agreements, payments, and asset tracking end to end." },
    ],
    impactPoints: [
      { label: "Security by Architecture", body: "A microservices approach isolates sensitive functions so a breach in one service doesn't compromise the whole system." },
      { label: "Compliance Built In", body: "Regulatory and data-protection requirements are considered from the design stage, not retrofitted later." },
      { label: "Faster Feature Rollout", body: "Microservices let new financial products or features ship independently, without a full platform release." },
      { label: "Scalable Transaction Volume", body: "Architecture designed to handle growing transaction load without a rebuild." },
      { label: "A Better Financial Experience", body: "Clear, fast interfaces for banking, payments, and financial planning reduce friction for end users." },
    ],
    capabilities: [
      { title: "Digital Banking Platforms", description: "Core banking and neobank software for digital-first financial institutions." },
      { title: "E-Wallet Development", description: "Secure wallet infrastructure for storing and transferring funds." },
      { title: "Personal Finance Apps", description: "Budgeting and financial-planning tools built around real user spending behavior." },
      { title: "Leasing & Asset Management Software", description: "End-to-end leasing platforms covering agreements, payments, and asset tracking." },
      { title: "Microservices Architecture", description: "Modular, independently scalable services underpinning every financial product we build." },
      { title: "Security & Compliance Engineering", description: "Data protection and regulatory requirements engineered into the platform from the start." },
    ],
    solutions: [
      { title: "Neobank Platform Build", description: "A digital-first banking platform covering accounts, payments, and customer onboarding." },
      { title: "E-Wallet Infrastructure", description: "Secure send, receive, and store functionality built for scale and compliance." },
    ],
    techStack: ["Node.js", "React", "AWS", "Postgres", "MongoDB", "Cloudflare"],
    insights: [
      { tag: "Guide", title: "Why Microservices Matter for Financial Software", blurb: "The architectural reasoning behind isolating banking, payments, and account services into independent components." },
      { tag: "Article", title: "Building Compliance Into a Fintech Product from Day One", blurb: "What it looks like to treat regulatory and data-protection requirements as design inputs rather than afterthoughts." },
      { tag: "Case Study", title: "Scaling an E-Wallet Without a Platform Rebuild", blurb: "How a modular architecture let a wallet product add features without disrupting existing transaction flows." },
    ],
    faqs: [
      { question: "Is Starfii's financial software built to be secure and compliant?", answer: "Yes — we design financial products on a microservices architecture with security and compliance considered at every layer, not added afterward." },
      { question: "Can you build a neobank or digital banking platform from scratch?", answer: "Yes, we design and develop digital banking and neobank software end to end, covering accounts, payments, and customer onboarding." },
      { question: "Do you build e-wallets and payment infrastructure?", answer: "Yes, we build e-wallet platforms for securely storing, sending, and receiving funds." },
      { question: "Can you build software for leasing or asset management?", answer: "Yes, we build leasing software that manages agreements, payments, and asset tracking end to end." },
      { question: "Why does Starfii use microservices for financial products?", answer: "Microservices let financial products scale and ship new features independently, while keeping sensitive functions isolated for better security." },
    ],
  },

  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    kicker: "Industry Expertise / Transportation & Logistics",
    headline: "Transportation & Logistics Software Development",
    description:
      "Scalable software with intuitive interfaces and interactive maps that gets transportation and logistics services to clients faster.",
    stats: baseStats("logistics"),
    keyTakeaway:
      "Starfii builds supply chain, warehouse, delivery, and vehicle-sharing software with interactive maps and intuitive interfaces, so logistics and transportation businesses can move goods and people faster.",
    highlight: {
      title: "How Logistics Operators Get Faster, Easier Access",
      body: "Transportation and logistics software lives or dies on how easily people can see where things are — a shipment, a vehicle, a driver — and act on it. Starfii builds interactive, map-driven interfaces on top of scalable backend systems, so dispatch, warehouse, and delivery teams get fast, easy access to the information they need.",
    },
    focusAreas: [
      { title: "Supply Chain Management", description: "End-to-end visibility across sourcing, transport, and delivery for logistics operators." },
      { title: "Warehouse Management", description: "Software that tracks inventory, staging, and dispatch within a warehouse in real time." },
      { title: "Delivery & Taxi Apps", description: "Rider and driver apps with live tracking, dispatch, and route optimization." },
      { title: "Vehicle Sharing & Rental", description: "Platforms for booking, unlocking, and managing shared or rented vehicles." },
    ],
    impactPoints: [
      { label: "Real-Time Visibility", body: "Interactive maps show shipments, vehicles, and drivers as they move, not on a delay." },
      { label: "Faster Dispatch", body: "Route optimization and live driver availability cut the time between a request and a dispatched vehicle." },
      { label: "Fewer Warehouse Errors", body: "Real-time inventory tracking reduces mis-picks and stock discrepancies at the source." },
      { label: "Scalable to Fleet Growth", body: "Architecture built to handle a growing number of vehicles, drivers, and orders without slowing down." },
      { label: "Easier Customer Access", body: "Intuitive booking and tracking interfaces reduce support requests and abandoned bookings." },
    ],
    capabilities: [
      { title: "Supply Chain Platforms", description: "Software that tracks goods from sourcing through final delivery." },
      { title: "Warehouse Management Systems", description: "Real-time inventory, staging, and dispatch tracking inside the warehouse." },
      { title: "Delivery & Taxi App Development", description: "Rider, driver, and dispatch apps built around live location and route optimization." },
      { title: "Vehicle Sharing & Rental Platforms", description: "Booking, access, and fleet-management software for shared and rental vehicles." },
      { title: "Interactive Mapping", description: "Live map interfaces that make locating a shipment, vehicle, or driver simple." },
      { title: "Route Optimization", description: "Algorithms that plan efficient routes based on live traffic, distance, and order load." },
    ],
    solutions: [
      { title: "Delivery & Dispatch Platform", description: "A live-tracking delivery platform covering rider apps, dispatch, and route optimization." },
      { title: "Warehouse Management System", description: "Real-time inventory and dispatch tracking built for a single warehouse or a multi-site network." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Android", "Swift"],
    insights: [
      { tag: "Guide", title: "What Makes a Delivery App's Route Optimization Actually Work", blurb: "The inputs — traffic, distance, order load — that separate useful route optimization from a static map." },
      { tag: "Article", title: "Reducing Warehouse Errors with Real-Time Inventory Tracking", blurb: "How live tracking at the point of pick and pack cuts down on stock discrepancies before they reach a customer." },
      { tag: "Case Study", title: "Building a Vehicle-Sharing Platform from Booking to Fleet Management", blurb: "The moving parts behind a rental or sharing platform, from the booking flow to backend fleet tracking." },
    ],
    faqs: [
      { question: "Can Starfii build a delivery or taxi app with live tracking?", answer: "Yes, we build rider and driver apps with live tracking, dispatch, and route optimization built in." },
      { question: "Do you build warehouse management software?", answer: "Yes — we build warehouse management systems that track inventory, staging, and dispatch in real time." },
      { question: "Can you build a vehicle sharing or rental platform?", answer: "Yes, we build platforms for booking, unlocking, and managing shared or rented vehicles end to end." },
      { question: "Do your logistics platforms include interactive maps?", answer: "Yes, interactive, map-driven interfaces are a core part of the transportation and logistics software we build." },
      { question: "Can you build supply chain visibility software?", answer: "Yes, we build supply chain management solutions that give visibility from sourcing through final delivery." },
    ],
  },

  "travel-booking": {
    slug: "travel-booking",
    name: "Travel & Booking",
    kicker: "Industry Expertise / Travel & Booking",
    headline: "Travel & Booking Software Development",
    description:
      "Software for a better traveler experience and stronger agency sales growth — from booking apps to hotel management systems.",
    stats: baseStats("travel"),
    keyTakeaway:
      "Starfii builds travel agency portals, booking apps, hotel management systems, and trip planning software that improve the traveler's experience while growing agency sales.",
    highlight: {
      title: "How Travel Businesses Grow Agency Sales",
      body: "A better traveler experience and stronger agency sales come from the same source: software that makes booking, managing, and planning a trip simple on both sides. Starfii builds the agency-facing portal and the traveler-facing app together, so pricing, availability, and itinerary data stay in sync across both.",
    },
    focusAreas: [
      { title: "Travel Agency Portals", description: "Back-office portals for agencies to manage bookings, pricing, and client relationships." },
      { title: "Booking Apps", description: "Traveler-facing apps for searching, comparing, and booking trips." },
      { title: "Hotel Management Systems", description: "Software covering reservations, room inventory, and guest management for properties." },
      { title: "Trip Planning Software", description: "Tools that help travelers build and manage an itinerary across bookings and activities." },
    ],
    impactPoints: [
      { label: "Higher Booking Conversion", body: "A fast, clear booking flow reduces the drop-off between a search and a confirmed reservation." },
      { label: "Synced Pricing & Availability", body: "Agency portal and traveler app draw from the same data, so pricing and availability never fall out of sync." },
      { label: "Stronger Agency Sales Tools", body: "Portals give agencies the visibility and control they need to manage client bookings and commissions." },
      { label: "Better Guest Management", body: "Hotel management systems keep reservations, room status, and guest details in one place." },
      { label: "Smoother Trip Planning", body: "Itinerary tools that bring bookings and activities together reduce the need for travelers to juggle separate apps." },
    ],
    capabilities: [
      { title: "Travel Agency Portal Development", description: "Back-office systems for agencies to manage bookings, pricing, and clients." },
      { title: "Booking App Development", description: "Traveler-facing apps for search, comparison, and booking." },
      { title: "Hotel Management Systems", description: "Reservation, room inventory, and guest-management software for properties." },
      { title: "Trip Planning Tools", description: "Itinerary builders that bring bookings and activities into one view." },
      { title: "Payments & Commission Handling", description: "Integrated payments with commission logic built in for agency-driven bookings." },
      { title: "Search & Availability Engines", description: "Fast search and real-time availability across inventory sources." },
    ],
    solutions: [
      { title: "Agency Booking Portal", description: "A complete back-office system for agencies to manage bookings, pricing, and commissions." },
      { title: "Hotel Management Platform", description: "Reservations, room inventory, and guest management in a single system." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Android"],
    insights: [
      { tag: "Guide", title: "What Keeps Agency and Traveler-Facing Pricing in Sync", blurb: "The shared-data approach that stops agency portals and booking apps from showing different prices for the same trip." },
      { tag: "Article", title: "Reducing Booking Drop-Off with a Faster Search-to-Confirm Flow", blurb: "The interface and backend choices that shorten the path from a travel search to a confirmed booking." },
      { tag: "Case Study", title: "Bringing Bookings and Activities into One Trip Planner", blurb: "How a unified itinerary view reduces the number of apps a traveler has to juggle mid-trip." },
    ],
    faqs: [
      { question: "Can Starfii build a booking app for our travel business?", answer: "Yes, we build traveler-facing booking apps for searching, comparing, and booking trips." },
      { question: "Do you build back-office portals for travel agencies?", answer: "Yes — we build agency portals for managing bookings, pricing, and client relationships." },
      { question: "Can you build a hotel management system?", answer: "Yes, we build hotel management systems covering reservations, room inventory, and guest management." },
      { question: "Do your booking platforms keep pricing and availability in sync?", answer: "Yes, we build agency portals and traveler apps on shared data so pricing and availability stay consistent across both." },
      { question: "Can you build trip planning tools alongside a booking platform?", answer: "Yes, we build trip planning software that brings bookings and activities together in a single itinerary view." },
    ],
  },

  "consumer-goods": {
    slug: "consumer-goods",
    name: "Consumer Goods",
    kicker: "Industry Expertise / Consumer Goods",
    headline: "Consumer Goods Software Development",
    description:
      "Software that connects manufacturing, distribution, and retail data so CPG brands can plan demand accurately, manage inventory, and sell directly to consumers.",
    stats: baseStats("consumer goods"),
    keyTakeaway:
      "Starfii builds demand planning, trade promotion, distributor, and direct-to-consumer software that gives CPG brands one accurate view of supply and demand.",
    highlight: {
      title: "How CPG Brands Keep Supply and Demand in Sync",
      body: "Consumer goods brands lose margin every time forecasts, trade spend, and distributor data live in separate spreadsheets. Starfii connects demand planning, trade promotion management, and distributor and DTC channels into one system, so decisions are made on current numbers instead of last quarter's export.",
    },
    focusAreas: [
      { title: "Demand Planning & Forecasting", description: "Forecasting tools that combine historical sales, seasonality, and promotions into an accurate demand plan." },
      { title: "Trade Promotion Management", description: "Software to plan, execute, and measure trade spend across retail partners." },
      { title: "Direct-to-Consumer Platforms", description: "DTC storefronts and apps that let CPG brands sell straight to consumers alongside retail channels." },
      { title: "Retail Execution & Field Sales", description: "Field-rep tools for store visits, shelf audits, and order capture in real time." },
    ],
    impactPoints: [
      { label: "More Accurate Forecasting", body: "Demand plans built on live sales and promotion data reduce both stockouts and overproduction." },
      { label: "Measurable Trade Spend", body: "Trade promotion tracking shows which promotions actually drive incremental volume, not just cost." },
      { label: "Direct Consumer Revenue", body: "DTC platforms open a new sales channel that runs alongside — not against — existing retail relationships." },
      { label: "Better Field Execution", body: "Real-time shelf and order data from field reps closes the gap between what's planned and what's on the shelf." },
      { label: "Faster Distributor Onboarding", body: "Streamlined distributor portals cut the time it takes to bring a new partner online." },
    ],
    capabilities: [
      { title: "Demand Planning Software", description: "Forecasting engines that blend historical, seasonal, and promotional data." },
      { title: "Trade Promotion Management Tools", description: "Planning, execution, and post-promotion analysis for trade spend." },
      { title: "DTC Commerce Platforms", description: "Storefronts and apps for selling directly to consumers." },
      { title: "Distributor Portals", description: "Self-service ordering and account management for distribution partners." },
      { title: "Field Sales Applications", description: "Mobile tools for retail execution, shelf audits, and order capture." },
      { title: "Supply Chain Analytics", description: "Dashboards connecting production, inventory, and sell-through data." },
    ],
    solutions: [
      { title: "Demand Planning Suite", description: "A forecasting system that unifies sales history, promotions, and seasonality into one plan." },
      { title: "DTC Launch Platform", description: "A direct-to-consumer storefront built to run alongside existing retail and distributor channels." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Power BI"],
    insights: [
      { tag: "Guide", title: "Why Most Demand Forecasts Miss and How to Fix Them", blurb: "The data gaps that cause CPG forecasts to drift, and what a connected planning system fixes." },
      { tag: "Article", title: "Measuring Trade Promotion ROI Beyond the Discount", blurb: "How to track incremental volume instead of just promotion cost." },
      { tag: "Case Study", title: "Launching a DTC Channel Without Disrupting Retail Partners", blurb: "How a CPG brand added direct-to-consumer sales while keeping distributor relationships intact." },
    ],
    faqs: [
      { question: "Can Starfii build demand forecasting software for our brand?", answer: "Yes, we build demand planning tools that combine historical sales, seasonality, and promotion data into an accurate forecast." },
      { question: "Do you build direct-to-consumer platforms for CPG brands?", answer: "Yes, we build DTC storefronts and apps designed to run alongside your existing retail and distributor channels." },
      { question: "Can you build trade promotion management software?", answer: "Yes, we build tools to plan, execute, and measure trade spend across your retail partners." },
      { question: "Do you build tools for field sales reps?", answer: "Yes, we build mobile field-sales apps for store visits, shelf audits, and order capture." },
      { question: "Can distributors get their own ordering portal?", answer: "Yes, we build self-service distributor portals for ordering and account management." },
    ],
  },

  "education-institutions": {
    slug: "education-institutions",
    name: "Education & Institutions",
    kicker: "Industry Expertise / Education & Institutions",
    headline: "Education & Institutions Software Development",
    description:
      "Student information systems, learning platforms, and admissions software built for schools, universities, and academic institutions.",
    stats: baseStats("education"),
    keyTakeaway:
      "Starfii builds student information systems, learning management platforms, and admissions and campus operations software for schools, universities, and institutions.",
    highlight: {
      title: "How Institutions Run Admissions to Graduation on One System",
      body: "Schools and universities juggle admissions, enrollment, coursework, and campus operations across too many disconnected tools. Starfii builds student information systems and admissions platforms that keep student data, records, and communication in one place from application through graduation.",
    },
    focusAreas: [
      { title: "Student Information Systems", description: "Centralized records covering enrollment, grades, attendance, and student history." },
      { title: "Learning Management Systems", description: "Course delivery, assignments, and grading built for institutional use at scale." },
      { title: "Admissions & Enrollment Platforms", description: "Application, review, and enrollment workflows for prospective students." },
      { title: "Campus Operations Software", description: "Scheduling, facilities, and administrative tools for day-to-day campus operations." },
    ],
    impactPoints: [
      { label: "Unified Student Records", body: "A single student information system removes the need to reconcile data across departments." },
      { label: "Faster Admissions Processing", body: "Structured application and review workflows cut the time from application to decision." },
      { label: "Better Course Engagement", body: "A learning management system built for the institution's actual workflow increases assignment completion and participation." },
      { label: "Streamlined Campus Operations", body: "Scheduling and facilities tools reduce the manual coordination behind everyday campus logistics." },
      { label: "Data-Driven Decisions", body: "Reporting across enrollment, academics, and operations gives leadership current, reliable numbers." },
    ],
    capabilities: [
      { title: "Student Information System Development", description: "Centralized student records covering enrollment, academics, and history." },
      { title: "Learning Management Platforms", description: "Course delivery, assignments, and grading tools built for institutional scale." },
      { title: "Admissions Software", description: "Application intake, review, and decision workflows for prospective students." },
      { title: "Enrollment Management Tools", description: "Registration, scheduling, and enrollment tracking for current students." },
      { title: "Campus Operations Systems", description: "Facilities, scheduling, and administrative tooling for day-to-day operations." },
      { title: "Reporting & Compliance", description: "Institutional reporting built to match academic and regulatory requirements." },
    ],
    solutions: [
      { title: "Admissions Platform Build", description: "An end-to-end admissions system from application intake through enrollment decision." },
      { title: "Student Information System", description: "A centralized records system covering academics, attendance, and student history." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Auth0"],
    insights: [
      { tag: "Guide", title: "What a Student Information System Needs to Actually Replace Spreadsheets", blurb: "The core modules that let departments stop maintaining their own separate records." },
      { tag: "Article", title: "Shortening the Path from Application to Enrollment Decision", blurb: "Workflow design choices that speed up admissions review without cutting corners." },
      { tag: "Case Study", title: "Bringing Admissions and Student Records onto One Platform", blurb: "How an institution unified application data with ongoing student records." },
    ],
    faqs: [
      { question: "Can Starfii build a student information system for our institution?", answer: "Yes, we build centralized student information systems covering enrollment, academics, attendance, and student history." },
      { question: "Do you build learning management platforms?", answer: "Yes, we build learning management systems for course delivery, assignments, and grading at institutional scale." },
      { question: "Can you build an admissions platform?", answer: "Yes, we build admissions software covering application intake, review, and enrollment decisions." },
      { question: "Do you build campus operations tools?", answer: "Yes, we build scheduling, facilities, and administrative software for day-to-day campus operations." },
      { question: "Can your systems handle institutional reporting requirements?", answer: "Yes, we build reporting built to match your institution's academic and regulatory requirements." },
    ],
  },

  "financial-services": {
    slug: "financial-services",
    name: "Financial Services",
    kicker: "Industry Expertise / Financial Services",
    headline: "Financial Services Software Development",
    description:
      "Wealth management, capital markets, and client-facing software for asset managers, advisors, and financial services firms.",
    stats: baseStats("financial services"),
    keyTakeaway:
      "Starfii builds wealth and asset management platforms, trading and capital markets tools, and client portals that give financial services firms accurate data and a better client experience.",
    highlight: {
      title: "How Financial Services Firms Serve Clients Faster",
      body: "Advisors and asset managers need portfolio, reporting, and client data in one place — not spread across spreadsheets and legacy systems. Starfii builds wealth management platforms and client portals that give firms and their clients current data, with regulatory reporting handled as part of the architecture.",
    },
    focusAreas: [
      { title: "Wealth & Asset Management Platforms", description: "Portfolio tracking, performance reporting, and client account management for advisors and asset managers." },
      { title: "Trading & Capital Markets Systems", description: "Order management, market data, and execution tooling for trading desks." },
      { title: "Regulatory Reporting & Compliance", description: "Reporting and audit tooling built around financial services regulatory requirements." },
      { title: "Client Portals & CRM", description: "Secure client-facing portals for account access, statements, and advisor communication." },
    ],
    impactPoints: [
      { label: "Real-Time Portfolio Visibility", body: "Advisors and clients see performance and holdings as they change, not on a delayed statement." },
      { label: "Faster Regulatory Reporting", body: "Reporting built into the platform architecture reduces the manual work behind compliance filings." },
      { label: "Stronger Client Relationships", body: "Client portals give investors self-service access to statements and communication, freeing advisors for higher-value conversations." },
      { label: "Reliable Trade Execution", body: "Order management and market data tooling built for accuracy under trading-day volume." },
      { label: "Scalable Client Growth", body: "Architecture that supports growing assets under management without a platform rebuild." },
    ],
    capabilities: [
      { title: "Wealth Management Platform Development", description: "Portfolio, performance, and account management software for advisors and asset managers." },
      { title: "Trading & Order Management Systems", description: "Order routing, market data, and execution tooling for trading desks." },
      { title: "Regulatory Reporting Tools", description: "Compliance and audit reporting built into the platform architecture." },
      { title: "Client Portal Development", description: "Secure, self-service portals for account access and advisor communication." },
      { title: "CRM & Client Data Management", description: "Client relationship tooling tailored to advisory and asset management workflows." },
      { title: "Data Security & Compliance Engineering", description: "Architecture built around financial services data protection requirements." },
    ],
    solutions: [
      { title: "Advisor Client Portal", description: "A secure portal giving clients self-service access to statements, performance, and communication." },
      { title: "Portfolio Management Platform", description: "Portfolio tracking and performance reporting for advisors and asset managers." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Cloudflare"],
    insights: [
      { tag: "Guide", title: "What Advisors Need from a Modern Client Portal", blurb: "The self-service features that reduce routine advisor workload without losing the personal relationship." },
      { tag: "Article", title: "Building Regulatory Reporting Into Financial Software from Day One", blurb: "Why compliance reporting works better as an architectural decision than a bolt-on report." },
      { tag: "Case Study", title: "Scaling a Wealth Management Platform with Growing Assets Under Management", blurb: "How a modular platform kept pace with a growing client base without a rebuild." },
    ],
    faqs: [
      { question: "Can Starfii build a wealth management platform for our firm?", answer: "Yes, we build portfolio tracking, performance reporting, and account management software for advisors and asset managers." },
      { question: "Do you build client-facing portals?", answer: "Yes, we build secure, self-service client portals for account access, statements, and advisor communication." },
      { question: "Can you build trading or order management systems?", answer: "Yes, we build order management, market data, and execution tooling for trading desks." },
      { question: "Is regulatory reporting built into your platforms?", answer: "Yes, we build compliance and audit reporting into the platform architecture rather than adding it afterward." },
      { question: "Can your platforms scale with our assets under management?", answer: "Yes, we design financial services platforms to scale with growing client and asset volume without requiring a rebuild." },
    ],
  },

  "energy-utilities": {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    kicker: "Industry Expertise / Energy & Utilities",
    headline: "Energy & Utilities Software Development",
    description:
      "Smart grid, metering, and customer software that helps energy and utility providers run reliable, efficient operations.",
    stats: baseStats("energy and utilities"),
    keyTakeaway:
      "Starfii builds smart grid and metering software, energy trading tools, field service systems, and customer self-service portals for energy and utility providers.",
    highlight: {
      title: "How Utilities Keep Grids Reliable and Customers Informed",
      body: "Utility operations depend on accurate, real-time data — from meter readings to field crew status to customer usage. Starfii builds smart metering and grid monitoring software alongside customer-facing billing and self-service portals, so operations teams and customers are both working from the same current data.",
    },
    focusAreas: [
      { title: "Smart Grid & Metering Software", description: "Real-time monitoring and data collection across smart meters and grid infrastructure." },
      { title: "Energy Trading & Risk Management", description: "Tools for managing energy trading positions, pricing, and risk exposure." },
      { title: "Field Service Management", description: "Scheduling and tracking for field crews handling installations, maintenance, and outages." },
      { title: "Customer Billing & Self-Service Portals", description: "Usage tracking, billing, and account management for utility customers." },
    ],
    impactPoints: [
      { label: "Real-Time Grid Visibility", body: "Smart metering data gives operations teams a live view of usage and grid conditions." },
      { label: "Faster Outage Response", body: "Field service tools route crews based on live outage and location data, cutting response time." },
      { label: "Reduced Billing Errors", body: "Usage data pulled directly from metering systems reduces manual billing discrepancies." },
      { label: "Managed Trading Risk", body: "Trading and risk tools give energy providers clearer visibility into pricing exposure." },
      { label: "Higher Customer Self-Service", body: "Self-service portals for usage, billing, and account management reduce inbound support calls." },
    ],
    capabilities: [
      { title: "Smart Metering Software", description: "Real-time data collection and monitoring from smart meters across a service area." },
      { title: "Grid Monitoring Systems", description: "Live visibility into grid load, conditions, and outages." },
      { title: "Energy Trading Platforms", description: "Position, pricing, and risk management tools for energy trading desks." },
      { title: "Field Service Management Software", description: "Scheduling and tracking for crews handling installs, maintenance, and outage response." },
      { title: "Customer Billing Systems", description: "Usage-based billing built on data from metering and grid systems." },
      { title: "Customer Self-Service Portals", description: "Account, usage, and billing access for utility customers." },
    ],
    solutions: [
      { title: "Smart Grid Monitoring Platform", description: "Real-time grid and metering data visibility for operations teams." },
      { title: "Customer Self-Service Portal", description: "Usage tracking, billing, and account management for utility customers." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres", "IoT Core"],
    insights: [
      { tag: "Guide", title: "What Smart Metering Data Actually Enables Beyond Billing", blurb: "How real-time meter data feeds grid monitoring, outage response, and customer self-service at once." },
      { tag: "Article", title: "Cutting Outage Response Time with Field Service Software", blurb: "How live location and outage data changes how crews are dispatched." },
      { tag: "Case Study", title: "Reducing Billing Disputes with Direct Metering Integration", blurb: "How pulling usage data straight from metering systems cut billing discrepancies." },
    ],
    faqs: [
      { question: "Can Starfii build smart metering and grid monitoring software?", answer: "Yes, we build real-time monitoring and data collection software across smart meters and grid infrastructure." },
      { question: "Do you build customer self-service portals for utilities?", answer: "Yes, we build portals for usage tracking, billing, and account management." },
      { question: "Can you build field service management tools?", answer: "Yes, we build scheduling and tracking software for field crews handling installations, maintenance, and outages." },
      { question: "Do you build energy trading and risk tools?", answer: "Yes, we build tools for managing trading positions, pricing, and risk exposure." },
      { question: "Can your billing systems pull directly from metering data?", answer: "Yes, we build billing systems that use usage data straight from your metering and grid systems." },
    ],
  },

  insurance: {
    slug: "insurance",
    name: "Insurance",
    kicker: "Industry Expertise / Insurance",
    headline: "Insurance Software Development",
    description:
      "Policy administration, claims, and underwriting software that helps insurers process faster and serve policyholders better.",
    stats: baseStats("insurance"),
    keyTakeaway:
      "Starfii builds policy administration systems, claims management software, underwriting tools, and agent portals that speed up insurance operations end to end.",
    highlight: {
      title: "How Insurers Process Claims and Policies Faster",
      body: "Insurance operations slow down wherever policy, claims, and underwriting data live in separate systems. Starfii builds connected policy administration, claims, and underwriting software so adjusters, underwriters, and agents all work from the same current record.",
    },
    focusAreas: [
      { title: "Policy Administration Systems", description: "Software to issue, manage, and renew policies across product lines." },
      { title: "Claims Management Software", description: "End-to-end claims intake, review, and settlement workflows." },
      { title: "Underwriting & Risk Assessment Tools", description: "Data-driven tools that support faster, more consistent underwriting decisions." },
      { title: "Agent & Broker Portals", description: "Self-service portals for agents and brokers to quote, bind, and manage policies." },
    ],
    impactPoints: [
      { label: "Faster Claims Settlement", body: "Structured claims workflows reduce the time from intake to settlement." },
      { label: "More Consistent Underwriting", body: "Risk assessment tools built on structured data reduce variance in underwriting decisions." },
      { label: "Reduced Policy Errors", body: "Automated policy issuance and renewal workflows cut manual data entry errors." },
      { label: "Stronger Agent Relationships", body: "Agent and broker portals give partners fast, self-service access to quoting and policy management." },
      { label: "Better Fraud Detection", body: "Structured claims data makes it easier to flag patterns that indicate fraudulent activity." },
    ],
    capabilities: [
      { title: "Policy Administration Software", description: "Issuance, management, and renewal tools across insurance product lines." },
      { title: "Claims Management Systems", description: "Intake, review, and settlement workflows for claims processing." },
      { title: "Underwriting Tools", description: "Data-driven risk assessment support for underwriting teams." },
      { title: "Agent & Broker Portal Development", description: "Self-service quoting, binding, and policy management for partners." },
      { title: "Fraud Detection Support", description: "Structured claims data pipelines that help flag anomalous patterns." },
      { title: "Regulatory Compliance Engineering", description: "Architecture built around insurance regulatory and reporting requirements." },
    ],
    solutions: [
      { title: "Claims Management Platform", description: "An end-to-end claims workflow from intake through settlement." },
      { title: "Agent & Broker Portal", description: "A self-service portal for partners to quote, bind, and manage policies." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Cloudflare"],
    insights: [
      { tag: "Guide", title: "What Slows Down Claims Settlement (and How to Fix It)", blurb: "The workflow gaps that add days to claims processing, and how structured systems close them." },
      { tag: "Article", title: "Building Underwriting Tools That Reduce Decision Variance", blurb: "How structured risk data supports more consistent underwriting outcomes." },
      { tag: "Case Study", title: "Giving Agents Self-Service Quoting Without Losing Control", blurb: "How a broker portal balanced agent autonomy with underwriting oversight." },
    ],
    faqs: [
      { question: "Can Starfii build a policy administration system?", answer: "Yes, we build software to issue, manage, and renew policies across your product lines." },
      { question: "Do you build claims management software?", answer: "Yes, we build end-to-end claims workflows from intake through settlement." },
      { question: "Can you build underwriting or risk assessment tools?", answer: "Yes, we build data-driven tools that support faster, more consistent underwriting decisions." },
      { question: "Do you build portals for agents and brokers?", answer: "Yes, we build self-service portals for agents and brokers to quote, bind, and manage policies." },
      { question: "Can your systems help with fraud detection?", answer: "Yes, structured claims data pipelines we build can help flag patterns that indicate fraudulent activity." },
    ],
  },

  "life-sciences": {
    slug: "life-sciences",
    name: "Life Sciences",
    kicker: "Industry Expertise / Life Sciences",
    headline: "Life Sciences Software Development",
    description:
      "Clinical trial, laboratory, and compliance software built for the accuracy and regulatory rigor life sciences organizations require.",
    stats: baseStats("life sciences"),
    keyTakeaway:
      "Starfii builds clinical trial management systems, laboratory information management systems, and regulatory compliance software for life sciences organizations.",
    highlight: {
      title: "How Life Sciences Teams Keep Data Accurate and Compliant",
      body: "Clinical trials, lab results, and regulatory submissions all depend on data that's accurate, traceable, and audit-ready. Starfii builds clinical trial management systems and laboratory information management software with compliance and data integrity built into the architecture from day one.",
    },
    focusAreas: [
      { title: "Clinical Trial Management Systems", description: "Software to plan, track, and report on clinical trials from enrollment through close-out." },
      { title: "Laboratory Information Management Systems (LIMS)", description: "Sample tracking, testing workflows, and results management for labs." },
      { title: "Regulatory Compliance & Quality Management", description: "Documentation and audit tooling built around life sciences regulatory requirements." },
      { title: "Pharmacovigilance & Adverse Event Tracking", description: "Systems for capturing, reviewing, and reporting adverse events." },
    ],
    impactPoints: [
      { label: "Trial Data You Can Trust", body: "Structured clinical trial systems keep enrollment, visit, and outcome data traceable and audit-ready." },
      { label: "Faster Lab Turnaround", body: "LIMS software reduces manual handoffs between sample intake, testing, and results reporting." },
      { label: "Audit-Ready Compliance", body: "Documentation and quality management tools built for regulatory review from the start." },
      { label: "Faster Adverse Event Reporting", body: "Structured pharmacovigilance workflows reduce the time between an event and a filed report." },
      { label: "Better Cross-Team Visibility", body: "Shared systems give clinical, lab, and regulatory teams the same current data." },
    ],
    capabilities: [
      { title: "Clinical Trial Management Software", description: "End-to-end trial tracking from enrollment through close-out." },
      { title: "LIMS Development", description: "Sample tracking, testing workflows, and results management for laboratories." },
      { title: "Regulatory Compliance Tools", description: "Documentation and audit tooling built for regulatory review." },
      { title: "Quality Management Systems", description: "Structured processes for maintaining and demonstrating quality standards." },
      { title: "Pharmacovigilance Systems", description: "Adverse event capture, review, and reporting workflows." },
      { title: "Data Integrity & Traceability", description: "Architecture designed for traceable, audit-ready data across every system." },
    ],
    solutions: [
      { title: "Clinical Trial Management Platform", description: "A trial tracking system covering enrollment, visits, and outcome reporting." },
      { title: "LIMS Build", description: "A laboratory information management system for sample and results tracking." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Azure"],
    insights: [
      { tag: "Guide", title: "What Makes Clinical Trial Data Audit-Ready", blurb: "The structural choices that keep trial data traceable through inspection and review." },
      { tag: "Article", title: "Reducing Lab Turnaround Time with a Connected LIMS", blurb: "How removing manual handoffs between sample intake and reporting speeds up lab operations." },
      { tag: "Case Study", title: "Building a Faster Adverse Event Reporting Workflow", blurb: "How a structured pharmacovigilance system cut the time between event and filed report." },
    ],
    faqs: [
      { question: "Can Starfii build a clinical trial management system?", answer: "Yes, we build software to plan, track, and report on clinical trials from enrollment through close-out." },
      { question: "Do you build laboratory information management systems?", answer: "Yes, we build LIMS software for sample tracking, testing workflows, and results management." },
      { question: "Can you build regulatory compliance and quality management tools?", answer: "Yes, we build documentation and audit tooling designed around life sciences regulatory requirements." },
      { question: "Do you build pharmacovigilance software?", answer: "Yes, we build systems for capturing, reviewing, and reporting adverse events." },
      { question: "Is data traceability built into your life sciences systems?", answer: "Yes, we design for traceable, audit-ready data across clinical, lab, and regulatory systems." },
    ],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    kicker: "Industry Expertise / Manufacturing",
    headline: "Manufacturing Software Development",
    description:
      "Production, maintenance, and supply chain software that gives manufacturers real-time visibility across the plant floor.",
    stats: baseStats("manufacturing"),
    keyTakeaway:
      "Starfii builds manufacturing execution systems, predictive maintenance tools, quality management software, and supply chain systems that connect the plant floor to the business.",
    highlight: {
      title: "How Manufacturers Get Real-Time Plant Floor Visibility",
      body: "Manufacturing decisions are only as good as the data behind them — production status, machine health, quality results, and supplier delivery. Starfii builds manufacturing execution systems and IoT-connected maintenance tools that bring plant floor data into the same system used for planning and quality decisions.",
    },
    focusAreas: [
      { title: "Manufacturing Execution Systems (MES)", description: "Real-time production tracking connecting planning, the plant floor, and reporting." },
      { title: "Predictive Maintenance & IoT", description: "Sensor-driven monitoring that flags equipment issues before they cause downtime." },
      { title: "Quality Management Systems", description: "Structured inspection, defect tracking, and corrective action workflows." },
      { title: "Supply Chain & Procurement Software", description: "Supplier, inventory, and procurement tracking connected to production schedules." },
    ],
    impactPoints: [
      { label: "Real-Time Production Visibility", body: "MES software gives planners and operators a live view of production status instead of end-of-shift reports." },
      { label: "Reduced Unplanned Downtime", body: "Predictive maintenance flags equipment issues before they cause a line stoppage." },
      { label: "Fewer Quality Escapes", body: "Structured inspection and defect tracking catch issues earlier in the production process." },
      { label: "Tighter Supply Chain Coordination", body: "Procurement and inventory data connected to production schedules reduces material shortages." },
      { label: "Better Root-Cause Analysis", body: "Connected production and quality data makes it easier to trace a defect back to its source." },
    ],
    capabilities: [
      { title: "MES Development", description: "Real-time production tracking connecting planning, the plant floor, and reporting." },
      { title: "Predictive Maintenance Software", description: "IoT-driven monitoring and alerting for equipment health." },
      { title: "Quality Management Systems", description: "Inspection, defect tracking, and corrective action workflows." },
      { title: "Supply Chain & Procurement Tools", description: "Supplier and inventory tracking connected to production schedules." },
      { title: "IoT & Sensor Integration", description: "Connecting plant floor sensors and equipment into a central monitoring system." },
      { title: "Production Analytics & Reporting", description: "Dashboards connecting production, quality, and supply chain data." },
    ],
    solutions: [
      { title: "MES Platform Build", description: "A manufacturing execution system connecting planning, production, and reporting." },
      { title: "Predictive Maintenance Suite", description: "Sensor-driven monitoring and alerting to reduce unplanned equipment downtime." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres", "IoT Core"],
    insights: [
      { tag: "Guide", title: "What an MES Needs to Actually Replace Manual Production Logs", blurb: "The core modules that give planners a real-time view instead of end-of-shift reporting." },
      { tag: "Article", title: "Reducing Unplanned Downtime with Predictive Maintenance", blurb: "How sensor-driven monitoring catches equipment issues before they stop a line." },
      { tag: "Case Study", title: "Connecting Quality Data Back to Its Root Cause", blurb: "How linking production and quality systems shortened root-cause investigations." },
    ],
    faqs: [
      { question: "Can Starfii build a manufacturing execution system for our plant?", answer: "Yes, we build MES software connecting planning, the plant floor, and reporting in real time." },
      { question: "Do you build predictive maintenance software?", answer: "Yes, we build IoT-driven monitoring and alerting tools that flag equipment issues before they cause downtime." },
      { question: "Can you build quality management systems?", answer: "Yes, we build inspection, defect tracking, and corrective action workflows." },
      { question: "Do you build supply chain and procurement software?", answer: "Yes, we build supplier and inventory tracking software connected to your production schedules." },
      { question: "Can you integrate plant floor sensors into a central system?", answer: "Yes, we build IoT and sensor integrations that feed plant floor data into a central monitoring system." },
    ],
  },

  "private-equity": {
    slug: "private-equity",
    name: "Private Equity",
    kicker: "Industry Expertise / Private Equity",
    headline: "Private Equity Software Development",
    description:
      "Portfolio monitoring, deal flow, and LP reporting software that gives private equity firms clear visibility across the investment lifecycle.",
    stats: baseStats("private equity"),
    keyTakeaway:
      "Starfii builds portfolio monitoring platforms, deal flow tools, LP reporting portals, and due diligence systems for private equity firms.",
    highlight: {
      title: "How Private Equity Firms Manage the Full Investment Lifecycle",
      body: "From sourcing a deal to reporting to LPs, private equity firms need visibility across data that's often scattered across spreadsheets and email. Starfii builds deal flow, portfolio monitoring, and LP reporting software that keeps that data connected and current across the entire investment lifecycle.",
    },
    focusAreas: [
      { title: "Portfolio Monitoring & Reporting", description: "Tracking portfolio company performance metrics against investment targets." },
      { title: "Deal Flow & Pipeline Management", description: "Tools to track sourcing, diligence, and deal progress across the pipeline." },
      { title: "LP Reporting Portals", description: "Secure portals giving limited partners self-service access to fund performance and reports." },
      { title: "Data Rooms & Due Diligence Tools", description: "Secure document sharing and tracking for diligence processes." },
    ],
    impactPoints: [
      { label: "Clearer Portfolio Visibility", body: "Consolidated performance tracking across portfolio companies replaces scattered spreadsheets." },
      { label: "Faster Deal Screening", body: "Structured pipeline tools make it easier to track and prioritize deals as they move through diligence." },
      { label: "Stronger LP Relationships", body: "Self-service LP portals give investors current fund performance without waiting on manual reports." },
      { label: "More Secure Diligence", body: "Purpose-built data rooms give firms control over who sees what, and when, during diligence." },
      { label: "Better Investment Decisions", body: "Consolidated deal and portfolio data supports more informed go/no-go decisions." },
    ],
    capabilities: [
      { title: "Portfolio Monitoring Platforms", description: "Consolidated tracking of portfolio company performance against targets." },
      { title: "Deal Flow & Pipeline Tools", description: "Sourcing, diligence, and deal progress tracking across the pipeline." },
      { title: "LP Reporting Portal Development", description: "Self-service portals for limited partners to access fund performance and reports." },
      { title: "Data Room & Due Diligence Software", description: "Secure document sharing and access tracking for diligence." },
      { title: "Fund Performance Analytics", description: "Reporting dashboards connecting portfolio and fund-level performance data." },
      { title: "Access Control & Security Engineering", description: "Permission structures built around the sensitivity of investment data." },
    ],
    solutions: [
      { title: "LP Reporting Portal", description: "A self-service portal giving limited partners access to fund performance and reports." },
      { title: "Deal Flow Management Platform", description: "A pipeline tool tracking sourcing, diligence, and deal progress in one place." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Cloudflare"],
    insights: [
      { tag: "Guide", title: "What LPs Actually Want from a Reporting Portal", blurb: "The self-service features that reduce reporting requests without sacrificing transparency." },
      { tag: "Article", title: "Structuring Deal Flow Data So Nothing Falls Through the Cracks", blurb: "How a connected pipeline tool keeps sourcing and diligence data from living in someone's inbox." },
      { tag: "Case Study", title: "Replacing Spreadsheet-Based Portfolio Monitoring", blurb: "How a firm consolidated portfolio company reporting into a single platform." },
    ],
    faqs: [
      { question: "Can Starfii build a portfolio monitoring platform for our firm?", answer: "Yes, we build consolidated tracking software for portfolio company performance against investment targets." },
      { question: "Do you build LP reporting portals?", answer: "Yes, we build self-service portals giving limited partners access to fund performance and reports." },
      { question: "Can you build deal flow or pipeline management tools?", answer: "Yes, we build tools to track sourcing, diligence, and deal progress across your pipeline." },
      { question: "Do you build secure data rooms for due diligence?", answer: "Yes, we build secure document sharing and access tracking tools for diligence processes." },
      { question: "How do you handle security for sensitive investment data?", answer: "We build permission structures and access controls designed around the sensitivity of investment and LP data." },
    ],
  },

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    kicker: "Industry Expertise / Professional Services",
    headline: "Professional Services Software Development",
    description:
      "Project, resource, and billing software that helps professional services firms run engagements profitably and keep clients informed.",
    stats: baseStats("professional services"),
    keyTakeaway:
      "Starfii builds project and resource management, time tracking and billing, client collaboration, and knowledge management software for professional services firms.",
    highlight: {
      title: "How Professional Services Firms Keep Engagements Profitable",
      body: "Profitability in professional services comes down to knowing, in real time, how a project's hours and budget compare to plan. Starfii builds project and resource management software connected directly to time tracking and billing, so firms see engagement health as it happens, not at month end.",
    },
    focusAreas: [
      { title: "Project & Resource Management", description: "Planning and staffing tools that match the right people to the right engagements." },
      { title: "Time Tracking & Billing Software", description: "Time capture connected directly to invoicing and engagement budgets." },
      { title: "Client Collaboration Portals", description: "Shared spaces for clients to track deliverables, share files, and communicate." },
      { title: "Knowledge Management Systems", description: "Centralized repositories for firm knowledge, templates, and past engagement work." },
    ],
    impactPoints: [
      { label: "Real-Time Engagement Visibility", body: "Project and resource tools show budget and staffing status as an engagement progresses, not after it closes." },
      { label: "Faster, More Accurate Billing", body: "Time tracking connected directly to billing reduces the lag and errors in invoicing." },
      { label: "Better Resource Utilization", body: "Staffing tools match availability and skills to engagements more efficiently." },
      { label: "Stronger Client Communication", body: "Collaboration portals give clients a clear view of progress without a status-update email chain." },
      { label: "Reusable Firm Knowledge", body: "Centralized knowledge management reduces the time spent recreating past work." },
    ],
    capabilities: [
      { title: "Project & Resource Management Software", description: "Planning and staffing tools matching people to engagements." },
      { title: "Time Tracking & Billing Systems", description: "Time capture connected directly to invoicing and budgets." },
      { title: "Client Collaboration Portal Development", description: "Shared spaces for deliverables, files, and communication with clients." },
      { title: "Knowledge Management Platforms", description: "Centralized repositories for firm knowledge and past engagement work." },
      { title: "Engagement Analytics & Reporting", description: "Dashboards tracking engagement profitability and resource utilization." },
      { title: "Proposal & Contract Tools", description: "Software supporting proposal generation and contract management." },
    ],
    solutions: [
      { title: "Time & Billing Platform", description: "Time tracking connected directly to invoicing and engagement budgets." },
      { title: "Client Collaboration Portal", description: "A shared space for clients to track deliverables and communicate with the team." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Stripe"],
    insights: [
      { tag: "Guide", title: "What Keeps Engagement Billing Accurate and On Time", blurb: "How connecting time tracking directly to invoicing removes the usual month-end scramble." },
      { tag: "Article", title: "Matching Resources to Engagements Without Overbooking Your Team", blurb: "Staffing tool design choices that balance utilization against burnout." },
      { tag: "Case Study", title: "Reducing Status-Update Overhead with a Client Portal", blurb: "How a shared collaboration space cut down on manual status reporting." },
    ],
    faqs: [
      { question: "Can Starfii build project and resource management software?", answer: "Yes, we build planning and staffing tools that match people to engagements based on availability and skills." },
      { question: "Do you build time tracking and billing systems?", answer: "Yes, we build time capture connected directly to invoicing and engagement budgets." },
      { question: "Can you build a client collaboration portal?", answer: "Yes, we build shared spaces for clients to track deliverables, share files, and communicate with the team." },
      { question: "Do you build knowledge management systems?", answer: "Yes, we build centralized repositories for firm knowledge, templates, and past engagement work." },
      { question: "Can your systems show engagement profitability in real time?", answer: "Yes, we build reporting that tracks engagement budget and profitability as work happens, not just at close." },
    ],
  },

  "public-sector": {
    slug: "public-sector",
    name: "Public Sector",
    kicker: "Industry Expertise / Public Sector",
    headline: "Public Sector Software Development",
    description:
      "Citizen service, permitting, and case management software built for government agencies to serve residents more efficiently.",
    stats: baseStats("public sector"),
    keyTakeaway:
      "Starfii builds citizen service portals, permitting and licensing systems, case management software, and data interoperability tools for public sector agencies.",
    highlight: {
      title: "How Agencies Serve Residents More Efficiently",
      body: "Residents expect the same self-service ease from government they get everywhere else. Starfii builds citizen service portals, permitting systems, and case management software that let agencies handle requests faster while meeting the data security and interoperability requirements public sector work demands.",
    },
    focusAreas: [
      { title: "Citizen Service Portals", description: "Self-service portals for residents to submit requests, track status, and access services." },
      { title: "Permitting & Licensing Systems", description: "Application, review, and approval workflows for permits and licenses." },
      { title: "Case Management Software", description: "Structured case tracking for agencies handling resident requests and investigations." },
      { title: "Data Interoperability & Compliance", description: "Systems designed to securely share data across agencies while meeting compliance requirements." },
    ],
    impactPoints: [
      { label: "Faster Resident Service", body: "Self-service portals let residents submit and track requests without a phone call or office visit." },
      { label: "Shorter Permit Approval Times", body: "Structured permitting workflows reduce the back-and-forth between applicants and reviewers." },
      { label: "Consistent Case Handling", body: "Case management tools keep resident requests and investigations on a consistent, trackable process." },
      { label: "Secure Cross-Agency Data Sharing", body: "Interoperability built into the architecture lets agencies share data securely instead of duplicating records." },
      { label: "Reduced Administrative Burden", body: "Automated status updates and routing reduce the manual coordination behind everyday casework." },
    ],
    capabilities: [
      { title: "Citizen Service Portal Development", description: "Self-service portals for residents to submit and track requests." },
      { title: "Permitting & Licensing Software", description: "Application, review, and approval workflows for permits and licenses." },
      { title: "Case Management Systems", description: "Structured tracking for resident requests and agency investigations." },
      { title: "Data Interoperability Tools", description: "Secure data-sharing architecture across agencies and systems." },
      { title: "Compliance & Security Engineering", description: "Architecture built around public sector data security and compliance requirements." },
      { title: "Reporting & Transparency Dashboards", description: "Public-facing and internal dashboards on service and case metrics." },
    ],
    solutions: [
      { title: "Citizen Service Portal", description: "A self-service portal for residents to submit requests and track status." },
      { title: "Permitting & Licensing Platform", description: "An application, review, and approval system for permits and licenses." },
    ],
    techStack: ["React", "Node.js", "AWS", "Postgres", "MongoDB", "Auth0"],
    insights: [
      { tag: "Guide", title: "What Makes a Citizen Service Portal Actually Get Used", blurb: "The self-service features that move requests out of the phone queue and into the portal." },
      { tag: "Article", title: "Shortening Permit Approval Times with Structured Workflows", blurb: "How reducing manual back-and-forth speeds up the permitting process." },
      { tag: "Case Study", title: "Sharing Data Securely Across Agencies Without Duplicating Records", blurb: "How an interoperability layer let two agencies share resident data securely." },
    ],
    faqs: [
      { question: "Can Starfii build a citizen service portal for our agency?", answer: "Yes, we build self-service portals for residents to submit requests, track status, and access services." },
      { question: "Do you build permitting and licensing systems?", answer: "Yes, we build application, review, and approval workflows for permits and licenses." },
      { question: "Can you build case management software?", answer: "Yes, we build structured case tracking for resident requests and agency investigations." },
      { question: "Do your systems support secure data sharing across agencies?", answer: "Yes, we build data interoperability tools designed to securely share data across agencies while meeting compliance requirements." },
      { question: "Can you build public-facing transparency dashboards?", answer: "Yes, we build public-facing and internal dashboards reporting on service and case metrics." },
    ],
  },

  "technology-products-platforms": {
    slug: "technology-products-platforms",
    name: "Technology, Products & Platforms",
    kicker: "Industry Expertise / Technology, Products & Platforms",
    headline: "Technology, Products & Platforms Software Development",
    description:
      "Product engineering, platform architecture, and DevOps support for technology companies building and scaling SaaS products.",
    stats: baseStats("technology and SaaS"),
    keyTakeaway:
      "Starfii builds SaaS products, APIs and platforms, and the DevOps and analytics infrastructure behind them, acting as an extension of technology teams shipping product.",
    highlight: {
      title: "How Technology Companies Ship Product Faster",
      body: "Technology companies need engineering capacity that can plug directly into an existing product and engineering culture. Starfii builds SaaS product features, API and platform architecture, and the DevOps infrastructure behind them, working as an extension of your team rather than a separate outsourced unit.",
    },
    focusAreas: [
      { title: "SaaS Product Engineering", description: "Feature development and product engineering for SaaS applications." },
      { title: "API & Platform Development", description: "Designing and building the APIs and platform layer other products build on." },
      { title: "DevOps & Cloud Infrastructure", description: "CI/CD, infrastructure-as-code, and cloud architecture supporting reliable releases." },
      { title: "Product Analytics & Experimentation", description: "Instrumentation and experimentation tooling to measure feature impact." },
    ],
    impactPoints: [
      { label: "Faster Feature Delivery", body: "Dedicated engineering capacity that plugs into your existing codebase and process ships features faster." },
      { label: "Scalable Platform Architecture", body: "API and platform design built to support growth without a rearchitecture." },
      { label: "Reliable, Frequent Releases", body: "CI/CD and infrastructure-as-code reduce the friction and risk in shipping regularly." },
      { label: "Data-Informed Product Decisions", body: "Analytics and experimentation tooling show which features actually move the metrics that matter." },
      { label: "Lower Infrastructure Overhead", body: "Cloud architecture designed for your actual usage pattern reduces unnecessary infrastructure cost." },
    ],
    capabilities: [
      { title: "SaaS Feature Development", description: "Product engineering embedded directly into an existing SaaS codebase." },
      { title: "API & Platform Architecture", description: "Designing and building the API layer that powers a product or partner ecosystem." },
      { title: "DevOps & CI/CD", description: "Build, test, and deployment pipelines supporting frequent, reliable releases." },
      { title: "Cloud Infrastructure Engineering", description: "Infrastructure-as-code and cloud architecture built for scale and cost efficiency." },
      { title: "Product Analytics Implementation", description: "Instrumentation that connects feature usage to product metrics." },
      { title: "Experimentation Frameworks", description: "A/B testing and feature flagging infrastructure for measuring feature impact." },
    ],
    solutions: [
      { title: "Embedded Product Team", description: "Dedicated engineering capacity working directly inside your existing product and codebase." },
      { title: "Platform & API Build", description: "A platform layer and public or partner-facing API built for scale." },
    ],
    techStack: ["React", "Node.js", "AWS", "Kubernetes", "Postgres", "Terraform"],
    insights: [
      { tag: "Guide", title: "What Makes an Embedded Engineering Team Actually Work", blurb: "The practices that let outside engineering capacity plug into an existing team without friction." },
      { tag: "Article", title: "Designing an API Platform Other Products Can Build On", blurb: "The architectural decisions that separate a stable platform layer from a fragile one." },
      { tag: "Case Study", title: "Cutting Release Risk with CI/CD and Infrastructure-as-Code", blurb: "How automated pipelines and reproducible infrastructure reduced deployment incidents." },
    ],
    faqs: [
      { question: "Can Starfii work as an extension of our existing engineering team?", answer: "Yes, we embed directly into your existing product and codebase rather than working as a separate, disconnected team." },
      { question: "Do you build APIs and platform infrastructure?", answer: "Yes, we design and build the API and platform layer that other products or partners build on." },
      { question: "Can you set up CI/CD and cloud infrastructure?", answer: "Yes, we build CI/CD pipelines and cloud infrastructure designed for reliable, frequent releases." },
      { question: "Do you implement product analytics and experimentation tooling?", answer: "Yes, we implement instrumentation and experimentation frameworks that connect feature usage to product metrics." },
      { question: "What technologies do you typically use for SaaS product work?", answer: "Common choices include React and Node.js for the application layer, Kubernetes and Terraform for infrastructure, and AWS for hosting — adapted to your existing stack." },
    ],
  },

  telecom: {
    slug: "telecom",
    name: "Telecom",
    kicker: "Industry Expertise / Telecom",
    headline: "Telecom Software Development",
    description:
      "OSS/BSS, billing, and customer self-service software that helps telecom operators manage networks and subscribers efficiently.",
    stats: baseStats("telecom"),
    keyTakeaway:
      "Starfii builds OSS/BSS systems, customer self-service portals, network monitoring dashboards, and subscription billing software for telecom operators.",
    highlight: {
      title: "How Telecom Operators Manage Networks and Subscribers Together",
      body: "Telecom operations connect two different worlds — network infrastructure and subscriber billing — that often run on disconnected systems. Starfii builds OSS/BSS software that ties network operations, subscriber management, and billing into one system, with self-service portals giving subscribers direct control over their accounts.",
    },
    focusAreas: [
      { title: "OSS/BSS Systems", description: "Operations and business support systems connecting network management with subscriber billing." },
      { title: "Customer Self-Service Portals", description: "Portals letting subscribers manage plans, billing, and support requests directly." },
      { title: "Network Monitoring Dashboards", description: "Real-time visibility into network health, capacity, and incidents." },
      { title: "Subscription & Billing Management", description: "Plan management, usage-based billing, and invoicing for subscriber accounts." },
    ],
    impactPoints: [
      { label: "Connected Network & Billing Data", body: "OSS/BSS integration means billing and network teams work from the same subscriber and usage data." },
      { label: "Reduced Support Volume", body: "Self-service portals let subscribers resolve plan and billing questions without calling support." },
      { label: "Faster Network Issue Response", body: "Real-time monitoring dashboards surface network incidents before they escalate into widespread outages." },
      { label: "Accurate Usage-Based Billing", body: "Billing pulled directly from network usage data reduces disputes and manual reconciliation." },
      { label: "Easier Plan Changes", body: "Subscription management tools let subscribers upgrade, downgrade, or change plans without a support ticket." },
    ],
    capabilities: [
      { title: "OSS/BSS Development", description: "Systems connecting network operations with subscriber billing and support." },
      { title: "Customer Self-Service Portal Development", description: "Portals for subscribers to manage plans, billing, and support requests." },
      { title: "Network Monitoring Software", description: "Real-time dashboards for network health, capacity, and incident tracking." },
      { title: "Subscription & Billing Systems", description: "Usage-based billing and invoicing tied directly to network data." },
      { title: "Provisioning & Activation Systems", description: "Automated workflows for activating and provisioning subscriber services." },
      { title: "Analytics & Reporting", description: "Dashboards connecting network performance with subscriber and revenue data." },
    ],
    solutions: [
      { title: "OSS/BSS Platform", description: "A connected system tying network operations to subscriber billing and support." },
      { title: "Customer Self-Service Portal", description: "A portal letting subscribers manage plans, billing, and support requests directly." },
    ],
    techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres", "Kafka"],
    insights: [
      { tag: "Guide", title: "Why Network and Billing Data Need to Live in One System", blurb: "The operational cost of running OSS and BSS as disconnected systems, and what integration fixes." },
      { tag: "Article", title: "What Reduces Support Call Volume for Telecom Operators", blurb: "The self-service features that actually keep subscribers from calling in." },
      { tag: "Case Study", title: "Cutting Billing Disputes with Usage-Based Billing Tied to Network Data", blurb: "How connecting billing directly to network usage data reduced reconciliation work." },
    ],
    faqs: [
      { question: "Can Starfii build OSS/BSS systems for our network?", answer: "Yes, we build operations and business support systems connecting network management with subscriber billing." },
      { question: "Do you build customer self-service portals?", answer: "Yes, we build portals letting subscribers manage plans, billing, and support requests directly." },
      { question: "Can you build network monitoring dashboards?", answer: "Yes, we build real-time dashboards for network health, capacity, and incident tracking." },
      { question: "Do you build subscription and usage-based billing systems?", answer: "Yes, we build billing and invoicing systems tied directly to network usage data." },
      { question: "Can you automate subscriber provisioning and activation?", answer: "Yes, we build automated workflows for activating and provisioning subscriber services." },
    ],
  },
};