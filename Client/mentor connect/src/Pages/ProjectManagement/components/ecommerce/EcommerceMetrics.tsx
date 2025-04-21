import { useParams } from "react-router";
import Badge from "../ui/badge/Badge";
import React, { useEffect, useState } from "react";

export default function EcommerceMetrics(props) {
  const [taskList, setTaskList] = useState([]);
  const [CompletedTask, setCompletedTask] =useState([]);
  let projectid = props.id;
  
      const getTaskList = async() => {
          const container = {
              method: "POST",
              headers: {
                  "content-type": "application/json",
              },
              body: JSON.stringify({ ProjectId: projectid }),
          }
          try {
              const res = await fetch('https://code-clique-9qgm.vercel.app/api/FindTaskByProjectId', container);
              const data = await res.json();
              console.log(data);
              setCompletedTask(data.filter((task) => task.Status === "Completed"));
              setTaskList(data);
          } catch (error) {
              console.log(error);
          }
      }
  
      const onload = () => {
          getTaskList();
      }
      useEffect(onload, []);
    
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500">
              Task
            </span>
            <h4 className="mt-2 font-bold text-3xl text-gray-800 text-title-sm">
              {taskList.length}
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5  md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 ">
              Task Completed
            </span>
            <h4 className="mt-2 font-bold text-3xl text-gray-800 text-title-sm ">
              {CompletedTask.length}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
