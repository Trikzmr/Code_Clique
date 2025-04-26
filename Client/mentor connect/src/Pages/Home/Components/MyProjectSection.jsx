import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyComponentNew from './MyComponentNew';

const MyProjectSection = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const navigate = useNavigate();

  const color = [
    { bgcolor: '#FEF3C7', prgclr: '#F59E0B' },
    { bgcolor: '#E0F2FE', prgclr: '#3B82F6' },
    { bgcolor: 'pink', prgclr: '#FF6F61' },
  ];

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://code-clique-9qgm.vercel.app/api/getmyproject', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        const projects = await response.json();
        setMyProjects(projects);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('API call failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = myProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(myProjects.length / projectsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Projects</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProjects.map((project, index) => (
              <MyComponentNew
                key={project.id || index}
                data={project}
                color={color[index % color.length]}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => goToPage(idx + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProjectSection;
