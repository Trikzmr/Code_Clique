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
          <div className="flex items-center gap-4">
            <div>
              <div className="text-2xl font-semibold text-gray-800">
                {data.Title}
              </div>
              <div className="text-gray-500 text-sm">@{Username}</div>
            </div>
          </div>
    
          <hr className="my-4" />
    
          {/* Portfolio & Project Links + Skills */}
          <div className=" gap-6 mt-6">
            <div className="status">{data.Status}</div>
            {data.Description}
          </div>
    
          <hr className="my-6" />
    
          {/* Accept & Reject Buttons */}
          
        </div>
      );
}

export default TaskCard
