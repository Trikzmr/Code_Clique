import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserFriends,
  FaPaperclip,
  FaComments,
  FaClock,
  FaLaptopCode,
  FaUser,
  FaTag,
} from 'react-icons/fa';

const ProjectComponentNew = ({ project }) => {
  const { Title, username, Description, Keyskills, _id, Category } = project;
  const navigate = useNavigate();

  const gotodetails = () => {
    navigate(`/project/details/${_id}`);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Floating Top Icon - Larger */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center shadow-md">
          <FaLaptopCode className="text-purple-600 text-2xl" />
        </div>
      </div>

      {/* Card Body */}
      <div className="bg-white rounded-2xl shadow-md p-5 pt-14 border border-gray-200 min-h-[320px] max-h-[320px] flex flex-col justify-between overflow-hidden">
        <div>
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{Title}</h3>

          {/* Category */}
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <FaTag className="mr-2 text-gray-400" />
            {Category}
          </div>

          {/* Username */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaUser className="mr-2 text-gray-400" />
            @{username}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">{Description}</p>

          {/* Key Skills */}
          {Keyskills?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Keyskills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="text-xs text-purple-800 bg-purple-100 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={gotodetails}
          className="w-full text-sm py-2 rounded-xl text-purple-600 bg-purple-100 hover:bg-purple-200 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectComponentNew;
