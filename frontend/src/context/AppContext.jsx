import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { storageService, DEFAULT_PROFILE, DEFAULT_AUTH_USER } from "../services/storageService";
import { aiService } from "../services/aiService";
import { generateCareerRoadmap, markLevelCompleted } from "../services/roadmapService";
import { DSA_PROBLEMS } from "../data/dsaProblems";
import confetti from "canvas-confetti";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // 1. Auth State
  const [authUser, setAuthUser] = useState(() => storageService.getAuthUser());

  useEffect(() => {
    storageService.saveAuthUser(authUser);
  }, [authUser]);

  const login = (email, password, name = "Student") => {
    const user = {
      id: `usr-${Date.now()}`,
      name: name || email.split("@")[0],
      email,
      isAuthenticated: true
    };
    setAuthUser(user);
    return user;
  };

  const signup = (name, email, password) => {
    const user = {
      id: `usr-${Date.now()}`,
      name,
      email,
      isAuthenticated: true
    };
    setAuthUser(user);
    return user;
  };

  const logout = () => {
    setAuthUser({
      id: null,
      name: "",
      email: "",
      isAuthenticated: false
    });
  };

  // 2. Profile State
  const [profile, setProfile] = useState(() => storageService.getProfile());

  useEffect(() => {
    storageService.saveProfile(profile);
  }, [profile]);

  // 3. Career XP & Streak
  const [careerXP, setCareerXP] = useState(() => storageService.getCareerXP());

  useEffect(() => {
    storageService.saveCareerXP(careerXP);
  }, [careerXP]);

  const addXP = (amount) => {
    setCareerXP(prev => prev + amount);
  };

  // 4. Candy Crush Style Career Map
  const [careerMap, setCareerMap] = useState(() => {
    const saved = storageService.getCareerMap();
    if (saved && saved.levels && saved.levels.length > 0) return saved;
    return generateCareerRoadmap(profile);
  });

  useEffect(() => {
    storageService.saveCareerMap(careerMap);
  }, [careerMap]);

  // Active level calculation
  const currentLevel = useMemo(() => {
    if (!careerMap || !careerMap.levels) return null;
    return (
      careerMap.levels.find(l => l.status === "current") ||
      careerMap.levels.find(l => l.status === "available") ||
      careerMap.levels[0]
    );
  }, [careerMap]);

  // Complete a level action
  const completeLevel = (levelNumber) => {
    if (!careerMap || !careerMap.levels) return;

    const levelObj = careerMap.levels.find(l => l.levelNumber === levelNumber);
    const xpReward = levelObj?.xpReward || 500;

    // Confetti celebration
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6 }
    });

    const updatedLevels = markLevelCompleted(careerMap.levels, levelNumber);

    const updatedMap = {
      ...careerMap,
      levels: updatedLevels,
      currentLevelNumber: levelNumber + 1
    };

    setCareerMap(updatedMap);
    addXP(xpReward);

    // Increment streak if not yet completed today
    setProfile(prev => ({
      ...prev,
      streakDays: (prev.streakDays || 7) + 1
    }));
  };

  // Regenerate Career Map when destination changes
  const regenerateMap = (customProfile = null) => {
    const prof = customProfile || profile;
    const newMap = generateCareerRoadmap(prof);
    setCareerMap(newMap);
    storageService.saveCareerMap(newMap);
    return newMap;
  };

  // 5. Daily Mission Route (What should I do today?)
  const [dailyMission, setDailyMission] = useState(() => {
    const saved = storageService.getDailyMission();
    if (saved) return saved;
    return {
      dayNumber: 12,
      targetLevelId: currentLevel?.id || "lvl-1",
      targetLevelTitle: currentLevel?.title || "Data Structures I: Arrays",
      totalMinutes: 90,
      items: [
        { id: "dm-1", step: "01", type: "Learn", title: "Study Array memory layout & indexing", timeMin: 30, completed: true },
        { id: "dm-2", step: "02", type: "Practice", title: "Solve 3 Two-Pointer Easy problems", timeMin: 30, completed: false },
        { id: "dm-3", step: "03", type: "Build", title: "Implement a sliding window sub-routine", timeMin: 20, completed: false },
        { id: "dm-4", step: "04", type: "Review", title: "Quick 5-question checkpoint quiz", timeMin: 10, completed: false }
      ]
    };
  });

  useEffect(() => {
    storageService.saveDailyMission(dailyMission);
  }, [dailyMission]);

  const toggleDailyMissionItem = (itemId) => {
    setDailyMission(prev => {
      const items = prev.items.map(item => {
        if (item.id === itemId) {
          const nextState = !item.completed;
          if (nextState) {
            confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
            addXP(100);
          }
          return { ...item, completed: nextState };
        }
        return item;
      });
      return { ...prev, items };
    });
  };

  // 6. Theme State
  const [theme, setTheme] = useState(() => storageService.getTheme());

  useEffect(() => {
    storageService.setTheme(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // 7. Skill Gap Analysis
  const skillGapAnalysis = useMemo(() => {
    return aiService.analyzeSkillGap(
      profile.skills,
      profile.targetCompany,
      profile.targetRole
    );
  }, [profile.skills, profile.targetCompany, profile.targetRole]);

  // 8. Roadmap State (for legacy phase view)
  const [roadmap, setRoadmap] = useState(() => aiService.generateRoadmap(profile));

  useEffect(() => {
    setRoadmap(aiService.generateRoadmap(profile));
  }, [profile.targetCompany, profile.targetRole, profile.skills]);

  const toggleRoadmapTask = (phaseId, taskId) => {
    setRoadmap(prev => {
      const next = prev.map(phase => {
        if (phase.id !== phaseId) return phase;
        return {
          ...phase,
          tasks: phase.tasks.map(t => {
            if (t.id === taskId) {
              const newCompleted = !t.completed;
              if (newCompleted) {
                confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
                addXP(150);
              }
              return { ...t, completed: newCompleted };
            }
            return t;
          })
        };
      });
      return next;
    });
  };

  // 9. Daily Tasks State
  const [dailyTasks, setDailyTasks] = useState(() => {
    const saved = storageService.getTasks();
    if (saved && saved.length > 0) return saved;
    return aiService.generateDailyTasks(profile, skillGapAnalysis.gaps);
  });

  useEffect(() => {
    storageService.saveTasks(dailyTasks);
  }, [dailyTasks]);

  const toggleDailyTask = (taskId) => {
    setDailyTasks(prev => {
      const updated = prev.map(t => {
        if (t.id === taskId) {
          const completed = !t.completed;
          if (completed) {
            confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
            addXP(100);
          }
          return { ...t, completed };
        }
        return t;
      });
      return updated;
    });
  };

  const addDailyTask = (task) => {
    const newTask = {
      id: `task-custom-${Date.now()}`,
      title: task.title,
      phase: task.phase || "Personal Sprint",
      estimatedMinutes: Number(task.estimatedMinutes) || 30,
      priority: task.priority || "Medium",
      completed: false,
      source: "Student Added"
    };
    setDailyTasks(prev => [newTask, ...prev]);
  };

  // 10. DSA Solved State
  const [dsaSolved, setDsaSolved] = useState(() => storageService.getDsaSolved());

  useEffect(() => {
    storageService.saveDsaSolved(dsaSolved);
  }, [dsaSolved]);

  const toggleDsaProblem = (problemId) => {
    setDsaSolved(prev => {
      let next;
      if (prev.includes(problemId)) {
        next = prev.filter(id => id !== problemId);
      } else {
        next = [...prev, problemId];
        confetti({ particleCount: 45, spread: 60, origin: { y: 0.7 } });
        addXP(150);
      }
      return next;
    });
  };

  // 11. Mock Interview History
  const [interviewHistory, setInterviewHistory] = useState(() => storageService.getInterviews());

  const addInterviewSession = (session) => {
    const newSession = {
      id: `mock-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...session
    };
    setInterviewHistory(prev => [newSession, ...prev]);
    storageService.saveInterview(newSession);
    addXP(300);
  };

  // 12. Resume Analysis State
  const [resumeAnalysis, setResumeAnalysis] = useState(() => storageService.getResumeAnalysis());

  const runResumeAnalysis = (resumeText) => {
    const analysis = aiService.analyzeResume(resumeText, profile.targetCompany, profile.targetRole);
    setResumeAnalysis(analysis);
    storageService.saveResumeAnalysis(analysis);
    addXP(200);
    return analysis;
  };

  // 13. AI Guide Drawer State
  const [isGuideDrawerOpen, setIsGuideDrawerOpen] = useState(false);

  // 14. Computed Holistic Stats
  const stats = useMemo(() => {
    // Total Levels in Career Map
    const totalLevels = careerMap?.levels?.length || 16;
    const completedLevelsCount = careerMap?.levels?.filter(l => l.status === "completed").length || 0;
    const roadmapProgress = Math.round((completedLevelsCount / Math.max(1, totalLevels)) * 100);

    // Skills score
    const skillsScore = skillGapAnalysis.matchPercentage;

    // DSA score
    const totalDsa = DSA_PROBLEMS.length;
    const dsaPercentage = Math.min(100, Math.round((dsaSolved.length / Math.max(1, totalDsa)) * 100));

    // Daily tasks
    const totalDaily = dailyTasks.length;
    const completedDaily = dailyTasks.filter(t => t.completed).length;
    const tasksPercentage = totalDaily > 0 ? Math.round((completedDaily / totalDaily) * 100) : 50;

    // Weighted Overall Readiness
    const overall = Math.round(
      roadmapProgress * 0.35 +
      skillsScore * 0.20 +
      dsaPercentage * 0.20 +
      (60 + (profile.projects?.length || 1) * 10) * 0.15 +
      Math.min(100, 35 + interviewHistory.length * 15) * 0.10
    );

    return {
      overallPreparation: Math.min(99, Math.max(10, overall)),
      roadmapProgress,
      skillsScore,
      dsaPercentage,
      tasksPercentage,
      completedLevelsCount,
      totalLevels,
      completedDaily,
      totalDaily,
      dsaSolvedCount: dsaSolved.length,
      totalDsaCount: totalDsa
    };
  }, [careerMap, skillGapAnalysis, dsaSolved, dailyTasks, profile.projects, interviewHistory]);

  const updateProfile = (updates) => {
    setProfile(prev => {
      const next = { ...prev, ...updates };
      // If company or role or experience level changed, regenerate career map
      if (
        updates.targetCompany ||
        updates.targetRole ||
        updates.experienceLevel ||
        updates.dailyStudyTime
      ) {
        regenerateMap(next);
      }
      return next;
    });
  };

  const updateSkillLevel = (skillName, newLevel) => {
    setProfile(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skillName]: newLevel
      }
    }));
  };

  const resetAllProgress = () => {
    storageService.resetAll();
    setProfile(DEFAULT_PROFILE);
    setCareerXP(1450);
    setCareerMap(generateCareerRoadmap(DEFAULT_PROFILE));
    setDsaSolved(["p1", "p2", "p5", "p11", "p20", "p36", "p41"]);
    setDailyTasks(aiService.generateDailyTasks(DEFAULT_PROFILE, []));
    setInterviewHistory([]);
    setResumeAnalysis(null);
  };

  return (
    <AppContext.Provider
      value={{
        authUser,
        login,
        signup,
        logout,
        profile,
        updateProfile,
        updateSkillLevel,
        careerMap,
        currentLevel,
        completeLevel,
        regenerateMap,
        careerXP,
        addXP,
        dailyMission,
        toggleDailyMissionItem,
        skillGapAnalysis,
        roadmap,
        toggleRoadmapTask,
        dailyTasks,
        toggleDailyTask,
        addDailyTask,
        dsaSolved,
        toggleDsaProblem,
        interviewHistory,
        addInterviewSession,
        resumeAnalysis,
        runResumeAnalysis,
        theme,
        toggleTheme,
        stats,
        isGuideDrawerOpen,
        setIsGuideDrawerOpen,
        resetAllProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
