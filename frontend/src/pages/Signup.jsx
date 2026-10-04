import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Compass, ArrowRight, Lock, Mail, User, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signup(name || "Student", email, password);
    navigate("/onboarding");
  };

  const handleDemoSignup = () => {
    signup("Akash", "akash@example.com", "password123");
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-brand-500/20">
            🗺️
          </div>
          <span className="text-xl font-black text-white">PlaceMap</span>
        </Link>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Create your PlaceMap account
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Begin your journey from zero knowledge to placement ready
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <button
            type="button"
            onClick={handleDemoSignup}
            className="w-full py-2.5 px-4 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-brand-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Immediate Demo as Akash</span>
          </button>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Akash"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800" />
            <span className="flex-shrink mx-4 text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-slate-800" />
          </div>

          <button
            type="button"
            onClick={handleDemoSignup}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="text-center text-xs text-slate-400 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-brand-400 font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
