import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ProjectAdditionalDetails = ({id, data}) => {

  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStatus(task.Status);
  }, [data]);

  const updateTaskStatus = async (newStatus) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/changetaskstatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: task._id, status: newStatus }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.task.Status); // Update status in UI
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
    setLoading(false);
  };

  const moveToNextStage = () => {
    updateTaskStatus(getNextStatus(status));
  };

  const reInitiateTask = () => {
    updateTaskStatus("Initiated");
  };

  const getNextStatus = (currentStatus) => {
    const statusFlow = ["Initiated", "In Progress", "Completed"];
    const currentIndex = statusFlow.indexOf(currentStatus);
    return currentIndex < statusFlow.length - 1 ? statusFlow[currentIndex + 1] : currentStatus;
  };

  const getButtonText = () => {
    if (status === "Initiated") return "Start";
    if (status === "In Progress") return "Complete";
    return "Completed";
  };

  const getButtonStyles = () => {
    if (status === "Completed") return "bg-green-300 text-gray-700 cursor-not-allowed";
    return "bg-blue-300 hover:bg-blue-400 text-blue-800";
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 mb-6">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 flex items-center">
        <span className="border-l-4 border-blue-500 pl-2">Additional Details</span>
      </h2>

      {/* Task Details */}
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Task Title :</span> {task.Title}</p>
        <p><span className="font-semibold">Project Owner :</span> {task.ProjectOwner}</p>

        <p className="flex items-center">
          <span className="font-semibold">Start Date :</span>
          <FaCalendarAlt className="ml-2 text-gray-500" />
          <span className="ml-1">{task.StartDate}</span>
        </p>

        <p className="flex items-center">
          <span className="font-semibold">Target Date :</span>
          <FaCalendarAlt className="ml-2 text-red-500" />
          <span className="ml-1">{task.EndDate}</span>
        </p>

        <p>
          <span className="font-semibold">Project Status :</span> 
          <span className="text-blue-500 font-semibold ml-1">{status}</span>
        </p>
      </div>

      {/* Move to Next Stage Button */}
      <div className="mt-4">
        <button
          onClick={moveToNextStage}
          disabled={loading || status === "Completed"}
          className={`w-full font-semibold py-2 rounded-lg transition ${getButtonStyles()}`}
        >
          {loading ? "Updating..." : getButtonText()}
        </button>
      </div>

      {/* Re-Initiate Button (Only Visible if Completed) */}
      {status === "Completed" && (
        <div className="mt-2">
          <button
            onClick={reInitiateTask}
            disabled={loading}
            className="w-full font-semibold py-2 rounded-lg transition bg-red-300 hover:bg-red-400 text-red-800"
          >
            {loading ? "Updating..." : "Re-Initiate"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectAdditionalDetails;
