import React, { useState, useMemo } from "react";
import {
  CheckCircle,
  Circle,
  Plus,
  Calendar,
  Tag,
  Filter,
} from "lucide-react";
import { CircleGauge, Check, ListTodo, TimerReset } from "lucide-react";
import ProgressMeter from "./ProgressMeter";

const ProjectPhases = ({ data }) => {
  const [completed, setCompleted] = useState({});
  const [objectives, setObjectives] = useState(
    data.Phases.map((phase) =>
      phase.Objectives.map((text, idx) => ({
        id: `${phase.PhaseTitle}-${idx}`,
        text,
        deadline: "",
        tag: "",
      }))
    )
  );
  const [tagFilter, setTagFilter] = useState("");

  const toggleObjective = (id) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addObjective = (phaseIndex, text) => {
    if (!text.trim()) return;
    const newObjectives = [...objectives];
    const id = `${data.Phases[phaseIndex].PhaseTitle}-${newObjectives[phaseIndex].length}`;
    newObjectives[phaseIndex].push({ id, text, deadline: "", tag: "" });
    setObjectives(newObjectives);
  };

  const updateField = (p, i, field, value) => {
    const updated = [...objectives];
    updated[p][i][field] = value;
    setObjectives(updated);
  };

  const { totalObjectives, completedObjectives } = useMemo(() => {
    let total = 0,
      done = 0;
    objectives.forEach((phase) =>
      phase.forEach((obj) => {
        total++;
        if (completed[obj.id]) done++;
      })
    );
    return { totalObjectives: total, completedObjectives: done };
  }, [objectives, completed]);

  const remainingObjectives = totalObjectives - completedObjectives;
  const completionRate = totalObjectives
    ? Math.round((completedObjectives / totalObjectives) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-2 max-w-7xl mx-auto p-2 sm:p-10 bg-gray-50 min-h-screen">
      {/* Left Scrollable Side */}
      <div className=" pr-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-1">
            {data.ProjectTitle}
          </h1>
          <p className="text-gray-600 text-lg">
            Total: {totalObjectives} | ✅ Done: {completedObjectives} | 🔁 Remaining: {remainingObjectives}
          </p>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <Filter size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Filter by tag..."
            className="px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
          />
        </div>

        <div className="space-y-12 overflow-y-auto max-h-screen">
          {data.Phases.map((phase, phaseIndex) => {
            const filteredObjectives = objectives[phaseIndex]
              .filter((obj) =>
                tagFilter ? obj.tag.toLowerCase().includes(tagFilter.toLowerCase()) : true
              )
              .sort((a, b) => {
                if (!a.deadline) return 1;
                if (!b.deadline) return -1;
                return new Date(a.deadline) - new Date(b.deadline);
              });

            return (
              <div key={phaseIndex}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold text-gray-800">🧩 {phase.PhaseTitle}</h2>
                </div>

                <AddObjectiveForm onAdd={(text) => addObjective(phaseIndex, text)} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {filteredObjectives.map((obj, objIndex) => {
                    const isDone = completed[obj.id];

                    return (
                      <div
                        key={obj.id}
                        className={`group flex flex-col gap-2 border rounded-xl p-4 shadow-sm transition ${
                          isDone
                            ? "bg-green-50 border-green-400"
                            : "bg-white hover:bg-blue-50 border-gray-300"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button onClick={() => toggleObjective(obj.id)} className="mt-1">
                            {isDone ? (
                              <CheckCircle className="text-green-500" />
                            ) : (
                              <Circle className="text-gray-400" />
                            )}
                          </button>
                          <p
                            className={`text-sm sm:text-base flex-1 ${
                              isDone ? "line-through text-gray-500" : "text-gray-800"
                            }`}
                          >
                            {obj.text}
                          </p>
                        </div>

                        <div
                          className="flex items-center gap-3 text-xs text-gray-500 ml-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <label className="flex items-center gap-1">
                            <Calendar size={14} />
                            <input
                              type="date"
                              className="bg-transparent border-b border-gray-300 outline-none w-[110px]"
                              value={obj.deadline}
                              onChange={(e) =>
                                updateField(phaseIndex, objIndex, "deadline", e.target.value)
                              }
                            />
                          </label>

                          <label className="flex items-center gap-1">
                            <Tag size={14} />
                            <input
                              type="text"
                              placeholder="Tag"
                              className="bg-transparent border-b border-gray-300 outline-none w-[80px]"
                              value={obj.tag}
                              onChange={(e) =>
                                updateField(phaseIndex, objIndex, "tag", e.target.value)
                              }
                            />
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rightSection">
        <ProgressMeter/>
      </div>

    </div>
  );
};

const AddObjectiveForm = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-2 max-w-md">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new objective..."
        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="flex items-center gap-1 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
      >
        <Plus size={16} /> Add
      </button>
    </form>
  );
};

export default ProjectPhases;
