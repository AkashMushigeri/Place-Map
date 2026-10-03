# 🧭 PlaceMap — Master Engineering & Product Development Specification (`instructions.md`)

> **CONFIDENTIAL & AUTHORITATIVE ARCHITECTURAL SPECIFICATION**  
> **Project**: PlaceMap — AI-Powered Company-Specific Career Preparation Platform  
> **Document Role**: Primary Technical & Product Specification (Single Source of Truth)  
> **Version**: 1.0.0-RELEASE  
> **Target Systems**: Frontend (Next.js/TypeScript), Backend (Python/FastAPI & Node.js), Agentic AI Layer

---

## 1. Project Identity

- **Name**: PlaceMap
- **Tagline**: AI-Powered Company-Specific Career Preparation Platform
- **Mission**: Transform career preparation for engineering students from a chaotic guessing game into a deterministic, company-calibrated, and high-agency engineering process.
- **Core Positioning / Metaphor**: **The Career GPS**.
  - **Current Location** = Student's Current Skills, Code Portfolio, and Foundations.
  - **Destination** = Dream Company (e.g., Google, Uber, Stripe) + Target Role (e.g., Backend SDE-1).
  - **Route** = Dynamic, Milestone-Gated, Phased Career Roadmap.
  - **Navigation Engine** = The Autonomous AI Career Guide.
  - **Rerouting Mechanism** = Dynamic Adaptive Recalculation Engine.

---

## 2. Product Principles

1. **Agency Over Passivity**: PlaceMap is not a passive tutorial library or an open-ended chatbot. It is a proactive career operating system that assigns concrete daily work and expects execution.
2. **Company-Specific Rigor**: Every company evaluates candidates differently. Roadmaps and benchmarks must be strictly calibrated to company hiring rubrics, round formats, and engineering bars.
3. **Zero-Fluff Actionability**: No vague advice ("learn databases"). Every recommendation must specify an exact concept, canonical source, implementation task, and acceptance test.
4. **Evidence-Based Mastery**: Advancement through milestones requires verifiable evidence—passing timed quizzes, submitting production code, or passing mock interview rounds.
5. **Adaptive Navigation**: Life happens (exams, sickness, shifting interests). The platform must recalculate routes gracefully without guilt-tripping or dropping high-priority core competencies.

---

## 3. End-to-End User Journey

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                            1. DIAGNOSTIC ONBOARDING                         │
│  Input: Resume, GitHub, LeetCode profile, target time budget, academic year │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      2. TARGET CALIBRATION & SELECTION                      │
│  Select: Dream Company (Tier-1 / Scaleup / FinTech) + Target Engineering Role│
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          3. SKILL GAP QUANTIFICATION                        │
│  Engine outputs: Delta score (P0 Showstoppers, P1 Differentiators, P2 Adds) │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        4. DYNAMIC ROADMAP SYNTHESIS                         │
│  Phases: Core CS → Algorithmic Patterns → High-Impact Projects → Interviews │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          5. DAILY EXECUTION SPRINT                          │
│  Daily tasks: Pattern drill, deep conceptual read, hands-on implementation  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                   6. CONTINUOUS RECALCULATION & FEEDBACK                    │
│  AI Career Guide monitors velocity, tests comprehension, reroutes if needed │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      7. PLACEMENT READINESS & OFFER                         │
│  PRI score reaches threshold (≥85%), ATS resume verified, mocks cleared     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. AI Career Guide Architecture

The **AI Career Guide** is the central autonomous intelligence of PlaceMap. It is designed around the **OODA Loop** (Observe, Orient, Decide, Act).

### 4.1 Agent Cognitive Cycle
1. **Observe**: Ingest user state (completed tasks, quiz scores, mock interview transcripts, code commits, elapsed time).
2. **Orient**: Compare performance against target company benchmarks and timeline constraints.
3. **Decide**: Identify current blockers, calculate priority adjustments, and formulate next actions.
4. **Act**: Issue proactive nudges, adjust upcoming milestone tasks, provide targeted explanations, or trigger interview simulations.

