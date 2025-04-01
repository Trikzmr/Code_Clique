import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom';

const CreateTaskForm = () => {
    let projectid = useParams().id;
    
  
    let request = {
      ProjectId: "",
      Title: "",
      Description: "",
      ProjectOwner: "",
      StartDate: "",
      EndDate: "",
      Status: "Initiated"
    }

    const getprojectdetails = async() => {
        const container = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ _id: projectid }),
        }
        try{
            const res = await fetch('http://localhost:3000/api/getpostdatabyid', container);
            const data = await res.json();
            request.ProjectOwner = data.username;
        }
        catch(err){
            console.log(err);
        }
    }

    const onload = () => {
        getprojectdetails();
    }
  
    const senddata = async() =>{
      try{
        const res = await fetch('http://localhost:3000/api/AddTask', 
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
        alert("task is succesfully created");
      }
      catch(err){
        console.log(err);
      }
    }
    const getforminputs = () => {
        request.ProjectId = projectid;
        request.Title = document.getElementById("Title").value;
        request.Description = document.getElementById("message").value;
        request.StartDate = document.getElementById("startdate").value;
        request.EndDate = document.getElementById("enddate").value;  
    }
  
    const CreateTask =(e) => {
      e.preventDefault();
      getforminputs();
      senddata();
    }

    useEffect(onload, []);
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800  mb-6">
          Create Task
        </h1>
  
        <form className="space-y-4">
          {/* Title Input */}
            <input
                type="text"
                id="Title"
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
                id="enddate" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

  
          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="py-2 px-6 rounded-full button-accent" onClick={CreateTask}>
              Create
            </button>
          </div>
        </form>
      </div>
    )
}

export default CreateTaskForm
