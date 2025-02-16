import React, { useEffect, useState } from 'react';
import MyComponent from './MyComponent';

const MyProjectSection = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [index, setIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState([]);

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

  useEffect(() => {
    const start = (index - 1) * 3;
    setCurrentPage(myProjects.slice(start, start + 3));
  }, [index, myProjects]);

  const prev = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (index * 3 < myProjects.length) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className='mb-16'>
      <div className=" mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 mx-auto mt-8 ">
        {currentPage.map((project) => (
          <MyComponent key={project._id} project={project} />
        ))}
      </div>
      <div className="pagination flex justify-center items-center mt-8">
        <button className="button-primary rounded-full p-2 px-6 mr-2 mb-2" onClick={prev} disabled={index === 1}>
          Prev
        </button>
        <button className="button-primary rounded-full p-2 px-6 mr-2 mb-2">{index}</button>
        <button className="button-primary rounded-full p-2 px-6 mr-2 mb-2" onClick={next} disabled={index * 3 >= myProjects.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MyProjectSection;
