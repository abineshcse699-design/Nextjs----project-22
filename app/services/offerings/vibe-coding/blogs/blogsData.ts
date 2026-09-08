/* ============================================================
   BLOG TYPES
============================================================ */

export type BlogHighlight = {
  number: string;
  title: string;
  body: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  quote?: string;
};

export type BlogBenefit = {
  title: string;
  body: string;
};

export type BlogProcessStep = {
  number: string;
  title: string;
  body: string;
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

  highlights?: BlogHighlight[];

  sections: BlogSection[];

  benefits?: BlogBenefit[];

  process?: BlogProcessStep[];

  keyTakeaways?: string[];

  conclusion?: string;

  cta?: {
    title: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Sanjay Salunkhe",

  role: "President and Global Head of Digital and Software Services",

  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",

  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

const CTA = {
  title: "Ready to Turn Conversations Into Outcomes?",
  body:
    "See how Starfii can help your organization capture, structure, and act on the knowledge created in every meeting.",
  buttonText: "Talk to Starfii",
  buttonHref: "/contact",
};

/* ============================================================
   VIBE CODING BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  {
    slug: "from-ai-meeting-notes-to-meeting-intelligence",

    title:
      "From AI Meeting Notes to Meeting Intelligence: Turning Conversations Into Business Outcomes",

    category: "Blog",

    lastUpdated: "Sep 7, 2026",

    readTime: "8 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how organizations are moving beyond transcription toward AI systems that understand meetings, surface decisions, automate follow-up, and create searchable organizational knowledge.",

    author: AUTHOR,

    intro: [
      "Meetings generate a significant amount of business knowledge, decisions, commitments, and context. However, much of this information is traditionally lost after the conversation ends.",

      "AI meeting intelligence helps organizations move beyond simple transcription by identifying important decisions, action items, risks, and follow-up opportunities.",

      "Instead of manually reviewing long meeting recordings, teams can access structured summaries and searchable knowledge that turns every conversation into a lasting business asset.",
    ],

    highlights: [
      {
        number: "01",
        title: "Beyond Transcription",
        body:
          "AI understands what a conversation means, not just what was said, surfacing decisions and risks automatically.",
      },
      {
        number: "02",
        title: "Structured Knowledge",
        body:
          "Meetings become searchable, organized records that teams can revisit and reuse.",
      },
      {
        number: "03",
        title: "Connected Execution",
        body:
          "Insights flow directly into the workflows where follow-up and decisions actually happen.",
      },
    ],

    sections: [
      {
        heading: "1. Why Transcription Alone Falls Short",

        paragraphs: [
          "A transcript captures every word spoken, but it does not tell a team what mattered most in the conversation.",

          "Finding a decision or commitment buried in pages of text still requires significant manual effort.",

          "Meeting intelligence closes this gap by identifying the signal within the noise of a full conversation.",
        ],
      },

      {
        heading: "2. Turning Conversations Into Structured Records",

        paragraphs: [
          "AI can organize a meeting into themes, decisions, risks, and open questions rather than a single continuous stream of text.",

          "This structure makes it far easier for participants, and non-participants, to understand what happened and why it matters.",

          "Over time, these structured records become a searchable archive of organizational context.",
        ],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Structured meeting record on a shared workspace",
      },

      {
        heading: "3. Surfacing Decisions and Risks Automatically",

        paragraphs: [
          "Important decisions are often made quickly in the middle of a broader discussion and can be easy to miss.",

          "AI can flag decision points and potential risks as they are discussed, giving teams a clear record to refer back to.",

          "This reduces the chance that a critical commitment is only remembered by the people who happened to be paying close attention.",
        ],
        quote:
          "A decision that isn't captured is a decision that has to be made twice.",
      },

      {
        heading: "4. Making Meeting Knowledge Searchable",

        paragraphs: [
          "As organizations hold more meetings, finding relevant historical context becomes harder without a searchable system.",

          "AI-organized meeting knowledge allows teams to search by topic, decision, or project rather than scrolling through recordings.",

          "This turns meetings from disposable events into a durable knowledge base.",
        ],
      },

      {
        heading: "5. Connecting Insight to Action",

        paragraphs: [
          "The real value of meeting intelligence appears when it connects directly to the tools teams already use for execution.",

          "Action items, decisions, and follow-ups can move into project and communication systems without manual re-entry.",

          "This creates a more connected workflow between conversations and business execution.",
        ],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team connecting meeting insights to project workflows",
      },
    ],

    benefits: [
      {
        title: "Faster Understanding",
        body:
          "Structured summaries let teams grasp what mattered in a meeting far faster than reviewing a transcript.",
      },
      {
        title: "Durable Knowledge",
        body:
          "Meetings become part of a searchable organizational record instead of disappearing after the call ends.",
      },
      {
        title: "Fewer Missed Decisions",
        body:
          "Automatically flagged decisions and risks reduce the chance that something important is overlooked.",
      },
      {
        title: "Connected Follow-Up",
        body:
          "Insights move directly into the workflows teams use to execute, closing the loop between talk and action.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Capture",
        body:
          "The conversation is recorded and processed without disrupting the natural flow of discussion.",
      },
      {
        number: "02",
        title: "Understand",
        body:
          "AI identifies decisions, risks, themes, and commitments within the conversation.",
      },
      {
        number: "03",
        title: "Organize",
        body:
          "Structured summaries and searchable records are created for future reference.",
      },
      {
        number: "04",
        title: "Act",
        body:
          "Relevant insights are routed into the workflows where follow-up actually happens.",
      },
    ],

    keyTakeaways: [
      "Transcription alone does not tell a team what mattered in a meeting.",
      "Structured summaries make conversations far easier to understand and reuse.",
      "AI can surface decisions and risks that might otherwise go unnoticed.",
      "Searchable meeting knowledge turns conversations into a lasting organizational asset.",
      "The greatest value comes from connecting insight directly to execution.",
    ],

    conclusion:
      "Meeting intelligence gives organizations a way to preserve the value created in every conversation. By moving beyond transcription toward structured, searchable, and action-connected knowledge, teams can turn meetings into a genuine source of business outcomes rather than a one-time event.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */

  {
    slug: "how-ai-meeting-assistants-improve-productivity",

    title: "How AI Meeting Assistants Improve Productivity Without Replacing People",

    category: "Blog",

    lastUpdated: "Sep 7, 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "The strongest meeting workflows use AI to remove repetitive documentation while keeping people responsible for context, judgment, decisions, and relationships.",

    author: AUTHOR,

    intro: [
      "AI meeting assistants are designed to reduce repetitive administrative work rather than replace human judgment.",

      "Teams can spend less time taking notes and more time participating in important conversations.",

      "Human teams continue to provide strategic thinking, relationships, judgment, and decision making, while AI supports the workflow by capturing and organizing information.",
    ],

    highlights: [
      {
        number: "01",
        title: "Less Admin Work",
        body:
          "Automated capture removes the burden of manual note-taking from every participant.",
      },
      {
        number: "02",
        title: "More Engagement",
        body:
          "Freed from documentation, people can focus fully on the conversation and each other.",
      },
      {
        number: "03",
        title: "Human Judgment Stays Central",
        body:
          "AI organizes information, but people remain responsible for decisions and relationships.",
      },
    ],

    sections: [
      {
        heading: "1. The Real Cost of Manual Note-Taking",

        paragraphs: [
          "Taking detailed notes during a meeting divides attention between listening and writing.",

          "Important nuance, tone, and context can be lost when someone is focused on capturing every word.",

          "This trade-off has traditionally been accepted as a necessary cost of good documentation.",
        ],
      },

      {
        heading: "2. Removing Repetitive Work, Not Judgment",

        paragraphs: [
          "AI meeting assistants are built to take over the repetitive parts of documentation, not the parts that require human insight.",

          "Summaries, action items, and structured notes can be generated automatically, freeing participants to think and engage.",

          "This distinction matters: the goal is augmentation, not replacement.",
        ],
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team engaged in discussion without taking manual notes",
      },

      {
        heading: "3. Giving People Room to Engage",

        paragraphs: [
          "When documentation is handled automatically, participants can devote their full attention to the discussion.",

          "This often leads to better questions, deeper listening, and stronger relationships during the meeting itself.",

          "Productivity improves not because meetings are shorter, but because they are more focused.",
        ],
        quote:
          "The best use of AI in a meeting is freeing people to actually be present in it.",
      },

      {
        heading: "4. Keeping Strategic Thinking Human",

        paragraphs: [
          "Strategic decisions, trust-building, and complex judgment calls remain firmly in human hands.",

          "AI provides the structured information needed to make those decisions faster, but it does not make them.",

          "This balance keeps accountability and relationships where they belong.",
        ],
      },

      {
        heading: "5. Measuring Productivity the Right Way",

        paragraphs: [
          "Productivity gains from AI meeting assistants should be measured by outcomes, not just time saved on notes.",

          "Faster follow-up, clearer accountability, and better decision quality are the metrics that matter most.",

          "Organizations that focus on these outcomes get more lasting value from AI adoption.",
        ],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team reviewing productivity outcomes from meetings",
      },
    ],

    benefits: [
      {
        title: "Full Attention on the Conversation",
        body:
          "Participants no longer have to split focus between listening and writing things down.",
      },
      {
        title: "Consistent Documentation",
        body:
          "Every meeting is captured with the same level of structure, regardless of who attended.",
      },
      {
        title: "Preserved Human Judgment",
        body:
          "Strategic decisions and relationships remain firmly the responsibility of people, not automation.",
      },
      {
        title: "Better Outcome Metrics",
        body:
          "Productivity is measured through follow-through and decision quality, not just time saved.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Listen",
        body:
          "The assistant processes the conversation while participants focus on the discussion.",
      },
      {
        number: "02",
        title: "Document",
        body:
          "Structured notes and summaries are generated automatically after the meeting.",
      },
      {
        number: "03",
        title: "Decide",
        body:
          "People review the organized information and make the judgment calls that matter.",
      },
      {
        number: "04",
        title: "Follow Through",
        body:
          "Clear documentation supports faster, more accountable follow-up.",
      },
    ],

    keyTakeaways: [
      "Manual note-taking forces a trade-off between documentation and engagement.",
      "AI assistants remove repetitive work, not human judgment.",
      "Full attention during meetings leads to better questions and relationships.",
      "Strategic decisions and trust-building remain a human responsibility.",
      "Productivity should be measured by outcomes, not just time saved.",
    ],

    conclusion:
      "AI meeting assistants deliver the most value when they are treated as a tool for removing repetitive work, not replacing the judgment and relationships that make meetings valuable in the first place. Organizations that keep people at the center of decision making, while letting AI handle documentation, get the best of both.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */

  {
    slug: "building-secure-enterprise-meeting-knowledge",

    title: "Building a Secure Enterprise Meeting Knowledge Layer",

    category: "Blog",

    lastUpdated: "Sep 7, 2026",

    readTime: "8 min read",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Understand the architecture and governance considerations involved in turning meeting conversations into searchable, permission-aware organizational knowledge.",

    author: AUTHOR,

    intro: [
      "Enterprise meeting knowledge requires more than simply storing transcripts.",

      "Organizations need appropriate access controls, permissions, governance, and security to manage this information responsibly.",

      "A structured knowledge layer makes historical conversations easier to discover, while permission-aware search helps ensure information is available only to authorized users.",
    ],

    highlights: [
      {
        number: "01",
        title: "More Than Storage",
        body:
          "A true knowledge layer organizes and structures meeting content, not just archives it.",
      },
      {
        number: "02",
        title: "Permission Aware",
        body:
          "Access to sensitive meeting content is controlled and auditable at every level.",
      },
      {
        number: "03",
        title: "Governed by Design",
        body:
          "Security and compliance are built into the architecture from the start, not added later.",
      },
    ],

    sections: [
      {
        heading: "1. Why Storage Alone Is Not Enough",

        paragraphs: [
          "Simply archiving transcripts creates a large, unstructured pile of information that is hard to use.",

          "Without organization, teams struggle to find relevant conversations even when they know a discussion happened.",

          "A true knowledge layer adds structure, context, and retrievability on top of raw storage.",
        ],
      },

      {
        heading: "2. Designing for Access Control",

        paragraphs: [
          "Not every meeting should be visible to every employee. Sensitive discussions require clear access boundaries.",

          "Enterprise architectures need role-based permissions that determine who can view, search, or reference specific meeting content.",

          "This protects confidentiality while still allowing appropriate teams to benefit from shared knowledge.",
        ],
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise access control and permissions dashboard",
      },

      {
        heading: "3. Making Knowledge Discoverable",

        paragraphs: [
          "A well designed knowledge layer allows teams to search by topic, participant, project, or decision.",

          "This turns historical meetings into a genuine resource rather than an archive nobody revisits.",

          "Discoverability is what separates a useful knowledge base from a digital filing cabinet.",
        ],
        quote:
          "Knowledge that can't be found is no different from knowledge that was never captured.",
      },

      {
        heading: "4. Governance as an Ongoing Practice",

        paragraphs: [
          "Governance is not a one-time setup step. Policies need to evolve as the organization, regulations, and use cases change.",

          "Regular audits of access patterns and retention policies help keep the system aligned with compliance requirements.",

          "Ongoing governance builds trust in the system among both employees and leadership.",
        ],
      },

      {
        heading: "5. Balancing Openness and Security",

        paragraphs: [
          "The goal of a meeting knowledge layer is to make information more useful, not to lock it away entirely.",

          "The right balance gives teams broad access to non-sensitive knowledge while protecting genuinely confidential discussions.",

          "Getting this balance right is what makes enterprise meeting intelligence sustainable at scale.",
        ],
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise technology infrastructure supporting knowledge systems",
      },
    ],

    benefits: [
      {
        title: "Organized Knowledge",
        body:
          "Meetings are structured and indexed, not just stored, making them genuinely useful later.",
      },
      {
        title: "Controlled Access",
        body:
          "Role-based permissions ensure sensitive discussions stay visible only to authorized people.",
      },
      {
        title: "Reliable Discovery",
        body:
          "Search by topic, project, or decision makes historical meetings easy to find.",
      },
      {
        title: "Sustained Compliance",
        body:
          "Ongoing governance keeps the system aligned with evolving regulatory requirements.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Structure",
        body:
          "Meeting content is organized into searchable, indexed knowledge rather than raw storage.",
      },
      {
        number: "02",
        title: "Control",
        body:
          "Access permissions are defined and enforced based on roles and sensitivity.",
      },
      {
        number: "03",
        title: "Enable Discovery",
        body:
          "Search and retrieval tools make relevant knowledge easy to find when needed.",
      },
      {
        number: "04",
        title: "Govern",
        body:
          "Policies are reviewed and updated on an ongoing basis to maintain compliance and trust.",
      },
    ],

    keyTakeaways: [
      "Storing transcripts alone does not create a usable knowledge base.",
      "Role-based access control protects sensitive meeting content.",
      "Discoverability is what makes a knowledge layer genuinely valuable.",
      "Governance should be treated as an ongoing practice, not a one-time setup.",
      "A sustainable system balances openness with appropriate security.",
    ],

    conclusion:
      "A secure enterprise meeting knowledge layer turns scattered conversations into an organized, discoverable, and appropriately protected asset. By combining structure, access control, and ongoing governance, organizations can make meeting knowledge genuinely useful without compromising security or compliance.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */

  {
    slug: "ai-meeting-automation-from-conversation-to-action",

    title: "AI Meeting Automation: From Conversation to Action",

    category: "Blog",

    lastUpdated: "Sep 7, 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See how meeting summaries, decisions, action items, and follow-ups can connect directly with the workflows teams use every day.",

    author: AUTHOR,

    intro: [
      "The value of meeting intelligence increases when insights move into real business workflows.",

      "Action items can be converted into tasks and follow-up communications automatically.",

      "Decisions can be documented and connected to project workflows, reducing the gap between discussion and execution.",
    ],

    highlights: [
      {
        number: "01",
        title: "Insight to Task",
        body:
          "Action items identified in a meeting move directly into task and project tools.",
      },
      {
        number: "02",
        title: "Decisions Documented",
        body:
          "Key decisions are automatically linked to the relevant project or workflow record.",
      },
      {
        number: "03",
        title: "Smaller Execution Gap",
        body:
          "Automation shortens the distance between what was discussed and what actually gets done.",
      },
    ],

    sections: [
      {
        heading: "1. Why Insight Alone Is Not Enough",

        paragraphs: [
          "Identifying an action item during a meeting is only useful if it actually turns into a completed task.",

          "Without automation, action items are often re-typed manually into task systems, if they are captured at all.",

          "This manual step is where many good intentions from a meeting quietly disappear.",
        ],
      },

      {
        heading: "2. Automating the Path From Talk to Task",

        paragraphs: [
          "AI can convert identified action items directly into tasks within project management tools.",

          "This removes the manual re-entry step and ensures follow-up work is tracked from the moment it is discussed.",

          "Automation closes the gap between a spoken commitment and a tracked deliverable.",
        ],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Meeting action items automatically converted into tasks",
      },

      {
        heading: "3. Connecting Decisions to Project Records",

        paragraphs: [
          "Decisions made in a meeting often affect ongoing projects, but that connection is rarely documented in real time.",

          "AI can link a decision directly to the relevant project, giving future team members clear context on why a choice was made.",

          "This reduces confusion and repeated discussions later in a project's lifecycle.",
        ],
        quote:
          "A decision without a record is a decision someone will eventually have to make again.",
      },

      {
        heading: "4. Automating Follow-Up Communication",

        paragraphs: [
          "Meeting automation can also generate follow-up messages summarizing outcomes for stakeholders who were not present.",

          "This keeps distributed teams aligned without requiring someone to manually write and send updates.",

          "Consistent follow-up communication improves transparency across the organization.",
        ],
      },

      {
        heading: "5. Closing the Loop on Execution",

        paragraphs: [
          "The ultimate goal of meeting automation is to shorten the distance between conversation and outcome.",

          "When action items, decisions, and communications move automatically into existing workflows, execution accelerates.",

          "This transforms meetings from a source of discussion into a direct driver of business progress.",
        ],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team closing the loop between meetings and execution",
      },
    ],

    benefits: [
      {
        title: "No Manual Re-Entry",
        body:
          "Action items move directly into task systems without someone retyping them after the meeting.",
      },
      {
        title: "Clear Decision History",
        body:
          "Decisions are linked to the projects they affect, preserving context for the future.",
      },
      {
        title: "Consistent Communication",
        body:
          "Automated follow-up messages keep stakeholders aligned without extra manual effort.",
      },
      {
        title: "Faster Execution",
        body:
          "Shortening the gap between discussion and task tracking accelerates real progress.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Identify",
        body:
          "AI identifies action items, decisions, and follow-up needs during the conversation.",
      },
      {
        number: "02",
        title: "Convert",
        body:
          "Identified items are converted automatically into tasks and documented decisions.",
      },
      {
        number: "03",
        title: "Notify",
        body:
          "Relevant stakeholders receive automated summaries and updates.",
      },
      {
        number: "04",
        title: "Track",
        body:
          "Progress on action items is tracked within the tools teams already use.",
      },
    ],

    keyTakeaways: [
      "Insight from a meeting only matters if it turns into completed work.",
      "Automating task creation removes a common point of failure in follow-up.",
      "Linking decisions to projects preserves valuable context for later.",
      "Automated follow-up communication keeps distributed teams aligned.",
      "Closing the loop on execution turns meetings into a driver of progress.",
    ],

    conclusion:
      "AI meeting automation closes the gap between conversation and outcome by moving action items, decisions, and follow-up communication directly into the workflows teams already rely on. Organizations that automate this handoff turn meetings into a consistent source of forward progress rather than a series of good intentions.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */

  {
    slug: "meeting-analytics-business-insights",

    title: "Meeting Analytics: Turning Conversations Into Business Insights",

    category: "Blog",

    lastUpdated: "Sep 7, 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how structured meeting data can help teams identify recurring themes, commitments, risks, and opportunities across business conversations.",

    author: AUTHOR,

    intro: [
      "Meetings contain valuable patterns that are difficult to identify manually.",

      "AI analytics can surface recurring themes and important trends across many conversations at once.",

      "Organizations can identify risks, commitments, and opportunities across conversations, helping leadership teams make more informed decisions.",
    ],

    highlights: [
      {
        number: "01",
        title: "Pattern Recognition",
        body:
          "AI surfaces recurring themes across meetings that would be nearly impossible to spot manually.",
      },
      {
        number: "02",
        title: "Risk Visibility",
        body:
          "Analytics highlight emerging risks and concerns raised repeatedly across conversations.",
      },
      {
        number: "03",
        title: "Informed Leadership",
        body:
          "Structured insight gives leadership teams a clearer view of what is really happening across the organization.",
      },
    ],

    sections: [
      {
        heading: "1. The Patterns Hidden in Everyday Conversations",

        paragraphs: [
          "A single meeting offers a limited view, but patterns emerge when many conversations are analyzed together.",

          "Recurring topics, objections, or concerns often signal something worth leadership's attention.",

          "Manually identifying these patterns across dozens or hundreds of meetings is simply not practical.",
        ],
      },

      {
        heading: "2. Surfacing Recurring Themes",

        paragraphs: [
          "AI can analyze meeting content across teams and time periods to identify themes that repeat.",

          "This might reveal a recurring customer concern, a persistent internal blocker, or a growing area of interest.",

          "Recognizing these themes early gives organizations a head start on addressing them.",
        ],
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Analytics dashboard showing recurring meeting themes",
      },

      {
        heading: "3. Identifying Risks Before They Escalate",

        paragraphs: [
          "Risks are often mentioned informally in meetings well before they become formal issues.",

          "Meeting analytics can flag repeated risk language across conversations, giving teams an early warning signal.",

          "Addressing risks at this stage is typically far less costly than responding after they escalate.",
        ],
        quote:
          "The earliest signal of a problem is usually a conversation, not a report.",
      },

      {
        heading: "4. Spotting Opportunities Across Teams",

        paragraphs: [
          "Just as analytics can surface risks, they can also highlight opportunities mentioned across multiple conversations.",

          "A recurring customer request or an idea raised in several unrelated meetings may point to a genuine opportunity.",

          "This gives leadership a broader, more connected view than any single meeting could provide.",
        ],
      },

      {
        heading: "5. Supporting Better Leadership Decisions",

        paragraphs: [
          "Structured meeting analytics give leadership teams evidence-based insight rather than relying on individual impressions.",

          "This supports more confident decision making around priorities, resourcing, and strategy.",

          "Over time, this creates a feedback loop where conversations directly inform the direction of the business.",
        ],
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Leadership team reviewing meeting analytics insights",
      },
    ],

    benefits: [
      {
        title: "Cross-Meeting Visibility",
        body:
          "Patterns that span multiple conversations become visible instead of staying hidden in individual meetings.",
      },
      {
        title: "Earlier Risk Detection",
        body:
          "Recurring risk signals are surfaced before they escalate into larger issues.",
      },
      {
        title: "Opportunity Discovery",
        body:
          "Ideas and requests raised across teams are connected into clearer business opportunities.",
      },
      {
        title: "Evidence-Based Decisions",
        body:
          "Leadership teams gain structured insight to support more confident strategic decisions.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Aggregate",
        body:
          "Meeting content is collected and analyzed across teams and time periods.",
      },
      {
        number: "02",
        title: "Analyze",
        body:
          "AI identifies recurring themes, risks, and opportunities within the data.",
      },
      {
        number: "03",
        title: "Report",
        body:
          "Structured insights are presented to leadership in a clear, digestible format.",
      },
      {
        number: "04",
        title: "Act",
        body:
          "Leadership uses the insight to guide priorities, resourcing, and strategy.",
      },
    ],

    keyTakeaways: [
      "Patterns across meetings are often invisible when conversations are viewed one at a time.",
      "AI can surface recurring themes, risks, and opportunities at scale.",
      "Early risk detection through meeting analytics can prevent costly escalation.",
      "Opportunities raised across multiple teams point to genuine business potential.",
      "Structured meeting insight supports more confident leadership decisions.",
    ],

    conclusion:
      "Meeting analytics turn everyday conversations into a source of organizational intelligence. By surfacing recurring themes, risks, and opportunities across many meetings at once, leadership teams gain a clearer, evidence-based view of what is really happening across the business.",

    cta: CTA,
  },
];

/* ============================================================
   GET SINGLE BLOG
============================================================ */

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((blog) => blog.slug === slug);
}

/* ============================================================
   GET RELATED BLOGS
============================================================ */

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, count);
}