### 4.2 Guide Persona & Communication Rules
- **Tone**: Senior Engineering Manager / Staff Mentor. Crisp, encouraging, technically rigorous, and direct.
- **Rule**: Never answer with generic boilerplate. Always reference the student's current milestone and target company.
- **Proactivity**: Initiate conversations when a streak is at risk, when a student takes unusually long on a module, or when a major milestone is unlocked.

---

## 5. Student Profile Model

The student profile is a rich, typed data structure representing technical, academic, and temporal dimensions:

```typescript
export interface StudentProfile {
  id: string;
  userId: string;
  headline: string;
  academicYear: "1st" | "2nd" | "3rd" | "4th" | "Graduate" | "Career Transition";
  branch: string;
  targetGraduationDate: string; // ISO Date
  availableHoursPerWeek: number;
  
  // External Verification Handles
  githubHandle?: string;
  leetcodeHandle?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  
  // Skill Matrix
  skills: Record<string, SkillAssessment>;
  
  // Target Objectives
  targetCompanyIds: string[];
  primaryTargetRole: string; // e.g. "Backend Engineer L3"
  targetPlacementDate: string; // ISO Date
  
  // Progress State
  placementReadinessIndex: number; // 0 to 100
  currentRoadmapId?: string;
  activeMilestoneId?: string;
}
```

---

## 6. Skill Level Taxonomies

Every skill tracked in PlaceMap must be evaluated against standard four-tier criteria:

| Level | Name | Practical Competency Definition | Verification Criteria |
| :--- | :--- | :--- | :--- |
| **L1** | `Beginner` | Basic syntax, knows standard loops/conditions, requires step-by-step guidance. | Multiple-choice conceptual test / Basic function implementation. |
| **L2** | `Intermediate` | Builds standard features independently, utilizes popular libraries and APIs. | Working CRUD application / Independent Medium LeetCode solution. |
| **L3** | `Advanced` | Optimizes time/space complexities, handles concurrency, profiles and debugs bottlenecks. | Hard algorithmic problems / Production-grade project with tests and caching. |
| **L4** | `Mastery` | Reasons through distributed trade-offs, architectures fault-tolerant systems, leads reviews. | End-to-end System Design mock interview with Staff-level criteria. |

---

## 7. Target Company & Role Profile Engine

Target companies maintain explicit hiring models that PlaceMap codifies into structured JSON schemas.

### 7.1 Company Evaluation Archetypes
1. **Big Tech / Tier 1 (Google, Meta, Amazon)**: Heavy focus on DSA pattern recognition, low-latency Big-O optimization, and scalable distributed system design.
2. **High-Growth Scaleups (Uber, Stripe, Razorpay)**: Strong focus on low-level design (LLD), concurrency, real-world API development, relational database schemas, and clean code principles.
3. **FinTech & Systems (DE Shaw, Tower Research)**: Emphasis on C++/Rust systems fundamentals, memory management, multithreading, and OS/networking depth.

### 7.2 Schema: CompanyTargetProfile
```typescript
export interface CompanyTargetProfile {
  id: string;
  companyName: string;
  roleName: string;
  tier: "Tier1" | "Scaleup" | "Fintech" | "MidTier";
  hiringBarWeights: {
    dsaWeight: number;            // e.g. 0.35
    systemDesignWeight: number;   // e.g. 0.25
    projectsWeight: number;       // e.g. 0.20
    coreCsWeight: number;         // e.g. 0.10
    behavioralWeight: number;     // e.g. 0.10
  };
  rounds: Array<{
    roundNumber: number;
    title: string;
    focusAreas: string[];
    timeMinutes: number;
    eliminationRateEst: number;
  }>;
  requiredSkills: Record<string, "Beginner" | "Intermediate" | "Advanced" | "Mastery">;
}
```

---

## 8. Skill-Gap Engine Specification

The Skill-Gap Engine computes the mathematical delta between the `StudentProfile.skills` and `CompanyTargetProfile.requiredSkills`:

