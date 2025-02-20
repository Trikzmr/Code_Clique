import React, { useEffect, useState } from 'react'
import TeamReqListCard from './TeamReqListCard';
import TeamListCard from './TeamListCard';

const Team = (props) => {

  const projectId = props.id;

  const [teamList, setTeamList] = useState([]);
  const [teamReqList, setTeamReqList] = useState([]);

  const appendteamList = (name) => {
    return(
      <TeamListCard data={name}/>
    )
  }

  const appendteamreqlist = (name) => {
    return(
      <TeamReqListCard data={name}/>
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
      setTeamList(data.Team);
      
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
    <div className="TeamSection ">
      <div className="teamMemberlist gap-8 w-[50%] p-6 bg-[#ffffff] rounded-2xl mb-4">
        {teamList.map(appendteamList)}
      </div>
      <div className="TeamReqList w-[50%] p-6 bg-[#ffffff] rounded-2xl mt-4">
        {teamReqList.map(appendteamreqlist)}
      </div>
    </div>    
  )
}

export default Team
