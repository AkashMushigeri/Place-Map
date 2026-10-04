/**
 * Roadmap Service & Level Generator
 * Creates dynamic, Candy-Crush style level maps from Zero to Hero.
 * Adapts to:
 * - Student level (Complete Beginner, Beginner, Intermediate, Advanced)
 * - Target Company (Google, Amazon, Microsoft, etc.)
 * - Target Role (Software Engineer, Frontend, Backend, etc.)
 * - Known skills & available study time
 */

import { getCompanyById } from "../data/companies";
import { getRoleById } from "../data/roles";

export const LEVEL_DIFFICULTY = {
  BEGINNER: "⭐ Beginner",
  EASY: "⭐⭐ Elementary",
  INTERMEDIATE: "⭐⭐⭐ Intermediate",
  ADVANCED: "⭐⭐⭐⭐ Advanced",
  BOSS: "👑 Boss Challenge",
  SUMMIT: "🏆 Offer Summit"
};

/**
 * Builds an array of 12-16 progressive levels tailored to the student.
 */
export function generateCareerRoadmap(studentProfile) {
  const companyName = studentProfile?.targetCompany || "Google";
  const roleName = studentProfile?.targetRole || "Software Engineer";
  const levelCategory = studentProfile?.experienceLevel || "Complete Beginner";
  const knownSkills = studentProfile?.knownSkills || [];
  const dailyTime = studentProfile?.dailyStudyTime || "1 hour";

  const isCompleteBeginner = levelCategory === "Complete Beginner" || levelCategory === "Level 0";
  const isIntermediateOrAbove = levelCategory === "Intermediate" || levelCategory === "Advanced";

  const company = getCompanyById(companyName);
  const role = getRoleById(roleName);

  // Determine primary language based on role or preferences
  let primaryLang = "Python";
  if (roleName.includes("Frontend")) primaryLang = "JavaScript";
  else if (roleName.includes("C++") || companyName === "NVIDIA") primaryLang = "C++";
  else if (knownSkills.includes("Java")) primaryLang = "Java";
  else if (knownSkills.includes("Python")) primaryLang = "Python";
  else if (knownSkills.includes("C++")) primaryLang = "C++";

  const levels = [];

  // -------------------------------------------------------------
  // ZONE 1: FOUNDATION VALLEY (Levels 1 - 4)
  // -------------------------------------------------------------
  levels.push({
    id: "lvl-1",
    levelNumber: 1,
    zone: "Foundations Valley",
    type: "start",
    title: isCompleteBeginner ? "Your Coding Journey Begins" : "Computational Fundamentals Check",
    shortTitle: "Start: Basics",
    difficulty: LEVEL_DIFFICULTY.BEGINNER,
    estimatedDays: "3 Days",
    estimatedTimeMin: 45,
    xpReward: 250,
    status: isIntermediateOrAbove ? "completed" : "current",
    whyItMatters: "Every great engineer starts by understanding how computers execute instructions. Zero prior experience needed.",
    learnItems: [
      "What is programming and how does code turn into software?",
      "How computers read memory, variables, and instructions",
      `Setting up your first ${primaryLang} coding environment`,
      "Writing and running your first 'Hello, World!' program"
    ],
    missions: [
      { id: "m-1-1", title: "Complete lesson: How computers think", completed: isIntermediateOrAbove },
      { id: "m-1-2", title: `Write your first 3 lines of ${primaryLang}`, completed: isIntermediateOrAbove },
      { id: "m-1-3", title: "Pass Level 1 Concept Checkpoint", completed: isIntermediateOrAbove }
    ],
    checkpoint: {
      question: "In programming, what is a variable used for?",
      options: [
        "To store and reference data in computer memory",
        "To display images on the screen",
        "To turn off the computer",
        "To connect to the internet"
      ],
      correctIndex: 0,
      explanation: "A variable is a labeled container in computer memory that holds data your program can use and change."
    }
  });

  levels.push({
    id: "lvl-2",
    levelNumber: 2,
    zone: "Foundations Valley",
    type: "learning",
    title: `${primaryLang} Building Blocks: Variables & Conditions`,
    shortTitle: "Variables & If/Else",
    difficulty: LEVEL_DIFFICULTY.BEGINNER,
    estimatedDays: "4 Days",
    estimatedTimeMin: 50,
    xpReward: 350,
    status: isIntermediateOrAbove ? "completed" : "locked",
    whyItMatters: `Conditionals allow your code to make intelligent decisions based on user input, crucial for any software.`,
    learnItems: [
      "Data types: Numbers, Strings, and Booleans",
      "Decision making with IF, ELSE IF, and ELSE",
      "Comparison operators (==, !=, <, >) and Boolean logic",
      "User input and formatting output"
    ],
    missions: [
      { id: "m-2-1", title: "Build a simple Temperature Converter", completed: isIntermediateOrAbove },
      { id: "m-2-2", title: "Implement a Pass/Fail Student Grade Evaluator", completed: isIntermediateOrAbove },
      { id: "m-2-3", title: "Solve 3 Beginner Decision Logic Puzzles", completed: isIntermediateOrAbove }
    ],
    checkpoint: {
      question: "Which condition checks if a number 'x' is positive?",
      options: [
        "x > 0",
        "x == 0",
        "x < 0",
        "x != 0"
      ],
      correctIndex: 0,
      explanation: "In all major programming languages, 'x > 0' checks if x is strictly greater than zero."
    }
  });

  levels.push({
    id: "lvl-3",
    levelNumber: 3,
    zone: "Foundations Valley",
    type: "learning",
    title: "Loops & Functions: Automating Repetition",
    shortTitle: "Loops & Functions",
    difficulty: LEVEL_DIFFICULTY.EASY,
    estimatedDays: "5 Days",
    estimatedTimeMin: 60,
    xpReward: 400,
    status: isIntermediateOrAbove ? "completed" : "locked",
    whyItMatters: "Engineers never repeat code manually. Functions and loops provide modularity and immense automation power.",
    learnItems: [
      "Counting with FOR loops and range generators",
      "Event-driven execution with WHILE loops",
      "Defining reusable functions with arguments and return values",
      "Variable scope and common loop pitfalls (infinite loops)"
    ],
    missions: [
      { id: "m-3-1", title: "Write a function that calculates factorial of N", completed: isIntermediateOrAbove },
      { id: "m-3-2", title: "Implement a Multiplication Table Generator loop", completed: isIntermediateOrAbove },
      { id: "m-3-3", title: "Debug and fix an intentional infinite loop", completed: isIntermediateOrAbove }
    ],
    checkpoint: {
      question: "What does the 'return' statement inside a function do?",
      options: [
        "Sends a value back to the caller and exits the function",
        "Restarts the computer program",
        "Prints text to the console",
        "Deletes the variable"
      ],
      correctIndex: 0,
      explanation: "'return' terminates function execution and hands the calculated result back to where the function was called."
    }
  });

  levels.push({
    id: "lvl-4",
    levelNumber: 4,
    zone: "Foundations Valley",
    type: "boss",
    title: "👑 BOSS LEVEL: Coding Foundations Checkpoint",
    shortTitle: "Boss: Foundations",
    difficulty: LEVEL_DIFFICULTY.BOSS,
    estimatedDays: "3 Days",
    estimatedTimeMin: 60,
    xpReward: 750,
    status: isIntermediateOrAbove ? "completed" : "locked",
    whyItMatters: "Prove you can independently synthesize variables, loops, and functions into a working console application.",
    learnItems: [
      "Combining conditionals, loops, and functions",
      "Error handling and edge case validation",
      "Writing clean, self-documenting code"
    ],
    missions: [
      { id: "m-4-1", title: "Build 'Number Guessing Game' with retry limit", completed: isIntermediateOrAbove },
      { id: "m-4-2", title: "Pass timed 15-minute 5-question code quiz", completed: isIntermediateOrAbove },
      { id: "m-4-3", title: "Unlock Foundations Master Badge", completed: isIntermediateOrAbove }
    ],
    checkpoint: {
      question: "Why should code be decomposed into smaller functions?",
      options: [
        "To make code reusable, testable, and easier to debug",
        "To make the computer run slower",
        "Because programming languages force it",
        "To use more memory"
      ],
      correctIndex: 0,
      explanation: "Modular functions improve readability, make testing simple, and prevent code duplication (DRY principle)."
    }
  });

  // -------------------------------------------------------------
  // ZONE 2: ALGORITHMIC PEAKS (Levels 5 - 8)
  // -------------------------------------------------------------
  levels.push({
    id: "lvl-5",
    levelNumber: 5,
    zone: "Algorithmic Peaks",
    type: "learning",
    title: "Data Structures I: Arrays, Lists & Strings",
    shortTitle: "Arrays & Strings",
    difficulty: LEVEL_DIFFICULTY.INTERMEDIATE,
    estimatedDays: "6 Days",
    estimatedTimeMin: 60,
    xpReward: 500,
    status: isIntermediateOrAbove ? "current" : "locked",
    whyItMatters: `${companyName} tests Array and String indexing in over 65% of all preliminary interview coding rounds.`,
    learnItems: [
      "Contiguous memory layout and 0-based indexing",
      "Big-O Time Complexity: O(1) random access vs O(n) search",
      "Two-Pointer Technique (Left & Right inward traversal)",
      "String immutability and character frequency counting"
    ],
    missions: [
      { id: "m-5-1", title: "Solve 'Two Sum' using two-pass technique", completed: false },
      { id: "m-5-2", title: "Solve 'Valid Palindrome' with Two Pointers", completed: false },
      { id: "m-5-3", title: "Reverse words in a sentence without built-in helpers", completed: false }
    ],
    checkpoint: {
      question: "What is the time complexity to access an element by index in an Array?",
      options: [
        "O(1) - Constant time",
        "O(n) - Linear time",
        "O(log n) - Logarithmic time",
        "O(n^2) - Quadratic time"
      ],
      correctIndex: 0,
      explanation: "Arrays occupy contiguous memory, so accessing array[i] takes direct memory offset calculation in O(1) time."
    }
  });

  levels.push({
    id: "lvl-6",
    levelNumber: 6,
    zone: "Algorithmic Peaks",
    type: "learning",
    title: "Data Structures II: HashMaps & HashSets",
    shortTitle: "HashMaps & Sets",
    difficulty: LEVEL_DIFFICULTY.INTERMEDIATE,
    estimatedDays: "5 Days",
    estimatedTimeMin: 60,
    xpReward: 500,
    status: "locked",
    whyItMatters: "Hash tables are the ultimate tool to trade small space for lightning O(1) average lookup speed in interviews.",
    learnItems: [
      "Hash function mechanics, bucket indices, and collisions",
      "O(1) average insertions, lookups, and deletions",
      "Frequency maps for anagrams and duplicate detection",
      "Trade-offs between HashMaps vs sorted TreeMaps"
    ],
    missions: [
      { id: "m-6-1", title: "Solve 'Two Sum' in optimal single-pass O(n) time", completed: false },
      { id: "m-6-2", title: "Solve 'Group Anagrams' with character count keys", completed: false },
      { id: "m-6-3", title: "Implement 'First Unique Character in a String'", completed: false }
    ],
    checkpoint: {
      question: "How does a HashMap achieve O(1) average lookup time?",
      options: [
        "By hashing keys directly into memory array indices",
        "By searching every element from beginning to end",
        "By sorting the list on every insertion",
        "By using multiple threads"
      ],
      correctIndex: 0,
      explanation: "A hash function computes a numerical hash from the key, pointing directly to the array bucket in O(1) time."
    }
  });

  levels.push({
    id: "lvl-7",
    levelNumber: 7,
    zone: "Algorithmic Peaks",
    type: "practice",
    title: "Linear Collections: Linked Lists, Stacks & Queues",
    shortTitle: "Lists, Stacks, Queues",
    difficulty: LEVEL_DIFFICULTY.INTERMEDIATE,
    estimatedDays: "6 Days",
    estimatedTimeMin: 60,
    xpReward: 550,
    status: "locked",
    whyItMatters: "Demonstrates node-pointer manipulation and LIFO/FIFO buffer management tested heavily at Tier-1 companies.",
    learnItems: [
      "Singly and doubly linked lists: node definitions and pointers",
      "LIFO Stacks for parentheses matching and undo buffers",
      "FIFO Queues and circular buffers for job scheduling",
      "Floyd's Cycle-Finding algorithm (Tortoise and Hare)"
    ],
    missions: [
      { id: "m-7-1", title: "Implement 'Reverse a Linked List' iteratively", completed: false },
      { id: "m-7-2", title: "Solve 'Valid Parentheses' with a Stack", completed: false },
      { id: "m-7-3", title: "Detect cycles in a Linked List", completed: false }
    ],
    checkpoint: {
      question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
      options: [
        "Queue",
        "Stack",
        "Binary Tree",
        "Heap"
      ],
      correctIndex: 0,
      explanation: "Queues process items in the order they arrive: first in, first out (FIFO)."
    }
  });

  levels.push({
    id: "lvl-8",
    levelNumber: 8,
    zone: "Algorithmic Peaks",
    type: "boss",
    title: `👑 BOSS LEVEL: ${companyName} Algorithmic Checkpoint`,
    shortTitle: "Boss: Algorithmic OA",
    difficulty: LEVEL_DIFFICULTY.BOSS,
    estimatedDays: "4 Days",
    estimatedTimeMin: 75,
    xpReward: 900,
    status: "locked",
    whyItMatters: `Pass a simulated 45-minute technical screen matching ${companyName}'s Round 1 elimination bar.`,
    learnItems: [
      "Timed problem-solving under stress",
      "Verbalizing Big-O time and space trade-offs",
      "Catching edge cases before running tests"
    ],
    missions: [
      { id: "m-8-1", title: `Solve 2 Medium problems in 45 minutes`, completed: false },
      { id: "m-8-2", title: "Submit zero-bug clean code implementation", completed: false },
      { id: "m-8-3", title: "Unlock Algorithmic Champion Trophy", completed: false }
    ],
    checkpoint: {
      question: "In an interview, what should you do BEFORE writing code?",
      options: [
        "Clarify inputs/outputs, ask edge case questions, and state Big-O",
        "Immediately start typing without speaking",
        "Ask the interviewer for the final answer",
        "Pretend the problem is too easy"
      ],
      correctIndex: 0,
      explanation: "Interviewers evaluate your thought process. Clarifying edge cases and agreeing on complexity first is essential."
    }
  });

  // -------------------------------------------------------------
  // ZONE 3: ENGINEERING METROPOLIS (Levels 9 - 12)
  // -------------------------------------------------------------
  levels.push({
    id: "lvl-9",
    levelNumber: 9,
    zone: "Engineering Metropolis",
    type: "learning",
    title: "Databases & SQL Mastery",
    shortTitle: "SQL & Databases",
    difficulty: LEVEL_DIFFICULTY.INTERMEDIATE,
    estimatedDays: "5 Days",
    estimatedTimeMin: 50,
    xpReward: 550,
    status: "locked",
    whyItMatters: "Every software application persists data. Recruiters test relational design, indexing, and ACID compliance.",
    learnItems: [
      "Relational schema modeling and normalization (1NF - 3NF)",
      "Writing SQL queries: SELECT, GROUP BY, HAVING, and JOINs",
      "B-Tree database indexes and query plan analysis (EXPLAIN)",
      "ACID transactions, locking, and data consistency"
    ],
    missions: [
      { id: "m-9-1", title: "Write multi-table INNER and LEFT JOIN queries", completed: false },
      { id: "m-9-2", title: "Solve 'Second Highest Salary' with DENSE_RANK()", completed: false },
      { id: "m-9-3", title: "Design database schema for an e-commerce order system", completed: false }
    ],
    checkpoint: {
      question: "What does the 'I' in ACID database properties stand for?",
      options: [
        "Isolation - Concurrent transactions do not interfere",
        "Indexing - Tables must have fast lookups",
        "Integration - Works with other databases",
        "Idempotency - Can run multiple times"
      ],
      correctIndex: 0,
      explanation: "Isolation ensures concurrent transactions run independently without seeing uncommitted intermediate states."
    }
  });

  levels.push({
    id: "lvl-10",
    levelNumber: 10,
    zone: "Engineering Metropolis",
    type: "learning",
    title: "Core Computer Science: OS, Memory & Networks",
    shortTitle: "Core CS Systems",
    difficulty: LEVEL_DIFFICULTY.ADVANCED,
    estimatedDays: "6 Days",
    estimatedTimeMin: 60,
    xpReward: 650,
    status: "locked",
    whyItMatters: `${companyName} engineering managers test your understanding of how systems behave under the hood.`,
    learnItems: [
      "Processes vs Threads, CPU context switching and PCB",
      "Virtual memory, paging, cache lines, and TLB hits",
      "TCP 3-way handshake, HTTP/1.1 vs HTTP/2, and DNS lookups",
      "Deadlocks, Mutex locks, and race condition prevention"
    ],
    missions: [
      { id: "m-10-1", title: "Diagram a 3-Way TCP Handshake and TLS connection", completed: false },
      { id: "m-10-2", title: "Explain process memory layout (Stack, Heap, Code, Data)", completed: false },
      { id: "m-10-3", title: "Pass Core CS Systems Diagnostic quiz", completed: false }
    ],
    checkpoint: {
      question: "What is the key difference between a Process and a Thread?",
      options: [
        "Processes have separate memory address spaces; threads share memory",
        "Processes are faster than threads",
        "Threads cannot run at the same time",
        "Processes do not use CPU"
      ],
      correctIndex: 0,
      explanation: "Processes run in isolated address spaces with OS protection; threads of the same process share heap memory."
    }
  });

  levels.push({
    id: "lvl-11",
    levelNumber: 11,
    zone: "Engineering Metropolis",
    type: "learning",
    title: "Git, Version Control & Clean Architecture",
    shortTitle: "Git & Clean Code",
    difficulty: LEVEL_DIFFICULTY.EASY,
    estimatedDays: "4 Days",
    estimatedTimeMin: 45,
    xpReward: 450,
    status: "locked",
    whyItMatters: "Professional software development requires collaborative branching, pull requests, and clean SOLID code.",
    learnItems: [
      "Git commit DAG, branches, rebasing, and merge resolution",
      "Writing modular code following SOLID principles",
      "Unit testing and writing readable code for team reviews",
      "Creating an attractive GitHub profile"
    ],
    missions: [
      { id: "m-11-1", title: "Create a GitHub repository with clean README and branches", completed: false },
      { id: "m-11-2", title: "Resolve an intentional Git merge conflict", completed: false },
      { id: "m-11-3", title: "Write automated unit tests for a core utility", completed: false }
    ],
    checkpoint: {
      question: "What is the primary purpose of Git version control?",
      options: [
        "Tracking changes, collaborating across branches, and safe rollbacks",
        "Hosting websites on the cloud",
        "Compressing image files",
        "Running unit tests automatically"
      ],
      correctIndex: 0,
      explanation: "Git is a distributed version control system that records history, enables branch collaboration, and prevents code loss."
    }
  });

  levels.push({
    id: "lvl-12",
    levelNumber: 12,
    zone: "Engineering Metropolis",
    type: "boss",
    title: `👑 BOSS LEVEL: ${roleName} Portfolio Project`,
    shortTitle: "Boss: Portfolio Project",
    difficulty: LEVEL_DIFFICULTY.BOSS,
    estimatedDays: "7 Days",
    estimatedTimeMin: 90,
    xpReward: 1200,
    status: "locked",
    whyItMatters: `Build a production-calibrated project with caching, APIs, and metrics that impresses ${companyName} recruiters.`,
    learnItems: [
      "End-to-end architecture with database, API, and frontend",
      "Adding Redis caching or asynchronous worker queues",
      "Deploying to cloud with Docker and live URL",
      "Quantifying measurable resume metrics (latency, scale)"
    ],
    missions: [
      { id: "m-12-1", title: `Select and architect your ${roleName} project`, completed: false },
      { id: "m-12-2", title: "Implement core backend/frontend functionality", completed: false },
      { id: "m-12-3", title: "Deploy live with Docker/Cloud and document in README", completed: false }
    ],
    checkpoint: {
      question: "Which project bullet point is strongest on an engineering resume?",
      options: [
        "Architected async Redis worker queue handling 4,000 tasks/sec with sub-15ms latency",
        "Made a website with HTML and CSS",
        "Used Python to do some coding",
        "Worked on backend tasks with team"
      ],
      correctIndex: 0,
      explanation: "Google's XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z]' with real metrics wins recruiter attention."
    }
  });

  // -------------------------------------------------------------
  // ZONE 4: OFFER SUMMIT (Levels 13 - 16)
  // -------------------------------------------------------------
  levels.push({
    id: "lvl-13",
    levelNumber: 13,
    zone: "Offer Summit",
    type: "learning",
    title: "System Design & Scalability Principles",
    shortTitle: "System Design",
    difficulty: LEVEL_DIFFICULTY.ADVANCED,
    estimatedDays: "6 Days",
    estimatedTimeMin: 60,
    xpReward: 700,
    status: "locked",
    whyItMatters: "Differentiates top junior engineers by proving you can reason about scale, bottlenecks, and trade-offs.",
    learnItems: [
      "Vertical vs Horizontal scaling and Load Balancing algorithms",
      "Caching tiers: CDN, Redis, read-through vs write-back",
      "Database Sharding, Replication, and CAP Theorem trade-offs",
      "Designing a URL Shortener or Rate Limiter step-by-step"
    ],
    missions: [
      { id: "m-13-1", title: "Diagram High-Level Design for a URL Shortener", completed: false },
      { id: "m-13-2", title: "Design a Token Bucket API Rate Limiter", completed: false },
      { id: "m-13-3", title: "Calculate QPS, storage, and bandwidth estimates", completed: false }
    ],
    checkpoint: {
      question: "What problem does adding a Redis Cache between web servers and a database solve?",
      options: [
        "Reduces database read load and drastically cuts response latency",
        "Deletes old database records automatically",
        "Encrypts network traffic between users",
        "Replaces the need for web servers"
      ],
      correctIndex: 0,
      explanation: "In-memory caching keeps hot data in RAM, shielding databases from repeated read queries and dropping latency to sub-ms."
    }
  });

  levels.push({
    id: "lvl-14",
    levelNumber: 14,
    zone: "Offer Summit",
    type: "practice",
    title: `ATS Resume & ${companyName} Keyword Calibration`,
    shortTitle: "Resume Alignment",
    difficulty: LEVEL_DIFFICULTY.EASY,
    estimatedDays: "3 Days",
    estimatedTimeMin: 45,
    xpReward: 500,
    status: "locked",
    whyItMatters: `Pass automated applicant tracking systems (ATS) and catch recruiter attention in under 7 seconds.`,
    learnItems: [
      "Formatting resume for 1-page single column ATS compatibility",
      "Eliminating weak buzzwords in favor of active verbs (Architected, Engineered)",
      `Aligning technical keywords to ${companyName}'s target rubric`,
      "Highlighting GitHub, LeetCode, and deployment URLs"
    ],
    missions: [
      { id: "m-14-1", title: "Format resume using PlaceMap ATS guidelines", completed: false },
      { id: "m-14-2", title: "Run PlaceMap Resume Analyzer and score > 80%", completed: false },
      { id: "m-14-3", title: "Add verified metrics to project bullet points", completed: false }
    ],
    checkpoint: {
      question: "What is an ATS (Applicant Tracking System)?",
      options: [
        "Software recruiters use to parse, score, and filter incoming resumes",
        "A coding test platform",
        "A compiler for Python",
        "A video conferencing tool"
      ],
      correctIndex: 0,
      explanation: "ATS scans resume formatting and keywords before a human recruiter ever sees it. Clean formatting is paramount."
    }
  });

  levels.push({
    id: "lvl-15",
    levelNumber: 15,
    zone: "Offer Summit",
    type: "boss",
    title: `👑 BOSS LEVEL: Comprehensive Mock Interview Simulator`,
    shortTitle: "Boss: Mock Rounds",
    difficulty: LEVEL_DIFFICULTY.BOSS,
    estimatedDays: "4 Days",
    estimatedTimeMin: 90,
    xpReward: 1200,
    status: "locked",
    whyItMatters: `Simulate high-pressure technical, project deep dive, and STAR behavioral rounds with PlaceMap AI Mentor.`,
    learnItems: [
      "Live coding while explaining reasoning clearly",
      "Defending past technical mistakes without being defensive",
      "Structuring behavioral responses with STAR (Situation, Task, Action, Result)",
      `Aligning with ${companyName}'s leadership and engineering culture`
    ],
    missions: [
      { id: "m-15-1", title: "Complete Technical Mock Interview round", completed: false },
      { id: "m-15-2", title: "Complete Project Deep Dive Mock round", completed: false },
      { id: "m-15-3", title: "Score >= 8/10 on STAR Behavioral interview", completed: false }
    ],
    checkpoint: {
      question: "In the STAR behavioral interview method, what does 'A' stand for?",
      options: [
        "Action - The specific steps YOU took to resolve the challenge",
        "Answer - Giving a quick response",
        "Agreement - Concurring with the interviewer",
        "Algorithm - The code you wrote"
      ],
      correctIndex: 0,
      explanation: "STAR stands for Situation, Task, Action, Result. 'Action' highlights your agency and leadership."
    }
  });

  levels.push({
    id: "lvl-16",
    levelNumber: 16,
    zone: "Offer Summit",
    type: "final",
    title: `🏢 FINAL DESTINATION: ${companyName} Placement Ready!`,
    shortTitle: `Goal: ${companyName}`,
    difficulty: LEVEL_DIFFICULTY.SUMMIT,
    estimatedDays: "Continuous",
    estimatedTimeMin: 120,
    xpReward: 2000,
    status: "locked",
    whyItMatters: `You have completed the Zero-to-Hero preparation journey. You are ready to apply and interview with confidence.`,
    learnItems: [
      `Reviewing ${companyName} specific interview tips and round patterns`,
      "Cold outreach, employee referrals, and application timing",
      "Final review of top 50 LeetCode patterns",
      "Celebrating your complete transformation from beginner to hireable engineer"
    ],
    missions: [
      { id: "m-16-1", title: `Review final ${companyName} preparation dossier`, completed: false },
      { id: "m-16-2", title: "Request or generate placement verification badge", completed: false },
      { id: "m-16-3", title: "Submit application to target company role", completed: false }
    ],
    checkpoint: {
      question: "What is the single most effective way to guarantee an interview callback?",
      options: [
        "Direct employee referral backed by a solid portfolio and LeetCode proof",
        "Mass-applying to 500 jobs with an generic resume",
        "Waiting for recruiters to message you randomly",
        "Writing letters to the CEO"
      ],
      correctIndex: 0,
      explanation: "An internal employee referral paired with verified projects and algorithmic readiness has a 10x higher interview rate."
    }
  });

  return {
    company: companyName,
    role: roleName,
    experienceLevel: levelCategory,
    dailyTime,
    levels,
    totalXp: levels.reduce((acc, l) => acc + l.xpReward, 0),
    totalDays: "12-14 Weeks (Adaptive)",
    currentLevelNumber: isIntermediateOrAbove ? 5 : 1
  };
}

/**
 * Recalculates the active state across levels when a user completes a level.
 */
export function markLevelCompleted(levels, completedLevelNumber) {
  return levels.map(level => {
    if (level.levelNumber === completedLevelNumber) {
      return {
        ...level,
        status: "completed",
        missions: level.missions.map(m => ({ ...m, completed: true }))
      };
    } else if (level.levelNumber === completedLevelNumber + 1) {
      return {
        ...level,
        status: "current"
      };
    }
    return level;
  });
}
