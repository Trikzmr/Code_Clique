import { Key } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTaskForm = () => {
    let projectid = useParams().id;
    const [Team, setTeam] = useState([]);
    const [keyPoints, setKeyPoints] = useState([""]);
    
    useEffect(()=>{
        const fetchprojectdata = async() =>{
            const api = "http://localhost:3000/api/getpostdatabyid";
            const container = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({_id:projectid}),
            }
            try {
                const res = await fetch(api, container);
                const data =await res.json();
                console.log(data.Team);
                setTeam(data.Team);
            } catch (error) {
                console.log(error)
            }
        }
        fetchprojectdata();
    }, [projectid]);
  
    let request = {
      ProjectId: "",
      Title: "",
      Description: "",
      ProjectOwner: "",
      StartDate: "",
      EndDate: "",
      Status: "Initiated",
      Members: [],
      Keypoints: [],
    }
    const handleKeyPointChange = (index, value) => {
      const newKeyPoints = [...keyPoints];
      newKeyPoints[index] = value;
      setKeyPoints(newKeyPoints);
    };

    const addKeyPointField = () => {
      setKeyPoints([...keyPoints, ""]);
    };
    const clearFormInputs = () => {
      document.getElementById("Title").value = "";
      document.getElementById("Description").value = "";
      document.getElementById("StartDate").value = "";
      document.getElementById("EndDate").value = "";
    };
  

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
        if (res.ok) {
          toast.success("✅ Task created successfully!");
          clearFormInputs(); // <-- Clear the form
        } else {
          toast.error("❌ Failed to create task.");
        }
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
        request.Members = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) => {
          return checkbox.nextSibling.innerText;
        });
    }
  
    const CreateTask =(e) => {
      e.preventDefault();
      getforminputs();
      request.Keypoints = keyPoints;
      senddata();
    }

    useEffect(onload, []);
    return (
      <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-md w-full">
        <h1 className="text-3xl font-bold text-gray-800  mb-6">
          Create Task
        </h1>
  
        <form className="w-full">
          <div className="formbody flex gap-4 mb-6 w-full">
            <div className="formleft space-y-4 w-1/2 ">
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
            </div>
            <div className="formright w-1/2">
              <div className="KeyPoints mb-4">
                <label className="block text-gray-600">Key Points</label>
                {keyPoints.map((point, index) => (
                  <input
                    key={index}
                    type="text"
                    value={point}
                    onChange={(e) => handleKeyPointChange(index, e.target.value)}
                    placeholder={`Key Point ${index + 1}`}
                    className="w-7/10 p-2 border rounded-md mt-2 mb-2"
                  />
                ))}<br/>
                <button onClick={addKeyPointField} type="button" className="mt-2 mb-2 w-2/10 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition">Add More</button>
                
              </div>
              <h4 className='text-lg font-semibold text-gray-800'>Assign Members</h4>
              {/* Team members list to select and add to Memebers array  */}
              <div className="teamMembers flex flex-col gap-4 mt-4">
                {Team.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg">
                    <input type="checkbox" id={`member-${index}`} className="w-5 h-5" />
                    <label htmlFor={`member-${index}`} className="text-lg font-semibold text-gray-800">{member}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          
          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="py-2 px-6 rounded-full button-accent" onClick={CreateTask}>
              Create
            </button>
          </div>
        </form>
        <ToastContainer position="top-center" autoClose={4000} />
      </div>
    )
}

export default CreateTaskForm
