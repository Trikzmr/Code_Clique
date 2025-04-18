import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ProjectAdditionalDetails = ({id, data}) => {

 console.log(data);
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 mb-6">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 flex items-center">
        <span className="border-l-4 border-blue-500 pl-2">Additional Details</span>
      </h2>

      {/* Task Details */}
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Project Title :</span>{data.Title}</p>
        <p><span className="font-semibold">Project Owner :</span> {data.username}</p>

        <p className="flex items-center">
          <span className="font-semibold">Category</span>
          
          <span className="ml-1">{data.Category}</span>
        </p>


        <p>
          <span className="font-semibold">Project Url</span> 
          <span className="text-blue-500 font-semibold ml-1">url</span>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-semibold">Update URL</span> 
            <div className="updateUrlButton bg-green-300 px-6 py-2 rounded-lg">Update</div>
        </p>
      </div>
    </div>
  );
};

export default ProjectAdditionalDetails;