$$\text{SkillGapDelta} = \sum_{s \in \text{Skills}} \max(0, \text{LevelToScore}(\text{Target}_s) - \text{LevelToScore}(\text{Current}_s)) \times \text{CompanyWeight}_s$$

### Gap Prioritization Matrix
- **P0 (Showstoppers)**: Gaps in skills tested in Round 1 Online Assessments (e.g., Graph Algorithms, Core Complexity Analysis). Must be scheduled in Phase 1 & 2.
- **P1 (Core Differentiators)**: Gaps tested in Technical Rounds (e.g., Redis Caching, DB Indexing, LLD Design Patterns). Scheduled in Phase 3 & 4.
- **P2 (Hiring Committee Value-Adds)**: Observability, Docker, CI/CD, and edge optimizations. Scheduled in Phase 5.

---

## 9. Roadmap Generation Algorithm

The roadmap generator executes the following pipeline:
1. **Ingest Inputs**: Current skill matrix, target company rubric, total weeks until placement, weekly study hours.
2. **Topological Sort**: Build a Directed Acyclic Graph (DAG) of prerequisite topics (e.g., Arrays $\rightarrow$ HashMaps $\rightarrow$ Sliding Window $\rightarrow$ Graph Traversals).
3. **Phase Partitioning**:
   - **Phase 1: Diagnostic & Core CS Foundations** (15% of total time)
   - **Phase 2: Algorithmic Patterns & Data Structures** (30% of total time)
   - **Phase 3: Company-Calibrated Portfolio Project** (25% of total time)
   - **Phase 4: Low-Level & High-Level System Design** (15% of total time)
   - **Phase 5: Mock Interviews, ATS Polish & Review** (15% of total time)
4. **Milestone Synthesis**: Chunk each phase into 1-2 week verifiable milestones.

---

## 10. Daily Task Engine

The Daily Task Engine converts active milestones into specific 1-day actionable tasks:
- **Task Types**:
  - `CODE_DRILL`: Solve 1-2 company-tagged pattern problems.
  - `CONCEPT_READ`: 15-minute read on a canonical chapter or engineering blog.
  - `PROJECT_BUILD`: Concrete engineering sprint task (e.g., "Add JWT middleware with rate-limit headers").
  - `REVISION_FLASH`: 5-minute spaced repetition review.
- **Cognitive Load Cap**: Daily tasks must not exceed 120% of the student's calibrated daily hour limit.

---

## 11. Adaptive Learning & Rerouting System

Just like Google Maps recalculates when missing an exit, PlaceMap automatically reroutes the student's preparation plan:

### Rerouting Triggers:
1. **Pace Lag**: Student completes less than 60% of assigned tasks over a 7-day rolling window.
2. **Concept Failure**: Student fails two consecutive assessments on the same topic (e.g., Dynamic Programming).
3. **Objective Shift**: Student changes dream company (e.g., shifting from Amazon to Stripe).

### Recalculation Behavior:
- **Never simply compress deadlines**: Compressing schedules leads to cognitive burnout.
- **Prune P2 value-adds first**: Preserve P0 showstoppers and P1 differentiators.
- **Insert prerequisite bridging micro-modules** when conceptual weaknesses are detected.

---

## 12. Project Recommendation Engine

PlaceMap explicitly forbids trivial tutorial clones (e.g., generic to-do apps, basic weather widgets). All recommended projects must exhibit:

1. **System Realism**: Realistic domain logic, state management, and edge-case handling.
2. **Production Hygiene**: Automated unit/integration tests, CI/CD pipeline, and structured logging.
3. **Scalability Trade-Offs**: Demonstrable caching, indexing, or asynchronous background workers.

### Project Specification Template:
- **Title**: e.g., *Distributed Task Execution Engine with Dead-Letter Queues*
- **Architecture**: Worker pool, Redis pub/sub broker, SQLite/PostgreSQL persistence, REST/gRPC API.
- **Target Company Match**: Uber, Stripe, Razorpay.
- **Resume Impact Bullets**: Formatted with action verbs, exact metrics, and technical keywords.

