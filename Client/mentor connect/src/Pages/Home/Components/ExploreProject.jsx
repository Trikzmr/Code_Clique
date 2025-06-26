import React, { useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import { sortbyuser } from "./Sortalgo"
import ProjectComponentNew from "./ProjectComponentNew";

const SkeletonCard = () => (
  <div className="relative w-full max-w-md animate-pulse">
      {/* Floating Top Icon Placeholder */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-16 h-16 bg-gray-200 rounded-xl shadow-md" />
      </div>

      {/* Card Body Skeleton */}
      <div className="bg-white rounded-2xl shadow-md p-5 pt-14 border border-gray-200 min-h-[320px] max-h-[320px] flex flex-col justify-between overflow-hidden">
        <div>
          {/* Title */}
          <div className="h-5 bg-gray-300 rounded w-2/3 mb-3" />

          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-1/3" />
          </div>

          {/* Username */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-1/4" />
          </div>

          {/* Description Lines */}
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-4/6" />
          </div>

          {/* Key Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-6 w-16 bg-gray-200 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Button Placeholder */}
        <div className="h-8 bg-gray-200 rounded-lg mt-4" />
      </div>
    </div>
);

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
        //remove project which have username === user.username


        const data = await response.json();
        const ddata = data.filter((proj) => proj.username !== user.Username);
        let adata = sortbyuser(ddata, user)
        console.log(user);

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
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Explore Projects</h1>

        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border-2 font-medium transition ${selectedCategory === cat
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-black border-gray-300 hover:border-purple-500 hover:bg-purple-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>


        {/* Loading Spinner */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14">
            {[...Array(projectsPerPage)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">Sorry, no projects found.</div>
        ) : (
          <>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14 mb-6">
              {currentProjects.map((project) => (
                <ProjectComponentNew key={project._id} project={project} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full border transition ${currentPage === 1
                    ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-100"
                    : "text-purple-700 border-purple-600 hover:bg-purple-600 hover:text-white"
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
                className={`px-4 py-2 rounded-full border transition ${currentPage === totalPages
                    ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-100"
                    : "text-purple-700 border-purple-600 hover:bg-purple-600 hover:text-white"
                  }`}
              >
                Next
              </button>
            </div>

          </>
        )}
      </div>
    </>
  );
};

export default ExploreProject;
