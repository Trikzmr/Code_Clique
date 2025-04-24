import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetailsSection = () => {
  let projectid = useParams().id;
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(true);

  let keySkills = projectData.Keyskills || [];

  const fetchapi = async () => {
    try {
      let response = await fetch(
        `https://code-clique-9qgm.vercel.app/api/postpreviewbyid`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: projectid }),
          credentials: "include",
        }
      );
      let data = await response.json();
      setProjectData(data);
      addviewer(data.Category);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addviewer = async (category) => {
    try {
      let response = await fetch(
        `https://code-clique-9qgm.vercel.app/api/ViewAdder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category: category }),
          credentials: "include",
        }
      );
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <div className=" w-full">
      <div className="tasksummary w-full max-h-screen overflow-y-auto">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-4 pt-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">
            Project Summary
          </h2>

          <h3 className="text-xl font-bold text-gray-900 mt-4">
            {loading ? (
              <div className="animate-pulse h-8 bg-gray-300 rounded w-1/3"></div>
            ) : (
              projectData.Title
            )}
          </h3>

          <div className="skillsarea flex flex-wrap mt-4 gap-2">
            <h4 className="font-semibold text-gray-700 p-1.5">Key Skills :</h4>
            {keySkills &&
              keySkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-gray-800 bg-gray-200 p-1.5 px-4 rounded-full text-sm font-semibold"
                >
                  {skill}
                </div>
              ))}
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">
              Project Description :
            </h4>
            <p className="text-gray-600 mt-1">
              {loading ? (
                <div className="animate-pulse h-64 bg-gray-300 rounded w-full"></div>
              ) : (
                projectData.Description
              )}
            </p>
          </div>

          <div className="mt-4 min-h-[300px]">
            <h4 className="font-semibold text-gray-700">Key Points :</h4>
            <ul className="list-decimal list-inside text-gray-600 mt-1 space-y-1 px-6">
              {projectData.Keypoints &&
                projectData.Keypoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </ul>
          </div>

          <hr className="border-gray-300 my-4" />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="text-sm font-semibold">Proposed By</p>
              <p className="text-blue-600 font-medium">
                {projectData.username}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">Category</p>
              <p className="text-gray-600">{projectData.Category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
