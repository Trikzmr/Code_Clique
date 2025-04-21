import React, { useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import {sortbyuser} from "./Sortalgo"

const ExploreProject = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const projectsPerPage = 6;

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Block Chain",
    "AI/ML",
    "Cyber Security",
    "Data Science",
    "IoT",
    "Cloud Computing",
    "Game Development",
    "Robotics",
    "Other",
  ];

  const filterProjects = (category, query) => {
    let filtered = [...projects];

    if (category !== "All") {
      filtered = filtered.filter((proj) => proj.Category === category);
    }

    if (query.trim() !== "") {
      filtered = filtered.filter((proj) =>
        proj.Title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://code-clique-9qgm.vercel.app/api/getpostdata", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const userres = await fetch("https://code-clique-9qgm.vercel.app/api/userdetails", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
        const user = await userres.json();
           

        const data = await response.json();
        let adata=sortbyuser(data, user)

        if (response.ok) {
          setProjects(adata);
          setFilteredProjects(adata);
        } else {
          //alert(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects(selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery, projects]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Projects</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm rounded-full border-2 transition font-medium ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center text-gray-600 text-lg">Loading...</div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">Sorry, no projects found.</div>
      ) : (
        <>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {currentProjects.map((project) => (
              <ProjectComponent key={project._id} project={project} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full border-2 transition ${
                currentPage === 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-black border-black hover:bg-black hover:text-white"
              }`}
            >
              Prev
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full border-2 transition ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-black border-black hover:bg-black hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExploreProject;
