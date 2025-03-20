import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TaskCard = (props) => {
  const [User, setUser] = useState({});
      const data = props.data;
  
      const Username = data.Username;
    console.log(data)
      const appendlist = (name) => {
        return <li>{name}</li>;
      };
    
      //console.log(data);
      const getuserdata = async () => {
        
        let api = "http://localhost:3000/api/GetUser";
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
          console.log(usr);
        } catch (error) {
          console.log(error);
        }
      };
    
      const onload = () => {
        getuserdata();
      };
    
      
    
    
      const handleAccept = () => {
        updatedevloperList();
        deletereqfromdb();
      }
    
      useEffect(onload, []);
    
      //console.log(data);
      return (
        <div className="TeamReqListCard w-full mb-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          {/* Top Section - User Details */}
          <div className="top">
              <div className="text-2xl font-semibold text-gray-800">
                {data.Title}
              </div>
              <div className="text-gray-500 text-sm">@{Username}</div>
            
          </div>
    
          <hr className="mt-4" />
          <div className="status mt-3 ml-[80%] bg-blue-500 text-white w-[16%] px-4 py-1 text-center rounded-2xl">
            {data.Status}
          </div>    
          {/* Portfolio & Project Links + Skills */}
          <div className="descriptiontitle text-lg text-grey-800 font-semibold mt-2">Description: </div>
          <div className=" gap-6 mt-0 text-gray-600">
            
            {data.Description}
          </div>
          <div className="time flex gap-6 mt-5 text-gray-600">
            <div>Start Date: {data.StartDate}</div>
            <div>End Date: {data.EndDate}</div>
          </div>

          <div className="descriptiontitle text-lg text-grey-800 font-semibold mt-2">Members </div>

    
          <hr className="my-6" />

          <div className="addmember">
            <div className="addmemberbutton button-accent w-40 h-10 flex items-center justify-center rounded-full cursor-pointer gap-2">
              <div className="addmemberbuttonleft text-3xl">+ </div>
              <div className="addmemberbuttonright">Add Members</div>
            </div>
          </div>
          
        </div>
      );
}

export default TaskCard
