import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectComponent = (props) => {
  const { Title, username, Description, Keyskills, _id, Category } = props.project;
  const navigate = useNavigate();

  const gotodetails = () => {
    navigate(`/project/details/${_id}`);
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 py-5 h-80 w-113 mx-auto">
      <h1 className="text-2xl font-semibold  text-gray-700">{Title}</h1>
      <p className="text-lg text-[#ff6584]">by {username}</p>

      <p className="text-lg text-gray-500 py-2">{
        Keyskills.map((skill, index) => (
          <span key={index} className="text-gray-500 text-sm">{skill}{" "} </span>
        ))
        }</p>
      <p className="text-xl text-gray-600 font-semibold mt-0">{Category}</p>
      <p className="text-lg text-gray-600 mt-10">{Description}</p>
      
      <button onClick={gotodetails} className="mt-4 w-full button-secondary  font-semibold py-2 rounded-lg hover:bg-red-500 transition">
        View Details
      </button>
    </div>
  );
};

export default ProjectComponent;
