import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsSection = () => {

    let projectid = useParams().id;

    const [projectData, setProjectData] = useState({});

    let keySkills = projectData.Keyskills || [];
    
      const fetchapi = async () => {
        try {
          let response = await fetch(`http://localhost:3000/api/getpostdatabyid`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: projectid}),
          });
          let data = await response.json();
          setProjectData(data);
          console.log(data);
          
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        fetchapi();
      }, []);
  return (
    <div>
      <div className="section">
        <h1 className="text-xl font-bold mb-4">Project Details</h1>
        <div className="section">
          <h1 className="text-5xl font-bold  text-gray-800">{projectData.Title}</h1>
          <p className='text-[#ff6584] font-medium'>{projectData.Category}</p>
          <div className="skillSection mt-4">
          {
            keySkills.map((skill, index) => (
                <button key={index} className="rounded-full button-primary p-2 px-6 mr-2 mb-2">
                    {skill}
                </button>
                ))
          }
          </div>
          
          <p>{projectData.Description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsSection
