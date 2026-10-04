# 🗺️ PlaceMap

## AI-Powered Company-Specific Career Preparation Platform

PlaceMap is an AI-powered career preparation platform that guides students toward their dream companies through personalized, structured, step-by-step learning roadmaps.

The core concept is:

```text
Current Skills
      ↓
Dream Company
      ↓
Target Role
      ↓
Skill Gap Analysis
      ↓
Personalized Roadmap
      ↓
Learning + Practice
      ↓
Projects
      ↓
Interview Preparation
      ↓
Placement Readiness
```
---

### 📌 Status

> 🚧 **Prototype / MVP**
>
> PlaceMap is currently an early functional prototype.
> The current version focuses on demonstrating:
>
> - Personalized career profiling
> - Skill-gap analysis
> - Roadmap generation
> - Daily tasks
> - Project recommendations
> - DSA preparation
> - Interview preparation
> - AI Career Guide
> - Progress tracking
>
> Production-grade backend, authentication, advanced AI orchestration, verified company intelligence, and scalable infrastructure will be implemented in later versions.

---


## 🧭 Project Overview

PlaceMap acts as an autonomous **AI-powered career guide** rather than a generic chatbot. 

Instead of offering surface-level answers or generic advice, PlaceMap conducts an in-depth diagnostic analysis of:
* **Student Education**: Degree, major/branch, graduation year, academic performance, and institutional context.
* **Current Skills**: Languages, frameworks, databases, developer tools, and cloud infrastructure.
* **Programming Knowledge**: Practical understanding of core computer science fundamentals, data structures, algorithms, and software architecture.
* **Projects**: Code quality, architectural complexity, deployment status, and engineering rigor of past repositories.
* **Experience**: Internships, open-source contributions, hackathons, and real-world engineering work.
* **Target Company**: The exact company hiring bar and evaluation criteria (e.g., Google, Amazon, Uber, Stripe).
* **Target Role**: Specific job profile and level (e.g., SDE-1, Backend Engineer, Frontend Engineer).

By cross-referencing the student's profile against verified company hiring rubrics, PlaceMap identifies exact skill gaps and synthesizes a personalized, adaptive preparation roadmap.

---

## 🎯 The Core Metaphor: GPS for Career Preparation

PlaceMap is built around an intuitive, high-agency mental model:

| GPS Concept | PlaceMap Career Counterpart |
| :--- | :--- |
| **Current Location** | **Current Skills & Portfolio Baseline** |
| **Destination** | **Dream Company + Specific Target Role** |
| **Route** | **Personalized Dynamic Roadmap** |
| **Turn-by-Turn Navigation** | **AI Career Guide (Autonomous Mentor)** |
| **Traffic / Detour Rerouting** | **Adaptive Calibration (When pace or targets change)** |

---

## ⚠️ Problem

Engineering students face severe structural challenges when preparing for competitive tech placements:

* **Not knowing what skills companies expect**: Hiring standards differ widely across tier-1 tech firms, scaleups, and fintechs, leaving students guessing.
* **Learning random technologies**: Jumping between unrelated frameworks, trendy tools, and fragmented tutorials without a cohesive strategy.
* **Following generic roadmaps**: Using one-size-fits-all roadmaps that treat an applicant for a distributed systems role at Google the same as a frontend developer at a local agency.
* **Not knowing which skills they are missing**: Lacking an objective diagnostic to identify exact blind spots across DSA, System Design, and CS core.
* **Not knowing what projects to build**: Wasting weeks building generic to-do apps or tutorial clones that recruiters dismiss immediately.
* **Difficulty tracking preparation**: Struggling to measure daily progress, velocity, and true readiness against a placement timeline.
* **Difficulty preparing for company-specific interviews**: Not knowing the exact format, question patterns, or behavioral rubrics expected in specific company interview rounds.
* **Not knowing what to do next**: Paralyzed by cognitive overload and lack of actionable, daily prioritized tasks.

---

## 💡 Proposed Solution

PlaceMap provides a company-calibrated, proactive career navigation platform. It systematically connects:

```text
Student Profile
+
Dream Company
+
Target Role
```

to:

```text
Skill Gap
+
Personalized Roadmap
+
Daily Tasks
+
Projects
+
Learning Resources
+
DSA
+
Interview Preparation
+
Progress Tracking
```