---

## 13. Learning Resources Curation Engine

PlaceMap prioritizes **high-signal canonical assets**:
- **Canonical Treatises**: *Designing Data-Intensive Applications* (Martin Kleppmann), *Operating Systems: Three Easy Pieces* (Remzi Arpaci-Dusseau), *Database Internals* (Alex Petrov).
- **Primary Source Documentation**: Official documentation (PostgreSQL manuals, MDN Web Docs, Redis architecture guides).
- **Engineering Blogs**: Real-world post-mortems and architecture breakdowns from Netflix, Uber, Stripe, and Discord.

---

## 14. DSA & Problem-Solving Module

Structured around **The 14 Fundamental Algorithmic Patterns**:
1. Two Pointers
2. Fast & Slow Pointers
3. Sliding Window
4. Merge Intervals
5. Cyclic Sort
6. In-place Reversal of a LinkedList
7. Tree Breadth-First Search (BFS)
8. Tree Depth-First Search (DFS)
9. Two Heaps
10. Subsets & Backtracking
11. Modified Binary Search
12. Top 'K' Elements
13. K-way Merge
14. 0/1 Knapsack & Dynamic Programming Patterns

Candidates solve company-weighted problem frequencies with strict time-box constraints and complexity breakdown requirements.

---

## 15. Interview Simulation Agent

The Interview Agent conducts multimodal simulated evaluation rounds:
- **Technical Screen Agent**: Asks algorithmic and data structure questions, challenges edge-case handling, and inspects code syntax.
- **System Design Agent**: Evaluates scalability, capacity estimations, API contracts, database schema, and SPOF (Single Point of Failure) elimination.
- **Behavioral (STAR) Agent**: Conducts structured behavioral reviews using Situation, Task, Action, and Result formats aligned with company leadership principles (e.g., Amazon LP, Google Googlyness).

---

## 16. Resume Analysis & ATS Intelligence

The Resume Engine enforces the **Google XYZ Formula**:
> *"Accomplished [X] as measured by [Y], by doing [Z]."*

- **Parsing Pipeline**: Extracts skills, projects, work experience, and educational credentials.
- **ATS Compliance Checker**: Flags multi-column layouts, inaccessible fonts, missing contact details, and missing tech keywords.
- **Company Alignment Score**: Quantifies overlap between resume tokens and company job descriptions.

---

## 17. Progress System & Placement Readiness Index (PRI)

The platform computes an authoritative real-time readiness index ($0 \le \text{PRI} \le 100$):

$$\text{PRI} = 0.30 \times S_{\text{DSA}} + 0.25 \times S_{\text{Projects}} + 0.15 \times S_{\text{CoreCS}} + 0.20 \times S_{\text{SystemDesign}} + 0.10 \times S_{\text{Mocks}}$$

- **Milestone Gates**: Students cannot transition from Phase 2 to Phase 3 without $\text{PRI}_{\text{DSA}} \ge 70\%$.
- **Readiness Badges**: `Foundation Active`, `Project Builder`, `Interview Qualified`, `Placement Offer Ready`.

---

## 18. AI Agent Tools & Execution Capabilities

The AI Career Guide operates through structured function calling:
- `analyze_skill_gap(student_id: str, target_company_id: str) -> SkillGapReport`
- `generate_roadmap(student_id: str, gap_report_id: str) -> CareerRoadmap`
- `recommend_projects(target_role: str, missing_skills: string[]) -> ProjectSpec[]`
- `recalculate_route(student_id: str, trigger_reason: str) -> RecalculationSummary`
- `evaluate_resume(resume_text: str, target_company_id: str) -> ResumeAuditResult`
- `run_mock_round(session_id: str, user_response: str) -> InterviewFeedback`

---

## 19. Agent Memory & Context Architecture

