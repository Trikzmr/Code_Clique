import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaTag, FaLaptopCode } from 'react-icons/fa'; // Importing icons from react-icons

const ProjectComponentNew = ({ project }) => {
  const { Title, username, Description, Keyskills, _id, Category } = project;
  const navigate = useNavigate();

  const gotodetails = () => {
    navigate(`/project/details/${_id}`);
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-6 w-full max-w-md flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-semibold text-black mb-2 truncate hover:text-gray-800 transition duration-300">{Title}</h2>

        {/* Username & Category in separate lines */}
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <FaUser className="mr-2 text-gray-600" /> {/* User icon */}
          <span className="font-semibold">@{username}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <FaTag className="mr-2 text-gray-600" /> {/* Category icon */}
          <p>{Category}</p>
        </div>
      </div>

      {/* Description with 3 lines */}
      <div className="flex-grow mb-4">
        <p className="text-sm text-gray-700 line-clamp-3 mb-4">{Description}</p>
      </div>

      {/* Skills */}
      {Keyskills?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Keyskills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="flex items-center text-xs text-black bg-gray-100 border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-200 transition duration-200"
            >
              <FaLaptopCode className="mr-1 text-gray-600" /> {/* Code icon */}
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Button with improved styling and hover effect */}
      <button
        onClick={gotodetails}
        className="mt-auto w-full bg-black text-white border border-black text-sm py-2 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <FaLaptopCode className="mr-2 inline-block" /> {/* Icon for the button */}
        View Details
      </button>
    </div>
  );
};

export default ProjectComponentNew;
