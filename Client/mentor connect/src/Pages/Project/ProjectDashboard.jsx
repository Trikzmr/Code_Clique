import React from 'react';
import { Routes, Route, Link, useParams, NavLink} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Messages from './Components/Messages';
import MyTask from './Components/MyTask';
import Team from './Components/Team';
import Calander from './Components/Calander';
import Taskboard from './Components/Taskboard'
import TaskDetails from './Components/TaskDetails';
import ProjectOverview from './Components/ProjectOverview';
import {useNavigate} from 'react-router-dom';
import Base from './Components/Base';

const ProjectDashboard = () => {
    const { id } = useParams();
    const navLinkClass = (isActive) =>
        `navitem block w-full my-4 ml-2 p-4 rounded-full transition-all duration-200 ${
            isActive ? 'button-accent' : 'text-gray-500 hover:bg-gray-100'
        }`;
    
    return (
        <div className="projectDashboard flex md:flex-row flex-col min-h-screen overflow-hidden bg-[#ffffff] gap-4 pr-8 ">
            {/* Sidebar - Fixed Width, Prevent Shrinking */}
            <div className="projectDashboardLeft md:w-[260px] flex-shrink-0 p-2 py-0">
                <div className="projectDashboardLeftHead mt-4 text-3xl">
                    Start Your Day <br />& Be Productive
                </div>

                <div className="ProjectDashboardLeftMenu mt-4">
                    <div className="projectDashboardLeftItem text-gray-700 tracking-widest font-semibold mb-4">
                        MENU
                    </div>

                    <NavLink to={`/project/${id}/Dashboard`} className={({ isActive }) => navLinkClass(isActive)}>
                        Dashboard
                    </NavLink>

                    <NavLink to={`/project/${id}/overview`} className={({ isActive }) => navLinkClass(isActive)}>
                        Overview
                    </NavLink>

                    <NavLink to={`/project/${id}/taskboard`} className={({ isActive }) => navLinkClass(isActive)}>
                        Tasks
                    </NavLink>

                    

                    <NavLink to={`/project/${id}/team`} className={({ isActive }) => navLinkClass(isActive)}>
                        Team
                    </NavLink>

                    <NavLink to={`/project/${id}/messages`} className={({ isActive }) => navLinkClass(isActive)}>
                        Messages
                    </NavLink>

                    <NavLink to={`/project/${id}/addtask`} className={({ isActive }) => navLinkClass(isActive)}>
                        Add Task
                    </NavLink>
                </div>
            </div>

            {/* Right Content - Prevents Sidebar Shrinking */}
            <div className="projectDashboardRight flex-grow overflow-auto p-4 border border-gray-200 bg-gray-50 rounded-4xl mt-4 min-h-screen max-h-screen overflow-y-scroll">
                <Routes>
                    <Route path="" element={<Base id={id}/>} />
                    <Route path="/Dashboard" element={<Dashboard id={id}/>} />
                    <Route path="/overview" element={<ProjectOverview id={id}/>} />
                    <Route path="/messages" element={<Messages id={id} />} />
                    <Route path="/addtask" element={<MyTask id={id} />} />
                    <Route path="/team" element={<Team id={id} />} />
                    <Route path="/taskboard" element={<Taskboard id={id} />} />
                    <Route path="/task/:id/*" element={<TaskDetails id={id} />} />
                </Routes>
            </div>
        </div>
    );
};

export default ProjectDashboard;
