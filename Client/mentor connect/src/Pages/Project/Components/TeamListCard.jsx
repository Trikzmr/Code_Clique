import React, {useState, useEffect} from 'react'

const TeamListCard = (props) => {
  const [User, setUser] = useState({
    Skills:[]
  });
    const data = props.data;

    const Username = data;
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
          {/* Avatar (Optional) */}
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
  
          <div>
            <div className="text-2xl font-semibold text-gray-800">
              {User.FirstName} {User.LastName}
            </div>
            <div className="text-gray-500 text-sm">@{Username}</div>
          </div>
        </div>
  
        <hr className="my-4" />
  
        {/* Portfolio & Project Links + Skills */}
        <div className="flex gap-6 mt-6">
          {/* Skills Section */}
          <div className="w-1/3">
            <div className="text-gray-600 font-semibold text-sm">Skills:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {User.Skills.map((skill, index) => (
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
        
      </div>
    );
}

export default TeamListCard