- **Working Context**: Current conversation buffer, active milestone, today's tasks.
- **Episodic Memory**: History of past mock interviews, common coding errors, and past resume revisions.
- **Semantic Vector Memory**: Embeddings of verified company rubrics, interview debriefs, and canonical resources stored in a vector database.

---

## 20. UI Structure & Information Architecture

- `/onboarding`: Diagnostic assessment, background input, dream company selection.
- `/dashboard`: Primary mission control. PRI meter, active milestone, today's sprint, AI Guide card.
- `/roadmap`: Interactive visual DAG of milestones, completed checkpoints, and upcoming phases.
- `/daily`: Daily task execution view with Pomodoro timer, coding sandbox, and concept reader.
- `/projects`: Recommended high-impact project specs with architectural diagrams and GitHub checklist.
- `/dsa`: 14-pattern problem tracker with company filter and progress stats.
- `/interview`: Interactive mock interview simulator room with audio/text agent.
- `/resume`: ATS audit score, line-by-line impact rewrites, and company keyword matching.
- `/profile`: Verified skill levels, target goals, and external handle sync.

---

## 21. Dashboard Specification

The dashboard must display five primary widgets with zero visual clutter:
1. **Placement Readiness Meter (PRI %)**: Circular radial progress gauge with breakdown radar.
2. **Active Milestone Card**: Current focus area, completion percentage, and days remaining.
3. **Today's Actionable Sprint**: Interactive checklist of daily tasks with direct "Start" actions.
4. **Velocity & Streak Tracker**: Weekly study hours logged, consecutive streak days, and projected readiness date.
5. **AI Guide Proactive Card**: Latest contextual insight or prompt from the AI Career Guide.

---

## 22. AI Guide UI Component

- **Location**: Global expandable floating copilot / docked side drawer accessible from every page.
- **Quick-Action Chips**: Contextual buttons (e.g., *"Explain this concept"*, *"Review my code"*, *"Test me on this milestone"*).
- **Deep-Linking**: AI responses can embed interactive links that highlight specific nodes on the roadmap canvas.

---

## 23. Design Principles & Aesthetic Guidelines

- **Style**: Modern, focused, developer-centric aesthetic (inspired by Linear, Vercel, and GitHub).
- **Color Palette**:
  - Backgrounds: Dark slate/neutral (`#090D16` / `#0F172A`) with high-contrast light mode alternative.
  - Primary Accent: Precision Indigo/Cyan (`#38BDF8` / `#6366F1`).
  - Success/Ready: Emerald (`#10B981`).
  - Warning/Gap: Amber (`#F59E0B`).
- **Typography**: Clean sans-serif for UI (`Inter` / `Geist Sans`), mono for code/metrics (`Geist Mono` / `JetBrains Mono`).

---

## 24. Technical Principles & Engineering Standards

- **Type Safety**: 100% strict TypeScript on frontend; Pydantic models with type hints on Python backend.
- **Clean Architecture**: Strict separation of Controller $\rightarrow$ Service $\rightarrow$ Domain Model $\rightarrow$ Repository.
- **Idempotency**: All roadmap recalculations and task generation operations must be idempotent.
- **Fail-Safe AI Calls**: Every LLM invocation must have structured fallback schemas and retry handling.

---

## 25. Comprehensive Data Models

```typescript
// Career Roadmap Model
export interface CareerRoadmap {
  id: string;
  studentId: string;
  targetCompanyId: string;
  targetRole: string;
  totalDurationWeeks: number;
  currentPhaseIndex: number;
  phases: RoadmapPhase[];
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  order: number;
  milestones: Milestone[];
  isCompleted: boolean;
}

export interface Milestone {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  requiredSkills: string[];
  tasks: DailyTask[];
  gatingCriteria: string;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface DailyTask {
  id: string;
  milestoneId: string;
  title: string;
  taskType: "CODE_DRILL" | "CONCEPT_READ" | "PROJECT_BUILD" | "REVISION_FLASH";
  estimatedMinutes: number;
  resourceLinks: string[];
  isCompleted: boolean;
}
```

