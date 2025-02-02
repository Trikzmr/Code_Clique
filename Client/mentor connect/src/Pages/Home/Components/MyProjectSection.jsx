import React, { useEffect, useState } from 'react';

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
      <h2>My Projects</h2>
      <div>
  {myProjects.map((project, index) => (
    <div key={index} className="project-card">
      <div className="username">
      {project.username}
      </div>
      <div className="Title">
          {project.Title}
      </div>
      <div className="Description">
      {project.Description}
      </div>
      <div className="Category">
      {project.Category}
      </div>
      <div className="Keyskills">
      {project.Keyskills}
      </div>
      <div className="TeamRequest">
      {project.TeamRequest}
      </div>
      <div className="MentorRequest">
      {project.MentorRequest}
      </div>
      <div className="Team">
      {project.Team}
      </div>
      <div className="Mentor">
      {project.Mentor}
      </div><div className="Githubkink">
      {project.Githubkink}
      </div><div className="Notice">
      {project.Notice}
      </div>
      

    </div>
  ))}
</div>

    </div>
  );
};

export default MyProjectSection;
