import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/Home';  // Import the Home component
import Login from '../Pages/Authentication/Login';
import ProjectDashboard from '../Pages/Project/ProjectDashboard';  // Import the ProjectDashboard component
import ProjectDetails from '../Pages/Project/ProjectDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/project/*" element={<ProjectDashboard/>} />
                <Route path="/project/details/*" element={<ProjectDetails/>} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
