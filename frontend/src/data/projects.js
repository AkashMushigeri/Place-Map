export const PROJECTS_CATALOG = [
  // SDE / Full Stack / Backend Projects
  {
    id: "proj-1",
    title: "Real-Time Distributed Task Queue & Worker System",
    level: "Advanced",
    roleCategory: "software-engineer",
    roles: ["Software Engineer", "Backend Developer", "Full Stack Developer"],
    skills: ["Node.js / Python", "Redis", "PostgreSQL", "Docker", "System Design"],
    shortDesc: "A scalable background job processor handling prioritized async workloads with dead-letter queues and concurrency controls.",
    whyThisProject: "Demonstrates production distributed system patterns (pub/sub, retry mechanisms, idempotency) frequently asked in Tier-1 backend and SDE interviews.",
    architecture: "Client Webhook -> REST API -> Redis Message Broker -> Worker Thread Pool -> PostgreSQL DB & Prometheus Telemetry",
    milestones: [
      { step: 1, title: "System Architecture & API Spec", desc: "Define job payloads, states (queued, active, failed, completed), and OpenAPI schema." },
      { step: 2, title: "Redis Queue & Job Scheduler", desc: "Implement atomic pop/push operations with Redis BullMQ or Celery-style sorted sets." },
      { step: 3, title: "Worker Engine & Concurrency Bounds", desc: "Build worker threads handling timeouts, graceful shutdown, and retry backoff." },
      { step: 4, title: "Dead-Letter Queue & Poison Pill Handling", desc: "Safely isolate recurring crashes and alert administrators via webhooks." },
      { step: 5, title: "Live Dashboard & Analytics", desc: "Build real-time throughput metrics, latency percentile tracking, and job inspect UI." },
      { step: 6, title: "Containerization & Load Testing", desc: "Package with Docker Compose, benchmark to 5,000 tasks/sec with Locust/k6." }
    ]
  },
  {
    id: "proj-2",
    title: "AI-Powered Resume Analyzer & Job Calibrator",
    level: "Intermediate",
    roleCategory: "ai-ml-engineer",
    roles: ["AI/ML Engineer", "Software Engineer", "Data Scientist"],
    skills: ["Python", "NLP", "FastAPI", "React", "Vector DB"],
    shortDesc: "Semantic resume parser extracting ATS keywords, quantifying role fit against job descriptions, and providing personalized skill delta advice.",
    whyThisProject: "Builds practical skills relevant to AI/ML and full-stack roles by marrying NLP vector embeddings with real-world user value.",
    architecture: "PDF Ingestion -> Text Normalization -> SentenceTransformers / OpenAI Embeddings -> Cosine Matcher -> React Dashboard",
    milestones: [
      { step: 1, title: "PDF Parser & OCR Pipeline", desc: "Extract clean unstructured text from diverse resume layouts using PyMuPDF." },
      { step: 2, title: "Skill Extraction & Entity Recognition", desc: "Extract tech stacks, years of experience, and degrees using spaCy / Regex." },
      { step: 3, title: "Vector Embedding & Similarity Matching", desc: "Compute semantic similarity against 100+ standard company role requirements." },
      { step: 4, title: "Actionable Feedback Generator", desc: "Identify missing high-priority keywords, weak action verbs, and quantify match score." },
      { step: 5, title: "Interactive Web Interface", desc: "Build a drag-and-drop React upload interface with live gauge visualizations." },
      { step: 6, title: "Cloud Deployment", desc: "Deploy backend on Render / AWS and frontend on Vercel with CI/CD integration." }
    ]
  },
  {
    id: "proj-3",
    title: "High-Performance URL Shortener & Analytics Gateway",
    level: "Beginner",
    roleCategory: "software-engineer",
    roles: ["Software Engineer", "Backend Developer", "Full Stack Developer"],
    skills: ["Node.js / Express", "MongoDB / PostgreSQL", "Redis", "Docker"],
    shortDesc: "A high-throughput URL shortening service featuring Base62 encoding, sub-millisecond Redis caching, and real-time click analytics.",
    whyThisProject: "Classic systems interview staple demonstrating DB schema indexing, hash algorithms, caching strategies, and REST API design.",
    architecture: "HTTP Client -> Nginx Reverse Proxy -> Node API -> Redis Cache (95% hits) -> PostgreSQL persistent store",
    milestones: [
      { step: 1, title: "Base62 Encoding Algorithm", desc: "Implement mathematical base conversion without collisions or sequential leakage." },
      { step: 2, title: "Relational Database Schema & Indexes", desc: "Index original_url and hash_key with unique constraints for O(1) lookups." },
      { step: 3, title: "Redis Read-Through Caching", desc: "Cache high-traffic redirects to achieve under 5ms redirect latencies." },
      { step: 4, title: "Click Telemetry & Geolocation", desc: "Asynchronously record IP, referrer, timestamp, and device user-agent." },
      { step: 5, title: "Rate Limiting & Abuse Prevention", desc: "Implement sliding window rate limiting to guard against link creation spam." }
    ]
  },
  {
    id: "proj-4",
    title: "Enterprise Multi-Tenant SaaS Workspace with RBAC",
    level: "Capstone",
    roleCategory: "full-stack-developer",
    roles: ["Full Stack Developer", "Software Engineer", "Backend Developer"],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Docker"],
    shortDesc: "Full-featured production SaaS platform with tenant isolation, OAuth authentication, role-based access control, and billing subscription tiers.",
    whyThisProject: "The ultimate portfolio centerpiece proving you can architect production-grade, enterprise-ready software from scratch.",
    architecture: "Next.js/React SPA -> JWT/OAuth -> Microservice API -> Schema-per-tenant Postgres DB -> Stripe Webhooks",
    milestones: [
      { step: 1, title: "Multi-Tenant Architecture Design", desc: "Select and configure tenant isolation strategy (row-level security in PostgreSQL)." },
      { step: 2, title: "Authentication & Role-Based Permissions", desc: "Implement Owner, Admin, Member roles with granular permission checks." },
      { step: 3, title: "Collaborative Document/Kanban Workspace", desc: "Real-time sync and optimistic UI updates for workspace teams." },
      { step: 4, title: "Subscription Billing & Webhooks", desc: "Handle Stripe checkout sessions, upgrades, downgrades, and cancellations." },
      { step: 5, title: "Audit Logging & Security Hardening", desc: "Log all administrative actions, implement CSRF protection, and sanitize inputs." },
      { step: 6, title: "Production CI/CD & Monitoring", desc: "Set up GitHub Actions, automated test suites, and Sentry error monitoring." }
    ]
  },
  {
    id: "proj-5",
    title: "Real-Time Collaborative Code Editor & Runner",
    level: "Advanced",
    roleCategory: "frontend-developer",
    roles: ["Frontend Developer", "Full Stack Developer", "Software Engineer"],
    skills: ["React", "WebSockets", "Monaco Editor", "Docker", "Node.js"],
    shortDesc: "Browser-based multiplayer IDE allowing multiple engineers to write, share cursors, and execute code in sandboxed Docker containers.",
    whyThisProject: "Demonstrates advanced client-side state synchronization (CRDTs/OT), WebSocket communication, and secure sandboxing.",
    architecture: "React Monaco Editor -> Yjs / Socket.io -> Backend Gateway -> Ephemeral Docker Runner Container",
    milestones: [
      { step: 1, title: "Monaco Editor Integration", desc: "Configure syntax highlighting, auto-formatting, and keyboard shortcuts." },
      { step: 2, title: "Operational Transformation / CRDT Sync", desc: "Synchronize keystrokes, remote cursors, and selection highlights in real-time." },
      { step: 3, title: "Dockerized Code Sandbox Runner", desc: "Safely execute Python/JS in isolated, resource-constrained containers." },
      { step: 4, title: "Execution Output Streaming", desc: "Stream stdout and stderr back to the browser via WebSockets with timeout enforcement." },
      { step: 5, title: "Room Management & Session Sharing", desc: "Generate shareable session URLs with passcode protection and read-only mode." }
    ]
  },
  {
    id: "proj-6",
    title: "Predictive Customer Churn Pipeline & Dashboard",
    level: "Intermediate",
    roleCategory: "data-scientist",
    roles: ["Data Scientist", "Data Analyst", "AI/ML Engineer"],
    skills: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "SQL"],
    shortDesc: "End-to-end machine learning pipeline identifying high-risk customer accounts with SHAP explainability and interactive scenario modeling.",
    whyThisProject: "Directly mirrors commercial enterprise data science work by focusing on feature engineering, model explainability, and ROI.",
    architecture: "Data Warehouse SQL -> Pandas ETL Pipeline -> XGBoost / Random Forest -> SHAP Explainer -> Streamlit UI",
    milestones: [
      { step: 1, title: "Exploratory Data Analysis (EDA)", desc: "Identify class imbalances, missing data patterns, and key churn correlations." },
      { step: 2, title: "Feature Engineering & Preprocessing", desc: "Create tenure groups, usage velocity metrics, and encode categorical features." },
      { step: 3, title: "Model Training & Cross-Validation", desc: "Train Logistic Regression, Random Forest, and XGBoost with AUC-ROC optimization." },
      { step: 4, title: "Feature Attribution with SHAP", desc: "Generate individual-level churn explanation waterfalls for account executives." },
      { step: 5, title: "Interactive Business Dashboard", desc: "Build what-if discount simulator showing revenue saved from churn reduction." }
    ]
  }
];

export function getProjectsForRole(roleName, targetLevel = null) {
  if (!roleName) return PROJECTS_CATALOG;
  const filtered = PROJECTS_CATALOG.filter(p => 
    p.roles.some(r => r.toLowerCase().includes(roleName.toLowerCase()) || roleName.toLowerCase().includes(r.toLowerCase()))
  );
  if (filtered.length > 0) return filtered;
  return PROJECTS_CATALOG;
}
