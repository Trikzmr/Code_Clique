import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsSection from './ProjectDetailsSection';

const ProjectDetails = () => {
  

  return (
    <div className="min-h-screen p-5">

      {/* Parent flex container */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="md:w-2/3 flex justify-center items-center p-5 rounded-lg">
          <ProjectDetailsSection/>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 flex justify-center items-center p-5 rounded-lg">
          <div className="JoinProjectSection">
            <p>Join Project Section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
