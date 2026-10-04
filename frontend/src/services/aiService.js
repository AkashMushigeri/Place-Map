import { getCompanyById } from "../data/companies";
import { getRoleById } from "../data/roles";
import { LEVEL_SCORES } from "../data/skills";
import { buildPersonalizedRoadmap } from "../data/roadmaps";
import { getProjectsForRole } from "../data/projects";

/**
 * AI Service Abstraction Layer
 * Provides personalized career intelligence, gap calculation,
 * roadmap generation, and mock interview evaluation.
 */

export const aiService = {
  /**
   * Calculates mathematical and conceptual skill gap between current skills and target company/role rubric.
   */
  analyzeSkillGap(studentSkills = {}, companyName = "Google", roleName = "Software Engineer") {
    const company = getCompanyById(companyName);
    const role = getRoleById(roleName);

    // Merge company and role expectations
    const requiredSkillsMap = {
      ...role.targetSkillRequirements,
      ...company.requiredSkillLevels
    };

    const gaps = [];
    let totalTargetScore = 0;
    let totalCurrentScore = 0;

    Object.entries(requiredSkillsMap).forEach(([skillName, targetLevel]) => {
      // Find matching user skill
      let currentLevel = "Beginner";
      const userSkillKey = Object.keys(studentSkills).find(
        k => k.toLowerCase() === skillName.toLowerCase() || skillName.toLowerCase().includes(k.toLowerCase())
      );

      if (userSkillKey && studentSkills[userSkillKey]) {
        currentLevel = studentSkills[userSkillKey];
      }

      const targetScore = LEVEL_SCORES[targetLevel] || 66;
      const currentScore = LEVEL_SCORES[currentLevel] || 33;
      const delta = targetScore - currentScore;

      totalTargetScore += targetScore;
      totalCurrentScore += Math.min(currentScore, targetScore);

      // Determine Priority
      let priority = "Low Priority (P2)";
      let priorityBadge = "low";
      if (delta >= 60 || skillName.includes("DSA") || skillName.includes("Algorithms")) {
        priority = "High Priority (P0)";
        priorityBadge = "high";
      } else if (delta > 0) {
        priority = "Medium Priority (P1)";
        priorityBadge = "medium";
      }

      // Contextual why it matters
      let whyItMatters = `Required for ${company.name}'s technical assessment rounds and core code quality bar.`;
      let whatToLearn = `Master intermediate problem solving, time complexity optimization, and clean implementation.`;
      let practice = `Solve 10-15 pattern-focused problems and implement real-world mini exercises.`;

      if (skillName.includes("DSA") || skillName.includes("Algorithms")) {
        whyItMatters = `${company.name} weights algorithmic problem solving heavily (${Math.round((company.hiringBarWeights?.dsa || 0.35) * 100)}% of total evaluation). Eliminates >60% of applicants in Round 1 OA.`;
        whatToLearn = "Focus on Two Pointers, Sliding Window, Tree DFS/BFS, and Graph Cycle detection.";
        practice = "NeetCode 150 Core pattern problems with 35-minute time constraints.";
      } else if (skillName.includes("System Design")) {
        whyItMatters = `Evaluated in later technical rounds to test how you reason about scale, caching, and trade-offs.`;
        whatToLearn = "Load balancers, horizontal vs vertical scaling, Redis caching strategies, and database sharding.";
        practice = "Design a URL shortener, rate limiter, and real-time chat architecture.";
      } else if (skillName.includes("Database") || skillName.includes("SQL")) {
        whyItMatters = `Critical for engineering roles to design reliable data schemas and prevent query bottlenecks.`;
        whatToLearn = "B-tree indexing, query optimization, ACID transactions, and JOIN complexities.";
        practice = "Write complex GROUP BY with HAVING queries, and analyze execution plans via EXPLAIN.";
      }

      gaps.push({
        skill: skillName,
        currentLevel,
        targetLevel,
        currentScore,
        targetScore,
        delta: Math.max(0, delta),
        priority,
        priorityBadge,
        whyItMatters,
        whatToLearn,
        practice
      });
    });

    // Sort: P0 first, then P1, then P2
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    gaps.sort((a, b) => {
      const pDiff = priorityWeight[b.priorityBadge] - priorityWeight[a.priorityBadge];
      if (pDiff !== 0) return pDiff;
      return b.delta - a.delta;
    });

    const matchPercentage = totalTargetScore > 0 ? Math.round((totalCurrentScore / totalTargetScore) * 100) : 60;

    return {
      company,
      role,
      gaps,
      matchPercentage,
      topGap: gaps.find(g => g.delta > 0) || gaps[0],
      highPriorityCount: gaps.filter(g => g.priorityBadge === "high").length
    };
  },

  /**
   * Generates dynamic roadmap adapting to the student's background.
   */
  generateRoadmap(studentProfile) {
    return buildPersonalizedRoadmap(studentProfile);
  },

  /**
   * Generates concrete daily tasks based on top skill gaps and active roadmap phase.
   */
  generateDailyTasks(studentProfile, gaps = []) {
    const targetCompany = studentProfile?.targetCompany || "Google";
    const targetRole = studentProfile?.targetRole || "Software Engineer";
    const topGapSkill = gaps[0]?.skill || "Data Structures & Algorithms";

    return [
      {
        id: "daily-1",
        title: `Solve 2 ${topGapSkill} pattern problems on Arrays / Pointers`,
        phase: "Phase 2 - Algorithms",
        estimatedMinutes: 45,
        priority: "High",
        completed: false,
        source: "AI Personalized Recommendation",
        targetCompany
      },
      {
        id: "daily-2",
        title: "Study Two-Pointer & Sliding Window boundary cases",
        phase: "Phase 2 - Algorithms",
        estimatedMinutes: 30,
        priority: "High",
        completed: false,
        source: "AI Skill Gap Drill",
        targetCompany
      },
      {
        id: "daily-3",
        title: `Review Database Indexing & B-Trees for ${targetCompany} Core CS round`,
        phase: "Phase 3 - Core CS",
        estimatedMinutes: 35,
        priority: "Medium",
        completed: false,
        source: "Company Benchmark",
        targetCompany
      },
      {
        id: "daily-4",
        title: `Implement 1 mini-milestone on your ${targetRole} portfolio project`,
        phase: "Phase 4 - Projects",
        estimatedMinutes: 60,
        priority: "Medium",
        completed: false,
        source: "Portfolio Milestone",
        targetCompany
      },
      {
        id: "daily-5",
        title: "Practice 1 STAR behavioral answer (Conflict or Failure)",
        phase: "Phase 5 - Interview Prep",
        estimatedMinutes: 20,
        priority: "Low",
        completed: false,
        source: "Behavioral Readiness",
        targetCompany
      }
    ];
  },

  /**
   * Recommends projects targeted to the chosen role and company tier.
   */
  recommendProjects(targetRole, currentSkills) {
    return getProjectsForRole(targetRole);
  },

  /**
   * Context-Aware Career Guide AI logic (ChatGPT Quality).
   * Generates rich markdown formatted responses with code blocks, structured advice, and actions.
   */
  answerCareerQuestion(userMessage, studentProfile, chatHistory = []) {
    const name = studentProfile?.name || "Akash";
    const company = studentProfile?.targetCompany || "Google";
    const role = studentProfile?.targetRole || "Software Engineer";
    const skills = studentProfile?.skills || {};
    const dsaLevel = skills["dsa"] || skills["Data Structures & Algorithms"] || "Beginner";
    const pyLevel = skills["python"] || skills["Python"] || "Intermediate";

    const msg = userMessage.toLowerCase().trim();

    // 1. "What should I learn today?" / "what should i do next?"
    if (msg.includes("today") || msg.includes("next") || msg.includes("what should i learn") || msg.includes("sprint")) {
      return {
        reply: `### 🎯 High-Impact Daily Sprint for **${company} (${role})**

Hi ${name}! Analyzing your current trajectory: you are currently at **${studentProfile?.streakDays || 4}-day streak**. Because ${company} filters heavily on Round 1 Online Assessments, here is your prioritized action sprint for today:

#### 1. 🚨 P0 Showstopper Drill: Two Pointers & Sliding Window (45 mins)
${company} frequently uses variations of **Container With Most Water** or **Minimum Window Substring**. 

Here is the canonical $O(n)$ two-pointer template to keep in mind:

\`\`\`python
def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    """
    Two-Pointer pattern reducing O(n^2) brute force to O(n) linear time.
    Requires: nums is sorted in ascending order.
    """
    left, right = 0, len(nums) - 1
    
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1 # Need smaller sum
            
    return [] # No solution found
\`\`\`

#### 2. ⚡ Core Concept: Hash Collision Resistance (20 mins)
Review why Python \`dict\` or Java \`HashMap\` averages $O(1)$ amortized lookups, but can degrade to $O(n)$ or $O(\\log n)$ under heavy hash collisions.

#### 3. 🛠️ Portfolio Milestone (30 mins)
Add Redis caching or structured database indexing to your active portfolio project to prepare for your system architecture interview.

> **Next Action**: Check off your 3 daily tasks on the **[Today's Tasks](/tasks)** board to advance your placement velocity!`,
        suggestedActions: [
          "Explain Two Pointers in depth",
          "Test me on Two Pointers",
          "Why is DSA my biggest gap?",
          "Recommend a project"
        ]
      };
    }

    // 2. "Why is DSA my biggest gap?"
    if (msg.includes("why is dsa") || msg.includes("biggest gap") || msg.includes("gap") || msg.includes("why dsa")) {
      return {
        reply: `### 📊 Diagnostic Analysis: Why DSA is Your #1 Blocker

At top engineering firms like **${company}**, hiring evaluation isn't evenly weighted across all topics. Here is the mathematical reality:

| Evaluation Area | Weight at ${company} | Your Current Status |
| :--- | :--- | :--- |
| **Data Structures & Algorithms** | **40% (Eliminates ~70% in OA)** | **${dsaLevel}** ⚠️ |
| **System Design & LLD** | 25% | Intermediate |
| **Core CS (OS/DBMS/Networks)** | 15% | Intermediate |
| **Projects & Portfolio** | 10% | Solid |
| **Behavioral & Culture** | 10% | On Track |

#### 🔑 The Core Problem
You have marked your DSA baseline as **${dsaLevel}**. ${company}'s hiring bar expects **Advanced** proficiency:
- Solving 2 LeetCode Medium problems in under **40 minutes**.
- Stating Big-O space and time complexities immediately before writing code.
- Hand-tracing boundary edge cases (empty inputs, single nodes, overflow).

#### 🚀 How We Close This Gap in 3 Weeks:
Don't solve 500 random problems. Focus exclusively on the **14 Core Archetype Patterns**:
1. Two Pointers & Sliding Window (Linear array reductions)
2. Fast & Slow Pointers (Cycle detection in graphs/lists)
3. Monotonic Stack (Next Greater Element, Daily Temperatures)
4. Tree DFS/BFS (Level order, Lowest Common Ancestor)
5. Topological Sort & Graph BFS (Dependency cycles)

Head to our **[DSA Module](/dsa)** to start with the Arrays & Strings cluster today!`,
        suggestedActions: [
          "Open DSA Module",
          "Give me an Easy DSA problem",
          "What should I learn today?",
          "How to prepare for Google OA?"
        ]
      };
    }

    // 3. "Recommend a project" / "project ideas"
    if (msg.includes("project") || msg.includes("recommend a project") || msg.includes("build") || msg.includes("portfolio")) {
      return {
        reply: `### 🚀 Production-Calibrated Project Blueprint for **${role}**

For engineering positions at **${company}**, interviewers reject generic to-do apps, weather widgets, and clone sites. They want to see **concurrency, asynchronous queues, resilience, and metrics**.

I recommend: **"Distributed Real-Time Task Queue & Worker Engine"**

#### 🏗️ Architecture Blueprint
\`\`\`text
[ Client Request ]
       │ (HTTP Webhook / REST)
       ▼
[ API Gateway / Ingestion Service ]
       │
       ▼ (Atomic LPUSH / Redis Streams)
[ Redis BullMQ / Message Broker ]
       │
       ├─► [ Worker Node 1 ] ──► (DB Commit + Telemetry)
       ├─► [ Worker Node 2 ] ──► (Exponential Backoff Retry)
       └─► [ Dead-Letter Queue ] ──► (Alert Webhook)
\`\`\`

#### 🏆 Why This Wins ${company} Interviews
- **Handles Failure**: Demonstrates exponential backoff and dead-letter queues for poison-pill tasks.
- **Concurrency Bounds**: Shows you understand worker thread limits and resource exhaustion.
- **Measurable Metrics**: You can state in your resume: *"Handled 4,500 async jobs/second with sub-10ms dequeue latency."*

> Check out the complete 6-step milestone plan in our **[Projects Section](/projects)**!`,
        suggestedActions: [
          "View Recommended Projects",
          "How do I describe this on my resume?",
          "What should I learn today?"
        ]
      };
    }

    // 4. "Test me on SQL" / "Quiz me"
    if (msg.includes("sql") || msg.includes("test me") || msg.includes("quiz") || msg.includes("query")) {
      return {
        reply: `### 🧠 Technical Drill: SQL Window Functions & Aggregation

Here is a question frequently tested in **${company}** and Tier-1 engineering rounds:

> **Scenario**: You have an \`Employee\` table:
> \`\`\`sql
> CREATE TABLE Employee (
>     id INT PRIMARY KEY,
>     name VARCHAR(100),
>     salary INT,
>     department_id INT
> );
> \`\`\`
> **Task**: Write a SQL query to find the employee(s) who earn the **2nd highest salary** in each department. If a department only has 1 employee, return nothing for that department.

#### 💡 The Optimal Solution using \`DENSE_RANK()\`:

\`\`\`sql
WITH RankedSalaries AS (
    SELECT 
        id,
        name,
        salary,
        department_id,
        DENSE_RANK() OVER (
            PARTITION BY department_id 
            ORDER BY salary DESC
        ) AS rank_num
    FROM Employee
)
SELECT department_id, name, salary
FROM RankedSalaries
WHERE rank_num = 2;
\`\`\`

#### 🔍 Why Interviewers Love This:
- \`DENSE_RANK()\` handles ties gracefully (e.g. if two employees tie for 1st place with \\$150k, the next salary receives rank 2).
- \`ROW_NUMBER()\` would fail on salary ties.
- Subquery joins without window functions perform poorly on large datasets ($O(n^2)$ vs $O(n \\log n)$).`,
        suggestedActions: [
          "Explain DENSE_RANK vs RANK",
          "Give me another SQL question",
          "Start Mock Interview",
          "What should I learn today?"
        ]
      };
    }

    // 5. "Start mock interview"
    if (msg.includes("interview") || msg.includes("mock") || msg.includes("simulation")) {
      return {
        reply: `### 🎙️ Ready for Your Mock Interview Simulation, ${name}?

Interview mastery requires high-pressure practice. We have prepared 5 tailored tracks calibrated specifically to **${company}'s hiring rubric**:

1. **💻 Technical Round**: Algorithmic problem solving, Big-O trade-offs, and boundary conditions.
2. **🏗️ Project Deep Dive**: Defending past architectural decisions, concurrency, and bottlenecks.
3. **🖥️ Core CS Fundamentals**: OS context switching, virtual memory, DBMS ACID transactions, TCP handshakes.
4. **🤝 Behavioral (STAR)**: Handling technical conflict, ownership failures, and ambiguous requirements.
5. **🛡️ Role-Specific Design**: Scalable APIs, caching layers, and database sharding.

Head directly to the **[Interview Simulator](/interview)** to start an interactive session with real-time scoring and follow-ups!`,
        suggestedActions: [
          "Open Interview Simulator",
          "Give me a sample behavioral question",
          "What is the STAR method?",
          "What should I learn today?"
        ]
      };
    }

    // 6. Dynamic response for specific questions
    return {
      reply: `### 🧭 PlaceMap Staff Mentor Advice for **${role} @ ${company}**

Regarding your query:
> *"${userMessage}"*

Here is how you should think about this as an aspiring **${role}** at **${company}**:

#### 1. Strategic Relevance
Every hour of study should directly reduce your delta score toward the ${company} hiring bar. Right now, your priority is closing your **P0 Showstopper gap in ${skillGapAnalysis.topGap?.skill || "DSA"}**.

#### 2. Actionable Rule of Thumb
- **Code with Intent**: Always write test cases and state the time and space complexity before implementing.
- **Don't Memorize**: Understand the pattern archetype (e.g., when you see a sorted array and target sum, immediately consider **Two Pointers**).
- **Tie Code to Business Impact**: In interviews, frame your portfolio projects around latency, scale, and uptime.

What specific concept or question would you like to drill into next?`,
      suggestedActions: [
        "What should I learn today?",
        "Why is DSA my biggest gap?",
        "Recommend a project",
        "Test me on SQL",
        "Start mock interview"
      ]
    };
  },

  /**
   * ChatGPT-style streaming response simulation.
   * Delivers chunks word-by-word with realistic token delays and abort capability.
   */
  streamCareerAnswer(userMessage, studentProfile, onChunk, onComplete, signal) {
    const response = this.answerCareerQuestion(userMessage, studentProfile);
    const fullText = response.reply;
    const words = fullText.split(" ");
    let currentIndex = 0;
    let accumulatedText = "";

    const interval = setInterval(() => {
      if (signal && signal.aborted) {
        clearInterval(interval);
        if (onComplete) onComplete(accumulatedText, response.suggestedActions);
        return;
      }

      if (currentIndex < words.length) {
        const nextWord = words[currentIndex] + (currentIndex === words.length - 1 ? "" : " ");
        accumulatedText += nextWord;
        currentIndex++;
        if (onChunk) onChunk(accumulatedText);
      } else {
        clearInterval(interval);
        if (onComplete) onComplete(accumulatedText, response.suggestedActions);
      }
    }, 28); // ~35 words per second, matching ChatGPT speed

    return () => clearInterval(interval);
  },

  /**
   * Evaluates a candidate's mock interview answer against rubric criteria.
   */
  evaluateInterviewAnswer(questionObj, userAnswer, role = "Software Engineer", company = "Google") {
    const text = (userAnswer || "").trim();
    const wordCount = text.split(/\s+/).length;

    let score = 7;
    const strengths = [];
    const improvements = [];

    if (wordCount < 15) {
      score = 4;
      strengths.push("Direct answer to the prompt");
      improvements.push("Answer is too brief. In a real technical interview, state your assumptions, trade-offs, and reasoning step-by-step.");
      improvements.push("Mention time and space complexities explicitly.");
    } else {
      // Check keywords
      const matchedKeywords = (questionObj?.expectedKeywords || []).filter(kw =>
        text.toLowerCase().includes(kw.toLowerCase())
      );

      if (matchedKeywords.length >= 2) {
        score = Math.min(10, 7 + matchedKeywords.length);
        strengths.push(`Strong technical vocabulary: incorporated '${matchedKeywords.join("', '")}'`);
      } else {
        improvements.push(`Try incorporating key domain concepts such as: ${questionObj?.expectedKeywords?.slice(0, 3).join(", ")}`);
      }

      strengths.push(...(questionObj?.sampleGoodPoints?.slice(0, 2) || ["Clear structured explanation", "Demonstrated solid technical understanding"]));
      improvements.push(...(questionObj?.sampleMissingPoints?.slice(0, 1) || ["Elaborate on edge cases and failure modes"]));
    }

    const followUp = `Follow-up question for ${company}: If the scale increased by 100x or memory was constrained to 64MB, how would your approach adapt?`;

    return {
      score: Math.min(10, Math.max(3, score)),
      strengths,
      improvements,
      followUp,
      verdict: score >= 8 ? "Pass / Strong Hire" : score >= 6 ? "Lean Hire / Needs Polish" : "Needs Further Practice"
    };
  },

  /**
   * Analyzes resume text against company and role requirements.
   */
  analyzeResume(resumeText, targetCompany = "Google", targetRole = "Software Engineer") {
    const text = (resumeText || "").toLowerCase();
    
    // Keyword checks
    const techKeywords = ["python", "java", "javascript", "react", "node", "sql", "docker", "aws", "git", "c++", "redis", "nosql"];
    const metricKeywords = ["%", "reduced", "improved", "optimized", "increased", "ms", "users", "scale", "throughput", "latency"];
    const dsaKeywords = ["algorithms", "data structures", "leetcode", "complexity", "optimization"];

    const matchedTech = techKeywords.filter(k => text.includes(k));
    const hasMetrics = metricKeywords.filter(k => text.includes(k));
    const hasDsa = dsaKeywords.filter(k => text.includes(k));

    const techScore = Math.min(95, Math.max(45, 50 + matchedTech.length * 6));
    const projectScore = Math.min(95, Math.max(40, 45 + hasMetrics.length * 8));
    const roleRelevance = Math.min(95, Math.max(50, 60 + (text.includes("engineer") || text.includes("developer") ? 15 : 0)));
    const completeness = Math.min(95, Math.max(50, text.length > 300 ? 85 : 55));

    const overallScore = Math.round((techScore + projectScore + roleRelevance + completeness) / 4);

    const suggestions = [];
    if (hasMetrics.length < 2) {
      suggestions.push("Add quantifiable metrics to bullet points (e.g., 'Reduced query latency by 42%', 'Handled 5,000 daily active requests').");
    }
    if (hasDsa.length === 0) {
      suggestions.push(`Highlight algorithmic problem-solving or competitive programming profiles (LeetCode / Codeforces) for ${targetCompany}.`);
    }
    if (!text.includes("docker") && !text.includes("ci/cd") && !text.includes("cloud")) {
      suggestions.push("Add modern deployment keywords: Docker, CI/CD pipelines, or Cloud deployment (AWS/GCP/Vercel).");
    }
    suggestions.push(`Calibrate your summary to explicitly target ${targetRole} positions at top engineering organizations.`);

    return {
      overallScore,
      scores: {
        technicalSkills: techScore,
        projectStrength: projectScore,
        roleRelevance,
        profileCompleteness: completeness
      },
      matchedKeywords: matchedTech,
      missingKeywords: ["Distributed Systems", "Unit Testing", "CI/CD", "Redis Caching", "Prometheus Metrics"].filter(k => !text.includes(k.toLowerCase())),
      suggestions
    };
  }
};
