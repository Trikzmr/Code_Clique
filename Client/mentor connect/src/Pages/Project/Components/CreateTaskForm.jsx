import React from 'react'
import {useParams} from 'react-router-dom';

const CreateTaskForm = () => {
    let projectid = useParams().id;
    console.log(projectid);
  
    let request = {
      ProjectId: "",
      skills: "",
      message: "",
      publicProfileLink: "",
      projectLink: "",
      role: "",
    }
  
    const senddata = async() =>{
      try{
        const res = fetch('http://localhost:3000/api/sendRequest', 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
            credentials: "include",
          }
        )
        const data = await res.json();
        console.log(data);
      }
      catch(err){
        console.log(err);
      }
    }
    const getforminputs = () => {
      request.message = document.getElementById("message").value;
      request.profile = document.getElementById("profile").value;
      request.publicProfileLink = document.getElementById("profile").value;
      request.projectLink = document.getElementById("project").value;
      request.ProjectId = projectid;
      const skillArray = document.getElementById("skills").value.split(",");
      request.skills = skillArray;
    }
  
    const Devjoin =(e) => {
      e.preventDefault();
      getforminputs();
      request.role = "Developer";
      senddata();
    }
    const Mentorjoin =(e) => {
      e.preventDefault();
      getforminputs();
      request.role = "Mentor";
      senddata();
    }
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800  mb-6">
          Create Task
        </h1>
  
        <form className="space-y-4">
          {/* Skills Input */}
            <input
                type="text"
                id="skills"
                placeholder="Task Title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Message Input */}
            <textarea
                id="message"
                rows="4"
                placeholder="Task Description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>


            <h4 className='text-lg font-semibold text-gray-800'>Start Date</h4>
            <input 
                type="date" 
                id="startdate" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <h4 className='text-lg font-semibold text-gray-800'>End Date</h4>
            <input 
                type="date" 
                id="endstart" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

  
          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="py-2 px-6 rounded-full button-accent" onClick={Devjoin}>
              Create
            </button>
          </div>
        </form>
      </div>
    )
}

export default CreateTaskForm
