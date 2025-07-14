import React, { useEffect, useState } from "react";
import { Filter, CheckCircle, Circle, Brain } from "lucide-react";

const Objectives = ({ id, data }) => {
  const [project, setProject] = useState(null);
  const [newPhaseTitle, setNewPhaseTitle] = useState("");
  const [newObjectives, setNewObjectives] = useState({});
  const [tagFilter, setTagFilter] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("https://code-clique-9qgm.vercel.app/api/getPhaseDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, Title: data.Title }),
      });
      const json = await res.json();
      setProject(json);
    } catch (err) {
      console.error(err);
    }
  };

  const updateProject = async (updated) => {
    try {
      const res = await fetch("https://code-clique-9qgm.vercel.app/api/updatePhaseDetails", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      const json = await res.json();
      setProject(json);
    } catch (err) {
      console.error(err);
    }
  };

  const addPhase = () => {
    if (!newPhaseTitle.trim()) return;
    const updated = {
      ...project,
      Phase: [...(project.Phase || []), { Title: newPhaseTitle, Objectives: [] }],
    };
    updateProject(updated);
    setNewPhaseTitle("");
  };

  const addObjective = (phaseIndex, title) => {
    if (!title.trim()) return;
    const updated = { ...project };
    updated.Phase[phaseIndex].Objectives.push({ Title: title, Status: 0 });
    updateProject(updated);
    setNewObjectives((prev) => ({ ...prev, [phaseIndex]: "" }));
  };

  const toggleStatus = (phaseIndex, objIndex) => {
    const updated = { ...project };
    const currentStatus = updated.Phase[phaseIndex].Objectives[objIndex].Status;
    updated.Phase[phaseIndex].Objectives[objIndex].Status = currentStatus === 1 ? 0 : 1;
    updateProject(updated);
  };

  const buildWithAI = async () => {
    if (loadingAI) return;
    setLoadingAI(true);

    const promptObj = {
      prompt: JSON.stringify({
        Title: data.Title,
        Description: data.Description,
        Keypoints: data.Keypoints,
      }),
    };

    try {
      const res = await fetch("https://infinito-ml-services.vercel.app/api/flow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(promptObj),
      });

      const json = await res.json();

      const aiPhases = json.Phases.map((phase) => ({
        Title: phase.PhaseTitle,
        Objectives: phase.Objectives.map((objText) => ({
          Title: objText,
          Status: 0,
        })),
      }));

      const updated = {
        ...project,
        Phase: aiPhases,
      };

      await updateProject(updated);
    } catch (err) {
      console.error("AI error:", err);
    } finally {
      setLoadingAI(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!project) return <div className="p-4">Loading...</div>;

  const allObjectives = project.Phase?.flatMap((p) => p.Objectives) || [];
  const total = allObjectives.length;
  const completed = allObjectives.filter((o) => o.Status === 1).length;
  const remaining = total - completed;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4 max-w-7xl mx-auto px-4 sm:px-10 py-8 bg-gray-50 min-h-screen">
      {/* Left Section */}
      <div className="pr-0 lg:pr-4">
        {/* Project Title and Stats */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-1">{project.Title}</h1>
          <p className="text-gray-600 text-lg">
            Total: {total} | ✅ Done: {completed} | 🔁 Remaining: {remaining}
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={18} className="text-gray-600" />
            <input
              type="text"
              placeholder="Filter by title..."
              className="px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-64"
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
            />
          </div>
          <button
            onClick={buildWithAI}
            disabled={loadingAI}
            className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center gap-2 shadow-sm disabled:opacity-70"
          >
            <Brain size={18} /> {loadingAI ? "Generating..." : "Build With Infinito AI"}
          </button>
        </div>

        {/* Add Phase */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="New phase title"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            value={newPhaseTitle}
            onChange={(e) => setNewPhaseTitle(e.target.value)}
          />
          <button
            onClick={addPhase}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Phase
          </button>
        </div>

        {/* Phase Cards */}
        <div className="space-y-12 overflow-y-auto max-h-screen pb-10">
          {project.Phase?.map((phase, phaseIndex) => {
            const filteredObjectives = (phase.Objectives || []).filter((obj) =>
              obj.Title.toLowerCase().includes(tagFilter.toLowerCase())
            );

            return (
              <div key={phaseIndex}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">🧩 {phase.Title}</h2>

                {/* Add Objective */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="New objective..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    value={newObjectives[phaseIndex] || ""}
                    onChange={(e) =>
                      setNewObjectives((prev) => ({ ...prev, [phaseIndex]: e.target.value }))
                    }
                  />
                  <button
                    onClick={() => addObjective(phaseIndex, newObjectives[phaseIndex] || "")}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Add
                  </button>
                </div>

                {/* Objective Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {filteredObjectives.map((obj, objIndex) => {
                    const isDone = obj.Status === 1;
                    return (
                      <div
                        key={objIndex}
                        className={`group border rounded-xl p-4 shadow-md transition-all flex flex-col justify-between min-h-[100px] ${
                          isDone
                            ? "bg-green-50 border-green-400"
                            : "bg-white hover:bg-blue-50 border-gray-300"
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <button
                            onClick={() => toggleStatus(phaseIndex, objIndex)}
                            className="mt-1"
                          >
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
                            {obj.Title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-auto">
                          Status: {isDone ? "Completed" : "Pending"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side - Reserved */}
      <div className="hidden lg:block">
        {/* Add right-side widgets like progress meter here if needed */}
      </div>
    </div>
  );
};

export default Objectives;