By unifying diagnostic evaluation, company benchmark mapping, phased roadmap generation, daily actionable sprints, high-signal project guides, pattern-based DSA tracking, mock interview simulation, and real-time progress indexing, PlaceMap turns unpredictable placement preparation into a deterministic, achievable path.

---

## 🤖 AI Career Guide

The central AI agent of the platform is called the **PlaceMap Career Guide**.

The PlaceMap Career Guide is not an ephemeral chat widget or a generic ChatGPT-style chatbot that passively waits for queries. Instead, it is an autonomous, persistent mentor equipped with memory, analytical tools, and deep context of the student's actual profile and real-time progress.

The agent continuously answers five foundational questions:

```text
1. Where am I?
2. Where do I want to go?
3. What skills am I missing?
4. How do I close those gaps?
5. What should I do next?
```

```text
┌─────────────────────────────────────────────────────────────┐
│                   PlaceMap Career Guide                     │
├─────────────────┬─────────────────────────┬─────────────────┤
│ Context Memory  │    Analytical Tools     │ Proactive Logic │
│ • Past Submissions • Skill Gap Calculator    │ • Daily Check-in│
│ • Target Rubrics│ • Roadmap Generator     │ • Pace Monitor  │
│ • Resume History│ • Code & Project Review │ • Rerouting     │
└─────────────────┴─────────────────────────┴─────────────────┘
```

### Key Capabilities & Behavioral Principles:
* **Grounding in Actual Profile**: Operates exclusively using the candidate's verified skills, past problem attempts, project commits, and target company data—never generic canned responses.
* **Proactive Accountability**: Checks in on daily streaks, detects bottlenecks when tasks stall, and breaks difficult milestones into micro-steps.
* **Context-Aware Feedback**: Remembers prior interview simulation errors, resume iterations, and project architecture decisions.
* **Zero-Hallucination Alignment**: Relies on verified company rubrics, canonical engineering texts, and authentic interview debriefs.
* **Cognitive Load Balancing**: Adapts daily task volume based on the candidate's available weekly hours and academic calendar.

---

## 👤 Student Profile

PlaceMap constructs and maintains a rich, multidimensional candidate profile:

* **Name & Contact Information**: Candidate identity, portfolio link, LinkedIn, GitHub, and professional handles.
* **Student Education**: Degree program, major/branch, graduation year, academic performance/CGPA, and college tier/university context.
* **Current Skills & Programming Knowledge**:
  * *Languages*: Python, Java, C++, TypeScript, Go, etc.
  * *Frameworks & Libraries*: React, Next.js, Node.js, FastAPI, Spring Boot, etc.
  * *Databases & Storage*: PostgreSQL, MySQL, MongoDB, Redis, etc.
  * *Developer Tools & DevOps*: Git, Docker, Kubernetes, Linux, AWS, CI/CD pipelines.
* **Computer Science Fundamentals**: Verified understanding of Operating Systems, DBMS, Computer Networks, Object-Oriented Design, and Concurrency.
* **Verified Proficiency Levels**: Granular categorization per skill:
  * `Beginner`: Understands syntax and basic concepts; requires step-by-step guidance.
  * `Intermediate`: Builds functional modules independently; understands standard libraries and patterns.
  * `Advanced`: Optimizes performance, manages concurrency, handles edge cases, and writes idiomatic code.
  * `Mastery`: Architectures complex systems, reasons through trade-offs, and debugs deep production issues.
* **Projects & Portfolio**: GitHub repositories, commit history, system architecture, live deployment links, and engineering depth.
* **Experience & Internships**: Prior internships, open-source contributions, research projects, freelance work, and hackathons.
* **DSA & Problem-Solving Profile**: LeetCode/Codeforces handles, solved problem counts across difficulty tiers, and pattern coverage.
* **Target Company & Target Role**: Target company selection (Google, Amazon, Uber, Stripe, etc.) and target role (SDE-1, Backend, Frontend, Full Stack).
* **Time Budget & Constraints**: Daily commitment capacity (e.g., 2 hrs/day on weekdays, 5 hrs/day on weekends) and target placement timeline (e.g., 3 months, 6 months, 12 months).

---

## 🏢 Dream Company & Target Role Mapping

Different companies maintain vastly different hiring rubrics and evaluation bars:

