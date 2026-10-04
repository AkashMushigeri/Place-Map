export const INTERVIEW_TRACKS = [
  { id: "technical", name: "Technical Interview", icon: "Code2", desc: "Data structures, algorithmic trade-offs, and Big-O efficiency analysis" },
  { id: "project", name: "Project Deep Dive", icon: "Layers", desc: "Architecture, engineering trade-offs, bottlenecks, and measurable impact" },
  { id: "core_cs", name: "Core CS Fundamentals", icon: "Cpu", desc: "Operating Systems, DBMS concurrency, ACID transactions, and Computer Networks" },
  { id: "behavioral", name: "Behavioral & Leadership", icon: "MessageSquare", desc: "STAR method responses, conflict resolution, ownership, and adaptability" },
  { id: "role_specific", name: "Role-Specific Architecture", icon: "ShieldCheck", desc: "High-level design, database schema, and domain-calibrated challenges" }
];

export const INTERVIEW_QUESTIONS = {
  technical: [
    {
      id: "tech-1",
      question: "How would you optimize search in a sorted array that has been rotated at an unknown pivot point?",
      topic: "Modified Binary Search",
      difficulty: "Medium",
      expectedKeywords: ["binary search", "pivot", "midpoint", "sorted half", "O(log n)"],
      sampleGoodPoints: ["Noticed that at least one half must always remain sorted", "Compared mid element with left and right bounds to decide direction", "Correctly identified O(log n) time complexity"],
      sampleMissingPoints: ["Need to clearly handle duplicates if elements can repeat", "Mention edge cases like single-element arrays"]
    },
    {
      id: "tech-2",
      question: "Explain the internal difference between a HashMap and a TreeMap. When would you choose one over the other?",
      topic: "Data Structures & Hashing",
      difficulty: "Medium",
      expectedKeywords: ["hash table", "red-black tree", "O(1)", "O(log n)", "ordered", "collisions"],
      sampleGoodPoints: ["Identified average O(1) vs guaranteed O(log n) performance", "Explained tree map maintains sorted key order", "Addressed hash collision resolution strategies"],
      sampleMissingPoints: ["Mention memory overhead comparison", "Discuss worst-case HashMap degradation to O(n) or O(log n)"]
    },
    {
      id: "tech-3",
      question: "How does the Two-Pointer technique reduce an O(n^2) problem down to O(n)? Give a concrete example.",
      topic: "Two Pointers Pattern",
      difficulty: "Easy",
      expectedKeywords: ["sorted array", "left right pointers", "O(n)", "monotonic property", "Two Sum II"],
      sampleGoodPoints: ["Explained that sorted property allows deterministic pointer movement without backtracking", "Gave clear Two Sum II or Container With Most Water illustration", "Proved O(n) time complexity with O(1) space"],
      sampleMissingPoints: ["Explicitly state why sorting upfront takes O(n log n)", "Mention condition checks for boundary collisions"]
    }
  ],
  project: [
    {
      id: "proj-q1",
      question: "Walk me through one of the most technically challenging projects you have built. What was the core technical bottleneck, and how did you resolve it?",
      topic: "Project Architecture & Bottlenecks",
      difficulty: "Medium",
      expectedKeywords: ["architecture", "bottleneck", "latency", "scale", "trade-off", "metrics"],
      sampleGoodPoints: ["Structured narrative starting with business context and problem scope", "Described technical trade-offs objectively", "Quantified results with tangible metrics (latency, throughput, users)"],
      sampleMissingPoints: ["Explain the system architecture diagram or data flow more clearly", "Clarify why alternative simpler approaches were rejected"]
    },
    {
      id: "proj-q2",
      question: "Why did you choose your specific database (SQL vs NoSQL) for your recent project? What trade-offs did you accept?",
      topic: "Database Architecture Trade-offs",
      difficulty: "Medium",
      expectedKeywords: ["relational", "ACID", "schema", "JSON", "scaling", "read/write ratio"],
      sampleGoodPoints: ["Articulated data access patterns (read-heavy vs write-heavy)", "Evaluated transaction consistency requirements vs flexibility", "Acknowledged maintenance and migration overhead"],
      sampleMissingPoints: ["Mention specific indexing strategies applied", "Discuss sharding or backup considerations"]
    }
  ],
  core_cs: [
    {
      id: "core-1",
      question: "What is the difference between a Process and a Thread? How does context switching differ between them?",
      topic: "Operating Systems",
      difficulty: "Medium",
      expectedKeywords: ["virtual memory", "address space", "stack", "PCB", "TCB", "cache invalidation", "overhead"],
      sampleGoodPoints: ["Distinguished shared memory within threads vs isolated address spaces of processes", "Accurately noted that thread context switches avoid flushing CPU cache (TLB)"],
      sampleMissingPoints: ["Explain inter-process communication (IPC) vs thread synchronization locks", "Mention thread-safety hazards (race conditions)"]
    },
    {
      id: "core-2",
      question: "Explain ACID properties in relational databases and provide a real-world scenario where violating Isolation causes a bug.",
      topic: "Database Management Systems",
      difficulty: "Medium",
      expectedKeywords: ["Atomicity", "Consistency", "Isolation", "Durability", "dirty read", "transaction", "locks"],
      sampleGoodPoints: ["Clearly defined all 4 ACID properties with precision", "Provided classic double-booking or banking transfer example for race conditions", "Connected Isolation levels (Read Committed vs Serializable) to lock contention"],
      sampleMissingPoints: ["Explain write-ahead logging (WAL) for Durability", "Discuss optimistic vs pessimistic locking"]
    }
  ],
  behavioral: [
    {
      id: "behav-1",
      question: "Tell me about a time when you had a disagreement with a team member or peer on a technical decision. How did you resolve it?",
      topic: "Conflict Resolution & Collaboration",
      difficulty: "Medium",
      expectedKeywords: ["Situation", "Task", "Action", "Result", "objective data", "benchmarks", "compromise"],
      sampleGoodPoints: ["Followed STAR structure clearly", "Separated technical merits from personal ego", "Relied on objective benchmarks/metrics or user needs to decide"],
      sampleMissingPoints: ["Share what you learned from the other person's perspective", "Quantify the eventual outcome for the project"]
    },
    {
      id: "behav-2",
      question: "Describe a situation where a project deadline was approaching, and you realized you wouldn't be able to finish all planned features. What did you do?",
      topic: "Prioritization & Ownership",
      difficulty: "Medium",
      expectedKeywords: ["triage", "stakeholders", "MVP", "trade-offs", "transparent communication"],
      sampleGoodPoints: ["Proactively alerted stakeholders early rather than hiding the delay", "Triaged features into P0 must-haves and P1 nice-to-haves", "Delivered core functional value without compromising quality"],
      sampleMissingPoints: ["Reflect on retrospective root cause: why was the estimate initially off?", "Detail how future scheduling was adjusted"]
    }
  ],
  role_specific: [
    {
      id: "role-1",
      question: "Design a Rate Limiter for an API gateway serving 100,000 requests per second. Which algorithm would you use and how would you store state across multiple server instances?",
      topic: "System Design & Scalability",
      difficulty: "Hard",
      expectedKeywords: ["Token Bucket", "Leaky Bucket", "Sliding Window Counter", "Redis", "atomic Lua script", "latency"],
      sampleGoodPoints: ["Compared Token Bucket with Sliding Window Log", "Selected Redis with atomic operations to prevent race conditions across distributed servers", "Considered failure modes (what happens if the rate limiter cache goes down?)"],
      sampleMissingPoints: ["Clarify client response headers (e.g., X-RateLimit-Remaining, Retry-After)", "Discuss local memory caching vs remote Redis latency trade-offs"]
    }
  ]
};
