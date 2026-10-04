import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Layout from "./components/layout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import CompanySelectionPage from "./pages/CompanySelectionPage";
import RoleSelectionPage from "./pages/RoleSelectionPage";
import CareerMapPage from "./pages/CareerMapPage";
import TodayMissionPage from "./pages/TodayMissionPage";
import SettingsPage from "./pages/SettingsPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SkillAssessment from "./pages/SkillAssessment";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";
import DailyTasks from "./pages/DailyTasks";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import DsaModule from "./pages/DsaModule";
import InterviewModule from "./pages/InterviewModule";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import ProgressTracking from "./pages/ProgressTracking";
import CareerGuidePage from "./pages/CareerGuidePage";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Landing, Auth & Onboarding */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Main App Layout */}
          <Route element={<Layout />}>
            <Route path="/career-map" element={<CareerMapPage />} />
            <Route path="/today" element={<TodayMissionPage />} />
            <Route path="/company-selection" element={<CompanySelectionPage />} />
            <Route path="/role-selection" element={<RoleSelectionPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/assessment" element={<SkillAssessment />} />
            <Route path="/skill-gap" element={<SkillGap />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tasks" element={<DailyTasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/dsa" element={<DsaModule />} />
            <Route path="/interview" element={<InterviewModule />} />
            <Route path="/resume" element={<ResumeAnalysis />} />
            <Route path="/progress" element={<ProgressTracking />} />
            <Route path="/guide" element={<CareerGuidePage />} />
            <Route path="/career-guide" element={<CareerGuidePage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
