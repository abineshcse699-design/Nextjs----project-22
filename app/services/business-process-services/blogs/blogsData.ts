export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };
  intro: string[];
  sections: BlogSection[];
};

const defaultAuthor = {
  name: "Starfii Technology",
  role: "Business Process Services Team",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  bio: "Starfii helps enterprises redesign, automate, and operate critical business processes with measurable SLAs, compliance controls, and continuous improvement.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "automating-broken-business-processes",
    title:
      "Why Automating a Broken Process Just Moves the Breakage Somewhere Else",
    category: "Process Automation",
    lastUpdated: "September 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Automation works best after the underlying business process is redesigned. Learn how to remove handoffs, duplicate approvals, and exception chaos before applying RPA.",
    author: defaultAuthor,
    intro: [
      "Business process automation creates the most value when the process underneath it is already clear, measurable, and repeatable. Automating a broken workflow can simply make the same inefficiency run faster.",
      "Starfii starts with the current state, identifies unnecessary work and failure points, and then defines a target process before deciding where robotic process automation or workflow automation belongs.",
    ],
    sections: [
      {
        heading: "Start with the process, not the automation tool",
        paragraphs: [
          "The first step is to map how work actually moves from request to completion. Real transaction data helps reveal where approvals, rework, queues, and manual data entry consume time.",
          "This gives operations leaders a fact based view of cost to serve and makes it easier to separate essential controls from legacy steps that no longer add value.",
        ],
      },
      {
        heading: "Remove unnecessary handoffs and approvals",
        paragraphs: [
          "Every handoff creates an opportunity for delay, misunderstanding, or duplicate work. Process redesign should establish clear ownership and a practical RACI before automation is introduced.",
          "Standardizing common exceptions also reduces the number of decisions that require manual intervention.",
        ],
      },
      {
        heading: "Automate only the repeatable work",
        paragraphs: [
          "RPA is strongest where transaction volume is high, rules are stable, and inputs and outputs are well understood. Those characteristics make the return on automation easier to measure.",
          "Document AI and workflow rules can then be added around the automated step without forcing the entire process into a rigid pattern.",
        ],
      },
      {
        heading: "Measure the result against business outcomes",
        paragraphs: [
          "A successful automation program should track cycle time, accuracy, exception rates, throughput, and cost per transaction rather than bot counts alone.",
          "These measures provide the baseline for continuous improvement and show whether the redesigned process is producing the intended operational result.",
        ],
      },
    ],
  },
  {
    slug: "rpa-where-automation-pays-back",
    title: "RPA in Practice: Where Automation Actually Pays Back",
    category: "RPA & Intelligent Automation",
    lastUpdated: "September 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Not every task should be automated. Learn how to identify the transaction patterns where RPA can deliver measurable operational payback.",
    author: defaultAuthor,
    intro: [
      "Robotic process automation can remove repetitive manual work, but the business case depends on choosing the right processes. High volume alone is not enough.",
      "Starfii evaluates transaction volume, rule clarity, exception frequency, process stability, and integration effort before recommending automation.",
    ],
    sections: [
      {
        heading: "Look for high volume, rules based work",
        paragraphs: [
          "Repetitive activities with predictable inputs and decisions are strong RPA candidates. Examples include data entry, system to system transfers, matching, routing, and standard status updates.",
          "The more consistent the task, the easier it is to build and maintain automation with predictable outcomes.",
        ],
      },
      {
        heading: "Calculate the full cost of manual work",
        paragraphs: [
          "A useful automation business case includes labor time, error correction, queue delays, rework, and the cost of exceptions. This produces a better view of the true cost of the current state.",
          "Automation should be prioritized where that cost is material enough to justify implementation and ongoing support.",
        ],
      },
      {
        heading: "Design controls into the workflow",
        paragraphs: [
          "Production automation needs clear exception handling, audit trails, ownership, and rollback procedures. A bot without operational controls simply creates a different kind of risk.",
          "Human review should remain available for ambiguous or high impact transactions.",
        ],
      },
      {
        heading: "Track payback after launch",
        paragraphs: [
          "Post launch measurement should compare the original baseline with actual throughput, cycle time, accuracy, and cost per transaction.",
          "The results can then guide the next wave of automation rather than creating an automation backlog without measurable priorities.",
        ],
      },
    ],
  },
  {
    slug: "revenue-cycle-management-cutting-denials",
    title: "Revenue Cycle Management: Cutting Denials Before They Happen",
    category: "Healthcare RCM",
    lastUpdated: "September 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "A stronger revenue cycle reduces preventable denials upstream. Explore how eligibility, claims accuracy, and denial management work together.",
    author: defaultAuthor,
    intro: [
      "Revenue cycle management is not only a collections problem. Many avoidable denials originate earlier in the patient and claims workflow.",
      "Starfii approaches RCM as an end to end operating process, using controls and standardized workflows to improve claim quality before submission and accelerate resolution when exceptions occur.",
    ],
    sections: [
      {
        heading: "Find the sources of preventable denials",
        paragraphs: [
          "Denial analysis should distinguish eligibility, authorization, documentation, coding, and submission issues so the root cause can be addressed instead of repeatedly fixing the symptom.",
          "A categorized denial view also helps prioritize process changes with the greatest financial impact.",
        ],
      },
      {
        heading: "Strengthen upstream eligibility checks",
        paragraphs: [
          "Eligibility and coverage verification can prevent avoidable downstream work when performed consistently and documented correctly.",
          "Standard operating procedures and exception queues make it easier for teams to resolve issues before claims are submitted.",
        ],
      },
      {
        heading: "Standardize claims and exception workflows",
        paragraphs: [
          "Clear ownership for claim preparation, submission, follow up, and denial resolution reduces delays between teams.",
          "Operational dashboards can expose aging work, high frequency denial categories, and turnaround time.",
        ],
      },
      {
        heading: "Build continuous improvement into RCM",
        paragraphs: [
          "RCM performance improves when denial trends feed directly into process redesign, training, and controls.",
          "The objective is not simply to work denials faster but to reduce the number of preventable denials entering the queue.",
        ],
      },
    ],
  },
  {
    slug: "process-reengineering-before-automation",
    title: "Process Re-engineering: Fix the Workflow Before Automation",
    category: "Business Process Re-engineering",
    lastUpdated: "September 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Process re-engineering creates the foundation for sustainable automation. Learn how target state design can simplify work before technology is applied.",
    author: defaultAuthor,
    intro: [
      "Process re-engineering is about changing how work is performed, not simply documenting the existing workflow.",
      "Starfii uses transaction data, process maps, ownership models, and SLA targets to design a simpler target state that can then be automated or operated as a managed service.",
    ],
    sections: [
      {
        heading: "Document the current state",
        paragraphs: [
          "Current state mapping should capture systems, people, approvals, queues, exceptions, and dependencies. This creates a shared view of how work really gets completed.",
          "It also exposes duplicate activities that may be invisible when teams only look at their individual step.",
        ],
      },
      {
        heading: "Design the target state around outcomes",
        paragraphs: [
          "The target process should define who owns each step, what information is required, and which controls are essential.",
          "Cycle time, accuracy, throughput, and cost per transaction can then become explicit design criteria.",
        ],
      },
      {
        heading: "Separate standard work from exceptions",
        paragraphs: [
          "A strong process handles common transactions through a predictable path while routing genuine exceptions to the right specialists.",
          "This separation makes later automation easier because repeatable work has clearer rules and inputs.",
        ],
      },
      {
        heading: "Prepare for automation and managed operations",
        paragraphs: [
          "Once the target state is stable, teams can determine which steps should be automated, which require human judgment, and which can be delivered through a managed operations model.",
          "This sequence avoids locking legacy inefficiencies into a new technology stack.",
        ],
      },
    ],
  },
  {
    slug: "managed-operations-sla-performance",
    title: "Managed Operations: Measuring Performance Against SLAs",
    category: "Managed Business Operations",
    lastUpdated: "September 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Managed operations need more than staffing. Learn how SLAs, operational dashboards, and continuous improvement keep service delivery measurable.",
    author: defaultAuthor,
    intro: [
      "Managed business operations work when service performance is visible and accountability is clear. An SLA gives the operating team and business stakeholders a shared definition of success.",
      "Starfii combines transition planning, standardized operating procedures, dashboards, and continuous improvement to keep day to day delivery aligned with agreed outcomes.",
    ],
    sections: [
      {
        heading: "Define the SLA around business outcomes",
        paragraphs: [
          "Useful SLAs measure outcomes such as turnaround time, accuracy, backlog age, first contact resolution, or cost per transaction.",
          "The right measures depend on the process, but they should be specific enough to identify when service quality is moving off target.",
        ],
      },
      {
        heading: "Build operational visibility",
        paragraphs: [
          "Dashboards should show throughput, exceptions, aging work, and service performance in a way that operations leaders can act on quickly.",
          "Consistent reporting also makes transition and stabilization periods easier to manage.",
        ],
      },
      {
        heading: "Use governance to manage exceptions",
        paragraphs: [
          "Escalation paths, ownership, audit trails, and regular service reviews help prevent individual exceptions from becoming recurring process failures.",
          "Governance should support the operation rather than create unnecessary administrative overhead.",
        ],
      },
      {
        heading: "Maintain a continuous improvement backlog",
        paragraphs: [
          "Stable operations create the baseline for improvement. Teams can use recurring issues, SLA misses, and process data to prioritize targeted changes.",
          "This creates a managed service that improves over time rather than simply transferring the same process to another team.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, count);
}
