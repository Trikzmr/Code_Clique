import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskMembersTable from './TaskMembersTable';
import TaskAdditionalDetailsCard from './TaskAdditionalDetailsCard';
import TaskDetailsComponent from './TaskDetailsComponent';
import { Routes, Route, Link} from 'react-router-dom';
import UpdateTask from './UpdateTask';

const TaskDetails = () => {
    
    const { id } = useParams();

    const [ProjectData, setProjectData] = useState({Members:[]});

    const fetchprojectdata = async() =>{
        const api = "http://localhost:3000/api/FindTaskByTaskId";
        const container = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({_id:id}),
        }
        try {
            const res = await fetch(api, container);
            const data =await res.json();
            console.log(data);
            setProjectData(data);
        } catch (error) {
            console.log(error)
        }
    }

    const deletetask = async()=>{
        const api = "http://localhost:3000/api/deleteTask";
        const container = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({_id:id}),
        }
        try {
            const res = await fetch(api, container);
            const data =await res.json();
            window.location.href = `/project/${data.ProjectId}`;
        } catch (error) {
            console.log(error)
        }
    }

    const onload = () =>{
        fetchprojectdata();
    }

    useEffect(onload, [])
  return (
    <div className='md:flex gap-6'>
        <div className="tasksummary md:w-9/12">
            <div className="taskactions overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 flex mb-6 gap-4">
                <div className="actonmessage w-6/10">Not satisfied with task!</div>
                <Link className='w-2/10' to={`/project/${id}/task/${id}/updatetask`}>
                    <div className="updateButton  font-semibold py-2 rounded-lg transition bg-blue-300 hover:bg-blue-400 text-blue-800 text-center">Update</div>
                </Link>
                <div className="deleteButton w-2/10 font-semibold py-2 rounded-lg transition bg-red-300 hover:bg-red-400 text-red-800 text-center" onClick={deletetask}>Delete</div>
            </div>
            <Routes>
                <Route path="" element={<TaskDetailsComponent data={ProjectData}/>} />
                <Route path="/updatetask" element={<UpdateTask id={id}/>}/>
            </Routes>            
        </div>
        <div className="taskStats md:w-3/12">
            <TaskAdditionalDetailsCard task={ProjectData}/>
            <TaskMembersTable id={id} data={ProjectData} />
        </div>
    </div>
  )
}

export default TaskDetails
