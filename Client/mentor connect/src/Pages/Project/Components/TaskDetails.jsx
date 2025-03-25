import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskMembersTable from './TaskMembersTable';
import TaskAdditionalDetailsCard from './TaskAdditionalDetailsCard';

const TaskDetails = () => {
    let id = useParams();
    id=id.id;
    console.log(id);

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

    const onload = () =>{
        fetchprojectdata();
    }

    useEffect(onload, [])
  return (
    <div className='md:flex gap-6'>
        <div className="tasksummary md:w-9/12">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 ">
                <h2 className="text-lg font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">
                    Task Summary
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                    🔹 Update Ynex New Project Design.
                </h3>
                <div className="mt-2">
                    <h4 className="font-semibold text-gray-700">Task Description :</h4>
                    <p className="text-gray-600 mt-1">
                    The current website design needs a refresh to improve user experience and enhance visual appeal.
                    The goal is to create a modern and responsive design that aligns with the latest web design trends.
                    The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.
                    </p>
                </div>
                <div className="mt-4 min-h-[300px]">
                    <h4 className="font-semibold text-gray-700">Key Tasks :</h4>
                    <ul className="list-decimal list-inside text-gray-600 mt-1 space-y-1 px-8">
                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                    <li>Iteratively refining the design based on feedback.</li>
                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                    <li>Testing the website across different devices and browsers.</li>
                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                    </ul>
                </div>
                <hr className="border-gray-300 my-4" />

                <div className="mt-6 grid grid-cols-3 gap-4 text-gray-700">
                    <div>
                    <p className="text-sm font-semibold">Assigned By</p>
                    <p className="text-blue-600 font-medium">H.J. Taylor</p>
                    </div>
                    <div>
                    <p className="text-sm font-semibold">Assigned Date</p>
                    <p className="text-gray-600">24, June 2023</p>
                    </div>
                    <div>
                    <p className="text-sm font-semibold">Due Date</p>
                    <p className="text-gray-600">05, July 2023</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="taskStats md:w-3/12">
            <TaskAdditionalDetailsCard task={ProjectData}/>
            <TaskMembersTable id={id} data={ProjectData} />
        </div>
    </div>
  )
}

export default TaskDetails
