import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Description: "",
    DateOfBirth: "",
    Address: "",
    Qualification: "",
    WebsiteLink:"",
    Organization: "",
    LinkedinLink: "",
    GithubUrl:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/UpdateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/profile");
      } else {
        alert(data.message || "Update profile failed try again!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="RegisterArea mx-auto w-[60%] my-16 mb-22">
      <div className="RegisterHeader mb-6">
        <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
        <p className="text-sm text-gray-600">Fill the details to complete your profile</p>
      </div>

      <div className="RegisterBox space-y-4">
        
        {Object.keys(formData).map((field) => (
          <div key={field} className="RegisterInputBox">
            <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
            <input
              type={field === "DateOfBirth" ? "date" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-green-500 focus:border-green-500"
            />
          </div>
        ))}

        <div className="RegisterButton">
          <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;