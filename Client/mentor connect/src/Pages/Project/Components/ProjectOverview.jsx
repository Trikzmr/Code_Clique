import React, { useEffect, useState } from 'react'

const ProjectOverview = ({id}) => {
    let projectid = id;
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
    <div className='md:flex gap-6'>
        <div className="tasksummary md:w-12/12 max-h-screen overflow-y-scroll">
                <div className="overflow-hidden rounded-2xl border min-w-4xl border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 ">
                <h2 className="text-lg font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">
                    Project Summary
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                    🔹 {projectData.Title}
                </h3>
                <div className="skillsarea flex mt-4 gap-3">
                    <h4 className="font-semibold text-gray-700 p-1.5">Key Skills :</h4>
                    {keySkills && keySkills.map((skill, index) => (
                        <div key={index} className="text-gray-800 bg-gray-200 p-1.5 px-6 rounded-full text-sm font-semibold">
                            {skill}
                        </div>
                    ))}
                    
                </div>
                <div className="mt-2">
                    <h4 className="font-semibold text-gray-700">Project Description :</h4>
                    <p className="text-gray-600 mt-1">
                      {projectData.Description}
                    </p>
                </div>
                <div className="mt-4 min-h-[300px]">
                    <h4 className="font-semibold text-gray-700">Key Points :</h4>
                    <ul className="list-decimal list-inside text-gray-600 mt-1 space-y-1 px-8">
                    {projectData.Keypoints && projectData.Keypoints.map((point, index) => (
                        <li key={index} className="text-gray-600">
                            {point}
                        </li>
                    ))}
                    </ul>
                </div>
                <hr className="border-gray-300 my-4" />

                <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                    <p className="text-sm font-semibold">Proposed By</p>
                    <p className="text-blue-600 font-medium">{projectData.username}</p>
                    </div>
                    <div>
                    <p className="text-sm font-semibold">Category</p>
                    <p className="text-gray-600">{projectData.Category}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectOverview
