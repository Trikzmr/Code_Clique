import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = (props) => {
  const { Title, username, Description, Keyskills, _id, Category } = props.project;
  const navigate = useNavigate();

  const gotodetails = () => {
    navigate(`/project/${_id}`);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 ">
      <h1 className="text-2xl font-semibold  text-gray-700">{Title}</h1>
      <p className="text-lg text-[#6c63ff]">by {username}</p>

      <p className="text-lg text-gray-500 py-2">{
        Keyskills.map((skill, index) => (
          <span key={index} className="text-gray-500 text-sm">{skill}{" "} </span>
        ))
        }</p>
      <p className="text-xl text-gray-600 font-semibold mt-0">{Category}</p>
      <p className="text-lg text-gray-600 mt-10">{Description}</p>
      
      <button onClick={gotodetails} className="mt-4 w-full button-primary  font-semibold py-2 rounded-lg hover:bg-red-500 transition">
        View Details
      </button>
    </div>
  );
};

export default MyComponent;