| Company Archetype | Example Targets | Primary Evaluation Pillars | Core Expectations |
| :--- | :--- | :--- | :--- |
| **Big Tech / Tier 1** | Google, Meta, Microsoft, Amazon | Algorithmic Problem Solving, Distributed Systems, Clean Code | Rigorous DSA, System Design, High scalability reasoning, Leadership principles |
| **High-Growth Scaleups** | Uber, Stripe, Razorpay, Zepto | High-Speed Execution, Modern Stack Mastery, Low-Level Design | Production-ready APIs, Database optimization, Concurrency, Caching |
| **FinTech & High Frequency** | Tower Research, DE Shaw, Goldman Sachs | Low Latency, Systems Fundamentals, Concurrency, OS / Networks | Memory management, Multithreading, Core CS fundamentals, Quantitative DSA |
| **Specialized Frontend/Fullstack** | Vercel, Figma, Linear | Web Performance, Browser Internals, State Management, UI/UX | Rendering lifecycles, Canvas/WebGL, Micro-frontends, Component architecture |

PlaceMap breaks down each dream company into target role specifications (e.g., *Backend Engineer L3*, *Frontend Engineer I*, *Full Stack SDE*), detailing the interview pipeline round-by-round.

---

## 📊 Skill Gap Analysis Engine

The Skill Gap Analysis Engine compares the student's verified profile against the target company's benchmark:

$$\Delta(\text{Profile}, \text{Target}) = \sum_{c \in \text{Categories}} W_c \cdot \max(0, \text{TargetScore}_c - \text{StudentScore}_c)$$

### Gap Categorization:
1. **Critical Gaps (P0 - Showstoppers)**: Topics required to pass online assessments and initial technical screenings (e.g., missing Graph algorithms for Google, missing concurrency primitives for Uber).
2. **Important Gaps (P1 - Differentiators)**: Capabilities that determine round-2 and round-3 performance (e.g., low-level design patterns, rate limiter architectures, SQL index optimization).
3. **Nice-to-Have Gaps (P2 - Value Adds)**: Knowledge that elevates candidate ranking during hiring committee reviews (e.g., CI/CD pipelines, Kubernetes basics, telemetry instrumentation).

---

## 🗺️ Personalized Dynamic Roadmap

PlaceMap synthesizes the skill gap into a sequential, phase-gated trajectory:

```text
Phase 1: Diagnostic & Core CS Foundations
   │   (OS, Networking, DBMS, Language Idioms)
   ▼
Phase 2: Algorithmic Mastery & Pattern Drill
   │   (14 Core Patterns, Company Frequency Lists, Timed Practice)
   ▼
Phase 3: Company-Calibrated High-Impact Project
   │   (End-to-End Production App, Real Architecture, Cloud Deploy)
   ▼
Phase 4: System Design & Low-Level Architecture
   │   (Scalability, Caching, DB Sharding, Design Patterns)
   ▼
Phase 5: Multi-Round Interview Simulation & Placement Polish
       (Live Technical Mock, ATS Resume Re-write, Behavioral STAR)
```

Each phase contains concrete **Milestones** with strict gating criteria—students only advance once they prove competency via automated quizzes, code submissions, or project reviews.

---

## 📅 Daily Guidance & Task Engine

To avoid overwhelming students with a monolithic syllabus, PlaceMap translates long-term roadmaps into bite-sized daily sprints:

- **Targeted Practice**: 1–2 algorithmic problems matching today's focused pattern.
- **Conceptual Depth**: 1 deep-dive article or chapter (e.g., *Database Isolation Levels under the hood*).
- **Project Progress**: Concrete implementation tasks (e.g., *Implement Redis distributed locks for ticket booking service*).
- **Micro-Review**: A 5-minute flash review of previously learned concepts using spaced repetition.

---

## 🛠️ Project Recommendations: High-Signal Engineering

PlaceMap actively steers students away from trivial tutorial clones. Instead, it generates company-aligned, production-grade project specifications that showcase real architectural depth:

- **For Backend Roles**: Distributed Task Queue with retry logic and dead-letter queues; Real-time rate limiter using Token Bucket and Redis; High-throughput CDC pipeline.
- **For Full-Stack Roles**: Collaborative document editor with CRDTs and WebSockets; Multi-tenant SaaS with fine-grained RBAC and audit logging.
- **For Systems / Infra Roles**: Custom HTTP/1.1 web server in C++ or Rust; Lightweight in-memory key-value store with LSM-tree storage and WAL.

Each recommended project comes with:
- System Architecture Diagram
- API Contract & Database Schema
- Step-by-Step Implementation Sprints
- Resume Bullet Points with quantified metrics and technical keywords

---

## 📚 Curated Learning Resources