---

## 26. Security, Privacy & Data Isolation

- **Zero Credential Leaks**: Never log, store, or commit real API keys or credentials.
- **Sandboxed Execution**: Any user-submitted code must run in an isolated execution sandbox.
- **Student Data Privacy**: Resume data and profile information are private to the candidate and encrypted at rest.

---

## 27. Company Data Rules & Integrity

- **No Hallucinated Bars**: Company hiring rubrics must be verified against current public engineering standards and authentic interview debriefs.
- **Periodic Recalibration**: Update company skill weights every hiring cycle (Q1 & Q3).
- **Role Tiering**: Differentiate clearly between New Grad SDE-1, Intern, and Experienced SDE-2 requirements.

---

## 28. Development Phases

- **Phase 1: Architecture, Specification & Setup** *(Current)*
  - Monorepo structure, documentation, specifications, `.gitignore`, `.env.example`.
- **Phase 2: Core Domain Logic & Skill-Gap Engine**
  - Implement Pydantic/TypeScript domain models, mock company rubrics, gap calculations.
- **Phase 3: AI Career Guide Agent & Roadmap Generator**
  - LLM orchestration, structured function calling, DAG milestone generation.
- **Phase 4: Frontend Dashboard & Student Workspace**
  - Next.js UI, dynamic roadmap visualizer, daily sprint task runner, AI drawer.
- **Phase 5: DSA, Project & Interview Modules**
  - 14-pattern tracker, project specification cards, interactive mock interview room.
- **Phase 6: Testing, Hardening & Deployment**
  - End-to-end integration tests, ATS resume parser validation, containerization.

---

## 29. Antigravity Implementation Rules

Whenever the agent is prompted to add or update features in PlaceMap:
1. **Inspect Specifications First**: Read `instructions.md` and `README.md` to ensure architectural alignment.
2. **Never Break Working Modules**: Incremental, testable commits. Avoid regression.
3. **Preserve Comments & Types**: Maintain complete docstrings, strict type annotations, and descriptive error messages.
4. **No Premature Complexity**: Implement Phase by Phase according to the roadmap.

---

## 30. Mock Data Rules

Seed data must reflect high-fidelity, realistic profiles:
- **Companies**: Google (SWE L3), Amazon (SDE-1), Uber (Backend Engineer), Stripe (Fullstack Engineer).
- **Candidate Personas**:
  - *Persona A*: 3rd-year CS student with basic Python/Java, 50 LeetCode solved, no major distributed projects. Target: Amazon SDE-1 in 6 months.
  - *Persona B*: Self-taught developer transitioning to frontend engineering at Stripe in 4 months.

---

## 31. MVP Priority Matrix

- **P0 (Must-Have for MVP)**:
  - Onboarding diagnostic profile setup.
  - Company target selection (Google, Amazon, Uber, Stripe).
  - Skill-gap calculation and visual delta report.
  - Phased roadmap generator with daily actionable tasks.
  - AI Career Guide conversational mentor with context.
- **P1 (Post-MVP Enhancements)**:
  - 14-pattern interactive DSA tracker.
  - ATS resume scoring and bullet re-writing.
  - Interactive mock interview simulator.
- **P2 (Scale & Community)**:
  - Peer mock interview matching, live placement analytics, enterprise university dashboards.

---

## 32. Quality Standards & Testing Benchmarks

- **Test Coverage**: Minimum 80% coverage on core calculation engines (skill gap, roadmap DAG, PRI formula).
- **UI Responsiveness**: Sub-100ms UI interaction latency; mobile-responsive layout.
- **Accessibility**: Strict compliance with WCAG 2.1 AA standards for colors, labels, and keyboard navigation.

---

## 33. Final Agent Behavior & Operating Protocol

In all future turns of this project:
- Respect the product identity as an **autonomous Career GPS**, never degrade it into a generic chat interface.
- Keep all code modular, clean, and production-ready.
- Before writing code, reference the specific phase and section from this document.
