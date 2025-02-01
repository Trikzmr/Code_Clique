import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Messages from './Components/Messages'
import MyTask from './Components/MyTask'
import Team from './Components/Team'
import Calander from './Components/Calander'

const ProjectDashboard = () => {
  return (
    <div className='projectDashboard'>
        <div className='projectDashboardLeft'>
            <div className='projectDashboardLeftItem'>
                <Link to="/project/">Dashboard</Link>
            </div>
            <div className='projectDashboardLeftItem'>
                <Link to="/project/messages">Messages</Link>
            </div>
            <div className='projectDashboardLeftItem'>
                <Link to="/project/mytask">My Task</Link>
            </div>
            <div className='projectDashboardLeftItem'>
                <Link to="/project/team">Team</Link>
            </div>
            <div className='projectDashboardLeftItem'>
                <Link to="/project/calander">Calander</Link>
            </div>
        </div>
        <div className='projectDashboardRight'>
            <Routes>
            <Route path="" element={<Dashboard/>} />
            <Route path="/messages" element={ <Messages/>} />
            <Route path="/mytask" element={<MyTask/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/calander" element={<Calander/>} />
            </Routes>
        </div>
    </div>
  )
}

export default ProjectDashboard
