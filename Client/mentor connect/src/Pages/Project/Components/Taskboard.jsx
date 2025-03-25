import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListMembers from "../../ProjectManagement/components/ecommerce/ListMembers";

export default function Taskboard({ id }) {
  const [tasks, setTasks] = useState([{Members:[]}]);
  const [filter, setFilter] = useState("All");
  const currentUser = localStorage.getItem("username");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/FindTaskByProjectId", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ProjectId: id }),
        });
        const data = await res.json();
        console.log("Fetched tasks:", data);
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [id]);

  // Expanded sample tasks for UI testing
  const sampleTasks = [
    { id: 1, Title: "Setup Repo", Description: "Initialize GitHub repo", Status: "To Do", AssignedTo: "alice" },
    { id: 2, Title: "Design UI", Description: "Create initial UI wireframe", Status: "To Do", AssignedTo: "bob" },
    { id: 3, Title: "API Integration", Description: "Connect frontend with backend", Status: "In Progress", AssignedTo: "alice" },
    { id: 4, Title: "Fix Login Issue", Description: "Resolve JWT token expiration", Status: "In Progress", AssignedTo: "charlie" },
    { id: 5, Title: "Deploy App", Description: "Push to production", Status: "Completed", AssignedTo: "bob" },
    { id: 6, Title: "Write Tests", Description: "Add Jest unit tests", Status: "To Do", AssignedTo: "charlie" },
    { id: 7, Title: "Improve Performance", Description: "Optimize API calls", Status: "In Progress", AssignedTo: "alice" },
    { id: 8, Title: "Database Schema Update", Description: "Modify user schema", Status: "Completed", AssignedTo: "bob" },
    { id: 9, Title: "Implement Drag & Drop", Description: "Enable card movement", Status: "To Do", AssignedTo: "alice" },
    { id: 10, Title: "Bug Fix: Dark Mode", Description: "Resolve UI glitches in dark mode", Status: "In Progress", AssignedTo: "charlie" },
    { id: 11, Title: "User Feedback Review", Description: "Analyze feedback & plan changes", Status: "Completed", AssignedTo: "alice" },
    { id: 12, Title: "Update Docs", Description: "Improve README.md", Status: "To Do", AssignedTo: "bob" },
  ];

  const displayedTasks = tasks.length > 0 ? tasks : sampleTasks;
  console.log("Displayed Tasks:", displayedTasks);

  const filteredTasks = filter === "All" ? displayedTasks : displayedTasks.filter((task) => task.Username === "john_doe");

  const getTasksByStatus = (status) => {
    const tasksByStatus = filteredTasks.filter((task) => task.Status === status);
    console.log(`Tasks for ${status}:`, tasksByStatus);
    return tasksByStatus;
  };

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Kanban Board</h2>
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={() => setFilter(filter === "All" ? "My" : "All")}
        >
          {filter === "All" ? "Show My Tasks" : "Show All Tasks"}
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto h-[75%]">
        <KanbanColumn title="To Do" tasks={getTasksByStatus("Initiated")} bgColor="bg-blue-100" id={id} />
        <KanbanColumn title="In Progress" tasks={getTasksByStatus("In Progress")} bgColor="bg-yellow-100" id={id}/>
        <KanbanColumn title="Completed" tasks={getTasksByStatus("Completed")} bgColor="bg-green-100"  id={id}/>
      </div>
    </div>
  );
}

function KanbanColumn({ title, tasks, bgColor, id}) {
  return (
    <div className="w-1/3 p-4 bg-white rounded-2xl border border-gray-200 shadow-md max-h-full overflow-y-auto">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <KanbanCard key={task.id} task={task} bgColor={bgColor} id={id}/>)
        ) : (
          <p className="text-gray-500 text-sm">No tasks</p>
        )}
      </div>
    </div>
  );
}

function KanbanCard({ task, bgColor, id }) {
  return (
    <Link to={`/project/${id}/task/${task._id}`}>
        <div className={`p-4 ${bgColor}  mt-4 rounded-lg border border-gray-300 shadow`}>
            <h4 className="font-semibold">{task.Title}</h4>
            <p className="text-sm text-gray-600">{task.Description}</p>
            <ListMembers data={task.Members}/>
        </div>
    </Link>
    
  );
}
