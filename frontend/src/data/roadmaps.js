/**
 * Roadmap generator and phase templates
 */

export const ROADMAP_PHASES = [
  {
    id: "phase-1",
    phaseNumber: "01",
    title: "Programming Foundations & Clean Code",
    description: "Solidify core language idioms, memory patterns, object-oriented design, and debugging fluency.",
    durationWeeks: "2-3 Weeks",
    category: "foundations"
  },
  {
    id: "phase-2",
    phaseNumber: "02",
    title: "Data Structures & Algorithmic Patterns",
    description: "Master high-frequency patterns (Two Pointers, Sliding Window, Trees, Graphs, DP) tested in company technical screens.",
    durationWeeks: "5-6 Weeks",
    category: "dsa"
  },
  {
    id: "phase-3",
    phaseNumber: "03",
    title: "Core Computer Science Fundamentals",
    description: "Deep dive into Operating Systems, Database Management (SQL & Indexing), and Networking protocols.",
    durationWeeks: "3-4 Weeks",
    category: "core_cs"
  },
  {
    id: "phase-4",
    phaseNumber: "04",
    title: "Company-Calibrated Portfolio Projects",
    description: "Engineer production-grade architectures with clear business value, testing, CI/CD, and metrics.",
    durationWeeks: "4-5 Weeks",
    category: "projects"
  },
  {
    id: "phase-5",
    phaseNumber: "05",
    title: "Mock Interviews & Placement Readiness",
    description: "Simulate high-pressure live coding, system design whiteboard sessions, and behavioral STAR rounds.",
    durationWeeks: "2-3 Weeks",
    category: "interview"
  }
];

/**
 * Dynamically builds tasks for each phase based on user's skill levels and target company/role.
 */
