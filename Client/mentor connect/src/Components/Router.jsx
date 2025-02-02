import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/Home';  // Import the Home component
import Login from '../Pages/Authentication/Login';
import ProjectDashboard from '../Pages/Project/ProjectDashboard';  // Import the ProjectDashboard component
import ProjectDetails from '../Pages/Project/ProjectDetails';
import Requestform from '../Pages/Home/Components/Requestform';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/project/*" element={<ProjectDashboard/>} />
                <Route path="/project/details/:id" element={<ProjectDetails/>} />
                <Route path="/requestform" element={<Requestform/>} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
