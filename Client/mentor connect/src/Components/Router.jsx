import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/Home';  // Import the Home component
import Login from '../Pages/Authentication/Login';
import ProjectDashboard from '../Pages/Project/ProjectDashboard';  // Import the ProjectDashboard component
import ProjectDetails from '../Pages/Project/ProjectDetails';
import Requestform from '../Pages/Home/Components/Requestform';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Authentication/Register';
import AddProject from '../Pages/Home/Components/AddProject';
import CompleteProfile from '../Pages/Profile/Components/CompleteProfile';
import Profiled from '../Pages/Profile/Profiled';
import Unauthorized from '../Pages/Screens/Unauthorized';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Register/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/project/:id/*" element={<ProjectDashboard/>} />
                <Route path="/project/details/:id" element={<ProjectDetails/>} />
                <Route path="/requestform" element={<Requestform/>} />  
                <Route path="/profiled" element={<Profile/>} />  
                <Route path="/addproject" element= {<AddProject/>}/>
                <Route path="/completeprofile" element={<CompleteProfile/>}/>
                <Route path="/profile" element={<Profiled/>}/>
                <Route path='/unauthorized' element={<Unauthorized/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
