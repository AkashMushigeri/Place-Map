import React, { useState } from "react";
import {
  CheckSquare,
  Square,
  Plus,
  Clock,
  Sparkles,
  Trash2,
  CheckCircle2,
  RotateCcw,
  Flame,
  ArrowRight
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function DailyTasks() {
  const { dailyTasks, toggleDailyTask, addDailyTask, profile, stats } = useApp();
  const [filter, setFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    phase: "Personal Sprint",
    estimatedMinutes: 30,
    priority: "High"
  });

  const filteredTasks = dailyTasks.filter(t => {
    if (filter === "pending") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    addDailyTask(newTask);
    setNewTask({ title: "", phase: "Personal Sprint", estimatedMinutes: 30, priority: "High" });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 px-2.5 py-0.5 rounded-full">
              Daily Action Sprint
            </span>
            <span className="text-xs text-slate-400">• Calibrated for {profile.targetCompany}</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Today's Preparation Tasks
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Consistent daily execution builds placement readiness. Check off tasks to immediately update your preparation score.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md shadow-brand-500/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Task</span>
        </button>
      </div>

      {/* Progress Metric Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              {stats.completedDaily} of {stats.totalDaily} Tasks Completed Today
            </span>
            <span className="text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full font-semibold border border-brand-500/30">
              {stats.tasksPercentage}% Done
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Keep this momentum going to maintain your {profile.streakDays || 4}-day preparation streak.
          </p>
        </div>

        <div className="w-full sm:w-64 bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-brand-500 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${stats.tasksPercentage}%` }}
          />
        </div>
      </div>

      {/* Task Filters */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          {[
            { id: "all", label: `All (${dailyTasks.length})` },
            { id: "pending", label: `Pending (${dailyTasks.filter(t => !t.completed).length})` },
            { id: "completed", label: `Completed (${dailyTasks.filter(t => t.completed).length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === tab.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2 opacity-60" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">No tasks in this view</h3>
            <p className="text-xs text-slate-400 mt-1">All caught up or switch filters to see other tasks.</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleDailyTask(task.id)}
              className={`p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                task.completed
                  ? "bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/60 opacity-75"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  className="text-slate-400 hover:text-brand-500 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                  )}
                </button>

                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold ${
                        task.completed
                          ? "line-through text-slate-400 dark:text-slate-500"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {task.title}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {task.priority} Priority
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {task.phase} • Source: {task.source}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>{task.estimatedMinutes} mins</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Add New Preparation Task
            </h3>
            <form onSubmit={handleCreateTask} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Solve 3 Binary Tree DFS problems"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Est. Duration (mins)
                  </label>
                  <input
                    type="number"
                    value={newTask.estimatedMinutes}
                    onChange={(e) => setNewTask({ ...newTask, estimatedMinutes: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
