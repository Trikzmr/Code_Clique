import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Messages from './Components/Messages';
import MyTask from './Components/MyTask';
import Team from './Components/Team';
import Calander from './Components/Calander';
import Taskboard from './Components/Taskboard'
import TaskDetails from './Components/TaskDetails';
import ProjectOverview from './Components/ProjectOverview';
import { useNavigate } from 'react-router-dom';
import Base from './Components/Base';


const ProjectDashboard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectid = id;
    const [project, setproject] = useState({ Owner: false })
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const fetchapi = async () => {
        console.log("test");
        try {
            let response = await fetch(`https://code-clique-9qgm.vercel.app/api/getpostdatabyid`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: projectid }),
                credentials: "include",
            });
            if (!response.ok) {
                navigate('/unauthorized'); // Redirect to login if not authenticated
            }
            let data = await response.json();
            console.log(data);
            setproject(data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchapi();
    }, []);
    const navLinkClass = (isActive) =>
        `navitem block w-full my-4 ml-2 p-4 rounded-full transition-all duration-200 ${isActive ? 'button-accent' : 'text-gray-500 hover:bg-gray-100'
        }`;

    return (
        <div className="projectDashboard md:flex md:flex-row min-h-screen overflow-hidden bg-[#ffffff] gap-4 md:pr-8 transition-transform duration-300">
            {/* Sidebar - Fixed Width, Prevent Shrinking */}
<div className={`projectDashboardLeft ${sidebarOpen ? 'block fixed bg-white h-full z-50 pr-15 left-0' : 'hidden'} md:block md:w-[260px] flex-shrink-0 p-2 py-0`}>
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


                    {project.Owner && (
                        <NavLink to={`/project/${id}/team`} className={({ isActive }) => navLinkClass(isActive)}>
                            Team
                        </NavLink>
                    )}

                    <NavLink to={`/project/${id}/messages`} className={({ isActive }) => navLinkClass(isActive)}>
                        Messages
                    </NavLink>


                    <NavLink to={`/project/${id}/addtask`} className={({ isActive }) => navLinkClass(isActive)}>
                        Add Task
                    </NavLink>
                </div>
            </div>

            {/* Right Content - Prevents Sidebar Shrinking */}
            <div className="projectDashboardRight md:flex-grow overflow-auto p-4 border border-gray-200 bg-gray-50 rounded-4xl mt-4 min-h-screen max-h-screen overflow-y-scroll">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`md:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4 z-50 absolute top-20 right-4`}
                >
                    {sidebarOpen ? 'X' : 'Open Menu'}
                </button>
                <Routes>
                    <Route path="" element={<Base id={id} />} />
                    <Route path="/Dashboard" element={<Dashboard id={id} />} />
                    <Route path="/overview" element={<ProjectOverview id={id} />} />
                    <Route path="/messages" element={<Messages id={id} />} />
                    <Route path="/addtask" element={<MyTask id={id} />} />
                    <Route path="/team" element={<Team id={id} />} />
                    <Route path="/taskboard" element={<Taskboard id={id} />} />
                    <Route path="/task/:id/*" element={<TaskDetails proid={id} />} />
                </Routes>
            </div>
        </div>
    );
};

export default ProjectDashboard;
