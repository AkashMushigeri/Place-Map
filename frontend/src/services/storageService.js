/**
 * Storage Service for LocalStorage persistence
 * Stores profile, career map, XP, streak, auth, and tasks.
 */

const STORAGE_KEYS = {
  PROFILE: "placemap_profile",
  CAREER_MAP: "placemap_career_map",
  CAREER_XP: "placemap_career_xp",
  AUTH_USER: "placemap_auth_user",
  DAILY_MISSION: "placemap_daily_mission",
  TASKS: "placemap_tasks",
  DSA_SOLVED: "placemap_dsa_solved",
  ROADMAP: "placemap_roadmap",
  INTERVIEWS: "placemap_interviews",
  RESUME_ANALYSIS: "placemap_resume_analysis",
  THEME: "placemap_theme"
};

export const DEFAULT_PROFILE = {
  id: "student-1",
  name: "Akash",
  email: "akash@example.com",
  college: "Indian Institute of Information Technology",
  degree: "B.Tech",
  branch: "Computer Science and Engineering",
  year: "3rd Year",
  semester: "6th Semester",
  cgpa: "8.7",
  targetCompany: "Google",
  targetRole: "Software Engineer",
  experienceLevel: "Complete Beginner", // or "Beginner", "Intermediate", "Advanced"
  dailyStudyTime: "1 hour",
  knownSkills: ["Python", "SQL"],
  skills: {
    "python": "Beginner",
    "dsa": "Beginner",
    "arrays_strings": "Beginner",
    "dbms": "Beginner",
    "sql": "Beginner",
    "react": "Beginner",
    "git": "Beginner"
  },
  projects: [
    {
      id: "p-init-1",
      name: "Campus Event Discovery Portal",
      description: "Full-stack event listing portal with user authentication and search filters.",
      technologies: "React, Node.js, MongoDB",
      difficulty: "Intermediate"
    }
  ],
  careerXP: 1450,
  streakDays: 7,
  streakHistory: [true, true, true, true, true, true, false], // Mon - Sun
  onboardingCompleted: true
};

export const DEFAULT_AUTH_USER = {
  id: "user-1",
  name: "Akash",
  email: "akash@example.com",
  isAuthenticated: true
};

export const storageService = {
  getProfile() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load profile from localStorage", e);
    }
    return DEFAULT_PROFILE;
  },

  saveProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error("Failed to save profile to localStorage", e);
    }
  },

  getCareerMap() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CAREER_MAP);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load career map", e);
    }
    return null;
  },

  saveCareerMap(careerMap) {
    try {
      localStorage.setItem(STORAGE_KEYS.CAREER_MAP, JSON.stringify(careerMap));
    } catch (e) {
      console.error("Failed to save career map", e);
    }
  },

  getCareerXP() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CAREER_XP);
      if (saved) return Number(saved);
    } catch (e) {
      console.error("Failed to load career XP", e);
    }
    return 1450;
  },

  saveCareerXP(xp) {
    try {
      localStorage.setItem(STORAGE_KEYS.CAREER_XP, String(xp));
    } catch (e) {
      console.error("Failed to save career XP", e);
    }
  },

  getAuthUser() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load auth user", e);
    }
    return DEFAULT_AUTH_USER;
  },

  saveAuthUser(user) {
    try {
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
    } catch (e) {
      console.error("Failed to save auth user", e);
    }
  },

  getDailyMission() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DAILY_MISSION);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load daily mission", e);
    }
    return null;
  },

  saveDailyMission(mission) {
    try {
      localStorage.setItem(STORAGE_KEYS.DAILY_MISSION, JSON.stringify(mission));
    } catch (e) {
      console.error("Failed to save daily mission", e);
    }
  },

  getTasks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TASKS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load tasks", e);
    }
    return null;
  },

  saveTasks(tasks) {
    try {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks", e);
    }
  },

  getDsaSolved() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DSA_SOLVED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load DSA solved list", e);
    }
    return ["p1", "p2", "p5", "p11", "p20", "p36", "p41"];
  },

  saveDsaSolved(solvedList) {
    try {
      localStorage.setItem(STORAGE_KEYS.DSA_SOLVED, JSON.stringify(solvedList));
    } catch (e) {
      console.error("Failed to save DSA solved list", e);
    }
  },

  getInterviews() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INTERVIEWS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load interviews", e);
    }
    return [];
  },

  saveInterview(interview) {
    try {
      const interviews = this.getInterviews();
      interviews.unshift(interview);
      localStorage.setItem(STORAGE_KEYS.INTERVIEWS, JSON.stringify(interviews));
    } catch (e) {
      console.error("Failed to save interview", e);
    }
  },

  getResumeAnalysis() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESUME_ANALYSIS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load resume analysis", e);
    }
    return null;
  },

  saveResumeAnalysis(analysis) {
    try {
      localStorage.setItem(STORAGE_KEYS.RESUME_ANALYSIS, JSON.stringify(analysis));
    } catch (e) {
      console.error("Failed to save resume analysis", e);
    }
  },

  getTheme() {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
    } catch (e) {
      return "dark";
    }
  },

  setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.error("Failed to save theme", e);
    }
  },

  resetAll() {
    try {
      localStorage.clear();
      this.saveProfile(DEFAULT_PROFILE);
      this.saveAuthUser(DEFAULT_AUTH_USER);
    } catch (e) {
      console.error("Failed to reset storage", e);
    }
  }
};
