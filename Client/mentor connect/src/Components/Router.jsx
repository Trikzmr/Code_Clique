import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/Home';  // Import the Home component
import Login from '../Pages/Authentication/Login';
import ProjectDashboard from '../Pages/Project/ProjectDashboard';  // Import the ProjectDashboard component
import ProjectDetails from '../Pages/Project/ProjectDetails';
import ProjectManagement from '../Pages/ProjectManagement/ProjectManagement'
import Requestform from '../Pages/Home/Components/Requestform';
import Profile from '../Pages/Profile/Profile';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/project/:id/*" element={<ProjectDashboard/>} />
                <Route path="/projectmanag/:id/*" element={<ProjectManagement/>} />
                <Route path="/project/details/:id" element={<ProjectDetails/>} />
                <Route path="/requestform" element={<Requestform/>} />  
                <Route path="/profile" element={<Profile/>} />  
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
