import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyComponentNew from './MyComponentNew';

const MyProjectSection = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [loading, setLoading] = useState(true); // <-- New loading state
  const navigate = useNavigate();

  const color = [
    { bgcolor: '#FEF3C7', prgclr: '#F59E0B' },
    { bgcolor: '#E0F2FE', prgclr: '#3B82F6' },
    { bgcolor: 'pink', prgclr: '#FF6F61' },
  ];

  const fetchProject = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch('https://code-clique-9qgm.vercel.app/api/getmyproject', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        const projects = await response.json();
        setLoading(false);
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

  return (
    <div className="p-4">
      {loading ? (
        // Placeholder skeletons
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse space-y-4 p-4 rounded-xl bg-gray-200 h-40" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
          {myProjects.map((project, i) => (
            <MyComponentNew key={i} data={project} color={color[i % color.length]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjectSection;
