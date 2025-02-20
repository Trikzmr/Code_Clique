import React, { useEffect, useState } from "react";

const TeamReqListCard = (props) => {
  const [User, setUser] = useState({});
  const data = props.data;

  const appendlist = (name) => {
    return <li>{name}</li>;
  };

  //console.log(data);
  const getuserdata = async () => {
    const Username = data.Username;
    let api = "http://localhost:3000/api//GetUser";
    let container = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username: Username }),
    };

    try {
      let response = await fetch(api, container);
      const usr = await response.json();
      setUser(usr);
    } catch (error) {
      console.log(error);
    }
  };

  const onload = () => {
    getuserdata();
  };

  useEffect(onload, []);

  console.log(data);
  return (
    <div className="TeamReqListCard w-full p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* Top Section - User Details */}
      <div className="flex items-center gap-4">
        {/* Avatar (Optional) */}
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

        <div>
          <div className="text-2xl font-semibold text-gray-800">
            {User.FirstName} {User.LastName}
          </div>
          <div className="text-gray-500 text-sm">@{data.Username}</div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Cover Letter */}
      <div className="text-gray-800">
        <div className="text-gray-600 font-semibold text-lg">Cover Letter:</div>
        <p className="mt-2 text-gray-700 text-sm">{data.message}</p>
      </div>

      {/* Portfolio & Project Links + Skills */}
      <div className="flex gap-6 mt-6">
        <div className="w-2/3">
          <div className="mb-3">
            <div className="text-gray-600 font-semibold text-sm">
              Portfolio Link:
            </div>
            <a
              href={data.publicProfileLink}
              target="_blank"
              className="text-blue-500 hover:underline break-all"
            >
              {data.publicProfileLink || "N/A"}
            </a>
          </div>

          <div>
            <div className="text-gray-600 font-semibold text-sm">
              Project Sample:
            </div>
            <a
              href={data.projectLink}
              target="_blank"
              className="text-blue-500 hover:underline break-all"
            >
              {data.projectLink || "N/A"}
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-1/3">
          <div className="text-gray-600 font-semibold text-sm">Skills:</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Accept & Reject Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 rounded-full button-accent">
          Accept
        </button>
        <button className="px-6 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">
          Reject
        </button>
      </div>
    </div>
  );
};

export default TeamReqListCard;
