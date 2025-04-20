import React, { useEffect, useState } from 'react';
import MyComponent from './MyComponent'; // assuming this renders a single project

const MyProjectSection = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [index, setIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState([]);

  // Fetch project data from API
  const fetchProject = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getmyproject', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // for cookies / sessions
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

  // Initial fetch
  useEffect(() => {
    fetchProject();
  }, []);

  // Reset index to 1 when projects change
  useEffect(() => {
    setIndex(1);
  }, [myProjects]);

  // Update currentPage on index or data change
  useEffect(() => {
    const start = (index - 1) * 3;
    setCurrentPage(myProjects.slice(start, start + 3));
  }, [index, myProjects]);

  // Pagination handlers
  const prev = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (index < Math.ceil(myProjects.length / 3)) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">My Projects</h2>
      </div>

      {/* Render current page projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPage.map((project, idx) => (
          <MyComponent key={idx} data={project} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={prev}
          disabled={index === 1}
          className={`px-4 py-2 bg-black text-white rounded-full transition 
  border-2 border-transparent 
  hover:bg-white hover:text-gray-800 hover:border-black transition ${
            index === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Prev
        </button>
        <span className="text-lg font-medium">Page {index}</span>
        <button
          onClick={next}
          disabled={index >= Math.ceil(myProjects.length / 3)}
          className={`px-4 py-2 bg-black text-white rounded-full transition 
  border-2 border-transparent 
  hover:bg-white hover:text-gray-800 hover:border-black transition ${
            index >= Math.ceil(myProjects.length / 3)
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyProjectSection;
