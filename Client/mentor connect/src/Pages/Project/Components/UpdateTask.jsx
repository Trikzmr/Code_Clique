import React, { useEffect, useState } from 'react';

const UpdateTask = ({ id }) => {
  console.log(id);
  const [task, setTask] = useState({
    TaskId: id || "",
    Title: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    Status: "Initiated",
  });

  // Fetch task details from backend
  const getProjectDetails = async () => {
    try {
      const res = await fetch('https://code-clique-9qgm.vercel.app/api/FindTaskByTaskId', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch task details");
      }

      // Update state with fetched task details
      setTask({
        TaskId: data._id || id,
        Title: data.Title || "",
        Description: data.Description || "",
        StartDate: data.StartDate ? data.StartDate.split("T")[0] : "",
        EndDate: data.EndDate ? data.EndDate.split("T")[0] : "",
        Status: data.Status || "Initiated",
      });

    } catch (err) {
      console.error("Error fetching task details:", err);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Send data to update task
  const sendData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/UpdateTask', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update task");
      }

      console.log(data);
      alert("Task successfully updated");

    } catch (err) {
      console.error("Error updating task:", err);
      alert("Error updating task: " + err.message);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Task</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title Input */}
        <input
          type="text"
          name="Title"
          value={task.Title}
          onChange={handleChange}
          placeholder="Task Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description Input */}
        <textarea
          name="Description"
          value={task.Description}
          onChange={handleChange}
          rows="4"
          placeholder="Task Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <h4 className="text-lg font-semibold text-gray-800">Start Date</h4>
        <input
          type="date"
          name="StartDate"
          value={task.StartDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h4 className="text-lg font-semibold text-gray-800">End Date</h4>
        <input
          type="date"
          name="EndDate"
          value={task.EndDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="py-2 px-6 rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
