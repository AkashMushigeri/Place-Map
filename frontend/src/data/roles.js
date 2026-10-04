export const ROLES = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    shortTitle: "SDE / SWE",
    description: "Builds scalable applications, solves algorithmic challenges, designs resilient systems, and collaborates across the software lifecycle.",
    targetSkillRequirements: {
      "Data Structures & Algorithms": "Advanced",
      "Object-Oriented Design": "Advanced",
      "Database Systems": "Intermediate",
      "Operating Systems": "Intermediate",
      "Computer Networks": "Intermediate",
      "System Design": "Intermediate",
      "Python": "Intermediate",
      "Git & Version Control": "Intermediate"
    },
    primaryFocus: "Algorithmic Problem Solving, Clean Code, System Architecture",
    icon: "Code2"
  },
  {
    id: "frontend-developer",
    name: "Frontend Developer",
    shortTitle: "Frontend",
    description: "Crafts responsive, performant, and accessible user interfaces using modern web technologies and component-driven architecture.",
    targetSkillRequirements: {
      "JavaScript": "Advanced",
      "React": "Advanced",
      "HTML & CSS": "Advanced",
      "Web Performance": "Intermediate",
      "TypeScript": "Intermediate",
      "State Management": "Intermediate",
      "Data Structures & Algorithms": "Intermediate",
      "Git & Version Control": "Intermediate"
    },
    primaryFocus: "UI/UX Fidelity, Web Performance, State Management, DOM Mastery",
    icon: "Layout"
  },
  {
    id: "backend-developer",
    name: "Backend Developer",
    shortTitle: "Backend",
    description: "Designs robust APIs, manages databases, implements caching, handles concurrency, and ensures server-side scalability and security.",
    targetSkillRequirements: {
      "Node.js / Express": "Advanced",
      "Database Systems": "Advanced",
      "System Design": "Advanced",
      "Data Structures & Algorithms": "Advanced",
      "REST & GraphQL APIs": "Advanced",
      "Docker": "Intermediate",
      "Operating Systems": "Intermediate",
      "Computer Networks": "Intermediate"
    },
    primaryFocus: "Database Optimization, Concurrency, Microservices, API Security",
    icon: "Server"
  },
  {
    id: "full-stack-developer",
    name: "Full Stack Developer",
    shortTitle: "Full Stack",
    description: "Spans the complete engineering spectrum from responsive frontend interfaces to resilient backend APIs, databases, and deployment.",
    targetSkillRequirements: {
      "React": "Advanced",
      "Node.js / Express": "Advanced",
      "Database Systems": "Intermediate",
      "Data Structures & Algorithms": "Intermediate",
      "System Design": "Intermediate",
      "TypeScript": "Intermediate",
      "Docker": "Intermediate",
      "Git & Version Control": "Intermediate"
    },
    primaryFocus: "End-to-End System Integration, Rapid Prototyping, API Design",
    icon: "Layers"
  },
  {
    id: "ai-ml-engineer",
    name: "AI/ML Engineer",
    shortTitle: "AI / ML",
    description: "Designs, trains, and deploys machine learning and deep learning models, LLMs, and data pipelines into production environments.",
    targetSkillRequirements: {
      "Python": "Advanced",
      "Machine Learning": "Advanced",
      "Deep Learning / PyTorch": "Intermediate",
      "Data Structures & Algorithms": "Intermediate",
      "SQL / Database Management": "Intermediate",
      "Model Deployment & MLOps": "Intermediate",
      "Linear Algebra & Statistics": "Advanced"
    },
    primaryFocus: "Model Architecture, MLOps, Mathematical Depth, Fine-tuning",
    icon: "Brain"
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    shortTitle: "Data Science",
    description: "Extracts predictive insights from structured and unstructured data through statistical modeling, feature engineering, and storytelling.",
    targetSkillRequirements: {
      "Python": "Advanced",
      "SQL / Database Management": "Advanced",
      "Statistics & Probability": "Advanced",
      "Machine Learning": "Intermediate",
      "Data Visualization": "Intermediate",
      "Data Structures & Algorithms": "Intermediate"
    },
    primaryFocus: "Statistical Modeling, A/B Testing, Feature Engineering, Business ROI",
    icon: "BarChart3"
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    shortTitle: "Data Analyst",
    description: "Transforms raw data into actionable dashboards and strategic business reports using SQL, Python, Excel, and BI tools.",
    targetSkillRequirements: {
      "SQL / Database Management": "Advanced",
      "Data Visualization": "Advanced",
      "Python": "Intermediate",
      "Statistics & Probability": "Intermediate",
      "Excel / Spreadsheets": "Advanced",
      "Business Intelligence Tools": "Intermediate"
    },
    primaryFocus: "SQL Queries, Dashboarding, Trend Analysis, Metric Definitions",
    icon: "PieChart"
  },
  {
    id: "cloud-engineer",
    name: "Cloud Engineer",
    shortTitle: "Cloud",
    description: "Architects, provisions, and maintains reliable, secure, and cost-effective cloud infrastructure on AWS, Azure, or GCP.",
    targetSkillRequirements: {
      "Cloud Infrastructure (AWS/Azure)": "Advanced",
      "Linux & Shell Scripting": "Advanced",
      "Docker": "Advanced",
      "Kubernetes": "Intermediate",
      "Terraform / IaC": "Intermediate",
      "Computer Networks": "Advanced",
      "Security & IAM": "Intermediate"
    },
    primaryFocus: "Infrastructure as Code, Cloud Reliability, High Availability, IAM",
    icon: "Cloud"
  },
  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    shortTitle: "DevOps / SRE",
    description: "Automates CI/CD pipelines, optimizes deployment workflows, monitors system observability, and ensures high uptime.",
    targetSkillRequirements: {
      "CI/CD (GitHub Actions)": "Advanced",
      "Docker": "Advanced",
      "Linux & Shell Scripting": "Advanced",
      "Kubernetes": "Intermediate",
      "Observability & Monitoring": "Intermediate",
      "Computer Networks": "Intermediate",
      "Git & Version Control": "Advanced"
    },
    primaryFocus: "Pipeline Automation, Container Orchestration, Uptime, Observability",
    icon: "GitBranch"
  },
  {
    id: "cybersecurity-engineer",
    name: "Cybersecurity Engineer",
    shortTitle: "Cybersecurity",
    description: "Protects applications, networks, and enterprise data by identifying vulnerabilities, conducting penetration tests, and applying threat defenses.",
    targetSkillRequirements: {
      "Computer Networks": "Advanced",
      "Operating Systems": "Advanced",
      "Application Security (OWASP)": "Advanced",
      "Linux & Shell Scripting": "Advanced",
      "Cryptography Basics": "Intermediate",
      "Penetration Testing": "Intermediate"
    },
    primaryFocus: "Threat Modeling, Network Defense, OWASP Top 10, Secure Coding",
    icon: "ShieldAlert"
  }
];

export function getRoleById(id) {
  if (!id) return ROLES[0];
  const found = ROLES.find(r => r.id.toLowerCase() === id.toLowerCase() || r.name.toLowerCase() === id.toLowerCase());
  if (found) return found;
  return {
    id: "custom-role",
    name: id,
    shortTitle: id,
    description: "Custom career role trajectory customized for high-agency preparation.",
    targetSkillRequirements: {
      "Data Structures & Algorithms": "Intermediate",
      "System Design": "Intermediate",
      "Database Systems": "Intermediate",
      "Git & Version Control": "Intermediate"
    },
    primaryFocus: "Core Engineering, Technical Depth, Clean Architecture",
    icon: "Code2"
  };
}