PlaceMap filters out noise, recommending only high-signal, canonical learning assets:
- **Canonical Engineering Books**: *Designing Data-Intensive Applications* (Kleppmann), *Operating Systems: Three Easy Pieces*, *Database Internals* (Petrov).
- **Engineering Blogs**: High-scale case studies from Uber Engineering, Netflix TechBlog, Stripe Engineering, Meta Engineering.
- **Interactive Visualizers**: Visualgo, NeetCode pattern breakdowns, Interactive System Design sandboxes.
- **Zero Fluff**: Only vetted, modern resources matching the candidate's exact gaps.

---

## 🧮 Data Structures & Algorithms (DSA) Module

Rather than encouraging random problem grinding, PlaceMap structures DSA around **pattern recognition**:

- **The 14 Fundamental Patterns**: Sliding Window, Two Pointers, Fast & Slow Pointers, Merge Intervals, Cyclic Sort, In-place Reversal of LinkedList, Tree BFS/DFS, Two Heaps, Subsets, Modified Binary Search, Top 'K' Elements, K-way Merge, 0/1 Knapsack & Dynamic Programming, Topological Sort.
- **Company Frequency Weights**: Prioritizes problems actively asked in current hiring cycles by the chosen company.
- **Timed Simulation**: Enforces strict 20-30 minute constraints with automated time/space complexity analysis.

---

## 🎙️ Comprehensive Interview Preparation

PlaceMap prepares candidates for every stage of the hiring pipeline:

1. **Online Assessment (OA) Drills**: Timed tests simulating HackerRank, Codility, and CodeSignal platforms.
2. **Technical Coding Rounds**: Interactive agent-driven mock interviews assessing thought clarity, edge-case analysis, and communication.
3. **System Design (HLD & LLD)**: Whiteboard-style simulations evaluating trade-offs (CAP theorem, caching, consistency models, API design).
4. **Behavioral & Leadership Rounds**: STAR method (Situation, Task, Action, Result) prompt rehearsal aligned with company values (e.g., Amazon Leadership Principles, Google Googlyness).

---

## 📄 Resume & Profile Intelligence

- **ATS Compliance Audit**: Scans resumes against modern Applicant Tracking System parsers for formatting, structural hygiene, and parse accuracy.
- **Company Keyword Alignment**: Verifies that the resume reflects the exact technologies, paradigms, and problem domains valued by the target team.
- **Impact Bullet Rewriter**: Transforms weak passive descriptions into high-impact, quantified engineering bullets:
  - *Before*: "Built an API for user authentication with Node.js."
  - *After*: "Architected stateless JWT/OAuth2 authentication service handling 10k+ daily requests with Redis session invalidation and <40ms response latency."

---

## 📈 Progress Tracking & Placement Readiness Index (PRI)

PlaceMap provides a real-time, quantifiable benchmark of how close a student is to being offer-ready:

$$\text{PRI} = 0.30 \cdot \text{DSA} + 0.25 \cdot \text{Projects} + 0.15 \cdot \text{CoreCS} + 0.20 \cdot \text{SystemDesign} + 0.10 \cdot \text{InterviewRounds}$$

- **Visual Radar Charts**: Displays multidimensional competency distribution.
- **Velocity Metrics**: Tracks completed tasks per week and forecasted completion date.
- **Company Readiness Gauge**: Explicit indicator (e.g., `78% Ready for Amazon SDE-1`) showing remaining blockers.

---

## 🔄 Adaptive Career Recalculation

Just like a GPS recalculates when a driver takes a wrong turn or encounters traffic, PlaceMap recalculates the student's preparation route:

- **Schedule Slippage**: If exams or emergencies pause preparation for two weeks, PlaceMap re-optimizes remaining milestones without sacrificing high-priority topics.
- **Struggling on Concepts**: If a student fails mock evaluations on Dynamic Programming, the system automatically inserts prerequisite conceptual drills and simplified problems before advancing.
- **Target Company Shift**: If the user pivots from Google SDE to Stripe Backend, the engine instantly recalculates the delta, shifting emphasis from pure algorithmic puzzles to distributed systems and API design.

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          Next.js Frontend                              │
│   (Dashboard, Dynamic Roadmap Canvas, AI Guide Drawer, Coding Sandbox) │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / WSS
┌───────────────────────────────────▼────────────────────────────────────┐
│                        FastAPI / Node Backend                          │
│                                                                        │
│   ┌─────────────────────┐  ┌────────────────────┐  ┌────────────────┐ │
│   │ Skill-Gap Engine    │  │ Roadmap Generator  │  │ Daily Task Svc │ │
│   └─────────────────────┘  └────────────────────┘  └────────────────┘ │
│   ┌─────────────────────┐  ┌────────────────────┐  ┌────────────────┐ │
│   │ AI Agent Orchestrator│ │ Interview Simulator│  │ Resume Scorer  │ │
│   └─────────────────────┘  └────────────────────┘  └────────────────┘ │
└──────────────────┬───────────────────┬─────────────────┬───────────────┘
                   │                   │                 │
