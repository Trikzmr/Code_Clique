import React, { useEffect, useState } from 'react'
import TeamReqListCard from './TeamReqListCard';
import TeamListCard from './TeamListCard';

const Team = (props) => {

  const projectId = props.id;

  const [teamList, setTeamList] = useState([]);
  const [teamReqList, setTeamReqList] = useState([]);

  const appendteamList = (name) => {
    return(
      <TeamListCard data={name} projectId={projectId}/>
    )
  }

  const appendteamreqlist = (name) => {
    return(
      <TeamReqListCard data={name} projectId={projectId}/>
    )
  }

  const fetchprojectdata = async() => {
    try {
      const api = "http://localhost:3000/api/getpostdatabyid"
      const container = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: projectId}),
      }
      const response = await fetch(api, container);

      const data = await response.json();
      //data.Team.push(data.username)
      setTeamList(data.Team);
      //console.log(data.Team);     
    } catch (error) {
      console.log(error);
    }
    
  }

  const fetchrequestlist = async() =>{

    const api = "http://localhost:3000/api/byprojectid";
    const container = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId: projectId}),
    }
    try {
      const response = await fetch(api, container);
      const data = await response.json();
      setTeamReqList(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleonload = () =>{
    fetchprojectdata();
    fetchrequestlist();
  }


  useEffect(handleonload, []);
  return (
    <div className="TeamSection flex gap-8">
      <div className="teamMemberlist gap-8 w-[50%] p-6 bg-[#ffffff] rounded-2xl mb-4">
        <div className="text-3xl font-semibold mb-6 text-gray-800">
          Team Members
        </div>
        {teamList.map(appendteamList)}
      </div>
      <div className="TeamReqList w-[50%] p-6 bg-[#ffffff] rounded-2xl">
          <div className="text-3xl font-semibold mb-6 text-gray-800">
            Join Request
          </div>
        {teamReqList.map(appendteamreqlist)}
      </div>
    </div>    
  )
}

export default Team
