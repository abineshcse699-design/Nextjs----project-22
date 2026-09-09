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
  title: "Ready to Turn Your Meetings Into Action?",
  body:
    "See how Starfii's AI Meeting Assistant can capture conversations, surface decisions, and connect every follow-up to the systems your team already uses.",
  buttonText: "Talk to Starfii",
  buttonHref: "/contact",
};

/* ============================================================
   AI MEETING ASSISTANT BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-meeting-assistant-from-conversations-to-actionable-intelligence",

    title:
      "AI Meeting Assistants: Turning Conversations Into Actionable Intelligence",

    category: "AI Meeting Assistant",

    lastUpdated: "Sep 7, 2026",

    readTime: "15 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how AI meeting assistants can capture conversations, generate structured summaries, identify decisions, and turn meetings into actionable business intelligence.",

    author: AUTHOR,

    intro: [
      "Meetings are essential to modern business operations, but valuable decisions and insights are often lost in long conversations, fragmented notes, and inconsistent follow-up.",

      "Teams spend significant time documenting discussions, preparing summaries, and manually tracking action items after meetings have ended.",

      "AI meeting assistants can help transform conversations into structured intelligence by capturing important discussion points, summarizing outcomes, and highlighting actions that require follow-up.",
    ],

    highlights: [
      {
        number: "01",
        title: "Capture Everything",
        body:
          "AI can process live conversations and organize the important context automatically, without relying on manual note-taking.",
      },
      {
        number: "02",
        title: "Structure the Outcome",
        body:
          "Discussions become organized summaries, decisions, and action items that are easy to review and share.",
      },
      {
        number: "03",
        title: "Drive Execution",
        body:
          "Meeting intelligence connects directly to the workflows and tools where follow-up actually happens.",
      },
    ],

    sections: [
      {
        heading: "1. The Challenge of Manual Meeting Documentation",

        paragraphs: [
          "Traditional meetings often depend on participants taking notes while simultaneously contributing to the discussion.",

          "Important decisions, commitments, and context can be missed when documentation is inconsistent or incomplete.",

          "Manual follow-up also creates additional work after meetings, especially for teams managing a large number of customer, internal, or project discussions.",
        
          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",
],
      },

      {
        heading: "2. How AI Meeting Assistants Capture Context",

        paragraphs: [
          "AI meeting assistants can process meeting conversations and organize important information into structured outputs.",

          "Instead of reviewing long recordings or fragmented notes, participants can access summaries, discussion themes, decisions, and important context.",

          "This creates a more accessible record of the meeting while reducing the manual effort required to document every conversation.",
        
          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",
],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team reviewing a structured meeting summary",
      },

      {
        heading: "3. Turning Discussions Into Action Items",

        paragraphs: [
          "One of the most important outcomes of a business meeting is understanding what needs to happen next.",

          "AI can help identify commitments, responsibilities, deadlines, and follow-up activities mentioned during a conversation.",

          "Structured action items can make it easier for teams to move from discussion to execution without relying entirely on manual note-taking.",
        
          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",
],
      },

      {
        heading: "4. Making Meeting Knowledge Searchable",

        paragraphs: [
          "Business knowledge is often created during meetings but becomes difficult to access after the conversation ends.",

          "AI-assisted meeting intelligence can organize discussions so teams can find relevant decisions, topics, and context later.",

          "This can help reduce repeated discussions and improve continuity across projects and teams.",
        
          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",
],
        quote:
          "The value of a meeting should not disappear the moment the call ends.",
      },

      {
        heading: "5. Building More Productive Meeting Workflows",

        paragraphs: [
          "The value of an AI meeting assistant extends beyond transcription or summary generation.",

          "When meeting intelligence connects with business workflows, action items, project systems, and collaboration tools, conversations can contribute more directly to execution.",

          "Over time, organizations can build meeting workflows where important discussions are captured, structured, and connected to the work that follows.",
        
          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",
],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team connecting meeting outcomes to workflow tools",
      },
    ],

    benefits: [
      {
        title: "Less Manual Note-Taking",
        body:
          "Automated capture reduces the time participants spend documenting conversations instead of contributing to them.",
      },
      {
        title: "Clearer Decisions",
        body:
          "Structured summaries make it easy to see what was decided and why, without reviewing a full recording.",
      },
      {
        title: "Faster Follow-Up",
        body:
          "Action items are surfaced automatically, so execution can begin without waiting on manual documentation.",
      },
      {
        title: "Searchable Knowledge",
        body:
          "Past discussions become easy to find, reducing repeated conversations and lost context.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Capture",
        body:
          "The assistant listens to the conversation and organizes discussion points as the meeting happens.",
      },
      {
        number: "02",
        title: "Structure",
        body:
          "Key themes, decisions, and commitments are organized into a clear, reviewable summary.",
      },
      {
        number: "03",
        title: "Surface",
        body:
          "Action items and owners are identified so nothing important is left as a verbal agreement.",
      },
      {
        number: "04",
        title: "Connect",
        body:
          "Outcomes are linked to the workflow tools teams already use to track and complete work.",
      },
    ],

    keyTakeaways: [
      "Manual meeting documentation is inconsistent and time consuming.",
      "AI can organize conversations into structured summaries and themes.",
      "Action items should be identified automatically, not remembered manually.",
      "Searchable meeting knowledge reduces repeated discussions.",
      "Meeting intelligence delivers the most value when connected to real workflows.",
    ],

    conclusion:
      "AI meeting assistants give teams a way to capture the full value of a conversation instead of losing it to fragmented notes and memory. By structuring discussions into summaries, decisions, and action items, and connecting those outcomes to the tools teams already use, organizations can turn every meeting into a source of actionable intelligence rather than a one-time conversation.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */

  {
    slug: "ai-meeting-assistant-smart-summaries-and-follow-ups",

    title:
      "AI Meeting Summaries: Making Follow-Ups Faster and More Consistent",

    category: "AI Meeting Assistant",

    lastUpdated: "Sep 7, 2026",

    readTime: "15 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Understand how AI-generated meeting summaries can help teams capture important context, decisions, and follow-up activities more consistently.",

    author: AUTHOR,

    intro: [
      "Meeting follow-up is often inconsistent because participants leave with different interpretations of what was discussed.",

      "AI-generated summaries can help create a structured view of important topics, decisions, and next steps.",

      "The goal is not to replace human judgment but to reduce repetitive documentation work and make important information easier to review.",
    ],

    highlights: [
      {
        number: "01",
        title: "Consistent Records",
        body:
          "Every meeting produces the same structured summary format, regardless of who attended or took notes.",
      },
      {
        number: "02",
        title: "Shared Understanding",
        body:
          "Teams leave with the same view of what was discussed and decided, reducing misalignment.",
      },
      {
        number: "03",
        title: "Reliable Follow-Up",
        body:
          "Next steps are documented clearly enough that follow-up does not depend on individual memory.",
      },
    ],

    sections: [
      {
        heading: "1. Why Meeting Summaries Matter",

        paragraphs: [
          "Important business decisions are frequently made during conversations rather than formal documentation processes.",

          "Without clear summaries, teams may need to revisit conversations or rely on individual memory.",

          "Structured summaries help preserve context and make meeting outcomes easier to share.",
        
          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",
],
      },

      {
        heading: "2. Capturing Important Discussion Themes",

        paragraphs: [
          "Not every part of a meeting carries the same level of importance.",

          "AI-assisted summarization can help organize discussions around important themes and key topics.",

          "Participants can review structured information instead of manually searching through long recordings or notes.",
        
          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",
],
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team reviewing themed meeting notes",
      },

      {
        heading: "3. Highlighting Decisions and Outcomes",

        paragraphs: [
          "Business meetings often produce decisions that influence projects, customers, and operations.",

          "AI meeting workflows can identify decision-oriented discussion points and present them in a structured format.",

          "This helps teams create clearer records of what was agreed and why.",
        
          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",
],
      },

      {
        heading: "4. Supporting Better Follow-Up",

        paragraphs: [
          "Follow-up becomes easier when responsibilities and next steps are clearly visible.",

          "Meeting summaries can connect important outcomes with action items and workflow systems.",

          "This reduces the risk that valuable discussions end without clear execution.",
        
          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",
],
        quote:
          "A summary is only useful if it makes the next step obvious.",
      },

      {
        heading: "5. Creating Consistency Across Teams",

        paragraphs: [
          "Different teams often document meetings in different ways.",

          "AI-assisted workflows can provide a more consistent structure for summaries and follow-up.",

          "This consistency can improve knowledge sharing across projects and departments.",
        
          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",
],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Cross-team collaboration around shared meeting notes",
      },
    ],

    benefits: [
      {
        title: "Uniform Documentation",
        body:
          "Every meeting is summarized in the same format, making it easy to compare and review across teams.",
      },
      {
        title: "Reduced Misalignment",
        body:
          "Shared, structured summaries lower the chance that participants walk away with different interpretations.",
      },
      {
        title: "Faster Review",
        body:
          "Structured summaries take a fraction of the time to review compared to full recordings or raw notes.",
      },
      {
        title: "Better Knowledge Sharing",
        body:
          "Consistent summaries make it easier to share outcomes with people who did not attend the meeting.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Listen",
        body:
          "The assistant processes the conversation as it happens, without disrupting the discussion.",
      },
      {
        number: "02",
        title: "Summarize",
        body:
          "Key themes and outcomes are organized into a concise, structured summary.",
      },
      {
        number: "03",
        title: "Highlight",
        body:
          "Decisions and next steps are called out clearly so they are not buried in general notes.",
      },
      {
        number: "04",
        title: "Share",
        body:
          "Summaries are distributed consistently so every stakeholder has the same information.",
      },
    ],

    keyTakeaways: [
      "Inconsistent meeting follow-up often comes from inconsistent documentation.",
      "AI-generated summaries provide a consistent structure across every meeting.",
      "Decisions and outcomes should be highlighted, not buried in general notes.",
      "Clear summaries make follow-up less dependent on individual memory.",
      "Consistency in documentation improves knowledge sharing across teams.",
    ],

    conclusion:
      "Consistent, structured meeting summaries remove much of the ambiguity that slows down follow-up. By capturing themes, decisions, and next steps in the same format every time, AI-assisted summaries give teams a shared, reliable record they can act on immediately after a meeting ends.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */

  {
    slug: "ai-meeting-assistant-action-items-and-accountability",

    title:
      "AI Meeting Assistants and Action Items: Improving Accountability After Meetings",

    category: "AI Meeting Assistant",

    lastUpdated: "Sep 7, 2026",

    readTime: "15 min read",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Discover how AI meeting intelligence can help identify commitments, responsibilities, and follow-up actions from business conversations.",

    author: AUTHOR,

    intro: [
      "A productive meeting should result in clear next steps, but action items are often lost when they are captured manually.",

      "AI meeting assistants can help identify commitments and responsibilities mentioned during discussions.",

      "Structured follow-up can improve visibility and accountability across projects and teams.",
    ],

    highlights: [
      {
        number: "01",
        title: "Surface Commitments",
        body:
          "AI identifies verbal commitments and responsibilities that would otherwise go undocumented.",
      },
      {
        number: "02",
        title: "Assign Ownership",
        body:
          "Action items are attached to the people responsible for them, reducing ambiguity.",
      },
      {
        number: "03",
        title: "Track Follow-Through",
        body:
          "Organizations gain visibility into which commitments turned into completed work.",
      },
    ],

    sections: [
      {
        heading: "1. Why Action Items Get Lost",

        paragraphs: [
          "Action items are frequently discussed verbally without being formally documented.",

          "Participants may leave meetings with different assumptions about ownership or deadlines.",

          "This creates unnecessary follow-up work and can delay execution.",
        
          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",
],
      },

      {
        heading: "2. Identifying Commitments From Conversations",

        paragraphs: [
          "Business conversations often contain commitments, responsibilities, and next steps expressed in natural language.",

          "AI can help surface these statements and organize them for review.",

          "Teams can then validate and assign the appropriate follow-up activities.",
        
          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",
],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team reviewing action items from a meeting",
      },

      {
        heading: "3. Improving Ownership Visibility",

        paragraphs: [
          "Clear ownership is important when multiple people participate in a project or business process.",

          "Structured meeting outputs can make responsibilities easier to review after a discussion ends.",

          "This helps reduce ambiguity around who is responsible for the next step.",
        
          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",
],
      },

      {
        heading: "4. Connecting Meetings With Workflows",

        paragraphs: [
          "The greatest value comes when meeting outcomes are connected to the systems teams already use.",

          "Action items can support downstream project, support, sales, and operational workflows.",

          "This helps conversations move more directly into execution.",
        
          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",
],
        quote:
          "An action item that lives only in someone's memory is not an action item at all.",
      },

      {
        heading: "5. Measuring Follow-Through",

        paragraphs: [
          "Organizations can use meeting intelligence to better understand how discussions translate into actions.",

          "Patterns in incomplete follow-up or repeated discussions can reveal operational improvement opportunities.",

          "This creates a feedback loop between communication and execution.",
        
          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",
],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Dashboard tracking meeting follow-through",
      },
    ],

    benefits: [
      {
        title: "Fewer Missed Commitments",
        body:
          "Verbal agreements are captured and documented instead of relying on memory alone.",
      },
      {
        title: "Clear Ownership",
        body:
          "Each action item is tied to a responsible person, reducing confusion after the meeting ends.",
      },
      {
        title: "Improved Accountability",
        body:
          "Visible, tracked action items make it easier to follow up on outstanding work.",
      },
      {
        title: "Operational Insight",
        body:
          "Patterns in follow-through reveal where communication or execution processes need improvement.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Detect",
        body:
          "The assistant identifies commitments and responsibilities expressed during the conversation.",
      },
      {
        number: "02",
        title: "Assign",
        body:
          "Action items are matched with the person responsible for completing them.",
      },
      {
        number: "03",
        title: "Validate",
        body:
          "Teams review and confirm the identified action items before they are distributed.",
      },
      {
        number: "04",
        title: "Monitor",
        body:
          "Follow-through is tracked over time to surface accountability trends.",
      },
    ],

    keyTakeaways: [
      "Verbal commitments are easy to lose without structured documentation.",
      "AI can surface commitments and responsibilities directly from conversation.",
      "Clear ownership reduces ambiguity about who is responsible for what.",
      "Connecting action items to workflows helps conversations turn into execution.",
      "Tracking follow-through reveals opportunities to improve accountability.",
    ],

    conclusion:
      "Accountability starts with visibility. By surfacing commitments, assigning clear ownership, and tracking follow-through, AI meeting assistants help ensure that what gets discussed in a meeting actually gets done afterward, rather than fading into memory.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */

  {
    slug: "enterprise-ai-meeting-intelligence",

    title: "Enterprise AI Meeting Intelligence: Beyond Transcription",

    category: "AI Meeting Assistant",

    lastUpdated: "Sep 7, 2026",

    readTime: "15 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how enterprises can move beyond basic meeting transcription toward searchable knowledge, structured insights, and workflow-connected intelligence.",

    author: AUTHOR,

    intro: [
      "Meeting transcription is useful, but raw transcripts alone can still be difficult to review and operationalize.",

      "Enterprise meeting intelligence focuses on turning conversations into structured, searchable, and actionable information.",

      "This approach can connect meeting knowledge with the systems and workflows where teams perform their work.",
    ],

    highlights: [
      {
        number: "01",
        title: "Structured Knowledge",
        body:
          "Raw transcripts are transformed into organized, reviewable business knowledge.",
      },
      {
        number: "02",
        title: "Enterprise Integration",
        body:
          "Meeting outcomes connect directly with CRM, project, and knowledge systems.",
      },
      {
        number: "03",
        title: "Strong Governance",
        body:
          "Access control and data governance keep meeting intelligence secure at enterprise scale.",
      },
    ],

    sections: [
      {
        heading: "1. The Limits of Raw Transcripts",

        paragraphs: [
          "Long transcripts preserve information but do not automatically highlight what matters most.",

          "Teams may still need significant time to identify decisions, actions, and relevant discussion points.",

          "Structured intelligence can make meeting information easier to consume.",
        
          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",
],
      },

      {
        heading: "2. Organizing Business Knowledge",

        paragraphs: [
          "Meetings contain valuable context about customers, projects, products, and internal operations.",

          "AI can help organize this information into themes and structured outputs.",

          "This makes knowledge created during meetings easier to reuse.",
        
          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",
],
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise knowledge base built from meeting content",
      },

      {
        heading: "3. Search and Retrieval",

        paragraphs: [
          "Teams often need to revisit previous discussions to understand why decisions were made.",

          "Searchable meeting intelligence can make relevant conversations easier to locate.",

          "This reduces the time required to manually review historical meetings.",
        
          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",
],
      },

      {
        heading: "4. Enterprise Integration",

        paragraphs: [
          "Meeting intelligence becomes more useful when it connects with enterprise applications.",

          "Relevant outcomes can support CRM, project management, knowledge systems, and operational workflows.",

          "Integration helps reduce disconnected information silos.",
        
          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",
],
        quote:
          "Meeting intelligence should live where the work happens, not in a separate silo.",
      },

      {
        heading: "5. Governance and Control",

        paragraphs: [
          "Enterprise meeting intelligence should be designed with permissions, access control, and data governance in mind.",

          "Organizations need visibility into how meeting information is stored and accessed.",

          "Strong governance helps meeting AI fit into broader enterprise security practices.",
        
          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",
],
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise data governance and security controls",
      },
    ],

    benefits: [
      {
        title: "Faster Insight",
        body:
          "Structured intelligence surfaces what matters without requiring teams to read full transcripts.",
      },
      {
        title: "Reusable Knowledge",
        body:
          "Meeting content becomes organized knowledge that can support future projects and decisions.",
      },
      {
        title: "Connected Systems",
        body:
          "Integration with CRM and project tools keeps meeting outcomes close to where work happens.",
      },
      {
        title: "Enterprise-Grade Security",
        body:
          "Access control and governance keep sensitive meeting content protected at scale.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Transcribe",
        body:
          "Conversations are captured accurately as a foundation for further analysis.",
      },
      {
        number: "02",
        title: "Structure",
        body:
          "Transcripts are organized into themes, decisions, and actionable knowledge.",
      },
      {
        number: "03",
        title: "Integrate",
        body:
          "Structured outputs are connected to enterprise systems and workflows.",
      },
      {
        number: "04",
        title: "Govern",
        body:
          "Access controls and data policies are applied to protect meeting intelligence.",
      },
    ],

    keyTakeaways: [
      "Raw transcripts alone are not enough to operationalize meeting content.",
      "Structured intelligence turns conversations into reusable business knowledge.",
      "Searchable meeting history reduces time spent revisiting past discussions.",
      "Integration with enterprise systems keeps meeting outcomes connected to real work.",
      "Governance and access control are essential for enterprise-scale adoption.",
    ],

    conclusion:
      "Enterprises get the most value from meeting intelligence when they move beyond basic transcription toward structured, searchable, and workflow-connected knowledge. Combined with strong governance, this approach turns everyday conversations into a lasting and secure business asset.",

    cta: CTA,
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */

  {
    slug: "how-ai-meeting-assistants-improve-team-productivity",

    title: "How AI Meeting Assistants Can Improve Team Productivity",

    category: "AI Meeting Assistant",

    lastUpdated: "Sep 7, 2026",

    readTime: "15 min read",

    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See how AI-assisted meeting workflows can reduce repetitive documentation work and help teams focus more on decisions and execution.",

    author: AUTHOR,

    intro: [
      "Modern teams spend a significant amount of time participating in meetings and managing the information created by those conversations.",

      "The productivity challenge is not only the meeting itself but also the documentation and follow-up work that happens afterward.",

      "AI meeting assistants can help reduce this repetitive effort while making important outcomes easier to access.",
    ],

    highlights: [
      {
        number: "01",
        title: "Less Overhead",
        body:
          "Automated documentation frees participants to focus on the conversation instead of note-taking.",
      },
      {
        number: "02",
        title: "Faster Alignment",
        body:
          "Structured summaries help distributed teams stay aligned without extra status meetings.",
      },
      {
        number: "03",
        title: "More Execution",
        body:
          "Clear, action-oriented outputs help teams move from discussion to delivery faster.",
      },
    ],

    sections: [
      {
        heading: "1. Reducing Documentation Work",

        paragraphs: [
          "Manual note-taking requires participants to divide attention between the conversation and documentation.",

          "AI-assisted workflows can reduce the amount of repetitive meeting documentation required.",

          "Participants can focus more attention on the discussion itself.",
        
          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",
],
      },

      {
        heading: "2. Faster Access to Context",

        paragraphs: [
          "Teams frequently need to revisit previous conversations for important context.",

          "Structured summaries and searchable information can make this process faster.",

          "This reduces repeated discussions and unnecessary information gathering.",
        
          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",
],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team quickly finding meeting context",
      },

      {
        heading: "3. Better Cross-Team Communication",

        paragraphs: [
          "Meeting intelligence can make important outcomes easier to share with people who did not attend.",

          "Structured summaries provide a faster way to communicate decisions and progress.",

          "This can improve continuity across distributed teams.",
        
          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",

          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",
],
      },

      {
        heading: "4. Supporting Focused Execution",

        paragraphs: [
          "Productivity improves when teams have clear visibility into what happens after a meeting.",

          "Action-oriented meeting outputs can help teams move from discussion to execution.",

          "This creates a clearer connection between communication and business outcomes.",
        
          "The workflow should remain reviewable by people, particularly when a discussion contains sensitive context, nuanced decisions, or commitments that require confirmation. AI can accelerate the preparation of information while participants retain control over what is ultimately shared or acted upon.",

          "As adoption grows, organizations can evaluate which types of meetings generate the most value from automated intelligence. This makes it possible to refine the workflow over time and focus automation on conversations where better capture, organization, and follow-through have the greatest operational impact.",

          "Ultimately, the goal is to remove friction around the information surrounding a meeting. When participants can spend less effort documenting, searching, and reconstructing conversations, they have more time to focus on decisions, relationships, problem solving, and execution.",

          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",
],
        quote:
          "Productivity gains come less from faster meetings and more from faster follow-through.",
      },

      {
        heading: "5. Building Smarter Collaboration Workflows",

        paragraphs: [
          "AI meeting assistants can become part of a broader collaboration and workflow ecosystem.",

          "Organizations can connect meeting insights with projects, knowledge, and operational systems.",

          "Over time, this can create more efficient and connected ways of working.",
        
          "In practice, this also gives teams a clearer operating rhythm because the information created during the conversation is available in a consistent format instead of depending on individual note-taking habits.",

          "A structured approach can reduce the amount of time employees spend reconstructing what happened after the meeting, while also making it easier for people who were not present to understand the context behind the outcome.",

          "The benefit becomes even more noticeable when meetings are frequent. Small amounts of documentation effort can accumulate quickly across recurring team meetings, customer conversations, project reviews, and operational discussions.",

          "Another important advantage is continuity. When people change roles, join a project, or return to a discussion weeks later, a reliable meeting record gives them useful context without requiring another person to recreate the history from memory.",

          "Teams can also use these structured outputs as a starting point for their existing processes. Instead of treating meeting documentation as a final archive, organizations can use it as an input into planning, project tracking, customer management, and internal collaboration.",
],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Teams collaborating using connected workflow tools",
      },
    ],

    benefits: [
      {
        title: "More Focused Meetings",
        body:
          "Participants can engage fully in discussion instead of splitting attention with note-taking.",
      },
      {
        title: "Quicker Context Recovery",
        body:
          "Searchable summaries let teams find relevant context in moments, not hours.",
      },
      {
        title: "Stronger Alignment",
        body:
          "Shared, structured outcomes keep distributed teams working from the same information.",
      },
      {
        title: "Faster Execution",
        body:
          "Clear action items shorten the gap between a decision and the work that follows it.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Engage",
        body:
          "Participants focus fully on the conversation while the assistant handles documentation.",
      },
      {
        number: "02",
        title: "Summarize",
        body:
          "Key context, decisions, and themes are organized automatically after the meeting.",
      },
      {
        number: "03",
        title: "Share",
        body:
          "Outcomes are distributed to stakeholders, including those who could not attend.",
      },
      {
        number: "04",
        title: "Execute",
        body:
          "Action items move directly into the tools teams use to track and complete work.",
      },
    ],

    keyTakeaways: [
      "Meeting productivity depends on what happens after the meeting, not just during it.",
      "Automated documentation lets participants focus on the discussion itself.",
      "Searchable summaries reduce time spent recovering past context.",
      "Structured outcomes improve alignment across distributed teams.",
      "Connecting meetings to workflows accelerates execution.",
    ],

    conclusion:
      "The biggest productivity gains from AI meeting assistants come from what happens after the call ends. By reducing documentation overhead, keeping teams aligned, and connecting outcomes directly to execution, organizations can turn every meeting into forward progress rather than another item to catch up on.",

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