┌──────────────────▼──────┐  ┌─────────▼────────┐  ┌─────▼───────────────┐
│       PostgreSQL        │  │   Redis Cache    │  │    Vector Store     │
│ (Profiles, Roadmaps,    │  │ (Active sessions,│  │ (Company Rubrics,   │
│  Milestones, Tasks)     │  │  Daily streaks)  │  │  Curated Resources) │
└─────────────────────────┘  └──────────────────┘  └─────────────────────┘
```

---

## 💻 Technology Stack

| Layer | Technologies | Rationale |
| :--- | :--- | :--- |
| **Frontend UI** | Next.js (React), TypeScript, Tailwind CSS, Lucide Icons, Shadcn UI | Modern, accessible, responsive interface with high performance |
| **Backend API** | Python (FastAPI) & Node.js | Fast asynchronous endpoints, robust data validation, and seamless AI tooling |
| **AI / Agent Layer** | LLM Orchestration, LangChain / LlamaIndex, Function Calling | Modular agent tools for roadmap synthesis, gap analysis, and interactive mocks |
| **Data & Storage** | PostgreSQL, Prisma / SQLAlchemy, Redis | Relational data integrity, schema migrations, and fast low-latency caching |
| **Vector Engine** | pgvector / Pinecone | High-dimensional semantic search over company rubrics and learning resources |
| **Deployment / DevOps** | Docker, GitHub Actions, Vercel | Reproducible containerized workflows and automated CI/CD pipelines |

---

## 📂 Project Structure

```text
PlaceMap/
│
├── README.md               # Complete Project Overview & Documentation
├── instructions.md         # Comprehensive Development Specification
├── .gitignore              # Version Control Ignore Rules
├── .env.example            # Environment Configuration Template
│
├── frontend/               # Next.js / React User Interface
│   └── .gitkeep
│
├── backend/                # FastAPI / Node.js Core Services & AI Agents
│   └── .gitkeep
│
├── docs/                   # Architectural Blueprints & API Documentation
│   └── .gitkeep
│
└── assets/                 # Brand Assets, Diagrams, and Static Media
    └── .gitkeep
```

---

## 🎮 "Zero to Hero" Visual Career Road & Progression Engine

PlaceMap transforms career preparation from dry task checklists into an engaging, gamified **Zero-to-Hero progression system** combining the best mechanics of:

* 🗺️ **Google Maps**: Turn-by-turn navigation towards a specific company offer (e.g. Google SDE-1).
* 🍬 **Candy Crush**: Visual winding S-curve road with 16 interconnected levels, locked stages (🔒), active glowing checkpoint (🌟), completed levels (✓), and high-stakes Boss Levels (👑).
* 🦉 **Duolingo**: Daily focused sprints (Learn 30m, Practice 30m, Build 20m, Review 10m), study streaks (🔥 7 Days), and Career XP progression (+XP).
* 💬 **ChatGPT**: Context-grounded AI mentor with real-time streaming, copyable code blocks, Big-O analyses, session history, and universal accessibility.

```text
                           🏢 OFFER SUMMIT (Google SDE)
                                ★
                                │
                           👑 LEVEL 16: FINAL REHEARSAL & MOCKS
                                │
                           ● LEVEL 15: SYSTEM DESIGN AT SCALE
                              ╱
                         ● LEVEL 14: ATS RESUME & PORTFOLIO
                        ╱
                    👑 LEVEL 12: FULL-STACK CAPSTONE PROJECT
                      ╲
                       ● LEVEL 08: ALGORITHMIC MASTERY & GRAPHS
                        ╲
                         ● LEVEL 04: C++ FUNDAMENTALS & OOP
                           │
                         ● LEVEL 01: ZERO CODING FOUNDATIONS
