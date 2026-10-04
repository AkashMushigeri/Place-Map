/**
 * Prototype Career Requirements
 * Disclaimer: The company evaluation weights, hiring bars, and round structures
 * presented here are prototype guidance models developed for educational simulations.
 * They do not represent official hiring rubrics of the respective companies.
 */

export const COMPANIES = [
  {
    id: "google",
    name: "Google",
    tier: "Tier1",
    tagline: "High algorithmic depth, scale, and Googleyness",
    logoText: "G",
    color: "from-blue-500 to-red-500",
    badgeColor: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
    description: "Evaluates algorithmic problem-solving speed, clean code, time/space optimality, and collaborative communication.",
    hiringBarWeights: {
      dsa: 0.40,
      systemDesign: 0.25,
      coreCs: 0.15,
      projects: 0.10,
      behavioral: 0.10
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Advanced",
      "Dynamic Programming": "Advanced",
      "Graph Algorithms": "Advanced",
      "System Design": "Intermediate",
      "Operating Systems": "Intermediate",
      "Computer Networks": "Intermediate",
      "Python": "Intermediate",
      "C++": "Intermediate",
      "Java": "Intermediate",
      "Database Systems": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Online Assessment (OA)", focus: ["DSA (Medium-Hard)", "Graph/DP Patterns"], time: "90 mins", eliminationRate: "~70%" },
      { roundNumber: 2, title: "Technical Round 1", focus: ["Live Coding", "Optimal Big-O", "Clean Code"], time: "45 mins", eliminationRate: "~50%" },
      { roundNumber: 3, title: "Technical Round 2", focus: ["Complex Data Structures", "Tree/Graph/DP"], time: "45 mins", eliminationRate: "~40%" },
      { roundNumber: 4, title: "System Design / Architecture", focus: ["Scalability", "Trade-off Analysis"], time: "45 mins", eliminationRate: "~35%" },
      { roundNumber: 5, title: "Googleyness & Leadership", focus: ["Hypothetical Scenarios", "Culture & Ambiguity"], time: "45 mins", eliminationRate: "~15%" }
    ],
    interviewFocusTips: [
      "Always state Big-O time and space complexity before coding.",
      "Think out loud — interviewers value your reasoning process as much as the solution.",
      "Check edge cases explicitly: null inputs, negative values, integer overflows.",
      "Write modular, clean code with descriptive variable names."
    ]
  },
  {
    id: "microsoft",
    name: "Microsoft",
    tier: "Tier1",
    tagline: "Practical software engineering, system architecture, and culture fit",
    logoText: "MS",
    color: "from-blue-600 to-teal-500",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    description: "Values solid data structure fundamentals, object-oriented principles, modular architecture, and collaborative growth mindset.",
    hiringBarWeights: {
      dsa: 0.35,
      systemDesign: 0.20,
      coreCs: 0.20,
      projects: 0.15,
      behavioral: 0.10
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Intermediate",
      "Object-Oriented Design": "Advanced",
      "Operating Systems": "Intermediate",
      "Database Systems": "Intermediate",
      "Computer Networks": "Intermediate",
      "System Design": "Intermediate",
      "C# / Java": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Online Assessment", focus: ["Codility / Mettl", "2-3 Algorithmic Tasks"], time: "70 mins", eliminationRate: "~65%" },
      { roundNumber: 2, title: "Technical Round 1", focus: ["DSA (Trees, Linked Lists, HashMaps)", "OOP Concepts"], time: "45-60 mins", eliminationRate: "~45%" },
      { roundNumber: 3, title: "Technical Round 2", focus: ["System Design / Low Level Design", "Concurrency"], time: "60 mins", eliminationRate: "~35%" },
      { roundNumber: 4, title: "AA (As-Appropriate) Director Round", focus: ["Leadership Principles", "Deep Project Discussion"], time: "45 mins", eliminationRate: "~20%" }
    ],
    interviewFocusTips: [
      "Demonstrate strong OOP principles (SOLID, Design Patterns).",
      "Be prepared to explain past project architecture in detail.",
      "Show how you handle failure and peer feedback."
    ]
  },
  {
    id: "amazon",
    name: "Amazon",
    tier: "Tier1",
    tagline: "16 Leadership Principles combined with robust coding and scalability",
    logoText: "A",
    color: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    description: "Evaluates candidates deeply through Amazon's Leadership Principles (Customer Obsession, Ownership, Bias for Action) alongside DSA and system design.",
    hiringBarWeights: {
      dsa: 0.30,
      behavioral: 0.30,
      systemDesign: 0.20,
      projects: 0.10,
      coreCs: 0.10
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Intermediate",
      "Object-Oriented Design": "Advanced",
      "System Design": "Intermediate",
      "Behavioral / STAR Method": "Advanced",
      "Database Systems": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Online Assessment 1 & 2", focus: ["Debugging", "Coding (2 LeetCode Medium)", "Work Simulation"], time: "90 mins", eliminationRate: "~65%" },
      { roundNumber: 2, title: "Technical + LP Round 1", focus: ["DSA (Trees/Graphs)", "Customer Obsession & Ownership"], time: "60 mins", eliminationRate: "~40%" },
      { roundNumber: 3, title: "Technical + LP Round 2", focus: ["OOP Design / LLD", "Deliver Results & Invent and Simplify"], time: "60 mins", eliminationRate: "~35%" },
      { roundNumber: 4, title: "Bar Raiser Round", focus: ["Deep Behavioral STAR Stories", "System Scalability"], time: "60 mins", eliminationRate: "~30%" }
    ],
    interviewFocusTips: [
      "Prepare 2-3 distinct STAR format stories for each of Amazon's 16 Leadership Principles.",
      "Tie technical decisions to customer impact.",
      "Be prepared for modular Object-Oriented design questions (e.g., Design a Parking Lot, Locker System)."
    ]
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    tier: "Tier1",
    tagline: "High-performance computing, accelerated systems, and AI infrastructure",
    logoText: "NV",
    color: "from-green-600 to-emerald-500",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    description: "Demands deep mastery of computer architecture, operating systems, memory management, parallel processing, and C++/CUDA fundamentals.",
    hiringBarWeights: {
      coreCs: 0.35,
      dsa: 0.25,
      projects: 0.20,
      systemDesign: 0.10,
      behavioral: 0.10
    },
    requiredSkillLevels: {
      "C++": "Advanced",
      "Computer Architecture": "Advanced",
      "Operating Systems": "Advanced",
      "Concurrency & Multithreading": "Advanced",
      "Data Structures & Algorithms": "Intermediate",
      "GPU Computing / CUDA": "Beginner"
    },
    rounds: [
      { roundNumber: 1, title: "Technical Screening", focus: ["C++ Pointers, Virtual Tables, OS Memory, Bit Manipulation"], time: "60 mins", eliminationRate: "~60%" },
      { roundNumber: 2, title: "Architecture & Systems", focus: ["Cache Coherence, Paging, Mutexes, Semaphores"], time: "60 mins", eliminationRate: "~45%" },
      { roundNumber: 3, title: "Algorithms & Optimization", focus: ["High-performance DSA, Profiling, Parallel Algorithms"], time: "60 mins", eliminationRate: "~35%" },
      { roundNumber: 4, title: "Hiring Manager Round", focus: ["Domain Depth, Research/Projects, Engineering Passion"], time: "45 mins", eliminationRate: "~20%" }
    ],
    interviewFocusTips: [
      "Master pointer arithmetic, memory layout of C++ objects, and RAII.",
      "Understand hardware architecture: CPU caches (L1/L2/L3), TLB, cache misses, branch prediction.",
      "Review multi-threading primitives, deadlocks, and memory barriers."
    ]
  },
  {
    id: "apple",
    name: "Apple",
    tier: "Tier1",
    tagline: "Elegance, deep craft, systems engineering, and privacy-first design",
    logoText: "",
    color: "from-slate-700 to-slate-900",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    description: "Evaluates end-to-end technical excellence, precision, attention to detail, and deep foundational domain comprehension.",
    hiringBarWeights: {
      coreCs: 0.30,
      dsa: 0.25,
      projects: 0.25,
      systemDesign: 0.10,
      behavioral: 0.10
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Intermediate",
      "Operating Systems": "Advanced",
      "Computer Networks": "Intermediate",
      "Clean Code & Architecture": "Advanced",
      "C++ / Swift / Objective-C": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Recruiter & Tech Screen", focus: ["Domain Overview", "Fundamentals Quiz"], time: "45 mins", eliminationRate: "~50%" },
      { roundNumber: 2, title: "Deep Technical 1", focus: ["Algorithms & Data Structures", "Code Cleanliness"], time: "60 mins", eliminationRate: "~40%" },
      { roundNumber: 3, title: "Deep Technical 2", focus: ["Low Level Architecture", "Concurrency & Resource Bounds"], time: "60 mins", eliminationRate: "~35%" },
      { roundNumber: 4, title: "Cross-functional & Culture", focus: ["Collaboration, Passion for Products, Privacy Mindset"], time: "45 mins", eliminationRate: "~20%" }
    ],
    interviewFocusTips: [
      "Prioritize clean, maintainable code over quick and dirty hacks.",
      "Be prepared to write code with no IDE autocomplete or crutches.",
      "Emphasize attention to edge cases and user privacy."
    ]
  },
  {
    id: "meta",
    name: "Meta",
    tier: "Tier1",
    tagline: "Lightning speed, raw algorithmic execution, and hyper-scale systems",
    logoText: "M",
    color: "from-blue-600 to-indigo-700",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
    description: "Known for fast-paced coding rounds where solving 2 LeetCode mediums in 45 minutes with bug-free code is expected.",
    hiringBarWeights: {
      dsa: 0.45,
      systemDesign: 0.25,
      behavioral: 0.15,
      projects: 0.10,
      coreCs: 0.05
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Advanced",
      "Trees & Graphs": "Advanced",
      "Dynamic Programming": "Intermediate",
      "System Design": "Advanced",
      "Behavioral": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Technical Screen", focus: ["2 LeetCode Mediums in 45 mins", "Zero-Bug Execution"], time: "45 mins", eliminationRate: "~65%" },
      { roundNumber: 2, title: "Onsite Coding 1", focus: ["DSA (Arrays, Strings, Two Pointers)"], time: "45 mins", eliminationRate: "~40%" },
      { roundNumber: 3, title: "Onsite Coding 2", focus: ["DSA (Trees, Graphs, Recursion)"], time: "45 mins", eliminationRate: "~35%" },
      { roundNumber: 4, title: "System Design", focus: ["Hyper-scale feeds, chat, or rate limiters"], time: "45 mins", eliminationRate: "~35%" },
      { roundNumber: 5, title: "Behavioral", focus: ["Move Fast, Resolve Conflict, Impact"], time: "45 mins", eliminationRate: "~15%" }
    ],
    interviewFocusTips: [
      "Speed matters: aim to solve each problem in ~18 minutes.",
      "Dry run with test cases manually before saying 'I am finished'.",
      "Practice Top Meta tagged questions on LeetCode."
    ]
  },
  {
    id: "infosys",
    name: "Infosys",
    tier: "MidTier",
    tagline: "HackWithInfy, InfyTQ, and core IT placement fundamentals",
    logoText: "INF",
    color: "from-blue-600 to-cyan-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    description: "Focuses on quantitative aptitude, logical reasoning, core programming basics (Java/Python), DBMS SQL queries, and project walkthroughs.",
    hiringBarWeights: {
      coreCs: 0.30,
      projects: 0.25,
      dsa: 0.20,
      behavioral: 0.15,
      systemDesign: 0.10
    },
    requiredSkillLevels: {
      "Python / Java": "Intermediate",
      "SQL / DBMS": "Intermediate",
      "Data Structures & Algorithms": "Beginner",
      "Object-Oriented Design": "Intermediate",
      "Web Development": "Beginner"
    },
    rounds: [
      { roundNumber: 1, title: "Aptitude + Pseudocode Assessment", focus: ["Logical Reasoning", "Quantitative Ability", "Verbal", "Pseudocode"], time: "90 mins", eliminationRate: "~60%" },
      { roundNumber: 2, title: "Technical Interview", focus: ["OOP Concepts", "SQL JOINs/Queries", "Final Year Project Demo", "Basic DSA"], time: "30-45 mins", eliminationRate: "~40%" },
      { roundNumber: 3, title: "HR Interview", focus: ["Communication", "Relocation Willingness", "Academic Background"], time: "20 mins", eliminationRate: "~15%" }
    ],
    interviewFocusTips: [
      "Be thoroughly prepared to write SQL queries (GROUP BY, HAVING, INNER/LEFT JOINs).",
      "Explain your final year college project end-to-end with clarity.",
      "Know 4 pillars of OOPs with real-life examples."
    ]
  },
  {
    id: "tcs",
    name: "TCS",
    tier: "MidTier",
    tagline: "TCS NQT / Digital / Ninja recruitment process",
    logoText: "TCS",
    color: "from-indigo-600 to-purple-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
    description: "Evaluates candidates through TCS NQT (National Qualifier Test) covering cognitive skills, foundational programming, and technical interviews.",
    hiringBarWeights: {
      coreCs: 0.30,
      projects: 0.25,
      dsa: 0.20,
      behavioral: 0.15,
      systemDesign: 0.10
    },
    requiredSkillLevels: {
      "C / Java / Python": "Intermediate",
      "DBMS & SQL": "Intermediate",
      "Data Structures & Algorithms": "Beginner",
      "Software Engineering": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "TCS NQT (Cognitive + Technical)", focus: ["Numerical & Verbal", "Advanced Coding (2 questions)"], time: "165 mins", eliminationRate: "~60%" },
      { roundNumber: 2, title: "Technical Interview (TR)", focus: ["Core CS (OS, DBMS, Networks)", "Languages", "Project Review"], time: "30-40 mins", eliminationRate: "~35%" },
      { roundNumber: 3, title: "Managerial & HR Interview (MR/HR)", focus: ["Company Culture", "Adaptability", "Teamwork"], time: "25 mins", eliminationRate: "~15%" }
    ],
    interviewFocusTips: [
      "Score high on NQT Coding section to qualify for TCS Digital / Prime roles.",
      "Prepare basics of Operating Systems (Processes vs Threads, Paging, Deadlocks).",
      "Be confident and articulate in English communication."
    ]
  },
  {
    id: "accenture",
    name: "Accenture",
    tier: "MidTier",
    tagline: "Cognitive assessment, coding proficiency, and technical interview",
    logoText: ">",
    color: "from-purple-600 to-pink-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
    description: "Emphasizes cognitive assessment, technical pseudocode, hands-on coding, and communication evaluation for ASE / FSE profiles.",
    hiringBarWeights: {
      coreCs: 0.30,
      projects: 0.25,
      dsa: 0.20,
      behavioral: 0.15,
      systemDesign: 0.10
    },
    requiredSkillLevels: {
      "Java / Python / C++": "Intermediate",
      "Data Structures": "Beginner",
      "DBMS & SQL": "Intermediate",
      "Cloud Fundamentals": "Beginner"
    },
    rounds: [
      { roundNumber: 1, title: "Cognitive & Technical Assessment", focus: ["English, Critical Thinking, Abstract Reasoning, Pseudocode, MS Office, Cloud Basics"], time: "90 mins", eliminationRate: "~50%" },
      { roundNumber: 2, title: "Coding Assessment", focus: ["2 Coding Questions (Strings, Arrays, Logic)"], time: "45 mins", eliminationRate: "~40%" },
      { roundNumber: 3, title: "Communication Assessment", focus: ["Pronunciation, Fluency, Reading, Listening"], time: "20 mins", eliminationRate: "~20%" },
      { roundNumber: 4, title: "Technical & HR Interview", focus: ["Resume Walkthrough, Situational Questions, Core CS"], time: "30 mins", eliminationRate: "~25%" }
    ],
    interviewFocusTips: [
      "Pay attention to Pseudocode questions (loops, conditional logic, bitwise ops).",
      "Practice quiet environment speaking for the automated communication round.",
      "Highlight willingness to learn emerging technologies and cloud solutions."
    ]
  },
  {
    id: "deloitte",
    name: "Deloitte",
    tier: "MidTier",
    tagline: "Consulting rigor, client-facing software delivery, and business logic",
    logoText: "D",
    color: "from-emerald-700 to-green-600",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    description: "Focuses on business problem-solving, analytical mindset, SQL data manipulation, web/cloud engineering, and professional executive presence.",
    hiringBarWeights: {
      projects: 0.30,
      coreCs: 0.25,
      behavioral: 0.25,
      dsa: 0.15,
      systemDesign: 0.05
    },
    requiredSkillLevels: {
      "SQL / Database Management": "Intermediate",
      "Python / JavaScript": "Intermediate",
      "Data Structures": "Beginner",
      "Cloud / DevOps Basics": "Beginner",
      "Business & Analytical Thinking": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Online Assessment (AMCAT/Versant)", focus: ["Aptitude, Logical, Verbal, Computer Programming Basics"], time: "75 mins", eliminationRate: "~55%" },
      { roundNumber: 2, title: "Technical Interview", focus: ["Project Architecture, SQL Queries, Problem-Solving Scenario"], time: "35 mins", eliminationRate: "~35%" },
      { roundNumber: 3, title: "Partner / Director & HR Round", focus: ["Consulting Scenarios, Communication, Ethical Judgment"], time: "30 mins", eliminationRate: "~20%" }
    ],
    interviewFocusTips: [
      "Explain technology in terms of business value and efficiency gains.",
      "Speak clearly and with structured communication (e.g. MECE framework).",
      "Know your resume projects thoroughly."
    ]
  },
  {
    id: "other",
    name: "Other / Custom Target",
    tier: "Scaleup",
    tagline: "Customized company profile calibrated to high-agency engineering",
    logoText: "★",
    color: "from-slate-600 to-indigo-600",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    description: "Configurable benchmark balancing DSA, modern development stacks, system design, and real-world project portfolio.",
    hiringBarWeights: {
      dsa: 0.30,
      projects: 0.25,
      systemDesign: 0.20,
      coreCs: 0.15,
      behavioral: 0.10
    },
    requiredSkillLevels: {
      "Data Structures & Algorithms": "Intermediate",
      "Database Systems": "Intermediate",
      "System Design": "Intermediate",
      "Clean Code & Git": "Intermediate"
    },
    rounds: [
      { roundNumber: 1, title: "Technical Screen", focus: ["Core Fundamentals & Algorithmic Problem Solving"], time: "60 mins", eliminationRate: "~50%" },
      { roundNumber: 2, title: "System & Architecture", focus: ["Design & Past Project Deep Dive"], time: "60 mins", eliminationRate: "~35%" },
      { roundNumber: 3, title: "Culture & Values", focus: ["Teamwork & Problem-solving Velocity"], time: "45 mins", eliminationRate: "~20%" }
    ],
    interviewFocusTips: [
      "Focus on shipping working code quickly.",
      "Have a well-documented GitHub repository to showcase.",
      "Show genuine curiosity about company products."
    ]
  }
];

export function getCompanyById(id) {
  if (!id) return COMPANIES[0];
  const found = COMPANIES.find(c => c.id.toLowerCase() === id.toLowerCase() || c.name.toLowerCase() === id.toLowerCase());
  if (found) return found;
  // If custom company name passed
  return {
    ...COMPANIES.find(c => c.id === 'other'),
    name: id,
    custom: true
  };
}
