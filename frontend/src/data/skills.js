export const SKILL_CATEGORIES = [
  { id: "languages", name: "Programming Languages" },
  { id: "dsa", name: "Data Structures & Algorithms" },
  { id: "core_cs", name: "Core Computer Science" },
  { id: "frameworks", name: "Frameworks & Backend" },
  { id: "databases", name: "Databases & Storage" },
  { id: "cloud_devops", name: "Cloud & DevOps" },
  { id: "ai_ml", name: "AI & Machine Learning" },
  { id: "system_design", name: "System Design & Architecture" }
];

export const SKILLS_CATALOG = [
  // Programming Languages
  { id: "python", name: "Python", category: "languages", defaultLevel: "Intermediate" },
  { id: "java", name: "Java", category: "languages", defaultLevel: "Beginner" },
  { id: "cpp", name: "C++", category: "languages", defaultLevel: "Beginner" },
  { id: "javascript", name: "JavaScript", category: "languages", defaultLevel: "Intermediate" },
  { id: "typescript", name: "TypeScript", category: "languages", defaultLevel: "Beginner" },
  { id: "go", name: "Go", category: "languages", defaultLevel: "Beginner" },

  // DSA
  { id: "dsa", name: "Data Structures & Algorithms", category: "dsa", defaultLevel: "Beginner" },
  { id: "arrays_strings", name: "Arrays & Strings", category: "dsa", defaultLevel: "Intermediate" },
  { id: "trees_graphs", name: "Trees & Graphs", category: "dsa", defaultLevel: "Beginner" },
  { id: "dp", name: "Dynamic Programming", category: "dsa", defaultLevel: "Beginner" },

  // Core CS
  { id: "dbms", name: "Database Management Systems", category: "core_cs", defaultLevel: "Intermediate" },
  { id: "os", name: "Operating Systems", category: "core_cs", defaultLevel: "Beginner" },
  { id: "networks", name: "Computer Networks", category: "core_cs", defaultLevel: "Beginner" },
  { id: "oop", name: "Object-Oriented Design", category: "core_cs", defaultLevel: "Intermediate" },

  // Frameworks
  { id: "react", name: "React", category: "frameworks", defaultLevel: "Intermediate" },
  { id: "nodejs", name: "Node.js / Express", category: "frameworks", defaultLevel: "Beginner" },
  { id: "fastapi", name: "FastAPI / Django", category: "frameworks", defaultLevel: "Beginner" },
  { id: "springboot", name: "Spring Boot", category: "frameworks", defaultLevel: "Beginner" },

  // Databases
  { id: "sql", name: "SQL & Relational DBs", category: "databases", defaultLevel: "Intermediate" },
  { id: "mongodb", name: "MongoDB / NoSQL", category: "databases", defaultLevel: "Beginner" },
  { id: "redis", name: "Redis Caching", category: "databases", defaultLevel: "Beginner" },

  // Cloud & DevOps
  { id: "git", name: "Git & Version Control", category: "cloud_devops", defaultLevel: "Intermediate" },
  { id: "docker", name: "Docker & Containers", category: "cloud_devops", defaultLevel: "Beginner" },
  { id: "aws", name: "AWS Cloud Fundamentals", category: "cloud_devops", defaultLevel: "Beginner" },
  { id: "linux", name: "Linux & Shell Scripting", category: "cloud_devops", defaultLevel: "Intermediate" },

  // AI / ML
  { id: "ml", name: "Machine Learning Foundations", category: "ai_ml", defaultLevel: "Beginner" },
  { id: "pytorch", name: "PyTorch & Deep Learning", category: "ai_ml", defaultLevel: "Beginner" },
  { id: "nlp_llm", name: "NLP & LLM Prompting", category: "ai_ml", defaultLevel: "Beginner" },

  // System Design
  { id: "system_design", name: "System Design", category: "system_design", defaultLevel: "Beginner" }
];

export const LEVEL_SCORES = {
  "None": 0,
  "Beginner": 33,
  "Intermediate": 66,
  "Advanced": 100
};

export const LEVEL_LABELS = ["Beginner", "Intermediate", "Advanced"];