```

### 🗺️ The 4 Journey Zones:
1. **Foundations Valley (Levels 1–4)**: Computational thinking, variables, control flow, functions, memory layout, and OOP without overwhelming jargon.
2. **Algorithmic Peaks (Levels 5–8)**: Arrays, Two Pointers, Sliding Window, Trees, Graphs, and Dynamic Programming.
3. **Engineering Metropolis (Levels 9–12)**: Relational databases (SQL), Operating Systems, Computer Networks, Git workflows, and Full-Stack Boss projects.
4. **Offer Summit (Levels 13–16)**: Low-level & High-level system design, ATS resume verification, behavioral STAR frameworks, and mock interview simulations.

---

## 🚀 Prototype MVP Routes & Features

| Route | Feature Description |
| :--- | :--- |
| `/` | **Landing Page** with hero GPS simulation, mini interactive roadmap preview, and quick auth links. |
| `/signup` & `/login` | **Authentication System** with 1-click immediate demo access as Akash (Google SDE target). |
| `/onboarding` | **Zero-to-Hero 5-Step Wizard**: Zero-knowledge calibration, company selector, and dynamic route calculator. |
| `/company-selection` | **Target Company Benchmarks**: Google, Amazon, Microsoft, NVIDIA, Meta, Infosys, and more. |
| `/role-selection` | **Engineering Profiles**: Software Engineer, Frontend, Backend, Full Stack, AI/ML, DevOps, and Security. |
| `/career-map` | **Visual Candy Crush Career Map**: Interactive winding road, level modals with quizzes, XP rewards, and level completion. |
| `/today` | **Today's Focused Mission**: 4-part sprint (Learn, Practice, Build, Review), focus timers, and weekly streak tracker. |
| `/dashboard` | **Preparation Command Center**: Destination summary, active level checkpoint, daily mission checkboxes, and PRI analytics. |
| `/guide` / `/career-guide` | **ChatGPT-Style AI Career Mentor**: Real-time streaming, code syntax formatting, session management, and starter cards. |
| `/profile` | **Student Diagnostic Profile**: Career XP, current level, streak, and target destination recalibration. |
| `/skill-gap` | **Visual Skill Gap Matrix**: P0 Showstoppers and P1 Differentiators quantified against target rubric. |
| `/roadmap` | **Phased Preparation Roadmap**: Detailed timeline with weekly tasks and milestone milestones. |
| `/tasks` | **Action Sprint Manager**: Filterable daily tasks by phase and priority. |
| `/dsa` | **Pattern-Based DSA Mastery**: 15 algorithmic archetypes with problem tracker. |
| `/projects` | **Company-Calibrated Projects**: Production-grade architectural blueprints and milestones. |
| `/interview` | **Simulated Technical & Behavioral Mocks**: Multi-track interview questions with instant scoring. |
| `/resume` | **ATS Resume Readiness Checker**: Keyword alignment audit and impact rewriter. |
| `/progress` | **Placement Readiness Analytics**: Multi-dimensional radar charts and velocity projections. |
| `/settings` | **Preferences & Pacing**: Study budget, experience recalibration, theme toggle, and factory reset. |

---

## ⚡ Quick Start (Local Prototype)

PlaceMap is built as a lightweight, lightning-fast React + Vite application:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
http://localhost:3000
```

### Production Build Verification:
```bash
npm run build
# Compiles cleanly into dist/ with 0 errors
```

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          React / Vite Frontend                         │
│   (Career Map, Today's Mission, Dashboard, AI Guide Drawer, Sandbox)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Local State & Services
┌───────────────────────────────────▼────────────────────────────────────┐
│                        Frontend Service Layer                          │
│                                                                        │
│   ┌─────────────────────┐  ┌────────────────────┐  ┌────────────────┐ │
│   │ roadmapService.js   │  │   aiService.js     │  │storageService  │ │
│   │ (16-Level Generator)│  │ (Contextual Mentor)│  │ (LocalStorage) │ │
│   └─────────────────────┘  └────────────────────┘  └────────────────┘ │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        Local Storage Persistence                       │
│    (Career Map, Current Level, Career XP, Daily Missions, Streaks)     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 The Product Goal

The ultimate mission of **PlaceMap** is to democratize elite career strategy. We believe that securing a life-changing software engineering role at a world-class company should not depend on privileged insider connections, expensive bootcamps, or months wasted on directionless trial and error. 

By placing a company-calibrated, proactive **AI Career Guide** in every student's hands, PlaceMap levels the playing field—turning ambition into structured preparation, and preparation into career-defining offers.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
