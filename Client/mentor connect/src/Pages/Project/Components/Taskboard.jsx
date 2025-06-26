import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListMembers from "../../ProjectManagement/components/ecommerce/ListMembers";

const SkeletonCard =()=> {
  return (
    <div className="animate-pulse space-y-4 p-4 rounded-xl bg-gray-200 h-40">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}

export default function Taskboard({ id }) {
  const [tasks, setTasks] = useState([{Members:[]}]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("https://code-clique-9qgm.vercel.app/api/FindTaskByProjectId", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ProjectId: id }),
        });
        const data = await res.json();
        console.log("Fetched tasks:", data);
        setTasks(data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [id]);

  const getmyTask = async () => {
    try{
      const api = "https://code-clique-9qgm.vercel.app/api/getmytask";
      const container = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ProjectId:id}),
        credentials: 'include'   
      };
      const res = await fetch(api, container);
      const data = await res.json();
      setTasks(data);
    }
    catch(error){
      console.log(error);
    }
  }
  const fetchalltask = async() => {
    try {
      const res = await fetch("https://code-clique-9qgm.vercel.app/api/FindTaskByProjectId", {
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
  }
  


 
  const getTasksByStatus = (status) => {
    const tasksByStatus = tasks.filter((task) => task.Status === status);
    console.log(`Tasks for ${status}:`, tasksByStatus);
    return tasksByStatus;
  };

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold w-6/10">Task Board</h2>
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition w-2/10"
        onClick={fetchalltask}>
          All Tasks
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition w-2/10"
          onClick={getmyTask}
        >
          My Tasks
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

function KanbanColumn({ title, tasks, bgColor, id }) {
  return (
    <div className="w-1/3 p-4 bg-white rounded-2xl border border-gray-200 shadow-md max-h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${bgColor} text-gray-700`}>
          {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
        </span>
      </div>
      <div className="mt-2 space-y-4">
        {tasks.length === 0 && <SkeletonCard />}
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <KanbanCard key={task.id} task={task} bgColor={bgColor} id={id} />
          ))
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
