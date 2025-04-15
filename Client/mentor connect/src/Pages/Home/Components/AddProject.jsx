import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keyPoints, setKeyPoints] = useState([""]);
  const [keySkills, setKeySkills] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleKeyPointChange = (index, value) => {
    const newKeyPoints = [...keyPoints];
    newKeyPoints[index] = value;
    setKeyPoints(newKeyPoints);
  };

  const addKeyPointField = () => {
    setKeyPoints([...keyPoints, ""]);
  };

  const validateForm = () => {
    let errors = {};
    if (!title.trim()) errors.title = "Title is required";
    if (!description.trim()) errors.description = "Description is required";
    if (keyPoints.some(point => !point.trim())) errors.keyPoints = "All key points must be filled";
    if (!keySkills.trim()) errors.keySkills = "Key skills are required";
    if (!category) errors.category = "Category is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      let data = {
        Title: title,
        Description: description,
        Category: category,
        Keypoints: keyPoints,
        Keyskills: keySkills.split(",").map(skill => skill.trim()), // Converts comma-separated skills into an array
      };

      try {
        const response = await fetch("http://localhost:3000/api/AddProject", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        });
        alert("Project added successfully!");
      } catch (error) {
        alert("Error occurred while adding project:", error);
      }
    }
  };

  return (
    <div className="AddProjectPage flex justify-center items-center min-h-screen bg-gray-100">
      <div className="addprojectpageleft w-13/20 p-12 max-h-screen overflow-y-scroll ">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Post Your Ideas</h2>
          <form className="gap-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-7/10 p-2 border rounded-md mb-2" />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="mb-4 block text-gray-600">
              <label htmlFor="message" className="mb-2">Enter Description</label><br/>
              <textarea id="message" name="message" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter the description" className="w-7/10 p-2 border rounded-md mb-2 mt-2"></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

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
              {errors.keyPoints && <p className="text-red-500 text-sm">{errors.keyPoints}</p>}
            </div>

            <div className=" mb-4">
              <label className="block text-gray-600 w-7/10 mb-2">Key Skills</label>
              <input type="text" value={keySkills} onChange={(e) => setKeySkills(e.target.value)} placeholder="Separated by Commas" className="w-7/10 p-2 border rounded-md" />
              {errors.keySkills && <p className="text-red-500 text-sm mb-2">{errors.keySkills}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-7/10 p-2 border rounded-md mb-2">
                <option value="">Choose...</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>Block Chain</option>
                <option>AI/ML</option>
                <option>Cyber Security</option>
                <option>Data Science</option>
                <option>IoT</option>
                <option>Cloud Computing</option>
                <option>Game Development</option>
                <option>Robotics</option>
                <option>Other</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            </div>
            <div className="mb- 4 mt-6">
              <button type="submit" className="w-3/10 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition">Add Project</button>
            </div>
          </form>
        </div>
      </div>
      <div className="addprojectpageright w-7/20 min-h-screen">
              
      </div>
      
    </div>
  );
};

export default AddProject;
