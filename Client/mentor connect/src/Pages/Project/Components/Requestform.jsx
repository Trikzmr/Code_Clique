import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RequestForm = () => {

  let projectid = useParams().id;
  console.log(projectid);

  let request = {
    projectId: "",
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
    request.projectId = projectid;
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
        Join Project
      </h1>

      <form className="space-y-4">
        {/* Skills Input */}
        <input
          type="text"
          id="skills"
          placeholder="Skills separated by commas"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message Input */}
        <textarea
          id="message"
          rows="4"
          placeholder="Write a message to the project owner"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Profile Links */}
        <input
          type="text"
          id="profile"
          placeholder="LinkedIn or GitHub Profile Link"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          id="project"
          placeholder="Portfolio Link"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="py-2 px-6 rounded-full button-accent" onClick={Devjoin}>
            Join as Developer
          </button>
          <button className="py-2 px-6 rounded-full button-accent" onClick={Mentorjoin}>
            Join as Mentor
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;