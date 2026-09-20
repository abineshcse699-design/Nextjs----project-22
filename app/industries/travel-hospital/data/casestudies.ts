// Save as: app/industries/travel-hospital/data/casestudies.ts
//
// NOTE: client descriptions, figures and outcomes are DRAFT placeholder
// content. Replace with real, approved client data before going live.

export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  cardDescription: string;

  client: string;
  industry: string;
  services: string[];

  image: string;
  heroImage: string;

  overview: string;
  clientOverview: string;

  challengeIntro: string;
  challengePoints: string[];

  solutionIntro: string;
  solutionDetail: string;
  solution: string[];

  results: CaseStudyResult[];

  benefitsIntro: string;
  benefits: string[];

  summary: string;
  techStack: string[];

  // "YYYY-MM-DD". Latest date shows first everywhere.
  date: string;
};

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "connected-guest-experience-modernization",
    category: "Digital Experiences",

    title: "Starfii Modernizes a Connected Guest Experience",
    subtitle:
      "A hotel group offered guests separate apps, websites, and service channels, so the experience changed every time a guest moved from booking to arrival to stay.",
    cardDescription:
      "See how Starfii's digital experience team connected customer journeys and hospitality services around a scalable experience foundation.",

    client: "Multi-property hotel group, 60+ properties",
    industry: "Travel & Hospitality",
    services: ["Digital Experiences", "Customer Experience", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",

    overview: "A guest journey broken into disconnected pieces",
    clientOverview:
      "Booking, pre-arrival, in-stay service, and post-stay communication each lived in a different tool. Guests repeated their preferences at every step, properties delivered service differently, and new experiences took months to roll out across the group.",

    challengeIntro: "An inconsistent experience across channels and properties",
    challengePoints: [
      "Disconnected touchpoints: Web, mobile, and on-property services did not share guest information.",
      "Uneven service: Each property handled requests and communication in its own way.",
      "Slow rollout: New digital services took months to reach every property.",
    ],

    solutionIntro: "One connected guest experience platform, delivered in stages",
    solutionDetail:
      "Starfii built a shared experience foundation that connects every stage of the stay, then rolled it out property by property while existing services kept running.",
    solution: [
      "Unified guest journey: Pre-arrival, check-in, in-stay service, and post-stay engagement share one guest profile.",
      "Reusable experience components: A shared design system and services let new features launch across properties at once.",
      "Property-by-property rollout: Each property moved over in waves and was validated before the next.",
    ],

    results: [
      { metric: "+18 pts", label: "Guest satisfaction score" },
      { metric: "+35%", label: "Guests using digital services during their stay" },
      { metric: "Months → Weeks", label: "Time to launch a new guest service" },
      { metric: "60+", label: "Properties on the connected platform" },
    ],

    benefitsIntro: "What changed for guests and property teams",
    benefits: [
      "A consistent stay: Guests get the same connected experience at every property.",
      "Less repeating: Preferences and requests follow the guest from booking to check-out.",
      "Faster improvement: New services reach the whole group in weeks, not months.",
    ],

    summary:
      "The properties did not need more apps. They needed one connected journey. A shared experience foundation made every stage of the stay feel consistent, without disrupting service.",

    techStack: [
      "Design system",
      "API gateway",
      "Web and mobile front end",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-09-01",
  },

  {
    slug: "scalable-booking-platform-build",
    category: "Booking Platforms",

    title: "Starfii Builds a Scalable Booking Platform",
    subtitle:
      "Every holiday season, a travel brand's booking engine slowed down at the exact moment demand peaked, and adding a new partner or inventory type took months.",
    cardDescription:
      "Explore how Starfii's application engineering team modernized booking journeys around flexible digital services and connected data.",

    client: "Online travel brand, 5M+ annual bookings",
    industry: "Travel & Hospitality",
    services: ["Booking Platforms", "Application Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",

    overview: "A booking engine that struggled when demand peaked",
    clientOverview:
      "Search, availability, and payments ran on a tightly coupled system. Peak periods brought slow searches and abandoned bookings, and each new partner or inventory type needed custom work across the platform.",

    challengeIntro: "Peak-season load and rigid booking architecture",
    challengePoints: [
      "Peak-season slowdowns: Search and checkout slowed sharply during high-demand periods.",
      "Rigid architecture: Adding a new inventory type or partner needed changes across the platform.",
      "Lost bookings: Slow pages and failed payments caused travelers to abandon their bookings.",
    ],

    solutionIntro: "A flexible booking platform built for peak demand",
    solutionDetail:
      "Starfii rebuilt booking as independent services for search, availability, offers, and payments, with autoscaling and load testing, and migrated traffic gradually so reservations never stopped.",
    solution: [
      "Modular booking services: Search, availability, offers, and payments scale and evolve independently.",
      "Partner integration layer: New inventory types and partners connect through standard APIs.",
      "Peak readiness: Autoscaling and load testing rehearse the busiest periods ahead of time.",
    ],

    results: [
      { metric: "-50%", label: "Search response time at peak" },
      { metric: "+12%", label: "Search-to-booking conversion" },
      { metric: "Months → Weeks", label: "Time to add a new partner" },
      { metric: "0", label: "Downtime through peak season" },
    ],

    benefitsIntro: "What changed for travelers and the business",
    benefits: [
      "Faster bookings: Travelers search, compare, and pay without waiting.",
      "Easier growth: New partners and products connect without rebuilding the platform.",
      "Peak-ready: The busiest season becomes a routine one for the engineering team.",
    ],

    summary:
      "The platform did not need to be bigger. It needed to be more flexible. Modular services and rehearsed peak load turned the busiest weeks into the smoothest ones.",

    techStack: [
      "Microservices",
      "Autoscaling",
      "Payment integrations",
      "Load testing",
      "Observability",
    ],

    date: "2026-08-01",
  },

  {
    slug: "travel-data-analytics-modernization",
    category: "Data & Analytics",

    title: "Starfii Connects Travel Data and Analytics",
    subtitle:
      "Guest, booking, and property data lived in separate systems, so teams made pricing and staffing decisions on numbers that were already out of date.",
    cardDescription:
      "Learn how a data modernization approach brought fragmented guest, booking, and operational information together for stronger insight.",

    client: "Resort and hospitality operator, 25 properties",
    industry: "Travel & Hospitality",
    services: ["Data & Analytics", "Cloud Engineering", "Personalization"],

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",

    overview: "Plenty of data, but no shared view of the guest or the property",
    clientOverview:
      "Booking, guest, property, and service data sat in separate systems. Reports were assembled by hand, revenue and operations teams worked from different numbers, and there was no reliable way to understand guest behavior across stays.",

    challengeIntro: "Fragmented data slowing decisions",
    challengePoints: [
      "Siloed data: Booking, guest, and property information could not be viewed together.",
      "Manual reporting: Weekly reports took days to compile and were outdated on delivery.",
      "Limited personalization: Without a unified guest view, offers and content stayed generic.",
    ],

    solutionIntro: "A governed data platform with analytics teams can trust",
    solutionDetail:
      "Starfii brought guest, booking, property, and operational data into a governed cloud data platform, then built dashboards, demand forecasts, and a unified guest profile on top.",
    solution: [
      "Unified data platform: Guest, booking, and property data are combined with clear ownership and controls.",
      "Live dashboards: Occupancy, demand, and performance are visible in near real time.",
      "Unified guest profile: Preferences and behavior across stays support more relevant offers.",
    ],

    results: [
      { metric: "Days → Minutes", label: "Time to produce performance reports" },
      { metric: "+9%", label: "Revenue per available room" },
      { metric: "+22%", label: "Offer engagement from personalized campaigns" },
      { metric: "8", label: "Data sources unified in one platform" },
    ],

    benefitsIntro: "What changed for revenue, operations, and guests",
    benefits: [
      "One set of numbers: Every team works from the same trusted view.",
      "Faster decisions: Pricing and staffing respond to current demand, not last week's.",
      "More relevant offers: Guests see recommendations that reflect their preferences.",
    ],

    summary:
      "The data was never the problem. Access to it was. A governed platform turned scattered records into insight the whole organization could act on.",

    techStack: [
      "Data platform",
      "Data governance",
      "Dashboards and analytics",
      "Demand forecasting",
      "Cloud infrastructure",
    ],

    date: "2026-07-01",
  },

  {
    slug: "loyalty-and-guest-engagement-platform",
    category: "Personalization",

    title: "Starfii Builds a Loyalty and Guest Engagement Platform",
    subtitle:
      "A loyalty program rewarded stays but ignored everything else a traveler did, so members had little reason to return and no view of what they had earned.",
    cardDescription:
      "See how a connected loyalty and engagement program rewarded travelers across bookings, stays, and mobile touchpoints to deepen retention.",

    client: "Hotel and travel brand, 2M+ loyalty members",
    industry: "Travel & Hospitality",
    services: ["Personalization", "Mobile", "Data & Analytics"],

    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",

    overview: "A loyalty program that only saw part of the relationship",
    clientOverview:
      "Points were earned on room nights but not on bookings made elsewhere, dining, or app engagement. Members could not easily see their balance or benefits, and every member received the same offers regardless of preferences.",

    challengeIntro: "Loyalty that was hard to see and hard to use",
    challengePoints: [
      "Limited earning: Members earned rewards only on a narrow set of purchases.",
      "Low visibility: Balances and benefits were difficult to find and redeem.",
      "Generic offers: Every member received the same campaigns, regardless of preference.",
    ],

    solutionIntro: "A connected loyalty platform across bookings, stays, and mobile",
    solutionDetail:
      "Starfii unified loyalty across booking, on-property, and mobile touchpoints, built on a governed member profile, and used preferences and behavior to shape offers.",
    solution: [
      "Connected earning and redemption: Members earn and use rewards across bookings, stays, and services.",
      "Member mobile experience: Balance, benefits, offers, and trip details live in one app.",
      "Personalized offers: Campaigns adapt to each member's preferences and travel patterns.",
    ],

    results: [
      { metric: "+24%", label: "Repeat booking rate among members" },
      { metric: "+30%", label: "Active loyalty members" },
      { metric: "3x", label: "Offer redemption rate" },
      { metric: "2M+", label: "Members on the connected platform" },
    ],

    benefitsIntro: "What changed for members and the brand",
    benefits: [
      "Rewards that make sense: Members see what they earn and how to use it.",
      "Stronger retention: Relevant offers give travelers reasons to come back.",
      "A fuller picture: The brand understands members across the entire journey.",
    ],

    summary:
      "The program did not need bigger rewards. It needed to recognize members everywhere. Connecting loyalty across touchpoints made the relationship visible to both sides.",

    techStack: [
      "Member profile platform",
      "Personalization engine",
      "Mobile application",
      "Analytics",
      "Cloud infrastructure",
    ],

    date: "2026-06-01",
  },

  {
    slug: "mobile-check-in-experience-launch",
    category: "Mobile",

    title: "Starfii Launches a Mobile Check-In Experience",
    subtitle:
      "Guests queued at the front desk after long journeys, and staff spent much of the arrival window on paperwork instead of welcoming people.",
    cardDescription:
      "Discover how a secure mobile check-in and digital key experience cut arrival wait times and gave guests more control over their stay.",

    client: "Hotel chain, 120+ properties",
    industry: "Travel & Hospitality",
    services: ["Mobile", "Digital Experiences", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",

    overview: "Arrival was the least pleasant part of the stay",
    clientOverview:
      "Guests arrived to queues at the front desk while staff verified details and processed paperwork by hand. Peak arrival times created long waits, and guests had no way to prepare or make requests before reaching the property.",

    challengeIntro: "Long waits and manual work at arrival",
    challengePoints: [
      "Front desk queues: Peak arrival times led to long waits for guests.",
      "Manual paperwork: Staff spent arrival time verifying and re-entering guest details.",
      "No pre-arrival options: Guests could not check in or make requests ahead of time.",
    ],

    solutionIntro: "Secure mobile check-in with a digital key",
    solutionDetail:
      "Starfii built a secure mobile experience covering pre-arrival check-in, identity verification, and a digital room key, and launched it property by property with staff training and support.",
    solution: [
      "Pre-arrival check-in: Guests confirm details, sign, and pay from their phone before they arrive.",
      "Digital key: Guests go straight to their room, with secure access on their phone.",
      "Staff tools: Front desk teams see arrivals and requests in advance and focus on service.",
    ],

    results: [
      { metric: "-60%", label: "Average arrival wait time" },
      { metric: "55%", label: "Guests checking in by mobile" },
      { metric: "+15 pts", label: "Arrival experience satisfaction" },
      { metric: "120+", label: "Properties live with mobile check-in" },
    ],

    benefitsIntro: "What changed for guests and front desk teams",
    benefits: [
      "Straight to the room: Guests skip the queue after a long journey.",
      "Time for hospitality: Staff spend arrival hours welcoming guests, not processing forms.",
      "More control: Guests manage their stay and requests from their phone.",
    ],

    summary:
      "The best check-in is the one guests barely notice. Moving arrival to the phone gave time back to guests and staff, and set a warmer tone for the rest of the stay.",

    techStack: [
      "Mobile application",
      "Identity verification",
      "Digital key integration",
      "Property systems integration",
      "Observability",
    ],

    date: "2026-05-01",
  },
];

// Newest date first. This is what every page imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}