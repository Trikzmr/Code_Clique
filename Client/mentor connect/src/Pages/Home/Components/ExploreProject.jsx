import React, { useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";

const ExploreProject = () => {
  const [projects, setProjects] = useState([]);

  const [filterdProjects, setFilteredProjects] = useState([]);

  const category = ["All","Web Development", "App Development", "UI/UX Design", "Block Chain", "AI/ML", "Cyber Security", "Data Science", "IoT", "Cloud Computing", "Game Development", "Robotics", "Other"];
  const filterProject = (cat) => {
    if (cat === "All") {
      setFilteredProjects(projects);
    } else {
      let tempprojects=[];
      for(let i = 0; i < projects.length; i++){
        if (projects[i].Category === cat) {
          tempprojects.push(projects[i]);
        }
      }
      setFilteredProjects(tempprojects);
    }
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getpostdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          setProjects(data);
          setFilteredProjects(data);
        } else {
          alert(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="exploreProjectSection ">
      {/* Header Section */}
      <div className=" mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Explore Trending Projects</h1>
      </div>

      <div className="category">
        {category.map((cat) => (
          <button key={cat} onClick={() => filterProject(cat)} className=" rounded-full button-primary p-2 px-6 mr-2 mb-2">
            {cat}
          </button>
        ))}
      </div>


      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-10 mx-auto mt-8 ">
        {filterdProjects.map((project) => (
          <ProjectComponent key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ExploreProject;
