import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Messages from './Components/Messages';
import MyTask from './Components/MyTask';
import Team from './Components/Team';
import Calander from './Components/Calander';
import Taskboard from './Components/Taskboard'
import TaskDetails from './Components/TaskDetails';

const ProjectDashboard = () => {
    const { id } = useParams();
    
    return (
        <div className="projectDashboard flex md:flex-row flex-col min-h-screen overflow-hidden bg-[#ffffff] gap-4 pr-8 ">
            {/* Sidebar - Fixed Width, Prevent Shrinking */}
            <div className="projectDashboardLeft md:w-[260px] flex-shrink-0 p-4">
                <div className="projectDashboardLeftHead mt-6 text-3xl">
                    Start Your Day <br></br>& Be Productive
                </div>
                <div className="ProjectDashboardLeftMenu mt-10">
                    <div className="projectDashboardLeftItem text-gray-700 tracking-widest font-semibold mb-0">
                        MENU
                    </div>
                    <div className="projectDashboardLeftItem ml-2 text-gray-500 p-4 button-accent rounded-full">
                        <Link to={`/project/${id}`}>Dashboard</Link>
                    </div>
                    <div className="projectDashboardLeftItem ml-2 text-gray-500 p-4">
                        <Link to={`/project/${id}/messages`}>Messages</Link>
                    </div>
                    <div className="projectDashboardLeftItem ml-2 text-gray-500 p-4">
                        <Link to={`/project/${id}/mytask`}>My Task</Link>
                    </div>
                    <div className="projectDashboardLeftItem ml-2 text-gray-500 p-4">
                        <Link to={`/project/${id}/team`}>Team</Link>
                    </div>
                    <div className="projectDashboardLeftItem ml-2 text-gray-500 p-4">
                        <Link to={`/project/${id}/taskboard`}>Task Board</Link>
                    </div>
                </div>                
            </div>

            {/* Right Content - Prevents Sidebar Shrinking */}
            <div className="projectDashboardRight flex-grow overflow-auto p-4 border border-gray-200 bg-gray-50 rounded-4xl mt-4 min-h-screen max-h-screen overflow-y-scroll">
                <Routes>
                    <Route path="" element={<Dashboard id={id}/>} />
                    <Route path="/messages" element={<Messages id={id} />} />
                    <Route path="/mytask" element={<MyTask id={id} />} />
                    <Route path="/team" element={<Team id={id} />} />
                    <Route path="/taskboard" element={<Taskboard id={id} />} />
                    <Route path="/task/:id" element={<TaskDetails id={id} />} />
                </Routes>
            </div>
        </div>
    );
};

export default ProjectDashboard;