export function buildPersonalizedRoadmap(profile) {
  const skills = profile?.skills || {};
  const targetCompany = profile?.targetCompany || "Google";
  const targetRole = profile?.targetRole || "Software Engineer";

  const pythonLevel = skills["python"] || skills["Python"] || "Intermediate";
  const dsaLevel = skills["dsa"] || skills["Data Structures & Algorithms"] || "Beginner";
  const dbmsLevel = skills["dbms"] || skills["sql"] || "Intermediate";
  const osLevel = skills["os"] || "Beginner";
  const sysDesignLevel = skills["system_design"] || "Beginner";

  return [
    {
      ...ROADMAP_PHASES[0],
      isPriority: pythonLevel === "Beginner",
      tasks: [
        {
          id: "t1-1",
          title: "Language Core & Standard Library Idioms",
          desc: "Master memory allocation, list comprehensions, closures, and iterators in your primary language.",
          completed: pythonLevel === "Advanced" || pythonLevel === "Intermediate",
          estimatedHours: 4,
          tag: "Syntax"
        },
        {
          id: "t1-2",
          title: "Object-Oriented Design (SOLID Principles)",
          desc: "Implement encapsulation, polymorphism, abstract base classes, and clean interface segregation.",
          completed: pythonLevel === "Advanced",
          estimatedHours: 6,
          tag: "OOP"
        },
        {
          id: "t1-3",
          title: "Memory Models & Performance Profiling",
          desc: "Understand garbage collection, reference counting, and profile CPU/memory bottlenecks with cProfile.",
          completed: false,
          estimatedHours: 5,
          tag: "Advanced"
        }
      ]
    },
    {
      ...ROADMAP_PHASES[1],
      isPriority: dsaLevel === "Beginner",
      tasks: [
        {
          id: "t2-1",
          title: "Two Pointers & Sliding Window Patterns",
          desc: "Solve 10 classic linear search reduction problems (3Sum, Container With Most Water, Min Window Substring).",
          completed: dsaLevel === "Advanced" || dsaLevel === "Intermediate",
          estimatedHours: 8,
          tag: "P0 Gap"
        },
        {
          id: "t2-2",
          title: "Binary Trees & BST Traversals",
          desc: "Implement recursive and iterative DFS (pre, in, post) and BFS level-order with boundary conditions.",
          completed: dsaLevel === "Advanced",
          estimatedHours: 10,
          tag: "P0 Gap"
        },
        {
          id: "t2-3",
          title: "Graph Traversal & Cycle Detection",
          desc: "Master BFS/DFS flood fill, topological sort (Kahn's), and Dijkstra shortest path for OA readiness.",
          completed: false,
          estimatedHours: 12,
          tag: "High Priority"
        },
        {
          id: "t2-4",
          title: "1D & 2D Dynamic Programming Patterns",
          desc: "Knapsack variants, Longest Increasing Subsequence, and Coin Change bottom-up tabulation.",
          completed: false,
          estimatedHours: 14,
          tag: "High Priority"
        }
      ]
    },
    {
      ...ROADMAP_PHASES[2],
      isPriority: osLevel === "Beginner",
      tasks: [
        {
          id: "t3-1",
          title: "DBMS Indexing, B-Trees & ACID Transactions",
          desc: "Study clustered vs non-clustered indexes, write EXPLAIN ANALYZE queries, and explain isolation anomalies.",
          completed: dbmsLevel === "Advanced",
          estimatedHours: 8,
          tag: "DBMS"
        },
        {
          id: "t3-2",
          title: "Operating Systems: Concurrency, Deadlocks & Virtual Memory",
          desc: "Master process vs thread context switches, mutex locks, condition variables, and paging/TLB.",
          completed: osLevel === "Advanced" || osLevel === "Intermediate",
          estimatedHours: 9,
          tag: "OS"
        },
        {
          id: "t3-3",
          title: "Computer Networks: TCP/IP, Handshakes & HTTP/2-3",
          desc: "Analyze 3-way TCP handshake, TLS encryption, WebSocket bidirectional streams, and DNS lookup flow.",
          completed: false,
          estimatedHours: 6,
          tag: "Networks"
        }
      ]
    },
    {
      ...ROADMAP_PHASES[3],
      isPriority: true,
      tasks: [
        {
          id: "t4-1",
          title: `Build Role-Specific Project for ${targetRole}`,
          desc: "Architect a resilient project featuring database caching, clean API layers, and automated tests.",
          completed: false,
          estimatedHours: 25,
          tag: "Portfolio"
        },
        {
          id: "t4-2",
          title: "Dockerize System & Deploy with CI/CD Pipeline",
          desc: "Write multi-stage Dockerfiles, configure GitHub Actions workflow, and deploy to cloud with health checks.",
          completed: false,
          estimatedHours: 8,
          tag: "DevOps"
        },
        {
          id: "t4-3",
          title: `Calibrate Project Showcase for ${targetCompany}`,
          desc: "Draft a 2-minute elevator pitch and bulleted architecture trade-off doc targeting company rubric.",
          completed: false,
          estimatedHours: 4,
          tag: "Presentation"
        }
      ]
    },
    {
      ...ROADMAP_PHASES[4],
      isPriority: false,
      tasks: [
        {
          id: "t5-1",
          title: `Timed 45-min Live Coding Simulation (${targetCompany} OA bar)`,
          desc: "Solve 2 Medium problems under strict 45-minute countdown without IDE autocomplete.",
          completed: false,
          estimatedHours: 6,
          tag: "Mock OA"
        },
        {
          id: "t5-2",
          title: "System Design Mock: Rate Limiter & URL Shortener",
          desc: "Draft end-to-end components: load balancer, caching layer, database sharding, and latency estimates.",
          completed: false,
          estimatedHours: 8,
          tag: "SysDesign"
        },
        {
          id: "t5-3",
          title: "Behavioral STAR Stories Alignment",
          desc: "Draft and rehearse 5 structured stories covering Conflict, Technical Failure, Ownership, and Ambiguity.",
          completed: false,
          estimatedHours: 4,
          tag: "Behavioral"
        }
      ]
    }
  ];
}
