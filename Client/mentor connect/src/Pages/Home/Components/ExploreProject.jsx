import React, { useState, useEffect } from 'react';
import ProjectComponent from './ProjectComponent';

const ExploreProject = () => {
    const [projects, setProjects] = useState([]);

    const listprojects =(project) =>{
        return(
            <ProjectComponent key={project._id} project={project}/>
        )
    }

    useEffect(() => {
        const onloadhandler = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/getdata', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // Include cookies for authentication
                });

                const data = await response.json();

                if (response.ok) {
                    setProjects(data);
                    console.log(data);  
                } else {
                    alert(data.message || 'Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        onloadhandler(); // Call the async function
    }, []); // Dependency array to run only once

    return (
        <>
            <div className="exploreProjectSection">
                <div className="exploreProjectSectionHeader">
                    <h1 className="text-2xl font-semibold">Explore Projects</h1>
                    <p className="text-sm text-gray-600">Explore the latest projects</p>
                </div>

                <div className="exploreProjectSectionBody">
                    {projects.map(listprojects)}
                </div>
            </div>
        </>
    );
};

export default ExploreProject;
