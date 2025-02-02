import React, { useEffect, useState } from 'react';
import MyComponent from './MyComponent';

const MyProjectSection = () => {
  let key =0;
  const [myProjects, setMyProjects] = useState([]);

  const fetchProject = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getmyproject', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Allows cookies to be sent with the request
      });

      if (response.ok) {
        const projects = await response.json();
        setMyProjects(projects);
        console.log(projects);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('API call failed:', error.message);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 mx-auto mt-8 ">
        {myProjects.map((project) => (
          <MyComponent key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjectSection;
