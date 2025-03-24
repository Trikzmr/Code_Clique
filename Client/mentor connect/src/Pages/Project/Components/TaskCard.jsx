import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListMembers from '../../ProjectManagement/components/ecommerce/ListMembers';

const TaskCard = (props) => {
  const [sugbox, setsugbox] = useState(false);
  const [projectdata, setprojectdata] = useState({ Team: [] });
  const [selected, setselected] = useState([]);

  const data = props.data;
  const Username = data.Username;
  const projectId = props.id;
  console.log(data);
  const fetchprojectdata = async () => {
    try {
      const api = 'http://localhost:3000/api/getpostdatabyid';
      const container = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: projectId }),
      };
      const response = await fetch(api, container);
      const data = await response.json();
      setprojectdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSelection = (name) => {
    setselected((prevSelected) =>
      prevSelected.includes(name) ? prevSelected.filter((item) => item !== name) : [...prevSelected, name]
    );
  };

  const removeMember = (name) => {
    setselected((prevSelected) => prevSelected.filter((item) => item !== name));
  };

  const assignMembers = async() => {

    try {
      const api = 'http://localhost:3000/api/AssignMembers';
      const container = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: props.data._id, Members: selected }),
      };
      const response = await fetch(api, container);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setsugbox(false);
  };

  useEffect(() => {
    fetchprojectdata();
  }, []);

  return (
    <div className="TeamReqListCard w-full mb-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="top">
        <div className="text-2xl font-semibold text-gray-800">{data.Title}</div>
        <div className="text-gray-500 text-sm">@{Username}</div>
      </div>

      <hr className="mt-4" />
      <div className="status mt-3 ml-[80%] bg-blue-500 text-white w-[16%] px-4 py-1 text-center rounded-2xl">
        {data.Status}
      </div>

      <div className="descriptiontitle text-lg text-grey-800 font-semibold mt-2">Description: </div>
      <div className="gap-6 mt-0 text-gray-600">{data.Description}</div>
      <div className="time flex gap-6 mt-5 text-gray-600">
        <div>Start Date: {data.StartDate}</div>
        <div>End Date: {data.EndDate}</div>
      </div>

      <div className="descriptiontitle text-lg text-grey-800 font-semibold mt-2">
        Members
        <ListMembers data={data.Members} />
      </div>

      <hr className="my-6" />

      <div className="addmember">
        <div
          className="addmemberbutton button-accent w-40 h-10 flex items-center justify-center rounded-full cursor-pointer gap-2"
          onClick={() => setsugbox(true)}
        >
          <div className="addmemberbuttonleft text-3xl">+ </div>
          <div className="addmemberbuttonright">Add Members</div>
        </div>
      </div>

      {/* Modal with Blur Effect */}
      {sugbox && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <div className="text-2xl font-semibold text-gray-800">Add Members</div>

            <div className="mt-4">
              {projectdata.Team.map((name, index) => (
                <div key={index} className="flex justify-between items-center p-2 border-b">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(name)}
                      onChange={() => toggleSelection(name)}
                    />
                    {name}
                  </label>
                </div>
              ))}
            </div>

            {selected.length > 0 && (
              <div className="mt-4">
                <div className="text-lg font-semibold">Selected Members:</div>
                {selected.map((name, index) => (
                  <div key={index} className="flex justify-between p-2 bg-gray-100 rounded mt-1">
                    <span>{name}</span>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeMember(name)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {data._id}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setsugbox(false)}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={assignMembers}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
